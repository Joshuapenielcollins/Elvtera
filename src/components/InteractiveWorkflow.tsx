import React, { useState } from 'react';
import { 
  Target, 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Database, 
  FilePieChart, 
  Rocket, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface WorkflowStep {
  name: string;
  icon: React.ComponentType<any>;
  shortDesc: string;
  longDesc: string;
  tech: string[];
  kpi: string;
  impact: string;
}

export const InteractiveWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: WorkflowStep[] = [
    {
      name: "Lead Capture",
      icon: Target,
      shortDesc: "Omnichannel Acquisition",
      longDesc: "Consolidate and filter incoming leads from Google Ads, Meta Ads, Landing Pages, organic searches, and web forms into a single stream. Data is checked for quality and enriched in real time.",
      tech: ["Webhooks", "JSON REST API", "Meta Conversion API", "SEO Scrapers"],
      kpi: "Lead Capture Speed",
      impact: "< 2 Seconds Response Time"
    },
    {
      name: "CRM Routing",
      icon: Users,
      shortDesc: "Intelligent Allocation",
      longDesc: "Automatically log incoming records, deduplicate contacts, and assign accounts to sales reps based on region, industry, or round-robin rules. Sales pipelines update instantly.",
      tech: ["Modular CRM", "Lead Scoring Engines", "Zendesk/Hubspot APIs"],
      kpi: "Routing Efficiency",
      impact: "100% Leads Routed Instantly"
    },
    {
      name: "WhatsApp API",
      icon: MessageSquare,
      shortDesc: "Instant Engagement",
      longDesc: "Trigger automated greeting sequences, brochures, and lead qualification questionnaires via the official WhatsApp Business API immediately when a prospect submits a query.",
      tech: ["Official Cloud API", "Meta Business Manager", "Chat Templates"],
      kpi: "Customer Open Rate",
      impact: "98% Message Read Ratio"
    },
    {
      name: "Sync Engagement",
      icon: Zap,
      shortDesc: "Real-time Validation",
      longDesc: "Automated integration triggers engage the prospect, validating company records, fetching registration dossiers, and preparing calendar slots for the sales team instantly.",
      tech: ["Sync Engines", "Database Triggers", "Cal.com Webhooks"],
      kpi: "Automation Trigger Speed",
      impact: "99.9% Sync Accuracy"
    },
    {
      name: "Sales Closing",
      icon: TrendingUp,
      shortDesc: "High-Value Conversion",
      longDesc: "Your human sales specialists step in for high-intent, qualified calls with full historical context, chat transcripts, and company dossiers pre-assembled by our automation engine.",
      tech: ["Interactive Decks", "Sales Forecasting", "E-Sign Integration"],
      kpi: "Conversion Lift",
      impact: "+40% Close Rate Increase"
    },
    {
      name: "Enterprise ERP",
      icon: Database,
      shortDesc: "Operational Sync",
      longDesc: "Upon client onboarding, the ERP automatically spins up billing records, adjusts inventory, registers manufacturing pipelines, logs accounting entries, and alerts operations teams.",
      tech: ["Custom ERP Engines", "Double-Entry Ledger", "Real-Time Inventory"],
      kpi: "Fulfillment Cycle",
      impact: "-50% Processing Overhead"
    },
    {
      name: "Reports & Analytics",
      icon: FilePieChart,
      shortDesc: "Intelligent Dashboard",
      longDesc: "Synthesize operational and marketing data into real-time visual dashboards. Track customer acquisition costs (CAC), lifetime value (LTV), inventory turnover, and financial yields.",
      tech: ["OLAP Database cubes", "BI Chart Engines", "Predictive Forecasting"],
      kpi: "Reporting Frequency",
      impact: "Real-Time Ledger Updates"
    },
    {
      name: "Scalable Growth",
      icon: Rocket,
      shortDesc: "Ecosystem Expansion",
      longDesc: "Reinvest customer profits into pre-modeled growth channels. Automated SEO audit pipelines, digital campaign triggers, and email newsletters execute continuously to scale the cycle.",
      tech: ["Growth Hacking APIs", "SEO Audit Automations", "Customer Retention"],
      kpi: "Annual Run-Rate",
      impact: "Average 2.5x Growth YoY"
    }
  ];

  return (
    <div className="w-full font-sans">
      {/* Workflow Navigation Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 mb-8">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = idx === activeStep;
          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl border text-left flex flex-col justify-between h-32 transition-all relative overflow-hidden group cursor-pointer ${
                isActive 
                  ? 'border-brand-blue bg-brand-blue/5 dark:bg-brand-blue/10 ring-2 ring-brand-blue/20' 
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className={`p-1.5 rounded-lg ${isActive ? 'bg-brand-blue text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-slate-200 transition-colors'}`}>
                  <Icon className="h-5.5 w-5.5" />
                </div>
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
                  0{idx + 1}
                </span>
              </div>
              <div>
                <h4 className={`text-sm font-bold leading-tight ${isActive ? 'text-brand-blue dark:text-blue-400' : 'text-slate-800 dark:text-slate-200'}`}>
                  {step.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 truncate">
                  {step.shortDesc}
                </p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5 z-10 text-slate-300 dark:text-slate-700">
                  <ArrowRight className="h-3 w-3" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Info Display Card */}
      <div className="relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8">
        <div className="absolute top-0 right-0 p-8 opacity-5 text-slate-400 pointer-events-none">
          <Activity className="h-32 w-32 animate-pulse" />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Left side description */}
            <div className="lg:col-span-2 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-teal block mb-2">
                Ecosystem Stage 0{activeStep + 1}
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                {steps[activeStep].name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {steps[activeStep].longDesc}
              </p>
              
              {/* Technology badges */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-1.5">
                  {steps[activeStep].tech.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2.5 py-1.5 rounded-lg border border-slate-200/50 dark:border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side stats */}
            <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-6 border border-slate-100 dark:border-slate-850 flex flex-col justify-between space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  Operational Metric
                </span>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center space-x-1.5">
                  <ShieldCheck className="h-4.5 w-4.5 text-brand-teal" />
                  <span>{steps[activeStep].kpi}</span>
                </p>
              </div>

              <div className="space-y-1 border-t border-slate-200 dark:border-slate-850 pt-4">
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  Typical Impact
                </span>
                <p className="text-2xl font-extrabold text-brand-blue dark:text-blue-400 tracking-tight leading-tight">
                  {steps[activeStep].impact}
                </p>
              </div>

              <p className="text-xs text-slate-400 dark:text-slate-500 italic">
                *KPIs verified from average metrics aggregated across 500+ client integrations.
              </p>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
export default InteractiveWorkflow;
