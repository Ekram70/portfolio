import { Github, Mail, MapPin, Phone, Star } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CornerNode } from '@/components/ui/section';
import { CodeEditor } from '@/components/visuals/code-editor';
import { Typewriter } from '@/components/visuals/typewriter';
import { heroCopy, profile } from '@/lib/data';

export function Hero() {
  return (
    <section id="top" className="relative border-b border-border">
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden border-x border-border px-6 py-20 md:px-12 md:py-28">
        {/* layered backdrop: subtle grid + a single soft glow */}
        <div
          aria-hidden
          className="bg-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_35%_0%,black,transparent)]"
        />
        <div
          aria-hidden
          className="glow animate-blob -right-28 -top-28 size-[30rem] opacity-70"
        />

        <CornerNode className="bottom-0 left-0 translate-y-1/2" />
        <CornerNode className="bottom-0 right-0 translate-y-1/2" />

        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          {/* Left: copy */}
          <div className="max-w-2xl">
            <Badge variant="accent" className="reveal mb-6">
              <Star className="size-3" />
              {heroCopy.badge}
            </Badge>

            <p className="reveal kicker mb-4" style={{ animationDelay: '0.05s' }}>
              {heroCopy.kicker}
            </p>

            <h1
              className="reveal title text-balance"
              style={{ animationDelay: '0.1s' }}
            >
              {heroCopy.titleLead} <span className="text-primary">&amp;</span>
              <br />
              <Typewriter words={heroCopy.roles} />
            </h1>

            <p className="reveal lead mt-6" style={{ animationDelay: '0.2s' }}>
              {heroCopy.lead}
            </p>

            <div
              className="reveal mt-8 flex flex-wrap gap-2.5"
              style={{ animationDelay: '0.3s' }}
            >
              <Badge variant="secondary">
                <MapPin className="size-3" />
                {profile.location}
              </Badge>
              <Badge variant="secondary">
                <Phone className="size-3" />
                {profile.phone}
              </Badge>
              <Badge variant="secondary">
                <Mail className="size-3" />
                {profile.email}
              </Badge>
            </div>

            <div
              className="reveal mt-10 flex flex-wrap gap-3"
              style={{ animationDelay: '0.4s' }}
            >
              <Button size="lg" asChild>
                <a href={`mailto:${profile.email}`}>
                  <Mail />
                  Start a Conversation
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">
                  <Star />
                  View Projects
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Right: code-editor visual */}
          <div className="reveal relative" style={{ animationDelay: '0.35s' }}>
            <CodeEditor />
          </div>
        </div>
      </div>
    </section>
  );
}
