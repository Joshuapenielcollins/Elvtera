"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Careers application form.
 *
 * Client component with a local success state. Wire `handleSubmit` to your
 * ATS or an API route (e.g. /api/careers) before launch - the markup and
 * validation are production-ready.
 */
export function ApplicationForm({ positions }: { positions: string[] }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: POST the FormData to your applicant-tracking system.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-center justify-center rounded-2xl border border-line bg-white p-10 text-center shadow-[var(--shadow-card)]"
      >
        <CheckCircle2 className="size-12 text-emerald-500" aria-hidden="true" />
        <h3 className="mt-5 text-xl font-bold text-primary">
          Application received.
        </h3>
        <p className="mt-3 max-w-sm text-slate-600">
          Thank you for your interest in ELVTERA. Our team reviews every
          application and responds within two weeks.
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
          <label htmlFor="applicant-name" className="mb-1.5 block text-sm font-semibold text-primary">
            Full name
          </label>
          <input id="applicant-name" name="name" required autoComplete="name" placeholder="Your name" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="applicant-email" className="mb-1.5 block text-sm font-semibold text-primary">
            Email
          </label>
          <input id="applicant-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="position" className="mb-1.5 block text-sm font-semibold text-primary">
            Position
          </label>
          <select id="position" name="position" required defaultValue="" className={inputClasses}>
            <option value="" disabled>
              Select a position
            </option>
            {positions.map((position) => (
              <option key={position} value={position}>
                {position}
              </option>
            ))}
            <option value="general">General application</option>
          </select>
        </div>
        <div>
          <label htmlFor="portfolio" className="mb-1.5 block text-sm font-semibold text-primary">
            LinkedIn / portfolio <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input id="portfolio" name="portfolio" type="url" placeholder="https://" className={inputClasses} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cover" className="mb-1.5 block text-sm font-semibold text-primary">
            Why ELVTERA?
          </label>
          <textarea
            id="cover"
            name="cover"
            required
            rows={5}
            placeholder="A short note about your experience and what draws you to this role. A link to your CV is welcome."
            className={inputClasses}
          />
        </div>
      </div>
      <Button type="submit" size="lg" className="mt-7 w-full sm:w-auto">
        Submit Application
        <Send aria-hidden="true" />
      </Button>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Application data is used solely for recruitment and handled in line
        with our Privacy Policy.
      </p>
    </form>
  );
}
