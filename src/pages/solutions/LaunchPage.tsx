import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { SEOHead } from '../../components/layout/SEOHead';
import { Button } from '../../components/ui/Button';
import { launchContent } from '../../data/solutionsData';
import { CALENDLY_URL } from '../../data/siteConfig';
import { DarkCtaSection } from '../../components/common/DarkCtaSection';
import { PatternBackground } from '../../components/ui/PatternBackground';
import { Rocket, Check, ChevronDown, ArrowRight, User, Users } from 'lucide-react';

export const LaunchPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeStage, setActiveStage] = useState(0);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Elvtera Launch System for Founders',
    provider: {
      '@type': 'Organization',
      name: 'Elvtera Business Solutions',
      url: 'https://elvtera.com',
    },
    description: launchContent.hero.subtitle,
  };

  return (
    <>
      <SEOHead
        title="Launch System | From Idea to First Paying Clients"
        description="A guided commercial partner for consulting and service founders. We handle positioning, high-converting website, sales pipeline, and initial outbound sales."
        canonicalPath="/solutions/launch"
        jsonLd={jsonLd}
      />

      <Breadcrumbs
        items={[
          { label: 'Solutions', href: '/solutions' },
          { label: 'Launch System' },
        ]}
      />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-white border-b border-neutral-200 overflow-hidden">
        <PatternBackground variant="light" bokehPositions={['top-right', 'bottom-left']} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 mb-6 rounded-full">
              <Rocket className="w-3.5 h-3.5 text-[#0546F2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B0F19]">
                {launchContent.hero.eyebrow}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B0F19] tracking-tight leading-[1.08] mb-6">
              {launchContent.hero.title}
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              {launchContent.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={CALENDLY_URL} variant="primary" size="lg">
                Discuss Your Launch Concept
              </Button>
              <Link to="/contact?intent=launch">
                <Button variant="secondary" size="lg">
                  Submit Concept Brief
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Animated Roadmap */}
      <section className="py-20 lg:py-28 bg-[#F4F5F7] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0546F2] block mb-2">
              Structured Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B0F19] tracking-tight">
              The 4-stage path from idea to first customers.
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Click a stage to inspect operational deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {launchContent.roadmap.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <div
                  key={stage.stage}
                  onClick={() => setActiveStage(idx)}
                  className={`p-8 border cursor-pointer transition-all rounded-2xl flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#0B0F19] text-white border-[#0B0F19] shadow-xl translate-y-[-4px]'
                      : 'bg-white text-[#0B0F19] border-neutral-300 hover:border-neutral-400'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200/40">
                      <span
                        className={`text-xl font-mono font-black ${
                          isActive ? 'text-[#0546F2]' : 'text-[#0546F2]'
                        }`}
                      >
                        STAGE {stage.stage}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          isActive ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-100 text-neutral-600'
                        }`}
                      >
                        {stage.timing}
                      </span>
                    </div>

                    <h3
                      className={`text-lg font-black tracking-tight mb-3 ${
                        isActive ? 'text-white' : 'text-[#0B0F19]'
                      }`}
                    >
                      {stage.title}
                    </h3>
                    <p
                      className={`text-xs leading-relaxed mb-6 ${
                        isActive ? 'text-neutral-300' : 'text-neutral-600'
                      }`}
                    >
                      {stage.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-200/40">
                    <span className="text-[10px] font-mono uppercase tracking-wider block opacity-70 mb-1">
                      Deliverable:
                    </span>
                    <span
                      className={`text-xs font-bold ${
                        isActive ? 'text-[#0546F2]' : 'text-neutral-800'
                      }`}
                    >
                      {stage.deliverable}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who It Is For */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B0F19] tracking-tight">
              Engineered for consulting and service founders.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {launchContent.whoItIsFor.map((item, idx) => (
              <div key={idx} className="p-8 border border-neutral-300 bg-[#F4F5F7] rounded-3xl">
                <div className="w-8 h-8 bg-[#0546F2] text-white flex items-center justify-center font-bold mb-4 rounded-lg">
                  <User className="w-4 h-4" />
                </div>
                <p className="text-sm font-semibold text-neutral-800 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Handle vs What You Handle */}
      <section className="py-20 lg:py-28 bg-[#F4F5F7] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0546F2] block mb-2">
              Division of Labor
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B0F19] tracking-tight">
              Clear division of commercial execution.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What We Handle */}
            <div className="bg-white border border-neutral-300 p-8 sm:p-10 rounded-3xl shadow-sm">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-neutral-200">
                <div className="w-8 h-8 bg-[#0546F2] text-white flex items-center justify-center rounded-lg">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#0B0F19]">What Elvtera Handles</h3>
                  <span className="text-xs text-neutral-500">Commercial operations & infrastructure</span>
                </div>
              </div>

              <ul className="space-y-4">
                {launchContent.whatWeHandleVsYou.weHandle.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-800 font-medium">
                    <Check className="w-4 h-4 text-[#0546F2] flex-shrink-0 mt-0.5 stroke-[3]" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What You Handle */}
            <div className="bg-white border border-neutral-300 p-8 sm:p-10 rounded-3xl shadow-sm">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-neutral-200">
                <div className="w-8 h-8 bg-[#0B0F19] text-white flex items-center justify-center rounded-lg">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#0B0F19]">What The Founder Handles</h3>
                  <span className="text-xs text-neutral-500">Subject matter expertise & closing</span>
                </div>
              </div>

              <ul className="space-y-4">
                {launchContent.whatWeHandleVsYou.youHandle.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-800 font-medium">
                    <ArrowRight className="w-4 h-4 text-[#0B0F19] flex-shrink-0 mt-0.5" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B0F19] tracking-tight">
              Launch Questions & Answers
            </h2>
          </div>

          <div className="space-y-3">
            {launchContent.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-neutral-300 rounded-2xl overflow-hidden">
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
        eyebrowBadge="Market Validation"
        headline="Take your consulting or service idea to market."
        subheadline="Tell us about your background and business concept. Let us evaluate if the Launch System is the right fit."
        primaryButtonText="Book Founder Intake"
        primaryButtonAction={() => {
          window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
        }}
        secondaryButtonText="Send Concept Details"
        secondaryButtonHref="/contact?intent=launch"
      />
    </>
  );
};
