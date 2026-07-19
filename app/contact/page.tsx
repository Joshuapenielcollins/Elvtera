import { JsonLd } from "@/components/schema";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import ContactPageClient from "./contact-client";

export const metadata = pageMetadata({
  title: "Contact ELVTERA — Let's Build Something Great",
  description:
    "Start a project with ELVTERA E-Solutions: multi-step sales qualification for AI, ERP, CRM, automation and custom software projects, or send a general enquiry. We reply within one business day.",
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
