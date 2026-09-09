export const SENSOR_ROCK_ANGLE = Math.PI / 60;

/** An anchored sensor leans at its own gentle pace, without translating. */
export function getSensorRock(index: number, seconds: number): number {
  const phase = index * 2.399963229728653;
  const period = 3.8 + ((index * 7) % 13) / 12 * 2;
  return Math.sin(phase + seconds * Math.PI * 2 / period) * SENSOR_ROCK_ANGLE;
}
