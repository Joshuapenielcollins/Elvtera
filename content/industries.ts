import type { Industry } from "./types";

/**
 * Industry catalog.
 *
 * Each entry powers a dedicated, SEO-optimized page at /industries/[slug]
 * describing the sector's challenges, the solutions we recommend and the
 * measurable benefits.
 */
export const industries: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "Factory",
    excerpt:
      "Connect the shop floor to the front office - production planning, inventory and finance in one system.",
    headline: "Run the plant and the business on the same numbers.",
    intro:
      "Manufacturers live or die on coordination: materials arriving on time, machines scheduled efficiently, orders promised accurately and costs known before the invoice goes out. When production runs on whiteboards and the office runs on spreadsheets, every day starts with reconciliation. We build systems that put planning, inventory, quality and finance on one connected platform.",
    challenges: [
      {
        title: "Disconnected shop floor and office",
        description:
          "Production status lives on whiteboards and in supervisors' heads, so sales promises dates the plant can't verify.",
      },
      {
        title: "Inventory blind spots",
        description:
          "Raw materials and finished goods tracked in spreadsheets lead to stockouts that halt lines and overstock that ties up cash.",
      },
      {
        title: "Costing guesswork",
        description:
          "Without live material, labor and overhead data, job costing is an estimate - and margins are discovered after the fact.",
      },
      {
        title: "Manual quality and compliance records",
        description:
          "Paper-based inspections and traceability make audits slow and recalls slower.",
      },
      {
        title: "Maintenance by breakdown",
        description:
          "Reactive maintenance turns predictable servicing into unplanned downtime at the worst possible moments.",
      },
    ],
    solutions: [
      {
        serviceSlug: "erp-solutions",
        reason:
          "Production planning, BOMs, inventory and finance in one system - the plant and the office finally share one truth.",
      },
      {
        serviceSlug: "business-automation",
        reason:
          "Automated purchasing, work-order routing and production reporting replace clipboard-and-retype workflows.",
      },
      {
        serviceSlug: "system-integration",
        reason:
          "Machines, scales and legacy plant systems connected to your ERP so data flows without manual capture.",
      },
      {
        serviceSlug: "mobile-apps",
        reason:
          "Shop-floor and warehouse apps for work orders, stock counts and quality checks - offline-capable where networks aren't.",
      },
    ],
    technologies: ["Custom Manufacturing MES", "Custom ERP Core", "Barcode & RFID", "IoT Sensors", "Power BI", "PostgreSQL"],
    benefits: [
      { value: 25, suffix: "%", label: "Typical reduction in inventory carrying cost" },
      { value: 99, suffix: "%", label: "Inventory accuracy with barcode-driven tracking" },
      { value: 30, suffix: "%", label: "Less unplanned downtime with planned maintenance workflows" },
      { value: 100, suffix: "%", label: "Batch and lot traceability for audits and recalls" },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "HeartPulse",
    excerpt:
      "Reduce administrative load, protect patient data and keep schedules full - so clinical time goes to patients.",
    headline: "Less administration. More care.",
    intro:
      "Clinics, hospitals and healthcare groups run on tight margins of time and trust. Missed appointments cost revenue, manual paperwork consumes clinical hours, and patient data carries obligations most industries never face. We build systems for healthcare operators that automate the administrative load while treating privacy and reliability as non-negotiable.",
    challenges: [
      {
        title: "No-shows and empty slots",
        description:
          "Missed appointments and manual rebooking leave expensive clinical capacity unused every single day.",
      },
      {
        title: "Administrative burden on clinical staff",
        description:
          "Registration, records, billing and reporting done by hand pull trained staff away from patients.",
      },
      {
        title: "Fragmented patient information",
        description:
          "Records split across systems and paper mean incomplete pictures at the point of care and duplicated tests.",
      },
      {
        title: "Data privacy and compliance exposure",
        description:
          "Patient data handled through ad-hoc tools and messaging apps creates regulatory and reputational risk.",
      },
      {
        title: "After-hours communication gaps",
        description:
          "Patients calling outside opening hours reach voicemail - and often book with whoever answers first.",
      },
    ],
    solutions: [
      {
        serviceSlug: "ai-automation",
        reason:
          "AI voice and WhatsApp agents handle bookings, reminders and routine questions around the clock, cutting no-shows sharply.",
      },
      {
        serviceSlug: "software-development",
        reason:
          "Patient portals and practice management tools built around your clinical workflows and compliance obligations.",
      },
      {
        serviceSlug: "business-automation",
        reason:
          "Automated registration, billing, claims and reporting free clinical staff from repetitive administration.",
      },
      {
        serviceSlug: "cloud-solutions",
        reason:
          "Encrypted, access-controlled, audit-logged infrastructure appropriate for patient data - with tested recovery.",
      },
    ],
    technologies: ["HL7 / FHIR Integration", "WhatsApp Business API", "AWS (Healthcare)", "Twilio", "PostgreSQL", "Role-Based Access Control"],
    benefits: [
      { value: 40, suffix: "%", label: "Fewer no-shows with automated reminders and easy rebooking" },
      { value: 60, suffix: "%", label: "Reduction in front-desk administrative workload" },
      { value: 24, suffix: "/7", label: "Patient booking and enquiry coverage without added staff" },
      { value: 100, suffix: "%", label: "Auditable access trail on patient-facing systems" },
    ],
  },
  {
    slug: "retail",
    name: "Retail & E-commerce",
    icon: "ShoppingBag",
    excerpt:
      "Unify online and in-store operations - one inventory, one customer view, one set of numbers.",
    headline: "One inventory. One customer. Every channel.",
    intro:
      "Retail has become an integration problem. Customers browse online, buy in-store, return by courier and expect you to keep up. Retailers who run separate systems for each channel pay for it in oversells, dead stock and marketing that talks to strangers. We connect storefronts, POS, inventory and customer data into one coherent operation.",
    challenges: [
      {
        title: "Channel silos",
        description:
          "Online store, POS and warehouse each hold their own stock truth - leading to oversells and cancelled orders.",
      },
      {
        title: "Dead stock and stockouts",
        description:
          "Without live, consolidated inventory data, purchasing is guesswork in both directions.",
      },
      {
        title: "Anonymous customers",
        description:
          "Purchase history scattered across channels makes loyalty programs and repeat-purchase marketing ineffective.",
      },
      {
        title: "Manual order handling",
        description:
          "Orders retyped between store, courier and accounting systems slow fulfillment and introduce errors.",
      },
      {
        title: "Support that can't scale with peaks",
        description:
          "Sale periods multiply enquiries about stock, delivery and returns faster than any team can answer.",
      },
    ],
    solutions: [
      {
        serviceSlug: "website-development",
        reason:
          "High-converting e-commerce storefronts connected directly to your inventory and fulfillment.",
      },
      {
        serviceSlug: "system-integration",
        reason:
          "POS, storefront, warehouse and accounting synchronized - one stock level, one order flow, one truth.",
      },
      {
        serviceSlug: "crm-solutions",
        reason:
          "Unified purchase history across channels powering loyalty, segmentation and repeat-purchase campaigns.",
      },
      {
        serviceSlug: "ai-automation",
        reason:
          "Chat and WhatsApp agents absorbing order-status, stock and returns enquiries - especially during peaks.",
      },
    ],
    technologies: ["Shopify", "Next.js Commerce", "Custom Warehouse Suite", "Custom CRM Portal", "WhatsApp Business API", "Stripe"],
    benefits: [
      { value: 99, suffix: "%", label: "Stock accuracy across channels with unified inventory" },
      { value: 2, suffix: "x", label: "Typical online conversion improvement after replatforming" },
      { value: 70, suffix: "%", label: "Of order-status enquiries handled without staff" },
      { value: 30, suffix: "%", label: "Higher repeat-purchase rate with unified customer data" },
    ],
  },
  {
    slug: "education",
    name: "Education",
    icon: "GraduationCap",
    excerpt:
      "Streamline admissions, administration and parent communication for schools, colleges and training providers.",
    headline: "Administration that keeps up with your institution.",
    intro:
      "Educational institutions run complex operations on lean administrative teams: admissions funnels, fee collection, timetabling, attendance, parent communication and reporting to boards and regulators. We help schools, colleges and training providers replace paper-and-spreadsheet administration with systems that give staff their time back and give leadership real visibility.",
    challenges: [
      {
        title: "Slow, manual admissions",
        description:
          "Paper forms and email-based enquiries lose prospective students to institutions that respond within the hour.",
      },
      {
        title: "Fee collection and follow-up",
        description:
          "Tracking invoices, plans and arrears manually consumes finance staff and delays cash flow.",
      },
      {
        title: "Fragmented student records",
        description:
          "Academic, attendance and pastoral data in separate places makes early intervention nearly impossible.",
      },
      {
        title: "Parent communication overload",
        description:
          "Front offices drown in routine calls about schedules, events and fees that could be answered automatically.",
      },
      {
        title: "Reporting burden",
        description:
          "Board and regulator reports assembled by hand each term consume days of skilled staff time.",
      },
    ],
    solutions: [
      {
        serviceSlug: "software-development",
        reason:
          "Student information systems and parent portals built around your academic structure and workflows.",
      },
      {
        serviceSlug: "crm-solutions",
        reason:
          "Admissions pipelines with instant follow-up - every enquiry nurtured from first contact to enrollment.",
      },
      {
        serviceSlug: "business-automation",
        reason:
          "Automated fee invoicing, reminders, attendance alerts and term reporting.",
      },
      {
        serviceSlug: "ai-automation",
        reason:
          "WhatsApp and chat agents answering routine parent and applicant questions at any hour, in multiple languages.",
      },
    ],
    technologies: ["Custom Student Portals", "Custom CRM Portal", "WhatsApp Business API", "Payment Gateways", "Power BI", "Single Sign-On"],
    benefits: [
      { value: 50, suffix: "%", label: "Faster admissions processing from enquiry to enrollment" },
      { value: 35, suffix: "%", label: "Reduction in fee arrears with automated reminders" },
      { value: 80, suffix: "%", label: "Of routine parent enquiries answered automatically" },
      { value: 5, suffix: "d", label: "Term reporting reduced from weeks to days" },
    ],
  },
  {
    slug: "construction",
    name: "Construction",
    icon: "HardHat",
    excerpt:
      "Keep projects, sites and head office aligned - costs tracked live, paperwork automated, decisions made on facts.",
    headline: "Every project. Every site. One picture.",
    intro:
      "Construction margins are lost in the gaps: between the site and head office, between estimate and actual, between what was ordered and what arrived. Project managers spend evenings retyping site data into spreadsheets while leadership waits weeks for cost positions. We build systems that connect field and office so project truth is live, not reconstructed.",
    challenges: [
      {
        title: "Site to office disconnect",
        description:
          "Progress, deliveries and issues reported by phone and WhatsApp photo - invisible to project controls until someone retypes them.",
      },
      {
        title: "Cost overruns discovered late",
        description:
          "Actual costs assembled manually weeks behind reality, turning manageable variances into losses.",
      },
      {
        title: "Subcontractor coordination",
        description:
          "Scopes, variations and payment claims managed across email threads invite disputes and delays.",
      },
      {
        title: "Equipment and materials tracking",
        description:
          "Plant and materials moving between sites without systematic tracking leak money quietly.",
      },
      {
        title: "Document and compliance chaos",
        description:
          "Drawings, permits, inspections and safety records scattered across drives and inboxes slow work and raise risk.",
      },
    ],
    solutions: [
      {
        serviceSlug: "erp-solutions",
        reason:
          "Project-based ERP with budgets, commitments, procurement and actuals - cost positions in real time, not month-end.",
      },
      {
        serviceSlug: "mobile-apps",
        reason:
          "Site apps for daily logs, deliveries, inspections and photos - offline-capable, synced to the office automatically.",
      },
      {
        serviceSlug: "business-automation",
        reason:
          "Automated progress claims, subcontractor payment workflows and document approvals.",
      },
      {
        serviceSlug: "ui-ux-design",
        reason:
          "Consulting to sequence the transformation - what to systematize first across estimating, delivery and finance.",
      },
    ],
    technologies: ["Custom Project Suite", "Custom Field Apps", "Document Management", "Power BI", "GPS / Asset Tracking", "Payment Workflows"],
    benefits: [
      { value: 10, suffix: "%", label: "Margin protection from live cost visibility" },
      { value: 5, suffix: "h", label: "Weekly admin time saved per project manager" },
      { value: 100, suffix: "%", label: "Site records captured digitally at the source" },
      { value: 3, suffix: "x", label: "Faster progress-claim cycles with automated workflows" },
    ],
  },
  {
    slug: "finance",
    name: "Financial Services",
    icon: "Landmark",
    excerpt:
      "Automate client onboarding, compliance workflows and reporting - with the security posture regulators expect.",
    headline: "Efficiency and compliance are not a trade-off.",
    intro:
      "Financial services firms - advisory practices, lenders, insurers, accounting firms - operate under a double constraint: clients expect digital-speed service while regulators expect airtight process. Manual onboarding, spreadsheet compliance and email-based document handling fail both tests. We build systems where speed and auditability reinforce each other.",
    challenges: [
      {
        title: "Slow client onboarding",
        description:
          "KYC document collection and verification by email stretches onboarding from hours into weeks.",
      },
      {
        title: "Compliance managed in spreadsheets",
        description:
          "Manual registers and checklists make audits painful and gaps invisible until an examiner finds them.",
      },
      {
        title: "Sensitive data on insecure channels",
        description:
          "Client documents in inboxes and consumer messaging apps create exposure no policy document can cover.",
      },
      {
        title: "Reporting assembled by hand",
        description:
          "Client statements and regulatory reports built manually each period consume senior staff and invite errors.",
      },
      {
        title: "Fragmented client view",
        description:
          "Accounts, communications and documents spread across systems make service slower and cross-sell invisible.",
      },
    ],
    solutions: [
      {
        serviceSlug: "business-automation",
        reason:
          "Digital onboarding with automated KYC document collection, verification workflows and audit trails.",
      },
      {
        serviceSlug: "software-development",
        reason:
          "Secure client portals for documents, statements and requests - replacing email as the transport for sensitive data.",
      },
      {
        serviceSlug: "crm-solutions",
        reason:
          "A complete client view with compliance-aware pipelines, review reminders and full interaction history.",
      },
      {
        serviceSlug: "cloud-solutions",
        reason:
          "Encrypted, access-controlled infrastructure with the audit logging and recovery posture regulators expect.",
      },
    ],
    technologies: ["Secure Client Portals", "Custom CRM Hub", "Document Automation", "Audit Logging", "AWS / Azure", "Multi-Factor Authentication"],
    benefits: [
      { value: 75, suffix: "%", label: "Faster client onboarding with digital KYC workflows" },
      { value: 100, suffix: "%", label: "Audit-trail coverage on client-facing processes" },
      { value: 60, suffix: "%", label: "Less time producing periodic client and regulatory reports" },
      { value: 0, label: "Sensitive documents transported over personal email" },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "Building2",
    excerpt:
      "Respond to every lead in seconds, manage listings and tenancies in one system, and automate the paperwork between.",
    headline: "The fastest response wins the listing - and the buyer.",
    intro:
      "Real estate is a speed and follow-up business. Enquiries go cold in hours, agents juggle dozens of active conversations, and property management drowns in renewals, maintenance requests and statements. We build systems for brokerages and property managers that answer instantly, follow up relentlessly and automate the administration between deals.",
    challenges: [
      {
        title: "Leads going cold",
        description:
          "Portal and website enquiries answered hours later are usually answered by a competitor first.",
      },
      {
        title: "Follow-up that depends on memory",
        description:
          "Without systematic pipelines, viewings don't get follow-up and past clients never hear from you again.",
      },
      {
        title: "Listing administration",
        description:
          "Maintaining the same property across portals, website and brochures by hand wastes hours and breeds inconsistencies.",
      },
      {
        title: "Property management overload",
        description:
          "Renewals, maintenance requests, statements and owner reporting handled manually cap how many units a team can manage.",
      },
      {
        title: "No pipeline visibility",
        description:
          "Leadership can't see conversion by source, agent or project - so marketing spend is allocated blind.",
      },
    ],
    solutions: [
      {
        serviceSlug: "ai-automation",
        reason:
          "AI agents on WhatsApp, chat and voice qualify enquiries and book viewings within seconds, at any hour.",
      },
      {
        serviceSlug: "crm-solutions",
        reason:
          "Pipelines for sales and leasing with automated follow-up sequences and full conversation history per client.",
      },
      {
        serviceSlug: "software-development",
        reason:
          "Property management platforms and owner/tenant portals for tenancies, maintenance and statements.",
      },
      {
        serviceSlug: "website-development",
        reason:
          "Fast, search-optimized property websites with listing syndication and lead capture wired to the CRM.",
      },
    ],
    technologies: ["WhatsApp Business API", "Custom CRM Portal", "Next.js", "Portal Syndication APIs", "Twilio Voice", "Payment Gateways"],
    benefits: [
      { value: 3, suffix: "s", label: "First response to enquiries via AI agents" },
      { value: 40, suffix: "%", label: "More viewings booked from the same enquiry volume" },
      { value: 2, suffix: "x", label: "Units manageable per property-management staff member" },
      { value: 100, suffix: "%", label: "Of leads captured and tracked from every source" },
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    icon: "ConciergeBell",
    excerpt:
      "Fill more rooms and tables, answer guests instantly on any channel, and run operations on live numbers.",
    headline: "Full houses run on fast answers.",
    intro:
      "Hotels, restaurants and venues compete on responsiveness and consistency. Guests book with whoever confirms first, expect answers at midnight, and remember operational stumbles longer than they remember décor. We help hospitality operators automate reservations, guest communication and back-office operations so service quality scales past what headcount alone allows.",
    challenges: [
      {
        title: "Missed bookings outside desk hours",
        description:
          "Calls and messages after hours go unanswered - and tonight's guest books elsewhere.",
      },
      {
        title: "Channel and rate chaos",
        description:
          "Managing OTAs, direct bookings and walk-ins without synchronized systems produces overbookings and rate errors.",
      },
      {
        title: "Repetitive guest enquiries",
        description:
          "Staff answer the same questions about hours, parking, menus and policies hundreds of times a week.",
      },
      {
        title: "Back office on paper",
        description:
          "Purchasing, stock counts and rosters managed manually leak margin in an industry that runs on thin ones.",
      },
      {
        title: "No single view of performance",
        description:
          "Occupancy, covers, revenue and costs in separate systems mean decisions ride on instinct rather than data.",
      },
    ],
    solutions: [
      {
        serviceSlug: "ai-automation",
        reason:
          "AI voice and WhatsApp agents take bookings, answer FAQs and send confirmations and reminders around the clock.",
      },
      {
        serviceSlug: "system-integration",
        reason:
          "PMS, POS, booking channels and accounting connected - rates, availability and revenue synchronized automatically.",
      },
      {
        serviceSlug: "business-automation",
        reason:
          "Automated purchasing, stock alerts and daily flash reports that land before the morning meeting.",
      },
      {
        serviceSlug: "website-development",
        reason:
          "Direct-booking websites that convert - reducing dependence on commission-heavy channels.",
      },
    ],
    technologies: ["WhatsApp Business API", "Twilio Voice", "PMS / POS Integration", "Channel Managers", "Stripe", "Power BI"],
    benefits: [
      { value: 24, suffix: "/7", label: "Booking and enquiry coverage without night staff" },
      { value: 20, suffix: "%", label: "Shift from OTA to direct bookings after website rebuild" },
      { value: 70, suffix: "%", label: "Of routine guest questions answered automatically" },
      { value: 0, label: "Overbookings with synchronized availability" },
    ],
  },
  {
    slug: "logistics",
    name: "Logistics & Transportation",
    icon: "Truck",
    excerpt:
      "Real-time shipment visibility, automated dispatch and customer updates that stop the 'where is my delivery?' calls.",
    headline: "Visibility is the product. Give customers theirs.",
    intro:
      "Logistics operators are judged on two things: whether the shipment arrived and whether anyone could say where it was in the meantime. Dispatch by phone call, tracking by spreadsheet and updates by callback don't survive scale. We build systems that give operations live visibility and give customers answers before they ask.",
    challenges: [
      {
        title: "No real-time shipment visibility",
        description:
          "Operations can't see fleet and consignment status live, so every exception is discovered late.",
      },
      {
        title: "'Where is my delivery?' call volume",
        description:
          "Customer service spends its day answering status questions a system should answer automatically.",
      },
      {
        title: "Manual dispatch and routing",
        description:
          "Jobs assigned by phone and experience alone leave vehicles underutilized and drivers criss-crossing.",
      },
      {
        title: "Paper PODs and billing lag",
        description:
          "Paper proof-of-delivery delays invoicing by days and invites disputes weeks later.",
      },
      {
        title: "Systems that don't connect",
        description:
          "TMS, telematics, warehouse and accounting operating separately force constant manual reconciliation.",
      },
    ],
    solutions: [
      {
        serviceSlug: "software-development",
        reason:
          "Dispatch platforms, driver apps and customer tracking portals built around your operation.",
      },
      {
        serviceSlug: "ai-automation",
        reason:
          "Automated WhatsApp status updates and AI agents that answer tracking enquiries without staff.",
      },
      {
        serviceSlug: "system-integration",
        reason:
          "Telematics, TMS, warehouse and accounting connected - from POD capture straight to invoice.",
      },
      {
        serviceSlug: "mobile-apps",
        reason:
          "Driver apps with digital PODs, photos and signatures - synced to billing the moment delivery completes.",
      },
    ],
    technologies: ["GPS / Telematics APIs", "Custom Dispatch Systems", "WhatsApp Business API", "Route Optimization", "React Native", "PostgreSQL"],
    benefits: [
      { value: 80, suffix: "%", label: "Fewer status calls with proactive automated updates" },
      { value: 3, suffix: "d", label: "Faster invoicing with digital proof-of-delivery" },
      { value: 15, suffix: "%", label: "Better fleet utilization with systematic dispatch" },
      { value: 100, suffix: "%", label: "Shipment visibility from pickup to delivery" },
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: "Briefcase",
    excerpt:
      "For firms that sell time and expertise - capture every billable hour, automate delivery admin and see project profitability live.",
    headline: "Your product is time. Stop leaking it.",
    intro:
      "Law firms, accountancies, consultancies and agencies sell expertise by the hour - yet many run on tools that leak exactly that. Unbilled time, proposal bottlenecks, project admin and month-end scrambles all consume hours no client pays for. We build systems for professional firms that protect billable time and make profitability visible while engagements are still live.",
    challenges: [
      {
        title: "Unbilled and untracked time",
        description:
          "Time reconstructed from memory at week's end quietly under-bills every engagement.",
      },
      {
        title: "Proposal and engagement bottlenecks",
        description:
          "Proposals, engagement letters and conflict checks assembled manually delay starts and revenue.",
      },
      {
        title: "Project profitability discovered too late",
        description:
          "Without live time-against-budget data, scope creep is invoiced as a write-off.",
      },
      {
        title: "Knowledge trapped in inboxes",
        description:
          "Client history and documents scattered across personal mailboxes make handovers and coverage painful.",
      },
      {
        title: "Manual month-end",
        description:
          "WIP reviews, invoicing and reporting done by hand consume the firm's most expensive people.",
      },
    ],
    solutions: [
      {
        serviceSlug: "business-automation",
        reason:
          "Automated proposals, engagement letters, WIP-to-invoice workflows and month-end reporting.",
      },
      {
        serviceSlug: "crm-solutions",
        reason:
          "Client and matter management with full history - relationships owned by the firm, not the inbox.",
      },
      {
        serviceSlug: "software-development",
        reason:
          "Client portals for documents, approvals and status - service quality that differentiates the firm.",
      },
      {
        serviceSlug: "erp-solutions",
        reason:
          "Practice management with time, billing, projects and finance connected - profitability visible per matter, live.",
      },
    ],
    technologies: ["Practice Management Platforms", "Custom CRM Portal", "Document Automation", "Client Portals", "Power BI", "Single Sign-On"],
    benefits: [
      { value: 8, suffix: "%", label: "Typical billable-hour recovery from systematic time capture" },
      { value: 70, suffix: "%", label: "Faster proposal-to-engagement turnaround" },
      { value: 100, suffix: "%", label: "Matter profitability visible while work is in progress" },
      { value: 3, suffix: "d", label: "Month-end close reduced from weeks to days" },
    ],
  },
];

/** Look up an industry by slug. */
export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
