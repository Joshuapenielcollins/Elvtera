import Link from "next/link";
import { 
  Briefcase, 
  Globe, 
  Workflow, 
  Headphones, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Zap, 
  Users, 
  ShieldCheck, 
  Settings,
  Database,
  BarChart3,
  Mail,
  HelpCircle
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Business Solutions — Build & Scale the Systems Behind Your Business",
  description:
    "Elvtera engineers business websites, GTM pipelines, CRM implementations, marketing automation, helpdesk ticketing, and workflow automation for growing businesses.",
  path: "/solutions/business-solutions",
});

const capabilities = [
  {
    id: "websites",
    icon: Globe,
    title: "Business Websites & Digital Foundations",
    description: "Modern, high-performance web platforms engineered for brand authority, rapid load times, conversion optimization, and technical SEO structure.",
    features: [
      "Enterprise Next.js & React static-generated architectures",
      "Core Web Vitals optimization and semantic schema metadata",
      "Dynamic CMS integrations (Sanity, Strapi, Contentful)",
      "Secure forms with spam mitigation and lead validation",
    ],
  },
  {
    id: "gtm",
    icon: TrendingUp,
    title: "Go-To-Market & Sales Systems",
    description: "Align your revenue operations with automated lead capture, enrichment, qualification routing, and multi-stage deal pipelines.",
    features: [
      "Inbound lead capture and automated routing to sales reps",
      "Lead enrichment via Clearbit, Apollo, and webhook pipelines",
      "Deal stage tracking and automated activity logging",
      "Sales quotation, proposal, and contract sign-off workflows",
    ],
  },
  {
    id: "crm",
    icon: Database,
    title: "CRM Implementation & Optimization",
    description: "Design and implement CRM systems configured around how your company actually sells, ending fragmented contact data and manual updates.",
    features: [
      "HubSpot, Salesforce, and custom PostgreSQL CRM deployments",
      "Data migration, deduplication, and historical cleansing",
      "Custom fields, lifecycle stages, and permission hierarchies",
      "Bidirectional sync with billing, ERP, and communication tools",
    ],
  },
  {
    id: "marketing",
    icon: Mail,
    title: "Marketing Automation",
    description: "Turn anonymous visitors into qualified opportunities with behavioral email sequences, lead scoring, and automated re-engagement.",
    features: [
      "Lifecycle email automation triggered by customer behavior",
      "Lead scoring algorithms based on firmographic and intent signals",
      "Audience segmentation and cross-channel message orchestration",
      "Multi-touch attribution reporting and marketing ROI dashboards",
    ],
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Business Process Automation",
    description: "Eliminate repetitive manual admin, spreadsheet wrangling, and friction points across finance, operations, and fulfillment.",
    features: [
      "Custom workflow automation via n8n, Python, and webhook bridges",
      "Automated invoice generation, payment capture, and reconciliation",
      "Cross-platform data synchronization without manual CSV exports",
      "Automated employee and contractor onboarding checklists",
    ],
  },
  {
    id: "support-systems",
    icon: Headphones,
    title: "Customer Support Systems & Helpdesk",
    description: "Deliver responsive customer care through centralized ticketing, SLA enforcement, escalation routing, and self-service knowledge bases.",
    features: [
      "Omnichannel helpdesk setup (Zendesk, Intercom, Freshdesk)",
      "SLA policy definition, breach alerts, and escalation matrices",
      "Internal and customer-facing searchable knowledge bases",
      "Automated ticket routing based on issue urgency and expertise",
    ],
  },
];

const problems = [
  {
    problem: "“Our team wastes hours every day manually copying data between disconnected tools.”",
    solution: "We build automated workflow pipelines that synchronize data in real time, eliminating manual data entry errors and saving hours of administrative time.",
  },
  {
    problem: "“Inbound leads fall through the cracks because we have no centralized GTM system.”",
    solution: "We implement structured GTM pipelines that immediately enrich, score, and route inbound leads to the right rep with automated notifications.",
  },
  {
    problem: "“We tried off-the-shelf CRMs, but nobody uses them because they don't match our process.”",
    solution: "We configure or build CRM systems mapped directly to your actual operating workflows, with minimal clutter and frictionless daily usage.",
  },
  {
    problem: "“Customer inquiries get lost across email inboxes and direct messages.”",
    solution: "We centralize customer communications into an SLA-backed ticketing system with clear ownership, automated assignment, and resolution analytics.",
  },
];

