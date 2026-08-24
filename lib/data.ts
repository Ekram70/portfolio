export const profile = {
  name: 'Md. Ekram Ullah',
  initials: 'EU',
  role: 'Full Stack Developer',
  location: 'Mohammadpur, Dhaka',
  phone: '+8801867-939463',
  email: 'ekramullah70@gmail.com',
  blog: 'https://ekram70.hashnode.dev/',
  github: 'https://github.com/Ekram70',
  linkedin: 'https://www.linkedin.com/in/ekramullah/',
  available: true,
  availabilityLabel: 'Available for work',
};

export const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Open Source', href: '#open-source' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const heroCopy = {
  kicker: 'Full Stack Developer',
  badge: 'Star of the Year 2025 · ThemeXpert',
  title: 'Code Whisperer & Bug Slayer',
  titleLead: 'Code Whisperer',
  roles: [
    'Bug Slayer',
    'Angular Wizard',
    'API Plumber',
    'Pixel Perfectionist',
    'Coffee → Code Converter',
  ],
  lead: "I turn coffee into code and vague requirements into shipped features. A Full Stack Developer who lives in Angular and TypeScript on the front, Node, NestJS and Laravel on the back — and owns the whole path between them, from the client conversation to the production release (and occasionally talks to browsers when they misbehave)",
};

export const heroStats: { value: string; label: string }[] = [
  { value: '370+', label: 'Pull requests' },
  { value: '900+', label: 'Tests written' },
  { value: '5+', label: 'Projects shipped' },
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: 'Languages',
    items: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'Java'],
  },
  {
    label: 'Frontend',
    items: [
      'Angular',
      'Signals',
      'RxJS',
      'PrimeNG',
      'React',
      'Next.js',
      'Redux',
      'Tanstack Query',
      'Tailwind',
      'Sass',
      'Shadcn',
      'Mantine',
      'Tiptap',
      'Hashbrown',
    ],
  },
  {
    label: 'Backend',
    items: [
      'Node',
      'Express',
      'NestJS',
      'Laravel',
      'REST API Design',
      'Websocket',
      'MySQL',
      'MongoDB',
    ],
  },
  {
    label: 'Testing',
    items: ['Playwright', 'Vitest', 'Cypress', 'JEST'],
  },
  {
    label: 'Tools',
    items: [
      'Git',
      'GitHub Actions',
      'Docker',
      'Linux',
      'Sentry',
      'Biome',
      'ESLint/Prettier',
      'Vite',
      'Webpack',
    ],
  },
  {
    label: 'Design',
    items: ['Figma', 'Photoshop', 'Illustrator'],
  },
  {
    label: 'Familiar',
    items: ['Vue.js', 'Svelte'],
  },
];

export type Project = {
  name: string;
  slug: string;
  image: string;
  featured?: boolean;
  description: string;
  tech: string;
  live: string;
  frontend?: string;
  backend?: string;
};

export const projects: Project[] = [
  {
    name: 'Global Travels',
    slug: 'global-travels',
    image: '/projects/global-travels.png',
    featured: true,
    description:
      "Flight booking website like ShareTrip/Gozayaan (because who doesn't love planning trips they can't afford)",
    tech: 'Next js, Shadcn/ui, Tailwind, Context api, Github Collaboration',
    live: 'https://globaltravels.vercel.app/',
  },
  {
    name: 'Shoppers',
    slug: 'shoppers',
    image: '/projects/shoppers.png',
    description:
      'Single vendor ecommerce website (where your wallet goes to cry)',
    tech: 'Express, React, Mongoose, Mantine, Redux, Axios, JWT',
    live: 'https://single-vendor-ecommerce.vercel.app/',
    frontend: 'https://github.com/Ekram70/single_vendor_ecommerce',
    backend: 'https://github.com/Ekram70/single_vendor_backend',
  },
  {
    name: 'Typing Speed Test',
    slug: 'typing-speed-test',
    image: '/projects/typing-speed-test.png',
    description:
      'Interactive typing speed testing application (prepare to feel inadequate)',
    tech: 'React, CSS',
    live: 'https://typing-speed-sigma-eight.vercel.app/',
    frontend: 'https://github.com/Ekram70/typing-speed',
  },
  {
    name: 'Classroom Writers',
    slug: 'classroom-writers',
    image: '/projects/classroom-writers.svg',
    description:
      'Educational platform for writers (where words meet their destiny)',
    tech: 'NextJs, Mantine, Tanstack Query, Framer Motion, Tailwind, Github Collaboration',
    live: 'https://classroomwriters.com/',
    frontend: 'https://github.com/RizwanSuvo99/verse-voice',
  },
  {
    name: 'Custom Block Editor',
    slug: 'custom-block-editor',
    image: '/projects/custom-block-editor.svg',
    description:
      'Rich text block editor component (because regular text editors are too mainstream)',
    tech: 'React, Mantine, Axios, Tailwind',
    live: 'https://custom-block-editor.vercel.app/',
    frontend: 'https://github.com/Ekram70/custom_block_editor',
  },
];

