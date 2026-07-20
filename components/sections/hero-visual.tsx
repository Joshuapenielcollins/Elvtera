"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Network, Workflow, Zap, Shield, Sparkles } from "lucide-react";

/**
 * Premium Connected Systems Visualization.
 * Renders an elegant systems mapping representing connectivity, intelligence,
 * and scale, complete with flowing data pulses and glassmorphism cards.
 */
export function HeroVisual() {
  // SVG animated path definitions for data flow
  const paths = [
    "M 70 120 C 120 70, 220 70, 270 120", // Top left to center
    "M 70 280 C 120 330, 220 330, 270 280", // Bottom left to center
    "M 470 120 C 420 70, 320 70, 270 120", // Top right to center
    "M 470 280 C 420 330, 320 330, 270 280", // Bottom right to center
    "M 270 120 Q 270 200, 270 280", // Vertical middle path
  ];

  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center select-none overflow-visible">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-secondary/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* SVG Connected Lines & Pulses */}
      <svg className="absolute inset-0 w-full h-full stroke-slate-200/60" viewBox="0 0 540 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Draw background path lines */}
        {paths.map((p, i) => (
          <path key={`bg-${i}`} d={p} strokeWidth="2" strokeDasharray="4 4" className="stroke-zinc-200/80" />
        ))}

        {/* Animated flow pulses */}
        {paths.map((p, i) => (
          <path
            key={`pulse-${i}`}
            d={p}
            strokeWidth="3"
            strokeLinecap="round"
            className="stroke-secondary"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0 540; 540 0"
              dur={`${4 + i * 1.5}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-dashoffset"
              values="540; 0"
              dur={`${4 + i * 1.5}s`}
              repeatCount="indefinite"
            />
          </path>
        ))}
      </svg>

      {/* Central Core Node (EV Monogram / Intelligent core) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute z-10 w-24 h-24 rounded-full flex items-center justify-center bg-primary border-4 border-white shadow-[0_0_50px_rgba(79,70,229,0.3)]"
      >
        <div className="absolute inset-0.5 rounded-full border border-dashed border-white/20 animate-[spin_20s_linear_infinite]" />
        <div className="text-white text-center font-display font-black tracking-tighter text-2xl flex flex-col justify-center items-center">
          <span className="text-xs text-secondary font-semibold uppercase tracking-widest leading-none mb-1">ELV</span>
          <span className="leading-none text-white tracking-wide">CORE</span>
        </div>
      </motion.div>

      {/* Subsystem Node: AI Agents (Top Left) */}
      <motion.div
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="absolute top-[15%] left-[10%] z-20 flex items-center gap-3 glass-panel px-4 py-3 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer"
      >
        <div className="p-2 rounded-xl bg-violet-500/10 text-violet-600 group-hover:bg-violet-500 group-hover:text-white transition-colors duration-300">
          <Sparkles className="size-5" />
        </div>
        <div className="text-left">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Subsystem 01</p>
          <p className="text-sm font-extrabold text-primary">AI Voice & Agents</p>
        </div>
      </motion.div>

      {/* Subsystem Node: Custom ERP/CRM (Top Right) */}
      <motion.div
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute top-[15%] right-[10%] z-20 flex items-center gap-3 glass-panel px-4 py-3 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer"
      >
        <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
          <Database className="size-5" />
        </div>
        <div className="text-left">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Subsystem 02</p>
          <p className="text-sm font-extrabold text-primary">ERP & CRM Core</p>
        </div>
      </motion.div>

      {/* Subsystem Node: Workflows (Bottom Left) */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute bottom-[15%] left-[10%] z-20 flex items-center gap-3 glass-panel px-4 py-3 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer"
      >
        <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
          <Workflow className="size-5" />
        </div>
        <div className="text-left">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Subsystem 03</p>
          <p className="text-sm font-extrabold text-primary">Automations</p>
        </div>
      </motion.div>

      {/* Subsystem Node: Infrastructure (Bottom Right) */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-[15%] right-[10%] z-20 flex items-center gap-3 glass-panel px-4 py-3 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer"
      >
        <div className="p-2 rounded-xl bg-rose-500/10 text-rose-600 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
          <Cpu className="size-5" />
        </div>
        <div className="text-left">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Subsystem 04</p>
          <p className="text-sm font-extrabold text-primary">Cloud Infrastructure</p>
        </div>
      </motion.div>

      {/* Overlay: Telemetry / Stat Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="absolute bottom-[2%] mx-auto w-64 glass-panel border border-slate-200/80 px-5 py-4 rounded-2xl shadow-[0_15px_30px_rgba(9,9,11,0.08)] text-center flex items-center justify-between z-30"
      >
        <div className="flex items-center gap-3">
          <span className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
          </span>
          <div className="text-left">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Live System Sync</p>
            <p className="text-xs font-bold text-primary">99.98% Uptime Verified</p>
          </div>
        </div>
        <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
          <Shield className="size-4" />
        </div>
      </motion.div>
    </div>
  );
}
