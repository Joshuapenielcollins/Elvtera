import type { Metadata } from "next";
import { site } from "@/lib/site";

interface PageSeo {
  title: string;
  description: string;
  /** Path beginning with "/", used for the canonical URL. */
  path: string;
}

/**
 * Build consistent per-page metadata: title template, description,
 * canonical URL and Open Graph / Twitter tags.
 */
export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.shortName}`,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.shortName}`,
      description,
    },
  };
}

/** Organization schema, embedded once in the root layout. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    slogan: site.tagline,
    description: site.description,
    email: site.email,
    address: site.addresses.map((addr) => ({
      "@type": "PostalAddress",
      streetAddress: `${addr.line1}, ${addr.line2}`,
      addressLocality: addr.city,
      postalCode: addr.postalCode,
      addressCountry: addr.country,
    })),
  };
}

/** Service schema for /services/[slug] pages. */
export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${site.url}${path}`,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: "Worldwide",
  };
}

/** BreadcrumbList schema for detail pages. */
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      ...crumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: crumb.name,
        item: `${site.url}${crumb.path}`,
      })),
    ],
  };
}
