import React from 'react';
import { CALENDLY_URL } from '../../data/siteConfig';

interface DarkCtaSectionProps {
  eyebrowBadge?: string;
  headline: string;
  subheadline: string;
  primaryButtonText?: string;
  primaryButtonAction?: () => void;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  secondaryButtonAction?: () => void;
  className?: string;
}

export const DarkCtaSection: React.FC<DarkCtaSectionProps> = ({
  eyebrowBadge = 'Predictable Client Acquisition',
  headline,
  subheadline,
  primaryButtonText = 'Apply for a No-Risk Pilot',
  primaryButtonAction,
  secondaryButtonText = 'Book an Intro Call',
  secondaryButtonHref = CALENDLY_URL,
  secondaryButtonAction,
  className = '',
}) => {
  const handlePrimaryClick = () => {
    if (primaryButtonAction) {
      primaryButtonAction();
    } else {
      window.dispatchEvent(new CustomEvent('open-pilot-modal'));
    }
  };

  return (
    <section className={`bg-[#080D1C] text-white py-24 lg:py-32 relative overflow-hidden ${className}`}>
      {/* Background ambient lighting, bokeh orbs, and subtle dot grid */}
      <div className="absolute inset-0 pattern-dot-grid-dark opacity-35 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#0546F2]/25 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-[380px] h-[380px] bg-sky-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[380px] h-[380px] bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {eyebrowBadge && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/15 border border-blue-400/30 text-blue-200 rounded-full mb-6 text-xs font-bold uppercase tracking-widest shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0546F2]" />
            <span>{eyebrowBadge}</span>
          </div>
        )}

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-white max-w-3xl mx-auto leading-[1.08] mb-6">
          {headline}
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-10">
          {subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            type="button"
            onClick={handlePrimaryClick}
            className="btn-glow inline-flex items-center justify-center gap-2 rounded-full bg-[#0546F2] hover:bg-[#0438c7] text-white px-8 py-4 font-bold text-sm tracking-wide shadow-xl transition-all cursor-pointer"
          >
            <span>{primaryButtonText}</span>
          </button>

          {secondaryButtonAction ? (
            <button
              type="button"
              onClick={secondaryButtonAction}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-4 font-bold text-sm tracking-wide transition-all shadow-sm cursor-pointer"
            >
              <span>{secondaryButtonText}</span>
            </button>
          ) : (
            <a
              href={secondaryButtonHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-4 font-bold text-sm tracking-wide transition-all shadow-sm"
            >
              <span>{secondaryButtonText}</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
