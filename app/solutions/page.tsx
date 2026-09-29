import Link from "next/link";
import { 
  Server, 
  ShieldCheck, 
  Headphones, 
  Code2, 
  Briefcase,
  ArrowRight, 
  CheckCircle2, 
  Workflow, 
  Layers, 
  Cpu, 
  Boxes,
  Database,
  Lock,
  Globe,
  Activity,
  Terminal,
  FileCode,
  TrendingUp,
  Settings
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Technology Solutions Architecture — Business Systems, Software, IT & Security",
  description:
    "Elvtera provides end-to-end technology solutions across three balanced pillars: Business Solutions, Software Solutions, and IT & Security. From build to ongoing operations.",
  path: "/solutions",
});

const pillar1Business = [
  {
    title: "Business Solutions Overview",
    href: "/solutions/business-solutions",
    desc: "Complete business systems engineering: websites, lead capture, CRM pipelines, and operations backbones.",
    badge: "Pillar Overview",
  },
  {
    title: "CRM & ERP Implementation",
    href: "/solutions/crm-erp",
    desc: "Design and implement custom or modern CRM/ERP platforms aligned to your actual operating workflow.",
    badge: "Core System",
  },
  {
    title: "Automation & AI Workflows",
    href: "/solutions/automation-ai",
    desc: "Eliminate repetitive manual data entry, disconnected spreadsheets, and fragmented handoffs.",
    badge: "Efficiency",
  },
  {
    title: "Customer Support Systems",
    href: "/solutions/technical-support",
    desc: "Omnichannel helpdesk setup, ticketing rules, SLA escalation routing, and customer knowledge bases.",
    badge: "Support Ops",
  },
];

const pillar2Software = [
  {
    title: "Software Solutions Overview",
    href: "/solutions/software-solutions",
    desc: "Full overview of our custom software development capabilities, architectures, and engineering standards.",
    badge: "Pillar Overview",
  },
  {
    title: "Custom Software Development",
    href: "/solutions/custom-software",
    desc: "Purpose-built web applications, internal tools, and client portals engineered with Next.js, Node, and SQL.",
    badge: "Custom Dev",
  },
  {
    title: "CRM & ERP Engineering",
    href: "/solutions/crm-erp",
    desc: "Tailored operational engines unifying inventory, finance, order management, and multi-department records.",
    badge: "Enterprise",
  },
  {
    title: "Automation & AI Applications",
    href: "/solutions/automation-ai",
    desc: "Context-aware AI applications, autonomous agents, automated voice systems, and high-throughput pipelines.",
    badge: "AI & Pipeline",
  },
];

