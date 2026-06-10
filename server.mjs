import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const port = Number(process.env.PORT ?? 4000);
const root = join(fileURLToPath(new URL('.', import.meta.url)), 'public');

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.bin': 'application/octet-stream',
  '.gltf': 'model/gltf+json',
  '.glb': 'model/gltf-binary',
};

function resolveAsset(url) {
  const requestedPath = decodeURIComponent(new URL(url, `http://localhost:${port}`).pathname);
  const normalized = normalize(requestedPath).replace(/^(\.\.[/\\])+/, '');
  const assetPath = join(root, normalized);

  if (existsSync(assetPath) && statSync(assetPath).isFile()) {
    return assetPath;
  }

  return join(root, 'index.html');
}

createServer((request, response) => {
  const assetPath = resolveAsset(request.url ?? '/');
  const contentType = contentTypes[extname(assetPath)] ?? 'application/octet-stream';

  response.writeHead(200, {
    'Content-Type': contentType,
    'Cache-Control': assetPath.endsWith('index.html')
      ? 'no-cache'
      : 'public, max-age=31536000, immutable',
  });

  createReadStream(assetPath).pipe(response);
}).listen(port, '0.0.0.0', () => {
  console.log(`Whiskey static server listening on ${port}`);
});
