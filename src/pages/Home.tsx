import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Shield, 
  Cpu, 
  Activity, 
  Users, 
  ChevronDown, 
  CheckCircle,
  Database,
  MessageSquare,
  CheckCircle2,
  Terminal,
  Network,
  Layers,
  Briefcase,
  Send,
  Bot,
  TrendingUp
} from 'lucide-react';
import { StatsCounter } from '../components/StatsCounter';
import { InteractiveWorkflow } from '../components/InteractiveWorkflow';
import SEO from '../components/SEO';

export const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [visualMode, setVisualMode] = useState<'topology' | 'console'>('topology');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [consoleLogs, setConsoleLogs] = useState<{ time: string; type: string; msg: string; color: string }[]>([
    { time: "10:14:02", type: "INGEST", msg: "Received Sales Invoice SI-2026-00492", color: "text-brand-blue" },
    { time: "10:14:05", type: "STOCK", msg: "Deducted yarn batch #FAB-292", color: "text-brand-teal" },
    { time: "10:14:08", type: "LEDGER", msg: "Posted journal debit $1,250.00", color: "text-brand-blue" }
  ]);

  React.useEffect(() => {
    const transactionPool = [
      { type: "INGEST", msg: "Parsed customer query via CRM API", color: "text-slate-400" },
      { type: "LEDGER", msg: "Posted invoice clearing ledger record", color: "text-brand-blue" },
      { type: "STOCK", msg: "Inventory levels check: SKU yarn low", color: "text-amber-500" },
      { type: "TRIGGER", msg: "Auto-issued restocking PO to Supplier A", color: "text-brand-teal" },
      { type: "HRMS", msg: "Registered shift clock-in: User ID 992", color: "text-slate-400" },
      { type: "MRP", msg: "Generated production Work Order WO-492", color: "text-brand-teal" },
      { type: "SUPPORT", msg: "Assigned customer ticket to rep queue", color: "text-brand-blue" }
    ];

    const interval = setInterval(() => {
      const date = new Date();
      const timeStr = date.toTimeString().split(' ')[0];
      const randomTx = transactionPool[Math.floor(Math.random() * transactionPool.length)];
      
      setConsoleLogs(prev => [
        ...prev.slice(-3),
        { time: timeStr, ...randomTx }
      ]);

      // Rotate constellation nodes (6 nodes = 360 / 6 = 60 degrees per step)
      setActiveIndex(prev => (prev + 1) % 6);
      setRotationAngle(prev => prev + 60);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const pillars = [
    {
      title: "Business Software",
      desc: "Decommission scattered spreadsheets and manual invoice copying. We build modular, custom-tailored ERP, CRM, and POS applications that coordinate stock levels, dispatch cycles, and sales debits automatically into a single GAAP-compliant general ledger.",
      features: ["Real-Time Inventory Reconciliation", "GAAP Double-Entry Ledger", "Custom Multi-Warehouse POS", "BOM & Production Scheduling"],
      color: "border-blue-500/20 hover:border-blue-500",
      badge: "99.99% Database Uptime"
    },
    {
      title: "AI Solutions",
      desc: "Eliminate manual data entries and administrative bottlenecks. Deploys private RAG vector storage, LLM-based OCR parsers, and trigger scripts to analyze incoming contracts, match bills of materials, and schedule calendar queues automatically.",
      features: ["LLM-Based Document Auditing", "RAG Vector Context Search", "Automatic Database Syncing", "Multi-Agent Support Routing"],
      color: "border-teal-500/20 hover:border-teal-500",
      badge: "Workflow Automation"
    },
    {
      title: "Workflow Automations",
      desc: "Connect scattered business applications (such as CRMs, SQL databases, messaging endpoints, and email gateways) into automated, event-driven pipelines. We build custom triggers and background scripts that synchronize records, compile logs, and alert teams instantly, eliminating manual administration overhead.",
      features: ["Event-Driven Workflow Engines", "Webhooks & API Integrations", "Database Synchronization Loops", "Custom Alert & Reporting Rules"],
      color: "border-emerald-500/20 hover:border-emerald-500",
      badge: "Workflow Optimization"
    },
    {
      title: "Digital Growth",
      desc: "Acquire qualified pipeline systematically. We design and build programmatic landing pages, page indexing architectures, Core Web Vitals speed optimizations, and performance analytics funnels that scale conversion rates.",
      features: ["Programmatic Page Indexing", "Core Web Vitals Speed Optimization", "Multi-Channel Tracking Scripts", "CRO Funnel Rebuilding"],
      color: "border-indigo-500/20 hover:border-indigo-500",
      badge: "4.2x Average ROAS"
    },
    {
      title: "Business Consulting",
      desc: "Strategic digital transformation scoping. We run hands-on database mapping workshops, audit legacy SOP bottlenecks, design database schemas, and deliver custom technical RFPs to prepare your infrastructure for secure scaling.",
      features: ["Database Schema Mapping", "SOP Bottleneck Auditing", "Custom Vendor RFP Specs", "SLA Deployment Scoping"],
      color: "border-orange-500/20 hover:border-orange-500",
      badge: "Phased SLA Scoping"
    }
  ];

  const whyUs = [
    {
      title: "Enterprise Security",
      desc: "Bank-grade encryption, database access limits, and rigorous access controls safeguard your company's operational records.",
      icon: Shield
    },
    {
      title: "AI-First Ecosystems",
      desc: "We build machine-learning workflows directly into the database layers of every ledger system we design.",
      icon: Cpu
    },
    {
      title: "Modular Scalability",
      desc: "Our software grows alongside you. Plug in inventory modules, payroll, or WhatsApp funnels seamlessly when you need them.",
      icon: Activity
    },
    {
      title: "24/7 Dedicated SLA",
      desc: "Enjoy complete operational safety with structured service level agreements and a dedicated developer support group.",
      icon: Users
    }
  ];

  const testimonials = [
    {
      quote: "ELVTERA consolidated our manufacturing schedule, inventory system, and sales pipelines into a single custom ERP. We reduced administration hours by 60% in just four months.",
      author: "Marcus Chen",
      role: "VP of Operations",
      company: "Apex Textile Group",
      rating: 5,
      avatar: "MC"
    },
    {
      quote: "The AI Voice calling agent qualified 12,000 inbound leads in under a week, booking over 800 booked demos directly on our team's calendar. It felt like we added 15 sales reps overnight.",
      author: "Sarah Jenkins",
      role: "VP of Business Development",
      company: "MedTech Distribution",
      rating: 5,
      avatar: "SJ"
    },
    {
      quote: "Their official WhatsApp API integration and shared inbox changed the game for our patient booking. Customer satisfaction score rose to 98% and no messages are missed anymore.",
      author: "Dr. Amanda Ross",
      role: "Clinic Director",
      company: "Pacific Health Care",
      rating: 5,
      avatar: "AR"
    }
  ];

  const faqs = [
    {
      q: "Does ELVTERA build custom software, or do you use standard templates?",
      a: "We develop completely customized enterprise ecosystems. While we leverage standard libraries and secure cloud components for efficiency, your business processes, databases, and UX configurations are engineered specifically for your brand."
    },
    {
      q: "Can your AI Voice Agents and WhatsApp chat setups integrate with my current CRM?",
      a: "Yes. We build custom API connectors for Zoho, Salesforce, Hubspot, and custom database backends. All lead captures, chat transcripts, call outcomes, and booked appointments sync back into your central database automatically."
    },
    {
      q: "What industries do you specialize in?",
      a: "We have proven deployment frameworks across Manufacturing, Textiles, Healthcare/Clinics, Construction, Retail and POS chains, and Logistics systems. Each framework features pre-modeled modules customized for that industry's compliance and operational requirements."
    },
    {
      q: "How does the pricing work for custom enterprise developments?",
      a: "We provide clear, milestones-based pricing after our initial consultation and scoping process. We also offer subscription-based options for our ready-to-deploy products (like AI Callers, WhatsApp CRM, and POS) to allow fast deployments with lower initial overheads."
    }
  ];

  return (
    <div className="w-full relative overflow-hidden bg-brand-bg-light text-slate-700">
      <SEO 
        title="Transform Your Operations" 
        description="Transform your business with intelligent software, custom ERP/CRM developments, autonomous AI voice agents, and workflow automations by ELVTERA." 
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:py-20 bg-white border-b border-slate-200/50">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side text */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <div className="flex items-center space-x-2 bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full w-fit">
                <Sparkles className="h-4 w-4" />
                <span>Enterprise Operations • Built for Scale</span>
              </div>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6.5xl text-slate-900 leading-[1.1] tracking-tight">
                Build a Smarter Business with AI, Automation & Enterprise Software
              </h1>
              <p className="text-base sm:text-lg text-slate-650 max-w-xl leading-relaxed font-medium">
                From ERP and CRM to AI agents and business automation, ELVTERA helps growing businesses streamline operations, improve productivity, and scale with confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/contact"
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white px-7 py-4 rounded-xl font-bold shadow-lg shadow-brand-blue/25 hover:shadow-xl transition-all duration-300 text-center flex items-center justify-center space-x-2 text-sm whitespace-nowrap"
                >
                  <span>Book a Free Consultation</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-7 py-4 rounded-xl font-bold transition-colors text-center text-sm shadow-sm whitespace-nowrap"
                >
                  Explore Our Solutions
                </Link>
              </div>
            </div>

            {/* Right Side: Operational Dashboard Visualizer */}
            <div className="lg:col-span-6 relative w-full min-h-[480px] flex items-center justify-center">
              <div className="absolute inset-0 bg-brand-blue/5 rounded-3xl blur-2xl"></div>
              
              <div className="absolute inset-0 bg-white border border-slate-200 rounded-3xl shadow-xl p-6 flex flex-col justify-between overflow-hidden relative">
                
                {/* Dashboard Header with Mode Toggles */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 shrink-0">
                  <div className="flex items-center space-x-1.5 bg-slate-100 p-1 rounded-xl">
                    <button
                      onClick={() => setVisualMode('topology')}
                      className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                        visualMode === 'topology' 
                          ? 'bg-white text-brand-blue shadow-sm' 
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      <Network className="h-3 w-3" />
                      <span>Architecture Map</span>
                    </button>
                    <button
                      onClick={() => setVisualMode('console')}
                      className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                        visualMode === 'console' 
                          ? 'bg-white text-brand-blue shadow-sm' 
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      <Terminal className="h-3 w-3" />
                      <span>Live Activity</span>
                    </button>
                  </div>
                  <span className="text-[9px] bg-brand-blue/10 text-brand-blue font-extrabold px-2.5 py-1 rounded-full">
                    Core Dashboard
                  </span>
                </div>

                {/* Dashboard Core Body */}
                <div className="grow flex flex-col justify-center py-4 relative min-h-[280px]">
                  
                  {visualMode === 'topology' ? (
                    /* Orbiting Constellation Map (Inspiration: CubeAI Solutions) */
                    <div className="w-full h-full flex items-center justify-center scale-[0.8] sm:scale-100 select-none">
                      <div className="relative w-80 h-80 flex items-center justify-center">
                        
                        {/* Central Ledger Core Node */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                          <div className="w-24 h-24 bg-white rounded-full shadow-lg flex flex-col items-center justify-center border border-slate-100 p-4">
                            <Database className="h-6 w-6 text-brand-blue animate-pulse mb-1" />
                            <span className="font-display font-extrabold text-[11px] text-slate-800 tracking-tight">Ledger Core</span>
                            <span className="text-[8px] font-bold text-brand-teal uppercase tracking-wider mt-0.5">ELVTERA</span>
                          </div>
                        </div>

                        {/* Orbiting Ring container (rotates by -rotationAngle) */}
                        <div 
                          className="absolute inset-0 transition-transform duration-1000 ease-out"
                          style={{ transform: `rotate(${-rotationAngle}deg)` }}
                        >
                          {/* Orbit dashed circle line */}
                          <div className="absolute inset-4 rounded-full border-2 border-dashed border-slate-200 pointer-events-none"></div>
                          
                          {/* Map of the 6 nodes */}
                          {[
                            { label: "ERP Systems", icon: Layers },
                            { label: "Workflows", icon: Cpu },
                            { label: "AI Agents", icon: Bot },
                            { label: "APIs & Webhooks", icon: Send },
                            { label: "Digital Growth", icon: TrendingUp },
                            { label: "IT Consulting", icon: Briefcase }
                          ].map((node, index) => {
                            const angle = (60 * index - 90) * (Math.PI / 180);
                            const radius = 130; // px
                            const x = radius * Math.cos(angle);
                            const y = radius * Math.sin(angle);
                            const isActive = index === activeIndex;
                            const Icon = node.icon;
                            
                            return (
                              <div 
                                key={index}
                                className="absolute top-1/2 left-1/2 transition-all duration-500"
                                style={{
                                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${rotationAngle}deg)`
                                }}
                              >
                                <div className={`flex flex-col items-center justify-center p-2.5 rounded-xl transition-all duration-300 w-24 border ${
                                  isActive 
                                    ? "bg-white shadow-lg scale-110 border-brand-blue/60" 
                                    : "bg-white/95 scale-90 opacity-60 border-slate-200"
                                }`}>
                                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                                    isActive ? "bg-brand-blue text-white" : "bg-slate-100 text-slate-500"
                                  }`}>
                                    <Icon className="h-4.5 w-4.5" />
                                  </div>
                                  <span className={`text-[8px] font-bold mt-1 text-center whitespace-nowrap leading-none ${
                                    isActive ? "text-slate-900" : "text-slate-500"
                                  }`}>
                                    {node.label}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                      </div>
                    </div>
                  ) : (
                    /* Live Transaction Logs Console */
                    <div className="bg-slate-950 text-slate-300 p-4.5 rounded-2xl font-mono text-[10px] text-left space-y-2 border border-slate-800 shadow-inner select-none h-full flex flex-col justify-center">
                      <div className="flex items-center justify-between text-[9px] text-slate-500 font-bold border-b border-slate-900 pb-2 mb-1 shrink-0">
                        <span>LIVE EVENT STREAM</span>
                        <span className="text-brand-teal flex items-center space-x-1 animate-pulse">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-teal"></span>
                          <span>ACTIVE</span>
                        </span>
                      </div>
                      
                      <div className="space-y-2 grow flex flex-col justify-end">
                        {consoleLogs.map((log, lIdx) => (
                          <div key={lIdx} className="flex items-start space-x-2 transition-all duration-300 animate-fadeInUp">
                            <span className="text-slate-500 shrink-0">[{log.time}]</span>
                            <span className={`${log.color} font-bold shrink-0`}>{log.type}:</span>
                            <span className="text-slate-350 break-all">{log.msg}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* Status Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-450 font-semibold mt-auto shrink-0">
                  <div className="flex items-center space-x-1.5">
                    <span className="h-2 w-2 rounded-full bg-brand-teal animate-pulse"></span>
                    <span className="text-[10px] sm:text-xs">
                      Core Operations Online
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs">Uptime &gt; 99.9%</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-center justify-center">
            <div className="space-y-1">
              <StatsCounter value={25} suffix="+" />
              <p className="text-sm font-extrabold text-slate-500 uppercase tracking-wider">Industries Powered</p>
            </div>
            <div className="space-y-1">
              <StatsCounter value={98} suffix="%" />
              <p className="text-sm font-extrabold text-slate-500 uppercase tracking-wider">Satisfaction Rate</p>
            </div>
            <div className="space-y-1 flex flex-col items-center">
              <span className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight">24/7</span>
              <p className="text-sm font-extrabold text-slate-500 uppercase tracking-wider mt-1">SLA Support</p>
            </div>
            <div className="space-y-1">
              <StatsCounter value={10} suffix="+" />
              <p className="text-sm font-extrabold text-slate-500 uppercase tracking-wider">Core Platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Five Pillars Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-brand-blue text-xs font-bold uppercase tracking-wider bg-brand-blue/10 px-3.5 py-1.5 rounded-full w-fit mx-auto block mb-3.5">
              Our Capabilities
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900">
              The Five Pillars of Operations Automation
            </h2>
            <p className="text-base text-slate-650">
              We engineer custom software modules that combine database storage, communication APIs, and localized logic into one compliant ledger structure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className={`bg-white border border-slate-200 rounded-2xl p-8 pb-10 flex flex-col justify-between h-full hover-card hover:border-brand-blue transition-all duration-300 ${pillar.color}`}
              >
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-extrabold uppercase tracking-wider bg-brand-blue/10 text-brand-blue px-3.5 py-1.5 rounded-full">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-550 leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-5 mt-6">
                  <ul className="space-y-2 text-left">
                    {pillar.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs font-bold text-slate-700 flex items-center space-x-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-teal inline-block"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Call to Action Grid Card */}
            <div className="bg-gradient-brand rounded-2xl p-8 pb-10 flex flex-col justify-between text-white shadow-xl shadow-brand-blue/10 h-full">
              <div className="text-left space-y-4">
                <h3 className="font-display font-bold text-2xl">
                  Need a custom enterprise architecture?
                </h3>
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-medium">
                  Let's analyze your team's offline routines, audit your spreadsheet setups, and construct a scalable systems blueprint.
                </p>
              </div>

              <Link
                to="/contact"
                className="bg-white text-slate-900 px-6 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-colors flex items-center justify-center space-x-2 text-sm mt-8 shadow-sm"
              >
                <span>Request Custom Blueprint</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* System Integration Workflow Section */}
      <section className="py-20 bg-white border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-brand-blue text-xs font-bold uppercase tracking-wider bg-brand-blue/10 px-3.5 py-1.5 rounded-full w-fit mx-auto block mb-3.5">
              Deployment Lifecycle
            </span>
            <h2 className="font-display font-bold text-3xl text-slate-900">
              Operational Automation Stages
            </h2>
            <p className="text-sm text-slate-550 max-w-lg mx-auto">
              How our software modules execute standard operating procedures, qualify queries, and synchronize company ledgers.
            </p>
          </div>
          <InteractiveWorkflow />
        </div>
      </section>

      {/* NEW CONTAINER 1: System Integration Map (Rich Human-Designed Visual) */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-brand-blue text-xs font-bold uppercase tracking-wider bg-brand-blue/10 px-3.5 py-1.5 rounded-full w-fit mx-auto block mb-3.5">
              System Architecture
            </span>
            <h2 className="font-display font-bold text-3xl text-slate-900">
              Clean Data Synchronization Model
            </h2>
            <p className="text-sm text-slate-650">
              How ELVTERA connects communication endpoints, automation scripts, and database general ledgers securely.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 text-left shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Side: Steps (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <h3 className="font-display font-bold text-xl text-slate-950">Secure Flow Cycles</h3>
                
                <div className="space-y-4">
                  {[
                    { title: "Client Action Logs", desc: "WhatsApp questions, calendar bookings, or POS bills log immediately." },
                    { title: "AI Telephony Validation", desc: "Machine-learning scripts verify details, minimizing typos." },
                    { title: "Database Write Queue", desc: "Encrypted PostgreSQL routes record information synchronously." },
                    { title: "Compliant Accounting Update", desc: "General ledger entries register automatically, closing accounts instantly." }
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-3.5">
                      <div className="h-7 w-7 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{step.title}</h4>
                        <p className="text-xs text-slate-500 mt-0.5 leading-normal">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Visual Map Diagram (7 cols) */}
              <div className="lg:col-span-7 bg-slate-50 border border-slate-200/60 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-blue/5 rounded-full blur-2xl"></div>
                
                <div className="grid grid-cols-3 gap-4 text-center items-center relative z-10">
                  
                  {/* Column 1: Sources */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold text-slate-450 uppercase block">Sources</span>
                    
                    <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-xs">
                      <MessageSquare className="h-4.5 w-4.5 text-brand-blue mx-auto mb-1.5" />
                      <span className="text-[10px] font-bold text-slate-800 block">WhatsApp API</span>
                    </div>
                    <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-xs">
                      <Users className="h-4.5 w-4.5 text-brand-blue mx-auto mb-1.5" />
                      <span className="text-[10px] font-bold text-slate-800 block">POS Systems</span>
                    </div>
                  </div>

                  {/* Column 2: Pipelines */}
                  <div className="space-y-3">
                    <div className="h-8 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-brand-teal animate-pulse">Syncing...</span>
                    </div>
                    
                    <div className="bg-brand-blue text-white p-4.5 rounded-xl shadow-md border border-brand-blue">
                      <Cpu className="h-6 w-6 mx-auto mb-1.5 text-white animate-spin" style={{ animationDuration: '6s' }} />
                      <span className="text-[10px] font-extrabold uppercase tracking-wider block">Elvtera Core</span>
                    </div>
                  </div>

                  {/* Column 3: Ledger */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold text-slate-450 uppercase block">Ledger</span>
                    
                    <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-xs">
                      <Database className="h-4.5 w-4.5 text-brand-teal mx-auto mb-1.5" />
                      <span className="text-[10px] font-bold text-slate-800 block">PostgreSQL</span>
                    </div>
                    <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-xs">
                      <CheckCircle className="h-4.5 w-4.5 text-brand-teal mx-auto mb-1.5" />
                      <span className="text-[10px] font-bold text-slate-800 block">GAAP Ledger</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* NEW CONTAINER 2: Performance Audit Logs (Proof Section) */}
      <section className="py-16 bg-white border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Side: Context (5 cols) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">Verified Performance Logs</span>
              <h2 className="font-display font-bold text-3xl text-slate-900 leading-tight">
                Audited Operational Yields
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                We review system metrics post-deployment to verify actual yields. Below are benchmarks logged across our active enterprise installations.
              </p>
              <div className="p-4 bg-brand-blue/5 border border-brand-blue/15 rounded-2xl flex items-start space-x-2.5">
                <CheckCircle2 className="h-5 w-5 text-brand-teal shrink-0" />
                <p className="text-xs text-slate-500 font-semibold leading-normal">
                  All metrics are checked and verified by client operational heads during phased system sign-offs.
                </p>
              </div>
            </div>

            {/* Right Side: Grid of 4 Audited Benchmarks (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-blue block">Apex Textile Group</span>
                <h3 className="font-display font-extrabold text-3xl text-slate-950">60%</h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  Reduction in weekly administrative hours via unified materials reordering.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-blue block">MedTech Distribution</span>
                <h3 className="font-display font-extrabold text-3xl text-slate-950">42%</h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  Increase in inbound booked consultations using AI phone call qualifiers.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-blue block">System Stability</span>
                <h3 className="font-display font-extrabold text-3xl text-slate-950">99.99%</h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  Database general ledger availability during high-traffic transactional queues.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-blue block">Financial Closure</span>
                <h3 className="font-display font-extrabold text-3xl text-slate-950">85%</h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  Reduction in end-of-month general balance sheets reconciliation logs.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side text */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-brand-blue text-xs font-bold uppercase tracking-wider bg-brand-blue/10 px-3.5 py-1.5 rounded-full w-fit block mb-3.5">
                Why Us
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
                Designed for Growing Corporate Pipelines
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                We bridge the gap between complex engineering and elegant product design. We don't just supply software, we build reliable growth ecosystems that adapt as you expand.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-1 rounded-full bg-brand-success/10 text-brand-success mt-0.5">
                    <CheckCircle className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-slate-900">Cloud-Native Reliability</h4>
                    <p className="text-sm text-slate-500">Fast page loads and robust database structures using premium cloud providers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-1 rounded-full bg-brand-success/10 text-brand-success mt-0.5">
                    <CheckCircle className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-slate-900">Bespoke SLA Architecture</h4>
                    <p className="text-sm text-slate-500">Service level guarantees tailored to match client traffic and system criticality.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side items grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyUs.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/60 text-left hover-card">
                    <div className="p-2.5 rounded-xl bg-brand-blue/10 text-brand-blue w-fit mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display font-bold text-base text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-550 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900">
              Trusted by Leading Organizations
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Read how enterprise executives and operations directors streamline workflows using our custom-tailored technology suites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between text-left hover-card"
              >
                <div className="space-y-4">
                  {/* Rating stars */}
                  <div className="flex items-center space-x-1 text-yellow-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center space-x-3 border-t border-slate-200 pt-4 mt-6">
                  <div className="h-10 w-10 rounded-xl bg-gradient-brand p-0.5 flex items-center justify-center font-display font-bold text-white text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{t.author}</h4>
                    <p className="text-xs text-slate-450">{t.role}, <span className="text-brand-blue">{t.company}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-slate-600">
              Everything you need to know about our implementation cycles, AI models, and technology stacks.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-250/60 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="font-display font-semibold text-sm sm:text-base">
                      {faq.q}
                    </span>
                    <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-slate-550 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-slate-50 relative overflow-hidden text-center border-t border-slate-200">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[300px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Ready to Build Your Digital Ecosystem?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed font-medium">
            Let's structure your automation workflows and cloud databases today. Book a call with our enterprise consulting team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue/90 text-white px-7 py-4 rounded-xl font-bold shadow-lg shadow-brand-blue/20 hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer text-sm"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-800 px-7 py-4 rounded-xl font-bold transition-all text-center border border-slate-300 cursor-pointer shadow-sm text-sm"
            >
              Talk to Expert
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
export default Home;
