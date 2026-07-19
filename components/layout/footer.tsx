"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  Linkedin, 
  Twitter, 
  MapPin, 
  Send,
  CheckCircle2
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const footerLinks = {
    pillars: [
      { name: "Business Software", path: "/services/erp-solutions" },
      { name: "Managed Cloud", path: "/services/managed-cloud" },
      { name: "Automations", path: "/services/business-automation" },
      { name: "Digital Growth", path: "/services/digital-growth" },
      { name: "Business Consulting", path: "/services/business-consulting" }
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Case Studies", path: "/case-studies" },
      { name: "Resources & Blog", path: "/resources" },
      { name: "Careers", path: "/careers" },
      { name: "Contact Us", path: "/contact" }
    ],
    products: [
      { name: "Custom ERP Systems", path: "/services/erp-solutions" },
      { name: "Custom CRM Portals", path: "/services/crm-solutions" },
      { name: "AI Voice & Chat Agents", path: "/services/ai-automation" },
      { name: "WhatsApp Automation", path: "/services/business-automation" },
      { name: "Web & SaaS Platforms", path: "/services/website-development" }
    ]
  };

  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-12 border-b border-slate-200">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center">
              <img 
                src="/elvtera-logo.png" 
                alt="Elvtera Logo" 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <div className="space-y-2">
              <p className="text-base text-slate-900 leading-snug max-w-sm font-bold tracking-tight">
                AI-Powered Systems.
                <br />
                <span className="text-secondary">Built Around Your Business.</span>
              </p>
              <p className="text-xs text-slate-500 leading-relaxed max-w-sm font-medium">
                Engineering business systems that scale. We build central systems for growing businesses, bringing sales, inventory, accounting and workflows together.
              </p>
            </div>
            {/* Contact details */}
            <div className="space-y-3.5 pt-2 text-xs font-semibold text-slate-500">
              <div className="flex items-center space-x-2.5">
                <MapPin className="h-4.5 w-4.5 text-secondary shrink-0" />
                <span>Tamilnadu India | Florida USA</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="h-4.5 w-4.5 text-secondary shrink-0" />
                <span>hello@elvtera.com</span>
              </div>
            </div>
          </div>

          {/* Pillars Column */}
          <div>
            <h3 className="text-slate-900 font-display font-bold text-sm tracking-wider uppercase mb-5">
              What We Do
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              {footerLinks.pillars.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.path} 
                    className="text-slate-500 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-slate-900 font-display font-bold text-sm tracking-wider uppercase mb-5">
              Our Systems
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              {footerLinks.products.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.path} className="text-slate-500 hover:text-secondary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-slate-900 font-display font-bold text-sm tracking-wider uppercase mb-5">
              Company
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.path} className="text-slate-500 hover:text-secondary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Middle row: Newsletter & Socials */}
        <div className="py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center border-b border-slate-200">
          
          <div className="lg:col-span-2 space-y-2">
            <h4 className="text-slate-900 font-display font-bold text-lg">
              Stay in touch
            </h4>
            <p className="text-xs text-slate-500 font-medium">
              Sign up to get occasional business tips and updates from our team.
            </p>
          </div>

          {/* Subscription Form */}
          <div>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex relative rounded-xl overflow-hidden border border-slate-200 bg-white p-1">
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-0 focus:outline-none focus:ring-0 text-sm px-3.5 py-2.5 text-slate-800 grow placeholder:text-slate-400"
                />
                <button 
                  type="submit"
                  className="bg-secondary hover:bg-secondary/90 text-white rounded-lg px-4 py-2 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <div className="flex items-center space-x-2 text-emerald-600 bg-emerald-50 border border-emerald-500/20 px-4 py-3 rounded-xl text-xs font-semibold">
                <CheckCircle2 className="h-4 w-4" />
                <span>Thank you! You are now subscribed.</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom row: Rights, Links, Socials */}
        <div className="pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between text-xs text-slate-500 gap-y-6 lg:gap-y-0">
          
          <div className="space-y-1 max-w-lg">
            <p className="font-semibold text-slate-800">
              © 2026 Elvtera. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-400 leading-relaxed font-semibold">
              Elvtera is operated by Collins Enterprise Solutions LLP (India) and Josh Global Brands LLC (USA).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-semibold">
            <Link href="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link>
            <Link href="/legal/cookie-policy" className="hover:text-secondary transition-colors">Cookie Policy</Link>
            <Link href="/legal/service-level-agreement" className="hover:text-secondary transition-colors">SLA</Link>
            <Link href="/legal/legal-information" className="hover:text-secondary transition-colors">Legal Info</Link>
          </div>

          {/* Social icons */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/company/elvtera" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Elvtera on LinkedIn" 
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a 
              href="https://twitter.com/elvtera" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Elvtera on Twitter / X" 
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
