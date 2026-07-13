'use client';

// One-per-repo stylised visuals in the same aesthetic as the two hero visuals.
// Everything is pure JSX + Tailwind + framer-motion (no image assets).
// Each visual lives inside a 16:9-ish frame at the top of its repo card.

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Droplets, ClipboardList, HelpCircle, Sparkles, Gamepad2, ListChecks,
  BookOpen, Wifi, WifiOff, CheckCircle2, Utensils,
} from 'lucide-react';

const gridBg = 'bg-[linear-gradient(to_right,hsl(var(--border)/0.35)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.35)_1px,transparent_1px)] bg-[size:18px_18px] opacity-40';

function Frame({
  children,
  gradient,
  label,
  labelClass,
}: {
  children: React.ReactNode;
  gradient: string;
  label?: string;
  labelClass?: string;
}) {
  return (
    <div className={`relative h-full w-full overflow-hidden ${gradient}`}>
      <div aria-hidden className={`absolute inset-0 ${gridBg}`} />
      {label && (
        <span
          className={`absolute left-3 top-2.5 z-10 text-[9px] font-semibold uppercase tracking-[0.18em] ${
            labelClass || 'text-foreground/60'
          }`}
        >
          {label}
        </span>
      )}
      <div className="relative flex h-full w-full items-center justify-center p-4">{children}</div>
    </div>
  );
}

