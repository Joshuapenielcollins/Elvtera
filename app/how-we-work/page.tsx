import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Terminal, 
  Clock, 
  ShieldCheck, 
  Users, 
  Workflow, 
  Search, 
  Compass, 
  Hammer, 
  Activity, 
  TrendingUp,
  Cpu,
  Layers,
  Sparkles
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "How We Work — The Elvtera 5-Step Delivery & Operations Framework",
  description:
    "Understand, Plan, Build, Operate, Improve. Learn how Elvtera partners with growing businesses to deliver business systems, custom software, IT operations, and security.",
  path: "/how-we-work",
});

const steps = [
  {
    number: "01",
    title: "Understand",
    subline: "We understand your business, systems, technology, and objectives.",
    description:
      "Technology fails when engineers write code or configure servers without understanding the underlying business reality. We begin by analyzing how your organization generates revenue, where manual friction slows teams down, what legacy systems exist, and what uptime and scalability targets you must hit.",
    activities: [
      "Review current architecture, codebases, cloud topologies, and SaaS subscriptions",
      "Interview key business operators, developers, and support teams to identify daily pain points",
      "Document existing data flows, manual handoffs, and single points of failure",
      "Establish security boundaries, compliance requirements, and SLA expectations",
    ],
    deliverables: "Architecture & Systems Assessment, Current-State Gap Analysis",
  },
  {
    number: "02",
    title: "Plan",
    subline: "We identify the right technical approach and priorities.",
    description:
      "We avoid unnecessary complexity. Our architectural planning defines the simplest, most robust technical path to solve your problem—whether that means implementing a purpose-built CRM, provisioning a multi-cloud Terraform stack, or deploying a centralized SIEM pipeline.",
    activities: [
      "Define technology stack, data schemas, cloud services, and integration touchpoints",
      "Formulate itemized project milestones with explicit acceptance criteria",
      "Create security architecture and access policies under least-privilege standards",
      "Establish realistic delivery timelines and resource allocations without ambiguity",
    ],
    deliverables: "Technical Specification Document, Milestone Schedule, Security Runbook Draft",
  },
  {
    number: "03",
    title: "Build",
    subline: "We implement the required business systems, software, infrastructure, or security solutions.",
    description:
      "Our engineering team executes the technical work following rigorous software engineering and DevOps best practices. Code is version-controlled, tested, and reviewed. Infrastructure is written as code. Systems are hardened before exposure to traffic.",
    activities: [
      "Develop custom applications, APIs, internal tools, and database schemas",
      "Provision cloud infrastructure, VPCs, firewall rules, and automated backup pipelines",
      "Configure CRM workflows, lead enrichment, helpdesk routing, and automated notifications",
      "Perform rigorous functional testing, load testing, and security vulnerability scans",
    ],
    deliverables: "Production-Ready Applications, Infrastructure as Code Repositories, Living Runbooks",
  },
  {
    number: "04",
    title: "Operate",
    subline: "We provide ongoing support, monitoring, maintenance, and optimization where required.",
    description:
      "Launching is only step one. For clients enrolled in ongoing managed services, our team handles day-to-day operations: 24/7 infrastructure telemetry monitoring, database vacuuming and backups, security log correlation, software bug triage, and Tier-1/Tier-2 customer support.",
    activities: [
      "24/7 uptime monitoring with synthetic probes and automated alert escalations",
      "Regular OS patching, kernel upgrades, and dependency vulnerability mitigation",
      "Tier 1 frontline customer support and Tier 2 technical ticket triage",
      "Immutable snapshot verification and scheduled disaster recovery failover drills",
    ],
    deliverables: "Monthly SLA Uptime Reports, Patch Audit Logs, Support Ticket Analytics",
  },
  {
    number: "05",
    title: "Improve",
    subline: "We continuously identify opportunities to automate, secure, optimize, and scale.",
    description:
      "Business and technology never stand still. We periodically review operational telemetry, cloud expenditures, user tickets, and team feedback to propose continuous optimizations that reduce cost, improve throughput, and elevate security posture.",
    activities: [
      "Cloud resource right-sizing and reserved instance optimization to trim AWS/Azure spend",
      "Automating repetitive support tickets into self-service workflows and AI agents",
      "Refining SIEM threat detection rules based on evolving attack surfaces",
      "Refactoring software bottlenecks to maintain low API latencies as user concurrency grows",
    ],
    deliverables: "Quarterly Optimization Reviews, Cost Reduction Reports, Feature Roadmap Updates",
  },
];

