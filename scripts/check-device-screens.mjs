import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Run npm start first. Chrome geolocation is simulated; no real location is requested.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, '../artifacts/device-screens');
await mkdir(out, { recursive: true });
const port = 9236;
const origin = 'http://127.0.0.1:4200';
const chrome = spawn(process.env.CHROME_BIN ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe', [
  '--headless=new', '--disable-gpu-sandbox', '--enable-unsafe-swiftshader', '--no-first-run',
  '--no-default-browser-check', '--disable-background-timer-throttling',
  `--remote-debugging-port=${port}`, `--user-data-dir=${path.join(out, 'chrome')}`, 'about:blank',
], { windowsHide: true, stdio: 'ignore' });
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let ws;
let nextId = 0;
const pending = new Map();
try {
  let targets;
  for (let i = 0; i < 100; i++) {
    try { targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); break; } catch {}
    await sleep(100);
  }
  if (!targets) throw new Error('Chrome did not start');
  ws = new WebSocket(targets.find(target => target.type === 'page').webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true });
    ws.addEventListener('error', reject, { once: true });
  });
  ws.addEventListener('message', event => {
    const message = JSON.parse(event.data);
    const request = pending.get(message.id);
    if (!request) return;
    pending.delete(message.id);
    clearTimeout(request.timeout);
    if (message.error) request.reject(new Error(JSON.stringify(message.error)));
    else request.resolve(message.result);
  });
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const id = ++nextId;
    const timeout = setTimeout(() => { pending.delete(id); reject(new Error(`${method} timed out`)); }, 30_000);
    pending.set(id, { resolve, reject, timeout });
    ws.send(JSON.stringify({ id, method, params }));
  });
  const evaluate = async expression => {
    const response = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    if (response.exceptionDetails) throw new Error(response.exceptionDetails.exception?.description ?? 'Browser evaluation failed');
    return response.result.value;
  };
  const waitFor = async (expression, description) => {
    for (let i = 0; i < 160; i++) {
      try { if (await evaluate(expression)) return; } catch {}
      await sleep(100);
    }
    const diagnostic = await evaluate(`({ url: location.href, text: document.body.innerText.slice(0, 600),
      angular: typeof ng, theme: document.querySelector('.device-screen')?.dataset.screenTheme,
      state: typeof ng !== 'undefined' && document.querySelector('app-reader-hero')
        ? ng.getComponent(document.querySelector('app-reader-hero'))?.screenTheme?.daylight() : null })`);
    throw new Error(description + ': ' + JSON.stringify(diagnostic));
  };
  const capture = async name => {
    const screenshot = await send('Page.captureScreenshot', { format: 'png' });
    await writeFile(path.join(out, name + '.png'), Buffer.from(screenshot.data, 'base64'));
  };
  const component = "ng.getComponent(document.querySelector('app-reader-hero'))";
  await send('Page.enable');
  await send('Runtime.enable');
  const results = [];

  for (const [width, height] of [[1440, 900], [390, 844]]) {
    for (const theme of ['light', 'dark']) {
      // Put the equatorial observer at local solar noon or midnight at the current instant.
      const utcHour = new Date().getUTCHours() + new Date().getUTCMinutes() / 60;
      const longitude = ((12 - utcHour) * 15 + (theme === 'dark' ? 180 : 0) + 540) % 360 - 180;
      await send('Browser.setPermission', { permission: { name: 'geolocation' }, setting: 'granted', origin });
      await send('Emulation.setGeolocationOverride', { latitude: 0, longitude, accuracy: 100 });
      await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: false });
      await send('Page.navigate', { url: origin + '/?screen-check=' + Date.now() });
      await waitFor(`${component}?.screenTheme.daylight().source === 'sun' && !!${component}?.optimizedCartridgeTemplate`, 'Location or scene did not become ready');
      await waitFor(`document.querySelector('.device-screen')?.dataset.screenTheme === '${theme}'`, 'Automatic theme did not reach the DOM');
      await evaluate(`(() => {
        const c = ${component};
        cancelAnimationFrame(c.frameId);
        c.openingOrientationTimeline?.progress(1).kill();
        c.phraseTimeline?.pause(1);
        window.seekScreen = time => {
          const progress = time / c.scrollTimeline.duration();
          c.scrollProgressCurrent = c.scrollProgressTarget = progress;
          c.scrollTimeline.progress(progress);
          c.syncSensorVisibility(); c.syncProductCtaLayer(progress);
          c.renderer.render(c.scene, c.camera);
        };
        seekScreen(0);
      })()`);
      if (theme === 'light') {
        const badge = await evaluate(`(() => {
          const sample = time => {
            seekScreen(time);
            const rect = document.querySelector('.bluetooth-core').getBoundingClientRect();
            const center = { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
            for (const ring of document.querySelectorAll('.bluetooth-signal > span:not(.bluetooth-core)')) {
              const bounds = ring.getBoundingClientRect();
              if (Math.hypot(bounds.x + bounds.width / 2 - center.x, bounds.y + bounds.height / 2 - center.y) > 0.1)
                throw new Error('Bluetooth pulse ring drifted from the badge');
            }
            return { ...center, width: rect.width, height: rect.height };
          };
          const slow = Array.from({ length: 90 }, (_, index) => sample(0.95 + index * 0.01));
          const fast = [0.95, 1.08, 1.51, 1.79, 1.2, 1.83].map(sample);
          const first = slow[0];
          for (const bounds of [...slow, ...fast]) {
            if (Object.keys(first).some(key => Math.abs(first[key] - bounds[key]) > 0.1))
              throw new Error('Bluetooth badge moved or resized with scroll speed');
          }
          seekScreen(0);
          return first;
        })()`);
        console.log(width + 'px Bluetooth badge remains fixed across slow, fast and reverse scroll steps', badge);
        await capture(`${width}-headline`);
        await evaluate('seekScreen(1.3)');
        await capture(`${width}-bluetooth`);
      }
      const outside = await evaluate(`({ body: getComputedStyle(document.body).backgroundColor,
        hero: getComputedStyle(document.querySelector('.reader-hero')).backgroundColor,
        shell: getComputedStyle(document.querySelector('.device-shell')).borderTopColor })`);
      for (const [name, time] of [['phone', 4], ['tablet', 5.8], ['result', 7.08], ['laptop', 8.05]]) {
        await evaluate(`seekScreen(${time})`);
        const palette = await evaluate(`(() => {
          const panel = [...document.querySelectorAll('.screen-panel')].find(el => +getComputedStyle(el).opacity > 0.99);
          if (!panel) throw new Error('No visible app panel');
          const header = panel.querySelector('.app-header h3');
          return { background: getComputedStyle(panel).backgroundColor, text: getComputedStyle(header).color };
        })()`);
        const expected = theme === 'dark' ? 'rgb(24, 21, 32)' : 'rgb(238, 232, 239)';
        if (palette.background !== expected) throw new Error(`${theme} ${name} has wrong background: ${JSON.stringify(palette)}`);
        if (palette.text !== (theme === 'dark' ? 'rgb(246, 239, 255)' : 'rgb(27, 23, 32)')) throw new Error('Heading contrast palette was not applied');
        await capture(`${width}-${theme}-${name}`);
      }
      await evaluate(`(() => {
        const times = [8.5, 8.58, 8.69, 8.8, 8.88, 8.9, 8.94];
        const opacityAt = time => {
          seekScreen(time);
          return +getComputedStyle(document.querySelector('.device-shell'), '::after').opacity;
        };
        const forward = times.map(opacityAt);
        if (forward[0] !== 1 || forward.slice(4).some(value => value > 0.001))
          throw new Error('Device frame did not finish fading before the layout handoff');
        if (!(forward[1] < 1 && forward[1] > forward[2] && forward[2] > forward[3] && forward[3] > 0))
          throw new Error('Device frame opacity jumps instead of fading');
        for (let index = times.length - 1; index >= 0; index--) {
          if (Math.abs(opacityAt(times[index]) - forward[index]) > 0.001)
            throw new Error('Device frame fade differs when scrolling backward');
        }
      })()`);
      results.push({ width, theme, outside });
      console.log(`${width}px ${theme}: automatic location theme reached all app screens`);
    }
    const pair = results.filter(result => result.width === width);
    if (JSON.stringify(pair[0].outside) !== JSON.stringify(pair[1].outside)) throw new Error('Theme changed the outer website or device frame');
  }
  await send('Browser.setPermission', { permission: { name: 'geolocation' }, setting: 'denied', origin });
  await send('Page.navigate', { url: origin + '/?location-denied=' + Date.now() });
  await waitFor(`${component}?.screenTheme.daylight().source === 'seasonal'`, 'Denied permission did not retain seasonal fallback');
  console.log('Denied location retains seasonal mode; outer site and device frames stay unchanged');
  await writeFile(path.join(out, 'results.json'), JSON.stringify(results, null, 2) + '\n');
  await send('Browser.close').catch(() => {});
} finally {
  for (const request of pending.values()) clearTimeout(request.timeout);
  ws?.close();
  chrome.kill();
}
