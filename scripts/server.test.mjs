import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { once } from 'node:events';
import { get } from 'node:http';
import { createStaticServer } from '../server.mjs';

test('serves compressed assets, real robots rules, and safe SPA fallbacks', async () => {
  const root = await mkdtemp(join(tmpdir(), 'reader-server-test-'));
  let server;
  try {
    await writeFile(join(root, 'index.html'), '<h1>Reader</h1>');
    await writeFile(join(root, 'robots.txt'), 'User-agent: *\nAllow: /\n');
    await writeFile(join(root, 'main-ABCDEFGH.js'), 'console.log("reader");');
    await writeFile(join(root, 'reader.glb'), Buffer.from([103,108,84,70,0,1,2,3]));
    server = createStaticServer(root).listen(0, '127.0.0.1');
    await once(server, 'listening');
    const base = `http://127.0.0.1:${server.address().port}`;
    const robots = await fetch(base + '/robots.txt');
    assert.match(robots.headers.get('content-type'), /text\/plain/);
    assert.match(await robots.text(), /User-agent/);
    const script = await fetch(base + '/main-ABCDEFGH.js', { headers: { 'Accept-Encoding': 'gzip' } });
    assert.equal(script.headers.get('content-encoding'), 'gzip');
    assert.match(script.headers.get('cache-control'), /immutable/);
    assert.equal(await script.text(), 'console.log("reader");');
    const model = await fetch(base + '/reader.glb', { headers: { 'Accept-Encoding': 'gzip' } });
    assert.equal(model.headers.get('content-encoding'), 'gzip');
    assert.deepEqual(Buffer.from(await model.arrayBuffer()), Buffer.from([103,108,84,70,0,1,2,3]));
    const plain = await fetch(base + '/main-ABCDEFGH.js', { headers: { 'Accept-Encoding': 'gzip;q=0' } });
    assert.equal(plain.headers.get('content-encoding'), null);
    assert.equal((await fetch(base + '/missing.js')).status, 404);
    assert.equal((await fetch(base + '/llms.txt')).status, 404);
    assert.equal(await (await fetch(base + '/reader')).text(), '<h1>Reader</h1>');
    const headersForHost = host => new Promise((resolve, reject) => {
      get(base, { headers: { Host: host } }, response => {
        response.resume();
        response.on('end', () => resolve(response.headers));
      }).on('error', reject);
    });
    assert.equal((await headersForHost('gsap.test.bio-stream.ca'))['x-robots-tag'], 'noindex');
    assert.equal((await headersForHost('gsap.bio-stream.ca'))['x-robots-tag'], undefined);
    await rm(join(root, 'robots.txt'));
    assert.equal((await fetch(base + '/robots.txt')).status, 404);
  } finally {
    if (server) await new Promise(resolve => server.close(resolve));
    await rm(root, { recursive: true, force: true });
  }
});
