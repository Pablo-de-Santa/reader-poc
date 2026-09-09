import { describe, expect, it } from 'vitest';
import { Euler, Quaternion, Vector3 } from 'three';
import { recordSensorAppearance, type SensorAppearanceRequest } from './sensor-appearance';
import { sensorPenetration, type SensorContactBox } from './sensor-contact';

function crowdedAppearance(): SensorAppearanceRequest {
  const count = 12;
  const frames = 241;
  const targets = new Float32Array(frames * count * 8);
  const colliders = Array.from({ length: count }, () => ({
    halfExtents: [0.65, 0.35, 0.045] as [number, number, number],
    shapeOffset: [0.015, -0.008, 0.003] as [number, number, number],
    shapeQuaternion: new Quaternion().setFromEuler(new Euler(0.03, -0.08, 0.1)).toArray() as [number, number, number, number],
  }));
  for (let frame = 0; frame < frames; frame++) {
    const progress = frame / (frames - 1);
    for (let index = 0; index < count; index++) {
      const start = (frame * count + index) * 8;
      targets.set([
        (index % 4) * (0.8 + progress * 0.1),
        Math.floor(index / 4) * 0.55 + Math.sin(index) * 0.06 * (1 - progress),
        Math.cos(index) * 0.08 * (1 - progress),
      ], start);
      new Quaternion().setFromEuler(new Euler(
        Math.sin(index) * 0.2 * (1 - progress),
        Math.cos(index) * 0.2 * (1 - progress),
        0.35 + Math.sin(index) * 0.1 * progress,
      )).toArray(targets, start + 3);
      targets[start + 7] = 0.8 + progress * 0.2;
    }
  }
  return { targets, frames, count, frameSeconds: 0.001, colliders };
}

function boxesAt(request: SensorAppearanceRequest, poses: Float32Array, frame: number): SensorContactBox[] {
  return request.colliders.map((collider, index) => {
    const start = (frame * request.count + index) * 8;
    const scale = poses[start + 7];
    return {
      position: new Vector3().fromArray(poses, start),
      quaternion: new Quaternion().fromArray(poses, start + 3),
      halfSize: new Vector3(...collider.halfExtents).multiplyScalar(scale),
      offset: new Vector3(...collider.shapeOffset).multiplyScalar(scale),
      rotation: new Quaternion(...collider.shapeQuaternion),
    };
  });
}

