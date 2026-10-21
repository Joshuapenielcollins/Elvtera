/**
 * Pilot Offer Configuration Constants
 * One file, easy to edit as specified.
 */

export const FILLOUT_PILOT_URL = "https://elvtera-pilot.zite.so";
export const CALENDLY_URL = "https://cal.com/elvtera-business-solutions-uwltid/30min";
export const PILOT_LENGTH = "14 days";
export const PILOT_FEE_LINE = "[EDIT: fee line, e.g. Credited in full toward the 90-day program]";
export const RISK_REVERSAL = "If we miss the target we agree in writing before we start, the next 14 days are on us.";

export const pilotCopy = {
  homeStrip: {
    headline: "Start with a pilot.",
    body: `See real people who need what you sell before you pay anything. Then ${PILOT_LENGTH} of outreach where you approve every message. ${RISK_REVERSAL}`,
    buttonText: "Apply for a No-Risk Pilot",
    linkText: "See how the pilot works",
  },
  hero: {
    headline: "See your customers first. Decide after.",
    sub: `A 15-minute call where we show you real people who need what you sell right now. Then a ${PILOT_LENGTH} pilot where you approve every message.`,
    applyButton: "Apply for a No-Risk Pilot",
    bookButton: "Book a Call",
  },
  timelineSteps: [
    {
      step: 1,
      title: "The proof call (45 minutes)",
      description: "You tell us what you sell and who buys it. We show you real people showing intent right now, with the signal behind each one.",
    },
    {
      step: 2,
      title: "Setup (48 hours)",
      description: "We build your campaign. You review and approve every message.",
    },
    {
      step: 3,
      title: "Outbound goes live",
      description: "We contact people across multiple channels and handle the replies.",
    },
    {
      step: 4,
      title: "Reports",
      description: "On day 7 and day 14 you get a report: who we contacted, why, who replied, and what happened.",
    },
    {
      step: 5,
      title: "You decide",
      description: `Continue into the 90-day program, or stop. ${PILOT_FEE_LINE}`,
    },
  ],
  whatYouGet: [
    "Real prospects shown before you commit.",
    "Outreach built around each person's signal.",
    "Your approval on every message.",
    "Replies handled and qualified.",
    "Two reports.",
    "A clear target agreed in writing before we start.",
  ],
  whatWeNeedFromYou: [
    "45 minutes for the proof call.",
    "About 30 minutes to approve messages.",
    "Replies to interested people within 24 hours.",
  ],
  riskReversal: {
    headline: "If we miss, we keep working. You don't pay.",
    body: RISK_REVERSAL,
  },
  whoItIsFor: {
    bestFit: [
      "A proven offer.",
      "Deal value worth the effort, around $5,000 or more per client.",
      "A market large enough to keep outreach fresh.",
      "Capacity to handle 20+ calls a month.",
      "Ready to commit to 90 days if the pilot works.",
    ],
    notFit: [
      "An offer that is not tested yet.",
      "Very low-ticket products.",
      "No sales process.",
      "Only need a handful of leads a month.",
      "Expecting results in a week.",
    ],
  },
  faqs: [
    {
      question: "What does the pilot cost?",
      answer: PILOT_FEE_LINE,
    },
    {
      question: "What if nobody replies?",
      answer: "Then the pilot missed its target and the risk reversal applies.",
    },
    {
      question: "Who sees my messages?",
      answer: "You, before anything is sent.",
    },
    {
      question: "Can I stop at any time?",
      answer: "Yes.",
    },
    {
      question: "Do you promise booked calls in 14 days?",
      answer: "No. We promise real conversations with the right people and a clear report. Booked calls are our 90-day target.",
    },
    {
      question: "How do I know if I qualify?",
      answer: "Apply. If it is a fit, we show you real prospects in a 45-minute call.",
    },
  ],
  applySection: {
    heading: "Apply in 2 minutes.",
  },
};
