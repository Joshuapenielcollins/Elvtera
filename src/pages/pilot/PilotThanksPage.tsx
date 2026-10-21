import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { SEOHead } from '../../components/layout/SEOHead';
import { ArrowLeft, Clock, CheckCircle2 } from 'lucide-react';

export const PilotThanksPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Application Received | Elvtera"
        description="Thanks. We'll review your application and email you within 2 working days."
        canonicalPath="/pilot/thanks"
      />

      <Breadcrumbs
        items={[
          { label: 'Pilot', href: '/pilot' },
          { label: 'Application Received' },
        ]}
      />

      <div className="py-20 lg:py-28 bg-white border-b border-black/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 bg-blue-50 text-[#0546F2] flex items-center justify-center mx-auto mb-6">
            <Clock className="w-7 h-7" />
          </div>

          <div className="inline-block px-3 py-1 bg-neutral-100 border border-neutral-300 text-xs font-mono font-bold uppercase tracking-wider text-black mb-6">
            Review In Progress
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight mb-6">
            Thanks. We'll review your application and email you within 2 working days.
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed mb-10">
            Our strategy team evaluates every submission against current market intent data to ensure we can deliver a strong return on outbound acquisition for your offer.
          </p>

          <div className="p-6 bg-neutral-50 border border-black/10 max-w-md mx-auto mb-10 text-left">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-3">
              What to expect next
            </h3>
            <ul className="space-y-2.5 text-xs text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0546F2] mt-1.5 shrink-0" />
                <span>Our team reviews your website and ICP parameters.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0546F2] mt-1.5 shrink-0" />
                <span>We check live intent signal volumes across your sector.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0546F2] mt-1.5 shrink-0" />
                <span>You will receive an email briefing directly from our team.</span>
              </li>
            </ul>
          </div>

          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-bold text-sm tracking-wide border border-black hover:bg-[#0546F2] hover:border-[#0546F2] transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Home Page</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
