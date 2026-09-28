import type { SensorAppearanceRequest } from './sensor-appearance';
import { Body, Box, GSSolver, Quaternion, SAPBroadphase, Vec3, World } from 'cannon-es';

export interface SensorFallBody {
  position: [number, number, number];
  quaternion: [number, number, number, number];
  halfExtents: [number, number, number];
  shapeQuaternion?: [number, number, number, number];
  shapeOffset?: [number, number, number];
  release: number;
}

export interface SensorFallRequest { revision: number; bodies: SensorFallBody[]; appearance?: SensorAppearanceRequest; }
export interface SensorFallResult {
  revision: number;
  count: number;
  frames: number;
  poses: Float32Array;
  contacts: number;
  appearance?: { frames: number; poses: Float32Array };
}

// A fixed-step recording makes collisions reversible and independent of scroll speed.
export function simulateSensorFall(request: SensorFallRequest): SensorFallResult {
  const dt = 1 / 240;
  const duration = 3.6;
  const frames = Math.round(duration / dt) + 1;
  const world = new World({ gravity: new Vec3(0, -9.82, 0), allowSleep: false });
  world.broadphase = new SAPBroadphase(world);
  const solver = new GSSolver();
  solver.iterations = 20;
  solver.tolerance = 1e-7;
  world.solver = solver;
  world.defaultContactMaterial.friction = 0.35;
  world.defaultContactMaterial.restitution = 0.16;
  const bodies = request.bodies.map(source => {
    // A small clearance and finite thickness protect the thin visual plates.
    const shape = new Box(new Vec3(...source.halfExtents.map(v => Math.max(0.06, v + 0.015)) as [number, number, number]));
    const body = new Body({ mass: 0, type: Body.STATIC, linearDamping: 0.05, angularDamping: 0.16 });
    body.addShape(shape, new Vec3(...(source.shapeOffset ?? [0, 0, 0])),
      new Quaternion(...(source.shapeQuaternion ?? [0, 0, 0, 1])));
    body.position.set(...source.position);
    body.quaternion.set(...source.quaternion);
    world.addBody(body);
    return body;
  });
  const poses = new Float32Array(frames * bodies.length * 7);
  let contacts = 0;
  for (let frame = 0; frame < frames; frame++) {
    bodies.forEach((body, index) => {
      if (body.type === Body.STATIC && frame * dt >= request.bodies[index].release * duration) {
        body.type = Body.DYNAMIC;
        body.mass = 1;
        body.updateMassProperties();
        body.wakeUp();
        body.velocity.set(Math.sin(index * 2.4) * 0.7, 0, 0.22 + Math.cos(index * 1.7) * 0.08);
        body.angularVelocity.set(Math.sin(index * 1.3) * 1.3, Math.cos(index * 2.1) * 1.1, Math.sin(index * 0.9 + 0.4) * 1.8);
      }
      const offset = (frame * bodies.length + index) * 7;
      poses.set([body.position.x, body.position.y, body.position.z,
        body.quaternion.x, body.quaternion.y, body.quaternion.z, body.quaternion.w], offset);
    });
    if (frame < frames - 1) {
      world.step(dt);
      contacts += world.contacts.length;
    }
  }
  return { revision: request.revision, count: bodies.length, frames, poses, contacts };
}
