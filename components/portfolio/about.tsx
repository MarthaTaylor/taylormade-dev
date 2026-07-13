import * as React from 'react';
import { about } from '@/lib/portfolio/content';

export function About() {
  return (
    <section id="about" className="container mx-auto max-w-5xl px-6 py-16 md:py-20">
      <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">About</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">How I work</h2>
        </div>
        <div className="space-y-4 text-[15px] leading-relaxed text-foreground/90 md:text-base">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
