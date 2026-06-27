import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Stethoscope, 
  HardHat, 
  GraduationCap, 
  ShoppingBag, 
  Truck,
  ArrowRight,
  ShieldAlert,
  ShieldCheck,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

interface IndustryItem {
  name: string;
  icon: React.ComponentType<any>;
  context: string;
  challenge: string;
  solution: string;
  impact: string;
  kpi: string;
  features: string[];
  painPoints: string[];
}

export const Industries: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const industries: IndustryItem[] = [
    {
      name: "Manufacturing & Textiles",
      icon: Building2,
      context: "Heavy industrial operations require precision raw materials tracking, precise bills of materials (BOM), and synchronized assembly line schedules to control margins.",
      challenge: "Fragmented spreadsheets, manual stock audits, delayed payroll for wage-workers, and lack of real-time BOM tracking leading to 15% or more revenue leakage.",
      solution: "We implement custom Textile and Manufacturing ERP modules that sync scanner guns, barcode tags, purchase ledgers, and automated stock alert scripts in real time.",
      impact: "Reduced inventory overheads by 50% with 100% tax compliant ledgers and automatic materials reorder triggers.",
      kpi: "Inventory Turnover Yield",
      features: ["Bill of Materials (BOM) Control", "Barcode & RFID Scanners Setup", "Work-in-Progress (WIP) Tracking", "Automated Supplier Purchase Orders"],
      painPoints: [
        "Inventory count in ledger sheets mismatching actual bins on the shopfloor by up to 10 days.",
        "Production batch bottlenecks resulting in late deliveries and penalty charges.",
        "Manual card attendance entries leading to labor cost errors for high-volume shifts.",
        "Real-time material price changes not logging instantly, blowing past procurement budgets."
      ]
    },
    {
      name: "Healthcare & Clinics",
      icon: Stethoscope,
      context: "Clinical facilities require secure electronic health records (EHR), streamlined patient booking queues, and real-time medical supply checkouts.",
      challenge: "Missed appointments, long patient check-in wait times, manual insurance claim entries, and disjointed pharmacy stock coordination.",
      solution: "Official WhatsApp Cloud API scheduler combined with a custom Clinic Management Portal. Patient details, queue schedules, and invoicing sync automatically.",
      impact: "65% of bookings handled by AI, zero lost medical records, and instantaneous card billing integrations.",
      kpi: "Patient Intake Capacity",
      features: ["HIPAA-Aligned Database encryption", "WhatsApp Appointment Booker", "Clinic Queue Management Engine", "Medical Store Inventory Sync"],
      painPoints: [
        "Queue congestion at check-in desks creating long patient wait times.",
        "Delayed insurance verification logs delaying payments by weeks.",
        "Critical surgical tools or pharmacy items running low without automated warnings.",
        "Sensitive medical reports sent via unencrypted channels, risking patient data safety."
      ]
    },
    {
      name: "Construction & Real Estate",
      icon: HardHat,
      context: "Managing contractor teams, equipment rentals, material purchase permits, and progressive client billing sheets across multiple jobsites.",
      challenge: "Cost overruns, loose receipt auditing, manual spreadsheet timesheets tracking, and communication lapses between engineers and purchasing reps.",
      solution: "Mobile-responsive Contractor Portal linked to central Inventory ERP. Workers log onsite materials logs and timesheets directly; invoicing schedules update instantly.",
      impact: "Real-time project cost forecasting, 100% receipt reconciliation, and zero project billing gaps.",
      kpi: "Project Margin Accuracy",
      features: ["Onsite Mobile Contractor Log", "Progressive Payment Invoicing", "Equipment Rental Trackers", "SOP Purchase Approval Routes"],
      painPoints: [
        "Field managers failing to log material clearances in real time, causing cost overruns.",
        "Hand-written worker diaries leading to billing discrepancies with subcontractors.",
        "Expensive rental equipment sitting idle on sites due to poor scheduling maps.",
        "Milestones passing without triggering progress payments, draining project cash flow."
      ]
    },
    {
      name: "Education & Colleges",
      icon: GraduationCap,
      context: "Schools, colleges, and training academies need to coordinate student admissions, course fees billing, and grading reports.",
      challenge: "Manual paper admissions forms, delayed tuition collections, lack of centralized grading databases, and fragmented parent announcements loops.",
      solution: "Integrated School ERP. Online portal captures student registrations, auto-issues invoices, integrates card gateways, and logs teacher grade reports.",
      impact: "Automated tuition collection alerts, 90% online student self-registrations, and direct student communication inboxes.",
      kpi: "Fee Collection Efficiency",
      features: ["Admissions Lead capture", "Fee Invoicing & Payment Gateways", "Teacher Grading Dashboard", "Parent-Teacher WhatsApp Alerts"],
      painPoints: [
        "Unstructured web forms leading to applicant drop-offs during admissions cycles.",
        "Delayed collection tracking resulting in fee defaults and administrative backlog.",
        "Student progress grades locked in offline tables, delaying transcript dispatches.",
        "School announcements sent via paper slips and emails going unread by busy parents."
      ]
    },
    {
      name: "Retail & POS Chains",
      icon: ShoppingBag,
      context: "High-volume retail outlets need fast register checkouts, real-time stock balances, and dynamic discount structures.",
      challenge: "Slow checkout register lines, manual price audits, high staff training times, and lack of cross-location inventory sync.",
      solution: "Modular Retail POS client synced to cloud Inventory ERP. Automatic barcode lookups, integrated billing card terminal, and real-time stock deductions.",
      impact: "Checkout time reduced to under 5 seconds, instant multi-location stock replenishment triggers, and digital sales accounting.",
      kpi: "Register Checkout Speed",
      features: ["Multi-Register Cloud POS", "Barcode Catalog Scanner", "Loyalty Rewards Calculator", "Direct Digital Receipt Delivery"],
      painPoints: [
        "Peak hour register checkout bottlenecks leading to queue drop-offs.",
        "Stock counts in catalog mismatching physical warehouse inventory levels.",
        "Cashiers applying manual discounts, leaking profits at checkout points.",
        "Complex cashier interfaces requiring days of training for new seasonal workers."
      ]
    },
    {
      name: "Logistics & Distribution",
      icon: Truck,
      context: "Wholesalers, distributors, and cargo businesses must coordinate fleet routing, dispatch cargo manifests, and audit supply lifecycles.",
      challenge: "Lost shipping manifests, delayed driver routing dispatches, manual weight bridge logging, and lack of purchase order visibility.",
      solution: "Warehouse Management System (WMS) integrated with GPS route dispatch trackers. Drivers log manifest clearances on mobile; billing processes instantly.",
      impact: "30% fuel yield savings, zero missed delivery notes, and instant digital proof of delivery uploads.",
      kpi: "Fulfillment Cycle Speed",
      features: ["Warehouse Bin Allocation Maps", "Driver Dispatch manifest logs", "GPS Fleet Routing Sync", "Real-Time Proof of Delivery (POD)"],
      painPoints: [
        "Misplaced paper manifest sheets delaying freight clearances and client invoicing.",
        "Drivers using unoptimized routing paths, driving fuel overheads up by 25%.",
        "Weighbridge logs entered by hand, creating bottlenecks at entry terminals.",
        "Customers dialing support lines constantly due to lack of shipment tracking APIs."
      ]
    }
  ];

  const activeInd = industries[activeIdx];
  const ActiveIcon = activeInd.icon;

  return (
    <div className="w-full relative overflow-hidden font-sans bg-brand-bg-light text-slate-700">
      <SEO 
        title="Industries We Serve" 
        description="Learn how ELVTERA designs custom business technology solutions for Manufacturing, Healthcare, Construction, Retail, and Logistics sectors." 
      />

      {/* Hero Header */}
      <section className="relative pt-12 pb-16 bg-white border-b border-slate-200/50">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[85%] h-[200px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-brand-blue text-xs font-bold uppercase tracking-wider bg-brand-blue/10 px-3.5 py-1.5 rounded-full w-fit mx-auto block mb-3.5">
            Target Industries
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight">
            Proven Operations Solutions
          </h1>
          <p className="text-xs sm:text-sm text-slate-550 max-w-lg mx-auto leading-relaxed font-medium">
            Select your industry sector below to see how our engineering teams coordinate databases, AI bots, and custom ERP software to resolve specific operational challenges.
          </p>
        </div>
      </section>

      {/* Interactive Selection Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side Industry Buttons */}
            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3">
              {industries.map((ind, idx) => {
                const Icon = ind.icon;
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`p-4 rounded-xl border text-left flex items-center space-x-3.5 transition-all cursor-pointer ${
                      isActive
                        ? 'border-brand-blue bg-brand-blue/5 text-brand-blue font-bold ring-2 ring-brand-blue/10'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className={`p-2 rounded-lg shrink-0 ${isActive ? 'bg-brand-blue text-white' : 'bg-slate-50 text-slate-500'}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold truncate">{ind.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Right side Detail Display */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 text-left shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-8 animate-fadeIn"
                >
                  {/* Industry Context */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2.5">
                      <div className="p-2 rounded-xl bg-brand-teal/10 text-brand-teal">
                        <ActiveIcon className="h-6 w-6" />
                      </div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                        {activeInd.name} Operations
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-medium">
                      {activeInd.context}
                    </p>
                  </div>

                  {/* Challenge vs Solution cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Challenge Card */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                      <div className="flex items-center space-x-2 text-red-500 font-bold text-xs">
                        <ShieldAlert className="h-4.5 w-4.5" />
                        <span>Core Challenge</span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-550 leading-relaxed font-semibold">
                        {activeInd.challenge}
                      </p>
                    </div>

                    {/* Solution Card */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                      <div className="flex items-center space-x-2 text-brand-success font-bold text-xs">
                        <ShieldCheck className="h-4.5 w-4.5" />
                        <span>ELVTERA Solution</span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-550 leading-relaxed font-semibold">
                        {activeInd.solution}
                      </p>
                    </div>

                  </div>

                  {/* Common Operational Leaks (Pain Points - NEW DETAIL ADDITION) */}
                  <div className="pt-2 space-y-3">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-red-500">
                      Common Operational Leaks (Pain Points)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {activeInd.painPoints.map((pain, pIdx) => (
                        <div key={pIdx} className="flex items-start space-x-2.5 text-xs font-semibold text-slate-700 bg-red-50/40 p-3 rounded-xl border border-red-100/60">
                          <span className="h-1.5 w-1.5 rounded-full bg-red-500 shrink-0 mt-1.5 inline-block"></span>
                          <span>{pain}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Industry Specific specs list */}
                  <div className="pt-2">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-450 mb-3">
                      Key Technical Deliverables
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeInd.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-teal inline-block"></span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* KPI Impact */}
                  <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="space-y-1">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 block">
                        Verified Industry Impact
                      </span>
                      <p className="text-sm font-bold text-slate-800 flex items-center space-x-1.5">
                        <Award className="h-4.5 w-4.5 text-brand-teal" />
                        <span>{activeInd.kpi} • <span className="text-brand-blue font-extrabold">{activeInd.impact}</span></span>
                      </p>
                    </div>

                    <Link
                      to="/contact"
                      className="bg-brand-blue hover:bg-brand-blue/90 text-white px-5 py-3 rounded-xl font-bold shadow-lg shadow-brand-blue/15 hover:shadow-xl transition-all duration-300 flex items-center space-x-1.5 text-xs cursor-pointer shrink-0 whitespace-nowrap"
                    >
                      <span>Request scoping proposal</span>
                      <ArrowRight className="h-4.5 w-4.5" />
                    </Link>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
export default Industries;
