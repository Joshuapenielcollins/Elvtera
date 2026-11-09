import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

type Variant = 'primary' | 'ghost' | 'dark' | 'light';
type Size = 'sm' | 'md' | 'lg';

interface BtnProps {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

const variants: Record<Variant, string> = {
  primary: 'btn-gloss-blue text-white',
  ghost: 'btn-gloss-light text-ink',
  dark: 'btn-gloss-dark text-white',
  light: 'bg-white text-ink hover:bg-canvas',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-[13px]',
  md: 'h-11 px-5 text-[14.5px]',
  lg: 'h-[52px] px-6 text-[15.5px]',
};

/** Glossy pill button. Renders a router Link (`to`), an anchor (`href`) or a button. */
export const Btn: React.FC<BtnProps> = ({
  variant = 'primary',
  size = 'md',
  arrow = false,
  to,
  href,
  onClick,
  type = 'button',
  disabled,
  className = '',
  children,
}) => {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] whitespace-nowrap transition-all duration-200 active:scale-[0.98] cursor-pointer disabled:cursor-wait disabled:opacity-70 ${variants[variant]} ${sizes[size]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {inner}
      </Link>
    );
  }
  if (href) {
    const external = href.startsWith('http');
    return (
      <a
        href={href}
        className={cls}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {inner}
      </a>
    );
  }
  return (
    <button type={type} disabled={disabled} className={cls} onClick={onClick}>
      {inner}
    </button>
  );
};
