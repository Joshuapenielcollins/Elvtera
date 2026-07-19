import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { caseStudies } from "@/content/case-studies";
import { insights } from "@/content/insights";

const legalSlugs = [
  "privacy-policy",
  "terms-of-service",
  "cookie-policy",
  "refund-and-cancellation",
  "acceptable-use",
  "service-level-agreement",
  "data-processing-addendum",
  "legal-information",
];

/**
 * XML sitemap covering every static and dynamic route.
 * Generated at build time from the same content files that render the pages,
 * so it can never drift out of sync.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about",
    "/industries",
    "/solutions",
    "/services",
    "/case-studies",
    "/resources",
    "/careers",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  for (const service of services) {
    entries.push({
      url: `${site.url}/services/${service.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const industry of industries) {
    entries.push({
      url: `${site.url}/industries/${industry.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const study of caseStudies) {
    entries.push({
      url: `${site.url}/case-studies/${study.slug}`,
      changeFrequency: "yearly",
      priority: 0.6,
    });
  }

  // Blog / resource article pages
  for (const insight of insights) {
    entries.push({
      url: `${site.url}/resources/${insight.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // Legal & policy pages
  for (const slug of legalSlugs) {
    entries.push({
      url: `${site.url}/legal/${slug}`,
      changeFrequency: "yearly",
      priority: 0.3,
    });
  }

  return entries;
}
