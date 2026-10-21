export interface SiteConfig {
  brandName: string;
  legalName: string;
  tagline: string;
  calendlyUrl: string;
  contactEmail: string;
  phonePlaceholder?: string;
  targetCallsMonth: number;
  targetTimelineDays: number;
  dealValueThreshold: string;
  brandBlue: string;
  bgLightGrey: string;
}

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  dropdown?: {
    title: string;
    description: string;
    href: string;
    badge?: string;
  }[];
  requiresProofData?: boolean;
  requiresResourceCount?: number;
}

export interface HeroCheckLine {
  text: string;
}

export interface BookingNotification {
  id: string;
  companyName: string;
  title: string;
  dealValue: string;
  channel: string;
  timeAgo: string;
  status: string;
}

export interface ProblemStatement {
  title: string;
  description: string;
}

export interface SolutionItem {
  number: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  actionText: string;
  visualType: 'signal' | 'narrowing' | 'message' | 'calendar' | 'closing';
}

export interface FitCriteria {
  fit: string[];
  notFit: string[];
}

export interface SystemLoopNode {
  title: string;
  subtitle: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PilotTimelinePhase {
  days: string;
  title: string;
  description: string;
  milestones: string[];
}

export interface PilotConfig {
  pilotLength: string;
  whatYouGet: string[];
  conditions: string[];
  whoItIsFor: string[];
  timeline: PilotTimelinePhase[];
  faqs: FAQItem[];
}

export interface CaseStudyItem {
  id: string;
  clientIndustry: string;
  dealSize: string;
  qualifiedCalls: number;
  daysToResult: number;
  summary: string;
}

export interface ResourceArticle {
  id: string;
  title: string;
  category: string;
  readingTime: string;
  publishDate: string;
  summary: string;
}
