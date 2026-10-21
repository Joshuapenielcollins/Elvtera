import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { navItems } from '../../data/navigation';
import { caseStudies, resourceArticles } from '../../data/proofData';
import { CALENDLY_URL } from '../../data/siteConfig';
import { Button } from '../ui/Button';
import { openPilotApply, openBookCall } from '../../utils/analytics';

interface HeaderProps {
  onOpenPilotModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPilotModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setSolutionsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setSolutionsDropdownOpen(false);
    }, 180);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
  }, [location.pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Filter nav items based on strict data rules
  const visibleNavItems = navItems.filter((item) => {
    if (item.requiresProofData && caseStudies.length === 0) return false;
    if (item.requiresResourceCount && resourceArticles.length < item.requiresResourceCount)
      return false;
    return true;
  });

  return (
    <>
      <header className="sticky top-0 z-50 w-full pt-3 lg:pt-4 pb-2 pointer-events-none bg-transparent transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav
            aria-label="Main"
            className={`nav-pill pointer-events-auto flex items-center justify-between rounded-full border border-neutral-200 bg-white px-4 sm:px-5 py-2.5 transition-all duration-300 ${
              isScrolled
                ? 'shadow-[0_12px_36px_rgba(0,0,0,0.08)] py-2 border-neutral-300'
                : 'shadow-[0_6px_24px_rgba(0,0,0,0.04)]'
            }`}
          >
            {/* Logo Left */}
            <Link
              to="/"
              className="flex items-center pl-1 focus:outline-none focus:ring-2 focus:ring-[#0546F2] focus:ring-offset-2 rounded-full"
              aria-label="Elvtera Business Solutions Home"
            >
              <img
                src="/elvtera-logo.png"
                alt="Elvtera Business Solutions"
                className="h-7 sm:h-8 w-auto object-contain transition-all duration-200"
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-1 font-medium text-[13px] text-neutral-700">
              {visibleNavItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <li
                      key={item.label}
                      className="relative"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <button
                        type="button"
                        onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                        className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full transition-all duration-200 hover:text-black hover:bg-neutral-100/80 focus:outline-none ${
                          location.pathname.startsWith(item.href)
                            ? 'text-[#0546F2] bg-blue-50/70 font-semibold'
                            : ''
                        }`}
                        aria-expanded={solutionsDropdownOpen}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            solutionsDropdownOpen ? 'rotate-180 text-[#0546F2]' : 'text-neutral-400'
                          }`}
                        />
                      </button>

                      {/* Solutions Mega Dropdown with seamless hover bridge & solid opaque white background */}
                      {solutionsDropdownOpen && (
                        <div
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-96 z-50"
                          onMouseEnter={handleDropdownEnter}
                          onMouseLeave={handleDropdownLeave}
                        >
                          <div className="w-full bg-white border border-neutral-200 shadow-2xl p-3.5 rounded-2xl overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200">
                            <div className="border-b border-neutral-100 pb-2 mb-2 px-3">
                              <span className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase">
                                Core Capabilities
                              </span>
                            </div>
                            <div className="space-y-1">
                              {item.dropdown.map((sub) => (
                                <Link
                                  key={sub.href}
                                  to={sub.href}
                                  onClick={() => setSolutionsDropdownOpen(false)}
                                  className="group block p-3 hover:bg-[#F4F5F7] transition-all rounded-xl"
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="font-bold text-neutral-900 group-hover:text-[#0546F2] text-sm transition-colors">
                                      {sub.title}
                                    </span>
                                    {sub.badge && (
                                      <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-[#0546F2] px-2 py-0.5 border border-blue-200 rounded-full">
                                        {sub.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                                    {sub.description}
                                  </p>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-3 pt-2.5 border-t border-neutral-100 bg-[#F4F5F7] p-3 flex items-center justify-between rounded-xl">
                              <span className="text-xs font-medium text-neutral-700">Want to test intent?</span>
                              <button
                                onClick={() => {
                                  setSolutionsDropdownOpen(false);
                                  onOpenPilotModal();
                                }}
                                className="text-xs font-bold text-[#0546F2] hover:text-[#0438c7] flex items-center gap-1 transition-colors cursor-pointer"
                              >
                                Apply for a No-Risk Pilot <ArrowRight className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className={`px-3.5 py-1.5 rounded-full transition-all duration-200 hover:text-black hover:bg-neutral-100/80 focus:outline-none ${
                        location.pathname === item.href
                          ? 'text-[#0546F2] bg-blue-50/70 font-semibold'
                          : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Right Action */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                type="button"
                onClick={() => openPilotApply()}
                className="text-xs font-bold tracking-wide text-neutral-700 hover:text-[#0546F2] px-3.5 py-2 rounded-full hover:bg-neutral-100/70 transition-all cursor-pointer"
              >
                Apply for a No-Risk Pilot
              </button>
              <button
                type="button"
                onClick={openBookCall}
                className="btn-glow inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#0546F2] text-white text-xs font-bold tracking-wide hover:bg-[#0438c7] transition-all cursor-pointer"
              >
                <span>Book a Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-800 hover:text-black focus:outline-none rounded-full hover:bg-neutral-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-neutral-900/40 backdrop-blur-sm lg:hidden p-4">
          <div className="bg-white rounded-3xl p-6 shadow-2xl border border-neutral-200 max-h-[calc(100vh-100px)] flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              <div className="border-b border-neutral-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0546F2]">
                  Navigation
                </span>
              </div>
              <div className="space-y-4">
                {visibleNavItems.map((item) => {
                  if (item.dropdown) {
                    return (
                      <div key={item.label} className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                          {item.label}
                        </span>
                        <div className="pl-3 border-l-2 border-[#0546F2] space-y-3">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.href}
                              to={sub.href}
                              className="block font-bold text-sm text-neutral-900 hover:text-[#0546F2]"
                            >
                              <div>{sub.title}</div>
                              <div className="text-xs font-normal text-neutral-500 mt-0.5">
                                {sub.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block text-base font-bold text-neutral-900 hover:text-[#0546F2]"
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-200 space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openPilotApply();
                }}
                className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider border border-neutral-300 text-neutral-800 rounded-full hover:bg-neutral-50 cursor-pointer"
              >
                Apply for a No-Risk Pilot
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookCall();
                }}
                className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider bg-[#0546F2] text-white rounded-full flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
              >
                <span>Book a Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Fixed Bottom CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 p-3 flex gap-2 lg:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
        <button
          type="button"
          onClick={() => openPilotApply()}
          className="flex-1 py-2.5 text-xs font-bold uppercase tracking-wider text-center border border-neutral-300 text-[#0B0F19] hover:bg-neutral-50 rounded-full cursor-pointer"
        >
          Apply for a No-Risk Pilot
        </button>
        <button
          type="button"
          onClick={openBookCall}
          className="flex-1 py-2.5 text-xs font-bold uppercase tracking-wider text-center bg-[#0546F2] text-white flex items-center justify-center gap-1.5 rounded-full shadow-md cursor-pointer"
        >
          <span>Book a Call</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </>
  );
};
