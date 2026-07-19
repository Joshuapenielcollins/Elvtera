/**
 * Global site configuration.
 *
 * Centralizes company details, navigation and SEO defaults so pages and
 * components never hard-code them. Update contact details here once and
 * they propagate across the header, footer, contact page and schema markup.
 */
export const site = {
  name: "ELVTERA E-Solutions",
  shortName: "ELVTERA",
  tagline: "Engineering Business Systems That Scale.",
  description:
    "ELVTERA E-Solutions is a business technology company helping organizations streamline operations, automate workflows and scale with enterprise-grade software - ERP, CRM, custom software, automation and cloud infrastructure.",
  url: "https://www.elvtera.com",
  email: "hello@elvtera.com",
  phone: "+1 (555) 014-2400",
  addresses: [
    {
      title: "India Operations",
      line1: "Collins Enterprise Solutions LLP",
      line2: "1508C Devangar Nagar, Madhurapuri PO, Turaiyur",
      city: "Tiruchirappalli, Tamil Nadu",
      postalCode: "621010",
      country: "India",
    },
    {
      title: "USA Operations",
      line1: "Josh Global Brands LLC",
      line2: "7901 4th Street North, Ste 300",
      city: "St. Petersburg, FL",
      postalCode: "33702",
      country: "United States",
    }
  ],
  businessHours: [
    { days: "Monday to Friday", hours: "9:00 AM to 6:00 PM" },
    { days: "Saturday", hours: "10:00 AM to 2:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ],
} as const;

/** Primary navigation shown in the header. */
export const mainNav = [
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Resources", href: "/resources" },
  { label: "Careers", href: "/careers" },
] as const;

/** Legal pages linked from the footer. */
export const legalNav = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
] as const;
