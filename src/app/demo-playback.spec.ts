import { afterEach, describe, expect, it, vi } from 'vitest';
import { DemoPlayback } from './demo-playback';

describe('demo playback', () => {
  let playback: DemoPlayback;
  afterEach(() => { playback?.destroy(); vi.restoreAllMocks(); });

  function setup() {
    let now = 0;
    let frame: FrameRequestCallback;
    vi.spyOn(performance, 'now').mockImplementation(() => now);
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation(callback => { frame = callback; return 1; });
    vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => {});
    let time = 0;
    const scroll = vi.spyOn(window, 'scrollTo').mockImplementation((options: ScrollToOptions | number) => {
      if (typeof options === 'object') time = (options.top ?? 0) / 100;
    });
    const reset = vi.fn();
    const release = vi.fn();
    playback = new DemoPlayback({ ready: () => true, time: () => time, scrollAt: time => time * 100, reset, release });
    const advance = (ms: number) => { now += ms; frame(now); };
    return { advance, scroll, reset, release, setTime: (value: number) => time = value };
  }

  it('waits 3.5 seconds, scrolls, and returns to the top under black', () => {
    const s = setup();
    s.advance(1); s.advance(3499);
    expect(s.scroll).not.toHaveBeenCalled();
    s.advance(1); s.advance(50);
    expect(s.scroll).toHaveBeenCalled();
    for (let i = 0; i < 1000 && !s.reset.mock.calls.length; i++) s.advance(50);
    expect(s.reset).toHaveBeenCalledOnce();
    expect((document.querySelector('.demo-blackout') as HTMLElement).style.opacity).toBe('1');
    s.advance(650); s.scroll.mockClear(); s.advance(3499);
    expect(s.scroll).not.toHaveBeenCalled();
    s.advance(1); s.advance(50);
    expect(s.scroll).toHaveBeenCalled();
  });

  it('hands control to input and restarts only after 20 seconds of inactivity', () => {
    const s = setup();
    s.advance(1); s.advance(3500); s.advance(50); s.scroll.mockClear();
    window.dispatchEvent(new WheelEvent('wheel'));
    expect(s.release).toHaveBeenCalled();
    s.advance(19999);
    expect(s.scroll).not.toHaveBeenCalled();
    expect(s.reset).not.toHaveBeenCalled();
    window.dispatchEvent(new WheelEvent('wheel'));
    s.advance(19999);
    expect(s.reset).not.toHaveBeenCalled();
    s.advance(1); s.advance(850);
    expect(s.reset).toHaveBeenCalledOnce();
  });

  it('cancels a blackout before the reset when the user scrolls', () => {
    const s = setup();
    window.dispatchEvent(new WheelEvent('wheel'));
    s.advance(20000); s.advance(350);
    const overlay = document.querySelector('.demo-blackout') as HTMLElement;
    expect(Number(overlay.style.opacity)).toBeGreaterThan(0);
    expect(s.reset).not.toHaveBeenCalled();
    window.dispatchEvent(new WheelEvent('wheel'));
    expect(overlay.style.opacity).toBe('0');
    s.scroll.mockClear(); s.advance(1000);
    expect(s.reset).not.toHaveBeenCalled();
    expect(s.scroll).not.toHaveBeenCalled();
  });

  it('cancels the fade back in after a reset on any key press', () => {
    const s = setup();
    window.dispatchEvent(new WheelEvent('wheel'));
    s.advance(20000); s.advance(850);
    expect(s.reset).toHaveBeenCalledOnce();
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    expect((document.querySelector('.demo-blackout') as HTMLElement).style.opacity).toBe('0');
    s.scroll.mockClear(); s.advance(3000);
    expect(s.scroll).not.toHaveBeenCalled();
    expect(s.reset).toHaveBeenCalledOnce();
  });
  it('keeps scrolling continuously through the liquid labels at the slower pace', () => {
    const s = setup();
    s.advance(1); s.advance(3500);
    s.setTime(3.34);
    s.scroll.mockClear();
    s.advance(50);
    expect(s.scroll).toHaveBeenCalledWith({ top: 4.75, behavior: 'instant' });
    for (let i = 0; i < 20; i++) {
      s.setTime(3.65);
      s.scroll.mockClear();
      s.advance(50);
      expect(s.scroll).toHaveBeenCalledOnce();
    }
  });

  it('ignores mouse movement but allows clicking and dragging to take over', () => {
    const s = setup();
    s.advance(1); s.advance(3500);
    window.dispatchEvent(new Event('pointermove'));
    s.advance(50);
    expect(s.release).not.toHaveBeenCalled();
    expect(s.scroll).toHaveBeenCalled();
    window.dispatchEvent(new Event('pointerdown'));
    s.scroll.mockClear();
    s.advance(50);
    expect(s.scroll).not.toHaveBeenCalled();
    s.advance(19000);
    window.dispatchEvent(new Event('pointermove'));
    window.dispatchEvent(new Event('pointerup'));
    s.advance(19999);
    expect(s.reset).not.toHaveBeenCalled();
    s.advance(1); s.advance(850);
    expect(s.reset).toHaveBeenCalledOnce();
  });

  it('detects manual scrolling without treating its own scrolls as input', () => {
    const s = setup();
    s.advance(1); s.advance(3500);
    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(500);
    window.dispatchEvent(new Event('scroll'));
    expect(s.release).toHaveBeenCalled();
    s.scroll.mockClear(); s.advance(50);
    expect(s.scroll).not.toHaveBeenCalled();
  });

});
