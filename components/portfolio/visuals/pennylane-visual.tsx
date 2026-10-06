'use client';

// A stylised, animated mini-UI evocative of a transactions table —
// filters bar, header, rows and a soft shimmer on the active row.
import * as React from 'react';
import { motion } from 'framer-motion';

const rows = [
  { d: '12 Jun', c: 'Stripe Inc.', amt: '+£4,120.00', tone: 'pos' },
  { d: '11 Jun', c: 'AWS', amt: '−£382.47', tone: 'neg' },
  { d: '10 Jun', c: 'Figma', amt: '−£45.00', tone: 'neg' },
  { d: '09 Jun', c: 'Client A — invoice #221', amt: '+£1,800.00', tone: 'pos' },
  { d: '08 Jun', c: 'Vercel', amt: '−£20.00', tone: 'neg' },
];

export function PennylaneVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/70 via-background to-sky-50/40 dark:from-emerald-950/20 dark:via-background dark:to-sky-950/10" />
      <div className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] [background-size:18px_18px] dark:[background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)]" />

      <div className="relative flex h-full w-full items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[460px] rounded-xl border border-border/70 bg-background/90 shadow-sm backdrop-blur"
        >
          {/* Window chrome */}
          <div className="flex items-center gap-1.5 border-b border-border/60 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-3 text-[10px] uppercase tracking-widest text-muted-foreground">
              Transactions
            </span>
          </div>

          {/* Filter bar */}
          <div className="flex items-center gap-2 border-b border-border/60 px-3 py-2 text-[11px]">
            <div className="rounded-md border border-border/70 bg-muted/40 px-2 py-1 text-muted-foreground">
              Search…
            </div>
            <div className="rounded-md border border-border/70 bg-muted/40 px-2 py-1 text-muted-foreground">
              Type: all
            </div>
            <div className="rounded-md border border-border/70 bg-muted/40 px-2 py-1 text-muted-foreground">
              Last 30d
            </div>
            <div className="ml-auto rounded-md bg-foreground px-2 py-1 text-[10px] font-medium text-background">
              Export
            </div>
          </div>

          {/* Table header */}
          <div className="grid grid-cols-[72px_1fr_96px] gap-2 border-b border-border/60 px-3 py-1.5 text-[10px] uppercase tracking-wider text-muted-foreground">
            <div>Date</div>
            <div>Counterparty</div>
            <div className="text-right">Amount</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-border/50">
            {rows.map((r, i) => (
              <motion.div
                key={r.c}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.35 }}
                className={`grid grid-cols-[72px_1fr_96px] items-center gap-2 px-3 py-2 text-[12px] ${
                  i === 0 ? 'bg-emerald-500/5' : ''
                }`}
              >
                <div className="text-muted-foreground">{r.d}</div>
                <div className="truncate">{r.c}</div>
                <div
                  className={`text-right font-medium ${
                    r.tone === 'pos'
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-foreground/80'
                  }`}
                >
                  {r.amt}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination footer */}
          <div className="flex items-center justify-between border-t border-border/60 px-3 py-2 text-[10px] text-muted-foreground">
            <span>1–5 of 1,284</span>
            <div className="flex items-center gap-1">
              <span className="rounded border border-border/70 px-1.5 py-0.5">‹</span>
              <span className="rounded border border-border/70 px-1.5 py-0.5">›</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
