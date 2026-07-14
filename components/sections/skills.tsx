import {
  Code2,
  Layers,
  PenTool,
  Server,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionHeading } from '@/components/ui/section';
import { skillGroups } from '@/lib/data';

const groupIcons: Record<string, LucideIcon> = {
  Languages: Code2,
  Frontend: Layers,
  Backend: Server,
  Tools: Wrench,
  Design: PenTool,
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        kicker="Skills"
        title="My Arsenal of Digital Wizardry"
        lead="The tools, languages, and frameworks I reach for to ship reliable, polished interfaces."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = groupIcons[group.label] ?? Code2;
          return (
          <Card
            key={group.label}
            className="hover:shadow-(--shadow-pop) hover:border-primary/30"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg">
                <span className="flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="size-4.5" />
                </span>
                {group.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          );
        })}
      </div>
    </Section>
  );
}
