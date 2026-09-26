import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/schema";
import { organizationSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

/** Unified brand typeface - modern geometric sans-serif. */
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - ${site.tagline}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "Managed IT Services",
    "IT Infrastructure Services",
    "Cloud Infrastructure Management",
    "Linux Server Management",
    "Cloud Operations",
    "Infrastructure Support",
    "Cybersecurity Services",
    "Security Operations",
    "SIEM Services",
    "Remote Customer Support",
    "Product Support Services",
    "Technical Support Services",
    "Remote IT Operations",
    "Custom Software Development",
    "Business Automation",
    "Enterprise Systems",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [{ url: "/elvtera-logo.png", alt: "Elvtera Logo" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RGQGN060R4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-RGQGN060R4');
          `}
        </Script>
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <JsonLd data={organizationSchema()} />
        {/* Keyboard users can jump straight past the navigation. */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
