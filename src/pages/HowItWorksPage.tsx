import React from 'react';
import { Check } from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { howItWorksStages, TYPICAL_TIMELINE_WEEKS } from '../data/howItWorksData';
import { openBookCall, openPilotApply } from '../utils/analytics';
import { Btn } from '../components/kit/Btn';
import { CTABand, Dot, PageHero } from '../components/kit/Bits';
import { Hand, Reveal, SectionLabel, Sticky } from '../components/kit/Paper';
import { StepCalendar } from '../components/kit/Mocks';
import { FAQ } from '../components/home/Closing';
import { homeFaqContent } from '../data/homeData';

export const HowItWorksPage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How Elvtera runs signal-based outbound',
    step: howItWorksStages.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.summary })),
  };

  return (
    <>
      <SEOHead
        title="How It Works | The Outbound Process, Step by Step"
        description="From mapping your ideal customer to qualified calls on your calendar. Five stages over the first 90 days, with what we deliver and what you do at each one."
        canonicalPath="/how-it-works"
        jsonLd={jsonLd}
      />

      <PageHero
        label={`How it works · ${TYPICAL_TIMELINE_WEEKS}`}
        title={
          <>
            Ninety days, <span className="accent text-blue">five stages.</span>
          </>
        }
        sub="Here's exactly what happens from the first call to a full calendar: what we deliver at each stage, and the little we need from you."
        actions={
          <>
            <Btn size="lg" variant="dark" onClick={openBookCall}>
              Book a call
            </Btn>
            <Btn size="lg" variant="ghost" onClick={() => openPilotApply()}>
              Apply for a no-risk pilot
            </Btn>
          </>
        }
        aside={
          <div className="relative">
            <div className="rotate-[1.5deg]">
              <StepCalendar />
            </div>
            <Sticky tone="butter" pin className="absolute -bottom-8 -left-6 hidden w-48 -rotate-6 p-4 sm:block">
              <p className="font-hand text-[21px] leading-tight">by day 90: a steady flow of qualified calls</p>
            </Sticky>
          </div>
        }
      />

      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel n="01" note="Scroll the timeline">
            The stages
          </SectionLabel>

          <ol className="relative mt-10">
            <span className="absolute bottom-0 left-[19px] top-0 w-px bg-line md:left-[calc(22%+19px)]" aria-hidden="true" />
            {howItWorksStages.map((s, i) => (
              <Reveal key={s.stageNumber} className="relative grid gap-6 pb-16 last:pb-0 md:grid-cols-[22%_1fr]">
                {/* left: timing */}
                <div className="hidden pt-1 md:block">
                  <div className="font-mono text-[12px] uppercase tracking-[0.1em] text-slate">{s.timeframe}</div>
                </div>
                <div className="relative pl-14">
                  <span
                    className={`absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full font-serif text-[18px] italic ${
                      i === howItWorksStages.length - 1 ? 'bg-blue text-white' : 'bg-paper text-ink ring-[1.5px] ring-ink shadow-[2px_2px_0_var(--color-ink)]'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-slate md:hidden">{s.timeframe}</div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-ash">{s.subtitle}</div>
                  <h2 className="display mt-2 text-[clamp(30px,3.4vw,44px)]">{s.title}</h2>
                  <p className="mt-3 max-w-2xl text-[16.5px] leading-relaxed text-slate">{s.summary}</p>

                  <div className="mt-7 grid gap-4 lg:grid-cols-2">
                    <div className="rounded-[18px] bg-canvas p-6">
                      <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-blue">We deliver</div>
                      <ul className="mt-3 space-y-2.5">
                        {s.whatWeDeliver.map((x) => (
                          <li key={x} className="flex gap-2.5 text-[14.5px] leading-snug">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue" /> {x}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-[18px] bg-paper p-6 ring-1 ring-line">
                      <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-slate">You do</div>
                      <ul className="mt-3 space-y-2.5">
                        {s.whatTheClientDoes.map((x) => (
                          <li key={x} className="flex gap-2.5 text-[14.5px] leading-snug text-ink/80">
                            <Dot className="bg-ink/40" /> {x}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
          <Hand className="mt-12 text-center text-[26px]">most of the work is ours. that's the point.</Hand>
        </div>
      </section>

      <FAQ items={homeFaqContent.slice(0, 5)} n="02" />

      <CTABand
        quote="Want to see how this applies to your offer?"
        title={
          <>
            Map your <span className="accent font-normal text-blue-soft">buyers</span> with us.
          </>
        }
        sub="A 30-minute call to map your buyer and look at live buying signals in your market."
      />
    </>
  );
};
