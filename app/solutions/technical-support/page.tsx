import Link from "next/link";
import { 
  Headphones, 
  MessageSquare, 
  Bug, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  FileText, 
  Users, 
  ShieldCheck, 
  HelpCircle,
  Activity,
  Layers
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Technical & Customer Support Services — L1/L2 Product Support — Elvtera",
  description:
    "Extend your support capacity with trained remote technical and product support specialists. Frontline L1 resolution, L2 bug reproduction, and structured developer escalations.",
  path: "/solutions/technical-support",
});

const capabilities = [
  {
    icon: Headphones,
    title: "Tier 1 Frontline Customer Support",
    description: "Rapid, professional first-response customer care across email, live chat, and helpdesk tickets for SaaS and platform companies.",
    features: [
      "Sub-15-minute first response times during covered operational hours",
      "Account setup, billing inquiries, and feature usage walkthroughs",
      "Resolution of standard operating issues using living knowledge bases",
      "Professional, empathetic communication aligned to your brand tone",
    ],
  },
  {
    icon: Bug,
    title: "Tier 2 Technical Triage & Bug Reproduction",
    description: "Deep technical troubleshooting: inspecting console errors, backend API logs, database records, and reproducing bugs directly in staging.",
    features: [
      "Reproducing user-reported bugs in test environments with screen recordings",
      "Inspecting application logs in Datadog, CloudWatch, or Sentry",
      "Writing structured, actionable bug tickets for developers with curl commands",
      "Temporary client-side workarounds while engineering fixes are deployed",
    ],
  },
  {
    icon: MessageSquare,
    title: "Helpdesk Platform Administration",
    description: "Configure, maintain, and optimize modern support tools like Zendesk, Intercom, Freshdesk, or Jira Service Management.",
    features: [
      "Custom ticket routing rules based on customer tier, urgency, and language",
      "Automated SLA monitoring, escalation triggers, and breach alerts",
      "Canned responses, automated macros, and tag-based categorization",
      "Customer satisfaction (CSAT) survey automation and reporting",
    ],
  },
  {
    icon: FileText,
    title: "Documentation & Knowledge Base Ops",
    description: "Keep your public customer help center and internal support runbooks continuously updated as new features and bug fixes ship.",
    features: [
      "Step-by-step help article authoring with clean screenshots and GIFs",
      "Internal troubleshooting runbooks for edge cases and rare errors",
      "Deflecting ticket volume by improving self-service search discovery",
      "Regular audits of outdated articles following product releases",
    ],
  },
  {
    icon: Activity,
    title: "SLA Governance & Support Telemetry",
    description: "Track and report key support metrics: first response time, average resolution time, ticket volume trends, and CSAT scores.",
    features: [
      "Weekly and monthly support throughput and SLA compliance reports",
      "Product feedback aggregation highlighting common user confusion",
      "Identifying recurring product bugs to prioritize in developer sprints",
      "Capacity planning for peak holiday or product launch seasons",
    ],
  },
  {
    icon: Users,
    title: "MSPs & IT Service Desk Backstop",
    description: "White-label Tier-1/Tier-2 remote support desk for IT service providers and MSPs requiring reliable coverage without staffing churn.",
    features: [
      "Answering tickets and inquiries under your brand guidelines",
      "Password resets, VPN configuration assistance, and software install guides",
      "Deterministic escalation matrix to your senior engineers when needed",
      "Full transparency with audited ticket history and time logging",
    ],
  },
];

const problems = [
  {
    problem: "“Our senior software developers are burning out answering customer support tickets all day.”",
    solution: "Our trained L1/L2 technical support team handles 80%+ of incoming inquiries and only escalates verified bugs with reproduction steps.",
  },
  {
    problem: "“Ticket response times are slow, leading to frustrated customers and churn.”",
    solution: "We provide dedicated coverage with guaranteed first-response and resolution SLAs, turning customer support into a retention driver.",
  },
  {
    problem: "“Developers receive vague bug reports like 'it doesn't work' with zero context or logs.”",
    solution: "Our Tier-2 technical support specialists inspect error logs, reproduce the issue in staging, and file clean tickets complete with payloads.",
  },
  {
    problem: "“Our help center documentation is months out of date and nobody has time to update it.”",
    solution: "We maintain your public knowledge base and internal support runbooks as part of our ongoing support operations.",
  },
];

