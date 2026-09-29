import Link from "next/link";
import { 
  Code2, 
  LayoutDashboard, 
  Layers, 
  Terminal, 
  Database, 
  CheckCircle2, 
  ArrowRight, 
  GitBranch, 
  ShieldCheck, 
  Boxes,
  Cpu,
  Sparkles
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Custom Software Development — Web Platforms & Business Apps — Elvtera",
  description:
    "We engineer custom web applications, internal tools, customer portals, and enterprise software designed specifically around how your business works.",
  path: "/solutions/custom-software",
});

const capabilities = [
  {
    icon: Code2,
    title: "Custom Web Applications",
    description: "Full-stack web applications engineered with clean TypeScript, modern Next.js/React frontends, and reliable PostgreSQL backends.",
    features: [
      "Responsive, accessible interfaces with rich micro-interactions",
      "Modular component architecture for effortless future expansion",
      "Authentication via OAuth, SAML SSO, magic links, and MFA",
      "High performance with sub-second page loads and static generation",
    ],
  },
  {
    id: "internal-tools",
    icon: LayoutDashboard,
    title: "Internal Tools & Operational Portals",
    description: "Custom internal consoles that empower staff to execute complex procedures accurately, replacing error-prone spreadsheets and manual routines.",
    features: [
      "Role-based permission hierarchies and detailed audit logs",
      "Custom data entry screens with real-time validation rules",
      "Bulk CSV/Excel import and export with reconciliation tooling",
      "Direct integration with backend databases, ERPs, and billing engines",
    ],
  },
  {
    icon: Layers,
    title: "Client & Partner Collaboration Portals",
    description: "Provide clients with secure, branded self-service dashboards to review project progress, download deliverables, make payments, and manage requests.",
    features: [
      "Branded customer experience with custom domain support",
      "Secure file management with granular download permissions",
      "Payment processing via Stripe with automatic invoicing",
      "Activity feeds, automated email notifications, and in-app updates",
    ],
  },
  {
    icon: GitBranch,
    title: "API Design & Systems Integration",
    description: "Robust RESTful and GraphQL API backends connecting your proprietary applications with third-party SaaS tools and payment gateways.",
    features: [
      "Comprehensive OpenAPI / Swagger specification documentation",
      "Rate-limiting, API key provisioning, and request validation",
      "Webhook event publishers and idempotent consumer workers",
      "Integration with Stripe, HubSpot, QuickBooks, and logistics APIs",
    ],
  },
  {
    icon: Database,
    title: "Relational Database Engineering",
    description: "Design and optimize structured PostgreSQL and MySQL schemas that protect transactional integrity, eliminate duplicates, and scale smoothly.",
    features: [
      "Normalized relational schema design and automated migrations",
      "Index tuning, query optimization, and connection pooling",
      "Read-replica configuration for reporting and heavy analytical loads",
      "Strict data encryption at rest and automated snapshot retention",
    ],
  },
  {
    icon: Sparkles,
    title: "Legacy Modernization & Code Refactoring",
    description: "Safely upgrade aging applications, eliminate technical debt, and migrate monolithic codebases into maintainable, modern architectures.",
    features: [
      "Strangler-fig pattern for zero-downtime incremental migration",
      "Decoupling tightly coupled spaghetti code into modular services",
      "Automated test suite creation to prevent regression bugs",
      "Containerizing legacy applications for predictable cloud hosting",
    ],
  },
];

const problems = [
  {
    problem: "“We are paying thousands of dollars every month in per-seat fees for SaaS tools that still don't do what we need.”",
    solution: "We build custom software that you own entirely, eliminating per-seat license bloat and tailoring every feature to your exact requirements.",
  },
  {
    problem: "“Our team relies on massive spreadsheets that break whenever multiple people edit them simultaneously.”",
    solution: "We replace fragile spreadsheets with a secure web platform featuring multi-user concurrency, role-based permissions, and database integrity.",
  },
  {
    problem: "“We have hired agencies before who delivered buggy code and vanished when problems arose.”",
    solution: "Elvtera is a long-term technology partner. We engineer with strict TypeScript standards and provide ongoing maintenance, monitoring, and support.",
  },
  {
    problem: "“Our customers expect a modern digital portal, but building it in-house would take our developers away from core initiatives.”",
    solution: "Our team designs and launches a polished, secure client portal in weeks without distracting your internal developers.",
  },
];

