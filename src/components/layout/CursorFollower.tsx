import React, { useEffect, useState } from 'react';

export const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(motionQuery.matches);
    const motionListener = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    motionQuery.addEventListener('change', motionListener);

    // Detect touch-only device
    const touchCheck = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touchCheck);

    if (touchCheck || motionQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      motionQuery.removeEventListener('change', motionListener);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || isReducedMotion || !isVisible) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9990] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div className="w-2.5 h-2.5 bg-[#0546F2] rounded-full" />
    </div>
  );
};
