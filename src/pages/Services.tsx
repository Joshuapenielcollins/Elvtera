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
      title: "Business Software",
      tagline: "Decommission scattered spreadsheets and manual invoice copying.",
      longDesc: "We build modular, custom-tailored ERP, CRM, POS, and HRMS applications specifically modeled on your offline operational workflows. No rigid pre-set limits, no unnecessary modules, just a clean, double-entry ledger-secured system built to grow alongside you.",
      icon: Layers,
      benefits: [
        { title: "Real-Time Inventory Reconciliation", desc: "Eliminate stock count mismatches by linking digital stock counts, supplier purchase orders, and sales inventories." },
        { title: "GAAP Double-Entry Ledger", desc: "Ensure complete compliance by automatically writing every stock adjustment and payroll debit to an unalterable accounting log." },
        { title: "Custom Production Scheduling", desc: "Coordinate Bills of Materials (BOM) and factory floor scheduling directly with materials depletion and purchase order routines." }
      ],
      features: [
        { name: "Enterprise ERP", specs: "Resource planning, materials tracking, bills of materials (BOM), and factory yield charts", path: "/business-software/erp-solutions" },
        { name: "Client CRM", specs: "Customer lifecycles, lead tracking, conversion stages, and phone/email diaries", path: "/business-software/crm" },
        { name: "HRMS & Payroll Core", specs: "Digital check-in integrations, automated tax deductions, and wage slip dispatches", path: "/business-software/hr" },
        { name: "Warehouse Tracker", specs: "Multi-register retail billing, SKU checks, and inventory ledger dispatches", path: "/business-software/inventory" }
      ],
      workflow: ["Scoping & SOP mapping", "Database Architecture Design", "Interface custom modeling", "Dry-run ledgers testing", "Onsite training & SLA launch"],
      faq: [
        { q: "Can we migrate data from our existing ERP?", a: "Yes. We design custom ETL pipelines to scrub, validate, and migrate your database logs from Excel, SAP, or legacy SQL tables." },
        { q: "Is the accounting module compliant with tax guidelines?", a: "Our accounting engines are structured using standard double-entry rules and support local tax parameters, depreciation calculations, and invoice schemas." }
      ]
    },
    {
      title: "AI Solutions",
      tagline: "Eliminate manual data entries and administrative bottlenecks.",
      longDesc: "Deploy end-to-end operational automation loops using fine-tuned AI agents. We construct secure systems that parse complex PDFs, verify data across relational tables, execute automatic order dispatches, and handle customer dialogs.",
      icon: Cpu,
      benefits: [
        { title: "LLM-Based Document Auditing", desc: "Extract values from purchase bills, contracts, and custom logistics sheets automatically, writing structured records directly to PostgreSQL database tables." },
        { title: "RAG Vector Context Search", desc: "Deploy private vector indexes to search corporate manuals and customer files securely with strict permission shields." },
        { title: "Database Trigger Automations", desc: "Configure background triggers where system outputs (like customer calendar bookings) update ledgers and inventory logs in real time." }
      ],
      features: [
        { name: "AI Voice Calling Agents", specs: "Low-latency outbound phone consultations, answering FAQs, and schedule booking", path: "/ai/voice-calling-agent" },
        { name: "AI Sales Agents", specs: "Multi-turn WhatsApp and web chat conversation to qualify budget, timeline, and booking", path: "/ai/ai-sales-agent" },
        { name: "AI Support Desk", specs: "Multilingual instant query resolutions, automated tickets tagging, and desk dispatches", path: "/ai/customer-support-agent" },
        { name: "AI Knowledge Base (RAG)", specs: "PDF and image OCR, table mapping, vector search, and metadata verification", path: "/ai/knowledge-base" }
      ],
      workflow: ["Materials ingestion & training", "Conversational route trees modeling", "VoIP trunking configuration", "Pilot runs & validation testing", "Live dashboard rollout"],
      faq: [
        { q: "Do the voice agents sound human?", a: "We use advanced voice generation engines that simulate realistic breathing, pitch transitions, and pauses, providing premium phone consultations." },
        { q: "How do you prevent the AI from making up information?", a: "We restrict agent responses using strict RAG (Retrieval-Augmented Generation) bounds. The AI only responds using verified data uploaded in your proprietary knowledge files." }
      ]
    },
    {
      title: "Automations",
      tagline: "Decommission manual shipping notifications, untracked client chats, and lead drop-offs.",
      longDesc: "Connect directly with customers through official Meta Cloud APIs and Twilio gateways. We configure multi-agent shared support desks, automatic WhatsApp template flows, and calendar booking triggers to streamline communication.",
      icon: Send,
      benefits: [
        { title: "Official API Verifications", desc: "We guide your team through official Meta business validation to secure green badges and prevent carrier number blocking." },
        { title: "Shared Multi-Agent Team Inboxes", desc: "Permit your sales, billing, and support agents to chat concurrently using a single central corporate number." },
        { title: "Transactional Broadcast Flows", desc: "Scale conversions by triggering automatic templates for order updates, progress notes, and payment clearance reminders." }
      ],
      features: [
        { name: "Official API Setup", specs: "Meta business setup, phone porting, and template approvals", path: "/automations/whatsapp-api" },
        { name: "Campaign Broadcasting", specs: "Bulk brochure deliveries, targeting triggers, and real-time read statistics", path: "/automations/broadcast-campaigns" },
        { name: "Shared Team Inbox", specs: "Central sales & support dashboard with ticket assignments and canned replies", path: "/automations/team-inbox" },
        { name: "Chatbot Funnels", specs: "Lead capture questionnaires, automated calendar hooks, and document routing", path: "/automations/whatsapp-chatbot" }
      ],
      workflow: ["Meta business verification", "API routing & webhook setup", "Shared inbox configuration", "Chat templates approvals", "Workflow routing test"],
      faq: [
        { q: "Will Meta charge us for WhatsApp messages?", a: "Yes. Meta charges per conversation, depending on whether it is utility-based, marketing-based, or user-initiated. We will optimize your templates to keep costs minimal." },
        { q: "Can we send files and PDFs via WhatsApp?", a: "Yes. Our WhatsApp CRM supports attachments, images, pricing sheets, voice notes, and PDF brochures." }
      ]
    },
    {
      title: "Digital Growth",
      tagline: "Acquire qualified pipeline systematically.",
      longDesc: "We skip generic advertising campaigns. We build technical SEO indexing pipelines, run performance Meta/Google/LinkedIn ads, and construct automated lead capture flows to grow sales pipelines.",
      icon: TrendingUp,
      benefits: [
        { title: "Programmatic Page Indexing", desc: "Deploy content directory structures that publish and index hundreds of SEO keyword routes systematically." },
        { title: "Core Web Vitals Speed Optimization", desc: "Refactor code layers and caching headers to achieve fast page loads under 0.5s, reducing bounce rates." },
        { title: "Multi-Channel Tracking Scripts", desc: "Configure exact UTM capture fields and payment tracking pixels to calculate return on advertising spend (ROAS) accurately." }
      ],
      features: [
        { name: "Enterprise SEO", specs: "Keyword search maps, programmatic site indexing, and speed tuning", path: "/digital-marketing/seo" },
        { name: "Performance Ads", specs: "Conversion pixel setups, Meta/Google creative A/B testing, and budget optimization", path: "/digital-marketing/google-ads" },
        { name: "Content Marketing", specs: "Thought leadership articles, copywriting production, and SEO summaries", path: "/digital-marketing/content-creation" },
        { name: "Marketing Automations", specs: "Targeted newsletters, behavior-based trigger email flows, and customer review captures", path: "/digital-marketing/email-marketing" }
      ],
      workflow: ["SEO audit & competitor mapping", "Performance tracking configuration", "Creative asset generation", "Campaign launches & audits", "Bi-weekly growth dashboard reports"],
      faq: [
        { q: "How long before we see results from organic SEO?", a: "High-value SEO keyword rankings typically take 3 to 6 months to mature, but paid performance ads can yield inbound sales leads within the first week." },
        { q: "Do you create the marketing graphics and copywriting?", a: "Yes. Our design and copy team produces custom landing page designs, ad creatives, performance copies, and SEO reports." }
      ]
    },
    {
      title: "Business Consulting",
      tagline: "Strategic digital transformation scoping.",
      longDesc: "Establish a clear automation roadmap before spending on software. We review your team's offline routines, audit your database structures, and deliver a detailed systems blueprint to scale yields.",
      icon: Briefcase,
      benefits: [
        { title: "Process SOP Mapping", desc: "Document department tasks and highlight data leakage loops between paper documents and offline folders." },
        { title: "Technology Risk Audits", desc: "Ensure database permissions, token lifecycles, and API security keys match modern standard compliance guidelines." },
        { title: "Custom Vendor RFP Blueprints", desc: "Receive detailed software requirements sheets and schema mappings to evaluate packages accurately before procurement." }
      ],
      features: [
        { name: "Digital Transformation", specs: "Legacy software reviews, database migration plans, and cloud cost optimizations", path: "/consulting/digital-transformation" },
        { name: "Workflow Strategy", specs: "Staff interviews, process bottleneck maps, and system requirements specifications", path: "/consulting/automation-strategy" },
        { name: "IT Strategy & Audits", specs: "Enterprise security architecture audits, database token clearances, and ETL designs", path: "/consulting/it-strategy" }
      ],
      workflow: ["Onsite stakeholder workshops", "Workflow audits & SOP diagrams", "Bottlenecks & licensing audits reports", "Architecture blueprint delivery", "Execution oversight consulting"],
      faq: [
        { q: "Can we hire ELVTERA only for consulting and let our own team build it?", a: "Yes. We deliver comprehensive system design blueprints, database schemas, and RFPs that your in-house engineering team can execute." },
        { q: "What is the typical duration of a consulting cycle?", a: "A standard scoping and systems design cycle takes between 4 to 8 weeks, depending on the number of departments, locations, and databases involved." }
      ]
    }
  ];

  const tabs = [
    { name: "Business Software", icon: Layers },
    { name: "AI Solutions", icon: Cpu },
    { name: "Automations", icon: Send },
    { name: "Digital Growth", icon: TrendingUp },
    { name: "Business Consulting", icon: Briefcase }
  ];

  const activePillar = pillarsData[activeTab];
  const ActiveIcon = activePillar.icon;

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
          <span className="text-brand-blue text-xs font-bold uppercase tracking-wider bg-brand-blue/10 px-3.5 py-1.5 rounded-full w-fit mx-auto block mb-3.5">
            Our Pillars
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight">
            Comprehensive Technology Services
          </h1>
          <p className="text-xs sm:text-sm text-slate-550 max-w-lg mx-auto leading-relaxed font-medium">
            Select one of our five core pillars below to view detailed operational features, deployment workflows, and technical details.
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

                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Pillar Deployment Workflow</h4>
                  <ol className="space-y-2 text-sm">
                    {activePillar.workflow.map((step, sIdx) => (
                      <li key={sIdx} className="flex items-center space-x-2">
                        <span className="h-5 w-5 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold text-[11px] shrink-0">
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
                      <div key={bIdx} className="bg-white border border-slate-200/50 p-4.5 rounded-xl space-y-1.5 hover-card shadow-xs">
                        <h4 className="font-bold text-xs text-slate-900 flex items-center space-x-1">
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
                            <td className="px-5 py-4 text-slate-600 font-medium">
                              {feat.specs}
                              <Link to={feat.path} className="ml-2 inline-flex items-center text-[10px] text-brand-teal font-extrabold hover:underline">
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
