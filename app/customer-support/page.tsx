import Link from "next/link";
import { 
  Headphones, 
  MessageSquare, 
  LifeBuoy, 
  Bug, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  UserCheck, 
  GitBranch,
  BookOpen,
  Filter,
  Calendar
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Remote Customer & Product Support - L1 & L2 Technical Support for SaaS",
  description:
    "Your product. Our support team. Extend your customer support operation with trained remote technical and product support professionals. Tier 1 & Tier 2 support, ticket management, and bug triage.",
  path: "/customer-support",
});

const tiers = [
  {
    tier: "Tier 1 Support",
    subtitle: "Frontline Customer & Product Guidance",
    description: "Rapid, articulate responses to user inquiries, onboarding questions, and standard troubleshooting.",
    features: [
      "Basic product questions & navigation walkthroughs",
      "Ticket intake, verification, and polite customer communication",
      "Account access, password resets, and permission checks",
      "Initial troubleshooting and reproduction using test accounts",
      "Knowledge base search and standard response alignment",
    ],
    highlight: "First Response & High-Volume Resolution",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    tier: "Tier 2 Support",
    subtitle: "Technical Troubleshooting & Engineering Escalation",
    description: "Deep technical triage by support engineers who read code, inspect logs, and write clean bug tickets.",
    features: [
      "Technical troubleshooting for application errors & API faults",
      "Client browser console analysis and server log review",
      "Exact step-by-step bug reproduction in staging environments",
      "Formulation of detailed GitHub/Jira engineering tickets",
      "Direct coordination with client developers for hotfixes",
    ],
    highlight: "Saves In-House Engineering Hours",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    tier: "Support Operations",
    subtitle: "Helpdesk Governance, SLAs & Documentation",
    description: "Keeping your support machine running smoothly with structured ticketing pipelines and analytics.",
    features: [
      "Helpdesk configuration (Zendesk, Intercom, Freshdesk, HubSpot)",
      "Strict SLA tracking for first-response and resolution times",
      "Knowledge base and FAQ article authoring and maintenance",
      "Ticket categorization, tag taxonomy, and sentiment analysis",
      "Monthly voice-of-customer reporting and feature request synthesis",
    ],
    highlight: "Operational Discipline & Consistency",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
];

const serviceList = [
  "L1 Customer Support",
  "L2 Technical Support",
  "Product Support",
  "Application Support",
  "Technical Troubleshooting",
  "Ticket / Helpdesk Management",
  "Email Support",
  "Chat Support",
  "Product Issue Triage",
  "Bug / Issue Escalation",
  "Customer Onboarding Support",
  "Knowledge Base Management",
  "FAQ / Documentation Support",
  "Ticket Categorization",
  "SLA-based Support",
  "Escalation Management",
  "Customer Feedback & Reporting",
];

export default function CustomerSupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Vertical 01 · Remote Customer & Product Support"
        title="Your Product. Our Support Team."
        description="Extend your customer support operation with trained remote technical and product support professionals. We handle tier-1 user inquiries and tier-2 technical triage so your core development team can focus on building software."
        breadcrumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Customer & Product Support", href: "/customer-support" },
        ]}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/book?service=customer-support" size="lg">
            <Calendar className="size-4" />
            Book a Support Consultation
          </Button>
          <Button href="#tiers" variant="outline" size="lg">
            Explore Support Tiers
          </Button>
        </div>
      </PageHero>

      {/* Positioning Callout: Not generic call center */}
      <section className="border-b border-line bg-surface py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-line bg-white p-8 shadow-xs">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  Built for Software & Platform Companies
                </span>
                <h3 className="mt-3 text-xl font-bold text-primary font-display">
                  An Extension of Your Existing Support Team, Not a Generic Call Center
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  You do not need to outsource your entire support department. Elvtera integrates directly into your existing Slack, Zendesk, Intercom, or Jira setups. We provide technical depth, fluent communication, and disciplined escalation routines that represent your brand with technical authority.
                </p>
              </div>
              <div className="flex flex-col gap-2.5 border-t lg:border-t-0 lg:border-l border-line pt-6 lg:pt-0 lg:pl-8 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Trained on your actual product interfaces</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Inspects logs before escalating to engineers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>SLA-governed coverage during critical hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Tiers Section */}
      <section id="tiers" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Tiered Operational Architecture"
            title="L1 Frontline, L2 Technical Triage, and Support Operations"
            description="Our tiered structure ensures customers receive immediate, thoughtful assistance while technical anomalies are reproduced and documented before ever reaching your engineers."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <Reveal key={tier.tier} delay={index * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${tier.badgeColor}`}>
                      {tier.tier}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      Dedicated Specialist
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-primary font-display">
                    {tier.subtitle}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-6 flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Scope of Duties
                    </p>
                    <ul className="space-y-3 text-xs text-slate-600">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="size-4 text-secondary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 rounded-xl bg-surface p-3.5 border border-line text-center">
                    <p className="text-[11px] font-semibold text-slate-700">
                      {tier.highlight}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Escalation Lifecycle Diagram */}
      <section className="border-y border-line bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Triage Workflow"
            title="How an Issue Moves from Customer to Resolution"
            description="We filter out user confusion and isolate true bugs so your senior engineering resources never waste time on incomplete issue reports."
          />

          <div className="mt-14 grid md:grid-cols-4 gap-6">
            <div className="rounded-xl border border-line bg-white p-6 relative">
              <span className="text-xs font-bold text-secondary">STEP 01</span>
              <h4 className="mt-2 font-bold text-base text-primary">Inquiry Received</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                User submits a ticket via email, chat, or portal. L1 acknowledges within minutes under agreed response SLAs.
              </p>
            </div>

            <div className="rounded-xl border border-line bg-white p-6 relative">
              <span className="text-xs font-bold text-secondary">STEP 02</span>
              <h4 className="mt-2 font-bold text-base text-primary">Reproduction & Triage</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                If the issue is technical, L2 reproduces it in staging, inspects network payloads, and captures browser console logs.
              </p>
            </div>

            <div className="rounded-xl border border-line bg-white p-6 relative">
              <span className="text-xs font-bold text-secondary">STEP 03</span>
              <h4 className="mt-2 font-bold text-base text-primary">Clean Escalation</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                An itemized Jira/GitHub ticket is filed with exact reproduction steps, payloads, and impacted user IDs.
              </p>
            </div>

            <div className="rounded-xl border border-line bg-white p-6 relative">
              <span className="text-xs font-bold text-secondary">STEP 04</span>
              <h4 className="mt-2 font-bold text-base text-primary">Closure & Docs</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Once patched, L1 notifies the user, confirms resolution, and updates the customer-facing knowledge base.
              </p>
            </div>
          </div>

          {/* Service Checklist */}
          <div className="mt-16">
            <h4 className="text-center font-display font-bold text-lg text-primary mb-6">
              Complete Support Service Catalog
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {serviceList.map((srv, idx) => (
                <div key={idx} className="flex items-center gap-2.5 rounded-xl border border-line bg-white px-3.5 py-3 shadow-xs">
                  <span className="size-2 rounded-full bg-amber-500 shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">{srv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Ready to build a reliable product support operation?"
        description="Schedule a 30-minute technical consultation with an Elvtera support lead. We will review your ticketing volume, helpdesk stack, and escalation requirements."
        buttonLabel="Book a Support Consultation"
        buttonHref="/book?service=customer-support"
      />
    </>
  );
}
