import * as React from 'react';
import { Badge } from '@/components/ui/badge';
import { skillGroups } from '@/lib/portfolio/content';

export function Skills() {
  return (
    <section id="skills" className="container mx-auto max-w-5xl px-6 py-16 md:py-20">
      <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Skills</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">Grouped by focus</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Core stack up top, platform &amp; security underneath. No percentage bars.
          </p>
        </div>
        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <div className="flex items-baseline gap-3">
                <h3 className="text-sm font-semibold">{group.title}</h3>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {group.tier === 'primary' ? 'Daily driver' : 'Strong'}
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge
                    key={item}
                    variant={group.tier === 'primary' ? 'default' : 'secondary'}
                    className="rounded-full px-3 py-1 text-xs font-normal"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
