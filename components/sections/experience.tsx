import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Section, SectionHeading } from '@/components/ui/section';
import { workExperience } from '@/lib/data';

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading kicker="Experience" title="My Professional Journey" />
      <div className="space-y-6">
        {workExperience.map((job) => (
          <Card key={job.company}>
            <CardHeader>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Briefcase className="size-4" />
                    </span>
                    {job.position}
                  </CardTitle>
                  <CardDescription className="mt-2 flex items-center gap-2 text-base">
                    {job.company}
                    {job.website && (
                      <a
                        href={job.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary transition-opacity hover:opacity-70"
                        aria-label={`${job.company} website`}
                      >
                        <ExternalLink className="size-4" />
                      </a>
                    )}
                  </CardDescription>
                </div>
                <Badge variant="secondary">
                  <Calendar className="size-3" />
                  {job.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
