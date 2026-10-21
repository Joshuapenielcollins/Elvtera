import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SEOHead } from '../components/layout/SEOHead';
import { Button } from '../components/ui/Button';
import { intentOptions } from '../data/contactData';
import { CALENDLY_URL, CONTACT_EMAIL } from '../data/siteConfig';
import { CalEmbed } from '../components/booking/CalEmbed';
import { PatternBackground } from '../components/ui/PatternBackground';
import { sendContactEmail } from '../services/emailService';
import {
  Mail,
  Calendar,
  CheckCircle2,
  Clock,
  Target,
  Radio,
  UserCheck,
  ShieldCheck,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const intentParam = searchParams.get('intent') || '';
  const tabParam = searchParams.get('tab') || '';

  // Mode: 'book' (Cal.com scheduler) vs 'brief' (contact form)
  const [activeTab, setActiveTab] = useState<'book' | 'brief'>(
    tabParam === 'brief' || intentParam ? 'brief' : 'book'
  );
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    intent: intentOptions[0].value,
    message: '',
  });

  useEffect(() => {
    if (intentParam) {
      const matched = intentOptions.find((opt) => opt.value === intentParam);
      if (matched) {
        setFormData((prev) => ({ ...prev, intent: matched.value }));
      }
    }
  }, [intentParam]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendContactEmail(formData);
    } catch (err) {
      console.error('Contact form submission error:', err);
    } finally {
      setIsSubmitting(false);
      navigate('/thank-you', { state: { name: formData.name, email: formData.email } });
    }
  };

  const hookBenefits = [
    {
      icon: Target,
      title: 'Target Market Verification',
      desc: 'We inspect your ideal customer profile, contract values ($5,000+ ACV), and outbound market capacity.',
    },
    {
      icon: Radio,
      title: 'Live Intent Inspection',
      desc: 'See companies showing live buying signals in your specific B2B niche directly on screen.',
    },
    {
      icon: UserCheck,
      title: 'Direct Principal Access',
      desc: 'Consult directly with experienced outbound operators. No junior SDRs or canned slide decks.',
    },
    {
      icon: ShieldCheck,
      title: 'Zero Risk Assessment',
      desc: 'We tell you straightforwardly if outbound is a commercial fit for your business.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Elvtera Business Solutions',
    url: 'https://elvtera.com/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'Elvtera Business Solutions',
      email: CONTACT_EMAIL,
      url: 'https://elvtera.com',
    },
  };

  return (
    <>
      <SEOHead
        title="Contact Us & Book Strategy Call"
        description="Speak directly with the Elvtera team. Pick a time on our live Cal.com calendar for a 30-minute outbound strategy consultation or submit a brief."
        canonicalPath="/contact"
        jsonLd={jsonLd}
      />

      <Breadcrumbs items={[{ label: 'Contact' }]} />

      <section className="relative py-16 lg:py-24 bg-white border-b border-neutral-200 overflow-hidden">
        <PatternBackground variant="light" bokehPositions={['top-left', 'bottom-right']} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Compelling Hook & Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 mb-4 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#0546F2] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B0F19]">
                    Direct Partnership Intake
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-black text-[#0B0F19] tracking-tight leading-tight">
                  Let's inspect your pipeline opportunities.
                </h1>
                <p className="text-base text-neutral-600 mt-4 leading-relaxed">
                  Schedule a 30-minute strategy call with our principal team, or submit an operational brief. We evaluate your offer, market, and buyer intent live.
                </p>
              </div>

              {/* Call Hook Highlights */}
              <div className="p-6 sm:p-7 bg-[#F4F5F7] border border-neutral-200/90 rounded-3xl space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0546F2] block">
                  What happens on the call:
                </span>
                <div className="space-y-4">
                  {hookBenefits.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3.5">
                        <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center shrink-0 mt-0.5 text-[#0546F2] shadow-2xs">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#0B0F19]">
                            {item.title}
                          </h4>
                          <p className="text-xs text-neutral-600 leading-relaxed mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Email & Details */}
              <div className="space-y-4 pt-1">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-neutral-100 text-[#0546F2] flex items-center justify-center shrink-0 mt-0.5 border border-neutral-300 rounded-xl">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                      Direct Principal Email
                    </span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-base font-bold text-[#0B0F19] hover:text-[#0546F2] transition-colors"
                      >
                        {CONTACT_EMAIL}
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1 text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer"
                        title="Copy email to clipboard"
                        type="button"
                      >
                        {copiedEmail ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-neutral-100 text-[#0546F2] flex items-center justify-center shrink-0 mt-0.5 border border-neutral-300 rounded-xl">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                      Response Timeline
                    </span>
                    <span className="text-sm font-semibold text-neutral-800">
                      Immediate calendar confirmation, or within 24 business hours for direct briefs.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Booking & Brief Card */}
            <div className="lg:col-span-7">
              <div className="border border-neutral-200/90 bg-white p-6 sm:p-8 shadow-xl rounded-3xl">
                
                {/* Mode Selector Tabs */}
                <div className="flex items-center gap-2 p-1.5 bg-[#F4F5F7] rounded-2xl mb-6 border border-neutral-200">
                  <button
                    type="button"
                    onClick={() => setActiveTab('book')}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      activeTab === 'book'
                        ? 'bg-white text-[#0546F2] shadow-sm border border-neutral-200/80 font-extrabold'
                        : 'text-neutral-600 hover:text-black hover:bg-white/50'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Strategy Call</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('brief')}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      activeTab === 'brief'
                        ? 'bg-white text-[#0546F2] shadow-sm border border-neutral-200/80 font-extrabold'
                        : 'text-neutral-600 hover:text-black hover:bg-white/50'
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Direct Brief</span>
                  </button>
                </div>

                {/* Tab 1: Live Cal.com Embed */}
                {activeTab === 'book' ? (
                  <div>
                    <div className="border-b border-neutral-100 pb-3 mb-5">
                      <h2 className="text-xl font-black text-[#0B0F19] tracking-tight">
                        Select a time for your 30-min strategy call
                      </h2>
                      <p className="text-xs text-neutral-500 mt-1">
                        Hosted via Google Meet. Pick an open slot directly from our calendar.
                      </p>
                    </div>

                    {/* Cal.com Inline Embed */}
                    <CalEmbed
                      elementId="contact-cal-inline-30min"
                      minHeight="680px"
                    />
                  </div>
                ) : (
                  /* Tab 2: Direct Brief Form */
                  <div>
                    <div className="border-b border-neutral-100 pb-3 mb-6">
                      <h2 className="text-xl font-black text-[#0B0F19] tracking-tight">
                        Send a Direct Brief
                      </h2>
                      <p className="text-xs text-neutral-500 mt-1">
                        All fields marked with an asterisk (*) are required.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#0B0F19] mb-1">
                            Full Name *
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="Marcus Vance"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0546F2]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#0B0F19] mb-1">
                            Work Email *
                          </label>
                          <input
                            required
                            type="email"
                            placeholder="marcus@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0546F2]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#0B0F19] mb-1">
                            Company Name *
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="Apex Logistics"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0546F2]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#0B0F19] mb-1">
                            Phone (Optional)
                          </label>
                          <input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0546F2]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#0B0F19] mb-1">
                          Primary Focus Area *
                        </label>
                        <select
                          value={formData.intent}
                          onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0546F2] bg-white"
                        >
                          {intentOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#0B0F19] mb-1">
                          Brief Message or Current Pipeline Challenge *
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Give us context on your offer, average deal size, and what you need from our acquisition partnership."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0546F2]"
                        />
                      </div>

                      <div className="pt-2">
                        <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
                          Submit Direct Brief
                        </Button>
                      </div>

                      <p className="text-xs text-neutral-500 font-mono text-center">
                        Confidential business intake. Evaluated directly by partnership principals.
                      </p>
                    </form>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
