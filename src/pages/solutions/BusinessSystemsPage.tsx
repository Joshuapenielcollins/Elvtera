import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Zap } from 'lucide-react';
import { SEOHead } from '../../components/layout/SEOHead';
import { businessSystemsContent, launchContent } from '../../data/solutionsData';
import { openBookCall } from '../../utils/analytics';
import { Btn } from '../../components/kit/Btn';
import { Window } from '../../components/kit/Window';
import { Drag, Hand, Mark, Reveal, SectionHead, SectionLabel, Sticky, useCanDrag } from '../../components/kit/Paper';
import { CTABand, Cursor } from '../../components/kit/Bits';
import { FAQ } from '../../components/home/Closing';

/* ───────── The three things we build ───────── */

const offers = [
  {
    id: 'websites',
    tag: 'Websites',
    title: 'Websites that book calls',
    body: 'A modern, conversion-focused B2B site that builds trust and walks visitors to a booked discovery call.',
    points: ['Positioning and page copy', 'Design and build', 'Booking and lead capture wired in', 'Fast, responsive, search-ready'],
    tone: 'sky' as const,
  },
  {
    id: 'systems',
    tag: 'Sales systems',
    title: 'Pipelines & automation',
    body: businessSystemsContent.hero.subtitle,
    points: businessSystemsContent.whatIsIncluded.map((i) => i.title),
    tone: 'butter' as const,
  },
  {
    id: 'launch',
    tag: 'End-to-end',
    title: 'Full business setup',
    body: launchContent.hero.subtitle,
    points: launchContent.roadmap.map((r) => r.title),
    tone: 'mint' as const,
  },
];

/* ───────── Hero visuals (illustrative client work) ───────── */

const SiteMock: React.FC = () => (
  <Window url="northpeak-advisory.com" bodyClassName="bg-cream">
    <div className="flex items-center justify-between px-5 py-3 text-[10.5px]">
      <span className="flex items-center gap-1.5 font-semibold text-ink">
        <span className="h-3.5 w-3.5 rounded-[4px] bg-[#1f3d2b]" /> Northpeak
      </span>
      <span className="hidden gap-3 text-slate sm:flex">
        <span>Services</span>
        <span>Work</span>
        <span>About</span>
      </span>
      <span className="rounded-full bg-[#1f3d2b] px-2.5 py-1 text-[9.5px] font-medium text-white">Book a call</span>
    </div>
    <div className="px-5 pb-5 pt-3">
      <div className="font-mono text-[8.5px] uppercase tracking-[0.12em] text-[#1f3d2b]/70">Operations advisory</div>
      <div className="display mt-1.5 text-[24px] leading-[1.05] text-ink">
        Run a calmer, <span className="accent text-[#1f3d2b]">faster</span> logistics business.
      </div>
      <p className="mt-2 text-[10.5px] leading-relaxed text-slate">We help growing fleets fix dispatch, routing and reporting in 90 days.</p>
      <div className="mt-3 flex gap-1.5">
        <span className="rounded-full bg-[#1f3d2b] px-3 py-1.5 text-[9.5px] font-medium text-white">Book a 20-min call</span>
        <span className="rounded-full px-3 py-1.5 text-[9.5px] font-medium text-ink ring-1 ring-ink/15">See our work</span>
      </div>
      <div className="mt-4 h-20 rounded-lg bg-[radial-gradient(120%_120%_at_0%_0%,#c9e3d1_0%,#5d8f6d_55%,#1f3d2b_100%)]" />
    </div>
  </Window>
);

const deals: Record<string, [string, string][]> = {
  Inbound: [
    ['Acme Freight', '$8.4k'],
    ['Bluepine Dental', '$5.0k'],
    ['Orbit Staffing', '$6.2k'],
  ],
  Contacted: [
    ['Northwind Labs', '$12k'],
    ['Crestview Media', '$9.5k'],
  ],
  Call: [['Beacon Health', '$15k']],
  Won: [['Apex Cloud', '$24k']],
};

