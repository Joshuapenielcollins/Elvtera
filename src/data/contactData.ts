export interface IntentOption {
  value: string;
  label: string;
}

export const intentOptions: IntentOption[] = [
  { value: "client-acquisition", label: "Client Acquisition (Outbound System)" },
  { value: "business-systems", label: "Business Systems & Sales Pipeline" },
  { value: "launch", label: "Launch System (Idea to First Clients)" },
  { value: "pilot", label: "Apply for Pilot" },
  { value: "general", label: "General Inquiry / Direct Conversation" },
];

export const contactPageContent = {
  eyebrow: "Direct Communication",
  headline: "Talk directly with our team.",
  subheadline:
    "Tell us about your offer and current sales pipeline. We will review your situation and tell you honestly if our client acquisition engine is a fit.",
  directEmailNote:
    "Prefer to write directly? Our principal inbox is monitored continuously during business hours.",
  bookingBlock: {
    title: "Need immediate answers?",
    description:
      "Schedule a 20-minute qualification intro directly with an acquisition strategist.",
    badge: "Direct Calendar Access",
  },
};
