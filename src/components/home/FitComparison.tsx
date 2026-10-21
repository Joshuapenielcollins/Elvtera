import React from 'react';
import { Check, X } from 'lucide-react';
import { fitCriteriaContent } from '../../data/homeData';

export const FitComparison: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#080D1C] text-white rounded-full mb-3 text-xs font-bold uppercase tracking-widest shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0546F2]" />
            <span>Partnership Parameters</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0F19] tracking-[-0.03em] leading-tight">
            Who Elvtera Works Best For
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-4 leading-relaxed max-w-2xl mx-auto">
            We are deliberate about the companies we partner with. Outbound client acquisition yields maximum ROI under specific operational conditions.
          </p>
        </div>

        {/* Section 1: Usually Not a Fit Row */}
        <div className="mb-8">
          <div className="text-xs font-extrabold uppercase tracking-wider text-neutral-500 mb-3 px-1">
            Usually not a fit
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {fitCriteriaContent.notFit.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-2xl bg-neutral-100/70 border border-neutral-200/70 p-4 transition-all hover:bg-neutral-100"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-500 shadow-xs">
                  <X className="w-4 h-4 stroke-[2.5]" />
                </span>
                <p className="text-xs font-semibold text-neutral-700 leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Best Fit Elevated Midnight Container (Hyperke Style) */}
        <div className="relative rounded-3xl bg-[#080D1C] p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl overflow-hidden">
          {/* Ambient inner illumination */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 mb-6">
            <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-300">
              Best Fit
            </h3>
            <span className="text-xs text-blue-200/70 font-mono">
              Engineered for high-ticket B2B growth
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 relative z-10">
            {fitCriteriaContent.fit.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between gap-4 rounded-2xl bg-gradient-to-b from-[#182a69] to-[#0d163a] border border-blue-400/25 p-5 shadow-lg transition-all hover:border-blue-400/50 hover:-translate-y-1"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/80 bg-white/10 text-white shadow-sm">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
                <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
