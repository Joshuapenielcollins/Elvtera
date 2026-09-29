"use client";

import React, { useState } from "react";
import { 
  Server, 
  ShieldCheck, 
  Code2, 
  Briefcase,
  Users, 
  CalendarCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Loader2, 
  Video,
  Sparkles,
  MapPin,
  Mail,
  Building2,
  Copy,
  Check,
  Workflow,
  Globe,
  Database,
  Layers,
  HelpCircle
} from "lucide-react";

export function UnifiedContactBook() {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Form state
  const [interest, setInterest] = useState<string>("software-solutions");
  const [specificDetails, setSpecificDetails] = useState<{
    focusArea?: string;
    challenge?: string;
    softwareType?: string;
    stage?: string;
    environment?: string;
    timeline?: string;
    partnershipModel?: string;
  }>({});

  const [contact, setContact] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    notes: "",
  });

  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    if (d.getDay() === 0) d.setDate(d.getDate() + 1);
    if (d.getDay() === 6) d.setDate(d.getDate() + 2);
    return d.toISOString().split("T")[0];
  });
  const [selectedTime, setSelectedTime] = useState<string>("11:00 AM");
  const [timezone, setTimezone] = useState<string>("EST (Eastern Standard Time)");

  const getUpcomingDays = () => {
    const days: { dateStr: string; display: string; dayName: string }[] = [];
    const current = new Date();
    while (days.length < 5) {
      current.setDate(current.getDate() + 1);
      const dayOfWeek = current.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        days.push({
          dateStr: current.toISOString().split("T")[0],
          display: current.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
          dayName: current.toLocaleDateString("en-US", { weekday: "short" }),
        });
      }
    }
    return days;
  };

  const timeSlots = [
    "09:30 AM",
    "11:00 AM",
    "01:30 PM",
    "03:00 PM",
    "04:30 PM",
  ];

  const handleInterestSelect = (val: string) => {
    setInterest(val);
    setStep(2);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@elvtera.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFinalBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("type", "sales");
      formData.append("name", contact.name);
      formData.append("email", contact.email);
      formData.append("company", contact.company);
      formData.append("phone", contact.phone);
      formData.append("services", interest);
      formData.append("industry", "Direct Discovery Call Booking");
      formData.append(
        "description",
        `[CALL BOOKED for ${selectedDate} at ${selectedTime} ${timezone}]\nSolution Pillar: ${interest}\nSpecifics: ${JSON.stringify(specificDetails)}\nNotes: ${contact.notes}`
      );

      await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      setStep(5);
    } catch (err) {
      console.error(err);
      setStep(5);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-10">
      
      {/* ── BOOK A DISCOVERY CALL WIZARD ────────────────────────────────────── */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm">
        
        {/* Progress header */}
        <div className="pb-4 mb-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  step === i
                    ? "w-8 bg-secondary"
                    : step > i
                    ? "w-3 bg-emerald-500"
                    : "w-3 bg-slate-200"
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-slate-500">
            {step === 1 && "Step 1 of 4: Select Solution Pillar"}
            {step === 2 && "Step 2 of 4: Project Scope & Specifics"}
            {step === 3 && "Step 3 of 4: Contact Details"}
            {step === 4 && "Step 4 of 4: Date & Time"}
            {step === 5 && "Confirmed"}
          </span>
        </div>

        {/* STEP 1: Select Solution Pillar */}
        {step === 1 && (
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[11px] font-semibold text-secondary mb-2">
              <span>Direct Engineering Consultation</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Which technology solution area would you like to discuss?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
              Select one of our three core solution pillars or choose an end-to-end partnership review.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3.5">
              {[
                {
                  id: "business-solutions",
                  pillarNum: "01",
                  title: "Business Solutions",
                  tagline: "Build and scale the systems behind your business.",
                  desc: "Business websites, GTM architecture, CRM implementation, marketing automation, workflow systems, and customer support desks.",
                  icon: Briefcase,
                  tag: "Pillar 01",
                  tagColor: "bg-blue-50 text-blue-700 border-blue-200",
                },
                {
                  id: "software-solutions",
                  pillarNum: "02",
                  title: "Software Solutions",
                  tagline: "Build the technology your business needs.",
                  desc: "Custom web applications, purpose-built CRM/ERP platforms, SaaS applications, internal tools, API integrations, and AI agents.",
                  icon: Code2,
                  tag: "Pillar 02",
                  tagColor: "bg-purple-50 text-purple-700 border-purple-200",
                },
                {
                  id: "it-and-security",
                  pillarNum: "03",
                  title: "IT & Security",
                  tagline: "Keep your technology running, secure, and ready to scale.",
                  desc: "Linux/Windows sysadmin, cloud infrastructure (AWS/Azure/OCI), SIEM log monitoring, 24/7 telemetry, and remote technical support.",
                  icon: ShieldCheck,
                  tag: "Pillar 03",
                  tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
                },
                {
                  id: "end-to-end",
                  pillarNum: "04",
                  title: "End-to-End Technology Partnership",
                  tagline: "One partner across the entire business lifecycle.",
                  desc: "Combined coverage across business systems, software development, cloud operations, continuous security, and technical support.",
                  icon: Sparkles,
                  tag: "All 3 Pillars",
                  tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
                },
              ].map((opt) => {
                const Icon = opt.icon;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleInterestSelect(opt.id)}
                    className={`flex items-start gap-3.5 p-4 rounded-xl border text-left transition-all cursor-pointer hover:border-secondary hover:shadow-xs ${
                      interest === opt.id
                        ? "border-secondary bg-secondary/5 ring-1 ring-secondary/20"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <div className="p-2.5 rounded-lg border border-slate-100 bg-surface text-secondary shrink-0 mt-0.5">
                      <Icon className="size-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-bold text-sm text-slate-900 font-display">
                          {opt.title}
                        </h4>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border shrink-0 ${opt.tagColor}`}>
                          {opt.tag}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[11px] font-semibold text-secondary">
                        {opt.tagline}
                      </p>
                      <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                        {opt.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: Specific Scope Questions Based on Chosen Solution */}
        {step === 2 && (
          <div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 mb-3 cursor-pointer"
            >
              <ArrowLeft className="size-3.5" />
              <span>Back to solution selection</span>
            </button>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              A few specifics on your requirements
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
              Helps our systems and engineering leads review relevant technical patterns before the call.
            </p>

            {/* PILLAR 1: BUSINESS SOLUTIONS SPECIFICS */}
            {interest === "business-solutions" && (
              <div className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Primary Focus Area
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      "Business Website & SEO",
                      "CRM Implementation",
                      "GTM & Sales Systems",
                      "Marketing Automation",
                      "Business Process Automation",
                      "Customer Support / Helpdesk",
                    ].map((area) => (
                      <button
                        key={area}
                        type="button"
                        onClick={() => setSpecificDetails((prev) => ({ ...prev, focusArea: area }))}
                        className={`p-2.5 rounded-lg border text-xs font-semibold text-center transition-all cursor-pointer ${
                          specificDetails.focusArea === area
                            ? "bg-secondary text-white border-secondary shadow-xs"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {area}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Primary Operational Challenge
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Too much manual data entry across disconnected spreadsheets",
                      "Inbound leads are slipping through the cracks without follow-up",
                      "Off-the-shelf CRM doesn't match our actual sales workflow",
                      "Customer support requests are unorganized and slow to resolve",
                    ].map((ch) => (
                      <button
                        key={ch}
                        type="button"
                        onClick={() => setSpecificDetails((prev) => ({ ...prev, challenge: ch }))}
                        className={`p-2.5 rounded-lg border text-xs font-semibold text-left transition-all cursor-pointer ${
                          specificDetails.challenge === ch
                            ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {ch}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PILLAR 2: SOFTWARE SOLUTIONS SPECIFICS */}
            {interest === "software-solutions" && (
              <div className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Software Initiative Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      "Custom Web Application",
                      "Purpose-Built CRM / ERP",
                      "Multi-Tenant SaaS Product",
                      "Internal Operations Portal",
                      "AI Applications & Agents",
                      "API & System Integrations",
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSpecificDetails((prev) => ({ ...prev, softwareType: type }))}
                        className={`p-2.5 rounded-lg border text-xs font-semibold text-center transition-all cursor-pointer ${
                          specificDetails.softwareType === type
                            ? "bg-secondary text-white border-secondary shadow-xs"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Current Project Stage
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      "New Build (Greenfield)",
                      "Refactoring / Scaling Existing Code",
                      "Replacing Third-Party SaaS Tool",
                    ].map((stg) => (
                      <button
                        key={stg}
                        type="button"
                        onClick={() => setSpecificDetails((prev) => ({ ...prev, stage: stg }))}
                        className={`p-2.5 rounded-lg border text-xs font-semibold text-center transition-all cursor-pointer ${
                          specificDetails.stage === stg
                            ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {stg}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PILLAR 3: IT & SECURITY SPECIFICS */}
            {interest === "it-and-security" && (
              <div className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Current Hosting Environment
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {["AWS", "Microsoft Azure", "Linux / Bare-metal", "Multi-Cloud / OCI"].map((env) => (
                      <button
                        key={env}
                        type="button"
                        onClick={() => setSpecificDetails((prev) => ({ ...prev, environment: env }))}
                        className={`p-2.5 rounded-lg border text-xs font-semibold text-center transition-all cursor-pointer ${
                          specificDetails.environment === env
                            ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {env}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Key Infrastructure or Security Priority
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Improve 99.95%+ Uptime & Fleet Observability",
                      "Reduce Cloud Spend & Clean Idle Resources",
                      "SIEM Log Monitoring, IAM & MFA Hardening",
                      "Dedicated Remote Sysadmin & Tech Support Capacity",
                    ].map((pri) => (
                      <button
                        key={pri}
                        type="button"
                        onClick={() => setSpecificDetails((prev) => ({ ...prev, challenge: pri }))}
                        className={`p-2.5 rounded-lg border text-xs font-semibold text-left transition-all cursor-pointer ${
                          specificDetails.challenge === pri
                            ? "bg-secondary text-white border-secondary shadow-xs"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {pri}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* END-TO-END PARTNERSHIP SPECIFICS */}
            {interest === "end-to-end" && (
              <div className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Desired Engagement Model
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      "Turn-Key Build + Ongoing Operations",
                      "Extended Technology Team",
                      "Managed Systems Stewardship",
                    ].map((model) => (
                      <button
                        key={model}
                        type="button"
                        onClick={() => setSpecificDetails((prev) => ({ ...prev, partnershipModel: model }))}
                        className={`p-2.5 rounded-lg border text-xs font-semibold text-left transition-all cursor-pointer ${
                          specificDetails.partnershipModel === model
                            ? "bg-secondary text-white border-secondary shadow-xs"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {model}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Current Company Stage
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Growing business needing a complete technology partner",
                      "Scaling platform looking to offload infrastructure & support",
                    ].map((stg) => (
                      <button
                        key={stg}
                        type="button"
                        onClick={() => setSpecificDetails((prev) => ({ ...prev, stage: stg }))}
                        className={`p-2.5 rounded-lg border text-xs font-semibold text-left transition-all cursor-pointer ${
                          specificDetails.stage === stg
                            ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {stg}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Target Timeline */}
            <div className="mt-5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Target Timeline
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["Immediate (< 30 days)", "Next Quarter (1-3 months)", "Planning & Discovery"].map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSpecificDetails((prev) => ({ ...prev, timeline: time }))}
                    className={`p-2.5 rounded-lg border text-xs font-semibold text-center transition-all cursor-pointer ${
                      specificDetails.timeline === time
                        ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">Step 2 complete</span>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-xs"
              >
                <span>Continue to Contact Info</span>
                <ArrowRight className="size-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Contact Info */}
        {step === 3 && (
          <div>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 mb-3 cursor-pointer"
            >
              <ArrowLeft className="size-3.5" />
              <span>Back to project scope</span>
            </button>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Who should our engineering lead address?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
              We send the calendar invite and Google Meet link to this email address.
            </p>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Acme Technologies Corp"
                  value={contact.company}
                  onChange={(e) => setContact({ ...contact, company: e.target.value })}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 019-2834"
                  value={contact.phone}
                  onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Brief Technical Context (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Share details regarding your tech stack, team size, uptime goals, or delivery timeline."
                  value={contact.notes}
                  onChange={(e) => setContact({ ...contact, notes: e.target.value })}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
                />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">Step 3 complete</span>
              <button
                type="button"
                disabled={!contact.name || !contact.email || !contact.company}
                onClick={() => setStep(4)}
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 disabled:opacity-50 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-xs"
              >
                <span>Select Date & Time</span>
                <ArrowRight className="size-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Choose Day & Time */}
        {step === 4 && (
          <form onSubmit={handleFinalBooking}>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 mb-3 cursor-pointer"
            >
              <ArrowLeft className="size-3.5" />
              <span>Back to contact details</span>
            </button>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Select your preferred date & time
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
              30-minute direct technical consultation via Google Meet with an Elvtera practice lead.
            </p>

            <div className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Day
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {getUpcomingDays().map((d) => (
                    <button
                      key={d.dateStr}
                      type="button"
                      onClick={() => setSelectedDate(d.dateStr)}
                      className={`p-2.5 sm:p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedDate === d.dateStr
                          ? "bg-secondary text-white border-secondary shadow-xs"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      <span className="block text-[10px] uppercase font-bold opacity-75">
                        {d.dayName}
                      </span>
                      <span className="block text-xs sm:text-sm font-extrabold mt-0.5">
                        {d.display}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Available Time Slot
                  </label>
                  <select
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="text-xs font-semibold text-slate-600 bg-slate-100 rounded-md px-2 py-0.5 border border-slate-200 focus:outline-none"
                  >
                    <option value="EST (Eastern Standard Time)">US Eastern (EST)</option>
                    <option value="CST (Central Standard Time)">US Central (CST)</option>
                    <option value="PST (Pacific Standard Time)">US Pacific (PST)</option>
                    <option value="UTC (Universal Time)">UTC</option>
                  </select>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2 px-2 rounded-lg border text-xs font-semibold text-center transition-all cursor-pointer ${
                        selectedTime === slot
                          ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      <Clock className="size-3 mx-auto mb-1 opacity-70" />
                      <span>{slot}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-blue-50/70 border border-blue-100 p-3.5 text-xs text-slate-700 flex items-start gap-3">
                <Video className="size-4 text-secondary shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block text-xs">
                    Booking Summary
                  </span>
                  <p className="mt-0.5 text-[11px] text-slate-600 leading-relaxed">
                    Date: <strong>{selectedDate}</strong> at <strong>{selectedTime} ({timezone})</strong> for <strong>{contact.name || "Client"}</strong> ({contact.company || "Company"}).
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">Step 4 complete</span>
              <button
                type="submit"
                disabled={isSubmitting || !selectedDate || !selectedTime}
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 disabled:opacity-50 text-white px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold shadow-xs transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-3.5 animate-spin" />
                    <span>Scheduling Session...</span>
                  </>
                ) : (
                  <>
                    <CalendarCheck className="size-3.5" />
                    <span>Confirm & Book 30-Min Call</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* STEP 5: Success / Confirmation */}
        {step === 5 && (
          <div className="text-center py-6">
            <div className="size-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="size-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 font-display">
              Technical Discovery Call Confirmed!
            </h3>
            <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              We have reserved your session for <strong>{selectedDate}</strong> at <strong>{selectedTime} ({timezone})</strong>.
            </p>
            <p className="mt-1 text-xs text-slate-500">
              A calendar invite and Google Meet link have been dispatched to <strong>{contact.email}</strong>.
            </p>

            <div className="mt-6 max-w-sm mx-auto rounded-xl bg-slate-50 border border-slate-200 p-4 text-left text-xs space-y-2 text-slate-600">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 font-bold text-slate-900 text-xs">
                <span>Call Agenda</span>
                <span className="text-secondary font-mono text-[10px]">30 MINUTES</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Deep dive into your chosen solution pillar (Business, Software, or IT & Security).</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Review current architectural bottlenecks, data schemas, and uptime goals.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Receive itemized technical milestones and next steps with zero sales pressure.</span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* ── COMPANY LOCATIONS & EMAIL SECTION ─────────────────────────────────── */}
      <div className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-xs">
        
        <div className="border-b border-slate-100 pb-5 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">
                Direct Contact & Presence
              </span>
              <h4 className="text-lg font-bold text-primary font-display mt-0.5">
                Company Locations & Direct Inquiries
              </h4>
            </div>

            {/* Email quick action */}
            <div className="flex items-center gap-2">
              <a
                href="mailto:hello@elvtera.com"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-line text-xs font-semibold text-primary hover:bg-slate-100 transition-colors"
              >
                <Mail className="size-3.5 text-secondary" />
                <span>hello@elvtera.com</span>
              </a>
              <button
                onClick={copyEmail}
                title="Copy email to clipboard"
                className="p-1.5 rounded-lg border border-line text-slate-500 hover:text-primary hover:bg-slate-100 transition-colors cursor-pointer"
              >
                {copiedEmail ? <Check className="size-3.5 text-emerald-600" /> : <Copy className="size-3.5" />}
              </button>
            </div>
          </div>
          <p className="mt-2 text-xs text-slate-500 leading-relaxed max-w-2xl">
            Whether you need urgent escalation support, have RFP inquiries, or prefer to send written specifications directly, our operations team is available across US Eastern and Indian engineering hours.
          </p>
        </div>

        {/* 3-column contact grid: USA, India, Operating Hours */}
        <div className="grid gap-5 md:grid-cols-3">
          
          {/* USA Operations */}
          <div className="rounded-xl border border-line bg-surface p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-md bg-blue-50 text-blue-700">
                  <MapPin className="size-4" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  USA Operations
                </span>
              </div>
              <p className="text-xs font-semibold text-primary">Josh Global Brands LLC</p>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                7901 4th Street North, Ste 300<br />
                St. Petersburg, FL 33702<br />
                United States
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-slate-500">
              Client accounts, agreements & executive oversight.
            </div>
          </div>

          {/* Engineering Operations */}
          <div className="rounded-xl border border-line bg-surface p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-md bg-emerald-50 text-emerald-700">
                  <Building2 className="size-4" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Engineering Operations
                </span>
              </div>
              <p className="text-xs font-semibold text-primary">Collins Enterprise Solutions LLP</p>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                1508C Devangar Nagar, Madhurapuri PO<br />
                Turaiyur, Tiruchirappalli, Tamil Nadu<br />
                621010, India
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-slate-500">
              Cloud delivery, 24/7 NOC monitoring & software sprints.
            </div>
          </div>

          {/* Direct Support & Operating Hours */}
          <div className="rounded-xl border border-line bg-surface p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-md bg-purple-50 text-purple-700">
                  <Clock className="size-4" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Operating Hours & SLA
                </span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span className="text-slate-500">Business:</span>
                  <span className="font-semibold text-primary">Mon – Fri, 9am – 6pm EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">NOC / Incident:</span>
                  <span className="font-semibold text-emerald-700">24/7 Priority SLA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Response:</span>
                  <span className="font-semibold text-primary">&lt; 1 Business Day</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
              <span className="text-slate-500">Direct Email:</span>
              <a href="mailto:hello@elvtera.com" className="font-semibold text-secondary hover:underline">
                hello@elvtera.com
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
