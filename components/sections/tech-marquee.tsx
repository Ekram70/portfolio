import { techLogos, type Tech } from '@/lib/tech';

function Track({
  items,
  reverse = false,
  ariaHidden = false,
}: {
  items: Tech[];
  reverse?: boolean;
  ariaHidden?: boolean;
}) {
  return (
    <ul
      aria-hidden={ariaHidden}
      className={`flex shrink-0 items-center gap-10 px-5 ${
        reverse ? 'animate-marquee-reverse' : 'animate-marquee'
      }`}
    >
      {items.map((tech) => (
        <li key={tech.name} className="group flex items-center gap-2.5">
          <tech.Icon
            className="size-6 text-muted-foreground transition-colors duration-200 group-hover:[color:var(--brand)]"
            style={{ '--brand': tech.color } as React.CSSProperties}
          />
          <span className="whitespace-nowrap font-mono text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
            {tech.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function TechMarquee() {
  const row1 = techLogos;
  const row2 = [...techLogos].reverse();

  return (
    <section
      aria-label="Technologies I work with"
      className="space-y-5 border-b border-border bg-surface-2 py-8"
    >
      <div className="marquee-mask mx-auto flex max-w-7xl overflow-hidden">
        <div className="flex">
          <Track items={row1} />
          <Track items={row1} ariaHidden />
        </div>
      </div>
      <div className="marquee-mask mx-auto flex max-w-7xl overflow-hidden">
        <div className="flex">
          <Track items={row2} reverse />
          <Track items={row2} reverse ariaHidden />
        </div>
      </div>
    </section>
  );
}
