'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  ChevronRight,
  ExternalLink,
  Github,
  Mail,
  Menu,
} from 'lucide-react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navLinks, profile, socialLinks } from '@/lib/data';

const sectionIds = navLinks.map((l) => l.href.replace('#', ''));

function Brand({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn('group flex items-center gap-3', className)}>
      <Avatar className="h-9 w-9">
        <AvatarFallback className="bg-primary text-sm font-bold text-primary-foreground">
          {profile.initials}
        </AvatarFallback>
      </Avatar>
      <span className="text-base font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
        {profile.name}
      </span>
    </a>
  );
}

function AvailabilityPill({ className }: { className?: string }) {
  if (!profile.available) return null;
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 text-xs font-medium text-muted-foreground',
        className
      )}
    >
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-70" />
        <span className="relative inline-flex size-2 rounded-full bg-green-500" />
      </span>
      {profile.availabilityLabel}
    </span>
  );
}

function socialIcon(label: string) {
  return label === 'GitHub' ? <Github /> : <ExternalLink />;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string>('');
  const [hovered, setHovered] = useState<string | null>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });

  // Scroll: pill state + progress bar (rAF-throttled)
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const top = window.scrollY;
        setScrolled(top > 12);
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, top / max) : 0);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Scroll-spy: which section is in the upper band
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Sliding indicator: follows hovered link, snaps back to the active one
  const targetHref = hovered ?? (activeId ? `#${activeId}` : null);
  useLayoutEffect(() => {
    const measure = () => {
      const nav = navRef.current;
      const el = targetHref ? linkRefs.current[targetHref] : null;
      if (nav && el) {
        const nr = nav.getBoundingClientRect();
        const r = el.getBoundingClientRect();
        setIndicator({ left: r.left - nr.left, width: r.width, ready: true });
      } else {
        setIndicator((s) => ({ ...s, ready: false }));
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [targetHref, scrolled]);

  return (
    <>
      {/* scroll progress bar */}
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-primary"
        style={{ transform: `scaleX(${progress})` }}
      />

      <header
        className={cn(
          'sticky z-50 w-full transition-all duration-300',
          scrolled
            ? 'top-3'
            : 'top-0 border-b border-border bg-background/60 backdrop-blur-xl'
        )}
      >
        <div
          className={cn(
            'mx-auto flex items-center justify-between transition-all duration-300',
            scrolled
              ? 'max-w-5xl rounded-md border border-border bg-background/85 px-4 py-2 shadow-(--shadow-pop) backdrop-blur-xl'
              : 'max-w-7xl px-6 py-3 md:px-12'
          )}
        >
          <Brand />

          {/* Desktop nav */}
          <nav
            ref={navRef}
            onMouseLeave={() => setHovered(null)}
            className="relative hidden items-center gap-1 md:flex"
          >
            {/* sliding indicator */}
            <span
              aria-hidden
              className={cn(
                'absolute inset-y-0 rounded-md bg-primary/10 transition-all duration-300 ease-out',
                indicator.ready ? 'opacity-100' : 'opacity-0'
              )}
              style={{ left: indicator.left, width: indicator.width }}
            />
            {navLinks.map((link) => {
              const isActive = activeId === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  ref={(el) => {
                    linkRefs.current[link.href] = el;
                  }}
                  onMouseEnter={() => setHovered(link.href)}
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'sm' }),
                    'relative z-10 hover:bg-transparent',
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-3">
            <AvailabilityPill className="hidden lg:inline-flex" />
            <Button size="sm" className="hidden md:inline-flex" asChild>
              <a href={profile.blog} target="_blank" rel="noopener noreferrer">
                Read Blog
                <ArrowUpRight />
              </a>
            </Button>

            {/* Mobile trigger */}
            <div className="md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Open menu">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <SheetHeader className="gap-3">
                    <SheetTitle className="text-left">
                      <Brand />
                    </SheetTitle>
                    <AvailabilityPill className="w-fit" />
                  </SheetHeader>

                  <nav className="flex flex-col gap-1 px-2">
                    {navLinks.map((link) => {
                      const isActive = activeId === link.href.replace('#', '');
                      return (
                        <SheetClose asChild key={link.href}>
                          <a
                            href={link.href}
                            className={cn(
                              'flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                              isActive
                                ? 'bg-primary/10 text-primary'
                                : 'text-foreground hover:bg-accent'
                            )}
                          >
                            {link.label}
                            <ChevronRight className="size-4 opacity-40" />
                          </a>
                        </SheetClose>
                      );
                    })}
                  </nav>

                  <div className="mx-4 border-t border-border" />

                  <div className="flex gap-2 px-4">
                    {socialLinks.map((social) => (
                      <Button
                        key={social.label}
                        variant="outline"
                        size="icon"
                        aria-label={social.label}
                        asChild
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {socialIcon(social.label)}
                        </a>
                      </Button>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-col gap-2 p-4">
                    <SheetClose asChild>
                      <Button asChild>
                        <a
                          href={profile.blog}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read Blog
                          <ArrowUpRight />
                        </a>
                      </Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button variant="outline" asChild>
                        <a href={`mailto:${profile.email}`}>
                          <Mail />
                          Start a Conversation
                        </a>
                      </Button>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
