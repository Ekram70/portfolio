import { Section, SectionHeading } from '@/components/ui/section';
import { aboutCopy } from '@/lib/data';

export function About() {
  return (
    <Section id="about" glow="tl">
      <SectionHeading kicker={aboutCopy.kicker} title={aboutCopy.title} />
      <div className="max-w-3xl border-l-2 border-primary pl-6">
        <p className="text-lg leading-relaxed text-muted-foreground">
          {aboutCopy.body}
        </p>
      </div>
    </Section>
  );
}
