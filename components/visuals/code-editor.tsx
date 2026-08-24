'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Boxes, Files, GitBranch, Search, Settings } from 'lucide-react';
import { SiTypescript } from 'react-icons/si';

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
  <C key="l0">{'// the human behind the commits'}</C>,
  <span key="l1">
    <K>const</K> developer <P>=</P> <P>{'{'}</P>
  </span>,
  <span key="l2">
    {'  '}name<P>:</P> <S>&apos;Md. Ekram Ullah&apos;</S>
    <P>,</P>
  </span>,
  <span key="l3">
    {'  '}role<P>:</P> <S>&apos;Full Stack Developer&apos;</S>
    <P>,</P>
  </span>,
  <span key="l4">
    {'  '}frontend<P>:</P> <P>[</P>
    <S>&apos;Angular&apos;</S>
    <P>,</P> <S>&apos;React&apos;</S>
    <P>,</P> <S>&apos;TS&apos;</S>
    <P>]</P>
    <P>,</P>
  </span>,
  <span key="l4b">
    {'  '}backend<P>:</P> <P>[</P>
    <S>&apos;NestJS&apos;</S>
    <P>,</P> <S>&apos;Laravel&apos;</S>
    <P>,</P> <S>&apos;MySQL&apos;</S>
    <P>]</P>
    <P>,</P>
  </span>,
  <span key="l5">
    {'  '}available<P>:</P> <K>true</K>
    <P>,</P>
  </span>,
  <span key="l6">
    <P>{'}'}</P>
  </span>,
  <span key="l7">&nbsp;</span>,
  <span key="l8">
    <K>function</K> <F>build</F>
    <P>(</P>idea<P>:</P> Idea<P>)</P> <P>{'{'}</P>
  </span>,
  <span key="l9">
    {'  '}
    <K>return</K> <F>craft</F>
    <P>(</P>idea<P>,</P> <P>{'{'}</P> coffee<P>:</P> <N>Infinity</N>{' '}
    <P>{'}'}</P>
    <P>)</P>
  </span>,
  <span key="l10">
    <P>{'}'}</P>
  </span>,
];

const terminalLines = [
  { text: '$ npm run dev', className: 'text-white/80' },
  { text: '▲ Next.js 15.5.23  (turbopack)', className: 'text-white/60' },
  { text: '✓ Ready in 912ms', className: 'text-green-400' },
  { text: '○ Local:  http://localhost:3000', className: 'text-white/60' },
];

type Phase = 'typing' | 'done';

export function CodeEditor() {
  const [line, setLine] = useState(0); // code lines revealed
  const [phase, setPhase] = useState<Phase>('typing');
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [interactive, setInteractive] = useState(false);

  const wrapRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Orchestrated sequence (with reduced-motion / SSR fallback to final state).
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setInteractive(window.matchMedia('(min-width: 1024px)').matches && !reduce);

    if (reduce) {
      setLine(lines.length);
      setPhase('done');
      return;
    }

    const t = timers.current;
    const push = (fn: () => void, ms: number) => t.push(setTimeout(fn, ms));
    let clock = 300;

    // type code lines
    for (let i = 1; i <= lines.length; i++) {
      const at = clock;
      push(() => setLine(i), at);
      clock += 300;
    }
    push(() => setPhase('done'), clock + 200);

    return () => {
      t.forEach(clearTimeout);
      t.length = 0;
    };
  }, []);

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (!interactive || !wrapRef.current) return;
      const r = wrapRef.current.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      setTilt({ rx: -py * 7, ry: px * 7 });
    },
    [interactive]
  );
  const onLeave = useCallback(() => setTilt({ rx: 0, ry: 0 }), []);

  const shown = lines.slice(0, line);
  const typingActive = phase === 'typing' && line < lines.length;
  const activeLineNo = Math.min(line, lines.length);

  return (
    <div
      className="relative mx-auto w-full max-w-lg"
      style={{ perspective: '1200px' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* glow behind the window */}
      <div className="glow -inset-8 animate-blob" aria-hidden />

      <div
        ref={wrapRef}
        className="relative transition-transform duration-200 ease-out [transform-style:preserve-3d]"
        style={{ transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
      >
        {/* editor window */}
        <div
          className="relative z-10 overflow-hidden rounded-xl border border-border shadow-(--shadow-pop)"
          style={{ background: 'var(--code-bg)' }}
        >
          <div className="flex">
            {/* activity bar */}
            <div className="flex w-11 flex-col items-center justify-between border-r border-white/10 py-3">
              <div className="flex flex-col items-center gap-4">
                <Files className="size-4.5 text-primary" />
                <Search className="size-4.5 text-white/30" />
                <GitBranch className="size-4.5 text-white/30" />
                <Boxes className="size-4.5 text-white/30" />
              </div>
              <Settings className="size-4.5 text-white/30" />
            </div>

            <div className="min-w-0 flex-1">
              {/* tab strip */}
              <div className="flex items-stretch border-b border-white/10 text-xs">
                <div
                  className="flex items-center gap-2 border-t-2 border-primary px-3 py-2 font-mono text-white/80"
                  style={{ background: 'color-mix(in oklab, white 4%, transparent)' }}
                >
                  <SiTypescript className="size-3.5 text-[#3178C6]" />
                  developer.ts
                  <span className="text-white/30">×</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 font-mono text-white/30">
                  skills.json
                </div>
              </div>

              {/* code area */}
              <div className="relative">
                <pre className="min-h-[15.5rem] overflow-x-auto py-3 font-mono text-[13px] leading-relaxed">
                  <code>
                    {shown.map((ln, i) => (
                      <div key={i} className="flex gap-3 px-3">
                        <span className="w-5 select-none text-right text-white/20">
                          {i + 1}
                        </span>
                        <span style={{ color: 'var(--code-fg)' }}>
                          {ln}
                          {typingActive && i === shown.length - 1 && (
                            <span className="ml-0.5 inline-block h-[1em] w-[7px] translate-y-[0.15em] animate-caret bg-primary/80 align-middle" />
                          )}
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>

              {/* terminal panel (static) */}
              <div className="border-t border-white/10">
                <div className="flex items-center gap-2 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-white/40">
                  <span className="text-primary">●</span> Terminal
                </div>
                <div className="px-3 pb-3 font-mono text-[12px] leading-relaxed">
                  {terminalLines.map((t) => (
                    <div key={t.text} className={t.className}>
                      {t.text.startsWith('$') ? (
                        <>
                          <span className="text-green-400">$</span>
                          {t.text.slice(1)}
                        </>
                      ) : (
                        t.text
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* status bar */}
              <div className="flex items-center gap-3 border-t border-white/10 px-3 py-1.5 font-mono text-[10px] text-white/50">
                <span className="flex items-center gap-1">
                  <GitBranch className="size-3" /> main*
                </span>
                <span>
                  Ln {activeLineNo}, Col 1
                </span>
                <span className="ml-auto">TypeScript</span>
                <span className="flex items-center gap-1 text-green-400">
                  <span className="size-1.5 rounded-full bg-green-400" /> Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
