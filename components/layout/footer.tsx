"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  Linkedin, 
  Twitter, 
  MapPin, 
  Send,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  Server,
  Code2,
  Headphones
} from "lucide-react";

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

  const footerNavigation = {
    infrastructure: [
      { name: "Infrastructure & Managed IT", path: "/infrastructure" },
      { name: "Security Operations", path: "/security" },
      { name: "Customer & Product Support", path: "/customer-support" },
      { name: "Cloud & Virtualization", path: "/infrastructure#cloud" },
      { name: "SIEM & Log Monitoring", path: "/security#siem" },
      { name: "L1/L2 Technical Support", path: "/customer-support#tiers" },
    ],
    software: [
      { name: "Custom Software & Automation", path: "/software-automation" },
      { name: "Custom Web Applications", path: "/software-automation#services" },
      { name: "Workflow Automation", path: "/software-automation#automation" },
      { name: "AI Agents & Chatbots", path: "/software-automation#ai" },
      { name: "ERP & CRM Engineering", path: "/software-automation#enterprise" },
      { name: "System Integrations & APIs", path: "/software-automation#integrations" },
    ],
    company: [
      { name: "About Elvtera", path: "/about" },
      { name: "Who We Serve", path: "/industries" },
      { name: "How We Work", path: "/#how-it-works" },
      { name: "Security & Trust", path: "/security-and-trust" },
      { name: "Case Studies", path: "/case-studies" },
      { name: "Resources & Insights", path: "/resources" },
      { name: "Talk to Elvtera", path: "/contact" },
    ],
    trust: [
      { name: "Security Practices", path: "/security-and-trust" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Service Level Agreement (SLA)", path: "/legal/service-level-agreement" },
      { name: "Data Processing Addendum", path: "/legal/data-processing-addendum" },
      { name: "Legal Information", path: "/legal/legal-information" },
    ],
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
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
                Elvtera helps businesses build software, operate infrastructure, secure their technology, and support the products their customers rely on.
              </p>
            </div>

            {/* Core pillars mini badges */}
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-300 pt-1">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/60 border border-slate-800">
                <Code2 className="size-3.5 text-blue-400 shrink-0" />
                <span>BUILD: Software</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/60 border border-slate-800">
                <Server className="size-3.5 text-cyan-400 shrink-0" />
                <span>OPERATE: Infra</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/60 border border-slate-800">
                <ShieldCheck className="size-3.5 text-emerald-400 shrink-0" />
                <span>SECURE: Security</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/60 border border-slate-800">
                <Headphones className="size-3.5 text-amber-400 shrink-0" />
                <span>SUPPORT: Operations</span>
              </div>
            </div>

            {/* Locations */}
            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">United States:</span> 7901 4th St N, Ste 300, St. Petersburg, FL 33702
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">India:</span> Tiruchirappalli, Tamil Nadu, India 621010
                </div>
              </div>
              <div className="flex items-center space-x-2 pt-1">
                <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                <a href="mailto:hello@elvtera.com" className="hover:text-white transition-colors">
                  hello@elvtera.com
                </a>
              </div>
            </div>
          </div>

          {/* Infrastructure Column */}
          <div>
            <h3 className="text-white font-display font-bold text-xs tracking-wider uppercase mb-4">
              Infrastructure & Ops
            </h3>
            <ul className="space-y-2.5 text-xs font-medium">
              {footerNavigation.infrastructure.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.path} 
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Software Column */}
          <div>
            <h3 className="text-white font-display font-bold text-xs tracking-wider uppercase mb-4">
              Software & Automation
            </h3>
            <ul className="space-y-2.5 text-xs font-medium">
              {footerNavigation.software.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.path} className="text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-display font-bold text-xs tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs font-medium">
              {footerNavigation.company.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.path} className="text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Legal */}
          <div>
            <h3 className="text-white font-display font-bold text-xs tracking-wider uppercase mb-4">
              Trust & Legal
            </h3>
            <ul className="space-y-2.5 text-xs font-medium">
              {footerNavigation.trust.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.path} className="text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Middle row: Newsletter & Positioning */}
        <div className="py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center border-b border-slate-800">
          
          <div className="lg:col-span-2 space-y-1">
            <h4 className="text-white font-display font-bold text-base">
              Technology solutions for businesses that need reliable execution.
            </h4>
            <p className="text-xs text-slate-400">
              Receive updates on infrastructure management, cybersecurity best practices, and engineering patterns.
            </p>
          </div>

          {/* Subscription Form */}
          <div>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex relative rounded-xl overflow-hidden border border-slate-700 bg-slate-800/80 p-1">
                <input 
                  type="email" 
                  required
                  placeholder="Enter your work email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-0 focus:outline-none focus:ring-0 text-xs px-3 py-2 text-white grow placeholder:text-slate-500"
                />
                <button 
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-3.5 py-2 flex items-center justify-center transition-colors cursor-pointer disabled:opacity-50 text-xs font-medium"
                >
                  {loading ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Send className="h-3.5 w-3.5" />
                  )}
                </button>
              </form>
            ) : (
              <div className="flex items-center space-x-2 text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3.5 py-2.5 rounded-xl text-xs font-semibold">
                <CheckCircle2 className="h-4 w-4" />
                <span>Thank you! Your email has been registered.</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom row: Rights, Links, Socials */}
        <div className="pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between text-xs text-slate-400 gap-y-4 lg:gap-y-0">
          
          <div className="space-y-1 max-w-xl">
            <p className="font-semibold text-slate-300">
              © {new Date().getFullYear()} Elvtera. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Elvtera operates through Josh Global Brands LLC (USA) and Collins Enterprise Solutions LLP (India).
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/company/elvtera" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Elvtera on LinkedIn" 
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a 
              href="https://twitter.com/elvtera" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Elvtera on Twitter / X" 
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
