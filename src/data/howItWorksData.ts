export const TYPICAL_TIMELINE_WEEKS = "12 Weeks (First 90 Days)";

export interface HowItWorksStage {
  stageNumber: string;
  title: string;
  subtitle: string;
  timeframe: string;
  summary: string;
  whatWeDeliver: string[];
  whatTheClientDoes: string[];
}

export const howItWorksStages: HowItWorksStage[] = [
  {
    stageNumber: "01",
    title: "Buyer Mapping & ICP Matrix",
    subtitle: "Setting strict targeting boundaries",
    timeframe: "Days 1 – 4",
    summary:
      "We unpack your historic deals, highest-margin accounts, and decision-maker roles to create your strict Ideal Customer Profile matrix.",
    whatWeDeliver: [
      "Documented ICP qualification rules",
      "Intent signal taxonomy and identification parameters",
      "Competitor and market differentiation angles",
    ],
    whatTheClientDoes: [
      "90-minute initial intake interview",
      "Provide historical customer success data and deal history",
      "Sign off on final targeting parameters",
    ],
  },
  {
    stageNumber: "02",
    title: "Infrastructure & Intent Sourcing",
    subtitle: "Clean deliverability and live buying signals",
    timeframe: "Days 5 – 10",
    summary:
      "We build secondary outbound domain infrastructure with SPF/DKIM/DMARC authentication and connect live intent filters to identify companies actively hiring or expanding.",
    whatWeDeliver: [
      "Dedicated outbound domains and verified DNS records",
      "Inbox warm-up and technical reputation monitoring",
      "Initial verified cohort of intent-active companies",
    ],
    whatTheClientDoes: [
      "Confirm calendar availability integration",
      "Provide sales software access if integrating into your existing stack",
    ],
  },
  {
    stageNumber: "03",
    title: "Multi-Channel Deployment",
    subtitle: "Reaching decision makers directly",
    timeframe: "Days 11 – 20",
    summary:
      "We deploy tailored, direct messaging across verified channels, ensuring high inbox placement and executive visibility.",
    whatWeDeliver: [
      "Multi-channel sequence execution",
      "Real-time deliverability and bounce rate tracking",
      "Initial reply sentiment categorization",
    ],
    whatTheClientDoes: [
      "Review and approve sequence copy guidelines",
      "Keep calendar availability up to date",
    ],
  },
  {
    stageNumber: "04",
    title: "Reply Qualification & Booking",
    subtitle: "Screening every response before scheduling",
    timeframe: "Days 21 – 60",
    summary:
      "Our team inspects every reply. We filter out unqualified inquiries and place only verified decision-makers directly on your calendar with full context notes.",
    whatWeDeliver: [
      "Manual reply qualification against budget and authority rules",
      "Direct calendar appointment booking with prospect briefing notes",
      "Weekly campaign analytics and conversion debriefs",
    ],
    whatTheClientDoes: [
      "Attend and lead discovery conversations with booked prospects",
      "Provide feedback on lead quality after initial calls",
    ],
  },
  {
    stageNumber: "05",
    title: "Continuous Calibration & Scale",
    subtitle: "Compounding targeting accuracy",
    timeframe: "Days 61 – 90+",
    summary:
      "Objections and conversion cues feed directly back into our data sourcing filters, tightening targeting and scaling call volume toward the 20+ monthly target.",
    whatWeDeliver: [
      "Refined messaging sequences based on closed-won signals",
      "Expanded intent cohorts and lookalike verification",
      "Comprehensive 90-day performance audit and ongoing scaling blueprint",
    ],
    whatTheClientDoes: [
      "Close qualified sales pipeline opportunities",
      "Share deal outcome data to optimize downstream qualification",
    ],
  },
];
