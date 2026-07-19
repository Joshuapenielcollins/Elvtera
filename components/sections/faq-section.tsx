import type { Faq } from "@/content/types";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/motion/reveal";

interface FaqSectionProps {
  faqs: Faq[];
  title?: string;
  description?: string;
}

/**
 * FAQ block with accessible accordion and FAQPage structured data.
 * The JSON-LD mirrors exactly what is rendered on the page.
 */
export function FaqSection({
  faqs,
  title = "Frequently asked questions",
  description,
}: FaqSectionProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section aria-labelledby="faq-heading" className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading
            eyebrow="FAQs"
            title={title}
            description={description}
          />
          <Reveal delay={0.1}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
