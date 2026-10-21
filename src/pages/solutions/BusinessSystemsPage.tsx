import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { SEOHead } from '../../components/layout/SEOHead';
import { Button } from '../../components/ui/Button';
import { businessSystemsContent } from '../../data/solutionsData';
import { CALENDLY_URL } from '../../data/siteConfig';
import { DarkCtaSection } from '../../components/common/DarkCtaSection';
import { PatternBackground } from '../../components/ui/PatternBackground';
import { Zap, Clock, ChevronDown, Check, Server, ArrowRight } from 'lucide-react';

export const BusinessSystemsPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeStepIndex, setActiveStepIndex] = useState(1);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Elvtera Business Systems & Sales Pipeline',
    provider: {
      '@type': 'Organization',
      name: 'Elvtera Business Solutions',
      url: 'https://elvtera.com',
    },
    description: businessSystemsContent.hero.subtitle,
  };

  return (
    <>
      <SEOHead
        title="Business Systems & Sales Pipeline"
        description="Speed-to-lead and pipeline automation for B2B sales teams. We work directly inside your existing tools or build a complete turnkey sales pipeline."
        canonicalPath="/solutions/business-systems"
        jsonLd={jsonLd}
      />

      <Breadcrumbs
        items={[
          { label: 'Solutions', href: '/solutions' },
          { label: 'Business Systems' },
        ]}
      />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-white border-b border-neutral-200 overflow-hidden">
        <PatternBackground variant="light" bokehPositions={['top-right', 'bottom-left']} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 mb-6 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#0546F2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B0F19]">
                {businessSystemsContent.hero.eyebrow}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B0F19] tracking-tight leading-[1.08] mb-6">
              {businessSystemsContent.hero.title}
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              {businessSystemsContent.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={CALENDLY_URL} variant="primary" size="lg">
                Audit Your Sales Pipeline
              </Button>
              <Link to="/contact?intent=business-systems">
                <Button variant="secondary" size="lg">
                  Inquire on Systems Setup
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Leads Go Cold */}
      <section className="py-20 bg-[#F4F5F7] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0546F2] block mb-2">
              The Conversion Bottleneck
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B0F19] tracking-tight">
              Why commercial leads go cold.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessSystemsContent.whyLeadsGoCold.map((item, idx) => (
              <div key={idx} className="bg-white border border-neutral-300 p-8 rounded-2xl shadow-sm">
                <div className="text-xs font-mono font-bold text-[#0546F2] mb-3">
                  {item.stat}
                </div>
                <h3 className="text-xl font-black text-[#0B0F19] tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speed-to-Lead Animated Diagram */}
      <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 mb-3 rounded-full">
              <Zap className="w-3.5 h-3.5 text-[#0546F2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                Speed-To-Lead Mechanics
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B0F19] tracking-tight">
              Under 60 seconds from intent to response.
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              How our automated architecture prevents prospect decay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {businessSystemsContent.speedToLeadFlow.map((flow, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <div
                  key={flow.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-6 border cursor-pointer transition-all rounded-2xl ${
                    isActive
                      ? 'bg-[#0B0F19] text-white border-[#0B0F19] shadow-xl translate-y-[-4px]'
                      : 'bg-white text-[#0B0F19] border-neutral-300 hover:border-neutral-400'
                  }`}
                >
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200/40">
                    <span
                      className={`text-xl font-mono font-black ${
                        isActive ? 'text-[#0546F2]' : 'text-neutral-400'
                      }`}
                    >
                      {flow.step}
                    </span>
                    <Clock className="w-4 h-4 opacity-50" />
                  </div>
                  <h3
                    className={`text-base font-black tracking-tight mb-2 ${
                      isActive ? 'text-white' : 'text-[#0B0F19]'
                    }`}
                  >
                    {flow.label}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${
                      isActive ? 'text-neutral-300' : 'text-neutral-600'
                    }`}
                  >
                    {flow.note}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pipeline Flexibility Section */}
      <section className="py-20 bg-[#F4F5F7] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-neutral-300 p-8 sm:p-12 rounded-3xl shadow-sm">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0546F2] mb-2">
                <Server className="w-4 h-4" />
                Infrastructure Adaptability
              </div>
              <h2 className="text-3xl font-black text-[#0B0F19] tracking-tight mb-3">
                {businessSystemsContent.pipelineFlexibility.title}
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {businessSystemsContent.pipelineFlexibility.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-neutral-200">
              <div className="p-6 bg-[#F4F5F7] rounded-2xl border border-neutral-200">
                <h3 className="text-base font-bold text-[#0B0F19] mb-2">
                  Option A: Existing Sales Stack
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  We log in as collaborators to your existing sales tools (HubSpot, Salesforce, Pipedrive, or Close). We configure the workflows, notification triggers, and tracking views without disrupting your active deals.
                </p>
              </div>
              <div className="p-6 bg-[#F4F5F7] rounded-2xl border border-neutral-200">
                <h3 className="text-base font-bold text-[#0B0F19] mb-2">
                  Option B: Turnkey Sales Pipeline
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  We deploy an all-in-one sales workspace configured with smart lead routing, calendar syncing, and automated follow-up sequences customized for your exact service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B0F19] tracking-tight">
              What's included in Business Systems.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessSystemsContent.whatIsIncluded.map((item, idx) => (
              <div key={idx} className="border border-neutral-300 p-8 rounded-3xl bg-[#F4F5F7]">
                <div className="w-5 h-5 bg-[#0546F2] text-white flex items-center justify-center rounded-md mb-4">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <h3 className="text-lg font-black text-[#0B0F19] tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-[#F4F5F7] border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B0F19] tracking-tight">
              Systems Questions & Answers
            </h2>
          </div>

          <div className="space-y-3">
            {businessSystemsContent.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-neutral-300 bg-white rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-black text-[#0B0F19]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0546F2] transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-neutral-600 border-t border-neutral-100 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Luxury Dark CTA */}
      <DarkCtaSection
        eyebrowBadge="Infrastructure Consultation"
        headline="Stop losing qualified pipeline to slow follow-up."
        subheadline="Schedule an infrastructure consultation to review your lead handling workflow and response times."
        primaryButtonText="Book Systems Consultation"
        primaryButtonAction={() => {
          window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
        }}
        secondaryButtonText="Apply for a No-Risk Pilot"
        secondaryButtonAction={() => {
          window.dispatchEvent(new CustomEvent('open-pilot-modal'));
        }}
      />
    </>
  );
};
