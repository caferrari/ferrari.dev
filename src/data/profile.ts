export const PROFILE = {
  name: 'Carlos André Ferrari',
  title: 'Staff Software Engineer',
  location: 'Sorocaba, SP, Brazil',
  website: 'ferrari.dev',
  github: 'caferrari',
  linkedin: 'caferrari',
  twitter: 'caferrari',
  yearsOfExperience: 25,
  bio: `Web developer since 2001 with deep expertise in open-source web technologies. 
Focused on building scalable, high-quality software using TypeScript, Node.js and React ecosystems. 
Passionate about system design, distributed architectures and developer tooling.`,
  highlights: [
    '25+ years building for the web',
    'Staff Engineer leading architecture decisions',
    'Auth systems with zero downtime for 6+ years',
    'Checkout systems processing millions in transactions'
  ]
} as const;

export const TECH_STACK = {
  languages: [
    { name: 'TypeScript', level: 'expert' },
    { name: 'JavaScript', level: 'expert' },
    { name: 'PHP', level: 'expert' },
    { name: 'C#', level: 'advanced' },
    { name: 'Java', level: 'advanced' },
    { name: 'SQL', level: 'expert' }
  ],
  frontend: [
    { name: 'React', level: 'expert' },
    { name: 'React Native', level: 'advanced' },
    { name: 'Next.js', level: 'advanced' },
    { name: 'Vue.js', level: 'advanced' },
    { name: 'Angular', level: 'advanced' },
    { name: 'Tailwind CSS', level: 'expert' }
  ],
  backend: [
    { name: 'Node.js', level: 'expert' },
    { name: 'Express', level: 'expert' },
    { name: 'NestJS', level: 'advanced' },
    { name: 'Spring Boot', level: 'advanced' },
    { name: 'REST APIs', level: 'expert' },
    { name: 'GraphQL', level: 'advanced' }
  ],
  infrastructure: [
    { name: 'AWS', level: 'expert' },
    { name: 'Docker', level: 'expert' },
    { name: 'Kubernetes/EKS', level: 'advanced' },
    { name: 'CI/CD', level: 'expert' },
    { name: 'Nginx', level: 'advanced' },
    { name: 'Datadog', level: 'advanced' }
  ],
  databases: [
    { name: 'PostgreSQL', level: 'expert' },
    { name: 'MySQL', level: 'expert' },
    { name: 'MongoDB', level: 'advanced' },
    { name: 'Redis', level: 'expert' },
    { name: 'ElasticSearch', level: 'advanced' }
  ],
  architecture: [
    { name: 'System Design', level: 'expert' },
    { name: 'Microservices', level: 'expert' },
    { name: 'Event-Driven', level: 'expert' },
    { name: 'Message Queues (SQS/RabbitMQ)', level: 'expert' },
    { name: 'CQRS', level: 'advanced' },
    { name: 'DDD', level: 'advanced' }
  ]
} as const;

export type TechLevel = 'expert' | 'advanced';

export interface Experience {
  company: string;
  roles: {
    title: string;
    period: string;
    description?: string;
  }[];
  location: string;
}

export const EXPERIENCES: Experience[] = [
  {
    company: 'Eduzz',
    roles: [
      {
        title: 'Staff Software Engineer',
        period: 'Jan 2022 — Present',
        description:
          'Leading architecture decisions, building internal tooling and driving technical strategy across the engineering org.'
      },
      {
        title: 'Full Stack Engineer',
        period: 'Feb 2018 — Nov 2022',
        description:
          'Built the checkout system and authentication platform from scratch. Designed microservices handling millions of transactions.'
      }
    ],
    location: 'Sorocaba, SP'
  },
  {
    company: 'Tegra - Inovação em TI',
    roles: [
      {
        title: 'Full Stack Developer',
        period: 'Oct 2015 — Feb 2018',
        description:
          'Designed scalable software architectures using Docker, Node.js, TypeScript, Spring Boot, Vue.js and MongoDB.'
      }
    ],
    location: 'Sorocaba, SP'
  },
  {
    company: 'Conexão Tocantins',
    roles: [
      {
        title: 'Full Stack Developer',
        period: 'Mar 2007 — Jan 2019',
        description: 'Built and maintained a high-traffic news portal focused on performance, SEO and stability.'
      }
    ],
    location: 'Palmas, TO'
  },
  {
    company: 'Secom - Governo do Tocantins',
    roles: [
      {
        title: 'Web Developer',
        period: 'Nov 2003 — Nov 2014',
        description:
          'Created dozens of software products and websites for the state government, including CMS, ad servers and digital archives.'
      }
    ],
    location: 'Palmas, TO'
  },
  {
    company: 'Kingo Labs',
    roles: [
      {
        title: 'Developer',
        period: 'Aug 2010 — Dec 2010',
        description: 'Web crawlers, social API integrations (Twitter, Foursquare, Facebook) and database optimization.'
      }
    ],
    location: 'Remote'
  },
  {
    company: 'Tecnoplace',
    roles: [
      {
        title: 'Web Developer',
        period: 'Mar 2001 — Nov 2003',
        description: 'Where it all began. First professional web development role.'
      }
    ],
    location: 'Palmas, TO'
  }
];

