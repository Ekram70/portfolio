import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { profile } from '@/lib/data';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row md:px-12">
        <a href="#top" className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-primary text-xs font-bold text-primary-foreground">
              {profile.initials}
            </AvatarFallback>
          </Avatar>
          <span className="font-bold tracking-tight">{profile.name}</span>
        </a>
        <p className="text-sm text-muted-foreground">
          &copy; {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
