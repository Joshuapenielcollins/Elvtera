import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { footerNavigation } from '../../data/navigation';
import { CONTACT_EMAIL, siteConfig } from '../../data/siteConfig';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      console.log('Newsletter signup:', newsletterEmail);
      setNewsletterSubscribed(true);
    }
  };

  return (
    <footer className="bg-white border-t border-neutral-200 pt-16 pb-24 lg:pb-16 text-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-neutral-200">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/elvtera-logo.png"
                alt="Elvtera Business Solutions"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-neutral-600 max-w-sm leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider font-bold text-neutral-400 block mb-1">
                Direct Contact
              </span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm font-semibold text-[#0B0F19] hover:text-[#0546F2] transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B0F19] mb-4">
              Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNavigation.solutions.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-neutral-600 hover:text-[#0546F2] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B0F19] mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNavigation.company.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-neutral-600 hover:text-[#0546F2] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B0F19] mb-4">
              Market Intelligence
            </h3>
            <p className="text-xs text-neutral-500 mb-3 leading-relaxed">
              Brief monthly operator notes on outbound signal filters and B2B pipeline conversion.
            </p>
            {!newsletterSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full pl-4 pr-12 py-2.5 text-xs border border-neutral-300 rounded-full focus:outline-none focus:border-[#0546F2] bg-white shadow-xs"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#0546F2] text-white flex items-center justify-center hover:bg-[#0437be] transition-colors rounded-full shadow-xs"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 p-2.5 border border-emerald-200 rounded-xl">
                <Check className="w-4 h-4" />
                <span>Added to operator briefings.</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            {footerNavigation.legal.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="hover:text-[#0546F2] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
