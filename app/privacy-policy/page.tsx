import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { parseMarkdown } from "@/lib/markdown";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Elvtera collects, uses, protects and retains personal and business information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const filePath = path.join(process.cwd(), "content", "policies", "01-Privacy-Policy.md");
  if (!fs.existsSync(filePath)) notFound();

  const rawContent = fs.readFileSync(filePath, "utf8");
  const parsedContent = parseMarkdown(rawContent);

  return (
    <>
      <PageHero
        eyebrow="Legal Operations"
        title="Privacy Policy"
        description="How we collect, use, protect and retain personal and business information - written to be read, not just published."
        breadcrumbs={[{ label: "Privacy Policy", href: "/privacy-policy" }]}
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
