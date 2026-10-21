import React from 'react';
import { caseStudies } from '../../data/proofData';

export const ResultsSection: React.FC = () => {
  // Strict rule: Proof components render ONLY when their data arrays contain real entries; otherwise hide them completely.
  if (!caseStudies || caseStudies.length === 0) {
    return null;
  }

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#0546F2]" />
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Verified Pipeline Outcomes
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0F19] tracking-tight">
            Documented client results.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((item) => (
            <div key={item.id} className="p-8 border border-neutral-300 bg-[#F4F5F7]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0546F2] mb-2">
                {item.clientIndustry}
              </div>
              <div className="text-3xl font-black text-[#0B0F19] mb-1">
                {item.qualifiedCalls} Calls
              </div>
              <div className="text-xs text-neutral-500 font-mono mb-4">
                In {item.daysToResult} days &bull; Avg Deal {item.dealSize}
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
