import React, { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { faqCategories } from '../data/faqPageData';
import { CTABand, FAQList, PageHero } from '../components/kit/Bits';
import { Hand, SectionLabel } from '../components/kit/Paper';

export const FAQPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return faqCategories
      .filter((c) => category === 'all' || c.categoryId === category)
      .map((c) => ({
        ...c,
        faqs: c.faqs.filter((f) => !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)),
      }))
      .filter((c) => c.faqs.length > 0);
  }, [query, category]);

  const total = faqCategories.reduce((n, c) => n + c.faqs.length, 0);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqCategories.flatMap((c) =>
      c.faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
    ),
  };

  return (
    <>
      <SEOHead
        title="FAQ | Questions About Elvtera"
        description="Answers about signal-based outbound, qualification, calendar bookings, business systems and the no-risk pilot."
        canonicalPath="/faq"
        jsonLd={jsonLd}
      />

      <PageHero
        label={`FAQ · ${total} questions`}
        title={
          <>
            Ask us <span className="accent text-blue">anything.</span>
          </>
        }
        sub="Search below, or pick a topic. If your question isn't here, a short call is the fastest way to an answer."
      >
        <div className="relative mx-auto mt-10 max-w-6xl px-5">
          <div className="relative max-w-xl">
            <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-ash" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try: channels, pipeline, guarantee, pilot"
              aria-label="Search questions"
              className="h-14 w-full rounded-full bg-paper pl-14 pr-12 text-[16px] shadow-float ring-1 ring-ink/[0.06] placeholder:text-ash focus:outline-none focus:ring-2 focus:ring-blue"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full bg-canvas text-slate"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {[{ categoryId: 'all', categoryName: 'All' }, ...faqCategories].map((c) => (
              <button
                key={c.categoryId}
                type="button"
                onClick={() => setCategory(c.categoryId)}
                aria-pressed={category === c.categoryId}
                className={`rounded-full px-4 py-2 text-[13.5px] font-medium transition-all ${
                  category === c.categoryId ? 'btn-gloss-dark text-white' : 'btn-gloss-light text-ink'
                }`}
              >
                {c.categoryName}
              </button>
            ))}
          </div>
        </div>
      </PageHero>

      <section className="bg-canvas py-14 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-20 px-5">
          {filtered.length === 0 ? (
            <div className="py-16 text-center">
              <p className="display text-[32px]">Nothing matches “{query}”.</p>
              <Hand className="mt-3 text-[24px]">try another word, or just ask us on a call</Hand>
            </div>
          ) : (
            filtered.map((c, i) => (
              <div key={c.categoryId}>
                <SectionLabel n={String(i + 1).padStart(2, '0')} note={`${c.faqs.length} questions`}>
                  {c.categoryName}
                </SectionLabel>
                <div className="mt-8">
                  {/* key forces the first item open again after filtering */}
                  <FAQList key={query + category} items={c.faqs} />
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <CTABand
        quote="Still have a question? We answer them live."
        title={
          <>
            Ask us <span className="accent font-normal text-blue-soft">on a call.</span>
          </>
        }
      />
    </>
  );
};
