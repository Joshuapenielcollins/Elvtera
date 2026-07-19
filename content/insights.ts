import type { Insight, Testimonial, Faq } from "./types";

/** Articles, guides and whitepapers surfaced on the Resources page and home. */
export const insights: Insight[] = [
  {
    slug: "erp-readiness-signs",
    category: "Blog",
    title: "Seven signs your business has outgrown spreadsheets",
    excerpt:
      "Spreadsheets got you here, but they will not get you there. The concrete signals that it is time to move to an integrated business system, and what to do first.",
    date: "2026-06-18",
    readTime: "7 min read",
    body: [
      {
        paragraphs: [
          "Every growing company runs on spreadsheets at some point, and that is fine. Spreadsheets are flexible, free, and everyone knows them. The problem is not spreadsheets; it is the moment your operation grows past what they can safely carry, and nobody notices until something expensive breaks.",
          "Here are the seven signals we see most often in discovery engagements, roughly in the order they tend to appear."
        ]
      },
      {
        heading: "1. The same data lives in three places",
        paragraphs: [
          "A customer's details exist in the sales tracker, the invoice file, and the delivery sheet, and they do not agree. Every duplicate copy is a future reconciliation task. When your team spends Friday afternoons 'syncing the sheets', you are paying salaries for work a database does for free."
        ]
      },
      {
        heading: "2. Month-end close takes more than a week",
        paragraphs: [
          "If finance spends two or three weeks assembling last month's picture, leadership is always driving by looking in the rear-view mirror. Integrated systems close in days because the data was captured once, at the source, as work happened."
        ]
      },
      {
        heading: "3. You discover stock-outs from customers",
        paragraphs: [
          "When a customer's order is the first signal that an item is out of stock, you are losing revenue you never see. Reorder automation with live stock levels turns this from a recurring emergency into a non-event."
        ]
      },
      {
        heading: "4. Approvals happen in chat threads",
        paragraphs: [
          "Discounts, purchases, and leave approved somewhere in WhatsApp history is not an audit trail. Workflow systems make approvals fast and traceable. The two are not in tension."
        ]
      },
      {
        heading: "5. One person is the system",
        paragraphs: [
          "If a single employee's resignation would take your operational knowledge with them, because the real process lives in their head and their personal spreadsheets, you have a business continuity risk wearing a lanyard."
        ]
      },
      {
        heading: "6. Reports are assembled, not generated",
        paragraphs: [
          "A weekly sales report that takes half a day to compile is a symptom, not a report. If the underlying data were structured, that report would be a saved view that is always current."
        ]
      },
      {
        heading: "7. Growth makes things worse, not better",
        paragraphs: [
          "The clearest signal of all: each new branch, product line, or hire adds friction instead of leverage. Systems should make the tenth branch easier than the second.",
          "If three or more of these sound familiar, the fix is rarely 'more discipline with the spreadsheets'. It is usually a phased move to an integrated platform, starting with the process that bleeds the most. That is exactly what a two-week discovery engagement is designed to find."
        ]
      }
    ]
  },
  {
    slug: "ai-agents-for-operations",
    category: "Blog",
    title: "AI agents in operations: what actually works in 2026",
    excerpt:
      "Beyond the hype: the AI agent deployments that reliably pay for themselves in small and mid-size businesses, and the ones that do not yet.",
    date: "2026-05-30",
    readTime: "8 min read",
    body: [
      {
        paragraphs: [
          "Two years into the agent era, the pattern is clear: AI agents create real ROI in narrow, high-volume, well-bounded roles, and burn money in open-ended ones. Here is our honest scorecard from production deployments."
        ]
      },
      {
        heading: "What reliably works",
        paragraphs: [
          "Lead response and qualification. Speed-to-lead is the highest-leverage number in most sales operations. An agent that responds in under a minute, asks three qualifying questions, and books a meeting outperforms a human team that responds in four hours, not because it is smarter, but because it is there.",
          "After-hours phone coverage. Voice agents have crossed the quality threshold for greeting, routing, message-taking, and appointment booking. Businesses that previously missed 30 to 40% of calls capture nearly all of them.",
          "First-line support on a real knowledge base. When an agent is grounded in your actual documentation and policies, with retrieval instead of vibes, it resolves the majority of routine tickets and hands the rest to humans with full context."
        ]
      },
      {
        heading: "What does not (yet)",
        paragraphs: [
          "Unsupervised outbound sales. Agents doing cold outreach at scale produce volume, not relationships, and can damage your brand at scale too.",
          "Complex negotiations and exceptions. Anything requiring judgment about precedent-setting, pricing exceptions, or upset VIP customers still belongs with your best people. The agent's job is to make sure those people never touch routine work again."
        ]
      },
      {
        heading: "The deployment pattern that works",
        paragraphs: [
          "Start with one channel and one job. Ground the agent in your real data. Keep a human handoff path with full conversation context. Review transcripts weekly and tune. Expand only after the numbers prove out.",
          "Deployed this way, a front-line agent typically pays for itself inside a quarter, because it is doing a job you were already paying for in missed opportunities."
        ]
      }
    ]
  },
  {
    slug: "whatsapp-api-collections",
    category: "Guide",
    title: "How WhatsApp automation cuts receivables by half",
    excerpt:
      "The mechanics of automated, aging-driven payment reminders on the official WhatsApp Business API, and why they outperform email statements 5-to-1.",
    date: "2026-05-12",
    readTime: "6 min read",
    body: [
      {
        paragraphs: [
          "Most companies do not have a collections problem, they have a follow-up problem. Invoices age because reminding customers is manual, awkward, and always second priority to new sales. Automation removes all three obstacles at once."
        ]
      },
      {
        heading: "Why WhatsApp beats email for collections",
        paragraphs: [
          "Email statements see roughly 20% open rates; WhatsApp messages are read 98% of the time, usually within minutes. When the message includes a payment link, the friction between 'reminded' and 'paid' drops to one tap."
        ]
      },
      {
        heading: "The escalation ladder",
        paragraphs: [
          "The system we deploy reads receivables aging from the ERP daily and sends template-approved messages by bucket: a friendly heads-up before due date, a polite reminder at +7 days, a firmer note with a statement at +30, and a personal escalation to the account owner at +45, a human, armed with full context.",
          "Every message logs to the customer record. Payments reconcile automatically and stop the ladder instantly, so nobody is chased for an invoice they paid this morning, which is the fastest way to destroy trust in an automated system."
        ]
      },
      {
        heading: "Results we see repeatedly",
        paragraphs: [
          "Across deployments, receivables past 60 days typically fall 40 to 55% within two months, and finance teams recover hundreds of hours of follow-up time. The pattern holds because the mechanism is boring and reliable: consistent, polite, well-timed follow-up, forever."
        ]
      }
    ]
  },
  {
    slug: "open-source-erp-tco",
    category: "Guide",
    title: "The real total cost of ownership: Custom ERP vs proprietary ERP",
    excerpt:
      "License fees are only the visible tip. A five-year TCO comparison of open-source custom ERP and proprietary ERP solutions for a 100-employee company.",
    date: "2026-04-21",
    readTime: "9 min read",
    body: [
      {
        paragraphs: [
          "When a 100-employee company compares ERP options, the proprietary quote usually leads with a seductive per-user price. The five-year picture looks very different once you add what the brochure leaves out."
        ]
      },
      {
        heading: "The visible costs",
        paragraphs: [
          "Proprietary suites typically run $40 to $150 per user per month. For 60 actual users, that is $29k to $108k per year, before implementation, which routinely runs 1 to 2 times the annual license.",
          "A custom ERP license cost is zero. You pay for implementation, hosting (typically $100 to $400/month), and support. Over five years, the license line alone often differs by $150k to $500k."
        ]
      },
      {
        heading: "The invisible costs",
        paragraphs: [
          "Customization is where proprietary TCO explodes. Changes go through vendor-certified consultants at premium rates, and each upgrade risks breaking them. On a custom engineered system, modifications are first-class citizens: version-controlled, upgrade-safe, and built specifically for your processes.",
          "User-count growth is the second trap. Hiring 30 people should not trigger a five-figure software bill, but per-seat pricing means it does, so companies ration seats and the 'system of record' quietly stops covering the whole company."
        ]
      },
      {
        heading: "Which solution wins",
        paragraphs: [
          "Deep industry verticals with highly specific regulatory certification can justify proprietary suites. For the general operations of a 20 to 500 person company (finance, inventory, manufacturing, HR, sales) the custom ERP total cost of ownership advantage is decisive and durable."
        ]
      }
    ]
  },
  {
    slug: "automation-first-90-days",
    category: "Guide",
    title: "Your first 90 days of business automation: a playbook",
    excerpt:
      "The sequence that works: which workflows to automate first, how to measure the wins, and how to build momentum without disrupting operations.",
    date: "2026-03-28",
    readTime: "7 min read",
    body: [
      {
        paragraphs: [
          "The biggest automation mistake is not technical, it is starting with the hardest process. The right first projects are boring, high-frequency, and low-risk. Here is the 90-day sequence we run with new clients."
        ]
      },
      {
        heading: "Days 1 to 30: instrument and pick quick wins",
        paragraphs: [
          "Week one is an automation audit: we shadow the actual work and count. How many order confirmations sent manually? How many report emails assembled by hand? The audit produces a ranked list by hours-saved-per-week against implementation effort.",
          "Then we ship two or three quick wins, typically notification flows covering order confirmations, dispatch updates, and daily flash reports. They are visible, low-risk, and build trust in the machinery."
        ]
      },
      {
        heading: "Days 31 to 60: automate a money process",
        paragraphs: [
          "With trust established, we take on a process with direct financial impact, usually receivables follow-up or lead response. These have measurable baselines (DSO, speed-to-lead) so the win is undeniable in the numbers."
        ]
      },
      {
        heading: "Days 61 to 90: connect the systems",
        paragraphs: [
          "The third month tackles integration debt: the copy-paste bridges between your systems. Each connection removed is permanent leverage. Errors stop happening because the manual step stops existing.",
          "By day 90 the pattern is self-sustaining: the team proposes automations because they have seen the machinery work. That cultural shift is worth more than any single workflow."
        ]
      }
    ]
  },
  {
    slug: "digital-transformation-smb-myths",
    category: "Whitepaper",
    title: "5 digital transformation myths that stall mid-market firms",
    excerpt:
      "It does not require a big budget, a big team, or a big bang. Debunking the beliefs that keep mid-size companies running on manual processes.",
    date: "2026-02-14",
    readTime: "5 min read",
    body: [
      {
        paragraphs: [
          "Digital transformation has been buried under so much consulting jargon that many business leaders assume it is not for them. Five myths do most of the damage."
        ]
      },
      {
        heading: "Myth 1: It is a big-bang project",
        paragraphs: [
          "The transformations that stick are sequences of 6 to 12 week projects, each independently valuable. The big-bang rewrite is how transformations fail, not how they succeed."
        ]
      },
      {
        heading: "Myth 2: It needs an enterprise budget",
        paragraphs: [
          "Modern technologies have flipped the economics. Software that runs a 200-person company's entire operations can carry zero license cost. Budget goes to implementation and adoption, which is where success is decided anyway."
        ]
      },
      {
        heading: "Myth 3: Our people will not adopt it",
        paragraphs: [
          "People resist systems that add work and embrace systems that remove it. If the new system means a salesperson types a quote once instead of three times, adoption is not a battle. Resistance is usually a design signal, not a people problem."
        ]
      },
      {
        heading: "Myth 4: We need to hire IT staff first",
        paragraphs: [
          "Managed infrastructure and support retainers mean a mid-size company can run enterprise-grade systems with zero internal IT headcount, the same way it runs payroll without an in-house tax lawyer."
        ]
      },
      {
        heading: "Myth 5: AI makes all of this obsolete",
        paragraphs: [
          "AI agents amplify structured operations; they cannot rescue chaotic ones. An agent grounded in a clean ERP is a force multiplier. The companies winning with AI are the ones that did the systems work first, which means the best time to start is now."
        ]
      }
    ]
  }
];

