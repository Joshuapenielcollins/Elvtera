import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, FileText, Globe, Plus, Upload, Users, X, Zap } from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { sendCareerApplication } from '../services/emailService';
import { Btn } from '../components/kit/Btn';
import { CTABand, Dot, Field, Input, PageHero, Select, Textarea } from '../components/kit/Bits';
import { Reveal, SectionHead, SectionLabel, Sticky, Tone } from '../components/kit/Paper';

interface Position {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
}

const POSITIONS: Position[] = [
  {
    id: 'gtm-engineer',
    title: 'GTM Engineer',
    department: 'GTM Engineering & Infrastructure',
    location: 'Remote (US / Europe / Global)',
    type: 'Full-Time',
    overview:
      'Own the technical backbone of our client acquisition engine. You will architect secondary domain fleets, implement SPF/DKIM/DMARC authentication protocols, program custom intent signal ingestion scripts, and connect webhook triggers into client sales pipelines.',
    responsibilities: [
      'Architect, provision, and maintain dedicated secondary domain infrastructures with top 1% inbox deliverability.',
      'Build real-time intent signal scrapers and filters that track hiring shifts, capital raises, and executive appointments.',
      'Configure webhook routing, automated enrichment pipelines, and data hygiene scripts.',
      'Monitor inbox reputation, bounce rates, and spam metrics across multi-channel outreach cohorts.',
    ],
    requirements: [
      '3+ years experience with technical deliverability, DNS architecture (SPF, DKIM, DMARC), and email authentication.',
      'Strong programming skills in TypeScript, Node.js, Python, or serverless functions for data scraping and enrichment.',
      'Deep understanding of B2B data providers, intent signals, and modern API integrations.',
      'Obsessive attention to deliverability standards and technical precision.',
    ],
  },
  {
    id: 'outreach-specialist',
    title: 'Outreach Specialist',
    department: 'Outreach Operations',
    location: 'Remote (Global)',
    type: 'Full-Time',
    overview:
      'Craft and execute high-converting outbound copy sequences. You will analyze target market pain points, write personalized messaging tailored to specific intent triggers, manage multi-channel cadence flows, and qualify positive replies into booked calls.',
    responsibilities: [
      'Write targeted, compelling B2B messaging tailored to verified intent signals and executive personas.',
      'Coordinate multi-channel touchpoint sequences across verified professional channels.',
      'Inspect positive and neutral replies daily, handle objections, and qualify prospects against strict deal thresholds.',
      'Place qualified prospect appointments directly on client calendars with comprehensive background briefing notes.',
    ],
    requirements: [
      '2+ years experience in B2B outbound copywriting, SDR/BDR execution, or account-based marketing.',
      'Proven track record of generating qualified discovery calls with high-ticket B2B decision makers.',
      'Exceptional written communication skills: clear, concise, direct, and zero fluff or generic templates.',
      'Disciplined daily inbox management and objection handling capability.',
    ],
  },
  {
    id: 'automation-engineer',
    title: 'Automation Engineer',
    department: 'Systems & Infrastructure',
    location: 'Remote (Global)',
    type: 'Full-Time',
    overview:
      'Engineer flawless conversion systems. You will build instant speed-to-lead routing (<60s), configure custom pipeline stages, build automated multi-touch sequences, and synchronize calendar booking infrastructures for our clients.',
    responsibilities: [
      'Design, deploy, and maintain automated sales pipeline workspaces and lead handling workflows.',
      'Build speed-to-lead automation that instantly routes inquiries and notifies internal sales teams.',
      'Configure calendar booking synchronization, automated reminder sequences, and deal stage tracking.',
      'Build custom integrations between sales platforms, webhooks, and client reporting dashboards.',
    ],
    requirements: [
      '3+ years experience in sales operations automation, webhook orchestration, and pipeline engineering.',
      'Demonstrated expertise building production workflows in Make, Zapier, n8n, or custom API scripts.',
      'Deep familiarity with platforms like HubSpot, Salesforce, Pipedrive, and modern calendar schedulers.',
      'Strong analytical mindset and ability to audit and optimize sales conversion funnels.',
    ],
  },
];

const principles: { title: string; body: string; tone: Tone }[] = [
  {
    title: 'Precision over volume',
    body: "Small, targeted cohorts backed by real signals, not mass volume. We write code and copy that respects buyers' time.",
    tone: 'butter',
  },
  {
    title: 'Full transparency',
    body: 'Everything is tracked: domain reputation, bounce rates, positive replies and qualification math. No hand-waving.',
    tone: 'sky',
  },
  {
    title: 'Autonomy, with ownership',
    body: 'We work across time zones. You run your own schedule, ship reliable systems and keep colleagues unblocked.',
    tone: 'mint',
  },
];

