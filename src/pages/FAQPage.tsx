import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SEOHead } from '../components/layout/SEOHead';
import { Button } from '../components/ui/Button';
import { faqCategories } from '../data/faqPageData';
import { CALENDLY_URL, CONTACT_EMAIL } from '../data/siteConfig';
import { Search, ChevronDown, HelpCircle, Mail, X } from 'lucide-react';

export const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'outbound-intent-0': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Filtered FAQs based on category and search query
  const filteredCategories = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return faqCategories
      .filter((cat) => selectedCategory === 'all' || cat.categoryId === selectedCategory)
      .map((cat) => ({
        ...cat,
        faqs: cat.faqs.filter(
          (faq) =>
            !q ||
            faq.question.toLowerCase().includes(q) ||
            faq.answer.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.faqs.length > 0);
  }, [searchQuery, selectedCategory]);

  // Aggregate questions for JSON-LD schema
  const allMatchingFaqs = filteredCategories.flatMap((c) => c.faqs);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allMatchingFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title="FAQ | Complete Knowledge & Questions"
        description="Search frequently asked questions about Elvtera's outbound client acquisition engine, qualification procedures, sales pipelines, and 30-day pilot terms."
        canonicalPath="/faq"
        jsonLd={jsonLd}
      />

      <Breadcrumbs items={[{ label: 'FAQ' }]} />

      {/* Hero with Search Bar */}
      <section className="py-16 lg:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 mb-6 rounded-full">
              <HelpCircle className="w-3.5 h-3.5 text-[#0546F2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B0F19]">
                Knowledge &amp; Details
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0B0F19] tracking-tight leading-tight mb-4">
              Frequently asked questions.
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 mb-8 leading-relaxed">
              Straight answers on our outbound acquisition process, intent sourcing, technical deliverables, and commercial parameters.
            </p>

            {/* Interactive Search Box */}
            <div className="relative max-w-xl mx-auto">
              <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search questions (e.g. channels, pipeline, guarantee, pilot)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3.5 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0546F2] shadow-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Topics Filter & Accordions */}
      <section className="py-16 bg-[#F4F5F7] border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-full ${
                selectedCategory === 'all'
                  ? 'bg-[#0546F2] text-white shadow-sm'
                  : 'bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400'
              }`}
            >
              All Topics
            </button>
            {faqCategories.map((cat) => (
              <button
                key={cat.categoryId}
                onClick={() => setSelectedCategory(cat.categoryId)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-full ${
                  selectedCategory === cat.categoryId
                    ? 'bg-[#0546F2] text-white shadow-sm'
                    : 'bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400'
                }`}
              >
                {cat.categoryName}
              </button>
            ))}
          </div>

          {/* FAQ Sections */}
          {filteredCategories.length > 0 ? (
            <div className="space-y-10">
              {filteredCategories.map((cat) => (
                <div key={cat.categoryId} className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-neutral-300">
                    <span className="w-2 h-2 rounded-full bg-[#0546F2]" />
                    <h2 className="text-lg font-black text-[#0B0F19] tracking-tight">
                      {cat.categoryName}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {cat.faqs.map((faq, idx) => {
                      const itemKey = `${cat.categoryId}-${idx}`;
                      const isOpen = !!openItems[itemKey];
                      return (
                        <div
                          key={itemKey}
                          className="border border-neutral-300 bg-white rounded-2xl overflow-hidden shadow-sm"
                        >
                          <button
                            type="button"
                            onClick={() => toggleItem(itemKey)}
                            className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                            aria-expanded={isOpen}
                          >
                            <span className="text-base font-black text-[#0B0F19]">
                              {faq.question}
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 text-[#0546F2] transition-transform duration-200 flex-shrink-0 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-600 border-t border-neutral-100 leading-relaxed">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-neutral-300 p-12 text-center rounded-3xl">
              <p className="text-neutral-600 mb-4">
                No questions found matching "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-xs font-bold uppercase tracking-wider text-[#0546F2] hover:underline"
              >
                Reset Search Filters
              </button>
            </div>
          )}

          {/* Direct Support Box */}
          <div className="mt-16 bg-white border border-neutral-300 p-8 sm:p-10 rounded-3xl text-center shadow-sm">
            <div className="w-12 h-12 bg-blue-50 text-[#0546F2] flex items-center justify-center mx-auto mb-4 rounded-xl border border-blue-200">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-[#0B0F19] mb-2">
              Have a specific question about your offer?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mb-6 max-w-md mx-auto">
              Write directly to our principal inbox or schedule a 20-minute qualification intro on our calendar.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href={`mailto:${CONTACT_EMAIL}`} variant="primary" size="md">
                Email {CONTACT_EMAIL}
              </Button>
              <Button href={CALENDLY_URL} variant="secondary" size="md">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
