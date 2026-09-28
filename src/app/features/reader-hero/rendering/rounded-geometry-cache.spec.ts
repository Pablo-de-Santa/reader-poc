import { describe, expect, it } from 'vitest';
import { RoundedGeometryCache } from './rounded-geometry-cache';

 describe('RoundedGeometryCache', () => {
  it('shares identical contacts across all 70 sensor models without changing geometry', () => {
    const cache = new RoundedGeometryCache();
    const contact = cache.get([0.024, 0.018, 0.12], 0.006);
    for (let i = 0; i < 70 * 14; i++) {
      expect(cache.get([0.024, 0.018, 0.12], 0.006)).toBe(contact);
    }
    expect(contact.parameters.width).toBe(0.024);
    contact.dispose();
  });

  it('keeps different shapes separate and releases cache references on teardown', () => {
    const cache = new RoundedGeometryCache();
    const first = cache.get([1, 2, 3], 0.1);
    const other = cache.get([1, 2, 3], 0.2);
    expect(other).not.toBe(first);
    cache.clear();
    const next = cache.get([1, 2, 3], 0.1);
    expect(next).not.toBe(first);
    [first, other, next].forEach(geometry => geometry.dispose());
  });
});
