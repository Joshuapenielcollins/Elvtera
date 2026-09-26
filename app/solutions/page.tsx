import Link from "next/link";
import { 
  Server, 
  ShieldCheck, 
  Headphones, 
  Code2, 
  ArrowRight, 
  CheckCircle2, 
  Workflow, 
  Layers, 
  Cpu, 
  Boxes,
  Database,
  Lock,
  Calendar
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Solutions Architecture - Two Core Verticals for Modern Enterprises",
  description:
    "Elvtera helps businesses build, operate, secure, and support their technology. Explore our two primary verticals: Infrastructure, Security & Customer Operations, and Custom Software & Automation.",
  path: "/solutions",
});

const vertical1Solutions = [
  {
    title: "Infrastructure & Managed IT",
    href: "/infrastructure",
    icon: Server,
    color: "text-blue-600 bg-blue-50 border-blue-200",
    description: "Operate Linux and Windows servers, cloud architectures (AWS/Azure/OCI), databases, and network connectivity under proactive monitoring.",
    deliverables: [
      "Linux & Windows server administration",
      "Database clustering, query optimization & automated backups",
      "Cloud infrastructure (AWS, Azure, OCI) & cost optimization",
      "High-availability network, firewall & VPN routing",
      "24/7 telemetry monitoring & rapid incident response",
    ],
    cta: "Explore Infrastructure Services",
  },
  {
    title: "Security Operations",
    href: "/security",
    icon: ShieldCheck,
    color: "text-emerald-700 bg-emerald-50 border-emerald-200",
    description: "Protect the servers, endpoints, and identity platforms behind your business through disciplined log analysis and continuous hardening.",
    deliverables: [
      "SIEM log aggregation & anomaly correlation",
      "Identity & Access Management (IAM) and mandatory MFA",
      "Endpoint Detection & Response (EDR) agent management",
      "Vulnerability scanning & prioritized patch management",
      "System hardening (CIS benchmark alignment)",
    ],
    cta: "Explore Security Operations",
  },
  {
    title: "Customer & Product Support",
    href: "/customer-support",
    icon: Headphones,
    color: "text-amber-700 bg-amber-50 border-amber-200",
    description: "Extend your support capacity with trained remote product and technical support engineers for software and platform companies.",
    deliverables: [
      "Tier 1 frontline customer support & inquiry resolution",
      "Tier 2 technical troubleshooting & log inspection",
      "Bug reproduction & structured engineering escalation",
      "Helpdesk management (Zendesk, Intercom, Freshdesk)",
      "Knowledge base and FAQ documentation maintenance",
    ],
    cta: "Explore Support Services",
  },
];

