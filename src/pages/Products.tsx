import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, 
  Users, 
  MessageSquare, 
  Bot, 
  Layers, 
  Check, 
  ArrowRight,
  Calculator,
  ShieldCheck,
  Zap,
  TrendingUp,
  Globe,
  Settings,
  FolderOpen
} from 'lucide-react';
import SEO from '../components/SEO';

interface ProductItem {
  title: string;
  category: string;
  icon: React.ComponentType<any>;
  desc: string;
  specs: string[];
  path: string;
}

export const Products: React.FC = () => {
  const [employees, setEmployees] = useState(30);
  const [manualHours, setManualHours] = useState(15);
  const [wage, setWage] = useState(25);
  const [tier, setTier] = useState(0.40); // Default to WhatsApp/AI Agent (40% saving)

  const productsList: ProductItem[] = [
    {
      title: "Enterprise ERP Engine",
      category: "Business Software",
      icon: Database,
      path: "/business-software/erp-solutions",
      desc: "All-in-one resource planning dashboard connecting manufacturing schedules, double-entry general ledger, real-time inventory levels, and payroll cycles.",
      specs: ["Modular Schema design", "Multi-warehouse inventories", "Automatic bank ledger audit sync", "Biometric clock-in integrations"]
    },
    {
      title: "Omnichannel Sales CRM",
      category: "Business Software",
      icon: Users,
      path: "/business-software/crm",
      desc: "Manage customer lifecycles and sales pipelines. Tracks conversions, scores leads, logs touchpoints, and assigns sales reps based on geo-locations.",
      specs: ["Sales reps leaderboards", "Lead allocation queues", "Custom client fields", "Historical transcripts tracker"]
    },
    {
      title: "Official WhatsApp CRM API",
      category: "Automations",
      icon: MessageSquare,
      path: "/automations/whatsapp-crm",
      desc: "Scale customer support and sales broadcasts using the official Meta API. Equips teams with shared inboxes, campaign planners, and chatbot triggers.",
      specs: ["Meta verification setup", "Shared team inbox dashboard", "Custom broadcasting triggers", "Opt-out list manager"]
    },
    {
      title: "AI Voice Calling Agent",
      category: "AI Solutions",
      icon: Bot,
      path: "/ai/voice-calling-agent",
      desc: "Autonomous outbound and inbound phone dialer. Qualifies lead sheets, books calendar slots, and routes high-intent transfers to live personnel.",
      specs: ["VoIP trunking configuration", "Low-latency voice outputs", "Cal.com & Calendly hooks", "Dial logs & call transcripts summaries"]
    },
    {
      title: "HRMS & Payroll Core",
      category: "Business Software",
      icon: Layers,
      path: "/business-software/hr",
      desc: "Coordinate employee records, biometrics tracking, attendance sheets, and payroll logs. Issues pay slips and calculates local tax contributions automatically.",
      specs: ["Biometric scanner integration", "Custom tax bracket models", "Employee request portal", "Shift-work pay calculations"]
    },
    {
      title: "Warehouse & Stock Inventory Engine",
      category: "Business Software",
      icon: FolderOpen,
      path: "/business-software/inventory",
      desc: "Track stock movements, batch expirations, supplier orders, and barcode scans. Unifies raw materials inventories across multiple warehouse hubs.",
      specs: ["Barcode cataloging", "Low-stock trigger notices", "Supplier audit diaries", "Batch expiry logs"]
    },
    {
      title: "Custom Employee & Client Portals",
      category: "Websites & Applications",
      icon: Globe,
      path: "/web-development/customer-portal",
      desc: "Secure login systems for workers (timesheets, paystubs, SOP guides) and clients (invoice clearances, project trackers, ticket submissions).",
      specs: ["2FA credentialing", "Encrypted document uploads", "Custom brand white-labeling", "Self-service service desks"]
    },
    {
      title: "AI Receptionist & Appointment Booker",
      category: "AI Solutions",
      icon: Zap,
      path: "/ai/appointment-booking",
      desc: "Qualify client inquiries, book sessions into team calendars, and respond to FAQs 24/7 across multiple channels.",
      specs: ["Cal.com schedule syncing", "Multi-turn lead screening", "Context RAG safety checks", "Multilingual speech responses"]
    },
    {
      title: "Enterprise Accounting Suite",
      category: "Business Software",
      icon: Settings,
      path: "/business-software/accounting",
      desc: "Record sales invoices, log overhead expenses, compute sales tax, and output real-time income sheets and balances.",
      specs: ["Double-entry compliance journals", "GST billing setup", "Automatic invoice trackers", "Localized tax summaries"]
    },
    {
      title: "Digital Marketing SEO & Ad Manager",
      category: "Digital Marketing",
      icon: TrendingUp,
      path: "/digital-marketing/seo",
      desc: "Coordinate search ranking audits, programmatic page structures, performance ad budgets, and email follow-up funnels.",
      specs: ["Programmatic speed optimization", "Lead capture funnel setups", "ROAS tracker dashboards", "Nurture sequence trigger maps"]
    }
  ];

  // Calculations
  const weeklyManualCost = employees * manualHours * wage;
  const weeklySavings = weeklyManualCost * tier;
  const annualSavings = weeklySavings * 52;

  const tierLabel = tier === 0.20 
    ? "Basic Software" 
    : tier === 0.40 
      ? "AI & WhatsApp Agent" 
      : "Complete ERP Ecosystem";

  return (
    <div className="w-full relative overflow-hidden font-sans bg-brand-bg-light text-slate-700">
      <SEO 
        title="Our Software Products" 
        description="Explore ELVTERA's software suite including Enterprise ERP, Sales CRM, WhatsApp API, and AI voice agents. Use our ROI Calculator to estimate savings." 
      />

      {/* Hero Header */}
      <section className="relative pt-16 pb-16 bg-white border-b border-slate-200/50">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[85%] h-[200px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-brand-blue text-xs font-bold uppercase tracking-wider bg-brand-blue/10 px-3.5 py-1.5 rounded-full w-fit mx-auto block mb-3.5">
            Ready-to-Deploy Products
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight">
            Software Built for Enterprise Scales
          </h1>
          <p className="text-xs sm:text-sm text-slate-550 max-w-lg mx-auto leading-relaxed">
            Discover our core software components. Each module fits into a unified API structure, allowing you to deploy individual features or scale into a complete ecosystem.
          </p>
        </div>
      </section>

      {/* Products Catalog list (Moved Up) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-slate-900">
              The Elvtera Software Suite
            </h2>
            <p className="text-sm text-slate-650">
              Browse our ready-to-deploy enterprise engines below. Every system can be custom configured by our engineers to support specific data maps. Click on any card to explore specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productsList.map((product, idx) => {
              const Icon = product.icon;
              return (
                <Link 
                  key={idx} 
                  to={product.path} 
                  className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 text-left hover-card flex flex-col justify-between cursor-pointer transition-all hover:border-brand-blue"
                >
                  <div className="space-y-5">
                    <div className="flex justify-between items-start">
                      <div className="p-2.5 rounded-xl bg-brand-blue/10 text-brand-blue">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-extrabold uppercase tracking-wider bg-slate-100 text-slate-450 px-2.5 py-1 rounded-full border border-slate-200/50">
                        {product.category}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-slate-900">
                      {product.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      {product.desc}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-5 mt-6">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">Technical Specifications</h4>
                    <ul className="space-y-2">
                      {product.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="text-xs sm:text-sm font-semibold text-slate-700 flex items-start space-x-2">
                          <Check className="h-4 w-4 text-brand-teal shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Business ROI Calculator (Moved Down) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="flex items-center space-x-2 bg-brand-teal/10 text-brand-teal text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full w-fit mx-auto">
              <Calculator className="h-4 w-4" />
              <span>Investment Scopes</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Calculate Your Automation ROI
            </h2>
            <p className="text-xs sm:text-sm text-slate-550">
              Input your workforce parameters below to visualize the annual overhead savings and efficiency yields when implementing ELVTERA systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Calculator Inputs */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 space-y-8 text-left">
              <h3 className="font-display font-semibold text-base sm:text-lg text-slate-900 flex items-center space-x-2">
                <span>Workforce Variables</span>
              </h3>

              {/* Employees Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-bold">
                  <label className="text-slate-700">Number of Employees</label>
                  <span className="text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-lg">{employees} Team Members</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="500" 
                  step="5"
                  value={employees} 
                  onChange={(e) => setEmployees(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                  <span>5 members</span>
                  <span>500 members</span>
                </div>
              </div>

              {/* Hours Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-bold">
                  <label className="text-slate-700">Manual SOP Hours / Week per Employee</label>
                  <span className="text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-lg">{manualHours} Hours / Week</span>
                </div>
                <input 
                  type="range" 
                  min="2" 
                  max="40" 
                  step="1"
                  value={manualHours} 
                  onChange={(e) => setManualHours(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                  <span>2 hours</span>
                  <span>40 hours</span>
                </div>
              </div>

              {/* Hourly Wage Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-bold">
                  <label className="text-slate-700">Average Hourly Employee Cost</label>
                  <span className="text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-lg">${wage} / Hour</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="150" 
                  step="5"
                  value={wage} 
                  onChange={(e) => setWage(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                  <span>$10/hr</span>
                  <span>$150/hr</span>
                </div>
              </div>

              {/* Tech Solution Selection Buttons */}
              <div className="space-y-3.5 pt-2">
                <label className="text-xs font-bold text-slate-750 block">Target Automation Tier</label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { label: "Basic Software (20%)", val: 0.20 },
                    { label: "AI & WA Agent (40%)", val: 0.40 },
                    { label: "Full Ecosystem (60%)", val: 0.60 }
                  ].map((btn, bIdx) => (
                    <button
                      key={bIdx}
                      onClick={() => setTier(btn.val)}
                      className={`py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        tier === btn.val
                          ? 'border-brand-blue bg-brand-blue/5 text-brand-blue'
                          : 'border-slate-250 bg-white text-slate-655 hover:bg-slate-50'
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Calculations Output */}
            <div className="lg:col-span-5 bg-brand-blue/5 border border-brand-blue/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-left">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-blue block">Estimated Savings Breakdown</span>
                  <h3 className="font-display font-extrabold text-2xl text-slate-900 mt-1">ROI Projections</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white border border-slate-200/60 p-4.5 rounded-2xl flex justify-between items-center shadow-xs">
                    <div>
                      <span className="text-[10px] text-slate-450 font-bold block uppercase">Current Manual Cost / Year</span>
                      <span className="text-lg font-bold text-slate-800">${(weeklyManualCost * 52).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200/60 p-4.5 rounded-2xl flex justify-between items-center shadow-xs">
                    <div>
                      <span className="text-[10px] text-slate-450 font-bold block uppercase">Annual Saving Yield</span>
                      <span className="text-xl font-extrabold text-brand-blue">${annualSavings.toLocaleString()}</span>
                    </div>
                    <span className="text-[10px] font-extrabold text-brand-teal bg-brand-teal/10 px-2 py-0.5 rounded-lg shrink-0">
                      Save {tier * 100}%
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-550 leading-relaxed font-semibold">
                  By implementing {tierLabel} workflows, your organization is projected to reclaim approximately <span className="text-brand-blue">{(manualHours * tier * employees * 52).toLocaleString()} hours</span> of manual overhead annually.
                </p>
              </div>

              <div className="pt-6 space-y-3.5">
                <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-center space-x-2.5">
                  <ShieldCheck className="h-4.5 w-4.5 text-brand-teal shrink-0" />
                  <span className="text-[11px] text-slate-500 font-semibold leading-normal">
                    Projections are calculated based on average enterprise workflow benchmarks.
                  </span>
                </div>
                <Link
                  to="/contact"
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white w-full py-4 rounded-xl font-bold shadow-lg shadow-brand-blue/20 flex items-center justify-center space-x-2 text-center text-sm"
                >
                  <span>Book Demo for ${annualSavings.toLocaleString()} Savings</span>
                  <ArrowRight className="h-4.5 w-4.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
export default Products;
