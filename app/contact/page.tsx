import { JsonLd } from "@/components/schema";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import ContactPageClient from "./contact-client";

export const metadata = pageMetadata({
  title: "Contact & Book a Call — ELVTERA",
  description:
    "Schedule a 30-minute technical discovery session or reach out directly to our engineering and operations teams. We reply within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: `Contact ${site.name}`,
          url: `${site.url}/contact`,
          description: metadata.description as string,
        }}
      />
      <ContactPageClient />
    </>
  );
}
