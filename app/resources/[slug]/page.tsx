import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { insights } from "@/content/insights";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const insight = insights.find((i) => i.slug === resolvedParams.slug);
  if (!insight) return {};

  return pageMetadata({
    title: `${insight.title} - ELVTERA Resources`,
    description: insight.excerpt,
    path: `/resources/${insight.slug}`,
  });
}

export default async function ResourceDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const insight = insights.find((i) => i.slug === resolvedParams.slug);
  
  if (!insight) {
    notFound();
  }

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
        eyebrow={insight.category}
        title={insight.title}
        description={insight.excerpt}
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: insight.title, href: `/resources/${insight.slug}` },
        ]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {/* Metadata banner */}
          <div className="flex items-center gap-4 border-b border-line pb-8 text-xs font-semibold text-slate-500">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs text-slate-600">
              {insight.category}
            </span>
            <span>Published on {formatDate(insight.date)}</span>
            <span>·</span>
            <span>{insight.readTime}</span>
          </div>

          {/* Article Body */}
          <div className="mt-10 space-y-10">
            {insight.body ? (
              insight.body.map((section, sIndex) => (
                <div key={sIndex} className="space-y-4">
                  {section.heading && (
                    <h2 className="text-2xl font-bold tracking-tight text-primary mt-12 mb-6">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-base leading-relaxed text-slate-600 lg:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))
            ) : (
              <p className="text-base leading-relaxed text-slate-600 lg:text-lg italic">
                Full article content is under development.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
