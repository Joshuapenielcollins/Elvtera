import { ArrowRight, ShieldCheck, Wrench, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/motion/reveal";
import { HeroVisual } from "@/components/sections/hero-visual";
import { SectionHeading } from "@/components/sections/section-heading";
import { InteractiveWorkflow } from "@/components/sections/interactive-workflow";
import { StatBand } from "@/components/sections/stat-band";
import { ProcessSteps } from "@/components/sections/process-steps";
import { CtaSection } from "@/components/sections/cta-section";
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
      {/* Hero                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="overflow-hidden border-b border-line bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 pb-24 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:py-24 lg:pb-32">
          <Reveal>
            <h1 className="text-4xl font-extrabold leading-[1.06] tracking-tight text-primary sm:text-5xl lg:text-[3.6rem]">
              Transforming Businesses Through{" "}
              <span className="text-secondary">Intelligent Systems.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 lg:text-xl">
              We help companies modernize their operations with custom software,
              automation, AI, and scalable digital infrastructure.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/contact" size="lg">
                Book a Consultation
                <ArrowRight aria-hidden="true" />
              </Button>
              <Button href="/solutions" variant="outline" size="lg">
                Explore Solutions
              </Button>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-secondary" aria-hidden="true" />
                Fixed-scope, itemized proposals
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="size-4 text-secondary" aria-hidden="true" />
                Measured business outcomes
              </li>
              <li className="flex items-center gap-2">
                <Wrench className="size-4 text-secondary" aria-hidden="true" />
                Supported long after go-live
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-secondary" aria-hidden="true" />
                You own all the code and data
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.15} className="lg:pl-4">
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Industries we serve                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Industries We Serve"
              title="Deep familiarity with how your sector actually operates"
              description="Business systems fail when they ignore industry reality. We build for the specific workflows, constraints and regulations of the sectors we serve."
            />
            <Reveal delay={0.1}>
              <Button href="/industries" variant="outline">
                All Industries
                <ArrowRight aria-hidden="true" />
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.slice(0, 6).map((industry, index) => (
              <Reveal key={industry.slug} delay={index * 0.06}>
                <IndustryCard industry={industry} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Solutions overview                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="What We Deliver"
              title="Enterprise solutions for the whole operation"
              description="From the system of record at the core to the automation and channels around it - designed, built and supported by one team."
            />
            <Reveal delay={0.1}>
              <Button href="/services" variant="outline">
                All Services
                <ArrowRight aria-hidden="true" />
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.06}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Why ELVTERA                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Why ELVTERA"
            title="A technology partner built for accountability"
            align="center"
            description="We are not a marketing agency, and we are not an AI hype shop. We are engineers and consultants who take responsibility for business-critical systems."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)]">
                  <span className="inline-flex text-secondary mb-4">
                    <Icon name={item.icon} className="size-7" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Impact numbers                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
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
      {/* Featured case studies                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Featured Case Studies"
              title="Results our clients can measure"
              description="Representative engagements, anonymized by agreement - with the numbers that mattered to the businesses involved."
            />
            <Reveal delay={0.1}>
              <Button href="/case-studies" variant="outline">
                All Case Studies
                <ArrowRight aria-hidden="true" />
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Reveal key={study.slug} delay={index * 0.08}>
                <CaseStudyCard study={study} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Operations Blueprint (Interactive Workflow)                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28 text-center">
          <SectionHeading
            eyebrow="Operations Blueprint"
            title="How We Map and Automate Business Workflows"
            align="center"
            description="Explore our step-by-step systems implementation flow - from lead generation and automated CRM routing to synchronized invoicing and offsite backups."
          />
          <Reveal delay={0.1} className="mt-14">
            <InteractiveWorkflow />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Implementation process                                             */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <SectionHeading
                eyebrow="How We Work"
                title="A delivery method refined across a decade of projects"
                description="Enterprise projects fail from ambiguity, not technology. Our method removes ambiguity at every stage - you always know what is being built, why, and how it is going."
              />
              <Reveal delay={0.15} className="mt-8">
                <Button href="/about">
                  More About Our Approach
                  <ArrowRight aria-hidden="true" />
                </Button>
              </Reveal>
            </div>
            <ProcessSteps steps={deliveryProcess} />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Technology stack                                                   */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Technology Stack"
            title="Proven platforms. Modern engineering."
            align="center"
            description="We build on technology with a future - mature platforms, modern frameworks and infrastructure your next CTO will thank you for."
          />
          <Reveal delay={0.1} className="mt-14">
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {techStack.map((tech) => (
                <li
                  key={tech.name}
                  className="rounded-2xl border border-line bg-white px-5 py-4 text-center shadow-[var(--shadow-card)]"
                >
                  <p className="font-display font-bold text-primary">{tech.name}</p>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-slate-400">
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
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Client Testimonials"
            title="What clients say when the systems are live"
            align="center"
            description="Quotes are anonymized by role and industry - these clients asked to remain unnamed, and we publish attribution only with written permission."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.attribution + index} delay={index * 0.07}>
                <TestimonialCard testimonial={testimonial} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Latest insights                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Latest Insights"
              title="Practical thinking on business technology"
              description="No buzzwords, no hype cycles - guidance you can act on, written by the people who deliver the work."
            />
            <Reveal delay={0.1}>
              <Button href="/resources" variant="outline">
                All Resources
                <ArrowRight aria-hidden="true" />
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