/* ---------------------------------- FLOODSAVE ---------------------------------- */
export function FloodsaveVisual() {
  return (
    <Frame
      gradient="bg-gradient-to-br from-sky-100 via-cyan-50 to-emerald-50 dark:from-sky-950/45 dark:via-cyan-950/30 dark:to-emerald-950/40"
      label="Evacuation route"
      labelClass="text-sky-800 dark:text-sky-300"
    >
      <svg viewBox="0 0 320 180" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
        <defs>
          <linearGradient id="fs-water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(200 90% 55%)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="hsl(210 90% 40%)" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="fs-ground" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(140 40% 62%)" />
            <stop offset="100%" stopColor="hsl(140 30% 42%)" />
          </linearGradient>
          <linearGradient id="fs-hill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(150 45% 55%)" />
            <stop offset="100%" stopColor="hsl(150 40% 32%)" />
          </linearGradient>
          <linearGradient id="fs-path" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(45 100% 60%)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(30 95% 55%)" stopOpacity="0.9" />
          </linearGradient>
          <filter id="fs-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Sky wash */}
        <rect x="0" y="0" width="320" height="180" fill="transparent" />

        {/* Ground (rising from left, higher on right = safe terrain hill) */}
        <path
          d="M0,150 L110,145 L180,132 L245,110 L295,86 L320,78 L320,180 L0,180 Z"
          fill="url(#fs-ground)"
        />
        {/* Hill (safe terrain) */}
        <path
          d="M210,180 L245,110 L280,80 L320,78 L320,180 Z"
          fill="url(#fs-hill)"
        />
        {/* Small trees on hill */}
        <g opacity="0.9">
          <circle cx="262" cy="82" r="6" fill="hsl(140 45% 32%)" />
          <rect x="260.5" y="86" width="3" height="6" fill="hsl(30 40% 30%)" />
          <circle cx="290" cy="76" r="5" fill="hsl(140 45% 30%)" />
          <rect x="288.5" y="80" width="3" height="5" fill="hsl(30 40% 30%)" />
        </g>

        {/* Safe destination flag on the hill */}
        <g>
          <line x1="300" y1="72" x2="300" y2="58" stroke="hsl(30 40% 20%)" strokeWidth="1.5" />
          <motion.path
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            d="M300,58 L316,62 L300,66 Z"
            fill="hsl(0 80% 55%)"
          />
        </g>

        {/* Highlighted evacuation path (dashed, animated) */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.2 }}
          d="M40,148 C90,146 130,140 170,128 C205,118 240,102 285,80"
          fill="none"
          stroke="url(#fs-path)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="6 5"
          filter="url(#fs-glow)"
        />

        {/* Flood water sweeping in from the left (rises + moves right) */}
        <motion.g
          initial={{ x: -80, opacity: 0.6 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <path
            d="M-20,180 L-20,150 C10,142 40,155 80,148 C110,142 130,155 160,150 L160,180 Z"
            fill="url(#fs-water)"
            opacity="0.85"
          />
          {/* Wave crest */}
          <motion.path
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            d="M-10,150 C20,142 45,158 80,150 C110,143 130,157 158,152"
            fill="none"
            stroke="white"
            strokeOpacity="0.7"
            strokeWidth="1.4"
          />
          {/* Splash droplets */}
          {[
            { cx: 60, cy: 138 },
            { cx: 95, cy: 132 },
            { cx: 130, cy: 138 },
          ].map((d, i) => (
            <motion.circle
              key={i}
              cx={d.cx}
              cy={d.cy}
              r="1.6"
              fill="hsl(200 90% 80%)"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: [0, 1, 0], y: [6, -4, 6] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 + i * 0.25, ease: 'easeInOut' }}
            />
          ))}
        </motion.g>

        {/* Pedestrian icon (person walking) moving up the path on foot */}
        <motion.g
          initial={{ offsetDistance: '10%', opacity: 0 }}
          whileInView={{ offsetDistance: '85%', opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3.4, ease: 'easeInOut', delay: 0.5 }}
          style={{
            offsetPath: 'path("M40,148 C90,146 130,140 170,128 C205,118 240,102 285,80")',
            offsetRotate: '0deg',
          } as React.CSSProperties}
        >
          {/* Head */}
          <circle cx="0" cy="-11" r="3" fill="hsl(30 55% 45%)" />
          {/* Body */}
          <rect x="-2" y="-8" width="4" height="7" rx="1.2" fill="hsl(210 65% 45%)" />
          {/* Legs */}
          <motion.line
            x1="0" y1="-1" x2="-2" y2="4"
            stroke="hsl(210 65% 30%)" strokeWidth="1.4" strokeLinecap="round"
            animate={{ rotate: [15, -15, 15] }}
            style={{ originX: '0px', originY: '-1px' }}
            transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.line
            x1="0" y1="-1" x2="2" y2="4"
            stroke="hsl(210 65% 30%)" strokeWidth="1.4" strokeLinecap="round"
            animate={{ rotate: [-15, 15, -15] }}
            style={{ originX: '0px', originY: '-1px' }}
            transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.g>

        {/* Car moving up the path (a bit ahead of the pedestrian) */}
        <motion.g
          initial={{ offsetDistance: '35%', opacity: 0 }}
          whileInView={{ offsetDistance: '95%', opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3.0, ease: 'easeInOut', delay: 0.4 }}
          style={{
            offsetPath: 'path("M40,148 C90,146 130,140 170,128 C205,118 240,102 285,80")',
            offsetRotate: '0deg',
          } as React.CSSProperties}
        >
          {/* Car body */}
          <rect x="-8" y="-6" width="16" height="6" rx="1.5" fill="hsl(0 75% 55%)" />
          {/* Car roof */}
          <rect x="-5" y="-9" width="9" height="3.5" rx="1" fill="hsl(0 75% 45%)" />
          {/* Windows */}
          <rect x="-4" y="-8.5" width="3.5" height="2.5" rx="0.4" fill="hsl(200 80% 85%)" opacity="0.9" />
          <rect x="0.2" y="-8.5" width="3.5" height="2.5" rx="0.4" fill="hsl(200 80% 85%)" opacity="0.9" />
          {/* Wheels */}
          <circle cx="-5" cy="0.5" r="1.8" fill="#111" />
          <circle cx="5" cy="0.5" r="1.8" fill="#111" />
          {/* Headlight glow (forward) */}
          <circle cx="8" cy="-3" r="1.2" fill="hsl(50 100% 75%)" opacity="0.9" />
        </motion.g>

        {/* Legend chips */}
        <g fontFamily="ui-sans-serif, system-ui" fontSize="7" fill="currentColor">
          <g transform="translate(8,10)">
            <rect x="0" y="0" width="76" height="12" rx="6" fill="hsl(0 0% 100% / 0.85)" stroke="hsl(0 0% 0% / 0.06)" />
            <circle cx="6" cy="6" r="2.4" fill="hsl(210 65% 45%)" />
            <text x="12" y="8.5" fill="hsl(220 25% 20%)">On foot</text>
            <circle cx="42" cy="6" r="2.4" fill="hsl(0 75% 55%)" />
            <text x="48" y="8.5" fill="hsl(220 25% 20%)">By car</text>
          </g>
        </g>
      </svg>
    </Frame>
  );
}

