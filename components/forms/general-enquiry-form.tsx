"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, AlertCircle, Send, X } from "lucide-react";

const inputBase =
  "w-full rounded-xl border bg-white/60 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent";
const inputNormal = `${inputBase} border-slate-200 focus:ring-blue-500/20 focus:border-blue-500`;
const inputError = `${inputBase} border-red-400 focus:ring-red-300`;

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
      <AlertCircle className="size-3 shrink-0" />
      {msg}
    </p>
  );
}

function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-sm font-semibold text-slate-700"
    >
      {children}
      {required && <span className="ml-0.5 text-blue-500">*</span>}
    </label>
  );
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

export function GeneralEnquiryForm({ onClose }: { onClose?: () => void }) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  function update(key: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): Errors {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.subject.trim()) e.subject = "Please enter a subject.";
    if (!form.message.trim()) e.message = "Please enter your message.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setApiError(null);

    const fd = new FormData();
    fd.append("type", "general");
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));

    try {
      const res = await fetch("/api/contact", { method: "POST", body: fd });
      const json = await res.json();
      if (!res.ok || json.error) throw new Error(json.error ?? "Failed.");
      setSuccess(true);
    } catch (err: unknown) {
      setApiError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center py-6 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          className="flex size-16 items-center justify-center rounded-full bg-emerald-50"
        >
          <CheckCircle2 className="size-8 text-emerald-500" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-5 text-xl font-extrabold text-slate-900"
        >
          Message received!
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-2 max-w-xs text-sm leading-relaxed text-slate-500"
        >
          Thank you. We&apos;ll get back to you within one business day.
        </motion.p>
        {onClose && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            onClick={onClose}
            className="mt-6 text-sm text-slate-400 hover:text-slate-600 transition-colors"
          >
            Close
          </motion.button>
        )}
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-5">
        <h3 className="text-lg font-bold text-slate-900">General Enquiry</h3>
        <p className="mt-1 text-sm text-slate-500">
          For partnerships, media, support, or anything else.
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="g-name" required>
              Your Name
            </Label>
            <input
              id="g-name"
              type="text"
              autoComplete="name"
              autoFocus
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Jordan Smith"
              className={errors.name ? inputError : inputNormal}
            />
            <FieldError msg={errors.name} />
          </div>
          <div>
            <Label htmlFor="g-email" required>
              Email Address
            </Label>
            <input
              id="g-email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="you@email.com"
              className={errors.email ? inputError : inputNormal}
            />
            <FieldError msg={errors.email} />
          </div>
        </div>

        <div>
          <Label htmlFor="g-subject" required>
            Subject
          </Label>
          <input
            id="g-subject"
            type="text"
            value={form.subject}
            onChange={(e) => update("subject", e.target.value)}
            placeholder="e.g. Partnership enquiry, Support, Billing"
            className={errors.subject ? inputError : inputNormal}
          />
          <FieldError msg={errors.subject} />
        </div>

        <div>
          <Label htmlFor="g-message" required>
            Message
          </Label>
          <textarea
            id="g-message"
            rows={5}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Tell us how we can help you…"
            className={errors.message ? inputError : inputNormal}
          />
          <FieldError msg={errors.message} />
        </div>

        {apiError && (
          <div className="flex items-center gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            <AlertCircle className="size-4 shrink-0" />
            {apiError}
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-500 hover:bg-slate-100 transition-colors"
          >
            <X className="size-4" />
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={loading}
          className="ml-auto flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-2.5 text-sm font-bold text-white hover:bg-slate-800 disabled:opacity-60 transition-colors"
        >
          {loading ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send Message
              <Send className="size-4" />
            </>
          )}
        </button>
      </div>
      <p className="mt-3 text-center text-[11px] text-slate-400">
        We respond within one business day. Your information is used only to
        handle your enquiry.
      </p>
    </form>
  );
}
