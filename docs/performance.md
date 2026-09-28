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
With npm start running, execute the scripts/check-*.mjs browser checks.

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

## Static reader asset batching

Run `node scripts/optimize-reader.mjs` after changing the original reader glTF/bin.
The generator bakes static node transforms, preserves reflected triangle winding,
and batches meshes by material. It indexes exactly equal vertex attributes without
quantization or triangle reduction. Source assets remain available for editing.
The generator validates vertex attributes, triangle count, and exported bounds.

The application preloads and loads `reader-optimized.glb`. The static server now
also gzip-compresses GLB and BIN assets. Reader animation timelines are unchanged.

Measurements on September 28, 2026:

- Reader meshes: 1,266 to 4; triangles remain 28,115.
- Opening frame render calls: 1,271 to 9, measured using both assets in Chrome.
- Reader files: 1,403,882 bytes combined to 726,624 bytes; new GLB gzip size 372,496 bytes.
- Three local production runs at 390x844 and 4x CPU slowdown measured blocking
  work of 2,557 / 1,809 / 2,903 ms before and 2,076 / 1,320 / 2,196 ms after.
  Median decreased approximately 19% (2,557 to 2,076 ms).

This benchmark sums the portions of long tasks exceeding 50 ms during an eight-second
window. It uses no network throttling and is not Lighthouse TBT or a Lighthouse score.
Runs have substantial variance. Repeat Lighthouse after deployment for field-relevant
comparison; the local production server used for this benchmark did not yet enable
GLB compression, so it does not measure the additional transfer-size improvement.

Verification passed: production build, 46 unit tests, static-server tests (including
binary gzip integrity), initial reveal, opening scroll lock and cleanup, sensor scenes
at desktop/mobile/tablet sizes, and device screen/theme checks. Original and optimized
reader screenshots were inspected at the same opening pose. No animation timing,
phrase transition, or scroll choreography was changed.

## Reload handoff

The deferred placeholder now uses the same opening text, shared SCSS, and lightweight
responsive layout calculation as the hero. Layout variables are applied before the
first hero paint, and a stable scrollbar gutter prevents width changes during pinning.
Page and hero base backgrounds match. The WebGL reveal and GSAP timelines are unchanged.
Run `node scripts/check-reload-handoff.mjs` with the development server running to
compare text bounds, font sizes, and base background across repeated reloads.
