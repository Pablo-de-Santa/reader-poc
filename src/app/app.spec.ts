import { Component } from '@angular/core';
import { DeferBlockBehavior, DeferBlockState, TestBed } from '@angular/core/testing';
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
    await TestBed.configureTestingModule({ imports: [appType], deferBlockBehavior: DeferBlockBehavior.Manual })
      .overrideComponent(appType, { set: { imports: [ReaderHeroStub] } })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(appType);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('shows useful content before loading the WebGL experience', () => {
    const fixture = TestBed.createComponent(appType);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.experience-preview h1')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('.experience-preview a')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('app-reader-hero')).toBeNull();
  });

  it('should render the reader hero', async () => {
    const fixture = TestBed.createComponent(appType);
    fixture.detectChanges();
    const [block] = await fixture.getDeferBlocks();
    await block.render(DeferBlockState.Complete);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('main > app-reader-hero')).not.toBeNull();
  });
});
