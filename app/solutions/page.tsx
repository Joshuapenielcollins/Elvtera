import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { services, getService } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Solutions - Outcome-Focused Technology Programs",
  description:
    "ELVTERA solutions map business problems to the right combination of systems: operational backbone, revenue engine, intelligent automation, digital channels and reliable infrastructure.",
  path: "/solutions",
});

/**
 * Solutions are outcome-level groupings of our services - the way buyers
 * actually think ("we need to stop losing leads"), mapped to the service
 * combinations that solve it.
 */
const solutionAreas = [
  {
    icon: "Boxes",
    title: "The Operational Backbone",
    problem: "“Our numbers never agree, and everything depends on spreadsheets.”",
    description:
      "A single system of record for finance, inventory, projects and people - implemented around your real processes and connected to everything else you run.",
    serviceSlugs: ["erp-solutions", "system-integration", "business-automation"],
  },
  {
    icon: "TrendingUp",
    title: "The Revenue Engine",
    problem: "“Leads slip, follow-up depends on memory, and forecasting is gut feel.”",
    description:
      "A connected sales and service operation: CRM at the center, every channel feeding it, automation doing the chasing so your team does the closing.",
    serviceSlugs: ["crm-solutions", "ai-automation", "website-development"],
  },
  {
    icon: "BrainCircuit",
    title: "Intelligent Automation",
    problem: "“Skilled people spend their days on work a system should do.”",
    description:
      "Workflow automation plus AI voice, chat and WhatsApp agents - deployed where they measurably save hours, with clean handover to humans everywhere else.",
    serviceSlugs: ["business-automation", "ai-automation", "system-integration"],
  },
  {
    icon: "Globe",
    title: "Digital Channels",
    problem: "“Our website and store don't reflect the company we've become.”",
    description:
      "Enterprise websites, e-commerce and mobile applications engineered for speed, search visibility and conversion - and wired into your back office.",
    serviceSlugs: ["website-development", "mobile-apps", "crm-solutions"],
  },
  {
    icon: "Cloud",
    title: "Reliable Foundations",
    problem: "“We're one server failure away from a very bad week.”",
    description:
      "Cloud architecture, security, backups and monitoring under a managed agreement - the boring excellence business-critical systems deserve.",
    serviceSlugs: ["cloud-solutions", "maintenance-support", "software-development"],
  },
  {
    icon: "PenTool",
    title: "Clarity Before Commitment",
    problem: "“We know we need to modernize - we don't know where to start.”",
    description:
      "Independent consulting: roadmaps, platform selection and design work that de-risks the big decisions before serious money moves.",
    serviceSlugs: ["ui-ux-design", "software-development", "erp-solutions"],
  },
] as const;

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Start from the problem. We'll bring the system."
        description="Nobody wakes up wanting an ERP. They wake up wanting month-end to take three days, leads to stop slipping and growth to stop requiring more headcount. Our solutions map those outcomes to the right combination of services."
        breadcrumbs={[{ label: "Solutions", href: "/solutions" }]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            {solutionAreas.map((area, index) => (
              <Reveal key={area.title} delay={(index % 2) * 0.07}>
                <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex text-secondary shrink-0">
                      <Icon name={area.icon} className="size-7" />
                    </span>
                    <h2 className="text-xl font-bold text-primary">{area.title}</h2>
                  </div>
                  <p className="mt-5 border-l-2 border-accent pl-4 text-sm font-medium italic text-slate-500">
                    {area.problem}
                  </p>
                  <p className="mt-4 flex-1 leading-relaxed text-slate-600">
                    {area.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                    {area.serviceSlugs.map((slug) => {
                      const service = getService(slug);
                      if (!service) return null;
                      return (
                        <li key={slug}>
                          <Link
                            href={`/services/${slug}`}
                            className="inline-flex items-center gap-1.5 rounded-full bg-surface px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-secondary-soft hover:text-secondary"
                          >
                            {service.shortName}
                            <ArrowRight className="size-3" aria-hidden="true" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How solutions come together */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="One Partner, One Architecture"
            title="Why buying the combination beats buying the pieces"
            align="center"
            description="When the website, CRM, ERP and automation come from different vendors, the gaps between them become your staff's job. We design the pieces to fit - one architecture, one accountable team, one number to call."
          />
        </div>
      </section>

      <CtaSection
        title="Describe the outcome. We'll design the system."
        description="Bring us the problem in plain business language - lost leads, slow month-end, drowning support desk. A consultant will map it to an architecture and an honest estimate."
      />
    </>
  );
}
