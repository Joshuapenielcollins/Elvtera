import React from 'react';
import { SEOHead } from '../components/layout/SEOHead';
import { Hero } from '../components/home/Hero';
import { Marquee } from '../components/home/Marquee';
import { StatsBanner } from '../components/home/StatsBanner';
import { ProblemSection } from '../components/home/ProblemSection';
import { SolutionsGrid } from '../components/home/SolutionsGrid';
import { PinnedProcess } from '../components/home/PinnedProcess';
import { FitComparison } from '../components/home/FitComparison';
import { SystemLoop } from '../components/home/SystemLoop';
import { PilotStrip } from '../components/home/PilotStrip';
import { ResultsSection } from '../components/home/ResultsSection';
import { FAQSection } from '../components/home/FAQSection';
import { FinalCTA } from '../components/home/FinalCTA';
import { homeFaqContent } from '../data/homeData';
import { CONTACT_EMAIL, siteConfig } from '../data/siteConfig';

export const HomePage: React.FC = () => {
  // Generate JSON-LD schema for Organization and FAQPage
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.legalName,
      alternateName: siteConfig.brandName,
      url: 'https://elvtera.com',
      logo: 'https://elvtera.com/elvtera-logo.png',
      description: siteConfig.tagline,
      email: CONTACT_EMAIL,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: homeFaqContent.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <>
      <SEOHead
        title="Done-For-You Client Acquisition Partner"
        description="We put qualified calls on your calendar. You close. Outbound acquisition system finding active intent with zero ad spend."
        canonicalPath="/"
        jsonLd={jsonLd}
      />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Business types marquee */}
      <Marquee />

      {/* 2.5 High-impact stats banner */}
      <StatsBanner />

      {/* 3. Problem */}
      <ProblemSection />

      {/* 4. Three solutions */}
      <SolutionsGrid />

      {/* 5. Pinned process section */}
      <PinnedProcess />

      {/* 6. Who we work best with */}
      <FitComparison />

      {/* 7. The system behind it */}
      <SystemLoop />

      {/* 8. Pilot strip */}
      <PilotStrip />

      {/* 9. Results block (data-driven, hidden until real data exists) */}
      <ResultsSection />

      {/* 10. FAQ accordion */}
      <FAQSection />

      {/* 11. Final CTA band */}
      <FinalCTA />
    </>
  );
};
