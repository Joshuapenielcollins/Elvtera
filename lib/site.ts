/**
 * Global site configuration.
 *
 * Centralizes company details, navigation and SEO defaults so pages and
 * components never hard-code them. Update contact details here once and
 * they propagate across the header, footer, contact page and schema markup.
 */
export const site = {
  name: "ELVTERA",
  shortName: "ELVTERA",
  tagline: "Build. Operate. Secure. Support.",
  description:
    "Elvtera helps businesses build software, operate infrastructure, secure their technology, and support the products their customers rely on.",
  supportingStatement:
    "Technology solutions for businesses that need reliable infrastructure, secure operations, customer support, and custom software.",
  url: "https://elvtera.com",
  email: "hello@elvtera.com",
  addresses: [
    {
      title: "USA Operations",
      line1: "Josh Global Brands LLC",
      line2: "7901 4th Street North, Ste 300",
      city: "St. Petersburg, FL",
      postalCode: "33702",
      country: "United States",
    },
    {
      title: "Engineering Operations",
      line1: "Collins Enterprise Solutions LLP",
      line2: "1508C Devangar Nagar, Madhurapuri PO, Turaiyur",
      city: "Tiruchirappalli, Tamil Nadu",
      postalCode: "621010",
      country: "India",
    },
  ],
  businessHours: [
    { days: "Monday to Friday", hours: "9:00 AM to 6:00 PM EST" },
    { days: "Saturday & Sunday", hours: "On-call Incident & Escalation Operations" },
  ],
} as const;

/** Primary navigation shown in the header. */
export const mainNav = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Security & Trust", href: "/security-and-trust" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
] as const;

/** Solutions categorized under the two primary verticals. */
export const solutionsNav = [
  {
    vertical: "Infrastructure, Security & Customer Operations",
    tagline: "Keep your technology reliable, secure, and supported with a remote team that can operate infrastructure and support your customers.",
    items: [
      {
        name: "Infrastructure & Managed IT",
        href: "/infrastructure",
        description: "Cloud management, Linux/Windows servers, databases, networking, monitoring, and backups.",
      },
      {
        name: "Security Operations",
        href: "/security",
        description: "Threat detection, SIEM, IAM/MFA, endpoint security, hardening, and incident response support.",
      },
      {
        name: "Customer & Product Support",
        href: "/customer-support",
        description: "Extend your support with trained remote L1/L2 technical and product support professionals.",
      },
    ],
  },
  {
    vertical: "Custom Software & Automation",
    tagline: "Build the software and automated systems your business needs instead of forcing your operations into generic tools.",
    items: [
      {
        name: "Custom Software & Automation",
        href: "/software-automation",
        description: "Custom web applications, business platforms, workflow automation, AI agents, and integrations.",
      },
    ],
  },
] as const;

/** Legal pages linked from the footer. */
export const legalNav = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Security & Trust", href: "/security-and-trust" },
  { label: "SLA", href: "/legal/service-level-agreement" },
  { label: "Cookie Policy", href: "/legal/cookie-policy" },
] as const;
