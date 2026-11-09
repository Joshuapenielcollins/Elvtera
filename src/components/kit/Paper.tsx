import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─────────────── Sticky note ─────────────── */

export type Tone = 'butter' | 'mint' | 'sky' | 'lilac' | 'pink' | 'peach' | 'paper';

const toneBg: Record<Tone, string> = {
  butter: 'bg-butter',
  mint: 'bg-mint',
  sky: 'bg-sky',
  lilac: 'bg-lilac',
  pink: 'bg-pink',
  peach: 'bg-peach',
  paper: 'bg-cream',
};

const tapeColor: Record<Tone, string> = {
  butter: '#f3c94f',
  mint: '#8fd1a6',
  sky: '#9cc3f2',
  lilac: '#b9a6ef',
  pink: '#f2a7bb',
  peach: '#f5b88a',
  paper: '#b9d3f7',
};

interface StickyProps {
  tone?: Tone;
  /** plain translucent tape, striped washi tape, or none */
  tape?: boolean | 'stripe';
  /** a glossy blue pushpin instead of tape */
  pin?: boolean;
  className?: string;
  children: React.ReactNode;
}

/** A blue glossy pushpin. */
export const Pin: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span
    aria-hidden="true"
    className={`absolute z-10 h-[15px] w-[15px] rounded-full bg-[radial-gradient(circle_at_35%_30%,#9db7ff_0%,#2d5cff_45%,#0a2fb0_100%)] shadow-[0_3px_4px_-1px_rgb(0_0_0/0.35)] ${className}`}
  />
);

/** A paper note with tape or a pushpin on top. */
export const Sticky: React.FC<StickyProps> = ({ tone = 'butter', tape = true, pin = false, className = '', children }) => (
  <div
    className={`${/\b(absolute|fixed)\b/.test(className) ? '' : 'relative'} rounded-[2px] p-5 shadow-note ${toneBg[tone]} ${className}`}
  >
    {/* soft paper sheen */}
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[2px] bg-[linear-gradient(180deg,rgb(255_255_255/0.28),transparent_40%,rgb(0_0_0/0.025))]" />
    {pin ? (
      <Pin className="-top-1.5 left-1/2 -translate-x-1/2" />
    ) : tape === 'stripe' ? (
      <span
        aria-hidden="true"
        className="tape-stripe absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-3"
        style={{ ['--tape' as string]: tapeColor[tone] }}
      />
    ) : tape ? (
      <span
        aria-hidden="true"
        className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-2 bg-white/55 shadow-[0_1px_2px_rgb(0_0_0/0.08)] backdrop-blur-[1px]"
      />
    ) : null}
    <div className="relative">{children}</div>
  </div>
);

/* ─────────────── Drag wrapper ─────────────── */

let topZ = 20;

