import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { caseStudies } from '../data/proofData';
import { Btn } from '../components/kit/Btn';
import { CTABand, PageHero } from '../components/kit/Bits';
import { Reveal } from '../components/kit/Paper';

/** Renders only real case studies. Hidden from the menu until there is at least one. */
export const ResultsPage: React.FC = () => (
  <>
    <SEOHead title="Client Results" description="Pipeline outcomes from Elvtera's signal-based outbound." canonicalPath="/results" />
    <PageHero
      label="Results"
      title={
        <>
          Real results, <span className="accent text-blue">in real numbers.</span>
        </>
      }
      sub="Every number here comes from a real campaign. We don't publish anything we can't stand behind."
    />
    <section className="bg-canvas pb-20">
      <div className="mx-auto max-w-6xl px-5">
        {caseStudies.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 0.05}>
                <Link to={`/results/${s.id}`} className="group flex h-full flex-col rounded-[22px] bg-paper p-7 shadow-card transition-shadow hover:shadow-float">
                  <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-blue">{s.clientIndustry}</span>
                  <div className="display mt-5 text-[56px] leading-none">{s.qualifiedCalls}</div>
                  <div className="mt-1 text-[14px] text-slate">qualified calls in {s.daysToResult} days · deal size {s.dealSize}</div>
                  <p className="mt-5 text-[15px] leading-relaxed text-ink/75">{s.summary}</p>
                  <span className="mt-auto flex items-center gap-1 pt-6 text-[14px] font-medium">
                    Read more <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-xl rounded-[22px] bg-paper p-12 text-center shadow-float">
            <h2 className="display text-[32px]">Case studies are on the way.</h2>
            <p className="mt-3 text-[15px] text-slate">We publish results once clients have signed off on them.</p>
            <Btn variant="dark" className="mt-6" to="/">
              See how it works
            </Btn>
          </div>
        )}
      </div>
    </section>
    <CTABand title={<>Be the next <span className="accent font-normal text-blue-soft">result.</span></>} />
  </>
);