export interface Project {
  name: string;
  description: string;
  tech: string[];
  period: string;
  highlight?: string;
}

export const PROJECTS: Project[] = [
  {
    name: 'SecretKeeper',
    description:
      'DevOps tool for AWS Secrets Manager and EKS governance. Tracks who changed/viewed secrets, auto-restarts dependent services, provides real-time service health dashboards with Datadog integration.',
    tech: ['TypeScript', 'React', 'AWS', 'EKS', 'Datadog'],
    period: '2023 — Present',
    highlight: 'Internal DevOps tool used across the entire org'
  },
  {
    name: 'Eduzz Accounts',
    description:
      'Authentication system enabling transparent SSO across the entire Eduzz ecosystem. Built with TOTP, Passkeys, and Argon2 for maximum security.',
    tech: ['TypeScript', 'Node.js', 'React', 'Passkeys', 'Argon2'],
    period: '2019 — Present',
    highlight: 'Zero incidents in 6+ years'
  },
  {
    name: 'Checkout Sun',
    description:
      'Full-featured checkout system supporting multiple payment methods, gateways, coupons, subscriptions and order bumps.',
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
    period: '2018 — 2022',
    highlight: 'Millions in processed transactions'
  },
  {
    name: 'Meu Desconto — GPA',
    description:
      'Mobile app for Extra and Pão de Açúcar brands with 4M+ users. Directed offers, shopping lists, store finder, and cashier scheduling.',
    tech: ['NativeScript', 'Spring Boot', 'Node.js', 'AWS', 'ElasticSearch'],
    period: '2017 — 2018',
    highlight: '4M+ active users'
  }
];

export interface OpenSourceRepo {
  name: string;
  description: string;
  stars: number;
  language: string;
  url: string;
}

export const OPEN_SOURCE_REPOS: OpenSourceRepo[] = [
  {
    name: 'correios',
    description: 'Package tracking library for Brazilian postal service',
    stars: 34,
    language: 'PHP',
    url: 'https://github.com/caferrari/correios'
  },
  {
    name: 'SimpleCrawler',
    description: 'Extremely fast event-based web crawler',
    stars: 26,
    language: 'PHP',
    url: 'https://github.com/caferrari/SimpleCrawler'
  },
  {
    name: 'react-use-observable',
    description: 'Use RxJS observables with React hooks',
    stars: 9,
    language: 'TypeScript',
    url: 'https://github.com/caferrari/react-use-observable'
  },
  {
    name: 'md-form-validator',
    description: 'Angular Material Design form validation made simple',
    stars: 7,
    language: 'JavaScript',
    url: 'https://github.com/caferrari/md-form-validator'
  },
  {
    name: 'GAStrings',
    description: 'Distributed Genetic Algorithm with PHP and Web Workers',
    stars: 5,
    language: 'JavaScript',
    url: 'https://github.com/caferrari/GAStrings'
  }
];

export const GITHUB_STATS = {
  publicRepos: 112,
  totalContributions: 657,
  followers: 203
};

export interface Testimonial {
  author: string;
  role: string;
  text: string;
  linkedinUrl: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    author: 'Miguel Freitas',
    role: 'Software Engineer',
    text: "Carlos is the most experienced and technically competent professional I've had the pleasure to work with. His mastery and practice are inspiring for any developer. Despite his immense knowledge, he is very humble and always willing to help. I strongly recommend him.",
    linkedinUrl: 'https://www.linkedin.com/in/miguel-augusto'
  },
  {
    author: 'Tiago Baldo',
    role: 'Software Engineer',
    text: 'Carlos is an experienced professional who is above average. Besides having vast technical knowledge in different technologies and tools for software development, he is great at sharing his knowledge with co-workers and has sharp logical reasoning!',
    linkedinUrl: 'https://www.linkedin.com/in/tgbaldo'
  }
];
