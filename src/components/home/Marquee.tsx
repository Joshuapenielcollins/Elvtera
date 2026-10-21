import React from 'react';
import { 
  Briefcase, 
  Megaphone, 
  Cpu, 
  Stethoscope, 
  Server, 
  ShoppingBag, 
  TrendingUp, 
  Users, 
  GraduationCap, 
  Factory 
} from 'lucide-react';

interface SectorItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const SECTOR_DATA: SectorItem[] = [
  { name: 'Agencies', icon: Megaphone, tag: 'High Retainer' },
  { name: 'IT Services', icon: Server, tag: 'Contract Pipeline' },
  { name: 'Consultancies', icon: Briefcase, tag: 'Executive Reach' },
  { name: 'Recruitment', icon: Users, tag: 'Placement Deals' },
  { name: 'SaaS', icon: Cpu, tag: 'Enterprise Demos' },
  { name: 'Training Companies', icon: GraduationCap, tag: 'Corporate Cohorts' },
  { name: 'Manufacturers', icon: Factory, tag: 'Supply Contracts' },
  { name: 'Finance Firms', icon: TrendingUp, tag: 'Capital Clients' },
  { name: 'Healthcare', icon: Stethoscope, tag: 'Clinic Networks' },
  { name: 'E-commerce', icon: ShoppingBag, tag: 'B2B Wholesale' },
];

export const Marquee: React.FC = () => {
  const rowOne = [...SECTOR_DATA, ...SECTOR_DATA, ...SECTOR_DATA];
  const rowTwo = [
    ...SECTOR_DATA.slice().reverse(),
    ...SECTOR_DATA.slice().reverse(),
    ...SECTOR_DATA.slice().reverse(),
  ];

  return (
    <section className="border-b border-neutral-200/90 bg-[#F8FAFC] py-10 overflow-hidden select-none relative">
      {/* Background subtle dots */}
      <div 
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(5, 70, 242, 0.12) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0546F2] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0546F2]"></span>
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-600">
              Active Outbound Infrastructure
            </span>
          </div>
          <span className="text-[11px] font-mono text-neutral-500 font-medium">
            Engineered across 10 specialized B2B verticals
          </span>
        </div>
      </div>

      <div className="relative overflow-hidden py-1">
        {/* Left and right gradient fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Leftward flow */}
        <div className="flex w-max space-x-3.5 mb-3.5 animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused]">
          {rowOne.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={`r1-${i}`}
                className="group flex items-center gap-3 px-4 py-2.5 bg-white/95 backdrop-blur-md border border-neutral-200/90 rounded-2xl text-xs font-bold text-[#0B0F19] tracking-wide shadow-xs hover:border-[#0546F2]/50 hover:shadow-md transition-all duration-200 cursor-default"
              >
                <div className="w-7 h-7 rounded-xl bg-blue-50 flex items-center justify-center text-[#0546F2] group-hover:bg-[#0546F2] group-hover:text-white transition-colors duration-200">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span>{item.name}</span>
                <span className="text-[10px] font-mono font-semibold text-neutral-400 bg-neutral-100 group-hover:text-blue-600 group-hover:bg-blue-50 px-2 py-0.5 rounded-full transition-colors duration-200">
                  {item.tag}
                </span>
              </div>
            );
          })}
        </div>

        {/* Row 2: Rightward flow */}
        <div className="flex w-max space-x-3.5 -translate-x-1/2 animate-[marquee-reverse_45s_linear_infinite] hover:[animation-play-state:paused]">
          {rowTwo.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={`r2-${i}`}
                className="group flex items-center gap-3 px-4 py-2.5 bg-white/95 backdrop-blur-md border border-neutral-200/90 rounded-2xl text-xs font-bold text-[#0B0F19] tracking-wide shadow-xs hover:border-[#0546F2]/50 hover:shadow-md transition-all duration-200 cursor-default"
              >
                <div className="w-7 h-7 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-700 group-hover:bg-[#0546F2] group-hover:text-white transition-colors duration-200">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span>{item.name}</span>
                <span className="text-[10px] font-mono font-semibold text-neutral-400 bg-neutral-100 group-hover:text-blue-600 group-hover:bg-blue-50 px-2 py-0.5 rounded-full transition-colors duration-200">
                  {item.tag}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[marquee_45s_linear_infinite\\],
          .animate-\\[marquee-reverse_45s_linear_infinite\\] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};
