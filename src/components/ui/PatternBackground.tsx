import React from 'react';

interface PatternBackgroundProps {
  variant?: 'light' | 'dark';
  bokehPositions?: ('top-right' | 'top-left' | 'center' | 'bottom-right' | 'bottom-left')[];
  className?: string;
  opacity?: string;
}

export const PatternBackground: React.FC<PatternBackgroundProps> = ({
  variant = 'light',
  bokehPositions = ['top-right', 'bottom-left'],
  className = '',
  opacity = variant === 'light' ? 'opacity-65' : 'opacity-40',
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}>
      {/* Dot Grid Matrix */}
      <div
        className={`absolute inset-0 ${
          variant === 'light' ? 'pattern-dot-grid' : 'pattern-dot-grid-dark'
        } ${opacity}`}
      />

      {/* Bokeh Luminous Orbs */}
      {bokehPositions.includes('center') && (
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full blur-[110px] pointer-events-none ${
            variant === 'light' ? 'bg-[#0546F2]/7' : 'bg-[#0546F2]/25'
          }`}
        />
      )}

      {bokehPositions.includes('top-right') && (
        <div
          className={`absolute -top-24 -right-20 w-[420px] h-[420px] rounded-full blur-[90px] pointer-events-none ${
            variant === 'light' ? 'bg-[#0546F2]/8' : 'bg-[#0546F2]/20'
          }`}
        />
      )}

      {bokehPositions.includes('top-left') && (
        <div
          className={`absolute -top-24 -left-20 w-[380px] h-[380px] rounded-full blur-[90px] pointer-events-none ${
            variant === 'light' ? 'bg-sky-400/8' : 'bg-sky-400/15'
          }`}
        />
      )}

      {bokehPositions.includes('bottom-left') && (
        <div
          className={`absolute -bottom-24 -left-20 w-[420px] h-[420px] rounded-full blur-[100px] pointer-events-none ${
            variant === 'light' ? 'bg-[#0546F2]/6' : 'bg-[#0546F2]/20'
          }`}
        />
      )}

      {bokehPositions.includes('bottom-right') && (
        <div
          className={`absolute -bottom-24 -right-20 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none ${
            variant === 'light' ? 'bg-indigo-400/6' : 'bg-indigo-500/18'
          }`}
        />
      )}
    </div>
  );
};
