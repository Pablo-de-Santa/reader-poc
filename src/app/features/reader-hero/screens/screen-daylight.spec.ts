import { describe, expect, it } from 'vitest';
import { getTimes } from 'suncalc';
import { screenDaylight, seasonalDaylight } from './screen-daylight';

describe('seasonal screen schedule', () => {
  it.each([
    [0, 'winter', 7, 0, 17, 0],
    [3, 'spring', 6, 30, 19, 30],
    [6, 'summer', 6, 0, 21, 0],
    [9, 'fall', 7, 0, 18, 0],
  ] as const)('uses local %s hours for %s with inclusive dawn and exclusive dusk', (month, season, sh, sm, eh, em) => {
    const dawn = new Date(2026, month, 15, sh, sm);
    const dusk = new Date(2026, month, 15, eh, em);
    expect(seasonalDaylight(new Date(+dawn - 1)).theme).toBe('dark');
    expect(seasonalDaylight(dawn)).toMatchObject({ theme: 'light', source: 'seasonal', season });
    expect(seasonalDaylight(new Date(+dusk - 1)).theme).toBe('light');
    expect(seasonalDaylight(dusk).theme).toBe('dark');
    expect(seasonalDaylight(new Date(2026, month, 15, 0)).theme).toBe('dark');
  });

  it('changes seasons at the local month boundary', () => {
    expect(seasonalDaylight(new Date(2026, 1, 28, 6, 45)).theme).toBe('dark');
    expect(seasonalDaylight(new Date(2026, 2, 1, 6, 45)).theme).toBe('light');
    expect(seasonalDaylight(new Date(2026, 11, 1, 17, 30)).theme).toBe('dark');
  });

  it('reverses seasons when a southern latitude is known', () => {
    expect(seasonalDaylight(new Date(2026, 0, 15, 20), true)).toMatchObject({ season: 'summer', theme: 'light' });
    expect(seasonalDaylight(new Date(2026, 6, 15, 20), true)).toMatchObject({ season: 'winter', theme: 'dark' });
  });

  it('falls back when location is missing or invalid', () => {
    const noon = new Date(2026, 0, 15, 12);
    for (const location of [undefined, { latitude: NaN, longitude: 0 }, { latitude: 91, longitude: 0 },
      { latitude: 0, longitude: Infinity }, { latitude: 0, longitude: 181 }]) {
      expect(screenDaylight(noon, location)).toMatchObject({ source: 'seasonal', theme: 'light' });
    }
  });
});

describe('solar screen schedule', () => {
  const edmonton = { latitude: 53.5461, longitude: -113.4938 };

  it.each([
    ['2026-06-21T19:00:00Z', 'light'], // Edmonton: summer afternoon
    ['2026-06-21T09:00:00Z', 'dark'], // Edmonton: summer 3am
    ['2026-12-21T19:00:00Z', 'light'],
    ['2026-12-21T01:00:00Z', 'dark'],
  ])('uses the sun for Edmonton at %s', (date, theme) => {
    expect(screenDaylight(new Date(date), edmonton)).toMatchObject({ source: 'sun', theme });
  });

  it('switches at sunrise and sunset, not civil twilight', () => {
    const times = getTimes(new Date('2026-06-21T19:00:00Z'), edmonton.latitude, edmonton.longitude);
    expect(screenDaylight(new Date(+times.sunrise! - 1), edmonton).theme).toBe('dark');
    expect(screenDaylight(times.sunrise!, edmonton).theme).toBe('light');
    expect(screenDaylight(new Date(+times.sunset! - 1), edmonton).theme).toBe('light');
    expect(screenDaylight(times.sunset!, edmonton).theme).toBe('dark');
  });

  it('compares absolute instants across time zones and the date line', () => {
    expect(screenDaylight(new Date('2026-06-21T13:00:00-06:00'), edmonton))
      .toEqual(screenDaylight(new Date('2026-06-21T19:00:00Z'), edmonton));
    for (const longitude of [-179, 179]) {
      expect(screenDaylight(new Date('2026-06-21T00:00:00Z'), { latitude: 0, longitude }).theme).toBe('light');
      expect(screenDaylight(new Date('2026-06-21T12:00:00Z'), { latitude: 0, longitude }).theme).toBe('dark');
    }
  });

  it('handles polar day and polar night without invalid dates', () => {
    const arctic = { latitude: 80, longitude: 20 };
    expect(screenDaylight(new Date('2026-06-21T00:00:00Z'), arctic))
      .toMatchObject({ theme: 'light', source: 'sun', polar: 'day', sunrise: null, sunset: null });
    expect(screenDaylight(new Date('2026-12-21T12:00:00Z'), arctic))
      .toMatchObject({ theme: 'dark', source: 'sun', polar: 'night', sunrise: null, sunset: null });
  });
});
