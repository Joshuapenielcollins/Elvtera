import { ArrowRight, ShieldCheck, Wrench, TrendingUp, Cpu, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/motion/reveal";
import { HeroVisual } from "@/components/sections/hero-visual";
import { SectionHeading } from "@/components/sections/section-heading";
import { InteractiveWorkflow } from "@/components/sections/interactive-workflow";
import { StatBand } from "@/components/sections/stat-band";
import { ProcessSteps } from "@/components/sections/process-steps";
import { CtaSection } from "@/components/sections/cta-section";
import { LogoRow } from "@/components/sections/logo-row";
import {
  CaseStudyCard,
  IndustryCard,
  InsightCard,
  ServiceCard,
  TestimonialCard,
} from "@/components/sections/cards";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { caseStudies } from "@/content/case-studies";
import { insights, testimonials } from "@/content/insights";
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Enterprise Software, Automation & Digital Transformation",
  description:
    "ELVTERA E-Solutions engineers business systems that scale - ERP, CRM, custom software, process automation, AI agents and cloud infrastructure for operations-led companies.",
  path: "/",
});

/** Why-ELVTERA differentiators. */
const differentiators = [
  {
    icon: "SearchCheck",
    title: "We start with your operation, not our catalog",
    description:
      "Every engagement begins by mapping how your business actually works. The technology recommendation comes after we understand the problem - never before.",
  },
  {
    icon: "Scale",
    title: "Vendor-independent advice",
    description:
      "We implement many platforms and sell none of them. Our recommendation is the one we would choose with our own money, stated in writing with the trade-offs.",
  },
  {
    icon: "ClipboardList",
    title: "Fixed scope, itemized pricing",
    description:
      "Proposals are fixed against an agreed scope and itemized line by line. Changes are priced and approved before they are built - never discovered on an invoice.",
  },
  {
    icon: "TrendingUp",
    title: "Measured business outcomes",
    description:
      "We baseline hours, error rates and cycle times before we build, and report against them after. The return on every project is settled with data.",
  },
  {
    icon: "GitBranch",
    title: "You own everything we build",
    description:
      "Code, data, documentation and cloud accounts are yours. We design every handover so a competent third party could take over - that standard keeps us honest.",
  },
  {
    icon: "Wrench",
    title: "Accountable after go-live",
    description:
      "Systems are dependencies, not deliverables. Monitoring, SLAs and a named team stay behind everything we ship - for years, not weeks.",
  },
] as const;

/** Company-level delivery process shown on the home page. */
const deliveryProcess = [
  {
    title: "Discover",
    description:
      "We map your processes, systems and pain points firsthand - workshops with the people who do the work, not just the org chart.",
  },
  {
    title: "Design",
    description:
      "A documented solution architecture and a fixed, itemized proposal. You see exactly what will be built, why, and what it costs.",
  },
  {
    title: "Build",
    description:
      "Iterative delivery in two-week cycles with working software at every review - progress you can see, not status reports.",
  },
  {
    title: "Launch",
    description:
      "Data migration, role-based training and a controlled go-live with hypercare support while new habits form.",
  },
  {
    title: "Improve",
    description:
      "Monitoring, support SLAs and quarterly reviews keep systems healthy and evolving as the business grows.",
  },
];

