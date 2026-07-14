'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { navLinks, profile } from '@/lib/data';

function Brand({ className }: { className?: string }) {
  return (
    <a href="#top" className={className}>
      <span className="flex items-center gap-3">
        <Avatar className="h-9 w-9">
          <AvatarFallback className="bg-primary text-sm font-bold text-primary-foreground">
            {profile.initials}
          </AvatarFallback>
        </Avatar>
        <span className="text-base font-bold tracking-tight text-foreground">
          {profile.name}
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-12">
        <Brand />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" size="sm" asChild>
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
          <Button size="sm" className="ml-2" asChild>
            <a href={profile.blog} target="_blank" rel="noopener noreferrer">
              Read Blog
            </a>
          </Button>
        </nav>

        {/* Mobile nav */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Brand />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-2">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button className="mt-3" asChild>
                    <a
                      href={profile.blog}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Blog
                    </a>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
