// Rate-limited exponential following is independent of mouse ticks and frame rate.
export function advanceScrollProgress(current: number, target: number, seconds: number): number {
  const dt = Math.min(Math.max(seconds, 0), 0.05);
  const delta = target - current;
  if (Math.abs(delta) < 0.00001) return target;
  const step = Math.min(Math.abs(delta) * (1 - Math.exp(-dt / 0.12)), 0.42 * dt);
  return current + Math.sign(delta) * step;
}
