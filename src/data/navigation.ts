import { NavItem } from '../types';

/**
 * Two services:
 *  1. Signal-based outbound (the home page)
 *  2. Business systems, websites and end-to-end setup
 */
export const navItems: NavItem[] = [
  { label: "Outbound", href: "/" },
  { label: "Business Systems", href: "/solutions/business-systems" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Who we work with", href: "/who-we-work-with" },
  { label: "Results", href: "/results", requiresProofData: true },
  { label: "Resources", href: "/resources", requiresResourceCount: 3 },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  services: [
    { label: "Signal-based outbound", href: "/" },
    { label: "Outbound in detail", href: "/solutions/client-acquisition" },
    { label: "Business systems & websites", href: "/solutions/business-systems" },
    { label: "End-to-end launch", href: "/solutions/launch" },
    { label: "All services", href: "/solutions" },
  ],
  company: [
    { label: "How it works", href: "/how-it-works" },
    { label: "Who we work with", href: "/who-we-work-with" },
      { label: "Careers", href: "/careers" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookies", href: "/cookie-policy" },
  ],
};
