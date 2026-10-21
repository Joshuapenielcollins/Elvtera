import {
  BookingNotification,
  FitCriteria,
  HeroCheckLine,
  ProblemStatement,
  ProcessStep,
  SolutionItem,
  SystemLoopNode,
  FAQItem
} from '../types';

export const heroContent = {
  headline: "We only contact people who are already looking for what you sell.",
  subheadline:
    "Elvtera tracks real buying signals across social and the wider internet, and reaches out only to businesses that match your ideal customer and have shown they need you now. Qualified calls land on your calendar. No ad spend.",
  ctaPilotText: "Apply for a No-Risk Pilot",
  ctaBookText: "Book a Call",
  checkLines: [
    { text: "Every contact is picked from a real signal." },
    { text: "You approve every message." },
    { text: "We show you real prospects before you commit." },
  ] as HeroCheckLine[],
  footnote:
    "Target: 25+ qualified calls a month within 30 days. Dependent on offer and market.",
};

export const sampleBookingNotifications: BookingNotification[] = [
  {
    id: "bk-1",
    companyName: "Logistics Fleet Co.",
    title: "Operations Director",
    dealValue: "$18,500 ACV",
    channel: "Multi-channel intent",
    timeAgo: "4m ago",
    status: "Confirmed on Calendar",
  },
  {
    id: "bk-2",
    companyName: "Apex Cloud Services",
    title: "Head of Infrastructure",
    dealValue: "$24,000 ACV",
    channel: "Direct verified reply",
    timeAgo: "12m ago",
    status: "Confirmed on Calendar",
  },
  {
    id: "bk-3",
    companyName: "Beacon Health Group",
    title: "Managing Partner",
    dealValue: "$15,000 ACV",
    channel: "Intent match sequence",
    timeAgo: "23m ago",
    status: "Confirmed on Calendar",
  },
  {
    id: "bk-4",
    companyName: "Vanguard Tech Staffing",
    title: "VP of Talent Operations",
    dealValue: "$32,000 ACV",
    channel: "Targeted outreach",
    timeAgo: "35m ago",
    status: "Confirmed on Calendar",
  },
];

export const problemSectionContent = {
  eyebrow: "The Problem",
  title: "Cold lists waste your time.",
  statements: [
    {
      title: "Scraped directories are stale before you buy them.",
      description:
        "Generic database vendors sell the same names to thousands of competitors. People are tired of identical pitches for problems they do not have.",
    },
    {
      title: "High volume without intent damages domain reputation.",
      description:
        "Blasting thousands of unfiltered inboxes lands your domain in spam folders and burns your brand with prospects who will never buy.",
    },
    {
      title: "We start with who needs you right now.",
      description:
        "Instead of broad guessing, our outbound system tracks active signals and filters against your ideal customer before sending a single message.",
    },
  ] as ProblemStatement[],
};

export const solutionsGridContent: SolutionItem[] = [
  {
    number: "01",
    title: "Client Acquisition",
    slug: "client-acquisition",
    tagline: "Our Flagship System",
    description:
      "A complete done-for-you outbound system. We find businesses showing real intent to buy, filter them against your ideal customer, reach them across multiple channels, qualify every reply, and place qualified calls directly onto your calendar.",
    deliverables: [
      "Real-time intent sourcing and verification",
      "Multi-channel outreach execution",
      "Rigorous reply qualification",
      "Calendar booking and demo support options",
      "Target: 25+ qualified calls a month within 30 days",
    ],
  },
  {
    number: "02",
    title: "Business Systems",
    slug: "business-systems",
    tagline: "Infrastructure for Conversion",
    description:
      "For teams that lack a clean sales pipeline. We build lead capture architecture, instant speed-to-lead routing, and automated follow-up systems. If you already have existing sales tools, we work directly inside your current setup.",
    deliverables: [
      "Custom pipeline architecture and lead routing",
      "Instant speed-to-lead automated routing",
      "Multi-touch follow-up workflows",
      "Pipeline stage tracking and alerts",
      "Full integration with your existing team workflows",
    ],
  },
  {
    number: "03",
    title: "Launch",
    slug: "launch",
    tagline: "From Idea to Paying Clients",
    description:
      "For founders with a high-value consulting or service business idea. We guide you from positioning and offer design to a high-converting website, sales pipeline setup, and your first outbound sales campaign.",
    deliverables: [
      "Offer positioning and ideal buyer definition",
      "High-converting B2B website build",
      "Complete sales pipeline and follow-up setup",
      "First outbound acquisition campaign",
      "End-to-end guidance to initial customers",
    ],
  },
];

