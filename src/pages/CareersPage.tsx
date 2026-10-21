import React, { useState, useRef } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SEOHead } from '../components/layout/SEOHead';
import { PatternBackground } from '../components/ui/PatternBackground';
import { sendCareerApplication } from '../services/emailService';
import {
  Briefcase,
  MapPin,
  Clock,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Send,
  Zap,
  Globe,
  Users,
  Upload,
  FileText,
  X,
} from 'lucide-react';

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
    title: 'GTM Engineer (Go-To-Market Technical Engineer)',
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
    title: 'Outreach Specialist (Multi-Channel Account Lead)',
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
    title: 'Automation Engineer (Workflow & Sales Systems)',
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

export const CareersPage: React.FC = () => {
  const [expandedPosition, setExpandedPosition] = useState<string | null>('gtm-engineer');
  const [selectedRole, setSelectedRole] = useState<Position | null>(POSITIONS[0]);
  const [formSubmitted, setFormSubmitted] = useState(false);
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

  const handleApply = (pos: Position) => {
    setSelectedRole(pos);
    setFormData((prev) => ({ ...prev, role: pos.title }));
    const formEl = document.getElementById('apply-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setResumeFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendCareerApplication({
        name: formData.name,
        email: formData.email,
        role: formData.role,
        portfolio: formData.portfolio,
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
        title="Careers — Join Elvtera | GTM, Outreach & Automation Engineering"
        description="Join Elvtera. We are hiring GTM Engineers, Outreach Specialists, and Automation Engineers to build the world's most disciplined outbound client acquisition systems."
        canonicalPath="/careers"
        jsonLd={jsonLd}
      />

      <Breadcrumbs items={[{ label: 'Careers' }]} />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-white border-b border-neutral-200 overflow-hidden">
        <PatternBackground variant="light" bokehPositions={['top-right', 'bottom-left']} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0546F2] mb-6 rounded-full shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0546F2] animate-pulse" />
              We Are Hiring • 3 Open Engineering & Operations Roles
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight leading-[1.08] mb-6">
              Build the outbound engines powering high-growth B2B companies.
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed mb-8">
              At Elvtera, we do not blast generic spam. We build precision intent-monitoring systems, custom deliverability infrastructure, and speed-to-lead pipelines that generate verified revenue for high-ticket clients.
            </p>
            <div className="flex flex-wrap gap-6 text-xs font-mono text-neutral-600 pt-4 border-t border-neutral-200">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#0546F2]" />
                <span>100% Remote-First Culture</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#0546F2]" />
                <span>Small, High-Ownership Teams</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#0546F2]" />
                <span>Real Engineering Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="py-16 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
              How we work at Elvtera
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Our principles define who thrives here and how we deliver for our partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white border border-neutral-200 rounded-3xl shadow-xs">
              <div className="w-10 h-10 bg-blue-50 text-[#0546F2] flex items-center justify-center font-bold text-sm mb-4 rounded-xl">
                01
              </div>
              <h3 className="text-base font-black text-black mb-2">
                Precision over volume
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                We believe in small, hyper-targeted cohorts backed by verified intent signals rather than untargeted mass volume. We write code and craft copy that respects buyers' time.
              </p>
            </div>

            <div className="p-8 bg-white border border-neutral-200 rounded-3xl shadow-xs">
              <div className="w-10 h-10 bg-blue-50 text-[#0546F2] flex items-center justify-center font-bold text-sm mb-4 rounded-xl">
                02
              </div>
              <h3 className="text-base font-black text-black mb-2">
                Full technical transparency
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Everything we run is tracked with rigorous data: domain reputation, bounce rates, positive reply rates, and qualification math. No hidden hand-waving.
              </p>
            </div>

            <div className="p-8 bg-white border border-neutral-200 rounded-3xl shadow-xs">
              <div className="w-10 h-10 bg-blue-50 text-[#0546F2] flex items-center justify-center font-bold text-sm mb-4 rounded-xl">
                03
              </div>
              <h3 className="text-base font-black text-black mb-2">
                Autonomy with high accountability
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                We work across time zones. You manage your schedule, ship reliable systems, and keep colleagues unblocked. Results and reliability are what we celebrate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              Open Positions
            </h2>
            <p className="text-neutral-600 mt-2 text-sm sm:text-base">
              Explore our current engineering and operations roles. Click any position to view full technical requirements and apply.
            </p>
          </div>

          <div className="space-y-4">
            {POSITIONS.map((pos) => {
              const isExpanded = expandedPosition === pos.id;
              return (
                <div
                  key={pos.id}
                  className="border border-neutral-200 bg-white transition-all rounded-3xl shadow-xs overflow-hidden"
                >
                  {/* Position Header Banner */}
                  <div
                    onClick={() => setExpandedPosition(isExpanded ? null : pos.id)}
                    className="p-6 sm:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-neutral-50/70 transition-colors"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-50 text-[#0546F2] px-2.5 py-0.5 border border-blue-200 rounded-full">
                          {pos.department}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500 bg-neutral-100 px-2.5 py-0.5 rounded-full">
                          {pos.type}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500 bg-neutral-100 px-2.5 py-0.5 rounded-full">
                          {pos.location}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight">
                        {pos.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleApply(pos);
                        }}
                        className="px-6 py-2.5 bg-[#0546F2] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#0438c7] transition-colors shadow-xs cursor-pointer"
                      >
                        Apply Now
                      </button>
                      <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
                        <ChevronDown
                          className={`w-4 h-4 text-neutral-600 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-black' : ''
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Position Details */}
                  {isExpanded && (
                    <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-neutral-100 space-y-6">
                      <div>
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-2">
                          Role Overview
                        </h4>
                        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                          {pos.overview}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-neutral-100">
                        <div>
                          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-3">
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2.5">
                            {pos.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0546F2] mt-1.5 shrink-0" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-3">
                            Candidate Requirements
                          </h4>
                          <ul className="space-y-2.5">
                            {pos.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4 flex items-center justify-between border-t border-neutral-100">
                        <span className="text-xs font-mono text-neutral-500">
                          Role ID: {pos.id} • Direct Engineering Hiring
                        </span>
                        <button
                          type="button"
                          onClick={() => handleApply(pos)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0546F2] hover:underline"
                        >
                          <span>Proceed to application form</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-neutral-200 p-6 sm:p-10 rounded-3xl shadow-sm">
            <div className="mb-8">
              <div className="inline-block px-3 py-1 bg-blue-50 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0546F2] mb-3 rounded-full">
                Direct Application
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                Apply for {formData.role}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                We review applications on a rolling basis. You will hear back within 3 business days.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-blue-50 border border-[#0546F2] rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#0546F2] mx-auto" />
                <h4 className="text-lg font-black text-black">
                  Application Received
                </h4>
                <p className="text-sm text-neutral-700 max-w-md mx-auto">
                  Thank you for applying for {formData.role}. Our engineering leadership will review your profile and reach out via email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Rivera"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0546F2]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0546F2]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                    Applying For Position *
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0546F2] bg-white"
                  >
                    {POSITIONS.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Resume Upload Box */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                    Resume / CV (PDF, DOC, DOCX) *
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    required={!resumeFile}
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    id="resume-file-input"
                  />
                  {!resumeFile ? (
                    <label
                      htmlFor="resume-file-input"
                      className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-neutral-300 hover:border-[#0546F2] rounded-2xl cursor-pointer bg-neutral-50/50 hover:bg-blue-50/30 transition-all text-center"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0546F2] flex items-center justify-center mb-2">
                        <Upload className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-bold text-black">
                        Click to upload resume
                      </span>
                      <span className="text-xs text-neutral-500 mt-1">
                        PDF, DOCX or DOC (Max 10MB)
                      </span>
                    </label>
                  ) : (
                    <div className="flex items-center justify-between p-4 bg-blue-50/80 border border-blue-200 rounded-2xl">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#0546F2] text-white flex items-center justify-center">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-black truncate max-w-xs">
                            {resumeFile.name}
                          </div>
                          <div className="text-[10px] text-neutral-500 font-mono">
                            {(resumeFile.size / 1024).toFixed(1)} KB
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="p-1.5 hover:bg-white rounded-full text-neutral-500 hover:text-red-600 transition-colors cursor-pointer"
                        title="Remove file"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                      LinkedIn Profile URL *
                    </label>
                    <input
                      type="url"
                      required
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      placeholder="https://linkedin.com/in/alexrivera"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0546F2]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                      GitHub / Portfolio / Project Link
                    </label>
                    <input
                      type="url"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      placeholder="https://github.com/alexrivera"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0546F2]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                    What is the most technically complex outbound or data pipeline system you have built? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    placeholder="Briefly describe your experience with deliverability, intent signals, API webhooks, or high-ticket outbound campaigns..."
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0546F2]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#0546F2] hover:bg-[#0438c7] text-white font-bold text-sm uppercase tracking-wider rounded-full transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