describe('recorded sensor appearance', () => {
  it('keeps crowded rotating plates separate at every recorded and interpolated frame', () => {
    const request = crowdedAppearance();
    const poses = recordSensorAppearance(request);
    for (let frame = 0; frame < request.frames; frame++) {
      const boxes = boxesAt(request, poses, frame);
      const following = frame + 1 < request.frames ? boxesAt(request, poses, frame + 1) : undefined;
      for (const blend of following ? [0, 0.5] : [0]) {
        if (blend) boxes.forEach((box, index) => {
          box.position.lerp(following![index].position, blend);
          box.quaternion.slerp(following![index].quaternion, blend);
          box.halfSize.lerp(following![index].halfSize, blend);
          box.offset.lerp(following![index].offset, blend);
        });
        for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
          expect(sensorPenetration(boxes[i], boxes[j]), `frame ${frame}, blend ${blend}, pair ${i}/${j}`).toBeUndefined();
        }
      }
    }
  });

  it('provides identical paused and reverse playback without changing the requested poses', () => {
    const request = crowdedAppearance();
    const original = request.targets.slice();
    const first = recordSensorAppearance(request);
    const second = recordSensorAppearance(request);
    expect(first).toEqual(second);
    expect(request.targets).toEqual(original);
    for (let frame = request.frames - 1; frame >= 0; frame--) {
      const start = frame * request.count * 8;
      const end = start + request.count * 8;
      expect(first.slice(start, end)).toEqual(second.slice(start, end));
    }
  });

  it('carries support corrections continuously through tiny authored movement', () => {
    const request = crowdedAppearance();
    const poses = recordSensorAppearance(request);
    let largestStep = 0;
    for (let frame = 1; frame < request.frames; frame++) {
      for (let index = 0; index < request.count; index++) {
        const start = (frame * request.count + index) * 8;
        const previous = start - request.count * 8;
        largestStep = Math.max(largestStep, Math.hypot(
          poses[start] - poses[previous],
          poses[start + 1] - poses[previous + 1],
          poses[start + 2] - poses[previous + 2],
        ));
        expect(poses.slice(start + 3, start + 8)).toEqual(request.targets.slice(start + 3, start + 8));
      }
    }
    expect(largestStep).toBeLessThan(0.01);
  });

  it('keeps a settled sensor pinned while later arrivals resolve around it', () => {
    const frames = 121;
    const count = 2;
    const targets = new Float32Array(frames * count * 8);
    for (let frame = 0; frame < frames; frame++) {
      const progress = frame / (frames - 1);
      const start = frame * count * 8;
      // Deliberately change the old target after settling: none of its pose may leak through.
      targets.set([frame > 0 ? 0.3 : 0, 0, 0, 0, 0, 0, 1, frame > 0 ? 1.2 : 1], start);
      new Quaternion().setFromEuler(new Euler(0, 0, progress * 0.1)).toArray(targets, start + 3);
      targets.set([1.5 - progress * 1.2, 0, 0, 0, 0, 0, 1, 1], start + 8);
    }
    const request: SensorAppearanceRequest = {
      frames, count, targets, frameSeconds: 0.001, settledFrames: [0, 100],
      colliders: Array.from({ length: count }, () => ({
        halfExtents: [0.4, 0.25, 0.05], shapeOffset: [0, 0, 0], shapeQuaternion: [0, 0, 0, 1],
      })),
    };
    const poses = recordSensorAppearance(request);
    const pinned = poses.slice(0, 8);
    let arrivalCorrection = 0;
    for (let frame = 0; frame < frames; frame++) {
      const start = frame * count * 8;
      expect(poses.slice(start, start + 8)).toEqual(pinned);
      arrivalCorrection = Math.max(arrivalCorrection, Math.hypot(
        poses[start + 8] - targets[start + 8], poses[start + 9] - targets[start + 9],
        poses[start + 10] - targets[start + 10],
      ));
      const boxes = boxesAt(request, poses, frame);
      expect(sensorPenetration(boxes[0], boxes[1]), `frame ${frame}`).toBeUndefined();
      if (frame + 1 < frames) {
        const following = boxesAt(request, poses, frame + 1);
        boxes.forEach((box, index) => {
          box.position.lerp(following[index].position, 0.5);
          box.quaternion.slerp(following[index].quaternion, 0.5);
        });
        expect(sensorPenetration(boxes[0], boxes[1]), `interpolated frame ${frame}`).toBeUndefined();
      }
      if (frame > 100) expect(poses.slice(start + 8, start + 16))
        .toEqual(poses.slice(100 * count * 8 + 8, 100 * count * 8 + 16));
    }
    expect(arrivalCorrection).toBeGreaterThan(0.05);
  });

  it('resolves the final appearance pose before freezing, including on reverse playback', () => {
    const request = crowdedAppearance();
    request.settledFrames = Array(request.count).fill(0);
    const poses = recordSensorAppearance(request);
    expect(poses.slice(0, request.count * 8)).not.toEqual(request.targets.slice(0, request.count * 8));
    const first = poses.slice(0, request.count * 8);
    for (let frame = request.frames - 1; frame >= 0; frame--) {
      const start = frame * request.count * 8;
      expect(poses.slice(start, start + request.count * 8)).toEqual(first);
      const boxes = boxesAt(request, poses, frame);
      for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
        expect(sensorPenetration(boxes[i], boxes[j])).toBeUndefined();
      }
    }
    expect(recordSensorAppearance(request)).toEqual(poses);
  });
});
