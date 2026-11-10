import React from 'react';
import { Globe, Laptop, Target, Users } from 'lucide-react';
import { SEOHead } from '../../components/layout/SEOHead';
import { CalEmbed } from '../../components/booking/CalEmbed';
import { NumberDot, PageHero } from '../../components/kit/Bits';
import { Hand, Reveal, SectionLabel, Sticky } from '../../components/kit/Paper';

const prep = [
  { icon: Globe, text: 'Have your website open, so we can look at your positioning together.' },
  { icon: Target, text: 'Write down your ideal customer: company size, industry and buyer roles.' },
  { icon: Users, text: "Think of 2–3 dream customers you'd like on your calendar this quarter." },
  { icon: Laptop, text: 'Join from a laptop so we can share our screen and show you live signals.' },
];

const steps = [
  ['Proof call (45 min)', 'We show you real companies showing buying signals for your offer.'],
  ['Setup in 48 hours', 'We set up sending infrastructure and draft messages for your approval.'],
  ['Outreach goes live', 'We contact people across multiple channels and handle replies.'],
  ['Reports on day 7 and day 14', 'Who we contacted, who replied, and what was booked.'],
];

export const PilotBookPage: React.FC = () => (
  <>
    <SEOHead
      title="Book Your Proof Call"
      description="Pick a time for your proof call. See real buying signals for your offer, live on screen."
      canonicalPath="/book"
    />

    <PageHero
      label="Pilot · Proof call"
      title={
        <>
          Pick a time. <span className="accent text-blue">We'll bring the prospects.</span>
        </>
      }
      sub="On the call we show you real businesses showing buying signals for what you sell, before you commit to anything."
    />

    <section className="bg-canvas pb-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="overflow-hidden rounded-[22px] bg-paper p-4 shadow-app sm:p-6">
          <CalEmbed minHeight="680px" />
        </div>
        <div>
          <Sticky tone="butter" pin className="-rotate-1 p-7">
            <h2 className="font-hand text-[30px] leading-none">Before the call</h2>
            <ul className="mt-5 space-y-4">
              {prep.map(({ icon: Icon, text }) => (
                <li key={text} className="flex gap-3 text-[15px] leading-snug">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-ink/60" /> {text}
                </li>
              ))}
            </ul>
          </Sticky>
          <Hand className="mt-8 text-[22px]">that's all. we do the rest.</Hand>
        </div>
      </div>
    </section>

    <section className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionLabel n="01">What happens next</SectionLabel>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.05}>
              <div className="h-full rounded-[20px] bg-paper p-6 shadow-card ring-1 ring-line">
                <NumberDot n={i + 1} />
                <h3 className="mt-5 text-[17px] font-semibold leading-snug">{t}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-slate">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </>
);
