import Image from 'next/image';
import { Code, Database, ExternalLink } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Section, SectionHeading } from '@/components/ui/section';
import { projects, type Project } from '@/lib/data';

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button size="sm" asChild>
        <a href={project.live} target="_blank" rel="noopener noreferrer">
          <ExternalLink />
          Live Demo
        </a>
      </Button>
      {project.frontend && (
        <Button size="sm" variant="outline" asChild>
          <a href={project.frontend} target="_blank" rel="noopener noreferrer">
            <Code />
            {project.backend ? 'Frontend' : 'Source'}
          </a>
        </Button>
      )}
      {project.backend && (
        <Button size="sm" variant="ghost" asChild>
          <a href={project.backend} target="_blank" rel="noopener noreferrer">
            <Database />
            Backend
          </a>
        </Button>
      )}
    </div>
  );
}

function TechLine({ tech }: { tech: string }) {
  return (
    <p className="text-sm text-muted-foreground">
      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
        Tech
      </span>{' '}
      {tech}
    </p>
  );
}

function Preview({
  project,
  className,
  sizes,
  priority,
}: {
  project: Project;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-border bg-muted ${className ?? ''}`}
    >
      <Image
        src={project.image}
        alt={`${project.name} preview`}
        width={1440}
        height={900}
        sizes={sizes}
        priority={priority}
        unoptimized={project.image.endsWith('.svg')}
        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
  );
}

export function Projects() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p !== featured);

  return (
    <Section id="projects" tint pattern="dots" glow="bl">
      <SectionHeading
        kicker="Projects"
        title="Digital Creations That Actually Work"
        lead="A selection of things I've designed, built, and shipped — front to back."
      />

      {/* Featured project — alternating image / text block */}
      <div className="group mb-6 grid items-center gap-8 rounded-lg border border-border bg-card p-5 md:grid-cols-2 md:p-8">
        <Preview
          project={featured}
          sizes="(min-width: 768px) 50vw, 100vw"
          priority
          className="aspect-[16/10]"
        />
        <div>
          <span className="kicker mb-3 block text-primary">
            Featured Project
          </span>
          <h3 className="text-2xl font-bold tracking-tight">{featured.name}</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {featured.description}
          </p>
          <div className="mt-4">
            <TechLine tech={featured.tech} />
          </div>
          <div className="mt-6">
            <ProjectLinks project={featured} />
          </div>
        </div>
      </div>

      {/* Remaining projects — image cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {rest.map((project) => (
          <Card
            key={project.slug}
            className="group flex flex-col overflow-hidden pt-0 hover:border-primary/30 hover:shadow-(--shadow-pop)"
          >
            <Preview
              project={project}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="aspect-[16/10] rounded-none border-0 border-b border-border"
            />
            <CardContent className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4">
                <TechLine tech={project.tech} />
              </div>
              <div className="mt-auto pt-5">
                <ProjectLinks project={project} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