export type Stat = { value: string; label: string; sub: string };

export const stats: Stat[] = [
  { value: '50%', label: 'Faster build times', sub: 'Angular 15 → 21 upgrade' },
  {
    value: '750+',
    label: 'Components migrated',
    sub: 'Standalone + Signals',
  },
  { value: '25%', label: 'Fewer API calls', sub: 'Response caching' },
  { value: '20%', label: 'Fewer re-renders', sub: 'Render optimization' },
];

export type Step = { no: string; title: string; body: string };

export const howIWork: Step[] = [
  {
    no: '01',
    title: 'Understand deeply',
    body: 'Before writing a line, I talk to the people with the problem — support requests, competitor research, and the edge cases nobody mentioned. Good code starts with good questions (and a suspicious amount of coffee).',
  },
  {
    no: '02',
    title: 'Align, then build',
    body: 'I present the plan to the team and absorb the feedback before implementing — the cheapest bugs are the ones argued out of existence in a meeting. Then I build it across the stack: a sane data shape, an API contract that reads the way it behaves, and an accessible, scalable interface sitting on top of it.',
  },
  {
    no: '03',
    title: 'Ship & refine',
    body: 'I test, review, measure, and optimize — 900+ specs, cached responses, fewer re-renders, and observability that tells me something broke before a user does.',
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: 'Are you available for new projects?',
    a: 'Yes — I take on freelance adventures and full-time quests. Drop me an email and let’s talk about what you’re building.',
  },
  {
    q: 'Do you work remotely?',
    a: 'Absolutely. I collaborate happily across time zones with async updates, daily PR reviews, and clear documentation.',
  },
  {
    q: 'What do you specialize in?',
    a: 'Full stack with an Angular-first core — Angular, TypeScript, React and Next.js on the front, NestJS, Laravel and MySQL on the back, plus enough Playwright and Vitest to trust my own work.',
  },
  {
    q: 'What does “end to end” actually mean here?',
    a: 'I sit in the client conversation, do the competitor and design research, present the plan to the team, build it, write the tests, review the PRs, and ship the release. Fewer handoffs, fewer things lost in translation.',
  },
  {
    q: 'How fast do you respond?',
    a: 'Faster than your browser loads a heavy page. Expect a reply within a day, usually much sooner.',
  },
];

export type Job = {
  company: string;
  position: string;
  period: string;
  website?: string;
  award?: string;
  achievements: string[];
};

export const workExperience: Job[] = [
  {
    company: 'ThemeXpert',
    position: 'Full Stack Developer (ThriveDesk)',
    period: 'Nov 2024 — Present',
    website: 'https://www.thrivedesk.com/',
    award: 'Star of the Year 2025',
    achievements: [
      'Own features end to end — handle client support requests, dig out the underlying problem, and translate it into actionable requirements (turns out "it’s broken" is rarely the whole story).',
      'Run competitor analysis and design research to shape how a feature should look and behave, then present the plan to the team and align on the approach before implementation.',
      'Upgraded the entire codebase from Angular 15 to Angular 21, improving build speed by 50% and migrating 750+ components to standalone APIs and Signals (and my coffee consumption by 200%).',
      'Rebuilt app-wide authorization on a backend-driven capability model with fail-closed route guards and live permission revocation over WebSocket — revoke a capability and the user is evicted from the route mid-session.',
      'Migrated testing from Cypress/Karma to Playwright and Vitest, growing coverage to 900+ E2E and unit tests (bugs hate this one simple trick).',
      'Implemented Sentry observability with source maps, distributed tracing, session replay, and user attribution — production errors went from unreadable minified noise to actionable reports.',
      'Delivered core product features including Custom Fields, Custom Views, Schedule Reply, Snooze, Undo Send, Split Conversation, and Bulk Merge.',
      'Contributed to AI Copilot, AI Chatbot, AI Playground, and AI Actions, plus a knowledge engine supporting web, file, and Q&A sources (teaching machines to be helpful, one algorithm at a time).',
      'Reduced API call frequency by up to 25% through response caching and cut unnecessary re-renders by 20% through render optimization (because APIs need their beauty sleep too).',
      'Integrated major third-party services like Paddle, Stripe, and GitHub, and migrated UI components from Material UI to PrimeNG (like a digital organ transplant, but less messy).',
      'Designed reusable components and shared services, and authored the team’s design guideline and PR review template (DRY principle enforcer extraordinaire).',
      'Conducted daily PR reviews, mentored new frontend onboards, and contributed to 370+ pull requests across the release cycle (professional code critic and storyteller).',
    ],
  },
];

