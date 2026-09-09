import { Directive, ElementRef, inject } from '@angular/core';

// Echo's ripple: expand from the pointer, follow it, then retract on exit.
// Event-driven here so the two links do not need a permanent animation loop.
@Directive({
  selector: '[appRipple]',
  standalone: true,
  host: {
    class: 'position-aware-ripple',
    '(pointerenter)': 'enter($event)',
    '(pointermove)': 'move($event)',
    '(pointerleave)': 'leave()',
    '(pointerdown)': 'enter($event, true)',
    '(pointerup)': 'release($event)',
    '(pointercancel)': 'leave()',
    '(focusin)': 'focus()',
    '(focusout)': 'leave()',
  },
})
export class RippleDirective {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  enter(event: PointerEvent, pressed = false): void {
    if (event.pointerType === 'touch' && !pressed) return;
    this.move(event);
    this.element.classList.add('ripple-active');
  }

  move(event: PointerEvent): void {
    const rect = this.element.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    this.position((event.clientX - rect.left) / rect.width * 100, (event.clientY - rect.top) / rect.height * 100);
  }

  focus(): void {
    this.position(50, 50);
    this.element.classList.add('ripple-active');
  }

  leave(): void { this.element.classList.remove('ripple-active'); }
  release(event: PointerEvent): void { if (event.pointerType === 'touch') this.leave(); }

  private position(x: number, y: number): void {
    this.element.style.setProperty('--ripple-x', `${x}%`);
    this.element.style.setProperty('--ripple-y', `${y}%`);
    this.element.style.setProperty('--ripple-size', `${Math.hypot(this.element.clientWidth, this.element.clientHeight) * 2}px`);
  }
}
