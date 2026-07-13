'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, ImageIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Props = {
  index: number;
  project: {
    title: string;
    subtitle: string;
    stack: string[];
    problem: string;
    approach: string;
    decisions: string[];
    improveNext: string[];
    demoUrl: string | null;
    codeUrl: string | null;
    screenshotAlt: string;
  };
};

export function HeroProject({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card className="overflow-hidden border-border/70">
        <div className="grid gap-0 md:grid-cols-2">
          {/* Screenshot slot */}
          <div className="relative order-1 aspect-[4/3] w-full bg-gradient-to-br from-muted/60 via-muted/30 to-background md:order-none md:aspect-auto">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <div className="flex flex-col items-center gap-2 text-center">
                <ImageIcon className="h-8 w-8 opacity-40" />
                <span className="text-xs uppercase tracking-widest">Screenshot slot</span>
                <span className="px-6 text-xs text-muted-foreground/70">{project.screenshotAlt}</span>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
          </div>

          <CardContent className="space-y-5 p-6 md:p-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Featured project {index + 1}
              </p>
              <h3 className="mt-1 text-xl font-semibold tracking-tight md:text-2xl">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.subtitle}</p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((t) => (
                <Badge key={t} variant="secondary" className="rounded-full text-[11px] font-normal">
                  {t}
                </Badge>
              ))}
            </div>

            <Section label="Problem">{project.problem}</Section>
            <Section label="Approach">{project.approach}</Section>

            <div>
              <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                Key decisions
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-foreground/90">
                {project.decisions.map((d, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/60" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                What I&apos;d improve next
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-foreground/90">
                {project.improveNext.map((d, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {(project.demoUrl || project.codeUrl) && (
              <div className="flex flex-wrap gap-2 pt-1">
                {project.demoUrl && (
                  <Button size="sm" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-2 h-3.5 w-3.5" /> Live demo
                    </a>
                  </Button>
                )}
                {project.codeUrl && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.codeUrl} target="_blank" rel="noreferrer">
                      <Code2 className="mr-2 h-3.5 w-3.5" /> View code
                    </a>
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">{children}</p>
    </div>
  );
}
