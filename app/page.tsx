import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  Server, 
  Code2, 
  Briefcase,
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
  Globe,
  Gauge,
  Terminal,
  Shield,
  Search,
  Zap,
  Repeat
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { HeroVisual } from "@/components/sections/hero-visual";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Elvtera — End-to-End Technology Solutions for Growing Businesses",
  description:
    "Elvtera helps businesses build digital systems, develop custom software, operate their IT, and secure the technology they depend on. One balanced technology partner.",
  path: "/",
});

// Problems we solve: Real business problems matching solutions
const problemsWeSolve = [
  {
    problem: "“Our technology is growing faster than our IT team.”",
    solution: "We provide hands-on IT operations, cloud architecture (AWS/Azure/OCI), server administration, and capacity planning.",
    pillar: "IT & Security",
    route: "/solutions/it-operations",
    icon: Server,
  },
  {
    problem: "“We need a system built around our workflow.”",
    solution: "We develop purpose-built custom software, operational dashboards, and internal platforms matching your exact workflow.",
    pillar: "Software Solutions",
    route: "/solutions/custom-software",
    icon: Code2,
  },
  {
    problem: "“Too much of our business still runs manually.”",
    solution: "We engineer workflow automations, API integrations, and AI pipelines to eliminate duplicate data entry and manual administrative friction.",
    pillar: "Business & Automation",
    route: "/solutions/automation-ai",
    icon: Workflow,
  },
  {
    problem: "“We need better visibility into our infrastructure.”",
    solution: "We configure 24/7 telemetry monitoring, synthetic health probes, alert escalations, and performance dashboards.",
    pillar: "IT & Security",
    route: "/solutions/it-operations#monitoring",
    icon: Activity,
  },
  {
    problem: "“Our systems need stronger security.”",
    solution: "We implement centralized SIEM log monitoring, IAM least-privilege, mandatory MFA, vulnerability patching, and system hardening.",
    pillar: "IT & Security",
    route: "/solutions/cybersecurity",
    icon: Lock,
  },
  {
    problem: "“We need a CRM but don't want to force our process into someone else's software.”",
    solution: "We design and deploy custom CRM & ERP systems or deeply configure modern platforms around how your team actually sells and operates.",
    pillar: "Business & Software",
    route: "/solutions/crm-erp",
    icon: Briefcase,
  },
  {
    problem: "“Our support team is struggling to keep up.”",
    solution: "We provide trained remote L1/L2 technical support professionals who triage tickets, inspect logs, and reproduce issues directly in staging.",
    pillar: "Operations & Support",
    route: "/solutions/technical-support",
    icon: Headphones,
  },
];

// Target industries & client profiles
const industriesGrid = [
  {
    name: "Growing Businesses",
    desc: "Scaling operations requiring modern digital systems, automated pipelines, and solid technical foundations.",
    icon: TrendingUp,
  },
  {
    name: "SaaS & Software Companies",
    desc: "Scale multi-tenant cloud reliability, offload L1/L2 product support, and secure application environments.",
    icon: Cloud,
  },
  {
    name: "Technology Companies",
    desc: "Engineering support for complex infrastructure, API connectivity, microservices, and continuous deployment.",
    icon: Cpu,
  },
  {
    name: "Startups & Scaleups",
    desc: "Accelerate software delivery, set up CRM & GTM infrastructure, and establish production-ready cloud architectures.",
    icon: Sparkles,
  },
  {
    name: "Professional Services",
    desc: "Eliminate spreadsheet chaos with centralized client portals, workflow automation, and secure records.",
    icon: Building2,
  },
  {
    name: "E-Commerce Brands",
    desc: "High-concurrency cloud scaling, checkout system stability, inventory automation, and rapid customer response.",
    icon: Globe,
  },
  {
    name: "Healthcare & HealthTech",
    desc: "Secure infrastructure, least-privilege access controls, encrypted backups, and audit-ready data retention.",
    icon: ShieldCheck,
  },
  {
    name: "FinTech & Financial",
    desc: "Deterministic API integrations, rigorous SIEM log aggregation, multi-factor authentication, and compliance hardening.",
    icon: Lock,
  },
  {
    name: "EdTech Platforms",
    desc: "Reliable database clusters, scalable web platforms, uptime monitoring, and tier-1 student/educator technical support.",
    icon: Users,
  },
  {
    name: "IT Services & MSPs",
    desc: "White-label Tier-3 infrastructure engineering, 24/7 server monitoring, and database support behind your brand.",
    icon: Server,
  },
  {
    name: "Scaling Operations",
    desc: "Companies modernizing legacy systems, migrating to cloud, and establishing disciplined IT operations.",
    icon: Layers,
  },
  {
    name: "Multi-Entity Businesses",
    desc: "Unifying dispersed operations through integrated ERP, centralized identity, and consolidated reporting.",
    icon: Database,
  },
];

