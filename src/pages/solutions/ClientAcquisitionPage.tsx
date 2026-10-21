import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { SEOHead } from '../../components/layout/SEOHead';
import { Button } from '../../components/ui/Button';
import { clientAcquisitionContent } from '../../data/solutionsData';
import { CALENDLY_URL } from '../../data/siteConfig';
import { DarkCtaSection } from '../../components/common/DarkCtaSection';
import { PatternBackground } from '../../components/ui/PatternBackground';
import { Check, X, Radio, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';

export const ClientAcquisitionPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeSignalIndex, setActiveSignalIndex] = useState(0);

  // Cycling active signal animation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSignalIndex(
        (prev) => (prev + 1) % clientAcquisitionContent.intentSignals.signalsList.length
      );
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const triggerPilotModal = () => {
    window.dispatchEvent(new CustomEvent('open-pilot-modal'));
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Elvtera Client Acquisition (Flagship)',
    provider: {
      '@type': 'Organization',
      name: 'Elvtera Business Solutions',
      url: 'https://elvtera.com',
    },
    description: clientAcquisitionContent.hero.subtitle,
  };

  return (
    <>
      <SEOHead
        title="Client Acquisition | Done-For-You Outbound Partner"
        description="Target 20+ qualified calls a month within 90 days. We find active intent signals, contact decision makers across multiple channels, and qualify every reply."
        canonicalPath="/solutions/client-acquisition"
        jsonLd={jsonLd}
      />

      <Breadcrumbs
        items={[
          { label: 'Solutions', href: '/solutions' },
          { label: 'Client Acquisition' },
        ]}
      />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-white border-b border-neutral-200 overflow-hidden">
        <PatternBackground variant="light" bokehPositions={['top-right', 'bottom-left']} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 mb-6 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#0546F2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B0F19]">
                {clientAcquisitionContent.hero.eyebrow}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B0F19] tracking-tight leading-[1.08] mb-6">
              {clientAcquisitionContent.hero.title}
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              {clientAcquisitionContent.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button variant="primary" size="lg" onClick={triggerPilotModal}>
                Apply for a No-Risk Pilot
              </Button>
              <Button href={CALENDLY_URL} variant="secondary" size="lg">
                Book a Strategy Intro
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-[#F4F5F7] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B0F19] tracking-tight">
              {clientAcquisitionContent.problem.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientAcquisitionContent.problem.points.map((pt, idx) => (
              <div key={idx} className="bg-white border border-neutral-300 p-8 rounded-2xl shadow-sm">
                <span className="text-xs font-mono font-bold text-[#0546F2] block mb-4">
                  CHALLENGE 0{idx + 1}
                </span>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {pt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intent Signals Explained (Animated Feed labelled Example) */}
      <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 rounded-full">
                <Radio className="w-3.5 h-3.5 text-[#0546F2] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                  Precision Sourcing
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B0F19] tracking-tight leading-tight">
                {clientAcquisitionContent.intentSignals.title}
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed">
                {clientAcquisitionContent.intentSignals.description}
              </p>
              <div className="p-5 bg-[#F4F5F7] border border-neutral-300 rounded-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0546F2] block mb-1">
                  Intent Differentiation
                </span>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  We distinguish between Strong signals (direct hiring and capital expenditure) and Medium signals (company growth and leadership realignments) to tailor message urgency.
                </p>
              </div>
            </div>

            {/* Right: Live Intent Feed */}
            <div className="lg:col-span-7">
              <div className="border border-[#0B0F19] bg-[#F4F5F7] p-6 sm:p-8 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-300">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0B0F19]">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    LIVE INTENT STREAM
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-neutral-200 px-2 py-0.5 text-neutral-600 font-bold rounded-md">
                    Example
                  </span>
                </div>

                <div className="space-y-3">
                  {clientAcquisitionContent.intentSignals.signalsList.map((sig, idx) => {
                    const isSelected = activeSignalIndex === idx;
                    return (
                      <div
                        key={sig.id}
                        onClick={() => setActiveSignalIndex(idx)}
                        className={`p-5 border cursor-pointer transition-all rounded-xl ${
                          isSelected
                            ? 'bg-white border-[#0546F2] shadow-md border-l-4'
                            : 'bg-white/80 border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-black text-[#0B0F19]">
                            {sig.company}
                          </h4>
                          <span
                            className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                              sig.signalType === 'Strong'
                                ? 'bg-blue-50 text-[#0546F2] border border-[#0546F2]/30'
                                : 'bg-neutral-100 text-neutral-700 border border-neutral-300'
                            }`}
                          >
                            {sig.signalType} Signal
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-neutral-800 mb-2">
                          Trigger: {sig.trigger}
                        </p>
                        <div className="text-[11px] text-neutral-500 font-mono mb-2">
                          Source: {sig.detectionSource}
                        </div>
                        <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs text-[#0546F2] font-semibold">
                          <span>Action: {sig.qualificationAction}</span>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Grid */}
      <section className="py-20 bg-[#F4F5F7] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0546F2] block mb-2">
              Deliverables
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B0F19] tracking-tight">
              What's included in our flagship partnership.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientAcquisitionContent.whatIsIncluded.map((item, idx) => (
              <div key={idx} className="bg-white border border-neutral-300 p-8 rounded-2xl shadow-sm">
                <div className="w-8 h-8 bg-blue-50 text-[#0546F2] flex items-center justify-center font-bold mb-4 rounded-lg border border-blue-200">
                  {idx + 1}
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

      {/* Fit vs Not a Fit */}
      <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B0F19] tracking-tight">
              Qualification parameters for Client Acquisition.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-neutral-300 p-8 sm:p-10 bg-white rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-neutral-200">
                <div className="w-7 h-7 bg-[#0546F2] text-white flex items-center justify-center rounded-lg">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <h3 className="text-xl font-black text-[#0B0F19]">A Qualified Fit</h3>
              </div>
              <ul className="space-y-4">
                {clientAcquisitionContent.fitCriteria.fit.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-800 font-medium">
                    <Check className="w-4 h-4 text-[#0546F2] flex-shrink-0 mt-0.5 stroke-[3]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-neutral-300 p-8 sm:p-10 bg-[#F4F5F7] rounded-2xl">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-neutral-300">
                <div className="w-7 h-7 bg-neutral-400 text-white flex items-center justify-center rounded-lg">
                  <X className="w-4 h-4 stroke-[3]" />
                </div>
                <h3 className="text-xl font-black text-[#0B0F19]">Not a Fit</h3>
              </div>
              <ul className="space-y-4">
                {clientAcquisitionContent.fitCriteria.notFit.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-600 font-medium">
                    <X className="w-4 h-4 text-neutral-400 flex-shrink-0 mt-0.5 stroke-[3]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot CTA Strip */}
      <section className="bg-[#0B0F19] text-white py-16 lg:py-20 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0546F2] block mb-2">
              Low-Commitment Entry
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              Evaluate our acquisition system with a pilot.
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Test your intent signal parameters and prospect response rates before making long-term commitments.
            </p>
          </div>
          <button
            type="button"
            onClick={triggerPilotModal}
            className="btn-glow inline-flex items-center justify-center rounded-full bg-[#0546F2] hover:bg-[#0438c7] text-white px-8 py-4 font-bold text-sm tracking-wide shadow-lg transition-all cursor-pointer whitespace-nowrap"
          >
            Apply for a No-Risk Pilot
          </button>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B0F19] tracking-tight">
              Client Acquisition FAQ
            </h2>
          </div>
          <div className="space-y-3">
            {clientAcquisitionContent.faqs.map((faq, idx) => {
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

      {/* Final CTA */}
      <DarkCtaSection
        eyebrowBadge="Predictable Client Acquisition"
        headline="Ready to deploy your outbound acquisition system?"
        subheadline="Tell us about your offer and addressable market. We will tell you directly if our outbound model is a commercial fit."
        primaryButtonText="Apply for a No-Risk Pilot"
        primaryButtonAction={triggerPilotModal}
        secondaryButtonText="Book an Intro Call"
        secondaryButtonHref={CALENDLY_URL}
      />
    </>
  );
};
