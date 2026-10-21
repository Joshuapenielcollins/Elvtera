import React from 'react';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { SEOHead } from '../../components/layout/SEOHead';
import { CALENDLY_URL } from '../../data/pilotConfig';
import { CalEmbed } from '../../components/booking/CalEmbed';
import { Check, Laptop, Globe, Users, Target, ArrowRight } from 'lucide-react';

export const PilotBookPage: React.FC = () => {
  const isPlaceholder = CALENDLY_URL.startsWith('#');

  const checklistItems = [
    {
      icon: Globe,
      text: "Have your website open so we can inspect your current positioning and service framing together.",
    },
    {
      icon: Target,
      text: "Write down who your ideal customer is, including company size, industry, and decision-maker roles.",
    },
    {
      icon: Users,
      text: "Think of 2–3 dream customers you would like to have on your sales calendar this quarter.",
    },
    {
      icon: Laptop,
      text: "Join from a laptop or desktop computer so we can screenshare and show your live intent leads on call.",
    },
  ];

  const timelineSteps = [
    {
      title: "Proof call (15–45 min)",
      description: "We show you real companies displaying active buying intent for your exact offer.",
    },
    {
      title: "Setup in 48 hours",
      description: "We configure secondary outreach infrastructure and draft personalized messaging.",
    },
    {
      title: "Outreach goes live",
      description: "Targeted outreach initiates across verified multi-channel touchpoints.",
    },
    {
      title: "Reports on day 7 and day 14",
      description: "Full transparent performance metrics on contacts, replies, and booked appointments.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Pick a Time for Your Proof Call | Elvtera"
        description="Pick a time for your 15-minute proof call. See real intent leads for your service live on screen."
        canonicalPath="/pilot/book"
      />

      <Breadcrumbs
        items={[
          { label: 'Pilot', href: '/pilot' },
          { label: 'Book Proof Call' },
        ]}
      />

      <div className="py-16 lg:py-24 bg-white border-b border-black/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-10">
            <div className="inline-block px-3 py-1 bg-emerald-50 border border-emerald-300 text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 mb-4">
              Application Received
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight mb-4">
              You're in. Pick a time for your 15-minute proof call.
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              Choose an available slot below. We will use this session to inspect your target market and demonstrate real active buyer intent live.
            </p>
          </div>

          {/* Embedded Cal.com Scheduler */}
          <div className="mb-16">
            <CalEmbed minHeight="680px" />
          </div>

          {/* Before the call checklist */}
          <div className="mb-16 border-t border-neutral-200 pt-12">
            <h2 className="text-2xl font-black text-black tracking-tight mb-2">
              Before the call
            </h2>
            <p className="text-sm text-neutral-600 mb-8">
              A quick 4-point checklist to make the session as valuable as possible for your sales pipeline:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checklistItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 border border-black/10 bg-neutral-50 flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-none bg-[#0546F2] text-white flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <p className="text-sm text-neutral-800 leading-relaxed font-medium">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* What happens next */}
          <div className="border-t border-neutral-200 pt-12">
            <h2 className="text-2xl font-black text-black tracking-tight mb-2">
              What happens next
            </h2>
            <p className="text-sm text-neutral-600 mb-8">
              Here is the timeline once your proof call is confirmed:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {timelineSteps.map((step, idx) => (
                <div key={idx} className="p-5 border border-black/10 bg-white">
                  <div className="text-xs font-mono font-bold uppercase text-[#0546F2] mb-2">
                    Phase 0{idx + 1}
                  </div>
                  <h3 className="text-base font-black text-black mb-1.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
