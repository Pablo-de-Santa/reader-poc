import { spawn } from 'node:child_process';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Start the development server first. Set CHROME_BIN to use another Chromium binary.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(path.join(root, 'package.json'));
const ts = require('typescript');
const source = await readFile(path.join(root, 'src/app/features/reader-hero/sensor-contact.ts'), 'utf8');
const contactCode = ts.transpileModule(source, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
}).outputText.replace(/^import[^\n]+\n/gm, '').replace(/\bexport\s+/g, '');
const out = path.join(root, '../sensor-smoothness');
await mkdir(out, { recursive: true });
const port = 9234;
const chrome = spawn(process.env.CHROME_BIN ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe', [
  '--headless=new', '--disable-gpu-sandbox', '--enable-unsafe-swiftshader', '--no-first-run',
  '--no-default-browser-check', '--disable-background-timer-throttling',
  `--remote-debugging-port=${port}`, `--user-data-dir=${path.join(out, 'chrome')}`, 'about:blank',
], { windowsHide: true, stdio: 'ignore' });
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let ws;
let nextId = 0;
const pending = new Map();
const results = [];
let failed = false;
try {
  let targets;
  for (let i = 0; i < 80; i++) {
    try { targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); break; } catch {}
    await sleep(100);
  }
  if (!targets) throw new Error('Chrome remote debugging did not become ready');
  ws = new WebSocket(targets.find(target => target.type === 'page').webSocketDebuggerUrl);
  await new Promise((resolve, reject) => { ws.addEventListener('open', resolve, { once: true }); ws.addEventListener('error', reject, { once: true }); });
  ws.addEventListener('message', event => {
    const message = JSON.parse(event.data);
    const request = pending.get(message.id);
    if (!request) return;
    pending.delete(message.id);
    if (message.error) request.reject(new Error(JSON.stringify(message.error))); else request.resolve(message.result);
  });
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const id = ++nextId;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });
  const evaluate = async expression => {
    const response = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    if (response.exceptionDetails) throw new Error(response.exceptionDetails.exception?.description ?? JSON.stringify(response.exceptionDetails));
    return response.result.value;
  };
  await send('Page.enable');
  await send('Runtime.enable');
  for (const [width, height] of [[1440, 900], [390, 844], [600, 600]]) {
    await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: false });
    await send('Page.navigate', { url: `http://127.0.0.1:4200/?sensor-smoothness=${Date.now()}` });
    let ready = false;
    for (let attempt = 0; attempt < 500; attempt++) {
      await sleep(100);
      try {
        ready = await evaluate(`Boolean(window.ng && document.querySelector('app-reader-hero') && ng.getComponent(document.querySelector('app-reader-hero')).sensorFallRecording)`);
      } catch {}
      if (ready) break;
    }
    if (!ready) throw new Error(`Scene or physics did not load at ${width}x${height}`);
    console.log(`Checking ${width}x${height}`);
    await evaluate(`(() => {
      const component = ng.getComponent(document.querySelector('app-reader-hero'));
      cancelAnimationFrame(component.frameId);
      component.openingOrientationTimeline?.progress(1).kill();
      const Vector3 = component.centerSensor.position.constructor;
      const Quaternion = component.centerSensor.quaternion.constructor;
      ${contactCode}
      const sensors = [...component.sensorFieldItems, component.centerSensor];
      const history = [];
      const collider = component.sensorCollider;
      let previous, previousDelta, previousProjected;
      const metrics = { count: sensors.length, steps: 0, maxProjectedStep: 0, maxXYStep: 0, maxXYAcceleration: 0, maxPoseRepeatDifference: 0, maxReverseDifference: 0, intersections: 0, deepestIntersection: 0, worstStep: null, accelerationSpikes: [] };
      const pose = () => sensors.flatMap(sensor => [...sensor.position.toArray(), ...sensor.quaternion.toArray()]);
      const seek = (time, rockSeconds = 0) => {
        const progress = time / component.scrollTimeline.duration();
        component.scrollProgressCurrent = progress;
        component.scrollProgressTarget = progress;
        component.scrollTimeline.progress(progress);
        component.updateSensorField();
        component.syncSensorVisibility();
        component.applySensorRock(rockSeconds);
        component.resolveSensorContacts();
        component.syncProductCtaLayer(progress);
      };
      const overlaps = () => {
        const boxes = sensors.map(sensor => ({
          position: sensor.position,
          quaternion: sensor.quaternion,
          halfSize: collider.halfSize.clone().multiply(sensor.scale),
          offset: collider.offset.clone().multiply(sensor.scale),
          rotation: collider.rotation,
        }));
        for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
          const penetration = sensorPenetration(boxes[i], boxes[j]);
          if (!penetration || penetration.length() <= 1e-6) continue;
          metrics.intersections++;
          metrics.deepestIntersection = Math.max(metrics.deepestIntersection, penetration.length());
        }
      };
      window.sensorSmoothness = {
        metrics, history, seek, pose, overlaps,
        forward(start, end) {
          for (let step = start; step <= end; step++) {
            const time = 12.86 + step * 0.001;
            seek(time);
            const current = pose();
            component.scene.updateMatrixWorld(true);
            const projected = sensors.map(sensor => {
              const p = sensor.getWorldPosition(new Vector3()).project(component.camera);
              return [p.x * ${width} / 2, p.y * ${height} / 2];
            });
            if(previousProjected) for(let i=0;i<sensors.length;i++) {
              const distance=Math.hypot(projected[i][0]-previousProjected[i][0],projected[i][1]-previousProjected[i][1]);
              if(distance>metrics.maxProjectedStep) {metrics.maxProjectedStep=distance;metrics.worstProjected={time,sensor:i,distance,z:sensors[i].position.z,previousZ:previous[i*7+2],opacity:i<69?component.sensorFieldMaterialGroups[i][0].opacity:1};}
            }
            previousProjected=projected;
            history[step] = current;
            if (previous) {
              const delta = current.map((value, index) => value - previous[index]);
              for (let i = 0; i < sensors.length; i++) {
                const distance = Math.hypot(delta[i * 7], delta[i * 7 + 1]);
                if (distance > metrics.maxXYStep) {
                  metrics.maxXYStep = distance;
                  metrics.worstStep = { time, sensor: i, distance };
                }
                if (previousDelta) {
                  const acceleration = Math.hypot(delta[i * 7] - previousDelta[i * 7], delta[i * 7 + 1] - previousDelta[i * 7 + 1]);
                  metrics.maxXYAcceleration = Math.max(metrics.maxXYAcceleration, acceleration);
                  if (metrics.accelerationSpikes.length < 10 || acceleration > metrics.accelerationSpikes.at(-1).acceleration) {
                    metrics.accelerationSpikes.push({ time, sensor: i, acceleration, delta: [delta[i * 7], delta[i * 7 + 1]], previousDelta: [previousDelta[i * 7], previousDelta[i * 7 + 1]] });
                    metrics.accelerationSpikes.sort((a, b) => b.acceleration - a.acceleration);
                    metrics.accelerationSpikes.length = Math.min(metrics.accelerationSpikes.length, 10);
                  }
                }
              }
              previousDelta = delta;
            }
            previous = current;
            overlaps();
            metrics.steps++;
          }
          return metrics;
        },
        reverse(start, end) {
          for (let step = start; step >= end; step--) {
            seek(12.86 + step * 0.001);
            const current = pose();
            const expected = history[step];
            for (let i = 0; i < current.length; i++) metrics.maxReverseDifference = Math.max(metrics.maxReverseDifference, Math.abs(current[i] - expected[i]));
          }
          return metrics;
        },
        rocking() {
          seek(13.88, 0);
          const first = pose();
          let maxCenterMotion = 0, maxAngleChange = 0;
          for (let frame = 0; frame < 360; frame++) {
            seek(13.88, frame / 30);
            const current = pose();
            for (let i = 0; i < sensors.length; i++) {
              for (let axis = 0; axis < 3; axis++) maxCenterMotion = Math.max(maxCenterMotion, Math.abs(current[i*7+axis]-first[i*7+axis]));
              for (let axis = 3; axis < 7; axis++) maxAngleChange = Math.max(maxAngleChange, Math.abs(current[i*7+axis]-first[i*7+axis]));
            }
            overlaps();
          }
          // Scrolling through the dwell must also keep every settled center fixed.
          for (const time of [13.87,13.9,14,14.059]) {
            seek(time, 2);
            const current=pose();
            for(let i=0;i<sensors.length;i++)for(let axis=0;axis<3;axis++)maxCenterMotion=Math.max(maxCenterMotion,Math.abs(current[i*7+axis]-first[i*7+axis]));
            overlaps();
          }
          if(maxCenterMotion>1e-6 || maxAngleChange<0.01 || metrics.intersections)throw new Error('Pinned rocking regression: '+JSON.stringify({maxCenterMotion,maxAngleChange,intersections:metrics.intersections}));
          return {maxCenterMotion,maxAngleChange};
        },
        repeated() {
          const originalNow = Date.now;
          let clock = originalNow();
          try {
            Date.now = () => clock;
            for (const time of [12.9, 13.05, 13.25, 13.5, 13.75, 13.88]) {
              seek(time);
              const first = pose();
              for (let repeat = 0; repeat < 20; repeat++) {
                clock += 16.667;
                seek(time);
                const current = pose();
                for (let i = 0; i < current.length; i++) metrics.maxPoseRepeatDifference = Math.max(metrics.maxPoseRepeatDifference, Math.abs(current[i] - first[i]));
                overlaps();
              }
            }
          } finally { Date.now = originalNow; }
          return metrics;
        },
      };
      return true;
    })()`);
    for (let start = 0; start <= 1040; start += 100) {
      await evaluate(`sensorSmoothness.forward(${start}, ${Math.min(start + 99, 1040)})`);
    }
    for (let start = 1040; start >= 0; start -= 100) {
      await evaluate(`sensorSmoothness.reverse(${start}, ${Math.max(start - 99, 0)})`);
    }
    console.log('anchored rocking',width,await evaluate('sensorSmoothness.rocking()'));
    const metrics = await evaluate('sensorSmoothness.repeated()');
    const extras = await evaluate(`(()=>{
      const c=ng.getComponent(document.querySelector('app-reader-hero'));
      const stages=[];
      for(const time of [13.25,13.55,13.8,14.06,14.061,14.97]) {
        sensorSmoothness.seek(time);
        stages.push({time,stars:c.sensorMessage.visible,starOpacity:c.sensorMessageMaterial.opacity,field:c.sensorField.visible,center:c.centerSensor.visible});
        sensorSmoothness.overlaps();
      }
      if(!stages[0].stars || stages[0].starOpacity<0.5 || stages[2].stars || stages[5].field || stages[5].center) throw new Error('Star or final sensor visibility regression');
      sensorSmoothness.seek(8.4);
      const style=getComputedStyle(document.querySelector('.device-screen'));
      c.scene.updateMatrixWorld(true);c.renderer.render(c.scene,c.camera);
      if(parseFloat(style.borderTopLeftRadius)<8 || style.overflow!=='hidden')throw new Error('Display is not rounded and clipped');
      return {stages,screenRadius:style.borderTopLeftRadius,clip:style.clipPath};
    })()`);console.log('transition checks',width,JSON.stringify(extras));
    const screenshot=await send('Page.captureScreenshot',{format:'png'});await writeFile(path.join(out,`${width}-display.png`),Buffer.from(screenshot.data,'base64'));

    const result = { width, height, ...metrics };
    results.push(result);
    console.log(JSON.stringify(result));
    if (metrics.intersections || metrics.maxPoseRepeatDifference > 1e-6 || metrics.maxReverseDifference > 1e-5 || metrics.maxXYStep > 0.02 || metrics.maxProjectedStep > 4) failed = true;
  }
  await writeFile(path.join(out, 'results.json'), JSON.stringify(results, null, 2) + '\n');
  await send('Browser.close').catch(() => {});
} finally {
  ws?.close();
  chrome.kill();
}
if (failed) process.exitCode = 1;
