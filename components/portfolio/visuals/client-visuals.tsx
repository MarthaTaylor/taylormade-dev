'use client';

// Custom animated visuals for the Client & product work cards.
// Pure JSX + Tailwind + framer-motion — no image assets.
// Same aesthetic as /visuals/repo-visuals.tsx (Frame + gridBg pattern).

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Car, Pause, Play, KeyRound, Waves, Sparkles, Braces, FileText,
  Pill, Zap, Boxes, Rocket, Shield, ShieldCheck, CheckCircle2, XCircle,
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

/* -------------------------------------- PIVOTAL -------------------------------------- */
export function PivotalVisual() {
  return (
    <Frame
      gradient="bg-gradient-to-br from-neutral-100 via-stone-50 to-emerald-50 dark:from-neutral-900 dark:via-stone-950 dark:to-emerald-950/30"
      label="Car subscription"
      labelClass="text-neutral-800 dark:text-neutral-200"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-[300px] overflow-hidden rounded-xl border border-border/70 bg-card shadow-[0_18px_50px_-24px_rgba(0,0,0,0.35)]"
      >
        {/* SUV silhouette */}
        <div className="relative h-16 bg-gradient-to-br from-emerald-100 to-stone-100 dark:from-emerald-950/40 dark:to-stone-900">
          {/* road */}
          <div className="absolute inset-x-0 bottom-0 h-6 bg-neutral-800 dark:bg-neutral-950">
            <motion.div
              className="absolute top-1/2 h-0.5 w-full -translate-y-1/2 [background:repeating-linear-gradient(90deg,white_0_10px,transparent_10px_22px)]"
              animate={{ backgroundPositionX: ['0px', '-32px'] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
            />
          </div>
          {/* SUV */}
          <motion.svg
            viewBox="0 0 120 40"
            className="absolute bottom-3 left-1/2 h-10 -translate-x-1/2"
            initial={{ y: -2 }}
            animate={{ y: [-2, 0, -2] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden
          >
            <path
              d="M8,28 L18,14 L58,10 L80,14 L106,18 L112,22 L112,28 Z"
              fill="hsl(0 0% 15%)"
            />
            <rect x="22" y="14" width="22" height="10" rx="1" fill="hsl(200 70% 80%)" opacity="0.85" />
            <rect x="48" y="14" width="26" height="10" rx="1" fill="hsl(200 70% 80%)" opacity="0.85" />
            <circle cx="30" cy="30" r="4" fill="#111" />
            <circle cx="92" cy="30" r="4" fill="#111" />
            <circle cx="30" cy="30" r="1.5" fill="#666" />
            <circle cx="92" cy="30" r="1.5" fill="#666" />
            <rect x="108" y="20" width="3" height="3" fill="hsl(50 100% 65%)" />
          </motion.svg>
        </div>

        {/* Subscription card body */}
        <div className="space-y-2 p-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Range Rover</div>
              <div className="text-[13px] font-semibold">Monthly subscription</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">/ month</div>
              <div className="tabular-nums text-[13px] font-semibold">£2,400</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 text-[9px]">
            {['Insurance', 'Servicing', 'Road tax', 'Delivery'].map((t) => (
              <span key={t} className="rounded-full bg-muted px-1.5 py-0.5 text-muted-foreground">{t}</span>
            ))}
          </div>
          <div className="flex items-center gap-1.5 pt-1">
            <motion.div
              className="inline-flex items-center gap-1 rounded-md bg-primary px-2 py-1 text-[10px] font-medium text-primary-foreground"
              animate={{ opacity: [1, 0.75, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Play className="h-2.5 w-2.5" /> Active
            </motion.div>
            <div className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-[10px] text-muted-foreground">
              <Pause className="h-2.5 w-2.5" /> Pause &amp; play
            </div>
            <div className="ml-auto inline-flex items-center gap-1 text-[10px] text-muted-foreground">
              <KeyRound className="h-2.5 w-2.5" /> Home delivery
            </div>
          </div>
        </div>
      </motion.div>
    </Frame>
  );
}

/* ------------------------------- CLINICAL CALL SUMMARISER ---------------------------- */
export function ClinicalVisual() {
  return (
    <Frame
      gradient="bg-gradient-to-br from-teal-50 via-emerald-50 to-sky-50 dark:from-teal-950/25 dark:via-emerald-950/25 dark:to-sky-950/25"
      label="Clinical summariser"
      labelClass="text-teal-800 dark:text-teal-300"
    >
      <div className="flex w-full items-center justify-center gap-2">
        {/* Waveform */}
        <motion.div
          initial={{ opacity: 0, x: -6 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex h-14 w-16 items-center gap-0.5 rounded-md border border-border/60 bg-card px-1.5 py-1"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.span
              key={i}
              className="block w-0.5 rounded-full bg-teal-500"
              animate={{ height: ['20%', '90%', '40%', '70%', '25%'] }}
              transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.08, ease: 'easeInOut' }}
              style={{ height: '30%' }}
            />
          ))}
        </motion.div>

        {/* Connector */}
        <div className="relative h-px w-6">
          <div className="absolute inset-0 bg-border" />
          <motion.span
            className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-teal-500 shadow-[0_0_8px_2px_rgba(20,184,166,0.5)]"
            initial={{ left: '-8%' }}
            animate={{ left: ['-8%', '108%'] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* LLM node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative flex h-14 w-14 flex-col items-center justify-center rounded-xl border border-border/70 bg-card shadow-md"
        >
          <Sparkles className="h-4 w-4 text-teal-600 dark:text-teal-400" />
          <span className="mt-1 text-[8px] font-semibold uppercase tracking-widest">LLM</span>
          <motion.span
            className="absolute inset-0 rounded-xl ring-2 ring-teal-500/50"
            animate={{ opacity: [0, 0.7, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Connector */}
        <div className="relative h-px w-6">
          <div className="absolute inset-0 bg-border" />
          <motion.span
            className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-emerald-500 shadow-[0_0_8px_2px_rgba(16,185,129,0.5)]"
            initial={{ left: '-8%' }}
            animate={{ left: ['-8%', '108%'] }}
            transition={{ duration: 1.4, repeat: Infinity, delay: 0.4, ease: 'easeInOut' }}
          />
        </div>

        {/* Structured summary card */}
        <motion.div
          initial={{ opacity: 0, x: 6 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-[110px] rounded-md border border-border/60 bg-card p-2 shadow-md"
        >
          <div className="flex items-center gap-1 text-[8px] font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-300">
            <FileText className="h-2.5 w-2.5" /> Summary
          </div>
          <div className="mt-1.5 space-y-1">
            {[80, 62, 88, 54].map((w, i) => (
              <div key={i} className="flex items-start gap-1">
                <span className="mt-0.5 h-1 w-1 rounded-full bg-emerald-500" />
                <div className="h-1 rounded-full bg-foreground/25" style={{ width: `${w}%` }} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Frame>
  );
}

/* ---------------------------- EVENT-DRIVEN PRESCRIPTIONS ---------------------------- */
export function EventDrivenVisual() {
  const consumers = [
    { label: 'Dispatch',    icon: Zap,       color: 'text-amber-600' },
    { label: 'Notify',      icon: FileText,  color: 'text-sky-600' },
    { label: 'Audit / Log', icon: ShieldCheck, color: 'text-emerald-600' },
  ];
  return (
    <Frame
      gradient="bg-gradient-to-br from-indigo-50 via-violet-50 to-fuchsia-50 dark:from-indigo-950/25 dark:via-violet-950/20 dark:to-fuchsia-950/25"
      label="Event-driven"
      labelClass="text-indigo-800 dark:text-indigo-300"
    >
      <div className="relative flex w-full items-center justify-center gap-2">
        {/* Source: prescription */}
        <motion.div
          initial={{ opacity: 0, x: -6 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex h-14 w-16 flex-col items-center justify-center rounded-lg border border-border/70 bg-card shadow-md"
        >
          <Pill className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
          <span className="mt-1 text-[8px] font-semibold uppercase tracking-widest">Rx</span>
          <span className="text-[7px] text-muted-foreground">aggregate</span>
        </motion.div>

        {/* Bus with events flowing */}
        <div className="relative flex h-16 w-24 items-center justify-center">
          <div className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-indigo-300 via-violet-400 to-fuchsia-400" />
          {[0, 0.35, 0.7].map((delay, i) => (
            <motion.span
              key={i}
              className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-indigo-500 shadow-[0_0_8px_2px_rgba(99,102,241,0.5)]"
              initial={{ left: '-10%' }}
              animate={{ left: ['-10%', '110%'] }}
              transition={{ duration: 1.6, repeat: Infinity, delay, ease: 'easeInOut' }}
            />
          ))}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-sm bg-background/80 px-1 text-[8px] uppercase tracking-widest text-muted-foreground">
            Domain events
          </div>
        </div>

        {/* Consumers */}
        <div className="flex flex-col gap-1.5">
          {consumers.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, x: 6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-1.5 rounded-md border border-border/60 bg-card px-2 py-1 shadow-sm"
            >
              <c.icon className={`h-3 w-3 ${c.color}`} />
              <span className="text-[10px] font-medium">{c.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* ------------------------------- GOLDEN-PATH TEMPLATES ------------------------------- */
export function GoldenPathVisual() {
  const templates = [
    { label: 'React',   tint: 'from-sky-400 to-cyan-500' },
    { label: 'Node.js', tint: 'from-emerald-500 to-green-600' },
    { label: 'Python',  tint: 'from-yellow-400 to-amber-500' },
    { label: 'Go',      tint: 'from-cyan-500 to-sky-600' },
    { label: 'GKE',     tint: 'from-blue-500 to-indigo-600' },
    { label: 'Pub/Sub', tint: 'from-fuchsia-500 to-pink-500' },
  ];
  return (
    <Frame
      gradient="bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-amber-950/20 dark:via-orange-950/20 dark:to-rose-950/25"
      label="Golden-path templates"
      labelClass="text-amber-800 dark:text-amber-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-[300px] rounded-lg border border-border/60 bg-card p-2.5 shadow-md"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[9px] font-semibold uppercase tracking-widest text-muted-foreground">
            <Boxes className="h-3 w-3" /> Backstage — create service
          </div>
          <div className="inline-flex items-center gap-1 rounded-md bg-primary px-1.5 py-0.5 text-[9px] text-primary-foreground">
            <Rocket className="h-2.5 w-2.5" /> Ship
          </div>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          {templates.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.06 }}
              className={`flex h-10 flex-col items-center justify-center rounded-md bg-gradient-to-br ${t.tint} px-1 text-white shadow-sm`}
            >
              <span className="text-[10px] font-semibold">{t.label}</span>
              <span className="text-[7px] uppercase tracking-widest opacity-90">template</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between text-[9px] text-muted-foreground">
          <span>25+ ready patterns</span>
          <span className="tabular-nums">IAM · CI/CD · O11y baked in</span>
        </div>
      </motion.div>
    </Frame>
  );
}

/* --------------------------------- DEVSECOPS CI/CD --------------------------------- */
export function DevSecOpsVisual() {
  const stages = [
    { label: 'Lint',      pass: true,  icon: CheckCircle2 },
    { label: 'SAST',      pass: true,  icon: ShieldCheck },
    { label: 'Deps',      pass: false, icon: XCircle },
    { label: 'Container', pass: true,  icon: CheckCircle2 },
    { label: 'Deploy',    pass: true,  icon: Rocket },
  ];
  return (
    <Frame
      gradient="bg-gradient-to-br from-slate-100 via-slate-50 to-emerald-50 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950/25"
      label="DevSecOps pipeline"
      labelClass="text-slate-800 dark:text-slate-200"
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-[300px] overflow-hidden rounded-lg border border-slate-800 bg-slate-950 shadow-md"
      >
        <div className="flex items-center gap-1 border-b border-slate-800 px-2 py-1 text-[9px] text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
          <span className="ml-1.5 font-mono">ci run — 4 stages passing, 1 blocked</span>
        </div>
        <div className="flex items-stretch gap-1 px-2 py-2">
          {stages.map((s, i) => (
            <React.Fragment key={s.label}>
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className={`flex flex-1 flex-col items-center justify-center gap-1 rounded-md border px-1 py-1.5 ${
                  s.pass ? 'border-emerald-500/40 bg-emerald-500/10' : 'border-red-500/50 bg-red-500/10'
                }`}
              >
                <s.icon className={`h-3 w-3 ${s.pass ? 'text-emerald-400' : 'text-red-400'}`} />
                <span className="text-[9px] font-semibold text-slate-200">{s.label}</span>
              </motion.div>
              {i < stages.length - 1 && <span className="self-center text-slate-600">→</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="border-t border-slate-800 px-2 py-1 font-mono text-[9px] text-slate-400">
          <span className="text-red-400">✗ deps</span>
          <span className="ml-1.5">1 high CVE — blocked (Snyk)</span>
        </div>
      </motion.div>
    </Frame>
  );
}

/* -------------------------------- Router / lookup -------------------------------- */
const byId: Record<string, React.ComponentType> = {
  pivotal: PivotalVisual,
  clinical: ClinicalVisual,
  eventdriven: EventDrivenVisual,
  goldenpath: GoldenPathVisual,
  devsecops: DevSecOpsVisual,
};

export function ClientVisual({ id }: { id: string }) {
  const Cmp = byId[id];
  if (!Cmp) {
    return (
      <Frame gradient="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
        <Sparkles className="h-6 w-6 text-muted-foreground" />
      </Frame>
    );
  }
  return <Cmp />;
}
