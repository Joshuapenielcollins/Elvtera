import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { SEOHead } from '../../components/layout/SEOHead';
import { Button } from '../../components/ui/Button';
import { solutionsHubContent } from '../../data/solutionsData';
import { solutionsGridContent } from '../../data/homeData';
import { CALENDLY_URL } from '../../data/siteConfig';
import { openPilotApply } from '../../utils/analytics';
import { ArrowRight, Check, HelpCircle } from 'lucide-react';

export const SolutionsHubPage: React.FC = () => {
  const [selectedFitIndex, setSelectedFitIndex] = useState(0);
  const activeFit = solutionsHubContent.whichOneFitsYou[selectedFitIndex];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Elvtera Solutions Stack',
    url: 'https://elvtera.com/solutions',
    description: solutionsHubContent.subtitle,
  };

  return (
    <>
      <SEOHead
        title="Solutions Stack"
        description="Explore Elvtera's three focused capabilities: Client Acquisition, Business Systems, and Launch. Predictable outbound systems and conversion infrastructure."
        canonicalPath="/solutions"
        jsonLd={jsonLd}
      />

      <Breadcrumbs items={[{ label: 'Solutions' }]} />

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 mb-6 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#0546F2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B0F19]">
                {solutionsHubContent.eyebrow}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B0F19] tracking-tight leading-[1.1] mb-6">
              {solutionsHubContent.title}
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              {solutionsHubContent.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href={CALENDLY_URL} variant="primary" size="md">
                Schedule a Solution Intake
              </Button>
              <button
                type="button"
                onClick={() => openPilotApply('/solutions')}
                className="btn-glow inline-flex items-center justify-center rounded-full bg-white hover:bg-neutral-100 text-[#0B0F19] border border-neutral-300 px-6 py-3 font-bold text-sm tracking-wide shadow-sm transition-all cursor-pointer"
              >
                Apply for a No-Risk Pilot
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Cards Grid */}
      <section className="py-20 bg-[#F4F5F7] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutionsGridContent.map((sol) => (
              <div
                key={sol.slug}
                className="bg-white border border-neutral-300 p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow rounded-2xl"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-200">
                    <span className="text-2xl font-black text-[#0546F2] font-mono">
                      {sol.number}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      {sol.tagline}
                    </span>
                  </div>

                  <h2 className="text-2xl font-black text-[#0B0F19] tracking-tight mb-3">
                    {sol.title}
                  </h2>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {sol.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-neutral-100 mb-8">
                    {sol.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                        <div className="w-4 h-4 bg-blue-50 text-[#0546F2] flex items-center justify-center flex-shrink-0 mt-0.5 border border-blue-200 rounded-md">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    to={`/solutions/${sol.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#0B0F19] text-white text-xs font-bold uppercase tracking-wider btn-brand-fill hover:border-[#0546F2] rounded-full"
                  >
                    <span>View {sol.title} Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "Which One Fits You" Selector */}
      <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0546F2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Fit Evaluation
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B0F19] tracking-tight">
              Which solution fits your current situation?
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Select the statement that matches your business reality to see our direct recommendation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Options list */}
            <div className="lg:col-span-6 space-y-3">
              {solutionsHubContent.whichOneFitsYou.map((opt, idx) => {
                const isSelected = selectedFitIndex === idx;
                return (
                  <div
                    key={opt.id}
                    onClick={() => setSelectedFitIndex(idx)}
                    className={`p-6 border cursor-pointer transition-all rounded-xl ${
                      isSelected
                        ? 'bg-[#0B0F19] text-white border-[#0B0F19] shadow-md'
                        : 'bg-white text-[#0B0F19] border-neutral-300 hover:border-neutral-400'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 rounded-full border text-xs font-mono font-bold ${
                          isSelected
                            ? 'bg-[#0546F2] text-white border-[#0546F2]'
                            : 'bg-neutral-100 text-neutral-500 border-neutral-300'
                        }`}
                      >
                        {idx + 1}
                      </div>
                      <p className="text-sm font-semibold leading-relaxed">
                        "{opt.situation}"
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Recommendation Display Card */}
            <div className="lg:col-span-6 sticky top-28">
              <div className="border border-[#0B0F19] bg-[#F4F5F7] p-8 sm:p-10 rounded-2xl shadow-xl">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0546F2] mb-3">
                  <HelpCircle className="w-4 h-4" />
                  Recommended Architecture
                </div>

                <h3 className="text-2xl font-black text-[#0B0F19] tracking-tight mb-4">
                  {activeFit.recommendationTitle}
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed mb-8">
                  {activeFit.explanation}
                </p>

                <div className="pt-6 border-t border-neutral-300 flex flex-col sm:flex-row gap-3">
                  <Link to={activeFit.recommendationSlug} className="flex-1">
                    <Button variant="primary" size="md" className="w-full justify-center">
                      Read Complete Blueprint
                    </Button>
                  </Link>
                  <button
                    type="button"
                    onClick={() => openPilotApply('/solutions')}
                    className="flex-1 btn-glow inline-flex items-center justify-center rounded-full bg-white hover:bg-neutral-100 text-[#0B0F19] border border-neutral-300 px-6 py-3 font-bold text-sm tracking-wide shadow-sm transition-all cursor-pointer"
                  >
                    Apply for a No-Risk Pilot
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
