export const project = {
  pt: {
    project: {
      titleHead: 'Projetos',
      title: 'Meus Projetos',
      subtitle:
        'Aqui exponho meus principais projetos acadêmicos e pessoais que estão "Open Source" no github',
      repository: 'Repositório',
      page: 'Navegar',
      button1: 'Ver no GitHub',
      button2: 'Fale comigo',
      projects: [
        {
          id: 1,
          name: 'Target CRM',
          src: '/images/projects/target.png',
          projectUrl: 'https://targetcrm.vercel.app/',
          credentials:
            'Usuário de teste: (Email: admin@admin.com, Senha: password)',
          repoUrl: 'https://github.com/vinicius-hso/api-sem3-target-crm',
          description: `TARGET é um projeto acadêmico, onde desenvolvemos uma Aplicação Web de CRM (Customer Relationship Management) para organização dos processos comerciais, oferecendo suporte adequado às áreas de vendas e negócios para a empresa parceira da universidade (Ionic Heath). Minha atuação neste projeto foi como TechLead Frontend, onde fiquei responsável pelo design, tecnologias, subdivisão de tarefas e principal desenvolvedor frontend`,
          tasks: [
            'Realizar o monitoramento e acompanhamento de negociações',
            'Importação de arquivos com contatos',
            'Design responsivo',
            'Visualizar as negociações em um Dashboard'
          ],
          stacks: [
            'React',
            'Next',
            'TypeScript',
            'StyledComponents',
            'Node',
            'Postgres',
            'Figma',
            'Mui'
          ]
        },
        {
          id: 2,
          name: 'eSoja',
          src: '/images/projects/esoja.png',
          isApp: true,
          projectUrl:
            'https://firebasestorage.googleapis.com/v0/b/esoja-345711.appspot.com/o/app-release.apk?alt=media&token=51dbad93-cbbd-4cf2-a889-aad05425eddd',
          repoUrl:
            'https://github.com/cluster-8/esoja-mobile/tree/mobile/frontend',
          description: `eSoja é um projeto acadêmico, para atender a empresa parceira (Visiona), onde desenvolvemos um aplicativo colaborativo para produtores rurais, o aplicativo fornece informações sobre produtividade, mercado, clima e estatísticas regionais para auxiliar o produtor nas tomadas de decisões. Minha atuação foi como TechLead Frontend, fui responsável pelo desenvolvimento frontend (mobile), definição de tecnologias, pesquisa de API para consumo e login social (Google e Facebook)`,
          tasks: [
            'Previsão do Tempo',
            'Estatísticas do usuário e comparação regional',
            'Informações sobre o mercado e cotações',
            'Login social com Google e Facebook'
          ],
          stacks: [
            'ReactNative',
            'Nest',
            'TypeScript',
            'StyledComponents',
            'Node',
            'Postgres',
            'Firebase',
            'Prisma',
            'Figma',
            'Expo',
            'GoogleMaps',
            'Facebook',
            'Google'
          ]
        },
        {
          id: 3,
          name: 'GitHub-Clone',
          src: '/images/projects/github.png',
          projectUrl: 'https://githubapi-theta.vercel.app/',
          repoUrl: 'https://github.com/Willian-Rodrigues/githubapi',
          description: `GitHub é um projeto pessoal, produzido para gerar aprendizado, consiste em uma aplicação clone do github utilizando a api do oficial do github e login social com o próprio github.`,
          tasks: [
            'Visualização de atividades',
            'Visualização de repositórios',
            'Login com github oauth',
            'Tema personalizado'
          ],
          stacks: [
            'React',
            'Next',
            'TypeScript',
            'StyledComponents',
            'Figma',
            'Github'
          ]
        },
        {
          id: 4,
          name: 'Nest Prisma Query Builder Interface',
          src: '/images/projects/query-builder.png',
          projectUrl:
            'https://www.npmjs.com/package/nestjs-prisma-querybuilder-interface',
          repoUrl:
            'https://github.com/Willian-Rodrigues/nestjs-prisma-querybuilder-interface',
          description: `O nest-prisma-querybuilder-interface é uma interface frontend para query-strings, a aplicação é um pacote NPM (Node Package Manager), para auxiliar outros desenvolvedores no uso de query em url`,
          tasks: ['Código aberto', 'Colaboração'],
          stacks: ['TypeScript', 'NPM']
        }
      ]
    }
  },
  en: {
    project: {
      titleHead: 'Projects',
      title: 'My Projects',
      subtitle:
        'Here I expose my main academic and personal projects that are "Open Source" on github',
      repository: 'Repository',
      page: 'Live',
      button1: 'View on GitHub',
      button2: 'Contact me',
      projects: [
        {
          id: 1,
          name: 'Target CRM',
          credentials:
            'Test user: (Email: admin@admin.com, Password: password)',
          src: '/images/projects/target.png',
          projectUrl: 'https://targetcrm.vercel.app/',
          repoUrl: 'https://github.com/vinicius-hso/api-sem3-target-crm',
          description: `TARGET is an academic project, where we developed a CRM (Customer Relationship Management) Web Application to organize business processes, offering adequate support to the commercial and business areas of the university's partner company (Ionic Heath). My role in this project was as TechLead Frontend, where I was responsible for the design, technologies, subdivision of tasks and main frontend developer.`,
          tasks: [
            'Perform monitoring and tracking of trades',
            'Importing files with contacts',
            'Responsive design',
            'View trades in a Dashboard'
          ],
          stacks: [
            'React',
            'Next',
            'TypeScript',
            'StyledComponents',
            'Node',
            'Postgres',
            'Figma',
            'Mui'
          ]
        },
        {
          id: 2,
          name: 'eSoja',
          src: '/images/projects/esoja.png',
          isApp: true,
          projectUrl:
            'https://firebasestorage.googleapis.com/v0/b/esoja-345711.appspot.com/o/app-release.apk?alt=media&token=51dbad93-cbbd-4cf2-a889-aad05425eddd',
          repoUrl:
            'https://github.com/cluster-8/esoja-mobile/tree/mobile/frontend',
          description: `eSoja is an academic project, to serve the partner company (Visiona), where we developed a collaborative application for rural producers, the application provides information on productivity, market, climate and regional statistics to assist the producer in decision making. My role was as TechLead Frontend, I was responsible for frontend development (mobile), definition of technologies, API research for consumption and social login (Google and Facebook)`,
          tasks: [
            'Weather forecast',
            'User stats and regional comparison',
            'Market information and Quotations',
            'Social login with Google and Facebook'
          ],
          stacks: [
            'ReactNative',
            'Nest',
            'TypeScript',
            'StyledComponents',
            'Node',
            'Postgres',
            'Firebase',
            'Prisma',
            'Figma',
            'Expo',
            'GoogleMaps',
            'Facebook',
            'Google'
          ]
        },
        {
          id: 3,
          name: 'GitHub-Clone',
          src: '/images/projects/github.png',
          projectUrl: 'https://githubapi-theta.vercel.app/',
          repoUrl: 'https://github.com/Willian-Rodrigues/githubapi',
          description: `GitHub is a personal project, produced to generate learning, it consists of a github clone application using the official github api and social login with github itself.`,
          tasks: [
            'Activity view',
            'Repository view',
            'Login with github oauth',
            'Custom theme'
          ],
          stacks: [
            'React',
            'Next',
            'TypeScript',
            'StyledComponents',
            'Figma',
            'Github'
          ]
        },
        {
          id: 4,
          name: 'Nest Prisma Query Builder Interface',
          src: '/images/projects/query-builder.png',
          projectUrl:
            'https://www.npmjs.com/package/nestjs-prisma-querybuilder-interface',
          repoUrl:
            'https://github.com/Willian-Rodrigues/nestjs-prisma-querybuilder-interface',
          description: `The nest-prisma-querybuilder-interface is a frontend interface for query-strings, the application is an NPM package (Node Package Manager), to assist other developers in the use of url query`,
          tasks: ['Open Source', 'Collaboration'],
          stacks: ['TypeScript', 'NPM']
        }
      ]
    }
  }
};
