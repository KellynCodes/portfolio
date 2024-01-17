import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  PLATFORM_ID,
  Inject,
  signal,
  HostListener,
} from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  faBrandXTwitter,
  faBrandGithub,
  faBrandLinkedin,
  faBrandDiscord,
  faBrandUpwork,
} from '@ng-icons/font-awesome/brands';
import { faSolidCircleArrowUp } from '@ng-icons/font-awesome/solid';

@Component({
  selector: 'kelly-footer',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [
    provideIcons({
      faBrandXTwitter,
      faBrandGithub,
      faBrandLinkedin,
      faBrandDiscord,
      faBrandUpwork,
      faSolidCircleArrowUp,
    }),
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public year = new Date().getFullYear();
  public isBrowser: boolean;
  public windowScroll = signal<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.windowScrollCheck();
  }

  @HostListener('window:scroll', ['$event'])
  windowScrollCheck(): void {
    if (this.isBrowser) {
      const isWindowScroll =
        window.innerWidth > 700 && window.innerHeight > 200;
      this.windowScroll.set(isWindowScroll);
      console.log(isWindowScroll);
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event): void {
    if (this.isBrowser) {
      const isWindowScroll =
        window.innerWidth > 700 && window.innerHeight > 200;
      this.windowScroll.set(isWindowScroll);
      console.log(isWindowScroll);
    }
  }
}
