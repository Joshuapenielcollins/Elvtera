"use client";

import React, { useState } from "react";
import { 
  Server, 
  ShieldCheck, 
  Headphones, 
  Code2, 
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
  Check
} from "lucide-react";

export function UnifiedContactBook() {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Form state
  const [interest, setInterest] = useState<string>("infrastructure");
  const [specificDetails, setSpecificDetails] = useState<{
    environment?: string;
    challenge?: string;
    supportTier?: string;
    ticketVolume?: string;
    softwareType?: string;
    timeline?: string;
    mspFleet?: string;
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
      formData.append("industry", "Direct Booking & Contact");
      formData.append(
        "description",
        `[CALL BOOKED for ${selectedDate} at ${selectedTime} ${timezone}]\nPrimary Interest: ${interest}\nSpecifics: ${JSON.stringify(specificDetails)}\nNotes: ${contact.notes}`
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
      
      {/* ── TIGHTENED BOOK A CALL WIZARD CARD ─────────────────────────────────── */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm">
        
        {/* Compact progress header */}
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
            {step === 1 && "Step 1 of 4: Select Focus"}
            {step === 2 && "Step 2 of 4: Specific Scope"}
            {step === 3 && "Step 3 of 4: Contact Details"}
            {step === 4 && "Step 4 of 4: Date & Time"}
            {step === 5 && "Confirmed"}
          </span>
        </div>

        {/* STEP 1: Select Interest */}
        {step === 1 && (
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              What is the primary technical objective for this call?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
              Select your focus area so we connect you with the appropriate technical practice lead.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                {
                  id: "infrastructure",
                  title: "Infrastructure & Managed IT",
                  desc: "Linux/Windows servers, AWS/Azure/OCI cloud, databases, backups & uptime monitoring.",
                  icon: Server,
                  tag: "Vertical 01",
                  tagColor: "bg-blue-50 text-blue-700 border-blue-200",
                },
                {
                  id: "security",
                  title: "Security Operations & Hardening",
                  desc: "SIEM log monitoring, IAM/MFA governance, vulnerability patching & threat mitigation.",
                  icon: ShieldCheck,
                  tag: "Vertical 01",
                  tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
                },
                {
                  id: "customer-support",
                  title: "Technical Customer & Product Support",
                  desc: "Remote L1/L2 technical support engineers, ticket resolution, and product bug triage.",
                  icon: Headphones,
                  tag: "Vertical 01",
                  tagColor: "bg-amber-50 text-amber-700 border-amber-200",
                },
                {
                  id: "software-automation",
                  title: "Custom Software & Automation",
                  desc: "Purpose-built web apps, operational platforms, workflow automations, and ERP/CRM systems.",
                  icon: Code2,
                  tag: "Vertical 02",
                  tagColor: "bg-purple-50 text-purple-700 border-purple-200",
                },
                {
                  id: "msp-extension",
                  title: "MSP Engineering Capacity",
                  desc: "Tier-3 technical backstop, server migrations, and after-hours monitoring for MSPs.",
                  icon: Users,
                  tag: "Capacity",
                  tagColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
                },
                {
                  id: "general",
                  title: "End-to-End Technology Partnership",
                  desc: "Combined cloud infrastructure, security stewardship, software builds, and support.",
                  icon: Sparkles,
                  tag: "Full Suite",
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

        {/* STEP 2: Specific Scope Questions */}
        {step === 2 && (
          <div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 mb-3 cursor-pointer"
            >
              <ArrowLeft className="size-3.5" />
              <span>Back to focus selection</span>
            </button>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              A few specifics on your current setup
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
              Helps our engineers review relevant architectural patterns prior to the call.
            </p>

            {/* Infrastructure */}
            {(interest === "infrastructure" || interest === "general") && (
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
                    Primary Challenge
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Improve 99.95%+ Uptime & Observability",
                      "Reduce Cloud Spend & Clean Orphaned Assets",
                      "Database Optimization & Point-in-time Restores",
                      "In-House Systems Engineering Capacity",
                    ].map((ch) => (
                      <button
                        key={ch}
                        type="button"
                        onClick={() => setSpecificDetails((prev) => ({ ...prev, challenge: ch }))}
                        className={`p-2.5 rounded-lg border text-xs font-semibold text-left transition-all cursor-pointer ${
                          specificDetails.challenge === ch
                            ? "bg-secondary text-white border-secondary shadow-xs"
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

            {/* Security */}
            {interest === "security" && (
              <div className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Key Security Priority
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "SIEM Log Aggregation & Real-time Alerting",
                      "IAM Least-Privilege & MFA Hardening",
                      "Vulnerability Scanning & Patch Enforcement",
                      "Compliance Audit Preparation (SOC2/HIPAA/ISO)",
                    ].map((sec) => (
                      <button
                        key={sec}
                        type="button"
                        onClick={() => setSpecificDetails((prev) => ({ ...prev, challenge: sec }))}
                        className={`p-2.5 rounded-lg border text-xs font-semibold text-left transition-all cursor-pointer ${
                          specificDetails.challenge === sec
                            ? "bg-secondary text-white border-secondary shadow-xs"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {sec}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Customer Support */}
            {interest === "customer-support" && (
              <div className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Required Support Level
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      "Tier 1 Helpdesk (Triage & Resolution)",
                      "Tier 2 Technical (Bug Reproduction & DB)",
                      "Combined L1/L2 Full Coverage",
                    ].map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => setSpecificDetails((prev) => ({ ...prev, supportTier: tier }))}
                        className={`p-2.5 rounded-lg border text-xs font-semibold text-left transition-all cursor-pointer ${
                          specificDetails.supportTier === tier
                            ? "bg-secondary text-white border-secondary shadow-xs"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Custom Software & Automation */}
            {interest === "software-automation" && (
              <div className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Project Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      "Custom Web Application",
                      "Workflow Automation (n8n)",
                      "Custom ERP/CRM Platform",
                      "API & Systems Integration",
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
                    Target Timeline
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Immediate (< 30 days)", "Next Quarter (1-3 months)", "Planning & Architecture"].map((time) => (
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
              </div>
            )}

            {/* MSP Extension */}
            {interest === "msp-extension" && (
              <div className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Endpoints / Client Fleet Size
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["100 - 500 Endpoints", "500 - 2,000 Endpoints", "2,000+ Endpoints"].map((fleet) => (
                      <button
                        key={fleet}
                        type="button"
                        onClick={() => setSpecificDetails((prev) => ({ ...prev, mspFleet: fleet }))}
                        className={`p-2.5 rounded-lg border text-xs font-semibold text-center transition-all cursor-pointer ${
                          specificDetails.mspFleet === fleet
                            ? "bg-secondary text-white border-secondary shadow-xs"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {fleet}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

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
              <span>Back to context</span>
            </button>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Who should our engineering lead address?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
              We send the calendar invite and meeting link to this email address.
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
              30-minute direct technical consultation via Google Meet.
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
                <span>Deep dive into current operational bottlenecks or custom development goals.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Discuss scope, architectural patterns, team models, and milestones.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Receive itemized next steps with no sales pressure.</span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* ── COMPANY LOCATIONS & EMAIL SECTION (DIRECTLY BELOW THE BOOK A CALL CARD) ── */}
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
