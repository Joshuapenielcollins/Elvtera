import Link from "next/link";
import { 
  Code2, 
  Layers, 
  Workflow, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Terminal, 
  Database, 
  Boxes, 
  GitBranch, 
  ShieldCheck,
  RefreshCw,
  LayoutDashboard
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Software Solutions — Build the Technology Your Business Needs",
  description:
    "Elvtera engineers custom software, SaaS applications, internal portals, CRM/ERP engines, API integrations, and AI agents tailored to your business operations.",
  path: "/solutions/software-solutions",
});

const capabilities = [
  {
    id: "custom-software",
    icon: Code2,
    title: "Custom Software Development",
    description: "Purpose-built web applications and digital platforms engineered from first principles with modern TypeScript, modular architectures, and scalable SQL databases.",
    features: [
      "Custom business applications with responsive UI and micro-interactions",
      "Robust relational database design (PostgreSQL) and schema migrations",
      "Role-based access control (RBAC), multi-tenancy, and audit logs",
      "Production-grade test coverage, CI/CD pipelines, and automated builds",
    ],
  },
  {
    id: "crm-erp",
    icon: Boxes,
    title: "CRM & ERP Platform Development",
    description: "Enterprise operating backbones unifying orders, inventory, billing, fulfillment, and multi-department records without the rigid limits of commercial templates.",
    features: [
      "Live inventory tracking, multi-warehouse stock, and automated reorder points",
      "General ledger, accounts receivable/payable, and automated invoice runs",
      "Custom quotation engines, approval workflows, and contract generation",
      "Granular departmental permission boundaries and immutable transaction trails",
    ],
  },
  {
    id: "saas",
    icon: Layers,
    title: "SaaS Applications & Multi-Tenant Stacks",
    description: "Engineer commercial software products designed for high concurrency, subscription monetization, zero-downtime deployments, and rapid feature iteration.",
    features: [
      "Multi-tenant tenant isolation and database partitioning",
      "Stripe Billing integration (subscriptions, metered usage, invoicing)",
      "Team invitation flows, SAML SSO, and enterprise auth",
      "Scalable REST and GraphQL APIs with rate limiting and SDK support",
    ],
  },
  {
    id: "internal-tools",
    icon: LayoutDashboard,
    title: "Internal Tools, Portals & Dashboards",
    description: "Give your operators, managers, and clients real-time visibility and powerful administrative tooling to execute complex tasks quickly without error.",
    features: [
      "Executive KPI dashboards and real-time business intelligence",
      "Secure client collaboration portals with granular file sharing",
      "Operational back-office consoles replacing manual spreadsheet routines",
      "Custom bulk data import/export utilities and reconciliation screens",
    ],
  },
  {
    id: "integrations",
    icon: GitBranch,
    title: "API Integrations & Third-Party Bridges",
    description: "Connect isolated business applications through reliable, bidirectional data bridges, custom webhooks, payment rails, and legacy system modernization.",
    features: [
      "RESTful and GraphQL API design, documentation, and versioning",
      "High-throughput webhook receivers with idempotent queue processing",
      "Legacy system modernization and incremental strangler-fig migration",
      "Automated third-party sync (ERP, accounting, logistics, marketing)",
    ],
  },
  {
    id: "ai-applications",
    icon: Cpu,
    title: "AI Applications, Agents & Automation",
    description: "Infuse your software with context-aware artificial intelligence: autonomous multi-step agents, conversational chatbots, voice agents, and document reasoning.",
    features: [
      "Context-aware LLM pipelines with retrieval-augmented generation (RAG)",
      "Autonomous AI agents that execute multi-step backend workflows",
      "Intelligent customer-facing chatbots and voice support agents",
      "Automated document extraction, summarization, and data classification",
    ],
  },
];

const problems = [
  {
    problem: "“Off-the-shelf software forces our team to twist our process to fit their rigid features.”",
    solution: "We build custom software designed specifically around how your business works, giving you complete flexibility and competitive differentiation.",
  },
  {
    problem: "“Our current software is built on fragile legacy code that no one understands or dares touch.”",
    solution: "We safely modernize legacy applications through incremental component rewrites, documented data models, and clean TypeScript architectures.",
  },
  {
    problem: "“We have great ideas for software tools, but our developers are swamped with daily firefighting.”",
    solution: "Our senior engineering team designs, builds, tests, and launches your software initiatives with clear milestone accountability.",
  },
  {
    problem: "“We want to leverage AI, but generic ChatGPT wrappers don't integrate with our real operating data.”",
    solution: "We engineer purpose-built AI agents and RAG pipelines directly into your software and databases with strict security and privacy controls.",
  },
];

const technologies = [
  "Next.js", "TypeScript", "React", "Node.js", "Python", "PostgreSQL",
  "Redis", "Docker", "Tailwind CSS", "Prisma", "FastAPI", "OpenAI / Claude APIs", "LangChain", "GraphQL"
];

