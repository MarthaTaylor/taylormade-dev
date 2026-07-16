import * as React from 'react';
import { Building2 } from 'lucide-react';
import { cvsFull } from '@/lib/portfolio/cv-content';

// Uses the same source of truth as the CV page.
export function Experience() {
  const roles = cvsFull[0].experience;

  return (
    <section id="experience" className="container mx-auto max-w-5xl px-6 py-16 md:py-20">
      <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Experience</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">Where I&apos;ve shipped</h2>
          <p className="mt-3 text-[15px] text-muted-foreground">
            Condensed timeline. Full detail lives on the <a href="/cv" className="underline underline-offset-4 hover:text-foreground">CV page</a>.
          </p>
        </div>
        <ol className="relative space-y-8 border-l border-border/60 pl-6">
          {roles.map((role, i) => (
            <li key={i} className="relative">
              <span aria-hidden className="absolute -left-[27px] top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-background">
                <span className="h-2 w-2 rounded-full bg-foreground/80" />
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="text-[16px] font-semibold">{role.company}</h3>
                <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                  {role.period}
                </span>
              </div>
              <p className="mt-0.5 text-[14px] text-foreground/90">{role.role}</p>
              <p className="mt-0.5 inline-flex items-center gap-1.5 text-[12px] text-muted-foreground">
                <Building2 className="h-3 w-3" aria-hidden />
                {role.location}
                {role.context && (<><span aria-hidden>&middot;</span><span>{role.context}</span></>)}
              </p>
              <ul className="mt-2 space-y-1.5 text-[14px] leading-relaxed text-foreground/95">
                {role.bullets.slice(0, 2).map((b, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/50" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
