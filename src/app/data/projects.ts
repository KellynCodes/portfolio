export const Projects: ProjectDto[] = [
  {
    id: 1,
    title: 'Unizik Hostel Management System',
    tags: ['Blazor', '.NET', 'Asp.Net Core', 'AWS', 'Gitlab', 'CI/CD'],
    description:
      'This system help students to rent/book for their apartment and as well provides automated rent payment and reminder.',
    liveLink: 'https://elmadaunizikhostels.com/',
    image: 'assets/projects/emaldaunizik.jpg',
  },
  {
    id: 2,
    title: 'Welcome to University of Nigeria Portal',
    tags: ['.NET', 'Asp.Net Core', 'AWS', 'Azure', 'GitHub', 'CI/CD'],
    description:
      'Step through the virtual doors of our Portal - Your Gateway to Knowledge, Excellence, and Limitless Possibilities!',
    liveLink: 'https://unnportal.unn.edu.ng',
    image: 'assets/projects/unn.PNG',
  },
  {
    id: 3,
    title: 'Welcome to Federal University of Technology Portal',
    tags: ['.NET', 'Asp.Net Core', 'AWS', 'Azure', 'GitHub', 'CI/CD'],
    description:
      'Experience the best education with our diverse programs and ample learning resources. Explore more below.',
    liveLink: 'https://portal.futo.edu.ng',
    image: 'assets/projects/futo.PNG',
  },

  {
    id: 4,
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
    githubLink: 'https://github.com/KellynCodes/zenblog',
    liveLink: 'http://zendblog.vercel.app',
    image: '../../assets/projects/zen-blog.PNG',
  },
  {
    id: 5,
    title: 'Portfolio Website for a graphic designer.',
    tags: [
      'Angular',
      'ng-gallery',
      'light-box',
      'Bootstrap',
      'Github',
      'Vercel',
    ],
    description:
      'An interactive portfolio website for a professional graphics designer.',
    githubLink: 'https://github.com/KellynCodes/andy-portfolio',
    liveLink: 'http://andy-graphics.vercel.app',
    image: '../../assets/projects/andy-portfolio.png',
  },

  {
    id: 6,
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
    id: 7,
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
    liveLink: 'http://sosinc.vercel.app',
    image: '../../assets/projects/specializedorthopedic.PNG',
  },
  {
    id: 8,
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
    liveLink: 'https://sobol-orthopedic.netlify.app/',
    image: '../../assets/projects/sobol.PNG',
  },
  {
    id: 9,
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
    liveLink: 'https://optimal-orthorpedic.netlify.app',
    image: '../../assets/projects/optimalorthopedic.PNG',
  },
];

export interface ProjectDto {
  id: number;
  tags: Array<string>;
  title: string;
  description: string;
  githubLink?: string;
  liveLink: string;
  image: string;
}
