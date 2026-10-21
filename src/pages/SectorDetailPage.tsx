import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SEOHead } from '../components/layout/SEOHead';
import { businessSectors } from '../data/whoWeWorkWithData';
import { openPilotApply, openBookCall } from '../utils/analytics';
import { DarkCtaSection } from '../components/common/DarkCtaSection';
import { CALENDLY_URL } from '../data/siteConfig';
import {
  Check,
  ArrowRight,
  Building2,
  Radio,
  AlertCircle,
  MapPin,
  Users,
  Globe,
  Compass,
} from 'lucide-react';

export const SectorDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const sector = businessSectors.find((s) => s.slug === slug);

  if (!sector) {
    return <Navigate to="/who-we-work-with" replace />;
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Client Acquisition for ${sector.title}`,
    provider: {
      '@type': 'Organization',
      name: 'Elvtera Business Solutions',
      url: 'https://elvtera.com',
    },
    areaServed: sector.targetGeos.map((geo) => ({
      '@type': 'AdministrativeArea',
      name: geo,
    })),
    audience: sector.keyPersonas.map((persona) => ({
      '@type': 'Audience',
      audienceType: persona,
    })),
    description: sector.summary,
  };

  return (
    <>
      <SEOHead
        title={`Outbound Client Acquisition Playbook for ${sector.title} | Elvtera`}
        description={`${sector.summary} Explore regional GEO targeting, decision-maker personas, and live intent signals for ${sector.title}.`}
        canonicalPath={`/who-we-work-with/${sector.slug}`}
        jsonLd={jsonLd}
      />

      <Breadcrumbs
        items={[
          { label: 'Who We Work With', href: '/who-we-work-with' },
          { label: sector.title },
        ]}
      />

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-100 border border-neutral-300 mb-6 text-xs font-mono font-bold uppercase tracking-wider text-black rounded-full">
              <Building2 className="w-3.5 h-3.5 text-[#0546F2]" />
              <span>Sector Playbook & Regional Coverage</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight leading-[1.08] mb-6">
              Done-for-you client acquisition for {sector.title}.
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed mb-8">
              {sector.summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => openPilotApply(`/who-we-work-with/${sector.slug}`)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0546F2] text-white font-bold text-sm tracking-wide rounded-full hover:bg-[#0438c7] transition-all shadow-md cursor-pointer"
              >
                <span>Apply for a No-Risk Pilot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={openBookCall}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold text-sm tracking-wide border border-black/20 rounded-full hover:bg-neutral-50 transition-all cursor-pointer"
              >
                <span>Schedule Sector Proof Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Sector Challenge */}
      <section className="py-16 bg-neutral-50 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-black/10 p-8 sm:p-12 rounded-3xl shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-700 mb-3">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>Core Market Bottleneck</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight mb-4">
              The acquisition challenge in {sector.title.toLowerCase()}.
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl">
              {sector.challenge}
            </p>
          </div>
        </div>
      </section>

      {/* Geographic Coverage & Key Personas (GEO & SEO friendly) */}
      <section className="py-20 bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0546F2] mb-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full">
              <Compass className="w-4 h-4" />
              <span>GEO Targeting & Persona Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              Where & who we target for {sector.title}.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              We execute localized, timezone-synchronized outbound across premier commercial hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Target Geographies */}
            <div className="p-8 border border-black/10 bg-neutral-50 rounded-3xl flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-4">
                  <MapPin className="w-4 h-4 text-[#0546F2]" />
                  <span>Primary Geographic Corridors</span>
                </div>
                <h3 className="text-xl font-black text-black mb-4">
                  High-Converting Target Territories
                </h3>
                <ul className="space-y-3">
                  {sector.targetGeos.map((geo, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-800 font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#0546F2] mt-1.5 shrink-0" />
                      <span>{geo}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Personas */}
            <div className="p-8 border border-black/10 bg-neutral-50 rounded-3xl flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-4">
                  <Users className="w-4 h-4 text-[#0546F2]" />
                  <span>Decision-Maker Job Titles</span>
                </div>
                <h3 className="text-xl font-black text-black mb-4">
                  Executive Buyer Personas
                </h3>
                <ul className="space-y-3">
                  {sector.keyPersonas.map((persona, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-800 font-medium">
                      <span className="w-2 h-2 rounded-full bg-black mt-1.5 shrink-0" />
                      <span>{persona}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Regional Strategy Callout */}
          <div className="p-6 sm:p-8 bg-blue-50/60 border border-[#0546F2]/30 rounded-2xl flex flex-col sm:flex-row items-start gap-4 shadow-xs">
            <div className="w-10 h-10 bg-[#0546F2] text-white flex items-center justify-center shrink-0 rounded-xl">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0546F2] mb-1">
                Regional Strategy & Compliance Protocol
              </div>
              <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-medium">
                {sector.geoStrategy}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Elvtera Helps & Sample Intent Signals */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* How Elvtera Helps */}
            <div className="border border-black/10 p-8 sm:p-10 bg-white rounded-3xl shadow-xs">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-neutral-200">
                <div className="w-8 h-8 bg-[#0546F2] text-white flex items-center justify-center rounded-xl">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-black">
                    How Elvtera Solves It
                  </h2>
                  <span className="text-xs font-mono text-neutral-500">Targeted acquisition mechanics</span>
                </div>
              </div>

              <ul className="space-y-4">
                {sector.howElvteraHelps.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-neutral-800 font-medium leading-relaxed">
                    <Check className="w-4 h-4 text-[#0546F2] shrink-0 mt-0.5 stroke-[3]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sample Intent Signals & Recommended Solution */}
            <div className="space-y-6">
              <div className="border border-black/10 p-8 sm:p-10 bg-white rounded-3xl shadow-xs">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0546F2] mb-4">
                  <Radio className="w-4 h-4" />
                  <span>Real Intent Signals Monitored</span>
                </div>
                <div className="space-y-3">
                  {sector.sampleIntentSignals.map((sig, idx) => (
                    <div key={idx} className="p-4 bg-neutral-50 border border-neutral-200 rounded-2xl text-xs sm:text-sm font-semibold text-black">
                      Trigger: {sig}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-black p-6 bg-black text-white rounded-2xl shadow-md">
                <span className="text-[10px] font-mono uppercase text-[#3B82F6] font-bold block mb-1">
                  Recommended Architecture
                </span>
                <h3 className="text-lg font-black text-white mb-2">
                  {sector.recommendedSolutionTitle}
                </h3>
                <Link
                  to={sector.recommendedSolutionSlug}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-300 hover:text-white transition-colors"
                >
                  <span>Explore Architecture Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fit Criteria */}
      <section className="py-20 bg-white border-b border-black/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-black text-black tracking-tight">
              Fit criteria for {sector.title} companies.
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              We verify these operational parameters before accepting new client partners.
            </p>
          </div>

          <div className="border border-black/10 p-8 sm:p-10 bg-neutral-50 rounded-3xl shadow-xs">
            <ul className="space-y-4">
              {sector.fitCriteria.map((crit, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-[#0546F2] text-white flex items-center justify-center shrink-0 mt-0.5 rounded-full">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-neutral-800 leading-relaxed">
                    {crit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Luxury Dark CTA */}
      <DarkCtaSection
        eyebrowBadge={`${sector.title} Acquisition`}
        headline={`Ready to scale your ${sector.title.toLowerCase()} sales pipeline?`}
        subheadline="Test intent sourcing and qualification response metrics across a dedicated 14-day no-risk pilot sprint."
        primaryButtonText="Apply for a No-Risk Pilot"
        primaryButtonAction={() => openPilotApply(`/who-we-work-with/${sector.slug}`)}
        secondaryButtonText="Book an Intro Call"
        secondaryButtonHref={CALENDLY_URL}
      />
    </>
  );
};
