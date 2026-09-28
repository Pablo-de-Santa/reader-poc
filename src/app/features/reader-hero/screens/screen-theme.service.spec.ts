import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { SCREEN_GEOLOCATION, ScreenThemeService } from './screen-theme.service';

describe('automatic screen theme', () => {
  let success: PositionCallback;
  let failure: PositionErrorCallback;
  const locate = vi.fn();

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 0, 15, 12));
    locate.mockReset().mockImplementation((onSuccess, onFailure) => { success = onSuccess; failure = onFailure; });
    TestBed.configureTestingModule({ providers: [ScreenThemeService,
      { provide: SCREEN_GEOLOCATION, useValue: { getCurrentPosition: locate } },
    ] });
  });

  afterEach(() => {
    TestBed.resetTestingModule();
    vi.useRealTimers();
  });

  it('requests location once on arrival and applies it without blocking the fallback', () => {
    const service = TestBed.inject(ScreenThemeService);
    expect(locate).toHaveBeenCalledTimes(1);
    expect(locate.mock.calls[0][2]).toMatchObject({ enableHighAccuracy: false, timeout: 8000 });
    expect(service.daylight().source).toBe('seasonal');
    vi.setSystemTime(new Date('2026-06-21T19:00:00Z'));
    success({ coords: { latitude: 53.5461, longitude: -113.4938 } } as GeolocationPosition);
    expect(service.daylight()).toMatchObject({ source: 'sun', theme: 'light' });
    vi.advanceTimersByTime(60_000);
    expect(locate).toHaveBeenCalledTimes(1);
  });

  it.each([1, 2, 3])('keeps the seasonal schedule after geolocation error %s', code => {
    const service = TestBed.inject(ScreenThemeService);
    failure({ code } as GeolocationPositionError);
    expect(service.daylight()).toMatchObject({ source: 'seasonal', theme: 'light' });
  });

  it('works when geolocation is unavailable or throws', () => {
    locate.mockImplementation(() => { throw new Error('Blocked'); });
    expect(TestBed.inject(ScreenThemeService).daylight().source).toBe('seasonal');
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({ providers: [ScreenThemeService, { provide: SCREEN_GEOLOCATION, useValue: undefined }] });
    expect(TestBed.inject(ScreenThemeService).daylight().source).toBe('seasonal');
  });

  it('updates at the seasonal boundary and after waking on a new day', () => {
    vi.setSystemTime(new Date(2026, 0, 15, 16, 59, 45));
    const service = TestBed.inject(ScreenThemeService);
    expect(service.daylight().theme).toBe('light');
    vi.advanceTimersByTime(30_000);
    expect(service.daylight().theme).toBe('dark');
    vi.setSystemTime(new Date(2026, 6, 16, 20));
    document.dispatchEvent(new Event('visibilitychange'));
    expect(service.daylight()).toMatchObject({ theme: 'light', season: 'summer' });
    vi.setSystemTime(new Date(2026, 6, 17, 2));
    window.dispatchEvent(new Event('pageshow'));
    expect(service.daylight().theme).toBe('dark');
  });

  it('cleans up timers/listeners and ignores a late location response', () => {
    const service = TestBed.inject(ScreenThemeService);
    const snapshot = service.daylight();
    TestBed.resetTestingModule();
    expect(vi.getTimerCount()).toBe(0);
    vi.setSystemTime(new Date(2026, 0, 15, 23));
    success({ coords: { latitude: 53, longitude: -113 } } as GeolocationPosition);
    failure({ code: 3 } as GeolocationPositionError);
    document.dispatchEvent(new Event('visibilitychange'));
    window.dispatchEvent(new Event('pageshow'));
    expect(service.daylight()).toBe(snapshot);
  });

  it('does not start browser APIs during server rendering', () => {
    TestBed.overrideProvider(PLATFORM_ID, { useValue: 'server' });
    expect(TestBed.inject(ScreenThemeService).daylight().source).toBe('seasonal');
    expect(locate).not.toHaveBeenCalled();
    expect(vi.getTimerCount()).toBe(0);
  });
});
