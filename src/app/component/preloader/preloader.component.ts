import {
  AfterRenderPhase,
  Component,
  ElementRef,
  afterRender,
} from '@angular/core';
import { BrowserApiService } from '../../services/shared/browser.api.service';

@Component({
  selector: 'kelly-preloader',
  standalone: true,
  imports: [],
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.scss',
})
export class PreloaderComponent {
  constructor(
    private elementRef: ElementRef,
    private browserApiService: BrowserApiService
  ) {
    if (this.browserApiService.isBrowser) {
      const preloader: HTMLDivElement =
        this.elementRef.nativeElement.querySelector('.preloader_container');
      window.addEventListener('load', () => {
        preloader.style.display = 'none';
      });
    }
  }
}
