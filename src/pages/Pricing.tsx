import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck,
  Sliders,
  Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';

export const Pricing: React.FC = () => {
  const [users, setUsers] = useState(15);
  const [includeAI, setIncludeAI] = useState(false);
  const [includeWhatsApp, setIncludeWhatsApp] = useState(false);
  const [includeERP, setIncludeERP] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Calculations for custom slider quote
  const baseCost = Math.max(99, users * 12);
  const aiCost = includeAI ? 199 : 0;
  const waCost = includeWhatsApp ? 149 : 0;
  const erpCost = includeERP ? 299 : 0;
  const totalCustomMonthly = baseCost + aiCost + waCost + erpCost;

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const plans = [
    {
      name: "Starter Package",
      desc: "For growing teams seeking to organize base data logs.",
      price: "$299",
      period: "/month",
      features: [
        "Up to 15 user licenses",
        "Base Lead Capture forms CRM",
        "Shared Team Inbox (1 WhatsApp number)",
        "Standard Cloud database hosting",
        "Email support (24 hour SLA response)"
      ],
      popular: false,
      cta: "Deploy Starter Plan"
    },
    {
      name: "Growth Engine",
      desc: "For medium-sized enterprises automating sales channels.",
      price: "$799",
      period: "/month",
      features: [
        "Up to 50 user licenses",
        "Advanced CRM routing configurations",
        "WhatsApp Broadcasts & Chatbots APIs",
        "AI Voice Caller Agent (1 active bot)",
        "Dedicated accounting ledger module",
        "Priority Support (4 hour SLA response)"
      ],
      popular: true,
      cta: "Launch Growth Engine"
    },
    {
      name: "Enterprise Core",
      desc: "Comprehensive digital ecosystem for large operations.",
      price: "$1,899",
      period: "/month",
      features: [
        "Unlimited user licenses",
        "Complete Manufacturing & POS ERPs",
        "AI Voice Agents (3 active bots)",
        "WhatsApp CRM + Programmatic API hooks",
        "Custom ETL data migration adapters",
        "24/7 Phone SLA support (30-min response)"
      ],
      popular: false,
      cta: "Integrate Enterprise Core"
    }
  ];

  const faqs = [
    {
      q: "Are there any setup fees for custom configurations?",
      a: "Yes. For custom database integrations, legacy migrations, and custom voice agent prompts, we charge a one-time setup and engineering fee scoped during the consultation. Our standard plans have zero setup overheads."
    },
    {
      q: "Can we downgrade or cancel our subscription plan?",
      a: "All subscription agreements are billed month-to-month or annually. You can modify your user counts or cancel your subscription at the end of your billing cycle with a 30-day notice."
    },
    {
      q: "Do you offer discounts for annual commitments?",
      a: "Yes. We offer a 20% discount on all monthly subscriptions if committed to an annual contract."
    }
  ];

  return (
    <div className="w-full relative overflow-hidden font-sans">
      <SEO 
        title="Subscription Pricing Plans" 
        description="View ELVTERA's transparent subscription pricing plans or use our interactive pricing estimator to build a custom package." 
      />

      {/* Hero Header */}
      <section className="relative pt-12 pb-16 bg-slate-50 dark:bg-slate-950/20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[85%] h-[200px] bg-gradient-glow rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-brand-blue text-xs font-bold uppercase tracking-wider bg-brand-blue/10 dark:bg-brand-blue/20 px-3.5 py-1.5 rounded-full w-fit mx-auto">
            Flexible Packages
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Transparent, Value-Based Pricing
          </h1>
          <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
            Select a ready-to-deploy plan or use our custom calculator below to construct a package that aligns with your user counts and automated modules.
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`bg-slate-50 dark:bg-slate-950 rounded-3xl p-8 border flex flex-col justify-between hover-card relative ${
                  plan.popular 
                    ? 'border-brand-blue dark:border-brand-blue/60 ring-2 ring-brand-blue/15' 
                    : 'border-slate-200/60 dark:border-slate-800'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Most Popular
                  </span>
                )}
                
                <div className="space-y-6 text-left">
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-slate-550 dark:text-slate-400 mt-1.5 leading-relaxed">
                      {plan.desc}
                    </p>
                  </div>

                  <div className="flex items-baseline space-x-1 border-y border-slate-200/50 dark:border-slate-850 py-4">
                    <span className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">{plan.price}</span>
                    <span className="text-xs text-slate-450">{plan.period}</span>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-sm text-slate-700 dark:text-slate-350 flex items-start space-x-2.5">
                        <Check className="h-4.5 w-4.5 text-brand-teal shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    to="/contact"
                    state={{ planName: plan.name }}
                    className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center space-x-2 text-center text-xs transition-colors cursor-pointer ${
                      plan.popular
                        ? 'bg-brand-blue hover:bg-brand-blue/90 text-white shadow-lg shadow-brand-blue/15'
                        : 'bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-250 dark:border-slate-800'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Interactive Custom Quote Estimator */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950/20 border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="flex items-center space-x-2 bg-brand-teal/10 text-brand-teal text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full w-fit mx-auto">
              <Sliders className="h-4 w-4" />
              <span>Tailored Quotes</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
              Bespoke Package Estimator
            </h2>
            <p className="text-sm text-slate-550 dark:text-slate-400">
              Need a tailored license layout? Adjust the slider and select optional automation add-ons to build your monthly estimated quote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Controls (7 cols) */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8 text-left shadow-sm">
              <h3 className="font-display font-semibold text-base sm:text-lg text-slate-900 dark:text-white flex items-center space-x-2">
                <span>Select Your Scope</span>
              </h3>

              {/* Users count slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-bold">
                  <label className="text-slate-700 dark:text-slate-350">User Licenses</label>
                  <span className="text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-lg">{users} Active Users</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="200" 
                  value={users} 
                  onChange={(e) => setUsers(Number(e.target.value))}
                  className="w-full accent-brand-blue bg-slate-200 dark:bg-slate-800 rounded-lg h-2"
                />
                <div className="flex justify-between text-xs text-slate-500 font-bold">
                  <span>5 users (minimum)</span>
                  <span>200 users</span>
                </div>
              </div>

              {/* Module Checkboxes */}
              <div className="space-y-4">
                <label className="block text-xs font-bold text-slate-750 dark:text-slate-300">Optional Add-on Modules</label>
                
                <div className="space-y-3">
                  
                  {/* AI Caller checkbox */}
                  <label className="flex items-start space-x-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-850 hover:bg-slate-55 cursor-pointer transition-colors">
                    <input 
                      type="checkbox" 
                      checked={includeAI}
                      onChange={(e) => setIncludeAI(e.target.checked)}
                      className="mt-1 accent-brand-blue h-4 w-4 rounded"
                    />
                    <div className="grow">
                      <div className="flex justify-between items-center text-xs font-bold text-slate-900 dark:text-white">
                        <span>AI Voice Calling Agent Module</span>
                        <span className="text-brand-teal">+$199 / month</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Includes Twilio SIP trunking and low-latency voice booking prompts.</p>
                    </div>
                  </label>

                  {/* WhatsApp API checkbox */}
                  <label className="flex items-start space-x-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-850 hover:bg-slate-55 cursor-pointer transition-colors">
                    <input 
                      type="checkbox" 
                      checked={includeWhatsApp}
                      onChange={(e) => setIncludeWhatsApp(e.target.checked)}
                      className="mt-1 accent-brand-blue h-4 w-4 rounded"
                    />
                    <div className="grow">
                      <div className="flex justify-between items-center text-xs font-bold text-slate-900 dark:text-white">
                        <span>Official WhatsApp API CRM</span>
                        <span className="text-brand-teal">+$149 / month</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Shared multi-agent team inbox, automated greeting scripts, templates.</p>
                    </div>
                  </label>

                  {/* ERP Integration checkbox */}
                  <label className="flex items-start space-x-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-850 hover:bg-slate-55 cursor-pointer transition-colors">
                    <input 
                      type="checkbox" 
                      checked={includeERP}
                      onChange={(e) => setIncludeERP(e.target.checked)}
                      className="mt-1 accent-brand-blue h-4 w-4 rounded"
                    />
                    <div className="grow">
                      <div className="flex justify-between items-center text-xs font-bold text-slate-900 dark:text-white">
                        <span>Enterprise ERP Ledger Core</span>
                        <span className="text-brand-teal">+$299 / month</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Unify inventory modules, shift payroll, and general ledger compliance audits.</p>
                    </div>
                  </label>

                </div>
              </div>

            </div>

            {/* Calculations Card (5 cols) */}
            <div className="lg:col-span-5 bg-brand-blue/5 text-slate-800 rounded-3xl p-8 border border-brand-blue/20 flex flex-col justify-between space-y-8 text-left shadow-sm">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-teal/10 px-2.5 py-1 rounded-full w-fit">
                  <Sparkles className="h-3 w-3" />
                  <span>Custom Quote Breakdown</span>
                </div>

                <div className="space-y-3.5 text-xs text-slate-650">
                  <div className="flex justify-between">
                    <span>Base Cost ({users} users)</span>
                    <span className="font-bold text-slate-950">${baseCost}</span>
                  </div>
                  {includeAI && (
                    <div className="flex justify-between">
                      <span>AI Voice Agent Module</span>
                      <span className="font-bold text-slate-950">+$199</span>
                    </div>
                  )}
                  {includeWhatsApp && (
                    <div className="flex justify-between">
                      <span>Official WhatsApp API CRM</span>
                      <span className="font-bold text-slate-950">+$149</span>
                    </div>
                  )}
                  {includeERP && (
                    <div className="flex justify-between">
                      <span>ERP Ledger Core</span>
                      <span className="font-bold text-slate-950">+$299</span>
                    </div>
                  )}
                </div>

                <div className="space-y-1 border-t border-slate-200 pt-6">
                  <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">Estimated Total Cost</span>
                  <p className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-blue">
                    ${totalCustomMonthly}
                  </p>
                  <span className="text-xs text-slate-500 font-bold block pt-1">
                    per month, billed annually
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-200">
                <div className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
                  <ShieldCheck className="h-4.5 w-4.5 text-brand-teal shrink-0" />
                  <span>Includes standard database storage and 24/7 SLA.</span>
                </div>

                <Link
                  to="/contact"
                  state={{ customQuote: totalCustomMonthly, usersCount: users }}
                  className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white py-4 rounded-xl font-bold shadow-lg shadow-brand-blue/15 flex items-center justify-center space-x-2 text-center text-sm transition-transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Request Scoping with This Quote</span>
                  <ArrowRight className="h-4.5 w-4.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Accordion FAQ */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-slate-900 dark:text-white">
              Pricing & Licensing Scopes
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Clear answers regarding license scopes, billing cycles, and setup agreements.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-850/50 transition-colors cursor-pointer"
                  >
                    <span className="font-display font-semibold text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-850">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};
export default Pricing;
