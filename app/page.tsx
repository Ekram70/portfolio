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
      live: '#',
    },
    {
      name: 'Shoppers',
      description: 'Single vendor ecommerce website',
      tech: 'Express, React, Mongoose, Mantine, Redux, Axios, JWT',
      live: '#',
      frontend: '#',
      backend: '#',
    },
    {
      name: 'Typing Speed Test',
      description: 'Interactive typing speed testing application',
      tech: 'React, CSS',
      live: '#',
      frontend: '#',
    },
    {
      name: 'Classroom Writers',
      description: 'Educational platform for writers',
      tech: 'NextJs, Mantine, Tanstack Query, Framer Motion, Tailwind, Github Collaboration',
      live: '#',
      frontend: '#',
    },
    {
      name: 'Custom Block Editor',
      description: 'Rich text block editor component',
      tech: 'React, Mantine, Axios, Tailwind',
      live: '#',
      frontend: '#',
    },
  ];

  const workExperience = [
    {
      company: 'ThemeXpert',
      position: 'Front-End Developer (ThriveDesk)',
      period: 'Nov, 2024 - till',
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
    },
    {
      name: 'Reactive Accelerator',
      provider: 'Learn With Sumit',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <User className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">Md. Ekram Ullah</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#about"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Frontend Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Passionate and detail-oriented Front-End Developer with strong
            proficiency in JavaScript, TypeScript, and React.js
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Middle Badda, Dhaka</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+8801867-939463</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>ekramullah70@gmail.com</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Mail className="h-4 w-4" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              View Projects
            </Button>
            <Button variant="ghost" size="lg" className="gap-2">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Career Objective
          </h2>
          <Card className="p-8">
            <p className="text-lg leading-relaxed text-center">
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
      <section id="skills" className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Skills & Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  Back-end
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Front-end
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-primary" />
                  Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.design.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
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
      <section id="projects" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Technology:</strong> {project.tech}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" variant="outline" className="gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Live
                    </Button>
                    {project.frontend && (
                      <Button size="sm" variant="ghost" className="gap-2">
                        <Code className="h-3 w-3" />
                        Front-end
                      </Button>
                    )}
                    {project.backend && (
                      <Button size="sm" variant="ghost" className="gap-2">
                        <Database className="h-3 w-3" />
                        Back-end
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
        className="container mx-auto px-4 py-20 bg-muted/30"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Work Experience
          </h2>
          {workExperience.map((job, index) => (
            <Card key={index} className="mb-6">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {job.position}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium">
                      {job.company}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{job.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, achievementIndex) => (
                    <li
                      key={achievementIndex}
                      className="flex items-start gap-2"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Education & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <h3 className="font-semibold">
                    Bachelor of Science in Chemistry
                  </h3>
                  <p className="text-muted-foreground">
                    Govt. City College, Chattogram
                  </p>
                  <p className="text-sm text-muted-foreground">2023</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index}>
                      <h3 className="font-semibold">{cert.name}</h3>
                      <p className="text-muted-foreground text-sm">
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
      <section
        id="contact"
        className="container mx-auto px-4 py-20 bg-muted/30"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I&apos;m always open to discussing new opportunities and interesting
            projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Mail className="h-4 w-4" />
              Email Me
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              Codewars
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              Leetcode
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Md. Ekram Ullah. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
