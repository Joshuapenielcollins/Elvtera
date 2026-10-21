import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SEOHead } from '../components/layout/SEOHead';
import { Button } from '../components/ui/Button';
import { howItWorksStages, TYPICAL_TIMELINE_WEEKS } from '../data/howItWorksData';
import { CALENDLY_URL } from '../data/siteConfig';
import { openPilotApply } from '../utils/analytics';
import { DarkCtaSection } from '../components/common/DarkCtaSection';
import { PatternBackground } from '../components/ui/PatternBackground';
import { Check, ArrowRight, Clock, ShieldCheck, UserCheck } from 'lucide-react';

export const HowItWorksPage: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = howItWorksStages[activeStageIndex];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How Elvtera Puts Qualified Calls On Your Calendar',
    totalTime: 'P90D',
    description:
      'A 5-stage outbound acquisition engineering process from ICP buyer mapping to calibrated pipeline scale.',
  };

  return (
    <>
      <SEOHead
        title="How It Works | Complete Outbound Acquisition Process"
        description={`Explore our disciplined 5-stage client acquisition process. Full transparency on what we deliver and what you do over ${TYPICAL_TIMELINE_WEEKS}.`}
        canonicalPath="/how-it-works"
        jsonLd={jsonLd}
      />

      <Breadcrumbs items={[{ label: 'How It Works' }]} />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-white border-b border-neutral-200 overflow-hidden">
        <PatternBackground variant="light" bokehPositions={['top-right', 'bottom-left']} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 mb-6 rounded-full">
              <Clock className="w-3.5 h-3.5 text-[#0546F2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B0F19]">
                Typical Execution: {TYPICAL_TIMELINE_WEEKS}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B0F19] tracking-tight leading-[1.08] mb-6">
              A systematic engineering process from intent to qualified calls.
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              We operate with complete procedural transparency. You know exactly what we build, which channels we touch, and what is required from your sales team at every stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={CALENDLY_URL} variant="primary" size="md">
                Schedule an Execution Briefing
              </Button>
              <button
                type="button"
                onClick={() => openPilotApply('/how-it-works')}
                className="btn-glow inline-flex items-center justify-center rounded-full bg-white hover:bg-neutral-100 text-[#0B0F19] border border-neutral-300 px-6 py-3 font-bold text-sm tracking-wide shadow-sm transition-all cursor-pointer"
              >
                Apply for a No-Risk Pilot
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pinned Stage Navigator & Detailed Deliverables */}
      <section className="py-20 lg:py-28 bg-[#F4F5F7] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Pinned Stages Selector */}
            <div className="lg:col-span-5 sticky top-28 space-y-3">
              <div className="pb-3 border-b border-neutral-300">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Execution Stages (Click to Inspect)
                </span>
              </div>

              {howItWorksStages.map((stg, idx) => {
                const isActive = activeStageIndex === idx;
                return (
                  <div
                    key={stg.stageNumber}
                    onClick={() => setActiveStageIndex(idx)}
                    className={`p-5 border cursor-pointer transition-all rounded-xl ${
                      isActive
                        ? 'bg-[#0B0F19] text-white border-[#0B0F19] shadow-lg translate-x-1'
                        : 'bg-white text-[#0B0F19] border-neutral-300 hover:border-neutral-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className={`text-xs font-mono font-bold ${
                          isActive ? 'text-[#0546F2]' : 'text-[#0546F2]'
                        }`}
                      >
                        STAGE {stg.stageNumber}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          isActive ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-100 text-neutral-600'
                        }`}
                      >
                        {stg.timeframe}
                      </span>
                    </div>
                    <h3 className="text-base font-black tracking-tight">
                      {stg.title}
                    </h3>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Active Stage Deliverable Breakdown */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#0B0F19] p-8 sm:p-12 rounded-3xl shadow-xl">
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-200">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#0546F2] uppercase block">
                      Active Stage 0{activeStage.stageNumber}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#0B0F19] tracking-tight mt-1">
                      {activeStage.title}
                    </h2>
                  </div>
                  <span className="text-xs font-mono font-bold bg-neutral-100 px-3 py-1 text-neutral-700 rounded-full">
                    {activeStage.timeframe}
                  </span>
                </div>

                <p className="text-base text-neutral-700 leading-relaxed mb-8">
                  {activeStage.summary}
                </p>

                {/* Two Blocks: What We Deliver vs What The Client Does */}
                <div className="space-y-6">
                  {/* What We Deliver */}
                  <div className="p-6 bg-[#F4F5F7] border border-neutral-200 rounded-2xl">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0546F2] mb-4">
                      <ShieldCheck className="w-4 h-4" />
                      What Elvtera Delivers
                    </div>
                    <ul className="space-y-3">
                      {activeStage.whatWeDeliver.map((d, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-800">
                          <Check className="w-4 h-4 text-[#0546F2] flex-shrink-0 mt-0.5 stroke-[3]" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What The Client Does */}
                  <div className="p-6 bg-white border border-neutral-300 rounded-2xl">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B0F19] mb-4">
                      <UserCheck className="w-4 h-4" />
                      What You Do
                    </div>
                    <ul className="space-y-3">
                      {activeStage.whatTheClientDoes.map((c, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                          <ArrowRight className="w-4 h-4 text-neutral-500 flex-shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between">
                  <span className="text-xs text-neutral-500">Targeting 20+ monthly qualified calls</span>
                  <button
                    type="button"
                    onClick={() => openPilotApply('/how-it-works')}
                    className="text-xs font-bold text-[#0546F2] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Apply for a No-Risk Pilot <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Dark CTA Band */}
      <DarkCtaSection
        eyebrowBadge="Operational Intake"
        headline="Want to see how this applies to your offer?"
        subheadline="Schedule a 20-minute operational intake to map your buyer parameters and review target intent signals."
        primaryButtonText="Apply for a No-Risk Pilot"
        primaryButtonAction={() => openPilotApply('/how-it-works')}
        secondaryButtonText="Book an Intro Call"
        secondaryButtonHref={CALENDLY_URL}
      />
    </>
  );
};
