import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { LoaderComponent } from '../../component/loader/loader.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faSolidLaptopCode, faSolidPen } from '@ng-icons/font-awesome/solid';

@Component({
  selector: 'kelly-home',
  standalone: true,
  imports: [
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    LoaderComponent,
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
export class HomeComponent {}
