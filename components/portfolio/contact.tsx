'use client';

import * as React from 'react';
import { Linkedin, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { person } from '@/lib/portfolio/content';
import { SectionAchievement } from '@/components/portfolio/gamification';

export function Contact() {
  return (
    <SectionAchievement id="contact" achievementId="made-contact">
      <section className="border-t border-border/60">
        <div className="container mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Contact</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Let&apos;s build something considered.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Currently open to senior full-stack &amp; frontend roles. Reach me on LinkedIn.
          </p>
          <div className="mt-10 flex justify-center">
            <Button size="lg" asChild className="group">
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Open Martha Taylor's LinkedIn profile"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                Message me on LinkedIn
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
          <p className="mt-16 text-xs text-muted-foreground">
            Built with Next.js + TypeScript. Try{' '}
            <kbd className="rounded border border-border/60 bg-muted px-1.5 py-0.5 text-[10px]">⌘ K</kbd>{' '}
            for the command palette — and there&apos;s a Konami code hiding somewhere.
          </p>
        </div>
      </section>
    </SectionAchievement>
  );
}
