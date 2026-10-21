import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SEOHead } from '../components/layout/SEOHead';
import { LegalDocument } from '../data/legalData';
import { AlertCircle, FileText } from 'lucide-react';

interface LegalPageProps {
  document: LegalDocument;
}

export const LegalPage: React.FC<LegalPageProps> = ({ document }) => {
  return (
    <>
      <SEOHead
        title={document.title}
        description={`${document.title} for Elvtera Business Solutions. Review operational terms and policies.`}
        canonicalPath={`/${document.slug}`}
      />

      <Breadcrumbs items={[{ label: document.title }]} />

      <section className="py-16 lg:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 mb-4 rounded-full">
              <FileText className="w-3.5 h-3.5 text-[#0546F2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B0F19]">
                Legal Documentation
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0B0F19] tracking-tight leading-tight mb-2">
              {document.title}
            </h1>
            <p className="text-xs font-mono text-neutral-500">
              Last Updated: {document.lastUpdated} &bull; Elvtera Business Solutions
            </p>
          </div>

          {/* Legal Draft Warning Banner */}
          <div className="p-4 sm:p-5 bg-amber-50 border border-amber-200 rounded-2xl mb-12 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-900 leading-relaxed font-semibold">
              {document.disclaimer}
            </p>
          </div>

          {/* Document Content Sections */}
          <div className="space-y-10">
            {document.sections.map((sec, idx) => (
              <div key={idx} className="border-b border-neutral-100 pb-8 last:border-b-0">
                <h2 className="text-xl font-black text-[#0B0F19] tracking-tight mb-4">
                  {sec.heading}
                </h2>
                <div className="space-y-3">
                  {sec.content.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm text-neutral-600 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Related Legal Links */}
          <div className="mt-16 pt-8 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="text-neutral-500 font-bold uppercase tracking-wider">
              Other Legal Policies:
            </span>
            <div className="flex items-center space-x-6">
              <Link to="/privacy-policy" className="text-[#0546F2] hover:underline font-semibold">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-[#0546F2] hover:underline font-semibold">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-[#0546F2] hover:underline font-semibold">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
