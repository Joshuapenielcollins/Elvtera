"use client";

import React, { useState } from "react";
import { 
  Code2, 
  Server, 
  ShieldCheck, 
  Briefcase,
  ArrowRight,
  Sparkles,
  Workflow,
  Cpu,
  CheckCircle2,
  Activity,
  Layers,
  Zap,
  Globe,
  Database,
  Lock,
  Headphones
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function HeroVisual() {
  const [activeTab, setActiveTab] = useState<"business" | "software" | "it-security">("software");

  const pillars = [
    {
      id: "business" as const,
      number: "01",
      name: "Business Solutions",
      subline: "Build and scale systems",
      icon: Briefcase,
      badge: "Operations Online",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      accentBorder: "border-blue-600",
      accentBg: "bg-blue-600",
      metricTitle: "Process Throughput",
      metricValue: "99.8%",
      metricSub: "Automated routing active",
      stack: "CRM · GTM Pipelines · Helpdesk · Zapier / n8n · Web Systems",
      components: [
        { label: "CRM & Sales Automation", detail: "Multi-stage pipeline synced", status: "Active" },
        { label: "GTM Lead Inbound Engine", detail: "Enrichment & auto-triage", status: "Live" },
        { label: "Customer Support Desk", detail: "Omnichannel ticket SLA", status: "Ready" },
      ],
      link: "/solutions/business-solutions",
      linkText: "Explore Business Solutions",
    },
    {
      id: "software" as const,
      number: "02",
      name: "Software Solutions",
      subline: "Build custom technology",
      icon: Code2,
      badge: "Production Deployed",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      accentBorder: "border-purple-600",
      accentBg: "bg-purple-600",
      metricTitle: "API Response Time",
      metricValue: "42ms",
      metricSub: "Zero downtime deployment",
      stack: "Next.js · TypeScript · PostgreSQL · REST/GraphQL · AI Workflows",
      components: [
        { label: "Custom Business Platform", detail: "Role-based portals & admin", status: "Active" },
        { label: "AI Agent Orchestration", detail: "Context-aware LLM pipeline", status: "Live" },
        { label: "API Integrations & Sync", detail: "Bidirectional ERP connectors", status: "Synced" },
      ],
      link: "/solutions/software-solutions",
      linkText: "Explore Software Solutions",
    },
    {
      id: "it-security" as const,
      number: "03",
      name: "IT & Security",
      subline: "Operate and protect",
      icon: ShieldCheck,
      badge: "Fleet Protected",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      accentBorder: "border-emerald-600",
      accentBg: "bg-emerald-600",
      metricTitle: "Uptime & Posture",
      metricValue: "99.98%",
      metricSub: "0 critical vulnerabilities",
      stack: "AWS / Azure / OCI · Linux & Windows · SIEM · Terraform · EDR",
      components: [
        { label: "Cloud & Server Fleet", detail: "Auto-scaling & WAL backups", status: "Nominal" },
        { label: "SIEM & SecOps Telemetry", detail: "Continuous log correlation", status: "Enforced" },
        { label: "24/7 IT Technical Support", detail: "Proactive uptime monitoring", status: "Guaranteed" },
      ],
      link: "/solutions/it-and-security",
      linkText: "Explore IT & Security",
    },
  ];

  const current = pillars.find((p) => p.id === activeTab) || pillars[0];

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
              ELVTERA END-TO-END PLATFORM
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/80">
            <Activity className="size-3 text-emerald-600 animate-pulse" />
            <span>3 Pillars Synced</span>
          </div>
        </div>

        {/* 3 Pillar Tabs */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = activeTab === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`relative flex flex-col items-start p-2.5 sm:p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? "bg-slate-50/90 border-slate-300 shadow-xs"
                    : "border-slate-100 bg-white hover:bg-slate-50/50"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    pillar.id === "business" ? "text-blue-700 bg-blue-50" :
                    pillar.id === "software" ? "text-purple-700 bg-purple-50" :
                    "text-emerald-700 bg-emerald-50"
                  }`}>
                    {pillar.number}
                  </span>
                  <Icon className={`size-3.5 ${isSelected ? "text-slate-900" : "text-slate-400"}`} />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-900 line-clamp-1 leading-snug">
                  {pillar.name}
                </div>
                <div className="text-[10px] text-slate-500 line-clamp-1 hidden sm:block">
                  {pillar.subline}
                </div>

                {isSelected && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className={`absolute bottom-0 left-2 right-2 h-0.5 ${pillar.accentBg} rounded-full`}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16 }}
            className="mt-4 space-y-4"
          >
            {/* Metric + Status Ribbon */}
            <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <div>
                <span className="text-[11px] font-medium text-slate-500 block">
                  {current.metricTitle}
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display tracking-tight">
                  {current.metricValue}
                </span>
                <span className="text-[10px] text-slate-500 block">
                  {current.metricSub}
                </span>
              </div>
              <div className="flex flex-col justify-between items-end text-right">
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${current.badgeColor}`}>
                  {current.badge}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  Live Telemetry
                </span>
              </div>
            </div>

            {/* Architecture Items */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block px-1">
                Capability Architecture
              </span>
              {current.components.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 bg-white hover:border-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                    <div>
                      <span className="text-xs font-semibold text-slate-800 block leading-snug">
                        {item.label}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {item.detail}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Technology stack strip */}
            <div className="p-3 rounded-lg bg-slate-900 text-white flex items-center justify-between gap-2 text-xs">
              <div className="space-y-0.5 overflow-hidden">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  Technology Foundation
                </span>
                <p className="text-[11px] text-slate-200 truncate font-mono">
                  {current.stack}
                </p>
              </div>
              <Link
                href={current.link}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-400 hover:text-white shrink-0 ml-2 group"
              >
                <span>Details</span>
                <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Bottom End-to-End Interconnection Bar */}
        <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5 text-[11px]">
            <span className="size-1.5 rounded-full bg-blue-600" />
            <span>Build</span>
            <span className="text-slate-300">→</span>
            <span className="size-1.5 rounded-full bg-purple-600" />
            <span>Software</span>
            <span className="text-slate-300">→</span>
            <span className="size-1.5 rounded-full bg-emerald-600" />
            <span>Operate</span>
            <span className="text-slate-300">→</span>
            <span className="font-semibold text-slate-700">Support</span>
          </div>
          <Link
            href="/how-we-work"
            className="text-[11px] font-semibold text-secondary hover:underline flex items-center gap-1"
          >
            <span>How it works</span>
            <ArrowRight className="size-3" />
          </Link>
        </div>

      </div>
    </div>
  );
}
