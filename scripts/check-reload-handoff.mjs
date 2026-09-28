import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Start the development server first. Set CHROME_BIN to use another Chromium binary.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, '../artifacts/reload-handoff-check');
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
  await send('Page.addScriptToEvaluateOnNewDocument',{source:`
    const idle=window.requestIdleCallback.bind(window);
    window.requestIdleCallback=(cb,options)=>idle(d=>setTimeout(()=>cb(d),700),options);
    window.handoffSamples=[];
    function sample(){ requestAnimationFrame(sample);
      const hero=document.querySelector('.reader-hero');
      if(hero && hero.querySelector('.diagnostic-phrases') && hero.querySelector('.phrase:first-child')){
        const selectors=['.reader-headline','.phrase:first-child','.diagnostic-phrases'];
        const bounds=selectors.map(selector=>{const el=hero.querySelector(selector),r=el.getBoundingClientRect(),s=getComputedStyle(el);return {x:r.x,y:r.y,width:r.width,height:r.height,font:s.fontSize};});
        window.handoffSamples.push({preview:hero.classList.contains('intro-preview'),background:getComputedStyle(hero).backgroundColor,bounds});
      }

    }
    requestAnimationFrame(sample);
  `});
  for(const [width,height] of [[2550,1256],[1440,900],[390,844],[600,600]]) {
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});
    for(let reload=0;reload<3;reload++){
      await send('Page.navigate',{url:'about:blank'});
      await sleep(100);
      await send('Page.navigate',{url:'http://127.0.0.1:4200/?handoff='+Date.now()});
      let ready=false;
      for(let i=0;i<200;i++){
        try{ready=await evaluate(`!!window.ng && !!document.querySelector('app-reader-hero') && ng.getComponent(document.querySelector('app-reader-hero')).readerRevealed`);}catch{}
        if(ready)break;await sleep(50);
      }
      if(!ready)throw new Error('No reader reveal');
      await sleep(100);
      const samples=await evaluate('window.handoffSamples');
      const preview=samples.find(s=>s.preview),actual=samples.filter(s=>!s.preview);
      if(!preview||!actual.length)throw new Error('Missing handoff stages: '+JSON.stringify({width,preview:!!preview,actual:actual.length}));
      for(const frame of actual){
        if(frame.background!==preview.background)throw new Error('Background changed');
        frame.bounds.forEach((rect,index)=>{
          for(const key of ['x','y','width','height'])if(Math.abs(rect[key]-preview.bounds[index][key])>0.6)throw new Error(width+'px shifted '+key+': '+JSON.stringify({preview:preview.bounds,actual:frame.bounds}));
          if(rect.font!==preview.bounds[index].font)throw new Error('Font changed');
        });
      }
      console.log(width+'x'+height+' reload '+(reload+1)+': identical initial text bounds, font sizes and background through handoff');
    }
  }
  await send('Browser.close').catch(()=>{});
} finally { ws?.close(); chrome.kill(); }
