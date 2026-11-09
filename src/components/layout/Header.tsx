import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems } from '../../data/navigation';
import { caseStudies, resourceArticles } from '../../data/proofData';
import { openBookCall, openPilotApply } from '../../utils/analytics';
import { Btn } from '../kit/Btn';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const items = navItems.filter((item) => {
    if (item.requiresProofData && caseStudies.length === 0) return false;
    if (item.requiresResourceCount && resourceArticles.length < item.requiresResourceCount) return false;
    return true;
  });

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
        <nav
          aria-label="Main"
          className={`pointer-events-auto mx-auto flex h-[58px] max-w-5xl items-center justify-between gap-4 rounded-full bg-paper/80 pl-5 pr-2 ring-1 ring-ink/[0.06] backdrop-blur-xl transition-shadow duration-300 ${
            scrolled || open ? 'shadow-float' : 'shadow-card'
          }`}
        >
          <Link to="/" aria-label="Elvtera home" className="flex shrink-0 items-center">
            <img src="/elvtera-logo.png" alt="Elvtera Business Solutions" className="h-[24px] w-auto" />
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {items.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) =>
                    `rounded-full px-3 py-1.5 text-[13.5px] font-medium transition-colors ${
                      isActive ? 'bg-ink/[0.06] text-ink' : 'text-slate hover:text-ink'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-1.5 lg:flex">
            <Btn variant="ghost" size="sm" onClick={() => openPilotApply()}>
              Apply for pilot
            </Btn>
            <Btn variant="dark" size="sm" arrow onClick={openBookCall}>
              Book a call
            </Btn>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-ink/5 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-auto mx-auto mt-2 max-w-5xl rounded-3xl bg-paper p-3 shadow-float lg:hidden"
            >
              <ul className="flex flex-col">
                {items.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      to={item.href}
                      end={item.href === '/'}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-xl px-3 py-3 text-[17px] font-medium ${
                          isActive ? 'bg-canvas text-ink' : 'text-ink/80'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}

              </ul>
              <div className="mt-2 grid grid-cols-2 gap-2 border-t border-line pt-3">
                <Btn variant="ghost" onClick={() => openPilotApply()}>
                  Apply for pilot
                </Btn>
                <Btn variant="primary" onClick={openBookCall}>
                  Book a call
                </Btn>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile bottom action bar */}
      <div className="fixed inset-x-3 bottom-3 z-40 flex gap-2 rounded-full bg-paper/90 p-1.5 shadow-float ring-1 ring-ink/[0.06] backdrop-blur-xl lg:hidden">
        <Btn variant="ghost" size="sm" className="flex-1" onClick={() => openPilotApply()}>
          Apply for pilot
        </Btn>
        <Btn variant="primary" size="sm" arrow className="flex-1" onClick={openBookCall}>
          Book a call
        </Btn>
      </div>
    </>
  );
};
