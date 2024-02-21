import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectDto, Projects } from '../../data/projects';
import { faSolidLink } from '@ng-icons/font-awesome/solid';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faBrandGithub } from '@ng-icons/font-awesome/brands';
import { LoaderComponent } from '../../component/loader/loader.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'kelly-projects',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgIconComponent,
    LoaderComponent,
    SlickCarouselModule,
  ],
  viewProviders: [
    provideIcons({
      faSolidLink,
      faBrandGithub,
    }),
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public projects = signal<ProjectDto[]>(Projects);
  sliderConfig = {
    dots: true,
    draggable: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnDotsHover: true,
    pauseOnHover: false,
  };
}
