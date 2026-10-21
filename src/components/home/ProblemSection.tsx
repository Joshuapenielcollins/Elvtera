import React from 'react';
import { problemSectionContent } from '../../data/homeData';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F4F5F7] border-b border-neutral-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50/80 border border-blue-200/80 rounded-full mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0546F2]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0546F2]">
              {problemSectionContent.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0F19] tracking-[-0.03em] leading-tight">
            {problemSectionContent.title}
          </h2>
        </div>

        {/* 3 Elevated Luxury Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problemSectionContent.statements.map((statement, idx) => {
            const isLast = idx === problemSectionContent.statements.length - 1;
            return (
              <div
                key={idx}
                className={`p-8 lg:p-10 rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                  isLast
                    ? 'bg-[#080D1C] text-white border border-white/15 shadow-[0_16px_40px_rgba(8,13,28,0.3)] hover:-translate-y-1'
                    : 'bg-white text-[#0B0F19] card-premium hover:-translate-y-1'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className={`text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full ${
                        isLast ? 'text-blue-300 bg-white/10 border border-white/10' : 'text-neutral-500 bg-neutral-100'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    {isLast && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-[#0546F2] text-white px-3 py-1 rounded-full shadow-xs">
                        Our Approach
                      </span>
                    )}
                  </div>
                  <h3
                    className={`text-xl sm:text-2xl font-extrabold tracking-tight mb-4 ${
                      isLast ? 'text-white' : 'text-[#0B0F19]'
                    }`}
                  >
                    {statement.title}
                  </h3>
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    isLast ? 'text-neutral-300' : 'text-neutral-600'
                  }`}
                >
                  {statement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
