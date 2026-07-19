"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Loader2,
  CalendarDays,
  X,
  AlertCircle,
} from "lucide-react";

/* ── Data ─────────────────────────────────────────────────────────────────── */

const SERVICES = [
  "AI Automation",
  "AI Voice Agent",
  "AI Chatbot",
  "CRM",
  "ERP",
  "Website Development",
  "WhatsApp Automation",
  "Business Process Automation",
  "Custom Software",
  "API Integration",
  "Other",
];

const INDUSTRIES = [
  "Manufacturing",
  "Healthcare",
  "Retail & E-commerce",
  "Logistics & Supply Chain",
  "Real Estate",
  "Education",
  "Hospitality",
  "Finance & Fintech",
  "Professional Services",
  "Other",
];

const COMPANY_SIZES = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–500 employees",
  "500+ employees",
];

const BUDGETS_INR = [
  "Under ₹50K",
  "₹50K – ₹2L",
  "₹2L – ₹5L",
  "₹5L – ₹10L",
  "₹10L+",
];

const BUDGETS_USD = [
  "Under $5K",
  "$5K – $25K",
  "$25K – $60K",
  "$60K – $120K",
  "$120K+",
];

const TIMELINES = [
  "ASAP",
  "Within 30 Days",
  "1–3 Months",
  "3+ Months",
  "Just Exploring",
];

const SOURCES = [
  "Google Search",
  "LinkedIn",
  "Referral",
  "Social Media",
  "Blog / Article",
  "Other",
];

/* ── Shared input styles ──────────────────────────────────────────────────── */
const inputBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm text-primary placeholder:text-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent";
const inputNormal = `${inputBase} border-line focus:ring-secondary/20 focus:border-secondary`;
const inputError  = `${inputBase} border-red-400 focus:ring-red-300`;

/* ── Types ───────────────────────────────────────────────────────────────── */
interface SalesData {
  name: string; company: string; email: string; phone: string;
  services: string[]; industry: string; companySize: string;
  website: string; description: string;
  currency: "INR" | "USD"; budget: string; timeline: string; source: string;
}
type Errors = Partial<Record<keyof SalesData, string>>;

const INITIAL: SalesData = {
  name: "", company: "", email: "", phone: "",
  services: [], industry: "", companySize: "", website: "", description: "",
  currency: "INR", budget: "", timeline: "", source: "",
};

const STEPS = ["Contact", "Project", "Qualification"];

/* ── Sub-components ──────────────────────────────────────────────────────── */

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
      <AlertCircle className="size-3 shrink-0" /> {msg}
    </p>
  );
}

function Label({ htmlFor, children, required }: {
  htmlFor: string; children: React.ReactNode; required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-primary">
      {children}
      {required && <span className="ml-0.5 text-secondary">*</span>}
    </label>
  );
}

function ServicePill({ label, selected, onToggle }: {
  label: string; selected: boolean; onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={selected}
      className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
        selected
          ? "border-secondary bg-secondary text-white"
          : "border-line bg-white text-slate-600 hover:border-secondary/40 hover:text-secondary"
      }`}
    >
      {label}
    </button>
  );
}

function RadioCard({ value, selected, onSelect, name }: {
  value: string; selected: boolean; onSelect: () => void; name: string;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      aria-label={`${name}: ${value}`}
      onClick={onSelect}
      className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all duration-200 ${
        selected
          ? "border-secondary bg-secondary-soft text-primary"
          : "border-line bg-white text-slate-600 hover:border-secondary/40"
      }`}
    >
      <span className={`flex size-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
        selected ? "border-secondary" : "border-slate-300"
      }`}>
        {selected && <span className="size-1.5 rounded-full bg-secondary" />}
      </span>
      {value}
    </button>
  );
}

