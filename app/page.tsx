import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  Server, 
  Code2, 
  Headphones, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Workflow, 
  CheckCircle2, 
  Layers, 
  Activity, 
  AlertCircle, 
  FileText, 
  Users, 
  Building2, 
  Clock, 
  Sparkles,
  TrendingUp,
  HardDrive,
  GitBranch,
  Settings,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { HeroVisual } from "@/components/sections/hero-visual";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Build. Operate. Secure. Support. - Enterprise Technology Services",
  description:
    "Elvtera helps businesses build software, operate infrastructure, secure their technology, and support the products their customers rely on. A long-term technology engineering partner.",
  path: "/",
});

// Pain points directly from client requirements
const businessProblems = [
  {
    problem: "Your infrastructure is growing faster than your IT team.",
    solution: "We manage server provisioning, cloud topologies, and storage clusters so your team never bottlenecks scaling.",
    category: "Infrastructure",
    icon: Server,
  },
  {
    problem: "Your engineers are spending too much time on operational issues.",
    solution: "We take over patching, monitoring, and database upkeep so developers write product code rather than fighting fires.",
    category: "Operations",
    icon: Settings,
  },
  {
    problem: "You need cloud and server expertise without building another full-time team.",
    solution: "Get senior multi-cloud (AWS/Azure/OCI) and Linux/Windows systems architects on demand under flexible engagement models.",
    category: "Cloud",
    icon: Cloud,
  },
  {
    problem: "Your security stack needs constant monitoring and maintenance.",
    solution: "We implement continuous SIEM log aggregation, IAM least-privilege reviews, and proactive vulnerability mitigation.",
    category: "Security",
    icon: Lock,
  },
  {
    problem: "Your customers need technical support while your product team focuses on development.",
    solution: "Our remote L1/L2 product support specialists triage tickets, inspect logs, and reproduce bugs directly in staging.",
    category: "Support",
    icon: Headphones,
  },
  {
    problem: "You have repetitive processes that should be automated.",
    solution: "We design custom workflow pipelines (n8n, Python, webhooks) to eliminate manual data entry and invoice chasing.",
    category: "Automation",
    icon: Workflow,
  },
  {
    problem: "You need custom software that fits your business instead of another generic SaaS tool.",
    solution: "We engineer purpose-built web applications and operational systems designed around your real operating workflows.",
    category: "Software",
    icon: Code2,
  },
  {
    problem: "You need reliable technical capacity for a project without hiring a permanent team.",
    solution: "Fixed-scope project delivery with clear milestones, itemized pricing, and transparent code handover.",
    category: "Projects",
    icon: Layers,
  },
];

// Target industries & client profiles
const whoWeHelp = [
  {
    title: "SaaS & Software Companies",
    description: "Scale infrastructure reliability, offload L1/L2 technical customer support, and maintain 99.95%+ uptime SLAs.",
    icon: Cloud,
  },
  {
    title: "MSPs & IT Service Providers",
    tagline: "Your remote infrastructure and engineering extension.",
    description: "We work behind the scenes as your Tier-3 infrastructure and cloud engineering backstop without touching your client relationships.",
    icon: Users,
    isMsp: true,
  },
  {
    title: "FinTech & HealthTech",
    description: "Enforce strict least-privilege IAM, automated SIEM audit logs, encrypted backups, and reproducible infrastructure.",
    icon: ShieldCheck,
  },
  {
    title: "E-Commerce & Digital Brands",
    description: "High-concurrency infrastructure, database performance tuning, checkout automation, and responsive user support.",
    icon: TrendingUp,
  },
  {
    title: "Professional Services & Mid-Market",
    description: "Custom internal tools, ERP/CRM operational backbones, and eliminating spreadsheet dependencies across teams.",
    icon: Building2,
  },
  {
    title: "Businesses with Internal IT Teams",
    description: "Augment your existing staff with specialized cloud migration, security hardening, and after-hours monitoring capacity.",
    icon: Cpu,
  },
];

// 5-step delivery process
const workProcess = [
  {
    step: "01",
    name: "DISCOVER",
    description: "Understand your infrastructure, business processes, product, and operational requirements directly from operators.",
  },
  {
    step: "02",
    name: "ASSESS",
    description: "Identify risks, single points of failure, inefficiencies, technical gaps, and immediate optimization opportunities.",
  },
  {
    step: "03",
    name: "IMPLEMENT",
    description: "Build, configure, migrate, secure, or automate according to itemized specifications and living runbooks.",
  },
  {
    step: "04",
    name: "OPERATE",
    description: "Provide ongoing infrastructure management, security operations, software stewardship, or customer support under SLAs.",
  },
  {
    step: "05",
    name: "OPTIMIZE",
    description: "Continuously improve system reliability, cloud expenditure, security hardening, and operational throughput.",
  },
];

