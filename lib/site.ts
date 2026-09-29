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
    "Elvtera helps businesses build digital systems, develop custom software, operate their IT, and secure the technology they depend on.",
  supportingStatement:
    "From business systems and custom software to IT operations and security, Elvtera provides the technology capabilities businesses need to build and grow.",
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
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
] as const;

/** Solutions categorized under the three balanced primary pillars. */
export const solutionsNav = [
  {
    pillar: "01",
    vertical: "Business Solutions",
    href: "/solutions/business-solutions",
    tagline: "Build and scale the systems behind your business.",
    items: [
      {
        name: "Websites & Digital Setup",
        href: "/solutions/business-solutions#websites",
        description: "Modern high-performance business websites, technical SEO, and conversion infrastructure.",
      },
      {
        name: "GTM & Sales Systems",
        href: "/solutions/business-solutions#gtm",
        description: "Go-to-market architecture, inbound routing, lead tracking, and pipeline ops.",
      },
      {
        name: "CRM Implementation",
        href: "/solutions/crm-erp",
        description: "Clean CRM adoption, custom pipelines, and sales automation built around your process.",
      },
      {
        name: "Marketing Automation",
        href: "/solutions/business-solutions#marketing",
        description: "Lifecycle email, behavioral triggers, audience segmentation, and attribution.",
      },
      {
        name: "Business Process Automation",
        href: "/solutions/automation-ai",
        description: "Eliminate repetitive manual admin, invoicing friction, and fragmented spreadsheets.",
      },
      {
        name: "Customer Support Systems",
        href: "/solutions/technical-support",
        description: "Omnichannel helpdesk setup, ticketing workflows, SLA routing, and knowledge bases.",
      },
    ],
  },
  {
    pillar: "02",
    vertical: "Software Solutions",
    href: "/solutions/software-solutions",
    tagline: "Build the technology your business needs.",
    items: [
      {
        name: "Custom Software Development",
        href: "/solutions/custom-software",
        description: "Purpose-built web applications and platforms engineered to your exact operational workflows.",
      },
      {
        name: "CRM / ERP Development",
        href: "/solutions/crm-erp",
        description: "Unified operations backbones, inventory, procurement, and multi-department record systems.",
      },
      {
        name: "SaaS Applications",
        href: "/solutions/software-solutions#saas",
        description: "Scalable multi-tenant cloud software with modern subscription and auth architectures.",
      },
      {
        name: "Internal Tools & Portals",
        href: "/solutions/custom-software#internal-tools",
        description: "Executive dashboards, operational portals, and secure internal administration consoles.",
      },
      {
        name: "API & System Integrations",
        href: "/solutions/software-solutions#integrations",
        description: "Bi-directional API sync, legacy modernization, webhooks, and payment rails.",
      },
      {
        name: "AI Applications & Agents",
        href: "/solutions/automation-ai",
        description: "Intelligent agent workflows, context-aware LLM apps, chatbots, and automated voice agents.",
      },
    ],
  },
  {
    pillar: "03",
    vertical: "IT & Security",
    href: "/solutions/it-and-security",
    tagline: "Keep your technology running, secure, and ready to scale.",
    items: [
      {
        name: "IT Operations & Sysadmin",
        href: "/solutions/it-operations",
        description: "Proactive Linux & Windows server administration, patch governance, and telemetry.",
      },
      {
        name: "Cloud & Infrastructure",
        href: "/solutions/cloud-infrastructure",
        description: "AWS, Azure, and OCI cloud architecture, IaC Terraform pipelines, and cost optimization.",
      },
      {
        name: "Cybersecurity & SecOps",
        href: "/solutions/cybersecurity",
        description: "SIEM log monitoring, IAM least-privilege, MFA enforcement, and system hardening.",
      },
      {
        name: "Monitoring & Observability",
        href: "/solutions/it-operations#monitoring",
        description: "24/7 metrics, synthetic uptime probes, automated alert routing, and incident response.",
      },
      {
        name: "Backup & Disaster Recovery",
        href: "/solutions/cloud-infrastructure#backup",
        description: "Immutable backups, offsite retention, RTO/RPO enforcement, and scheduled restore drills.",
      },
      {
        name: "Technical & Helpdesk Support",
        href: "/solutions/technical-support",
        description: "Trained remote L1/L2 technical support, ticket triage, and user escalations.",
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
