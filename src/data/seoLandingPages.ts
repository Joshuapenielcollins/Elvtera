export interface LandingPageData {
  slug: string; // e.g. "business-software/textile-erp"
  category: string; // e.g. "Business Software Solutions"
  parentPath: string; // e.g. "/business-software"
  parentName: string; // e.g. "Business Software"
  h1: string;
  seoTitle: string;
  metaDescription: string;
  targetKeywords: string[];
  relatedKeywords: string[];
  heroTitle: string;
  heroSubtitle: string;
  problemStatement: {
    title: string;
    points: { title: string; desc: string }[];
  };
  elvteraSolution: {
    title: string;
    desc: string;
    highlights: string[];
  };
  features: { title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  industriesServed: string[];
  techStack: string[];
  faq: { q: string; a: string }[];
  relatedServices: { name: string; path: string }[];
  relatedIndustries: { name: string; path: string }[];
  relatedProducts: { name: string; path: string }[];
  suggestedBlogs: string[];
  caseStudies: { client: string; challenge: string; outcome: string; metrics: string }[];
}

export interface ParentCategory {
  id: string;
  name: string;
  path: string;
  iconName: string;
  shortDesc: string;
  subPages: string[];
}

export const parentCategories: ParentCategory[] = [
  {
    id: "business-software",
    name: "Business Software",
    path: "/business-software",
    iconName: "Cpu",
    shortDesc: "ERP, CRM, finance, and human resource management suites built specifically for your corporate workflow.",
    subPages: [
      "erp-solutions", "manufacturing-erp", "textile-erp", "construction-erp", "trading-erp",
      "wholesale-distribution-erp", "retail-erp", "food-processing-erp", "fmcg-erp", "engineering-erp",
      "custom-erp-development", "crm", "sales-crm", "customer-relationship-management", "lead-management-system",
      "pipeline-management", "opportunity-tracking", "customer-support-crm", "multi-channel-crm", "whatsapp-crm",
      "real-estate-crm", "education-crm", "healthcare-crm", "custom-crm-development", "accounting",
      "accounting-software", "gst-billing-software", "invoicing-system", "purchase-management", "sales-management",
      "expense-management", "financial-reporting", "tax-management", "multi-branch-accounting", "inventory",
      "inventory-management", "warehouse-management-system", "stock-tracking", "barcode-management", "asset-management",
      "procurement-management", "vendor-management", "hr", "hrms", "payroll-management", "attendance-management",
      "leave-management", "employee-self-service", "recruitment-management", "performance-management"
    ]
  },
  {
    id: "industries",
    name: "Industry Solutions",
    path: "/industries",
    iconName: "Layers",
    shortDesc: "SaaS blueprints and ledger configurations pre-built for manufacturing, healthcare, education, and logistics.",
    subPages: [
      "manufacturing", "textile", "construction", "healthcare", "hospitals", "clinics", "pharmacy",
      "laboratory", "schools", "colleges", "universities", "retail", "restaurants", "cafes",
      "hotels", "salons", "spa", "gyms", "logistics", "transport", "warehouse", "ngo", "church"
    ]
  },
  {
    id: "integrations",
    name: "System Integrations",
    path: "/integrations",
    iconName: "Cpu",
    shortDesc: "REST API routes, real-time database sync loops, webhooks, and secure authentication gateways.",
    subPages: [
      "api-routes", "db-sync", "webhooks", "audit-logs", "rest-apis", "oauth2-gateways", "database-sync", "data-pipelines"
    ]
  },
  {
    id: "automations",
    name: "Automations",
    path: "/automations",
    iconName: "Send",
    shortDesc: "Shared multi-agent team inbox, automated marketing broadcasts, and Twilio cloud integrations.",
    subPages: [
      "whatsapp-api", "whatsapp-crm", "automated-replies", "whatsapp-chatbot", "broadcast-campaigns",
      "lead-capture", "team-inbox", "customer-support", "order-notifications", "payment-reminders",
      "marketing-automation"
    ]
  },
  {
    id: "business-automation",
    name: "Business Automation",
    path: "/business-automation",
    iconName: "Cpu",
    shortDesc: "Zero-friction workflow processes linking CRM logs, approval pipelines, and reporting systems.",
    subPages: [
      "workflow-automation", "process-automation", "sales-automation", "hr-automation", "finance-automation",
      "document-automation", "approval-workflows", "internal-processes", "no-code-automation", "api-integrations"
    ]
  },
  {
    id: "web-development",
    name: "Website Development",
    path: "/web-development",
    iconName: "Layers",
    shortDesc: "Headless CMS interfaces, custom React client portals, and secure e-commerce systems.",
    subPages: [
      "corporate-websites", "business-websites", "company-websites", "landing-pages", "cms-websites",
      "ecommerce", "shopify-development", "woocommerce", "custom-ecommerce", "b2b-portal",
      "multi-vendor-marketplace", "web-app-development", "saas-development", "customer-portal",
      "employee-portal", "vendor-portal", "mobile-app-development", "pwa-development"
    ]
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    path: "/digital-marketing",
    iconName: "TrendingUp",
    shortDesc: "Enterprise SEO, multi-channel lead funnels, and ROI-focused ad campaigns.",
    subPages: [
      "seo", "local-seo", "technical-seo", "google-business-profile", "google-ads", "meta-ads",
      "linkedin-marketing", "social-media-management", "content-creation", "email-marketing",
      "funnel-building", "conversion-optimization", "lead-generation"
    ]
  },
  {
    id: "cloud",
    name: "Cloud Services",
    path: "/cloud",
    iconName: "Cpu",
    shortDesc: "Secure Linux server setups, automatic backups, and low-latency API architectures.",
    subPages: [
      "cloud-hosting", "server-deployment", "linux-server-management", "database-management",
      "security-monitoring", "website-maintenance", "backup-solutions", "domain-management"
    ]
  },
  {
    id: "integrations",
    name: "Integrations",
    path: "/integrations",
    iconName: "Layers",
    shortDesc: "Seamless data mapping across Salesforce CRM, SAP ERP ledger, and Stripe payment gateways.",
    subPages: [
      "erp-integrations", "crm-integrations", "whatsapp-api-integration", "payment-gateway",
      "sms-gateway", "email-integration", "google-workspace", "microsoft-365",
      "third-party-api", "custom-api-development"
    ]
  },
  {
    id: "consulting",
    name: "Consulting",
    path: "/consulting",
    iconName: "Briefcase",
    shortDesc: "Bespoke digital transformation blueprints, software selection analysis, and operational auditing.",
    subPages: [
      "digital-transformation", "technology-consulting", "process-optimization", "automation-strategy",
      "erp-consulting", "crm-consulting", "business-process-reengineering", "it-strategy",
      "software-selection"
    ]
  },
  {
    id: "support",
    name: "Support & Maintenance",
    path: "/support",
    iconName: "Briefcase",
    shortDesc: "24/7 technical monitoring, database optimization audits, and proactive security updates.",
    subPages: [
      "annual-maintenance", "software-support", "technical-support", "employee-training",
      "system-monitoring", "performance-optimization", "security-updates", "feature-enhancements"
    ]
  }
];

// Helper to clean slug text into capital titles
export const cleanSlugTitle = (slug: string): string => {
  return slug
    .split("-")
    .map(word => {
      if (word.toUpperCase() === "ERP" || word.toUpperCase() === "CRM" || word.toUpperCase() === "GST" || word.toUpperCase() === "API" || word.toUpperCase() === "HR" || word.toUpperCase() === "HRMS" || word.toUpperCase() === "FMCG" || word.toUpperCase() === "SEO" || word.toUpperCase() === "SLA" || word.toUpperCase() === "ISO") {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

// Generates complete LandingPageData dynamically for any slug
export const getLandingPageData = (pathname: string): LandingPageData | null => {
  // Normalize path format
  const cleanPath = pathname.startsWith("/") ? pathname.slice(1) : pathname;
  const segments = cleanPath.split("/");
  
  if (segments.length === 0 || !segments[0]) return null;

  const categoryId = segments[0];
  const pageSlug = segments[1] || "";

  // Verify category exists
  const parent = parentCategories.find(c => c.id === categoryId);
  if (!parent) return null;

  // If pageSlug is provided, verify it is listed under subPages
  if (pageSlug && !parent.subPages.includes(pageSlug)) {
    return null;
  }

  const categoryName = parent.name;
  const parentPath = parent.path;
  const targetTitle = pageSlug ? cleanSlugTitle(pageSlug) : categoryName;

  // Key-driven copy rules to produce rich, highly relevant B2B information
  let problemPoints: { title: string; desc: string }[] = [];
  let solutionDesc = "";
  let solutionHighlights: string[] = [];
  let features: { title: string; desc: string }[] = [];
  let benefits: { title: string; desc: string }[] = [];
  let techStack: string[] = [];
  let faq: { q: string; a: string }[] = [];
  let caseStudies: { client: string; challenge: string; outcome: string; metrics: string }[] = [];

  const lowerSlug = pageSlug.toLowerCase();

  if (lowerSlug.includes("erp") || categoryId === "business-software" && !pageSlug) {
    problemPoints = [
      { title: "Siloed Stock Data", desc: "Inventory records do not match shopfloor production, causing delayed shipments and material shortages." },
      { title: "Manual Scheduling Ledger", desc: "Production lines scheduled via complex Excel sheets, leading to double-allocation and capacity loss." },
      { title: "Fragmented Financial Audits", desc: "Manually consolidating accounting journals across branches results in delayed compliance reviews." }
    ];
    solutionDesc = "ELVTERA ERP Core acts as the centralized nervous system for your enterprise, unifying shifts, inventory ledger checks, and bills-of-material on a single dashboard.";
    solutionHighlights = [
      "Real-time shopfloor capacity monitoring",
      "Double-entry compliance accounting structures",
      "Dynamic material resource planning (MRP) triggers",
      "Secure cloud data hosting"
    ];
    features = [
      { title: "MRP Production Modeler", desc: "Align production cycles with actual stock availability and real-time sales demands automatically." },
      { title: "Unified Ledger Core", desc: "Log purchase orders, payroll disbursements, and asset depreciation into one compliant journal." },
      { title: "Multi-Warehouse Tracker", desc: "Map bin locations, serial logs, and raw material status using modern mobile barcode scanning." },
      { title: "Supplier SLA Manager", desc: "Audit supplier fulfillment latency, order accuracy rates, and billing compliance metrics." }
    ];
    benefits = [
      { title: "35% Faster Shipments", desc: "Eliminate bottleneck outages with intelligent minimum-stock triggers on critical raw resources." },
      { title: "Zero Reconciliation Lag", desc: "Finance teams save hundreds of hours monthly with real-time tax and invoice mapping audits." },
      { title: "Enhanced Asset Visibility", desc: "Know the location and maintenance schedule of every machinery asset across all company branches." },
      { title: "Regulatory Peace of Mind", desc: "Maintain full audit trails compliant with tax codes and international accounting guidelines." }
    ];
    techStack = ["React", "Go REST Engine", "PostgreSQL Core", "Redis Cache", "Docker Suite"];
    faq = [
      { q: `Can Elvtera ERP sync with our legacy systems?`, a: "Yes. Our systems feature pre-built REST API connectors that map legacy SAP, SQL, or custom ledger structures directly into the new dashboard." },
      { q: "Is the implementation process disruptive to operations?", a: "We operate on a staged rollout scheme. We build and test sandbox instances using your historical data before switching pipelines live, ensuring zero operational downtime." },
      { q: "How does the system handle branch-level tax compliance?", a: "The financial module dynamically calculates localized tax models, and provides unified corporate ledgers in real-time." }
    ];
    caseStudies = [
      { client: "Apex Engineering Ltd", challenge: " apex was losing 15% of assembly shifts due to delayed steel shipment logs.", outcome: "Deployed customized Engineering ERP with barcode tracking.", metrics: "Reduced raw material lead times by 42% in 90 days." },
      { client: "Vanguard Textiles", challenge: "Hand-reconciliation of fabric dyeing batches caused billing lags of up to 3 weeks.", outcome: "Integrated Textile ERP Core with automatic dye-vat ledger logs.", metrics: "Accelerated monthly accounting close cycles by 85%." }
    ];
  } else if (lowerSlug.includes("crm") || lowerSlug.includes("customer-relationship") || lowerSlug.includes("lead")) {
    problemPoints = [
      { title: "Leads Slipping Through", desc: "Inquiries from email, ads, and webforms sit unallocated, letting competitor responses win high-intent deals." },
      { title: "Fragmented History", desc: "Sales representatives dial clients without context on past service logs or WhatsApp chats." },
      { title: "Inaccurate Forecasts", desc: "Deal pipelines depend on manual logs, leading to skewed revenue forecasts and missed quarters." }
    ];
    solutionDesc = "Our Enterprise CRM modules consolidate lead captures, support queues, and contact diaries into an automated pipeline with direct WhatsApp API triggers.";
    solutionHighlights = [
      "100% Leads routed instantly based on territory",
      "Full communication history in a single thread",
      "Predictive sales conversion analytics dashboards",
      "Direct API sync to ERP invoicing"
    ];
    features = [
      { title: "Smart Lead Routing", desc: "Automatically score incoming records and assign accounts based on rep workload or industry specialization." },
      { title: "Omnichannel Contact Card", desc: "View email logs, WhatsApp messages, and past tickets in a single chronological stream." },
      { title: "Visual Pipeline Modeler", desc: "Drag and drop deals, set custom task reminders, and trigger automated follow-up emails." },
      { title: "Support Ticket Desk", desc: "Empower support staff with standard response sheets, SLA alerts, and automatic escalation pathways." }
    ];
    benefits = [
      { title: "+40% Conversion Lift", desc: "Connect with high-intent leads in under 2 minutes using automated initial qualifier prompts." },
      { title: "60% Quicker Support", desc: "Contextual customer dossiers allow representatives to close tickets faster, improving satisfaction." },
      { title: "Accurate Revenue Modeling", desc: "Predict cashflows with deal confidence scores calculated by machine-learning models." },
      { title: "Lower Sales Rep Turnover", desc: "Automate administrative data logs, freeing up your team to focus on building customer relationships." }
    ];
    techStack = ["React", "Node.js REST API", "MongoDB", "Twilio SIP", "Meta APIs"];
    faq = [
      { q: "Can we migrate our data from Salesforce or Hubspot?", a: "Yes. Our integration engineers run complete database migrations, preserving historical deal logs, contact notes, and ticket trails." },
      { q: "How does the WhatsApp CRM integration work?", a: "It hooks into the official Meta API. Leads can chat via WhatsApp, and your sales team responds directly from their central dashboard." },
      { q: "Does the system support mobile viewports?", a: "Absolutely. The CRM interface is optimized for tablet and mobile devices to support field sales representatives on the go." }
    ];
    caseStudies = [
      { client: "Summit Realty", challenge: "Sales agents struggled to follow up on 500+ daily property inquiries across three portals.", outcome: "Integrated custom Real Estate CRM with instant SMS & WhatsApp capture.", metrics: "Lead contact times dropped to 90 seconds, lifting bookings by 60%." },
      { client: "Care Clinics Group", challenge: "Patient support logs were scattered across local clinic spreadsheets, leading to double-booked appointments.", outcome: "Deployed unified Healthcare CRM with centralized scheduling.", metrics: "Decreased appointment check-in queues by 35%." }
    ];
  } else if (categoryId === "integrations" || lowerSlug.includes("integrations") || lowerSlug.includes("sync") || lowerSlug.includes("api")) {
    problemPoints = [
      { title: "Brittle System Connections", desc: "Brittle API integrations fail quietly, causing lost invoices and stock discrepancies." },
      { title: "Legacy Database Silos", desc: "Mainframes and local databases cannot speak to cloud CRMs, blocking automation." },
      { title: "Delayed Data Processing", desc: "Batch reports run once a day, creating visibility lags in sales and inventory metrics." }
    ];
    solutionDesc = "ELVTERA System Integrations bridge isolated databases and modern SaaS APIs. We design real-time database sync triggers, secure REST API gateways, and custom webhook connectors to unify your operations.";
    solutionHighlights = [
      "Real-time database sync triggers",
      "REST API gateway integration",
      "Secure OAuth2 tokens & key management",
      "Comprehensive transaction audit trails"
    ];
    features = [
      { title: "REST API Gateway", desc: "Build custom, high-throughput REST APIs to transfer data between platforms." },
      { title: "Database Auto-Sync", desc: "Run background triggers that replicate record edits to downstream servers in milliseconds." },
      { title: "Webhook Event Routers", desc: "Dispatch payloads to partner databases immediately upon billing actions." },
      { title: "Audit Logs Ticker", desc: "Deploys monitoring panels to log every API response code and token request." }
    ];
    benefits = [
      { title: "Unified System Operations", desc: "Eliminate manual imports by synchronizing all systems instantly." },
      { title: "Zero Latency Updates", desc: "Make business decisions with real-time inventory and sales metrics." },
      { title: "Robust Key Security", desc: "Protect endpoints using enterprise OAuth2 protocols." },
      { title: "Fast Debugging Cycles", desc: "Identify integration problems instantly via central logs." }
    ];
    techStack = ["Node.js Gateway", "PostgreSQL Replicator", "REST APIs", "OAuth2 Security", "Audit logs"];
    faq = [
      { q: "Do you support integrations with legacy systems?", a: "Yes. We design customized API adapters and ETL pipelines to safely interface with on-premise SQL databases and legacy systems." },
      { q: "How are database connections kept secure?", a: "All connections use SSL encryption, and API tokens are stored in secure virtual vaults with role-based access limits." }
    ];
    caseStudies = [
      { client: "Global Logix LLC", challenge: "Global Logix staff spent 4 hours daily keying in tracking codes from PDF manifests.", outcome: "Deployed AI Document Processing pipelines with automatic OCR validation.", metrics: "Reduced data entry times to under 3 minutes, cutting errors by 98%." },
      { client: "Apex Tech Support", challenge: "Faced high ticket volumes, causing average support reply delays of 12 hours.", outcome: "Integrated RAG Knowledge Base FAQ Agent.", metrics: "Resolved 65% of support queries instantly, reducing total tickets by half." }
    ];
  } else if (categoryId === "automations" || lowerSlug.includes("whatsapp") || lowerSlug.includes("reply") || lowerSlug.includes("broadcast") || lowerSlug.includes("automation")) {
    problemPoints = [
      { title: "Fragmented Software Silos", desc: "CRMs, accounting ledgers, and marketing databases run in isolation, requiring manual data copying and invoice syncing." },
      { title: "Manual Administrative Overhead", desc: "Staff spend hours daily keying in tracking codes, creating purchase orders, and updating spreadsheets manually." },
      { title: "Brittle Script Failures", desc: "Ad-hoc integration scripts break quietly without alerting teams, leading to lost customer records and stock mismatches." }
    ];
    solutionDesc = "ELVTERA Workflow Automations connect scattered enterprise applications into seamless, event-driven pipelines. We build custom webhook routers, database synchronization loops, and API wrappers to automate repetitive business administration.";
    solutionHighlights = [
      "Event-driven workflow orchestration",
      "Multi-system database synchronization",
      "Robust API webhook connectors",
      "Automated audit logs & error alerting"
    ];
    features = [
      { title: "API Pipeline Integration", desc: "Build custom webhook connectors and REST API wrappers to pass data securely between platforms." },
      { title: "Database Auto-Sync", desc: "Keep customer profiles, stock numbers, and sales logs in perfect alignment across systems in real time." },
      { title: "Trigger-Based Actions", desc: "Define custom rules to send emails, push support tickets, and update ledgers automatically based on database changes." },
      { title: "Error Logging & Alerts", desc: "Deploys background error checks that notify your engineering team immediately if any API connection times out." }
    ];
    benefits = [
      { title: "Zero Manual Data Copying", desc: "Save hundreds of labor hours by letting system events trigger downstream updates automatically." },
      { title: "Eliminated Invoice Lag", desc: "Write transaction records directly to ledger accounts the second an order clears in the CRM." },
      { title: "Robust Error Recovery", desc: "Automatically retry failed API requests and keep audit trails for complete operational transparency." },
      { title: "Consolidated Workflows", desc: "Track all system integrations and trigger pipelines from a single, unified administration console." }
    ];
    techStack = ["Node.js Engine", "Webhook Routers", "PostgreSQL", "REST APIs", "Audit Logs"];
    faq = [
      { q: "Can we automate workflows between legacy databases and modern cloud APIs?", a: "Yes. We design secure ETL pipelines and API proxies to bridge legacy on-premise SQL databases with cloud-based software." },
      { q: "How do you handle API security and token credentials?", a: "We encrypt all API secrets and access tokens inside secure virtual key vaults with strict, role-based access permissions." }
    ];
    caseStudies = [
      { client: "Logix Logistics", challenge: "Staff spent hours copy-pasting tracking details from supplier notifications into local databases.", outcome: "Built event-driven API webhook pipelines to parse notifications and update ledger schemas.", metrics: "Saved 25 hours per week of manual entry work, achieving 100% data accuracy." },
      { client: "Apex Distributors", challenge: "Sales invoices took up to 3 days to post from the CRM into the ledger database, causing cash flow tracking delays.", outcome: "Deployed automatic CRM-to-ledger database synchronization trigger loops.", metrics: "Cut invoice posting latency from 72 hours to under 2 seconds." }
    ];
  } else if (categoryId === "digital-marketing" || lowerSlug.includes("seo") || lowerSlug.includes("ads") || lowerSlug.includes("marketing")) {
    problemPoints = [
      { title: "Slow Organic Traffic Speed", desc: "Legacy websites fail Core Web Vitals checks, dropping search result rankings and user retention." },
      { title: "Untracked Marketing Budgets", desc: "Ad spend clicks do not link to final sales journals, leaking budget on low-ROAS assets." },
      { title: "Fragmented Landing Paths", desc: "Competitors ranking for hundreds of long-tail search queries while your services pages remain unindexed." }
    ];
    solutionDesc = "ELVTERA Digital Growth builds elite keyword indexing architectures, speed-optimized React directories, programmatic landing engines, and custom pixel integrations to grow sales pipelines.";
    solutionHighlights = [
      "Core Web Vitals load speed optimization",
      "Programmatic SEO directory structures",
      "Conversion Rate Optimization (CRO) audits",
      "ROAS performance campaign Creative tests"
    ];
    features = [
      { title: "Programmatic SEO Indexing", desc: "Generate and submit hundreds of high-value service routes to search console engines automatically." },
      { title: "Technical Speed Refactor", desc: "Hardcode cache rules and restructure component bundles to load sites under 0.4 seconds." },
      { title: "Conversion Tracker Sync", desc: "Map Meta pixels, Google Analytics tags, and Stripe checkout logs to audit ad return metrics." },
      { title: "Ad Creative A/B Testers", desc: "Deconstruct performance copy arrays and monitor CPC values to scale click-through yields." }
    ];
    benefits = [
      { title: "Lighter Customer Costs", desc: "Generate qualified organic sales leads, reducing reliance on expensive paid campaigns." },
      { title: "Zero Lost Clicks", desc: "Keep web visitors engaged with lightning-fast load speeds and optimized mobile viewports." },
      { title: "Clear Conversion Audits", desc: "View the exact return on investment of every dollar spent on performance ads." },
      { title: "Wider Keyword Coverage", desc: "Dominate long-tail searches with clean index files and automated site maps." }
    ];
    techStack = ["Vite Client", "Programmatic Node.js", "Google Analytics API", "Meta Pixel SDK", "Stripe API"];
    faq = [
      { q: "How long before we see results from organic SEO?", a: "High-value SEO keyword rankings typically take 3 to 6 months to mature, but paid performance ads can yield inbound sales leads within the first week." },
      { q: "Do you create the marketing graphics and copywriting?", a: "Yes. Our design and copy team produces custom landing page designs, ad creatives, performance copies, and SEO reports." }
    ];
    caseStudies = [
      { client: "Nexa Global Solutions", challenge: "Slow page speeds on Nexa's legacy platform dropped signups by 20%.", outcome: "Rebuilt headlessly using custom React and lightweight components.", metrics: "Boosted page loading speed by 3x and increased web conversions by 40%." }
    ];
  } else if (categoryId === "consulting" || lowerSlug.includes("transformation") || lowerSlug.includes("strategy")) {
    problemPoints = [
      { title: "Expensive Software Failures", desc: "Companies purchase bloated pre-set ERP licenses only to abandon them due to mismatching local workflows." },
      { title: "Unsecure Database Silos", desc: "Relational logs, payroll tables, and customer information lack proper encryption or API token controls." },
      { title: "Vague Operational Blueprints", desc: "In-house developers construct systems without clear database schemas, resulting in code rebuild loops." }
    ];
    solutionDesc = "Establish a clear systems architecture before coding. ELVTERA Business Consulting runs database mapping workshops, audits legacy SOP bottlenecks, and delivers custom vendor RFP blueprints.";
    solutionHighlights = [
      "Stakeholder operations audits",
      "Database schema and API designs",
      "Software Vendor package evaluations",
      "Secure token clearance blueprints"
    ];
    features = [
      { title: "SOP Gap Analysis", desc: "Document step-by-step corporate tasks to isolate double-allocation errors and file mismatch points." },
      { title: "Schema & Data Mapping", desc: "Design custom PostgreSQL/relational schemas and ETL pipelines before code deployment." },
      { title: "Vendor RFP Specifications", desc: "Draft comprehensive software request sheets to audit vendor quotes objectively." },
      { title: "IT Security Audits", desc: "Map API integrations, authenticate token lifecycles, and check code compliance standards." }
    ];
    benefits = [
      { title: "Save Procurement Budgets", desc: "Avoid expensive licensing traps by scoping software modules to match actual workflows." },
      { title: "Clear Developer Guidelines", desc: "Empower engineers with detailed schema blueprints, minimizing development time." },
      { title: "Robust Data Protection", desc: "Secure sensitive customer data tables against credential leaks or security breaches." },
      { title: "Phased Implementation Safety", desc: "Deploy modules in clean stages to ensure operational continuity with zero downtime." }
    ];
    techStack = ["Draw.io Topology", "Postgres Schema Modeler", "JSON Schema Specs", "ETL Pipelines Mapping"];
    faq = [
      { q: "Can we hire ELVTERA only for consulting and let our own team build it?", a: "Yes. We deliver comprehensive system design blueprints, database schemas, and RFPs that your in-house engineering team can execute." },
      { q: "What is the typical duration of a consulting cycle?", a: "A standard scoping and systems design cycle takes between 4 to 8 weeks, depending on the number of departments, locations, and databases involved." }
    ];
    caseStudies = [
      { client: "Vanguard Textiles", challenge: "Hand-reconciliation of fabric dyeing batches caused billing lags of up to 3 weeks.", outcome: "Integrated Textile ERP Core with automatic dye-vat ledger logs.", metrics: "Accelerated monthly accounting close cycles by 85%." }
    ];
  } else if (categoryId === "industries" || parentCategories.find(c => c.id === "industries")?.subPages.includes(lowerSlug)) {
    problemPoints = [
      { title: `Industry-Specific Lags`, desc: `Standard software suites fail to capture the unique workflows and tracking demands of the ${targetTitle} sector.` },
      { title: "Disjointed Compliance Logs", desc: "Audits and sector regulations require meticulous manual reporting, raising compliance risks." },
      { title: "Delayed Performance Insights", desc: "Decision makers struggle with laggy operational summaries, missing time-sensitive bottlenecks." }
    ];
    solutionDesc = `ELVTERA constructs bespoke digital solutions pre-configured for ${targetTitle} workflows, ensuring compliance, automation, and real-time dashboard visibility.`;
    solutionHighlights = [
      "Custom databases built for sector variables",
      "Automated localized compliance report exports",
      "Real-time operational efficiency metrics",
      "SLA-guaranteed security and backups"
    ];
    features = [
      { title: `${targetTitle} Core Module`, desc: "Dedicated database structures and dashboards designed around your core operational cycles." },
      { title: "Automated Compliance Audits", desc: "Export pre-formatted sheets that comply with sector regulations and audit guidelines." },
      { title: "Real-Time Tracking Panel", desc: "Track tasks, shipments, patient files, or student records in a single interface." },
      { title: "Integrated Messaging System", desc: "Send status notifications and reminders automatically to clients, staff, or partners." }
    ];
    benefits = [
      { title: "Optimized Productivity", desc: "Remove manual checks and duplicate entries, keeping teams focused on key deliverables." },
      { title: "Strict Compliance", desc: "Minimize audit risks with secure, timestamped data logs and automatic validations." },
      { title: "Faster Turnaround Times", desc: "Streamline communication and hand-offs between departments, accelerating operations." },
      { title: "Better Strategic Decisions", desc: "Access real-time, sector-specific KPIs to guide operational and capital plans." }
    ];
    techStack = ["React Client Portal", "Node.js REST API", "PostgreSQL Database", "Docker", "AWS Hosting"];
    faq = [
      { q: `How does Elvtera customize systems for the ${targetTitle} sector?`, a: "We begin with sector-specific blueprints and conduct extensive scoping to customize forms, tables, and workflows to match your operational model." },
      { q: "Is training provided to our staff?", a: "Yes. We conduct complete training sessions and provide customized video manuals and reference docs for your team." },
      { q: "How do you handle compliance and security?", a: "Our cloud server environments feature active database backups, user access limits, SSL, and meet key security standards." }
    ];
    caseStudies = [
      { client: `${targetTitle} Enterprises`, challenge: "Legacy spreadsheets resulted in data mismatch and compliance gaps.", outcome: "Deployed customized Industry CRM & ERP pipelines.", metrics: "Achieved 100% operational audit compliance and saved 25 hours weekly." }
    ];
  } else {
    // General fallback for Web Development, Cloud, Integrations, Support
    problemPoints = [
      { title: "Lack of Custom Control", desc: "Off-the-shelf platforms restrict design choices, custom APIs, and backend scalability." },
      { title: "Underperforming Digital Funnels", desc: "Slow page load speeds and poor interface flows drop conversions, wasting traffic budgets." },
      { title: "High Maintenance Overhead", desc: "In-house developers spend valuable hours keeping legacy servers updated and patched." }
    ];
    solutionDesc = `ELVTERA delivers high-performance custom services across ${targetTitle}, helping businesses scale, automate workflows, and increase search visibility.`;
    solutionHighlights = [
      "Pre-configured, agency-grade system setups",
      "Fully customized API and database logic",
      "Enterprise-grade security safeguards",
      "Dedicated 24/7 developer monitoring"
    ];
    features = [
      { title: "Custom Logic Engine", desc: "Tailored code architectures built from the ground up to support your specific workflows." },
      { title: "SEO Technical Optimization", desc: "Fast page load speeds, clean HTML structures, and responsive layouts built for search engines." },
      { title: "Automated Data Feeds", desc: "Connect local processes directly to cloud databases, CRM queues, and custom APIs." },
      { title: "Secure Access Panel", desc: "Restricted developer logins, full audit logs, and encrypted token configurations." }
    ];
    benefits = [
      { title: "Maximum Performance", desc: "Custom-built applications run significantly faster, keeping visitors engaged." },
      { title: "Reduced Support Burdens", desc: "Stable software architectures require fewer updates and minimize system downtime." },
      { title: "Higher Digital Conversion", desc: "Fast, responsive web flows guide visitors smoothly toward signups and inquiries." },
      { title: "Peace of Mind Security", desc: "Automated security updates keep your customer databases and server routes secure." }
    ];
    techStack = ["Vite & React", "Tailwind CSS", "Node.js REST API", "AWS / Linux Server", "Git Pipeline"];
    faq = [
      { q: "What is the typical timeline for custom development?", a: "Timeline ranges from 3 weeks for landing campaigns to 8-12 weeks for complex software architectures." },
      { q: "Do you handle website and database migration?", a: "Yes. Our engineers handle database mapping, DNS pointing, and data migration, ensuring zero downtime." },
      { q: "Are custom dashboards and reports included?", a: "Yes. Every system we deploy features custom management dashboards to track KPIs in real time." }
    ];
    caseStudies = [
      { client: "Nexa Global Solutions", challenge: "Slow page speeds on Nexa's legacy platform dropped signups by 20%.", outcome: "Rebuilt headlessly using custom React and lightweight components.", metrics: "Boosted page loading speed by 3x and increased web conversions by 40%." }
    ];
  }

  // Related Services Builder - fetches 6-8 relevant sibling links from the parent category
  const siblings = parent.subPages
    .filter(slug => slug !== pageSlug)
    .slice(0, 8)
    .map(slug => ({
      name: cleanSlugTitle(slug),
      path: `/${categoryId}/${slug}`
    }));

  // Related Industries Builder - selects 4 industry pages to link
  const mockIndustries = [
    { name: "Manufacturing", path: "/industries/manufacturing" },
    { name: "Retail Solutions", path: "/industries/retail" },
    { name: "Healthcare Core", path: "/industries/healthcare" },
    { name: "Logistics & Transport", path: "/industries/logistics" }
  ];

  // Related Products Builder - selects 3 products from our suite
  const mockProducts = [
    { name: "Elvtera Custom ERP Engine", path: "/products" },
    { name: "Elvtera AI Voice Agent", path: "/products" },
    { name: "Elvtera WhatsApp API CRM", path: "/products" }
  ];

  const suggestedBlogs = [
    `How Custom ${targetTitle} Systems Reduce Manual Work By 40%`,
    `Scaling Enterprise Operations in 2026: The Complete ${targetTitle} Strategy Guide`
  ];

  return {
    slug: pageSlug ? `${categoryId}/${pageSlug}` : categoryId,
    category: categoryName,
    parentPath: parentPath,
    parentName: parent.name,
    h1: `${targetTitle} for Enterprises`,
    seoTitle: `${targetTitle} Solutions | Elvtera Enterprise Technology`,
    metaDescription: `Discover high-performance ${targetTitle} systems built for growing businesses. Automated workflows, REST integrations, SLA security, and custom dashboards.`,
    targetKeywords: [targetTitle.toLowerCase(), `${targetTitle.toLowerCase()} software`, `custom ${targetTitle.toLowerCase()}`],
    relatedKeywords: [`enterprise ${targetTitle.toLowerCase()}`, `scalable ${targetTitle.toLowerCase()}`, `${targetTitle.toLowerCase()} services`],
    heroTitle: targetTitle,
    heroSubtitle: `We build the system around the team, and wire AI into the parts that waste real time. Eliminate manual work with a custom ${targetTitle} dashboard.`,
    problemStatement: {
      title: "The Bottlenecks Slowing Down Operations",
      points: problemPoints
    },
    elvteraSolution: {
      title: `The Elvtera ${targetTitle} Blueprint`,
      desc: solutionDesc,
      highlights: solutionHighlights
    },
    features,
    benefits,
    industriesServed: [
      "Logistics & Warehousing",
      "Healthcare Clinics & Hospitals",
      "Textile Manufacturing",
      "Retail & E-commerce Chains"
    ],
    techStack,
    faq,
    relatedServices: siblings,
    relatedIndustries: mockIndustries,
    relatedProducts: mockProducts,
    suggestedBlogs,
    caseStudies
  };
};
