'use client';

// A stylised flow diagram evocative of the Genkit content-scraping + LLM
// pipeline. Rendered entirely in JSX + Tailwind + framer-motion — no image
// assets. Respects prefers-reduced-motion through the top-level MotionConfig.

import * as React from 'react';
import { motion } from 'framer-motion';
import { Globe, ScanLine, Sparkles, Braces } from 'lucide-react';

const nodes = [
  { icon: Globe,     label: 'URL',    hint: 'seed input' },
  { icon: ScanLine,  label: 'Scrape', hint: 'normalise' },
  { icon: Sparkles,  label: 'LLM',    hint: 'genkit flow' },
  { icon: Braces,    label: 'JSON',   hint: 'typed output' },
];

export function GenkitVisual() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 overflow-hidden p-5">
      {/* Ambient wash */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--chart-4)/0.20),transparent_55%),radial-gradient(circle_at_85%_75%,hsl(var(--chart-2)/0.18),transparent_55%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.35)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.35)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />

      {/* Nodes + connectors */}
      <div className="relative flex items-center gap-1 sm:gap-2">
        {nodes.map((n, i) => (
          <React.Fragment key={n.label}>
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl border border-border/70 bg-card/95 shadow-[0_10px_30px_-14px_rgba(0,0,0,0.35)] backdrop-blur sm:h-20 sm:w-20"
            >
              <n.icon className="h-4 w-4 text-foreground/85 sm:h-5 sm:w-5" />
              <span className="mt-1 text-[9px] font-semibold tracking-wide text-foreground/90 sm:text-[10px]">{n.label}</span>
              <span className="text-[8px] uppercase tracking-widest text-muted-foreground">{n.hint}</span>
              {n.label === 'LLM' && (
                <motion.div
                  className="absolute inset-0 rounded-2xl ring-2 ring-fuchsia-500/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.7, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: 0.4, ease: 'easeInOut' }}
                />
              )}
            </motion.div>

            {i < nodes.length - 1 && (
              <div className="relative h-px w-6 sm:w-9">
                <div className="absolute inset-0 bg-gradient-to-r from-border via-border/40 to-border" />
                <motion.span
                  className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-gradient-to-r from-amber-400 to-fuchsia-500 shadow-[0_0_10px_2px_rgba(217,70,239,0.5)]"
                  initial={{ left: '-10%' }}
                  animate={{ left: ['-10%', '110%'] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Terminal-ish output card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.55, duration: 0.5 }}
        className="w-full max-w-[280px] overflow-hidden rounded-xl border border-slate-800 bg-slate-950 text-slate-200 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.5)]"
      >
        <div className="flex items-center gap-1.5 border-b border-slate-800 px-3 py-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
          <span className="ml-2 text-[9px] uppercase tracking-widest text-slate-500">structured output</span>
        </div>
        <pre className="px-3 py-2 text-[10px] leading-relaxed font-mono text-slate-300">
<span className="text-slate-500">{'{'}</span>
{`
  "title":     `}<span className="text-emerald-300">&quot;TC-42 launch memo&quot;</span>{`,
  "topics":    [`}<span className="text-fuchsia-300">&quot;AI&quot;</span>{`, `}<span className="text-fuchsia-300">&quot;tools&quot;</span>{`],
  "confidence":`}<span className="text-amber-300"> 0.94</span>{`,
  "summary":   `}<span className="text-emerald-300">&quot;…&quot;</span>
<span className="text-slate-500">{'\n}'}</span>
        </pre>
      </motion.div>
    </div>
  );
}