/**
 * Client quotes, anonymized by role and industry.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "They started by asking how we actually work - not by demoing software. Six months later the whole company runs on one system and my Monday numbers are real.",
    attribution: "Chief Operating Officer",
    context: "Manufacturing · ERP implementation",
  },
  {
    quote:
      "The AI agent books a quarter of our appointments outside opening hours. Our reception team was skeptical for about two weeks - now they'd riot if we removed it.",
    attribution: "Group Operations Director",
    context: "Healthcare · AI voice & WhatsApp agents",
  },
  {
    quote:
      "Every vendor promises integration. ELVTERA delivered it: our store, warehouse and accounts have shown the same numbers for a year now. I stopped checking.",
    attribution: "Managing Director",
    context: "Distribution · E-commerce & system integration",
  },
  {
    quote:
      "What I value most is the honesty. Twice they talked us out of spending money with them because a simpler fix existed. That's why they get all our work now.",
    attribution: "Chief Executive Officer",
    context: "Professional services · Automation & consulting",
  },
];

/** General FAQs shown on the Resources page. */
export const generalFaqs: Faq[] = [
  {
    question: "What kind of company is ELVTERA?",
    answer:
      "We are a business technology company. We implement and build enterprise software - ERP, CRM, custom systems, automation, integration and cloud infrastructure - for operating businesses. We are not a marketing agency, and while we deploy AI where it earns its place, we are not an 'AI agency' either.",
  },
  {
    question: "What size of business do you work with?",
    answer:
      "Most of our clients are established businesses between roughly 20 and 1,000 employees - large enough that manual processes are visibly costing money, and lean enough to want a single accountable partner rather than a big-firm engagement.",
  },
  {
    question: "How do your projects typically start?",
    answer:
      "With a conversation about your operations, followed by a scoped discovery phase. Discovery produces a documented understanding of your processes and a fixed, itemized proposal. You can take that proposal to any vendor - most clients stay because the thinking is sound.",
  },
  {
    question: "Do you work with clients remotely?",
    answer:
      "Yes. Delivery is structured for remote collaboration - scheduled workshops, shared project boards and regular demos - with on-site sessions where a project genuinely benefits from them, such as shop-floor discovery or go-live support.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Projects are priced fixed against an agreed scope, itemized so you can see what each part costs. Ongoing services - support, monitoring, managed cloud - are monthly agreements with defined inclusions and SLAs. Scope changes are always priced and approved before work begins.",
  },
  {
    question: "Who owns the systems you build?",
    answer:
      "You do. Code, data, documentation and cloud accounts are yours. We design every engagement so that a competent third party could take over - a standard that keeps our work honest and your business protected.",
  },
];
