import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { SEOHead } from '../../components/layout/SEOHead';
import { solutionsHubContent } from '../../data/solutionsData';
import { solutionsGridContent } from '../../data/homeData';
import { openBookCall } from '../../utils/analytics';
import { Btn } from '../../components/kit/Btn';
import { Hand, Reveal, SectionHead, SectionLabel, Sticky } from '../../components/kit/Paper';

const services = [
  {
    n: '01',
    to: '/',
    tag: 'Flagship',
    title: 'Signal-based outbound',
    body: solutionsGridContent[0].description,
    points: solutionsGridContent[0].deliverables,
    tone: 'butter' as const,
    cta: 'See how outbound works',
  },
  {
    n: '02',
    to: '/solutions/business-systems',
    tag: 'Build',
    title: 'Business systems & websites',
    body: 'Websites that book calls, sales pipelines and follow-up automation, or a full business setup for founders starting out. Inside your tools or from scratch.',
    points: [
      'Conversion-focused B2B websites',
      ...solutionsGridContent[1].deliverables.slice(0, 3),
      'End-to-end launch for new service businesses',
    ],
    tone: 'mint' as const,
    cta: 'See what we build',
  },
];

export const SolutionsHubPage: React.FC = () => {
  const [pick, setPick] = useState(0);
  const fit = solutionsHubContent.whichOneFitsYou[pick];

  return (
    <>
      <SEOHead
        title="Services"
        description="Two services: signal-based outbound that books qualified calls, and the business systems and websites that turn those calls into clients."
        canonicalPath="/solutions"
      />

      <section className="glow relative overflow-hidden pb-16 pt-28 sm:pt-32">
        <div className="desk-grid absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5">
          <span className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-slate">
            <span className="h-px w-6 bg-blue" /> Services
          </span>
          <h1 className="display mt-5 max-w-4xl text-[clamp(48px,7vw,92px)]">
            Two things, <span className="accent text-blue">done well.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[clamp(16px,1.45vw,19px)] leading-relaxed text-slate">
            We find buyers who are ready now, and we build the systems that turn them into clients.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <Link
                  to={s.to}
                  className="group flex h-full flex-col rounded-[26px] bg-paper p-2 shadow-float transition-all duration-300 hover:-translate-y-1"
                >
                  <Sticky tone={s.tone} tape={false} className="rounded-[20px] p-7">
                    <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.08em] text-ink/55">
                      <span>
                        {s.n} · {s.tag}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-ink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                    <h2 className="display mt-10 text-[clamp(34px,3.6vw,46px)]">{s.title}</h2>
                  </Sticky>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[15.5px] leading-relaxed text-slate">{s.body}</p>
                    <ul className="mt-6 space-y-2.5">
                      {s.points.map((p) => (
                        <li key={p} className="flex gap-2.5 text-[14.5px]">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue" /> {p}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-8 font-hand text-[22px] text-blue">{s.cta} →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Which one fits */}
      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel n="01" note="Pick a sentence">
            Not sure?
          </SectionLabel>
          <SectionHead
            className="mt-10"
            title={
              <>
                Which one <span className="accent text-blue">fits you?</span>
              </>
            }
            sub="Pick the sentence that sounds most like you."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-3">
              {solutionsHubContent.whichOneFitsYou.map((o, i) => (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => setPick(i)}
                  aria-pressed={pick === i}
                  className={`w-full rounded-2xl p-5 text-left text-[16px] leading-relaxed transition-all ${
                    pick === i ? 'bg-ink text-white shadow-lift' : 'bg-canvas text-ink hover:bg-hover'
                  }`}
                >
                  “{o.situation}”
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={fit.id}
                initial={{ opacity: 0, y: 12, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: 1.5 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Sticky tone="butter" pin className="p-8">
                  <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink/55">Start with</div>
                  <h3 className="display mt-3 text-[34px]">{fit.recommendationTitle}</h3>
                  <p className="mt-4 text-[15.5px] leading-relaxed text-ink/80">{fit.explanation}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Btn variant="dark" arrow to={fit.recommendationSlug}>
                      Take a look
                    </Btn>
                    <Btn variant="light" onClick={openBookCall}>
                      Book a call
                    </Btn>
                  </div>
                </Sticky>
              </motion.div>
            </AnimatePresence>
          </div>
          <Hand className="mt-12 text-center text-[24px]">still unsure? just ask us on a call</Hand>
        </div>
      </section>
    </>
  );
};

export default SolutionsHubPage;
