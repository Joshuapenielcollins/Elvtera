import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Building, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { StatBand } from "@/components/sections/stat-band";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { JsonLd } from "@/components/schema";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { getIndustry } from "@/content/industries";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

interface Params {
  params: Promise<{ slug: string }>;
}

/** Pre-render every case study at build time. */
export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return pageMetadata({
    title: study.title,
    description: study.excerpt,
    path: `/case-studies/${study.slug}`,
  });
}

/** Two-column labeled narrative block used for Problem / Solution sections. */
function NarrativeSection({
  eyebrow,
  title,
  paragraphs,
  surface = false,
  numbered = false,
}: {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  surface?: boolean;
  numbered?: boolean;
}) {
  return (
    <section className={surface ? "bg-surface" : "bg-white"}>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow={eyebrow} title={title} />
          <Reveal delay={0.1}>
            <div className="space-y-5">
              {paragraphs.map((paragraph, index) => (
                <div key={paragraph.slice(0, 40)} className="flex gap-4">
                  {numbered && (
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-slate-55 text-xs font-bold text-slate-500"
                    >
                      {index + 1}
                    </span>
                  )}
                  <p className="leading-relaxed text-slate-600">{paragraph}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const industry = getIndustry(study.industrySlug);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Case Studies", path: "/case-studies" },
          { name: study.title, path: `/case-studies/${study.slug}` },
        ])}
      />

      <PageHero
        eyebrow={`Case Study · ${industry?.name ?? ""}`}
        title={study.title}
        description={study.excerpt}
        breadcrumbs={[
          { label: "Case Studies", href: "/case-studies" },
          { label: industry?.name ?? "Case Study", href: `/case-studies/${study.slug}` },
        ]}
      >
        <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-slate-600 shadow-sm">
          <Building className="size-4 text-secondary" aria-hidden="true" />
          {study.client}
        </p>
      </PageHero>

      {/* Headline results */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <StatBand stats={study.results} tone="dark" />
        </div>
      </section>

      {/* Client overview */}
      <NarrativeSection
        eyebrow="Client Overview"
        title="The situation"
        paragraphs={[study.overview]}
      />

      {/* Problem */}
      <NarrativeSection
        eyebrow="The Problem"
        title="What was breaking, specifically"
        paragraphs={study.problem}
        surface
        numbered
      />

      {/* Solution */}
      <NarrativeSection
        eyebrow="The Solution"
        title="What we designed and delivered"
        paragraphs={study.solution}
        numbered
      />

      {/* Technology */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <SectionHeading eyebrow="Technology" title="The stack behind the result" />
            <Reveal delay={0.1}>
              <ul className="flex flex-wrap content-start gap-3">
                {study.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-primary"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Quote aria-hidden="true" className="mx-auto size-10 text-accent" />
            <blockquote className="mt-6 font-display text-2xl font-bold leading-snug text-primary lg:text-3xl">
              &ldquo;{study.testimonial.quote}&rdquo;
            </blockquote>
            <p className="mt-6 font-semibold text-slate-600"> - {study.testimonial.attribution}
            </p>
          </Reveal>
        </div>
      </section>

      {/* More case studies */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h2 className="text-xl font-bold text-primary">
              More client results
            </h2>
            <div className="flex flex-wrap gap-3">
              {caseStudies
                .filter((other) => other.slug !== study.slug)
                .map((other) => (
                  <Link
                    key={other.slug}
                    href={`/case-studies/${other.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-sm transition-colors hover:border-secondary hover:text-secondary"
                  >
                    {getIndustry(other.industrySlug)?.name}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Your operation could be the next study."
        description="Every engagement here began with a conversation about how the business ran and where it hurt. Book yours - the assessment is honest, and the numbers will be yours."
      />
    </>
  );
}