interface DragProps {
  constraints: React.RefObject<HTMLElement | null>;
  enabled?: boolean;
  rotate?: number;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

/**
 * Makes anything draggable inside `constraints`. The item last picked up
 * comes to the front. When `enabled` is false it stays put (used on touch
 * screens so dragging never fights page scrolling).
 */
export const Drag: React.FC<DragProps> = ({ constraints, enabled = true, rotate = 0, className = '', style, children }) => {
  const [z, setZ] = useState(1);
  return (
    <motion.div
      drag={enabled}
      dragConstraints={constraints}
      dragElastic={0.12}
      dragMomentum={false}
      onPointerDown={() => enabled && setZ(++topZ)}
      whileDrag={{ scale: 1.04, rotate: 0, cursor: 'var(--cur-fist)' }}
      whileHover={enabled ? { rotate: rotate * 0.4 } : undefined}
      initial={{ rotate }}
      animate={{ rotate }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      style={{ ...style, zIndex: z }}
      className={`${enabled ? 'cursor-grab touch-none select-none' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

/* ─────────────── Hand-written note ─────────────── */

interface HandProps {
  className?: string;
  arrow?: 'down-left' | 'down-right' | 'left' | 'right' | 'none';
  children: React.ReactNode;
}

const arrows = {
  'down-left': 'M70 4 C 60 30, 40 44, 8 50 M8 50 L 20 40 M8 50 L 22 56',
  'down-right': 'M6 4 C 16 30, 36 44, 68 50 M68 50 L 56 40 M68 50 L 54 56',
  left: 'M74 26 C 54 12, 30 14, 6 30 M6 30 L 18 18 M6 30 L 20 36',
  right: 'M4 26 C 24 12, 48 14, 70 30 M70 30 L 58 18 M70 30 L 56 36',
};

/** A handwritten margin note with an optional drawn arrow. */
export const Hand: React.FC<HandProps> = ({ className = '', arrow = 'none', children }) => (
  <div className={`pointer-events-none font-hand text-[22px] leading-[1.05] text-blue ${className}`}>
    {arrow !== 'none' && (arrow === 'left' || arrow === 'down-left') && (
      <svg viewBox="0 0 78 60" className="mb-1 h-10 w-14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
        <path d={arrows[arrow]} />
      </svg>
    )}
    <span>{children}</span>
    {arrow !== 'none' && (arrow === 'right' || arrow === 'down-right') && (
      <svg viewBox="0 0 78 60" className="mt-1 ml-auto h-10 w-14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
        <path d={arrows[arrow]} />
      </svg>
    )}
  </div>
);

/* ─────────────── Highlighter mark ─────────────── */

/** Highlighter stroke that sweeps across the words when they scroll into view. */
export const Mark: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = 'var(--color-butter)',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  return (
    <span ref={ref} className="relative isolate inline-block whitespace-nowrap">
      <motion.span
        aria-hidden="true"
        className="absolute inset-x-[-0.12em] bottom-[0.06em] top-[0.42em] -z-10 origin-left rounded-[3px] -rotate-1"
        style={{ background: color }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: inView ? 1 : 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
      />
      {children}
    </span>
  );
};

/* ─────────────── Reveal on scroll ─────────────── */

export const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string; y?: number }> = ({
  children,
  delay = 0,
  className = '',
  y = 18,
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-8% 0px' }}
    transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
  >
    {children}
  </motion.div>
);

/* ─────────────── Section heading ─────────────── */

interface SectionHeadProps {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const Eyebrow: React.FC<{ children: React.ReactNode; dark?: boolean }> = ({ children, dark }) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em] ${
      dark ? 'bg-white/10 text-white/70' : 'bg-paper text-slate ring-1 ring-line'
    }`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-blue" />
    {children}
  </span>
);

/**
 * Full-width section label: a rule line, a number and a name on the left,
 * an optional small note on the right.
 */
export const SectionLabel: React.FC<{ n?: string; children: React.ReactNode; note?: string; dark?: boolean; className?: string }> = ({
  n,
  children,
  note,
  dark,
  className = '',
}) => (
  <Reveal className={className}>
    <div
      className={`flex items-center justify-between gap-4 border-t pt-3 font-mono text-[11px] uppercase tracking-[0.12em] ${
        dark ? 'border-white/25 text-white/60' : 'border-ink text-ink'
      }`}
    >
      <span className="flex gap-5">
        {n && <span className={dark ? 'text-white/40' : 'text-slate'}>{n}</span>}
        <span className="font-medium">{children}</span>
      </span>
      {note && <span className={`hidden sm:block ${dark ? 'text-white/40' : 'text-slate'}`}>{note}</span>}
    </div>
  </Reveal>
);

export const SectionHead: React.FC<SectionHeadProps> = ({ eyebrow, title, sub, align = 'left', dark = false, className = '' }) => (
  <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
    {eyebrow && (
      <Reveal>
        <span
          className={`inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.12em] ${
            dark ? 'text-white/55' : 'text-slate'
          }`}
        >
          <span className="h-px w-6 bg-blue" />
          {eyebrow}
        </span>
      </Reveal>
    )}
    <Reveal delay={0.05}>
      <h2
        className={`display mt-4 text-[clamp(34px,4.6vw,60px)] ${dark ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </h2>
    </Reveal>
    {sub && (
      <Reveal delay={0.1}>
        <p
          className={`mt-5 text-[clamp(16px,1.35vw,19px)] leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          } max-w-2xl ${dark ? 'text-white/65' : 'text-slate'}`}
        >
          {sub}
        </p>
      </Reveal>
    )}
  </div>
);

/* ─────────────── Media query hook ─────────────── */

export const useMedia = (query: string) => {
  const [match, setMatch] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  );
  useEffect(() => {
    const m = window.matchMedia(query);
    const on = () => setMatch(m.matches);
    on();
    m.addEventListener('change', on);
    return () => m.removeEventListener('change', on);
  }, [query]);
  return match;
};

/** True on devices with a fine pointer and a wide enough screen to drag things around. */
export const useCanDrag = () => useMedia('(min-width: 768px) and (pointer: fine)');
