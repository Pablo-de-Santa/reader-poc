import { Quaternion, Vector3 } from 'three';

export interface SensorContactBox {
  position: Vector3;
  quaternion: Quaternion;
  halfSize: Vector3;
  offset: Vector3;
  rotation: Quaternion;
  /** Relative share of contact correction; zero keeps a settled sensor fixed. */
  inverseMass?: number;
}

function bounds(box: SensorContactBox) {
  const q = box.quaternion.clone().multiply(box.rotation);
  return {
    center: box.offset.clone().applyQuaternion(box.quaternion).add(box.position),
    axes: [new Vector3(1, 0, 0), new Vector3(0, 1, 0), new Vector3(0, 0, 1)].map(v => v.applyQuaternion(q)),
    half: box.halfSize.toArray(),
    radius: box.halfSize.length(),
  };
}

// Separating-axis test uses the actual rotated plate, not its world-aligned bounds.
export function sensorPenetration(a: SensorContactBox, b: SensorContactBox): Vector3 | undefined {
  const aa = bounds(a), bb = bounds(b);
  const delta = bb.center.clone().sub(aa.center);
  if (delta.lengthSq() >= (aa.radius + bb.radius) ** 2) return;
  const axes = [...aa.axes, ...bb.axes];
  for (const x of aa.axes) for (const y of bb.axes) axes.push(x.clone().cross(y));
  let depth = Infinity;
  let normal: Vector3 | undefined;
  for (const axis of axes) {
    if (axis.lengthSq() < 1e-10) continue;
    axis.normalize();
    const radius = aa.axes.reduce((sum, v, i) => sum + Math.abs(v.dot(axis)) * aa.half[i], 0)
      + bb.axes.reduce((sum, v, i) => sum + Math.abs(v.dot(axis)) * bb.half[i], 0);
    const overlap = radius - Math.abs(delta.dot(axis));
    if (overlap <= 1e-7) return;
    if (overlap < depth) {
      depth = overlap;
      normal = axis.clone().multiplyScalar(delta.dot(axis) < 0 ? -1 : 1);
    }
  }
  return normal?.multiplyScalar(depth);
}

// Also protect poses between simulation frames and the scroll-driven appearance.
export function separateSensors(boxes: SensorContactBox[]): void {
  for (let pass = 0; pass < 64; pass++) {
    let contacts = 0;
    for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
      const firstMass = boxes[i].inverseMass ?? 1;
      const secondMass = boxes[j].inverseMass ?? 1;
      const totalMass = firstMass + secondMass;
      if (totalMass === 0) continue;
      const penetration = sensorPenetration(boxes[i], boxes[j]);
      if (!penetration) continue;
      contacts++;
      penetration.addScaledVector(penetration.clone().normalize(), 0.001);
      boxes[i].position.addScaledVector(penetration, -firstMass / totalMass);
      boxes[j].position.addScaledVector(penetration, secondMass / totalMass);
    }
    if (!contacts) return;
  }
}
