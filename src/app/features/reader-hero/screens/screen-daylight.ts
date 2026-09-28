import { getTimes } from 'suncalc';

export interface ScreenLocation {
  latitude: number;
  longitude: number;
}

export type ScreenTheme = 'light' | 'dark';
export type Season = 'winter' | 'spring' | 'summer' | 'fall';

export interface ScreenDaylight {
  theme: ScreenTheme;
  source: 'sun' | 'seasonal';
  sunrise: Date | null;
  sunset: Date | null;
  polar?: 'day' | 'night';
  season?: Season;
}

const SEASONAL_HOURS: Record<Season, readonly [number, number]> = {
  winter: [7 * 60, 17 * 60],
  spring: [6 * 60 + 30, 19 * 60 + 30],
  summer: [6 * 60, 21 * 60],
  fall: [7 * 60, 18 * 60],
};

export function validScreenLocation(location: ScreenLocation): boolean {
  return Number.isFinite(location.latitude) && Math.abs(location.latitude) <= 90
    && Number.isFinite(location.longitude) && Math.abs(location.longitude) <= 180;
}

/** Uses the device's local clock (including DST); northern seasons when location is unknown. */
export function seasonalDaylight(now: Date, southernHemisphere = false): ScreenDaylight {
  const month = (now.getMonth() + (southernHemisphere ? 6 : 0)) % 12;
  const season: Season = month < 2 || month === 11 ? 'winter'
    : month < 5 ? 'spring' : month < 8 ? 'summer' : 'fall';
  const [start, end] = SEASONAL_HOURS[season];
  const sunrise = new Date(now.getFullYear(), now.getMonth(), now.getDate(), Math.floor(start / 60), start % 60);
  const sunset = new Date(now.getFullYear(), now.getMonth(), now.getDate(), Math.floor(end / 60), end % 60);
  return { theme: now >= sunrise && now < sunset ? 'light' : 'dark', source: 'seasonal', sunrise, sunset, season };
}

/** All solar comparisons use absolute instants, independent of the device's time zone. */
export function screenDaylight(now: Date, location?: ScreenLocation): ScreenDaylight {
  if (!location || !validScreenLocation(location)) return seasonalDaylight(now);
  try {
    const { sunrise, sunset, alwaysUp, alwaysDown } = getTimes(now, location.latitude, location.longitude);
    if (alwaysUp || alwaysDown) {
      return { theme: alwaysUp ? 'light' : 'dark', source: 'sun', sunrise: null, sunset: null,
        polar: alwaysUp ? 'day' : 'night' };
    }
    if (sunrise && sunset && Number.isFinite(+sunrise) && Number.isFinite(+sunset)) {
      return { theme: now >= sunrise && now < sunset ? 'light' : 'dark', source: 'sun', sunrise, sunset };
    }
  } catch {
    // An unavailable solar calculation must not stop the scene rendering.
  }
  return seasonalDaylight(now, location.latitude < 0);
}
