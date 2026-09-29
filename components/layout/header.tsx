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
  Code2, 
  Briefcase,
  ArrowRight,
  Sparkles,
  Layers,
  Database,
  Cloud,
  Cpu,
  Workflow,
  Headphones,
  LayoutGrid,
  Lock,
  Globe,
  Gauge
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
    { name: "How We Work", path: "/how-we-work" },
    { name: "About", path: "/about" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" }
  ];

  const businessSolutions = [
    { name: "Websites", href: "/solutions/business-solutions#websites", desc: "Business websites & technical foundation" },
    { name: "GTM Systems", href: "/solutions/business-solutions#gtm", desc: "Go-to-market pipelines & lead routing" },
    { name: "CRM", href: "/solutions/crm-erp", desc: "Process-aligned CRM implementation" },
    { name: "Sales & Marketing Systems", href: "/solutions/business-solutions#sales-marketing", desc: "Lead management & automation" },
    { name: "Business Automation", href: "/solutions/automation-ai", desc: "Workflow streamlining & admin elimination" },
    { name: "Customer Support Systems", href: "/solutions/technical-support", desc: "Helpdesk, ticketing & SLA systems" },
  ];

  const softwareSolutions = [
    { name: "Custom Software", href: "/solutions/custom-software", desc: "Web platforms tailored to your business" },
    { name: "CRM / ERP", href: "/solutions/crm-erp", desc: "Unified operational backbones" },
    { name: "SaaS", href: "/solutions/software-solutions#saas", desc: "Scalable multi-tenant applications" },
    { name: "AI Applications", href: "/solutions/automation-ai", desc: "Contextual AI, agents & voice systems" },
    { name: "Integrations", href: "/solutions/software-solutions#integrations", desc: "API orchestration & system bridges" },
    { name: "Automation", href: "/solutions/automation-ai", desc: "End-to-end automated pipelines" },
  ];

  const itSecuritySolutions = [
    { name: "IT Operations", href: "/solutions/it-operations", desc: "Linux & Windows sysadmin & maintenance" },
    { name: "Cloud & Infrastructure", href: "/solutions/cloud-infrastructure", desc: "AWS, Azure, OCI & Terraform IaC" },
    { name: "Cybersecurity", href: "/solutions/cybersecurity", desc: "SIEM, IAM/MFA, EDR & threat hardening" },
    { name: "Monitoring", href: "/solutions/it-operations#monitoring", desc: "24/7 telemetry, metrics & synthetic probes" },
    { name: "Backup & Recovery", href: "/solutions/cloud-infrastructure#backup", desc: "Immutable backups & disaster recovery" },
    { name: "Technical Support", href: "/solutions/technical-support", desc: "L1/L2 technical support & bug triage" },
  ];

  const isSolutionsActive = pathname.startsWith("/solutions") ||
    pathname.startsWith("/infrastructure") ||
    pathname.startsWith("/security") ||
    pathname.startsWith("/customer-support") ||
    pathname.startsWith("/software-automation");

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
            <Link
              href="/"
              onClick={handleLinkClick}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                pathname === "/"
                  ? "text-secondary bg-secondary/5"
                  : "text-slate-700 hover:text-secondary hover:bg-slate-100/60"
              }`}
            >
              Home
            </Link>

            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMega(true)}
              onMouseLeave={() => setActiveMega(false)}
            >
              <button 
                onClick={() => setActiveMega(!activeMega)}
                className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  isSolutionsActive
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
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-[980px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-6 z-50 overflow-hidden"
                  >
                    {/* Top 3-Pillar Header */}
                    <div className="grid grid-cols-3 gap-6 pb-4 border-b border-slate-100">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                            01
                          </span>
                          <Link 
                            href="/solutions/business-solutions"
                            onClick={handleLinkClick}
                            className="text-xs font-bold text-slate-900 uppercase tracking-wider hover:text-secondary flex items-center gap-1 group"
                          >
                            <span>Business Solutions</span>
                            <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1">
                          Build and scale the systems behind your business.
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                            02
                          </span>
                          <Link 
                            href="/solutions/software-solutions"
                            onClick={handleLinkClick}
                            className="text-xs font-bold text-slate-900 uppercase tracking-wider hover:text-secondary flex items-center gap-1 group"
                          >
                            <span>Software Solutions</span>
                            <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1">
                          Build the technology your business needs.
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                            03
                          </span>
                          <Link 
                            href="/solutions/it-and-security"
                            onClick={handleLinkClick}
                            className="text-xs font-bold text-slate-900 uppercase tracking-wider hover:text-secondary flex items-center gap-1 group"
                          >
                            <span>IT & Security</span>
                            <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1">
                          Keep your technology running, secure, and ready to scale.
                        </p>
                      </div>
                    </div>

                    {/* 3-Column Items Grid */}
                    <div className="grid grid-cols-3 gap-6 pt-4">
                      {/* Column 1: Business Solutions */}
                      <div className="space-y-1">
                        {businessSolutions.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={handleLinkClick}
                            className="group block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold text-slate-800 group-hover:text-secondary transition-colors">
                                {item.name}
                              </span>
                              <ArrowRight className="h-3 w-3 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-secondary" />
                            </div>
                            <span className="text-[11px] text-slate-500 block leading-tight mt-0.5">
                              {item.desc}
                            </span>
                          </Link>
                        ))}
                      </div>

                      {/* Column 2: Software Solutions */}
                      <div className="space-y-1">
                        {softwareSolutions.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={handleLinkClick}
                            className="group block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold text-slate-800 group-hover:text-secondary transition-colors">
                                {item.name}
                              </span>
                              <ArrowRight className="h-3 w-3 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-secondary" />
                            </div>
                            <span className="text-[11px] text-slate-500 block leading-tight mt-0.5">
                              {item.desc}
                            </span>
                          </Link>
                        ))}
                      </div>

                      {/* Column 3: IT & Security */}
                      <div className="space-y-1">
                        {itSecuritySolutions.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={handleLinkClick}
                            className="group block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold text-slate-800 group-hover:text-secondary transition-colors">
                                {item.name}
                              </span>
                              <ArrowRight className="h-3 w-3 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-secondary" />
                            </div>
                            <span className="text-[11px] text-slate-500 block leading-tight mt-0.5">
                              {item.desc}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Bottom strip */}
                    <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between bg-slate-50/70 -mx-6 -mb-6 px-6 py-3 text-xs">
                      <div className="flex items-center gap-2 text-slate-600">
                        <span className="font-semibold text-slate-900">One technology partner:</span>
                        <span className="hidden sm:inline">From build to ongoing operations and support.</span>
                      </div>
                      <Link 
                        href="/solutions"
                        onClick={handleLinkClick}
                        className="inline-flex items-center gap-1.5 font-bold text-secondary hover:underline text-xs"
                      >
                        <span>View All Solutions Overview</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
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
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  pathname === link.path
                    ? "text-secondary bg-secondary/5"
                    : "text-slate-700 hover:text-secondary hover:bg-slate-100/60"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action button - Primary CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="bg-secondary hover:bg-secondary/90 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-secondary/15 hover:shadow-lg transition-all duration-200 flex items-center space-x-2 shrink-0 whitespace-nowrap cursor-pointer"
            >
              <span>Talk to Elvtera</span>
              <ArrowRight className="h-4 w-4" />
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
            <div className="px-5 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <Link
                href="/"
                onClick={handleLinkClick}
                className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Home
              </Link>

              {/* 3 Pillars in Mobile */}
              <div className="pb-3 border-b border-slate-100 space-y-3">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Technology Pillars
                </p>

                {/* Pillar 1 */}
                <div className="pl-2 border-l-2 border-blue-500">
                  <Link
                    href="/solutions/business-solutions"
                    onClick={handleLinkClick}
                    className="flex items-center justify-between text-sm font-bold text-slate-900 py-1"
                  >
                    <span>01 — Business Solutions</span>
                    <ArrowRight className="h-3.5 w-3.5 text-blue-600" />
                  </Link>
                  <p className="text-[11px] text-slate-500 mb-1.5">
                    Build and scale the systems behind your business.
                  </p>
                  <div className="grid grid-cols-2 gap-1 text-xs text-slate-600">
                    <Link href="/solutions/business-solutions#websites" onClick={handleLinkClick} className="py-0.5 hover:text-secondary">Websites</Link>
                    <Link href="/solutions/business-solutions#gtm" onClick={handleLinkClick} className="py-0.5 hover:text-secondary">GTM Systems</Link>
                    <Link href="/solutions/crm-erp" onClick={handleLinkClick} className="py-0.5 hover:text-secondary">CRM Systems</Link>
                    <Link href="/solutions/automation-ai" onClick={handleLinkClick} className="py-0.5 hover:text-secondary">Automation</Link>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="pl-2 border-l-2 border-purple-500">
                  <Link
                    href="/solutions/software-solutions"
                    onClick={handleLinkClick}
                    className="flex items-center justify-between text-sm font-bold text-slate-900 py-1"
                  >
                    <span>02 — Software Solutions</span>
                    <ArrowRight className="h-3.5 w-3.5 text-purple-600" />
                  </Link>
                  <p className="text-[11px] text-slate-500 mb-1.5">
                    Build the technology your business needs.
                  </p>
                  <div className="grid grid-cols-2 gap-1 text-xs text-slate-600">
                    <Link href="/solutions/custom-software" onClick={handleLinkClick} className="py-0.5 hover:text-secondary">Custom Software</Link>
                    <Link href="/solutions/crm-erp" onClick={handleLinkClick} className="py-0.5 hover:text-secondary">CRM / ERP</Link>
                    <Link href="/solutions/automation-ai" onClick={handleLinkClick} className="py-0.5 hover:text-secondary">AI & Agents</Link>
                    <Link href="/solutions/software-solutions#integrations" onClick={handleLinkClick} className="py-0.5 hover:text-secondary">Integrations</Link>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="pl-2 border-l-2 border-emerald-500">
                  <Link
                    href="/solutions/it-and-security"
                    onClick={handleLinkClick}
                    className="flex items-center justify-between text-sm font-bold text-slate-900 py-1"
                  >
                    <span>03 — IT & Security</span>
                    <ArrowRight className="h-3.5 w-3.5 text-emerald-600" />
                  </Link>
                  <p className="text-[11px] text-slate-500 mb-1.5">
                    Keep your technology running, secure, and ready to scale.
                  </p>
                  <div className="grid grid-cols-2 gap-1 text-xs text-slate-600">
                    <Link href="/solutions/it-operations" onClick={handleLinkClick} className="py-0.5 hover:text-secondary">IT Operations</Link>
                    <Link href="/solutions/cloud-infrastructure" onClick={handleLinkClick} className="py-0.5 hover:text-secondary">Cloud & Infra</Link>
                    <Link href="/solutions/cybersecurity" onClick={handleLinkClick} className="py-0.5 hover:text-secondary">Cybersecurity</Link>
                    <Link href="/solutions/technical-support" onClick={handleLinkClick} className="py-0.5 hover:text-secondary">Tech Support</Link>
                  </div>
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
                  href="/contact"
                  onClick={handleLinkClick}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white py-3 rounded-xl font-semibold shadow-md flex items-center justify-center space-x-2 text-sm"
                >
                  <span>Talk to Elvtera</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
