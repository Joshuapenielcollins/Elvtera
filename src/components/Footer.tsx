import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Linkedin, 
  Twitter, 
  Github, 
  MapPin, 
  Send,
  CheckCircle2
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const footerLinks = {
    pillars: [
      { name: 'Business Software', path: '/business-software' },
      { name: 'AI Solutions', path: '/ai' },
      { name: 'Automations', path: '/automations' },
      { name: 'Digital Growth', path: '/digital-marketing' },
      { name: 'Business Consulting', path: '/consulting' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Latest Blog Insights', path: '/blog' },
      { name: 'Contact Sales', path: '/contact' }
    ],
    products: [
      { name: 'Enterprise ERP', path: '/products' },
      { name: 'Sales CRM', path: '/products' },
      { name: 'Retail POS', path: '/products' },
      { name: 'WhatsApp CRM', path: '/products' },
      { name: 'AI Calling Agent', path: '/products' }
    ]
  };

  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-12 border-b border-slate-200">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center">
              <img 
                src="elvtera-logo.png" 
                alt="Elvtera Logo" 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-550 leading-relaxed max-w-sm font-medium">
              Architecting complete digital ecosystems for growing enterprises. Custom business software, AI agents, WhatsApp systems, and consulting.
            </p>
            <p className="text-xs text-slate-450 leading-normal max-w-sm font-semibold">
              Built and operated by Collins Enterprise Solutions LLP.
            </p>
            
            {/* Contact details */}
            <div className="space-y-3.5 pt-2 text-xs font-semibold text-slate-550">
              <div className="flex items-center space-x-2.5">
                <MapPin className="h-4.5 w-4.5 text-brand-blue shrink-0" />
                <span>Tamilnadu India | Florida USA</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="h-4.5 w-4.5 text-brand-blue shrink-0" />
                <span>hello@elvtera.com</span>
              </div>
            </div>
          </div>

          {/* Pillars Column */}
          <div>
            <h3 className="text-slate-900 font-display font-bold text-sm tracking-wider uppercase mb-5">
              Five Pillars
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              {footerLinks.pillars.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path} 
                    className="text-slate-550 hover:text-brand-blue transition-colors"
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
              Solutions
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              {footerLinks.products.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-slate-550 hover:text-brand-blue transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-slate-900 font-display font-bold text-sm tracking-wider uppercase mb-5">
              Resources
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-slate-550 hover:text-brand-blue transition-colors">
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
              Subscribe to our Business Technology Newsletter
            </h4>
            <p className="text-xs text-slate-550 font-medium">
              Get bi-weekly insights on AI Agents, WhatsApp marketing pipelines, and ERP scaling strategies.
            </p>
          </div>

          {/* Subscription Form */}
          <div>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex relative rounded-xl overflow-hidden border border-slate-200 bg-white p-1">
                <input 
                  type="email" 
                  required
                  placeholder="Enter corporate email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-0 focus:outline-none focus:ring-0 text-sm px-3.5 py-2.5 text-slate-800 grow placeholder:text-slate-400"
                />
                <button 
                  type="submit"
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-lg px-4 py-2 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <div className="flex items-center space-x-2 text-brand-success bg-brand-success/5 border border-brand-success/20 px-4 py-3 rounded-xl text-xs font-semibold">
                <CheckCircle2 className="h-4 w-4" />
                <span>Success! Welcome to Elvtera Insights.</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom row: Rights, Links, Socials */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-4 md:space-y-0">
          
          <div className="font-medium">
            © {new Date().getFullYear()} Collins Enterprise Solutions LLP. All rights reserved.
          </div>

          <div className="flex items-center space-x-6 font-semibold">
            <Link to="/privacy-policy" className="hover:text-brand-blue transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-brand-blue transition-colors">Terms of Service</Link>
            <Link to="/sla-agreement" className="hover:text-brand-blue transition-colors">SLA Agreement</Link>
            <Link to="/data-security" className="hover:text-brand-blue transition-colors">Data Security</Link>
          </div>

          {/* Social icons */}
          <div className="flex items-center space-x-4">
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Github" className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors">
              <Github className="h-4 w-4" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};
export default Footer;
