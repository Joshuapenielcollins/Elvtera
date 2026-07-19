import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { CaseStudyCard } from "@/components/sections/cards";
import { Reveal } from "@/components/motion/reveal";
import { caseStudies } from "@/content/case-studies";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Case Studies - Measured Client Results",
  description:
    "Real engagements, real numbers: how ELVTERA clients unified operations with ERP, automated customer conversations with AI agents and connected commerce to fulfillment.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="The work, described the way we ran it"
        description="Each study covers the client's situation, the problems in their own terms, what we built, and the results as measured - not as marketed. Engagements are anonymized by agreement; the numbers are the point."
        breadcrumbs={[{ label: "Case Studies", href: "/case-studies" }]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Reveal key={study.slug} delay={index * 0.08}>
                <CaseStudyCard study={study} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Want results like these in your business?"
        description="Every one of these engagements started with a conversation about operations. Yours can too - book a consultation and tell us where the friction is."
      />
    </>
  );
}
