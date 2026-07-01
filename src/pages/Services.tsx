import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Layers, 
  Cpu, 
  Send, 
  TrendingUp, 
  Briefcase, 
  Check, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

interface ServiceDetail {
  title: string;
  tagline: string;
  longDesc: string;
  icon: React.ComponentType<any>;
  benefits: { title: string; desc: string }[];
  features: { name: string; specs: string; path: string }[];
  workflow: string[];
  faq: { q: string; a: string }[];
}

export const Services: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    if (location.state?.selectedTab !== undefined) {
      setActiveTab(location.state.selectedTab);
    }
  }, [location.state]);

  const pillarsData: ServiceDetail[] = [
    {
      title: "ERP & CRM",
      tagline: "Connect your sales pipelines and office operations in one central system.",
      longDesc: "Growing companies face a common challenge: sales conversations, customer info, stock levels, and accounts live in separate files. We implement and customize ERP and CRM systems to align with your unique workflows, creating a unified workspace for your entire business.",
      icon: Layers,
      benefits: [
        { title: "Unified Customer View", desc: "See every client call, message, invoice, and delivery status on a single timeline." },
        { title: "Simplified Operations", desc: "Manage production schedules, supplier purchase orders, and stock levels in real time." },
        { title: "Sales Optimization", desc: "Route leads automatically, track sales team activities, and shorten deal cycles." }
      ],
      features: [
        { name: "ERP Customization", specs: "Tailoring resource planning, materials tracking, work schedules, and inventory registers.", path: "/business-software/erp-solutions" },
        { name: "CRM Optimizations", specs: "Structuring sales stages, team assignments, call logs, and customer communication histories.", path: "/business-software/crm" },
        { name: "Workplace Integration", specs: "Linking your internal departments directly into a single, clean workspace.", path: "/business-software/hr" },
        { name: "Records Migration", specs: "Cleaning and transferring old spreadsheet files into your new central system.", path: "/business-software/inventory" }
      ],
      workflow: ["Understand current workflows", "Design system architecture", "Configure and test pipelines", "Migrate existing records", "Launch and train team"],
      faq: [
        { q: "Can we connect our existing tools?", a: "Yes, we build secure connections to sync CRM contacts and sales metrics with your other business apps." },
        { q: "How long does implementation take?", a: "Typically 6 to 12 weeks, depending on the complexity of your team's current processes." }
      ]
    },
    {
      title: "AI & WhatsApp",
      tagline: "Automate customer engagement and support with smart message routing.",
      longDesc: "Customer inquiries can easily fall through the cracks when scattered across channels. We build WhatsApp Business automations and deploy AI Sales and Voice Agents that qualify leads, answer customer questions instantly, and schedule meetings 24/7.",
      icon: Cpu,
      benefits: [
        { title: "Instant Response Time", desc: "Engage leads within seconds on WhatsApp or web chat before they walk away." },
        { title: "Conversational Callers", desc: "Deploy smart voice agents to handle inbound phone questions and book calendar calls." },
        { title: "Unified Team Inbox", desc: "Bring all WhatsApp business lines into a shared screen so no message is missed." }
      ],
      features: [
        { name: "AI Voice Agents", specs: "Inbound and outbound phone agents with natural, human-like speaking patterns.", path: "/ai/voice-calling-agent" },
        { name: "AI Sales Agents", specs: "Conversational web and WhatsApp agents to qualify leads and book meetings.", path: "/ai/ai-sales-agent" },
        { name: "WhatsApp Automations", specs: "Official WhatsApp Business API setup, chat templates, and shared support screens.", path: "/ai/customer-support-agent" },
        { name: "Support Ticket Router", specs: "Tagging client requests automatically and routing urgent queries to live reps.", path: "/ai/knowledge-base" }
      ],
      workflow: ["Design conversation flows", "Integrate chat APIs", "Train AI on business files", "Run simulation tests", "Go live with metrics dashboard"],
      faq: [
        { q: "How does the AI know how to answer?", a: "We train the AI exclusively on your company's product manuals and guidelines. It only uses approved facts." },
        { q: "Is WhatsApp automation compliant?", a: "Yes, we configure official Meta WhatsApp API accounts to ensure compliance and avoid phone number bans." }
      ]
    },
    {
      title: "Workflow & Apps",
      tagline: "Eliminate manual data entry with business apps built for your workflow.",
      longDesc: "Most growing companies waste hours copying information between different apps. We design workflow automations and custom business applications that sync files, update records, and connect your business tools automatically.",
      icon: Send,
      benefits: [
        { title: "Zero Manual Typing", desc: "Move sales details, stock counts, and invoice records automatically between systems." },
        { title: "Custom Business Portals", desc: "Provide secure logins for employees to log shifts and clients to view invoice details." },
        { title: "Fewer Costly Mistakes", desc: "Stop human errors by letting automated background tasks verify record formats." }
      ],
      features: [
        { name: "Workflow Automation", specs: "Background triggers and actions that sync records across different tools.", path: "/automations/whatsapp-api" },
        { name: "Custom Business Portals", specs: "Secure client and employee portals for self-service actions and documents.", path: "/automations/broadcast-campaigns" },
        { name: "Custom Web Apps", specs: "Operational tools built specifically to solve unique business bottlenecks.", path: "/automations/team-inbox" },
        { name: "API Integrations", specs: "Secure connections that transfer files and details safely between cloud tools.", path: "/automations/whatsapp-chatbot" }
      ],
      workflow: ["Scope operational tasks", "Map data routes and fields", "Build custom portals/apps", "Run integration checks", "Deploy to secure cloud"],
      faq: [
        { q: "Can you connect older legacy tools?", a: "Yes, we design custom adapters to fetch, parse, and sync records from older systems." },
        { q: "How secure are custom portals?", a: "We use industry-standard encryption and login rules to protect your records." }
      ]
    },
    {
      title: "Corporate Websites",
      tagline: "Build a fast, search-optimized web presence that generates pipeline.",
      longDesc: "Your website is the digital front door of your business. We build premium, fast-loading corporate websites optimized for search engines (SEO) and designed to turn visitors into booked meetings.",
      icon: TrendingUp,
      benefits: [
        { title: "Ultra-Fast Load Times", desc: "Optimized layouts that load in under a second to keep visitors engaged." },
        { title: "Organic Search Visibility", desc: "Structured content layouts designed to rank higher on Google search results." },
        { title: "Built-In Lead Capture", desc: "Seamless contact forms and calendar schedulers that sync with your CRM." }
      ],
      features: [
        { name: "Search Engine Optimization (SEO)", specs: "Search keyword structures, site speed tuning, and indexing setups.", path: "/digital-marketing/seo" },
        { name: "Corporate Website Design", specs: "Clean, professional, responsive web systems built with fast code.", path: "/digital-marketing/google-ads" },
        { name: "Landing Page Systems", specs: "High-converting web pages tailored for paid advertising campaigns.", path: "/digital-marketing/content-creation" },
        { name: "Conversion Analytics", specs: "Tracking visitor actions, form submissions, and marketing campaign success.", path: "/digital-marketing/email-marketing" }
      ],
      workflow: ["Research search patterns", "Design responsive layout", "Write speed-optimized code", "Configure analytics & SEO", "Launch and test speed"],
      faq: [
        { q: "Do you write the website copy?", a: "Yes, we write benefit-driven, plain-language text that explains what you do clearly." },
        { q: "Will we be able to update the website ourselves?", a: "Yes, we set up simple editor dashboards so your team can add blog posts or edit text easily." }
      ]
    },
    {
      title: "Consulting & Support",
      tagline: "Define your software roadmap and keep systems running smoothly.",
      longDesc: "Getting your technology strategy right is half the battle; maintaining it is the other. We provide expert business consulting to plan your roadmap, along with managed support to keep everything running.",
      icon: Briefcase,
      benefits: [
        { title: "Clear Tech Blueprint", desc: "Map your team's processes and get a clear, step-by-step implementation guide." },
        { title: "Managed Support", desc: "Get guaranteed response times and direct access to developers when issues arise." },
        { title: "Ongoing Optimization", desc: "Regular checks to update software, reduce cloud costs, and improve system speed." }
      ],
      features: [
        { name: "Business Tech Consulting", specs: "Workflow auditing, system evaluations, and software roadmap planning.", path: "/consulting/digital-transformation" },
        { name: "Managed IT Support", specs: "Ongoing support agreements with guaranteed response times.", path: "/consulting/automation-strategy" },
        { name: "Cloud Optimization", specs: "Auditing hosting costs, securing system files, and scaling system speed.", path: "/consulting/it-strategy" },
        { name: "Staff Training", specs: "Providing hands-on guides and workshops to help your team adopt new tools.", path: "/consulting/it-strategy" }
      ],
      workflow: ["Audit current workflows", "Deliver strategic blueprint", "Establish support schedules", "Monitor system performance", "Conduct regular reviews"],
      faq: [
        { q: "Can we hire you for planning only?", a: "Yes, we can write the strategic requirements blueprint for your internal team to execute." },
        { q: "What are your support response times?", a: "We offer custom agreements, with support responses as fast as 1 hour for critical tasks." }
      ]
    }
  ];

  const tabs = [
    { name: "ERP & CRM", icon: Layers },
    { name: "AI & WhatsApp", icon: Cpu },
    { name: "Workflow & Apps", icon: Send },
    { name: "Websites", icon: TrendingUp },
    { name: "Consulting & Support", icon: Briefcase }
  ];

  const activePillar = pillarsData[activeTab];
  const ActiveIcon = activePillar.icon;

  const renderIllustration = (tab: number) => {
    switch (tab) {
      case 0:
        return (
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex items-center justify-center min-h-[160px] select-none">
            <svg className="w-full max-w-[280px] h-[120px]" viewBox="0 0 280 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="35" width="60" height="50" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="40" y="55" dominantBaseline="middle" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="bold">POS Intake</text>
              <rect x="25" y="68" width="30" height="6" rx="2" fill="#3b82f6" opacity="0.2" />
              
              <path d="M70 60 H110" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" className="animate-pulse" />
              
              <rect x="110" y="25" width="60" height="70" rx="8" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="1.5" />
              <text x="140" y="45" dominantBaseline="middle" textAnchor="middle" fill="#0f766e" fontSize="9" fontWeight="bold">Central System</text>
              <line x1="120" y1="60" x2="160" y2="60" stroke="#14b8a6" strokeWidth="1" strokeDasharray="2 2" />
              <text x="140" y="72" dominantBaseline="middle" textAnchor="middle" fill="#14b8a6" fontSize="7" fontWeight="bold">Automatic Sync</text>
              <text x="140" y="82" dominantBaseline="middle" textAnchor="middle" fill="#0f766e" fontSize="6">SAVED: SYSTEM</text>
              
              <path d="M170 60 H210" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" className="animate-pulse" />
              
              <rect x="210" y="35" width="60" height="50" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="240" y="55" dominantBaseline="middle" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="bold">Office Files</text>
              <circle cx="240" cy="71" r="5" fill="#14b8a6" className="animate-ping" />
            </svg>
          </div>
        );
      case 1:
        return (
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex items-center justify-center min-h-[160px] select-none">
            <svg className="w-full max-w-[280px] h-[120px]" viewBox="0 0 280 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="30" width="55" height="60" rx="6" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="37.5" y="45" dominantBaseline="middle" textAnchor="middle" fill="#1e40af" fontSize="8" fontWeight="bold">PDF Doc</text>
              <line x1="20" y1="58" x2="55" y2="58" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="2 2" />
              <line x1="20" y1="68" x2="50" y2="68" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="2 2" />
              <line x1="20" y1="78" x2="45" y2="78" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="2 2" />
              
              <path d="M65 60 H110" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
              
              <rect x="110" y="35" width="60" height="50" rx="8" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="1.5" />
              <text x="140" y="53" dominantBaseline="middle" textAnchor="middle" fill="#0f766e" fontSize="9" fontWeight="bold">AI Brain</text>
              <text x="140" y="68" dominantBaseline="middle" textAnchor="middle" fill="#14b8a6" fontSize="7" fontWeight="bold">Smart Match</text>
              
              <path d="M170 60 H210" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
              
              <rect x="210" y="30" width="60" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="240" y="45" dominantBaseline="middle" textAnchor="middle" fill="#1e40af" fontSize="8" fontWeight="bold">Central Sync</text>
              <circle cx="230" cy="65" r="3" fill="#14b8a6" />
              <circle cx="242" cy="72" r="3" fill="#3b82f6" />
              <circle cx="250" cy="62" r="3" fill="#14b8a6" />
            </svg>
          </div>
        );
      case 2:
        return (
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex items-center justify-center min-h-[160px] select-none">
            <svg className="w-full max-w-[280px] h-[120px]" viewBox="0 0 280 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="45" width="50" height="30" rx="6" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="1.5" />
              <text x="35" y="60" dominantBaseline="middle" textAnchor="middle" fill="#0f766e" fontSize="8" fontWeight="bold">App Trigger</text>
              
              <path d="M60 60 C80 60, 80 35, 105 35" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M60 60 C80 60, 80 85, 105 85" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
              
              <rect x="105" y="20" width="65" height="30" rx="6" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="137.5" y="35" dominantBaseline="middle" textAnchor="middle" fill="#1e40af" fontSize="7" fontWeight="bold">Filter Check</text>
              
              <rect x="105" y="70" width="65" height="30" rx="6" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="137.5" y="85" dominantBaseline="middle" textAnchor="middle" fill="#1e40af" fontSize="7" fontWeight="bold">Sync Files</text>
              
              <path d="M170 35 H210" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="2 2" />
              <path d="M170 85 H210" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="2 2" />
              
              <rect x="210" y="20" width="60" height="30" rx="6" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="1.5" />
              <text x="240" y="35" dominantBaseline="middle" textAnchor="middle" fill="#0f766e" fontSize="7" fontWeight="bold">Send Email</text>
              
              <rect x="210" y="70" width="60" height="30" rx="6" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="1.5" />
              <text x="240" y="85" dominantBaseline="middle" textAnchor="middle" fill="#0f766e" fontSize="7" fontWeight="bold">Update Records</text>
            </svg>
          </div>
        );
      case 3:
        return (
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex items-center justify-center min-h-[160px] select-none">
            <svg className="w-full max-w-[280px] h-[120px]" viewBox="0 0 280 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="35" width="55" height="50" rx="6" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="37.5" y="60" dominantBaseline="middle" textAnchor="middle" fill="#1e40af" fontSize="8" fontWeight="bold">SEO Pages</text>
              <line x1="20" y1="70" x2="55" y2="70" stroke="#14b8a6" strokeWidth="1" />
              
              <path d="M65 60 H110" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
              
              <rect x="110" y="30" width="60" height="60" rx="8" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="1.5" />
              <text x="140" y="55" dominantBaseline="middle" textAnchor="middle" fill="#0f766e" fontSize="9" fontWeight="bold">Search Index</text>
              <circle cx="140" cy="75" r="4" fill="#3b82f6" className="animate-ping" />
              
              <path d="M170 60 H210" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
              
              <rect x="210" y="35" width="60" height="50" rx="6" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="240" y="55" dominantBaseline="middle" textAnchor="middle" fill="#1e40af" fontSize="8" fontWeight="bold">Conversion</text>
              <text x="240" y="70" dominantBaseline="middle" textAnchor="middle" fill="#14b8a6" fontSize="7" fontWeight="bold">Sales Lead</text>
            </svg>
          </div>
        );
      case 4:
        return (
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex items-center justify-center min-h-[160px] select-none">
            <svg className="w-full max-w-[280px] h-[120px]" viewBox="0 0 280 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="70" cy="60" r="35" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="70" y="60" dominantBaseline="middle" textAnchor="middle" fill="#1e40af" fontSize="7" fontWeight="bold">Offline SOP</text>
              
              <circle cx="150" cy="60" r="35" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="1.5" />
              <text x="150" y="60" dominantBaseline="middle" textAnchor="middle" fill="#0f766e" fontSize="7" fontWeight="bold">System Blueprint</text>
              
              <path d="M185 60 H210" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
              
              <rect x="210" y="35" width="60" height="50" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="240" y="55" dominantBaseline="middle" textAnchor="middle" fill="#1e40af" fontSize="8" fontWeight="bold">System Plan</text>
              <text x="240" y="70" dominantBaseline="middle" textAnchor="middle" fill="#14b8a6" fontSize="7" fontWeight="bold">Deployment</text>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full relative overflow-hidden font-sans bg-brand-bg-light text-slate-700">
      <SEO 
        title={`${activePillar.title} Services`} 
        description={`${activePillar.title} services by ELVTERA. ${activePillar.tagline}`} 
      />

      {/* Services Hero Header */}
      <section className="relative pt-12 pb-16 bg-white border-b border-slate-200/50">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[85%] h-[200px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-brand-blue text-xs font-bold uppercase tracking-wider block mb-3.5 text-center">
            Our Pillars
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight">
            Comprehensive Technology Services
          </h1>
          <p className="text-xs sm:text-sm text-slate-550 max-w-lg mx-auto leading-relaxed font-medium">
            Select one of our services below to learn how we work with your team, how we deploy, and what you get.
          </p>
        </div>
      </section>

      {/* Tab Switcher Bar */}
      <section className="py-6 border-b border-slate-200/50 bg-white sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start lg:justify-center overflow-x-auto space-x-2 pb-2 lg:pb-0 scrollbar-none">
            {tabs.map((tab, idx) => {
              const Icon = tab.icon;
              const isActive = idx === activeTab;
              return (
                <button
                  key={idx}
                  onClick={() => { setActiveTab(idx); setActiveFaq(null); }}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-display font-bold text-xs sm:text-sm transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/15'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="h-4.5 w-4.5" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Tab Content */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left"
            >
              
              {/* Left Column: Pillar Overview */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-3.5 rounded-2xl bg-brand-blue/10 text-brand-blue w-fit">
                  <ActiveIcon className="h-8 w-8" />
                </div>
                
                <h2 className="font-display font-bold text-3xl text-slate-900 leading-tight">
                  {activePillar.title}
                </h2>
                
                <p className="text-xs font-bold text-brand-teal uppercase tracking-wider">
                  {activePillar.tagline}
                </p>
                
                <p className="text-xs sm:text-sm text-slate-550 leading-relaxed font-medium">
                  {activePillar.longDesc}
                </p>

                {/* Animated SVG Diagram Illustration */}
                <div className="py-2">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-450 mb-3">Service Architecture Blueprint</h4>
                  {renderIllustration(activeTab)}
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Pillar Deployment Workflow</h4>
                  <ol className="space-y-2 text-sm">
                    {activePillar.workflow.map((step, sIdx) => (
                      <li key={sIdx} className="flex items-center space-x-2">
                        <span className="h-5 w-5 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold text-xs shrink-0">
                          {sIdx + 1}
                        </span>
                        <span className="text-slate-750 font-semibold">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-brand-blue/15 hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2 text-xs whitespace-nowrap"
                  >
                    <span>Request consulting proposal</span>
                    <ArrowRight className="h-4.5 w-4.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Benefits & Feature Spec Table */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* Benefits grid */}
                <div className="space-y-4">
                  <h3 className="font-display font-semibold text-base text-slate-900">
                    Key Pillar Benefits
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {activePillar.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="bg-white border border-slate-200/50 p-6 pb-8 rounded-xl space-y-2 hover-card shadow-xs flex flex-col justify-start h-full">
                        <h4 className="font-bold text-xs text-slate-900 flex items-center space-x-1.5 shrink-0">
                          <Check className="h-4 w-4 text-brand-teal shrink-0" />
                          <span className="truncate">{benefit.title}</span>
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">
                          {benefit.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Spec Table */}
                <div className="space-y-4">
                  <h3 className="font-display font-semibold text-base text-slate-900">
                    Operational Modules & Specs
                  </h3>
                  <div className="bg-white border border-slate-200/50 rounded-xl overflow-hidden shadow-sm">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                          <th className="px-5 py-3 font-semibold text-slate-450 uppercase tracking-wider w-[35%]">Module</th>
                          <th className="px-5 py-3 font-semibold text-slate-450 uppercase tracking-wider w-[65%]">Technical Scope</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activePillar.features.map((feat, idx) => (
                          <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                            <td className="px-5 py-4">
                              <Link to={feat.path} className="font-bold text-brand-blue hover:underline block">
                                {feat.name}
                              </Link>
                            </td>
                            <td className="px-5 py-4 text-slate-600 font-medium text-sm">
                              {feat.specs}
                              <Link to={feat.path} className="ml-2 inline-flex items-center text-xs text-brand-teal font-extrabold hover:underline">
                                <span>View Details</span>
                                <ArrowRight className="h-2.5 w-2.5 ml-0.5" />
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* FAQ section */}
                <div className="space-y-4">
                  <h3 className="font-display font-semibold text-base text-slate-900">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-3">
                    {activePillar.faq.map((faq, fIdx) => {
                      const isOpen = activeFaq === fIdx;
                      return (
                        <div key={fIdx} className="bg-white border border-slate-200/60 rounded-xl overflow-hidden shadow-xs">
                          <button
                            onClick={() => setActiveFaq(isOpen ? null : fIdx)}
                            className="w-full px-5 py-4 text-left flex items-center justify-between text-slate-900 hover:bg-slate-50 transition-colors font-bold text-xs sm:text-sm cursor-pointer"
                          >
                            <span>{faq.q}</span>
                            <ChevronDown className={`h-4.5 w-4.5 text-slate-455 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-4.5 pt-1 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100 font-medium animate-fadeIn">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </section>

    </div>
  );
};
export default Services;
