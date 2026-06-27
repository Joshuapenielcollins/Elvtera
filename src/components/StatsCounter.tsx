import React, { useEffect, useState, useRef } from 'react';

interface StatsCounterProps {
  value: number;
  suffix?: string;
  duration?: number; // in ms
}

export const StatsCounter: React.FC<StatsCounterProps> = ({ value, suffix = '', duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function outQuad
      const easeProgress = progress * (2 - progress);
      
      setCount(Math.floor(easeProgress * value));
      
      if (progress < 1) {
        window.requestAnimationFrame(animateCount);
      } else {
        setCount(value);
      }
    };
    
    window.requestAnimationFrame(animateCount);
  }, [hasStarted, value, duration]);

  return (
    <span ref={elementRef} className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
      {count}
      {suffix}
    </span>
  );
};
export default StatsCounter;
