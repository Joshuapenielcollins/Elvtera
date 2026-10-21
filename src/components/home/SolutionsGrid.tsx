import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { solutionsGridContent } from '../../data/homeData';

export const SolutionsGrid: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50/80 border border-blue-200/80 rounded-full mb-3 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0546F2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0546F2]">
                Core Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0F19] tracking-[-0.03em] leading-tight">
              Three focused solutions.
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-md leading-relaxed">
            We do not sell broad services or software development. We engineer predictable acquisition and the conversion infrastructure that supports it.
          </p>
        </div>

        {/* 3 Elevated Luxury Solution Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutionsGridContent.map((item, idx) => {
            const isFlagship = idx === 0;
            return (
              <div
                key={item.number}
                className={`p-8 lg:p-10 rounded-3xl flex flex-col justify-between group transition-all duration-300 ${
                  isFlagship
                    ? 'bg-gradient-to-b from-blue-50/40 via-white to-white border-2 border-[#0546F2]/40 shadow-[0_16px_40px_rgba(5,70,242,0.08)] hover:shadow-[0_20px_50px_rgba(5,70,242,0.14)] hover:-translate-y-1'
                    : 'bg-white card-premium hover:-translate-y-1'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-200/80">
                    <span className="text-2xl font-black text-[#0546F2] font-mono">
                      {item.number}
                    </span>
                    {isFlagship ? (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-[#0546F2] text-white px-3 py-1 rounded-full shadow-xs">
                        Flagship System
                      </span>
                    ) : (
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 bg-neutral-100 px-3 py-1 rounded-full">
                        {item.tagline}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#0B0F19] tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-neutral-100 mb-8">
                    {item.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                        <div className="w-4 h-4 bg-blue-50 text-[#0546F2] border border-blue-200/80 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    to={`/solutions/${item.slug}`}
                    className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all rounded-full py-2.5 px-4 ${
                      isFlagship
                        ? 'bg-[#0546F2] text-white hover:bg-[#0438c7] shadow-sm'
                        : 'text-[#0546F2] bg-blue-50 hover:bg-blue-100/80'
                    }`}
                  >
                    <span>Explore {item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
