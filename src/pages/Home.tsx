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
  Package,
  Settings
} from 'lucide-react';
import { StatsCounter } from '../components/StatsCounter';
import { InteractiveWorkflow } from '../components/InteractiveWorkflow';
import SEO from '../components/SEO';

export const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currentProductIndex, setCurrentProductIndex] = useState<number>(0);

  const heroProducts = [
    {
      title: "Central Business System",
      category: "Our Software",
      icon: Database,
      color: "bg-blue-50 text-blue-600 border-blue-100",
      desc: "One system connecting your orders, inventory, and payroll.",
      specs: ["Linked Systems", "Inventory Tracking", "Simple Record Keeping"],
      visualType: "erp"
    },
    {
      title: "Automatic Task Sync",
      category: "Automations",
      icon: Cpu,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
      desc: "Connect your customer list directly to your business books.",
      specs: ["Automatic Updates", "Instant Sharing", "Zero Manual Typing"],
      visualType: "workflow"
    },
    {
      title: "System Connections",
      category: "App Sync",
      icon: Settings,
      color: "bg-indigo-50 text-indigo-600 border-indigo-100",
      desc: "Connectors to share information safely between different departments.",
      specs: ["Secure Connections", "Reliable Syncing", "Private Data Sharing"],
      visualType: "api"
    },
    {
      title: "Stock Tracking Engine",
      category: "Our Software",
      icon: Package,
      color: "bg-amber-50 text-amber-600 border-amber-100",
      desc: "Track materials and stock across all your locations in real time.",
      specs: ["Low-Stock Warnings", "Auto-Reordering", "Expiry Date Alerts"],
      visualType: "stock"
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex(prev => (prev + 1) % heroProducts.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const pillars = [
    {
      title: "Central Systems",
      desc: "Get rid of scattered spreadsheets and copying data by hand. We build simple, custom systems that keep your stock levels, sales, and accounts in sync automatically.",
      features: ["Live Stock Tracking", "Automatic Bookkeeping", "Custom Point-of-Sale", "Production Planning"],
      color: "border-blue-500/20 hover:border-blue-500",
      badge: "99.99% System Reliability"
    },
    {
      title: "Connecting Your Apps",
      desc: "Bridge your separate tools. We build secure links that automatically copy and share information between your different systems, saving your team hours.",
      features: ["Real-Time Record Sync", "Secure Connections", "Encrypted Data Sharing", "Multi-App Integrations"],
      color: "border-teal-500/20 hover:border-teal-500",
      badge: "Automatic Sync Core"
    },
    {
      title: "Automatic Daily Tasks",
      desc: "Link your everyday business tools (like email, messaging, and customer lists) to run tasks automatically. We build triggers that update records and alert teams instantly, without any manual typing.",
      features: ["Automated Tasks Engine", "Simple App Connections", "Automatic Sync Loops", "Custom Reporting Rules"],
      color: "border-emerald-500/20 hover:border-emerald-500",
      badge: "Workflow Automations"
    },
    {
      title: "Websites that Grow",
      desc: "Attract more customers online. We design and build fast, clean websites and landing pages optimized to help people find you and book calls with your team.",
      features: ["SEO and Web Visibility", "Fast-Loading Pages", "Conversion Tracking", "Lead Generation Funnels"],
      color: "border-indigo-500/20 hover:border-indigo-500",
      badge: "Higher Conversion Rates"
    },
    {
      title: "Planning and Review",
      desc: "Set up your plans before you build. We sit down with your team to review your processes, find bottlenecks, and write a clear roadmap for your software.",
      features: ["Process Mapping", "Bottleneck Auditing", "Clear System Roadmap", "Phased Delivery Scoping"],
      color: "border-orange-500/20 hover:border-orange-500",
      badge: "Phased System Scoping"
    }
  ];

  const whyUs = [
    {
      title: "Safe and Secure",
      desc: "Secure login rules, access controls, and encryption safeguard your business files and customer records.",
      icon: Shield
    },
    {
      title: "Smart Automations",
      desc: "We build helpful automation checks directly into your setup to flag errors before they happen.",
      icon: Cpu
    },
    {
      title: "Built to Grow",
      desc: "Our software grows alongside your business. Add features like inventory tracking, payroll support, or chat messaging when you're ready.",
      icon: Activity
    },
    {
      title: "Ongoing Support",
      desc: "Get peace of mind with guaranteed support response times and direct access to our technical team.",
      icon: Users
    }
  ];

  const testimonials = [
    {
      quote: "ELVTERA consolidated our production schedule, inventory, and sales into a single custom system. We reduced admin time by 60% in just four months.",
      author: "Marcus Chen",
      role: "VP of Operations",
      company: "Apex Textile Group",
      rating: 5,
      avatar: "MC"
    },
    {
      quote: "The automated lead setup processed 12,000 inquiries in under a week, updating over 800 contacts directly inside our team's system. It felt like we grew overnight.",
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
      a: "We develop completely customized systems. While we leverage standard libraries and secure cloud components for efficiency, your business processes, data flows, and layouts are engineered specifically for your brand."
    },
    {
      q: "Can your sync setups and WhatsApp chat integrate with my current tools?",
      a: "Yes. We build custom connectors for standard business apps like Zoho, Salesforce, HubSpot, and custom tools. All leads, chat histories, call notes, and booked appointments sync back into your central system automatically."
    },
    {
      q: "What industries do you specialize in?",
      a: "We have proven deployment frameworks across Manufacturing, Textiles, Healthcare/Clinics, Construction, Retail and POS chains, and Logistics systems. Each framework features pre-modeled modules customized for that industry's compliance and operational requirements."
    },
    {
      q: "How does the pricing work for custom enterprise developments?",
      a: "We provide clear, milestones-based pricing after our initial consultation and scoping process. We also offer subscription-based options for our ready-to-deploy products (like Sync pipelines, WhatsApp CRM, and POS) to allow fast deployments with lower initial overheads."
    }
  ];

  return (
    <div className="w-full relative overflow-hidden bg-brand-bg-light text-slate-700">
      <SEO 
        title="Transform Your Operations" 
        description="Transform your business with intelligent software, custom ERP/CRM developments, database integrations, and workflow automations by ELVTERA." 
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:py-20 bg-white border-b border-slate-200/50">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side text */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <div className="flex items-center space-x-2 text-brand-blue text-xs font-bold uppercase tracking-wider w-fit">
                <Sparkles className="h-4 w-4" />
                <span>Enterprise Operations • Built for Scale</span>
              </div>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6.5xl text-slate-900 leading-[1.1] tracking-tight">
                Run your whole business from one place.
              </h1>
              <p className="text-base sm:text-lg text-slate-655 max-w-xl leading-relaxed font-medium">
                ELVTERA builds custom central systems that connect your sales, stock, accounts, and tasks. We set up your software around how you actually work, and stay on to support you.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/contact"
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white px-7 py-4 rounded-xl font-bold shadow-lg shadow-brand-blue/25 hover:shadow-xl transition-all duration-300 text-center flex items-center justify-center space-x-2 text-sm whitespace-nowrap"
                >
                  <span>Book a free call</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-7 py-4 rounded-xl font-bold transition-colors text-center text-sm shadow-sm whitespace-nowrap"
                >
                  See how it works
                </Link>
              </div>
            </div>

            {/* Right Side: Simple Product Showcase Animation */}
            <div className="lg:col-span-6 relative w-full min-h-[480px] flex items-center justify-center">
              <div className="absolute inset-0 bg-brand-blue/5 rounded-3xl blur-2xl"></div>
              
              <div className="absolute inset-0 bg-white border border-slate-200 rounded-3xl shadow-xl p-6 flex flex-col justify-between overflow-hidden relative">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 shrink-0">
                  <span className="text-xs font-bold text-slate-450 uppercase tracking-wider">Product Showcase</span>
                  <div className="flex space-x-1">
                    {heroProducts.map((_, pIdx) => (
                      <button
                        key={pIdx}
                        onClick={() => setCurrentProductIndex(pIdx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          currentProductIndex === pIdx ? 'w-4 bg-brand-blue' : 'w-1.5 bg-slate-200 hover:bg-slate-350'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Animated Showcase Card Container */}
                <div className="grow flex flex-col justify-center py-4 relative min-h-[300px]">
                  <div className="w-full h-full flex flex-col justify-between space-y-4 select-none">
                    
                    {/* Active Product Header Info */}
                    <div className="flex items-start space-x-3.5 text-left">
                      {(() => {
                        const activeProduct = heroProducts[currentProductIndex];
                        const IconComponent = activeProduct.icon;
                        return (
                          <>
                            <div className={`p-3 rounded-2xl ${activeProduct.color} border shrink-0`}>
                              <IconComponent className="h-6 w-6" />
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <h3 className="font-display font-extrabold text-lg text-slate-900 leading-tight">
                                  {activeProduct.title}
                                </h3>
                                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md border border-slate-200/50 whitespace-nowrap">
                                  {activeProduct.category}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                {activeProduct.desc}
                              </p>
                            </div>
                          </>
                        );
                      })()}
                    </div>

                    {/* Active Product Custom Visual Graphic Block */}
                    <div className="grow min-h-[140px] flex flex-col justify-center relative">
                      {(() => {
                        const activeProduct = heroProducts[currentProductIndex];
                        if (activeProduct.visualType === 'erp') {
                          return (
                            <div className="bg-slate-900 text-slate-350 p-4 rounded-2xl font-mono text-xs text-left space-y-1.5 border border-slate-800 shadow-inner w-full">
                              <div className="flex justify-between border-b border-slate-800 pb-1.5 mb-1.5 font-bold text-[9px] text-brand-teal uppercase tracking-wider">
                                <span>Central System Sync</span>
                                <span className="animate-pulse">Active Sync</span>
                              </div>
                              <div className="space-y-1">
                                <div><span className="text-slate-500">Core System:</span> Central File Sync</div>
                                <div><span className="text-slate-500">Active Pools:</span> 16 Active Threads</div>
                                <div><span className="text-slate-500">Sync Status:</span> Files updated</div>
                                <div className="flex items-center space-x-1.5 text-brand-teal text-[10px] font-bold animate-pulse pt-1">
                                  <span className="h-1.5 w-1.5 rounded-full bg-brand-teal"></span>
                                  <span>Syncing systems/accounts/...</span>
                                </div>
                              </div>
                            </div>
                          );
                        } else if (activeProduct.visualType === 'workflow') {
                          return (
                            <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4.5 w-full flex flex-col justify-center relative overflow-hidden">
                              <div className="flex items-center justify-between mb-3.5">
                                <span className="text-[10px] font-extrabold text-slate-450 uppercase tracking-wider">Event Trigger Sync</span>
                                <span className="text-[10px] font-extrabold text-brand-blue flex items-center space-x-1 bg-brand-blue/10 px-2 py-0.5 rounded-md">
                                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse"></span>
                                  <span>Pipeline Sync</span>
                                </span>
                              </div>
                              <div className="flex items-center justify-between px-2 pt-1">
                                <div className="bg-white border border-slate-200 p-2.5 rounded-xl text-center shadow-xs w-20">
                                  <span className="text-[10px] font-bold text-slate-700 block">Customer List</span>
                                </div>
                                <div className="grow relative flex items-center justify-center">
                                  <div className="h-0.5 bg-slate-200 w-full absolute top-1/2 -translate-y-1/2"></div>
                                  <div className="h-2 w-2 rounded-full bg-brand-blue absolute animate-ping left-1/4"></div>
                                  <div className="h-2 w-2 rounded-full bg-brand-blue absolute animate-ping left-3/4"></div>
                                </div>
                                <div className="bg-white border border-slate-200 p-2.5 rounded-xl text-center shadow-xs w-20">
                                  <span className="text-[10px] font-bold text-slate-700 block">Main System</span>
                                </div>
                              </div>
                            </div>
                          );
                        } else if (activeProduct.visualType === 'api') {
                          return (
                            <div className="bg-slate-955 text-slate-350 p-4 rounded-2xl font-mono text-xs text-left space-y-2 border border-slate-800 shadow-inner w-full">
                              <div className="flex items-center justify-between text-[9px] text-slate-500 font-bold border-b border-slate-900 pb-1.5 mb-1 shrink-0">
                                <span>System Connection Router</span>
                                <span className="text-brand-blue flex items-center space-x-1.5">
                                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse"></span>
                                  <span>LISTENING</span>
                                </span>
                              </div>
                              <div className="space-y-1 text-slate-400">
                                <div className="flex items-center space-x-1.5">
                                  <span className="text-slate-600">[10:14:02]</span>
                                  <span className="text-brand-blue font-bold">API:</span>
                                  <span>200 OK (Lead Received)</span>
                                </div>
                                <div className="flex items-center space-x-1.5">
                                  <span className="text-slate-600">[10:14:05]</span>
                                  <span className="text-amber-500 font-bold">WH:</span>
                                  <span>Dispatched (Sync Loop)</span>
                                </div>
                                <div className="flex items-center space-x-1.5">
                                  <span className="text-slate-600">[10:14:08]</span>
                                  <span className="text-brand-teal font-bold">Sync:</span>
                                  <span>Accounts and Files Synced</span>
                                </div>
                              </div>
                            </div>
                          );
                        } else {
                          return (
                            <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4.5 w-full flex flex-col justify-center space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] font-extrabold text-slate-450 uppercase tracking-wider">Inventory Levels</span>
                                <span className="text-xs font-bold text-brand-teal">84% Capacity</span>
                              </div>
                              <div className="space-y-2">
                                <div className="space-y-1">
                                  <div className="flex justify-between text-[10px] font-bold text-slate-600">
                                    <span>Yarn Materials</span>
                                    <span>92%</span>
                                  </div>
                                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                                    <div className="bg-brand-blue h-full rounded-full" style={{ width: '92%' }}></div>
                                  </div>
                                </div>
                                <div className="space-y-1">
                                  <div className="flex justify-between text-[10px] font-bold text-slate-600">
                                    <span>Packaging Boxes</span>
                                    <span>34%</span>
                                  </div>
                                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                                    <div className="bg-amber-500 h-full rounded-full animate-pulse" style={{ width: '34%' }}></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      })()}
                    </div>

                    {/* Active Product Bottom Specifications */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex flex-wrap gap-2 text-left">
                        {heroProducts[currentProductIndex].specs.map((spec, sIdx) => (
                          <span 
                            key={sIdx} 
                            className="inline-flex items-center space-x-1 text-[10px] font-bold text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200/50"
                          >
                            <span className="h-1 w-1 rounded-full bg-brand-teal"></span>
                            <span>{spec}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-455 font-semibold mt-auto shrink-0">
                  <Link 
                    to="/products"
                    className="text-brand-blue hover:text-brand-blue/80 inline-flex items-center space-x-1 font-bold"
                  >
                    <span>Explore our systems</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <span className="text-xs">Uptime &gt; 99.99%</span>
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
            <span className="text-brand-blue text-xs font-bold uppercase tracking-wider block mb-3.5 text-center">
              Our Capabilities
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900">
              We bring it all together, once.
            </h2>
            <p className="text-base text-slate-655 font-medium">
              ELVTERA designs one connected system for your business. Orders, inventory, invoices, customers, and reports all live in the same place and stay up to date on their own.
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
                    <span className="text-xs font-extrabold uppercase tracking-wider text-brand-blue">
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
                  Need a custom system?
                </h3>
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-medium">
                  Let's review your team's offline routines, audit your spreadsheet setups, and map out a simple software blueprint.
                </p>
              </div>

              <Link
                to="/contact"
                className="bg-white text-slate-900 px-6 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-colors flex items-center justify-center space-x-2 text-sm mt-8 shadow-sm"
              >
                <span>Request a free blueprint</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>      {/* System Integration Workflow Section */}
      <section className="py-20 bg-white border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-brand-blue text-xs font-bold uppercase tracking-wider block mb-3.5 text-center">
              Deployment Lifecycle
            </span>
            <h2 className="font-display font-bold text-3xl text-slate-900">
              Too many tools, too much manual work?
            </h2>
            <p className="text-sm text-slate-550 max-w-lg mx-auto">
              Most growing businesses end up running on a messy mix of spreadsheets, separate apps, and a lot of typing things in by hand.
            </p>
          </div>
          <InteractiveWorkflow />
        </div>
      </section>

      {/* NEW CONTAINER 1: System Integration Map (Rich Human-Designed Visual) */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-brand-blue text-xs font-bold uppercase tracking-wider block mb-3.5 text-center">
              System Architecture
            </span>
            <h2 className="font-display font-bold text-3xl text-slate-900">
              A simple way to connect your work
            </h2>
            <p className="text-sm text-slate-650">
              How ELVTERA connects your chat channels, automation tasks, and main office systems safely.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 text-left shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Side: Steps (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <h3 className="font-display font-bold text-xl text-slate-950">How it flows</h3>
                
                <div className="space-y-4">
                  {[
                    { title: "Customer Action Logs", desc: "WhatsApp questions, booked appointments, or sales entries log immediately." },
                    { title: "Automatic Checks", desc: "System scripts check and verify details to avoid typos." },
                    { title: "Records Sync", desc: "Encrypted connections route record information instantly." },
                    { title: "Books Synced", desc: "Your sales and inventory records update automatically, keeping books current." }
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
                    <span className="text-xs font-bold text-slate-450 uppercase block">Sources</span>
                    
                    <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-xs">
                      <MessageSquare className="h-4.5 w-4.5 text-brand-blue mx-auto mb-1.5" />
                      <span className="text-xs font-bold text-slate-800 block">WhatsApp API</span>
                    </div>
                    <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-xs">
                      <Users className="h-4.5 w-4.5 text-brand-blue mx-auto mb-1.5" />
                      <span className="text-xs font-bold text-slate-800 block">POS Systems</span>
                    </div>
                  </div>

                  {/* Column 2: Pipelines */}
                  <div className="space-y-3">
                    <div className="h-8 flex items-center justify-center">
                      <span className="text-xs font-bold text-brand-teal animate-pulse">Syncing...</span>
                    </div>
                    
                    <div className="bg-brand-blue text-white p-4.5 rounded-xl shadow-md border border-brand-blue">
                      <Cpu className="h-6 w-6 mx-auto mb-1.5 text-white animate-spin" style={{ animationDuration: '6s' }} />
                      <span className="text-xs font-extrabold uppercase tracking-wider block">Elvtera Core</span>
                    </div>
                  </div>

                  {/* Column 3: Records */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-slate-450 uppercase block">Records</span>
                    
                    <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-xs">
                      <Database className="h-4.5 w-4.5 text-brand-teal mx-auto mb-1.5" />
                      <span className="text-xs font-bold text-slate-800 block">Central Hub</span>
                    </div>
                    <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-xs">
                      <CheckCircle className="h-4.5 w-4.5 text-brand-teal mx-auto mb-1.5" />
                      <span className="text-xs font-bold text-slate-800 block">Your Accounts</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>      {/* NEW CONTAINER 2: Performance Audit Logs (Proof Section) */}
      <section className="py-16 bg-white border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Side: Context (5 cols) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">What you actually get out of it</span>
              <h2 className="font-display font-bold text-3xl text-slate-900 leading-tight">
                Time saved and fewer mistakes
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                We check in after every launch to measure the real impact. Here are the average results reported by our clients.
              </p>
              <div className="p-4 bg-brand-blue/5 border border-brand-blue/15 rounded-2xl flex items-start space-x-2.5">
                <CheckCircle2 className="h-5 w-5 text-brand-teal shrink-0" />
                <p className="text-xs text-slate-550 font-semibold leading-normal">
                  All metrics are checked and verified by client operational heads during phased system sign-offs.
                </p>
              </div>
            </div>

            {/* Right Side: Grid of 4 Audited Benchmarks (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-brand-blue block">Apex Textile Group</span>
                <h3 className="font-display font-extrabold text-3xl text-slate-955">60%</h3>
                <p className="text-sm text-slate-500 font-semibold leading-relaxed">
                  Time saved on weekly admin work by connecting stock and orders.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-brand-blue block">MedTech Distribution</span>
                <h3 className="font-display font-extrabold text-3xl text-slate-955">42%</h3>
                <p className="text-sm text-slate-500 font-semibold leading-relaxed">
                  Increase in booked sales calls by automating your inbound leads.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-brand-blue block">Always Online</span>
                <h3 className="font-display font-extrabold text-3xl text-slate-955">99.99%</h3>
                <p className="text-sm text-slate-500 font-semibold leading-relaxed">
                  System reliability and uptime even during your busiest sales days.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-brand-blue block">Faster Bookkeeping</span>
                <h3 className="font-display font-extrabold text-3xl text-slate-955">85%</h3>
                <p className="text-sm text-slate-500 font-semibold leading-relaxed">
                  Fewer hours spent each month balancing accounts and spreadsheets.
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
              <span className="text-brand-blue text-xs font-bold uppercase tracking-wider block mb-3.5">
                Why Us
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
                Set up once. Supported for the long run.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                We get your software running correctly the first time, and then we stay on to support, update, and improve your setup as your business grows.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-1 rounded-full bg-brand-success/10 text-brand-success mt-0.5">
                    <CheckCircle className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-slate-900">Reliable Systems</h4>
                    <p className="text-sm text-slate-500">Fast page loads and secure record backups hosted on premium cloud systems.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-1 rounded-full bg-brand-success/10 text-brand-success mt-0.5">
                    <CheckCircle className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-slate-900">Dedicated Support</h4>
                    <p className="text-sm text-slate-500">Guaranteed support response times tailored to match how your team works.</p>
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
              See how business owners and operations teams save time using our systems.
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
              Common questions about how we build and support your business system.
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
            Let's see if we're a good fit
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed font-medium">
            Book a free, no-pressure call. We'll learn about your business and show you what a system built around you could look like.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue/90 text-white px-7 py-4 rounded-xl font-bold shadow-lg shadow-brand-blue/20 hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer text-sm"
            >
              <span>Book a free call</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-800 px-7 py-4 rounded-xl font-bold transition-all text-center border border-slate-300 cursor-pointer shadow-sm text-sm"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
export default Home;
