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
      gradient="bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 dark:from-black dark:via-neutral-950 dark:to-neutral-900"
      label="Pivotal"
      labelClass="text-neutral-300"
    >
      <div className="relative flex h-full w-full items-stretch gap-3 pl-1 pr-2">
        {/* Warm rim lighting */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,180,60,0.14),transparent_55%),radial-gradient(circle_at_75%_35%,rgba(120,200,255,0.10),transparent_55%)]"
        />
        {/* Faint horizon line */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-6 bottom-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        {/* LEFT: Detailed SUV silhouette */}
        <div className="relative z-10 flex min-w-0 flex-1 flex-col items-center justify-center">
          <motion.svg
            viewBox="0 0 260 110"
            className="w-full max-w-[210px] drop-shadow-[0_18px_18px_rgba(0,0,0,0.55)]"
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden
          >
            <defs>
              <linearGradient id="pv-body" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2f363d" />
                <stop offset="55%" stopColor="#191d22" />
                <stop offset="100%" stopColor="#0a0c10" />
              </linearGradient>
              <linearGradient id="pv-roof" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3a4048" />
                <stop offset="100%" stopColor="#1a1e24" />
              </linearGradient>
              <linearGradient id="pv-window" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0f1216" />
                <stop offset="100%" stopColor="#05070a" />
              </linearGradient>
              <radialGradient id="pv-shadow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#000" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#000" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="pv-head" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="hsl(45 100% 82%)" stopOpacity="0.95" />
                <stop offset="60%" stopColor="hsl(38 100% 65%)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(38 100% 65%)" stopOpacity="0" />
              </radialGradient>
            </defs>

            <ellipse cx="130" cy="98" rx="112" ry="5" fill="url(#pv-shadow)" opacity="0.65" />

            <path
              d="M18,76 C20,64 30,56 44,54 L78,48 C100,44 122,42 152,42 L188,42 C214,44 230,50 240,56 L248,60 C250,62 250,66 248,70 L246,76 L232,78 L228,76 L184,76 L180,78 L94,78 L90,76 L40,76 L36,78 L22,76 Z"
              fill="url(#pv-body)"
            />

            <path d="M62,54 L78,34 L182,34 L206,54 Z" fill="url(#pv-roof)" />
            <line x1="62" y1="54" x2="206" y2="54" stroke="#c9cbcd" strokeWidth="0.4" opacity="0.55" />

            <path d="M68,52 L82,36 L118,36 L118,52 Z" fill="url(#pv-window)" />
            <path d="M122,52 L122,36 L180,36 L202,52 Z" fill="url(#pv-window)" />
            <rect x="119" y="36" width="2" height="16" fill="#050709" />

            <path d="M32,68 L246,66" stroke="#3d434a" strokeWidth="0.5" opacity="0.9" />
            <path d="M28,74 L244,72" stroke="#1a1e24" strokeWidth="0.5" opacity="0.7" />

            <line x1="120" y1="42" x2="120" y2="72" stroke="#050709" strokeWidth="0.5" opacity="0.7" />
            <line x1="88" y1="44" x2="88" y2="72" stroke="#050709" strokeWidth="0.4" opacity="0.55" />
            <line x1="180" y1="42" x2="180" y2="72" stroke="#050709" strokeWidth="0.4" opacity="0.55" />
            <rect x="82" y="60" width="6" height="1.4" rx="0.7" fill="#c9cbcd" opacity="0.55" />
            <rect x="146" y="60" width="6" height="1.4" rx="0.7" fill="#c9cbcd" opacity="0.55" />

            <rect x="240" y="64" width="6" height="7" rx="1" fill="#050709" />
            <ellipse cx="244" cy="60" rx="4" ry="2.4" fill="url(#pv-head)" />
            <motion.ellipse
              cx="243"
              cy="60"
              rx="2"
              ry="1.2"
              fill="hsl(48 100% 88%)"
              initial={{ opacity: 0.75 }}
              animate={{ opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <rect x="19" y="60" width="3" height="4" rx="1" fill="hsl(0 80% 55%)" opacity="0.9" />

            <path d="M56,76 A16,16 0 0 1 88,76" fill="none" stroke="#050709" strokeWidth="1.6" />
            <path d="M186,76 A16,16 0 0 1 218,76" fill="none" stroke="#050709" strokeWidth="1.6" />

            {[72, 202].map((cx) => (
              <g key={cx}>
                <circle cx={cx} cy={82} r={12.5} fill="#0e1013" />
                <circle cx={cx} cy={82} r={10} fill="#181c22" />
                <circle cx={cx} cy={82} r={7.2} fill="#242a32" />
                {[0, 30, 60, 90, 120, 150].map((deg) => {
                  const rad = (deg * Math.PI) / 180;
                  const x2 = cx + Math.cos(rad) * 6.8;
                  const y2 = 82 + Math.sin(rad) * 6.8;
                  const x3 = cx - Math.cos(rad) * 6.8;
                  const y3 = 82 - Math.sin(rad) * 6.8;
                  return (
                    <React.Fragment key={deg}>
                      <line x1={cx} y1={82} x2={x2} y2={y2} stroke="#3d434a" strokeWidth="0.7" />
                      <line x1={cx} y1={82} x2={x3} y2={y3} stroke="#3d434a" strokeWidth="0.7" />
                    </React.Fragment>
                  );
                })}
                <circle cx={cx} cy={82} r={1.8} fill="#c9cbcd" />
              </g>
            ))}
          </motion.svg>

          {/* Status pill directly under the car */}
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest text-neutral-300 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Subscription active
          </motion.div>
        </div>

        {/* RIGHT: Subscription info card in its own column */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.55 }}
          className="relative z-10 flex w-[130px] shrink-0 flex-col justify-center rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2.5 text-neutral-100 shadow-lg backdrop-blur-md"
        >
          <div className="text-[8px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
            Range Rover
          </div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-[17px] font-semibold tracking-tight tabular-nums">
              &pound;2,400
            </span>
            <span className="text-[10px] font-medium text-neutral-400">/ mo</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {['Ins.', 'Tax', 'Serv.', 'Del.'].map((t) => (
              <span
                key={t}
                className="rounded-sm bg-white/10 px-1 py-0.5 text-[8px] font-medium uppercase tracking-widest text-neutral-200"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-2 text-[8px] text-neutral-400">
            Pause &middot; resume &middot; home delivery
          </div>
        </motion.div>
      </div>
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

/* --------------------------------- RETAIL A/B TESTING --------------------------------- */
export function AbTestingVisual() {
  return (
    <Frame
      gradient="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-950/25 dark:to-indigo-950/25"
      label="A/B experiment"
      labelClass="text-slate-800 dark:text-slate-200"
    >
      <div className="flex items-center justify-center gap-2">
        {/* Variant A (control) */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="w-[92px] rounded-md border border-border/60 bg-card p-2 shadow-sm"
        >
          <div className="flex items-center justify-between text-[8px] font-semibold uppercase tracking-widest text-muted-foreground">
            <span>A</span>
            <span>control</span>
          </div>
          <div className="mt-1 h-6 rounded bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900" />
          <div className="mt-1 space-y-1">
            <div className="h-1 w-16 rounded-full bg-muted-foreground/30" />
            <div className="h-1 w-12 rounded-full bg-muted-foreground/20" />
          </div>
          <div className="mt-1.5 flex h-3 items-center justify-center rounded bg-slate-500 text-[7px] font-semibold uppercase tracking-widest text-white">
            Buy
          </div>
          <div className="mt-1 text-right text-[9px] tabular-nums font-medium text-muted-foreground">
            CVR 4.1%
          </div>
        </motion.div>

        {/* Winner delta */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, type: 'spring', damping: 14 }}
          className="flex flex-col items-center gap-0.5"
        >
          <div className="rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-bold text-white shadow">
            +3.2%
          </div>
          <span className="text-[7px] font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
            winner
          </span>
        </motion.div>

        {/* Variant B (winner) */}
        <motion.div
          initial={{ opacity: 0, x: 8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-[92px] rounded-md border-2 border-emerald-500/70 bg-card p-2 shadow-md ring-2 ring-emerald-500/10"
        >
          <div className="flex items-center justify-between text-[8px] font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
            <span>B</span>
            <span>variant</span>
          </div>
          <div className="mt-1 h-6 rounded bg-gradient-to-br from-emerald-200 to-emerald-100 dark:from-emerald-900/40 dark:to-emerald-950/20" />
          <div className="mt-1 space-y-1">
            <div className="h-1 w-16 rounded-full bg-emerald-500/40" />
            <div className="h-1 w-14 rounded-full bg-emerald-500/25" />
          </div>
          <div className="mt-1.5 flex h-3 items-center justify-center rounded bg-emerald-500 text-[7px] font-semibold uppercase tracking-widest text-white">
            Add to bag
          </div>
          <div className="mt-1 text-right text-[9px] tabular-nums font-semibold text-emerald-700 dark:text-emerald-400">
            CVR 4.3%
          </div>
        </motion.div>
      </div>
    </Frame>
  );
}

/* ----------------------------- ASSET MGMT · SEASONAL CAMPAIGN ----------------------------- */
export function CampaignsVisual() {
  return (
    <Frame
      gradient="bg-gradient-to-br from-stone-50 via-neutral-50 to-slate-50 dark:from-stone-950 dark:via-neutral-950 dark:to-slate-950"
      label="June · Pride edition"
      labelClass="text-neutral-700 dark:text-neutral-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative w-full max-w-[280px] overflow-hidden rounded-lg border border-border/60 bg-card shadow-md"
      >
        {/* Understated Pride ribbon */}
        <div
          className="h-1.5 w-full"
          style={{
            background:
              'linear-gradient(to right, rgba(228,3,3,0.42) 0%, rgba(255,140,0,0.42) 20%, rgba(255,215,0,0.42) 40%, rgba(0,128,38,0.42) 60%, rgba(0,77,255,0.42) 80%, rgba(117,7,135,0.42) 100%)',
          }}
        />

        <div className="p-3">
          <div className="flex items-center justify-between">
            <div className="text-[8px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Insights &middot; June
            </div>
            <div className="text-[8px] font-mono uppercase tracking-widest text-muted-foreground">
              Est. 1892
            </div>
          </div>

          <h5 className="mt-1.5 text-[14px] font-semibold leading-tight tracking-tight">
            Considered wealth. All year. All welcome.
          </h5>
          <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">
            A quiet update for the season &mdash; same principles, same portfolios, a little more colour where it counts.
          </p>

          <div className="mt-2 flex items-center gap-1.5">
            <div className="rounded-sm bg-primary px-1.5 py-0.5 text-[9px] font-medium text-primary-foreground">
              Read now
            </div>
            <div className="text-[9px] text-muted-foreground">3 min read</div>
            <motion.div
              className="ml-auto flex gap-0.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {['#E40303', '#FF8C00', '#FFD700', '#008026', '#004DFF', '#750787'].map((c, i) => (
                <motion.span
                  key={i}
                  className="block h-2 w-1 rounded-full"
                  style={{ backgroundColor: c }}
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.12 }}
                />
              ))}
            </motion.div>
          </div>
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
  'ab-testing': AbTestingVisual,
  campaigns: CampaignsVisual,
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
