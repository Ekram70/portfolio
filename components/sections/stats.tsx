import { Gauge, Network, Rocket, TestTube2, type LucideIcon } from 'lucide-react';

import { stats } from '@/lib/data';

const icons: LucideIcon[] = [Rocket, TestTube2, Network, Gauge];

export function Stats() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary text-secondary-foreground">
      <div
        aria-hidden
        className="bg-grid-dark pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_90%_at_50%_50%,black,transparent)]"
      />
      <div
        aria-hidden
        className="glow left-1/2 top-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 opacity-40"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden border-x border-border bg-white/10 md:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = icons[i];
          return (
            <div
              key={stat.label}
              className="group bg-secondary px-6 py-10 transition-colors hover:bg-secondary/80 md:px-8 md:py-14"
            >
              <span className="mb-4 flex size-10 items-center justify-center rounded-md bg-primary/15 text-primary">
                <Icon className="size-5" />
              </span>
              <div className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 font-semibold">{stat.label}</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-secondary-foreground/50">
                {stat.sub}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
