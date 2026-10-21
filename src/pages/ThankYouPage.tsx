import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SEOHead } from '../components/layout/SEOHead';
import { Button } from '../components/ui/Button';
import { CALENDLY_URL } from '../data/siteConfig';
import { CheckCircle2, Calendar, ArrowLeft } from 'lucide-react';

export const ThankYouPage: React.FC = () => {
  const location = useLocation();
  const state = (location.state as { name?: string; email?: string }) || {};

  return (
    <>
      <SEOHead
        title="Thank You"
        description="Your submission has been received by Elvtera Business Solutions."
        canonicalPath="/thank-you"
      />

      <Breadcrumbs items={[{ label: 'Thank You' }]} />

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-blue-50 text-[#0546F2] flex items-center justify-center mx-auto mb-6 border border-[#0546F2] rounded-2xl">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-[#0B0F19] tracking-tight mb-4">
            Brief Received{state.name ? `, ${state.name}` : ''}.
          </h1>
          <p className="text-base text-neutral-600 mb-8 leading-relaxed">
            Thank you for reaching out. We have logged your submission and an acquisition strategist will review your market details within 24 business hours.
          </p>

          <div className="p-8 bg-[#F4F5F7] border border-neutral-300 mb-10 text-left sm:text-center rounded-3xl shadow-sm">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0546F2] mb-2">
              <Calendar className="w-4 h-4" /> Fast Track
            </div>
            <h3 className="text-lg font-black text-[#0B0F19] mb-2">
              Want to speak right away?
            </h3>
            <p className="text-xs text-neutral-600 mb-6">
              Skip waiting for an email response and schedule a 20-minute intro directly on our calendar.
            </p>
            <Button href={CALENDLY_URL} variant="primary" size="md">
              Book a Call on Calendar
            </Button>
          </div>

          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-[#0546F2]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Home</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
