import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Cpu, 
  Layers, 
  Send, 
  TrendingUp, 
  Briefcase,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<boolean>(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveMega(false);
  };

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Industries', path: '/industries' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
  ];

  // Pillars list for the mega menu
  const pillars = [
    {
      title: 'Business Software',
      description: 'End-to-end enterprise solutions to run operations smoothly.',
      icon: Layers,
      color: 'text-blue-600 bg-blue-50',
      path: '/business-software',
      items: [
        { name: 'Enterprise ERP', desc: 'Resource planning for large scales', path: '/business-software/erp-solutions' },
        { name: 'Client CRM', desc: 'Customer lifecycle and pipeline tool', path: '/business-software/crm' },
        { name: 'HRMS & Payroll', desc: 'Automate human resources & payroll', path: '/business-software/hr' },
        { name: 'Warehouse Tracker', desc: 'Point of sale and retail systems', path: '/business-software/inventory' }
      ]
    },
    {
      title: 'AI Solutions',
      description: 'Intelligent digital agents for sales, support, and calls.',
      icon: Cpu,
      color: 'text-teal-600 bg-teal-50',
      path: '/ai',
      items: [
        { name: 'AI Voice Agents', desc: 'Automated high-fidelity outbound calls', path: '/ai/voice-calling-agent' },
        { name: 'AI Sales Agents', desc: 'Conversational lead booking systems', path: '/ai/ai-sales-agent' },
        { name: 'AI Support Desk', desc: 'Instant multilingual customer help', path: '/ai/customer-support-agent' },
        { name: 'AI Knowledge Base', desc: 'Smart enterprise search & discovery', path: '/ai/knowledge-base' }
      ]
    },
    {
      title: 'Automations',
      description: 'Broadcast campaigns and support through official APIs.',
      icon: Send,
      color: 'text-emerald-600 bg-emerald-50',
      path: '/automations',
      items: [
        { name: 'Official API Setup', desc: 'Verified business account setup', path: '/automations/whatsapp-api' },
        { name: 'Campaign Broadcasts', desc: 'Reach customers instantly at scale', path: '/automations/broadcast-campaigns' },
        { name: 'Shared Team Inbox', desc: 'Central sales & support dashboard', path: '/automations/team-inbox' },
        { name: 'Chatbot Funnels', desc: 'Qualify and capture inbound leads', path: '/automations/whatsapp-chatbot' }
      ]
    },
    {
      title: 'Digital Growth',
      description: 'Data-driven marketing and SEO strategy to dominate markets.',
      icon: TrendingUp,
      color: 'text-indigo-600 bg-indigo-50',
      path: '/digital-marketing',
      items: [
        { name: 'Enterprise SEO', desc: 'Rank high for commercial keywords', path: '/digital-marketing/seo' },
        { name: 'Performance Ads', desc: 'Targeted Google & Meta ad campaigns', path: '/digital-marketing/google-ads' },
        { name: 'Content Marketing', desc: 'Thought leadership & copy production', path: '/digital-marketing/content-creation' },
        { name: 'Marketing Automation', desc: 'Lead nurture email sequences', path: '/digital-marketing/email-marketing' }
      ]
    },
    {
      title: 'Business Consulting',
      description: 'Strategic planning and digital transformation roadmaps.',
      icon: Briefcase,
      color: 'text-orange-600 bg-orange-50',
      path: '/consulting',
      items: [
        { name: 'Digital Transformation', desc: 'Modernize legacy business systems', path: '/consulting/digital-transformation' },
        { name: 'Workflow Strategy', desc: 'Automate standard operating procedures', path: '/consulting/automation-strategy' },
        { name: 'IT Strategy & Audits', desc: 'Scale conversion pipelines', path: '/consulting/it-strategy' }
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 glass backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" onClick={handleLinkClick} className="flex items-center group">
            <img 
              src="elvtera-logo.png" 
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
                  location.pathname.startsWith('/business-software') || 
                  location.pathname.startsWith('/ai') || 
                  location.pathname.startsWith('/automations') || 
                  location.pathname.startsWith('/consulting') || 
                  location.pathname.startsWith('/digital-marketing')
                    ? 'text-brand-blue bg-brand-blue/5' 
                    : 'text-slate-700 hover:text-brand-blue hover:bg-slate-100/50'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeMega ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {activeMega && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute left-4 right-4 mx-auto mt-2 w-auto max-w-6xl bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-8 grid grid-cols-5 gap-6 z-50"
                  >
                    {pillars.map((pillar, index) => {
                      const Icon = pillar.icon;
                      return (
                        <div key={index} className="flex flex-col space-y-4">
                          <Link to={pillar.path} onClick={handleLinkClick} className="flex items-start space-x-2.5 hover:opacity-90">
                            <div className={`p-2.5 rounded-lg ${pillar.color} shrink-0`}>
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="text-left">
                              <h4 className="font-display font-bold text-sm text-slate-900">
                                {pillar.title}
                              </h4>
                              <p className="text-xs text-slate-550 mt-1 leading-relaxed">
                                {pillar.description}
                              </p>
                            </div>
                          </Link>
                          
                          <div className="flex flex-col space-y-3.5 pl-10">
                            {pillar.items.map((item, itemIdx) => (
                              <Link 
                                key={itemIdx} 
                                to={item.path}
                                onClick={handleLinkClick}
                                className="group/item block text-left"
                              >
                                <span className="block text-xs font-semibold text-slate-800 group-hover/item:text-brand-blue transition-colors">
                                  {item.name}
                                </span>
                                <span className="block text-[10px] sm:text-xs text-slate-450 group-hover/item:text-slate-500 transition-colors">
                                  {item.desc}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    })}

                    <div className="col-span-5 border-t border-slate-100 pt-4 flex items-center justify-between">
                      <p className="text-xs font-medium text-slate-500">
                        Need a custom enterprise architecture? Let's design a bespoke system.
                      </p>
                      <Link 
                        to="/services" 
                        onClick={handleLinkClick}
                        className="text-xs font-bold text-brand-blue hover:text-brand-teal flex items-center space-x-1"
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
                to={link.path}
                onClick={handleLinkClick}
                className={`px-4 py-2 rounded-lg text-base font-semibold transition-colors ${
                  location.pathname === link.path
                    ? 'text-brand-blue bg-brand-blue/5'
                    : 'text-slate-700 hover:text-brand-blue hover:bg-slate-100/50'
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
              to="/contact"
              onClick={handleLinkClick}
              className="bg-brand-blue hover:bg-brand-blue/90 text-white px-5 py-2.5 rounded-xl text-base font-semibold shadow-md shadow-brand-blue/15 hover:shadow-lg transition-all duration-300 flex items-center space-x-1.5 shrink-0 whitespace-nowrap"
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-slate-100 bg-white overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-6">
              
              <div className="space-y-1.5">
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider px-3">
                  Enterprise Solutions
                </span>
                
                <div className="grid grid-cols-2 gap-3">
                  {pillars.map((pillar, idx) => (
                    <Link
                      key={idx}
                      to={pillar.path}
                      onClick={handleLinkClick}
                      className="flex items-center space-x-2.5 p-3 rounded-xl border border-slate-150 bg-slate-50"
                    >
                      <div className={`p-1.5 rounded-lg ${pillar.color}`}>
                        <pillar.icon className="h-4.5 w-4.5" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">
                        {pillar.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-100 my-4"></div>

              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={handleLinkClick}
                    className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="pt-6">
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white py-3 rounded-xl font-semibold shadow-md shadow-brand-blue/15 flex items-center justify-center space-x-2"
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
};
export default Navbar;
