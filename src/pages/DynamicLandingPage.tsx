import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getLandingPageData } from '../data/seoLandingPages';
import type { LandingPageData } from '../data/seoLandingPages';
import { 
  Cpu, 
  Layers, 
  Briefcase, 
  ShieldCheck, 
  ChevronRight, 
  ChevronDown, 
  ArrowRight, 
  Activity, 
  FileText, 
  CheckCircle2, 
  Zap,
  Globe,
  AlertTriangle,
  Server
} from 'lucide-react';

export const DynamicLandingPage: React.FC = () => {
  const { category, slug } = useParams<{ category: string; slug?: string }>();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Construct lookup path
  const lookupPath = slug ? `${category}/${slug}` : `${category}`;
  const data: LandingPageData | null = getLandingPageData(lookupPath);

  // Inbound redirect state for placeholder form
  const [formOpened, setFormOpened] = useState(false);

  // Effect to dynamically inject Page Title, Meta tags, and Schema.org JSON-LD scripts
  useEffect(() => {
    if (!data) return;

    // 1. Update Title and Meta Tags
    document.title = data.seoTitle;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', data.metaDescription);

    // Canonical link tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const currentURL = `https://elvtera.com/#/${data.slug}`;
    canonical.setAttribute('href', currentURL);

    // Inject Open Graph tags
    const ogTags = [
      { property: 'og:title', content: data.seoTitle },
      { property: 'og:description', content: data.metaDescription },
      { property: 'og:url', content: currentURL },
      { property: 'og:type', content: 'website' }
    ];

    ogTags.forEach(tag => {
      let element = document.querySelector(`meta[property="${tag.property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', tag.property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', tag.content);
    });

    // 2. Generate JSON-LD Schema Scripts
    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": data.faq.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://elvtera.com/#/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": data.parentName,
          "item": `https://elvtera.com/#/${data.parentPath}`
        },
        ...(slug ? [{
          "@type": "ListItem",
          "position": 3,
          "name": data.heroTitle,
          "item": `https://elvtera.com/#/${data.slug}`
        }] : [])
      ]
    };

    const faqScriptId = 'faq-jsonld-schema';
    const breadcrumbScriptId = 'breadcrumb-jsonld-schema';

    // Remove existing scripts if present
    document.getElementById(faqScriptId)?.remove();
    document.getElementById(breadcrumbScriptId)?.remove();

    // Create and append FAQ Script
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.id = faqScriptId;
    faqScript.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    // Create and append Breadcrumb Script
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.id = breadcrumbScriptId;
    breadcrumbScript.innerHTML = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    return () => {
      document.getElementById(faqScriptId)?.remove();
      document.getElementById(breadcrumbScriptId)?.remove();
    };

  }, [data, slug]);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-bg-light p-8 font-sans">
        <Activity className="h-16 w-16 text-brand-blue animate-spin mb-4" />
        <h1 className="text-xl font-bold text-slate-800">SEO Route Mapping Verification...</h1>
        <p className="text-sm text-slate-550 mt-2 font-medium">If the page does not redirect, verify slug registry listing.</p>
        <Link to="/" className="mt-6 text-brand-blue font-bold flex items-center space-x-1.5 hover:underline">
          <span>Return Home</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  // Render Custom visual block depending on category to make pages stand out
  const renderCategoryVisual = () => {
    const lowerSlug = slug ? slug.toLowerCase() : "";
    const activeCategory = category || "";

    if (activeCategory === "business-software" || activeCategory === "business-automation" || activeCategory === "industries") {
      let industryName = "Manufacturing / Textiles";
      let manualTasks = [
        "Inventory counted by hand; warehouse stock lists mismatch physical counts by up to 10 days.",
        "Bills of Materials (BOM) managed on spreadsheets; raw materials price changes blow procurement budgets.",
        "Attendance logs written on card sheets; payroll calculated manually resulting in labor bill errors."
      ];
      let automatedTiers = [
        {
          tier: "1. Intake Devices",
          elements: ["Barcode Scanners", "Yarn Weight Scales", "RFID Gates"],
          desc: "Physical scanners read batch barcodes and update raw material weight inputs automatically."
        },
        {
          tier: "2. Validation Rules",
          elements: ["BOM Capacity Check", "API Webhook middleware", "Duplicate Filter"],
          desc: "Ingestion servers verify raw cotton quantities and check pending purchase orders."
        },
        {
          tier: "3. PostgreSQL Tables",
          elements: ["WIP Loom Capacity Table", "Supplier Purchase Ledger", "Inventory Store Logs"],
          desc: "Relational database logs WIP capacities and updates yarn balances."
        },
        {
          tier: "4. Output & Downstream",
          elements: ["Automatic Reorder Scripts", "Double-Entry Ledger sync"],
          desc: "System auto-generates supplier POs and registers accounting journal entries."
        }
      ];

      if (lowerSlug.includes("healthcare") || lowerSlug.includes("hospital") || lowerSlug.includes("clinic")) {
        industryName = "Healthcare Clinics";
        manualTasks = [
          "Patient queues managed on paper slips; desks get congested causing long waiting room queues.",
          "Insurance checks run via manual phone updates; clinic payments get delayed by up to 20 days.",
          "Medical reports compiled on separate offline computers, risking data security leaks."
        ];
        automatedTiers = [
          {
            tier: "1. Intake Channels",
            elements: ["WhatsApp Booking API", "Clinic Check-in Tablet", "Doctor Shift Logs"],
            desc: "WhatsApp screeners log patient symptoms and update check-in schedules."
          },
          {
            tier: "2. Middleware Rules",
            elements: ["HIPAA Verification API", "Queue Calendar checks", "JWT Auth adapter"],
            desc: "Servers verify security keys and check calendar queues for availability."
          },
          {
            tier: "3. Encrypted Tables",
            elements: ["Patient EHR Records", "Pharmacy Inventory Table", "Billing Ledger Logs"],
            desc: "Encrypted patient records write to database; pharmacy stores track tools inventory."
          },
          {
            tier: "4. Outputs & API",
            elements: ["Automatic Insurance Claims", "Prescription PDF email"],
            desc: "System compiles claim codes and dispatches prescription logs."
          }
        ];
      } else if (lowerSlug.includes("construction") || lowerSlug.includes("contractor") || lowerSlug.includes("real-estate")) {
        industryName = "Construction & Contractor Sites";
        manualTasks = [
          "Field managers write material receipts in diaries; cost overruns logged weeks too late.",
          "Contractor timesheets checked on paper calendars; subcontractor billings trigger disputes.",
          "Progress invoices compiled manually, draining site manager cash flow."
        ];
        automatedTiers = [
          {
            tier: "1. Field Logging",
            elements: ["Onsite Mobile Logs", "Biometric ID Scans", "Receipt OCR Camera"],
            desc: "Contractors photograph raw receipts and clock shifts on mobile devices."
          },
          {
            tier: "2. Approvals Middleware",
            elements: ["PO SOP Approval Routes", "Budget Overrun Script", "OCR Text Extraction"],
            desc: "Middlewares scan raw receipts, verify budget limits, and route approvals."
          },
          {
            tier: "3. Database Ledger",
            elements: ["Job Cost Tables", "Rental Tracker Table", "Payables Subledger"],
            desc: "System registers project logs and logs equipment rentals."
          },
          {
            tier: "4. Output / Invoicing",
            elements: ["Progressive payment dispatches", "Cashflow projections map"],
            desc: "System generates progressive billings and updates cash flow accounts."
          }
        ];
      } else if (lowerSlug.includes("retail") || lowerSlug.includes("pos") || lowerSlug.includes("shop")) {
        industryName = "Retail POS & Chains";
        manualTasks = [
          "Peak hour queues back up; cashiers verify product prices manually.",
          "Multi-location stock counts run on weekly logs; items sell out without reorder alerts.",
          "Cashiers issue manual discounts, leaking retail margins at checkout registers."
        ];
        automatedTiers = [
          {
            tier: "1. Register Checkout",
            elements: ["POS Barcode Scanner", "Payment card swipe", "Loyalty Rewards scan"],
            desc: "Cashier registers scan item bar codes and read terminal payment logs."
          },
          {
            tier: "2. Middleware Check",
            elements: ["Dynamic Pricing Engine", "Stripe API Webhook", "Discount validation"],
            desc: "Servers verify current price campaigns and authenticate card tokens."
          },
          {
            tier: "3. Inventory Tables",
            elements: ["Store Stock Ledger", "Sales Journal Table", "Tax Accruals database"],
            desc: "System deducts store stock, logs sales items, and updates tax sheets."
          },
          {
            tier: "4. Output & Logs",
            elements: ["WhatsApp Digital Receipt", "Stock reorder warning"],
            desc: "Sends receipt via WhatsApp and alerts warehouse of low inventory levels."
          }
        ];
      } else if (lowerSlug.includes("logistics") || lowerSlug.includes("transport") || lowerSlug.includes("warehouse")) {
        industryName = "Logistics & Distribution";
        manualTasks = [
          "Manifest logs lost in transit; driver route assignments run via manual phone calls.",
          "Weighbridge logs entered on paper sheets; cargo weights mismatch invoice logs.",
          "Dispatch support operators manually answer customers looking for shipment alerts."
        ];
        automatedTiers = [
          {
            tier: "1. Fleet Tracking",
            elements: ["Driver Mobile GPS", "Weighbridge Weight Sensors", "Cargo Barcode tags"],
            desc: "Truck drivers transmit coordinates; scales register cargo weights automatically."
          },
          {
            tier: "2. Dispatch Middleware",
            elements: ["Route Optimizer Script", "Manifest PDF Generator", "SLA Speed Calculator"],
            desc: "System maps shortest delivery paths and compiles cargo manifests."
          },
          {
            tier: "3. Database Ledgers",
            elements: ["Fulfillment Manifest Table", "Fuel Expense Database", "Driver Logs Table"],
            desc: "System logs manifests, audits fuel uses, and records driver logs."
          },
          {
            tier: "4. Output & API",
            elements: ["Proof of Delivery PDF mail", "Invoicing Dispatch scripts"],
            desc: "Triggers client delivery note emails and updates sales accounts ledger."
          }
        ];
      }

      return (
        <section className="py-16 bg-slate-50 border-b border-slate-200/50 text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-brand-blue text-xs font-bold uppercase tracking-wider bg-brand-blue/10 px-3.5 py-1.5 rounded-full w-fit mx-auto block mb-3.5">
                {industryName} Architecture
              </span>
              <h3 className="font-display font-bold text-2.5xl text-slate-900">
                Increasing Legacy Efficiency: Outdated Tasks vs. Automated System
              </h3>
              <p className="text-xs sm:text-sm text-slate-550 max-w-lg mx-auto">
                How we decommission outdated manual steps and deploy a resilient, multi-tiered systems architecture.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              
              {/* Left Column: Outdated Legacy Workflow (Pain Points) */}
              <div className="lg:col-span-4 bg-red-50/40 border border-red-200/60 rounded-3xl p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-red-500 font-bold text-xs">
                    <AlertTriangle className="h-5 w-5 shrink-0" />
                    <span>OUTDATED LEGACY TASKS (EFFICIENCY LEAKAGE)</span>
                  </div>
                  
                  <div className="space-y-4 pt-2">
                    {manualTasks.map((task, tIdx) => (
                      <div key={tIdx} className="flex items-start space-x-2 text-xs font-semibold text-slate-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500 shrink-0 mt-1.5"></span>
                        <p className="leading-relaxed">{task}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-red-100 mt-6 text-xs text-red-700/80 font-bold">
                  ⚠️ Results in manual reconciliation bottlenecks, error rates, and margin leaks.
                </div>
              </div>

              {/* Right Column: Complete Multi-Tier Systems Blueprint */}
              <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-brand-blue font-bold text-xs uppercase">
                    <Server className="h-5 w-5 text-brand-blue shrink-0" />
                    <span>ELVTERA Automated Systems Blueprint (Multi-Tier Flows)</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
                    {automatedTiers.map((tier, trIdx) => (
                      <div key={trIdx} className="bg-slate-50 border border-slate-200/60 p-4 rounded-xl space-y-2 flex flex-col justify-between">
                        <div className="space-y-1.5">
                          <span className="text-[9px] font-extrabold uppercase tracking-wider text-brand-blue">{tier.tier}</span>
                          <h4 className="font-bold text-xs sm:text-sm text-slate-900">{tier.desc}</h4>
                        </div>
                        <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-200/50 mt-2">
                          {tier.elements.map((elem, elIdx) => (
                            <span key={elIdx} className="text-[10px] bg-white border border-slate-200 text-slate-750 font-bold px-2 py-0.5 rounded-md">
                              {elem}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
      );
    }

    if (activeCategory === "ai") {
      return (
        <section className="py-16 bg-slate-50 border-b border-slate-200/50 text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-brand-blue text-xs font-bold uppercase tracking-wider bg-brand-blue/10 px-3.5 py-1.5 rounded-full w-fit mx-auto block mb-3.5">
                AI Workflows & Automations
              </span>
              <h3 className="font-display font-bold text-2xl text-slate-900">
                End-to-End Autonomous Systems Architecture
              </h3>
              <p className="text-xs sm:text-sm text-slate-550 max-w-lg mx-auto">
                AI Solutions are not limited to call scheduling. We automate entire operational workflows, file audits, and database synchronizations.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-5xl mx-auto text-left shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                
                {/* 1. Input Tier */}
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex flex-col justify-between h-56">
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">1. Data & Communication Tier</span>
                    <h4 className="font-bold text-sm text-slate-900">Ingest Multi-Channel Stream</h4>
                    <p className="text-xs text-slate-500 leading-normal font-semibold">
                      Captures Twilio voice streams, Meta WhatsApp chats, raw PDF purchase invoices, and biometric logs.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-200/50">
                    <span className="text-[9px] bg-white border border-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded">Voice API</span>
                    <span className="text-[9px] bg-white border border-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded">PDF OCR</span>
                  </div>
                </div>

                {/* 2. Automation Middle Tier */}
                <div className="bg-brand-blue text-white p-5 rounded-2xl shadow-md border border-brand-blue flex flex-col justify-between h-56">
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-200">2. Processing & Rules Tier</span>
                    <h4 className="font-bold text-sm">LLM Orchestration & RAG</h4>
                    <p className="text-xs text-blue-100 leading-normal font-semibold">
                      Analyzes text context using private vector indexes, applies SOP workflow check rules, and routes logic commands.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1 pt-2 border-t border-blue-900">
                    <span className="text-[9px] bg-blue-950/60 text-white font-bold px-2 py-0.5 rounded">Vector DB</span>
                    <span className="text-[9px] bg-blue-950/60 text-white font-bold px-2 py-0.5 rounded">Function Calls</span>
                  </div>
                </div>

                {/* 3. Action Tier */}
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex flex-col justify-between h-56">
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">3. Action & Ledger Tier</span>
                    <h4 className="font-bold text-sm text-slate-900">Database Sync & Outputs</h4>
                    <p className="text-xs text-slate-500 leading-normal font-semibold">
                      Deducts inventory counts, dispatches WhatsApp template status updates, issues calendar bookings, and updates accounting sheets.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-200/50">
                    <span className="text-[9px] bg-white border border-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded">PostgreSQL</span>
                    <span className="text-[9px] bg-white border border-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded">Auto Reorder</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      );
    }

    if (activeCategory === "automations") {
      return (
        <section className="py-16 bg-slate-50 border-b border-slate-200/50 text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-brand-blue text-xs font-bold uppercase tracking-wider bg-brand-blue/10 px-3.5 py-1.5 rounded-full w-fit mx-auto block mb-3.5">
                B2C Interaction Simulator
              </span>
              <h3 className="font-display font-bold text-2.5xl text-slate-900">
                Meta Cloud API Chat Simulator
              </h3>
              <p className="text-xs sm:text-sm text-slate-550 max-w-lg mx-auto">
                Example conversation of an Elvtera automated workflow routing lead inquiries.
              </p>
            </div>

            <div className="max-w-md mx-auto bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md">
              {/* Smartphone Top Bar */}
              <div className="bg-brand-blue text-white px-5 py-3.5 flex items-center justify-between">
                <span className="font-bold text-sm">ELVTERA CRM Bot</span>
                <span className="text-[10px] bg-brand-teal text-white font-extrabold px-2 py-0.5 rounded-full animate-pulse">Online</span>
              </div>

              {/* Chat Thread */}
              <div className="p-5 space-y-4 bg-slate-50 min-h-[220px] text-xs font-semibold text-left">
                <div className="bg-white border border-slate-200 p-3 rounded-2xl max-w-[80%] rounded-tl-none shadow-xs">
                  <p className="leading-relaxed">Hi, do you have cotton dye batch #402 in stock?</p>
                </div>
                <div className="bg-brand-blue text-white p-3 rounded-2xl max-w-[80%] ml-auto rounded-tr-none shadow-xs">
                  <p className="leading-relaxed">Checking batch inventory... Yes! Batch #402 has 4,500 meters available at warehouse 2. Would you like to schedule a dispatch?</p>
                </div>
                <div className="bg-white border border-slate-200 p-3 rounded-2xl max-w-[80%] rounded-tl-none shadow-xs">
                  <p className="leading-relaxed">Yes please, book it.</p>
                </div>
                <div className="bg-brand-blue text-white p-3 rounded-2xl max-w-[80%] ml-auto rounded-tr-none shadow-xs">
                  <p className="leading-relaxed">Dispatch ticket #8893 generated in ERP. An invoice has been emailed. Calendar link: cal.com/elvtera.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    if (activeCategory === "digital-marketing") {
      return (
        <section className="py-16 bg-slate-50 border-b border-slate-200/50 text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-brand-blue text-xs font-bold uppercase tracking-wider bg-brand-blue/10 px-3.5 py-1.5 rounded-full w-fit mx-auto block mb-3.5">
                Growth Dashboard
              </span>
              <h3 className="font-display font-bold text-2.5xl text-slate-900">
                SEO Core Web Vitals & ROAS Yields
              </h3>
              <p className="text-xs sm:text-sm text-slate-550 max-w-lg mx-auto">
                How programmatic content architectures and tracking scripts boost web performance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
              <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Core Vitals Speed</span>
                <p className="font-display font-extrabold text-3xl text-slate-950 mt-1">0.4s</p>
                <div className="h-1.5 w-full bg-slate-100 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-brand-teal" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
                <span className="text-[10px] font-bold text-slate-400 uppercase">SEO Indexing Score</span>
                <p className="font-display font-extrabold text-3xl text-slate-950 mt-1">98%</p>
                <div className="h-1.5 w-full bg-slate-100 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-brand-blue" style={{ width: '98%' }}></div>
                </div>
              </div>
              <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Average Campaign ROAS</span>
                <p className="font-display font-extrabold text-3xl text-slate-950 mt-1">4.2x</p>
                <div className="h-1.5 w-full bg-slate-100 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-brand-blue" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    if (activeCategory === "consulting") {
      return (
        <section className="py-16 bg-slate-50 border-b border-slate-200/50 text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-brand-blue text-xs font-bold uppercase tracking-wider bg-brand-blue/10 px-3.5 py-1.5 rounded-full w-fit mx-auto block mb-3.5">
                Operational Scoping
              </span>
              <h3 className="font-display font-bold text-2.5xl text-slate-900">
                5-Step Systems Auditing Timeline
              </h3>
              <p className="text-xs sm:text-sm text-slate-550 max-w-lg mx-auto">
                Our consultancy roadmap for mapping offline databases and delivering custom ERP architectures.
              </p>
            </div>

            <div className="max-w-3xl mx-auto relative border-l border-slate-200 pl-6 space-y-6 text-left">
              {[
                { phase: "Phase 1: Workshop Scoping", desc: "Map team databases, folder registers, and manual file paths." },
                { phase: "Phase 2: SOP Bottleneck Audits", desc: "Analyze data handoff points and inventory count logs." },
                { phase: "Phase 3: Vendor RFP Evaluation", desc: "Audit candidate platforms and licensing costs parameters." },
                { phase: "Phase 4: Architecture Blueprints", desc: "Deliver database schema definitions and API wrappers maps." },
                { phase: "Phase 5: SLA Deployment Audit", desc: "Ensure final installations match transaction speed limits." }
              ].map((timeline, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 bg-brand-blue border-2 border-white rounded-full"></div>
                  <h4 className="font-bold text-sm text-slate-900">{timeline.phase}</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-normal font-semibold">{timeline.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }

    return null;
  };

  return (
    <div className="w-full font-sans bg-brand-bg-light text-slate-700 transition-colors">
      
      {/* 1. Breadcrumbs Section */}
      <section className="bg-white border-b border-slate-200/50 py-4.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-450">
            <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 shrink-0 text-slate-300" />
            
            {slug ? (
              <>
                <Link to={data.parentPath} className="hover:text-brand-blue transition-colors">{data.parentName}</Link>
                <ChevronRight className="h-4 w-4 shrink-0 text-slate-300" />
                <span className="text-slate-800 font-bold">{data.heroTitle}</span>
              </>
            ) : (
              <span className="text-slate-800 font-bold">{data.parentName}</span>
            )}
          </nav>
        </div>
      </section>

      {/* 2. Hero Section */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden border-b border-slate-200/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[350px] bg-brand-blue/5 rounded-full blur-[130px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center space-x-2 bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full w-fit">
              <Zap className="h-3.5 w-3.5" />
              <span>Enterprise Grade Platform</span>
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight">
              {data.h1}
            </h1>
            
            <p className="text-base sm:text-lg text-slate-655 leading-relaxed font-medium max-w-3xl">
              {data.heroSubtitle}
            </p>

            {/* Target Keywords Visualization */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1 mr-1">Target Queries:</span>
              {data.targetKeywords.map((keyword, idx) => (
                <span key={idx} className="bg-slate-100 text-slate-650 text-xs font-semibold px-3 py-1 rounded-lg border border-slate-200/60">
                  {keyword}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#consultation-planner"
                className="bg-brand-blue hover:bg-brand-blue/90 text-white px-7 py-4 rounded-xl font-bold shadow-lg shadow-brand-blue/15 flex items-center justify-center space-x-2 text-center text-sm transition-transform hover:-translate-y-0.5"
              >
                <span>Book Scope Session</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://cal.com/elvtera"
                target="_blank"
                rel="noreferrer"
                className="bg-white hover:bg-slate-50 text-slate-805 px-7 py-4 rounded-xl font-bold border border-slate-350 flex items-center justify-center space-x-2 text-center text-sm shadow-sm"
              >
                <span>Schedule Call (Cal.com)</span>
                <Globe className="h-4.5 w-4.5 text-slate-450" />
              </a>
            </div>
          </div>

          {/* Right Floating Badge Graphic */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 text-left relative shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-xl bg-brand-blue text-white flex items-center justify-center shadow-md">
                <Cpu className="h-5.5 w-5.5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{data.heroTitle} API</h4>
                <p className="text-xs text-slate-400">Node-RAG / Secure Ledger</p>
              </div>
            </div>
            
            <div className="space-y-3.5 border-t border-slate-200 pt-5 text-xs text-slate-605 font-semibold">
              <div className="flex justify-between">
                <span>Encryption</span>
                <span className="text-brand-blue">AES-256 GCM</span>
              </div>
              <div className="flex justify-between">
                <span>Fulfillment Rate</span>
                <span className="text-brand-blue">100% Routed</span>
              </div>
              <div className="flex justify-between">
                <span>API Latency</span>
                <span className="text-brand-blue">&lt; 140ms</span>
              </div>
            </div>

            <div className="p-3 bg-brand-blue/5 border border-brand-blue/15 rounded-2xl flex items-start space-x-2.5">
              <ShieldCheck className="h-4.5 w-4.5 text-brand-teal shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-500 leading-normal">
                Pre-audited ledger components comply with localized enterprise policies.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2.5 Dynamic Category Visualizer Map */}
      {renderCategoryVisual()}

      {/* 3. Problem Statement */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-16 space-y-3.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Operational Bottlenecks</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
              {data.problemStatement.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.problemStatement.points.map((point, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-4 hover-card">
                <div className="h-10 w-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ELVTERA Solution & 5. Benefits */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Solution */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">The ELVTERA Integration Blueprint</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
                {data.elvteraSolution.title}
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                {data.elvteraSolution.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.elvteraSolution.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-sm font-semibold text-slate-750">
                  <CheckCircle2 className="h-4.5 w-4.5 text-brand-blue shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Features list */}
            <div className="space-y-6 pt-6 border-t border-slate-100">
              <h3 className="font-display font-bold text-xl text-slate-900">System Capabilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.features.map((feat, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center space-x-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-blue"></span>
                      <span>{feat.title}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-550 leading-relaxed font-semibold pl-3.5">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits Cards Side */}
          <div className="lg:col-span-5 bg-brand-blue/5 border border-brand-blue/15 rounded-3xl p-8 space-y-6">
            <div className="space-y-1">
              <h3 className="font-display font-bold text-xl text-slate-900">Expected ROI & Benefits</h3>
              <p className="text-xs text-slate-450 font-bold uppercase">Audited Business Yields</p>
            </div>

            <div className="space-y-4">
              {data.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white border border-slate-200/60 rounded-2xl p-5 space-y-1.5 shadow-xs">
                  <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">Benefit 0{idx + 1}</span>
                  <h4 className="font-display font-bold text-base text-slate-950">
                    {benefit.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. Industries Served */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-2xl mb-12 space-y-3.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Target Industry Configurations</span>
            <h2 className="font-display font-bold text-3xl text-slate-900 leading-tight">
              Configured For Sizable Markets
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.industriesServed.map((ind, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 flex items-center justify-between shadow-xs hover-card">
                <span className="text-sm font-bold text-slate-800">{ind}</span>
                <ChevronRight className="h-4.5 w-4.5 text-brand-blue shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose ELVTERA & 8. Implementation Process */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Why choose */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">Operational Assurance</span>
              <h2 className="font-display font-bold text-3xl text-slate-900 leading-tight">
                Why Enterprises Partner With Elvtera
              </h2>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium">
                We replace patchwork legacy spreadsheets with unified pipelines. We operate on rigid SLA parameters, offering dedicated dev channels, active vector db context protection, and local backups.
              </p>
            </div>

            <div className="space-y-4 font-semibold text-xs sm:text-sm">
              <div className="flex items-center space-x-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700">
                <ShieldCheck className="h-5 w-5 text-brand-blue shrink-0" />
                <span>99.9% Uptime SLA Guarantees</span>
              </div>
              <div className="flex items-center space-x-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700">
                <Activity className="h-5 w-5 text-brand-blue shrink-0" />
                <span>Proactive performance monitoring audit logs</span>
              </div>
              <div className="flex items-center space-x-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700">
                <Briefcase className="h-5 w-5 text-brand-blue shrink-0" />
                <span>Dedicated Enterprise Account Managers</span>
              </div>
            </div>
          </div>

          {/* Staged Implementation */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display font-bold text-2xl text-slate-900"> Staged Implementation Lifecycle</h3>
            
            <div className="space-y-4 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              {[
                { phase: "01 Discover", desc: "Map operational charts, databases, and manual dependencies." },
                { phase: "02 Design", desc: "Agree on data structures, schema boundaries, and mock screens." },
                { phase: "03 Build", desc: "Release sandboxed modular instances with your actual data inputs." },
                { phase: "04 Launch", desc: "Complete branch cutovers with standard user verification guides." },
                { phase: "05 Support", desc: "Perform periodic load checks, logic additions, and updates." }
              ].map((step, idx) => (
                <div key={idx} className="flex items-start space-x-4 relative">
                  <div className="h-12 w-12 rounded-xl bg-slate-100 text-slate-900 border border-slate-250 flex items-center justify-center font-bold text-xs shrink-0 z-10">
                    0{idx + 1}
                  </div>
                  <div className="pt-1 space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">{step.phase}</h4>
                    <p className="text-xs sm:text-sm text-slate-550 leading-normal font-semibold">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 9. Technology Stack */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-slate-400 font-bold uppercase tracking-wider text-xs">Technical Integration Components</h3>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {data.techStack.map((tech, idx) => (
              <span key={idx} className="bg-white border border-slate-250 text-slate-800 text-xs sm:text-sm font-bold px-4.5 py-2.5 rounded-xl shadow-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ Accordion Grid */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
          <div className="text-center space-y-3.5">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">Got Questions?</span>
            <h2 className="font-display font-bold text-3xl text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {data.faq.map((item, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="bg-white border border-slate-250/70 rounded-xl overflow-hidden shadow-xs">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between text-slate-900 hover:bg-slate-50 transition-colors font-bold text-sm sm:text-base cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <ChevronDown className={`h-4.5 w-4.5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4.5 pt-1 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100 font-medium">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. Related Services, 12. Related Products & 13. Related Industries */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-16">
          
          {/* Related Services */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-xl text-slate-900 border-b border-slate-200 pb-3">Related {data.parentName} Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.relatedServices.map((srv, idx) => (
                <Link 
                  key={idx} 
                  to={srv.path}
                  className="bg-white border border-slate-200 rounded-xl p-4.5 hover-card flex flex-col justify-between h-28"
                >
                  <span className="text-xs font-bold text-slate-900 leading-snug">{srv.name}</span>
                  <span className="text-[10px] font-extrabold text-brand-blue uppercase tracking-wider flex items-center pt-2">
                    <span>Explore</span>
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Products & Industries Double Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Products Column */}
            <div className="space-y-6">
              <h3 className="font-display font-bold text-xl text-slate-900 border-b border-slate-200 pb-3">Related Software Products</h3>
              <div className="space-y-3">
                {data.relatedProducts.map((prod, idx) => (
                  <Link 
                    key={idx} 
                    to={prod.path}
                    className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between hover-card shadow-xs"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                        <Cpu className="h-4 w-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-800">{prod.name}</span>
                    </div>
                    <ChevronRight className="h-4.5 w-4.5 text-brand-blue" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Industries Column */}
            <div className="space-y-6">
              <h3 className="font-display font-bold text-xl text-slate-900 border-b border-slate-200 pb-3">Recommended Industries</h3>
              <div className="space-y-3">
                {data.relatedIndustries.map((ind, idx) => (
                  <Link 
                    key={idx} 
                    to={ind.path}
                    className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between hover-card shadow-xs"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                        <Layers className="h-4 w-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-800">{ind.name}</span>
                    </div>
                    <ChevronRight className="h-4.5 w-4.5 text-brand-blue" />
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 14. Case Studies */}
      {data.caseStudies.length > 0 && (
        <section className="py-20 lg:py-24 bg-white border-b border-slate-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <div className="max-w-2xl mb-12 space-y-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">Success Metric Audits</span>
              <h2 className="font-display font-bold text-3xl text-slate-900 leading-tight">
                Real Results For Real Organizations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.caseStudies.map((caseStudy, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 hover-card flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-lg text-slate-950 border-b border-slate-200 pb-2">
                      Client: {caseStudy.client}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-medium">
                      <strong>Problem:</strong> {caseStudy.challenge}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-medium">
                      <strong>Solution:</strong> {caseStudy.outcome}
                    </p>
                  </div>
                  <div className="bg-brand-blue/10 text-brand-blue font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-brand-blue/20 w-fit mt-5">
                    Result: {caseStudy.metrics}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 15. Blog Recommendations */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
          <h3 className="font-display font-bold text-xl text-slate-900">Suggested Blog Topics & Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.suggestedBlogs.map((blog, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 flex items-start space-x-4">
                <div className="p-2 bg-brand-blue/10 text-brand-blue rounded-lg mt-0.5">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{blog}</h4>
                  <span className="text-[10px] text-brand-blue font-extrabold uppercase tracking-wider block">Recommended Corporate Guide</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. CTA Banner & 17. Contact Form Placeholder */}
      <section id="consultation-planner" className="py-20 lg:py-24 bg-white relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[350px] bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Consultation Scope Booker
          </h2>
          <p className="text-sm sm:text-base text-slate-605 max-w-xl mx-auto leading-relaxed font-medium">
            Lock in a sandbox mapping session. We will map your databases, manual routes, and API dependencies to model your business workflows.
          </p>
          
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-xl mx-auto text-left shadow-xs">
            <h4 className="font-display font-bold text-base text-slate-950 mb-3.5">Scoping Request Details</h4>
            
            <div className="space-y-3.5 text-xs text-slate-500 font-semibold mb-6">
              <div className="flex justify-between">
                <span>Selected Module:</span>
                <span className="text-brand-blue">{data.heroTitle}</span>
              </div>
              <div className="flex justify-between">
                <span>Parent Category:</span>
                <span className="text-brand-blue">{data.parentName}</span>
              </div>
              <div className="flex justify-between">
                <span>Scope:</span>
                <span className="text-brand-blue">Custom Database & Routing Schema</span>
              </div>
            </div>

            {/* Typeform Redirect Placeholder Button */}
            {!formOpened ? (
              <button
                onClick={() => setFormOpened(true)}
                className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white py-4 rounded-xl font-bold shadow-lg shadow-brand-blue/20 flex items-center justify-center space-x-2 text-center text-sm transition-transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Launch Consultation Questionnaire</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </button>
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-brand-blue/5 border border-brand-blue/15 text-slate-650 rounded-xl text-xs sm:text-sm leading-relaxed font-semibold">
                  📢 <strong>Redirecting to Typeform...</strong> (This button is pre-built to route users directly to your Typeform questions for lead qualification).
                </div>
                <a
                  href="https://cal.com/elvtera"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white py-4 rounded-xl font-bold shadow-lg shadow-brand-blue/20 flex items-center justify-center space-x-2 text-center text-sm transition-transform hover:-translate-y-0.5"
                >
                  <span>Open Calendar Booker</span>
                  <Globe className="h-4.5 w-4.5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};
export default DynamicLandingPage;
