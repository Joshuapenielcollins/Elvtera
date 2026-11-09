import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';
import { PageTransition } from './PageTransition';
import { openPilotApply } from '../../utils/analytics';

export const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  // Older pages fire this event from their "Apply" buttons.
  useEffect(() => {
    const onOpen = () => openPilotApply();
    window.addEventListener('open-pilot-modal', onOpen);
    return () => window.removeEventListener('open-pilot-modal', onOpen);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <motion.div className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-blue" style={{ scaleX }} />
      <Header />
      {/* Every page starts with its own hero, which leaves room for the floating header. */}
      <main className="flex-grow">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};