const vertical2Solutions = [
  {
    title: "Custom Software & Automation",
    href: "/software-automation",
    icon: Code2,
    color: "text-purple-700 bg-purple-50 border-purple-200",
    description: "Build custom web applications, workflow pipelines, and AI systems tailored to your unique operational model instead of generic SaaS.",
    deliverables: [
      "Custom web applications & internal operations portals",
      "Workflow & business process automation (n8n, Python)",
      "AI agents, chatbots, and automated voice agents",
      "Enterprise CRM & ERP core platform engineering",
      "API integrations, webhook orchestration & legacy modernization",
    ],
    cta: "Explore Software & Automation",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions Architecture"
        title="Two Ways We Help Businesses Build, Operate, Secure & Support Technology"
        description="We structure our services around the operational lifecycle of modern technology: building software that fits your business, operating reliable infrastructure, protecting systems against threats, and supporting your end-users."
        breadcrumbs={[{ label: "Solutions", href: "/solutions" }]}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/book" size="lg">
            <Calendar className="size-4" />
            Book a Technical Call
          </Button>
          <Button href="#verticals" variant="outline" size="lg">
            Browse Verticals
          </Button>
        </div>
      </PageHero>

      {/* Narrative Ribbon */}
      <section className="border-b border-line bg-surface py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-xl bg-white border border-line">
              <span className="font-mono text-xs font-bold text-blue-600 block">BUILD</span>
              <p className="text-xs font-semibold text-primary mt-1">Custom Software & Automation</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-line">
              <span className="font-mono text-xs font-bold text-cyan-600 block">OPERATE</span>
              <p className="text-xs font-semibold text-primary mt-1">Infrastructure & Managed IT</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-line">
              <span className="font-mono text-xs font-bold text-emerald-600 block">SECURE</span>
              <p className="text-xs font-semibold text-primary mt-1">Security Operations & IAM</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-line">
              <span className="font-mono text-xs font-bold text-amber-600 block">SUPPORT</span>
              <p className="text-xs font-semibold text-primary mt-1">Remote Product & Tech Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical 1 Section */}
      <section id="verticals" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-md bg-secondary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary">
              Vertical 01
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl font-display">
              Infrastructure, Security & Customer Operations
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Keep your technology reliable, secure, and supported with a remote team that can operate infrastructure and support your customers. We combine systems administration, cybersecurity operations, and technical product support into one unified discipline.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {vertical1Solutions.map((sol, index) => {
              const IconC = sol.icon;
              return (
                <Reveal key={sol.title} delay={index * 0.08}>
                  <div className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg">
                    <div className={`flex size-12 items-center justify-center rounded-xl border ${sol.color}`}>
                      <IconC className="size-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-primary font-display">
                      {sol.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      {sol.description}
                    </p>
                    <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-6 text-xs text-slate-600 flex-1">
                      {sol.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-secondary shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-4 border-t border-slate-100">
                      <Link
                        href={sol.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:underline"
                      >
                        <span>{sol.cta}</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vertical 2 Section */}
      <section className="border-t border-line bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-md bg-purple-50 border border-purple-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">
              Vertical 02
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl font-display">
              Custom Software & Automation
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Build the software and automated systems your business needs instead of forcing your operations into generic tools. We engineer web applications, internal tools, ERP/CRM backbones, and workflow automations from discovery to launch.
            </p>
          </div>

          <div className="mt-12 max-w-4xl">
            {vertical2Solutions.map((sol, index) => {
              const IconC = sol.icon;
              return (
                <Reveal key={sol.title} delay={index * 0.08}>
                  <div className="flex flex-col md:flex-row gap-8 rounded-2xl border border-slate-200/80 bg-white p-8 lg:p-10 shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-lg hover:border-purple-400">
                    <div className="md:w-1/3">
                      <div className={`flex size-14 items-center justify-center rounded-xl border ${sol.color}`}>
                        <IconC className="size-7" />
                      </div>
                      <h3 className="mt-5 text-2xl font-bold text-primary font-display">
                        {sol.title}
                      </h3>
                      <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                        {sol.description}
                      </p>
                      <div className="mt-6">
                        <Button href={sol.href} variant="primary" size="md">
                          {sol.cta}
                          <ArrowRight className="size-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8 flex flex-col justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                          Key Solutions & Services Included
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3 text-xs text-slate-700">
                          {sol.deliverables.map((del, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2 rounded-lg bg-surface p-3 border border-line">
                              <CheckCircle2 className="size-3.5 text-purple-700 shrink-0 mt-0.5" />
                              <span className="font-medium">{del}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 rounded-xl bg-purple-50/50 border border-purple-100 p-4 text-xs text-purple-900 flex items-center justify-between">
                        <span>Six-Stage Delivery: Discover → Design → Build → Integrate → Launch → Support</span>
                        <Link href="/software-automation" className="font-bold underline shrink-0 ml-2">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Discuss your technology program with an architect."
        description="Whether you need infrastructure operations, technical customer support, or bespoke software engineering, our team is ready to structure a solution."
        buttonLabel="Talk to Elvtera"
        buttonHref="/contact"
      />
    </>
  );
}
