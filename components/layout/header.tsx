"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Server, 
  ShieldCheck, 
  Headphones, 
  Code2, 
  ArrowRight,
  Sparkles,
  Lock,
  Workflow,
  Calendar
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<boolean>(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveMega(false);
  };

  const navLinks = [
    { name: "Industries", path: "/industries" },
    { name: "Security & Trust", path: "/security-and-trust" },
    { name: "About", path: "/about" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" onClick={handleLinkClick} className="flex items-center group">
            <img 
              src="/elvtera-logo.png" 
              alt="Elvtera Logo" 
              className="h-9 w-auto max-w-[170px] max-h-9 object-contain shrink-0 transition-transform duration-300 group-hover:scale-102"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMega(true)}
              onMouseLeave={() => setActiveMega(false)}
            >
              <button 
                onClick={() => setActiveMega(!activeMega)}
                className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  pathname.startsWith("/infrastructure") ||
                  pathname.startsWith("/security") ||
                  pathname.startsWith("/customer-support") ||
                  pathname.startsWith("/software-automation") ||
                  pathname === "/solutions"
                    ? "text-secondary bg-secondary/5" 
                    : "text-slate-700 hover:text-secondary hover:bg-slate-100/60"
                }`}
                aria-expanded={activeMega}
              >
                <span>Solutions</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeMega ? "rotate-180 text-secondary" : "text-slate-400"}`} />
              </button>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {activeMega && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-[760px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 z-50 overflow-hidden"
                  >
                    <div className="grid grid-cols-12 gap-6">
                      
                      {/* Vertical 1: Infrastructure, Security & Customer Operations */}
                      <div className="col-span-7 pr-4 border-r border-slate-100">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-[11px] font-bold tracking-wider text-secondary uppercase bg-secondary/10 px-2 py-0.5 rounded">
                            Vertical 01
                          </span>
                          <span className="text-xs font-semibold text-slate-500">
                            Infrastructure, Security & Ops
                          </span>
                        </div>
                        
                        <div className="space-y-2 mt-3">
                          {/* Infrastructure */}
                          <Link
                            href="/infrastructure"
                            onClick={handleLinkClick}
                            className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div className="p-2.5 rounded-lg bg-blue-50 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors shrink-0">
                              <Server className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <h4 className="font-semibold text-sm text-slate-900 group-hover:text-secondary transition-colors">
                                  Infrastructure & Managed IT
                                </h4>
                                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-secondary" />
                              </div>
                              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                Cloud platforms, Linux/Windows servers, databases, networks, and proactive monitoring.
                              </p>
                            </div>
                          </Link>

                          {/* Security */}
                          <Link
                            href="/security"
                            onClick={handleLinkClick}
                            className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                              <ShieldCheck className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <h4 className="font-semibold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors">
                                  Security Operations
                                </h4>
                                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-emerald-700" />
                              </div>
                              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                SIEM log monitoring, IAM, endpoint protection, vulnerability management, and hardening.
                              </p>
                            </div>
                          </Link>

                          {/* Customer & Product Support */}
                          <Link
                            href="/customer-support"
                            onClick={handleLinkClick}
                            className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div className="p-2.5 rounded-lg bg-amber-50 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors shrink-0">
                              <Headphones className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <h4 className="font-semibold text-sm text-slate-900 group-hover:text-amber-700 transition-colors">
                                  Customer & Product Support
                                </h4>
                                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-amber-700" />
                              </div>
                              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                Extend your team with dedicated remote L1/L2 technical support and triage for your software.
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Vertical 2: Custom Software & Automation */}
                      <div className="col-span-5 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-[11px] font-bold tracking-wider text-purple-700 uppercase bg-purple-50 px-2 py-0.5 rounded">
                              Vertical 02
                            </span>
                            <span className="text-xs font-semibold text-slate-500">
                              Software & Automation
                            </span>
                          </div>

                          <Link
                            href="/software-automation"
                            onClick={handleLinkClick}
                            className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div className="p-2.5 rounded-lg bg-purple-50 text-purple-700 group-hover:bg-purple-600 group-hover:text-white transition-colors shrink-0">
                              <Code2 className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <h4 className="font-semibold text-sm text-slate-900 group-hover:text-purple-700 transition-colors">
                                  Custom Software & Automation
                                </h4>
                                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-purple-700" />
                              </div>
                              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                Purpose-built web apps, workflow automations, AI agents, ERP/CRM engines, and integrations.
                              </p>
                            </div>
                          </Link>
                        </div>

                        {/* Bottom highlight box */}
                        <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                          <p className="font-semibold text-slate-800">
                            Build. Operate. Secure. Support.
                          </p>
                          <p className="text-slate-500 mt-1 leading-relaxed text-[11px]">
                            Engineered for businesses requiring dependable, high-uptime tech partnerships.
                          </p>
                          <Link 
                            href="/solutions"
                            onClick={handleLinkClick}
                            className="inline-flex items-center gap-1 text-secondary font-semibold hover:underline mt-2 text-xs"
                          >
                            <span>Explore solutions overview</span>
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>

                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Standard Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={handleLinkClick}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  pathname === link.path
                    ? "text-secondary bg-secondary/5"
                    : "text-slate-700 hover:text-secondary hover:bg-slate-100/60"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/book"
              onClick={handleLinkClick}
              className="bg-secondary hover:bg-secondary/90 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-secondary/15 hover:shadow-lg transition-all duration-200 flex items-center space-x-2 shrink-0 whitespace-nowrap cursor-pointer"
            >
              <Calendar className="h-4 w-4" />
              <span>Book a Call</span>
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-4 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Open menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-200 bg-white lg:hidden overflow-hidden"
          >
            <div className="px-5 py-6 space-y-3">
              <div className="pb-2 border-b border-slate-100">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Solutions & Verticals
                </p>
                <div className="space-y-1">
                  <Link
                    href="/infrastructure"
                    onClick={handleLinkClick}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    <span>Infrastructure & Managed IT</span>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                  </Link>
                  <Link
                    href="/security"
                    onClick={handleLinkClick}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    <span>Security Operations</span>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                  </Link>
                  <Link
                    href="/customer-support"
                    onClick={handleLinkClick}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    <span>Customer & Product Support</span>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                  </Link>
                  <Link
                    href="/software-automation"
                    onClick={handleLinkClick}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    <span>Custom Software & Automation</span>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                  </Link>
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={handleLinkClick}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-3">
                <Link
                  href="/book"
                  onClick={handleLinkClick}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white py-3 rounded-xl font-semibold shadow-md flex items-center justify-center space-x-2 text-sm"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book a Call</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
