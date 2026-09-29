import Link from "next/link";
import { 
  Boxes, 
  Briefcase, 
  Database, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Landmark, 
  PackageSearch, 
  Factory, 
  Users, 
  ShieldCheck, 
  Workflow 
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "CRM & ERP Development — Unified Operations & Single System of Record — Elvtera",
  description:
    "We engineer custom CRM and ERP platforms tailored to your business. Unify sales pipelines, inventory, procurement, finance, and operations without generic SaaS limits.",
  path: "/solutions/crm-erp",
});

const capabilities = [
  {
    icon: Briefcase,
    title: "Process-Aligned CRM Architecture",
    description: "Design and implement custom or modern CRM pipelines that match your actual sales cycle, preventing lead leakage and eliminating manual data entry.",
    features: [
      "Custom deal stages, qualification checklists, and lead enrichment",
      "Automated outreach sequencing, meeting booking, and call logging",
      "Sales commission calculation and quota tracking dashboards",
      "Integration with billing engines to automatically trigger invoicing",
    ],
  },
  {
    icon: Boxes,
    title: "Unified ERP Core & Operations",
    description: "One single source of truth replacing disconnected spreadsheets across inventory, procurement, warehouse fulfillment, and vendor management.",
    features: [
      "Real-time stock tracking across multi-location warehouses",
      "Automated reorder point alerts and purchase order generation",
      "Bill of Materials (BOM) management and assembly work orders",
      "Barcode scanning and mobile warehouse fulfillment flows",
    ],
  },
  {
    icon: Landmark,
    title: "Financial Management & Billing Automation",
    description: "Automate accounting handoffs, recurring subscription billing, payment reconciliation, and audit-ready multi-currency reporting.",
    features: [
      "Automated invoicing directly from approved quotes or work orders",
      "Accounts receivable tracking, dunning flows, and payment capture",
      "Integration with QuickBooks, Xero, Stripe, and banking APIs",
      "Real-time gross margin and project profitability calculations",
    ],
  },
  {
    icon: Users,
    title: "Client & Vendor Portals",
    description: "Provide clients with real-time visibility into active orders and invoices, and give suppliers a dedicated portal for purchase order acknowledgments.",
    features: [
      "Self-service quote approval, order tracking, and invoice payment",
      "Vendor purchase order acceptance and shipping ASN submission",
      "Granular role-based permissions preventing unauthorized data access",
      "Activity logs and timestamped delivery audit trails",
    ],
  },
  {
    icon: Workflow,
    title: "Departmental Workflow Automation",
    description: "Connect sales, operations, finance, and customer service so data flows automatically between stages without manual intervention.",
    features: [
      "Deal closed-won triggers automated project and invoice creation",
      "Low inventory triggers automated supplier purchase requests",
      "Customer support tickets linked directly to client account history",
      "Custom notification webhooks to Slack, Microsoft Teams, or email",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Audit Trails & Role-Based Permissions",
    description: "Enforce strict departmental data access boundaries, dual-approval controls for large payments, and immutable change logs for every transaction.",
    features: [
      "Granular read/write permissions tailored by job function",
      "Immutable change history logging who edited what and when",
      "Multi-signoff authorization rules for purchases exceeding thresholds",
      "SOC 2 and financial audit-ready exportable reports",
    ],
  },
];

const problems = [
  {
    problem: "“We need a CRM, but off-the-shelf software forces our team to follow rigid stages that don't match how we sell.”",
    solution: "We build custom CRM solutions or deeply configure modern platforms around your team's real sales workflows, ensuring 100% adoption.",
  },
  {
    problem: "“Our finance team spends days reconciling numbers because sales uses one tool, inventory uses spreadsheets, and accounting uses another.”",
    solution: "We unify operations into a single system of record where every transaction automatically updates inventory, revenue, and fulfillment.",
  },
  {
    problem: "“Commercial ERP platforms like SAP or NetSuite cost hundreds of thousands of dollars and take years to roll out.”",
    solution: "We deliver lightweight, modular ERP platforms engineered on modern web technologies in months at a fraction of enterprise license costs.",
  },
  {
    problem: "“Stockouts and delayed purchase orders are costing us clients and margin.”",
    solution: "We implement live inventory tracking with automated supplier purchase orders triggered the moment safety stock thresholds are breached.",
  },
];

export default function CrmErpPage() {
  return (
    <>
      <PageHero
        badge="Business & Software Solutions"
        title="Custom CRM & ERP Platforms Engineered for Real Operations"
        description="Unify sales, inventory, procurement, and finance into a single source of truth. Built specifically around how your business works instead of rigid SaaS templates."
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/contact?intent=crm-erp">
              <span>Discuss Your CRM / ERP Needs</span>
              <ArrowRight className="size-4 ml-1" />
            </Button>
            <Button href="#capabilities" variant="outline">
              Explore Capabilities
            </Button>
          </div>
        }
      />

      {/* Problems We Solve */}
      <section className="py-20 lg:py-24 bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Operational Realities"
            title="Why Companies Outgrow Generic CRM & ERP Tools"
            description="Disconnected tools lead to data silos, duplicate entry, and leadership decisions based on stale numbers. A purpose-built system restores clarity."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {problems.map((item, idx) => (
              <div key={idx} className="p-7 rounded-2xl border border-slate-200 bg-surface">
                <h3 className="font-bold text-base text-primary font-display mb-3">
                  {item.problem}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-20 lg:py-24 bg-surface border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Core Modules"
            title="Complete CRM & ERP Capability Architecture"
            description="Modular components engineered to work together or integrate seamlessly with your existing software stack."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="p-7 rounded-3xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
                  <div>
                    <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 border border-blue-200 mb-5">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-xl font-bold text-primary font-display">{cap.title}</h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">{cap.description}</p>
                    <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-xs text-slate-700">
                      {cap.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-24 bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Delivery Process"
            title="Our Phased Implementation Framework"
            description="We avoid catastrophic big-bang launches. We phase deployments by department, ensuring high team adoption and zero operational disruption."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { num: "01", name: "Understand", desc: "Map exact workflows for sales, inventory, order fulfillment, and financial accounting." },
              { num: "02", name: "Plan", desc: "Define database models, module boundaries, user roles, and legacy data migration specs." },
              { num: "03", name: "Build", desc: "Develop custom modules, configure workflows, import cleaned data, and test edge cases." },
              { num: "04", name: "Operate", desc: "Execute phased department cutovers with hands-on hypercare, training, and SLAs." },
              { num: "05", name: "Improve", desc: "Continuously automate emerging friction points and build custom reporting views." },
            ].map((step) => (
              <div key={step.num} className="p-6 rounded-2xl border border-slate-200 bg-surface">
                <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">{step.num}</span>
                <h4 className="mt-3 font-bold text-base text-slate-900">{step.name}</h4>
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 lg:py-24 bg-surface border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Engagement Models"
            title="How to Engage on CRM & ERP Initiatives"
            description="From focused module implementations to full operational overhauls and ongoing maintenance."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="p-8 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase">Project-Based</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Custom Platform Build</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Fixed-scope architecture, development, data migration, and deployment of your CRM or ERP system.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Button href="/contact?intent=crm-erp&model=project" variant="outline" className="w-full">
                  Start a Project
                </Button>
              </div>
            </div>

            <div className="p-8 rounded-3xl border-2 border-secondary bg-white shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-secondary bg-blue-50 px-3 py-1 rounded-full uppercase">Ongoing Support</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">System Stewardship</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Continuous maintenance, database tuning, feature additions, integration monitoring, and user support under SLAs.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Button href="/contact?intent=crm-erp&model=ongoing" variant="primary" className="w-full">
                  Discuss Ongoing Support
                </Button>
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase">Extended Team</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Dedicated ERP Engineers</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Add full-stack engineers and RevOps architects directly to your technical team for ongoing evolution.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Button href="/contact?intent=crm-erp&model=extended-team" variant="outline" className="w-full">
                  Extend Your Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-4">
            Underlying Architecture & Technologies
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {["PostgreSQL", "Next.js", "TypeScript", "Node.js", "Redis", "n8n", "Docker", "Stripe Billing", "REST APIs", "HubSpot", "Salesforce"].map((tech) => (
              <span key={tech} className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-24 bg-surface border-b border-line">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Questions About CRM & ERP Systems"
            description="Clear answers about migration, training, and custom architecture."
          />

          <div className="mt-12 space-y-4">
            {[
              {
                q: "How do you migrate our historical data without losing order history?",
                a: "We write automated data extraction and transformation scripts that clean, deduplicate, and validate every historical customer, order, and invoice record in a staging database before executing production cutover.",
              },
              {
                q: "Can our custom CRM or ERP connect to our existing accounting software?",
                a: "Yes. We regularly build automated bidirectional synchronization with QuickBooks, Xero, Stripe, and banking APIs, ensuring invoices and payments update automatically in both systems.",
              },
              {
                q: "How long does a custom ERP implementation typically take?",
                a: "A focused implementation covering inventory, orders, and customer management typically takes 8 to 16 weeks with phased department rollouts, avoiding the multi-year delays common in legacy enterprise packages.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-white">
                <h4 className="font-bold text-base text-slate-900 font-display">{faq.q}</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Ready to build your single system of record?"
        description="Schedule a technical architecture call with an Elvtera systems specialist. We will evaluate your workflow bottlenecks, data models, and integration targets."
        buttonLabel="Discuss Your CRM / ERP Needs"
        buttonHref="/contact?intent=crm-erp"
      />
    </>
  );
}