const technologies = [
  "Next.js", "TypeScript", "HubSpot", "Salesforce", "n8n", "Zapier", "PostgreSQL",
  "Zendesk", "Intercom", "Freshdesk", "Stripe", "REST APIs", "Webhooks", "Tailwind CSS"
];

const faqs = [
  {
    q: "How does Elvtera differ from a traditional digital marketing agency?",
    a: "We are an engineering-driven technology company. We do not just build pretty mockups—we engineer the underlying databases, API bridges, webhook triggers, CRM configurations, and automation runbooks that make your business operations predictable and scalable.",
  },
  {
    q: "Can you work with our existing CRM and marketing tools, or do we have to start from scratch?",
    a: "We regularly optimize and salvage existing setups. Whether you are using HubSpot, Salesforce, Pipedrive, or custom internal spreadsheets, we assess your current state, clean up data, and build the necessary automations without forcing an unnecessary platform migration.",
  },
  {
    q: "Do you offer ongoing support for business systems after implementation?",
    a: "Yes. Through our Ongoing Support model, we provide dedicated business technology maintenance, workflow updates, integrations monitoring, and user support under clear service level agreements.",
  },
  {
    q: "How long does a typical business systems project take?",
    a: "A focused website rebuild or CRM configuration typically takes 3 to 6 weeks. Comprehensive end-to-end business operations automation across sales, fulfillment, and support typically spans 6 to 12 weeks with phased rollouts.",
  },
];

export default function BusinessSolutionsPage() {
  return (
    <>
      <PageHero
        badge="Pillar 01 — Business Solutions"
        title="Build and scale the systems behind your business."
        description="We engineer the business websites, GTM pipelines, CRM implementations, marketing automations, and customer support systems required to acquire customers and operate efficiently."
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/contact?intent=business-systems">
              <span>Discuss Your Business Systems</span>
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
            title="Why Growing Businesses Need Better Systems"
            description="When a company scales past 10–20 people, informal communications and spreadsheets break down. We replace operational chaos with reliable technology."
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
            eyebrow="Detailed Services"
            title="Complete Business Systems Coverage"
            description="From external digital touchpoints to internal workflow plumbing, we build and support the technology your operations rely upon."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.id} id={cap.id} className="p-7 rounded-3xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all">
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

      {/* How We Work */}
      <section className="py-20 lg:py-24 bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Process"
            title="How We Deliver Business Systems"
            description="Our structured 5-step methodology ensures every system we build is deeply understood, properly architected, cleanly implemented, and continuously supported."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { num: "01", name: "Understand", desc: "Map existing customer journeys, data handoffs, sales processes, and tool sprawl." },
              { num: "02", name: "Plan", desc: "Design unified system architecture, data models, integration specs, and rollout phases." },
              { num: "03", name: "Build", desc: "Develop web systems, configure CRM, write automation scripts, and test data integrity." },
              { num: "04", name: "Operate", desc: "Provide end-user training, hypercare, monitoring, and ongoing system administration." },
              { num: "05", name: "Improve", desc: "Analyze usage metrics, automate newly emerging manual tasks, and optimize conversion." },
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
            title="Flexible Ways to Build Your Business Systems"
            description="Choose the delivery model that fits your internal bandwidth and operational priorities."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="p-8 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase">Project-Based</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">System Build & Launch</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Fixed-scope delivery for websites, CRM implementations, or discrete automation overhauls with clear milestones.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Button href="/contact?intent=business-systems&model=project" variant="outline" className="w-full">
                  Start a Project
                </Button>
              </div>
            </div>

            <div className="p-8 rounded-3xl border-2 border-secondary bg-white shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-secondary bg-blue-50 px-3 py-1 rounded-full uppercase">Ongoing Support</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Continuous Operations</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Ongoing management of your CRM, automation pipelines, web updates, and support desk under proactive SLAs.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Button href="/contact?intent=business-systems&model=ongoing" variant="primary" className="w-full">
                  Discuss Ongoing Support
                </Button>
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase">Extended Team</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Embedded Operations</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Add dedicated RevOps, workflow engineers, and technical support specialists directly to your Slack/Teams.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Button href="/contact?intent=business-systems&model=extended-team" variant="outline" className="w-full">
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
            Technologies & Platforms We Leverage
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
            title="Questions About Business Solutions"
            description="Clear answers about scope, deliverables, and how we collaborate."
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
        title="Ready to build and scale your business systems?"
        description="Book a technical strategy session with an Elvtera systems architect. We will evaluate your current operations, CRM, and workflow bottlenecks."
        buttonLabel="Discuss Your Business Systems"
        buttonHref="/contact?intent=business-systems"
      />
    </>
  );
}
