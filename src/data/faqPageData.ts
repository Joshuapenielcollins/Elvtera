import { FAQItem } from '../types';

export interface FAQCategory {
  categoryId: string;
  categoryName: string;
  faqs: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    categoryId: "outbound-intent",
    categoryName: "Outbound & Intent Sourcing",
    faqs: [
      {
        question: "How do you detect buying intent without buying lists?",
        answer:
          "We track active behavioral indicators such as leadership appointments, hiring velocity in relevant departments, funding rounds, procurement filings, and technology stack shifts. This ensures we reach companies when they are actively seeking solutions.",
      },
      {
        question: "Which outreach channels do you deploy?",
        answer:
          "We deploy coordinated multi-channel outreach across professional email and direct professional executive networks. We adjust the channel mix based on where your specific prospective buyers are most active.",
      },
      {
        question: "How do you protect our corporate domain reputation?",
        answer:
          "We never send outbound campaigns from your primary corporate domain. We purchase and configure dedicated secondary domains with full SPF, DKIM, and DMARC authentication and run rigorous inbox warm-up protocols before initiating outreach.",
      },
      {
        question: "How fast can an outbound campaign launch?",
        answer:
          "Standard campaigns launch within 10 to 14 business days. This timeframe covers buyer mapping, domain infrastructure setup, DNS configuration, warm-up sequencing, and copy approval.",
      },
    ],
  },
  {
    categoryId: "qualification-booking",
    categoryName: "Qualification & Calendar Bookings",
    faqs: [
      {
        question: "How do you qualify replies before placing calls on our calendar?",
        answer:
          "Our team manually inspects every positive and neutral reply. We verify decision-maker job title, deal size threshold, and timing before providing your calendar booking link or scheduling the call.",
      },
      {
        question: "Who attends the discovery calls?",
        answer:
          "Your internal sales reps or founders attend the discovery calls. We place verified prospects directly onto your calendar with full context notes detailing the conversation history and verified company situation.",
      },
      {
        question: "Do you provide pitch or demo support?",
        answer:
          "Yes. For clients looking to strengthen their discovery-to-close conversion, we provide tactical feedback on demo flow, offer framing, and discovery call objection handling.",
      },
      {
        question: "How many calls a month will we receive?",
        answer:
          "We pace qualified calls directly to what your sales team can handle, scaling up within 90 days. Volume is calibrated around your team's closing capacity, offer validation, and total addressable market size.",
      },
    ],
  },
  {
    categoryId: "systems-pipeline",
    categoryName: "Business Systems & Sales Pipeline",
    faqs: [
      {
        question: "Do I need sales software before partnering with Elvtera?",
        answer:
          "No. If you have no sales software, we build an all-in-one sales workspace tailored to your exact sales process as part of our Business Systems service.",
      },
      {
        question: "Can you work inside our existing tools like HubSpot or Salesforce?",
        answer:
          "Yes. If your team already uses tools like HubSpot, Salesforce, Pipedrive, or Close, we integrate directly inside them. We build the speed-to-lead routing, pipeline stages, and follow-up automations within your existing environment.",
      },
      {
        question: "What is speed-to-lead automation?",
        answer:
          "Speed-to-lead automation ensures that new inquiries receive a tailored response within sixty seconds across direct channels, followed by automated multi-touch sequences that pause the instant a prospect responds.",
      },
    ],
  },
  {
    categoryId: "pilot-commercials",
    categoryName: "Pilot & Commercial Terms",
    faqs: [
      {
        question: "What is the 30-day No-Risk Pilot?",
        answer:
          "The 30-day pilot is a structured testing window where we build your intent framework, configure secondary outbound infrastructure, deploy initial sequences, and qualify discovery calls. It allows you to validate our execution before ongoing commitments.",
      },
      {
        question: "Are there long-term contracts required?",
        answer:
          "No long-term retainers are required during the pilot. Following the 30-day pilot, ongoing acquisition campaigns operate on rolling monthly agreements that you can cancel with standard written notice.",
      },
      {
        question: "Do you provide guarantees on revenue?",
        answer:
          "No. We never guarantee revenue or close rates because closing depends entirely on your product delivery, pricing, and internal sales execution. We present concrete targets based on operational data.",
      },
      {
        question: "What minimum deal size is required to partner?",
        answer:
          "Our system is designed for high-ticket B2B transactions. We work with companies with an average contract value of at least $5,000 to ensure a strong return on outbound acquisition investment.",
      },
    ],
  },
];
