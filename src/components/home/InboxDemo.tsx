import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Calendar, CalendarCheck2, Check, ExternalLink, Mail, Radar, Send, Sparkles } from 'lucide-react';
import { sampleThreads } from '../../data/homeData';
import { CONTACT_EMAIL } from '../../data/siteConfig';
import { openBookCall } from '../../utils/analytics';
import { CalEmbed } from '../booking/CalEmbed';
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
  const [view, setView] = useState<'demo' | 'book'>('demo');
  const [id, setId] = useState(sampleThreads[0].id);
  const t = sampleThreads.find((x) => x.id === id) ?? sampleThreads[0];

  useEffect(() => {
    const checkHash = () => {
      const h = window.location.hash.toLowerCase();
      if (h === '#book' || h === '#book-a-call' || h === '#booking' || h === '#schedule') {
        setView('book');
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  return (
    <section id="book-a-call" className="desk-grid-dark relative overflow-hidden bg-ink py-16 text-white sm:py-24">
      {/* Anchor for #book links */}
      <span id="book" className="absolute -top-24" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-5">
        <SectionLabel n="04" note="Live demo & booking" dark>
          What your prospects see
        </SectionLabel>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHead
            dark
            className="max-w-2xl"
            title={
              <>
                Every message starts with <span className="accent text-blue-soft">their signal.</span>
              </>
            }
            sub="No templates sprayed at a list. Each person gets a short note about what they just did, from a real sender. Pick a thread to see how it plays out — or book a call directly."
          />

          {/* Mode Switcher Tabs */}
          <div className="inline-flex shrink-0 items-center rounded-full bg-white/[0.08] p-1.5 ring-1 ring-white/15 backdrop-blur">
            <button
              type="button"
              onClick={() => setView('demo')}
              aria-pressed={view === 'demo'}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium transition-all ${
                view === 'demo'
                  ? 'bg-white text-ink shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Radar className="h-3.5 w-3.5" />
              <span>What prospects see</span>
            </button>
            <button
              type="button"
              onClick={() => setView('book')}
              aria-pressed={view === 'book'}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium transition-all ${
                view === 'book'
                  ? 'bg-blue text-white shadow-md shadow-blue/30'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Calendar className="h-3.5 w-3.5 text-[#7ee2a8]" />
              <span>Book a call</span>
            </button>
          </div>
        </div>

        <Reveal className="mt-12">
          <Window
            dark
            title={
              <div className="flex items-center gap-2">
                <span>elvtera · outbound inbox</span>
                {view === 'book' && (
                  <span className="rounded-full bg-blue/20 px-2 py-0.5 font-mono text-[10px] text-blue-soft">
                    booking calendar
                  </span>
                )}
              </div>
            }
            meta={
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-white/50">
                <span className="inline-block h-2 w-2 rounded-full bg-[#7ee2a8] animate-pulse" />
                <span>Live</span>
              </div>
            }
            bodyClassName="grid md:grid-cols-[270px_1fr]"
          >
            {/* Thread & Booking list sidebar */}
            <div className="no-scrollbar flex gap-2 overflow-x-auto border-b border-white/10 p-2 md:block md:space-y-1.5 md:border-b-0 md:border-r">
              <div className="hidden px-3 pb-2 pt-1 font-mono text-[10px] uppercase tracking-wider text-white/40 md:block">
                Sample prospect threads
              </div>

              {sampleThreads.map((x) => (
                <button
                  key={x.id}
                  type="button"
                  onClick={() => {
                    setId(x.id);
                    setView('demo');
                  }}
                  aria-pressed={view === 'demo' && x.id === id}
                  className={`w-[220px] shrink-0 rounded-xl p-3 text-left transition-colors md:w-full ${
                    view === 'demo' && x.id === id ? 'bg-white/10 ring-1 ring-white/15' : 'hover:bg-white/5'
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

              {/* Dedicated "Book a Call with Us" card */}
              <div className="shrink-0 md:pt-3 md:mt-3 md:border-t md:border-white/10">
                <button
                  type="button"
                  onClick={() => setView('book')}
                  aria-pressed={view === 'book'}
                  className={`w-[220px] shrink-0 rounded-xl p-3 text-left transition-all md:w-full ${
                    view === 'book'
                      ? 'bg-blue text-white shadow-lg shadow-blue/20 ring-1 ring-white/20'
                      : 'bg-white/[0.06] hover:bg-white/10 text-white/90 border border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5 text-[13.5px] font-semibold text-white">
                      <Calendar className="h-3.5 w-3.5 text-[#7ee2a8]" /> Book a call
                    </span>
                    <span
                      className={`shrink-0 rounded-md px-1.5 py-0.5 font-mono text-[9px] font-medium uppercase ${
                        view === 'book' ? 'bg-white/20 text-white' : 'bg-blue/30 text-blue-soft'
                      }`}
                    >
                      With us
                    </span>
                  </div>
                  <div className={`mt-0.5 text-[12px] ${view === 'book' ? 'text-white/80' : 'text-white/60'}`}>
                    30 min · Strategy & Live Signals
                  </div>
                  <div
                    className={`mt-1.5 flex items-center gap-1 text-[11px] font-medium ${
                      view === 'book' ? 'text-white' : 'text-[#7ee2a8]'
                    }`}
                  >
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#7ee2a8] animate-pulse" />
                    Google Meet · Pick a slot
                  </div>
                </button>
              </div>

              <div className="hidden px-3 pt-4 font-mono text-[10px] text-white/30 md:block">
                Illustrative threads. Not real clients.
              </div>
            </div>

            {/* Right Pane: Thread View or Book a Call View */}
            <div className="min-h-[520px] p-5 sm:p-7">
              {/* Thread View */}
              <div className={view === 'demo' ? 'block' : 'hidden'}>
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

                      {/* Immediate conversion banner */}
                      <div className="mt-5 flex flex-col items-start justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 sm:flex-row sm:items-center">
                        <div>
                          <div className="flex items-center gap-1.5 text-[13.5px] font-semibold text-white">
                            <Sparkles className="h-3.5 w-3.5 text-[#7ee2a8]" />
                            Want qualified buyers like {t.person.split(' ')[0]} on your calendar?
                          </div>
                          <div className="mt-0.5 text-[12px] text-white/60">
                            We show you live buying signals for your specific offer on a 30-min proof call.
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setView('book')}
                          className="inline-flex items-center gap-1.5 rounded-full bg-blue px-4 py-2 text-[13px] font-semibold text-white shadow-md transition-all hover:bg-blue/90 active:scale-[0.98] shrink-0"
                        >
                          <Calendar className="h-3.5 w-3.5" />
                          <span>Book a call with us</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </Step>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Book a Call View */}
              <div className={view === 'book' ? 'block' : 'hidden'}>
                <div className="space-y-6">
                  {/* Booking Intro Header */}
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue/30 bg-blue/15 px-3 py-1 font-mono text-[11.5px] text-blue-soft">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>30-minute intro call · Google Meet</span>
                    </div>

                    <h3 className="mt-3 text-[clamp(22px,2.4vw,32px)] font-semibold tracking-[-0.02em] text-white">
                      Pick a time for your strategy call
                    </h3>
                    <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-white/70">
                      We'll bring 5–10 real companies currently showing buying intent for your offer, and walk you
                      through how our done-for-you outbound system puts qualified calls on your calendar.
                    </p>

                    {/* 3 Value Pillars */}
                    <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
                      <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                        <div className="flex items-center gap-1.5 text-[12px] font-medium text-[#7ee2a8]">
                          <Check className="h-3.5 w-3.5" /> Live Signal Audit
                        </div>
                        <div className="mt-1 text-[12.5px] text-white/70">
                          See real buyers in your market before you commit to anything.
                        </div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                        <div className="flex items-center gap-1.5 text-[12px] font-medium text-[#7ee2a8]">
                          <Check className="h-3.5 w-3.5" /> 100% No Pitch Deck
                        </div>
                        <div className="mt-1 text-[12.5px] text-white/70">
                          A pragmatic teardown of your ICP, copy angles, and deliverability.
                        </div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                        <div className="flex items-center gap-1.5 text-[12px] font-medium text-[#7ee2a8]">
                          <Check className="h-3.5 w-3.5" /> Zero Obligation
                        </div>
                        <div className="mt-1 text-[12.5px] text-white/70">
                          Decide if our no-risk 14-day pilot makes sense for your team.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Calendar Embed */}
                  <div className="pt-2">
                    <CalEmbed
                      elementId="inbox-demo-cal-embed"
                      theme="dark"
                      minHeight="640px"
                    />
                  </div>

                  {/* Direct Contact Bar */}
                  <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 text-[12.5px] text-white/50 sm:flex-row">
                    <span>
                      Can't find a time that works? Email us directly at{' '}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-white underline decoration-white/30 underline-offset-4">
                        {CONTACT_EMAIL}
                      </a>
                    </span>
                    <button
                      type="button"
                      onClick={openBookCall}
                      className="inline-flex items-center gap-1 text-blue-soft hover:underline"
                    >
                      Open in separate tab <ExternalLink className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Window>
        </Reveal>

        <Hand className="mt-6 text-center text-[24px] text-blue-soft md:hidden">sample threads, not real clients</Hand>
      </div>
    </section>
  );
};
