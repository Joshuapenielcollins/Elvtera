import { Compass, Eye, Handshake, Scale, Target, Wrench, Server, ShieldCheck, Headphones, Code2, Workflow, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About ELVTERA — Build. Operate. Secure. Support.",
  description:
    "ELVTERA is an enterprise technology services company. We build custom software, operate infrastructure, secure systems, and support customers across two dedicated verticals.",
  path: "/about",
});

const values = [
  {
    icon: Scale,
    title: "Engineering Independence",
    description:
      "We provide objective technical judgment and engineering execution, not vendor lock-in. Architectural recommendations are made based strictly on performance, security, and total cost of ownership.",
  },
  {
    icon: Handshake,
    title: "End-to-End Accountability",
    description:
      "One dedicated team owns operational outcomes from deployment through years of active stewardship. When production systems demand immediate attention, you know exactly who responds.",
  },
  {
    icon: Target,
    title: "Measured Operational Outcomes",
    description:
      "We measure success by uptime percentages, mean-time-to-resolution, ticket throughput, and engineering velocity. Every initiative is backed by clear SLAs and transparent reporting.",
  },
  {
    icon: Wrench,
    title: "Production Craftsmanship",
    description:
      "Documented architectures, tested disaster recovery playbooks, hardened access controls, and modular codebases. Enterprise reliability is built on rigorous operational habits.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ELVTERA"
        title="We build, operate, secure, and support the technology businesses depend on"
        description="ELVTERA is an enterprise technology services company engineered for businesses that need dependable operational execution. We deliver senior engineering capacity across two dedicated verticals: Infrastructure, Security & Customer Operations, and Custom Software & Automation."
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      {/* Mission & vision */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-line bg-surface p-9">
                <Compass className="size-8 text-secondary" aria-hidden="true" />
                <h2 className="mt-5 text-2xl font-extrabold text-primary">
                  Our Mission
                </h2>
                <p className="mt-4 text-base lg:text-lg leading-relaxed text-slate-600">
                  To provide businesses with reliable technical capacity and operational peace of mind — delivering hands-on systems engineering, proactive security, responsive support, and purpose-built software with transparent execution and long-term stewardship.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-line bg-surface p-9">
                <Eye className="size-8 text-secondary" aria-hidden="true" />
                <h2 className="mt-5 text-2xl font-extrabold text-primary">
                  Our Vision
                </h2>
                <p className="mt-4 text-base lg:text-lg leading-relaxed text-slate-600">
                  An operating environment where companies scale without being held back by infrastructure downtime, cybersecurity vulnerabilities, customer support backlogs, or rigid off-the-shelf software limitations.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What We Offer — Two Core Verticals */}
      <section className="bg-surface border-y border-line py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="Two Dedicated Technical Verticals"
            description="Our service model is structured around two clear operational pillars so you can engage the exact technical capacity your business requires."
            align="center"
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Vertical 1 */}
            <Reveal>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-line bg-white p-8 sm:p-10 shadow-sm">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                      Vertical 01
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-primary font-display">
                    Infrastructure, Security & Customer Operations
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Keep your technology reliable, secure, and supported with a remote team that manages infrastructure, hardens security postures, and provides technical customer support.
                  </p>

                  <div className="mt-8 space-y-4 border-t border-slate-100 pt-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-blue-50 text-blue-700 shrink-0 mt-0.5">
                        <Server className="size-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Infrastructure & Managed IT</h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Linux & Windows servers, AWS/Azure/OCI cloud topologies, databases, backup verification, and 24/7 telemetry.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 shrink-0 mt-0.5">
                        <ShieldCheck className="size-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Security Operations</h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          SIEM log aggregation, continuous threat detection, IAM/MFA governance, vulnerability remediation, and compliance readiness.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-amber-50 text-amber-700 shrink-0 mt-0.5">
                        <Headphones className="size-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Customer & Product Support</h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Dedicated remote L1/L2 technical support specialists, ticket triage, bug reproduction, and multi-channel coverage.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Button href="/infrastructure" variant="outline" size="sm">
                    Explore Vertical 01
                    <ArrowRight className="size-3.5" />
                  </Button>
                </div>
              </div>
            </Reveal>

            {/* Vertical 2 */}
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-line bg-white p-8 sm:p-10 shadow-sm">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
                      Vertical 02
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-primary font-display">
                    Custom Software & Automation
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Build purpose-built web applications and automated systems tailored to your unique operating models instead of forcing workflows into generic SaaS tools.
                  </p>

                  <div className="mt-8 space-y-4 border-t border-slate-100 pt-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-purple-50 text-purple-700 shrink-0 mt-0.5">
                        <Code2 className="size-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Custom Web Applications</h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Bespoke internal platforms, client portals, SaaS architectures, and high-performance operational dashboards.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-purple-50 text-purple-700 shrink-0 mt-0.5">
                        <Workflow className="size-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Workflow Automation</h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          End-to-end integration pipelines, n8n orchestration, webhooks, and automated document and accounting processing.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-purple-50 text-purple-700 shrink-0 mt-0.5">
                        <Wrench className="size-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">ERP & CRM Integration</h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Connecting disparate billing, warehouse, inventory, and support tools into a single coherent data backbone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Button href="/software-automation" variant="outline" size="sm">
                    Explore Vertical 02
                    <ArrowRight className="size-3.5" />
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Values"
            title="The operational standards we hold ourselves to"
            align="center"
            description="Our values guide how we communicate, engineer, and support systems daily."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.07}>
                <div className="h-full rounded-2xl border border-line bg-surface p-7 shadow-xs">
                  <value.icon className="size-7 text-secondary" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-bold text-primary font-display">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-xs lg:text-sm leading-relaxed text-slate-600">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to build, operate, secure, or support your technology?"
        description="Schedule a technical consultation with our engineering team to review your architecture, discuss support requirements, or plan your next custom build."
      />
    </>
  );
}
