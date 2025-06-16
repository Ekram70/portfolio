'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
  User,
  Wrench,
} from 'lucide-react';

export default function Home() {
  const skills = {
    languages: ['JavaScript', 'TypeScript'],
    backend: ['Node', 'Express', 'MongoDB', 'REST API Design'],
    frontend: [
      'React',
      'Next.js',
      'Redux',
      'Tailwind',
      'Shadcn UI',
      'Mantine',
      'Material UI',
      'Ant Design',
    ],
    tools: [
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
      description: 'Flight booking website like ShareTrip/Gozayaan',
      tech: 'Next js, Shadcn/ui, Tailwind, Context api, Github Collaboration',
      live: 'https://globaltravels.vercel.app/',
    },
    {
      name: 'Shoppers',
      description: 'Single vendor ecommerce website',
      tech: 'Express, React, Mongoose, Mantine, Redux, Axios, JWT',
      live: 'https://single-vendor-ecommerce.vercel.app/',
      frontend: 'https://github.com/Ekram70/single_vendor_ecommerce',
      backend: 'https://github.com/Ekram70/single_vendor_backend',
    },
    {
      name: 'Typing Speed Test',
      description: 'Interactive typing speed testing application',
      tech: 'React, CSS',
      live: 'https://typing-speed-sigma-eight.vercel.app/',
      frontend: 'https://github.com/Ekram70/typing-speed',
    },
    {
      name: 'Classroom Writers',
      description: 'Educational platform for writers',
      tech: 'NextJs, Mantine, Tanstack Query, Framer Motion, Tailwind, Github Collaboration',
      live: 'https://classroomwriters.com/',
      frontend: 'https://github.com/RizwanSuvo99/verse-voice',
    },
    {
      name: 'Custom Block Editor',
      description: 'Rich text block editor component',
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
        'Upgraded the entire codebase from Angular 15 to Angular 18, improving build speed by 50%.',
        'Developed and maintained 70+ end-to-end (E2E) tests using Cypress, reducing critical bugs in production by 5%.',
        'Integrated major third-party services like Paddle, Stripe, and GitHub.',
        'Migrated components from Material UI to Ant Design, preserving all existing functionality.',
        'Reduced API call frequency by up to 25% through effective response caching.',
        'Introduced 10+ reusable components and shared services, decreasing code duplication.',
        'Worked on implementation of AI Copilot, AI Chatbot and AI Actions.',
        'Contributed to features and bug fixes, and refactored legacy modules to align with modern best practices.',
        'Conducted daily PR reviews and contributed to project documentation.',
        'Optimized rendering logic in critical components, cutting unnecessary re-renders by 20%.',
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                <User className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Md. Ekram Ullah
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-200 dark:border-blue-800">
              <Sparkles className="h-4 w-4" />
              Available for new opportunities
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
            Frontend Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Passionate and detail-oriented Front-End Developer with strong
            proficiency in JavaScript, TypeScript, and React.js
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300">
                Middle Badda, Dhaka
              </span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <Phone className="h-4 w-4 text-green-600" />
              <span className="text-gray-700 dark:text-gray-300">
                +8801867-939463
              </span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <Mail className="h-4 w-4 text-purple-600" />
              <span className="text-gray-700 dark:text-gray-300">
                ekramullah70@gmail.com
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="gap-3 px-8 py-6 text-base rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="mailto:ekramullah70@gmail.com">
                <Mail className="h-5 w-5" />
                Get In Touch
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-3 px-8 py-6 text-base rounded-xl border-2 hover:bg-blue-50 dark:hover:bg-blue-950/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#projects">
                <Star className="h-5 w-5" />
                View Projects
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="gap-3 px-8 py-6 text-base rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a
                href="https://github.com/ekram70"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex justify-center animate-bounce">
            <ArrowDown className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-24 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Career Objective
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <Card className="p-10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border-0 shadow-2xl rounded-3xl">
            <p className="text-lg md:text-xl leading-relaxed text-center text-gray-700 dark:text-gray-300">
              Eager to contribute to a product-driven team by building scalable,
              user-centric interfaces. I aim to leverage my technical expertise
              and collaborative mindset to shape the next generation of web
              applications while continuing to grow alongside a creative and
              innovative team.
            </p>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-6 py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Skills & Tools
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border-0 rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/50 dark:to-orange-950/50 pb-4">
                <CardTitle className="flex items-center gap-3 text-gray-800 dark:text-white">
                  <div className="p-2 bg-yellow-500 rounded-xl">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  {skills.languages.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/50 dark:to-orange-900/50 text-yellow-800 dark:text-yellow-200 rounded-xl text-sm font-medium hover:scale-110 transition-transform cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border-0 rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 pb-4">
                <CardTitle className="flex items-center gap-3 text-gray-800 dark:text-white">
                  <div className="p-2 bg-green-500 rounded-xl">
                    <Database className="h-5 w-5 text-white" />
                  </div>
                  Back-end
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  {skills.backend.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 text-green-800 dark:text-green-200 rounded-xl text-sm font-medium hover:scale-110 transition-transform cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border-0 rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 pb-4">
                <CardTitle className="flex items-center gap-3 text-gray-800 dark:text-white">
                  <div className="p-2 bg-blue-500 rounded-xl">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  Front-end
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  {skills.frontend.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 text-blue-800 dark:text-blue-200 rounded-xl text-sm font-medium hover:scale-110 transition-transform cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border-0 rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 pb-4">
                <CardTitle className="flex items-center gap-3 text-gray-800 dark:text-white">
                  <div className="p-2 bg-purple-500 rounded-xl">
                    <Wrench className="h-5 w-5 text-white" />
                  </div>
                  Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  {skills.tools.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-800 dark:text-purple-200 rounded-xl text-sm font-medium hover:scale-110 transition-transform cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border-0 rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-950/50 dark:to-orange-950/50 pb-4">
                <CardTitle className="flex items-center gap-3 text-gray-800 dark:text-white">
                  <div className="p-2 bg-rose-500 rounded-xl">
                    <Palette className="h-5 w-5 text-white" />
                  </div>
                  Design
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  {skills.design.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-rose-100 to-orange-100 dark:from-rose-900/50 dark:to-orange-900/50 text-rose-800 dark:text-rose-200 rounded-xl text-sm font-medium hover:scale-110 transition-transform cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-6 py-24 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border-0 rounded-3xl overflow-hidden"
              >
                <CardHeader className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 pb-6">
                  <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      Technology:
                    </span>{' '}
                    {project.tech}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      size="sm"
                      className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-4 py-2 hover:scale-105 transition-all duration-300"
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
                        className="gap-2 border-2 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950/50 rounded-xl px-4 py-2 hover:scale-105 transition-all duration-300"
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
                        className="gap-2 hover:bg-green-50 dark:hover:bg-green-950/50 rounded-xl px-4 py-2 hover:scale-105 transition-all duration-300"
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
        className="container mx-auto px-6 py-24 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-3xl"></div>
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          {workExperience.map((job, index) => (
            <Card
              key={index}
              className="mb-8 group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border-0 rounded-3xl overflow-hidden"
            >
              <CardHeader className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-950/50 dark:to-blue-950/50 pb-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-3 text-xl font-bold text-gray-800 dark:text-white mb-2">
                      <div className="p-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl">
                        <Briefcase className="h-5 w-5 text-white" />
                      </div>
                      {job.position}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      {job.company}
                      {job.website && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="p-2 h-auto rounded-xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-300 hover:scale-110"
                          asChild
                        >
                          <a
                            href={job.website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </a>
                        </Button>
                      )}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                    <Calendar className="h-4 w-4 text-indigo-600" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {job.period}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="grid gap-4">
                  {job.achievements.map((achievement, achievementIndex) => (
                    <div
                      key={achievementIndex}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900/50 dark:to-blue-900/50 hover:shadow-lg transition-all duration-300 group/item"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover/item:scale-125 transition-transform duration-300" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">
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
      <section className="container mx-auto px-6 py-24 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border-0 rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 pb-6">
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-gray-800 dark:text-white">
                  <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                      Bachelor of Science in Chemistry
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium mb-1">
                      Govt. City College, Chattogram
                    </p>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-indigo-600" />
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        2023
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border-0 rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50 pb-6">
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-gray-800 dark:text-white">
                  <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 hover:shadow-lg transition-all duration-300 group/cert"
                    >
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-3">
                        {cert.name}
                        {cert.link && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="p-2 h-auto rounded-xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-300 hover:scale-110"
                            asChild
                          >
                            <a
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                            </a>
                          </Button>
                        )}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">
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
      <section id="contact" className="container mx-auto px-6 py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50/50 to-pink-50/50 dark:from-violet-950/20 dark:to-pink-950/20 rounded-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities and
              interesting projects. Let&apos;s create something amazing
              together!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border-0 rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Let&apos;s discuss your project
                  </p>
                  <Button
                    className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-6 py-3 hover:scale-105 transition-all duration-300"
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

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border-0 rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    Phone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Available for calls
                  </p>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-medium">
                    <Phone className="h-4 w-4" />
                    +8801867-939463
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
              Find Me Online
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="gap-3 px-8 py-6 text-base rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <a
                  href="https://github.com/ekram70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-3 px-8 py-6 text-base rounded-xl border-2 border-orange-200 dark:border-orange-700 hover:bg-orange-50 dark:hover:bg-orange-950/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <a
                  href="https://www.codewars.com/users/Ekram70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-5 w-5 text-orange-600" />
                  Codewars
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-3 px-8 py-6 text-base rounded-xl border-2 border-yellow-200 dark:border-yellow-700 hover:bg-yellow-50 dark:hover:bg-yellow-950/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <a
                  href="https://leetcode.com/u/ekram70/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-5 w-5 text-yellow-600" />
                  Leetcode
                </a>
              </Button>
            </div>
          </div>

          {/* Call to Action */}
          <Card className="p-8 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 border-0 rounded-3xl text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              I&apos;m currently available for freelance projects and full-time
              opportunities.
            </p>
            <Button
              size="lg"
              className="gap-3 px-8 py-6 text-base bg-white text-blue-600 hover:bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="mailto:ekramullah70@gmail.com">
                <Sparkles className="h-5 w-5" />
                Start a Project
              </a>
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                <User className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Md. Ekram Ullah
              </span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                &copy; 2024 Md. Ekram Ullah. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Built with Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
