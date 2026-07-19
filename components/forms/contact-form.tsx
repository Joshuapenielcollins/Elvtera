"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";

/**
 * Contact form.
 *
 * Client component with accessible labels and native validation.
 * Submission is currently handled locally (success state shown to the
 * user) - wire `handleSubmit` to your CRM endpoint, an API route or a
 * form service (e.g. /api/contact) when backend infrastructure is ready.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: POST the FormData to your CRM or an API route before launch.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-center justify-center rounded-2xl border border-line bg-white p-10 text-center shadow-[var(--shadow-card)]"
      >
        <CheckCircle2 className="size-12 text-emerald-500" aria-hidden="true" />
        <h3 className="mt-5 text-xl font-bold text-primary">
          Thank you - we&apos;ve received your message.
        </h3>
        <p className="mt-3 max-w-sm text-slate-600">
          A consultant will get back to you within one business day. If your
          matter is urgent, call us directly during business hours.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-primary placeholder:text-slate-400 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-white p-8 shadow-[var(--shadow-card)]"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-primary">
            Full name
          </label>
          <input id="name" name="name" required autoComplete="name" placeholder="Jordan Smith" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-primary">
            Company
          </label>
          <input id="company" name="company" required autoComplete="organization" placeholder="Company name" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-primary">
            Work email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-primary">
            Phone <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+1 (555) 000-0000" className={inputClasses} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="interest" className="mb-1.5 block text-sm font-semibold text-primary">
            What can we help with?
          </label>
          <select id="interest" name="interest" required defaultValue="" className={inputClasses}>
            <option value="" disabled>
              Select an area
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.shortName}
              </option>
            ))}
            <option value="other">Something else / not sure yet</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-primary">
            Tell us about your operation
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="A few sentences about your business, the processes causing friction, and what you'd like to achieve."
            className={inputClasses}
          />
        </div>
      </div>
      <Button type="submit" size="lg" className="mt-7 w-full sm:w-auto">
        Send Message
        <Send aria-hidden="true" />
      </Button>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        We respond within one business day. Your details are used only to
        handle your enquiry - see our Privacy Policy.
      </p>
    </form>
  );
}
