import { SiReact, SiNextdotjs, SiTypescript } from 'react-icons/si';

/* Syntax token helpers — colored via CSS variables from the code palette. */
const K = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: 'var(--code-keyword)' }}>{children}</span>
);
const S = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: 'var(--code-string)' }}>{children}</span>
);
const N = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: 'var(--code-number)' }}>{children}</span>
);
const F = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: 'var(--code-fn)' }}>{children}</span>
);
const C = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: 'var(--code-comment)' }}>{children}</span>
);
const P = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: 'var(--code-punct)' }}>{children}</span>
);

const lines: React.ReactNode[] = [
  <>
    <C>{'// the human behind the pixels'}</C>
  </>,
  <>
    <K>const</K> developer <P>=</P> <P>{'{'}</P>
  </>,
  <>
    {'  '}name<P>:</P> <S>&apos;Md. Ekram Ullah&apos;</S><P>,</P>
  </>,
  <>
    {'  '}role<P>:</P> <S>&apos;Frontend Developer&apos;</S><P>,</P>
  </>,
  <>
    {'  '}stack<P>:</P> <P>[</P><S>&apos;React&apos;</S><P>,</P>{' '}
    <S>&apos;Next.js&apos;</S><P>,</P> <S>&apos;TS&apos;</S><P>]</P><P>,</P>
  </>,
  <>
    {'  '}available<P>:</P> <K>true</K><P>,</P>
  </>,
  <>
    <P>{'}'}</P>
  </>,
  <>{' '}</>,
  <>
    <K>function</K> <F>build</F><P>(</P>idea<P>:</P> Idea<P>)</P> <P>{'{'}</P>
  </>,
  <>
    {'  '}<K>return</K> <F>craft</F><P>(</P>idea<P>,</P> <P>{'{'}</P> coffee<P>:</P>{' '}
    <N>Infinity</N> <P>{'}'}</P><P>)</P>
  </>,
  <>
    <P>{'}'}</P>
  </>,
];

function FloatingBadge({
  Icon,
  color,
  className,
  delay,
}: {
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  className: string;
  delay: string;
}) {
  return (
    <div
      className={`animate-float absolute flex size-12 items-center justify-center rounded-xl border border-border bg-card shadow-(--shadow-pop) ${className}`}
      style={{ animationDelay: delay }}
    >
      <Icon className="size-6" style={{ color }} />
    </div>
  );
}

export function CodeEditor() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* glow behind the window */}
      <div className="glow -inset-8 animate-blob" aria-hidden />

      {/* floating brand badges */}
      <FloatingBadge
        Icon={SiReact}
        color="#61DAFB"
        className="-left-6 top-10 z-20"
        delay="0s"
      />
      <FloatingBadge
        Icon={SiTypescript}
        color="#3178C6"
        className="-right-5 top-1/3 z-20"
        delay="1.2s"
      />
      <FloatingBadge
        Icon={SiNextdotjs}
        color="var(--foreground)"
        className="-bottom-5 left-10 z-20"
        delay="2.1s"
      />

      {/* editor window */}
      <div
        className="relative z-10 overflow-hidden rounded-xl border border-border shadow-(--shadow-pop)"
        style={{ background: 'var(--code-bg)' }}
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="size-3 rounded-full bg-primary" />
          <span className="size-3 rounded-full bg-white/25" />
          <span className="size-3 rounded-full bg-white/25" />
          <span className="ml-3 font-mono text-xs text-white/50">
            developer.ts
          </span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
          <code>
            {lines.map((ln, i) => (
              <div key={i} className="flex gap-4">
                <span className="w-4 select-none text-right text-white/20">
                  {i + 1}
                </span>
                <span style={{ color: 'var(--code-fg)' }}>{ln}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
