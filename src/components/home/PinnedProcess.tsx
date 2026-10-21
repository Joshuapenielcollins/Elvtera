import React, { useState } from 'react';
import { processStepsContent } from '../../data/homeData';
import { Calendar, Filter, MessageSquare, Radio, UserCheck } from 'lucide-react';

export const PinnedProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stepVisuals = [
    // Visual 1: Intent Signal Pulse
    <div key="signal" className="h-full w-full flex flex-col justify-center p-6 sm:p-8">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-200">
        <span className="text-xs font-mono font-bold uppercase text-[#0546F2] flex items-center gap-2">
          <Radio className="w-4 h-4 animate-pulse" /> Intent Radar Active
        </span>
        <span className="text-[10px] font-mono bg-neutral-100 px-2.5 py-1 text-neutral-600 rounded-full font-bold">
          Real-Time Filters
        </span>
      </div>
      <div className="space-y-3">
        <div className="p-3.5 bg-white border border-[#0546F2]/30 rounded-2xl flex items-center justify-between shadow-xs">
          <div>
            <div className="text-xs font-bold text-[#0B0F19]">Apex Logistics Inc.</div>
            <div className="text-[11px] text-neutral-500 font-mono">Hiring 4 Regional Sales Leads</div>
          </div>
          <span className="text-[10px] font-bold uppercase bg-blue-50 text-[#0546F2] px-2.5 py-1 rounded-full border border-[#0546F2]/30">
            High Intent
          </span>
        </div>
        <div className="p-3.5 bg-white border border-neutral-200/90 rounded-2xl flex items-center justify-between shadow-xs">
          <div>
            <div className="text-xs font-bold text-[#0B0F19]">Strata Financial Tech</div>
            <div className="text-[11px] text-neutral-500 font-mono">Series A Capital Allocation</div>
          </div>
          <span className="text-[10px] font-bold uppercase bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded-full font-medium">
            Budget Verified
          </span>
        </div>
        <div className="p-3.5 bg-white border border-neutral-200/90 rounded-2xl flex items-center justify-between shadow-xs">
          <div>
            <div className="text-xs font-bold text-[#0B0F19]">Omni Healthcare Partners</div>
            <div className="text-[11px] text-neutral-500 font-mono">Infrastructure Expansion</div>
          </div>
          <span className="text-[10px] font-bold uppercase bg-blue-50 text-[#0546F2] px-2.5 py-1 rounded-full border border-[#0546F2]/30">
            Active Search
          </span>
        </div>
      </div>
    </div>,

    // Visual 2: Funnel Narrowing Animation (many enter, most drop away, few exit as qualified)
    <div key="funnel" className="h-full w-full flex flex-col justify-center p-6 sm:p-8">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
        <span className="text-xs font-mono font-bold uppercase text-[#0546F2] flex items-center gap-2">
          <Filter className="w-4 h-4" /> Funnel Narrowing
        </span>
        <span className="text-[10px] font-mono bg-neutral-100 px-2.5 py-1 text-neutral-600 rounded-full font-bold">
          Signal Filtering
        </span>
      </div>
      <div className="relative border border-neutral-200/90 p-4 bg-white rounded-2xl shadow-xs">
        <div className="text-center text-xs font-mono font-bold text-neutral-500 mb-2.5">
          1,000 Unfiltered Inquiries / Records
        </div>
        {/* Top broad entry */}
        <div className="grid grid-cols-10 gap-1.5 p-2.5 bg-neutral-100 rounded-xl mb-3">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className={`h-2.5 w-full rounded-full transition-all ${
                i % 4 === 0 ? 'bg-[#0546F2]' : 'bg-neutral-300 opacity-60'
              }`}
            />
          ))}
        </div>
        {/* Drop off indicator */}
        <div className="text-center py-1.5 text-[11px] font-mono text-neutral-400">
          ▼ 940 Filtered Out (No Budget / Inactive Intent) ▼
        </div>
        {/* Bottom qualified exit */}
        <div className="mt-2.5 p-3.5 bg-blue-50 border border-[#0546F2] rounded-xl flex items-center justify-between">
          <div className="text-xs font-bold text-[#0546F2] uppercase tracking-wider">
            60 High-Intent Prospects Qualified
          </div>
          <span className="text-[11px] font-mono font-black text-[#0546F2] bg-white px-3 py-1 rounded-full border border-[#0546F2] shadow-xs">
            Ready for Outreach
          </span>
        </div>
      </div>
    </div>,

    // Visual 3: Message Thread across Multi-Channel
    <div key="message" className="h-full w-full flex flex-col justify-center p-6 sm:p-8">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
        <span className="text-xs font-mono font-bold uppercase text-[#0546F2] flex items-center gap-2">
          <MessageSquare className="w-4 h-4" /> Multi-Channel Sequence
        </span>
        <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-2.5 py-1 border border-emerald-200 rounded-full font-bold">
          Delivered
        </span>
      </div>
      <div className="space-y-3 bg-white p-4 border border-neutral-200/90 rounded-2xl shadow-xs">
        <div className="bg-neutral-50 border-l-4 border-[#0546F2] p-3.5 text-xs rounded-xl">
          <div className="font-bold text-[#0B0F19] mb-1">Elvtera Team &rarr; VP of Sales</div>
          <p className="text-neutral-600 leading-relaxed">
            "Noticed your team is scaling regional logistics this quarter. We engineer direct pipeline systems without ad spend. Open to a brief 15-minute briefing this Thursday?"
          </p>
        </div>
        <div className="bg-blue-50/70 border-l-4 border-emerald-500 p-3.5 text-xs rounded-xl">
          <div className="font-bold text-emerald-800 mb-1">VP of Sales &rarr; Direct Reply</div>
          <p className="text-neutral-700 leading-relaxed">
            "Yes, timing is right. Send over your calendar or have your team schedule 11am Thursday."
          </p>
        </div>
      </div>
    </div>,

    // Visual 4: Reply Qualification
    <div key="qualify" className="h-full w-full flex flex-col justify-center p-6 sm:p-8">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
        <span className="text-xs font-mono font-bold uppercase text-[#0546F2] flex items-center gap-2">
          <UserCheck className="w-4 h-4" /> Reply Qualification
        </span>
        <span className="text-[10px] font-mono bg-blue-50 text-[#0546F2] px-2.5 py-1 border border-[#0546F2]/30 rounded-full font-bold">
          Strict Screening
        </span>
      </div>
      <div className="space-y-2 bg-white p-4 border border-neutral-200/90 rounded-2xl shadow-xs">
        <div className="flex items-center justify-between text-xs py-2 px-3 rounded-lg bg-neutral-50/50 border border-neutral-100">
          <span className="text-neutral-600">Decision Maker Authority</span>
          <span className="font-mono font-bold text-emerald-600">Verified (Managing Partner)</span>
        </div>
        <div className="flex items-center justify-between text-xs py-2 px-3 rounded-lg bg-neutral-50/50 border border-neutral-100">
          <span className="text-neutral-600">Deal Value Alignment</span>
          <span className="font-mono font-bold text-emerald-600">Verified ($25,000+)</span>
        </div>
        <div className="flex items-center justify-between text-xs py-2 px-3 rounded-lg bg-neutral-50/50 border border-neutral-100">
          <span className="text-neutral-600">Timeline to Buy</span>
          <span className="font-mono font-bold text-emerald-600">Within 45 Days</span>
        </div>
        <div className="pt-2 text-center text-xs font-bold text-[#0546F2] bg-blue-50 py-2.5 px-4 rounded-xl border border-[#0546F2]/30">
          Passed All Filters &rarr; Call Placed On Calendar
        </div>
      </div>
    </div>,

    // Visual 5: Calendar Filling
    <div key="calendar" className="h-full w-full flex flex-col justify-center p-6 sm:p-8">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
        <span className="text-xs font-mono font-bold uppercase text-[#0546F2] flex items-center gap-2">
          <Calendar className="w-4 h-4" /> Calendar Schedule
        </span>
        <span className="text-[10px] font-mono bg-neutral-100 px-2.5 py-1 text-neutral-700 rounded-full font-bold">
          Paced To Capacity
        </span>
      </div>
      <div className="grid grid-cols-5 gap-2 bg-neutral-100/80 p-3 border border-neutral-200/90 rounded-2xl">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
          <div key={day} className="text-center font-mono text-[10px] font-bold text-neutral-500 py-1">
            {day}
          </div>
        ))}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className={`p-1.5 min-h-[46px] border text-[10px] rounded-xl flex flex-col justify-between transition-all ${
              [1, 3, 4, 7, 8, 11, 13].includes(i)
                ? 'bg-[#0546F2] text-white border-[#0546F2] shadow-sm'
                : 'bg-white text-neutral-400 border-neutral-200'
            }`}
          >
            <span className="font-mono font-bold">{i + 10}</span>
            {[1, 3, 4, 7, 8, 11, 13].includes(i) && (
              <span className="text-[9px] font-bold uppercase truncate bg-black/25 px-1 py-0.5 rounded-md">
                Qualified
              </span>
            )}
          </div>
        ))}
      </div>
    </div>,
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F4F5F7] border-b border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50/80 border border-blue-200/80 rounded-full mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0546F2]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0546F2]">
              The 5-Step Process
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0F19] tracking-[-0.03em] leading-tight">
            How we put qualified calls on your calendar.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-4 leading-relaxed">
            A systematic engineering process. We handle the entire outbound pipeline from initial intent signal to confirmed appointment notes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Numbered Steps with thick blue progress indicator */}
          <div className="lg:col-span-7 space-y-3.5">
            {processStepsContent.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 border cursor-pointer transition-all duration-300 rounded-2xl ${
                    isActive
                      ? 'bg-white border-[#0546F2]/50 shadow-[0_10px_30px_rgba(5,70,242,0.08)] ring-1 ring-[#0546F2]/20 translate-x-1'
                      : 'bg-white/80 border-neutral-200/80 hover:border-neutral-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`text-lg font-mono font-black px-2.5 py-0.5 rounded-full ${
                          isActive ? 'text-white bg-[#0546F2]' : 'text-neutral-500 bg-neutral-100'
                        }`}
                      >
                        0{step.step}
                      </span>
                      <h3 className="text-lg font-extrabold text-[#0B0F19] tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider hidden sm:inline">
                      {step.subtitle}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="font-mono font-medium text-neutral-500">
                      Result: <strong className="text-neutral-800 font-semibold">{step.actionText}</strong>
                    </span>
                    {isActive && (
                      <span className="text-[#0546F2] font-bold uppercase tracking-wider text-[10px] bg-blue-50 px-2 py-0.5 rounded-full">
                        Active Stage
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Pinned Interactive Illustration Frame */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl border border-neutral-200/90 bg-white shadow-2xl min-h-[460px] overflow-hidden">
              {/* Header bar of demonstration frame */}
              <div className="bg-[#080D1C] text-white px-6 py-4 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0546F2] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0546F2]"></span>
                  </span>
                  <span className="font-bold tracking-wide">STEP 0{activeStep + 1} EXECUTION</span>
                </div>
                <span className="text-blue-300 font-bold text-[11px] bg-white/10 px-2 py-0.5 rounded-full">System View</span>
              </div>

              {/* Dynamic Step Illustration */}
              <div className="min-h-[390px] flex items-center justify-center p-2">
                {stepVisuals[activeStep]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
