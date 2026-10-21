import React, { useState, useEffect } from 'react';
import { RefreshCw, Radio, CheckCircle2, Filter, ShieldCheck, Zap } from 'lucide-react';
import { systemLoopContent } from '../../data/homeData';

interface SignalSource {
  id: string;
  label: string;
  metric: string;
  y: number; // Y position in SVG coordinate space
}

const SIGNAL_SOURCES: SignalSource[] = [
  { id: 'hiring', label: 'Hiring Signals', metric: 'Sales Leadership', y: 65 },
  { id: 'funding', label: 'Capital Triggers', metric: 'Series A / Expansion', y: 135 },
  { id: 'tech', label: 'Tech Stack Shifts', metric: 'Tool Migrations', y: 205 },
  { id: 'leadership', label: 'Executive Moves', metric: 'New Decision Makers', y: 275 },
  { id: 'expansion', label: 'Market Expansion', metric: 'Territory Scaling', y: 345 },
];

export const SystemLoop: React.FC = () => {
  const [activeSignal, setActiveSignal] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSignal((prev) => (prev + 1) % SIGNAL_SOURCES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  // Hub convergence point
  const hubX = 430;
  const hubY = 205;
  const startX = 175;

  return (
    <section className="py-20 lg:py-28 bg-[#080D1C] text-white border-b border-white/10 relative overflow-hidden">
      {/* Background radial ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#0546F2]/15 blur-[140px] pointer-events-none rounded-full" />
      <div 
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-400/20 rounded-full mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
              Continuous Calibration Engine
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-white">
            The system behind it.
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 mt-4 leading-relaxed">
            Multi-channel intent signals are captured in real time, filtered against your strict criteria, and funneled directly into high-converting sales pipelines.
          </p>
        </div>

        {/* Main Interactive Stage: Image 4 Animated Node Canvas */}
        <div className="rounded-3xl border border-white/10 bg-[#0A1024]/80 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl mb-12 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3B82F6]"></span>
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-200">
                Live Intent Stream &rarr; Pipeline Engine
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              <span>Status: Active Multi-Signal Ingestion</span>
            </div>
          </div>

          {/* SVG Animated Canvas Container */}
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="w-full aspect-[16/9] max-h-[500px] min-h-[360px] relative">
              <svg 
                viewBox="0 0 680 410" 
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Glow filter for traveling particles */}
                  <filter id="particleGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Gradient for hub border */}
                  <linearGradient id="hubBorderGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#1D4ED8" />
                    <stop offset="100%" stopColor="#1E3A8A" />
                  </linearGradient>

                  {/* Path gradient for active line */}
                  <linearGradient id="pathGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {/* Draw curved dotted paths from left nodes to hub */}
                {SIGNAL_SOURCES.map((source, index) => {
                  const pathD = `M ${startX} ${source.y} C 290 ${source.y}, 330 ${hubY}, ${hubX} ${hubY}`;
                  const isCurActive = activeSignal === index;

                  return (
                    <g key={source.id}>
                      {/* Base Dotted Curve (Exact Image 4 style) */}
                      <path
                        d={pathD}
                        fill="none"
                        stroke={isCurActive ? 'rgba(96, 165, 250, 0.45)' : 'rgba(255, 255, 255, 0.15)'}
                        strokeWidth={isCurActive ? '2' : '1.5'}
                        strokeDasharray="4 5"
                        className="transition-all duration-500"
                      />

                      {/* Traveling Glowing Particle 1 */}
                      <circle r={isCurActive ? 4.5 : 3} fill="#60A5FA" filter="url(#particleGlow)">
                        <animateMotion
                          dur={`${2.2 + index * 0.25}s`}
                          repeatCount="indefinite"
                          path={pathD}
                          begin={`${index * 0.45}s`}
                        />
                      </circle>

                      {/* Traveling Secondary Echo Particle */}
                      <circle r={2.5} fill="#93C5FD" opacity={0.7} filter="url(#particleGlow)">
                        <animateMotion
                          dur={`${2.2 + index * 0.25}s`}
                          repeatCount="indefinite"
                          path={pathD}
                          begin={`${index * 0.45 + 1.1}s`}
                        />
                      </circle>

                      {/* Connector Dot at Node Exit */}
                      <circle
                        cx={startX}
                        cy={source.y}
                        r={isCurActive ? 5 : 3.5}
                        fill={isCurActive ? '#60A5FA' : '#3B82F6'}
                        className="transition-all duration-300"
                      />
                      {isCurActive && (
                        <circle
                          cx={startX}
                          cy={source.y}
                          r={9}
                          fill="none"
                          stroke="#60A5FA"
                          strokeWidth="1.5"
                          opacity={0.6}
                          className="animate-ping"
                        />
                      )}
                    </g>
                  );
                })}

                {/* Hub Arrival Point Port */}
                <circle cx={hubX} cy={hubY} r={8} fill="#3B82F6" />
                <circle cx={hubX} cy={hubY} r={14} fill="none" stroke="#60A5FA" strokeWidth="2" opacity={0.6} className="animate-pulse" />
                <circle cx={hubX} cy={hubY} r={22} fill="none" stroke="#3B82F6" strokeWidth="1" opacity={0.3} />

                {/* Left Node Cards (Rendered inside SVG) */}
                {SIGNAL_SOURCES.map((source, index) => {
                  const isCurActive = activeSignal === index;
                  return (
                    <g 
                      key={`card-${source.id}`}
                      className="cursor-pointer transition-transform duration-300"
                      onClick={() => setActiveSignal(index)}
                    >
                      <rect
                        x={12}
                        y={source.y - 24}
                        width={155}
                        height={48}
                        rx={14}
                        fill={isCurActive ? '#0E1E47' : '#0B132B'}
                        stroke={isCurActive ? '#3B82F6' : 'rgba(255, 255, 255, 0.12)'}
                        strokeWidth={isCurActive ? 1.5 : 1}
                      />
                      <text
                        x={24}
                        y={source.y - 5}
                        fill={isCurActive ? '#FFFFFF' : '#E2E8F0'}
                        fontSize="11"
                        fontWeight="700"
                        fontFamily="system-ui, sans-serif"
                      >
                        {source.label}
                      </text>
                      <text
                        x={24}
                        y={source.y + 12}
                        fill={isCurActive ? '#93C5FD' : '#64748B'}
                        fontSize="9"
                        fontWeight="600"
                        fontFamily="monospace"
                      >
                        {source.metric}
                      </text>
                    </g>
                  );
                })}

                {/* Right Hub Container (Exact Image 4 style large rounded card) */}
                <g>
                  <rect
                    x={hubX}
                    y={50}
                    width={225}
                    height={310}
                    rx={24}
                    fill="#0D1938"
                    stroke="url(#hubBorderGrad)"
                    strokeWidth={2}
                  />

                  {/* Hub Header Badge */}
                  <rect x={hubX + 16} y={70} width={193} height={32} rx={10} fill="#142654" />
                  <text
                    x={hubX + 28}
                    y={91}
                    fill="#93C5FD"
                    fontSize="10"
                    fontWeight="800"
                    fontFamily="monospace"
                    letterSpacing="1"
                  >
                    ELVTERA ENGINE
                  </text>

                  {/* Hub Body Items */}
                  <text
                    x={hubX + 16}
                    y={130}
                    fill="#FFFFFF"
                    fontSize="14"
                    fontWeight="800"
                    fontFamily="system-ui, sans-serif"
                  >
                    Signal Verification
                  </text>
                  <text
                    x={hubX + 16}
                    y={148}
                    fill="#94A3B8"
                    fontSize="10"
                    fontFamily="system-ui, sans-serif"
                  >
                    Filtering deal size ($5,000+) & authority
                  </text>

                  {/* Processing Step 1 */}
                  <rect x={hubX + 16} y={166} width={193} height={36} rx={10} fill="#112248" stroke="rgba(255,255,255,0.06)" />
                  <circle cx={hubX + 32} cy={184} r={6} fill="#10B981" />
                  <text x={hubX + 46} y={188} fill="#E2E8F0" fontSize="10" fontWeight="600">
                    Decision Maker Identified
                  </text>

                  {/* Processing Step 2 */}
                  <rect x={hubX + 16} y={210} width={193} height={36} rx={10} fill="#112248" stroke="rgba(255,255,255,0.06)" />
                  <circle cx={hubX + 32} cy={228} r={6} fill="#10B981" />
                  <text x={hubX + 46} y={232} fill="#E2E8F0" fontSize="10" fontWeight="600">
                    Multi-Channel Outreach Active
                  </text>

                  {/* Output Result Card */}
                  <rect x={hubX + 16} y={258} width={193} height={78} rx={14} fill="#0546F2" />
                  <text
                    x={hubX + 28}
                    y={282}
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="800"
                    fontFamily="system-ui, sans-serif"
                  >
                    Qualified Call Booked
                  </text>
                  <text
                    x={hubX + 28}
                    y={300}
                    fill="#BFDBFE"
                    fontSize="10"
                    fontFamily="system-ui, sans-serif"
                  >
                    Straight to your calendar
                  </text>
                  <rect x={hubX + 28} y={312} width={169} height={16} rx={8} fill="#1D4ED8" />
                  <text
                    x={hubX + 36}
                    y={323}
                    fill="#E0E7FF"
                    fontSize="8.5"
                    fontWeight="700"
                    fontFamily="monospace"
                  >
                    Paced To Sales Capacity
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Phase Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {systemLoopContent.map((node, idx) => (
            <div
              key={node.title}
              className="p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex flex-col gap-2 mb-3">
                <div>
                  <span className="inline-flex text-[10px] font-mono font-bold text-blue-400 bg-blue-500/15 px-2.5 py-0.5 rounded-full border border-blue-400/25 whitespace-nowrap shrink-0">
                    PHASE 0{idx + 1}
                  </span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 line-clamp-1">
                  {node.subtitle}
                </span>
              </div>
              <h3 className="text-base font-extrabold text-white mb-1.5">
                {node.title}
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {node.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
