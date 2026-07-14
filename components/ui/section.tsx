import * as React from 'react';

import { cn } from '@/lib/utils';

/** Small square node placed at the corners where section borders meet. */
function CornerNode({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        'absolute z-10 size-2 -translate-x-1/2 -translate-y-1/2 border border-primary/60 bg-background',
        className
      )}
    />
  );
}

type SectionProps = React.ComponentProps<'section'> & {
  /** Use the alternating tinted surface as the background. */
  tint?: boolean;
  /** Decorative background texture behind content. */
  pattern?: 'dots' | 'grid' | 'none';
  /** Position of a soft orange glow blob: corner or none. */
  glow?: 'tl' | 'tr' | 'bl' | 'br' | 'none';
};

const glowPos: Record<string, string> = {
  tl: '-left-24 -top-24',
  tr: '-right-24 -top-24',
  bl: '-left-24 -bottom-24',
  br: '-right-24 -bottom-24',
};

/**
 * A centered max-w column with side borders and 8px corner nodes, mirroring
 * the ThriveDesk design system's section framing. Optional tint / pattern /
 * glow layers add visual rhythm between sections.
 */
function Section({
  id,
  className,
  children,
  tint = false,
  pattern = 'none',
  glow = 'none',
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative border-b border-border',
        tint && 'bg-surface-2'
      )}
      {...props}
    >
      <div
        className={cn(
          'relative mx-auto w-full max-w-7xl overflow-hidden border-x border-border px-6 py-16 md:px-12 md:py-24',
          className
        )}
      >
        {pattern !== 'none' && (
          <div
            aria-hidden
            className={cn(
              'pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,black,transparent)]',
              pattern === 'dots' ? 'bg-dots' : 'bg-grid'
            )}
          />
        )}
        {glow !== 'none' && (
          <div
            aria-hidden
            className={cn('glow size-96', glowPos[glow])}
          />
        )}
        <CornerNode className="left-0 top-0" />
        <CornerNode className="right-0 top-0" />
        <CornerNode className="bottom-0 left-0 translate-y-1/2" />
        <CornerNode className="bottom-0 right-0 translate-y-1/2" />
        <div className="relative">{children}</div>
      </div>
    </section>
  );
}

/** Kicker → title → optional lead block used at the top of most sections. */
function SectionHeading({
  kicker,
  title,
  lead,
  className,
}: {
  kicker?: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={cn('mb-12 max-w-2xl', className)}>
      {kicker ? <p className="kicker mb-3">{kicker}</p> : null}
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {lead ? <p className="lead mt-4">{lead}</p> : null}
    </div>
  );
}

export { Section, SectionHeading, CornerNode };
