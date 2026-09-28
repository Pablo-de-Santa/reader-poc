# Performance and SEO changes

The September 28 Lighthouse reports measured mobile performance 25, desktop 34,
and SEO 82. Main-thread work dominated startup; missing robots.txt returned HTML.

## Implementation

- app.html defers the heavy WebGL component until idle while exposing a lightweight
  product introduction and working catalogue link. There is no artificial wait.
- The component yields a frame before initialization and reuses identical rounded
  geometries across the 70-sensor scene. Shapes and tessellation remain unchanged.
- index.html starts reader/cartridge requests early, and supplies a descriptive
  title and meta description.
- server.mjs compresses text assets with gzip, serves robots.txt as plain text,
  returns 404 for missing assets, and only gives immutable caching to hashed JS/CSS.
- Known dev/test hosts (or NOINDEX=true) receive X-Robots-Tag: noindex. Production
  remains indexable. A lower staging SEO score due to noindex is intentional.

## Verification

Run npm run build, npm test -- --watch=false, and node --test scripts/server.test.mjs.
With npm start running, execute the three scripts/check-*.mjs browser checks.

The first revised production build has approximately 143 KB initial assets plus
an 839 KB deferred scene chunk. These are raw sizes, not measured transfer sizes.
A local benchmark of 980 sensor contacts took about 3757 ms when each geometry
was rebuilt, versus 4 ms with reuse. This isolates geometry construction only;
it is not a measured page-load or Lighthouse improvement.

After deployment, repeat mobile and desktop Lighthouse runs under the same
conditions and compare LCP, TBT, transferred bytes, and visual/scroll behavior.

## Backups

The sibling ../backups directory is not imported, compiled, or shipped by Docker.
It can contain unique checkpoints and retired assets, so it is preserved.
Open reader.code-workspace in VS Code to work only with the actual application.