/* -------------------------------- STANDUP UPDATES ------------------------------- */
export function StandupVisual() {
  const notes = [
    { key: 'Y', label: 'Yesterday', tint: 'bg-amber-100 dark:bg-amber-500/15 text-amber-900 dark:text-amber-200' },
    { key: 'T', label: 'Today',     tint: 'bg-sky-100 dark:bg-sky-500/15 text-sky-900 dark:text-sky-200' },
    { key: 'B', label: 'Blockers',  tint: 'bg-rose-100 dark:bg-rose-500/15 text-rose-900 dark:text-rose-200' },
  ];
  return (
    <Frame
      gradient="bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-amber-950/25 dark:via-orange-950/20 dark:to-rose-950/25"
      label="Daily standup"
      labelClass="text-amber-800 dark:text-amber-300"
    >
      <div className="flex w-full items-stretch justify-center gap-2">
        {notes.map((n, i) => (
          <motion.div
            key={n.key}
            initial={{ opacity: 0, y: 8, rotate: -2 + i * 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 + i * 2 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className={`flex-1 rounded-md border border-border/60 p-2 shadow-sm ${n.tint}`}
          >
            <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest">
              <ClipboardList className="h-2.5 w-2.5" /> {n.key}
            </div>
            <div className="mt-1 space-y-1">
              <div className="h-1 rounded-full bg-current/40" style={{ width: '86%' }} />
              <div className="h-1 rounded-full bg-current/30" style={{ width: '64%' }} />
              <div className="h-1 rounded-full bg-current/30" style={{ width: '78%' }} />
            </div>
            <div className="mt-1.5 text-[8px] uppercase tracking-widest opacity-70">{n.label}</div>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

/* ----------------------------------- QUIZVERSE ---------------------------------- */
export function QuizverseVisual() {
  const answers = [
    { text: 'ES6 modules', correct: false },
    { text: 'React hooks', correct: true },
    { text: 'JSX only',    correct: false },
    { text: 'CSS-in-JS',   correct: false },
  ];
  return (
    <Frame
      gradient="bg-gradient-to-br from-fuchsia-50 via-purple-50 to-indigo-50 dark:from-fuchsia-950/25 dark:via-purple-950/20 dark:to-indigo-950/25"
      label="Quiz"
      labelClass="text-fuchsia-800 dark:text-fuchsia-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-[260px] rounded-lg border border-border/70 bg-card/95 p-2.5 shadow-md"
      >
        <div className="flex items-center gap-1 text-[9px] uppercase tracking-widest text-muted-foreground">
          <HelpCircle className="h-3 w-3" /> Question 03 / 10
        </div>
        <div className="mt-1 text-[11px] font-medium leading-tight">What powers stateful function components?</div>
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          {answers.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.07 }}
              className={`flex items-center justify-between rounded-md border px-2 py-1 text-[10px] ${
                a.correct
                  ? 'border-emerald-500/60 bg-emerald-500/10 text-emerald-900 dark:text-emerald-300'
                  : 'border-border/60 bg-muted/40 text-foreground/70'
              }`}
            >
              <span>{a.text}</span>
              {a.correct && <CheckCircle2 className="h-3 w-3" />}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Frame>
  );
}

/* --------------------------------- MEMORY GAME --------------------------------- */
export function MemoryGameVisual() {
  // 4x4 grid of card tiles, two flipped to matched pair
  const flipped = new Set([2, 9]);
  return (
    <Frame
      gradient="bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 dark:from-rose-950/25 dark:via-pink-950/20 dark:to-fuchsia-950/25"
      label="Memory game"
      labelClass="text-rose-800 dark:text-rose-300"
    >
      <div className="grid grid-cols-4 gap-1.5">
        {Array.from({ length: 16 }).map((_, i) => {
          const isFlipped = flipped.has(i);
          return (
            <motion.div
              key={i}
              initial={{ rotateY: 0 }}
              whileInView={isFlipped ? { rotateY: 180 } : {}}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + (isFlipped ? 0.3 : 0), duration: 0.4 }}
              className={`flex h-6 w-6 items-center justify-center rounded-md text-[10px] shadow-sm ${
                isFlipped
                  ? 'bg-gradient-to-br from-amber-300 to-rose-400 text-white'
                  : 'bg-rose-200/70 dark:bg-rose-900/40'
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {isFlipped && <span style={{ transform: 'rotateY(180deg)' }}>★</span>}
            </motion.div>
          );
        })}
      </div>
    </Frame>
  );
}

/* ---------------------------------- ARCADE GAME --------------------------------- */
export function ArcadeGameVisual() {
  // Frogger: 4 rows of tiles, frog at bottom, an enemy moving on middle road row
  const rows = [
    { color: 'from-sky-300 to-sky-200 dark:from-sky-800 dark:to-sky-900', kind: 'water' },
    { color: 'from-stone-300 to-stone-200 dark:from-stone-700 dark:to-stone-800', kind: 'road' },
    { color: 'from-stone-300 to-stone-200 dark:from-stone-700 dark:to-stone-800', kind: 'road' },
    { color: 'from-emerald-300 to-emerald-200 dark:from-emerald-800 dark:to-emerald-900', kind: 'grass' },
  ];
  return (
    <Frame
      gradient="bg-gradient-to-br from-emerald-50 via-lime-50 to-sky-50 dark:from-emerald-950/25 dark:via-lime-950/20 dark:to-sky-950/25"
      label="Arcade"
      labelClass="text-emerald-800 dark:text-emerald-300"
    >
      <div className="relative flex h-full w-full max-w-[220px] flex-col overflow-hidden rounded-md border border-border/60 shadow-md">
        {rows.map((r, i) => (
          <div key={i} className={`relative h-1/4 bg-gradient-to-b ${r.color}`}>
            {r.kind === 'road' && (
              <motion.div
                className="absolute top-1/2 h-3 w-6 -translate-y-1/2 rounded-sm bg-red-500 shadow"
                initial={{ left: '-25%' }}
                animate={{ left: ['-25%', '110%'] }}
                transition={{ duration: 2.8 + i * 0.6, repeat: Infinity, ease: 'linear', delay: i * 0.3 }}
              />
            )}
            {r.kind === 'water' && (
              <div className="absolute inset-0 opacity-40 [background:repeating-linear-gradient(90deg,hsl(200_90%_60%/.4)_0_4px,transparent_4px_8px)]" />
            )}
          </div>
        ))}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-8, 0, -8] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1 left-1/2 -translate-x-1/2 text-lg"
        >
          🐸
        </motion.div>
      </div>
    </Frame>
  );
}

/* --------------------------------- FEED READER ---------------------------------- */
export function FeedReaderVisual() {
  const specs = [
    'RSS feed URLs are defined',
    'Feed names are defined',
    'Menu is hidden by default',
    'Feed loads &amp; populates DOM',
  ];
  return (
    <Frame
      gradient="bg-gradient-to-br from-slate-100 via-slate-50 to-emerald-50 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950/30"
      label="Test suite"
      labelClass="text-emerald-800 dark:text-emerald-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-[260px] overflow-hidden rounded-md border border-slate-800 bg-slate-950 text-slate-200 shadow-md"
      >
        <div className="flex items-center gap-1 border-b border-slate-800 px-2 py-1 text-[9px] text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
          <span className="ml-1.5">jasmine — 4 passing</span>
        </div>
        <div className="space-y-1 px-2 py-2 font-mono text-[10px]">
          {specs.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="flex items-start gap-1.5"
            >
              <CheckCircle2 className="mt-[1px] h-3 w-3 shrink-0 text-emerald-400" />
              <span className="text-slate-300" dangerouslySetInnerHTML={{ __html: s }} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Frame>
  );
}

/* ----------------------------------- MYREADS ------------------------------------ */
export function MyReadsVisual() {
  const shelves = [
    { label: 'Reading', color: 'from-amber-400 to-amber-500', book: '📖' },
    { label: 'Want',    color: 'from-rose-400 to-rose-500',   book: '⭐' },
    { label: 'Read',    color: 'from-emerald-400 to-emerald-500', book: '✓' },
  ];
  return (
    <Frame
      gradient="bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-amber-950/25 dark:via-orange-950/20 dark:to-rose-950/25"
      label="MyReads"
      labelClass="text-amber-800 dark:text-amber-300"
    >
      <div className="flex w-full max-w-[260px] items-end justify-center gap-3">
        {shelves.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className={`flex h-16 w-10 flex-col items-center justify-between rounded-t-md bg-gradient-to-b ${s.color} p-1.5 text-white shadow-md`}
          >
            <span className="text-sm">{s.book}</span>
            <BookOpen className="h-3 w-3 opacity-80" />
            <span className="text-[8px] font-semibold uppercase tracking-widest">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

/* --------------------------------- MWS RESTAURANT -------------------------------- */
export function MwsRestaurantVisual() {
  return (
    <Frame
      gradient="bg-gradient-to-br from-slate-50 via-slate-100 to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/30"
      label="Offline-first PWA"
      labelClass="text-slate-800 dark:text-slate-200"
    >
      <div className="relative flex h-full items-center gap-3">
        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative flex h-[110px] w-[64px] flex-col rounded-lg border border-slate-800 bg-slate-950 p-1.5 shadow-md"
        >
          <div className="mx-auto h-1 w-6 rounded-full bg-slate-700" />
          <div className="mt-1.5 flex items-center justify-between text-[7px] font-mono text-slate-400">
            <Utensils className="h-2 w-2" /> <span>3</span>
          </div>
          <div className="mt-1 space-y-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded bg-slate-800 p-1">
                <div className="h-1 w-3/4 rounded-full bg-slate-600" />
                <div className="mt-1 h-1 w-1/2 rounded-full bg-slate-700" />
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="inline-flex items-center gap-1 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-widest text-emerald-800 dark:text-emerald-300"
        >
          <WifiOff className="h-3 w-3" /> Offline
        </motion.div>
      </div>
    </Frame>
  );
}

/* ------------------------------ Lookup / router ------------------------------ */
const byName: Record<string, React.ComponentType> = {
  floodsave: FloodsaveVisual,
  'standup-updates-app': StandupVisual,
  quizverse: QuizverseVisual,
  'fend-project-memory-game': MemoryGameVisual,
  'frontend-nanodegree-arcade-game': ArcadeGameVisual,
  'frontend-nanodegree-feedreader': FeedReaderVisual,
  'reactnd-project-myreads-starter': MyReadsVisual,
  'mws-restaurant-stage-1': MwsRestaurantVisual,
};

export function RepoVisual({ name }: { name: string }) {
  const Cmp = byName[name];
  if (!Cmp) {
    // Generic fallback — subtle gradient with a sparkle so nothing looks broken
    return (
      <Frame gradient="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
        <Sparkles className="h-6 w-6 text-muted-foreground" />
      </Frame>
    );
  }
  return <Cmp />;
}
