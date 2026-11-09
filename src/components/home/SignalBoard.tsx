import React, { useRef, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { signalTypes } from '../../data/homeData';
import { Drag, Hand, Pin, Reveal, SectionHead, SectionLabel, Sticky, useCanDrag } from '../kit/Paper';
import { JobPost, NewsCard, SocialPost } from '../kit/Mocks';

/** Desktop positions (% of board) for the 3 source cards and the 8 notes. */
const sourceSpots = [
  { left: 0, top: 2, r: -3 },
  { left: 36, top: 0, r: 1.5 },
  { left: 73, top: 3, r: 3 },
];
const noteSpots = [
  { left: 1, top: 40, r: -4 },
  { left: 26, top: 44, r: 3 },
  { left: 51, top: 39, r: -2 },
  { left: 76, top: 43, r: 4 },
  { left: 5, top: 70, r: 3 },
  { left: 29, top: 73, r: -4 },
  { left: 53, top: 69, r: 2 },
  { left: 77, top: 72, r: -3 },
];

const Note: React.FC<{ i: number }> = ({ i }) => {
  const s = signalTypes[i];
  return (
    <Sticky tone={s.tone} pin className="h-full">
      <div className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink/55">{s.tag}</div>
      <div className="mt-1.5 text-[16px] font-semibold leading-snug tracking-[-0.01em] text-ink">{s.label}</div>
      <p className="mt-2 font-hand text-[19px] leading-[1.1] text-ink/75">{s.means}</p>
    </Sticky>
  );
};

const Source: React.FC<{ i: number }> = ({ i }) => (
  <div className="relative">
    <Pin className="left-1/2 -top-1.5 -translate-x-1/2" />
    {i === 0 ? <JobPost /> : i === 1 ? <SocialPost /> : <NewsCard />}
  </div>
);

export const SignalBoard: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const canDrag = useCanDrag();
  // Bumping the key remounts the board, which puts everything back.
  const [round, setRound] = useState(0);

  return (
    <section id="signals" className="glow relative overflow-hidden py-16 sm:py-24">
      <div className="desk-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionLabel n="02" note="Pick one up">
          What we do
        </SectionLabel>
        <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHead
            title={
              <>
                We find the companies <span className="accent text-blue">that need you right now.</span>
              </>
            }
            sub="Every day we scan job boards, social posts, funding news and tech changes for signs a business is about to buy what you sell. We keep only the ones that match your ideal customer, and leave everyone else alone."
          />
          {canDrag && (
            <button
              type="button"
              onClick={() => setRound((r) => r + 1)}
              className="btn-gloss-light inline-flex h-10 shrink-0 items-center gap-2 self-start rounded-full px-4 text-[13.5px] font-medium text-ink md:self-end"
            >
              <RotateCcw className="h-4 w-4" /> Tidy the board
            </button>
          )}
        </div>

        {canDrag ? (
          <div className="relative mt-12">
            <div ref={ref} key={round} className="relative h-[840px]">
              {sourceSpots.map((s, i) => (
                <Drag key={`s${i}`} constraints={ref} rotate={s.r} className="absolute" style={{ left: `${s.left}%`, top: `${s.top}%` }}>
                  <Source i={i} />
                </Drag>
              ))}
              {signalTypes.map((_, i) => (
                <Drag
                  key={i}
                  constraints={ref}
                  rotate={noteSpots[i].r}
                  className="absolute w-[22%]"
                  style={{ left: `${noteSpots[i].left}%`, top: `${noteSpots[i].top}%` }}
                >
                  <Note i={i} />
                </Drag>
              ))}
            </div>
            <Hand arrow="down-right" className="absolute -top-20 right-[26%] rotate-2">
              real signals look like this
            </Hand>
          </div>
        ) : (
          <>
            <div className="no-scrollbar -mx-5 mt-12 flex gap-5 overflow-x-auto px-5 pb-4 pt-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="shrink-0">
                  <Source i={i} />
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {signalTypes.map((_, i) => (
                <Reveal key={i}>
                  <div style={{ transform: `rotate(${noteSpots[i].r * 0.4}deg)` }}>
                    <Note i={i} />
                  </div>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
