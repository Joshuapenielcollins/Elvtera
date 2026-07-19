/**
 * Shared content types.
 *
 * All marketing content lives in typed data files under /content and is
 * rendered through dynamic routes. Adding a new service or industry page
 * is a data change, not a code change - the design stays consistent.
 */

/** Name of a Lucide icon, resolved by components/ui/icon.tsx. */
export type IconName = string;

export interface Faq {
  question: string;
  answer: string;
}

export interface Feature {
  icon: IconName;
  title: string;
  description: string;
}

export interface Stat {
  /** Numeric portion, animated by the Counter component. */
  value: number;
  /** Suffix rendered after the number, e.g. "%" or "+". */
  suffix?: string;
  /** Prefix rendered before the number, e.g. "$". */
  prefix?: string;
  label: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  /** Full name used in headings and metadata. */
  name: string;
  /** Short name used in navigation and cards. */
  shortName: string;
  icon: IconName;
  /** One-line summary used on cards and in meta descriptions. */
  excerpt: string;
  /** Hero headline for the service page. */
  headline: string;
  /** Overview paragraphs. */
  overview: string[];
  features: Feature[];
  benefits: Stat[];
  process: ProcessStep[];
  technologies: string[];
  faqs: Faq[];
}

export interface Industry {
  slug: string;
  name: string;
  icon: IconName;
  excerpt: string;
  headline: string;
  intro: string;
  challenges: { title: string; description: string }[];
  /** Service slugs recommended for this industry. */
  solutions: { serviceSlug: string; reason: string }[];
  technologies: string[];
  benefits: Stat[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  /** Anonymized client descriptor - we do not publish client names. */
  client: string;
  industrySlug: string;
  excerpt: string;
  overview: string;
  problem: string[];
  solution: string[];
  technologies: string[];
  results: Stat[];
  testimonial: {
    quote: string;
    /** Role and industry only - quotes are anonymized by agreement. */
    attribution: string;
  };
}

export interface Insight {
  slug: string;
  category: "Blog" | "Guide" | "Whitepaper";
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  body?: { heading?: string; paragraphs: string[] }[];
}

export interface Testimonial {
  quote: string;
  attribution: string;
  context: string;
}