export default function CustomSoftwarePage() {
  return (
    <>
      <PageHero
        badge="Software Solutions Capability"
        title="Custom Software Engineered Around Your Business"
        description="We design and build purpose-built web applications, internal tools, client portals, and robust APIs with clean code and long-term maintainability."
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
            eyebrow="The Build vs Buy Decision"
            title="When Off-the-Shelf Tools Hold You Back"
            description="Growing businesses outgrow generic software. Purpose-built tools streamline your unique operations and give you a permanent competitive advantage."
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
            eyebrow="Software Services"
            title="End-to-End Application Engineering"
            description="From initial database schema to polished frontend components and ongoing feature development."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} id={cap.id} className="p-7 rounded-3xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
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

      {/* Process */}
      <section className="py-20 lg:py-24 bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Process"
            title="How We Deliver Custom Software"
            description="Two-week iterative sprints, continuous staging deployments, and working software at every step."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { num: "01", name: "Understand", desc: "Map user workflows, data structures, permission tiers, and integration targets." },
              { num: "02", name: "Plan", desc: "Create database schemas, API specs, component libraries, and two-week milestone schedules." },
              { num: "03", name: "Build", desc: "Develop features in TypeScript, automate CI/CD unit tests, and deploy to review environments." },
              { num: "04", name: "Operate", desc: "Production deployment, telemetry monitoring, database migration, and bug triage." },
              { num: "05", name: "Improve", desc: "Iterate based on real user feedback, optimize queries, and scale API throughput." },
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
            eyebrow="Engagement Models"
            title="Ways to Build Custom Software With Us"
            description="Choose the model that fits your product timeline and technical resources."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="p-8 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase">Project-Based</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Turn-Key Application Build</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Fixed-scope software delivery from concept to production release with clear milestone pricing and code handover.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Button href="/contact?intent=software-project&model=project" variant="outline" className="w-full">
                  Start a Software Project
                </Button>
              </div>
            </div>

            <div className="p-8 rounded-3xl border-2 border-secondary bg-white shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-secondary bg-blue-50 px-3 py-1 rounded-full uppercase">Ongoing Support</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Software Maintenance</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Continuous security patching, dependency upgrades, bug fixes, and feature enhancements under an SLA.
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
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Embedded Developers</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Add senior full-stack software engineers directly to your internal sprint cycles, Jira boards, and GitHub repos.
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
            Software Development Stack
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Tailwind CSS", "Docker", "REST APIs", "GraphQL", "Prisma"].map((tech) => (
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
            title="Questions About Custom Software"
            description="Clear answers about code ownership, testing, and collaboration."
          />

          <div className="mt-12 space-y-4">
            {[
              {
                q: "Do we own the source code after completion?",
                a: "Yes. You own 100% of the intellectual property, source code, repositories, and documentation. No licensing fees or vendor lock-in.",
              },
              {
                q: "What testing and QA procedures do you follow?",
                a: "We implement automated unit and integration tests in CI/CD, conduct cross-browser validation, test on mobile viewports, and verify all API error edge cases.",
              },
              {
                q: "Can you take over and refactor an existing codebase built by another agency?",
                a: "Yes. We regularly audit and modernize existing codebases, resolving performance bottlenecks, upgrading dependencies, and writing clean documentation.",
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
        title="Ready to engineer your custom software?"
        description="Book a technical discovery call with an Elvtera software architect. We will evaluate your feature list, data models, and delivery timeline."
        buttonLabel="Start a Software Project"
        buttonHref="/contact?intent=software-project"
      />
    </>
  );
}
