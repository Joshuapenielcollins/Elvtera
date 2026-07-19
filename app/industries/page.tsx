import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { IndustryCard } from "@/components/sections/cards";
import { Reveal } from "@/components/motion/reveal";
import { industries } from "@/content/industries";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Industries - Sector-Specific Business Technology",
  description:
    "ELVTERA delivers enterprise software and automation for manufacturing, healthcare, retail, education, construction, finance, real estate, hospitality, logistics and professional services.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Systems designed for how your sector actually works"
        description="A CRM for a clinic and a CRM for a contractor are different problems wearing the same name. We bring practice-level familiarity with the workflows, constraints and regulations of every sector we serve."
        breadcrumbs={[{ label: "Industries", href: "/industries" }]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Reveal key={industry.slug} delay={(index % 3) * 0.06}>
                <IndustryCard industry={industry} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Don't see your industry?"
        description="The sectors above are where we have the deepest practice experience - but the method transfers. If your business runs on processes, we can very likely improve them. Tell us what you do."
      />
    </>
  );
}