export const CareersPage: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(POSITIONS[0].id);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: POSITIONS[0].title,
    linkedin: '',
    portfolio: '',
    note: '',
  });

  const set = (k: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData({ ...formData, [k]: e.target.value });

  const handleApply = (pos: Position) => {
    setFormData((prev) => ({ ...prev, role: pos.title }));
    document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const removeFile = () => {
    setResumeFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendCareerApplication({
        name: formData.name,
        email: formData.email,
        role: formData.role,
        // The service has one link field, so LinkedIn travels with the portfolio link.
        portfolio: [formData.linkedin, formData.portfolio].filter(Boolean).join(' | '),
        note: formData.note,
        resumeName: resumeFile?.name,
      });
    } catch (err) {
      console.error('Career application submission error:', err);
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Elvtera Business Solutions',
    url: 'https://elvtera.com',
    jobPosting: POSITIONS.map((pos) => ({
      '@type': 'JobPosting',
      title: pos.title,
      description: pos.overview,
      employmentType: 'FULL_TIME',
      jobLocationType: 'TELECOMMUTE',
    })),
  };

  return (
    <>
      <SEOHead
        title="Careers | GTM, Outreach & Automation Roles"
        description="Join Elvtera. We are hiring GTM Engineers, Outreach Specialists and Automation Engineers. Remote-first, across India and the USA."
        canonicalPath="/careers"
        jsonLd={jsonLd}
      />

      <PageHero
        label={`Careers · ${POSITIONS.length} open roles`}
        title={
          <>
            Build outbound that people <span className="accent text-blue">actually want to read.</span>
          </>
        }
        sub="We don't blast spam. We build signal tracking, clean sending infrastructure and fast follow-up systems for B2B companies. Small team, real ownership."
        actions={
          <Btn size="lg" variant="dark" arrow href="#roles">
            See open roles
          </Btn>
        }
      >
        <div className="relative mx-auto mt-10 flex max-w-6xl flex-wrap gap-x-8 gap-y-3 px-5 text-[14px] text-slate">
          <span className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-blue" /> Remote-first, India &amp; USA
          </span>
          <span className="flex items-center gap-2">
            <Users className="h-4 w-4 text-blue" /> Small, high-ownership teams
          </span>
          <span className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-blue" /> Work that ships to clients
          </span>
        </div>
      </PageHero>

      {/* Principles */}
      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel n="01">How we work</SectionLabel>
          <SectionHead
            className="mt-10"
            title={
              <>
                Three rules <span className="accent text-blue">we hire for.</span>
              </>
            }
          />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <Sticky tone={p.tone} pin className={`h-full p-7 ${['-rotate-1', 'rotate-1', '-rotate-[0.5deg]'][i]}`}>
                  <div className="font-mono text-[11px] text-ink/50">0{i + 1}</div>
                  <h3 className="mt-3 text-[20px] font-semibold tracking-[-0.02em]">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/75">{p.body}</p>
                </Sticky>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section id="roles" className="scroll-mt-24 bg-canvas py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel n="02" note={`${POSITIONS.length} roles`}>
            Open positions
          </SectionLabel>
          <div className="mt-10 space-y-3">
            {POSITIONS.map((pos) => {
              const isOpen = expanded === pos.id;
              return (
                <div key={pos.id} className={`rounded-[22px] bg-paper transition-shadow ${isOpen ? 'shadow-float' : 'shadow-card ring-1 ring-line'}`}>
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : pos.id)}
                    aria-expanded={isOpen}
                    className="flex w-full flex-col gap-4 p-6 text-left sm:flex-row sm:items-center sm:justify-between sm:p-8"
                  >
                    <div>
                      <div className="flex flex-wrap gap-2 text-[11.5px]">
                        <span className="rounded-full bg-blue-tint px-2.5 py-0.5 font-medium text-blue">{pos.department}</span>
                        <span className="rounded-full bg-canvas px-2.5 py-0.5 text-slate">{pos.type}</span>
                        <span className="rounded-full bg-canvas px-2.5 py-0.5 text-slate">{pos.location}</span>
                      </div>
                      <h3 className="display mt-3 text-[clamp(28px,3vw,38px)]">{pos.title}</h3>
                    </div>
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-canvas">
                      <Plus className="h-5 w-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-line px-6 pb-8 pt-6 sm:px-8">
                          <p className="max-w-3xl text-[16px] leading-relaxed text-ink/80">{pos.overview}</p>
                          <div className="mt-8 grid gap-8 md:grid-cols-2">
                            {(
                              [
                                ['What you will do', pos.responsibilities, 'bg-blue'],
                                ['What you bring', pos.requirements, 'bg-ink'],
                              ] as const
                            ).map(([h, list, dot]) => (
                              <div key={h}>
                                <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-slate">{h}</div>
                                <ul className="mt-3 space-y-2.5">
                                  {list.map((r) => (
                                    <li key={r} className="flex gap-3 text-[14.5px] leading-relaxed text-ink/80">
                                      <Dot className={dot} /> {r}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <div className="mt-8">
                            <Btn variant="primary" arrow onClick={() => handleApply(pos)}>
                              Apply for this role
                            </Btn>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application */}
      <section id="apply-form" className="glow scroll-mt-24 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5">
          <SectionLabel n="03">Apply</SectionLabel>
          <div className="mt-10 rounded-[24px] bg-paper p-6 shadow-app sm:p-10">
            <h2 className="display text-[clamp(30px,3.6vw,44px)]">
              Apply for <span className="accent text-blue">{formData.role}</span>
            </h2>
            <p className="mt-2 text-[14.5px] text-slate">We review applications on a rolling basis and reply within 3 business days.</p>

            {formSubmitted ? (
              <div className="mt-8 rounded-2xl bg-ok-tint p-8 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-ok" />
                <h3 className="mt-3 text-[20px] font-semibold">Application received</h3>
                <p className="mx-auto mt-2 max-w-md text-[15px] text-ink/75">
                  Thanks for applying for {formData.role}. We'll review your profile and reach out by email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" required>
                    <Input type="text" required value={formData.name} onChange={set('name')} placeholder="Your name" />
                  </Field>
                  <Field label="Email" required>
                    <Input type="email" required value={formData.email} onChange={set('email')} placeholder="you@example.com" />
                  </Field>
                </div>
                <Field label="Role" required>
                  <Select value={formData.role} onChange={set('role')}>
                    {POSITIONS.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </Select>
                </Field>

                <div>
                  <span className="mb-1.5 block text-[13px] font-medium text-ink">
                    Resume / CV <span className="text-blue">*</span>
                  </span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    required={!resumeFile}
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => e.target.files?.[0] && setResumeFile(e.target.files[0])}
                    className="sr-only"
                    id="resume-file-input"
                  />
                  {!resumeFile ? (
                    <label
                      htmlFor="resume-file-input"
                      className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-line-2 bg-canvas/50 p-7 text-center transition hover:border-blue hover:bg-blue-tint/40"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-paper text-blue shadow-card">
                        <Upload className="h-5 w-5" />
                      </span>
                      <span className="mt-3 text-[14.5px] font-medium">Click to upload</span>
                      <span className="mt-0.5 text-[12.5px] text-ash">PDF, DOCX or DOC, up to 10MB</span>
                    </label>
                  ) : (
                    <div className="flex items-center justify-between rounded-2xl bg-blue-tint p-4">
                      <div className="flex items-center gap-3">
                        <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue text-white">
                          <FileText className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="max-w-xs truncate text-[13.5px] font-medium">{resumeFile.name}</div>
                          <div className="font-mono text-[11px] text-slate">{(resumeFile.size / 1024).toFixed(1)} KB</div>
                        </div>
                      </div>
                      <button type="button" onClick={removeFile} aria-label="Remove file" className="grid h-8 w-8 place-items-center rounded-full text-slate hover:bg-paper hover:text-warn">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="LinkedIn URL" required>
                    <Input type="url" required value={formData.linkedin} onChange={set('linkedin')} placeholder="https://linkedin.com/in/…" />
                  </Field>
                  <Field label="GitHub / portfolio">
                    <Input type="url" value={formData.portfolio} onChange={set('portfolio')} placeholder="https://…" />
                  </Field>
                </div>
                <Field label="The most complex outbound or data system you have built" required>
                  <Textarea
                    rows={4}
                    required
                    value={formData.note}
                    onChange={set('note')}
                    placeholder="Deliverability, intent signals, webhooks, high-ticket outbound…"
                  />
                </Field>
                <Btn type="submit" size="lg" variant="dark" arrow disabled={isSubmitting} className="w-full">
                  {isSubmitting ? 'Sending…' : 'Submit application'}
                </Btn>
              </form>
            )}
          </div>
        </div>
      </section>

      <CTABand
        quote="Not sure which role fits? Write to us anyway."
        title={
          <>
            Build it <span className="accent font-normal text-blue-soft">with us.</span>
          </>
        }
        primary={{ label: 'Apply now', onClick: () => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' }) }}
        secondary={{ label: 'Contact us', to: '/contact' }}
      />
    </>
  );
};
