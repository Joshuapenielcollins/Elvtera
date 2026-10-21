import { FAQItem } from '../types';

export interface WhichOneFitsYouOption {
  id: string;
  situation: string;
  recommendationTitle: string;
  recommendationSlug: string;
  explanation: string;
}

export const solutionsHubContent = {
  eyebrow: "Our Focus",
  title: "Three disciplined solutions. Nothing else.",
  subtitle:
    "We do not build custom software or handle generic IT. We engineer outbound client acquisition and the conversion infrastructure required to turn interest into closed revenue.",
  whichOneFitsYou: [
    {
      id: "opt-1",
      situation: "You have a validated offer and sales team, but need a steady flow of qualified prospect calls.",
      recommendationTitle: "Client Acquisition (Flagship)",
      recommendationSlug: "/solutions/client-acquisition",
      explanation: "Our done-for-you outbound system identifies active intent, conducts multi-channel outreach, qualifies replies, and places ready buyers directly on your calendar.",
    },
    {
      id: "opt-2",
      situation: "You are generating inbound or outbound interest, but leads slip through cracks due to poor follow-up or lack of a clear sales pipeline.",
      recommendationTitle: "Business Systems",
      recommendationSlug: "/solutions/business-systems",
      explanation: "We implement sales pipeline tracking, instant speed-to-lead routing, and automated multi-channel follow-up inside your existing tools or our turnkey setup.",
    },
    {
      id: "opt-3",
      situation: "You have an idea for a high-value consulting or service company and need to reach your first paying clients.",
      recommendationTitle: "Launch System",
      recommendationSlug: "/solutions/launch",
      explanation: "We take you from positioning and offer structure to a high-converting website, automated sales pipeline, and your initial outbound campaign.",
    },
  ] as WhichOneFitsYouOption[],
};

export interface IntentSignalItem {
  id: string;
  company: string;
  signalType: 'Strong' | 'Medium';
  trigger: string;
  detectionSource: string;
  qualificationAction: string;
}

