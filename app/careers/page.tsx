import {
  Banknote,
  BookOpen,
  Clock,
  HeartPulse,
  Laptop,
  MapPin,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { ApplicationForm } from "@/components/forms/application-form";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Careers - Build Systems Businesses Run On",
  description:
    "Join ELVTERA E-Solutions: engineering, consulting and delivery roles building ERP, automation and enterprise software. Our culture, benefits and open positions.",
  path: "/careers",
});

const culturePoints = [
  {
    title: "Work that ships and matters",
    description:
      "Our software runs factories, clinics and supply chains. You will see your work go live and hear what it changed - not watch it die in a backlog.",
  },
  {
    title: "Seniors who still build",
    description:
      "Leads write code and run workshops. Reviews are teaching moments, architecture is argued on whiteboards, and titles don't win technical debates - evidence does.",
  },
  {
    title: "Honesty as policy",
    description:
      "We tell clients hard truths, which means nobody here is asked to oversell, pad estimates or hide problems. That culture starts internally.",
  },
  {
    title: "Sustainable pace",
    description:
      "Enterprise delivery is a marathon. We scope honestly so heroics stay rare, and when a crunch does happen, it's acknowledged and repaid.",
  },
];

const benefits = [
  { icon: Banknote, label: "Competitive salary reviewed annually" },
  { icon: Laptop, label: "Remote-first with a fully equipped setup" },
  { icon: Clock, label: "Flexible hours around agreed core time" },
  { icon: HeartPulse, label: "Private health coverage for you and family" },
  { icon: BookOpen, label: "Annual learning budget and certification support" },
  { icon: Users, label: "Twice-yearly full-team offsites" },
];

/** Open positions - kept in one place for easy updating. */
const openPositions = [
  {
    title: "Senior Full-Stack Engineer",
    type: "Full-time · Remote",
    summary:
      "TypeScript/React/Node engineer to lead builds of custom platforms and portals - someone who cares about the business problem as much as the stack.",
  },
  {
    title: "ERP Implementation Consultant",
    type: "Full-time · Remote / On-site",
    summary:
      "You have led custom enterprise software implementations end-to-end and can hold both a process-mapping workshop and a data-migration plan.",
  },
  {
    title: "Automation Engineer",
    type: "Full-time · Remote",
    summary:
      "Design and build workflow automations and integrations (n8n, APIs, Python) that quietly save clients thousands of hours a year.",
  },
  {
    title: "UI/UX Designer - Business Software",
    type: "Full-time · Remote",
    summary:
      "Design dashboards, portals and internal tools that operations people actually enjoy using. Research-driven, systems-minded.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the systems real businesses run on"
        description="Factories, clinics, fleets and firms depend on what we ship. If you want your engineering or consulting work to have visible operational consequences - and a team that values craft and honesty - you'll like it here."
        breadcrumbs={[{ label: "Careers", href: "/careers" }]}
      />

      {/* Culture */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Company Culture"
            title="What it's actually like to work here"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {culturePoints.map((point, index) => (
              <Reveal key={point.title} delay={(index % 2) * 0.07}>
                <div className="h-full rounded-2xl border border-line bg-surface p-8">
                  <h3 className="text-lg font-bold text-primary">{point.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="Benefits" title="How we look after the team" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit.label} delay={(index % 3) * 0.06}>
                <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                  <benefit.icon className="size-6 text-secondary shrink-0" aria-hidden="true" />
                  <p className="font-semibold text-primary">{benefit.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Open Positions"
            title="Roles we're hiring for now"
            description="Don't see your exact role? Strong general applications are read with the same care - tell us what you'd bring."
          />
          <div className="mt-12 space-y-4">
            {openPositions.map((position, index) => (
              <Reveal key={position.title} delay={index * 0.05}>
                <article className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)] sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-primary">
                      {position.title}
                    </h3>
                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-slate-600">
                      {position.summary}
                    </p>
                  </div>
                  <span className="flex shrink-0 items-center gap-2 rounded-full bg-surface px-4 py-2 text-xs font-semibold text-slate-600">
                    <MapPin className="size-3.5" aria-hidden="true" />
                    {position.type}
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <SectionHeading
              eyebrow="Apply"
              title="Introduce yourself"
              description="A short note beats a long formality. Tell us what you've built or delivered, and why this kind of work appeals to you. We respond to every application within two weeks."
            />
            <Reveal delay={0.1}>
              <ApplicationForm
                positions={openPositions.map((position) => position.title)}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaSection
        title="Know someone who'd fit?"
        description="We're always glad to meet engineers and consultants who care about craft. Share this page - or reach out and start the conversation yourself."
        buttonLabel="Get in Touch"
      />
    </>
  );
}
