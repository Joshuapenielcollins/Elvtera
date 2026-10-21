import { SiteConfig } from '../types';

export const CALENDLY_URL = "https://cal.com/elvtera-business-solutions-uwltid/30min";
export const CONTACT_EMAIL = "hello@elvtera.com";

export const siteConfig: SiteConfig = {
  brandName: "Elvtera",
  legalName: "Elvtera Business Solutions",
  tagline: "Done-for-you client acquisition partner for businesses.",
  calendlyUrl: CALENDLY_URL,
  contactEmail: CONTACT_EMAIL,
  phonePlaceholder: "+1 (555) 019-2834",
  targetCallsMonth: 25,
  targetTimelineDays: 30,
  dealValueThreshold: "$5,000+",
  brandBlue: "#0546F2",
  bgLightGrey: "#F4F5F7",
};

export const BUSINESS_TYPES: string[] = [
  "Agencies",
  "IT Services",
  "Consultancies",
  "Recruitment",
  "SaaS",
  "Training Companies",
  "Manufacturers",
  "Finance Firms",
  "Healthcare",
  "E-commerce",
];
