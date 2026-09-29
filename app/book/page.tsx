import { PageHero } from "@/components/sections/page-hero";
import { pageMetadata } from "@/lib/seo";
import BookPageClient from "./book-client";

export const metadata = pageMetadata({
  title: "Book a Technical Discovery Call — Elvtera",
  description:
    "Schedule a 30-minute discovery call with an Elvtera systems engineer. Discuss Business Solutions (CRM & GTM), Software Solutions (Custom Apps & AI), or IT & Security (Cloud & Sysadmin).",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <PageHero
        badge="Direct Engineering Consultation"
        title="Schedule a 30-Minute Technical Discovery Call"
        description="Speak directly with an Elvtera systems architect or engineering lead across our three solution pillars: Business Solutions, Software Solutions, or IT & Security. No sales pressure—just an honest review of your technical roadmap."
        breadcrumbs={[
          { label: "Book a Call", href: "/book" },
        ]}
      />

      <section className="py-12 lg:py-16 bg-surface border-b border-line">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <BookPageClient />
        </div>
      </section>
    </>
  );
}
