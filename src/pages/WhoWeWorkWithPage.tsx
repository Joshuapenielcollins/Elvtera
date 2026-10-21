import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SEOHead } from '../components/layout/SEOHead';
import { Button } from '../components/ui/Button';
import { businessSectors } from '../data/whoWeWorkWithData';
import { CALENDLY_URL } from '../data/siteConfig';
import { openPilotApply } from '../utils/analytics';
import { DarkCtaSection } from '../components/common/DarkCtaSection';
import { PatternBackground } from '../components/ui/PatternBackground';
import { ArrowRight, Building2, CheckCircle2 } from 'lucide-react';

export const WhoWeWorkWithPage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'B2B Sectors We Work With | Elvtera',
    url: 'https://elvtera.com/who-we-work-with',
    description:
      'Explore how Elvtera engineers outbound client acquisition across 10 high-value B2B industry sectors.',
  };

  return (
    <>
      <SEOHead
        title="Who We Work With | B2B Industry Sectors"
        description="We partner with established B2B companies across 10 core sectors including Agencies, IT Services, Consultancies, SaaS, and Manufacturers."
        canonicalPath="/who-we-work-with"
        jsonLd={jsonLd}
      />

      <Breadcrumbs items={[{ label: 'Who We Work With' }]} />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-white border-b border-neutral-200 overflow-hidden">
        <PatternBackground variant="light" bokehPositions={['top-right', 'bottom-left']} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 mb-6 rounded-full">
              <Building2 className="w-3.5 h-3.5 text-[#0546F2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B0F19]">
                Specialized B2B Verticals
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B0F19] tracking-tight leading-[1.08] mb-6">
              Who we work best with.
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              We partner with B2B businesses where deal values justify focused outbound intent sourcing and disciplined qualification. Select your industry vertical to see specific challenges and intent triggers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={CALENDLY_URL} variant="primary" size="md">
                Schedule Sector Assessment
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={() => openPilotApply('/who-we-work-with')}
              >
                Apply for a No-Risk Pilot
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Sectors Grid */}
      <section className="py-20 bg-[#F4F5F7] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessSectors.map((sector) => (
              <div
                key={sector.slug}
                className="bg-white border border-neutral-300 p-8 flex flex-col justify-between rounded-3xl shadow-sm hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0546F2]">
                      Industry Focus
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">
                      Verified ICP
                    </span>
                  </div>

                  <h2 className="text-2xl font-black text-[#0B0F19] tracking-tight mb-2 group-hover:text-[#0546F2] transition-colors">
                    {sector.title}
                  </h2>
                  <p className="text-xs font-semibold text-neutral-500 mb-4">
                    {sector.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                    {sector.summary}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-neutral-100 mb-6">
                    <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">
                      Sample Intent Triggers:
                    </span>
                    {sector.sampleIntentSignals.slice(0, 2).map((sig, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0546F2] flex-shrink-0 mt-0.5" />
                        <span>{sig}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    to={`/who-we-work-with/${sector.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#0B0F19] text-white text-xs font-bold uppercase tracking-wider btn-brand-fill hover:border-[#0546F2] rounded-full"
                  >
                    <span>View {sector.title} Playbook</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Dark CTA Band */}
      <DarkCtaSection
        eyebrowBadge="High-Value Sourcing"
        headline="Don't see your exact category listed?"
        subheadline="As long as you sell a high-value B2B offer with contract values above $5,000, our outbound system applies."
        primaryButtonText="Apply for a No-Risk Pilot"
        primaryButtonAction={() => openPilotApply('/who-we-work-with')}
        secondaryButtonText="Book an Intro Call"
        secondaryButtonHref={CALENDLY_URL}
      />
    </>
  );
};
