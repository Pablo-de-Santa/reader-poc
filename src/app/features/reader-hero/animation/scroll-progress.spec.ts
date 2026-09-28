import { describe, expect, it } from 'vitest';
import { advanceScrollProgress } from './scroll-progress';

describe('scroll following', () => {
  it('limits coarse wheel jumps and approaches the target at different refresh rates', () => {
    for (const hz of [30, 60, 120, 144]) {
      let current = 0;
      for (let frame = 0; frame < hz * 4; frame++) {
        const next = advanceScrollProgress(current, 1, 1 / hz);
        expect(next - current).toBeLessThanOrEqual(0.42 / hz + 1e-9);
        current = next;
      }
      expect(current).toBeCloseTo(1, 4);
      expect(advanceScrollProgress(current, 0, 1 / hz)).toBeLessThan(current);
    }
  });

  it('does not advance for a non-positive frame duration', () => {
    expect(advanceScrollProgress(0.5, 1, 0)).toBe(0.5);
    expect(advanceScrollProgress(0.5, 0, -1)).toBe(0.5);
  });

  it('avoids a jump when a tab resumes after a long pause', () => {
    expect(advanceScrollProgress(0, 1, 60)).toBeLessThanOrEqual(0.021);
    expect(advanceScrollProgress(1, 0, 60)).toBeGreaterThanOrEqual(0.979);
  });

  it('settles exactly without oscillating around the target', () => {
    expect(advanceScrollProgress(0.499999, 0.5, 1 / 60)).toBe(0.5);
    expect(advanceScrollProgress(0.500001, 0.5, 1 / 60)).toBe(0.5);
  });
});
