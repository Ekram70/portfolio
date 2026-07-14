import { Award, Calendar, ExternalLink, GraduationCap } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionHeading } from '@/components/ui/section';
import { certifications, education } from '@/lib/data';

export function Education() {
  return (
    <Section id="education" tint pattern="grid" glow="br">
      <SectionHeading
        kicker="Credentials"
        title="Academic Adventures & Certifications"
      />
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <span className="flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                <GraduationCap className="size-5" />
              </span>
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border border-border bg-muted/40 p-5">
              <h3 className="text-lg font-semibold">{education.degree}</h3>
              <p className="mt-1 font-medium text-muted-foreground">
                {education.institution}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {education.note}
              </p>
              <Badge variant="outline" className="mt-4">
                <Calendar className="size-3" />
                {education.year}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <span className="flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Award className="size-5" />
              </span>
              Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="rounded-md border border-border bg-muted/40 p-5"
                >
                  <h3 className="flex items-center gap-2 text-lg font-semibold">
                    {cert.name}
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary transition-opacity hover:opacity-70"
                        aria-label={`Verify ${cert.name}`}
                      >
                        <ExternalLink className="size-4" />
                      </a>
                    )}
                  </h3>
                  <p className="mt-1 font-medium text-muted-foreground">
                    {cert.provider}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
