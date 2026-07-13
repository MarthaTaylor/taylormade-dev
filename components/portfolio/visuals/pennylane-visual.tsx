'use client';

// A stylised, animated mini-UI evocative of the Pennylane-style transactions
// interface. Rendered entirely in JSX + Tailwind + framer-motion — no image
// assets. Respects prefers-reduced-motion through the top-level MotionConfig.

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownLeft, Search, SlidersHorizontal } from 'lucide-react';

const rows = [
  { icon: '■', name: 'Stripe',      category: 'Payments', date: 'Jan 12', amount: '−£2,140.00', dir: 'out' as const, tint: 'from-indigo-500/25 to-indigo-500/0' },
  { icon: '●', name: 'Blue Bottle', category: 'Meals',    date: 'Jan 11', amount: '−£4.80',     dir: 'out' as const, tint: 'from-amber-500/25 to-amber-500/0' },
  { icon: '▲', name: 'Client — Acme', category: 'Revenue',  date: 'Jan 10', amount: '+£9,600.00', dir: 'in'  as const, tint: 'from-emerald-500/30 to-emerald-500/0' },
  { icon: '◆', name: 'Vercel',      category: 'Hosting',  date: 'Jan 09', amount: '−£40.00',    dir: 'out' as const, tint: 'from-fuchsia-500/25 to-fuchsia-500/0' },
  { icon: '●', name: 'O’Reilly',    category: 'Learning', date: 'Jan 08', amount: '−£29.00',    dir: 'out' as const, tint: 'from-sky-500/25 to-sky-500/0' },
];

export function PennylaneVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden p-5">
      {/* Soft radial background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(var(--chart-2)/0.15),transparent_55%),radial-gradient(circle_at_80%_80%,hsl(var(--chart-4)/0.18),transparent_55%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.35)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.35)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-sm rounded-xl border border-border/70 bg-card/95 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.35)] backdrop-blur"
      >
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 border-b border-border/60 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <div className="ml-3 flex-1 truncate rounded-full bg-muted/60 px-2 py-0.5 text-[10px] text-muted-foreground">
            /transactions?status=all&q=&hellip;
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-1.5 border-b border-border/60 px-3 py-2 text-[10px]">
          <div className="flex items-center gap-1 rounded-md border border-border/60 bg-muted/40 px-1.5 py-0.5">
            <Search className="h-3 w-3 text-muted-foreground" /> <span className="text-muted-foreground">Search</span>
          </div>
          <div className="flex items-center gap-1 rounded-md border border-border/60 px-1.5 py-0.5">
            <SlidersHorizontal className="h-3 w-3" /> Filters
          </div>
          <div className="rounded-md border border-transparent bg-primary/10 px-1.5 py-0.5 font-medium text-primary">All</div>
          <div className="rounded-md border border-border/60 px-1.5 py-0.5 text-muted-foreground">Revenue</div>
          <div className="ml-auto text-[9px] text-muted-foreground">
            <span className="tabular-nums font-medium text-foreground">5</span> of
            <span className="tabular-nums text-foreground"> 214</span>
          </div>
        </div>

        {/* Rows */}
        <div>
          {rows.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex items-center gap-2 border-b border-border/40 px-3 py-2 text-[11px] ${i % 2 === 0 ? '' : 'bg-muted/30'}`}
            >
              <span className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b opacity-70" />
              <span className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-br ${r.tint} text-[10px] text-foreground/80`}>
                {r.icon}
              </span>
              <div className="min-w-0 flex-1">
                <div className="truncate font-medium">{r.name}</div>
                <div className="text-[9px] text-muted-foreground">{r.date}</div>
              </div>
              <span className="rounded-full bg-muted px-1.5 py-0.5 text-[9px] text-muted-foreground">{r.category}</span>
              <span className={`inline-flex items-center gap-0.5 tabular-nums font-semibold ${r.dir === 'in' ? 'text-emerald-600 dark:text-emerald-400' : 'text-foreground/90'}`}>
                {r.dir === 'in' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownLeft className="h-3 w-3 text-muted-foreground" />}
                {r.amount}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-2 px-3 py-2 text-[10px]">
          <span className="text-muted-foreground">
            Balance <span className="tabular-nums font-semibold text-foreground">£12,436.80</span>
          </span>
          <div className="flex items-center gap-1">
            <div className="rounded-md border border-border/60 px-1.5 py-0.5 text-muted-foreground">←</div>
            <div className="rounded-md bg-primary px-1.5 py-0.5 text-primary-foreground">1</div>
            <div className="rounded-md border border-border/60 px-1.5 py-0.5 text-muted-foreground">2</div>
            <div className="rounded-md border border-border/60 px-1.5 py-0.5 text-muted-foreground">3</div>
            <div className="rounded-md border border-border/60 px-1.5 py-0.5 text-muted-foreground">→</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
