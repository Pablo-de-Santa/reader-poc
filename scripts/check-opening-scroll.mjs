import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Start the development server first. Set CHROME_BIN to use another Chromium binary.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, '../opening-scroll-check');
await mkdir(out, { recursive: true });
const port = 9235;
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
  const state = () => evaluate(`(()=>{const c=${component};return {locked:c.openingScrollLocked,y:scrollY,progress:c.scrollProgressCurrent};})()`);
  const assertLocked = async label => {
    await sleep(100);
    const s=await state();
    if(!s.locked || s.y!==0 || s.progress!==0)throw new Error(label+': '+JSON.stringify(s));
  };
  const wheel = () => send('Input.dispatchMouseEvent',{type:'mouseWheel',x:180,y:300,deltaX:0,deltaY:240});
  for(const [width,height] of [[1440,900],[390,844]]) {
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});
    await send('Page.navigate',{url:'http://127.0.0.1:4200/?opening-check='+Date.now()});
    await waitUntil(`(()=>{if(!window.ng || !document.querySelector('app-reader-hero'))return false;const c=${component};if(!c.openingScrollLocked || !c.openingOrientationTimeline)return false;c.openingOrientationTimeline.pause();return true;})()`, 'Opening animation did not start locked');
    await wheel();
    await assertLocked('Wheel during opening');
    await send('Input.dispatchKeyEvent',{type:'keyDown',key:'PageDown',code:'PageDown',windowsVirtualKeyCode:34});
    await send('Input.dispatchKeyEvent',{type:'keyUp',key:'PageDown',code:'PageDown',windowsVirtualKeyCode:34});
    await assertLocked('Keyboard during opening');
    const touchCancelled=await evaluate(`(()=>{const e=new Event('touchmove',{bubbles:true,cancelable:true});document.querySelector('canvas').dispatchEvent(e);return e.defaultPrevented;})()`);
    if(!touchCancelled)throw new Error('Touch was not blocked');
    await send('Emulation.setTouchEmulationEnabled',{enabled:true});
    await send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:180,y:400}]});
    await send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:180,y:180}]});
    await send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
    await assertLocked('Touch during opening');
    await send('Emulation.setTouchEmulationEnabled',{enabled:false});
    await evaluate('window.scrollTo(0,500)');
    await assertLocked('Programmatic or scrollbar scrolling during opening');
    await evaluate(`void ${component}.openingOrientationTimeline.resume()`);
    await waitUntil(`!${component}.openingScrollLocked`, 'Completion did not unlock scrolling');
    const settled=await evaluate(`(()=>{const c=${component};return c.topRotationRig.position.distanceTo(c.getInitialModelPosition())<0.00001;})()`);
    if(!settled)throw new Error('Scrolling unlocked before reader settled');
    await wheel();
    await waitUntil('scrollY>0', 'Wheel did not work after opening');
    console.log(width+'x'+height+': wheel, keyboard, touch and scrollbar guard passed; completion unlocked scrolling');
  }
  await evaluate(`(()=>{const c=${component};c.resetScrollPosition();c.runOpeningOrientationAnimation();c.openingOrientationTimeline.pause();})()`);
  await send('Emulation.setDeviceMetricsOverride',{width:600,height:600,deviceScaleFactor:1,mobile:false});
  await waitUntil(`!${component}.openingScrollLocked`, 'Resize left scrolling locked');
  await wheel();
  await waitUntil('scrollY>0', 'Scrolling did not resume after resize');
  await evaluate(`(()=>{const c=${component};c.resetScrollPosition();c.runOpeningOrientationAnimation();c.openingOrientationTimeline.pause();c.ngOnDestroy();})()`);
  const clean=await evaluate(`(()=>{const e=new WheelEvent('wheel',{bubbles:true,cancelable:true,deltaY:120});window.dispatchEvent(e);return !${component}.openingScrollLocked && !e.defaultPrevented;})()`);
  if(!clean)throw new Error('Destroy left opening listeners active');
  console.log('Resize interruption and component cleanup passed');
  await send('Browser.close').catch(()=>{});
} finally {
  ws?.close();
  chrome.kill();
}
