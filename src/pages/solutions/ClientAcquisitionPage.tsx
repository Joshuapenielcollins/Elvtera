import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Minus } from 'lucide-react';
import { SEOHead } from '../../components/layout/SEOHead';
import { clientAcquisitionContent as c } from '../../data/solutionsData';
import { openBookCall, openPilotApply } from '../../utils/analytics';
import { Btn } from '../../components/kit/Btn';
import { CTABand, PageHero } from '../../components/kit/Bits';
import { Reveal, SectionHead, SectionLabel, Sticky } from '../../components/kit/Paper';
import { AppWindow } from '../../components/kit/AppDemo';
import { FAQ } from '../../components/home/Closing';

export const ClientAcquisitionPage: React.FC = () => {
  const [pick, setPick] = useState(0);
  const sig = c.intentSignals.signalsList[pick];

  return (
    <>
      <SEOHead
        title="Signal-Based Outbound | Done-For-You Client Acquisition"
        description="We find businesses showing real buying signals, contact decision-makers across channels, qualify every reply and book calls on your calendar."
        canonicalPath="/solutions/client-acquisition"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Signal-based outbound client acquisition',
          provider: { '@type': 'Organization', name: 'Elvtera Business Solutions' },
          description: c.hero.subtitle,
        }}
      />

      <PageHero
        label={c.hero.eyebrow}
        title={
          <>
            Outbound that puts qualified buyers <span className="accent text-blue">on your calendar.</span>
          </>
        }
        sub={c.hero.subtitle}
        actions={
          <>
            <Btn size="lg" variant="dark" onClick={openBookCall}>
              Book a call
            </Btn>
            <Btn size="lg" variant="ghost" onClick={() => openPilotApply('/solutions/client-acquisition')}>
              Apply for a no-risk pilot
            </Btn>
          </>
        }
      >
        <div className="relative mx-auto mt-12 max-w-6xl px-4">
          <AppWindow />
          <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-ash">Sample workspace · {c.hero.footnote}</p>
        </div>
      </PageHero>

      {/* Why it fails */}
      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel n="01">The problem</SectionLabel>
          <SectionHead
            className="mt-10"
            title={
              <>
                Why most cold outreach <span className="accent text-blue">goes nowhere.</span>
              </>
            }
          />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {c.problem.points.map((p, i) => (
              <Reveal key={p} delay={i * 0.06}>
                <Sticky tone={(['pink', 'peach', 'lilac'] as const)[i]} pin className={`h-full p-7 ${i % 2 ? 'rotate-1' : '-rotate-1'}`}>
                  <p className="font-hand text-[23px] leading-[1.2]">{p}</p>
                </Sticky>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signal explorer */}
      <section className="desk-grid-dark relative overflow-hidden bg-ink py-16 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel n="02" note="Click a company" dark>
            Intent sourcing
          </SectionLabel>
          <SectionHead dark className="mt-10" title={<>{c.intentSignals.title.replace(/\.$/, '')}<span className="accent text-blue-soft">.</span></>} sub={c.intentSignals.description} />

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-2">
              {c.intentSignals.signalsList.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setPick(i)}
                  aria-pressed={pick === i}
                  className={`flex w-full items-center justify-between gap-3 rounded-2xl p-4 text-left transition-colors ${
                    pick === i ? 'bg-white/12 ring-1 ring-white/15' : 'hover:bg-white/5'
                  }`}
                >
                  <span className="text-[15.5px] font-medium">{s.company}</span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 font-mono text-[10.5px] uppercase ${
                      s.signalType === 'Strong' ? 'bg-[#7ee2a8] text-ink' : 'bg-butter text-ink'
                    }`}
                  >
                    {s.signalType}
                  </span>
                </button>
              ))}
              <p className="px-4 pt-2 font-mono text-[10.5px] text-white/35">Illustrative examples, not clients.</p>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={sig.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-[22px] bg-paper p-7 text-ink shadow-app sm:p-9"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-slate">Signal</div>
                <p className="display mt-2 text-[clamp(24px,2.4vw,32px)] leading-[1.2]">{sig.trigger}</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-canvas p-4">
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ash">Where we saw it</div>
                    <p className="mt-1.5 text-[14px] leading-relaxed">{sig.detectionSource}</p>
                  </div>
                  <div className="rounded-2xl bg-blue-tint p-4">
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-blue">What we did</div>
                    <p className="mt-1.5 text-[14px] leading-relaxed">{sig.qualificationAction}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Included + fit */}
      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel n="03">What's included</SectionLabel>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[22px] bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-3">
            {c.whatIsIncluded.map((item, i) => (
              <div key={item.title} className="bg-paper p-7">
                <span className="font-serif text-[30px] italic leading-none text-blue">0{i + 1}</span>
                <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.01em]">{item.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-slate">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <Sticky tone="mint" pin className="-rotate-1 p-8">
              <h3 className="font-hand text-[32px] leading-none">Good fit ✓</h3>
              <ul className="mt-5 space-y-3">
                {c.fitCriteria.fit.map((f) => (
                  <li key={f} className="flex gap-3 text-[15px] leading-snug">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-ok" /> {f}
                  </li>
                ))}
              </ul>
            </Sticky>
            <Sticky tone="pink" pin className="rotate-1 p-8">
              <h3 className="font-hand text-[32px] leading-none">Not yet</h3>
              <ul className="mt-5 space-y-3">
                {c.fitCriteria.notFit.map((f) => (
                  <li key={f} className="flex gap-3 text-[15px] leading-snug text-ink/80">
                    <Minus className="mt-0.5 h-4 w-4 shrink-0 text-warn" /> {f}
                  </li>
                ))}
              </ul>
            </Sticky>
          </div>
        </div>
      </section>

      <FAQ items={c.faqs} n="04" />

      <CTABand
        quote="Tell us about your offer and market. We'll tell you straight if outbound is a fit."
        title={
          <>
            Ready when <span className="accent font-normal text-blue-soft">you are.</span>
          </>
        }
      />
    </>
  );
};

export default ClientAcquisitionPage;
