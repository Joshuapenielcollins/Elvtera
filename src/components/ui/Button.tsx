import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  showArrow = true,
  children,
  className = '',
  href,
  target,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs uppercase tracking-wider font-bold',
    md: 'px-6 py-3.5 text-sm uppercase tracking-wider font-bold',
    lg: 'px-8 py-4 text-base uppercase tracking-wider font-bold',
  }[size];

  const variantClasses = {
    primary:
      'bg-[#0546F2] text-white border border-[#0546F2] hover:bg-[#0437be] active:bg-[#032a93]',
    secondary:
      'bg-transparent text-[#0B0F19] border border-[#0B0F19] btn-brand-fill hover:text-white hover:border-[#0546F2]',
    outline:
      'bg-transparent text-[#0546F2] border border-[#0546F2] btn-brand-fill hover:text-white',
    dark:
      'bg-[#0B0F19] text-white border border-[#0B0F19] btn-brand-fill hover:border-[#0546F2]',
  }[variant];

  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2.5 transition-transform duration-200">
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </span>
  );

  const combinedClasses = `group inline-flex items-center justify-center transition-all duration-200 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0546F2] focus:ring-offset-2 ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
