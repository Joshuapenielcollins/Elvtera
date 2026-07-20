"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Animated Hero product visual.
 *
 * Implements smooth spring animations for metrics, charts, and progress bars.
 * Conveys live system feedback and custom engineering.
 */
export function HeroVisual() {
  const bars = [42, 58, 50, 66, 61, 78, 72, 88];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <motion.div 
      aria-hidden="true" 
      className="relative select-none"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Main dashboard card */}
      <div className="rounded-2xl border border-line bg-white p-5 shadow-[0_2px_6px_rgba(15,23,42,0.05),0_24px_60px_-20px_rgba(15,23,42,0.18)]">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-line pb-4">
          <div>
            <p className="text-sm font-bold text-primary">Operations Overview</p>
            <p className="text-xs text-slate-500">Live · All custom subsystems</p>
          </div>
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-slate-200" />
            <span className="size-2.5 rounded-full bg-slate-200" />
            <span className="size-2.5 rounded-full bg-slate-300" />
          </div>
        </div>

        {/* KPI row */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { label: "Orders today", value: "1,284", delta: "+12.4%" },
            { label: "On-time fulfillment", value: "98.2%", delta: "+1.1%" },
            { label: "Open exceptions", value: "3", delta: "−67%" },
          ].map((kpi, idx) => (
            <motion.div 
              key={kpi.label} 
              variants={itemVariants}
              className="rounded-xl bg-surface p-3.5"
            >
              <p className="text-[11px] font-medium text-slate-500">{kpi.label}</p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="mt-1 font-display text-xl font-extrabold text-primary"
              >
                {kpi.value}
              </motion.p>
              <p className="mt-0.5 flex items-center gap-0.5 text-[11px] font-semibold text-emerald-600">
                <ArrowUpRight className="size-3" />
                {kpi.delta}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Revenue bar chart */}
        <div className="mt-4 rounded-xl border border-line p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-primary">
              Weekly throughput
            </p>
            <p className="text-[11px] text-slate-500">Last 8 weeks</p>
          </div>
          <div className="mt-4 flex h-24 items-end gap-2.5">
            {bars.map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{
                  delay: 0.2 + index * 0.08,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className={
                  index === bars.length - 1
                    ? "flex-1 rounded-t-md bg-secondary"
                    : "flex-1 rounded-t-md bg-secondary/20"
                }
              />
            ))}
          </div>
        </div>

        {/* Workflow rows */}
        <div className="mt-4 space-y-2">
          {[
            { label: "Purchase orders auto-approved", meta: "142 today" },
            { label: "Invoices generated & sent", meta: "89 today" },
          ].map((row, idx) => (
            <motion.div
              key={row.label}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 + idx * 0.15, duration: 0.4 }}
              className="flex items-center justify-between rounded-xl bg-surface px-4 py-3"
            >
              <div className="flex items-center gap-2.5">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: idx * 0.5 }}
                >
                  <CheckCircle2 className="size-4 text-emerald-500" />
                </motion.div>
                <p className="text-xs font-medium text-primary">{row.label}</p>
              </div>
              <p className="text-[11px] font-semibold text-slate-500">
                {row.meta}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating accent card - automation summary */}
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
        className="absolute -bottom-12 -left-6 hidden w-56 rounded-2xl border border-line bg-white p-4 shadow-[0_16px_40px_-12px_rgba(15,23,42,0.2)] sm:block"
      >
        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          Automation savings
        </p>
        <p className="mt-1 font-display text-2xl font-extrabold text-primary">
          312 hrs<span className="text-sm font-bold text-slate-400"> / month</span>
        </p>
        <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-surface">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "78%" }}
            transition={{ delay: 1.1, duration: 1.0, ease: "easeOut" }}
            className="h-full rounded-full bg-accent" 
          />
        </div>
        <p className="mt-2 text-[11px] text-slate-500">
          78% of manual workflows automated
        </p>
      </motion.div>
    </motion.div>
  );
}
