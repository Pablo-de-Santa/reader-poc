# Whiskey Reader Experience

Angular proof-of-concept for the BioStream interactive reader and sensor landing experience.

The app uses Three.js for the reader, sensor, particle, and device scenes, with GSAP ScrollTrigger driving the scroll-based story from sample handling through health and research views.

## Local Preview

```bash
npm install
npm start
```

Open:

```txt
http://localhost:4200/
```

## Project Layout

- `src/app/features/reader-hero/` — hero component, template, and styles.
  - `animation/` — scroll interpolation and sensor rocking helpers.
  - `physics/` — sensor contacts, recorded motion, and the simulation worker.
  - `rendering/` — Three.js resource lifecycle helpers.
  - `content/` — sourced research target labels.
  - `screens/` — simulated app styles, automatic daylight themes, and tests.
- `src/app/ui/` — reusable interface directives.
- `public/assets/models/` — models used by the application.
- `scripts/` — browser regression checks.
- `docs/content-sources.md` — evidence for public-facing research labels.
- `docs/screen-themes.md` — location handling, seasonal hours, and display styling.
- `aks-deploy/` — deployment manifests.

Unit tests live beside the code they exercise. TypeScript checks unused locals and parameters.
The surrounding workspace keeps generated browser output in `../artifacts/` and source
checkpoints and retired model assets in `../backups/`.

## Checks

```bash
npm test -- --watch=false
npm run build
```

With `npm start` running on port 4200, run the browser checks in another terminal:

```bash
node scripts/check-opening-scroll.mjs
node scripts/check-sensor-scene.mjs
node scripts/check-device-screens.mjs
```

These scripts use Chrome on Windows by default; set `CHROME_BIN` to override its path.
Browser profiles and results go to `../artifacts/opening-scroll-check/` and
`../artifacts/sensor-smoothness/`.

## Production Build

```bash
npm run build
```

The Angular production output is written to:

```txt
dist/reader-poc/browser
```

Live preview:

```txt
https://gsap.bio-stream.ca/
```

## Docker

The container builds the Angular app and serves the static output on port `4000`.

```bash
docker build -t biostreamdiag.azurecr.io/whiskey:1.0.0.4 .
docker push biostreamdiag.azurecr.io/whiskey:1.0.0.4
```

## AKS Environments

Deployment manifests live in:

```txt
aks-deploy/Whiskey/
```

Current environment hosts:

- Development: `https://gsap.dev.bio-stream.ca`
- Test/UAT: `https://gsap.test.bio-stream.ca`
- Production: `https://gsap.bio-stream.ca`

The manifests deploy the same image:

```txt
biostreamdiag.azurecr.io/whiskey:1.0.0.4
```

## Repository

Primary remote:

```txt
https://biostreamca@dev.azure.com/biostreamca/Core/_git/Whiskey
```

The same source is mirrored to `https://github.com/Pablo-de-Santa/reader-poc`.
Its GitHub Pages workflow maintains the preview site. AKS manifests are applied separately.

## Notes

This model is intentionally stylized and lightweight for a landing-page POC. It is not a manufacturing, CAD, regulatory, or exact product-visualization asset.
