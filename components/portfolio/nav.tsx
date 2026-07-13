'use client';

import * as React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { person } from '@/lib/portfolio/content';
import { Github, Linkedin, Menu } from 'lucide-react';
import { XpBar, useGamification } from '@/components/portfolio/gamification';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const { unlock } = useGamification();
  const { theme, resolvedTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const lastThemeRef = React.useRef<string | undefined>(undefined);
  React.useEffect(() => {
    const t = resolvedTheme || theme;
    if (lastThemeRef.current && lastThemeRef.current !== t) {
      unlock('theme-switcher');
    }
    lastThemeRef.current = t;
  }, [theme, resolvedTheme, unlock]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 md:px-6">
        <Link
          href="#top"
          className="rounded-sm text-sm font-semibold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {person.name.split(' ')[0]}
          <span className="text-muted-foreground">.dev</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <div className="hidden lg:block">
            <XpBar />
          </div>
          <div className="lg:hidden">
            <XpBar compact />
          </div>

          <Button variant="ghost" size="icon" asChild className="hidden rounded-full sm:inline-flex">
            <a href={person.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hidden rounded-full sm:inline-flex">
            <a href={person.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <ThemeToggle />

          {/* Mobile hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full md:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle>Menu</SheetTitle>
              <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-md px-3 py-2 text-base text-foreground transition-colors hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
              <div className="mt-6 flex items-center gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={person.github} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={person.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                Tip: press <kbd className="rounded border border-border/60 bg-muted px-1.5 py-0.5 text-[10px]">⌘ K</kbd> anywhere for the command palette.
              </p>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
