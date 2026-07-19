import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { StatBand } from "@/components/sections/stat-band";
import { ProcessSteps } from "@/components/sections/process-steps";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FeatureCard } from "@/components/sections/cards";
import { Reveal } from "@/components/motion/reveal";
import { JsonLd } from "@/components/schema";
import { services, getService } from "@/content/services";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";

interface Params {
  params: Promise<{ slug: string }>;
}

/** Lowercase a service name for mid-sentence use while preserving acronyms (ERP, CRM, AI). */
function midSentence(name: string) {
  return name
    .split(" ")
    .map((word) => (word === word.toUpperCase() ? word : word.toLowerCase()))
    .join(" ");
}

/** Pre-render every service page at build time. */
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.name,
    description: service.excerpt,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={serviceSchema(
          service.name,
          service.excerpt,
          `/services/${service.slug}`
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ])}
      />

      <PageHero
        eyebrow={service.name}
        title={service.headline}
        description={service.excerpt}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.shortName, href: `/services/${service.slug}` },
        ]}
      >
        <div className="flex flex-wrap gap-4">
          <Button href="/contact" size="lg">
            Discuss Your Project
            <ArrowRight aria-hidden="true" />
          </Button>
          <Button href="/case-studies" variant="outline" size="lg">
            See Related Results
          </Button>
        </div>
      </PageHero>

      {/* Overview */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <SectionHeading eyebrow="Overview" title="What this service delivers" />
            <Reveal delay={0.1}>
              <div className="space-y-5 text-lg leading-relaxed text-slate-600">
                {service.overview.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Capabilities"
            title={`What's included in our ${midSentence(service.shortName)} work`}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, index) => (
              <Reveal key={feature.title} delay={(index % 3) * 0.06}>
                <FeatureCard feature={feature} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Benefits"
            title="The outcomes clients engage us for"
            description="Representative results across engagements - every proposal states the specific outcomes we will measure for your business."
          />
          <div className="mt-12">
            <StatBand stats={service.benefits} />
          </div>
        </div>
      </section>

      {/* Implementation process */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading
              eyebrow="Implementation Process"
              title="How the engagement runs"
              description="A structured method with clear checkpoints - you always know where the project stands and what happens next."
            />
            <ProcessSteps steps={service.process} />
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Technology"
            title="Platforms and tools we work with"
            description="Chosen for maturity, ecosystem strength and long-term viability - and always selected to fit your situation, not a partnership quota."
          />
          <Reveal delay={0.1} className="mt-10">
            <ul className="flex flex-wrap gap-3">
              {service.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-primary"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQs (includes FAQPage schema) */}
      <FaqSection
        faqs={service.faqs}
        title={`Common questions about ${midSentence(service.shortName)}`}
      />

      <CtaSection
        title={`Ready to talk about ${midSentence(service.shortName)}?`}
        description="Tell us how your operation works today. A consultant will come back with an honest assessment of whether - and how - this service would pay for itself."
      />
    </>
  );
}
