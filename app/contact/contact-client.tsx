"use client";

import { PageHero } from "@/components/sections/page-hero";
import { UnifiedContactBook } from "@/components/booking/unified-contact-book";

export default function ContactPageClient() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Book a Technical Call or Contact Our Team"
        description="Schedule a 30-minute technical discovery call directly with an engineering lead, or reach out to our US and Indian operations teams."
        breadcrumbs={[{ label: "Contact & Book a Call", href: "/contact" }]}
      />

      <section className="py-12 lg:py-16 bg-surface border-b border-line">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <UnifiedContactBook />
        </div>
      </section>
    </>
  );
}
