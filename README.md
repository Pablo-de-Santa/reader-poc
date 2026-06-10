# Reader PoC

Angular 21 proof-of-concept for an interactive product hero around a portable reader and removable sample sensor.

## Local Preview

```bash
npm install
npm start
```

Open:

```txt
http://localhost:4200/
```

## Current Architecture

- `src/app/app.ts` - root standalone app shell.
- `src/app/features/reader-hero/` - first-section product hero.
- Three.js handles the scene, lighting, procedural geometry, and particles.
- The current reader is procedural Three.js geometry so the shape, panels, and sensor can be adjusted quickly.
- GSAP ScrollTrigger pins the hero and animates the reader/sensor separation on scroll.

## Commands

```bash
npm run build
npm start
npm test
```

## Notes

This model is intentionally stylized and lightweight for a landing-page POC. It is not a manufacturing, CAD, regulatory, or exact product-visualization asset.

Live preview:

```txt
https://gsap.bio-stream.ca/
```
