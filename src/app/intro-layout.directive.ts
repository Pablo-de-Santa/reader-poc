import { AfterViewInit, Directive, ElementRef, HostListener, inject } from '@angular/core';
import { applyIntroLayout } from './intro-layout';

@Directive({ selector: '[appIntroLayout]' })
export class IntroLayoutDirective implements AfterViewInit {
  private readonly host = inject(ElementRef<HTMLElement>);
  ngAfterViewInit(): void { this.update(); }
  @HostListener('window:resize')
  update(): void { applyIntroLayout(this.host.nativeElement); }
}
