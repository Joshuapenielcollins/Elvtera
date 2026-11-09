import React from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Fades each page in on navigation.
 *
 * This is a plain CSS animation keyed on the path. It used to be framer-motion's
 * AnimatePresence (mode="wait"), whose exit step could stall and leave the next
 * page stuck at opacity 0 until a full refresh.
 */
export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="page-in relative w-full">
      {children}
    </div>
  );
};
