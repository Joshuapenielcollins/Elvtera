import { Compass, Eye, Handshake, Scale, Target, Wrench, Server, ShieldCheck, Headphones, Code2, Workflow, ArrowRight, Briefcase, Boxes, Cloud } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About ELVTERA — End-to-End Technology Solutions for Businesses",
  description:
    "Elvtera is an end-to-end technology solutions company. We help businesses build digital systems, develop custom software, operate IT, and secure their technology.",
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
      "One dedicated technology partner owns operational outcomes from initial build through years of active stewardship. When production systems demand immediate attention, you know exactly who responds.",
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
      "Documented architectures, tested disaster recovery runbooks, hardened access controls, and modular codebases. Enterprise reliability is built on rigorous operational habits.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About ELVTERA"
        title="We help businesses build, operate, secure, and improve their technology."
        description="Elvtera is an end-to-end technology solutions company. From business systems and custom software to IT operations and security, we provide the technology capabilities businesses need to build and grow."
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      {/* Mission & Vision */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-line bg-surface p-9">
                <Compass className="size-8 text-secondary" aria-hidden="true" />
                <h2 className="mt-5 text-2xl font-extrabold text-primary font-display">
                  Our Mission
                </h2>
                <p className="mt-4 text-base lg:text-lg leading-relaxed text-slate-600">
                  To provide businesses with a unified, dependable technology partner across their entire lifecycle — from digital setup and custom software development to cloud operations, continuous cybersecurity, and responsive technical support.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-line bg-surface p-9">
                <Eye className="size-8 text-secondary" aria-hidden="true" />
                <h2 className="mt-5 text-2xl font-extrabold text-primary font-display">
                  Our Vision
                </h2>
                <p className="mt-4 text-base lg:text-lg leading-relaxed text-slate-600">
                  An operating reality where growing businesses never suffer from vendor fragmentation, finger-pointing between developers and sysadmins, or compromised uptime. One partner from build to ongoing operations.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The Three Balanced Pillars */}
      <section className="bg-surface border-y border-line py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Core Structure"
            title="Three Equally Important Business Pillars"
            description="Our service model is structured across three balanced pillars, providing complete technology capabilities under one roof."
            align="center"
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {/* Pillar 01 */}
            <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                    Pillar 01
                  </span>
                  <Briefcase className="size-5 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary font-display">
                  Business Solutions
                </h3>
                <p className="mt-2 text-xs font-semibold text-blue-700">
                  Build and scale the systems behind your business.
                </p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  We build and improve the foundational business systems required to operate and grow: websites, GTM architecture, CRM implementations, marketing automation, and customer support desks.
                </p>
                <ul className="mt-6 space-y-2 border-t border-slate-100 pt-5 text-xs text-slate-700">
                  <li>• Business Websites & Technical SEO</li>
                  <li>• Go-To-Market & Lead Systems</li>
                  <li>• CRM Implementation & Automation</li>
                  <li>• Business Process Automation</li>
                  <li>• Customer Support & Helpdesk Systems</li>
                </ul>
              </div>
              <div className="mt-8 pt-5 border-t border-slate-100">
                <Button href="/solutions/business-solutions" variant="outline" size="sm" className="w-full">
                  Explore Business Solutions
                  <ArrowRight className="size-3.5 ml-1" />
                </Button>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
                    Pillar 02
                  </span>
                  <Code2 className="size-5 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary font-display">
                  Software Solutions
                </h3>
                <p className="mt-2 text-xs font-semibold text-purple-700">
                  Build the technology your business needs.
                </p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  We build custom software around the specific needs of a business: custom web apps, purpose-built CRM/ERP platforms, SaaS products, internal operational tools, APIs, and AI agents.
                </p>
                <ul className="mt-6 space-y-2 border-t border-slate-100 pt-5 text-xs text-slate-700">
                  <li>• Custom Software Development</li>
                  <li>• Purpose-Built CRM / ERP Engines</li>
                  <li>• Multi-Tenant SaaS Applications</li>
                  <li>• Internal Tools & Portals</li>
                  <li>• AI Applications & Autonomous Agents</li>
                </ul>
              </div>
              <div className="mt-8 pt-5 border-t border-slate-100">
                <Button href="/solutions/software-solutions" variant="outline" size="sm" className="w-full">
                  Explore Software Solutions
                  <ArrowRight className="size-3.5 ml-1" />
                </Button>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    Pillar 03
                  </span>
                  <ShieldCheck className="size-5 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary font-display">
                  IT & Security
                </h3>
                <p className="mt-2 text-xs font-semibold text-emerald-700">
                  Keep your technology running, secure, and ready to scale.
                </p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  We help businesses operate, maintain, monitor, and protect their technology: Linux/Windows administration, cloud infrastructure, SIEM cybersecurity, backups, and 24/7 technical support.
                </p>
                <ul className="mt-6 space-y-2 border-t border-slate-100 pt-5 text-xs text-slate-700">
                  <li>• IT Operations & Sysadmin</li>
                  <li>• Cloud Infrastructure (AWS/Azure/OCI)</li>
                  <li>• Centralized SIEM Log Monitoring</li>
                  <li>• Immutable Backups & Disaster Recovery</li>
                  <li>• Remote Technical & Product Support</li>
                </ul>
              </div>
              <div className="mt-8 pt-5 border-t border-slate-100">
                <Button href="/solutions/it-and-security" variant="outline" size="sm" className="w-full">
                  Explore IT & Security
                  <ArrowRight className="size-3.5 ml-1" />
                </Button>
              </div>
            </div>
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
        title="Ready to build, operate, and secure your technology?"
        description="Schedule a technical consultation with our engineering team to review your business systems, custom software roadmap, or IT operations."
        buttonLabel="Talk to Elvtera"
        buttonHref="/contact"
      />
    </>
  );
}
