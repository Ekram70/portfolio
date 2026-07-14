export const profile = {
  name: 'Md. Ekram Ullah',
  initials: 'EU',
  role: 'Frontend Developer',
  location: 'Middle Badda, Dhaka',
  phone: '+8801867-939463',
  email: 'ekramullah70@gmail.com',
  blog: 'https://ekram70.hashnode.dev/',
  github: 'https://github.com/ekram70',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const heroCopy = {
  kicker: 'Frontend Developer',
  badge: 'Currently accepting bribes in form of exciting projects',
  title: 'Code Whisperer & Bug Slayer',
  lead: "I turn coffee into code and dreams into pixels. A passionate Frontend Developer who speaks fluent JavaScript, TypeScript, and React.js (and occasionally talks to browsers when they misbehave)",
};

export const aboutCopy = {
  kicker: 'About',
  title: 'My Quest to Conquer the Digital Realm',
  body: "On a mission to build digital experiences that don't make users want to throw their computers out the window. I craft scalable, user-centric interfaces with the precision of a Swiss watchmaker and the creativity of a caffeinated artist. My goal? To join forces with brilliant minds who believe that great software is built by humans, for humans - and maybe teach a few machines some manners along the way.",
};

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Java', 'Python'],
  },
  {
    label: 'Frontend',
    items: [
      'Angular',
      'PrimeNG',
      'RxJS',
      'React',
      'Next.js',
      'Redux',
      'Shadcn',
      'Mantine',
      'Material UI',
      'Ant Design',
    ],
  },
  {
    label: 'Backend',
    items: ['Node', 'Express', 'MongoDB', 'REST API Design'],
  },
  {
    label: 'Tools',
    items: [
      'JEST',
      'Cypress',
      'Websocket',
      'Tanstack Query',
      'Authentication',
      'Authorization',
      'Puppeteer',
    ],
  },
  {
    label: 'Design',
    items: ['Figma', 'Photoshop', 'Illustrator'],
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
  { value: '50%', label: 'Faster build times', sub: 'Angular 15 → 18 upgrade' },
  { value: '70+', label: 'E2E tests written', sub: 'Cypress coverage' },
  { value: '25%', label: 'Fewer API calls', sub: 'Response caching' },
  { value: '20%', label: 'Fewer re-renders', sub: 'Render optimization' },
];

export type Step = { no: string; title: string; body: string };

export const howIWork: Step[] = [
  {
    no: '01',
    title: 'Understand deeply',
    body: 'Before writing a line, I dig into the problem, the users, and the edge cases. Good code starts with good questions (and a suspicious amount of coffee).',
  },
  {
    no: '02',
    title: 'Build for humans',
    body: 'I craft accessible, scalable interfaces with reusable components and clean state. If a teammate can read it and a user can love it, I did my job.',
  },
  {
    no: '03',
    title: 'Ship & refine',
    body: 'I test, review, measure, and optimize — cutting re-renders, caching responses, and squashing bugs until the experience feels effortless.',
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
    a: 'Frontend engineering with React, Next.js, Angular, and TypeScript — plus enough Node/Express and testing to own features end to end.',
  },
  {
    q: 'How fast do you respond?',
    a: 'Faster than your browser loads a heavy page. Expect a reply within a day, usually much sooner.',
  },
];

/** Headline technologies for the marquee (curated from skillGroups). */
export const techMarquee: string[] = [
  'TypeScript',
  'React',
  'Next.js',
  'Angular',
  'Node',
  'Express',
  'MongoDB',
  'Redux',
  'RxJS',
  'Tanstack Query',
  'Tailwind',
  'Cypress',
  'JEST',
  'Shadcn',
  'Mantine',
  'Figma',
];

export type Job = {
  company: string;
  position: string;
  period: string;
  website?: string;
  achievements: string[];
};

export const workExperience: Job[] = [
  {
    company: 'ThemeXpert',
    position: 'Jr. Full Stack Developer (ThriveDesk)',
    period: 'Nov, 2024 - till',
    website: 'https://www.thrivedesk.com/',
    achievements: [
      'Upgraded the entire codebase from Angular 15 to Angular 18, improving build speed by 50% (and my coffee consumption by 200%).',
      'Developed and maintained 70+ end-to-end (E2E) tests using Cypress, reducing critical bugs in production by 5% (bugs hate this one simple trick).',
      'Integrated major third-party services like Paddle, Stripe, and GitHub (convinced them all to play nicely together).',
      'Migrated components from Material UI to Ant Design, preserving all existing functionality (like a digital organ transplant, but less messy).',
      'Reduced API call frequency by up to 25% through effective response caching (because APIs need their beauty sleep too).',
      'Introduced 10+ reusable components and shared services, decreasing code duplication (DRY principle enforcer extraordinaire).',
      'Worked on implementation of AI Copilot, AI Chatbot and AI Actions (teaching machines to be helpful, one algorithm at a time).',
      'Contributed to features and bug fixes, and refactored legacy modules to align with modern best practices (code archaeology meets renovation).',
      'Conducted daily PR reviews and contributed to project documentation (professional code critic and storyteller).',
      'Optimized rendering logic in critical components, cutting unnecessary re-renders by 20% (performance optimization wizard).',
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
  lead: "Got a project that needs some digital magic? I'm always excited to discuss new adventures in the land of pixels and code.",
  ctaTitle: 'Ready to create some digital magic?',
  ctaBody:
    "I'm currently available for freelance adventures and full-time quests. Warning: Side effects may include exceptional user experiences.",
};

export type SocialLink = { label: string; href: string };

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/ekram70' },
  { label: 'Codewars', href: 'https://www.codewars.com/users/Ekram70' },
  { label: 'Leetcode', href: 'https://leetcode.com/u/ekram70/' },
];
