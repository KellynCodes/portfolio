export const Projects: ProjectDto[] = [
  {
    id: 1,
    tags: ['Blazor', '.NET', 'Asp.Net Core', 'AWS', 'Gitlab', 'CI/CD'],
    description: 'Unizike Hostel Management System',
    githubLink: 'https://elmadaunizikhostels.com/',
    liveLink: 'https://elmadaunizikhostels.com/',
    image: 'assets/projects/emaldaunizik.jpg',
  },

  {
    id: 2,
    tags: [
      'Angular',
      'dummyapi.io',
      'pagination',
      'TailwindCSS',
      'Search Filtering',
      'Github',
      'Vercel',
    ],
    description: 'Blogging Site | Angular & API from dummyapi.io.',
    githubLink: 'https://github.com/KellynCodes/stackbuild-blog-site',
    liveLink: 'http://stackbuild-blog-site.vercel.app',
    image: '../../assets/projects/zen-blog.PNG',
  },

  {
    id: 3,
    tags: [
      'Next.Js',
      'Web5',
      'TBD',
      'TailwindCSS',
      'Vanilla Css',
      'Github',
      'Vercel',
    ],
    description: 'Web5 Hackathon | NextJs & TBD',
    githubLink: 'https://github.com/KellynCodes/OmniVerse',
    liveLink: 'https://omniverze.vercel.app',
    image: '../../assets/projects/web5-hackathon.PNG',
  },
  {
    id: 4,
    tags: [
      'Angular',
      'Hospital Landing page',
      'TailwindCss',
      'EmailJS',
      'Hostinger',
    ],
    description: 'Orthopedic Website | Angular',
    githubLink: 'https://github.com/KellynCodes/sosinc',
    liveLink: 'http://specializedorthosurgeons.com',
    image: '../../assets/projects/specializedorthopedic.PNG',
  },
  {
    id: 5,
    tags: [
      'Angular',
      'Hospital Landing page',
      'TailwindCss',
      'EmailJS',
      'Hostinger',
    ],
    description: 'Orthopedic Website | Angular',
    githubLink: 'https://github.com/KellynCodes/sobol-orthopedic',
    liveLink: 'https://sobolorthomed.com',
    image: '../../assets/projects/sobol.PNG',
  },
  {
    id: 6,
    tags: [
      'Angular',
      'Hospital Landing page',
      'TailwindCss',
      'EmailJS',
      'Hostinger',
    ],
    description: 'Orthopedic Website | Angular',
    githubLink: 'https://github.com/KellynCodes/optimal-orthopedic',
    liveLink: 'https://optimalorthomed.com',
    image: '../../assets/projects/optimalorthopedic.PNG',
  },
];

export interface ProjectDto {
  id: number;
  tags: Array<string>;
  description: string;
  githubLink: string;
  liveLink: string;
  image: string;
}