export const clientAcquisitionContent = {
  hero: {
    eyebrow: "Flagship Outbound Acquisition",
    title: "An outbound system that puts qualified buyers on your calendar.",
    subtitle:
      "We find businesses displaying real intent to purchase, filter them against your ideal customer, reach them across multiple channels, qualify every reply, and book them directly into your calendar. No ad spend required.",
    footnote:
      "Target: 25+ qualified calls a month within 30 days. Dependent on offer validation and market size.",
  },
  problem: {
    title: "Why conventional cold outreach fails.",
    points: [
      "Buying static email lists results in generic spam sent to decision-makers who have no active need or budget.",
      "Outreach without strict qualification floods your calendar with tire-kickers and low-ticket inquiries that waste closing capacity.",
      "Blasting identical copy burns domain deliverability and harms your corporate reputation across the industry.",
    ],
  },
  intentSignals: {
    title: "How intent sourcing works.",
    description:
      "Instead of guessing, we track real-time behavioral signals that show a company is actively solving the exact problem you address.",
    signalsList: [
      {
        id: "sig-1",
        company: "Apex Supply Chain Partners",
        signalType: "Strong",
        trigger: "Hiring 3 Senior Operations Directors & Opening 2 Logistics Facilities",
        detectionSource: "Executive hiring velocity and operational expansion cues",
        qualificationAction: "Prioritized in first outreach batch with custom operational messaging",
      },
      {
        id: "sig-2",
        company: "Vanguard Wealth Systems",
        signalType: "Strong",
        trigger: "Technology Migration Notice & Infrastructure Modernization Budget",
        detectionSource: "Verified vendor transitions and public procurement filings",
        qualificationAction: "Matched against high-ticket buyer criteria and routed to sequence",
      },
      {
        id: "sig-3",
        company: "Crestview Media Holdings",
        signalType: "Medium",
        trigger: "Quarterly Revenue Growth Report & Sales Team Restructuring",
        detectionSource: "Financial performance updates and organizational chart changes",
        qualificationAction: "Enriched with decision-maker contact details and queued for review",
      },
      {
        id: "sig-4",
        company: "Beacon Health Networks",
        signalType: "Strong",
        trigger: "Leadership Shift: New Chief Operating Officer appointed",
        detectionSource: "Executive role transition alerts and department mandate reset",
        qualificationAction: "Immediate direct communication sent referencing strategic priorities",
      },
    ] as IntentSignalItem[],
  },
  whatIsIncluded: [
    {
      title: "Lead Sourcing from Intent",
      description: "Identification of companies demonstrating genuine buying signals, filtered against your exact ideal customer profile.",
    },
    {
      title: "Multi-Channel Outreach",
      description: "Direct communications deployed across verified decision-maker touchpoints without reliance on single channels.",
    },
    {
      title: "Rigorous Reply Qualification",
      description: "Every response is manually evaluated for authority, budget alignment, and timeline before booking.",
    },
    {
      title: "Qualified Calls on Your Calendar",
      description: "Confirmed appointments booked directly onto your calendar with comprehensive discovery context notes.",
    },
    {
      title: "Demo & Pitch Support",
      description: "Optional tactical guidance on presentation structuring and offer framing to maximize discovery-to-close ratios.",
    },
    {
      title: "Transparent Weekly Reporting",
      description: "Full visibility into response metrics, sentiment trends, deliverability health, and pipeline analytics.",
    },
  ],
  fitCriteria: {
    fit: [
      "Proven service or consulting offer with existing happy clients",
      "Average deal size of $5,000+ to justify outbound investment",
      "Total addressable market large enough to sustain targeted outreach",
      "Internal sales capacity to handle qualified conversations paced for your team",
      "Readiness to commit to a focused 90-day campaign",
    ],
    notFit: [
      "Untested offers or unvalidated product concepts",
      "Low-ticket consumer goods or transactional software under $50/mo",
      "No internal salesperson or founder available to take discovery calls",
      "Teams wanting immediate results within seven days",
    ],
  },
  faqs: [
    {
      question: "Do you guarantee 20 calls a month?",
      answer: "No. We present targeted qualified calls within 90 days as a concrete operational benchmark paced to your team capacity. Outbound response rates depend on offer validation, market competitiveness, and deal sizing. We never make false guarantees.",
    },
    {
      question: "What channels do you use for outreach?",
      answer: "We deploy multi-channel outreach. We reach verified executives across professional email and direct professional executive networks, prioritizing the channels your prospective buyers actively inspect.",
    },
    {
      question: "Who attends the booked discovery calls?",
      answer: "Your team takes the calls. We verify intent, qualify the requirements, and slot them on your calendar. If desired, we also provide demo coaching to strengthen conversion.",
    },
  ] as FAQItem[],
};

export const businessSystemsContent = {
  hero: {
    eyebrow: "Conversion Infrastructure",
    title: "Fix the leaks in your pipeline. Never lose a lead to slow follow-up.",
    subtitle:
      "For businesses that lack a disciplined sales workflow. We configure automated sales pipelines, speed-to-lead mechanics, and automated qualification workflows tailored to your sales process.",
  },
  whyLeadsGoCold: [
    {
      title: "Slow Speed-to-Lead",
      stat: "78% of buyers purchase from the first company that responds.",
      explanation: "When an inquiry waits hours or days for a manual email, intent cools down and competitors step in.",
    },
    {
      title: "Broken Follow-Up Sequences",
      stat: "80% of sales require 5 follow-up touches.",
      explanation: "Most sales reps give up after one or two unanswered attempts. Opportunities vanish into an untracked spreadsheet.",
    },
    {
      title: "Untracked Sales Pipeline",
      stat: "Untracked pipeline stages cost deals.",
      explanation: "Without clear pipeline milestones and automated task notifications, reps forget who needs a proposal or follow-up conversation.",
    },
  ],
  speedToLeadFlow: [
    { step: "01", label: "Lead Inbound / Intent Match", note: "Prospect requests details or confirms outbound interest" },
    { step: "02", label: "Instant Automated Contact (<60s)", note: "Direct message or email delivers exact requested information" },
    { step: "03", label: "Multi-Touch Persistence", note: "Automated logic pauses as soon as the prospect replies" },
    { step: "04", label: "Direct Calendar Booking", note: "Qualified meeting secured with zero manual friction" },
  ],
  pipelineFlexibility: {
    title: "We work inside your stack, or build it fresh.",
    description:
      "If you already use sales software like HubSpot, Salesforce, Pipedrive, or Close, we configure automations directly inside your existing setup. If you do not have one, we deploy a turnkey sales pipeline workspace tailored to your exact sales process.",
  },
  whatIsIncluded: [
    { title: "Custom Pipeline Stages", description: "Clear stages that reflect your exact deal cycle from inquiry to signed contract." },
    { title: "Speed-to-Lead Automation", description: "Instant notification routing and prompt prospect engagement within sixty seconds." },
    { title: "Multi-Channel Follow-Up", description: "Automated email and notification workflows that stop instantly when a reply arrives." },
    { title: "Calendar Booking Integration", description: "Direct calendar synchronization that eliminates back-and-forth scheduling delays." },
    { title: "Pipeline Analytics & Alerts", description: "Real-time alerts for stalled deals and clear conversion reporting across each pipeline stage." },
  ],
  faqs: [
    {
      question: "Can you build this inside our existing sales tools?",
      answer: "Yes. If your company already uses a sales system, we work directly inside it. We optimize your pipelines, build the speed-to-lead triggers, and connect follow-up sequences without disrupting current records.",
    },
    {
      question: "What if we don't have any sales software right now?",
      answer: "We deploy and configure a complete sales pipeline setup for your business. You get clean pipeline stages, automated reminders, and calendar booking configured from scratch.",
    },
    {
      question: "How long does a Business Systems setup take?",
      answer: "A standard setup typically takes between 7 to 10 business days to build, test, and hand over with team training.",
    },
  ] as FAQItem[],
};