const faqs = [
  {
    q: "Who owns the intellectual property and code of the custom software you build?",
    a: "You own 100% of all intellectual property, source code, repositories, architectures, and documentation. Everything is committed directly to your private repositories with full handover.",
  },
  {
    q: "How do you ensure the software will scale as our transaction volume grows?",
    a: "We engineer with proven, scalable architectures: stateless compute, containerized deployments, indexed relational databases (PostgreSQL), Redis caching layers, and asynchronous task queues.",
  },
  {
    q: "Can you maintain and improve our software after the initial version is deployed?",
    a: "Yes. Through our Ongoing Support and Extended Team models, we provide continuous feature development, bug triage, performance tuning, and technical hypercare under defined SLAs.",
  },
  {
    q: "What is your development and sprint methodology?",
    a: "We work in two-week iterative sprints with continuous staging deployments. You see and test working software at every milestone, ensuring full alignment before production release.",
  },
];

export default function SoftwareSolutionsPage() {
  return (
    <>
      <PageHero
        badge="Pillar 02 — Software Solutions"
        title="Build software around the way your business works."
        description="We engineer custom web applications, SaaS platforms, internal tools, ERP engines, API integrations, and AI agents built around your exact operational workflows."
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/contact?intent=software-project">
              <span>Start a Software Project</span>
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
            eyebrow="The Software Advantage"
            title="Why Companies Build Custom Technology"
            description="When standard SaaS tools limit your operational efficiency or cap your margins, purpose-built software creates an enduring competitive advantage."
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

      {/* Capabilities Breakdown */}
      <section id="capabilities" className="py-20 lg:py-24 bg-surface border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Technical Capabilities"
            title="Engineered for Performance and Longevity"
            description="Explore our full spectrum of software development services, built with enterprise-grade engineering discipline."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.id} id={cap.id} className="p-7 rounded-3xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between hover:border-purple-300 transition-all">
                  <div>
                    <div className="flex size-11 items-center justify-center rounded-xl bg-purple-50 text-purple-700 border border-purple-200 mb-5">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-xl font-bold text-primary font-display">{cap.title}</h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">{cap.description}</p>
                    <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-xs text-slate-700">
                      {cap.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-purple-600 shrink-0 mt-0.5" />
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

      {/* How We Work */}
      <section className="py-20 lg:py-24 bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Development Process"
            title="How We Engineer Custom Software"
            description="Our software delivery is transparent, milestone-driven, and focused on working software at every stage."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { num: "01", name: "Understand", desc: "Define user personas, core data schemas, user workflows, and business KPIs." },
              { num: "02", name: "Plan", desc: "Architect database models, API specs, component libraries, and two-week sprint goals." },
              { num: "03", name: "Build", desc: "Write clean TypeScript, build responsive UI, implement APIs, and automate CI/CD tests." },
              { num: "04", name: "Operate", desc: "Deploy to production, configure telemetry, manage database migrations, and handle triage." },
              { num: "05", name: "Improve", desc: "Profile queries, optimize API response times, add user features, and scale concurrency." },
            ].map((step) => (
              <div key={step.num} className="p-6 rounded-2xl border border-slate-200 bg-surface">
                <span className="font-mono text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">{step.num}</span>
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
            eyebrow="Flexible Models"
            title="How to Build Software With Elvtera"
            description="Whether you need a complete turn-key product build or senior engineering capacity to extend your existing team."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="p-8 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase">Project-Based</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Turn-Key Product Build</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Fixed-scope software delivery from initial architecture to production launch with itemized milestone pricing.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Button href="/contact?intent=software-project&model=project" variant="outline" className="w-full">
                  Start a Project
                </Button>
              </div>
            </div>

            <div className="p-8 rounded-3xl border-2 border-secondary bg-white shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-secondary bg-blue-50 px-3 py-1 rounded-full uppercase">Ongoing Support</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Stewardship & Maintenance</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Ongoing software maintenance, security dependency patching, database tuning, and incremental feature updates under SLAs.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Button href="/contact?intent=software-project&model=ongoing" variant="primary" className="w-full">
                  Discuss Ongoing Support
                </Button>
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase">Extended Team</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Dedicated Engineers</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Add senior full-stack software engineers directly to your sprint cycles, Jira boards, and PR code review workflows.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Button href="/contact?intent=software-project&model=extended-team" variant="outline" className="w-full">
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
            Technologies & Engineering Stack
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {technologies.map((tech) => (
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
            title="Questions About Software Solutions"
            description="Clear answers about code ownership, scaling, and collaboration."
          />

          <div className="mt-12 space-y-4">
            {faqs.map((faq, idx) => (
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
        title="Ready to build custom software for your business?"
        description="Book a technical discovery session with an Elvtera software architect. We will evaluate your feature requirements, data model, and architecture options."
        buttonLabel="Start a Software Project"
        buttonHref="/contact?intent=software-project"
      />
    </>
  );
}
