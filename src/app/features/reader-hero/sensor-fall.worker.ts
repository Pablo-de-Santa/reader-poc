import { simulateSensorFall, type SensorFallRequest } from './sensor-fall';
import { recordSensorAppearance } from './sensor-appearance';

addEventListener('message', ({ data }: MessageEvent<SensorFallRequest>) => {
  const appearance = data.appearance ? {
    frames: data.appearance.frames, poses: recordSensorAppearance(data.appearance),
  } : undefined;
  if (appearance) data.bodies.forEach((body, index) => {
    const offset = ((appearance.frames - 1) * data.bodies.length + index) * 8;
    body.position = Array.from(appearance.poses.slice(offset, offset + 3)) as [number, number, number];
    body.quaternion = Array.from(appearance.poses.slice(offset + 3, offset + 7)) as [number, number, number, number];
  });
  const result = { ...simulateSensorFall(data), appearance };
  const transfer: Transferable[] = [result.poses.buffer];
  if (appearance) transfer.push(appearance.poses.buffer);
  postMessage(result, { transfer });
});
