'use client';

import * as React from 'react';
import { Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { skillGroups, awards } from '@/lib/portfolio/content';
import { SectionAchievement } from '@/components/portfolio/gamification';

export function Skills() {
  return (
    <SectionAchievement id="skills" achievementId="skill-scanner">
      <section className="container mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Skills</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">Grouped by focus</h2>
            <p className="mt-3 text-[15px] text-muted-foreground">
              Core stack up top, platform &amp; security underneath. No percentage bars.
            </p>
          </div>
          <div className="space-y-8">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-base font-semibold">{group.title}</h3>
                  <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    {group.tier === 'primary' ? 'Daily driver' : 'Strong'}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge
                      key={item}
                      variant={group.tier === 'primary' ? 'default' : 'secondary'}
                      className="rounded-full px-3 py-1 text-[13px] font-normal"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}

            {/* Recognition / awards */}
            <div className="rounded-xl border border-amber-300/50 bg-gradient-to-br from-amber-50/70 to-orange-50/40 p-5 dark:border-amber-500/25 dark:from-amber-500/10 dark:to-orange-500/5">
              <div className="flex items-start gap-3">
                <Award className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" aria-hidden />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-amber-800 dark:text-amber-300">
                    Recognition
                  </p>
                  <ul className="mt-1.5 space-y-1 text-[15px] text-foreground/90">
                    {awards.map((a, i) => (
                      <li key={i} className="leading-relaxed">
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionAchievement>
  );
}
