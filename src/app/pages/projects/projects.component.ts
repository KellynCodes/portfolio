import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Gallery,
  GalleryItem,
  GalleryModule,
  GalleryRef,
  ImageItem,
} from 'ng-gallery';
import { RouterLink } from '@angular/router';
import { ProjectDto, Projects } from '../../data/projects';
import { faSolidLink } from '@ng-icons/font-awesome/solid';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faBrandGithub } from '@ng-icons/font-awesome/brands';

@Component({
  selector: 'kelly-projects',
  standalone: true,
  imports: [GalleryModule, CommonModule, RouterLink, NgIconComponent],
  viewProviders: [
    provideIcons({
      faSolidLink,
      faBrandGithub,
    }),
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  galleryId = 'PROJECT_GALLERY';
  public projects: ProjectDto[] = Projects;
  // server: string = 'https://kellyncodesolution.onrender.com';

  images: GalleryItem[] = [];

  constructor(private gallery: Gallery) {}

  ngOnInit() {
    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);
    // Set items array
    this.projects.map((project) => {
      this.images.push(
        new ImageItem({
          src: project.image,
          thumb: project.image,
          alt: project.description,
          args: {
            githubLink: project.githubLink,
            liveLink: project.liveLink,
            tags: project.tags,
          },
        })
      );
    });

    galleryRef.load(this.images);
  }
}
