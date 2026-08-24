import { ExternalLink, Github, Linkedin, Mail, Phone } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Section, SectionHeading } from '@/components/ui/section';
import { contactCopy, profile, socialLinks } from '@/lib/data';

function socialIcon(label: string) {
  if (label === 'GitHub') return <Github />;
  if (label === 'LinkedIn') return <Linkedin />;
  return <ExternalLink />;
}

export function Contact() {
  return (
    <Section id="contact" glow="tr">
      <SectionHeading
        kicker={contactCopy.kicker}
        title={contactCopy.title}
        lead={contactCopy.lead}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="hover:shadow-(--shadow-pop) hover:border-primary/30">
          <CardContent className="flex flex-col items-start p-6">
            <span className="flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Mail className="size-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold">Email</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Drop me a line (I promise to respond faster than your browser
              loads).
            </p>
            <Button size="sm" className="mt-4" asChild>
              <a href={`mailto:${profile.email}`}>
                <Mail />
                Send Email
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-(--shadow-pop) hover:border-primary/30">
          <CardContent className="flex flex-col items-start p-6">
            <span className="flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Phone className="size-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold">Phone</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              For when typing just isn&apos;t enough.
            </p>
            <Badge variant="outline" className="mt-4">
              <Phone className="size-3" />
              {profile.phone}
            </Badge>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10">
        <p className="kicker mb-4">Find Me in the Digital Wilderness</p>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((social) => (
            <Button key={social.label} variant="outline" size="sm" asChild>
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                {socialIcon(social.label)}
                {social.label}
              </a>
            </Button>
          ))}
        </div>
      </div>

      <Card className="relative mt-12 overflow-hidden border-none bg-secondary text-secondary-foreground">
        <div
          aria-hidden
          className="bg-grid-dark pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_100%_at_100%_0%,black,transparent)]"
        />
        <div
          aria-hidden
          className="glow -right-16 -top-16 size-80 opacity-50"
        />
        <CardContent className="relative p-8 md:p-10">
          <h3 className="text-2xl font-bold md:text-3xl">
            {contactCopy.ctaTitle}
          </h3>
          <p className="mt-3 max-w-2xl text-secondary-foreground/70">
            {contactCopy.ctaBody}
          </p>
          <Button size="lg" className="mt-6" asChild>
            <a href={`mailto:${profile.email}`}>
              <Mail />
              Launch a Project
            </a>
          </Button>
        </CardContent>
      </Card>
    </Section>
  );
}
