import { describe, expect, it } from 'vitest';
import { simulateSensorFall, type SensorFallRequest } from './sensor-fall';

const request: SensorFallRequest = {
  revision: 1,
  bodies: [
    { position: [0, 2, 0], quaternion: [0, 0, 0, 1], halfExtents: [0.5, 0.5, 0.5], release: 0 },
    { position: [0, 0, 0], quaternion: [0, 0, 0, 1], halfExtents: [0.5, 0.5, 0.5], release: 0.8 },
  ],
};

describe('scroll-driven sensor collisions', () => {
  it('supports a falling sensor on a sensor that has not released yet', () => {
    const result = simulateSensorFall(request);
    expect(result.contacts).toBeGreaterThan(0);
    // Without contact response gravity alone takes the top sensor below y=0.
    for (let frame = 120; frame <= 192; frame++) {
      expect(result.poses[frame * 2 * 7 + 1]).toBeGreaterThan(0.8);
      expect(result.poses[(frame * 2 + 1) * 7 + 1]).toBe(0);
    }
  });

  it('produces identical finite poses for reverse scrolling and repeated layouts', () => {
    const first = simulateSensorFall(request);
    const second = simulateSensorFall(request);
    expect(first.poses).toEqual(second.poses);
    expect(first.poses.every(Number.isFinite)).toBe(true);
    for (let frame = first.frames - 1; frame >= 0; frame -= 17) {
      const offset = frame * first.count * 7 + 3;
      expect(Math.hypot(...first.poses.slice(offset, offset + 4))).toBeCloseTo(1, 5);
    }
  });
});
