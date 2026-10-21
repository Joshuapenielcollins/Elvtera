import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SEOHead } from '../components/layout/SEOHead';
import { Button } from '../components/ui/Button';
import { resourceArticles } from '../data/proofData';
import { CALENDLY_URL } from '../data/siteConfig';
import { openPilotApply } from '../utils/analytics';
import { Clock, ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';

export const ResourceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = resourceArticles.find((a) => a.id === slug);

  if (!article) {
    return <Navigate to="/resources" replace />;
  }

  const related = resourceArticles.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <>
      <SEOHead
        title={article.title}
        description={article.summary}
        canonicalPath={`/resources/${article.id}`}
      />

      <Breadcrumbs
        items={[
          { label: 'Resources', href: '/resources' },
          { label: article.title },
        ]}
      />

      <section className="py-16 lg:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-[#0546F2] mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Resources</span>
          </Link>

          <div className="flex items-center gap-3 text-xs text-neutral-500 font-mono mb-3">
            <span className="bg-neutral-100 text-[#0546F2] font-bold px-2.5 py-1 rounded-full">
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {article.readingTime}
            </span>
            <span>&bull;</span>
            <span>Published {article.publishDate}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0F19] tracking-tight mb-8 leading-tight">
            {article.title}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Table of Contents Sticky Sidebar */}
            <div className="lg:col-span-4 sticky top-28 p-6 bg-[#F4F5F7] border border-neutral-300 rounded-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-3">
                Table of Contents
              </span>
              <ul className="space-y-2 text-xs text-neutral-700">
                <li><a href="#overview" className="hover:text-[#0546F2]">1. Executive Overview</a></li>
                <li><a href="#signals" className="hover:text-[#0546F2]">2. Identifying Intent Signals</a></li>
                <li><a href="#execution" className="hover:text-[#0546F2]">3. Multi-Channel Execution</a></li>
                <li><a href="#action" className="hover:text-[#0546F2]">4. Implementation Blueprint</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <div className="lg:col-span-8 prose text-neutral-700 space-y-6">
              <p className="text-base sm:text-lg font-medium text-neutral-900 leading-relaxed">
                {article.summary}
              </p>
              <div id="overview">
                <h2 className="text-2xl font-black text-[#0B0F19] mt-8 mb-3">1. Executive Overview</h2>
                <p className="text-sm leading-relaxed">
                  Most cold outreach campaigns fail because they lack verified intent triggers. Reaching out to executives when no organizational shift has occurred yields single-digit open rates and zero pipeline momentum.
                </p>
              </div>
              <div id="signals">
                <h2 className="text-2xl font-black text-[#0B0F19] mt-8 mb-3">2. Identifying Intent Signals</h2>
                <p className="text-sm leading-relaxed">
                  Intent signals must be monitored across corporate filings, leadership hires, and operational changes. When a company posts multiple openings in a critical department, that indicates capital allocation and immediate pain.
                </p>
              </div>
              <div id="execution">
                <h2 className="text-2xl font-black text-[#0B0F19] mt-8 mb-3">3. Multi-Channel Execution</h2>
                <p className="text-sm leading-relaxed">
                  Sequencing should avoid aggressive selling. Direct communications should reference specific operational triggers, provide concise diagnostic context, and invite a peer-to-peer discussion.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {related.length > 0 && (
            <div className="mt-16 pt-12 border-t border-neutral-200">
              <h3 className="text-lg font-black text-[#0B0F19] mb-6">Related Briefings</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/resources/${rel.id}`}
                    className="p-6 border border-neutral-300 rounded-xl bg-[#F4F5F7] block hover:border-[#0546F2] transition-colors"
                  >
                    <span className="text-xs font-mono text-[#0546F2] font-bold block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="text-base font-bold text-[#0B0F19] mb-2">{rel.title}</h4>
                    <span className="text-xs font-bold text-[#0546F2] flex items-center gap-1">
                      Read brief <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Bottom CTA Block */}
          <div className="mt-16 p-8 bg-[#0B0F19] text-white rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-xl font-black text-white mb-1">Want this system built for your company?</h3>
              <p className="text-xs text-neutral-300">We target 20+ qualified calls a month within 90 days.</p>
            </div>
            <button
              type="button"
              onClick={() => openPilotApply(`/resources/${article.id}`)}
              className="btn-glow inline-flex items-center justify-center rounded-full bg-[#0546F2] hover:bg-[#0438c7] text-white px-6 py-3 font-bold text-sm tracking-wide shadow-lg transition-all cursor-pointer whitespace-nowrap"
            >
              Apply for Pilot
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
