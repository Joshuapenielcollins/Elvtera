import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { heroContent } from '../../data/homeData';
import { CALENDLY_URL } from '../../data/siteConfig';

export const Hero: React.FC = () => {
  const triggerPilotModal = () => {
    window.dispatchEvent(new CustomEvent('open-pilot-modal'));
  };

  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-neutral-200/80 overflow-hidden bg-white">
      {/* Background ambient lighting and dot grid */}
      <div className="absolute inset-0 hero-dot-grid opacity-65 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 ambient-glow-blue pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-[460px] h-[460px] rounded-full blur-[100px] bg-[#0546F2]/8 pointer-events-none" />
      <div className="absolute -bottom-24 -left-20 w-[400px] h-[400px] rounded-full blur-[90px] bg-sky-400/8 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-7">
          {/* Top eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-blue-50/80 border border-blue-200/80 rounded-full shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0546F2] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0546F2]"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0546F2]">
              Done-For-You Client Acquisition
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-[#0B0F19] tracking-[-0.035em] leading-[1.08]">
            {heroContent.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl mx-auto">
            {heroContent.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              onClick={triggerPilotModal}
              className="btn-glow inline-flex items-center justify-center gap-2 rounded-full bg-[#0546F2] px-8 py-4 text-sm font-bold text-white hover:bg-[#0438c7] transition-all cursor-pointer shadow-lg hover:shadow-xl"
            >
              <span>{heroContent.ctaPilotText}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={CALENDLY_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-4 text-sm font-bold text-neutral-800 hover:text-black hover:border-neutral-400 hover:bg-neutral-50 transition-all shadow-sm"
            >
              <span>{heroContent.ctaBookText}</span>
            </a>
          </div>

          {/* Target footnote */}
          <p className="text-xs text-neutral-500 font-mono">
            * {heroContent.footnote}
          </p>

          {/* Three check lines */}
          <div className="pt-6 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {heroContent.checkLines.map((line, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <div className="w-5 h-5 bg-blue-50 text-[#0546F2] border border-blue-200/80 rounded-full flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-neutral-800 text-left">
                  {line.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
