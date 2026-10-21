import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { PilotModal } from '../modals/PilotModal';
import { CookieBanner } from './CookieBanner';
import { CursorFollower } from './CursorFollower';
import { LogoLoader } from './LogoLoader';
import { PageTransition } from './PageTransition';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const [pilotModalOpen, setPilotModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Global event listener to redirect to pilot application URL from any child button
  useEffect(() => {
    const handleOpenPilot = () => {
      window.location.href = 'https://elvtera-pilot.zite.so';
    };
    window.addEventListener('open-pilot-modal', handleOpenPilot);
    return () => window.removeEventListener('open-pilot-modal', handleOpenPilot);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B0F19] selection:bg-[#0546F2] selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#0546F2] z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Initial load assembler */}
      <LogoLoader />

      {/* Cursor follower (desktop only) */}
      <CursorFollower />

      {/* Main Header */}
      <Header onOpenPilotModal={() => { window.location.href = 'https://elvtera-pilot.zite.so'; }} />

      {/* Page Content with Smooth Transition */}
      <main className="flex-grow pb-16 md:pb-0">
        <PageTransition>{children}</PageTransition>
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Pilot Modal */}
      <PilotModal isOpen={pilotModalOpen} onClose={() => setPilotModalOpen(false)} />

      {/* Cookie Banner */}
      <CookieBanner />
    </div>
  );
};
