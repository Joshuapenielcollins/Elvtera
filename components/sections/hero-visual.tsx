"use client";

import React, { useState } from "react";
import { 
  Code2, 
  Server, 
  ShieldCheck, 
  Headphones, 
  Activity, 
  CheckCircle2, 
  ArrowUpRight,
  Terminal,
  Zap,
  Lock,
  RefreshCw
} from "lucide-react";
import { motion } from "framer-motion";

export function HeroVisual() {
  const [activeTab, setActiveTab] = useState<"build" | "operate" | "secure" | "support">("operate");

  const pillars = [
    {
      id: "build",
      name: "BUILD",
      label: "Custom Software & Automation",
      icon: Code2,
      accent: "text-purple-600 bg-purple-50 border-purple-200",
      activeBorder: "border-purple-600",
      status: "Pipeline Active",
      badge: "Release v3.4.1",
      metricTitle: "API Latency",
      metricValue: "42ms",
      detail: "Next.js · TypeScript · PostgreSQL · n8n Pipelines",
      items: ["Microservices API Deployed", "Postgres Migration Verified", "Webhook Runner Synced"],
    },
    {
      id: "operate",
      name: "OPERATE",
      label: "Infrastructure & Managed IT",
      icon: Server,
      accent: "text-blue-600 bg-blue-50 border-blue-200",
      activeBorder: "border-blue-600",
      status: "99.98% Uptime",
      badge: "Healthy Clusters",
      metricTitle: "Fleet Telemetry",
      metricValue: "28 Nodes",
      detail: "Linux / Windows · AWS / Azure / OCI · Prometheus",
      items: ["Kernel Hardening Applied", "Postgres WAL Sync Active", "Automated Snapshot Complete"],
    },
    {
      id: "secure",
      name: "SECURE",
      label: "Cybersecurity & Security Operations",
      icon: ShieldCheck,
      accent: "text-emerald-600 bg-emerald-50 border-emerald-200",
      activeBorder: "border-emerald-600",
      status: "0 Critical Vulns",
      badge: "SIEM Ingestion Active",
      metricTitle: "Auth Posture",
      metricValue: "100% MFA",
      detail: "Wazuh SIEM · IAM Least Privilege · EDR Agents",
      items: ["Syslog Stream Verified", "SSH Key-Only Enforced", "Vulnerability Scan Clear"],
    },
    {
      id: "support",
      name: "SUPPORT",
      label: "Remote Product & Tech Support",
      icon: Headphones,
      accent: "text-amber-600 bg-amber-50 border-amber-200",
      activeBorder: "border-amber-600",
      status: "SLA Met 99.4%",
      badge: "L1 / L2 Triage",
      metricTitle: "Avg Resolution",
      metricValue: "18 mins",
      detail: "SaaS Product Support · Ticket Triage · Bug Escalations",
      items: ["L1 Frontline Queue Cleared", "Staging Bug Repro Passed", "Docs Updated in Zendesk"],
    },
  ];

  const current = pillars.find((p) => p.id === activeTab) || pillars[1];

  return (
    <div className="relative select-none w-full max-w-xl mx-auto lg:max-w-none">
      
      {/* Decorative ambient background ring */}
      <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-emerald-600/10 blur-xl opacity-80" />

      {/* Main architectural card */}
      <div className="relative rounded-2xl border border-slate-200/90 bg-white p-5 lg:p-6 shadow-[0_4px_20px_rgba(9,9,11,0.06),0_20px_50px_-15px_rgba(9,9,11,0.12)]">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="flex size-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full size-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold text-slate-900 tracking-wide font-mono uppercase">
              ELVTERA CONTROL MATRIX
            </span>
          </div>
          <span className="text-[11px] font-semibold text-slate-500 font-mono">
            {current.status}
          </span>
        </div>

        {/* 4 Interactive Pillars Switcher */}
        <div className="mt-4 grid grid-cols-4 gap-2">
          {pillars.map((p) => {
            const Icon = p.icon;
            const isActive = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id as any)}
                className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  isActive 
                    ? "bg-slate-900 text-white border-slate-900 shadow-md scale-[1.02]" 
                    : "bg-slate-50 text-slate-600 border-slate-200/70 hover:bg-slate-100"
                }`}
              >
                <Icon className={`size-4 mb-1 ${isActive ? "text-blue-400" : "text-slate-500"}`} />
                <span className="text-[10px] font-extrabold tracking-wider font-mono">
                  {p.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Pillar Inspector View */}
        <motion.div 
          key={current.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-5 rounded-xl border border-slate-100 bg-slate-50/80 p-4"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold tracking-wider uppercase text-secondary font-mono bg-white px-2 py-0.5 rounded border border-slate-200">
                  {current.name} STACK
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {current.badge}
                </span>
              </div>
              <h4 className="mt-2 text-base font-bold text-slate-900 font-display">
                {current.label}
              </h4>
              <p className="mt-0.5 text-xs text-slate-500 font-medium">
                {current.detail}
              </p>
            </div>

            <div className="text-right pl-3 shrink-0">
              <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                {current.metricTitle}
              </span>
              <span className="text-xl font-extrabold text-slate-900 font-display">
                {current.metricValue}
              </span>
            </div>
          </div>

          {/* Operational Checks */}
          <div className="mt-4 pt-3.5 border-t border-slate-200/60 space-y-2">
            {current.items.map((it, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                  <span className="font-medium text-[11px] sm:text-xs">{it}</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">PASSED</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer Relationship Ribbon */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span className="font-semibold text-slate-700">
            One Partner. Full Operational Stack.
          </span>
          <span className="font-mono text-secondary font-bold">
            BUILD · OPERATE · SECURE · SUPPORT
          </span>
        </div>

      </div>
    </div>
  );
}
