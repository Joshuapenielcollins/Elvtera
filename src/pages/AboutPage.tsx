import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SEOHead } from '../components/layout/SEOHead';
import { Button } from '../components/ui/Button';
import { aboutPageContent, teamMembers, founderDetails } from '../data/aboutData';
import { CALENDLY_URL } from '../data/siteConfig';
import { DarkCtaSection } from '../components/common/DarkCtaSection';
import { PatternBackground } from '../components/ui/PatternBackground';
import { Shield, Target, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const triggerPilotModal = () => {
    window.dispatchEvent(new CustomEvent('open-pilot-modal'));
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Elvtera Business Solutions',
    url: 'https://elvtera.com/about',
    description: aboutPageContent.hero.subtitle,
  };

  return (
    <>
      <SEOHead
        title="About Us | Principle-Led Outbound Partner"
        description="Learn about Elvtera's operating principles: start with real intent, qualify before booking, and execute across multiple channels with zero ad spend."
        canonicalPath="/about"
        jsonLd={jsonLd}
      />

      <Breadcrumbs items={[{ label: 'About' }]} />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-white border-b border-neutral-200 overflow-hidden">
        <PatternBackground variant="light" bokehPositions={['top-right', 'bottom-left']} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 mb-6 rounded-full">
              <Shield className="w-3.5 h-3.5 text-[#0546F2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B0F19]">
                {aboutPageContent.hero.eyebrow}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B0F19] tracking-tight leading-[1.08] mb-6">
              {aboutPageContent.hero.title}
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              {aboutPageContent.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={CALENDLY_URL} variant="primary" size="md">
                Schedule a Conversation
              </Button>
              <Button variant="secondary" size="md" onClick={triggerPilotModal}>
                Apply for a No-Risk Pilot
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Principles */}
      <section className="py-20 lg:py-28 bg-[#F4F5F7] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0546F2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Operating Discipline
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B0F19] tracking-tight">
              Our core principles.
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              The foundational convictions behind how we engineer client acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutPageContent.principles.map((pr) => (
              <div
                key={pr.number}
                className="bg-white border border-neutral-300 p-8 sm:p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl font-black font-mono text-[#0546F2] mb-3">
                  {pr.number}
                </div>
                <h3 className="text-xl font-black text-[#0B0F19] tracking-tight mb-3">
                  {pr.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {pr.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work With Clients */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0546F2] block mb-2">
              Partnership Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B0F19] tracking-tight">
              How we work with our clients.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutPageContent.howWeWork.map((hw, idx) => (
              <div key={idx} className="p-8 border border-neutral-300 rounded-2xl bg-[#F4F5F7]">
                <div className="w-8 h-8 bg-blue-50 text-[#0546F2] flex items-center justify-center font-bold mb-4 rounded-lg border border-blue-200">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-black text-[#0B0F19] tracking-tight mb-2">
                  {hw.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {hw.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data-Driven Team and Founder Blocks (Hidden until data exists) */}
      {founderDetails && (
        <section className="py-20 bg-[#F4F5F7] border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0546F2]">Leadership</span>
              <h2 className="text-3xl font-black text-[#0B0F19] mt-1">Founder &amp; Principal</h2>
            </div>
            <div className="bg-white border border-neutral-300 p-8 rounded-2xl shadow-sm max-w-xl">
              <h3 className="text-xl font-black text-[#0B0F19]">{founderDetails.name}</h3>
              <p className="text-xs font-semibold text-[#0546F2] mb-3">{founderDetails.role}</p>
              <p className="text-sm text-neutral-600 leading-relaxed">{founderDetails.bio}</p>
            </div>
          </div>
        </section>
      )}

      {teamMembers.length > 0 && (
        <section className="py-20 bg-white border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0546F2]">Operations</span>
              <h2 className="text-3xl font-black text-[#0B0F19] mt-1">Acquisition Strategy Team</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamMembers.map((tm) => (
                <div key={tm.id} className="p-6 border border-neutral-300 rounded-2xl bg-[#F4F5F7]">
                  <h3 className="text-lg font-black text-[#0B0F19]">{tm.name}</h3>
                  <p className="text-xs font-semibold text-[#0546F2] mb-2">{tm.role}</p>
                  <p className="text-xs text-neutral-600 leading-relaxed">{tm.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Luxury Dark CTA */}
      <DarkCtaSection
        eyebrowBadge="Strategy Partnership"
        headline="Work with an outbound partner focused on qualified appointments."
        subheadline="Schedule a conversation with our strategy team to evaluate whether your offer and market match our outbound model."
        primaryButtonText="Apply for a No-Risk Pilot"
        primaryButtonAction={triggerPilotModal}
        secondaryButtonText="Book an Intro Call"
        secondaryButtonHref={CALENDLY_URL}
      />
    </>
  );
};
