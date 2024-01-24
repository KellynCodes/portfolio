import {
  AfterViewInit,
  Component,
  OnInit,
  afterRender,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import * as Aos from 'aos';
import { PreloaderComponent } from './component/preloader/preloader.component';

@Component({
  selector: 'kelly-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    PreloaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isPageLoading = signal<boolean>(true);
  constructor() {
    afterRender(() => {
      Aos.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: false,
        mirror: true,
      });
    });
  }

  ngOnInit(): void {}
}
