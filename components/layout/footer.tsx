"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  MapPin, 
  Send,
  CheckCircle2,
  Loader2,
  ShieldCheck, 
  Server, 
  Code2, 
  Briefcase,
  Headphones,
  ArrowRight
} from "lucide-react";
import { site, legalNav } from "@/lib/site";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && !loading) {
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append("type", "newsletter");
        formData.append("email", email.trim());

        const response = await fetch("/api/contact", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          setSubscribed(true);
          setEmail("");
          setTimeout(() => setSubscribed(false), 5000);
        }
      } catch (error) {
        console.error("Subscription failed:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const solutionLinks = [
    { name: "Business Solutions", path: "/solutions/business-solutions" },
    { name: "Software Solutions", path: "/solutions/software-solutions" },
    { name: "IT & Security", path: "/solutions/it-and-security" },
    { name: "IT Operations", path: "/solutions/it-operations" },
    { name: "Cybersecurity", path: "/solutions/cybersecurity" },
    { name: "Technical Support", path: "/solutions/technical-support" },
  ];

  const companyLinks = [
    { name: "About", path: "/about" },
    { name: "How We Work", path: "/how-we-work" },
    { name: "Industries", path: "/industries" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  const capabilityLinks = [
    { name: "Cloud & Infrastructure", path: "/solutions/cloud-infrastructure" },
    { name: "Custom Software", path: "/solutions/custom-software" },
    { name: "CRM & ERP Development", path: "/solutions/crm-erp" },
    { name: "Automation & AI", path: "/solutions/automation-ai" },
    { name: "Security & Trust", path: "/security-and-trust" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center">
              <img 
                src="/elvtera-logo.png" 
                alt="Elvtera Logo" 
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </Link>
            
            <div className="space-y-3">
              <p className="text-xl text-white font-extrabold tracking-tight font-display">
                Build. Operate. Secure. Support.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Elvtera helps businesses build digital systems, develop software, operate IT, and secure the technology they depend on.
              </p>
            </div>

            {/* Three balanced pillars mini badge */}
            <div className="grid grid-cols-3 gap-2 text-[11px] font-medium text-slate-300 pt-1">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <span className="text-blue-400 block font-mono font-bold text-[10px]">01</span>
                <span>Business</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <span className="text-purple-400 block font-mono font-bold text-[10px]">02</span>
                <span>Software</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <span className="text-emerald-400 block font-mono font-bold text-[10px]">03</span>
                <span>IT & Sec</span>
              </div>
            </div>

            {/* Verified Locations & Email */}
            <div className="space-y-2.5 pt-2 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">United States:</span> 7901 4th St N, Ste 300, St. Petersburg, FL 33702
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">India:</span> 1508C Devangar Nagar, Turaiyur, Tamil Nadu 621010
                </div>
              </div>
              <div className="flex items-center space-x-2 pt-1">
                <Mail className="h-4 w-4 text-secondary shrink-0" />
                <a href="mailto:hello@elvtera.com" className="hover:text-white transition-colors">
                  hello@elvtera.com
                </a>
              </div>
            </div>
          </div>

          {/* Solutions Column (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-display font-bold text-xs tracking-wider uppercase mb-4">
              Solutions
            </h3>
            <ul className="space-y-2.5 text-xs font-medium">
              {solutionLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path} 
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 text-secondary transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities & Specialties (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-display font-bold text-xs tracking-wider uppercase mb-4">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-xs font-medium">
              {capabilityLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h3 className="text-white font-display font-bold text-xs tracking-wider uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-2.5 text-xs font-medium">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.path} className="text-slate-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">
                Stay Updated
              </span>
              <p className="text-[11px] text-slate-400 mb-3">
                Practical insights on engineering, infrastructure, and business technology.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs rounded-lg px-3 py-2 w-full focus:outline-none focus:border-secondary"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-secondary text-white px-3 py-2 rounded-lg text-xs font-semibold hover:bg-secondary/90 transition-colors shrink-0 disabled:opacity-50"
                  >
                    {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Send className="h-3.5 w-3.5" />}
                  </button>
                </div>
                {subscribed && (
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Subscribed successfully.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Strip: Legal & Copyright */}
        <div className="mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Elvtera (Josh Global Brands LLC / Collins Enterprise Solutions LLP). All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {legalNav.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-slate-300 transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
