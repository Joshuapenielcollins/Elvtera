import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Btn } from './Btn';
import { Reveal } from './Paper';
import { openBookCall, openPilotApply } from '../../utils/analytics';

/* ─────────────── Live cursor (multiplayer-style) ─────────────── */

export const Cursor: React.FC<{
  name: string;
  color?: string;
  className?: string;
  /** small drift path, in px */
  path?: [number, number][];
  duration?: number;
}> = ({ name, color = '#0546f2', className = '', path = [[0, 0], [24, -14], [-10, 12], [0, 0]], duration = 9 }) => (
  <motion.div
    aria-hidden="true"
    className={`pointer-events-none absolute z-20 ${className}`}
    animate={{ x: path.map((p) => p[0]), y: path.map((p) => p[1]) }}
    transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
  >
    <svg width="18" height="18" viewBox="0 0 18 18" className="drop-shadow-[0_1px_1px_rgb(0_0_0/0.25)]">
      <path d="M2 1.5 L15.5 8 L9 9.6 L6.4 16 Z" fill={color} stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
    <span
      className="ml-3 -mt-1 inline-flex items-center gap-1.5 rounded-full py-1 pl-1 pr-3 text-[12.5px] font-medium text-white shadow-[0_4px_12px_-4px_rgb(0_0_0/0.35)]"
      style={{ background: color }}
    >
      <span className="grid h-5 w-5 place-items-center rounded-full bg-white/25 text-[10px] font-semibold">{name[0]}</span>
      {name}
    </span>
  </motion.div>
);

/* ─────────────── Avatar ─────────────── */

const avatarTones = ['#ffd8a8', '#c3dafe', '#c6f6d5', '#fbcfe8', '#e9d8fd', '#fde68a'];

export const Avatar: React.FC<{ name: string; size?: number; className?: string }> = ({ name, size = 28, className = '' }) => {
  const i = name.charCodeAt(0) % avatarTones.length;
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('');
  return (
    <span
      className={`inline-grid shrink-0 place-items-center rounded-full font-semibold text-ink/75 ring-2 ring-white ${className}`}
      style={{ width: size, height: size, background: avatarTones[i], fontSize: size * 0.38 }}
    >
      {initials}
    </span>
  );
};

/* ─────────────── Numbered badge (hard shadow) ─────────────── */

export const NumberDot: React.FC<{ n: React.ReactNode; className?: string }> = ({ n, className = '' }) => (
  <span
    className={`grid h-8 w-8 place-items-center rounded-full bg-paper font-mono text-[12px] font-medium text-ink ring-[1.5px] ring-ink shadow-[2px_2px_0_var(--color-ink)] ${className}`}
  >
    {n}
  </span>
);

/* ─────────────── Ticket ─────────────── */

export const Ticket: React.FC<{
  kicker: string;
  title: React.ReactNode;
  lines: React.ReactNode[];
  cta: string;
  onClick: () => void;
  stamp?: React.ReactNode;
  className?: string;
}> = ({ kicker, title, lines, cta, onClick, stamp, className = '' }) => (
  <div className={`ticket relative flex rounded-[10px] text-[#3b2a06] ${className}`}>
    {/* notches */}
    <span className="absolute -top-2.5 right-[30%] h-5 w-5 rounded-full bg-canvas" aria-hidden="true" />
    <span className="absolute -bottom-2.5 right-[30%] h-5 w-5 rounded-full bg-canvas" aria-hidden="true" />
    <div className="flex-1 p-6 sm:p-7">
      <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#6b5216]">{kicker}</div>
      <div className="display mt-2 text-[clamp(30px,3.4vw,42px)] text-[#2a1d02]">{title}</div>
      <div className="mt-3 space-y-0.5 text-[14px] font-medium">
        {lines.map((l, i) => (
          <div key={i} className={i === 0 ? '' : 'text-[#6b5216]'}>
            {l}
          </div>
        ))}
      </div>
    </div>
    <div className="flex w-[30%] items-center justify-center border-l-2 border-dashed border-[#b48a2c]/50 p-4">
      <Btn variant="dark" onClick={onClick}>
        {cta}
      </Btn>
    </div>
    {stamp && (
      <div className="absolute -right-4 -top-6 grid h-20 w-20 rotate-12 place-items-center rounded-full border-2 border-[#9b2c2c]/70 bg-[#fff8ea] text-center font-serif text-[#9b2c2c] shadow-sm">
        {stamp}
      </div>
    )}
  </div>
);

/* ─────────────── Numbered FAQ ─────────────── */

