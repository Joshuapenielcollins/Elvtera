import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button system (shadcn-style, cva-driven).
 *
 * Renders a Next.js <Link> when `href` is provided, otherwise a <button>.
 * Variants are intentionally few - a disciplined palette keeps the site
 * feeling enterprise rather than startup.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        /** Deep slate - the primary call to action. */
        primary:
          "bg-primary text-white shadow-sm hover:bg-primary-soft hover:shadow-md",
        /** Action blue - secondary emphasis. */
        secondary: "bg-secondary text-white shadow-sm hover:bg-blue-700",
        /** Quiet outline for supporting actions. */
        outline:
          "border border-line bg-white text-primary hover:border-primary/30 hover:bg-surface",
        /** Text-only, used inline and in dense areas. */
        ghost: "text-secondary hover:bg-secondary-soft",
        /** White-on-dark, for CTA bands and the footer. */
        inverse: "bg-white text-primary shadow-sm hover:bg-slate-100",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants> & {
  href?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function Button({
  href,
  variant,
  size,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export { buttonVariants };
