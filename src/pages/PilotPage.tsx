import React, { useState, useEffect, useRef } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SEOHead } from '../components/layout/SEOHead';
import {
  FILLOUT_PILOT_URL,
  CALENDLY_URL,
  PILOT_LENGTH,
  PILOT_FEE_LINE,
  RISK_REVERSAL,
  pilotCopy,
} from '../data/pilotConfig';
import { openPilotApply, openBookCall, trackEvent, getPilotApplyUrl } from '../utils/analytics';
import { ChevronDown, ArrowRight, ExternalLink, Check, X, ShieldAlert } from 'lucide-react';

export const PilotPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [timelineVisible, setTimelineVisible] = useState(false);

  useEffect(() => {
    trackEvent('form_embed_view', { page: '/pilot' });

    // Intersection observer for horizontal timeline draw animation
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimelineVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Elvtera No-Risk Pilot',
    provider: {
      '@type': 'Organization',
      name: 'Elvtera Business Solutions',
      url: 'https://elvtera.com',
    },
    description: pilotCopy.hero.sub,
  };

  const applyUrl = getPilotApplyUrl('/pilot');

  return (
    <>
      <SEOHead
        title="No-Risk Pilot Offer"
        description={`Test our client acquisition system with a structured ${PILOT_LENGTH} pilot. See real intent prospects before you pay.`}
        canonicalPath="/pilot"
        jsonLd={jsonLd}
      />

      <Breadcrumbs items={[{ label: 'No-Risk Pilot' }]} />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-neutral-100 border border-neutral-300 text-xs font-mono font-bold uppercase tracking-wider text-black mb-6">
              {PILOT_LENGTH} No-Risk Evaluation
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight leading-[1.08] mb-6">
              {pilotCopy.hero.headline}
            </h1>
            <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed mb-8">
              {pilotCopy.hero.sub}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => openPilotApply('/pilot')}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-bold text-sm tracking-wide border border-black hover:bg-[#0546F2] hover:border-[#0546F2] transition-colors duration-200 cursor-pointer"
              >
                <span>{pilotCopy.hero.applyButton}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={openBookCall}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold text-sm tracking-wide border border-black hover:bg-neutral-100 transition-colors duration-200 cursor-pointer"
              >
                <span>{pilotCopy.hero.bookButton}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How the pilot works (Animated 5-step horizontal timeline) */}
      <section ref={timelineRef} className="py-20 bg-neutral-50 border-b border-black/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              How the pilot works
            </h2>
            <p className="text-neutral-600 mt-2 text-sm sm:text-base">
              A structured 5-step process designed to prove real intent before any long-term commitment.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative pt-6">
            {/* Horizontal progress track line (desktop) */}
            <div className="hidden lg:block absolute top-[43px] left-[5%] right-[5%] h-1 bg-neutral-200 z-0">
              <div
                className="h-full bg-[#0546F2] transition-all duration-1000 ease-out origin-left"
                style={{
                  width: timelineVisible ? '100%' : '0%',
                }}
              />
            </div>

            {/* 5 Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {pilotCopy.timelineSteps.map((item, idx) => {
                const isStepFilled = timelineVisible;
                return (
                  <div
                    key={item.step}
                    className="bg-white border border-black/10 p-6 flex flex-col justify-between shadow-xs transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div>
                      {/* Step Marker */}
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`w-9 h-9 flex items-center justify-center font-mono font-black text-sm border transition-colors duration-500 ${
                            isStepFilled
                              ? 'bg-[#0546F2] border-[#0546F2] text-white'
                              : 'bg-white border-neutral-300 text-neutral-500'
                          }`}
                          style={{
                            transitionDelay: `${idx * 180}ms`,
                          }}
                        >
                          0{item.step}
                        </div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 lg:hidden">
                          Step 0{item.step}
                        </span>
                      </div>

                      <h3 className="text-base font-black text-black leading-snug mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What You Get vs What We Need From You */}
      <section className="py-20 bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* What you get */}
            <div className="p-8 sm:p-10 border border-black/10 bg-neutral-50 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black text-black mb-6">
                  What you get
                </h3>
                <ul className="space-y-4">
                  {pilotCopy.whatYouGet.map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#0546F2] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-sm sm:text-base text-neutral-800 font-medium">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* What we need from you */}
            <div className="p-8 sm:p-10 border border-black/10 bg-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black text-black mb-6">
                  What we need from you
                </h3>
                <ul className="space-y-4">
                  {pilotCopy.whatWeNeedFromYou.map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-black text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-sm sm:text-base text-neutral-800 font-medium">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200 text-xs font-mono text-neutral-500">
                Total client time investment: approximately 75 minutes across the entire pilot period.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Reversal (Blue Bordered Block) */}
      <section className="py-14 bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-2 border-[#0546F2] p-8 sm:p-10 bg-blue-50/40">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0546F2]">
                  Risk Reversal Guarantee
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-black">
                  {pilotCopy.riskReversal.headline}
                </h3>
                <p className="text-base sm:text-lg text-neutral-800 max-w-3xl leading-relaxed">
                  {pilotCopy.riskReversal.body}
                </p>
              </div>

              <button
                type="button"
                onClick={() => openPilotApply('/pilot')}
                className="group shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0546F2] text-white font-bold text-sm tracking-wide border border-[#0546F2] hover:bg-[#0438c7] transition-colors cursor-pointer"
              >
                <span>Apply for Pilot</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For (Two Columns: Best Fit vs Usually Not a Fit) */}
      <section className="py-20 bg-neutral-50 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              Who it's for
            </h2>
            <p className="text-neutral-600 mt-2 text-sm sm:text-base">
              We vet every applicant to ensure outbound economics work for your deal size.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Best Fit */}
            <div className="p-8 bg-white border border-black/10">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#0546F2] mb-6">
                <Check className="w-4 h-4 stroke-[3]" />
                Best fit
              </div>
              <ul className="space-y-4">
                {pilotCopy.whoItIsFor.bestFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-neutral-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0546F2] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Usually not a fit */}
            <div className="p-8 bg-white border border-black/10">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-neutral-500 mb-6">
                <X className="w-4 h-4 stroke-[3]" />
                Usually not a fit
              </div>
              <ul className="space-y-4">
                {pilotCopy.whoItIsFor.notFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-neutral-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white border-b border-black/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-3">
            {pilotCopy.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-black/10 bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold text-black">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0546F2] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-700 border-t border-neutral-100 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Apply Section with Embedded Fillout Form */}
      <section id="apply" className="py-20 bg-neutral-50 border-b border-black/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              {pilotCopy.applySection.heading}
            </h2>
            <p className="text-neutral-600 mt-2 text-sm sm:text-base">
              Submit your company details. If qualified, we review your market signals and show you real prospects in a 45-minute proof call.
            </p>
          </div>

          <div className="bg-white border border-black/10 p-4 sm:p-8 min-h-[600px] relative">
            {/* If placeholder #pilot-form is used, show responsive mock form with direct button */}
            {FILLOUT_PILOT_URL.startsWith('#') ? (
              <div className="max-w-xl mx-auto py-8">
                <div className="mb-6 p-4 bg-blue-50 border border-[#0546F2] text-xs font-mono text-neutral-700">
                  Fillout Form Embed Placeholder ({FILLOUT_PILOT_URL}). Replace <code>FILLOUT_PILOT_URL</code> in <code>src/data/pilotConfig.ts</code> with your live Fillout URL to render your form live.
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.location.href = '/pilot/book';
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 border border-black/20 text-sm focus:outline-none focus:border-[#0546F2]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">
                      Business Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 border border-black/20 text-sm focus:outline-none focus:border-[#0546F2]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">
                      Company Website
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://company.com"
                      className="w-full px-4 py-3 border border-black/20 text-sm focus:outline-none focus:border-[#0546F2]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">
                      Average Deal Size
                    </label>
                    <select className="w-full px-4 py-3 border border-black/20 text-sm focus:outline-none focus:border-[#0546F2]">
                      <option>$5,000 – $15,000</option>
                      <option>$15,000 – $50,000</option>
                      <option>$50,000+</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#0546F2] text-white font-bold text-sm tracking-wide hover:bg-[#0438c7] transition-colors cursor-pointer"
                  >
                    Submit Pilot Application
                  </button>
                </form>
              </div>
            ) : (
              <div className="relative w-full h-[650px]">
                {!iframeLoaded && (
                  <div className="absolute inset-0 bg-neutral-100 animate-pulse flex flex-col items-center justify-center p-8 space-y-4">
                    <div className="w-12 h-12 border-4 border-neutral-300 border-t-[#0546F2] rounded-full animate-spin" />
                    <p className="text-xs font-mono text-neutral-500">
                      Loading application form...
                    </p>
                  </div>
                )}
                <iframe
                  src={applyUrl}
                  title="Apply for a No-Risk Pilot"
                  className="w-full h-full border-0"
                  onLoad={() => setIframeLoaded(true)}
                />
              </div>
            )}

            {/* Fallback Link */}
            <div className="mt-6 pt-4 border-t border-neutral-200 text-center">
              <a
                href={applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#0546F2] hover:underline"
              >
                <span>Open form in a new tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
