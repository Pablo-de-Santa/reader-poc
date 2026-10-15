import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Start the development server first. Set CHROME_BIN to use another Chromium binary.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, '../artifacts/demo-check');
await mkdir(out, { recursive: true });
const port = 9245;
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

  for (const [width,height] of [[1440,900],[390,844]]) {
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});
    await send('Page.navigate',{url:'http://127.0.0.1:4200/demo'});
    let started = false;
    for(let i=0;i<180;i++) {
      await sleep(250);
      if(await evaluate('scrollY > 15')) { started=true; break; }
    }
    if(!started) throw new Error('Demo failed to start');
    const text=await evaluate("document.querySelector('app-reader-hero .reader-headline').innerText");
    if(!text.includes('Healthier Lives.'))throw new Error('Demo headline incorrect');
    await send('Input.dispatchMouseEvent',{type:'mouseWheel',x:180,y:300,deltaX:0,deltaY:240});
    await sleep(1200);
    const y=await evaluate('scrollY');
    await sleep(1000);
    if(await evaluate('scrollY')!==y)throw new Error('Demo did not pause for manual input');
    await sleep(19000);
    const reset=await evaluate('scrollY');
    if(reset>100)throw new Error('Idle reset failed: '+reset);
    await sleep(3000);
    if(await evaluate('scrollY')<=reset)throw new Error('Demo did not resume');
    console.log(width+'x'+height+': headline, autoscroll, manual takeover, idle blackout/reset and resume passed');
  }
  await send('Browser.close').catch(()=>{});
} finally {
  ws?.close();
  chrome.kill();
}
