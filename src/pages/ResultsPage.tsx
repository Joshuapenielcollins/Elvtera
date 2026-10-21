import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SEOHead } from '../components/layout/SEOHead';
import { Button } from '../components/ui/Button';
import { caseStudies } from '../data/proofData';
import { CALENDLY_URL } from '../data/siteConfig';
import { openPilotApply } from '../utils/analytics';
import { ShieldAlert, ArrowRight, BarChart3 } from 'lucide-react';

export const ResultsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Client Results & Performance Data"
        description="Verified pipeline outcomes and campaign metrics from Elvtera's done-for-you client acquisition system."
        canonicalPath="/results"
      />

      <Breadcrumbs items={[{ label: 'Results' }]} />

      <section className="py-16 lg:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 mb-6 rounded-full">
              <BarChart3 className="w-3.5 h-3.5 text-[#0546F2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B0F19]">
                Performance Records
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0B0F19] tracking-tight leading-tight mb-4">
              Verified client results.
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              We document outbound pipeline outcomes based on verified calendar placements and closed deal metrics.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F4F5F7] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {caseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-white border border-neutral-300 p-8 rounded-2xl shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-[#0546F2] block mb-2">
                      {study.clientIndustry}
                    </span>
                    <h3 className="text-2xl font-black text-[#0B0F19] mb-1">
                      {study.qualifiedCalls} Qualified Calls
                    </h3>
                    <p className="text-xs text-neutral-500 font-mono mb-4">
                      Within {study.daysToResult} days &bull; Deal size {study.dealSize}
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                      {study.summary}
                    </p>
                  </div>
                  <Link
                    to={`/results/${study.id}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0546F2] hover:text-[#0437be]"
                  >
                    <span>Read Full Debrief</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-neutral-300 p-12 sm:p-16 text-center max-w-2xl mx-auto rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-neutral-100 text-[#0546F2] flex items-center justify-center mx-auto mb-4 rounded-2xl border border-neutral-200">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black text-[#0B0F19] mb-3">
                Strict Proof Standard
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed mb-8">
                We never publish invented case studies, synthetic statistics, or unverified logos. Performance studies are published only after formal client sign-off and contract verification.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => openPilotApply('/results')}
                  className="btn-glow inline-flex items-center justify-center rounded-full bg-[#0546F2] hover:bg-[#0438c7] text-white px-6 py-3 font-bold text-sm tracking-wide shadow-lg transition-all cursor-pointer whitespace-nowrap"
                >
                  Apply for Pilot
                </button>
                <Button href={CALENDLY_URL} variant="secondary" size="md">
                  Discuss Expected Metrics
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
