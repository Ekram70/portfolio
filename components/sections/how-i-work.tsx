import { Compass, Hammer, Rocket } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Section, SectionHeading } from '@/components/ui/section';
import { howIWork } from '@/lib/data';

const icons = [Compass, Hammer, Rocket];

export function HowIWork() {
  return (
    <Section id="approach" tint pattern="grid" glow="tr">
      <SectionHeading
        kicker="Approach"
        title="How I Turn Ideas Into Interfaces"
        lead="A simple loop that keeps the work honest, the code clean, and the users happy."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {howIWork.map((step, i) => {
          const Icon = icons[i];
          return (
            <Card
              key={step.no}
              className="hover:shadow-(--shadow-pop) hover:border-primary/30"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-4xl font-extrabold text-primary/15">
                    {step.no}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
