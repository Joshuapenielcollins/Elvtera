import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { caseStudies } from '../data/proofData';
import { openPilotApply } from '../utils/analytics';
import { Btn } from '../components/kit/Btn';
import { PageHero } from '../components/kit/Bits';

export const ResultDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((s) => s.id === slug);
  if (!study) return <Navigate to="/results" replace />;

  const stats = [
    ['Qualified calls', String(study.qualifiedCalls)],
    ['Time to result', `${study.daysToResult} days`],
    ['Deal size', study.dealSize],
  ];

  return (
    <>
      <SEOHead
        title={`Case Study: ${study.clientIndustry}`}
        description={`${study.qualifiedCalls} qualified sales calls in ${study.daysToResult} days for a ${study.clientIndustry} company.`}
        canonicalPath={`/results/${study.id}`}
      />
      <PageHero
        label={`Case study · ${study.clientIndustry}`}
        title={
          <>
            {study.qualifiedCalls} qualified calls <span className="accent text-blue">in {study.daysToResult} days.</span>
          </>
        }
      >
        <div className="relative mx-auto mt-6 max-w-6xl px-5">
          <Link to="/results" className="inline-flex items-center gap-1.5 text-[14px] text-slate hover:text-ink">
            <ArrowLeft className="h-4 w-4" /> All results
          </Link>
        </div>
      </PageHero>
      <section className="bg-canvas pb-20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map(([k, v]) => (
              <div key={k} className="rounded-[20px] bg-paper p-6 shadow-card">
                <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-slate">{k}</div>
                <div className="display mt-3 text-[40px] leading-none">{v}</div>
              </div>
            ))}
          </div>
          <article className="mt-6 rounded-[22px] bg-paper p-8 shadow-float sm:p-12">
            <h2 className="display text-[32px]">What happened</h2>
            <p className="mt-4 text-[17px] leading-relaxed text-slate">{study.summary}</p>
            <Btn variant="dark" arrow className="mt-8" onClick={() => openPilotApply(`/results/${study.id}`)}>
              Apply for a no-risk pilot
            </Btn>
          </article>
        </div>
      </section>
    </>
  );
};
