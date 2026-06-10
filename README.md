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
docker build -t biostreamdiag.azurecr.io/whiskey:1.0.0.0 .
docker push biostreamdiag.azurecr.io/whiskey:1.0.0.0
```

## AKS Environments

Deployment manifests live in:

```txt
aks-deploy/Whiskey/
```

Current environment hosts:

- Development: `https://dev-gsap.bio-stream.ca`
- Test/UAT: `https://test-gsap.bio-stream.ca`
- Production: `https://gsap.bio-stream.ca`

The manifests deploy the same image:

```txt
biostreamdiag.azurecr.io/whiskey:1.0.0.0
```

## Repository

Primary remote:

```txt
https://biostreamca@dev.azure.com/biostreamca/Core/_git/Whiskey
```

GitHub is no longer the deployment target for this project.

## Notes

This model is intentionally stylized and lightweight for a landing-page POC. It is not a manufacturing, CAD, regulatory, or exact product-visualization asset.
