import { translate } from '../../utils/translate.util';

export interface Work {
  name: string;
  src: string;
  occupation: string;
  period: string;
  tasks: string[];
  stacks: string[];
  id: number;
}

export const works: Work[] = [
  {
    id: 1,
    name: 'eCondos Sistemas',
    src: '/images/works/econdos.webp',
    occupation: translate('work.title'),
    period: 'jun/2021 - Atual',
    tasks: [
      'Desenvolver e dar manutenção em aplicações web/mobile',
      'Novas funcionalidades',
      'Resolver bugs',
      'Integrações com hardwares'
    ],
    stacks: [
      'Angular',
      'Ionic',
      'Node',
      'MongoDB',
      'Bootstrap',
      'Sass',
      'Rxjs',
      'JavaScript',
      'TypeScript'
    ]
  },
  {
    id: 2,
    name: 'eFone by eCondos',
    src: '/images/works/efone.png',
    occupation: 'Desenvolvedor React-Native',
    period: 'jan/2022 - mai/2022',
    tasks: [
      'Desenvolver aplicação mobile de chamadas voip',
      'Integração com procolo SIP',
      'Implementar CallKit para o desenvolvimento IOS',
      'Publicação nas lojas (PlayStore, AppStore)',
      'Integrar api Vox-Implant',
      'CallKeep android e ios'
    ],
    stacks: [
      'ReactNative',
      'Ios',
      'Android',
      'Node',
      'MongoDB',
      'StyledComponents',
      'TypeScript'
    ]
  },
  {
    id: 3,
    name: 'Assejus',
    src: '/images/works/assejus.png',
    occupation: 'Desenvolvedor FullStack',
    period: 'fev/2022 - mai/2022',
    tasks: [
      'Desenvolver aplicação web',
      'Integração storage firebase',
      'Prototipo e Identidade visual',
      'Modelagem de Dados',
      'Autenticação JWT'
    ],
    stacks: [
      'React',
      'Next',
      'Mui',
      'Emotion',
      'Node',
      'Nest',
      'MySql',
      'Prisma',
      'JWT',
      'TypeScript'
    ]
  },
  {
    id: 4,
    name: 'Marina Maré Mansa',
    src: '/images/works/marina.png',
    occupation: 'Desenvolvedor FullStack',
    period: 'fev/2022 - abr/2022',
    tasks: [
      'Desenvolver aplicação web',
      'Prototipo e Identidade visual',
      'Modelagem de Dados',
      'Autenticação JWT'
    ],
    stacks: [
      'React',
      'Next',
      'Mui',
      'Emotion',
      'Node',
      'Nest',
      'MongoDB',
      'Prisma',
      'JWT',
      'TypeScript'
    ]
  }
];
