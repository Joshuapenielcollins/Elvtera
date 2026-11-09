import React from 'react';
import { BarChart3, CalendarCheck2, Check, Filter, Megaphone, Minus, Presentation, Radar } from 'lucide-react';
import { clientAcquisitionContent } from '../../data/solutionsData';
import { fitCriteriaContent } from '../../data/homeData';
import { Hand, Reveal, SectionHead, SectionLabel, Sticky } from '../kit/Paper';

const icons = [Radar, Megaphone, Filter, CalendarCheck2, Presentation, BarChart3];
const tints = ['bg-blue-tint text-blue', 'bg-[#fbeee6] text-[#a2512b]', 'bg-ok-tint text-ok', 'bg-[#efeafd] text-[#6d4bd8]', 'bg-[#fdf3d6] text-[#9a6a00]', 'bg-canvas text-ink'];

export const Included: React.FC = () => (
  <section className="bg-paper py-16 sm:py-24">
    <div className="mx-auto max-w-6xl px-5">
      <SectionLabel n="05" note="Done for you">
        What you get
      </SectionLabel>
      <SectionHead
        className="mt-10"
        title={
          <>
            You show up and close. <span className="accent text-blue">We handle the rest.</span>
          </>
        }
        sub="One team runs the whole outbound engine: data, domains, copy, inboxes, replies and scheduling. Your outbound domains and inboxes stay under your control."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {clientAcquisitionContent.whatIsIncluded.map((item, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={item.title} delay={(i % 3) * 0.05}>
              <div className="group h-full rounded-[20px] bg-paper p-7 shadow-card ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
                <span className={`grid h-11 w-11 place-items-center rounded-xl ${tints[i]}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-[19px] font-semibold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">{item.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export const Fit: React.FC = () => (
  <section className="desk-grid bg-canvas py-16 sm:py-24">
    <div className="mx-auto max-w-6xl px-5">
      <SectionLabel n="06" note="Honest by design">
        Who it's for
      </SectionLabel>
      <SectionHead
        align="center"
        className="mt-12"
        title={
          <>
            We say no <span className="accent text-blue">more than we say yes.</span>
          </>
        }
        sub="Outbound only works when the offer is proven and the deal is worth it. Here's how we decide."
      />

      <div className="relative mx-auto mt-12 grid max-w-4xl gap-10 md:grid-cols-2">
        <Reveal>
          <Sticky tone="mint" pin className="-rotate-1 p-7 sm:p-8">
            <h3 className="font-hand text-[34px] leading-none text-ink">Good fit ✓</h3>
            <ul className="mt-5 space-y-3.5">
              {fitCriteriaContent.fit.map((f) => (
                <li key={f} className="flex gap-3 text-[15.5px] leading-snug text-ink">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-ok" /> {f}
                </li>
              ))}
            </ul>
          </Sticky>
        </Reveal>
        <Reveal delay={0.1}>
          <Sticky tone="pink" pin className="rotate-1 p-7 sm:p-8">
            <h3 className="font-hand text-[34px] leading-none text-ink">Not yet</h3>
            <ul className="mt-5 space-y-3.5">
              {fitCriteriaContent.notFit.map((f) => (
                <li key={f} className="flex gap-3 text-[15.5px] leading-snug text-ink/80">
                  <Minus className="mt-0.5 h-4 w-4 shrink-0 text-warn" /> {f}
                </li>
              ))}
            </ul>
          </Sticky>
        </Reveal>
        <Hand className="absolute -bottom-14 right-0 hidden rotate-[-3deg] text-[24px] md:block">
          not a fit today? we'll tell you why.
        </Hand>
      </div>
    </div>
  </section>
);
