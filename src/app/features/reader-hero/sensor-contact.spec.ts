import { describe, expect, it } from 'vitest';
import { Euler, Quaternion, Vector3 } from 'three';
import { separateSensors, sensorPenetration, type SensorContactBox } from './sensor-contact';
import { advanceScrollProgress } from './scroll-progress';

describe('visible sensor contacts', () => {
  it('separates crowded, rotated thin plates throughout appearance', () => {
    for (const aspect of [0.35, 0.46, 0.75, 1, 1.33, 1.78, 2.4, 3.5]) {
      for (let phase = 0; phase <= 1; phase += 0.1) {
        const boxes: SensorContactBox[] = Array.from({ length: 70 }, (_, i) => ({
          position: new Vector3((i % 7) * aspect, Math.floor(i / 7) * 1.2, Math.sin(i) * (1 - phase)),
          quaternion: new Quaternion().setFromEuler(new Euler(Math.sin(i) * 0.3, Math.cos(i) * 0.4, 0.5 * phase)),
          halfSize: new Vector3(0.65, 0.35, 0.045),
          offset: new Vector3(), rotation: new Quaternion(),
        }));
        separateSensors(boxes);
        for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
          expect(sensorPenetration(boxes[i], boxes[j]), `aspect ${aspect}, phase ${phase}, pair ${i}/${j}`).toBeUndefined();
        }
      }
    }
  });
});

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
});
