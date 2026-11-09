import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Globe2, UserRound } from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { businessSectors } from '../data/whoWeWorkWithData';
import { openBookCall, openPilotApply } from '../utils/analytics';
import { Btn } from '../components/kit/Btn';
import { CTABand, NumberDot, PageHero } from '../components/kit/Bits';
import { Hand, Reveal, SectionHead, SectionLabel, Sticky, Tone } from '../components/kit/Paper';

const tones: Tone[] = ['butter', 'mint', 'sky', 'lilac'];

export const SectorDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const sector = businessSectors.find((s) => s.slug === slug);
  if (!sector) return <Navigate to="/who-we-work-with" replace />;

  const others = businessSectors.filter((s) => s.slug !== sector.slug).slice(0, 4);

  return (
    <>
      <SEOHead
        title={`Outbound for ${sector.title}`}
        description={sector.summary}
        canonicalPath={`/who-we-work-with/${sector.slug}`}
        jsonLd={{ '@context': 'https://schema.org', '@type': 'Service', name: `Signal-based outbound for ${sector.title}`, provider: { '@type': 'Organization', name: 'Elvtera Business Solutions' } }}
      />

      <PageHero
        label={`Sector · ${sector.tagline}`}
        title={
          <>
            Outbound for <span className="accent text-blue">{sector.title.toLowerCase()}.</span>
          </>
        }
        sub={sector.summary}
        actions={
          <>
            <Btn size="lg" variant="dark" onClick={openBookCall}>
              Book a sector call
            </Btn>
            <Btn size="lg" variant="ghost" onClick={() => openPilotApply(`/who-we-work-with/${sector.slug}`)}>
              Apply for a no-risk pilot
            </Btn>
          </>
        }
        aside={
          <div className="ruled relative rounded-[3px] bg-cream py-8 pl-12 pr-8 shadow-float">
            <span className="absolute inset-y-0 left-8 w-px bg-[#e8a0a0]" aria-hidden="true" />
            <span
              aria-hidden="true"
              className="tape-stripe absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-2"
              style={{ ['--tape' as string]: '#9cc3f2' }}
            />
            <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-slate">The challenge</div>
            <p className="display mt-3 text-[clamp(22px,2.2vw,28px)] leading-[1.3]">{sector.challenge}</p>
          </div>
        }
      >
        <div className="relative mx-auto mt-10 max-w-6xl px-5">
          <Link to="/who-we-work-with" className="inline-flex items-center gap-1.5 text-[14px] text-slate hover:text-ink">
            <ArrowLeft className="h-4 w-4" /> All sectors
          </Link>
        </div>
      </PageHero>

      {/* Signals */}
      <section className="desk-grid bg-canvas py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel n="01" note="Real examples">
            Signals we watch
          </SectionLabel>
          <SectionHead
            className="mt-10"
            title={
              <>
                What "ready to buy" <span className="accent text-blue">looks like here.</span>
              </>
            }
          />
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {sector.sampleIntentSignals.map((sig, i) => (
              <Reveal key={sig} delay={i * 0.08}>
                <div className={`relative ${i % 2 ? 'rotate-1' : '-rotate-1'}`}>
                  <NumberDot n={i + 1} className="absolute -left-3 -top-3 z-10" />
                  <Sticky tone={tones[i % tones.length]} pin className="p-7">
                    <p className="font-hand text-[26px] leading-[1.15]">{sig}</p>
                  </Sticky>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we help + fit */}
      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel n="02">How we help</SectionLabel>
          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHead
                title={
                  <>
                    The play, <span className="accent text-blue">step by step.</span>
                  </>
                }
              />
              <ol className="mt-8 space-y-4">
                {sector.howElvteraHelps.map((h, i) => (
                  <Reveal key={h} delay={i * 0.05}>
                    <li className="flex gap-4 rounded-[18px] bg-canvas p-5">
                      <span className="font-serif text-[26px] italic leading-none text-blue">0{i + 1}</span>
                      <span className="text-[15.5px] leading-relaxed">{h}</span>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
            <Reveal delay={0.1}>
              <Sticky tone="mint" pin className="rotate-1 p-8">
                <h3 className="font-hand text-[34px] leading-none">A good fit if…</h3>
                <ul className="mt-5 space-y-3">
                  {sector.fitCriteria.map((f) => (
                    <li key={f} className="flex gap-3 text-[15.5px] leading-snug">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-ok" /> {f}
                    </li>
                  ))}
                </ul>
              </Sticky>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Who + where */}
      <section className="glow py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel n="03">Who and where</SectionLabel>
          <p className="display mt-10 max-w-3xl text-[clamp(26px,2.8vw,36px)] leading-[1.25]">{sector.geoStrategy}</p>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[22px] bg-paper p-7 shadow-float">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-slate">
                  <UserRound className="h-4 w-4 text-blue" /> Who we reach
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {sector.keyPersonas.map((p) => (
                    <span key={p} className="rounded-full bg-canvas px-3.5 py-1.5 text-[14px]">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-[22px] bg-paper p-7 shadow-float">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-slate">
                  <Globe2 className="h-4 w-4 text-blue" /> Where
                </div>
                <ul className="mt-5 space-y-2.5">
                  {sector.targetGeos.map((g) => (
                    <li key={g} className="text-[14.5px] leading-snug">
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <div className="mt-12">
            <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-slate">Other sectors</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {others.map((o) => (
                <Link key={o.slug} to={`/who-we-work-with/${o.slug}`} className="btn-gloss-light rounded-full px-4 py-2 text-[14px] font-medium">
                  {o.title}
                </Link>
              ))}
            </div>
            <Hand className="mt-6 text-[22px]">every sector, the same rule: only people already looking</Hand>
          </div>
        </div>
      </section>

      <CTABand
        quote="Test it first: a 14-day pilot where you approve every message."
        title={
          <>
            Try it in <span className="accent font-normal text-blue-soft">{sector.title.toLowerCase()}.</span>
          </>
        }
      />
    </>
  );
};
