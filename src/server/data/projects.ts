export const Projects: ProjectDto[] = [
  {
    id: 1,
    name: 'Hostel Management System',
    description: 'Unizike Hostel Management System',
    githubLink: 'https://elmadaunizikhostels.com/',
    liveLink: 'https://elmadaunizikhostels.com/',
    image: 'assets/images/emaldaunizik.jpg',
  },

  {
    id: 4,
    name: 'Hospital Management System',
    description: 'Hospital Management System',
    githubLink:
      'https://github.com/engkelly?tab=repositories&q=mediprof&type=&language=&sort=',
    liveLink: 'https://mediprof.netlify.app',
    image: 'assets/images/mediprof.JPG',
  },
  {
    id: 5,
    name: 'Food Ordering app',
    description: 'Food Ordering app',
    githubLink:
      'https://github.com/engkelly?tab=repositories&q=meal&type=&language=&sort=',
    liveLink: 'https://meal-ui.netlify.app',
    image: 'assets/images/newMealHero.JPG',
  },
  {
    id: 6,
    name: 'Portfolio/Blog site | Angular and .NET',
    description: 'Portfolio/Blog site | Angular and .NET',
    githubLink:
      'https://github.com/KellynCodes?tab=repositories&q=kelly&type=&language=&sort=',
    liveLink: 'https://engkelly.netlify.app',
    image: 'assets/images/kelly.JPG',
  },
  {
    id: 7,
    name: 'Consuming github API',
    description: 'Consuming github API',
    githubLink: 'https://github.com/KellynCodes/search_git_users',
    liveLink: 'https://kellygithubusers.netlify.app',
    image: 'assets/images/mediprof.JPG',
  },
];

export interface ProjectDto {
  id: number;
  name: string;
  description: string;
  githubLink: string;
  liveLink: string;
  image: string;
}
