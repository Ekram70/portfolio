'use client';

import { useEffect, useState } from 'react';

const TYPE_MS = 70;
const DELETE_MS = 40;
const HOLD_MS = 1600;

export function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }, []);

  useEffect(() => {
    if (reduced) return;
    const current = words[index % words.length];

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), HOLD_MS);
      return () => clearTimeout(t);
    }
    if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      },
      deleting ? DELETE_MS : TYPE_MS
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, reduced, words]);

  if (reduced) {
    return <span className="text-primary">{words[0]}</span>;
  }

  return (
    <span className="text-primary">
      {text}
      <span className="ml-0.5 inline-block h-[0.85em] w-[3px] translate-y-[0.08em] animate-caret bg-primary align-middle" />
    </span>
  );
}
