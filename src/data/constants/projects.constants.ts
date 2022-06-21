export interface Project {
  id: number;
  name: string;
  projectUrl?: string;
  repoUrl: string;
  src: string;
  description: string;
  stacks: string[];
  tasks: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Target CRM',
    src: '/images/projects/target.png',
    projectUrl: 'https://targetcrm.vercel.app/',
    repoUrl: 'https://github.com/vinicius-hso/api-sem3-target-crm',
    description: `TARGET - Business Solutions é a proposta de solução oferecida pela equipe Cluster 8 em forma de aplicação web. A aplicação finalizada deve:`,
    tasks: ['Pixel perfect design', 'Absolute positioning', 'Custom classes'],
    stacks: [
      'React',
      'Next',
      'TypeScript',
      'StyledComponents',
      'Node',
      'Postgres',
      'Figma'
    ]
  },
  {
    id: 2,
    name: 'eSoja',
    src: '/images/projects/esoja.png',
    repoUrl: 'https://github.com/cluster-8/esoja-mobile/tree/mobile/frontend',
    description: `TARGET - Business Solutions é a proposta de solução oferecida pela equipe Cluster 8 em forma de aplicação web. A aplicação finalizada deve:`,
    tasks: ['Pixel perfect design', 'Absolute positioning', 'Custom classes'],
    stacks: [
      'ReactNative',
      'Nest',
      'TypeScript',
      'StyledComponents',
      'Node',
      'Postgres',
      'Prisma',
      'Figma',
      'Expo',
      'GoogleMaps'
    ]
  },
  {
    id: 3,
    name: 'GitHub',
    src: '/images/projects/github.png',
    projectUrl: 'https://githubapi-theta.vercel.app/',
    repoUrl: 'https://github.com/Willian-Rodrigues/githubapi',
    description: `TARGET - Business Solutions é a proposta de solução oferecida pela equipe Cluster 8 em forma de aplicação web. A aplicação finalizada deve:`,
    tasks: ['Pixel perfect design', 'Absolute positioning', 'Custom classes'],
    stacks: ['React', 'Next', 'TypeScript', 'StyledComponents', 'Figma']
  },
  {
    id: 4,
    name: 'Query Builder',
    src: '/images/projects/query-builder.png',
    projectUrl:
      'https://www.npmjs.com/package/nestjs-prisma-querybuilder-interface',
    repoUrl:
      'https://github.com/Willian-Rodrigues/nestjs-prisma-querybuilder-interface',
    description: `TARGET - Business Solutions é a proposta de solução oferecida pela equipe Cluster 8 em forma de aplicação web. A aplicação finalizada deve:`,
    tasks: ['Pixel perfect design', 'Absolute positioning', 'Custom classes'],
    stacks: ['TypeScript', 'NPM']
  }
];
