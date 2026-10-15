import { isDemoPage } from './demo-playback';
import { IntroLayoutDirective } from './intro-layout.directive';
import { Component } from '@angular/core';
import { ReaderHeroComponent } from './features/reader-hero/reader-hero.component';

@Component({
  selector: 'app-root',
  imports: [ReaderHeroComponent, IntroLayoutDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App { readonly demo = isDemoPage(); }