export const FAQList: React.FC<{ items: { question: string; answer: string }[]; start?: number }> = ({ items, start = 1 }) => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-2.5">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={f.question}
            className={`rounded-2xl bg-paper transition-shadow ${isOpen ? 'shadow-float' : 'shadow-card ring-1 ring-line'}`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-5 px-5 py-[18px] text-left sm:px-6"
            >
              <span className="w-6 shrink-0 font-mono text-[12px] text-ash">{String(i + start).padStart(2, '0')}</span>
              <span className="flex-1 text-[16.5px] font-medium tracking-[-0.01em]">{f.question}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-canvas"
              >
                <Plus className="h-4 w-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 pl-16 pr-6 text-[15px] leading-relaxed text-slate sm:pl-[70px]">{f.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

/* ─────────────── Inner page hero ─────────────── */

export const PageHero: React.FC<{
  label: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  actions?: React.ReactNode;
  aside?: React.ReactNode;
  center?: boolean;
  children?: React.ReactNode;
}> = ({ label, title, sub, actions, aside, center = false, children }) => (
  <section className="glow desk-grid relative overflow-hidden pb-14 pt-28 sm:pb-20 sm:pt-32">
    <div className={`relative mx-auto max-w-6xl px-5 ${aside ? 'grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]' : ''}`}>
      <div className={center ? 'mx-auto max-w-4xl text-center' : 'max-w-4xl'}>
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-slate"
        >
          <span className="h-px w-6 bg-blue" />
          {label}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.2, 0.8, 0.2, 1] }}
          className="display mt-5 text-[clamp(44px,6.8vw,88px)] text-ink"
        >
          {title}
        </motion.h1>
        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={`mt-6 max-w-2xl text-[clamp(16px,1.45vw,19px)] leading-relaxed text-slate ${center ? 'mx-auto' : ''}`}
          >
            {sub}
          </motion.p>
        )}
        {actions && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className={`mt-9 flex flex-col gap-3 sm:flex-row ${center ? 'justify-center' : ''}`}
          >
            {actions}
          </motion.div>
        )}
      </div>
      {aside && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative"
        >
          {aside}
        </motion.div>
      )}
    </div>
    {children}
  </section>
);

/* ─────────────── Dark closing band ─────────────── */

export const CTABand: React.FC<{
  quote?: string;
  title: React.ReactNode;
  sub?: string;
  primary?: { label: string; onClick?: () => void; to?: string };
  secondary?: { label: string; onClick?: () => void; to?: string };
}> = ({
  quote,
  title,
  sub,
  primary = { label: 'Book a call', onClick: openBookCall },
  secondary = { label: 'Apply for a no-risk pilot', onClick: () => openPilotApply() },
}) => (
  <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
    <div className="desk-grid-dark absolute inset-0" aria-hidden="true" />
    <div
      aria-hidden="true"
      className="absolute left-1/2 top-[62%] h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/25 blur-[120px]"
    />
    <div className="relative mx-auto max-w-4xl px-5 text-center">
      {quote && (
        <Reveal>
          <p className="mx-auto max-w-xl font-serif text-[clamp(20px,2vw,26px)] italic leading-snug text-white/60">{quote}</p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-8 text-[clamp(46px,7.4vw,104px)] font-semibold leading-[0.95] tracking-[-0.05em]">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-white/60">{sub}</p>
        </Reveal>
      )}
      <Reveal delay={0.15}>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Btn size="lg" arrow onClick={primary.onClick} to={primary.to}>
            {primary.label}
          </Btn>
          <Btn size="lg" variant="ghost" onClick={secondary.onClick} to={secondary.to}>
            {secondary.label}
          </Btn>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ─────────────── Form fields ─────────────── */

const fieldCls =
  'w-full rounded-xl bg-paper px-4 py-3 text-[15px] text-ink shadow-[inset_0_1px_2px_rgb(14_17_22/0.04)] ring-1 ring-line-2 transition placeholder:text-ash focus:outline-none focus:ring-2 focus:ring-blue';

export const Field: React.FC<{ label: string; required?: boolean; children: React.ReactNode; hint?: string }> = ({
  label,
  required,
  children,
  hint,
}) => (
  <label className="block">
    <span className="mb-1.5 block text-[13px] font-medium text-ink">
      {label}
      {required && <span className="text-blue"> *</span>}
    </span>
    {children}
    {hint && <span className="mt-1 block text-[12px] text-ash">{hint}</span>}
  </label>
);

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (p) => <input {...p} className={fieldCls} />;
export const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (p) => (
  <textarea {...p} className={fieldCls} />
);
export const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (p) => (
  <select {...p} className={`${fieldCls} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%235d6371%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[right_14px_center] bg-no-repeat pr-10`} />
);

/* ─────────────── Check list ─────────────── */

export const Dot: React.FC<{ className?: string }> = ({ className = 'bg-blue' }) => (
  <span className={`mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full ${className}`} />
);
