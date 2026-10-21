import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SEOHead } from '../components/layout/SEOHead';
import { Button } from '../components/ui/Button';
import { caseStudies } from '../data/proofData';
import { CALENDLY_URL } from '../data/siteConfig';
import { openPilotApply } from '../utils/analytics';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export const ResultDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((s) => s.id === slug);

  if (!study) {
    return <Navigate to="/results" replace />;
  }

  return (
    <>
      <SEOHead
        title={`Case Study: ${study.clientIndustry}`}
        description={`How Elvtera generated ${study.qualifiedCalls} qualified sales calls in ${study.daysToResult} days for a ${study.clientIndustry} company.`}
        canonicalPath={`/results/${study.id}`}
      />

      <Breadcrumbs
        items={[
          { label: 'Results', href: '/results' },
          { label: study.clientIndustry },
        ]}
      />

      <section className="py-16 lg:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/results"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-[#0546F2] mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Results</span>
          </Link>

          <span className="text-xs font-mono font-bold text-[#0546F2] uppercase block mb-2">
            Sector: {study.clientIndustry}
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0B0F19] tracking-tight mb-6">
            {study.qualifiedCalls} Qualified Calls Booked in {study.daysToResult} Days
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-6 bg-[#F4F5F7] border border-neutral-300 rounded-2xl mb-10">
            <div>
              <span className="text-xs text-neutral-500 font-mono block">Calls Booked</span>
              <span className="text-2xl font-black text-[#0546F2]">{study.qualifiedCalls}</span>
            </div>
            <div>
              <span className="text-xs text-neutral-500 font-mono block">Timeframe</span>
              <span className="text-2xl font-black text-[#0B0F19]">{study.daysToResult} Days</span>
            </div>
            <div>
              <span className="text-xs text-neutral-500 font-mono block">Average Deal Value</span>
              <span className="text-2xl font-black text-[#0B0F19]">{study.dealSize}</span>
            </div>
          </div>

          <div className="prose max-w-none text-neutral-700 leading-relaxed space-y-6">
            <h2 className="text-2xl font-black text-[#0B0F19]">Campaign Summary</h2>
            <p className="text-base leading-relaxed">{study.summary}</p>
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => openPilotApply(`/results/${study.id}`)}
              className="btn-glow inline-flex items-center justify-center rounded-full bg-[#0546F2] hover:bg-[#0438c7] text-white px-6 py-3 font-bold text-sm tracking-wide shadow-lg transition-all cursor-pointer whitespace-nowrap"
            >
              Apply for Pilot
            </button>
            <Button href={CALENDLY_URL} variant="secondary" size="md">
              Schedule Strategy Call
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
