import { Component } from '@angular/core';
import { ReaderHeroComponent } from './features/reader-hero/reader-hero.component';

@Component({
  selector: 'app-root',
  imports: [ReaderHeroComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
