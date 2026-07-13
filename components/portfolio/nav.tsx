'use client';

import * as React from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { person } from '@/lib/portfolio/content';
import { Github, Linkedin } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="#top" className="text-sm font-semibold tracking-tight">
          {person.name.split(' ')[0]}<span className="text-muted-foreground">.dev</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <a href={person.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <a href={person.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