export const processStepsContent: ProcessStep[] = [
  {
    step: 1,
    title: "Map who you sell to",
    subtitle: "Define precise buyer parameters",
    description:
      "We unpack your best past deals, profit margins, decision-maker job roles, and specific criteria that make a business ready to buy.",
    actionText: "Creates your strict Ideal Customer Profile matrix.",
    visualType: "signal",
  },
  {
    step: 2,
    title: "Find people showing intent",
    subtitle: "Identify active buying signals",
    description:
      "We scan for companies actively searching for your service, hiring for relevant positions, or expanding budgets, rather than relying on stale directories.",
    actionText: "Filters out inactive prospects before outreach begins.",
    visualType: "narrowing",
  },
  {
    step: 3,
    title: "Reach out across multiple channels",
    subtitle: "Direct, personal, and coordinated",
    description:
      "We craft concrete, non-salesy messaging and connect across multiple channels so your message is seen and respected by executives.",
    actionText: "Sends coordinated communications that cut through noise.",
    visualType: "message",
  },
  {
    step: 4,
    title: "Qualify every reply",
    subtitle: "No unqualified calls on your time",
    description:
      "Our team reviews each response against budget, timeline, and authority requirements. Unqualified or tire-kicker leads are filtered out immediately.",
    actionText: "Only genuinely qualified prospects move to the next stage.",
    visualType: "narrowing",
  },
  {
    step: 5,
    title: "You take the calls",
    subtitle: "Show up and close",
    description:
      "Qualified buyers appear directly on your calendar with full briefing notes on their business situation and needs.",
    actionText: "Your sales team focuses 100% on closing conversations.",
    visualType: "calendar",
  },
];

export const fitCriteriaContent: FitCriteria = {
  fit: [
    "Proven offer with verified client satisfaction",
    "Deal value worth the effort ($5,000+ average contract)",
    "A market large enough to keep outreach fresh",
    "Capacity to handle 20+ qualified sales calls a month",
    "Readiness to commit to a focused 90-day outbound campaign",
  ],
  notFit: [
    "Untested or unvalidated business offers",
    "Very low-ticket commodities or consumer products",
    "No internal sales process or closer in place",
    "Only needing one or two casual leads a month",
    "Expecting overnight miracles or results within one week",
  ],
};

export const systemLoopContent: SystemLoopNode[] = [
  {
    title: "1. Find",
    subtitle: "Track verified intent signals",
    description: "Identify companies exhibiting genuine buying behavior.",
  },
  {
    title: "2. Contact",
    subtitle: "Multi-channel direct outreach",
    description: "Deploy personalized, concrete messages directly to decision makers.",
  },
  {
    title: "3. Learn",
    subtitle: "Analyze reply dynamics",
    description: "Review objections, positive response rates, and market cues daily.",
  },
  {
    title: "4. Refine",
    subtitle: "Tighten targeting parameters",
    description: "Funnel feedback back into data sourcing to sharpen qualification.",
  },
];

export const pilotStripContent = {
  eyebrow: "Limited Availability",
  title: "Test our system with a structured, no-risk pilot.",
  description:
    "We run a dedicated outbound test sprint to validate your intent signals, outbound messaging, and calendar conversion before long-term commitments.",
  ctaText: "Apply for a No-Risk Pilot",
  href: "/#apply",
};

export const homeFaqContent: FAQItem[] = [
  {
    question: "How fast can we launch?",
    answer:
      "Most campaigns launch within 10 to 14 business days. That window covers buyer mapping, intent signal configuration, domain infrastructure setup, and outreach copy review.",
  },
  {
    question: "How many calls a month can we expect?",
    answer:
      "We pace call volume according to your team's handling capacity within 90 days. Volume is calibrated based on your closers' schedules, offer strength, total addressable market size, and market demand.",
  },
  {
    question: "Which channels do you use?",
    answer:
      "We run coordinated multi-channel outreach. We reach decision-makers across verified business email and direct executive networks, focusing strictly on where your prospective buyers are most active and responsive.",
  },
  {
    question: "Do I need complex sales software before starting?",
    answer:
      "No. If you already use existing sales software, we connect directly into your current setup. If you have nothing in place, we set up your complete lead capture, pipeline stages, and follow-up automations for you.",
  },
  {
    question: "Who takes the calls?",
    answer:
      "Your team takes the sales calls. We qualify the prospects, confirm attendance, and place them directly on your calendar. If requested, we can also provide demo support to help refine your presentation and closing rates.",
  },
  {
    question: "How is this different from buying a list?",
    answer:
      "Buying a static list gives you stale, scraped contact details of people who are not looking to buy. We identify active buying signals, verify contact details, conduct real multi-channel outreach, qualify replies manually, and book only prospects who confirm interest.",
  },
  {
    question: "Does my business qualify?",
    answer:
      "We work with B2B businesses that have a proven service or consulting offer, an average deal size worth the effort (typically $5,000+), and capacity to handle at least 20 qualified conversations a month.",
  },
];

export const finalCTAContent = {
  headline: "Ready to fill your calendar with the right people?",
  subheadline:
    "Stop wasting months on cold lists and unqualified replies. Let us build your predictable outbound acquisition engine.",
  primaryButtonText: "Apply for a No-Risk Pilot",
  secondaryButtonText: "Book an Intro Call",
  calendlyUrl: "#book",
};
