import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Start the development server first. Set CHROME_BIN to use another Chromium binary.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, '../artifacts/initial-reveal-check');
await mkdir(out, { recursive: true });
const port = 9240;
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
  const component = "ng.getComponent(document.querySelector('app-reader-hero'))";
  const waitUntil = async (expression, description) => {
    for (let attempt=0;attempt<400;attempt++) {
      try { if(await evaluate(expression)) return; } catch {}
      await sleep(25);
    }
    throw new Error(description);
  };
  await send('Page.addScriptToEvaluateOnNewDocument', {source: `
    const originalFetch = window.fetch.bind(window);
    window.fetch = async (...args) => {
      const url = String(args[0]?.url ?? args[0]);
      if ((/\\.(gltf|glb)(?:$|[?#])/).test(url)) await new Promise(resolve => setTimeout(resolve, 1800));
      return originalFetch(...args);
    };
  `});
  for (const [width,height] of [[1440,900],[390,844]]) {
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});
    await send('Page.navigate',{url:'http://127.0.0.1:4200/?initial-reveal='+Date.now()});
    await waitUntil(`(()=>{const host=document.querySelector('app-reader-hero'); if(!window.ng || !host)return false;const c=ng.getComponent(host);return c.sceneReady && !c.readerAssetReady;})()`, 'Did not observe delayed model loading');
    const initial = await evaluate(`(()=>{
      const visible = [...document.querySelectorAll('.phrase')].filter(el => getComputedStyle(el).visibility !== 'hidden' && Number(getComputedStyle(el).opacity)>0);
      return {phrases:visible.map(el=>el.textContent.trim()), opacity:getComputedStyle(document.querySelector('.reader-canvas')).opacity};
    })()`);
    if(initial.phrases.length !== 1 || initial.phrases[0] !== 'CRP' || initial.opacity !== '0') throw new Error(JSON.stringify(initial));
    await waitUntil(`${component}.readerRevealed && getComputedStyle(document.querySelector('.reader-canvas')).opacity === '1'`, 'Reader was not revealed');
    const ready = await evaluate(`(()=>{const c=${component};return !!c.model.getObjectByName('fusion_reader_model') && !!c.openingOrientationTimeline;})()`);
    if(!ready) throw new Error('Reveal happened without the loaded reader and opening animation');
    const continuity = await evaluate(`new Promise(resolve => {
      const started = performance.now();
      let minimumOpacity = 1;
      let minimumCanvasOpacity = 1;
      function sample() {
        const nodes = [...document.querySelectorAll('.phrase')];
        const strongest = Math.max(...nodes.map(el => getComputedStyle(el).visibility === 'hidden' ? 0 : Number(getComputedStyle(el).opacity)));
        minimumOpacity = Math.min(minimumOpacity, strongest);
        minimumCanvasOpacity = Math.min(minimumCanvasOpacity, Number(getComputedStyle(document.querySelector('.reader-canvas')).opacity));
        if (performance.now() - started < 1800) requestAnimationFrame(sample);
        else resolve({minimumOpacity, minimumCanvasOpacity});
      }
      sample();
    })`);
    if(continuity.minimumOpacity < 0.99 || continuity.minimumCanvasOpacity < 0.99) throw new Error('Opening disappeared: '+JSON.stringify(continuity));
    console.log('Initial handoff visibility verified', continuity);

    console.log(width+'x'+height+': one initial phrase, hidden empty canvas, loaded reader fades in with opening animation');
  }
  await send('Browser.close').catch(()=>{});
} finally {
  ws?.close();
  chrome.kill();
}
