'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const current = mounted ? (resolvedTheme || theme) : 'light';
  const isDark = current === 'dark';

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="rounded-full"
    >
      {mounted && isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
