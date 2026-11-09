import React from 'react';
import { BUSINESS_TYPES } from '../../data/siteConfig';

export const Marquee: React.FC = () => {
  const items = [...BUSINESS_TYPES, ...BUSINESS_TYPES];
  return (
    <section aria-label="Who we run outbound for" className="border-y border-line bg-paper py-6">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5">
        <span className="hidden shrink-0 font-mono text-[11px] uppercase tracking-[0.08em] text-ash md:block">
          Built for B2B
        </span>
        <div className="fade-x relative flex-1 overflow-hidden">
          <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
            {items.map((t, i) => (
              <span key={i} className="flex items-center gap-10 text-[clamp(20px,2.2vw,28px)] tracking-[-0.02em] text-ink/80">
                <span className={i % 2 ? 'accent' : 'font-medium'}>{t}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-blue/60" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