export const education = {
  degree: 'Bachelor of Science in Chemistry',
  institution: 'Govt. City College, Chattogram',
  note: '(Plot twist: Learned to mix chemicals, ended up mixing code instead)',
  year: '2023',
};

export type Certification = {
  name: string;
  provider: string;
  link?: string;
};

export const certifications: Certification[] = [
  {
    name: 'Think in a Redux Way',
    provider: 'Learn With Sumit',
    link: 'https://learnwithsumit.com/certificates/verify/LWSCTXN-10IXRH7R',
  },
  {
    name: 'Reactive Accelerator',
    provider: 'Learn With Sumit',
  },
];

export const contactCopy = {
  kicker: 'Contact',
  title: "Let's Build Something Epic Together",
  lead: "Got a project that needs some digital magic? I'm always excited to discuss new adventures in the land of clean APIs and sharp interfaces.",
  ctaTitle: 'Ready to create some digital magic?',
  ctaBody:
    "I'm currently available for freelance adventures and full-time quests. Warning: Side effects may include exceptional user experiences.",
};

export type Contribution = {
  number: number;
  title: string;
  href: string;
  merged: string;
  files: number;
  commits: number;
  highlights: string[];
};

export const openSource = {
  kicker: 'Open Source',
  title: 'Shipping Into Someone Else\u2019s Design System',
  lead: 'Contributing to a public component library is the fastest way to find out whether your idea of "clean architecture" survives contact with other people\u2019s standards. Mine did \u2014 twice.',
  project: {
    name: 'ZardUi',
    tagline: 'Open-source Angular component library',
    description:
      'An open-source Angular UI component library. I took on its Angular 20 migration and shipped a new component into its public API \u2014 both reviewed and merged by the maintainers.',
    site: 'https://zardui.com/',
    repo: 'https://github.com/zard-ui/zardui',
  },
  contributions: [
    {
      number: 200,
      title: 'Migrate the library to Angular 20',
      href: 'https://github.com/zard-ui/zardui/pull/200',
      merged: 'Sep 2025',
      files: 179,
      commits: 12,
      highlights: [
        'Analysed the Angular 20 breaking changes and upgraded the core dependency tree',
        'Migrated deprecated APIs and updated every affected component implementation',
        'Brought the tests and documentation along with it, then verified feature parity',
        'Closed the maintainers\u2019 open migration issue (#183)',
      ],
    },
    {
      number: 224,
      title: 'Add the Empty component',
      href: 'https://github.com/zard-ui/zardui/pull/224',
      merged: 'Oct 2025',
      files: 33,
      commits: 20,
      highlights: [
        'Designed a typed public API \u2014 zImage, zDescription and a default/sm/lg size variant',
        'Accepts both plain strings and TemplateRef, so consumers can pass markup or text',
        'Shipped with a default illustration, dark mode, and responsive layout',
        'Accessible by default, and consistent with the library\u2019s existing design tokens',
      ],
    },
  ] as Contribution[],
};

export type SocialLink = { label: string; href: string };

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Ekram70' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ekramullah/' },
  { label: 'Codewars', href: 'https://www.codewars.com/users/Ekram70' },
  { label: 'Leetcode', href: 'https://leetcode.com/u/ekram70/' },
];
