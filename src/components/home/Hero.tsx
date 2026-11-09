import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { heroContent } from '../../data/homeData';
import { openBookCall, openPilotApply } from '../../utils/analytics';
import { Btn } from '../kit/Btn';
import { Drag, Mark, useCanDrag, useMedia } from '../kit/Paper';
import { Cursor } from '../kit/Bits';
import { AppWindow } from '../kit/AppDemo';
import { WidgetBooked, WidgetICP, WidgetReply, WidgetSignals } from '../kit/Mocks';

const howSteps = [
  ['We spot the signal', 'Hiring, funding, new leaders, tech changes.'],
  ['We reach out for you', 'A short, personal note. You approve it.'],
  ['You take the call', 'Qualified, with a briefing note.'],
];

export const Hero: React.FC = () => {
  const area = useRef<HTMLDivElement>(null);
  const shot = useRef<HTMLDivElement>(null);
  const canDrag = useCanDrag();
  // The floating cards need room either side of the headline.
  const wide = useMedia('(min-width: 1280px)');

  // The product window tilts back and straightens as it scrolls into view.
  const { scrollYProgress } = useScroll({ target: shot, offset: ['start end', 'start 35%'] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [14, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);

  return (
    <section className="glow relative overflow-hidden pb-16 pt-24 sm:pt-28">
      <div className="desk-grid absolute inset-0 opacity-70" aria-hidden="true" />

      {/* Headline area with floating widgets */}
      <div ref={area} className="relative mx-auto max-w-[1320px] px-5">
        {canDrag && wide && (
          <>
            <Drag constraints={area} rotate={-4} className="absolute left-[1%] top-[4%]">
              <WidgetSignals />
            </Drag>
            <Drag constraints={area} rotate={3} className="absolute right-[1%] top-[2%]">
              <WidgetReply />
            </Drag>
            <Drag constraints={area} rotate={2} className="absolute bottom-[6%] left-[2%]">
              <WidgetICP />
            </Drag>
            <Drag constraints={area} rotate={-3} className="absolute bottom-[10%] right-[2%]">
              <WidgetBooked />
            </Drag>
            <Cursor name="You" className="right-[13%] top-[44%]" path={[[0, 0], [-24, 16], [10, -10], [0, 0]]} duration={11} />
            <Cursor name="Elvtera" color="#7c3aed" className="left-[12%] top-[52%]" path={[[0, 0], [22, -16], [-8, 10], [0, 0]]} duration={9} />
          </>
        )}

        <div className="relative mx-auto max-w-4xl pb-10 pt-6 text-center lg:pb-14 lg:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-paper/80 py-1 pl-1 pr-3.5 text-[12.5px] text-slate shadow-card ring-1 ring-line backdrop-blur"
          >
            <span className="rounded-full bg-blue px-2 py-0.5 text-[11px] font-medium text-white">B2B</span>
            Done-for-you, signal-based outbound
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.2, 0.8, 0.2, 1] }}
            className="display mx-auto mt-6 max-w-[17ch] text-[clamp(42px,6.4vw,88px)] text-ink"
          >
            We only contact people who are{' '}
            <Mark>
              <span className="accent">already looking</span>
            </Mark>{' '}
            for what you sell.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-6 max-w-[38rem] text-[clamp(16px,1.4vw,18.5px)] leading-relaxed text-slate"
          >
            Bought lists and mass emails burn your domain and fill your calendar with people who were never buying. We
            watch for real buying signals, reach out to the companies that fit your ideal customer, and book the
            qualified ones on your calendar. <span className="text-ink">No ad spend.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Btn size="lg" variant="dark" onClick={openBookCall}>
              Book a call
            </Btn>
            <Btn size="lg" variant="ghost" onClick={() => openPilotApply()}>
              {heroContent.ctaPilotText}
            </Btn>
          </motion.div>

          {/* How it works, in one glance */}
          <motion.ol
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-10 grid max-w-3xl gap-2 text-left sm:grid-cols-3"
          >
            {howSteps.map(([t, d], i) => (
              <li key={t} className="flex gap-3 rounded-2xl bg-paper/70 p-3.5 ring-1 ring-line backdrop-blur">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink font-mono text-[11px] text-white">{i + 1}</span>
                <div>
                  <div className="text-[14px] font-semibold leading-tight">{t}</div>
                  <div className="mt-0.5 text-[12.5px] leading-snug text-slate">{d}</div>
                </div>
              </li>
            ))}
          </motion.ol>
        </div>
      </div>

      {/* Product window */}
      <div ref={shot} className="relative mx-auto mt-6 max-w-6xl px-4 [perspective:1600px]">
        <motion.div style={{ rotateX, scale, transformOrigin: 'center top' }}>
          <AppWindow />
        </motion.div>
        <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-ash">
          Sample workspace · {heroContent.footnote}
        </p>
      </div>
    </section>
  );
};
