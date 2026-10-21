import React from 'react';

export const StatsBanner: React.FC = () => {
  const stats = [
    {
      value: '25 – 100',
      label: 'Target Qualified Calls / Mo',
      sublabel: 'Depends on what your team can take up',
    },
    {
      value: '$0',
      label: 'Ad Spend Required',
      sublabel: 'Pure multi-channel outbound',
    },
    {
      value: '100%',
      label: 'Done-For-You Pipeline',
      sublabel: 'Zero client busywork',
    },
    {
      value: 'Top 1%',
      label: 'Deliverability & Tech Stack',
      sublabel: 'Custom infrastructure',
    },
  ];

  return (
    <section className="w-full bg-[#080D1C] py-8 lg:py-12 border-b border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 ambient-glow-dark pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#0d163a] via-[#122055] to-[#0d163a] border border-blue-500/20 p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 items-center divide-y lg:divide-y-0 lg:divide-x divide-white/15">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center text-center ${
                  idx > 1 ? 'pt-6 lg:pt-0' : idx % 2 === 1 ? 'lg:pl-6' : 'lg:pr-6'
                } ${idx > 0 && idx % 2 === 0 ? 'pt-6 lg:pt-0 lg:px-6' : ''}`}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-none">
                  <span className="tabular-nums text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-blue-200">
                    {stat.value}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-2 tracking-wide">
                  {stat.label}
                </div>
                <div className="text-[11px] text-blue-200/70 font-mono mt-0.5">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
