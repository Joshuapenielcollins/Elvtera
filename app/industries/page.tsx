import Link from "next/link";
import { 
  Server, 
  ShieldCheck, 
  Headphones, 
  Code2, 
  Workflow, 
  Cpu, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  TrendingUp, 
  Truck, 
  Factory, 
  Briefcase, 
  HardHat, 
  ShoppingBag, 
  Stethoscope, 
  CreditCard, 
  Users, 
  Lock,
  CalendarCheck
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Industries Served - Technology Solutions Mapped to Sector Realities",
  description:
    "Sector-specific engineering across Elvtera's two primary verticals: Infrastructure, Security & Customer Operations for tech platforms, and Custom Software & Automation for operations-heavy enterprises.",
  path: "/industries",
});

// Vertical 1 Sectors: Infrastructure, Security & Customer Operations
const vertical1Industries = [
  {
    title: "SaaS & Cloud Platforms",
    subtitle: "High-Availability Infrastructure & Tier-1/Tier-2 Product Support",
    icon: Server,
    color: "text-blue-600 bg-blue-50 border-blue-200",
    description: "SaaS companies require 99.95%+ uptime, automated scaling, and responsive technical support so internal developers can focus on core product features.",
    capabilities: [
      "Multi-tenant AWS, Azure, and OCI cluster management",
      "PostgreSQL replication, automated WAL archiving, and failover testing",
      "Remote L1 frontline support and L2 technical bug reproduction in staging",
      "24/7 Datadog/Prometheus monitoring and incident escalation",
    ],
    metric: "99.98%",
    metricLabel: "Average production uptime maintained",
  },
  {
    title: "MSPs & IT Service Providers",
    subtitle: "Behind-the-Scenes Infrastructure & Engineering Backstop",
    icon: Users,
    color: "text-cyan-700 bg-cyan-50 border-cyan-200",
    isMsp: true,
    description: "We work as your white-label Tier-3 infrastructure extension. We handle complex migrations, Linux/Windows administration, and night-shift monitoring without interfering with your client relationships.",
    capabilities: [
      "Tier-3 infrastructure escalation and emergency troubleshooting",
      "Linux (RHEL, Ubuntu, Debian) and Windows Server fleet maintenance",
      "Cloud migration engineering (Terraform, Docker, Kubernetes)",
      "Strict white-label reporting under your operational guidelines",
    ],
    metric: "Tier-3",
    metricLabel: "Engineering capacity backstop",
  },
  {
    title: "FinTech & Digital Payments",
    subtitle: "Zero-Trust Security, SIEM & Rigorous Audit Controls",
    icon: CreditCard,
    color: "text-emerald-700 bg-emerald-50 border-emerald-200",
    description: "Financial technology operations demand strict least-privilege IAM, encrypted data at rest, immutable logging, and continuous threat monitoring.",
    capabilities: [
      "Centralized SIEM log aggregation (Wazuh, Syslog, Elastic)",
      "Mandatory hardware MFA enforcement & quarterly access reviews",
      "Vulnerability management and prioritized CVE remediation",
      "Isolated VPC subnets, zero-trust bastions, and TLS 1.3 enforcement",
    ],
    metric: "100%",
    metricLabel: "MFA & audit log coverage",
  },
  {
    title: "HealthTech & Medical Platforms",
    subtitle: "Secure Hosting, Air-Gapped Backups & Support Triage",
    icon: Stethoscope,
    color: "text-indigo-700 bg-indigo-50 border-indigo-200",
    description: "Healthcare software platforms depend on continuous telemetry, air-gapped immutable backup routines, and knowledgeable technical support for clinics.",
    capabilities: [
      "Air-gapped 3-2-1 backup topology with tested point-in-time recovery",
      "Endpoint EDR agent supervision and host quarantine protocols",
      "Trained remote customer support for doctors, clinics, and staff",
      "Living runbooks for disaster recovery failover",
    ],
    metric: "0 Guesswork",
    metricLabel: "Verified restore runbooks",
  },
  {
    title: "High-Volume E-Commerce & Retail",
    subtitle: "Traffic Surge Autoscaling, Database Tuning & Peak Readiness",
    icon: ShoppingBag,
    color: "text-amber-700 bg-amber-50 border-amber-200",
    description: "Flash sales and seasonal traffic spikes require proactive database connection pooling, CDN caching, and 24/7 uptime monitoring to prevent checkout abandonment.",
    capabilities: [
      "Database read replicas and query profiling to remove bottlenecks",
      "Web Application Firewall (WAF) tuning against scrapers and bots",
      "Synthetic transaction monitoring on checkout funnels",
      "Tier-1 order tracking and customer support helpdesk management",
    ],
    metric: "<200ms",
    metricLabel: "Database query latency under load",
  },
];

