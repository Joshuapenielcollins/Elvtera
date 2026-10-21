export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  linkedinUrl?: string;
  avatarUrl?: string;
}

export const aboutPageContent = {
  hero: {
    eyebrow: "Our Identity",
    title: "We are an outbound client acquisition partner.",
    subtitle:
      "We build and operate outbound appointment systems for B2B companies that have a proven offer and want a predictable sales calendar. We do not sell software licenses, generic leads, or broad agency retainers.",
  },
  principles: [
    {
      number: "01",
      title: "Start with real intent.",
      summary:
        "Cold outreach fails when sent to people with no active need. We identify businesses hiring for specific roles, expanding facilities, or undergoing leadership changes before sending a message.",
    },
    {
      number: "02",
      title: "Qualify before booking.",
      summary:
        "Your calendar is not a dumping ground for tire-kickers. We verify company size, budget alignment, and decision-maker authority before placing any prospect on your schedule.",
    },
    {
      number: "03",
      title: "Multi-channel execution.",
      summary:
        "Decision-makers do not live on a single channel. We run coordinated outreach across verified email and direct professional networks to ensure your message is received and respected.",
    },
    {
      number: "04",
      title: "Alignment on closed revenue.",
      summary:
        "We are operators, not theorists. Our system is engineered around booked calls that turn into closed contracts, which is why we offer a structured 30-day pilot before long-term commitments.",
    },
  ],
  howWeWork: [
    {
      title: "Dedicated Operational Partner",
      description:
        "We handle research, domain infrastructure, sequence copywriting, inbox monitoring, and appointment scheduling end to end.",
    },
    {
      title: "Clean Infrastructure Ownership",
      description:
        "All secondary outbound domains, warmed inboxes, and intent data frameworks remain under your control.",
    },
    {
      title: "Weekly Performance Debriefs",
      description:
        "Every seven days, we review reply sentiment, positive reply ratios, and lead qualification feedback to calibrate targeting.",
    },
  ],
};

/**
 * Team and Founder blocks are strictly data-driven and remain hidden until content is provided.
 */
export const teamMembers: TeamMember[] = [];
export const founderDetails: TeamMember | null = null;
