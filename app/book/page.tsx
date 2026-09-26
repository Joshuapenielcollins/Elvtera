import { PageHero } from "@/components/sections/page-hero";
import { pageMetadata } from "@/lib/seo";
import BookPageClient from "./book-client";

export const metadata = pageMetadata({
  title: "Book a Technical Discovery Call - Schedule With Our Engineers",
  description:
    "Schedule a 30-minute discovery call with an Elvtera systems engineer. Discuss infrastructure operations, security monitoring, technical support, or custom software.",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Direct Engineering Consultation"
        title="Schedule a 30-Minute Technical Discovery Call"
        description="Speak directly with an Elvtera systems architect or engineering lead. No sales scripts or pushy pitches—just an honest review of your infrastructure, support requirements, or software roadmap."
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
