import { NavItem } from '../types';

export const navItems: NavItem[] = [
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      {
        title: "Client Acquisition",
        description: "Targeted outbound system finding active intent and booking qualified calls.",
        href: "/solutions/client-acquisition",
        badge: "Flagship",
      },
      {
        title: "Business Systems",
        description: "Sales pipeline, speed-to-lead and conversion automation on your infrastructure.",
        href: "/solutions/business-systems",
      },
      {
        title: "Launch",
        description: "Idea to first paying customers for consulting and service businesses.",
        href: "/solutions/launch",
      },
    ],
  },
  {
    label: "How It Works",
    href: "/how-it-works",
  },
  {
    label: "Who We Work With",
    href: "/who-we-work-with",
  },
  {
    label: "Results",
    href: "/results",
    requiresProofData: true,
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Resources",
    href: "/resources",
    requiresResourceCount: 3,
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const footerNavigation = {
  solutions: [
    { label: "Client Acquisition (Flagship)", href: "/solutions/client-acquisition" },
    { label: "Business Systems", href: "/solutions/business-systems" },
    { label: "Launch System", href: "/solutions/launch" },
  ],
  company: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Who We Work With", href: "/who-we-work-with" },
    { label: "About Elvtera", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Frequently Asked Questions", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
};