export const launchContent = {
  hero: {
    eyebrow: "For First-Time Founders",
    title: "From business idea to your first paying clients.",
    subtitle:
      "A guided, end-to-end partner for founders launching high-value consulting and service businesses. We build your positioning, high-converting website, sales pipeline, and initial outbound acquisition campaign.",
  },
  roadmap: [
    {
      stage: "01",
      title: "Positioning & Offer Architecture",
      timing: "Week 1",
      summary: "Define your ideal business buyer, package your deliverables, and price your service to support healthy margins.",
      deliverable: "Documented ICP & Core Offer Blueprint",
    },
    {
      stage: "02",
      title: "High-Converting Website",
      timing: "Week 2",
      summary: "Build a modern, conversion-focused B2B website that establishes credibility and guides visitors to schedule discovery calls.",
      deliverable: "Live Commercial Website",
    },
    {
      stage: "03",
      title: "Sales Pipeline & Operations Stack",
      timing: "Week 3",
      summary: "Implement your calendar booking engine, sales pipeline stages, and automated lead notification workflows.",
      deliverable: "Operational Sales Infrastructure",
    },
    {
      stage: "04",
      title: "First Outbound Campaign",
      timing: "Week 4",
      summary: "Source verified intent prospects, deploy targeted multi-channel outreach, and qualify your first wave of discovery calls.",
      deliverable: "Active Acquisition Engine & Booked Calls",
    },
  ],
  whoItIsFor: [
    "Corporate executives and operators transitioning into independent B2B consulting",
    "Specialists and agency operators launching high-ticket service companies",
    "Founders with validated industry expertise who need commercial execution",
  ],
  whatWeHandleVsYou: {
    weHandle: [
      "Commercial offer framing and pricing structure",
      "Design and development of your conversion-led website",
      "Complete sales pipeline setup and speed-to-lead automation",
      "Intent signal sourcing and multi-channel outreach execution",
      "Reply qualification and calendar booking administration",
    ],
    youHandle: [
      "Subject matter expertise and case knowledge during onboarding",
      "Final review and approval of positioning materials",
      "Attending and closing the qualified sales conversations we book",
      "Service delivery to your new clients",
    ],
  },
  faqs: [
    {
      question: "Is this service suitable for e-commerce or SaaS products?",
      answer: "No. The Launch system is engineered specifically for consulting, advisory, and high-ticket B2B service businesses where deals are closed on discovery conversations.",
    },
    {
      question: "Do you guarantee our first client?",
      answer: "No. We do not provide false guarantees. We provide the complete commercial machinery: validated positioning, website, sales pipeline, and targeted outbound outreach to generate qualified discovery conversations.",
    },
    {
      question: "What happens after the launch campaign completes?",
      answer: "Once your initial campaign proves market validation and books discovery calls, you can transition into our ongoing Client Acquisition flagship partner service.",
    },
  ] as FAQItem[],
};
