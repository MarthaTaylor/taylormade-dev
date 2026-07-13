'use client';

// A small gamification layer for the portfolio.
// - XP bar in the nav (fills as sections are viewed / actions completed).
// - Achievement toasts unlocked once per session (persisted to localStorage).
// - Konami-code easter egg with a fullscreen celebration.
// - Cmd/Ctrl+K command palette for keyboard navigation.

import * as React from 'react';
import { toast } from 'sonner';
import { AnimatePresence, motion } from 'framer-motion';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { achievementsList, maxXp } from '@/lib/portfolio/content';
import {
  Trophy,
  Sparkles,
  Home,
  User,
  Wrench,
  Rocket,
  Mail,
  Github,
  Linkedin,
  Moon,
  Sun,
} from 'lucide-react';
import { useTheme } from 'next-themes';

type Ctx = {
  xp: number;
  unlocked: Set<string>;
  unlock: (id: string) => void;
  openPalette: () => void;
};

const GamificationCtx = React.createContext<Ctx | null>(null);

const STORAGE_KEY = 'portfolio:achievements:v1';

export function GamificationProvider({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = React.useState<Set<string>>(new Set());
  const [paletteOpen, setPaletteOpen] = React.useState(false);
  const [konamiOpen, setKonamiOpen] = React.useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // Hydrate from localStorage
  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setUnlocked(new Set(JSON.parse(raw)));
    } catch {}
  }, []);

  const unlock = React.useCallback((id: string) => {
    setUnlocked((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(next)));
      } catch {}
      const ach = achievementsList.find((a) => a.id === id);
      if (ach) {
        toast.success(`${ach.icon}  ${ach.title}`, {
          description: `${ach.description}  +${ach.xp} XP`,
          duration: 2600,
        });
      }
      return next;
    });
  }, []);

  const xp = React.useMemo(
    () => achievementsList.filter((a) => unlocked.has(a.id)).reduce((s, a) => s + a.xp, 0),
    [unlocked]
  );

  // Konami code listener
  React.useEffect(() => {
    const seq = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let idx = 0;
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === seq[idx]) {
        idx += 1;
        if (idx === seq.length) {
          idx = 0;
          setKonamiOpen(true);
          unlock('konami-master');
        }
      } else {
        idx = key === seq[0] ? 1 : 0;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [unlock]);

  // Cmd/Ctrl+K palette listener
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const openPalette = React.useCallback(() => setPaletteOpen(true), []);

  const value: Ctx = { xp, unlocked, unlock, openPalette };

  return (
    <GamificationCtx.Provider value={value}>
      {children}
      <CommandPalette
        open={paletteOpen}
        setOpen={setPaletteOpen}
        onUsed={() => unlock('palette-master')}
        onToggleTheme={() => {
          setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
          unlock('theme-switcher');
        }}
      />
      <KonamiOverlay open={konamiOpen} onClose={() => setKonamiOpen(false)} />
      <FirstStepsBootstrap unlock={unlock} />
    </GamificationCtx.Provider>
  );
}

export function useGamification() {
  const ctx = React.useContext(GamificationCtx);
  if (!ctx) throw new Error('useGamification must be used inside GamificationProvider');
  return ctx;
}

// Unlocks the first-steps achievement once the user hits the page.
function FirstStepsBootstrap({ unlock }: { unlock: (id: string) => void }) {
  React.useEffect(() => {
    const t = setTimeout(() => unlock('first-steps'), 800);
    return () => clearTimeout(t);
  }, [unlock]);
  return null;
}

// Section-view tracker — unlocks when an element enters the viewport.
export function SectionAchievement({
  id,
  achievementId,
  children,
}: {
  id: string;
  achievementId: string;
  children: React.ReactNode;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { unlock } = useGamification();
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            unlock(achievementId);
            io.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [achievementId, unlock]);
  return (
    <div ref={ref} id={id}>
      {children}
    </div>
  );
}

