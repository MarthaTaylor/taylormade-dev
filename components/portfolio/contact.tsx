import * as React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { person } from '@/lib/portfolio/content';

export function Contact() {
  return (
    <section id="contact" className="border-t border-border/60">
      <div className="container mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Contact</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          Let&apos;s build something considered.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Currently open to senior full-stack &amp; frontend roles. Drop me a line — I&apos;m easy to reach.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <a href={`mailto:${person.email}`}>
              <Mail className="mr-2 h-4 w-4" /> {person.email}
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={person.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href={person.github} target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
        </div>
        <p className="mt-14 text-xs text-muted-foreground">
          Built with Next.js + TypeScript. Repo cards inferred from GitHub READMEs by an LLM at request time.
        </p>
      </div>
    </section>
  );
}
