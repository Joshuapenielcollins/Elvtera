"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in seconds, e.g. index * 0.08 for card grids. */
  delay?: number;
  /** "up" fades in while rising slightly; "none" is a pure fade. */
  direction?: "up" | "none";
}

/**
 * Scroll-reveal wrapper - the site's single animation primitive.
 *
 * A restrained fade-up on first entry into the viewport, disabled entirely
 * for users who prefer reduced motion. Keeping one primitive keeps motion
 * consistent (and subtle) across every page.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: direction === "up" ? 24 : 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
