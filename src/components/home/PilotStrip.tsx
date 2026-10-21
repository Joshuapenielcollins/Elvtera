import React from 'react';
import { Link } from 'react-router-dom';
import { pilotCopy } from '../../data/pilotConfig';
import { openPilotApply } from '../../utils/analytics';
import { ArrowRight } from 'lucide-react';

export const PilotStrip: React.FC = () => {
  return (
    <section className="bg-[#080D1C] text-white py-16 lg:py-24 relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 ambient-glow-dark pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#0d163a] via-[#142666] to-[#0d163a] border border-blue-400/20 p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle light streak */}
          <div className="absolute -top-24 right-1/4 w-72 h-72 bg-[#0546F2]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 text-blue-200 text-xs font-mono font-bold uppercase tracking-wider border border-blue-400/20 rounded-full shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3B82F6]"></span>
                </span>
                <span>No-Risk Pilot Offer</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-white leading-tight">
                {pilotCopy.homeStrip.headline}
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
                {pilotCopy.homeStrip.body}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
              <button
                type="button"
                onClick={() => openPilotApply('/')}
                className="btn-glow inline-flex items-center justify-center gap-2 rounded-full bg-[#0546F2] hover:bg-[#0438c7] text-white px-8 py-4 font-bold text-sm tracking-wide shadow-lg transition-all cursor-pointer group"
              >
                <span>Apply for a No-Risk Pilot</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
