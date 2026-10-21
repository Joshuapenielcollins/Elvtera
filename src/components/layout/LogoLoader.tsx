import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LogoLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const duration = mediaQuery.matches ? 300 : 900;

    const timer = setTimeout(() => {
      setLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="logo-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          <div className="relative flex flex-col items-center">
            {/* The blue mark assembling from geometric blocks */}
            <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
              {/* Stem block */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-1 top-1 bottom-1 w-6 bg-[#0546F2] rounded-bl-xl"
              />
              {/* Upper diagonal wing block */}
              <motion.div
                initial={{ x: 20, y: -20, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute right-1 top-1 w-9 h-9 bg-[#0546F2] rotate-45 origin-bottom-left"
              />
              {/* Lower horizontal wing block */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute right-1 bottom-1 w-11 h-6 bg-[#0546F2]"
              />
            </div>

            {/* Assembled official logo reveal */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.35 }}
              className="flex items-center"
            >
              <img
                src="/elvtera-logo.png"
                alt="Elvtera"
                className="h-8 w-auto object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
