import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { processStepsContent } from '../../data/homeData';
import { SectionHead, SectionLabel } from '../kit/Paper';
import { StepCalendar, StepCompose, StepICP, StepQualify, StepSignals } from '../kit/Mocks';

const mocks = [StepICP, StepSignals, StepCompose, StepQualify, StepCalendar];

export const Process: React.FC = () => {
  const [active, setActive] = useState(0);
  const Mock = mocks[active];

  return (
    <section id="how" className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionLabel n="03" note="Live in 10 to 14 days">
          How we do it
        </SectionLabel>
        <SectionHead
          className="mt-10"
          title={
            <>
              Five steps from signal <span className="accent text-blue">to booked call.</span>
            </>
          }
          sub="We do the research, the writing, the sending and the follow-up. You approve the targeting and every message before anything goes out, then show up to the calls."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <ol className="relative min-w-0">
            <span className="absolute bottom-8 left-[15px] top-8 w-px bg-line" aria-hidden="true" />
            {processStepsContent.map((s, i) => (
              <motion.li
                key={s.step}
                onViewportEnter={() => setActive(i)}
                viewport={{ margin: '-48% 0px -48% 0px' }}
                className="relative flex gap-4 py-8 sm:gap-6 lg:min-h-[44vh]"
              >
                <span
                  className={`relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full font-mono text-[12px] transition-all duration-300 ${
                    active === i ? 'bg-ink text-white shadow-[0_0_0_6px_var(--color-paper)]' : 'bg-paper text-slate ring-1 ring-line-2'
                  }`}
                >
                  {s.step}
                </span>
                <div className={`min-w-0 flex-1 transition-opacity duration-300 ${active === i ? 'opacity-100' : 'lg:opacity-40'}`}>
                  <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-ash">{s.subtitle}</div>
                  <h3 className="display mt-2 text-[clamp(28px,2.8vw,38px)]">{s.title}</h3>
                  <p className="mt-3 max-w-md text-[16px] leading-relaxed text-slate">{s.description}</p>
                  <p className="mt-4 font-hand text-[22px] leading-tight text-blue">→ {s.actionText}</p>
                  {/* On small screens the mock sits under each step */}
                  <div className="mt-6 lg:hidden">{React.createElement(mocks[i])}</div>
                </div>
              </motion.li>
            ))}
          </ol>

          <div className="hidden lg:block">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16, rotate: -0.6 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <Mock />
                </motion.div>
              </AnimatePresence>
              <div className="mt-5 flex justify-center gap-1.5" aria-hidden="true">
                {mocks.map((_, i) => (
                  <span key={i} className={`h-1.5 rounded-full transition-all ${i === active ? 'w-6 bg-ink' : 'w-1.5 bg-line-2'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
