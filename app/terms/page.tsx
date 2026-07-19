import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { parseMarkdown } from "@/lib/markdown";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: "The operational rules, warranties and liability limits that govern our consulting engagements and software deliveries.",
  path: "/terms",
});

export default function TermsOfServicePage() {
  const filePath = path.join(process.cwd(), "content", "policies", "02-Terms-of-Service.md");
  if (!fs.existsSync(filePath)) notFound();

  const rawContent = fs.readFileSync(filePath, "utf8");
  const parsedContent = parseMarkdown(rawContent);

  return (
    <>
      <PageHero
        eyebrow="Legal Operations"
        title="Terms of Service"
        description="The operational rules, warranties and liability limits that govern our consulting engagements and custom software deliveries."
        breadcrumbs={[{ label: "Terms of Service", href: "/terms" }]}
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
