"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Layers, 
  Send, 
  TrendingUp, 
  Briefcase,
  ArrowRight,
  Cloud
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
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Resources", path: "/resources" },
    { name: "Careers", path: "/careers" }
  ];

  // Pillars list for the mega menu
  const pillars = [
    {
      title: "Business Software",
      description: "Unify finance, inventory, and sales in one system, not fifteen tabs.",
      icon: Layers,
      color: "text-blue-600 bg-blue-50",
      path: "/services/erp-solutions",
      items: [
        { name: "Enterprise ERP", desc: "One system of record for your entire business", path: "/services/erp-solutions" },
        { name: "Sales CRM", desc: "Pipeline dashboards and automatic follow-ups", path: "/services/crm-solutions" },
        { name: "HRMS & Payroll", desc: "Automated attendance, payslips, and compliance", path: "/services/erp-solutions" },
        { name: "Warehouse & Stock", desc: "Live stock counts across every company location", path: "/services/erp-solutions" }
      ]
    },
    {
      title: "Managed Cloud",
      description: "Infrastructure that stays up, stays backed up, and stays yours.",
      icon: Cloud,
      color: "text-teal-600 bg-teal-50",
      path: "/services/managed-cloud",
      items: [
        { name: "Server Hardening", desc: "Provisioning, OS security, and fail2ban rules", path: "/services/managed-cloud" },
        { name: "Docker Hosting", desc: "Deploy ERPNext, CRM, and n8n securely", path: "/services/managed-cloud" },
        { name: "Uptime Monitoring", desc: "Proactive alerts before anyone notices a lag", path: "/services/managed-cloud" },
        { name: "Backup Restores", desc: "Tested offsite backups, not just hope", path: "/services/managed-cloud" }
      ]
    },
    {
      title: "Automations",
      description: "Repetitive tasks, approvals, and reminders running themselves.",
      icon: Send,
      color: "text-emerald-600 bg-emerald-50",
      path: "/services/business-automation",
      items: [
        { name: "Official API Setup", desc: "Meta verification and WhatsApp CRM routing", path: "/services/business-automation" },
        { name: "Campaign Broadcasts", desc: "Segmented messaging with high delivery rates", path: "/services/ai-automation" },
        { name: "Shared Team Inbox", desc: "Multi-agent dashboard synced to customer cards", path: "/services/business-automation" },
        { name: "Workflow n8n Pipelines", desc: "Automated sync between CRM and invoicing", path: "/services/business-automation" }
      ]
    },
    {
      title: "Digital Growth",
      description: "Programmatic SEO and speed optimization to acquire leads.",
      icon: TrendingUp,
      color: "text-indigo-600 bg-indigo-50",
      path: "/services/digital-growth",
      items: [
        { name: "Technical SEO", desc: "LIGHTHOUSE speed scores of 95+ for rankings", path: "/services/digital-growth" },
        { name: "Programmatic SEO", desc: "Scale landing pages for commercial queries", path: "/services/digital-growth" },
        { name: "Conversion Optimization", desc: "Turn anonymous web visits into sales inquiries", path: "/services/website-development" },
        { name: "Paid Traffic Setup", desc: "Track Google and Meta ads ROI down to the rupee", path: "/services/website-development" }
      ]
    },
    {
      title: "Business Consulting",
      description: "Technology blueprints and audits tied to business outcomes.",
      icon: Briefcase,
      color: "text-orange-600 bg-orange-50",
      path: "/services/business-consulting",
      items: [
        { name: "Gap Analysis", desc: "Audit bottlenecks and spreadsheet workarounds", path: "/services/business-consulting" },
        { name: "RFP Blueprint", desc: "Prioritized plans with realistic return timelines", path: "/services/business-consulting" },
        { name: "Security Audits", desc: "Permissions, access levels, and token lifecycles", path: "/services/software-development" }
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" onClick={handleLinkClick} className="flex items-center group">
            <img 
              src="/elvtera-logo.png" 
              alt="Elvtera Logo" 
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            
            {/* Mega Menu Toggle */}
            <div 
              className=""
              onMouseEnter={() => setActiveMega(true)}
              onMouseLeave={() => setActiveMega(false)}
            >
              <button 
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-base font-semibold transition-colors cursor-pointer ${
                  pathname.startsWith("/services/")
                    ? "text-secondary bg-secondary/5" 
                    : "text-slate-700 hover:text-secondary hover:bg-slate-100/50"
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeMega ? "rotate-180" : ""}`} />
              </button>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {activeMega && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-4 right-4 mx-auto mt-2 w-auto max-w-6xl bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-8 grid grid-cols-5 gap-6 z-50"
                  >
                    {pillars.map((pillar, index) => {
                      const Icon = pillar.icon;
                      return (
                        <div key={index} className="flex flex-col space-y-4">
                          <div className="flex items-start space-x-2.5">
                            <div className={`p-2.5 rounded-lg ${pillar.color} shrink-0`}>
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="text-left">
                              <h4 className="font-display font-bold text-sm text-slate-900">
                                {pillar.title}
                              </h4>
                              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                {pillar.description}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex flex-col space-y-1 pl-10">
                            {pillar.items.map((item, itemIdx) => (
                              <Link 
                                key={itemIdx} 
                                href={item.path}
                                onClick={handleLinkClick}
                                className="group/item flex items-start gap-1.5 rounded-lg px-2 py-2 -mx-2 cursor-pointer hover:bg-secondary/5 transition-colors duration-150"
                              >
                                <span className="mt-0.5 size-3 shrink-0 text-slate-300 group-hover/item:text-secondary transition-colors">
                                  <ArrowRight className="size-3" />
                                </span>
                                <span>
                                  <span className="block text-xs font-semibold text-slate-800 group-hover/item:text-secondary transition-colors underline-offset-2 group-hover/item:underline">
                                    {item.name}
                                  </span>
                                  <span className="block text-[10px] text-slate-400 group-hover/item:text-slate-500 transition-colors leading-relaxed">
                                    {item.desc}
                                  </span>
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    })}

                    <div className="col-span-5 border-t border-slate-100 pt-4 flex items-center justify-between">
                      <p className="text-xs font-medium text-slate-500">
                        Need a custom enterprise architecture? Let&apos;s design a bespoke system.
                      </p>
                      <Link 
                        href="/services" 
                        onClick={handleLinkClick}
                        className="text-xs font-bold text-secondary hover:text-secondary/80 flex items-center space-x-1"
                      >
                        <span>View All Services</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Nav links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={handleLinkClick}
                className={`px-4 py-2 rounded-lg text-base font-semibold transition-colors cursor-pointer ${
                  pathname === link.path || (link.path === "/services" && pathname.startsWith("/services/"))
                    ? "text-secondary bg-secondary/5"
                    : "text-slate-700 hover:text-secondary hover:bg-slate-100/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* CTA Button */}
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="bg-secondary hover:bg-secondary/90 text-white px-5 py-2.5 rounded-xl text-base font-semibold shadow-md shadow-secondary/15 hover:shadow-lg transition-all duration-300 flex items-center space-x-1.5 shrink-0 whitespace-nowrap"
            >
              <span>Book Consultation</span>
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
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={handleLinkClick}
                  className="block rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={handleLinkClick}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white py-3 rounded-xl font-semibold shadow-md flex items-center justify-center space-x-2"
                >
                  <span>Book Consultation</span>
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
