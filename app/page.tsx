'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  ArrowDown,
  Award,
  Briefcase,
  Calendar,
  Code,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Palette,
  Phone,
  Sparkles,
  Star,
  Wrench,
} from 'lucide-react';

export default function Home() {
  const skills = {
    languages: ['JavaScript', 'TypeScript', 'Java', 'Python'],
    backend: ['Node', 'Express', 'MongoDB', 'REST API Design'],
    frontend: [
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
    tools: [
      'JEST',
      'Cypress',
      'Websocket',
      'Tanstack Query',
      'Authentication',
      'Authorization',
      'Puppeteer',
    ],
    design: ['Figma', 'Photoshop', 'Illustrator'],
  };

  const projects = [
    {
      name: 'Global Travels',
      description:
        "Flight booking website like ShareTrip/Gozayaan (because who doesn't love planning trips they can't afford)",
      tech: 'Next js, Shadcn/ui, Tailwind, Context api, Github Collaboration',
      live: 'https://globaltravels.vercel.app/',
    },
    {
      name: 'Shoppers',
      description:
        'Single vendor ecommerce website (where your wallet goes to cry)',
      tech: 'Express, React, Mongoose, Mantine, Redux, Axios, JWT',
      live: 'https://single-vendor-ecommerce.vercel.app/',
      frontend: 'https://github.com/Ekram70/single_vendor_ecommerce',
      backend: 'https://github.com/Ekram70/single_vendor_backend',
    },
    {
      name: 'Typing Speed Test',
      description:
        'Interactive typing speed testing application (prepare to feel inadequate)',
      tech: 'React, CSS',
      live: 'https://typing-speed-sigma-eight.vercel.app/',
      frontend: 'https://github.com/Ekram70/typing-speed',
    },
    {
      name: 'Classroom Writers',
      description:
        'Educational platform for writers (where words meet their destiny)',
      tech: 'NextJs, Mantine, Tanstack Query, Framer Motion, Tailwind, Github Collaboration',
      live: 'https://classroomwriters.com/',
      frontend: 'https://github.com/RizwanSuvo99/verse-voice',
    },
    {
      name: 'Custom Block Editor',
      description:
        'Rich text block editor component (because regular text editors are too mainstream)',
      tech: 'React, Mantine, Axios, Tailwind',
      live: 'https://custom-block-editor.vercel.app/',
      frontend: 'https://github.com/Ekram70/custom_block_editor',
    },
  ];

  const workExperience = [
    {
      company: 'ThemeXpert',
      position: 'Front-End Developer (ThriveDesk)',
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

  const certifications = [
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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/90 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-gradient-to-tr from-emerald-400 to-blue-500 text-slate-900 font-bold">
                  EU
                </AvatarFallback>
              </Avatar>
              <span className="font-bold text-lg bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Md. Ekram Ullah
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" size="sm" asChild>
                <a href="#about">About</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#skills">Skills</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#projects">Projects</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#experience">Experience</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#contact">Contact</a>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Badge
            variant="outline"
            className="mb-6 border-emerald-500/50 text-emerald-400"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Currently accepting bribes in form of exciting projects
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Code Whisperer & Bug Slayer
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-3xl mx-auto">
            I turn coffee into code and dreams into pixels. A passionate
            Frontend Developer who speaks fluent JavaScript, TypeScript, and
            React.js (and occasionally talks to browsers when they misbehave)
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Badge variant="secondary" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Middle Badda, Dhaka
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +8801867-939463
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              ekramullah70@gmail.com
            </Badge>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600"
              asChild
            >
              <a href="mailto:ekramullah70@gmail.com">
                <Mail className="h-5 w-5 mr-2" />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">
                <Star className="h-5 w-5 mr-2" />
                View Projects
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a
                href="https://github.com/ekram70"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>

          <div className="mt-12 flex justify-center animate-bounce">
            <ArrowDown className="h-6 w-6 text-slate-500" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-12 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              My Quest to Conquer the Digital Realm
            </h2>
            <Separator className="w-20 mx-auto" />
          </div>
          <Card className="p-8 bg-slate-800/50 backdrop-blur-lg border border-slate-700/50">
            <CardContent className="p-0">
              <p className="text-lg leading-relaxed text-center text-slate-300">
                On a mission to build digital experiences that don&apos;t make
                users want to throw their computers out the window. I craft
                scalable, user-centric interfaces with the precision of a Swiss
                watchmaker and the creativity of a caffeinated artist. My goal?
                To join forces with brilliant minds who believe that great
                software is built by humans, for humans - and maybe teach a few
                machines some manners along the way.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-12 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              My Arsenal of Digital Wizardry
            </h2>
            <Separator className="w-20 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Languages Card */}
            <Card className="bg-slate-800/50 border-slate-700/50 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300">
              <CardHeader className="flex flex-row items-center space-y-0 pb-3">
                <div className="p-2 bg-yellow-500 rounded-lg mr-3">
                  <Code className="h-4 w-4 text-slate-900" />
                </div>
                <CardTitle className="text-lg text-yellow-400">
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Frontend Card */}
            <Card className="bg-slate-800/50 border-slate-700/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <CardHeader className="flex flex-row items-center space-y-0 pb-3">
                <div className="p-2 bg-blue-500 rounded-lg mr-3">
                  <Code className="h-4 w-4 text-slate-900" />
                </div>
                <CardTitle className="text-lg text-blue-400">
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Backend Card */}
            <Card className="bg-slate-800/50 border-slate-700/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
              <CardHeader className="flex flex-row items-center space-y-0 pb-3">
                <div className="p-2 bg-green-500 rounded-lg mr-3">
                  <Database className="h-4 w-4 text-slate-900" />
                </div>
                <CardTitle className="text-lg text-green-400">
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-green-500/30 text-green-400 hover:bg-green-500/10 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools Card */}
            <Card className="bg-slate-800/50 border-slate-700/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
              <CardHeader className="flex flex-row items-center space-y-0 pb-3">
                <div className="p-2 bg-purple-500 rounded-lg mr-3">
                  <Wrench className="h-4 w-4 text-slate-900" />
                </div>
                <CardTitle className="text-lg text-purple-400">Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Design Card */}
            <Card className="bg-slate-800/50 border-slate-700/50 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <CardHeader className="flex flex-row items-center space-y-0 pb-3">
                <div className="p-2 bg-pink-500 rounded-lg mr-3">
                  <Palette className="h-4 w-4 text-slate-900" />
                </div>
                <CardTitle className="text-lg text-pink-400">Design</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.design.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-pink-500/30 text-pink-400 hover:bg-pink-500/10 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Digital Creations That Actually Work
            </h2>
            <Separator className="w-20 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:scale-102 bg-slate-800/50 backdrop-blur-lg border border-slate-700/50"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-slate-100 mb-2">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-slate-400 mb-4">
                    <span className="font-semibold text-emerald-400">
                      Tech:
                    </span>{' '}
                    {project.tech}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      className="gap-2 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white"
                      asChild
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    {project.frontend && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-2 border-slate-600 hover:bg-slate-700/50 text-slate-300 hover:text-emerald-400"
                        asChild
                      >
                        <a
                          href={project.frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Code className="h-4 w-4" />
                          Frontend
                        </a>
                      </Button>
                    )}
                    {project.backend && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="gap-2 hover:bg-slate-700/50 text-slate-300 hover:text-purple-400"
                        asChild
                      >
                        <a
                          href={project.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Database className="h-4 w-4" />
                          Backend
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="container mx-auto px-4 py-16 relative"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              My Professional Journey
            </h2>
            <Separator className="w-20 mx-auto" />
          </div>
          {workExperience.map((job, index) => (
            <Card
              key={index}
              className="mb-8 group hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:scale-102 bg-slate-800/50 backdrop-blur-lg border border-slate-700/50"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-3 text-xl font-bold text-slate-100 mb-2">
                      <div className="p-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg">
                        <Briefcase className="h-4 w-4 text-slate-900" />
                      </div>
                      {job.position}
                    </CardTitle>
                    <CardDescription className="text-lg flex items-center gap-3 text-slate-300">
                      {job.company}
                      {job.website && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="p-1 h-auto"
                          asChild
                        >
                          <a
                            href={job.website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 text-emerald-400" />
                          </a>
                        </Button>
                      )}
                    </CardDescription>
                  </div>
                  <Badge
                    variant="outline"
                    className="flex items-center gap-2 border-blue-500/30 text-blue-400"
                  >
                    <Calendar className="h-4 w-4" />
                    {job.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {job.achievements.map((achievement, achievementIndex) => (
                    <div
                      key={achievementIndex}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 mt-2">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-blue-400" />
                      </div>
                      <span className="text-slate-300 text-sm leading-relaxed">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="container mx-auto px-4 py-16 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Academic Adventures & Certifications
            </h2>
            <Separator className="w-20 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="group hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:scale-102 bg-slate-800/50 backdrop-blur-lg border border-slate-700/50">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-slate-100">
                  <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-slate-900" />
                  </div>
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="p-4 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                  <h3 className="text-lg font-bold text-slate-100 mb-2">
                    Bachelor of Science in Chemistry
                  </h3>
                  <p className="text-slate-300 font-medium mb-2">
                    Govt. City College, Chattogram
                  </p>
                  <p className="text-sm text-slate-400 mb-3">
                    (Plot twist: Learned to mix chemicals, ended up mixing code
                    instead)
                  </p>
                  <Badge
                    variant="outline"
                    className="border-indigo-500/30 text-indigo-400"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    2023
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:scale-102 bg-slate-800/50 backdrop-blur-lg border border-slate-700/50">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-slate-100">
                  <div className="p-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg">
                    <Award className="h-5 w-5 text-slate-900" />
                  </div>
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20"
                    >
                      <h3 className="text-lg font-bold text-slate-100 mb-2 flex items-center gap-3">
                        {cert.name}
                        {cert.link && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="p-1 h-auto"
                            asChild
                          >
                            <a
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4 text-amber-400" />
                            </a>
                          </Button>
                        )}
                      </h3>
                      <p className="text-slate-300 font-medium">
                        {cert.provider}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Let&apos;s Build Something Epic Together
            </h2>
            <Separator className="w-20 mx-auto mb-6" />
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Got a project that needs some digital magic? I&apos;m always
              excited to discuss new adventures in the land of pixels and code.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="group hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:scale-102 bg-slate-800/50 backdrop-blur-lg border border-slate-700/50">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl mb-4">
                    <Mail className="h-6 w-6 text-slate-900" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 mb-2">
                    Email
                  </h3>
                  <p className="text-slate-400 mb-4 text-sm">
                    Drop me a line (I promise to respond faster than your
                    browser loads)
                  </p>
                  <Button
                    size="sm"
                    className="gap-2 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-slate-900"
                    asChild
                  >
                    <a href="mailto:ekramullah70@gmail.com">
                      <Mail className="h-4 w-4" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:scale-102 bg-slate-800/50 backdrop-blur-lg border border-slate-700/50">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-4">
                    <Phone className="h-6 w-6 text-slate-900" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 mb-2">
                    Phone
                  </h3>
                  <p className="text-slate-400 mb-4 text-sm">
                    For when typing just isn&apos;t enough
                  </p>
                  <Badge
                    variant="outline"
                    className="border-purple-500/30 text-purple-400"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    +8801867-939463
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-slate-100 mb-6">
              Find Me in the Digital Wilderness
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-slate-600 hover:bg-slate-700/50 text-slate-300 hover:text-emerald-400"
                asChild
              >
                <a
                  href="https://github.com/ekram70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-slate-600 hover:bg-slate-700/50 text-slate-300 hover:text-orange-400"
                asChild
              >
                <a
                  href="https://www.codewars.com/users/Ekram70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Codewars
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-slate-600 hover:bg-slate-700/50 text-slate-300 hover:text-yellow-400"
                asChild
              >
                <a
                  href="https://leetcode.com/u/ekram70/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Leetcode
                </a>
              </Button>
            </div>
          </div>

          {/* Call to Action */}
          <Card className="p-8 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 border-0 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to create some digital magic?
            </h3>
            <p className="text-emerald-100 mb-6 text-lg">
              I&apos;m currently available for freelance adventures and
              full-time quests. Warning: Side effects may include exceptional
              user experiences.
            </p>
            <Button
              size="lg"
              className="gap-3 bg-white text-emerald-600 hover:bg-slate-100 font-bold"
              asChild
            >
              <a href="mailto:ekramullah70@gmail.com">
                <Sparkles className="h-5 w-5" />
                Launch a Project
              </a>
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 bg-slate-950/90 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-gradient-to-tr from-emerald-400 to-blue-500 text-slate-900 font-bold text-sm">
                  EU
                </AvatarFallback>
              </Avatar>
              <span className="font-bold text-lg bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Md. Ekram Ullah
              </span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400 mb-1 text-sm">
                &copy; 2024 Md. Ekram Ullah. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
