import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';

const contentTypes = {
  '.css': 'text/css; charset=utf-8', '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp',
  '.bin': 'application/octet-stream', '.gltf': 'model/gltf+json', '.glb': 'model/gltf-binary',
};
const compressible = new Set(['.html', '.js', '.css', '.json', '.txt', '.svg', '.gltf', '.glb', '.bin']);
const stagingHosts = new Set(['gsap.test.bio-stream.ca', 'gsap.dev.bio-stream.ca']);

export function createStaticServer(root) {
  const base = resolve(root);
  return createServer((request, response) => {
    let pathname;
    try { pathname = decodeURIComponent(new URL(request.url ?? '/', 'http://localhost').pathname); }
    catch { response.writeHead(400).end(); return; }
    let assetPath = resolve(base, `.${pathname}`);
    if (!assetPath.startsWith(base + sep) && assetPath !== base) {
      response.writeHead(403).end(); return;
    }
    if (!existsSync(assetPath) || !statSync(assetPath).isFile()) {
      // Client routes get the app shell; missing assets and robots files must not.
      if (extname(pathname)) { response.writeHead(404).end(); return; }
      assetPath = join(base, 'index.html');
    }
    if (!existsSync(assetPath)) { response.writeHead(404).end(); return; }
    const extension = extname(assetPath);
    const acceptsGzip = String(request.headers['accept-encoding'] ?? '').split(',').some(value => {
      const [encoding, ...parameters] = value.trim().split(';');
      return encoding === 'gzip' && !parameters.some(parameter => /^\s*q=0(?:\.0*)?\s*$/.test(parameter));
    });
    const gzip = compressible.has(extension) && acceptsGzip;
    const hashed = /-[A-Za-z0-9_-]{8,}\.(?:js|css)$/.test(assetPath);
    const hostname = String(request.headers.host ?? '').split(':')[0].toLowerCase();
    response.writeHead(200, {
      'Content-Type': contentTypes[extension] ?? 'application/octet-stream',
      'Cache-Control': hashed ? 'public, max-age=31536000, immutable' : 'no-cache',
      'Vary': 'Accept-Encoding',
      ...(gzip ? { 'Content-Encoding': 'gzip' } : {}),
      ...(stagingHosts.has(hostname) || process.env.NOINDEX === 'true' ? { 'X-Robots-Tag': 'noindex' } : {}),
    });
    if (request.method === 'HEAD') { response.end(); return; }
    const onError = error => { if (error) response.destroy(error); };
    if (gzip) pipeline(createReadStream(assetPath), createGzip(), response, onError);
    else pipeline(createReadStream(assetPath), response, onError);
  });
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.PORT ?? 4000);
  const root = join(fileURLToPath(new URL('.', import.meta.url)), 'public');
  createStaticServer(root).listen(port, '0.0.0.0', () => {
    console.log(`Whiskey static server listening on ${port}`);
  });
}
