import { describe, expect, it } from 'vitest';
import { Euler, Quaternion, Vector3 } from 'three';
import { getSensorRock, SENSOR_ROCK_ANGLE } from './sensor-rock';
import { separateSensors, sensorPenetration } from './sensor-contact';

describe('anchored sensor rocking', () => {
  it('leans in different directions smoothly within three degrees', () => {
    const angles = Array.from({ length: 70 }, (_, index) => getSensorRock(index, 2));
    expect(angles.some(angle => angle > 0)).toBe(true);
    expect(angles.some(angle => angle < 0)).toBe(true);
    for (let index = 0; index < 70; index++) for (let step = 0; step < 600; step++) {
      const seconds = step / 60;
      const angle = getSensorRock(index, seconds);
      expect(Math.abs(angle)).toBeLessThanOrEqual(SENSOR_ROCK_ANGLE);
      expect(Math.abs(getSensorRock(index, seconds + 1 / 60) - angle)).toBeLessThan(0.002);
    }
  });

  it('keeps the full rocking arc collision free without moving the centers', () => {
    const halfSize = new Vector3(0.7, 0.35, 0.035);
    const offset = new Vector3(0.025, -0.01, 0.005);
    const rotation = new Quaternion().setFromEuler(new Euler(0.4, 0.2, 0.35));
    const margin = 2 * (halfSize.length() + offset.length()) * Math.sin(SENSOR_ROCK_ANGLE / 2);
    const boxes = Array.from({ length: 6 }, (_, index) => ({
      position: new Vector3((index % 3) * 1.05, Math.floor(index / 3) * 0.65, 0),
      quaternion: new Quaternion(), halfSize: halfSize.clone().addScalar(margin + 0.02),
      offset, rotation,
    }));
    separateSensors(boxes);
    const centers = boxes.map(box => box.position.clone());
    const axis = new Vector3(0, 0, 1);
    boxes.forEach(box => box.halfSize.copy(halfSize));
    for (let frame = 0; frame < 600; frame++) {
      boxes.forEach((box, index) => box.quaternion.setFromAxisAngle(axis, getSensorRock(index, frame / 60)));
      for (let i = 0; i < boxes.length; i++) {
        expect(boxes[i].position).toEqual(centers[i]);
        for (let j = i + 1; j < boxes.length; j++) expect(sensorPenetration(boxes[i], boxes[j])).toBeUndefined();
      }
    }
  });
});
