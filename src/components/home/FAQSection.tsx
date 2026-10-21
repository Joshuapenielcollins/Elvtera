import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { homeFaqContent } from '../../data/homeData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-neutral-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50/80 border border-blue-200/80 rounded-full mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0546F2]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0546F2]">
              Clear Answers
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0F19] tracking-[-0.03em] leading-tight">
            Frequently asked questions.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
            Honest operational details. No sales jargon or false guarantees.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {homeFaqContent.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border transition-all duration-200 rounded-2xl overflow-hidden ${
                  isOpen
                    ? 'border-[#0546F2]/40 shadow-[0_4px_20px_rgba(5,70,242,0.06)] bg-white ring-1 ring-[#0546F2]/10'
                    : 'border-neutral-200/90 bg-white hover:border-neutral-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#0546F2] cursor-pointer"
                  aria-expanded={isOpen}
                  id={`faq-btn-${idx}`}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <span className="text-base sm:text-lg font-bold text-[#0B0F19] tracking-tight">
                    {item.question}
                  </span>
                  <div
                    className={`size-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? 'bg-blue-50 text-[#0546F2]' : 'bg-neutral-100 text-neutral-500'
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                {isOpen && (
                  <div
                    id={`faq-panel-${idx}`}
                    role="region"
                    aria-labelledby={`faq-btn-${idx}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-600 leading-relaxed border-t border-neutral-100/80"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
