import type { CaseStudy } from "./types";

/**
 * Case study catalog.
 *
 * Engagements are presented anonymized ("a mid-sized manufacturer") - we
 * describe representative work without publishing client names, and quotes
 * are attributed by role and industry by agreement.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "manufacturer-erp-transformation",
    title: "From 14 spreadsheets to one ERP: a manufacturer's operations, unified",
    client: "Mid-sized industrial equipment manufacturer · 240 employees",
    industrySlug: "manufacturing",
    excerpt:
      "A 240-person manufacturer replaced spreadsheet-driven planning with a unified ERP - cutting inventory costs by a quarter and closing the books in three days instead of three weeks.",
    overview:
      "A manufacturer of industrial equipment had grown from 60 to 240 employees in six years. Its systems had not grown with it: production was planned on whiteboards, inventory lived in fourteen linked spreadsheets maintained by three different people, and finance closed the month roughly three weeks after it ended. Leadership knew margins were slipping but could not see where.",
    problem: [
      "Sales promised delivery dates the plant could not verify, because production capacity existed only in the planning manager's head and a whiteboard photographed weekly.",
      "Inventory records were maintained in linked spreadsheets that regularly disagreed with the physical count. Stockouts halted production lines several times a month, while slow-moving stock quietly accumulated in the warehouse.",
      "Job costing was calculated after completion using estimated labor and material figures. Several product lines believed to be profitable were, on real numbers, break-even at best - but nobody could prove it until quarter-end.",
      "Month-end close took finance three weeks of chasing, reconciling and correcting, which meant every management decision was made on numbers at least a month old.",
    ],
    solution: [
      "We began with a four-week discovery phase, mapping how orders, materials and information actually moved through the plant - including the informal workarounds the spreadsheets hid.",
      "We implemented a unified ERP covering finance, inventory, purchasing, production planning and quality, configured around the manufacturer's actual routing and bill-of-materials structure rather than a generic template.",
      "Barcode scanning was introduced at goods-in, on the shop floor and at dispatch, so inventory movements were captured at the source instead of retyped at day's end.",
      "The rollout was phased over five months - finance and inventory first, then purchasing, then production - with each phase run in parallel with the old process until the numbers matched. Role-based training and eight weeks of hypercare followed go-live.",
    ],
    technologies: ["Custom ERP Suite", "Barcode Scanning", "PostgreSQL", "Power BI", "n8n"],
    results: [
      { value: 24, suffix: "%", label: "Reduction in inventory carrying cost within a year" },
      { value: 3, suffix: "d", label: "Month-end close, down from three weeks" },
      { value: 98.5, suffix: "%", label: "Inventory record accuracy at annual count" },
      { value: 0, label: "Production stoppages from stockouts in the last two quarters" },
    ],
    testimonial: {
      quote:
        "For the first time since we passed a hundred employees, the numbers in the Monday meeting are this morning's numbers. We found two product lines that were quietly losing money and fixed the pricing within a month. The system paid for itself right there.",
      attribution: "Chief Operating Officer, manufacturing client",
    },
  },
  {
    slug: "clinic-group-ai-booking",
    title: "How a clinic group answered every call - and cut no-shows by 41%",
    client: "Multi-branch healthcare clinic group · 6 locations",
    industrySlug: "healthcare",
    excerpt:
      "A six-branch clinic group deployed AI voice and WhatsApp agents for bookings and reminders - recovering thousands of missed calls a year and cutting no-shows by 41%.",
    overview:
      "A clinic group with six branches was losing patients it never knew it had. Call tracking revealed that nearly a third of inbound calls went unanswered - callers hitting busy reception desks, lunch hours or closed evenings. Meanwhile, no-shows were running at 18% of booked appointments, leaving expensive clinical capacity idle every day.",
    problem: [
      "Approximately 30% of inbound calls went unanswered across the group, concentrated at lunchtime, evenings and Saturday mornings - exactly when working patients call.",
      "Reception teams spent an estimated 60% of their time on routine calls: booking, rescheduling, directions, insurance questions and prescription follow-ups.",
      "No-shows ran at 18% of appointments. Reminder calls were made manually when reception had time, which was rarely.",
      "Each branch kept its own diary conventions, so cross-branch booking - offering a patient a sooner slot at a nearby clinic - was practically impossible.",
    ],
    solution: [
      "We deployed an AI voice agent as the first responder on all branch lines: it answers immediately, books and reschedules appointments against live calendars, answers routine questions and transfers clinical or complex matters to staff with full context.",
      "A WhatsApp agent handles the same tasks in chat, in English and Arabic, where most rescheduling now happens - patients confirm, cancel or move appointments in seconds without a phone call.",
      "Automated reminders go out 48 hours and 3 hours before each appointment, with one-tap confirmation or rescheduling. Cancelled slots are offered automatically to the waitlist.",
      "All six branch calendars were unified on a shared scheduling backbone with clinician-level rules, enabling cross-branch booking. The agents ran a four-week supervised pilot at two branches, with clinic staff reviewing transcripts, before group-wide rollout.",
    ],
    technologies: ["AI Voice Agents", "WhatsApp Business API", "Twilio", "Calendar Integration", "n8n"],
    results: [
      { value: 100, suffix: "%", label: "Of inbound calls now answered, at any hour" },
      { value: 41, suffix: "%", label: "Reduction in no-shows with automated reminders" },
      { value: 27, suffix: "%", label: "Of bookings now made outside reception hours" },
      { value: 55, suffix: "%", label: "Less reception time spent on routine calls" },
    ],
    testimonial: {
      quote:
        "We assumed patients would resist talking to an AI. What they actually resist is calling three times and getting voicemail. Bookings made outside opening hours are now a quarter of our volume - that is revenue we simply didn't have before.",
      attribution: "Group Operations Director, healthcare client",
    },
  },
  {
    slug: "distributor-commerce-integration",
    title: "One inventory, every channel: a distributor's path to 3× online growth",
    client: "Regional consumer goods distributor · 4 warehouses",
    industrySlug: "retail",
    excerpt:
      "A regional distributor connected its new B2B e-commerce platform to ERP, warehouses and accounting - tripling online revenue while cutting order-processing labor by 70%.",
    overview:
      "A regional distributor serving 1,100 retail customers took orders by phone, WhatsApp messages and emailed spreadsheets. Every order was retyped into the ERP by an order-entry team of five, with a 2 to 3% error rate that turned into returns, credit notes and strained relationships. An earlier attempt at a webshop had failed because its stock levels were unreliable and customers went back to phoning.",
    problem: [
      "Five staff spent their days retyping orders from phone calls, WhatsApp and spreadsheets into the ERP, with predictable transcription errors.",
      "The previous webshop showed stale stock levels, so customers ordered items that weren't available - and quickly stopped trusting it.",
      "Pricing was customer-specific and maintained manually, so quoted, ordered and invoiced prices frequently disagreed.",
      "Warehouse picking worked from printed orders, with no systematic link between what was sold, picked and invoiced.",
    ],
    solution: [
      "We built a B2B e-commerce platform with customer-specific pricing, credit limits and order history, designed around how buyers actually reorder - repeat orders, quick lists and barcode-based reordering.",
      "An integration layer connects the storefront, ERP, four warehouse locations and accounting in near real time: stock levels update within seconds, orders flow straight to warehouse picking queues, and invoices post automatically on dispatch.",
      "WhatsApp ordering was kept - but automated: an AI agent parses order messages from smaller customers, confirms items and quantities against live stock, and places the order into the same pipeline.",
      "The order-entry team was redeployed to account management and exception handling, with the integration monitored around the clock under a support agreement.",
    ],
    technologies: ["Next.js", "Custom ERP Suite", "REST APIs", "WhatsApp Business API", "PostgreSQL", "AWS"],
    results: [
      { value: 3, suffix: "x", label: "Online revenue growth in the first year" },
      { value: 70, suffix: "%", label: "Reduction in order-processing labor" },
      { value: 96, suffix: "%", label: "Drop in order errors versus manual entry" },
      { value: 68, suffix: "%", label: "Of all orders now placed digitally, up from 9%" },
    ],
    testimonial: {
      quote:
        "The last webshop failed because nobody trusted it. This one shows the same stock number our warehouse sees, so customers order at ten at night and the goods are on the truck by morning. Our best salespeople now spend their time selling, not typing.",
      attribution: "Managing Director, distribution client",
    },
  },
];

/** Look up a case study by slug. */
export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
