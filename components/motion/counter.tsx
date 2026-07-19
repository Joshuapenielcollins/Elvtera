"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  /** Animation duration in milliseconds. */
  duration?: number;
  className?: string;
}

/**
 * Animated number counter for stat bands.
 *
 * Counts up once when scrolled into view. Decimal precision follows the
 * target value (e.g. 99.9 animates with one decimal place). Respects
 * prefers-reduced-motion by rendering the final value immediately.
 */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  duration = 1400,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  const decimals = Number.isInteger(value)
    ? 0
    : (value.toString().split(".")[1]?.length ?? 0);

  useEffect(() => {
    if (!inView || reduceMotion) return;

    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // Ease-out cubic - decelerates naturally as it approaches the target.
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration, reduceMotion]);

  const rendered = reduceMotion ? value : display;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {rendered.toFixed(decimals)}
      {suffix}
    </span>
  );
}
