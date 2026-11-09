import React, { useRef } from 'react';
import { problemSectionContent } from '../../data/homeData';
import { Drag, Hand, Reveal, SectionLabel, Sticky, Tone, useCanDrag } from '../kit/Paper';
import { NumberDot } from '../kit/Bits';

const pains: { text: React.ReactNode; tone: Tone }[] = [
  { text: 'You bought a list of 10,000 names. Nobody replied.', tone: 'butter' },
  { text: 'The same email went to everyone. Your domain landed in spam.', tone: 'pink' },
  { text: 'The calls you did get were with people who were never buying.', tone: 'mint' },
  { text: 'So the founder ends up doing sales at midnight.', tone: 'lilac' },
];

/** Positions on the desktop board, as % of the board. */
const spots = [
  { left: 2, top: 6, r: -3 },
  { left: 28, top: 0, r: 2 },
  { left: 56, top: 4, r: -2 },
  { left: 80, top: 12, r: 4 },
];

const Notebook: React.FC = () => (
  <div className="ruled relative rounded-[3px] bg-cream py-7 pl-12 pr-8 shadow-float">
    <span className="absolute inset-y-0 left-8 w-px bg-[#e8a0a0]" aria-hidden="true" />
    <span
      aria-hidden="true"
      className="tape-stripe absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-2"
      style={{ ['--tape' as string]: '#9cc3f2' }}
    />
    <p className="display text-[clamp(30px,3vw,40px)] leading-[1.15]">
      It's not your <span className="relative isolate">offer<span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-butter" /></span>.
    </p>
    <p className="mt-2 font-hand text-[clamp(24px,2.3vw,30px)] leading-[1.15] text-blue">
      You're writing to people who aren't looking.
    </p>
  </div>
);

export const Problem: React.FC = () => {
  const board = useRef<HTMLDivElement>(null);
  const canDrag = useCanDrag();

  return (
    <section className="desk-grid relative overflow-hidden bg-canvas py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionLabel n="01" note="Move them around">
          {problemSectionContent.eyebrow}
        </SectionLabel>

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <h2 className="text-[clamp(52px,9vw,124px)] font-bold leading-[0.9] tracking-[-0.055em] text-ink">
              Sound{' '}
              <span className="relative inline-block -rotate-2 rounded-md border-[3px] border-ink bg-butter px-3 pb-2 shadow-[6px_6px_0_var(--color-ink)]">
                familiar?
              </span>
            </h2>
          </Reveal>
          <Hand arrow="left" className="max-w-[230px] text-[24px] md:mb-4">
            Be honest. How many of these sound like your pipeline?
          </Hand>
        </div>

        {canDrag ? (
          <div ref={board} className="relative mt-14 h-[560px]">
            {/* thread lines between pins */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 560" preserveAspectRatio="none" aria-hidden="true">
              <path d="M120 40 C 200 10, 260 30, 380 14" fill="none" stroke="#0546f2" strokeWidth="1.5" opacity="0.6" />
              <path d="M380 14 C 480 10, 560 40, 660 34" fill="none" stroke="#0546f2" strokeWidth="1.5" opacity="0.6" />
              <path d="M660 34 C 760 40, 820 60, 900 80" fill="none" stroke="#0546f2" strokeWidth="1.5" opacity="0.6" />
              <path d="M900 80 C 860 220, 700 300, 640 360" fill="none" stroke="#0546f2" strokeWidth="1.5" opacity="0.6" />
            </svg>

            {pains.map((p, i) => (
              <Drag
                key={i}
                constraints={board}
                rotate={spots[i].r}
                className="absolute w-[20%]"
                style={{ left: `${spots[i].left}%`, top: `${spots[i].top}%` }}
              >
                <NumberDot n={i + 1} className="absolute -left-3 -top-3 z-10" />
                <Sticky tone={p.tone} pin className="min-h-[150px]">
                  <p className="font-hand text-[23px] leading-[1.15] text-ink">{p.text}</p>
                </Sticky>
              </Drag>
            ))}

            <Drag constraints={board} rotate={-1} className="absolute left-[30%] top-[52%] w-[46%]">
              <Notebook />
            </Drag>

            <Hand className="absolute bottom-0 left-0 max-w-[280px] text-[26px] text-ink">
              Fix <span className="text-blue">who you contact</span>, and the rest gets easier.
            </Hand>
          </div>
        ) : (
          <div className="mt-10 space-y-6">
            {pains.map((p, i) => (
              <Reveal key={i}>
                <div className="relative" style={{ transform: `rotate(${spots[i].r * 0.5}deg)` }}>
                  <NumberDot n={i + 1} className="absolute -left-2 -top-3 z-10" />
                  <Sticky tone={p.tone} pin>
                    <p className="font-hand text-[23px] leading-[1.15] text-ink">{p.text}</p>
                  </Sticky>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <Notebook />
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
};
