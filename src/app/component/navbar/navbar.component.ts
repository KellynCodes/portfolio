import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  faSolidHouse,
  faSolidCircleUser,
  faSolidPhone,
  faSolidFileImage,
} from '@ng-icons/font-awesome/solid';
import { faBrandGithub } from '@ng-icons/font-awesome/brands';
@Component({
  selector: 'kelly-navbar',
  standalone: true,
  imports: [RouterLink, NgIconComponent],
  viewProviders: [
    provideIcons({
      faSolidHouse,
      faSolidPhone,
      faSolidFileImage,
      faSolidCircleUser,
      faBrandGithub,
    }),
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  server: string = 'https://kellyncodesolution.onrender.com';
}