// XP progress bar that goes in the nav.
export function XpBar({ compact = false }: { compact?: boolean }) {
  const { xp, unlocked, openPalette } = useGamification();
  const pct = Math.min(100, Math.round((xp / maxXp) * 100));

  return (
    <button
      onClick={openPalette}
      className="group flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-2.5 py-1 text-xs text-muted-foreground shadow-sm transition-colors hover:text-foreground"
      aria-label={`Open command palette — ${xp} of ${maxXp} XP earned`}
    >
      <Trophy className="h-3.5 w-3.5 text-amber-500" />
      {!compact && (
        <span className="tabular-nums">
          {xp}<span className="text-muted-foreground/60">/{maxXp}</span> XP
        </span>
      )}
      <div className="relative h-1.5 w-24 overflow-hidden rounded-full bg-muted">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-400 via-fuchsia-500 to-sky-500"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <span className="hidden text-[10px] uppercase tracking-widest text-muted-foreground/70 md:inline">
        {unlocked.size}/{achievementsList.length}
      </span>
    </button>
  );
}

// Konami celebration overlay.
function KonamiOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  React.useEffect(() => {
    if (!open) return;
    const t = setTimeout(onClose, 4200);
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', esc);
    return () => {
      clearTimeout(t);
      window.removeEventListener('keydown', esc);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-background/70 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', damping: 18, stiffness: 220 }}
            className="relative w-[min(560px,92vw)] rounded-2xl border border-border/60 bg-card p-8 text-center shadow-2xl"
          >
            <Sparkles className="mx-auto h-8 w-8 text-amber-500" />
            <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.35em] text-muted-foreground">
              Konami sequence detected
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">
              ▲ ▲ ▼ ▼ ◀ ▶ ◀ ▶ B A
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              You found the easter egg. This portfolio was itself built by a senior full-stack engineer who cares about the details.
            </p>
            <div className="mt-6 flex justify-center gap-1">
              {['🎉', '🎊', '⭐', '🎊', '🎉'].map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: -8, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5, repeat: Infinity, repeatType: 'mirror' }}
                  className="text-2xl"
                >
                  {c}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Cmd/Ctrl+K palette — jump around, toggle theme, open GitHub/LinkedIn.
function CommandPalette({
  open,
  setOpen,
  onUsed,
  onToggleTheme,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  onUsed: () => void;
  onToggleTheme: () => void;
}) {
  const go = (hash: string) => {
    onUsed();
    setOpen(false);
    setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const openExternal = (url: string) => {
    onUsed();
    setOpen(false);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-hidden p-0">
        <DialogTitle className="sr-only">Command palette</DialogTitle>
        <Command className="[&_[cmdk-input-wrapper]]:border-b [&_[cmdk-input-wrapper]]:border-border">
          <CommandInput placeholder="Jump to a section, toggle theme, open link…" />
          <CommandList>
            <CommandEmpty>No matches.</CommandEmpty>
            <CommandGroup heading="Navigate">
              <CommandItem onSelect={() => go('#top')}>
                <Home className="mr-2 h-4 w-4" /> Top
              </CommandItem>
              <CommandItem onSelect={() => go('#about')}>
                <User className="mr-2 h-4 w-4" /> About
              </CommandItem>
              <CommandItem onSelect={() => go('#skills')}>
                <Wrench className="mr-2 h-4 w-4" /> Skills
              </CommandItem>
              <CommandItem onSelect={() => go('#projects')}>
                <Rocket className="mr-2 h-4 w-4" /> Projects
              </CommandItem>
              <CommandItem onSelect={() => go('#contact')}>
                <Mail className="mr-2 h-4 w-4" /> Contact
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Actions">
              <CommandItem
                onSelect={() => {
                  onToggleTheme();
                  setOpen(false);
                }}
              >
                <Sun className="mr-2 h-4 w-4 dark:hidden" />
                <Moon className="mr-2 hidden h-4 w-4 dark:inline" />
                Toggle theme
              </CommandItem>
              <CommandItem onSelect={() => openExternal('https://github.com/MarthaTaylor')}>
                <Github className="mr-2 h-4 w-4" /> Open GitHub
              </CommandItem>
              <CommandItem onSelect={() => openExternal('https://www.linkedin.com/in/martha-taylor')}>
                <Linkedin className="mr-2 h-4 w-4" /> Open LinkedIn
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Secret">
              <CommandItem disabled className="opacity-70">
                <Sparkles className="mr-2 h-4 w-4" /> Try the Konami code: ▲ ▲ ▼ ▼ ◀ ▶ ◀ ▶ B A
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
