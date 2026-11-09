import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { businessSectors } from '../data/whoWeWorkWithData';
import { CTABand, PageHero } from '../components/kit/Bits';
import { Hand, Reveal, SectionLabel } from '../components/kit/Paper';

const tints = ['bg-butter', 'bg-sky', 'bg-mint', 'bg-lilac', 'bg-peach', 'bg-pink'];

export const WhoWeWorkWithPage: React.FC = () => (
  <>
    <SEOHead
      title="Who We Work With | B2B Sectors"
      description="We run outbound for established B2B companies across 10 sectors, including agencies, IT services, consultancies, SaaS and manufacturers."
      canonicalPath="/who-we-work-with"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: businessSectors.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.title, url: `https://elvtera.com/who-we-work-with/${s.slug}` })),
      }}
    />

    <PageHero
      label={`Who we work with · ${businessSectors.length} sectors`}
      title={
        <>
          B2B companies with an offer <span className="accent text-blue">worth calling about.</span>
        </>
      }
      sub="If you sell something high-value to other businesses, signals tell us who needs it now. Here's how that plays out in each sector we work with."
    />

    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionLabel n="01" note="Pick your sector">
          Sectors
        </SectionLabel>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {businessSectors.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.05}>
              <Link
                to={`/who-we-work-with/${s.slug}`}
                className="group flex h-full flex-col rounded-[22px] bg-paper p-6 shadow-card ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-float"
              >
                <div className="flex items-start justify-between">
                  <span className={`grid h-11 w-11 place-items-center rounded-xl font-serif text-[20px] italic ${tints[i % tints.length]}`}>
                    {s.title[0]}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-ash transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                </div>
                <h2 className="display mt-6 text-[30px]">{s.title}</h2>
                <p className="mt-1 text-[13.5px] text-slate">{s.tagline}</p>
                <p className="mt-4 text-[14.5px] leading-relaxed text-ink/75">{s.summary}</p>
                <div className="mt-auto pt-6">
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ash">A signal we watch</div>
                  <p className="mt-1.5 font-hand text-[20px] leading-tight text-blue">{s.sampleIntentSignals[0]}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Hand className="mt-12 text-center text-[24px]">don't see yours? if the deal is $5k+, it probably fits.</Hand>
      </div>
    </section>

    <CTABand
      quote="As long as you sell a high-value B2B offer, our outbound system applies."
      title={
        <>
          Don't see your <span className="accent font-normal text-blue-soft">sector?</span>
        </>
      }
    />
  </>
);
