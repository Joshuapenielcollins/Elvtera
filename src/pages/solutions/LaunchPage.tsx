import React from 'react';
import { Check } from 'lucide-react';
import { SEOHead } from '../../components/layout/SEOHead';
import { launchContent as l } from '../../data/solutionsData';
import { openBookCall } from '../../utils/analytics';
import { Btn } from '../../components/kit/Btn';
import { CTABand, Dot, NumberDot, PageHero } from '../../components/kit/Bits';
import { Hand, Reveal, SectionHead, SectionLabel, Sticky, Tone } from '../../components/kit/Paper';
import { FAQ } from '../../components/home/Closing';

const tones: Tone[] = ['butter', 'sky', 'mint', 'lilac'];

export const LaunchPage: React.FC = () => (
  <>
    <SEOHead
      title="Launch | From Idea to First Paying Clients"
      description="An end-to-end partner for consulting and service founders: positioning, a website that books calls, a sales pipeline and your first outbound campaign."
      canonicalPath="/solutions/launch"
      jsonLd={{ '@context': 'https://schema.org', '@type': 'Service', name: 'Elvtera Launch', description: l.hero.subtitle }}
    />

    <PageHero
      label={`${l.hero.eyebrow} · Business systems`}
      title={
        <>
          From idea to your <span className="accent text-blue">first paying clients.</span>
        </>
      }
      sub={l.hero.subtitle}
      actions={
        <>
          <Btn size="lg" variant="dark" onClick={openBookCall}>
            Book a founder call
          </Btn>
          <Btn size="lg" variant="ghost" to="/contact?intent=launch&tab=brief">
            Send your idea
          </Btn>
        </>
      }
      aside={
        <div className="relative">
          <Sticky tone="paper" tape="stripe" className="rotate-1 p-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-slate">Built for</div>
            <ul className="mt-4 space-y-3">
              {l.whoItIsFor.map((w) => (
                <li key={w} className="flex gap-3 text-[15px] leading-snug">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue" /> {w}
                </li>
              ))}
            </ul>
          </Sticky>
          <Hand arrow="left" className="absolute -bottom-16 right-0 rotate-[-3deg]">
            sound like you?
          </Hand>
        </div>
      }
    />

    {/* Roadmap */}
    <section className="desk-grid bg-canvas py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionLabel n="01" note="Four weeks">
          The roadmap
        </SectionLabel>
        <SectionHead
          className="mt-10"
          title={
            <>
              One week per piece. <span className="accent text-blue">Live by week four.</span>
            </>
          }
        />
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {l.roadmap.map((r, i) => (
            <Reveal key={r.stage} delay={i * 0.06}>
              <div className={`relative h-full ${i % 2 ? 'lg:mt-10 rotate-1' : '-rotate-1'}`}>
                <NumberDot n={r.stage} className="absolute -left-3 -top-3 z-10" />
                <Sticky tone={tones[i]} pin className="h-full p-6">
                  <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink/55">{r.timing}</div>
                  <h3 className="mt-3 text-[19px] font-semibold leading-snug tracking-[-0.01em]">{r.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-ink/75">{r.summary}</p>
                  <p className="mt-4 font-hand text-[20px] leading-tight text-blue">→ {r.deliverable}</p>
                </Sticky>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Who does what */}
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionLabel n="02">Who does what</SectionLabel>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[22px] bg-ink p-8 text-white shadow-app">
              <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/50">We handle</div>
              <h3 className="display mt-3 text-[34px]">The machinery.</h3>
              <ul className="mt-6 space-y-3">
                {l.whatWeHandleVsYou.weHandle.map((x) => (
                  <li key={x} className="flex gap-3 text-[15px] leading-snug text-white/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#7ee2a8]" /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-[22px] bg-canvas p-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-slate">You handle</div>
              <h3 className="display mt-3 text-[34px]">Your expertise.</h3>
              <ul className="mt-6 space-y-3">
                {l.whatWeHandleVsYou.youHandle.map((x) => (
                  <li key={x} className="flex gap-3 text-[15px] leading-snug text-ink/80">
                    <Dot className="bg-ink/40" /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <FAQ items={l.faqs} n="03" />

    <CTABand
      quote="Tell us about your background and your idea. We'll tell you if Launch is the right fit."
      title={
        <>
          Take it to <span className="accent font-normal text-blue-soft">market.</span>
        </>
      }
      primary={{ label: 'Book a founder call', onClick: openBookCall }}
      secondary={{ label: 'Send your idea', to: '/contact?intent=launch&tab=brief' }}
    />
  </>
);

export default LaunchPage;
