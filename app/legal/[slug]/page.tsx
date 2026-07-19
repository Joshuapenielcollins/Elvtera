import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { parseMarkdown } from "@/lib/markdown";

const policyFiles: Record<string, { filename: string; title: string }> = {
  "privacy-policy": { filename: "01-Privacy-Policy.md", title: "Privacy Policy" },
  "terms-of-service": { filename: "02-Terms-of-Service.md", title: "Terms of Service" },
  "cookie-policy": { filename: "03-Cookie-Policy.md", title: "Cookie Policy" },
  "refund-and-cancellation": { filename: "04-Refund-and-Cancellation-Policy.md", title: "Refund & Cancellation Policy" },
  "acceptable-use": { filename: "05-Acceptable-Use-Policy.md", title: "Acceptable Use Policy" },
  "service-level-agreement": { filename: "06-Service-Level-Agreement.md", title: "Service Level Agreement (SLA)" },
  "data-processing-addendum": { filename: "07-Data-Processing-Addendum.md", title: "Data Processing Addendum (DPA)" },
  "legal-information": { filename: "08-Legal-Information.md", title: "Legal Information" }
};

interface Params {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(policyFiles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const policy = policyFiles[slug];
  if (!policy) return {};
  return {
    title: policy.title,
    description: `${policy.title} for Elvtera business systems operations.`,
  };
}

export default async function DynamicLegalPage({ params }: Params) {
  const { slug } = await params;
  const policy = policyFiles[slug];
  if (!policy) notFound();

  const filePath = path.join(process.cwd(), "content", "policies", policy.filename);
  if (!fs.existsSync(filePath)) notFound();

  const rawContent = fs.readFileSync(filePath, "utf8");
  const parsedContent = parseMarkdown(rawContent);

  return (
    <>
      <PageHero
        eyebrow="Legal Operations"
        title={policy.title}
        description="Official policy and operational agreements for our custom systems and deployments."
        breadcrumbs={[{ label: policy.title, href: `/legal/${slug}` }]}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:py-20">
          <div className="text-slate-700">
            {parsedContent}
          </div>
        </div>
      </section>
    </>
  );
}
