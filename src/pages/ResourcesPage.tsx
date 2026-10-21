import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SEOHead } from '../components/layout/SEOHead';
import { Button } from '../components/ui/Button';
import { resourceArticles } from '../data/proofData';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

export const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Outbound Strategy', 'Lead Qualification', 'Systems Architecture'];

  const filteredArticles = resourceArticles.filter(
    (art) => selectedCategory === 'All' || art.category === selectedCategory
  );

  return (
    <>
      <SEOHead
        title="Resources & Briefings | B2B Outbound Intelligence"
        description="Operator briefings on intent sourcing, deliverability protocols, and B2B pipeline conversion."
        canonicalPath="/resources"
      />

      <Breadcrumbs items={[{ label: 'Resources' }]} />

      <section className="py-16 lg:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 mb-6 rounded-full">
              <BookOpen className="w-3.5 h-3.5 text-[#0546F2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B0F19]">
                Operator Briefings
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0B0F19] tracking-tight leading-tight mb-4">
              Resources &amp; Playbooks.
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Actionable guides on intent signals, deliverability engineering, and high-ticket B2B sales pipeline conversion.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F4F5F7] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0546F2] text-white shadow-sm'
                    : 'bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredArticles.length >= 3 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((art) => (
                <div
                  key={art.id}
                  className="bg-white border border-neutral-300 p-8 rounded-3xl shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-100 text-xs text-neutral-500 font-mono">
                      <span>{art.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {art.readingTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-[#0B0F19] mb-3">
                      {art.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                      {art.summary}
                    </p>
                  </div>
                  <Link
                    to={`/resources/${art.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0546F2] hover:text-[#0437be]"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-neutral-300 p-12 sm:p-16 text-center max-w-xl mx-auto rounded-3xl shadow-sm">
              <h2 className="text-xl font-black text-[#0B0F19] mb-2">
                Knowledge Base In Preparation
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                Our operator briefings on outbound intent signals and qualification architecture will be published once editorial review is finalized.
              </p>
              <Link to="/contact">
                <Button variant="primary" size="md">
                  Inquire Directly
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
