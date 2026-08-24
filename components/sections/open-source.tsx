import {
  ExternalLink,
  GitMerge,
  GitPullRequest,
  Github,
  Star,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Section, SectionHeading } from '@/components/ui/section';
import { openSource } from '@/lib/data';

const { project, contributions } = openSource;

const totals = {
  prs: contributions.length,
  files: contributions.reduce((n, c) => n + c.files, 0),
  commits: contributions.reduce((n, c) => n + c.commits, 0),
};

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-secondary px-5 py-4">
      <div className="text-2xl font-extrabold tracking-tight text-primary md:text-3xl">
        {value}
      </div>
      <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-secondary-foreground/50">
        {label}
      </div>
    </div>
  );
}

export function OpenSource() {
  return (
    <Section id="open-source" pattern="grid" glow="tr">
      <SectionHeading
        kicker={openSource.kicker}
        title={openSource.title}
        lead={openSource.lead}
      />

      {/* Highlighted project panel */}
      <Card className="relative overflow-hidden border-none bg-secondary text-secondary-foreground">
        <div
          aria-hidden
          className="bg-grid-dark pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_100%_at_0%_0%,black,transparent)]"
        />
        <div aria-hidden className="glow -right-20 -top-20 size-96 opacity-50" />

        <CardContent className="relative flex flex-col gap-10 p-8 md:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <Badge variant="accent">
              <GitMerge className="size-3" />
              {totals.prs} merged pull requests
            </Badge>

            <h3 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
              {project.name}
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-primary">
              {project.tagline}
            </p>
            <p className="mt-4 leading-relaxed text-secondary-foreground/70">
              {project.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild>
                <a href={project.site} target="_blank" rel="noopener noreferrer">
                  <ExternalLink />
                  Visit zardui.com
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-white/20 bg-transparent text-secondary-foreground hover:bg-white/10 hover:text-secondary-foreground"
              >
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  <Github />
                  Repository
                </a>
              </Button>
            </div>
          </div>

          {/* Contribution totals */}
          <div className="grid shrink-0 grid-cols-3 gap-px overflow-hidden rounded-lg bg-white/10 lg:w-80">
            <Metric value={String(totals.prs)} label="Merged" />
            <Metric value={String(totals.files)} label="Files" />
            <Metric value={String(totals.commits)} label="Commits" />
          </div>
        </CardContent>
      </Card>

      {/* Per-PR detail */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {contributions.map((pr) => (
          <Card
            key={pr.number}
            className="flex flex-col transition-shadow hover:border-primary/30 hover:shadow-(--shadow-pop)"
          >
            <CardContent className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 font-mono text-sm font-semibold text-primary">
                  <GitPullRequest className="size-4" />#{pr.number}
                </span>
                <Badge variant="outline">
                  <GitMerge className="size-3" />
                  Merged {pr.merged}
                </Badge>
              </div>

              <h4 className="mt-4 text-lg font-semibold leading-snug">
                {pr.title}
              </h4>

              <ul className="mt-4 flex-1 space-y-2.5">
                {pr.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {pr.files} files · {pr.commits} commits
                </span>
                <Button size="sm" variant="outline" asChild>
                  <a href={pr.href} target="_blank" rel="noopener noreferrer">
                    <Github />
                    View pull request
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Star className="size-4 shrink-0 text-primary" />
        Both contributions were reviewed and merged by the ZardUi maintainers.
      </p>
    </Section>
  );
}