const PipelineMock: React.FC = () => (
  <Window title="Pipeline · Q4" bodyClassName="grid grid-cols-4 gap-2 p-3">
    {Object.entries(deals).map(([col, list]) => (
      <div key={col} className="space-y-1.5">
        <div className="flex items-center justify-between px-0.5 text-[9.5px] font-medium text-slate">
          {col}
          <span className="text-ash">{list.length}</span>
        </div>
        {list.map(([n, v]) => (
          <div key={n} className={`rounded-lg p-2 shadow-[0_1px_2px_rgb(0_0_0/0.06)] ${col === 'Won' ? 'bg-mint' : 'bg-paper ring-1 ring-line'}`}>
            <div className="truncate text-[10px] font-semibold">{n}</div>
            <div className="mt-0.5 flex items-center justify-between text-[9px] text-slate">
              {v}
              <span className="h-3 w-3 rounded-full bg-sky" />
            </div>
          </div>
        ))}
      </div>
    ))}
  </Window>
);

const FlowMock: React.FC = () => (
  <Window title="Automation · New lead" bodyClassName="p-3">
    {[
      ['⚡', 'Form submitted on website', 'Trigger', 'bg-butter'],
      ['✉', 'Reply sent with details', 'in under 60s', 'bg-blue text-white'],
      ['⏱', 'No reply in 1 day? Follow up', 'Up to 5 touches', 'bg-lilac'],
      ['📅', 'Meeting booked on calendar', 'Stops when they reply', 'bg-mint'],
    ].map(([icon, label, sub, c], i, arr) => (
      <div key={label}>
        <div className="flex items-center gap-2.5 rounded-xl bg-paper p-2 ring-1 ring-line">
          <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg text-[12px] ${c}`}>{icon}</span>
          <div className="min-w-0">
            <div className="truncate text-[11px] font-semibold">{label}</div>
            <div className="text-[9.5px] text-slate">{sub}</div>
          </div>
        </div>
        {i < arr.length - 1 && <div className="ml-[22px] h-3 w-px bg-line-2" />}
      </div>
    ))}
  </Window>
);

const HeroDesk: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const canDrag = useCanDrag();
  if (!canDrag) {
    return (
      <div className="mx-auto mt-10 grid max-w-md gap-5 px-1">
        <SiteMock />
        <PipelineMock />
        <FlowMock />
      </div>
    );
  }
  return (
    <div ref={ref} className="relative mx-auto mt-12 h-[500px] max-w-6xl">
      <Drag constraints={ref} rotate={-2} className="absolute left-[2%] top-[4%] w-[340px]">
        <SiteMock />
      </Drag>
      <Drag constraints={ref} rotate={1.5} className="absolute left-[34%] top-[22%] w-[420px]">
        <PipelineMock />
      </Drag>
      <Drag constraints={ref} rotate={3} className="absolute right-[2%] top-[0%] w-[260px]">
        <FlowMock />
      </Drag>
      <Drag constraints={ref} rotate={-5} className="absolute right-[8%] top-[74%] w-[190px]">
        <Sticky tone="butter" pin>
          <p className="font-hand text-[22px] leading-tight text-ink">no lead waits more than a minute</p>
        </Sticky>
      </Drag>
      <Cursor name="You" className="left-[30%] top-[8%]" path={[[0, 0], [30, 14], [-10, -6], [0, 0]]} duration={10} />
      <Hand arrow="left" className="absolute left-[4%] top-[88%] -rotate-3">
        drag these around
      </Hand>
    </div>
  );
};

/* ───────── Page ───────── */

export const BusinessSystemsPage: React.FC = () => {
  const faqs = [...businessSystemsContent.faqs, ...launchContent.faqs];

  return (
    <>
      <SEOHead
        title="Business Systems & Websites"
        description="Websites, sales pipelines, speed-to-lead automation and end-to-end business setup. Built inside your existing tools or from scratch."
        canonicalPath="/solutions/business-systems"
      />

      {/* Hero */}
      <section className="glow relative overflow-hidden pb-12 pt-28 sm:pt-32">
        <div className="desk-grid absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-paper/80 py-1 pl-1 pr-3.5 text-[12.5px] text-slate shadow-card ring-1 ring-line"
          >
            <span className="rounded-full bg-ink px-2 py-0.5 text-[11px] font-medium text-white">Service 02</span>
            Business systems &amp; websites
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="display mx-auto mt-7 max-w-4xl text-[clamp(48px,7.6vw,100px)]"
          >
            The systems <Mark color="var(--color-mint)"><span className="accent">behind</span></Mark> the sales.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-[clamp(16px,1.45vw,19px)] leading-relaxed text-slate"
          >
            Websites, sales pipelines, follow-up automation and full business setups. We build inside the tools you
            already use, or set everything up from scratch.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Btn size="lg" variant="dark" onClick={openBookCall}>
              Book a call
            </Btn>
            <Btn size="lg" variant="ghost" href="#offers">
              See what we build
            </Btn>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <HeroDesk />
        </motion.div>
      </section>

      {/* Offers */}
      <section id="offers" className="scroll-mt-24 bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel n="01" note="Pick a piece, or all of it">
            What we build
          </SectionLabel>
          <SectionHead
            className="mt-10"
            title={
              <>
                Three ways in. <span className="accent text-blue">One team.</span>
              </>
            }
            sub="Pick the piece you're missing, or let us set up the whole thing."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {offers.map((o, i) => (
              <Reveal key={o.id} delay={i * 0.06}>
                <div id={o.id} className="flex h-full scroll-mt-28 flex-col rounded-[24px] bg-paper p-2 shadow-card ring-1 ring-line transition-shadow hover:shadow-float">
                  <Sticky tone={o.tone} tape={false} className="min-h-[180px] rounded-[18px] p-6">
                    <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink/55">0{i + 1} · {o.tag}</span>
                    <h3 className="display mt-8 text-[clamp(28px,2.8vw,36px)]">{o.title}</h3>
                  </Sticky>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[15px] leading-relaxed text-slate">{o.body}</p>
                    <ul className="mt-5 space-y-2.5">
                      {o.points.map((p) => (
                        <li key={p} className="flex gap-2.5 text-[14.5px] text-ink">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue" /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why leads go cold */}
      <section className="desk-grid-dark bg-ink py-16 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel n="02" dark>
            Where deals leak
          </SectionLabel>
          <SectionHead
            dark
            className="mt-10"
            title={
              <>
                Most leads don't say no. <span className="accent text-blue-soft">They go cold.</span>
              </>
            }
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {businessSystemsContent.whyLeadsGoCold.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl bg-white/[0.05] p-7 ring-1 ring-white/10">
                  <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/40">{w.title}</div>
                  <p className="mt-6 font-serif text-[30px] italic leading-[1.1] text-white">{w.stat}</p>
                  <p className="mt-5 text-[15px] leading-relaxed text-white/60">{w.explanation}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Speed to lead flow */}
          <Reveal className="mt-14">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-white/50">
              <Zap className="h-3.5 w-3.5 text-butter" /> Speed-to-lead, the way we wire it
            </div>
            <ol className="mt-6 grid gap-3 md:grid-cols-4">
              {businessSystemsContent.speedToLeadFlow.map((s, i) => (
                <li key={s.step} className="relative rounded-2xl bg-white p-5 text-ink">
                  <span className="font-mono text-[12px] text-blue">{s.step}</span>
                  <div className="mt-3 text-[16px] font-semibold leading-snug tracking-[-0.01em]">{s.label}</div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate">{s.note}</p>
                  {i < 3 && (
                    <span className="absolute -right-2.5 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 place-items-center rounded-full bg-blue text-[10px] text-white md:grid" aria-hidden="true">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Stack */}
      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel n="03">Your tools or ours</SectionLabel>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <SectionHead
            title={
              <>
                We work inside your stack, <span className="accent text-blue">or build it fresh.</span>
              </>
            }
            sub={businessSystemsContent.pipelineFlexibility.description}
          />
          <Reveal delay={0.1}>
            <div className="desk-grid relative rounded-3xl bg-canvas p-8 ring-1 ring-line sm:p-10">
              <div className="flex flex-wrap gap-3">
                {['HubSpot', 'Salesforce', 'Pipedrive', 'Close', 'Cal.com', 'Google Calendar', 'Gmail', 'Outlook'].map((t, i) => (
                  <span
                    key={t}
                    className="rounded-full bg-paper px-4 py-2 text-[15px] font-medium shadow-card ring-1 ring-line"
                    style={{ transform: `rotate(${[-2, 1, -1, 2, 0, -2, 1, -1][i]}deg)` }}
                  >
                    {t}
                  </span>
                ))}
                <span className="rounded-full bg-blue px-4 py-2 text-[15px] font-medium text-white">+ a fresh setup if you have none</span>
              </div>
              <Hand className="mt-8 text-[24px]">we work with what's already there</Hand>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Launch roadmap */}
      <section id="launch-plan" className="desk-grid bg-canvas py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel n="04" note={launchContent.hero.eyebrow}>
            End-to-end launch
          </SectionLabel>
          <div className="mt-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHead
              title={
                <>
                  From idea to <span className="accent text-blue">first paying clients.</span>
                </>
              }
              sub="For founders launching a consulting or service business. Four weeks, one team, everything set up."
            />
            <Link to="/solutions/launch" className="inline-flex shrink-0 items-center gap-1.5 text-[15px] font-medium text-ink underline underline-offset-4">
              Full launch plan <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {launchContent.roadmap.map((r, i) => (
              <Reveal key={r.stage} delay={i * 0.06}>
                <Window title={r.timing.toLowerCase()} className="h-full" bodyClassName="p-6">
                  <span className="font-serif text-[44px] italic leading-none text-blue">{r.stage}</span>
                  <h3 className="mt-4 text-[18px] font-semibold leading-snug tracking-[-0.01em]">{r.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-slate">{r.summary}</p>
                  <p className="mt-4 font-hand text-[20px] leading-tight text-ink">→ {r.deliverable}</p>
                </Window>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Reveal>
              <Sticky tone="sky" pin className="-rotate-1 p-7">
                <h3 className="font-hand text-[32px] leading-none">We handle</h3>
                <ul className="mt-5 space-y-3">
                  {launchContent.whatWeHandleVsYou.weHandle.map((x) => (
                    <li key={x} className="flex gap-2.5 text-[15px] leading-snug">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue" /> {x}
                    </li>
                  ))}
                </ul>
              </Sticky>
            </Reveal>
            <Reveal delay={0.08}>
              <Sticky tone="paper" pin className="rotate-1 p-7">
                <h3 className="font-hand text-[32px] leading-none">You handle</h3>
                <ul className="mt-5 space-y-3">
                  {launchContent.whatWeHandleVsYou.youHandle.map((x) => (
                    <li key={x} className="flex gap-2.5 text-[15px] leading-snug text-ink/80">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink/40" /> {x}
                    </li>
                  ))}
                </ul>
              </Sticky>
            </Reveal>
          </div>
        </div>
      </section>

      <FAQ items={faqs} n="05" />

      <CTABand
        quote="Tell us what you have and what's missing. We'll map the setup with you on a 30-minute call."
        title={
          <>
            Let's fix the <span className="accent font-normal text-blue-soft">leaks.</span>
          </>
        }
        secondary={{ label: 'See our outbound service', to: '/' }}
      />
    </>
  );
};

export default BusinessSystemsPage;
