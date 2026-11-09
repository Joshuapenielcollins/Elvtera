import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarCheck2, Check, Radar, Send } from 'lucide-react';
import { sampleThreads } from '../../data/homeData';
import { Hand, Reveal, SectionHead, SectionLabel } from '../kit/Paper';
import { Window } from '../kit/Window';

const Step: React.FC<{ icon: React.ReactNode; label: string; children: React.ReactNode; last?: boolean }> = ({
  icon,
  label,
  children,
  last,
}) => (
  <div className="relative flex gap-4">
    {!last && <span className="absolute left-[15px] top-9 bottom-0 w-px bg-white/10" aria-hidden="true" />}
    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-white/80">{icon}</span>
    <div className="min-w-0 flex-1 pb-6">
      <div className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-white/40">{label}</div>
      <div className="mt-2">{children}</div>
    </div>
  </div>
);

export const InboxDemo: React.FC = () => {
  const [id, setId] = useState(sampleThreads[0].id);
  const t = sampleThreads.find((x) => x.id === id) ?? sampleThreads[0];

  return (
    <section className="desk-grid-dark relative overflow-hidden bg-ink py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionLabel n="04" note="Click a thread" dark>
          What your prospects see
        </SectionLabel>
        <SectionHead
          dark
          className="mt-10"
          title={
            <>
              Every message starts with <span className="accent text-blue-soft">their signal.</span>
            </>
          }
          sub="No templates sprayed at a list. Each person gets a short note about what they just did, from a real sender. Pick a thread to see how it plays out."
        />

        <Reveal className="mt-14">
          <Window dark title="elvtera · outbound inbox" bodyClassName="grid md:grid-cols-[260px_1fr]">
            {/* Thread list */}
            <div className="no-scrollbar flex gap-2 overflow-x-auto border-b border-white/10 p-2 md:block md:space-y-1 md:border-b-0 md:border-r">
              {sampleThreads.map((x) => (
                <button
                  key={x.id}
                  type="button"
                  onClick={() => setId(x.id)}
                  aria-pressed={x.id === id}
                  className={`w-[220px] shrink-0 rounded-xl p-3 text-left transition-colors md:w-full ${
                    x.id === id ? 'bg-white/10' : 'hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-[13.5px] font-medium">{x.person}</span>
                    <span className="shrink-0 rounded-md bg-white/10 px-1.5 py-0.5 font-mono text-[9.5px] text-white/60">
                      {x.signalTag}
                    </span>
                  </div>
                  <div className="mt-0.5 truncate text-[12px] text-white/50">
                    {x.role}, {x.company}
                  </div>
                  <div className="mt-1.5 flex items-center gap-1 text-[11.5px] text-[#7ee2a8]">
                    <CalendarCheck2 className="h-3 w-3" /> {x.booked}
                  </div>
                </button>
              ))}
              <div className="hidden px-3 pt-4 font-mono text-[10px] text-white/30 md:block">
                Illustrative threads. Not real clients.
              </div>
            </div>

            {/* Thread view */}
            <div className="min-h-[520px] p-5 sm:p-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <Step icon={<Radar className="h-4 w-4" />} label="Signal spotted">
                    <p className="text-[15px] leading-relaxed text-white/85">{t.signal}</p>
                  </Step>
                  <Step icon={<Send className="h-4 w-4" />} label={`Sent after your approval · "${t.subject}"`}>
                    <p className="rounded-xl rounded-tl-sm bg-white/[0.06] p-4 text-[14.5px] leading-relaxed text-white/80">
                      {t.outbound}
                    </p>
                  </Step>
                  <Step icon={<span className="text-[12px]">↩</span>} label="Reply">
                    <p className="ml-auto max-w-[90%] rounded-xl rounded-tr-sm bg-blue p-4 text-[14.5px] leading-relaxed">
                      {t.reply}
                    </p>
                  </Step>
                  <Step icon={<Check className="h-4 w-4" />} label="Qualified by our team">
                    <div className="grid gap-2 sm:grid-cols-3">
                      {t.checks.map((c) => (
                        <div key={c.label} className="rounded-xl bg-white/[0.06] p-3">
                          <div className="flex items-center gap-1.5 text-[12px] text-[#7ee2a8]">
                            <Check className="h-3.5 w-3.5" /> {c.label}
                          </div>
                          <div className="mt-1 text-[13px] text-white/80">{c.value}</div>
                        </div>
                      ))}
                    </div>
                  </Step>
                  <Step icon={<CalendarCheck2 className="h-4 w-4" />} label="On your calendar" last>
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#7ee2a8] px-4 py-2 text-[14px] font-medium text-ink">
                      {t.booked} · {t.person}, with briefing notes
                    </div>
                  </Step>
                </motion.div>
              </AnimatePresence>
            </div>
          </Window>
        </Reveal>

        <Hand className="mt-6 text-center text-[24px] text-blue-soft md:hidden">sample threads, not real clients</Hand>
      </div>
    </section>
  );
};
