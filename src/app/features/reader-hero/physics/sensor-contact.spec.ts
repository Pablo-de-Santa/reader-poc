import { describe, expect, it } from 'vitest';
import { Euler, Quaternion, Vector3 } from 'three';
import { separateSensors, sensorPenetration, type SensorContactBox } from './sensor-contact';

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

describe('contact boundaries', () => {
  const box = (x: number, inverseMass = 1): SensorContactBox => ({
    position: new Vector3(x, 0, 0), quaternion: new Quaternion(),
    halfSize: new Vector3(0.5, 0.5, 0.5), offset: new Vector3(), rotation: new Quaternion(), inverseMass,
  });

  it('leaves touching faces in place', () => {
    const boxes = [box(0), box(1)];
    expect(sensorPenetration(boxes[0], boxes[1])).toBeUndefined();
    separateSensors(boxes);
    expect(boxes.map(item => item.position.x)).toEqual([0, 1]);
  });

  it('moves only the arriving sensor when its neighbour is pinned', () => {
    const pinned = box(0, 0), arriving = box(0.8);
    separateSensors([pinned, arriving]);
    expect(pinned.position.toArray()).toEqual([0, 0, 0]);
    expect(arriving.position.x).toBeGreaterThan(1);
    expect(sensorPenetration(pinned, arriving)).toBeUndefined();
  });

  it('keeps two pinned sensors finite without dividing by zero', () => {
    const boxes = [box(0, 0), box(0.8, 0)];
    separateSensors(boxes);
    expect(boxes.map(item => item.position.toArray())).toEqual([[0, 0, 0], [0.8, 0, 0]]);
  });

  it('accounts for a collider offset rotated by its parent pose', () => {
    const offset = box(0);
    offset.offset.set(2, 0, 0);
    offset.quaternion.setFromAxisAngle(new Vector3(0, 0, 1), Math.PI / 2);
    const other = box(0);
    expect(sensorPenetration(offset, other)).toBeUndefined();
    other.position.y = 2.5;
    expect(sensorPenetration(offset, other)?.length()).toBeCloseTo(0.5);
  });
});
