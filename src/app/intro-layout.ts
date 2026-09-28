// Shared initial geometry; keep this module independent of WebGL and GSAP.
export function applyIntroLayout(host: HTMLElement): void {
  const width = host.clientWidth || window.innerWidth;
  const height = host.clientHeight || window.innerHeight;
  const clamp = (x: number, min: number, max: number) => Math.max(min, Math.min(max, x));
  const lerp = (a: number, b: number, t: number) => (1 - t) * a + t * b;
  const smoothstep = (x: number, min: number, max: number) => { const t = clamp((x - min) / (max - min), 0, 1); return t * t * (3 - 2 * t); };
  const stack = Math.max(smoothstep(900 - width, 0, 400), 1 - smoothstep(width / height, 0.85, 1.3));
  const style = host.style;
  style.setProperty('--layout-stack', String(stack));
  host.classList.toggle('is-portrait', height > width);
  const desktopHeadline = width >= 2200 ? Math.max(87.2, Math.min(width * 0.042, height * 0.08)) : clamp(Math.min(width * 0.057, height * 0.11), 40.8, 87.2);
  const portraitHeadline = clamp(Math.min(width * 0.064, height * 0.053), 20, 45.6);
  const headline = lerp(desktopHeadline, portraitHeadline, stack);
  style.setProperty('--intro-headline', headline + 'px');
  style.setProperty('--intro-body', lerp(clamp(headline * 0.42, 26.24, 36.48), clamp(headline * 0.68, 18, 31.36), stack) + 'px');
  style.setProperty('--intro-width', lerp(Math.min(736, width * 0.5 - 16), width, stack) + 'px');
  style.setProperty('--intro-inset', lerp(clamp(width * 0.06, 16, 96), clamp(width * 0.05, 16, 32), stack) + 'px');
  style.setProperty('--intro-top', lerp(clamp(height * 0.11, 24, 152), clamp(height * 0.028, 10, 24), stack) + 'px');
}