const pillar3ItSecurity = [
  {
    title: "IT & Security Overview",
    href: "/solutions/it-and-security",
    desc: "Comprehensive overview of how we operate, monitor, manage, and protect your technology stack.",
    badge: "Pillar Overview",
  },
  {
    title: "IT Operations & Sysadmin",
    href: "/solutions/it-operations",
    desc: "Proactive Linux & Windows server administration, patch management, 24/7 monitoring, and performance tuning.",
    badge: "Operations",
  },
  {
    title: "Cloud & Infrastructure",
    href: "/solutions/cloud-infrastructure",
    desc: "Multi-cloud architecture (AWS, Azure, OCI), Terraform IaC, immutable backups, and disaster recovery.",
    badge: "Cloud & DR",
  },
  {
    title: "Cybersecurity & SIEM",
    href: "/solutions/cybersecurity",
    desc: "Centralized SIEM log correlation, IAM least privilege, mandatory MFA, vulnerability patching, and hardening.",
    badge: "Security",
  },
  {
    title: "Technical & Helpdesk Support",
    href: "/solutions/technical-support",
    desc: "Trained remote L1/L2 technical support professionals who triage tickets, inspect logs, and handle escalations.",
    badge: "Support",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        badge="End-to-End Technology Solutions"
        title="Three Balanced Pillars. One Technology Partner."
        description="Elvtera helps businesses build digital systems, develop custom software, operate their IT, and secure the technology they depend on. No vendor fragmentation, no finger-pointing."
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/contact">
              <span>Talk to Elvtera</span>
              <ArrowRight className="size-4 ml-1" />
            </Button>
            <Button href="#pillars" variant="outline">
              Explore the Pillars
            </Button>
          </div>
        }
      />

      {/* The 3 Pillars Section */}
      <section id="pillars" className="py-20 lg:py-24 bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Core Architecture"
            title="Balanced Capabilities Across the Entire Lifecycle"
            description="Unlike traditional IT companies that only manage hardware or software agencies that vanish after launch, Elvtera provides balanced engineering and operational support across three distinct pillars."
          />

          <div className="mt-14 space-y-16">
            
            {/* PILLAR 01: BUSINESS SOLUTIONS */}
            <div className="rounded-3xl border border-blue-200 bg-blue-50/20 p-8 lg:p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-blue-100">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-2.5 py-1 rounded">
                    Pillar 01
                  </div>
                  <h3 className="mt-2 text-2xl lg:text-3xl font-bold text-primary font-display">
                    Business Solutions
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-blue-700">
                    Build and scale the systems behind your business.
                  </p>
                </div>
                <Button href="/solutions/business-solutions" variant="outline" className="shrink-0 bg-white">
                  <span>Explore Pillar 01</span>
                  <ArrowRight className="size-3.5 ml-1" />
                </Button>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {pillar1Business.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-300 hover:shadow-sm transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold text-blue-700 uppercase bg-blue-50 px-2 py-0.5 rounded">
                        {item.badge}
                      </span>
                      <h4 className="mt-3 font-bold text-slate-900 text-sm font-display group-hover:text-blue-700 transition-colors">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700">
                      <span>View details</span>
                      <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* PILLAR 02: SOFTWARE SOLUTIONS */}
            <div className="rounded-3xl border border-purple-200 bg-purple-50/20 p-8 lg:p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-purple-100">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-100/70 px-2.5 py-1 rounded">
                    Pillar 02
                  </div>
                  <h3 className="mt-2 text-2xl lg:text-3xl font-bold text-primary font-display">
                    Software Solutions
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-purple-700">
                    Build the technology your business needs.
                  </p>
                </div>
                <Button href="/solutions/software-solutions" variant="outline" className="shrink-0 bg-white">
                  <span>Explore Pillar 02</span>
                  <ArrowRight className="size-3.5 ml-1" />
                </Button>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {pillar2Software.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-purple-300 hover:shadow-sm transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold text-purple-700 uppercase bg-purple-50 px-2 py-0.5 rounded">
                        {item.badge}
                      </span>
                      <h4 className="mt-3 font-bold text-slate-900 text-sm font-display group-hover:text-purple-700 transition-colors">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-700">
                      <span>View details</span>
                      <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* PILLAR 03: IT & SECURITY */}
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50/20 p-8 lg:p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-emerald-100">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded">
                    Pillar 03
                  </div>
                  <h3 className="mt-2 text-2xl lg:text-3xl font-bold text-primary font-display">
                    IT & Security
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-emerald-700">
                    Keep your technology running, secure, and ready to scale.
                  </p>
                </div>
                <Button href="/solutions/it-and-security" variant="outline" className="shrink-0 bg-white">
                  <span>Explore Pillar 03</span>
                  <ArrowRight className="size-3.5 ml-1" />
                </Button>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {pillar3ItSecurity.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-emerald-300 hover:shadow-sm transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase bg-emerald-50 px-2 py-0.5 rounded">
                        {item.badge}
                      </span>
                      <h4 className="mt-3 font-bold text-slate-900 text-sm font-display group-hover:text-emerald-700 transition-colors">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                      <span>View details</span>
                      <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* End-to-End Technology Flow Highlight */}
      <section className="py-20 lg:py-24 bg-surface border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <SectionHeading
            align="center"
            eyebrow="Integration Framework"
            title="How the Three Pillars Interlock"
            description="A business does not experience technology in isolated silos. When your systems, custom software, cloud infrastructure, and security are unified under one partner, velocity accelerates and risk drops."
          />

          <div className="mt-12 max-w-4xl mx-auto grid sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">STEP 01</span>
              <h4 className="mt-3 font-bold text-base text-slate-900">Build Your Business</h4>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                Configure CRM, lead routing, helpdesks, and customer touchpoints so commercial operations function predictably.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <span className="font-mono text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">STEP 02</span>
              <h4 className="mt-3 font-bold text-base text-slate-900">Build Your Technology</h4>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                Engineer custom platforms, internal portals, APIs, and automated data pipelines matching proprietary workflows.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">STEP 03</span>
              <h4 className="mt-3 font-bold text-base text-slate-900">Operate & Protect</h4>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                Administer cloud environments, monitor fleet telemetry, enforce SIEM security, and provide 24/7 technical support.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Button href="/contact">
              <span>Discuss Your Requirements</span>
              <ArrowRight className="size-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to consolidate your technology operations?"
        description="Book a technical consultation with an Elvtera specialist. We will review your current systems, software requirements, and infrastructure goals."
        buttonLabel="Talk to Elvtera"
        buttonHref="/contact"
      />
    </>
  );
}