/* ── Progress bar ────────────────────────────────────────────────────────── */
function ProgressBar({ step }: { step: number }) {
  const total = STEPS.length;
  const pct = ((step + 1) / total) * 100;
  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center gap-2">
        {STEPS.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <span className={`flex size-7 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
              i < step
                ? "bg-secondary text-white"
                : i === step
                ? "border-2 border-secondary bg-white text-secondary"
                : "border-2 border-line bg-white text-slate-400"
            }`}>
              {i < step ? <CheckCircle2 className="size-4" /> : i + 1}
            </span>
            <span className={`hidden text-xs font-semibold sm:block ${
              i <= step ? "text-primary" : "text-slate-400"
            }`}>
              {s}
            </span>
            {i < total - 1 && <div className="mx-1 hidden h-px w-6 bg-line sm:block" />}
          </div>
        ))}
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-surface">
        <motion.div
          className="h-full rounded-full bg-secondary"
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

/* ── Main form component ─────────────────────────────────────────────────── */
export function SalesForm({ onClose }: { onClose?: () => void }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<SalesData>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = sessionStorage.getItem("elvtera_sales_draft");
        return saved ? { ...INITIAL, ...JSON.parse(saved) } : INITIAL;
      } catch { return INITIAL; }
    }
    return INITIAL;
  });
  const [errors, setErrors]     = useState<Errors>({});
  const [loading, setLoading]   = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [success, setSuccess]   = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try { sessionStorage.setItem("elvtera_sales_draft", JSON.stringify(data)); } catch {}
  }, [data]);

  const update = useCallback(<K extends keyof SalesData>(key: K, value: SalesData[K]) => {
    setData(prev => ({ ...prev, [key]: value }));
    setErrors(prev => ({ ...prev, [key]: undefined }));
  }, []);

  const toggleService = useCallback((svc: string) => {
    setData(prev => ({
      ...prev,
      services: prev.services.includes(svc)
        ? prev.services.filter(s => s !== svc)
        : [...prev.services, svc],
    }));
    setErrors(prev => ({ ...prev, services: undefined }));
  }, []);

  function scrollTop() {
    setTimeout(() => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  }

  function validateStep(s: number): Errors {
    const e: Errors = {};
    if (s === 0) {
      if (!data.name.trim())    e.name    = "Full name is required.";
      if (!data.company.trim()) e.company = "Company name is required.";
      if (!data.email.trim())   e.email   = "Work email is required.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        e.email = "Please enter a valid email address.";
    }
    if (s === 1) {
      if (data.services.length === 0) e.services   = "Please select at least one service.";
      if (!data.industry)              e.industry   = "Please select your industry.";
      if (!data.companySize)           e.companySize = "Please select your company size.";
    }
    if (s === 2) {
      if (!data.budget)   e.budget   = "Please select an estimated budget.";
      if (!data.timeline) e.timeline = "Please select a timeline.";
    }
    return e;
  }

  function next() {
    const errs = validateStep(step);
    if (Object.keys(errs).length) { setErrors(errs); scrollTop(); return; }
    setErrors({});
    setStep(s => s + 1);
    scrollTop();
  }

  function prev() { setStep(s => s - 1); scrollTop(); }

  async function submit() {
    const errs = validateStep(2);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setApiError(null);

    const fd = new FormData();
    fd.append("type", "sales");
    Object.entries(data).forEach(([k, v]) => {
      fd.append(k, k === "services" ? (v as string[]).join(", ") : String(v));
    });

    try {
      const res  = await fetch("/api/contact", { method: "POST", body: fd });
      const json = await res.json();
      if (!res.ok || json.error) throw new Error(json.error ?? "Failed.");
      sessionStorage.removeItem("elvtera_sales_draft");
      setSuccess(true);

      // Auto-redirect to Calendly after a short success flash
      const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "#";
      setTimeout(() => {
        window.open(calendlyUrl, "_blank", "noopener,noreferrer");
      }, 1800);
    } catch (err: unknown) {
      setApiError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  /* ── Success screen ────────────────────────────────────────────────────── */
  if (success) {
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "#";
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center py-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          className="flex size-20 items-center justify-center rounded-full bg-secondary-soft"
        >
          <CheckCircle2 className="size-10 text-secondary" />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-2xl font-extrabold text-primary"
        >
          Thanks! We&apos;ve received your project details.
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500"
        >
          Opening Calendly so you can pick a time for your strategy call. If it
          doesn&apos;t open automatically, click below.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl bg-secondary px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-secondary/25 transition hover:bg-secondary/90"
          >
            <CalendarDays className="size-4" />
            Book Your Strategy Call
          </a>
          <button
            onClick={onClose}
            className="text-sm text-slate-400 hover:text-slate-600 transition-colors"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    );
  }

  const budgets = data.currency === "USD" ? BUDGETS_USD : BUDGETS_INR;

  return (
    <div ref={topRef}>
      <ProgressBar step={step} />

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          {/* ── Step 1: Contact Info ─────────────────────────────────────── */}
          {step === 0 && (
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-bold text-primary">Contact Information</h3>
                <p className="mt-1 text-sm text-slate-500">Tell us who you are so we can reach you.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="s-name" required>Full Name</Label>
                  <input id="s-name" type="text" autoComplete="name" autoFocus
                    value={data.name} onChange={e => update("name", e.target.value)}
                    placeholder="Jordan Smith"
                    className={errors.name ? inputError : inputNormal} />
                  <FieldError msg={errors.name} />
                </div>
                <div>
                  <Label htmlFor="s-company" required>Company Name</Label>
                  <input id="s-company" type="text" autoComplete="organization"
                    value={data.company} onChange={e => update("company", e.target.value)}
                    placeholder="Acme Industries"
                    className={errors.company ? inputError : inputNormal} />
                  <FieldError msg={errors.company} />
                </div>
                <div>
                  <Label htmlFor="s-email" required>Work Email</Label>
                  <input id="s-email" type="email" autoComplete="email"
                    value={data.email} onChange={e => update("email", e.target.value)}
                    placeholder="you@company.com"
                    className={errors.email ? inputError : inputNormal} />
                  <FieldError msg={errors.email} />
                </div>
                <div>
                  <Label htmlFor="s-phone">
                    Phone Number <span className="font-normal text-slate-400">(optional)</span>
                  </Label>
                  <input id="s-phone" type="tel" autoComplete="tel"
                    value={data.phone} onChange={e => update("phone", e.target.value)}
                    placeholder="+91 98765 43210"
                    className={inputNormal} />
                </div>
              </div>
            </div>
          )}

          {/* ── Step 2: Project Details ──────────────────────────────────── */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-primary">Project Details</h3>
                <p className="mt-1 text-sm text-slate-500">Help us understand what you want to build.</p>
              </div>

              <div>
                <Label htmlFor="services" required>Services you&apos;re interested in</Label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {SERVICES.map(svc => (
                    <ServicePill key={svc} label={svc}
                      selected={data.services.includes(svc)}
                      onToggle={() => toggleService(svc)} />
                  ))}
                </div>
                <FieldError msg={errors.services} />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="s-industry" required>Industry</Label>
                  <select id="s-industry" value={data.industry}
                    onChange={e => update("industry", e.target.value)}
                    className={errors.industry ? inputError : inputNormal}>
                    <option value="">Select industry</option>
                    {INDUSTRIES.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                  </select>
                  <FieldError msg={errors.industry} />
                </div>
                <div>
                  <Label htmlFor="s-size" required>Company Size</Label>
                  <select id="s-size" value={data.companySize}
                    onChange={e => update("companySize", e.target.value)}
                    className={errors.companySize ? inputError : inputNormal}>
                    <option value="">Select size</option>
                    {COMPANY_SIZES.map(sz => <option key={sz} value={sz}>{sz}</option>)}
                  </select>
                  <FieldError msg={errors.companySize} />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="s-website">
                    Current Website <span className="font-normal text-slate-400">(optional)</span>
                  </Label>
                  <input id="s-website" type="url" value={data.website}
                    onChange={e => update("website", e.target.value)}
                    placeholder="https://yourcompany.com"
                    className={inputNormal} />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="s-desc">Project Description</Label>
                  <textarea id="s-desc" rows={4} value={data.description}
                    onChange={e => update("description", e.target.value)}
                    placeholder="Briefly describe what you want to build, the problem you're solving, and any existing systems involved."
                    className={inputNormal} />
                </div>
              </div>
            </div>
          )}

          {/* ── Step 3: Qualification ────────────────────────────────────── */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-primary">Qualification</h3>
                <p className="mt-1 text-sm text-slate-500">This helps us prepare for your strategy call.</p>
              </div>

              {/* Budget with currency toggle */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <Label htmlFor="budget" required>Estimated Budget</Label>
                  <div className="flex rounded-lg border border-line bg-surface p-0.5">
                    {(["INR", "USD"] as const).map(c => (
                      <button key={c} type="button"
                        onClick={() => { update("currency", c); update("budget", ""); }}
                        className={`rounded-md px-3 py-1 text-xs font-bold transition-all ${
                          data.currency === c
                            ? "bg-white text-primary shadow-sm"
                            : "text-slate-500 hover:text-slate-700"
                        }`}>
                        {c === "INR" ? "₹ INR" : "$ USD"}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {budgets.map(b => (
                    <RadioCard key={b} value={b} name="budget"
                      selected={data.budget === b} onSelect={() => update("budget", b)} />
                  ))}
                </div>
                <FieldError msg={errors.budget} />
              </div>

              {/* Timeline */}
              <div>
                <Label htmlFor="timeline" required>Desired Timeline</Label>
                <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {TIMELINES.map(t => (
                    <RadioCard key={t} value={t} name="timeline"
                      selected={data.timeline === t} onSelect={() => update("timeline", t)} />
                  ))}
                </div>
                <FieldError msg={errors.timeline} />
              </div>

              {/* Source */}
              <div>
                <Label htmlFor="s-source">
                  How did you hear about ELVTERA?{" "}
                  <span className="font-normal text-slate-400">(optional)</span>
                </Label>
                <select id="s-source" value={data.source}
                  onChange={e => update("source", e.target.value)}
                  className={inputNormal}>
                  <option value="">Select source</option>
                  {SOURCES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              {/* API error */}
              {apiError && (
                <div className="flex items-center gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  <AlertCircle className="size-4 shrink-0" />
                  {apiError}
                </div>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* ── Navigation ────────────────────────────────────────────────────── */}
      <div className="mt-8 flex items-center justify-between gap-4 border-t border-line pt-6">
        <div>
          {step > 0 && (
            <button type="button" onClick={prev}
              className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-surface transition-colors">
              <ArrowLeft className="size-4" /> Back
            </button>
          )}
        </div>
        <div className="flex items-center gap-3">
          {onClose && step === 0 && (
            <button type="button" onClick={onClose}
              className="flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-500 hover:bg-surface transition-colors">
              <X className="size-4" /> Cancel
            </button>
          )}
          {step < STEPS.length - 1 ? (
            <button type="button" onClick={next}
              className="flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-white hover:bg-primary-soft transition-colors">
              Continue <ArrowRight className="size-4" />
            </button>
          ) : (
            <button type="button" onClick={submit} disabled={loading}
              className="flex items-center gap-2 rounded-xl bg-secondary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-secondary/25 hover:bg-secondary/90 disabled:opacity-60 transition-all">
              {loading ? (
                <><Loader2 className="size-4 animate-spin" /> Sending…</>
              ) : (
                <><CalendarDays className="size-4" /> Book a Call</>
              )}
            </button>
          )}
        </div>
      </div>

      {step === 2 && (
        <p className="mt-3 text-center text-[11px] text-slate-400">
          By submitting, you agree to our Privacy Policy. We never share your data with third parties.
        </p>
      )}
    </div>
  );
}
