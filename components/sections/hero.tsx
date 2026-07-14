import { ArrowDown, Github, Mail, MapPin, Phone, Star } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CornerNode } from '@/components/ui/section';
import { CodeEditor } from '@/components/visuals/code-editor';
import { heroCopy, profile } from '@/lib/data';

export function Hero() {
  return (
    <section id="top" className="relative border-b border-border">
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden border-x border-border px-6 py-20 md:px-12 md:py-28">
        {/* layered backdrop: grid + fading glow */}
        <div
          aria-hidden
          className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_70%_at_30%_0%,black,transparent)]"
        />
        <div
          aria-hidden
          className="glow animate-blob -right-24 -top-24 size-[28rem]"
        />
        <CornerNode className="bottom-0 left-0 translate-y-1/2" />
        <CornerNode className="bottom-0 right-0 translate-y-1/2" />

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: copy */}
          <div className="max-w-2xl">
            <Badge variant="accent" className="mb-6">
              <Star className="size-3" />
              {heroCopy.badge}
            </Badge>

            <p className="kicker mb-4">{heroCopy.kicker}</p>

            <h1 className="title text-balance">
              {heroCopy.title.split('&')[0].trim()}{' '}
              <span className="text-primary">&amp;</span>{' '}
              {heroCopy.title.split('&')[1].trim()}
            </h1>

            <p className="lead mt-6">{heroCopy.lead}</p>

            <div className="mt-8 flex flex-wrap gap-2.5">
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

            <div className="mt-10 flex flex-wrap gap-3">
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
          <div className="relative">
            <CodeEditor />
          </div>
        </div>

        <div className="relative mt-14 flex animate-bounce text-muted-foreground">
          <ArrowDown className="size-5" />
        </div>
      </div>
    </section>
  );
}