const operatingPrinciples = [
  {
    title: "Living Runbooks",
    desc: "Every deployment step, failover command, and troubleshooting procedure is documented. If an incident occurs, response is deterministic rather than guesswork.",
    icon: FileText,
  },
  {
    title: "Zero-Trust Security",
    desc: "We enforce least privilege across all systems. Mandatory MFA, encrypted transports, role-based access, and zero hardcoded credentials.",
    icon: ShieldCheck,
  },
  {
    title: "Code & Asset Ownership",
    desc: "You own 100% of the code, repositories, cloud accounts, and data. We never hold your business hostage with proprietary locks.",
    icon: Terminal,
  },
  {
    title: "Direct Engineering Communication",
    desc: "No game of telephone through non-technical account reps. You communicate directly with the engineers and operators executing the work.",
    icon: Users,
  },
  {
    title: "Controlled Maintenance Windows",
    desc: "Upgrades and patching happen during scheduled off-peak windows after snapshot validation, guaranteeing zero unannounced disruption.",
    icon: Clock,
  },
  {
    title: "Measurable Accountability",
    desc: "Every service level agreement comes with clear uptime metrics, response time targets, and transparent escalation matrices.",
    icon: Activity,
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        badge="Disciplined Technology Delivery"
        title="How We Work"
        description="A transparent, 5-step methodology built around practical technology operations. From understanding your business to ongoing operations and continuous improvement."
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/contact">
              <span>Talk to Elvtera</span>
              <ArrowRight className="size-4 ml-1" />
            </Button>
            <Button href="#process" variant="outline">
              Explore the 5 Steps
            </Button>
          </div>
        }
      />

      {/* 5-Step Process Section */}
      <section id="process" className="py-20 lg:py-28 bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="The 5 Steps"
            title="From Discovery to Lifelong Operational Stewardship"
            description="We replace vague promises with structured engineering discipline. Every stage has documented activities, clear accountability, and tangible deliverables."
          />

          <div className="mt-16 space-y-12 max-w-4xl mx-auto">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-slate-200 bg-surface p-8 lg:p-10 shadow-xs hover:border-slate-300 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-sm font-bold text-secondary bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
                    Step {step.number}
                  </span>
                  <h3 className="text-2xl font-bold text-primary font-display">
                    {step.title}
                  </h3>
                </div>

                <p className="text-sm font-semibold text-secondary mb-3">
                  {step.subline}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Key activities */}
                <div className="mt-6 pt-6 border-t border-slate-200/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    What Happens During This Phase:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {step.activities.map((act, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="size-3.5 text-secondary shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="mt-5 p-3.5 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <span className="font-semibold text-slate-800">Primary Output / Deliverable:</span>
                  <span className="font-mono text-secondary font-medium">{step.deliverables}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models in Depth */}
      <section className="py-20 lg:py-24 bg-surface border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Flexible Partnership"
            title="Three Flexible Ways to Engage"
            description="Choose the engagement model that matches your operational requirements and technical maturity."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase">
                  Model 01
                </span>
                <h3 className="mt-4 text-xl font-bold text-primary font-display">
                  Project-Based
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Ideal for companies with a specific technical objective that requires focused engineering from start to finish.
                </p>
                <div className="mt-6 pt-5 border-t border-slate-100 text-xs space-y-2 text-slate-600">
                  <p>• Fixed-scope milestone delivery</p>
                  <p>• Clear acceptance criteria & testing</p>
                  <p>• Comprehensive handover & runbooks</p>
                  <p>• Post-launch hypercare included</p>
                </div>
              </div>
              <div className="mt-8 pt-5 border-t border-slate-100">
                <Button href="/contact?model=project" variant="outline" className="w-full">
                  Start a Project
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border-2 border-secondary bg-white p-8 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-secondary bg-blue-50 px-3 py-1 rounded-full uppercase">
                  Model 02 · Most Popular
                </span>
                <h3 className="mt-4 text-xl font-bold text-primary font-display">
                  Ongoing Support
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  For businesses that need dedicated operational stewardship, 24/7 monitoring, patch management, and support under SLAs.
                </p>
                <div className="mt-6 pt-5 border-t border-slate-100 text-xs space-y-2 text-slate-600">
                  <p>• 24/7 uptime & health telemetry</p>
                  <p>• Proactive security patch management</p>
                  <p>• Tier 1/Tier 2 remote technical support</p>
                  <p>• Guaranteed response times & SLA credits</p>
                </div>
              </div>
              <div className="mt-8 pt-5 border-t border-slate-100">
                <Button href="/contact?model=ongoing" variant="primary" className="w-full">
                  Discuss Ongoing Support
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase">
                  Model 03
                </span>
                <h3 className="mt-4 text-xl font-bold text-primary font-display">
                  Extended Technology Team
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  An extension of your technology team. Add senior infrastructure, security, or software engineers directly into your workflows.
                </p>
                <div className="mt-6 pt-5 border-t border-slate-100 text-xs space-y-2 text-slate-600">
                  <p>• Embedded directly into Slack/Jira</p>
                  <p>• Dedicated senior engineers</p>
                  <p>• Flexible scaling without HR overhead</p>
                  <p>• No staffing agency markups</p>
                </div>
              </div>
              <div className="mt-8 pt-5 border-t border-slate-100">
                <Button href="/contact?model=extended-team" variant="outline" className="w-full">
                  Extend Your Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="py-20 lg:py-24 bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Operational Standards"
            title="Principles That Guide Every Engagement"
            description="Our engineering standards are designed to protect system stability, security, and long-term maintainability."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {operatingPrinciples.map((prin) => {
              const Icon = prin.icon;
              return (
                <div key={prin.title} className="p-7 rounded-2xl border border-slate-200 bg-surface">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-slate-900 text-white mb-4">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-bold text-base text-primary font-display">{prin.title}</h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{prin.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-24 bg-surface border-b border-line">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Common Questions"
            title="Frequently Asked Questions About Working With Us"
            description="Direct answers about contracts, communication, onboarding, and responsibilities."
          />

          <div className="mt-12 space-y-4">
            {[
              {
                q: "How fast can Elvtera onboard into our existing systems?",
                a: "For project-based engagements, discovery begins within 2–3 business days. For ongoing infrastructure management or technical support, typical onboarding and runbook documentation takes 5–10 business days before full operational cutover.",
              },
              {
                q: "Do we have to hand over root credentials or full admin access?",
                a: "No. We practice least-privilege access. We help you configure isolated IAM roles, scoped service accounts, and audit-logged jump boxes so our team only has access to what is strictly necessary.",
              },
              {
                q: "How do we communicate with your engineers on a daily basis?",
                a: "We integrate directly into your operational workflow. That typically means a shared Slack or Microsoft Teams channel, access to your Jira/Linear board, and scheduled weekly engineering syncs.",
              },
              {
                q: "Can you work as an invisible white-label engineering team for our MSP or agency?",
                a: "Yes. Many MSPs and technology agencies partner with Elvtera as their behind-the-scenes Tier-3 infrastructure and cloud engineering backstop under strict non-disclosure agreements.",
              },
              {
                q: "What happens if an incident occurs outside standard business hours?",
                a: "Clients on our ongoing managed service and support tiers have 24/7 automated alert escalation. When an incident triggers a critical threshold, our on-call systems engineers respond according to agreed SLA runbooks.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-white">
                <h3 className="font-bold text-base text-slate-900 font-display">{faq.q}</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to discuss your technology requirements?"
        description="Schedule a technical consultation to explore how our 5-step framework can solve your infrastructure, software, or business systems challenges."
        buttonLabel="Talk to Elvtera"
        buttonHref="/contact"
      />
    </>
  );
}