// 5-step delivery process
const howWeWorkSteps = [
  {
    step: "01",
    name: "Understand",
    description: "We understand your business, existing systems, technology stack, bottlenecks, and strategic objectives.",
  },
  {
    step: "02",
    name: "Plan",
    description: "We identify the right technical architecture, prioritize milestones, and specify exact deliverables without bloat.",
  },
  {
    step: "03",
    name: "Build",
    description: "We implement the required business systems, develop custom software, provision infrastructure, or deploy security controls.",
  },
  {
    step: "04",
    name: "Operate",
    description: "We provide ongoing support, 24/7 monitoring, maintenance, patch management, and triage where required under strict SLAs.",
  },
  {
    step: "05",
    name: "Improve",
    description: "We continuously identify opportunities to automate manual tasks, harden security, optimize cloud costs, and scale capacity.",
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
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold text-secondary mb-6">
                  <span className="size-2 rounded-full bg-secondary animate-pulse" />
                  <span>End-to-End Technology Solutions</span>
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-[3.35rem] leading-[1.08] font-display">
                  Technology that helps your business build, operate, and grow.
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-2xl lg:text-xl font-normal">
                  Elvtera helps businesses build digital systems, develop custom software, operate their IT, and secure the technology they depend on.
                </p>

                <p className="mt-3 text-sm text-slate-500 max-w-xl leading-relaxed">
                  From business systems and custom software to IT operations and security, Elvtera provides the technology capabilities businesses need to build and grow.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button href="/contact" size="lg">
                    <span>Talk to Elvtera</span>
                    <ArrowRight className="size-4 ml-1" />
                  </Button>
                  <Button href="/solutions" variant="outline" size="lg">
                    Explore Solutions
                  </Button>
                </div>

                {/* Equal Importance Visual Introduction to the 3 Pillars */}
                <div className="mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Link 
                    href="/solutions/business-solutions"
                    className="p-3.5 rounded-xl border border-blue-100 bg-white/80 hover:bg-white hover:border-blue-300 hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-[10px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">01</span>
                      <span className="text-xs font-bold text-slate-900 group-hover:text-secondary">Business Solutions</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Build and scale the systems behind your business.
                    </p>
                  </Link>

                  <Link 
                    href="/solutions/software-solutions"
                    className="p-3.5 rounded-xl border border-purple-100 bg-white/80 hover:bg-white hover:border-purple-300 hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-[10px] font-bold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">02</span>
                      <span className="text-xs font-bold text-slate-900 group-hover:text-purple-700">Software Solutions</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Build the technology your business needs.
                    </p>
                  </Link>

                  <Link 
                    href="/solutions/it-and-security"
                    className="p-3.5 rounded-xl border border-emerald-100 bg-white/80 hover:bg-white hover:border-emerald-300 hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">03</span>
                      <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">IT & Security</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Operate and protect the technology you depend on.
                    </p>
                  </Link>
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
      {/* 2. WHAT WE DO — Technology Solutions Across the Lifecycle         */}
      {/* ================================================================== */}
      <section className="py-20 lg:py-24 bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="What We Do"
            title="Technology solutions across the business lifecycle."
            description="Elvtera supports businesses from digital setup and operational systems to software development, cloud infrastructure, cybersecurity, and continuous support. Three equally important pillars working in harmony."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            
            {/* Pillar 1: Business Solutions */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-xs hover:border-blue-300 transition-all hover:shadow-md">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                    PILLAR 01
                  </span>
                  <Briefcase className="size-5 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary font-display">
                  Business Solutions
                </h3>
                <p className="mt-2 text-sm font-semibold text-blue-700">
                  Build and scale the systems behind your business.
                </p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  We implement and optimize the foundational business technologies required to acquire customers, organize operations, and streamline daily delivery.
                </p>
                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-blue-600 shrink-0" />
                    <span>Business Websites & Technical SEO</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-blue-600 shrink-0" />
                    <span>GTM & Lead Management Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-blue-600 shrink-0" />
                    <span>CRM Implementation & Sales Automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-blue-600 shrink-0" />
                    <span>Business Process & Workflow Automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-blue-600 shrink-0" />
                    <span>Customer Support & Helpdesk Systems</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-5 border-t border-slate-100">
                <Link
                  href="/solutions/business-solutions"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 group"
                >
                  <span>Explore Business Solutions</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Pillar 2: Software Solutions */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-xs hover:border-purple-300 transition-all hover:shadow-md">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
                    PILLAR 02
                  </span>
                  <Code2 className="size-5 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary font-display">
                  Software Solutions
                </h3>
                <p className="mt-2 text-sm font-semibold text-purple-700">
                  Build the technology your business needs.
                </p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  We engineer custom software, internal platforms, SaaS applications, and intelligent automation built precisely around how your company operates.
                </p>
                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-purple-600 shrink-0" />
                    <span>Custom Web Applications & Platforms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-purple-600 shrink-0" />
                    <span>Purpose-Built CRM & ERP Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-purple-600 shrink-0" />
                    <span>SaaS Applications & Multi-Tenant Stacks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-purple-600 shrink-0" />
                    <span>Internal Tools, Portals & Dashboards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-purple-600 shrink-0" />
                    <span>AI Applications, Agents & Automation</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-5 border-t border-slate-100">
                <Link
                  href="/solutions/software-solutions"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900 group"
                >
                  <span>Explore Software Solutions</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Pillar 3: IT & Security */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-xs hover:border-emerald-300 transition-all hover:shadow-md">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    PILLAR 03
                  </span>
                  <ShieldCheck className="size-5 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary font-display">
                  IT & Security
                </h3>
                <p className="mt-2 text-sm font-semibold text-emerald-700">
                  Keep your technology running, secure, and ready to scale.
                </p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  We administer cloud environments, servers, networks, databases, and cybersecurity operations so your business stays resilient and available.
                </p>
                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                    <span>IT Operations & Linux/Windows Sysadmin</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                    <span>Cloud Architecture (AWS, Azure, OCI)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                    <span>SIEM Log Monitoring, IAM & MFA Hardening</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                    <span>Continuous Monitoring & Observability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                    <span>Backup, Disaster Recovery & Tech Support</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-5 border-t border-slate-100">
                <Link
                  href="/solutions/it-and-security"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 group"
                >
                  <span>Explore IT & Security</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

          {/* Lifecycle Connection Ribbon */}
          <div className="mt-14 p-6 rounded-2xl bg-slate-50 border border-slate-200 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 font-semibold text-slate-800">
              <Sparkles className="size-4 text-secondary shrink-0" />
              <span>The End-to-End Advantage:</span>
              <span className="text-slate-600 font-normal">No handoff friction between systems, software, and operations.</span>
            </div>
            <Link href="/how-we-work" className="font-bold text-secondary hover:underline shrink-0">
              Learn How We Work →
            </Link>
          </div>

        </div>
      </section>

      {/* ================================================================== */}
      {/* 3. BUSINESS SOLUTIONS (Section 3)                                  */}
      {/* ================================================================== */}
      <section className="py-20 lg:py-24 bg-surface border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                Pillar 01 — Business Solutions
              </div>
              <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl font-display">
                Build the systems behind your business.
              </h2>
              <p className="mt-2 text-base text-slate-600 max-w-2xl">
                A business cannot scale on ad-hoc spreadsheets and broken handoffs. We build and integrate the digital backbones that connect marketing, sales, operations, and support.
              </p>
            </div>
            <Button href="/solutions/business-solutions" variant="outline" className="shrink-0">
              Explore Business Solutions
            </Button>
          </div>

          {/* 9 Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Websites", desc: "Modern, high-converting digital storefronts and marketing websites engineered for speed, technical SEO, and brand authority." },
              { title: "GTM Systems", desc: "Go-to-market systems with unified tracking, lead enrichment, form validation, and automated attribution." },
              { title: "CRM", desc: "Tailored CRM architecture designed around your sales stages, stopping lead slippage and manual data duplication." },
              { title: "Sales Systems", desc: "Proposal generation, quotation workflows, deal pipelines, and automated outreach sequencing." },
              { title: "Marketing Automation", desc: "Behavioral email journeys, lifecycle re-engagement, audience tagging, and analytics reporting." },
              { title: "Business Automation", desc: "Automate administrative friction, invoice approvals, client onboarding steps, and cross-tool notifications." },
              { title: "Customer Support", desc: "Centralize customer requests across email, live chat, and web portals with automated assignment rules." },
              { title: "Helpdesk & Ticketing", desc: "SLA-backed ticketing systems, escalation paths, issue categorization, and operator audit trails." },
              { title: "Workflow Systems", desc: "Connect disjointed SaaS applications via robust webhook orchestrations and custom data pipelines." },
            ].map((svc) => (
              <div key={svc.title} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-200 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900 text-base font-display">{svc.title}</h3>
                  <span className="size-2 rounded-full bg-blue-600" />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <Link 
              href="/contact?intent=business-systems" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900"
            >
              <span>Discuss Your Business Systems</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 4. SOFTWARE SOLUTIONS (Section 4)                                  */}
      {/* ================================================================== */}
      <section className="py-20 lg:py-24 bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded border border-purple-200">
                Pillar 02 — Software Solutions
              </div>
              <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl font-display">
                Build software around the way your business works.
              </h2>
              <p className="mt-2 text-base text-slate-600 max-w-2xl">
                Avoid the trap of forcing your unique operations into rigid commercial templates. We build custom applications, internal tools, ERP platforms, and AI systems tailored to your workflows.
              </p>
            </div>
            <Button href="/solutions/software-solutions" variant="outline" className="shrink-0">
              Explore Software Solutions
            </Button>
          </div>

          {/* 9 Software Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Custom Software", desc: "Purpose-built web applications and digital platforms engineered with clean TypeScript, robust APIs, and modern databases." },
              { title: "CRM / ERP Development", desc: "Enterprise resource planning platforms unifying inventory, finance, order fulfillment, and multi-location operations." },
              { title: "SaaS Applications", desc: "Scalable multi-tenant SaaS products complete with subscription billing, role hierarchies, and high-uptime architectures." },
              { title: "Internal Tools", desc: "Custom operational software that empowers staff to execute complex procedures accurately and rapidly." },
              { title: "Dashboards & Portals", desc: "Executive business intelligence, KPI visualizations, and client-facing collaboration portals with role-based access." },
              { title: "API Integrations", desc: "Reliable bidirectional data bridges, custom webhooks, payment gateways, and third-party SaaS synchronization." },
              { title: "AI Applications", desc: "Custom software infused with contextual intelligence, document summarization, semantic search, and predictive workflows." },
              { title: "AI Agents", desc: "Autonomous multi-step agents that perform complex tasks, triage data, and interface with backend systems." },
              { title: "Workflow Automation", desc: "High-throughput automation pipelines using Python, n8n, and message queues to eliminate operational bottlenecks." },
            ].map((svc) => (
              <div key={svc.title} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-purple-200 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900 text-base font-display">{svc.title}</h3>
                  <span className="size-2 rounded-full bg-purple-600" />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <Link 
              href="/contact?intent=software-project" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900"
            >
              <span>Start a Software Project</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 5. IT & SECURITY (Section 5)                                       */}
      {/* ================================================================== */}
      <section className="py-20 lg:py-24 bg-surface border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Pillar 03 — IT & Security
              </div>
              <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl font-display">
                Keep your technology running and protected.
              </h2>
              <p className="mt-2 text-base text-slate-600 max-w-2xl">
                Software is only as good as the infrastructure and security supporting it. We operate, monitor, maintain, and defend your IT environments with rigorous operational discipline.
              </p>
            </div>
            <Button href="/solutions/it-and-security" variant="outline" className="shrink-0">
              Explore IT & Security
            </Button>
          </div>

          {/* IT & Security Capability Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Cloud Infrastructure", desc: "Architecture, provisioning, migration, and cost optimization across AWS, Microsoft Azure, and Oracle Cloud Infrastructure (OCI)." },
              { title: "Servers & OS Administration", desc: "Proactive Linux (RHEL, Ubuntu, Debian, Rocky) and Windows Server sysadmin, kernel patching, and configuration management." },
              { title: "Networks & Firewalls", desc: "Site-to-site IPsec & WireGuard VPNs, VPC routing, DNS management, and Next-Gen firewall defense (pfSense, Fortinet, AWS WAF)." },
              { title: "Monitoring & Observability", desc: "24/7 telemetry monitoring with Prometheus, Grafana, synthetic probes, and automated escalation before downtime affects users." },
              { title: "Backup & Recovery", desc: "3-2-1 immutable backup topologies, offsite air-gapping, database point-in-time recovery, and verified restoration drills." },
              { title: "Disaster Recovery", desc: "Living DR runbooks, recovery time objective (RTO) and recovery point objective (RPO) guarantees with simulated failover exercises." },
              { title: "Cybersecurity & SIEM", desc: "Centralized Wazuh SIEM log collection, real-time threat detection, anomalous behavior correlation, and compliance audit reporting." },
              { title: "IAM & Access Hardening", desc: "Strict least-privilege identity access management, mandatory multi-factor authentication (MFA), and SSH key-only policies." },
              { title: "Technical Support", desc: "Remote L1/L2 technical support specialists who inspect logs, reproduce issues in staging, and resolve technical tickets." },
            ].map((svc) => (
              <div key={svc.title} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-emerald-200 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900 text-base font-display">{svc.title}</h3>
                  <span className="size-2 rounded-full bg-emerald-600" />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <Link 
              href="/contact?intent=it-environment" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900"
            >
              <span>Discuss Your IT Environment</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 6. END-TO-END TECHNOLOGY SECTION (Section 6)                       */}
      {/* ================================================================== */}
      <section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800">
              The Unified Ecosystem
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl font-display">
              One technology partner. From build to ongoing operations.
            </h2>
            <p className="mt-4 text-base text-slate-400 leading-relaxed">
              Most companies struggle because they juggle four disconnected vendors: a web agency that doesn’t understand backend code, developers who don’t operate servers, an IT provider that doesn't understand custom applications, and security consultants who only write PDFs. Elvtera unifies the entire lifecycle.
            </p>
          </div>

          {/* Sequential Lifecycle Flow */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="space-y-4">
              
              {/* Step 1: Business Setup */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-xl bg-blue-900/60 border border-blue-700 text-blue-400 flex items-center justify-center font-mono font-bold text-sm shrink-0">
                    01
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Business Setup & Digital Systems</h3>
                    <p className="text-xs text-slate-400">Establish the operational foundation and customer touchpoints.</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-blue-300 bg-slate-950 px-3 py-2 rounded-lg border border-slate-800">
                  <span>Website</span>
                  <span className="text-slate-600">→</span>
                  <span>CRM</span>
                  <span className="text-slate-600">→</span>
                  <span>GTM Pipelines</span>
                  <span className="text-slate-600">→</span>
                  <span>Business Systems</span>
                </div>
              </div>

              {/* Connecting arrow */}
              <div className="flex justify-center -my-2 text-slate-600">
                <ArrowRight className="size-4 rotate-90" />
              </div>

              {/* Step 2: Software */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-xl bg-purple-900/60 border border-purple-700 text-purple-400 flex items-center justify-center font-mono font-bold text-sm shrink-0">
                    02
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Software Engineering & Automation</h3>
                    <p className="text-xs text-slate-400">Engineer custom tools tailored to the company&apos;s unique process.</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-purple-300 bg-slate-950 px-3 py-2 rounded-lg border border-slate-800">
                  <span>Custom Applications</span>
                  <span className="text-slate-600">→</span>
                  <span>Automation</span>
                  <span className="text-slate-600">→</span>
                  <span>AI Workflows</span>
                  <span className="text-slate-600">→</span>
                  <span>Integrations</span>
                </div>
              </div>

              {/* Connecting arrow */}
              <div className="flex justify-center -my-2 text-slate-600">
                <ArrowRight className="size-4 rotate-90" />
              </div>

              {/* Step 3: Infrastructure */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-xl bg-cyan-900/60 border border-cyan-700 text-cyan-400 flex items-center justify-center font-mono font-bold text-sm shrink-0">
                    03
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Cloud & Infrastructure Operations</h3>
                    <p className="text-xs text-slate-400">Provide high-availability compute, storage, and networking.</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-300 bg-slate-950 px-3 py-2 rounded-lg border border-slate-800">
                  <span>Cloud (AWS/Azure/OCI)</span>
                  <span className="text-slate-600">→</span>
                  <span>Servers</span>
                  <span className="text-slate-600">→</span>
                  <span>Networks</span>
                  <span className="text-slate-600">→</span>
                  <span>Databases</span>
                </div>
              </div>

              {/* Connecting arrow */}
              <div className="flex justify-center -my-2 text-slate-600">
                <ArrowRight className="size-4 rotate-90" />
              </div>

              {/* Step 4: Security */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-xl bg-emerald-900/60 border border-emerald-700 text-emerald-400 flex items-center justify-center font-mono font-bold text-sm shrink-0">
                    04
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Cybersecurity & Protection</h3>
                    <p className="text-xs text-slate-400">Continuous telemetry monitoring, hardening, and threat mitigation.</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-emerald-300 bg-slate-950 px-3 py-2 rounded-lg border border-slate-800">
                  <span>Monitoring</span>
                  <span className="text-slate-600">→</span>
                  <span>IAM Least Privilege</span>
                  <span className="text-slate-600">→</span>
                  <span>SIEM Telemetry</span>
                  <span className="text-slate-600">→</span>
                  <span>Security Operations</span>
                </div>
              </div>

              {/* Connecting arrow */}
              <div className="flex justify-center -my-2 text-slate-600">
                <ArrowRight className="size-4 rotate-90" />
              </div>

              {/* Step 5: Support */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-xl bg-amber-900/60 border border-amber-700 text-amber-400 flex items-center justify-center font-mono font-bold text-sm shrink-0">
                    05
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Support & Continuous Improvement</h3>
                    <p className="text-xs text-slate-400">Ongoing engineering support and performance optimization after launch.</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-amber-300 bg-slate-950 px-3 py-2 rounded-lg border border-slate-800">
                  <span>IT Support</span>
                  <span className="text-slate-600">→</span>
                  <span>Technical Support</span>
                  <span className="text-slate-600">→</span>
                  <span>Customer Support</span>
                  <span className="text-slate-600">→</span>
                  <span>Continuous Tuning</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 7. PROBLEMS WE SOLVE (Section 8)                                   */}
      {/* ================================================================== */}
      <section className="py-20 lg:py-24 bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Practical Solutions"
            title="Real business challenges we solve every day."
            description="Instead of pitching abstract jargon, we address the exact operational friction points that constrain growing businesses."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {problemsWeSolve.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-surface p-7 flex flex-col justify-between hover:border-secondary/40 hover:shadow-sm transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider bg-white px-2.5 py-1 rounded border border-slate-200">
                        {item.pillar}
                      </span>
                      <Icon className="size-4 text-slate-400" />
                    </div>
                    <h3 className="text-base font-bold text-primary font-display leading-snug">
                      {item.problem}
                    </h3>
                    <p className="mt-3 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                      {item.solution}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-slate-200/40">
                    <Link
                      href={item.route}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:underline"
                    >
                      <span>Explore this solution</span>
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 8. WHO WE HELP (Section 7)                                         */}
      {/* ================================================================== */}
      <section className="py-20 lg:py-24 bg-surface border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Target Profiles"
            title="Who We Help"
            description="We serve ambitious businesses and technology leaders who require reliable execution, disciplined operations, and dependable technical capabilities."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesGrid.map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.name} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-slate-300 transition-all">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-slate-50 text-slate-700 border border-slate-200 mb-4">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-bold text-primary text-base font-display">{ind.name}</h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">{ind.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link href="/industries" className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:underline">
              <span>View industry-specific capabilities & technical frameworks</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 9. ENGAGEMENT MODELS (Section 9)                                   */}
      {/* ================================================================== */}
      <section className="py-20 lg:py-24 bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Engagement Models"
            title="How businesses work with Elvtera."
            description="Engage our team for defined projects, retain ongoing operational stewardship, or extend your internal technology team with specialized engineering capacity."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            
            {/* Model 1: Project-Based */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  01 · Fixed Scope
                </span>
                <h3 className="mt-4 text-2xl font-bold text-primary font-display">
                  Project-Based
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  For defined technical initiatives with clear milestones, concrete deliverables, and transparent timeline commitments.
                </p>
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Ideal For:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-slate-900" />
                      <span>Business websites & digital setups</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-slate-900" />
                      <span>Custom software & internal tools</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-slate-900" />
                      <span>CRM & ERP implementations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-slate-900" />
                      <span>Cloud migration & infrastructure rebuilds</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-slate-900" />
                      <span>Security hardening & SIEM configuration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-slate-900" />
                      <span>End-to-end automation pipelines</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <Button href="/contact?model=project" variant="primary" className="w-full">
                  Start a Project
                </Button>
              </div>
            </div>

            {/* Model 2: Ongoing Support */}
            <div className="rounded-3xl border-2 border-secondary bg-surface p-8 shadow-sm flex flex-col justify-between relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-secondary text-white font-mono text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-wider shadow-sm">
                Recommended For Long-Term Scale
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-secondary bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                  02 · SLA-Backed
                </span>
                <h3 className="mt-4 text-2xl font-bold text-primary font-display">
                  Ongoing Support
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Continuous day-to-day operations, proactive monitoring, patch management, and support under agreed availability guarantees.
                </p>
                <div className="mt-6 border-t border-slate-200/80 pt-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Ideal For:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-secondary" />
                      <span>Proactive IT Operations & Sysadmin</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-secondary" />
                      <span>Cloud & server infrastructure management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-secondary" />
                      <span>SIEM monitoring & security operations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-secondary" />
                      <span>Remote L1/L2 technical support & triage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-secondary" />
                      <span>Continuous software maintenance & bug fixes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-secondary" />
                      <span>Ongoing business technology support</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200/80">
                <Button href="/contact?model=ongoing" variant="primary" className="w-full">
                  Discuss Ongoing Support
                </Button>
              </div>
            </div>

            {/* Model 3: Extended Technology Team */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  03 · Embedded Capacity
                </span>
                <h3 className="mt-4 text-2xl font-bold text-primary font-display">
                  Extended Technology Team
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  An extension of your technology team. Add specialized engineering capacity directly into your communication channels without building an expensive internal department from scratch.
                </p>
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Embedded Roles:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-slate-900" />
                      <span>Dedicated Infrastructure & Linux Engineers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-slate-900" />
                      <span>Cloud / DevOps Engineers (AWS/Azure/OCI)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-slate-900" />
                      <span>Cybersecurity & SIEM Engineers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-slate-900" />
                      <span>Senior Full-Stack Software Engineers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-slate-900" />
                      <span>L1/L2 Technical Support Specialists</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-slate-900" />
                      <span>No agency markups or staffing churn</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <Button href="/contact?model=extended-team" variant="outline" className="w-full">
                  Extend Your Team
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 10. HOW WE WORK (Section 10)                                       */}
      {/* ================================================================== */}
      <section className="py-20 lg:py-24 bg-surface border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Our Process"
            title="How We Work"
            description="A disciplined, transparent 5-step methodology that replaces guesswork with clear architectural specifications and reliable execution."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {howWeWorkSteps.map((step) => (
              <div key={step.step} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-secondary bg-blue-50 px-2 py-1 rounded">
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-bold text-lg text-primary font-display">
                    {step.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/how-we-work" className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:underline">
              <span>Read complete process documentation & operational standards</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 11. TRUST SECTION (Section 11)                                     */}
      {/* ================================================================== */}
      <section className="py-20 lg:py-24 bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Trust & Transparency"
            title="Built around practical technology operations."
            description="We do not make inflated promises or invent synthetic metrics. We focus on verifiable architecture, documented runbooks, and disciplined technology engineering."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="p-7 rounded-2xl border border-slate-200 bg-surface">
              <div className="flex size-10 items-center justify-center rounded-xl bg-slate-900 text-white mb-4">
                <FileText className="size-5" />
              </div>
              <h3 className="font-bold text-base text-primary font-display">Living Runbooks</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Every server configuration, database failover routine, deployment step, and support escalation workflow is documented down to the exact command. Nothing depends on undocumented tribal knowledge.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-slate-200 bg-surface">
              <div className="flex size-10 items-center justify-center rounded-xl bg-slate-900 text-white mb-4">
                <ShieldCheck className="size-5" />
              </div>
              <h3 className="font-bold text-base text-primary font-display">Zero-Trust Access Control</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                All client environments are isolated under least-privilege identity boundaries with mandatory multi-factor authentication (MFA), audit logging, and strict data processing addendums.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-slate-200 bg-surface">
              <div className="flex size-10 items-center justify-center rounded-xl bg-slate-900 text-white mb-4">
                <Repeat className="size-5" />
              </div>
              <h3 className="font-bold text-base text-primary font-display">Full Code & Infrastructure Ownership</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                You retain complete, unencumbered ownership of all custom software repositories, cloud tenants, configuration code, and documentation. No vendor lock-in or proprietary traps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 12. FINAL HOMEPAGE CTA                                             */}
      {/* ================================================================== */}
      <CtaSection
        title="Ready to build, operate, and secure your technology?"
        description="Whether you need to engineer new business systems, build custom software, stabilize your IT operations, or protect your infrastructure, Elvtera provides the end-to-end capabilities your business needs."
        buttonLabel="Talk to Elvtera"
        buttonHref="/contact"
      />
    </>
  );
}
