import React from 'react';
import { SEOHead } from '../components/layout/SEOHead';
import { Hero } from '../components/home/Hero';
import { Marquee } from '../components/home/Marquee';
import { Problem } from '../components/home/Problem';
import { SignalBoard } from '../components/home/SignalBoard';
import { Process } from '../components/home/Process';
import { InboxDemo } from '../components/home/InboxDemo';
import { Included, Fit } from '../components/home/Included';
import { Pilot, FAQ, CrossSell, FinalCTA } from '../components/home/Closing';
import { homeFaqContent } from '../data/homeData';
import { CONTACT_EMAIL, siteConfig } from '../data/siteConfig';

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
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  },
];

/** Home = the outbound lead-gen offer only. Business systems lives on its own page. */
export const HomePage: React.FC = () => (
  <>
    <SEOHead
      title="Elvtera | B2B Intent-Based Outreach System"
      description="We put qualified calls on your calendar. You close. Signal-based outbound that only contacts businesses showing real buying intent. No ad spend."
      canonicalPath="/"
      jsonLd={jsonLd}
    />
    <Hero />
    <Marquee />
    <Problem />
    <SignalBoard />
    <Process />
    <InboxDemo />
    <Included />
    <Fit />
    <Pilot />
    <FAQ />
    <CrossSell />
    <FinalCTA />
  </>
);
