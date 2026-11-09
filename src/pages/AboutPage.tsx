import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { aboutPageContent } from '../data/aboutData';
import { openBookCall } from '../utils/analytics';
import { Btn } from '../components/kit/Btn';
import { CTABand, NumberDot, PageHero } from '../components/kit/Bits';
import { Hand, Reveal, SectionHead, SectionLabel, Sticky, Tone } from '../components/kit/Paper';

const tones: Tone[] = ['butter', 'sky', 'mint', 'lilac'];
const tilts = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2'];

export const AboutPage: React.FC = () => {
  const { principles, howWeWork } = aboutPageContent;

  return (
    <>
      <SEOHead
        title="About Elvtera | Outbound and Business Systems Partner"
        description="Elvtera finds B2B buyers who are already looking, and builds the systems that turn them into clients. Teams in India and the USA."
        canonicalPath="/about"
        jsonLd={{ '@context': 'https://schema.org', '@type': 'AboutPage', name: 'About Elvtera Business Solutions' }}
      />

      <PageHero
        label="About Elvtera"
        title={
          <>
            We find your buyers, and build <span className="accent text-blue">the systems that close them.</span>
          </>
        }
        sub="Elvtera runs signal-based outbound for B2B companies with a proven offer, and builds the websites, pipelines and automation behind the sale. No software licences, no bought lists, no vague retainers."
        actions={
          <>
            <Btn size="lg" variant="dark" onClick={openBookCall}>
              Talk to us
            </Btn>
            <Btn size="lg" variant="ghost" to="/solutions">
              Our two services
            </Btn>
          </>
        }
      />

      {/* Principles */}
      <section className="desk-grid bg-canvas py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel n="01" note="What we won't compromise on">
            Principles
          </SectionLabel>
          <SectionHead
            className="mt-10"
            title={
              <>
                Four things <span className="accent text-blue">we always do.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.number} delay={(i % 2) * 0.08}>
                <div className={`relative ${tilts[i]}`}>
                  <NumberDot n={p.number} className="absolute -left-3 -top-3 z-10" />
                  <Sticky tone={tones[i]} pin className="p-7 sm:p-8">
                    <h3 className="display text-[30px]">{p.title}</h3>
                    <p className="mt-3 text-[15.5px] leading-relaxed text-ink/75">{p.summary}</p>
                  </Sticky>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel n="02">How we work with you</SectionLabel>
          <div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHead
              title={
                <>
                  One team. <span className="accent text-blue">End to end.</span>
                </>
              }
              sub="You get one partner that handles the research, infrastructure, copy, inboxes and scheduling, and reports back every week."
            />
            <div className="space-y-4">
              {howWeWork.map((h, i) => (
                <Reveal key={h.title} delay={i * 0.06}>
                  <div className="flex gap-5 rounded-[20px] bg-paper p-6 shadow-card ring-1 ring-line">
                    <span className="font-serif text-[34px] italic leading-none text-blue">0{i + 1}</span>
                    <div>
                      <h3 className="text-[18px] font-semibold tracking-[-0.01em]">{h.title}</h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-slate">{h.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Where */}
      <section className="glow py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel n="03">Where we are</SectionLabel>
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
            <SectionHead
              title={
                <>
                  India <span className="accent text-blue">&amp;</span> USA.
                </>
              }
              sub="Our team works across India and the USA, so outreach runs in your buyers' time zones and someone is always minding the inbox."
            />
            <div className="grid grid-cols-2 gap-4">
              {['India', 'USA'].map((c, i) => (
                <Reveal key={c} delay={i * 0.08}>
                  <div className={`rounded-[22px] bg-paper p-6 shadow-float ${i ? 'rotate-2' : '-rotate-2'}`}>
                    <MapPin className="h-5 w-5 text-blue" />
                    <div className="display mt-8 text-[40px]">{c}</div>
                    <div className="mt-1 text-[13px] text-slate">Elvtera team</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel n="04">What we do</SectionLabel>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              { to: '/', tag: 'Flagship', t: 'Signal-based outbound', d: 'We find businesses showing real buying signals and book the qualified ones on your calendar.', tone: 'butter' as Tone },
              { to: '/solutions/business-systems', tag: 'Build', t: 'Business systems & websites', d: 'Websites, pipelines, speed-to-lead automation and full business setups.', tone: 'mint' as Tone },
            ].map((s) => (
              <Link key={s.t} to={s.to} className="group rounded-[24px] bg-canvas p-2 transition-shadow hover:shadow-float">
                <Sticky tone={s.tone} tape={false} className="rounded-[18px] p-7">
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.1em] text-ink/55">
                    {s.tag}
                    <ArrowUpRight className="h-5 w-5 text-ink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <h3 className="display mt-10 text-[34px]">{s.t}</h3>
                </Sticky>
                <p className="p-5 text-[15px] leading-relaxed text-slate">{s.d}</p>
              </Link>
            ))}
          </div>
          <Hand className="mt-10 text-center text-[24px]">two services, one team behind both</Hand>
        </div>
      </section>

      <CTABand
        quote="Not sure which one you need? Tell us what's going on and we'll point you the right way."
        title={
          <>
            Let's <span className="accent font-normal text-blue-soft">talk.</span>
          </>
        }
      />
    </>
  );
};
