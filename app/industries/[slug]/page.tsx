import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CircleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { StatBand } from "@/components/sections/stat-band";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { JsonLd } from "@/components/schema";
import { industries, getIndustry } from "@/content/industries";
import { getService } from "@/content/services";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

interface Params {
  params: Promise<{ slug: string }>;
}

/** Pre-render every industry page at build time. */
export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return pageMetadata({
    title: `${industry.name} Technology Solutions`,
    description: industry.excerpt,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryPage({ params }: Params) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ])}
      />

      <PageHero
        eyebrow={`${industry.name} Solutions`}
        title={industry.headline}
        description={industry.intro}
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: industry.name, href: `/industries/${industry.slug}` },
        ]}
      >
        <Button href="/contact" size="lg">
          Talk to a {industry.name} Consultant
          <ArrowRight aria-hidden="true" />
        </Button>
      </PageHero>

      {/* Industry challenges */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Industry Challenges"
            title={`The problems we see across ${industry.name.toLowerCase()}`}
            description="If several of these sound familiar, the cost is almost certainly larger than it feels day to day - these frictions compound."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industry.challenges.map((challenge, index) => (
              <Reveal key={challenge.title} delay={(index % 3) * 0.06}>
                <div className="h-full rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)]">
                  <CircleAlert className="size-6 text-accent" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold text-primary">
                    {challenge.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {challenge.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended solutions */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Recommended Solutions"
            title={`How we solve them for ${industry.name.toLowerCase()} businesses`}
            description="The combination matters more than any single tool - these services are designed to work as one connected system."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {industry.solutions.map((solution, index) => {
              const service = getService(solution.serviceSlug);
              if (!service) return null;
              return (
                <Reveal key={solution.serviceSlug} delay={(index % 2) * 0.07}>
                  <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex text-secondary shrink-0">
                        <Icon name={service.icon} className="size-7" />
                      </span>
                      <h3 className="text-lg font-bold text-primary">
                        {service.shortName}
                      </h3>
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                      {solution.reason}
                    </p>
                    <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-secondary">
                      <Link
                        href={`/services/${service.slug}`}
                        className="after:absolute after:inset-0 after:rounded-2xl"
                      >
                        About {service.shortName}
                      </Link>
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Relevant technologies */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Relevant Technologies"
            title={`Technology we deploy in ${industry.name.toLowerCase()}`}
          />
          <Reveal delay={0.1} className="mt-10">
            <ul className="flex flex-wrap gap-3">
              {industry.technologies.map((tech) => (
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

      {/* Benefits */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Benefits"
            title="What these systems change, in numbers"
            description="Representative outcomes from engagements in this sector - your proposal will define the specific measures for your business."
          />
          <div className="mt-12">
            <StatBand stats={industry.benefits} />
          </div>
        </div>
      </section>

      <CtaSection
        title={`Let's talk about your ${industry.name.toLowerCase()} operation.`}
        description="A 30-minute conversation with a consultant who knows the sector. We'll discuss how your operation runs today and where the highest-return improvements are."
      />
    </>
  );
}
