import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Calendar, Check, Copy, Mail } from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { intentOptions } from '../data/contactData';
import { CONTACT_EMAIL } from '../data/siteConfig';
import { CalEmbed } from '../components/booking/CalEmbed';
import { sendContactEmail } from '../services/emailService';
import { Btn } from '../components/kit/Btn';
import { Field, Input, Select, Textarea } from '../components/kit/Bits';
import { Hand, Sticky } from '../components/kit/Paper';
import { motion } from 'framer-motion';

const onTheCall = [
  ['Your market', 'We look at your ideal customer, deal size ($5,000+) and how big the market is.'],
  ['Live signals', 'We show you companies showing buying signals in your niche, on screen.'],
  ['Straight answer', "We tell you plainly if outbound is a fit. If it isn't, we say so."],
];

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const intentParam = searchParams.get('intent') || '';
  const tabParam = searchParams.get('tab') || '';

  // 'book' = Cal.com scheduler, 'brief' = written brief form
  const [activeTab, setActiveTab] = useState<'book' | 'brief'>(tabParam === 'brief' || intentParam ? 'brief' : 'book');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      if (matched) setFormData((prev) => ({ ...prev, intent: matched.value }));
    }
  }, [intentParam]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

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

  const set = (k: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData({ ...formData, [k]: e.target.value });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Elvtera Business Solutions',
    url: 'https://elvtera.com/contact',
    mainEntity: { '@type': 'Organization', name: 'Elvtera Business Solutions', email: CONTACT_EMAIL, url: 'https://elvtera.com' },
  };

  return (
    <>
      <SEOHead
        title="Contact Us & Book a Call"
        description="Talk to the Elvtera team. Pick a time for a 30-minute call, or send us a short brief."
        canonicalPath="/contact"
        jsonLd={jsonLd}
      />

      <section className="glow desk-grid relative overflow-hidden pb-16 pt-28 sm:pt-32">
        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-slate"
            >
              <span className="h-px w-6 bg-blue" /> Contact
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="display mt-5 text-[clamp(44px,6vw,76px)]"
            >
              Let's talk about <span className="accent text-blue">your pipeline.</span>
            </motion.h1>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-slate">
              Book a 30-minute call with our team, or send a short brief. We'll look at your offer, your market and the
              buying signals in it.
            </p>

            <Sticky tone="paper" tape="stripe" className="mt-12 -rotate-1 p-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-slate">On the call</div>
              <ol className="mt-4 space-y-4">
                {onTheCall.map(([t, d], i) => (
                  <li key={t} className="flex gap-3.5">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink font-mono text-[11px] text-white">
                      {i + 1}
                    </span>
                    <div>
                      <div className="text-[15px] font-semibold">{t}</div>
                      <p className="mt-0.5 text-[14px] leading-relaxed text-slate">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Sticky>

            <div className="mt-10 space-y-1">
              <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-slate">Or email us</div>
              <div className="flex items-center gap-2">
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-hand text-[30px] text-ink underline decoration-blue decoration-2 underline-offset-4">
                  {CONTACT_EMAIL}
                </a>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  title="Copy email"
                  aria-label="Copy email address"
                  className="grid h-8 w-8 place-items-center rounded-full text-slate hover:bg-paper hover:text-ink"
                >
                  {copiedEmail ? <Check className="h-4 w-4 text-ok" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
              <p className="text-[13.5px] text-slate">Calendar bookings confirm instantly. Briefs get a reply within one business day.</p>
            </div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <Hand arrow="down-right" className="absolute -top-14 right-6 hidden rotate-2 lg:block">
              takes 2 minutes
            </Hand>
            <div className="overflow-hidden rounded-[22px] bg-paper shadow-app">
              <div className="flex gap-1 border-b border-line bg-canvas/70 p-1.5">
                {(
                  [
                    ['book', 'Book a call', Calendar],
                    ['brief', 'Send a brief', Mail],
                  ] as const
                ).map(([key, label, Icon]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveTab(key)}
                    aria-pressed={activeTab === key}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-2xl py-3 text-[14px] font-medium transition-all ${
                      activeTab === key ? 'bg-paper text-ink shadow-card' : 'text-slate hover:text-ink'
                    }`}
                  >
                    <Icon className="h-4 w-4" /> {label}
                  </button>
                ))}
              </div>

              <div className="p-5 sm:p-8">
                {activeTab === 'book' ? (
                  <>
                    <h2 className="display text-[30px]">Pick a time for a 30-minute call</h2>
                    <p className="mt-1 text-[14px] text-slate">On Google Meet. Choose any open slot.</p>
                    <div className="mt-6">
                      <CalEmbed elementId="contact-cal-inline-30min" minHeight="680px" />
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="display text-[30px]">Send us a brief</h2>
                    <p className="mt-1 text-[14px] text-slate">Fields marked * are required.</p>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Full name" required>
                          <Input required type="text" placeholder="Your name" value={formData.name} onChange={set('name')} />
                        </Field>
                        <Field label="Work email" required>
                          <Input required type="email" placeholder="you@company.com" value={formData.email} onChange={set('email')} />
                        </Field>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Company" required>
                          <Input required type="text" placeholder="Company name" value={formData.company} onChange={set('company')} />
                        </Field>
                        <Field label="Phone">
                          <Input type="tel" placeholder="Optional" value={formData.phone} onChange={set('phone')} />
                        </Field>
                      </div>
                      <Field label="What can we help with?" required>
                        <Select value={formData.intent} onChange={set('intent')}>
                          {intentOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </Select>
                      </Field>
                      <Field label="Tell us a little" required>
                        <Textarea
                          required
                          rows={5}
                          placeholder="What you sell, your average deal size, and what you need from us."
                          value={formData.message}
                          onChange={set('message')}
                        />
                      </Field>
                      <Btn type="submit" size="lg" variant="dark" arrow disabled={isSubmitting} className="w-full">
                        {isSubmitting ? 'Sending…' : 'Send brief'}
                      </Btn>
                      <p className="text-center text-[12.5px] text-ash">Read by our team only. We reply within one business day.</p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
