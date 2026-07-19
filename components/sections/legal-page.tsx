import { PageHero } from "@/components/sections/page-hero";

export interface LegalSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  lastUpdated: string;
  sections: LegalSection[];
}

/**
 * Shared layout for legal documents (Privacy Policy, Terms of Service):
 * consistent hero, readable measure, semantic heading hierarchy.
 */
export function LegalPage({
  eyebrow,
  title,
  description,
  path,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        breadcrumbs={[{ label: title, href: path }]}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:py-20">
          <p className="text-sm font-semibold text-slate-500">
            Last updated: {lastUpdated}
          </p>
          <div className="mt-10 space-y-12">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-bold text-primary">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="leading-relaxed text-slate-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
