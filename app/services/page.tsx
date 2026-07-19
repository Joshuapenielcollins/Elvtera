import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { ServiceCard } from "@/components/sections/cards";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services - ERP, CRM, Automation, Software & Cloud",
  description:
    "Explore ELVTERA's enterprise services: ERP and CRM implementation, business process automation, AI solutions, custom software, mobile apps, cloud infrastructure, system integration and ongoing support.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything an operations-led business needs - from one team"
        description="Each service stands alone, and they are designed to work together: the system of record at the core, automation and channels around it, and accountable support behind all of it."
        breadcrumbs={[{ label: "Services", href: "/services" }]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 3) * 0.06}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Not sure which service fits your situation?"
        description="That's normal - most operational problems cross service boundaries. Describe the friction, and a consultant will map it to the right combination in one conversation."
      />
    </>
  );
}
