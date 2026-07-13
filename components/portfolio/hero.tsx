'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { person } from '@/lib/portfolio/content';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
      >
        <div className="absolute inset-x-0 top-0 h-[540px] bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.10),transparent_60%),radial-gradient(circle_at_80%_10%,hsl(var(--chart-2)/0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.35)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.35)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="container mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs text-muted-foreground shadow-sm">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Available for senior full-stack roles
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            {person.name}
          </h1>

          <p className="mt-4 max-w-2xl text-balance text-lg text-foreground/80 md:text-xl">
            {person.tagline}
          </p>

          {/* Highlighted award badge */}
          <div className="mt-5 inline-flex max-w-full items-center gap-2 rounded-full border border-amber-300/60 bg-gradient-to-r from-amber-50 to-orange-50 px-3 py-1.5 text-[13px] font-medium text-amber-900 shadow-sm dark:border-amber-500/30 dark:from-amber-500/10 dark:to-orange-500/10 dark:text-amber-200">
            <Award className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" aria-hidden />
            <span>
              Google &middot; Udacity Front-End NanoDegree
              <span className="mx-1.5 text-amber-700/60 dark:text-amber-300/60">&mdash;</span>
              <span className="font-semibold">top 2% EMEA</span>
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <a href="#projects">
                See projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={person.cvUrl} download>
                <Download className="mr-2 h-4 w-4" /> Download CV
              </a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href={person.github} target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href={person.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
