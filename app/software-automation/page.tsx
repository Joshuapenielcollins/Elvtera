import Link from "next/link";
import { 
  Code2, 
  Cpu, 
  Workflow, 
  Layers, 
  Bot, 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2, 
  Database, 
  Boxes, 
  Sparkles, 
  GitMerge, 
  LineChart, 
  ShieldCheck, 
  Wrench,
  Search,
  PenTool,
  Rocket,
  Calendar
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Custom Software & Automation - Web Apps, AI Agents, Workflow Pipelines",
  description:
    "Software built around your business. Custom web applications, internal tools, ERP/CRM engineering, workflow automation, AI agents, and system integrations tailored to your operational requirements.",
  path: "/software-automation",
});

const servicePillars = [
  {
    icon: Code2,
    title: "Custom Web & Business Applications",
    description: "Purpose-engineered web software that maps to your exact operational workflows, eliminating spreadsheet bottlenecks.",
    items: [
      "Custom Web Applications (Next.js, React, Node.js, Python, TypeScript)",
      "Internal Business Tools, Ops Portals & Approval Queues",
      "Customer & Vendor Self-Service Portals",
      "Multi-tenant SaaS Architecture & Platform Development",
    ],
  },
  {
    icon: Workflow,
    title: "Workflow & Business Process Automation",
    description: "Connect disparate data silos and orchestrate repetitive business logic automatically across your ecosystem.",
    items: [
      "End-to-end workflow automation (n8n, Python runners, webhooks)",
      "Automated document generation, invoice matching, and approval routings",
      "Bi-directional data sync between CRM, accounting, and inventory",
      "Exception notification triggers and audit-trailed event queues",
    ],
  },
  {
    icon: Bot,
    title: "AI Agents & Intelligent Automation",
    description: "Pragmatic, production-ready AI systems that ingest unstructured inputs, summarize records, and guide customer interactions.",
    items: [
      "Domain-specific AI Agents & Knowledge Base Assistants",
      "AI Customer Service Chatbots with guarded escalation triggers",
      "Voice Agents for automated call intake and qualification",
      "Document extraction & OCR parsing for orders and compliance docs",
    ],
  },
  {
    icon: Boxes,
    title: "CRM & ERP Core Systems",
    description: "Unified systems of record designed for manufacturing, logistics, healthcare, and high-volume distribution.",
    items: [
      "Bespoke CRM engines tailored to complex enterprise sales cycles",
      "Operational ERP solutions unifying inventory, procurement, and billing",
      "Custom reporting dashboards with real-time financial telemetry",
      "Legacy system modernization and non-disruptive database migrations",
    ],
  },
  {
    icon: GitMerge,
    title: "API & Data Integrations",
    description: "Secure pipelines connecting third-party platforms, ERPs, payment gateways, and custom endpoints.",
    items: [
      "REST & GraphQL API design, hardening, and documentation",
      "Third-party integrations (Stripe, QuickBooks, Salesforce, HubSpot)",
      "High-throughput message queues (RabbitMQ, Kafka, Redis)",
      "ETL data pipelines and centralized PostgreSQL warehousing",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & Application Support",
    description: "Ongoing software lifecycle stewardship, bug remediation, security patches, and version upgrades.",
    items: [
      "Continuous code review and vulnerability dependency patching",
      "Performance optimization, query profiling, and bundle reductions",
      "Feature enhancements and sprint-based release cadences",
      "Strict SLA-backed bug remediation and hypercare support",
    ],
  },
];

const lifecycleSteps = [
  {
    step: "01",
    name: "Discover",
    icon: Search,
    description: "We map your actual operating processes, data inputs, edge cases, and human handoffs directly with the operators doing the work.",
  },
  {
    step: "02",
    name: "Design",
    icon: PenTool,
    description: "System architecture, data schemas, clickable UI prototypes, and an itemized fixed-scope delivery proposal.",
  },
  {
    step: "03",
    name: "Build",
    icon: Code2,
    description: "Iterative sprints with clean code, test coverage, and staged demonstrations every two weeks. Progress you can test in real time.",
  },
  {
    step: "04",
    name: "Integrate",
    icon: GitMerge,
    description: "Wiring the new software into your existing accounting, database, authentication, and communication tools.",
  },
  {
    step: "05",
    name: "Launch",
    icon: Rocket,
    description: "Staged data migration, end-user role training, and controlled cutover with immediate engineer hypercare.",
  },
  {
    step: "06",
    name: "Support",
    icon: ShieldCheck,
    description: "Ongoing monitoring, feature enhancements, and SLA-backed support to ensure the system scales with your business.",
  },
];

export default function SoftwareAutomationPage() {
  return (
    <>
      <PageHero
        eyebrow="Vertical 02 · Custom Software & Automation"
        title="Software Built Around Your Business."
        description="Build the software and automated systems your business needs instead of forcing your operations into generic, inflexible tools. We engineer custom web applications, workflow pipelines, and AI systems tailored to your exact operating model."
        breadcrumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Custom Software & Automation", href: "/software-automation" },
        ]}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/book?service=software-automation" size="lg">
            <Calendar className="size-4" />
            Book a Software Discovery Call
          </Button>
          <Button href="#services" variant="outline" size="lg">
            Explore Capabilities
          </Button>
        </div>
      </PageHero>

      {/* Strategic Positioning: Not generic SaaS */}
      <section className="border-b border-line bg-surface py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-line bg-white p-6 shadow-xs">
              <h4 className="font-bold text-slate-900 text-sm font-display">You Own 100% of the Code</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                No proprietary lock-in. All source code, Git repositories, deployment scripts, and database migrations are fully owned by your company.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-white p-6 shadow-xs">
              <h4 className="font-bold text-slate-900 text-sm font-display">Engineered for Operations</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                We build tools that save measurable staff hours and eliminate human error. Every user flow is tested for operational speed and ease of use.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-white p-6 shadow-xs">
              <h4 className="font-bold text-slate-900 text-sm font-display">Fixed-Scope Delivery Rigor</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Clear milestones, itemized pricing, and weekly demo staging. You see tangible working software every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Six Pillars of Software & Automation */}
      <section id="services" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Software Offerings"
            title="Custom Systems That Drive Real Operational Leverage"
            description="From internal administration dashboards to automated customer pipelines, we engineer software that fits your exact processes."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicePillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={index * 0.06}>
                  <div className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-lg">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-purple-50 text-purple-700 border border-purple-100">
                      <IconComponent className="size-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-primary font-display">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      {pillar.description}
                    </p>
                    <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5 text-xs text-slate-600 flex-1">
                      {pillar.items.map((it, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-purple-700 shrink-0 mt-0.5" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6-Stage Process: Discover → Design → Build → Integrate → Launch → Support */}
      <section className="border-y border-line bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Delivery Methodology"
            title="Discover → Design → Build → Integrate → Launch → Support"
            description="A predictable, transparent engineering framework designed to eliminate surprises and deliver reliable software."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifecycleSteps.map((step, idx) => {
              const IconC = step.icon;
              return (
                <Reveal key={step.step} delay={idx * 0.07}>
                  <div className="flex flex-col h-full rounded-2xl border border-line bg-white p-7 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded">
                        STAGE {step.step}
                      </span>
                      <IconC className="size-5 text-slate-400" />
                    </div>
                    <h4 className="mt-4 text-lg font-bold text-primary font-display">
                      {step.name}
                    </h4>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed flex-1">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Ready to build software that fits your business?"
        description="Schedule a 30-minute technical session with an Elvtera software engineer. We will review your process, outline architecture options, and provide a fixed-scope proposal."
        buttonLabel="Book a Software Discovery Call"
        buttonHref="/book?service=software-automation"
      />
    </>
  );
}
