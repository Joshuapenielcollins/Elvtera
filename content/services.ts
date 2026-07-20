import type { Service } from "./types";

/**
 * Service catalog.
 *
 * Each entry powers a dedicated, SEO-optimized page at /services/[slug]
 * plus cards on the home page, solutions page and industry pages.
 */
export const services: Service[] = [
  {
    slug: "erp-solutions",
    name: "ERP Solutions",
    shortName: "ERP",
    icon: "Boxes",
    excerpt:
      "Unify finance, inventory, procurement and operations in a single system of record built around how your business actually runs.",
    headline: "One system of record for your entire operation.",
    overview: [
      "Most growing companies run on a patchwork of spreadsheets, disconnected tools and manual handoffs. Every handoff is a place where data goes stale, work gets duplicated and decisions get made on numbers nobody fully trusts. An ERP implementation done well replaces that patchwork with a single source of truth.",
      "We design, implement and customize ERP systems around your processes - not the other way around. That starts with mapping how work actually moves through your business, then configuring modules for finance, inventory, procurement, manufacturing and HR that reflect it. We migrate your historical data, train your teams and stay accountable through go-live and beyond.",
      "Whether you are adopting ERP for the first time or replacing a system your business has outgrown, our goal is the same: an operation where leadership sees accurate numbers in real time and teams stop doing the same work twice.",
    ],
    features: [
      {
        icon: "LayoutDashboard",
        title: "Unified operations dashboard",
        description:
          "Finance, inventory, sales and production in one real-time view, so leadership decisions rest on current numbers rather than last month's export.",
      },
      {
        icon: "Landmark",
        title: "Financial management",
        description:
          "General ledger, accounts payable and receivable, multi-currency support and audit-ready reporting configured to your chart of accounts.",
      },
      {
        icon: "PackageSearch",
        title: "Inventory & procurement",
        description:
          "Live stock levels across locations, automated reorder points and purchase workflows that end stockouts and over-ordering.",
      },
      {
        icon: "Factory",
        title: "Production planning",
        description:
          "Bills of materials, work orders and capacity planning for manufacturers who need the shop floor and the front office on the same page.",
      },
      {
        icon: "Users",
        title: "HR & payroll modules",
        description:
          "Employee records, attendance, leave and payroll integrated with finance, replacing standalone HR tools and manual reconciliation.",
      },
      {
        icon: "ShieldCheck",
        title: "Role-based access & audit trails",
        description:
          "Granular permissions and complete change history, so sensitive data stays controlled and every transaction is traceable.",
      },
    ],
    benefits: [
      { value: 40, suffix: "%", label: "Less time spent on manual data entry and reconciliation" },
      { value: 1, label: "Single source of truth replacing disconnected tools" },
      { value: 99, suffix: "%", label: "Inventory accuracy achievable with live stock tracking" },
      { value: 24, suffix: "/7", label: "Real-time visibility into financial and operational data" },
    ],
    process: [
      {
        title: "Discovery & process mapping",
        description:
          "We document how orders, inventory, money and information actually flow through your business today - including the workarounds.",
      },
      {
        title: "Solution design",
        description:
          "We select and architect the right platform and modules, define the data model and agree on what will change for each team.",
      },
      {
        title: "Configuration & customization",
        description:
          "Modules are configured to your processes, custom workflows are built and integrations with existing systems are developed.",
      },
      {
        title: "Data migration & testing",
        description:
          "Historical data is cleaned, migrated and validated. Your team tests real scenarios before anything goes live.",
      },
      {
        title: "Training, go-live & support",
        description:
          "Role-based training, a controlled cutover and hands-on hypercare in the weeks after launch - followed by ongoing support.",
      },
    ],
    technologies: ["Custom Database Architecture", "REST APIs", "Secure PostgreSQL", "n8n Pipelines", "Docker Containers", "Secure Linux Cloud"],
    faqs: [
      {
        question: "How long does an ERP implementation take?",
        answer:
          "A focused implementation for a mid-sized business typically takes 3 to 6 months from discovery to go-live. Complex multi-entity or manufacturing deployments can take longer. We phase rollouts so your team sees value early instead of waiting for a single big-bang launch.",
      },
      {
        question: "Why should we choose custom ERP over off-the-shelf packages?",
        answer:
          "We design and build custom ERP systems tailored exactly to your operations. Rather than forcing you to bend your processes around rigid off-the-shelf software packages, we build custom systems of record, custom modules, and database pipelines designed to align with your unique operating model.",
      },
      {
        question: "Will our existing data carry over?",
        answer:
          "Yes. Data migration is a formal phase of every project. We extract, clean and map your historical records - customers, suppliers, products, open orders and financial balances - and validate them with your team before cutover.",
      },
      {
        question: "How do you handle staff adoption?",
        answer:
          "Adoption is designed in from the start: key users join the project from discovery, training is role-based rather than generic, and we provide hypercare support after go-live so questions get answered while habits are forming.",
      },
      {
        question: "What does an ERP project cost?",
        answer:
          "Cost depends on scope, platform licensing and the number of integrations. After a discovery session we provide a fixed, itemized proposal - you will never encounter surprise billing mid-project.",
      },
    ],
  },
  {
    slug: "crm-solutions",
    name: "CRM Solutions",
    shortName: "CRM",
    icon: "ContactRound",
    excerpt:
      "Give sales, marketing and service teams one shared view of every customer - with pipelines and follow-ups that run themselves.",
    headline: "Every customer, every conversation, one system.",
    overview: [
      "When customer information lives in inboxes, phones and personal spreadsheets, revenue depends on memory. Deals slip because nobody followed up. Service suffers because nobody sees the full history. A properly implemented CRM fixes this at the structural level.",
      "We implement and customize CRM platforms that give your business a complete view of every lead, customer and conversation. Pipelines mirror your real sales process, follow-ups and task assignments are automated, and management gets forecasting built on live pipeline data instead of gut feel.",
      "We also connect the CRM to the rest of your business - your website, WhatsApp, telephony, email and ERP - so customer data flows in automatically and your team spends time selling and serving, not typing.",
    ],
    features: [
      {
        icon: "KanbanSquare",
        title: "Pipeline management",
        description:
          "Stages, probabilities and ownership modeled on your actual sales process, with a clear view of every deal in flight.",
      },
      {
        icon: "Workflow",
        title: "Automated follow-ups",
        description:
          "Leads are assigned, sequenced and reminded automatically - no enquiry waits in an inbox over a weekend.",
      },
      {
        icon: "History",
        title: "360° customer history",
        description:
          "Every call, email, meeting, quote and ticket on one timeline, visible to everyone who deals with the customer.",
      },
      {
        icon: "TrendingUp",
        title: "Forecasting & reporting",
        description:
          "Pipeline value, conversion rates and rep performance reported from live data - sales meetings run on facts.",
      },
      {
        icon: "Plug",
        title: "Channel integrations",
        description:
          "Website forms, WhatsApp, email and telephony feed the CRM directly, capturing every enquiry at the source.",
      },
      {
        icon: "Headset",
        title: "Service & ticketing",
        description:
          "Support requests tracked with SLAs and escalations, connected to the same customer record sales works from.",
      },
    ],
    benefits: [
      { value: 30, suffix: "%", label: "Typical lift in lead conversion with automated follow-up" },
      { value: 0, label: "Enquiries lost to inboxes and missed handoffs" },
      { value: 100, suffix: "%", label: "Of customer interactions captured in one record" },
      { value: 5, suffix: "x", label: "Faster quote and proposal turnaround with templates" },
    ],
    process: [
      {
        title: "Sales process audit",
        description:
          "We map how leads arrive, who touches them and where they stall - the CRM is designed around the answers.",
      },
      {
        title: "Platform selection & design",
        description:
          "We recommend the platform that fits your team size, complexity and budget, and design pipelines, fields and permissions.",
      },
      {
        title: "Configuration & automation",
        description:
          "Pipelines, scoring, assignment rules and follow-up automation are built and connected to your lead sources.",
      },
      {
        title: "Data import & integration",
        description:
          "Existing contacts and deal history are cleaned and imported; integrations with email, telephony and ERP go live.",
      },
      {
        title: "Team onboarding & optimization",
        description:
          "Hands-on training for reps and managers, then iteration on the setup once real usage data comes in.",
      },
    ],
    technologies: ["Custom CRM Systems", "Interactive Dashboards", "API Integrations", "n8n Pipelines", "Twilio", "PostgreSQL"],
    faqs: [
      {
        question: "How is a custom CRM different from off-the-shelf options?",
        answer:
          "A custom CRM is engineered around your specific sales, intake, and customer success pipelines. You pay zero monthly seat licensing fees, have total ownership over your customer data, and get an interface that only shows what your team needs, resulting in massive productivity gains.",
      },
      {
        question: "Our team failed to adopt a CRM before. How is this different?",
        answer:
          "Failed CRM projects usually automate a process that was never mapped. We start with your actual sales workflow, remove data entry through integrations and automation, and train around daily tasks. When the CRM saves reps time instead of costing it, adoption follows.",
      },
      {
        question: "Can you migrate data from our current CRM or spreadsheets?",
        answer:
          "Yes. We regularly migrate from spreadsheets and from legacy systems or database platforms - including contacts, companies, deal history and notes - with deduplication and validation before go-live.",
      },
      {
        question: "Can the CRM connect to WhatsApp?",
        answer:
          "Yes. We integrate the WhatsApp Business API so conversations are logged against the customer record, enquiries create leads automatically and your team can respond from a shared inbox with full context.",
      },
      {
        question: "How quickly will we see results?",
        answer:
          "Most clients see measurable improvement in follow-up speed and pipeline visibility within the first month. Conversion improvements typically show within a quarter as automation and reporting take effect.",
      },
    ],
  },
  {
    slug: "business-automation",
    name: "Business Process Automation",
    shortName: "Business Automation",
    icon: "Workflow",
    excerpt:
      "Turn repetitive, error-prone manual work into reliable automated workflows - approvals, reporting, invoicing and beyond.",
    headline: "Stop paying skilled people to do robotic work.",
    overview: [
      "In most organizations, a surprising share of the working week goes to copying data between systems, chasing approvals, assembling reports and re-checking work that was done by hand. This work is expensive, slow and error-prone - and none of it requires human judgment.",
      "We identify the highest-cost manual processes in your business and rebuild them as automated workflows: documents that route themselves for approval, invoices that generate and send on schedule, reports that compile overnight, and data that moves between systems without anyone retyping it.",
      "Every automation project starts with measurement - hours spent, error rates, cycle times - so the return is visible in numbers, not anecdotes.",
    ],
    features: [
      {
        icon: "FileCheck",
        title: "Approval workflows",
        description:
          "Purchase requests, leave applications and document sign-offs routed automatically with reminders and escalation.",
      },
      {
        icon: "Receipt",
        title: "Invoicing & billing automation",
        description:
          "Invoices generated from orders or timesheets, sent on schedule, with payment reminders that follow up for you.",
      },
      {
        icon: "FileBarChart",
        title: "Automated reporting",
        description:
          "The reports your leadership reads every week, compiled from source systems automatically and delivered on time.",
      },
      {
        icon: "ArrowLeftRight",
        title: "Data synchronization",
        description:
          "Customer, product and financial data kept consistent across your systems without manual re-entry.",
      },
      {
        icon: "MailCheck",
        title: "Notifications & alerts",
        description:
          "The right people notified when stock runs low, a payment fails or an SLA is about to be breached.",
      },
      {
        icon: "ScanText",
        title: "Document processing",
        description:
          "Data extracted from invoices, forms and contracts and pushed into your systems - no retyping, fewer errors.",
      },
    ],
    benefits: [
      { value: 60, suffix: "%", label: "Reduction in processing time for automated workflows" },
      { value: 90, suffix: "%", label: "Fewer data-entry errors versus manual processing" },
      { value: 1000, suffix: "+", label: "Staff hours recoverable per year in a mid-sized business" },
      { value: 3, suffix: "x", label: "Faster approval cycles with automated routing" },
    ],
    process: [
      {
        title: "Process audit",
        description:
          "We sit with your teams, document the repetitive work and quantify what each process costs in hours and errors.",
      },
      {
        title: "Prioritization & roadmap",
        description:
          "Processes are ranked by savings and effort. You get a roadmap that starts with the fastest, highest-value wins.",
      },
      {
        title: "Workflow design",
        description:
          "Each automation is designed with your team - including the exceptions and edge cases manual work quietly handles today.",
      },
      {
        title: "Build & test",
        description:
          "Workflows are built, run in parallel with the manual process and verified against real cases before switchover.",
      },
      {
        title: "Rollout & measurement",
        description:
          "Automation goes live with monitoring in place. We report actual hours saved against the baseline we measured.",
      },
    ],
    technologies: ["n8n", "Make", "Zapier", "Power Automate", "Python", "REST APIs"],
    faqs: [
      {
        question: "Which processes should we automate first?",
        answer:
          "The best first candidates are high-volume, rule-based and painful: invoice processing, report assembly, approval routing, data re-entry between systems. Our process audit ranks your candidates by hours saved versus implementation effort, so the roadmap starts with quick wins.",
      },
      {
        question: "Will automation replace our staff?",
        answer:
          "In our experience it redirects them. Automation removes the repetitive portion of roles - the retyping, chasing and checking - so the same people handle more volume and do higher-value work. Growth stops requiring proportional headcount.",
      },
      {
        question: "What happens when an automated process hits an exception?",
        answer:
          "Exception handling is designed in, not bolted on. Cases the workflow cannot resolve are routed to a named person with full context, and every automated action is logged so you can always see what happened and why.",
      },
      {
        question: "Do we need to replace our existing software?",
        answer:
          "Usually not. Automation typically connects the systems you already have through their APIs. If a system genuinely cannot integrate, we will tell you plainly and lay out the options.",
      },
      {
        question: "How do you measure the return?",
        answer:
          "Before building anything we baseline the manual process - hours, error rates, cycle time. After rollout we measure the same numbers. The business case is settled with data, not estimates.",
      },
    ],
  },
  {
    slug: "ai-automation",
    name: "AI Business Solutions",
    shortName: "AI Automation",
    icon: "BrainCircuit",
    excerpt:
      "Deploy AI voice agents, chat agents and WhatsApp automation that handle real customer conversations - with a clear path to a human.",
    headline: "AI that answers, qualifies and books - around the clock.",
    overview: [
      "Every missed call and unanswered message is revenue walking out the door. AI voice and chat agents change the economics of being responsive: every enquiry answered immediately, in any hour, without expanding your team.",
      "We build AI agents grounded in your actual business - your services, prices, policies and processes. Voice agents answer and qualify phone calls, book appointments and route complex matters to your team. Chat agents handle website and WhatsApp conversations, resolve routine questions and capture leads directly into your CRM.",
      "We treat AI as an operations tool, not a novelty. Every deployment has defined boundaries, a clean handover path to humans, and measurable targets for resolution rate and response time. If an AI agent is not the right answer for a process, we will say so.",
    ],
    features: [
      {
        icon: "PhoneCall",
        title: "AI voice agents",
        description:
          "Natural-sounding agents that answer calls, qualify enquiries, book appointments and transfer to staff when judgment is needed.",
      },
      {
        icon: "MessagesSquare",
        title: "AI chat agents",
        description:
          "Website and in-app assistants trained on your business that resolve routine questions and capture qualified leads.",
      },
      {
        icon: "MessageCircle",
        title: "WhatsApp automation",
        description:
          "Automated enquiry handling, order updates and appointment reminders on the channel your customers already use.",
      },
      {
        icon: "UserCheck",
        title: "Human handover",
        description:
          "Conversations that exceed the agent's scope transfer to your team with full context - customers never repeat themselves.",
      },
      {
        icon: "Database",
        title: "CRM integration",
        description:
          "Every conversation logged, every lead created and every booking synced with your CRM and calendar automatically.",
      },
      {
        icon: "GaugeCircle",
        title: "Performance analytics",
        description:
          "Resolution rates, handover rates and customer satisfaction tracked from day one, reviewed with you monthly.",
      },
    ],
    benefits: [
      { value: 100, suffix: "%", label: "Of enquiries answered - nights, weekends and peak hours" },
      { value: 70, suffix: "%", label: "Of routine enquiries resolvable without staff involvement" },
      { value: 3, suffix: "s", label: "Typical first-response time across chat channels" },
      { value: 24, suffix: "/7", label: "Availability without expanding your team" },
    ],
    process: [
      {
        title: "Use-case definition",
        description:
          "We identify where conversations are being missed or delayed today, and define exactly what the agent will and will not handle.",
      },
      {
        title: "Knowledge grounding",
        description:
          "The agent is built on your real content - services, pricing, policies, FAQs - so answers are accurate and on-brand.",
      },
      {
        title: "Integration",
        description:
          "Telephony, WhatsApp Business API, website chat, CRM and calendars are connected so the agent can act, not just talk.",
      },
      {
        title: "Supervised pilot",
        description:
          "The agent goes live on a limited scope with your team reviewing transcripts. Responses are tuned before full rollout.",
      },
      {
        title: "Scale & monitor",
        description:
          "Scope expands as performance proves out. Monthly reviews cover resolution rates, handovers and refinements.",
      },
    ],
    technologies: ["Anthropic Claude", "OpenAI", "Twilio Voice", "WhatsApp Business API", "n8n", "LiveKit"],
    faqs: [
      {
        question: "Will customers know they are talking to an AI?",
        answer:
          "Yes - we configure agents to identify themselves. In practice customers care about getting an immediate, accurate answer far more than who provides it. Transparency also builds trust when the conversation hands over to your team.",
      },
      {
        question: "What stops the AI from giving wrong answers?",
        answer:
          "Agents are grounded in a curated knowledge base of your approved content and constrained to their defined scope. Questions outside that scope trigger a handover to your team rather than a guess. During the pilot phase, your staff review transcripts and we tune responses before full rollout.",
      },
      {
        question: "Can the voice agent handle our accent and languages?",
        answer:
          "Modern voice models handle accents well, and we test with real callers from your market during the pilot. Multilingual deployments - English and Arabic, for example - are common and fully supported.",
      },
      {
        question: "Is WhatsApp automation compliant with WhatsApp's rules?",
        answer:
          "Yes. We build on the official WhatsApp Business API with approved message templates and opt-in flows, which keeps your number compliant and protected - unlike unofficial gateway tools that risk being banned.",
      },
      {
        question: "What does an AI agent cost to run?",
        answer:
          "There is a one-time build cost and a monthly cost combining platform usage and our monitoring. For most deployments, the monthly running cost is a small fraction of one staff salary while covering all hours of the week. We provide exact figures in the proposal.",
      },
    ],
  },
  {
    slug: "website-development",
    name: "Enterprise Website Development",
    shortName: "Websites & E-commerce",
    icon: "Globe",
    excerpt:
      "Fast, secure, search-optimized corporate websites and e-commerce platforms engineered to represent your business properly.",
    headline: "Your website should close deals before you ever speak.",
    overview: [
      "For most B2B buyers, your website is the first serious evaluation of your company. A slow, dated or template-built site quietly costs you deals you never hear about. An enterprise website is not a brochure - it is business infrastructure.",
      "We design and engineer corporate websites and e-commerce platforms with the same rigor we apply to business systems: performance budgets, accessibility standards, structured SEO, analytics and a content architecture your team can actually maintain.",
      "For e-commerce, we build stores connected to your inventory, payments and fulfillment - so the storefront your customers see and the operation behind it work as one system.",
    ],
    features: [
      {
        icon: "Zap",
        title: "Performance engineering",
        description:
          "Sub-second loads and strong Core Web Vitals, built with modern frameworks and measured on real devices.",
      },
      {
        icon: "Search",
        title: "Technical SEO foundation",
        description:
          "Semantic markup, structured data, sitemaps and clean information architecture - visibility built in, not bolted on.",
      },
      {
        icon: "ShoppingCart",
        title: "E-commerce platforms",
        description:
          "Product catalogs, payments, shipping and inventory sync engineered for conversion and operational accuracy.",
      },
      {
        icon: "PenLine",
        title: "Content management",
        description:
          "A CMS your marketing team can use confidently - structured content, previews and workflows, no developer needed.",
      },
      {
        icon: "Accessibility",
        title: "Accessibility (WCAG AA)",
        description:
          "Keyboard navigation, screen-reader support and contrast standards - usable by everyone, aligned with procurement requirements.",
      },
      {
        icon: "BarChart3",
        title: "Analytics & lead capture",
        description:
          "Conversion tracking, form analytics and CRM integration so you know what your website is actually producing.",
      },
    ],
    benefits: [
      { value: 90, suffix: "+", label: "Core Web Vitals performance scores as a build standard" },
      { value: 2, suffix: "x", label: "Typical improvement in enquiry conversion after rebuild" },
      { value: 100, suffix: "%", label: "Of pages shipped with structured metadata and schema" },
      { value: 0, label: "Developer dependency for routine content updates" },
    ],
    process: [
      {
        title: "Strategy & architecture",
        description:
          "Audience, positioning and content architecture defined first - the sitemap is a business decision, not a design one.",
      },
      {
        title: "Design",
        description:
          "A design system built for your brand: typography, components and layouts reviewed with you page by page.",
      },
      {
        title: "Engineering",
        description:
          "Built on modern frameworks with performance budgets, accessibility checks and SEO structure from the first commit.",
      },
      {
        title: "Content & QA",
        description:
          "Content entered, metadata completed, and the site tested across devices, browsers and assistive technology.",
      },
      {
        title: "Launch & growth",
        description:
          "Zero-downtime launch with redirects preserved, analytics verified and a measurement plan for ongoing improvement.",
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shopify", "Sanity CMS"],
    faqs: [
      {
        question: "How long does an enterprise website take to build?",
        answer:
          "A corporate website typically takes 6 to 10 weeks from kickoff to launch; e-commerce projects usually run 8 to 14 weeks depending on catalog size and integrations. We agree the timeline and milestones in the proposal.",
      },
      {
        question: "Will we be able to update the site ourselves?",
        answer:
          "Yes - that is a design requirement, not an afterthought. Content is managed through a structured CMS with previews, and we train your team at handover. Routine updates should never require a developer.",
      },
      {
        question: "Can you preserve our search rankings during a rebuild?",
        answer:
          "Yes. We audit your existing URLs and rankings, implement complete redirect mapping and carry over optimized metadata. Handled properly, a rebuild improves rankings rather than risking them.",
      },
      {
        question: "Do you connect e-commerce stores to inventory systems?",
        answer:
          "Yes. We integrate storefronts with ERP and inventory systems so stock levels, orders and fulfillment stay synchronized. Selling products you don't have - or hiding products you do - is an integration problem we solve routinely.",
      },
      {
        question: "What happens after launch?",
        answer:
          "Every project includes a warranty period, and most clients continue with a maintenance agreement covering updates, security, monitoring and iterative improvements informed by analytics.",
      },
    ],
  },
  {
    slug: "software-development",
    name: "Custom Software Development",
    shortName: "Custom Software",
    icon: "Code2",
    excerpt:
      "Purpose-built software for the processes that make your business different - where off-the-shelf tools stop fitting.",
    headline: "Software built around your business, not the other way around.",
    overview: [
      "Off-the-shelf software is built for the average company. If your competitive advantage lives in how you operate - your pricing logic, your workflow, your service model - forcing it into generic tools means either changing what makes you effective or drowning in workarounds.",
      "We design and build custom software for the processes that matter most: internal platforms, customer portals, operational tools and industry-specific systems. Every project starts with your workflow and your users, and is engineered to enterprise standards for security, performance and maintainability.",
      "Just as importantly, we build software your business can live with for years: documented, tested, handed over properly and supported after launch.",
    ],
    features: [
      {
        icon: "AppWindow",
        title: "Internal platforms & tools",
        description:
          "Operational systems that replace spreadsheet sprawl - built for the exact workflow your team runs every day.",
      },
      {
        icon: "DoorOpen",
        title: "Customer & partner portals",
        description:
          "Secure self-service portals for orders, documents, statements and support that cut service load and raise satisfaction.",
      },
      {
        icon: "DatabaseZap",
        title: "API & backend engineering",
        description:
          "Robust, documented APIs and data architectures that keep systems fast and integrations dependable at scale.",
      },
      {
        icon: "TestTubes",
        title: "Quality engineering",
        description:
          "Automated test suites, code review and staging environments - reliability is engineered, not hoped for.",
      },
      {
        icon: "Lock",
        title: "Security by design",
        description:
          "Authentication, authorization, encryption and audit logging built in from the first sprint, not patched in later.",
      },
      {
        icon: "GitBranch",
        title: "Clean handover",
        description:
          "Documented code, deployment automation and knowledge transfer - you own the software, without vendor lock-in.",
      },
    ],
    benefits: [
      { value: 100, suffix: "%", label: "Fit to your process - no workarounds, no unused modules" },
      { value: 50, suffix: "%", label: "Typical reduction in process cycle time versus manual tooling" },
      { value: 2, suffix: "wk", label: "Sprint cadence - working software reviewed every two weeks" },
      { value: 0, label: "Vendor lock-in - you own the code and the data" },
    ],
    process: [
      {
        title: "Discovery & scoping",
        description:
          "We define the problem, the users and success measures - and challenge scope that doesn't earn its cost.",
      },
      {
        title: "Design & prototyping",
        description:
          "Workflows become clickable prototypes your team validates before a line of production code is written.",
      },
      {
        title: "Iterative development",
        description:
          "Two-week sprints with working software at each review. You see progress continuously, not at the end.",
      },
      {
        title: "Testing & hardening",
        description:
          "Automated tests, security review and load testing against realistic data before anything reaches production.",
      },
      {
        title: "Deployment & evolution",
        description:
          "Controlled release, monitoring and a roadmap for the versions that follow - software is never 'done' at launch.",
      },
    ],
    technologies: ["TypeScript", "React", "Node.js", "Python", "PostgreSQL", "AWS"],
    faqs: [
      {
        question: "Should we build custom software or buy off-the-shelf?",
        answer:
          "Buy when your process is standard; build when your process is your advantage. In discovery we often recommend a hybrid - a proven platform for the standard parts and custom software only where it earns its cost. We have no licensing incentive pushing us either way.",
      },
      {
        question: "How do you keep projects on budget?",
        answer:
          "Fixed-scope discovery first, itemized proposals, and two-week sprints with working software at every review. Scope changes are priced and approved before they are built - never discovered on an invoice.",
      },
      {
        question: "Who owns the intellectual property?",
        answer:
          "You do. Source code, documentation and data are yours on final payment, delivered in your own repositories and cloud accounts. We design handovers so any competent team could take over - that standard keeps us honest.",
      },
      {
        question: "What if we need changes after launch?",
        answer:
          "Expected and planned for. Every project includes a warranty period, and our support agreements cover enhancements, new features and adaptations as your business evolves.",
      },
      {
        question: "Can you take over an existing system another vendor built?",
        answer:
          "Yes. We start with a technical audit covering code quality, security and infrastructure, then present a stabilization and improvement plan. Rescuing stalled projects is a regular part of our work.",
      },
    ],
  },
  {
    slug: "mobile-apps",
    name: "Mobile Application Development",
    shortName: "Mobile Apps",
    icon: "Smartphone",
    excerpt:
      "iOS and Android applications for customers and field teams - built once, deployed everywhere, connected to your systems.",
    headline: "Put your business in your customers' pocket - and your team's.",
    overview: [
      "The right mobile app is rarely a marketing exercise. It is a field team logging jobs from site, customers tracking orders without calling your office, technicians completing inspections offline, or patients booking appointments in three taps.",
      "We build native-quality iOS and Android applications using cross-platform technology - one codebase, both stores, lower lifetime cost. Every app connects to your core systems so it works with your business data, not a copy of it.",
      "From consumer-facing e-commerce apps to internal operations tools, we handle the full lifecycle: strategy, design, engineering, store approval and ongoing releases.",
    ],
    features: [
      {
        icon: "TabletSmartphone",
        title: "Cross-platform engineering",
        description:
          "One codebase for iOS and Android with native-quality performance - roughly half the lifetime cost of two apps.",
      },
      {
        icon: "WifiOff",
        title: "Offline-first capability",
        description:
          "Field apps that keep working in basements, warehouses and remote sites, syncing automatically when back online.",
      },
      {
        icon: "BellRing",
        title: "Push notifications",
        description:
          "Order updates, job assignments and alerts delivered in real time - designed to be useful, not noisy.",
      },
      {
        icon: "Link2",
        title: "System integration",
        description:
          "Apps connected to your ERP, CRM and databases so the field and the office always see the same data.",
      },
      {
        icon: "Fingerprint",
        title: "Security & authentication",
        description:
          "Biometric login, encrypted storage and role-based access appropriate for business and customer data.",
      },
      {
        icon: "Store",
        title: "Store publishing & releases",
        description:
          "App Store and Play Store submission, review handling and a managed release pipeline for updates.",
      },
    ],
    benefits: [
      { value: 50, suffix: "%", label: "Lower lifetime cost versus separate native apps" },
      { value: 2, label: "Platforms shipped from a single codebase" },
      { value: 80, suffix: "%", label: "Less paperwork for field teams with mobile data capture" },
      { value: 4.5, suffix: "+", label: "Store rating standard we design and test for" },
    ],
    process: [
      {
        title: "Product definition",
        description:
          "We define who uses the app, for what, and how success is measured - before any screens are designed.",
      },
      {
        title: "UX & UI design",
        description:
          "Task-focused interface design following platform conventions, prototyped and tested with real users.",
      },
      {
        title: "Agile development",
        description:
          "Sprint-based engineering with testable builds on your own devices from the early weeks of the project.",
      },
      {
        title: "Testing & store approval",
        description:
          "Device-matrix testing, performance profiling and managed submission through Apple and Google review.",
      },
      {
        title: "Launch & iteration",
        description:
          "Analytics, crash monitoring and a release cadence that keeps the app improving after day one.",
      },
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL"],
    faqs: [
      {
        question: "Native or cross-platform - which should we choose?",
        answer:
          "For the vast majority of business applications, modern cross-platform frameworks like React Native and Flutter deliver native-quality results at roughly half the lifetime cost. We recommend fully native builds only when an app depends on specialized hardware access or extreme graphics performance.",
      },
      {
        question: "How much does a mobile app cost?",
        answer:
          "A focused business app typically starts in the range of a mid-five-figure investment; complex products with extensive integrations cost more. After discovery you receive a fixed, itemized proposal tied to an agreed scope.",
      },
      {
        question: "Do you handle App Store and Play Store submission?",
        answer:
          "Yes - including store listings, review compliance and rejection handling. We also set up the release pipeline so future updates ship smoothly.",
      },
      {
        question: "Can the app work without an internet connection?",
        answer:
          "Yes. For field-team applications we build offline-first: data is captured locally and synchronized automatically when connectivity returns, with conflict handling designed in.",
      },
      {
        question: "Who maintains the app after launch?",
        answer:
          "We offer maintenance agreements covering OS updates, security patches, monitoring and feature development. Apple and Google change requirements every year - a plan for that is part of responsible app ownership.",
      },
    ],
  },
  {
    slug: "cloud-solutions",
    name: "Cloud Infrastructure Solutions",
    shortName: "Cloud Infrastructure",
    icon: "Cloud",
    excerpt:
      "Secure, cost-efficient cloud architecture, migration and management - infrastructure that scales with the business, not against it.",
    headline: "Infrastructure that scales with you - and bills that don't.",
    overview: [
      "Cloud infrastructure done well is invisible: systems stay fast under load, data is protected, recovery is tested and monthly costs are predictable. Done poorly, it is the opposite - outages at the worst moments, surprise invoices and security posture nobody can explain.",
      "We architect, migrate and manage cloud environments on AWS, Azure and Google Cloud. That includes moving legacy systems off aging servers, designing high-availability architecture for critical applications, and bringing runaway cloud spend under engineering control.",
      "Security and continuity are treated as first-class requirements: encrypted data, least-privilege access, automated backups and disaster recovery plans that are actually rehearsed.",
    ],
    features: [
      {
        icon: "CloudCog",
        title: "Cloud architecture & migration",
        description:
          "Assessment, planning and zero-drama migration of applications and data from legacy servers to cloud platforms.",
      },
      {
        icon: "Activity",
        title: "High availability & scaling",
        description:
          "Redundant, auto-scaling architecture so demand spikes are absorbed and single failures don't become outages.",
      },
      {
        icon: "ShieldCheck",
        title: "Security & compliance",
        description:
          "Encryption, network isolation, least-privilege access and audit logging aligned to your regulatory obligations.",
      },
      {
        icon: "HardDriveDownload",
        title: "Backup & disaster recovery",
        description:
          "Automated backups and documented recovery procedures - with restore drills, because untested backups are hopes.",
      },
      {
        icon: "CircleDollarSign",
        title: "Cost optimization",
        description:
          "Right-sizing, reserved capacity and waste elimination that routinely cut cloud bills by a third or more.",
      },
      {
        icon: "MonitorCheck",
        title: "Monitoring & management",
        description:
          "24/7 monitoring, alerting and patching under a managed agreement, with clear reporting on uptime and spend.",
      },
    ],
    benefits: [
      { value: 99.9, suffix: "%", label: "Uptime targets designed into the architecture" },
      { value: 35, suffix: "%", label: "Average cloud cost reduction from optimization work" },
      { value: 15, suffix: "min", label: "Recovery point objectives achievable with automated backup" },
      { value: 0, label: "Capital spend on server hardware going forward" },
    ],
    process: [
      {
        title: "Assessment",
        description:
          "We inventory your current systems, dependencies, risks and costs to build an accurate migration and architecture picture.",
      },
      {
        title: "Architecture design",
        description:
          "Target architecture, security model and cost projection are documented and agreed before anything moves.",
      },
      {
        title: "Migration",
        description:
          "Systems move in planned waves with rollback paths, minimizing disruption - cutovers are scheduled around your business.",
      },
      {
        title: "Hardening & validation",
        description:
          "Security controls, backups and recovery procedures are implemented and tested against the agreed targets.",
      },
      {
        title: "Managed operations",
        description:
          "Ongoing monitoring, patching, optimization and reporting - or a structured handover to your internal team.",
      },
    ],
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
    faqs: [
      {
        question: "Is the cloud actually cheaper than our own servers?",
        answer:
          "Usually, when engineered properly - you stop buying hardware, paying for idle capacity and absorbing surprise failures. But unmanaged cloud environments can cost more than the servers they replaced. Cost modeling is part of our assessment, so you decide with real numbers.",
      },
      {
        question: "How disruptive is a cloud migration?",
        answer:
          "Minimal when planned properly. We migrate in waves, schedule cutovers outside business hours and keep rollback paths available. Most teams notice the improved performance before they notice anything moved.",
      },
      {
        question: "Which cloud provider do you recommend?",
        answer:
          "AWS, Azure and Google Cloud are all mature. The right choice depends on your existing tooling (Microsoft-centric businesses often fit Azure), your workloads and your team's skills. We are certified across all three and recommend based on fit, not partnership incentives.",
      },
      {
        question: "How is our data protected?",
        answer:
          "Encryption in transit and at rest, network isolation, least-privilege access with multi-factor authentication, and full audit logging. For regulated industries we align the architecture to your specific compliance requirements from the design stage.",
      },
      {
        question: "Can you manage our cloud after migration?",
        answer:
          "Yes. Most clients choose a managed agreement covering monitoring, patching, backup verification, incident response and monthly cost reviews. Alternatively, we document everything and hand over to your internal IT team.",
      },
    ],
  },
  {
    slug: "system-integration",
    name: "System Integration Services",
    shortName: "System Integration",
    icon: "Network",
    excerpt:
      "Connect your ERP, CRM, e-commerce and finance systems so data flows automatically - one business, one set of numbers.",
    headline: "Your systems should talk to each other. We make them.",
    overview: [
      "Most businesses don't have a software problem - they have a connection problem. The ERP doesn't know what the e-commerce store sold. The CRM doesn't know what finance invoiced. People bridge the gaps by exporting, retyping and reconciling, and the numbers never quite agree.",
      "We design and build integrations that make your systems behave like one platform: orders flow from store to ERP to fulfillment automatically, customer records stay consistent everywhere, and finance works from data that reconciles itself.",
      "Our integrations are engineered for the long term - monitored, fault-tolerant and documented - not fragile point-to-point scripts that break silently and take a week to diagnose.",
    ],
    features: [
      {
        icon: "Combine",
        title: "ERP to CRM-commerce integration",
        description:
          "Orders, customers, stock and pricing synchronized across your core platforms in near real time.",
      },
      {
        icon: "Cable",
        title: "API development",
        description:
          "Clean, documented APIs for systems that lack them - including safe interfaces onto legacy software.",
      },
      {
        icon: "Layers",
        title: "Middleware & event architecture",
        description:
          "A resilient integration layer with queuing and retries, so one system's downtime doesn't corrupt another's data.",
      },
      {
        icon: "FolderSync",
        title: "Data consistency & deduplication",
        description:
          "Matching and survivorship rules that keep one clean record per customer and product across every system.",
      },
      {
        icon: "AlarmClockCheck",
        title: "Monitoring & alerting",
        description:
          "Every integration is watched. Failures alert us before they become week-old data problems on your desk.",
      },
      {
        icon: "FileCode2",
        title: "Documentation & handover",
        description:
          "Data flows, mappings and runbooks documented, so the integration layer is an asset rather than a mystery.",
      },
    ],
    benefits: [
      { value: 100, suffix: "%", label: "Elimination of manual re-entry between connected systems" },
      { value: 0, label: "Reconciliation meetings once systems share one truth" },
      { value: 90, suffix: "%", label: "Faster order-to-fulfillment handoff with automated flows" },
      { value: 24, suffix: "/7", label: "Integration monitoring with proactive failure alerts" },
    ],
    process: [
      {
        title: "Systems & data audit",
        description:
          "We map every system, its data and the manual bridges between them - the integration blueprint starts here.",
      },
      {
        title: "Integration architecture",
        description:
          "We design the flows, ownership rules and error handling, choosing direct APIs or middleware as the situation warrants.",
      },
      {
        title: "Build & mapping",
        description:
          "Connections are developed and field-level mappings implemented, including transformation and validation rules.",
      },
      {
        title: "Parallel testing",
        description:
          "Integrations run alongside existing manual processes on real data until the outputs match - then we switch over.",
      },
      {
        title: "Monitoring & support",
        description:
          "Live integrations are monitored continuously, with alerting, logging and support under an ongoing agreement.",
      },
    ],
    technologies: ["REST & GraphQL APIs", "n8n", "Apache Kafka", "MuleSoft", "Webhooks", "PostgreSQL"],
    faqs: [
      {
        question: "Can you integrate old or unusual software?",
        answer:
          "Almost always. Legacy systems rarely have modern APIs, but they have databases, file exports or other access points we can build safe interfaces around. In the rare case a system truly cannot be integrated, we tell you early and outline alternatives.",
      },
      {
        question: "What happens if one system goes down?",
        answer:
          "Well-engineered integrations fail gracefully. We use queues and retries so data waits safely and flows resume automatically when the system returns - nothing is lost and nothing is silently corrupted.",
      },
      {
        question: "Real-time or scheduled synchronization?",
        answer:
          "It depends on the data. Stock levels and orders usually justify near real-time sync; reference data is often fine on a schedule. We match the pattern to the business need rather than defaulting to one approach.",
      },
      {
        question: "How do you prevent duplicate or conflicting records?",
        answer:
          "We define a system of record for each data type and implement matching and survivorship rules - which system wins, and when. This governance is agreed with your team before the integration is built.",
      },
      {
        question: "Do integrations break when systems update?",
        answer:
          "Vendor updates can change APIs, which is why our integrations are monitored and covered by support agreements. We catch breaking changes quickly - usually before your team notices anything.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design & Technology Consulting",
    shortName: "Design & Consulting",
    icon: "PenTool",
    excerpt:
      "Product design that makes complex systems feel simple, and independent technology advice for decisions you can't afford to get wrong.",
    headline: "Clear thinking before design. Clear design before code.",
    overview: [
      "The most expensive software problems are decided before development starts: the tool nobody adopts because it fights how people work, the platform chosen on a vendor's promise, the roadmap that automates the wrong process first.",
      "Our design practice covers research, UX architecture and interface design for business software - internal tools, portals, dashboards and customer products. We design for the operations manager with thirty seconds, not the demo audience.",
      "Our consulting practice gives leadership independent technical judgment: platform selection, digital roadmaps, architecture reviews and vendor due diligence. We sell advice, not licenses - so our recommendation is the one we would act on with our own money.",
    ],
    features: [
      {
        icon: "SearchCheck",
        title: "User research & audits",
        description:
          "We watch how your people actually work and where current tools fail them - design decisions start from evidence.",
      },
      {
        icon: "Frame",
        title: "UX architecture & prototyping",
        description:
          "Workflows, information architecture and clickable prototypes validated with real users before development begins.",
      },
      {
        icon: "Palette",
        title: "Interface & design systems",
        description:
          "Clean, consistent interfaces and reusable component systems that keep every screen coherent as products grow.",
      },
      {
        icon: "Map",
        title: "Digital transformation roadmaps",
        description:
          "A sequenced, costed plan for your systems landscape - what to fix first, what to defer and why.",
      },
      {
        icon: "Scale",
        title: "Platform & vendor selection",
        description:
          "Independent evaluation of platforms and proposals, scored against your requirements rather than sales narratives.",
      },
      {
        icon: "FileSearch",
        title: "Architecture & code review",
        description:
          "An expert second opinion on systems you own or are about to buy - risks, debt and remediation priorities, in plain language.",
      },
    ],
    benefits: [
      { value: 70, suffix: "%", label: "Of software failures trace to skipped research and design" },
      { value: 10, suffix: "x", label: "Cheaper to fix a flow in prototype than in production" },
      { value: 100, suffix: "%", label: "Vendor-independent - we sell judgment, not licenses" },
      { value: 3, suffix: "yr", label: "Planning horizon for the roadmaps we deliver" },
    ],
    process: [
      {
        title: "Immersion",
        description:
          "We study your business, users and systems firsthand - interviews, observation and data, not assumptions.",
      },
      {
        title: "Findings & options",
        description:
          "What we learned, what it means and the realistic options - each with costs, risks and trade-offs stated plainly.",
      },
      {
        title: "Design & recommendation",
        description:
          "Prototypes for design engagements; a written, defensible recommendation for consulting engagements.",
      },
      {
        title: "Validation",
        description:
          "Designs tested with real users; recommendations pressure-tested with your leadership and technical teams.",
      },
      {
        title: "Delivery & follow-through",
        description:
          "Handover to build teams - ours or yours - with enough clarity that intent survives implementation.",
      },
    ],
    technologies: ["Figma", "Design Systems", "Usability Testing", "Miro", "Storybook", "Analytics"],
    faqs: [
      {
        question: "Do we need design if we're building an internal tool?",
        answer:
          "Internal tools benefit most. Staff can't churn like customers, but they can work slowly, make errors and resist adoption - all of which cost real money every day. Well-designed internal software pays for its design many times over.",
      },
      {
        question: "Can you consult without us committing to a build?",
        answer:
          "Yes. Roadmaps, platform selections and architecture reviews are standalone engagements. Many clients use us purely for independent judgment and take the output to their own teams or other vendors.",
      },
      {
        question: "Are you independent from the platforms you recommend?",
        answer:
          "Yes. We hold technical certifications across major platforms but our consulting fees never depend on which product you choose. When a recommendation involves software we could also implement, we say so explicitly.",
      },
      {
        question: "What does a typical engagement look like?",
        answer:
          "Design engagements run 4 to 8 weeks from research to validated prototype. Consulting engagements - roadmaps, selections, reviews - typically run 2 to 6 weeks and end with a written recommendation and presentation to leadership.",
      },
      {
        question: "Can you review a proposal another vendor gave us?",
        answer:
          "Yes, and it is one of the highest-value things we do. A short due-diligence review of scope, architecture and pricing frequently saves multiples of its cost - either by improving the deal or by preventing the wrong one.",
      },
    ],
  },
  {
    slug: "maintenance-support",
    name: "Ongoing Support & Maintenance",
    shortName: "Support & Maintenance",
    icon: "Wrench",
    excerpt:
      "Proactive monitoring, updates, security and a real human answering when something breaks - for systems your business depends on.",
    headline: "Business systems need a team behind them. That's us.",
    overview: [
      "Software is not a purchase; it is an operating dependency. The systems your business runs on need patching, monitoring, backups, security review and someone accountable when something behaves strangely at 8 a.m. on invoice day.",
      "Our support agreements keep business systems healthy long after launch - whether we built them or someone else did. That means proactive monitoring that catches issues before your staff do, scheduled updates that never surprise you, and guaranteed response times when you need help.",
      "Clients tell us the real product is calm: knowing the systems are watched, the backups are tested and the next problem already has an owner.",
    ],
    features: [
      {
        icon: "MonitorCheck",
        title: "Proactive monitoring",
        description:
          "Uptime, performance and error monitoring around the clock - most issues are fixed before anyone notices them.",
      },
      {
        icon: "ShieldPlus",
        title: "Security & patching",
        description:
          "Scheduled updates, vulnerability patching and security reviews that keep systems protected without disruption.",
      },
      {
        icon: "DatabaseBackup",
        title: "Backups & recovery",
        description:
          "Automated backups with periodic restore testing - because a backup you've never restored is only a theory.",
      },
      {
        icon: "Timer",
        title: "Guaranteed response times",
        description:
          "SLA-backed response for incidents, with severity levels agreed in writing - no ticket black holes.",
      },
      {
        icon: "Sparkles",
        title: "Enhancements & small changes",
        description:
          "A monthly allowance for improvements and adjustments, so systems evolve with the business instead of drifting behind it.",
      },
      {
        icon: "ClipboardList",
        title: "Reporting & reviews",
        description:
          "Monthly reports on uptime, incidents and work done, plus quarterly reviews of risks and recommendations.",
      },
    ],
    benefits: [
      { value: 99.9, suffix: "%", label: "Uptime maintained across supported client systems" },
      { value: 15, suffix: "min", label: "Critical-incident response under standard SLAs" },
      { value: 80, suffix: "%", label: "Of issues resolved proactively before users report them" },
      { value: 12, suffix: "mo", label: "Rolling security and update coverage, always current" },
    ],
    process: [
      {
        title: "System audit & onboarding",
        description:
          "We document your systems, access, risks and pending issues - including software other vendors built.",
      },
      {
        title: "Stabilization",
        description:
          "Known problems, missing backups and overdue updates are cleared first, so support starts from a healthy baseline.",
      },
      {
        title: "Monitoring setup",
        description:
          "Uptime, performance and error tracking are wired in, with alert thresholds tuned to what actually matters.",
      },
      {
        title: "Ongoing operations",
        description:
          "Scheduled maintenance, incident response within SLA, and a monthly allowance for improvements.",
      },
      {
        title: "Review & planning",
        description:
          "Quarterly reviews of stability, risk and upcoming needs - support that informs strategy, not just tickets.",
      },
    ],
    technologies: ["Grafana", "Sentry", "Uptime Monitoring", "GitHub Actions", "Docker", "Cloudflare"],
    faqs: [
      {
        question: "Can you support software built by another company?",
        answer:
          "Yes - a large share of our support clients came to us with systems built elsewhere. We start with a technical audit, stabilize anything urgent and then take ongoing responsibility. No judgment about the past; just a plan for the future.",
      },
      {
        question: "What response times do you guarantee?",
        answer:
          "Standard agreements provide 15-minute response for critical outages, with defined targets for high, medium and low severity issues. Exact SLAs are agreed in writing as part of your agreement.",
      },
      {
        question: "What is included in the monthly fee?",
        answer:
          "Monitoring, updates, security patching, backup management, incident response within SLA and a defined allowance of enhancement hours. The agreement itemizes everything - there is no 'that's extra' surprise culture.",
      },
      {
        question: "Do we have to commit long-term?",
        answer:
          "Agreements are annual with quarterly review points, and we earn renewal through reporting that shows exactly what you received. We don't rely on lock-in; we rely on being demonstrably worth it.",
      },
      {
        question: "How do you handle emergencies outside business hours?",
        answer:
          "Critical systems are monitored around the clock, and critical-severity incidents page our on-call engineers regardless of the hour. Out-of-hours coverage levels are defined in your SLA.",
      },
    ],
  },
  {
    slug: "managed-cloud",
    name: "Managed Cloud Infrastructure",
    shortName: "Managed Cloud",
    icon: "Cloud",
    excerpt: "Reliable, secure cloud hosting and infrastructure management tailored to your enterprise applications.",
    headline: "Infrastructure that stays up, stays backed up, and stays yours.",
    overview: [
      "Running enterprise software requires reliable infrastructure. We provide managed cloud hosting designed specifically for security, uptime, and performance.",
      "Our team handles server provisioning, hardening, ongoing monitoring, and guaranteed automated backups so your business operations never miss a beat."
    ],
    features: [
      {
        icon: "Shield",
        title: "Server Hardening",
        description: "Provisioning, OS security, firewall configurations, and fail2ban rules to protect your data."
      },
      {
        icon: "Container",
        title: "Docker Hosting",
        description: "Deploy ERPNext, CRM systems, n8n automations, and custom apps in secure, isolated containers."
      },
      {
        icon: "Activity",
        title: "Uptime Monitoring",
        description: "Proactive 24/7 monitoring and alerts so we address lags before your team even notices."
      },
      {
        icon: "DatabaseBackup",
        title: "Backup & Restore",
        description: "Regular, tested offsite backups to ensure you can recover instantly from any catastrophic failure."
      }
    ],
    benefits: [
      { value: 99.9, suffix: "%", label: "Guaranteed uptime SLA for critical infrastructure" },
      { value: 24, suffix: "/7", label: "Proactive system monitoring and incident response" }
    ],
    process: [
      { title: "Infrastructure Audit", description: "Reviewing your current hosting and identifying security or performance gaps." },
      { title: "Migration", description: "Seamless, zero-downtime transition to our managed cloud environment." },
      { title: "Ongoing Management", description: "Routine patching, monitoring, and proactive incident resolution." }
    ],
    technologies: ["AWS", "DigitalOcean", "Docker", "Linux", "Nginx", "PostgreSQL"],
    faqs: [
      { question: "Where is our data hosted?", answer: "We deploy instances in enterprise-grade data centers strategically located to minimize latency and comply with local data sovereignty regulations." },
      { question: "Do we have root access to our servers?", answer: "Yes. While we fully manage the infrastructure, you retain absolute ownership and access to your systems and data." }
    ]
  },
  {
    slug: "business-consulting",
    name: "Strategic Business Consulting",
    shortName: "Business Consulting",
    icon: "Briefcase",
    excerpt: "Expert guidance to refine operations, align technology with business goals, and drive sustainable scaling.",
    headline: "Strategy built on operational reality, not just slideware.",
    overview: [
      "Scaling a business requires more than just new software; it requires aligned processes and clear strategic direction. We help organizations audit their operational workflows and map technology directly to their growth targets.",
      "Our consulting engagements bridge the gap between executive vision and day-to-day execution, ensuring your teams have the systems and structures they need to succeed."
    ],
    features: [
      {
        icon: "Map",
        title: "Operational Roadmaps",
        description: "Clear, phased plans to transition from legacy processes to modern, scalable operations."
      },
      {
        icon: "LineChart",
        title: "Financial Modeling",
        description: "Aligning IT investments with measurable returns to ensure technology pays for itself."
      },
      {
        icon: "Users",
        title: "Change Management",
        description: "Strategies to ensure your team actually adopts the new processes and systems we implement."
      }
    ],
    benefits: [
      { value: 100, suffix: "%", label: "Alignment between business strategy and IT investments" },
      { value: 360, suffix: "°", label: "View of organizational bottlenecks and opportunities" }
    ],
    process: [
      { title: "Discovery & Analysis", description: "Deep-dive sessions with leadership and operational teams to understand bottlenecks." },
      { title: "Strategy Formulation", description: "Developing a concrete plan to align operations, technology, and staff." },
      { title: "Execution & Oversight", description: "Guiding the implementation phase to ensure strategic goals are met." }
    ],
    technologies: ["Process Mapping", "Change Management", "Financial Modeling"],
    faqs: [
      { question: "Do you only consult on technology?", answer: "We focus on operations and technology. A new system won't fix a broken process, so we start by optimizing the workflow before recommending software." },
      { question: "How long is a typical consulting engagement?", answer: "Engagements range from 2-week intensive audits to multi-month transformational oversight, depending entirely on the scope of your challenge." }
    ]
  },
  {
    slug: "digital-growth",
    name: "Digital Growth & Marketing",
    shortName: "Digital Growth",
    icon: "TrendingUp",
    excerpt: "Data-driven growth strategies that convert operational excellence into measurable market share.",
    headline: "Scale your revenue with predictable, trackable growth engines.",
    overview: [
      "A great business model needs an engine to generate consistent demand. Our digital growth services combine technical SEO, targeted campaigns, and conversion optimization.",
      "We track every click, lead, and sale, ensuring your marketing budget delivers a clear return on investment rather than vanity metrics."
    ],
    features: [
      {
        icon: "Target",
        title: "Performance Campaigns",
        description: "Targeted advertising across search and social channels, optimized for cost-per-acquisition."
      },
      {
        icon: "Search",
        title: "Technical SEO",
        description: "On-page and technical optimizations to ensure your digital properties capture organic demand."
      },
      {
        icon: "MousePointerClick",
        title: "Conversion Optimization",
        description: "Iterative testing of landing pages and funnels to turn more visitors into qualified leads."
      }
    ],
    benefits: [
      { value: 3, suffix: "x", label: "Average increase in qualified lead volume" },
      { value: 100, suffix: "%", label: "Transparent tracking and ROI attribution" }
    ],
    process: [
      { title: "Audience Profiling", description: "Identifying your ideal customer profile and the channels they trust." },
      { title: "Campaign Architecture", description: "Building the funnels, tracking, and ad creative required to capture attention." },
      { title: "Launch & Iterate", description: "Deploying campaigns and rigorously testing variables to improve conversion rates over time." }
    ],
    technologies: ["Google Analytics", "Meta Ads", "HubSpot", "A/B Testing", "Tag Manager", "SEO"],
    faqs: [
      { question: "How long until we see ROI?", answer: "While organic SEO takes months to mature, our targeted performance campaigns typically generate measurable, qualified leads within the first 30 days." },
      { question: "Do you provide reports?", answer: "Yes, you receive a live dashboard tracking spend, leads, and cost-per-acquisition. No hiding behind vanity metrics." }
    ]
  }
];

/** Look up a service by slug. */
export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
