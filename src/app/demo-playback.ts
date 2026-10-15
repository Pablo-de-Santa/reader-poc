export const isDemoPage = () => window.location.pathname.replace(/\/+$/, '') === '/demo';

/** Drives the existing scroll scene, so playback and manual browsing share one timeline. */
export class DemoPlayback {
  private frame = 0;
  private last = performance.now();
  private phase: 'loading' | 'waiting' | 'playing' | 'manual' | 'out' | 'in' = 'loading';
  private since = this.last;
  private position = 0;
  private held = false;
  private readonly overlay = document.createElement('div');
  private readonly events = ['wheel', 'touchstart', 'touchmove', 'pointerdown', 'pointermove', 'keydown'] as const;

  constructor(private readonly scene: {
    ready: () => boolean;
    time: () => number;
    scrollAt: (time: number) => number;
    reset: () => void;
    release: () => void;
  }) {
    this.overlay.className = 'demo-blackout';
    this.overlay.setAttribute('aria-hidden', 'true');
    document.body.append(this.overlay);
    for (const event of this.events) window.addEventListener(event, this.interact, { capture: true, passive: true });
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('pointerup', this.releasePointer, true);
    window.addEventListener('pointercancel', this.releasePointer, true);
    this.frame = requestAnimationFrame(this.tick);
  }

  private releasePointer = () => { this.held = false; this.since = performance.now(); };
  private onScroll = (event: Event) => {
    if (Math.abs(window.scrollY - this.position) <= 2) return;
    this.position = window.scrollY;
    this.interact(event);
  };

  private interact = (event: Event) => {
    if (event.type === 'pointermove' && !this.held) return;
    if (event.type === 'pointerdown') this.held = true;
    this.scene.release();
    this.phase = 'manual';
    this.since = performance.now();
    this.overlay.style.opacity = '0';
  };

  private tick = (now: number) => {
    const dt = Math.min((now - this.last) / 1000, 0.05);
    this.last = now;
    if (!document.hidden) {
      if (this.phase === 'loading' && this.scene.ready()) {
        this.phase = 'waiting'; this.since = now;
      } else if (this.phase === 'waiting' && now - this.since >= 3500) {
        this.phase = 'playing'; this.position = window.scrollY;
      } else if (this.phase === 'playing') {
        this.play(now, dt);
      } else if (this.phase === 'manual' && !this.held && now - this.since >= 20000 && this.scene.ready()) {
        this.phase = 'out'; this.since = now;
      } else if (this.phase === 'out') {
        this.overlay.style.opacity = String(Math.min(1, (now - this.since) / 650));
        if (now - this.since >= 850) {
          this.position = 0; this.scene.reset();
          this.phase = 'in'; this.since = now;
        }
      } else if (this.phase === 'in') {
        this.overlay.style.opacity = String(1 - Math.min(1, (now - this.since) / 650));
        if (now - this.since >= 650) { this.phase = 'waiting'; this.since = now; }
      }
    } else {
      this.since = now;
    }
    this.frame = requestAnimationFrame(this.tick);
  };

  private play(now: number, dt: number): void {
    const time = this.scene.time();
    // Keep the sample instructions and pipette moving continuously at a readable pace.
    const speed = time >= 3 && time <= 4.65 ? 95 : time >= 8.35 ? 210 : 375;
    const end = this.scene.scrollAt(9.4);
    this.position = Math.min(end, this.position + speed * dt);
    window.scrollTo({ top: this.position, behavior: 'instant' });
    if (this.position >= end && time >= 9.38) { this.phase = 'out'; this.since = now; }
  }

  destroy(): void {
    cancelAnimationFrame(this.frame);
    for (const event of this.events) window.removeEventListener(event, this.interact, true);
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('pointerup', this.releasePointer, true);
    window.removeEventListener('pointercancel', this.releasePointer, true);
    this.overlay.remove();
  }
}
