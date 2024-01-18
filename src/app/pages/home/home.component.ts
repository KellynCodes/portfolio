import { Component, Inject, PLATFORM_ID, afterRender } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faSolidLaptopCode, faSolidPen } from '@ng-icons/font-awesome/solid';
import Typed, { TypedOptions } from 'typed.js';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'kelly-home',
  standalone: true,
  imports: [
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    NgIconComponent,
  ],
  viewProviders: [
    provideIcons({
      faSolidLaptopCode,
      faSolidPen,
    }),
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  typedJs!: Typed;
  public isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    const options: TypedOptions = {
      strings: ['Software Engineer', 'Dotnet Developer', 'Angular Developer'],
      typeSpeed: 50,
      backSpeed: 15,
      showCursor: true,
      cursorChar: '|',
      loop: true,
    };

    if (this.isBrowser) {
      this.typedJs = new Typed('.my-profession', options);
    }
  }

  ngOnDestroy(): void {
    this.typedJs?.destroy();
  }
}