export default function TechnicalSupportPage() {
  return (
    <>
      <PageHero
        badge="Technical & Customer Support Solutions"
        title="Trained Technical & Customer Support for Growing Platforms"
        description="Extend your operational capacity with dedicated remote support specialists. From frontline customer inquiry resolution to Tier-2 log inspection and bug reproduction."
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/contact?intent=support-requirements">
              <span>Discuss Your Support Requirements</span>
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
            eyebrow="The Support Bottleneck"
            title="Why Growing Platforms Need Dedicated Support Operations"
            description="When developers spend their days answering support emails, product velocity stalls. We protect your engineering time while delighting users."
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
            eyebrow="Support Capabilities"
            title="Complete Tier 1 & Tier 2 Support Spectrum"
            description="High-empathy, technically competent remote professionals who integrate seamlessly into your helpdesk."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="p-7 rounded-3xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
                  <div>
                    <div className="flex size-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700 border border-amber-200 mb-5">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-xl font-bold text-primary font-display">{cap.title}</h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">{cap.description}</p>
                    <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-xs text-slate-700">
                      {cap.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-amber-600 shrink-0 mt-0.5" />
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
            eyebrow="Support Process"
            title="Our Onboarding & Support Lifecycle"
            description="How we train our support engineers to understand your product deeply before answering a single customer inquiry."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { num: "01", name: "Understand", desc: "Audit past support tickets, common friction points, customer expectations, and product edge cases." },
              { num: "02", name: "Plan", desc: "Author comprehensive triage runbooks, macro responses, escalation paths, and SLA targets." },
              { num: "03", name: "Build", desc: "Configure helpdesk tools (Zendesk/Intercom), test staging repro access, and conduct mock tickets." },
              { num: "04", name: "Operate", desc: "Provide continuous live coverage, rapid response, bug reproduction, and developer syncs." },
              { num: "05", name: "Improve", desc: "Analyze monthly ticket trends to recommend self-service documentation and product bug fixes." },
            ].map((step) => (
              <div key={step.num} className="p-6 rounded-2xl border border-slate-200 bg-surface">
                <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">{step.num}</span>
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
            title="Flexible Support Coverage"
            description="Choose the coverage model that matches your customer volume and time zone requirements."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="p-8 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase">Project-Based</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Helpdesk Overhaul & Setup</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Fixed-scope helpdesk configuration, automated SLA rules, macro libraries, and knowledge base authoring.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Button href="/contact?intent=support-requirements&model=project" variant="outline" className="w-full">
                  Start Setup Project
                </Button>
              </div>
            </div>

            <div className="p-8 rounded-3xl border-2 border-secondary bg-white shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-secondary bg-blue-50 px-3 py-1 rounded-full uppercase">Ongoing Support</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Dedicated Support Operations</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Continuous day-to-day ticket triage, customer resolution, staging reproduction, and SLA reporting.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Button href="/contact?intent=support-requirements&model=ongoing" variant="primary" className="w-full">
                  Discuss Ongoing Support
                </Button>
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase">Extended Team</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Embedded Support Engineers</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Add full-time technical support specialists directly to your internal communication and engineering channels.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Button href="/contact?intent=support-requirements&model=extended-team" variant="outline" className="w-full">
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
            Helpdesk Platforms & Diagnostic Tooling
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {["Zendesk", "Intercom", "Freshdesk", "Jira Service Management", "Linear", "Sentry", "Datadog", "Postman", "Slack", "Notion"].map((tech) => (
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
            title="Questions About Technical Support Services"
            description="Clear answers about coverage hours, brand alignment, and escalation procedures."
          />

          <div className="mt-12 space-y-4">
            {[
              {
                q: "How do your support specialists learn our proprietary software?",
                a: "During our 1–2 week onboarding phase, our team studies your product, reviews recorded demo walkthroughs, tests workflows in your staging environment, and authors runbooks that are verified by your team before go-live.",
              },
              {
                q: "What hours of coverage do you support?",
                a: "We offer both standard business hours (e.g., 9 AM to 6 PM EST) and 24/7/365 coverage depending on your customer distribution and SLA requirements.",
              },
              {
                q: "How do you distinguish between user error and a genuine software bug?",
                a: "Our Tier-2 technicians test the scenario directly in staging, check application error logs in tools like Sentry or Datadog, verify whether expected API payloads succeeded, and only escalate to developers when a code defect is verified.",
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
        title="Ready to elevate your customer & technical support?"
        description="Schedule a technical consultation to explore how our remote L1/L2 support specialists can resolve tickets faster and free your developers to build."
        buttonLabel="Discuss Your Support Requirements"
        buttonHref="/contact?intent=support-requirements"
      />
    </>
  );
}
