import { Quaternion, Vector3 } from 'three';
import { separateSensors, type SensorContactBox } from './sensor-contact';

export interface SensorAppearanceCollider {
  halfExtents: [number, number, number];
  shapeOffset: [number, number, number];
  shapeQuaternion: [number, number, number, number];
  /** Reserve room for rotation about a fixed center, measured at model scale 1. */
  rotationClearance?: number;
}

export interface SensorAppearanceRequest {
  /** Frame-major poses, with x/y/z, quaternion x/y/z/w, then uniform scale. */
  targets: Float32Array;
  frames: number;
  count: number;
  frameSeconds: number;
  /** Collider dimensions at model scale 1, in the same order as the poses. */
  colliders: SensorAppearanceCollider[];
  /** Resolve this final appearance frame, then hold that sensor's complete pose. */
  settledFrames?: number[];
}

/**
 * Build the appearance once, in chronological order. Carrying contact corrections
 * into the next fixed step keeps neighbouring plates on the same side of contact.
 * Runtime playback can then pause or reverse without re-solving a different path.
 */
export function recordSensorAppearance(request: SensorAppearanceRequest): Float32Array {
  const { targets, frames, count, colliders, frameSeconds, settledFrames } = request;
  if (targets.length !== frames * count * 8 || colliders.length !== count) {
    throw new Error('Sensor appearance poses and colliders must match the frame and body counts.');
  }
  if (!(frameSeconds > 0) || !Number.isFinite(frameSeconds)) {
    throw new Error('Sensor appearance requires a positive fixed frame duration.');
  }
  if (settledFrames && (settledFrames.length !== count
    || settledFrames.some(frame => !Number.isInteger(frame) || frame < 0 || frame >= frames))) {
    throw new Error('Each sensor must settle on a valid appearance frame.');
  }

  const poses = targets.slice();
  const corrections = colliders.map(() => new Vector3());
  const boxes: SensorContactBox[] = colliders.map(collider => ({
    position: new Vector3(),
    quaternion: new Quaternion(),
    halfSize: new Vector3(),
    offset: new Vector3(),
    rotation: new Quaternion(...collider.shapeQuaternion),
  }));
  const relaxation = Math.exp(-frameSeconds / 0.25);

  for (let frame = 0; frame < frames; frame++) {
    for (let index = 0; index < count; index++) {
      const start = (frame * count + index) * 8;
      const settled = frame > (settledFrames?.[index] ?? frames);
      if (settled) {
        const previous = start - count * 8;
        poses.copyWithin(start, previous, previous + 8);
      }
      const source = settled ? poses : targets;
      const scale = source[start + 7];
      const box = boxes[index];
      box.inverseMass = settled ? 0 : 1;
      box.position.fromArray(source, start);
      if (!settled) box.position.addScaledVector(corrections[index], relaxation);
      box.quaternion.fromArray(source, start + 3);
      box.halfSize.fromArray(colliders[index].halfExtents).multiplyScalar(scale)
        .addScalar(0.02 + (colliders[index].rotationClearance ?? 0) * scale);
      // Match the finite thickness used by falling physics at the handoff.
      box.halfSize.max(new Vector3(0.06, 0.06, 0.06));
      box.offset.fromArray(colliders[index].shapeOffset).multiplyScalar(scale);
    }

    separateSensors(boxes);

    for (let index = 0; index < count; index++) {
      const start = (frame * count + index) * 8;
      const position = boxes[index].position;
      position.toArray(poses, start);
      if (boxes[index].inverseMass === 0) continue;
      corrections[index].set(
        position.x - targets[start],
        position.y - targets[start + 1],
        position.z - targets[start + 2],
      );
    }
  }
  return poses;
}
