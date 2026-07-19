"use client";

import React, { useState } from "react";
import Link from "next/link";
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
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface WorkflowStep {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  shortDesc: string;
  longDesc: string;
  tech: string[];
  kpi: string;
  impact: string;
}

export function InteractiveWorkflow() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: WorkflowStep[] = [
    {
      name: "Capture Every Lead",
      icon: Target,
      shortDesc: "Omnichannel Acquisition",
      longDesc: "Enquiries from Google, Meta ads, your website, and walk-in forms land in one stream, checked and enriched as they arrive. The lead that used to sit unread in someone's inbox over the weekend no longer exists.",
      tech: ["Google Ads", "Meta Ads", "Web Forms", "WhatsApp Business"],
      kpi: "Lead Capture Speed",
      impact: "First response in under 2 seconds, any hour."
    },
    {
      name: "Route to the Right Person",
      icon: Users,
      shortDesc: "Intelligent Allocation",
      longDesc: "Each lead goes to the right salesperson instantly, by territory, product, or workload. No morning meeting needed to divide up the list.",
      tech: ["Custom CRM Portal", "n8n Orchestrator", "WhatsApp API"],
      kpi: "Routing Efficiency",
      impact: "Zero leads waiting for assignment."
    },
    {
      name: "Reply on WhatsApp in Seconds",
      icon: MessageSquare,
      shortDesc: "Instant Engagement",
      longDesc: "The first reply goes out automatically on your official number, with the full chat saved to the customer's record. Your team joins the conversation instead of starting it.",
      tech: ["WhatsApp Business API", "Custom AI Agent", "n8n Orchestrator"],
      kpi: "Customer Open Rate",
      impact: "98 percent open rates, replies in seconds."
    },
    {
      name: "Keep Every System in Sync",
      icon: Zap,
      shortDesc: "Real-time Validation",
      longDesc: "A confirmed order updates stock, accounts, and the customer record on its own. The numbers on every screen finally agree with each other.",
      tech: ["Custom ERP Core", "n8n Orchestrator", "Secure REST APIs"],
      kpi: "Automation Trigger Speed",
      impact: "Zero copy-paste between systems."
    },
    {
      name: "Close More of What You Quote",
      icon: TrendingUp,
      shortDesc: "High-Value Conversion",
      longDesc: "Quotes generate in a click, follow-ups fire on schedule, and approvals stop living in someone's chat history. Deals move because the process moves them.",
      tech: ["Custom CRM Module", "WhatsApp API", "Email Automation"],
      kpi: "Conversion Lift",
      impact: "Follow-ups sent on time, every time."
    },
    {
      name: "Run Operations in One Place",
      icon: Database,
      shortDesc: "Operational Sync",
      longDesc: "Orders, purchasing, inventory, production, and billing operate from one custom ERP. Month-end stops being an archaeology project.",
      tech: ["Custom ERP Suite", "Automation Engine", "PostgreSQL Database"],
      kpi: "Fulfillment Cycle",
      impact: "One source of truth for every department."
    },
    {
      name: "See Everything on One Screen",
      icon: FilePieChart,
      shortDesc: "Intelligent Dashboard",
      longDesc: "Sales, cash, stock, and receivables live on dashboards that update themselves. You check the business from your phone instead of waiting for someone's Friday export.",
      tech: ["Custom Reports", "Interactive Charts", "Custom Dashboards"],
      kpi: "Reporting Frequency",
      impact: "Decisions made on today's numbers, not last month's."
    },
    {
      name: "Scale Without New Chaos",
      icon: Rocket,
      shortDesc: "Ecosystem Expansion",
      longDesc: "A new branch, product line, or team plugs into the same system instead of spawning new spreadsheets. Growth stops multiplying your admin work.",
      tech: ["Docker Containers", "Secure Linux Cloud", "Custom Multi-site Setup"],
      kpi: "Annual Run-Rate",
      impact: "Branch ten runs like branch one."
    }
  ];

  return (
    <div className="w-full font-sans">
      {/* Workflow Navigation Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-8">
        {steps.map((step, idx) => {
          const IconComponent = step.icon;
          const isActive = idx === activeStep;
          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl border text-left flex flex-col justify-between h-32 transition-all relative overflow-hidden group cursor-pointer ${
                isActive 
                  ? "border-secondary bg-secondary/5 ring-2 ring-secondary/20" 
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className={`p-1.5 rounded-lg ${isActive ? "bg-secondary text-white" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200 transition-colors"}`}>
                  <IconComponent className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold text-slate-400">
                  0{idx + 1}
                </span>
              </div>
              <div>
                <h4 className={`text-xs font-bold leading-tight ${isActive ? "text-secondary" : "text-slate-800"}`}>
                  {step.name}
                </h4>
                <p className="text-[10px] text-slate-500 mt-1 truncate font-semibold">
                  {step.shortDesc}
                </p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5 z-10 text-slate-300">
                  <ArrowRight className="h-3 w-3" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Info Display Card */}
      <div className="relative overflow-hidden bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
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
            <div className="lg:col-span-2 space-y-4 text-left">
              <span className="text-xs font-extrabold uppercase tracking-wider text-secondary block mb-2">
                Implementation Stage 0{activeStep + 1}
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
                {steps[activeStep].name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                {steps[activeStep].longDesc}
              </p>
              
              {/* Technology badges */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Systems Engineered</h4>
                <div className="flex flex-wrap gap-1.5">
                  {steps[activeStep].tech.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs font-semibold bg-slate-100 text-slate-700 px-2.5 py-1.5 rounded-lg border border-slate-200/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Link */}
              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="text-xs font-bold text-secondary hover:text-secondary/80 inline-flex items-center space-x-1"
                >
                  <span>See how this works for your business</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right side stats */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col justify-between space-y-6 text-left">
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Operational Metric
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 flex items-center space-x-1.5">
                  <ShieldCheck className="h-4.5 w-4.5 text-secondary" />
                  <span>{steps[activeStep].kpi}</span>
                </p>
              </div>

              <div className="space-y-1 border-t border-slate-200 pt-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Typical Impact
                </span>
                <p className="text-xl font-extrabold text-secondary tracking-tight leading-tight">
                  {steps[activeStep].impact}
                </p>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