// Vertical 2 Sectors: Custom Software & Automation
const vertical2Industries = [
  {
    title: "Manufacturing & Industrial Operations",
    subtitle: "Custom Shop-Floor Portals, Telemetry & ERP Unification",
    icon: Factory,
    color: "text-purple-700 bg-purple-50 border-purple-200",
    description: "Replace paper traveler cards and disjointed spreadsheets with custom production tracking software and automated inventory sync.",
    capabilities: [
      "Custom web portals for work order scheduling and machine uptime tracking",
      "Raw material allocation and automated purchase order generation",
      "Barcode/QR scanner integrations for inventory receiving and dispatch",
      "Centralized PostgreSQL database unifying finance and shop floor data",
    ],
    outcome: "Eliminates duplicate manual data entry across shifts",
  },
  {
    title: "Wholesale & Distribution",
    subtitle: "Multi-Warehouse Inventory, B2B Customer Portals & EDI",
    icon: Layers,
    color: "text-violet-700 bg-violet-50 border-violet-200",
    description: "Enable wholesale customers to order online with tiered pricing while synchronizing stock levels across multiple regional distribution centers.",
    capabilities: [
      "Bespoke self-service customer reorder portals with custom price sheets",
      "Real-time multi-location inventory reconciliation and low-stock alerts",
      "Automated invoice matching and QuickBooks/accounting sync",
      "Custom EDI and supplier API integration pipelines",
    ],
    outcome: "Shortens order-to-shipment turnaround by 50%+",
  },
  {
    title: "Logistics, Freight & Fleet Management",
    subtitle: "Dispatch Automation, Driver Communication & Document OCR",
    icon: Truck,
    color: "text-blue-700 bg-blue-50 border-blue-200",
    description: "Automate driver dispatch notifications, track shipment status in real time, and extract bill-of-lading data automatically.",
    capabilities: [
      "End-to-end dispatch workflow automation (n8n, SMS, Webhooks)",
      "Automated OCR data extraction for delivery receipts and customs docs",
      "Real-time driver location and customer delivery ETA portals",
      "Exception notification triggers for delayed or damaged freight",
    ],
    outcome: "Saves 25+ hours per dispatcher weekly",
  },
  {
    title: "Professional & Corporate Services",
    subtitle: "Client Onboarding Portals, Approval Flows & CRM Engines",
    icon: Briefcase,
    color: "text-slate-800 bg-slate-100 border-slate-300",
    description: "Modernize consulting, legal, and accounting operations with secure client intake forms, automated document generation, and milestone tracking.",
    capabilities: [
      "Bespoke client onboarding workflows with e-signature and KYC collection",
      "Automated contract generation and multi-step approval routing",
      "Tailored CRM engines mapping complex B2B engagement lifecycles",
      "Automated billing triggers tied to project milestones",
    ],
    outcome: "Eliminates billing leaks and accelerates client onboarding",
  },
  {
    title: "Real Estate & Construction",
    subtitle: "Subcontractor Portals, Field Reporting & Progress Draws",
    icon: HardHat,
    color: "text-amber-800 bg-amber-50 border-amber-200",
    description: "Provide field project managers with mobile-ready job-site logging, subcontractor bid intake portals, and automated lien waiver tracking.",
    capabilities: [
      "Subcontractor bid intake and document verification portals",
      "Mobile-friendly daily field log and safety checklist capture",
      "Automated payment draw packet assembly and invoice approval flows",
      "Integration with Procore, QuickBooks, and cloud storage repositories",
    ],
    outcome: "Accelerates contractor payment cycles and draw verifications",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industry Solutions"
        title="Engineering Tailored to Sector Operational Realities"
        description="We align our work directly to your industry's operating requirements: providing high-uptime infrastructure and customer support for technology platforms, and custom software and workflow automation for operations-heavy enterprises."
        breadcrumbs={[{ label: "Industries", href: "/industries" }]}
      >
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href="/book" size="lg">
            <CalendarCheck className="size-4" />
            Book a Technical Call
          </Button>
          <Button href="#vertical-1" variant="outline" size="lg">
            Explore Industry Verticals
          </Button>
        </div>
      </PageHero>

      {/* Quick Nav Anchor Bar */}
      <section className="sticky top-20 z-30 border-b border-line bg-white/90 backdrop-blur-md py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between text-xs font-semibold">
          <span className="text-slate-500 uppercase tracking-wider hidden sm:inline">
            Jump to Sector Focus:
          </span>
          <div className="flex items-center gap-3">
            <a 
              href="#vertical-1" 
              className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
            >
              Vertical 01 · Infrastructure, Security & Customer Ops
            </a>
            <a 
              href="#vertical-2" 
              className="px-3 py-1.5 rounded-lg bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100 transition-colors"
            >
              Vertical 02 · Custom Software & Automation
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 1ST HALF: VERTICAL 01 — INFRASTRUCTURE, SECURITY & CUSTOMER OPS   */}
      {/* ================================================================== */}
      <section id="vertical-1" className="py-20 lg:py-28 bg-white border-b border-line scroll-mt-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-md bg-secondary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary">
              Vertical 01 Focus
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl font-display">
              Infrastructure, Security & Customer Operations
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              For technology companies, SaaS platforms, MSPs, and digital services where system downtime, security incidents, or unresponsive customer support directly jeopardize revenue and reputation.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {vertical1Industries.map((ind, index) => {
              const IconC = ind.icon;
              return (
                <Reveal key={ind.title} delay={index * 0.06}>
                  <div className={`flex h-full flex-col justify-between rounded-3xl border p-8 shadow-xs transition-all duration-300 hover:shadow-lg ${
                    ind.isMsp 
                      ? "border-blue-300 bg-blue-50/40 ring-1 ring-blue-300/60" 
                      : "border-slate-200 bg-white hover:border-secondary/40"
                  }`}>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className={`flex size-12 items-center justify-center rounded-2xl border ${ind.color}`}>
                          <IconC className="size-6" />
                        </div>
                        {ind.metric && (
                          <div className="text-right">
                            <span className="font-display font-extrabold text-base text-primary block">
                              {ind.metric}
                            </span>
                            <span className="text-[10px] text-slate-400 font-medium">
                              {ind.metricLabel}
                            </span>
                          </div>
                        )}
                      </div>

                      <h3 className="mt-6 text-xl font-bold text-primary font-display">
                        {ind.title}
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-secondary">
                        {ind.subtitle}
                      </p>
                      <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                        {ind.description}
                      </p>

                      <div className="mt-6 border-t border-slate-100 pt-6">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                          Operational Scope Delivered
                        </p>
                        <ul className="space-y-2 text-xs text-slate-600">
                          {ind.capabilities.map((cap, cIdx) => (
                            <li key={cIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="size-3.5 text-secondary shrink-0 mt-0.5" />
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-slate-100">
                      <Button href="/book" variant="outline" size="sm" className="w-full justify-center">
                        <span>Schedule Technical Review</span>
                        <ArrowRight className="size-3.5" />
                      </Button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* MSP Backstop Highlight */}
          <div className="mt-14 rounded-3xl border border-blue-200 bg-blue-50/60 p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-white px-2.5 py-1 rounded-md border border-blue-200 font-mono">
                FOR MSPs & IT PROVIDERS
              </span>
              <h3 className="mt-3 text-2xl font-bold text-primary font-display">
                Extend Your Technical Capacity Without Hiring Overhead
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                We work behind the scenes as your Tier-3 infrastructure and cloud engineering backstop. We handle complex migrations, 24/7 server monitoring, and database troubleshooting under your brand guidelines without interfering with your customer relationships.
              </p>
            </div>
            <Button href="/book" size="lg" className="shrink-0">
              <CalendarCheck className="size-4" />
              Discuss MSP Partnership
            </Button>
          </div>

        </div>
      </section>

      {/* ================================================================== */}
      {/* 2ND HALF: VERTICAL 02 — CUSTOM SOFTWARE & AUTOMATION               */}
      {/* ================================================================== */}
      <section id="vertical-2" className="py-20 lg:py-28 bg-surface border-b border-line scroll-mt-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-md bg-purple-50 border border-purple-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">
              Vertical 02 Focus
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl font-display">
              Custom Software & Automation
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              For manufacturing, distribution, logistics, and professional services where generic off-the-shelf software forces employees into clumsy spreadsheet workarounds and disconnected silos.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {vertical2Industries.map((ind, index) => {
              const IconC = ind.icon;
              return (
                <Reveal key={ind.title} delay={index * 0.06}>
                  <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-xs transition-all duration-300 hover:shadow-lg hover:border-purple-400">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className={`flex size-12 items-center justify-center rounded-2xl border ${ind.color}`}>
                          <IconC className="size-6" />
                        </div>
                        <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                          Bespoke Systems
                        </span>
                      </div>

                      <h3 className="mt-6 text-xl font-bold text-primary font-display">
                        {ind.title}
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-purple-700">
                        {ind.subtitle}
                      </p>
                      <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                        {ind.description}
                      </p>

                      <div className="mt-6 border-t border-slate-100 pt-6">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                          Custom Systems Built
                        </p>
                        <ul className="space-y-2 text-xs text-slate-600">
                          {ind.capabilities.map((cap, cIdx) => (
                            <li key={cIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="size-3.5 text-purple-700 shrink-0 mt-0.5" />
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 rounded-xl bg-purple-50/50 p-3.5 border border-purple-100 text-[11px] font-medium text-purple-900">
                        <strong>Outcome:</strong> {ind.outcome}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-slate-100">
                      <Button href="/book" variant="outline" size="sm" className="w-full justify-center">
                        <span>Discuss Software Architecture</span>
                        <ArrowRight className="size-3.5" />
                      </Button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* Unified Final CTA */}
      <CtaSection
        title="Don't see your specific industry listed?"
        description="The operational principles remain identical: we either operate and support your existing technology, or we engineer custom systems to automate your workflows. Schedule a technical discussion to review your requirements."
        buttonLabel="Book a Technical Call"
        buttonHref="/book"
      />
    </>
  );
}