// 3 engagement models
const engagementModels = [
  {
    title: "PROJECTS",
    subtitle: "Defined Scope & Fixed Milestones",
    description: "For companies executing specific technical initiatives with clear start and end points.",
    useCases: [
      "Custom software and internal tool development",
      "Cloud migrations & infrastructure rebuilds",
      "Security hardening & SIEM configuration",
      "End-to-end workflow automation pipelines",
      "Monitoring & observability rollouts",
    ],
    cta: "Start a Project",
    href: "/book?intent=projects",
  },
  {
    title: "ONGOING MANAGED SERVICES",
    subtitle: "SLA-Backed Operational Stewardship",
    description: "Continuous day-to-day operations and stewardship under guaranteed service level agreements.",
    useCases: [
      "24/7 server & cloud infrastructure operations",
      "Security monitoring, SIEM & vulnerability management",
      "Remote L1/L2 customer and product support",
      "Database administration & backup verification",
      "Ongoing software maintenance & hypercare",
    ],
    cta: "Explore Managed Services",
    href: "/book?intent=managed-services",
  },
  {
    title: "EXTENDED TEAM",
    subtitle: "Dedicated Technical Capacity",
    description: "Extend your internal team with specialized engineers who integrate directly into your workflows and tools.",
    useCases: [
      "Dedicated infrastructure & DevOps engineering capacity",
      "Embedded technical product support specialists",
      "Behind-the-scenes engineering backstop for MSPs",
      "Senior full-stack developers for sprint delivery",
      "No agency markups or staffing churn",
    ],
    cta: "Extend Your Team",
    href: "/book?intent=extended-team",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ================================================================== */}
      {/* 1. HERO SECTION                                                    */}
      {/* ================================================================== */}
      <section className="relative overflow-hidden border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            
            <div className="lg:col-span-7">
              <Reveal>
                <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-[3.5rem] leading-[1.08] font-display">
                  Build. Operate. Secure. Support.
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-2xl lg:text-xl font-normal">
                  Elvtera helps businesses build software, operate infrastructure, secure their technology, and support the products their customers rely on.
                </p>

                <p className="mt-3 text-sm text-slate-500 max-w-xl leading-relaxed">
                  Technology solutions for businesses that need reliable infrastructure, secure operations, customer support, and custom software.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button href="/book" size="lg">
                    <Calendar className="size-4" />
                    Book a Technical Call
                  </Button>
                  <Button href="#verticals" variant="outline" size="lg">
                    Explore Our Services
                  </Button>
                </div>

                {/* Subtle visual relationship ribbon */}
                <div className="mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="font-mono font-bold text-purple-700 block text-[11px]">BUILD</span>
                    <span className="text-slate-600 font-medium">Software & Auto</span>
                  </div>
                  <div>
                    <span className="font-mono font-bold text-blue-700 block text-[11px]">OPERATE</span>
                    <span className="text-slate-600 font-medium">Managed Infra</span>
                  </div>
                  <div>
                    <span className="font-mono font-bold text-emerald-700 block text-[11px]">SECURE</span>
                    <span className="text-slate-600 font-medium">SecOps & IAM</span>
                  </div>
                  <div>
                    <span className="font-mono font-bold text-amber-700 block text-[11px]">SUPPORT</span>
                    <span className="text-slate-600 font-medium">Product Support</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Hero Visual Matrix */}
            <div className="lg:col-span-5">
              <HeroVisual />
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 2. HOMEPAGE SERVICE MAP / ARCHITECTURE                             */}
      {/* ================================================================== */}
      <section className="py-20 lg:py-24 bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Service Architecture"
            title="The Elvtera Technology Framework"
            description="Everything connects to one central purpose: helping businesses build, operate, secure, and support the technology their operations depend upon."
          />

          <div className="mt-14 max-w-5xl mx-auto rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-10 shadow-sm">
            
            {/* Top Root Node */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-900 text-white shadow-md">
                <span className="font-display font-extrabold tracking-wider text-sm sm:text-base">
                  ELVTERA
                </span>
                <span className="text-slate-400 text-xs hidden sm:inline">|</span>
                <span className="text-slate-300 text-xs hidden sm:inline">
                  Enterprise Technology Partnership
                </span>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="w-0.5 h-8 bg-slate-300 mx-auto my-1" />

            {/* 4 Pillars Horizontal Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* BUILD */}
              <div className="rounded-2xl border border-purple-200 bg-white p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                      BUILD
                    </span>
                    <Code2 className="size-4 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm font-display">
                    Custom Software & Automation
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                    Custom web apps, internal tools, ERP/CRM engineering, workflow automation, and AI agents.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-purple-700">
                    Software helps you build.
                  </span>
                </div>
              </div>

              {/* OPERATE */}
              <div className="rounded-2xl border border-blue-200 bg-white p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      OPERATE
                    </span>
                    <Server className="size-4 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm font-display">
                    Infrastructure & Managed IT
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                    Cloud management (AWS/Azure/OCI), Linux/Windows servers, databases, and network connectivity.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-blue-700">
                    Infrastructure helps you operate.
                  </span>
                </div>
              </div>

              {/* SECURE */}
              <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      SECURE
                    </span>
                    <ShieldCheck className="size-4 text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm font-display">
                    Cybersecurity & SecOps
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                    SIEM log management, identity & MFA controls, endpoint security, hardening, and threat detection.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-emerald-700">
                    Security protects your business.
                  </span>
                </div>
              </div>

              {/* SUPPORT */}
              <div className="rounded-2xl border border-amber-200 bg-white p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                      SUPPORT
                    </span>
                    <Headphones className="size-4 text-amber-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm font-display">
                    Customer & Product Support
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                    Remote L1 frontline support, L2 technical triage, bug escalation, and helpdesk operations.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-amber-700">
                    Support protects user trust.
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 3. TWO PRIMARY VERTICALS                                           */}
      {/* ================================================================== */}
      <section id="verticals" className="py-20 lg:py-28 bg-surface border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Core Structure"
            title="Two Ways We Help Businesses"
            description="We simplify enterprise technology into two focused operational verticals designed to handle your technical weight."
          />

          {/* VERTICAL 01 */}
          <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 lg:p-12 shadow-sm">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-md bg-secondary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary">
                VERTICAL 01
              </div>
              <h3 className="mt-4 text-2xl lg:text-3xl font-bold text-primary font-display">
                INFRASTRUCTURE, SECURITY & CUSTOMER OPERATIONS
              </h3>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Keep your technology reliable, secure, and supported with a remote team that can operate infrastructure and support your customers.
              </p>
            </div>

            {/* 3 Sub-groups: A, B, C */}
            <div className="mt-10 grid gap-8 md:grid-cols-3 border-t border-slate-100 pt-10">
              
              {/* A. Infrastructure & Cloud */}
              <div className="flex flex-col justify-between rounded-2xl border border-line bg-surface p-7">
                <div>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 border border-blue-200">
                    <Server className="size-5" />
                  </div>
                  <h4 className="mt-4 text-lg font-bold text-primary font-display">
                    A. Infrastructure & Cloud
                  </h4>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    Server administration (Linux/Windows), cloud operations (AWS/Azure/OCI), databases, networking, monitoring, and backups.
                  </p>
                  <ul className="mt-4 space-y-1.5 text-xs text-slate-600 border-t border-slate-200/60 pt-4">
                    <li className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-blue-600" />
                      <span>Server & Database Administration</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-blue-600" />
                      <span>AWS / Azure / OCI Architecture</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-blue-600" />
                      <span>Immutable Backups & Disaster Recovery</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-blue-600" />
                      <span>Infrastructure & Application Monitoring</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-line">
                  <Link 
                    href="/infrastructure" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:underline"
                  >
                    <span>Discuss Your Infrastructure</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>

              {/* B. Security Operations */}
              <div className="flex flex-col justify-between rounded-2xl border border-line bg-surface p-7">
                <div>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <ShieldCheck className="size-5" />
                  </div>
                  <h4 className="mt-4 text-lg font-bold text-primary font-display">
                    B. Security Operations
                  </h4>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    SIEM log management, identity & MFA protection, endpoint EDR, vulnerability management, and security hardening.
                  </p>
                  <ul className="mt-4 space-y-1.5 text-xs text-slate-600 border-t border-slate-200/60 pt-4">
                    <li className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-emerald-600" />
                      <span>Centralized SIEM Log Monitoring</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-emerald-600" />
                      <span>IAM Least Privilege & Mandatory MFA</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-emerald-600" />
                      <span>Vulnerability Scanning & Patch Mitigation</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-emerald-600" />
                      <span>Linux & Windows System Hardening</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-line">
                  <Link 
                    href="/security" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:underline"
                  >
                    <span>Talk to a Security Specialist</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>

              {/* C. Remote Customer / Product Support */}
              <div className="flex flex-col justify-between rounded-2xl border border-line bg-surface p-7">
                <div>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
                    <Headphones className="size-5" />
                  </div>
                  <h4 className="mt-4 text-lg font-bold text-primary font-display">
                    C. Remote Product Support
                  </h4>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    Extend your customer support team with trained remote product support professionals for SaaS & technology platforms.
                  </p>
                  <ul className="mt-4 space-y-1.5 text-xs text-slate-600 border-t border-slate-200/60 pt-4">
                    <li className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-amber-600" />
                      <span>L1 User Support & Inquiry Handling</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-amber-600" />
                      <span>L2 Technical Triage & Bug Reproduction</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-amber-600" />
                      <span>Direct Escalation to Dev in Jira/GitHub</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-amber-600" />
                      <span>Knowledge Base & FAQ Documentation</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-line">
                  <Link 
                    href="/customer-support" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:underline"
                  >
                    <span>Discuss Your Support Requirements</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* VERTICAL 02 */}
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 lg:p-12 shadow-sm">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-md bg-purple-50 border border-purple-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">
                VERTICAL 02
              </div>
              <h3 className="mt-4 text-2xl lg:text-3xl font-bold text-primary font-display">
                CUSTOM SOFTWARE & AUTOMATION
              </h3>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Build the software and automated systems your business needs instead of forcing your operations into generic tools.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 border-t border-slate-100 pt-10">
              <div className="rounded-xl border border-line bg-surface p-5">
                <Code2 className="size-5 text-purple-600" />
                <h5 className="mt-3 font-bold text-sm text-slate-900 font-display">Custom Web Applications</h5>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Bespoke internal tools, customer portals, dashboards, and multi-tenant SaaS.
                </p>
              </div>

              <div className="rounded-xl border border-line bg-surface p-5">
                <Workflow className="size-5 text-purple-600" />
                <h5 className="mt-3 font-bold text-sm text-slate-900 font-display">Workflow Automation</h5>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  End-to-end process automation connecting CRM, inventory, and accounting automatically.
                </p>
              </div>

              <div className="rounded-xl border border-line bg-surface p-5">
                <Cpu className="size-5 text-purple-600" />
                <h5 className="mt-3 font-bold text-sm text-slate-900 font-display">AI Agents & Assistants</h5>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Task-specific AI agents, voice qualification systems, and guarded support chatbots.
                </p>
              </div>

              <div className="rounded-xl border border-line bg-surface p-5">
                <Layers className="size-5 text-purple-600" />
                <h5 className="mt-3 font-bold text-sm text-slate-900 font-display">CRM & ERP Systems</h5>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Unified platforms connecting billing, procurement, and warehouse operations.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                Full lifecycle engineering: Discover → Design → Build → Integrate → Launch → Support.
              </p>
              <Button href="/software-automation" variant="primary" size="md">
                Start a Software Project
                <ArrowRight className="size-3.5" />
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* ================================================================== */}
      {/* 4. BUSINESS PROBLEMS WE SOLVE                                      */}
      {/* ================================================================== */}
      <section className="py-20 lg:py-28 bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Challenges We Address"
            title="Real Operational Problems We Solve Daily"
            description="Businesses do not buy technology for the sake of it; they engage us when operational bottlenecks threaten growth, security, or customer satisfaction."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {businessProblems.map((prob, idx) => {
              const IconC = prob.icon;
              return (
                <Reveal key={idx} delay={(idx % 4) * 0.05}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-6 shadow-xs transition-all duration-300 hover:border-secondary/40 hover:bg-white hover:shadow-md">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-secondary bg-white px-2 py-0.5 rounded border border-line">
                          {prob.category}
                        </span>
                        <IconC className="size-4 text-slate-400" />
                      </div>
                      <h4 className="mt-4 font-bold text-sm text-slate-900 leading-snug">
                        &ldquo;{prob.problem}&rdquo;
                      </h4>
                      <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                        {prob.solution}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 5. WHO WE SERVE ("WHO WE HELP")                                    */}
      {/* ================================================================== */}
      <section className="py-20 lg:py-28 bg-surface border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Target Market"
            title="Who We Help"
            description="Primarily serving growing companies and operations-heavy enterprises that require high-reliability engineering, continuous infrastructure management, and technical capacity."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whoWeHelp.map((profile, idx) => {
              const IconC = profile.icon;
              return (
                <Reveal key={idx} delay={(idx % 3) * 0.06}>
                  <div className={`flex h-full flex-col justify-between rounded-2xl border p-7 shadow-xs transition-all duration-300 ${
                    profile.isMsp 
                      ? "border-blue-300 bg-blue-50/50 shadow-md" 
                      : "border-line bg-white hover:border-slate-300"
                  }`}>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                          <IconC className="size-5 text-secondary" />
                        </div>
                        {profile.isMsp && (
                          <span className="text-[10px] font-bold text-secondary uppercase bg-white px-2 py-0.5 rounded border border-blue-200">
                            Dedicated MSP Offering
                          </span>
                        )}
                      </div>

                      <h4 className="mt-4 font-bold text-base text-primary font-display">
                        {profile.title}
                      </h4>
                      
                      {profile.tagline && (
                        <p className="mt-1 text-xs font-semibold text-secondary">
                          {profile.tagline}
                        </p>
                      )}

                      <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                        {profile.description}
                      </p>
                    </div>

                    {profile.isMsp && (
                      <div className="mt-6 pt-4 border-t border-blue-200">
                        <Link 
                          href="/contact?intent=msp-partnership"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:underline"
                        >
                          <span>Inquire about MSP backstop capacity</span>
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 6. HOW ELVTERA WORKS (PROCESS)                                     */}
      {/* ================================================================== */}
      <section id="how-it-works" className="py-20 lg:py-28 bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Delivery Model"
            title="How Elvtera Works"
            description="A disciplined, repeatable methodology that turns operational complexity into stable, predictable execution."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {workProcess.map((step, idx) => (
              <Reveal key={step.step} delay={idx * 0.07}>
                <div className="flex flex-col h-full rounded-2xl border border-line bg-surface p-6 shadow-xs">
                  <span className="font-mono text-xs font-bold text-secondary">
                    {step.step}
                  </span>
                  <h4 className="mt-3 text-base font-bold text-primary font-display">
                    {step.name}
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 7. ENGAGEMENT MODELS                                               */}
      {/* ================================================================== */}
      <section className="py-20 lg:py-28 bg-surface border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Collaboration Models"
            title="How You Can Work With Elvtera"
            description="Whether you need a defined project delivered, ongoing managed infrastructure operations, or dedicated technical capacity to extend your existing team."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {engagementModels.map((model, idx) => (
              <Reveal key={model.title} delay={idx * 0.08}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-line bg-white p-8 shadow-xs hover:border-secondary/40 transition-colors">
                  <div>
                    <span className="font-mono text-xs font-bold text-secondary uppercase bg-secondary/10 px-2.5 py-1 rounded">
                      MODEL 0{idx + 1}
                    </span>
                    <h4 className="mt-4 font-bold text-xl text-primary font-display">
                      {model.title}
                    </h4>
                    <p className="mt-1 text-xs font-semibold text-slate-500">
                      {model.subtitle}
                    </p>
                    <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                      {model.description}
                    </p>

                    <div className="mt-6 border-t border-slate-100 pt-6">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Ideal For
                      </p>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {model.useCases.map((uc, uIdx) => (
                          <li key={uIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-3.5 text-secondary shrink-0 mt-0.5" />
                            <span>{uc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <Button href={model.href} variant="outline" size="md" className="w-full justify-center">
                      {model.cta}
                      <ArrowRight className="size-3.5" />
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 8. TRUST & ENGINEERING SECURITY                                    */}
      {/* ================================================================== */}
      <section className="py-20 lg:py-28 bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-900 text-white p-8 lg:p-14 shadow-xl">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono">
                  BUILT BY ENGINEERS · DESIGNED FOR RELIABLE OPERATIONS
                </span>
                <h3 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-display">
                  Actual Technical Safeguards Over Vanity Badges
                </h3>
                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  We don&apos;t make unsubstantiated claims or display fabricated logos. Our clients trust us because we operate with strict principle of least privilege, hardware MFA, living runbook documentation, and complete client ownership of all code and cloud credentials.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-4 text-xs text-slate-200">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Principle of Least Privilege (RBAC) across all nodes</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Mandatory FIDO2/TOTP Multi-Factor Authentication</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Air-gapped 3-2-1 backup verification</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>You retain 100% ownership of cloud accounts & code</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button href="/security-and-trust" variant="inverse" size="md">
                    Review Security & Trust Practices
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl bg-slate-800/80 border border-slate-700 p-6 space-y-4 text-xs font-mono text-slate-300">
                <div className="flex items-center justify-between border-b border-slate-700 pb-2 text-slate-400">
                  <span>TELEMETRY INTEGRITY</span>
                  <span className="text-emerald-400">ENFORCED</span>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-400"># Audit & Access Control</p>
                  <p className="text-white">SSH: Key-Only Authentication (No Root)</p>
                  <p className="text-white">Vault: HashiCorp / AWS Secrets Manager</p>
                  <p className="text-white">SIEM: Wazuh & Central Syslog Ingestion</p>
                  <p className="text-white">Disaster Recovery: Scheduled Restore Drills</p>
                </div>
                <div className="pt-2 border-t border-slate-700 text-[11px] text-slate-400">
                  Zero vendor lock-in. Full handover documentation provided.
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 9. REALISTIC CASE STUDIES / PROOF                                  */}
      {/* ================================================================== */}
      <section className="py-20 lg:py-28 bg-surface border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Proven Execution"
            title="Engineered for Real-World Reliability"
            description="Representative operational improvements achieved for clients across infrastructure, security, and custom software."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-line bg-white p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono">
                  INFRASTRUCTURE CASE
                </span>
                <p className="mt-4 font-display text-4xl font-extrabold text-primary">
                  99.98%
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Uptime across multi-region AWS & bare-metal nodes
                </p>
                <h4 className="mt-5 font-bold text-base text-primary">
                  High-Availability Cloud Migration & Monitoring
                </h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Migrated fragmented legacy VPS instances into an automated, Terraform-managed AWS ECS & RDS cluster with automated WAL point-in-time recovery.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold text-slate-700">Scope: Linux · Windows · Database techs · Backups · Zabbix · Commvault · CrowdStrike</span>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-white p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 font-mono">
                  CUSTOMER OPERATIONS CASE
                </span>
                <p className="mt-4 font-display text-4xl font-extrabold text-primary">
                  &lt;18 min
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  First-response SLA on critical Tier-2 escalations
                </p>
                <h4 className="mt-5 font-bold text-base text-primary">
                  Remote Technical Support for B2B SaaS
                </h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Provided dedicated remote L1 and L2 support engineers who reproduce application bugs in staging and submit clean Jira tickets, saving 15+ engineering hours per week.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold text-slate-700">Scope: Zendesk · ServiceNow · Jira · Postman · Chrome DevTools</span>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-white p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 font-mono">
                  SOFTWARE & AUTOMATION CASE
                </span>
                <p className="mt-4 font-display text-4xl font-extrabold text-primary">
                  40+ hrs/wk
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Manual spreadsheet reconciliation eliminated
                </p>
                <h4 className="mt-5 font-bold text-base text-primary">
                  Custom Operations Platform & Automated Sync
                </h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Engineered a bespoke Next.js and PostgreSQL internal portal with automated n8n webhook sync between order intake, invoicing, and inventory tracking.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold text-slate-700">Scope: Next.js · TypeScript · n8n · PostgreSQL (Not limited to a single tech stack for dev)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 10. FINAL INTENT-BASED CTA                                         */}
      {/* ================================================================== */}
      <section className="bg-primary text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono">
              LET&apos;S TALK TECHNOLOGY
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display">
              Build. Operate. Secure. Support.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              Tell us about your infrastructure requirements, customer support needs, or upcoming software project. We will schedule a direct conversation with an engineer.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/book" variant="inverse" size="lg">
                <Calendar className="size-4" />
                Book a Technical Call
              </Button>
              <Button 
                href="/solutions" 
                size="lg"
                className="border border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                Explore Solutions
              </Button>
            </div>

            {/* Quick intent links */}
            <div className="mt-12 pt-8 border-t border-slate-800 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <Link href="/infrastructure" className="hover:text-white transition-colors">
                → Discuss Infrastructure
              </Link>
              <Link href="/security" className="hover:text-white transition-colors">
                → Talk to a Security Specialist
              </Link>
              <Link href="/customer-support" className="hover:text-white transition-colors">
                → Discuss Support Requirements
              </Link>
              <Link href="/software-automation" className="hover:text-white transition-colors">
                → Start a Software Project
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
