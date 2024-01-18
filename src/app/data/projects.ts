export const Projects: ProjectDto[] = [
  {
    id: 1,
    title: 'Unizike Hostel Management System',
    tags: ['Blazor', '.NET', 'Asp.Net Core', 'AWS', 'Gitlab', 'CI/CD'],
    description:
      'This system help students to rent/book for their apartment and as well provides automated rent payment and reminder.',
    githubLink: 'https://elmadaunizikhostels.com/',
    liveLink: 'https://elmadaunizikhostels.com/',
    image: 'assets/projects/emaldaunizik.jpg',
  },

  {
    id: 2,
    title: 'Blogging Site | Angular & API from dummyapi.io.',
    tags: [
      'Angular',
      'dummyapi.io',
      'pagination',
      'TailwindCSS',
      'Search Filtering',
      'Github',
      'Vercel',
    ],
    description:
      'In this project I demonstrated my skill working with api and managing application state asynchronously with with ngrx and rxjs',
    githubLink: 'https://github.com/KellynCodes/stackbuild-blog-site',
    liveLink: 'http://stackbuild-blog-site.vercel.app',
    image: '../../assets/projects/zen-blog.PNG',
  },

  {
    id: 3,
    title: 'Web5 Hackathon | NextJs & TBD',
    tags: [
      'Next.Js',
      'Web5',
      'TBD',
      'TailwindCSS',
      'Vanilla Css',
      'Github',
      'Vercel',
    ],
    description:
      'This project leverages the power of web2 and web5 to create 100% decentralized application where users owen and manage their data.',
    githubLink: 'https://github.com/KellynCodes/OmniVerse',
    liveLink: 'https://omniverze.vercel.app',
    image: '../../assets/projects/web5-hackathon.PNG',
  },
  {
    id: 4,
    title: 'Orthopedic Website | Angular',
    tags: [
      'Angular',
      'Hospital Landing page',
      'TailwindCss',
      'EmailJS',
      'Hostinger',
    ],
    description:
      'Orthopedic Website Landing Page, styled with tailwindCss and with contact and appointment forms.',
    githubLink: 'https://github.com/KellynCodes/sosinc',
    liveLink: 'http://specializedorthosurgeons.com',
    image: '../../assets/projects/specializedorthopedic.PNG',
  },
  {
    id: 5,
    title: 'Orthopedic Website | Angular',
    tags: [
      'Angular',
      'Hospital Landing page',
      'TailwindCss',
      'EmailJS',
      'Hostinger',
    ],
    description:
      'Orthopedic Website Landing Page, styled with tailwindCss and with contact and appointment forms.',
    githubLink: 'https://github.com/KellynCodes/sobol-orthopedic',
    liveLink: 'https://sobolorthomed.com',
    image: '../../assets/projects/sobol.PNG',
  },
  {
    id: 6,
    title: 'Orthopedic Website | Angular',
    tags: [
      'Angular',
      'Hospital Landing page',
      'TailwindCss',
      'EmailJS',
      'Hostinger',
    ],
    description:
      'Orthopedic Website Landing Page, styled with tailwindCss and with contact and appointment forms.',
    githubLink: 'https://github.com/KellynCodes/optimal-orthopedic',
    liveLink: 'https://optimalorthomed.com',
    image: '../../assets/projects/optimalorthopedic.PNG',
  },
];

export interface ProjectDto {
  id: number;
  tags: Array<string>;
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  image: string;
}
