import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import type { App } from './app';

// Browser checks in scripts/ exercise the real WebGL hero; this test covers its host.
@Component({ selector: 'app-reader-hero', template: '' })
class ReaderHeroStub {}

describe('App', () => {
  let appType: typeof App;

  beforeAll(async () => {
    // GSAP registers media-query listeners when the real hero module is imported.
    vi.stubGlobal('matchMedia', (media: string) => ({
      matches: false, media, onchange: null,
      addListener: vi.fn(), removeListener: vi.fn(),
      addEventListener: vi.fn(), removeEventListener: vi.fn(), dispatchEvent: () => true,
    }));
    appType = (await import('./app')).App;
  });
  afterAll(() => vi.unstubAllGlobals());

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [appType] })
      .overrideComponent(appType, { set: { imports: [ReaderHeroStub] } })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(appType);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the reader hero', async () => {
    const fixture = TestBed.createComponent(appType);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('main > app-reader-hero')).not.toBeNull();
  });
});
