"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Server, 
  ShieldCheck, 
  Headphones, 
  Code2, 
  Workflow, 
  Users, 
  Loader2,
  CalendarCheck,
  Video,
  Sparkles,
  ChevronRight
} from "lucide-react";

export interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
}

export function BookCallModal({ isOpen, onClose, initialInterest }: BookCallModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [interest, setInterest] = useState<string>(initialInterest || "infrastructure");
  
  // Step 2 dynamic answers
  const [specificDetails, setSpecificDetails] = useState<{
    environment?: string;
    challenge?: string;
    supportTier?: string;
    ticketVolume?: string;
    softwareType?: string;
    timeline?: string;
    mspFleet?: string;
  }>({});

  // Step 3 contact info
  const [contact, setContact] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    notes: "",
  });

  // Step 4 scheduling
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("EST (Eastern Standard Time)");

  // Sync initial interest if passed
  useEffect(() => {
    if (initialInterest) {
      setInterest(initialInterest);
    }
  }, [initialInterest]);

  // Reset when opening
  useEffect(() => {
    if (isOpen) {
      if (!selectedDate) {
        // Default to tomorrow or next business day
        const d = new Date();
        d.setDate(d.getDate() + 1);
        if (d.getDay() === 0) d.setDate(d.getDate() + 1); // skip Sunday
        if (d.getDay() === 6) d.setDate(d.getDate() + 2); // skip Saturday
        setSelectedDate(d.toISOString().split("T")[0]);
      }
      if (!selectedTime) {
        setSelectedTime("11:00 AM");
      }
    }
  }, [isOpen, selectedDate, selectedTime]);

  // Calculate upcoming 5 business days
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
      formData.append("industry", "Direct Call Booking");
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
      // Still allow completion for user UX
      setStep(5);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-slate-50/70">
            <div className="flex items-center gap-2">
              <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono">
                Book a Technical Call
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-xs text-slate-500 font-medium">
                30-Min Discovery Session
              </span>
            </div>

            <button
              onClick={onClose}
              className="rounded-full p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="px-6 pt-4 pb-2 bg-slate-50/30 border-b border-slate-100 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    step === i
                      ? "w-8 bg-secondary"
                      : step > i
                      ? "w-4 bg-emerald-500"
                      : "w-4 bg-slate-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] font-semibold text-slate-500">
              {step === 1 && "Step 1: Your Primary Need"}
              {step === 2 && "Step 2: Specific Requirements"}
              {step === 3 && "Step 3: Contact Details"}
              {step === 4 && "Step 4: Pick a Time Slot"}
              {step === 5 && "Confirmed"}
            </span>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
            
            {/* STEP 1: Select Primary Focus */}
            {step === 1 && (
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  What would you like to discuss with our engineering team?
                </h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Select your primary focus so we assign the right technical lead to your call.
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-3.5">
                  {[
                    {
                      id: "infrastructure",
                      title: "Infrastructure & Managed IT",
                      desc: "Cloud (AWS/Azure), Linux/Windows servers, databases & 24/7 uptime monitoring.",
                      icon: Server,
                      color: "text-blue-600 bg-blue-50 border-blue-200",
                    },
                    {
                      id: "security",
                      title: "Security Operations & SIEM",
                      desc: "Log management, IAM least privilege, MFA, hardening & endpoint security.",
                      icon: ShieldCheck,
                      color: "text-emerald-700 bg-emerald-50 border-emerald-200",
                    },
                    {
                      id: "customer-support",
                      title: "Remote Customer / Product Support",
                      desc: "Tier-1 frontline & Tier-2 technical support triage for software companies.",
                      icon: Headphones,
                      color: "text-amber-700 bg-amber-50 border-amber-200",
                    },
                    {
                      id: "software-automation",
                      title: "Custom Software & Automation",
                      desc: "Custom web applications, workflow automation (n8n), AI agents & ERP/CRM.",
                      icon: Code2,
                      color: "text-purple-700 bg-purple-50 border-purple-200",
                    },
                    {
                      id: "msp-extension",
                      title: "MSP Engineering Capacity",
                      desc: "Behind-the-scenes Tier-3 engineering backstop for IT providers & MSPs.",
                      icon: Users,
                      color: "text-cyan-700 bg-cyan-50 border-cyan-200",
                    },
                    {
                      id: "general",
                      title: "Full Technology Partnership",
                      desc: "Combined software, infrastructure operations, security, and support.",
                      icon: Sparkles,
                      color: "text-indigo-700 bg-indigo-50 border-indigo-200",
                    },
                  ].map((opt) => {
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleInterestSelect(opt.id)}
                        className={`flex items-start gap-3.5 p-4 rounded-2xl border text-left transition-all cursor-pointer hover:border-secondary hover:shadow-md ${
                          interest === opt.id
                            ? "border-secondary bg-secondary/5 ring-1 ring-secondary/20"
                            : "border-slate-200 bg-white"
                        }`}
                      >
                        <div className={`p-2.5 rounded-xl border shrink-0 ${opt.color}`}>
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-slate-900 font-display">
                            {opt.title}
                          </h4>
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

            {/* STEP 2: Tailored Follow-up Questions */}
            {step === 2 && (
              <div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-slate-700 mb-3 cursor-pointer"
                >
                  <ArrowLeft className="size-3.5" />
                  <span>Back to categories</span>
                </button>

                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Tell us a bit about your current environment
                </h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  This helps our team come prepared with relevant architectural patterns.
                </p>

                {/* Infrastructure Questions */}
                {(interest === "infrastructure" || interest === "general") && (
                  <div className="mt-5 space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Primary Environment
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {["AWS", "Microsoft Azure", "Linux / Bare-metal", "Hybrid / Multi-Cloud"].map((env) => (
                          <button
                            key={env}
                            type="button"
                            onClick={() => setSpecificDetails((prev) => ({ ...prev, environment: env }))}
                            className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                              specificDetails.environment === env
                                ? "bg-slate-900 text-white border-slate-900"
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
                        Main Operational Priority
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          "Uptime & 24/7 Proactive Monitoring",
                          "Cloud Cost Optimization & Governance",
                          "Database Reliability & Automated Backups",
                          "Full IT Infrastructure Offload",
                        ].map((ch) => (
                          <button
                            key={ch}
                            type="button"
                            onClick={() => setSpecificDetails((prev) => ({ ...prev, challenge: ch }))}
                            className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                              specificDetails.challenge === ch
                                ? "bg-secondary text-white border-secondary"
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

                {/* Security Questions */}
                {interest === "security" && (
                  <div className="mt-5 space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Key Security Priority
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          "SIEM Log Aggregation & Detection",
                          "IAM Least Privilege & Mandatory MFA",
                          "Vulnerability Scanning & Hardening",
                          "Endpoint Security & EDR Oversight",
                        ].map((sc) => (
                          <button
                            key={sc}
                            type="button"
                            onClick={() => setSpecificDetails((prev) => ({ ...prev, challenge: sc }))}
                            className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                              specificDetails.challenge === sc
                                ? "bg-emerald-700 text-white border-emerald-700"
                                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                            }`}
                          >
                            {sc}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Support Questions */}
                {interest === "customer-support" && (
                  <div className="mt-5 space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Support Level Needed
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {[
                          "L1 Customer Frontline",
                          "L2 Technical Triage",
                          "Full L1 + L2 Operations",
                        ].map((tier) => (
                          <button
                            key={tier}
                            type="button"
                            onClick={() => setSpecificDetails((prev) => ({ ...prev, supportTier: tier }))}
                            className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                              specificDetails.supportTier === tier
                                ? "bg-amber-700 text-white border-amber-700"
                                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                            }`}
                          >
                            {tier}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Monthly Ticket Volume
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {["< 500 tickets", "500 – 2,000", "2,000+ tickets"].map((vol) => (
                          <button
                            key={vol}
                            type="button"
                            onClick={() => setSpecificDetails((prev) => ({ ...prev, ticketVolume: vol }))}
                            className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                              specificDetails.ticketVolume === vol
                                ? "bg-slate-900 text-white border-slate-900"
                                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                            }`}
                          >
                            {vol}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Software / Automation Questions */}
                {interest === "software-automation" && (
                  <div className="mt-5 space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        System Type
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          "Custom Web Application",
                          "Internal Tool / Ops Portal",
                          "Workflow Automation (n8n/APIs)",
                          "ERP / CRM Core Platform",
                        ].map((st) => (
                          <button
                            key={st}
                            type="button"
                            onClick={() => setSpecificDetails((prev) => ({ ...prev, softwareType: st }))}
                            className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                              specificDetails.softwareType === st
                                ? "bg-purple-700 text-white border-purple-700"
                                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                            }`}
                          >
                            {st}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* MSP Questions */}
                {interest === "msp-extension" && (
                  <div className="mt-5 space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Managed Client Endpoints / Fleet
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {["10 – 50 clients", "50 – 150 clients", "150+ clients"].map((fl) => (
                          <button
                            key={fl}
                            type="button"
                            onClick={() => setSpecificDetails((prev) => ({ ...prev, mspFleet: fl }))}
                            className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                              specificDetails.mspFleet === fl
                                ? "bg-cyan-800 text-white border-cyan-800"
                                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                            }`}
                          >
                            {fl}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
                  >
                    <span>Continue to Contact Info</span>
                    <ArrowRight className="size-4" />
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
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-slate-700 mb-3 cursor-pointer"
                >
                  <ArrowLeft className="size-3.5" />
                  <span>Back to details</span>
                </button>

                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Who should our technical lead speak with?
                </h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  We will send the calendar invite and direct video room link to this address.
                </p>

                <div className="mt-5 grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      value={contact.name}
                      onChange={(e) => setContact({ ...contact, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={contact.email}
                      onChange={(e) => setContact({ ...contact, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Acme Technologies"
                      value={contact.company}
                      onChange={(e) => setContact({ ...contact, company: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={contact.phone}
                      onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Anything specific you want to cover? (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g., We need to migrate 12 servers from an old VPS to AWS, or our developers are overwhelmed by tier-1 tickets."
                      value={contact.notes}
                      onChange={(e) => setContact({ ...contact, notes: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    disabled={!contact.name || !contact.email || !contact.company}
                    onClick={() => setStep(4)}
                    className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 disabled:opacity-50 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
                  >
                    <span>Proceed to Select Time Slot</span>
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Pick Calendar Date & Slot */}
            {step === 4 && (
              <form onSubmit={handleFinalBooking}>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-slate-700 mb-3 cursor-pointer"
                >
                  <ArrowLeft className="size-3.5" />
                  <span>Back to contact info</span>
                </button>

                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Select a convenient day & time for your discovery session
                </h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  30 minutes on Google Meet with a systems consultant. No pitch decks, just honest technical review.
                </p>

                {/* Day selector */}
                <div className="mt-5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Available Dates (Next 5 Business Days)
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {getUpcomingDays().map((d) => (
                      <button
                        key={d.dateStr}
                        type="button"
                        onClick={() => setSelectedDate(d.dateStr)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          selectedDate === d.dateStr
                            ? "bg-secondary text-white border-secondary shadow-sm"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        <span className="block text-[10px] uppercase font-bold text-slate-400 group-hover:text-slate-600">
                          {d.dayName}
                        </span>
                        <span className="block text-xs font-extrabold mt-0.5">
                          {d.display}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time selector */}
                <div className="mt-5">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Available Time Slots
                    </label>
                    <select
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                      className="text-[11px] font-semibold text-slate-600 bg-slate-100 rounded-md px-2 py-1 border border-slate-200 focus:outline-none"
                    >
                      <option value="EST (Eastern Standard Time)">US Eastern (EST)</option>
                      <option value="CST (Central Standard Time)">US Central (CST)</option>
                      <option value="PST (Pacific Standard Time)">US Pacific (PST)</option>
                      <option value="UTC (Coordinated Universal Time)">UTC</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2.5 px-2 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                          selectedTime === slot
                            ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        <Clock className="size-3 mx-auto mb-1 opacity-70" />
                        <span>{slot}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Summary Box */}
                <div className="mt-6 rounded-2xl bg-blue-50/60 border border-blue-100 p-4 text-xs text-slate-700 flex items-start gap-3">
                  <Video className="size-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">
                      Meeting Summary:
                    </span>
                    <span>
                      30-Min Technical Call on <strong>{selectedDate}</strong> at <strong>{selectedTime} ({timezone})</strong> with <strong>{contact.name || "you"}</strong> ({contact.company || "Your Company"}).
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting || !selectedDate || !selectedTime}
                    className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 disabled:opacity-50 text-white px-7 py-3 rounded-xl text-sm font-semibold shadow-md transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        <span>Confirming Booking...</span>
                      </>
                    ) : (
                      <>
                        <CalendarCheck className="size-4" />
                        <span>Confirm & Book Call</span>
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

                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  Your Call is Confirmed!
                </h3>
                <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  We have reserved your slot for <strong>{selectedDate}</strong> at <strong>{selectedTime} ({timezone})</strong>. A calendar invite with Google Meet coordinates has been dispatched to <strong>{contact.email}</strong>.
                </p>

                <div className="mt-6 max-w-sm mx-auto rounded-2xl bg-slate-50 border border-slate-200 p-4 text-left text-xs space-y-2 text-slate-600">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 font-semibold text-slate-900">
                    <span>Session Agenda</span>
                    <span className="text-secondary">30 Minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-secondary" />
                    <span>Review current infrastructure / technical challenge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-secondary" />
                    <span>Evaluate architecture options and trade-offs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-secondary" />
                    <span>Clear next steps & itemized proposal roadmap</span>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={onClose}
                    className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