const techStack = [
  { name: "Custom ERP Systems", category: "Operations" },
  { name: "Custom CRM Portals", category: "Sales" },
  { name: "Next.js & React", category: "Web Frontend" },
  { name: "Docker Containers", category: "DevOps" },
  { name: "n8n Orchestration", category: "Automation" },
  { name: "PostgreSQL Database", category: "Storage" },
  { name: "AWS Cloud Services", category: "Infrastructure" },
  { name: "Meta WhatsApp API", category: "Communications" },
  { name: "Python & Node.js", category: "Backend APIs" },
  { name: "Mobile Applications", category: "Cross-platform" }
];

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* Hero Section                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden border-b border-line bg-surface grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white pointer-events-none" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 pb-28 lg:grid-cols-[1.1fr_1fr] lg:px-8 lg:py-32 relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white/80 backdrop-blur-md shadow-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">ELVTERA Systems Core v2.4</span>
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.04] tracking-tight text-primary sm:text-5xl lg:text-[3.8rem] gradient-text">
              Transforming Businesses Through Intelligent Systems.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 lg:text-xl font-medium">
              We help companies modernize their operations with custom software,
              automation, AI, and scalable digital infrastructure.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/contact" size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
                Book a Consultation
                <ArrowRight aria-hidden="true" />
              </Button>
              <Button href="/solutions" variant="outline" size="lg">
                Explore Solutions
              </Button>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 text-sm text-slate-600 font-semibold border-t border-slate-200/50 pt-8 max-w-lg">
              <li className="flex items-center gap-2.5">
                <ShieldCheck className="size-4.5 text-secondary" aria-hidden="true" />
                Fixed-scope pricing
              </li>
              <li className="flex items-center gap-2.5">
                <TrendingUp className="size-4.5 text-secondary" aria-hidden="true" />
                Measured outcomes
              </li>
              <li className="flex items-center gap-2.5">
                <Wrench className="size-4.5 text-secondary" aria-hidden="true" />
                Accountable support
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldCheck className="size-4.5 text-secondary" aria-hidden="true" />
                Absolute IP ownership
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.15} className="lg:pl-6 relative">
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      {/* Trust & Credibility Partner Logo Row */}
      <LogoRow />

      {/* ------------------------------------------------------------------ */}
      {/* Bento Grid Services Overview                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white relative overflow-hidden">
        <div className="absolute left-0 top-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
            <SectionHeading
              eyebrow="What We Deliver"
              title="Enterprise solutions for the whole operation"
              description="From the system of record at the core to the automation and channels around it - designed, built and supported by one team."
            />
            <Reveal delay={0.1}>
              <Button href="/services" variant="outline" size="lg">
                All Services
                <ArrowRight aria-hidden="true" />
              </Button>
            </Reveal>
          </div>
          
          {/* Asymmetrical Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {services.slice(0, 6).map((service, index) => {
              const bentoSpan = 
                index === 0 ? "md:col-span-3" :
                index === 1 ? "md:col-span-3" :
                index === 2 ? "md:col-span-4" :
                index === 3 ? "md:col-span-2" :
                index === 4 ? "md:col-span-2" :
                "md:col-span-4";
              
              return (
                <Reveal key={service.slug} delay={index * 0.05} className={bentoSpan}>
                  <ServiceCard service={service} />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Why ELVTERA (Staggered / Asymmetrical Layout)                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-surface relative overflow-hidden border-y border-line">
        <div className="absolute right-0 top-1/4 w-[450px] h-[450px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.8fr] items-start">
            <div className="lg:sticky lg:top-28 space-y-8">
              <SectionHeading
                eyebrow="Why ELVTERA"
                title="A technology partner built for accountability"
                description="We are not a marketing agency, and we are not an AI hype shop. We are engineers and consultants who take responsibility for business-critical systems."
              />
              
              {/* Custom Monogram Emblem Graphic */}
              <div className="hidden lg:block relative w-56 h-56 border border-slate-200/80 rounded-3xl bg-white/70 backdrop-blur-md p-6 shadow-sm overflow-hidden">
                <div className="absolute inset-0 bg-radial-gradient from-secondary/5 via-transparent to-transparent" />
                <div className="relative w-full h-full flex flex-col justify-between">
                  <div className="size-12 rounded-2xl bg-primary flex items-center justify-center text-white font-display font-black text-lg shadow-md">
                    EV
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1.5">Connected Motifs</p>
                    <h4 className="text-sm font-bold text-primary">System Integrity & Scale</h4>
                    <p className="text-[10px] text-slate-500 font-semibold mt-1">Elvtera E-Solutions Group</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Asymmetrical staggered cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              {differentiators.map((item, index) => (
                <Reveal 
                  key={item.title} 
                  delay={index * 0.05}
                  className={cn(
                    "h-full",
                    index % 2 !== 0 && "sm:translate-y-8"
                  )}
                >
                  <div className="h-full rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-md p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-secondary/25 hover:shadow-[var(--shadow-card-hover)]">
                    <span className="inline-flex items-center justify-center size-12 rounded-xl bg-slate-50 text-slate-700 border border-slate-100/50 shadow-[inset_0_1px_2px_rgba(9,9,11,0.02)]">
                      <Icon name={item.icon} className="size-6" />
                    </span>
                    <h3 className="mt-6 text-lg font-bold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 font-medium">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Impact Numbers                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-secondary/15 via-transparent to-transparent blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24 relative z-10">
          <StatBand
            tone="dark"
            stats={[
              { value: 120, suffix: "+", label: "Enterprise systems delivered and in production" },
              { value: 10, label: "Industries served with dedicated practice knowledge" },
              { value: 98, suffix: "%", label: "Of support clients renew their agreements" },
              { value: 40000, suffix: "+", label: "Staff hours automated for clients every month" },
            ]}
          />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Operations Blueprint (Interactive Workflow Grid)                   */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white border-b border-line relative overflow-hidden grid-bg">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 text-center relative z-10">
          <SectionHeading
            eyebrow="Operations Blueprint"
            title="How We Map and Automate Business Workflows"
            align="center"
            description="Explore our step-by-step systems implementation flow - from lead generation and automated CRM routing to synchronized invoicing and offsite backups."
          />
          <Reveal delay={0.1} className="mt-16 bg-white/70 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-card">
            <InteractiveWorkflow />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Industries We Serve (Asymmetrical Grid)                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
            <SectionHeading
              eyebrow="Industries We Serve"
              title="Deep familiarity with how your sector actually operates"
              description="Business systems fail when they ignore industry reality. We build for the specific workflows, constraints and regulations of the sectors we serve."
            />
            <Reveal delay={0.1}>
              <Button href="/industries" variant="outline" size="lg">
                All Industries
                <ArrowRight aria-hidden="true" />
              </Button>
            </Reveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.slice(0, 6).map((industry, index) => (
              <Reveal key={industry.slug} delay={index * 0.05}>
                <IndustryCard industry={industry} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Featured Case Studies                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-surface relative border-y border-line">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
            <SectionHeading
              eyebrow="Featured Case Studies"
              title="Results our clients can measure"
              description="Representative engagements, anonymized by agreement - with the numbers that mattered to the businesses involved."
            />
            <Reveal delay={0.1}>
              <Button href="/case-studies" variant="outline" size="lg">
                All Case Studies
                <ArrowRight aria-hidden="true" />
              </Button>
            </Reveal>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Reveal key={study.slug} delay={index * 0.08}>
                <CaseStudyCard study={study} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Implementation Process                                             */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] items-start">
            <div>
              <SectionHeading
                eyebrow="How We Work"
                title="A delivery method refined across a decade of projects"
                description="Enterprise projects fail from ambiguity, not technology. Our method removes ambiguity at every stage - you always know what is being built, why, and how it is going."
              />
              <Reveal delay={0.15} className="mt-8">
                <Button href="/about" size="lg">
                  More About Our Approach
                  <ArrowRight aria-hidden="true" />
                </Button>
              </Reveal>
            </div>
            <div className="bg-surface border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-card">
              <ProcessSteps steps={deliveryProcess} />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Technology Stack                                                   */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-surface relative border-y border-line">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Technology Stack"
            title="Proven platforms. Modern engineering."
            align="center"
            description="We build on technology with a future - mature platforms, modern frameworks and infrastructure your next CTO will thank you for."
          />
          <Reveal delay={0.1} className="mt-16">
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {techStack.map((tech) => (
                <li
                  key={tech.name}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-5 text-center shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-secondary/20 hover:shadow-[var(--shadow-card-hover)] cursor-default"
                >
                  <p className="font-display font-bold text-primary text-sm">{tech.name}</p>
                  <p className="mt-1 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                    {tech.category}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Testimonials                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Client Testimonials"
            title="What clients say when the systems are live"
            align="center"
            description="Quotes are anonymized by role and industry - these clients asked to remain unnamed, and we publish attribution only with written permission."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.attribution + index} delay={index * 0.07}>
                <TestimonialCard testimonial={testimonial} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Latest Insights                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-surface relative border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
            <SectionHeading
              eyebrow="Latest Insights"
              title="Practical thinking on business technology"
              description="No buzzwords, no hype cycles - guidance you can act on, written by the people who deliver the work."
            />
            <Reveal delay={0.1}>
              <Button href="/resources" variant="outline" size="lg">
                All Resources
                <ArrowRight aria-hidden="true" />
              </Button>
            </Reveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {insights.slice(0, 3).map((insight, index) => (
              <Reveal key={insight.slug} delay={index * 0.06}>
                <InsightCard insight={insight} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CtaSection />
    </>
  );
}
