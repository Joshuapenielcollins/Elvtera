import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, 
  Users, 
  MessageSquare, 
  Layers, 
  Check, 
  ArrowRight,
  Calculator,
  ShieldCheck,
  Zap,
  FolderOpen,
  Coins,
  Package,
  ShoppingCart,
  Factory,
  FileCode
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

interface ERPModule {
  title: string;
  source: string;
  desc: string;
  icon: React.ComponentType<any>;
}

const erpModulesList: ERPModule[] = [
  {
    title: "Accounts & Billing",
    source: "Sales invoicing, expense logs, tax summaries, and automatic receipt reconciliation.",
    desc: "Create invoices instantly, track client payments, and keep your books up to date without matching spreadsheets by hand.",
    icon: Coins
  },
  {
    title: "Stock & Inventory",
    source: "Multi-location inventory tracking, stock count sync, and low-inventory auto-alerts.",
    desc: "Know exactly what you have in stock across all your locations in real time, with alerts when it's time to reorder.",
    icon: Package
  },
  {
    title: "Customer Hub",
    source: "Customer lists, communication histories, sales pipelines, and rep assignments.",
    desc: "Keep all client notes, email histories, and phone call details in one central directory that your whole team can access.",
    icon: Users
  },
  {
    title: "Purchasing & Suppliers",
    source: "Supplier directories, purchase requests, incoming order tracking, and auto-invoicing.",
    desc: "Simplify how you buy materials. Send purchase orders automatically and track incoming shipments in real time.",
    icon: ShoppingCart
  },
  {
    title: "Tasks & Schedules",
    source: "Work order queues, worker route planning, job schedules, and material updates.",
    desc: "Organize your factory floor or team assignments in a clear schedule linked to your inventory levels.",
    icon: Factory
  },
  {
    title: "Timesheets & Wages",
    source: "Shift logs, check-in histories, automated payslips, and local tax compliance checks.",
    desc: "Manage worker shifts, register clock-in times, and calculate wages automatically based on hours worked.",
    icon: FolderOpen
  }
];

