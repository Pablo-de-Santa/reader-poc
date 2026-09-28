import { DOCUMENT, DestroyRef, Injectable, InjectionToken, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { screenDaylight, validScreenLocation, type ScreenLocation } from './screen-daylight';

export const SCREEN_GEOLOCATION = new InjectionToken<Geolocation | undefined>('Screen geolocation', {
  providedIn: 'root',
  factory: () => typeof navigator === 'undefined' ? undefined : navigator.geolocation,
});

/** Scoped to the hero. Coordinates stay in memory and are never sent to a service. */
@Injectable()
export class ScreenThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly geolocation = inject(SCREEN_GEOLOCATION);
  private location?: ScreenLocation;
  private destroyed = false;
  private readonly current = signal(screenDaylight(new Date()));
  readonly daylight = this.current.asReadonly();

  constructor() {
    const destroyRef = inject(DestroyRef);
    if (!isPlatformBrowser(inject(PLATFORM_ID))) return;
    const window = this.document.defaultView;
    if (!window) return;

    // Recalculate across sunrise, sunset, midnight, DST and resuming a sleeping tab.
    const update = () => this.refresh();
    const interval = window.setInterval(update, 30_000);
    this.document.addEventListener('visibilitychange', update);
    window.addEventListener('pageshow', update);
    destroyRef.onDestroy(() => {
      this.destroyed = true;
      window.clearInterval(interval);
      this.document.removeEventListener('visibilitychange', update);
      window.removeEventListener('pageshow', update);
    });

    try {
      this.geolocation?.getCurrentPosition(position => {
        if (this.destroyed) return;
        const { latitude, longitude } = position.coords;
        if (validScreenLocation({ latitude, longitude })) this.location = { latitude, longitude };
        this.refresh();
      }, () => this.refresh(), { enableHighAccuracy: false, timeout: 8_000, maximumAge: 15 * 60_000 });
    } catch {
      // Blocked or unavailable browser APIs retain the local seasonal schedule.
      this.refresh();
    }
  }

  private refresh(): void {
    if (!this.destroyed) this.current.set(screenDaylight(new Date(), this.location));
  }
}
