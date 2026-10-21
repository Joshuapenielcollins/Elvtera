import React, { useState, useEffect } from 'react';
import { Check, Calendar, ArrowUpRight } from 'lucide-react';
import { heroContent } from '../../data/homeData';
import { CALENDLY_URL } from '../../data/siteConfig';

interface ExampleNotification {
  id: string;
  roleInfo: string;
  signal: string;
}

const exampleBookingNotifications: ExampleNotification[] = [
  {
    id: 'ex-1',
    roleInfo: 'Logistics company, Operations Director',
    signal: 'Signal: asked for lead-gen recommendations',
  },
  {
    id: 'ex-2',
    roleInfo: 'Staffing firm, VP Operations',
    signal: 'Signal: hiring a sales role',
  },
  {
    id: 'ex-3',
    roleInfo: 'Healthcare group, Managing Partner',
    signal: 'Signal: posted about slow quarters',
  },
];

export const Hero: React.FC = () => {
  const [activeNotifications, setActiveNotifications] = useState(exampleBookingNotifications);

  // Smooth slow loop of example notification cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNotifications((prev) => {
        const nextIndex =
          (exampleBookingNotifications.findIndex((item) => item.id === prev[0].id) + 1) %
          exampleBookingNotifications.length;
        const newItem = exampleBookingNotifications[nextIndex];
        return [newItem, prev[0], prev[1]];
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const triggerPilotModal = () => {
    window.dispatchEvent(new CustomEvent('open-pilot-modal'));
  };

  return (
    <section className="relative pt-8 pb-20 lg:pt-16 lg:pb-28 border-b border-neutral-200/80 overflow-hidden bg-white">
      {/* Background ambient lighting and dot grid */}
      <div className="absolute inset-0 hero-dot-grid opacity-65 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 ambient-glow-blue pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-[460px] h-[460px] rounded-full blur-[100px] bg-[#0546F2]/8 pointer-events-none" />
      <div className="absolute -bottom-24 -left-20 w-[400px] h-[400px] rounded-full blur-[90px] bg-sky-400/8 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-7">
            {/* Top eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-blue-50/80 border border-blue-200/80 rounded-full shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0546F2] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0546F2]"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0546F2]">
                Done-For-You Client Acquisition
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-[#0B0F19] tracking-[-0.035em] leading-[1.07]">
              {heroContent.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl">
              {heroContent.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                onClick={triggerPilotModal}
                className="btn-glow inline-flex items-center justify-center gap-2 rounded-full bg-[#0546F2] px-8 py-4 text-sm font-bold text-white hover:bg-[#0438c7] transition-all cursor-pointer"
              >
                <span>{heroContent.ctaPilotText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href={CALENDLY_URL}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-4 text-sm font-bold text-neutral-800 hover:text-black hover:border-neutral-400 hover:bg-neutral-50 transition-all shadow-sm"
              >
                <span>{heroContent.ctaBookText}</span>
              </a>
            </div>

            {/* Target footnote */}
            <p className="text-xs text-neutral-500 font-mono">
              * {heroContent.footnote}
            </p>

            {/* Three check lines */}
            <div className="pt-5 space-y-3 border-t border-neutral-200/80">
              {heroContent.checkLines.map((line, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-50 text-[#0546F2] border border-blue-200/80 rounded-full flex items-center justify-center flex-shrink-0 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-neutral-800">
                    {line.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: UI Fragment - Example Booking Notification Stream */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-neutral-200/90 bg-white p-5 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.07)]">
              {/* Header of Fragment */}
              <div className="pb-3.5 mb-4 border-b border-neutral-200/90">
                <div className="inline-flex items-center px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-neutral-100 text-neutral-700 border border-neutral-200/80 rounded-md">
                  EXAMPLE
                </div>
                <p className="text-xs text-neutral-500 mt-1.5 font-normal">
                  Illustrative. Not real client data.
                </p>
              </div>

              {/* Notification Stack */}
              <div className="space-y-3">
                {activeNotifications.map((notif, index) => (
                  <div
                    key={`${notif.id}-${index}`}
                    className={`transition-all duration-700 ease-out bg-white border rounded-2xl p-4 sm:p-4.5 ${
                      index === 0
                        ? 'border-[#0546F2]/40 shadow-[0_6px_20px_rgba(5,70,242,0.08)] ring-1 ring-[#0546F2]/10 translate-y-0 opacity-100'
                        : 'border-neutral-200/80 opacity-75 translate-y-1'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-blue-50 text-[#0546F2] border border-blue-200/70 rounded-full">
                        NEW CALL BOOKED
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-[#0B0F19]">
                      {notif.roleInfo}
                    </h4>
                    <p className="text-xs text-neutral-600 mt-1 font-medium">
                      {notif.signal}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center gap-1.5 text-emerald-600 font-semibold text-[11px]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Confirmed on Calendar</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fragment Footer */}
              <div className="mt-4 pt-3.5 border-t border-neutral-200/90 text-xs text-neutral-600 font-medium">
                Direct calendar bookings. No ad spend.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
