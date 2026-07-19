import { Compass, Eye, Handshake, Scale, Target, Wrench } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Elvtera - Engineers & Consultants",
  description:
    "ELVTERA E-Solutions: engineers and consultants who design, build and support the systems established businesses run on. Our mission, values, leadership and history.",
  path: "/about",
});

const values = [
  {
    icon: Scale,
    title: "Independence",
    description:
      "We sell judgment and engineering, not licenses. Recommendations are the ones we would act on with our own money - stated in writing, trade-offs included.",
  },
  {
    icon: Handshake,
    title: "Accountability",
    description:
      "One team owns the outcome, from discovery through years of support. When something breaks at 8 a.m. on invoice day, you know exactly who answers.",
  },
  {
    icon: Target,
    title: "Measured outcomes",
    description:
      "We baseline before we build and report after we ship. If a project can't be justified in hours, errors or revenue, we'll tell you before you spend.",
  },
  {
    icon: Wrench,
    title: "Craft",
    description:
      "Documented code, tested backups, accessible interfaces, honest estimates. Enterprise quality is a set of habits, and we keep them on unglamorous days.",
  },
];

/** Leadership team - replace placeholder bios and add photography before launch. */
const leadership = [
  {
    name: "Chief Executive Officer",
    initials: "CEO",
    focus: "Strategy & Client Partnerships",
    bio: "Two decades leading enterprise software delivery across manufacturing, distribution and healthcare - and still in the room for every major engagement kickoff.",
  },
  {
    name: "Chief Technology Officer",
    initials: "CTO",
    focus: "Architecture & Engineering",
    bio: "Systems architect behind our delivery standards: security by design, documented handovers and platforms chosen for the decade, not the demo.",
  },
  {
    name: "Head of Delivery",
    initials: "HoD",
    focus: "Programs & Implementation",
    bio: "Runs the delivery practice - the sprint cadence, the checkpoints and the discipline that keeps fixed-scope promises fixed.",
  },
  {
    name: "Head of Client Success",
    initials: "HCS",
    focus: "Support & Long-Term Value",
    bio: "Owns everything after go-live: SLAs, quarterly reviews and the 98% renewal rate we consider our most honest metric.",
  },
];

const timeline = [
  {
    year: "2017",
    title: "Founded as an engineering consultancy",
    description:
      "ELVTERA begins as a small team building custom operational software for manufacturers and distributors - and supporting it properly afterward.",
  },
  {
    year: "2019",
    title: "Custom systems practice established",
    description:
      "Repeated client demand turns custom enterprise implementation into a dedicated practice, with engineers specialized in building bespoke business systems end-to-end.",
  },
  {
    year: "2021",
    title: "Automation & integration practice",
    description:
      "We formalize what every project was already teaching us: the biggest returns live between systems. Integration and workflow automation become core services.",
  },
  {
    year: "2023",
    title: "Cloud & managed services",
    description:
      "A managed operations team takes on monitoring, security and support for client infrastructure - accountability that outlasts any single project.",
  },
  {
    year: "2025",
    title: "AI deployed as an operations tool",
    description:
      "Voice, chat and WhatsApp agents join the toolkit - grounded, measured and bounded, deployed only where they demonstrably earn their keep.",
  },
];

/** Core infrastructure and integration partners we build upon. */
const partners = [
  "AWS",
  "Meta Business",
  "OpenAI API",
  "Stripe Payments",
  "Google Cloud",
  "Twilio Messaging",
  "PostgreSQL",
  "Docker",
  "n8n Integration",
  "React & Next.js"
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ELVTERA"
        title="Engineers and consultants for the systems businesses run on"
        description="ELVTERA E-Solutions is a business technology company. We are not a marketing agency and not an AI hype shop - we design, build and stand behind the operational software that lets established businesses scale."
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
                  Our mission
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  To give operations-led businesses the systems advantage large
                  enterprises take for granted - engineered honestly, priced
                  transparently and supported for the long term.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-line bg-surface p-9">
                <Eye className="size-8 text-secondary" aria-hidden="true" />
                <h2 className="mt-5 text-2xl font-extrabold text-primary">
                  Our vision
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  A mid-market where growth is limited by ambition - not by
                  spreadsheets, retyping and systems that refuse to talk to
                  each other.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Values"
            title="The standards we hold ourselves to"
            align="center"
            description="Values only matter when they cost something. These four regularly do - and they are why clients stay."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.07}>
                <div className="h-full rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)]">
                  <value.icon className="size-7 text-accent" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership — hidden for now, restore when ready
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Leadership"
            title="The team accountable for your outcome"
            description="Leadership profiles are shown by role; full bios and photography are shared during engagement. Small firms hide their people - we simply publish carefully."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person, index) => (
              <Reveal key={person.name} delay={index * 0.07}>
                <div className="h-full rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)]">
                  <span
                    aria-hidden="true"
                    className="flex size-16 items-center justify-center rounded-2xl bg-primary font-display text-lg font-extrabold text-white"
                  >
                    {person.initials}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-primary">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-secondary">
                    {person.focus}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {person.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Our Story — hidden for now, restore when ready
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Our Story"
            title="Built practice by practice, client by client"
          />
          <ol className="mt-14 space-y-0">
            {timeline.map((entry, index) => (
              <Reveal key={entry.year} delay={index * 0.05}>
                <li className="relative flex gap-8 pb-10 last:pb-0">
                  {index < timeline.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-10 top-16 h-[calc(100%-4rem)] w-px bg-line"
                    />
                  )}
                  <span className="flex h-14 w-20 shrink-0 items-center justify-center rounded-2xl border border-line bg-white font-display font-extrabold text-secondary shadow-[var(--shadow-card)]">
                    {entry.year}
                  </span>
                  <div className="pt-2.5">
                    <h3 className="text-lg font-bold text-primary">{entry.title}</h3>
                    <p className="mt-2 max-w-2xl leading-relaxed text-slate-600">
                      {entry.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      */}

      {/* Technology partners */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Technology Partners"
            title="Certified across the platforms we implement"
            align="center"
            description="Partnership credentials matter for access and support escalation - but our advice stays independent. We recommend on fit, and we say so in writing."
          />
          <Reveal delay={0.1} className="mt-12">
            <ul className="flex flex-wrap items-center justify-center gap-3">
              {partners.map((partner) => (
                <li
                  key={partner}
                  className="rounded-full border border-line bg-surface px-6 py-3 font-display text-sm font-bold text-primary"
                >
                  {partner}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title="Work with a team that takes your operation personally."
        description="Whether you're comparing vendors or just starting to think about modernization, a conversation with us will leave you clearer - whatever you decide."
      />
    </>
  );
}
