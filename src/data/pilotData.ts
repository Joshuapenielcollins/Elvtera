import { FAQItem, PilotTimelinePhase } from '../types';

export const PILOT_LENGTH = "30 Days";

export const WHAT_YOU_GET: string[] = [
  "Custom Ideal Customer Profile and intent signal framework",
  "Dedicated outbound domains and multi-channel technical setup",
  "Tailored copy sequences tested across real market cohorts",
  "Full reply monitoring, objection handling, and qualification",
  "Qualified sales calls placed directly on your calendar",
  "Weekly live briefing notes and full campaign transparency report",
];

export const CONDITIONS: string[] = [
  "You have a proven offer with established case results or satisfied clients",
  "Average deal size is at least $5,000",
  "Your team commits to responding to booked prospects promptly",
  "You provide timely feedback on lead qualification criteria during the first 10 days",
  "No long-term contracts required beyond the initial pilot evaluation window",
];

export const WHO_ITS_FOR: string[] = [
  "B2B service providers and consultancies ready to scale outreach",
  "Agencies seeking a predictable calendar of high-value appointments",
  "SaaS and technology companies with clear target buyer profiles",
  "Founders and sales leaders who want outbound handled end to end",
];

export const WHAT_WE_NEED_FROM_YOU: string[] = [
  "90-minute onboarding intake on your historical wins and target personas",
  "Access to your calendar scheduling link for appointment placement",
  "Quick review and approval of outbound messaging drafts",
  "Timely attendance on all booked prospect discovery calls",
];

export const pilotTimeline: PilotTimelinePhase[] = [
  {
    days: "Days 1 – 5",
    title: "Intelligence & Technical Infrastructure",
    description:
      "We unpack your buyer criteria, build your intent signal monitoring filters, configure secondary outbound domains, and implement strict deliverability authentication.",
    milestones: [
      "ICP qualification matrix approved",
      "Domain and inbox configuration completed",
      "Initial batch of intent-matched companies identified",
    ],
  },
  {
    days: "Days 6 – 12",
    title: "Sequence Deployment & First Contact",
    description:
      "Outbound sequences launch across verified decision-maker channels. We monitor initial open rates, response sentiment, and deliverability metrics closely.",
    milestones: [
      "Multi-channel sequences deployed",
      "Real-time tracking of buyer responses",
      "Deliverability monitoring and initial copy tuning",
    ],
  },
  {
    days: "Days 13 – 22",
    title: "Reply Qualification & Calendar Bookings",
    description:
      "Responses are filtered against your qualification rules. We handle inquiries, confirm availability, and put verified sales conversations directly onto your calendar.",
    milestones: [
      "First waves of qualified calls booked",
      "Direct calendar sync with full prospect context",
      "Weekly performance debrief and qualification adjustments",
    ],
  },
  {
    days: "Days 23 – 30",
    title: "Campaign Audit & Expansion Blueprint",
    description:
      "We review conversion rates across each channel and intent trigger. You get complete data on what worked, cost per qualified conversation, and a scaling blueprint.",
    milestones: [
      "Full 30-day performance data report delivered",
      "Conversion analysis and channel attribution",
      "Decision on long-term campaign rollout",
    ],
  },
];

export const pilotFaqs: FAQItem[] = [
  {
    question: "What makes this a 'no-risk' pilot?",
    answer:
      "You are not locked into long-term retainers. The pilot runs for a clean 30-day window so you can evaluate the quality of intent sourcing, outbound execution, and booked calls with complete visibility.",
  },
  {
    question: "Do you guarantee a specific number of calls in the pilot?",
    answer:
      "No. We never guarantee call counts because response rates depend on your offer validation, pricing, and addressable market. We present a clear target of 20+ monthly calls within 90 days for full campaigns, and use the 30-day pilot to establish your real conversion baseline.",
  },
  {
    question: "What happens after the pilot ends?",
    answer:
      "If the pilot proves the model and delivers qualified calls, we review options to continue running and expanding your outbound acquisition on an ongoing monthly basis. If not, you keep all domain assets, copy, and intent research with no ongoing obligation.",
  },
  {
    question: "How much time is required from my internal team?",
    answer:
      "Very little. We require approximately 90 minutes for the kickoff briefing and copy sign-off. After that, your only job is showing up to the qualified calls booked on your calendar.",
  },
];

export const dealValueOptions = [
  "$1,000 – $3,000",
  "$3,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
];

export const callCapacityOptions = [
  "10 – 20 calls / month",
  "20 – 35 calls / month",
  "35 – 50 calls / month",
  "50+ calls / month",
];
