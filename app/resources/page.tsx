import { BookOpen, Download, FileText, Newspaper, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { insights, generalFaqs } from "@/content/insights";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Resources - Blogs, Guides, Whitepapers & FAQs",
  description:
    "Practical resources on business technology: articles on ERP readiness and AI operations, buyer's guides, downloadable whitepapers and answers to common questions about working with ELVTERA.",
  path: "/resources",
});

/** Downloadable materials - connect real assets before launch. */
const downloads = [
  {
    icon: FileText,
    title: "ERP Readiness Checklist",
    description:
      "A 22-point self-assessment covering data, processes and team readiness - score your business before talking to any vendor, including us.",
    meta: "PDF · 8 pages",
  },
  {
    icon: FileText,
    title: "Automation Opportunity Worksheet",
    description:
      "The worksheet our consultants use in process audits: identify, quantify and rank your automation candidates by hours saved.",
    meta: "PDF · 5 pages",
  },
  {
    icon: FileText,
    title: "System Integration Planning Template",
    description:
      "Map your systems, their data and the manual bridges between them - the starting artifact of every integration project we run.",
    meta: "XLSX template",
  },
];

const categoryIcon = {
  Blog: Newspaper,
  Guide: BookOpen,
  Whitepaper: Download,
} as const;

export default function ResourcesPage() {
  const formatDate = (iso: string) =>
    new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Practical thinking, free to use"
        description="Articles, guides, whitepapers and tools written by the people who deliver the work. No buzzwords, no gated fluff - material you can act on whether or not you ever hire us."
        breadcrumbs={[{ label: "Resources", href: "/resources" }]}
      />

      {/* Articles, guides & whitepapers */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Blogs, Guides & Whitepapers"
            title="Latest publications"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {insights.map((insight, index) => {
              const CategoryIcon = categoryIcon[insight.category];
              return (
                <Reveal key={insight.slug} delay={(index % 2) * 0.07}>
                  <article className="flex h-full gap-6 rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)] transition-shadow duration-200 hover:shadow-md">
                    <CategoryIcon className="size-7 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                          <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                            {insight.category}
                          </span>
                          <span className="text-slate-500">
                            {formatDate(insight.date)} · {insight.readTime}
                          </span>
                        </div>
                        <h3 className="mt-3 text-lg font-bold leading-snug text-primary">
                          {insight.title}
                        </h3>
                        <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                          {insight.excerpt}
                        </p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-line">
                        <Link
                          href={`/resources/${insight.slug}`}
                          className="inline-flex items-center text-xs font-bold text-secondary hover:text-accent transition-colors gap-1.5"
                        >
                          Read article
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Downloads"
            title="Working tools from our consulting practice"
            description="The same checklists and templates our consultants use in engagements - request a copy and we'll email it directly."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {downloads.map((download, index) => (
              <Reveal key={download.title} delay={index * 0.07}>
                <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)]">
                  <download.icon
                    className="size-7 text-secondary"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 text-lg font-bold text-primary">
                    {download.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
                    {download.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-line pt-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {download.meta}
                    </span>
                    <Button href="/contact" variant="outline" size="sm">
                      Request a Copy
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (white variant sits between two gray sections, so reuse section as-is) */}
      <FaqSection
        faqs={generalFaqs}
        title="Questions we hear most often"
        description="Straight answers about who we are, how we price and how engagements run. Anything missing? Ask us directly."
      />

      <CtaSection
        title="Prefer answers specific to your business?"
        description="Reading is a fine start - a conversation is faster. Book a consultation and get an honest assessment of your systems landscape within the week."
      />
    </>
  );
}
