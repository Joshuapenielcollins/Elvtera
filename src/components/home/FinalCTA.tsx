import React from 'react';
import { finalCTAContent } from '../../data/homeData';
import { CALENDLY_URL } from '../../data/siteConfig';
import { Button } from '../ui/Button';
import { PatternBackground } from '../ui/PatternBackground';

export const FinalCTA: React.FC = () => {
  const triggerPilotModal = () => {
    window.dispatchEvent(new CustomEvent('open-pilot-modal'));
  };

  return (
    <section className="bg-[#080D1C] text-white py-24 lg:py-32 relative overflow-hidden">
      {/* Background ambient lighting and dot grid matrix */}
      <PatternBackground variant="dark" bokehPositions={['center', 'top-right', 'bottom-left']} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/15 border border-blue-400/30 text-blue-200 rounded-full mb-6 text-xs font-bold uppercase tracking-widest shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0546F2]" />
          <span>Predictable Client Acquisition</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-white max-w-3xl mx-auto leading-[1.08] mb-6">
          {finalCTAContent.headline}
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-10">
          {finalCTAContent.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={triggerPilotModal}
            className="btn-glow inline-flex items-center justify-center gap-2 rounded-full bg-[#0546F2] hover:bg-[#0438c7] text-white px-8 py-4 font-bold text-sm tracking-wide shadow-xl transition-all cursor-pointer"
          >
            <span>{finalCTAContent.primaryButtonText}</span>
          </button>
          <a
            href={CALENDLY_URL}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-4 font-bold text-sm tracking-wide transition-all shadow-sm"
          >
            <span>{finalCTAContent.secondaryButtonText}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
