import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { homeFaqContent } from '../../data/homeData';
import { pilotCopy, PILOT_LENGTH, RISK_REVERSAL } from '../../data/pilotConfig';
import { openBookCall, openPilotApply } from '../../utils/analytics';
import { Btn } from '../kit/Btn';
import { Hand, Reveal, SectionHead, SectionLabel, Sticky } from '../kit/Paper';
import { CTABand, FAQList, Ticket } from '../kit/Bits';
import { CONTACT_EMAIL } from '../../data/siteConfig';

/* ───────── Pilot ───────── */

export const Pilot: React.FC = () => {
  // Step 5's copy in pilotConfig carries an unfilled fee placeholder, so it is written out here.
  const steps = pilotCopy.timelineSteps.map((s) =>
    s.step === 5 ? { ...s, description: 'Continue into the 90-day program, or stop. Your call.' } : s
  );

  return (
    <section id="pilot" className="glow relative overflow-hidden py-16 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionLabel n="07" note={`${PILOT_LENGTH}, no risk`}>
          How to start
        </SectionLabel>

        <div className="mt-10 grid items-start gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHead
              title={
                <>
                  See your customers first. <span className="accent text-blue">Decide after.</span>
                </>
              }
              sub={pilotCopy.hero.sub}
            />
            <Reveal delay={0.15}>
              <Sticky tone="butter" tape="stripe" className="mt-12 max-w-sm -rotate-2 p-6">
                <p className="font-hand text-[23px] leading-tight text-ink">{RISK_REVERSAL}</p>
              </Sticky>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ol className="relative rounded-[20px] bg-paper p-2 shadow-float">
              {steps.map((s, i) => (
                <li key={s.step} className="flex gap-4 rounded-2xl p-4 transition-colors hover:bg-canvas">
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full font-mono text-[12px] ${
                      i === steps.length - 1 ? 'bg-blue text-white' : 'bg-canvas text-ink ring-1 ring-line'
                    }`}
                  >
                    {s.step}
                  </span>
                  <div>
                    <div className="text-[16px] font-semibold tracking-[-0.01em]">{s.title}</div>
                    <p className="mt-1 text-[14.5px] leading-relaxed text-slate">{s.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <Ticket
            kicker="Admit one · Elvtera no-risk pilot"
            title="Apply for the pilot."
            lines={[`See real prospects before you pay.`, `${PILOT_LENGTH} · you approve every message`]}
            cta="Apply"
            onClick={() => openPilotApply()}
            stamp={
              <span className="leading-none">
                <span className="block font-mono text-[8px] uppercase tracking-[0.15em]">No risk</span>
                <span className="block text-[22px] italic">{PILOT_LENGTH.split(' ')[0]}</span>
                <span className="block font-mono text-[8px] uppercase tracking-[0.15em]">days</span>
              </span>
            }
          />
        </Reveal>
      </div>
    </section>
  );
};

/* ───────── FAQ ───────── */

export const FAQ: React.FC<{ items?: { question: string; answer: string }[]; n?: string }> = ({ items = homeFaqContent, n = '08' }) => (
  <section className="bg-canvas py-16 sm:py-24">
    <div className="mx-auto max-w-6xl px-5">
      <SectionLabel n={n} note={`${items.length} questions`}>
        FAQ
      </SectionLabel>
      <div className="mt-10 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHead
            title={
              <>
                Questions, <span className="accent text-blue">answered.</span>
              </>
            }
          />
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col items-start gap-5">
              <Btn variant="dark" onClick={openBookCall}>
                Ask us on a call
              </Btn>
              <p className="text-[14px] text-slate">
                Or write to us at
                <br />
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-ink underline decoration-line-2 underline-offset-4">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <Link to="/faq" className="text-[14px] font-medium text-blue">
                See the full FAQ →
              </Link>
            </div>
          </Reveal>
        </div>
        <FAQList items={items} />
      </div>
    </div>
  </section>
);

/* ───────── Second service ───────── */

export const CrossSell: React.FC = () => (
  <section className="bg-canvas pb-24 sm:pb-32">
    <div className="mx-auto max-w-6xl px-5">
      <Reveal>
        <Link
          to="/solutions/business-systems"
          className="group relative grid items-center gap-8 overflow-hidden rounded-[28px] bg-[radial-gradient(120%_140%_at_100%_0%,#5b7cff_0%,#0546f2_45%,#0a2a99_100%)] p-8 text-white shadow-[0_30px_60px_-30px_rgb(5_70_242/0.8)] sm:p-12 md:grid-cols-[1.3fr_1fr]"
        >
          <div className="desk-grid-dark absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/60">Also from Elvtera</span>
            <h3 className="display mt-4 text-[clamp(32px,3.8vw,50px)]">
              Need the systems <span className="accent">behind the sales?</span>
            </h3>
            <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-white/75">
              Websites, CRM pipelines, speed-to-lead automation and full business setups. Built inside your tools, or
              from scratch.
            </p>
            <span className="btn-gloss-light mt-7 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14.5px] font-medium text-ink">
              Business Systems & Websites
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
          <div className="relative hidden h-full min-h-[230px] md:block" aria-hidden="true">
            <div className="absolute right-4 top-0 w-[280px] rotate-3 rounded-[14px] bg-paper p-3 text-ink shadow-float transition-transform duration-500 group-hover:rotate-6">
              <div className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-ash">Pipeline</div>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {['New', 'Call', 'Won'].map((c, i) => (
                  <div key={c} className="space-y-1.5">
                    <div className="text-[10px] font-medium text-slate">{c}</div>
                    {Array.from({ length: 3 - i }).map((_, j) => (
                      <div key={j} className={`h-7 rounded-md p-1.5 ${i === 2 ? 'bg-mint' : 'bg-canvas'}`}>
                        <div className="h-1.5 w-[70%] rounded bg-ink/25" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <Sticky tone="butter" pin className="absolute bottom-0 left-2 w-44 -rotate-6 p-4 transition-transform duration-500 group-hover:-rotate-3">
              <p className="font-hand text-[21px] leading-tight text-ink">every lead answered in under 60s</p>
            </Sticky>
          </div>
        </Link>
      </Reveal>
      <Hand className="mt-6 text-center text-[24px] text-slate">our second service →</Hand>
    </div>
  </section>
);

/* ───────── Final CTA ───────── */

export const FinalCTA: React.FC = () => (
  <CTABand
    quote="No bought lists. No blasts. Just people who were already looking for what you sell."
    title={
      <>
        Fill your calendar with the <span className="accent font-normal text-blue-soft">right</span> people.
      </>
    }
  />
);
