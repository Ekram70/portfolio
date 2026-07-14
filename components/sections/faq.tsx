import { Plus } from 'lucide-react';

import { Section, SectionHeading } from '@/components/ui/section';
import { faqs } from '@/lib/data';

export function Faq() {
  return (
    <Section id="faq" glow="bl">
      <SectionHeading
        kicker="FAQ"
        title="Questions, Answered"
        lead="The things people usually ask before we start building together."
      />
      <div className="mx-auto max-w-3xl divide-y divide-border rounded-lg border border-border bg-card">
        {faqs.map((faq) => (
          <details key={faq.q} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold [&::-webkit-details-marker]:hidden">
              {faq.q}
              <Plus className="size-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-45" />
            </summary>
            <div className="overflow-hidden px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