export const Products: React.FC = () => {
  const [employees, setEmployees] = useState(30);
  const [manualHours, setManualHours] = useState(15);
  const [wage, setWage] = useState(25);
  const [tier, setTier] = useState(0.40); // Default to Sync & Messaging (40% saving)

  const productsList: ProductItem[] = [
    {
      title: "1. Discovery Call",
      category: "Our Process",
      icon: Users,
      path: "/contact",
      desc: "We start with a friendly, no-pressure chat to understand how your business works, where your team spends too much time, and what you want to achieve.",
      specs: ["1-on-1 discussion", "No technical jargon", "Identify immediate wins", "Completely free of charge"]
    },
    {
      title: "2. Plan & Proposal",
      category: "Our Process",
      icon: Layers,
      path: "/contact",
      desc: "We map out a simple blueprint of how your custom system will look, how it connects your tools, and provide a clear, fixed-price proposal.",
      specs: ["Visual workflow roadmap", "Fixed-price quote", "Clear timeline options", "Step-by-step feature checklist"]
    },
    {
      title: "3. Build & Move Your Data",
      category: "Our Process",
      icon: Zap,
      path: "/contact",
      desc: "Our team builds your software system and moves your existing client lists, inventory records, and spreadsheet files into the new central hub.",
      specs: ["Secure data transfer", "Custom software build", "Routine updates", "Zero downtime for your team"]
    },
    {
      title: "4. Launch, Train & Support",
      category: "Our Process",
      icon: ShieldCheck,
      path: "/contact",
      desc: "We help your team learn the new software, launch it smoothly, and stay on to support, update, and improve your setup as you grow.",
      specs: ["Hands-on training", "Guaranteed support times", "Ongoing improvements", "System maintenance included"]
    }
  ];

  // Calculations
  const weeklyManualCost = employees * manualHours * wage;
  const weeklySavings = weeklyManualCost * tier;
  const annualSavings = weeklySavings * 52;

  const tierLabel = tier === 0.20 
    ? "Basic System" 
    : tier === 0.40 
      ? "Sync & Messaging Tools" 
      : "Complete Business System";

  return (
    <div className="w-full relative overflow-hidden font-sans bg-brand-bg-light text-slate-700">
      <SEO 
        title="How We Work" 
        description="Learn how ELVTERA designs, builds, and supports custom central systems for growing businesses." 
      />

      {/* Hero Header */}
      <section className="relative pt-16 pb-16 bg-white border-b border-slate-200/50">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[85%] h-[200px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-brand-blue text-xs font-bold uppercase tracking-wider block mb-3.5 text-center">
            How We Work
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight">
            A simple process built around you
          </h1>
          <p className="text-xs sm:text-sm text-slate-550 max-w-lg mx-auto leading-relaxed">
            We build custom software systems for small and medium businesses. We handle the entire process from planning to support.
          </p>
        </div>
      </section>

      {/* Animated Integration Flow Diagram */}
      <section className="py-12 bg-slate-50 border-b border-slate-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block mb-6">
            Ecosystem Integration Flow
          </span>
          
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-xs relative overflow-hidden max-w-2xl mx-auto">
            {/* Visual Connecting Streams */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
              
              {/* Product 1: ERP Engine */}
              <div className="bg-slate-50 border border-slate-250/60 p-5 rounded-2xl text-center space-y-2 hover-card shadow-2xs">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mx-auto border border-blue-100">
                  <Database className="h-6 w-6" />
                </div>
                <h4 className="font-display font-bold text-sm text-slate-800">Central System</h4>
                <p className="text-xs text-slate-500 font-medium">Main Record Keeping</p>
              </div>

              {/* Connecting Sync Gateway */}
              <div className="flex flex-col items-center justify-center space-y-2 relative">
                <div className="h-10 w-10 bg-brand-teal/10 text-brand-teal border border-brand-teal/20 rounded-full flex items-center justify-center font-bold text-xs animate-pulse">
                  <Zap className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-bold text-brand-teal uppercase tracking-wider">Sync Router</span>
                
                {/* Horizontal flow line with moving light dot (desktop only) */}
                <div className="hidden md:block absolute w-48 h-0.5 bg-slate-250 top-[35%] -translate-y-1/2 left-[-60px] pointer-events-none">
                  <div className="h-2 w-2 rounded-full bg-brand-blue absolute animate-ping left-1/4"></div>
                  <div className="h-2 w-2 rounded-full bg-brand-teal absolute animate-ping left-3/4"></div>
                </div>
              </div>

              {/* Product 2: APIs & Broadcasts */}
              <div className="bg-slate-50 border border-slate-250/60 p-5 rounded-2xl text-center space-y-2 hover-card shadow-2xs">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit mx-auto border border-emerald-100">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h4 className="font-display font-bold text-sm text-slate-800">System Connector</h4>
                <p className="text-xs text-slate-550 font-medium">Automatic Alerts and Sync</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ERP Core Modules Section */}
      <section className="py-20 bg-white border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="flex items-center space-x-2 text-brand-blue text-xs font-bold uppercase tracking-wider w-fit mx-auto">
              <FileCode className="h-4 w-4" />
              <span>System Features</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl text-slate-900">
              Everything you need to run your business
            </h2>
            <p className="text-sm text-slate-550 max-w-2xl mx-auto leading-relaxed font-medium">
              We build modules tailored to the needs of your business. Here are the core areas we bring together into your central hub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {erpModulesList.map((module, idx) => {
              const Icon = module.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-between hover-card text-left"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-brand-blue/10 text-brand-blue">
                        <Icon className="h-5.5 w-5.5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-450 select-none">
                        MODULE 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-slate-900">
                      {module.title}
                    </h3>
                    <p className="text-xs text-slate-550 leading-relaxed font-semibold">
                      {module.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">Core Setup Includes</span>
                    <p className="text-xs text-slate-600 font-semibold">{module.source}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Catalog list (Moved Up) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-slate-900">
              Our 4-Step Process
            </h2>
            <p className="text-sm text-slate-650">
              We guide you through every stage to ensure your custom system is a perfect fit and runs smoothly.
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
                      <span className="text-xs font-extrabold uppercase tracking-wider text-slate-455">
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
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">Key Highlights</h4>
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
            <div className="flex items-center space-x-2 text-brand-teal text-xs font-bold uppercase tracking-wider mx-auto">
              <Calculator className="h-4 w-4" />
              <span>Investment Scopes</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Calculate Your Time & Cost Savings
            </h2>
            <p className="text-xs sm:text-sm text-slate-550">
              Input your team size and average manual hours below to see the estimated time and money you could save with our custom systems.
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
                  <label className="text-slate-700">Manual Work Hours / Week per Employee</label>
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
                    { label: "Basic System (20%)", val: 0.20 },
                    { label: "Messaging & Sync (40%)", val: 0.40 },
                    { label: "Complete System (60%)", val: 0.60 }
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
                  <h3 className="font-display font-extrabold text-2xl text-slate-900 mt-1">Savings Projections</h3>
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
                      <span className="text-[10px] text-slate-455 font-bold block uppercase">Estimated Annual Savings</span>
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
                    Projections are based on average times saved reported by our clients.
                  </span>
                </div>
                <Link
                  to="/contact"
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white w-full py-4 rounded-xl font-bold shadow-lg shadow-brand-blue/20 flex items-center justify-center space-x-2 text-center text-sm"
                >
                  <span>Book a free call</span>
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
