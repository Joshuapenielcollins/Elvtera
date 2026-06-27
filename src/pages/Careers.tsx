import React, { useState } from 'react';
import { 
  MapPin, 
  DollarSign, 
  CheckCircle2, 
  ArrowRight,
  X,
  UploadCloud,
  CheckCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  requirements: string[];
}

export const Careers: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState('All');
  const [applyingJob, setApplyingJob] = useState<Job | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const departments = ["All", "Engineering", "Sales & Success", "Consulting & Strategy"];

  const jobsList: Job[] = [
    {
      id: 1,
      title: "Senior React & TypeScript Developer",
      department: "Engineering",
      location: "Remote (US / Europe)",
      type: "Full-Time",
      salary: "$120K - $160K",
      requirements: ["5+ years React/TypeScript experience", "Strong Tailwind and Framer Motion layout expertise", "Experience building complex dashboard routers", "Familiarity with DB schemas"]
    },
    {
      id: 2,
      title: "AI Integration Architect",
      department: "Engineering",
      location: "San Francisco, CA (Hybrid)",
      type: "Full-Time",
      salary: "$140K - $180K",
      requirements: ["Deep familiarity with OpenAI API / LangChain / LlamaIndex", "Experience trunking Twilio SIP voice models", "Python, Node.js and Vector Database setups", "SOP integration experience"]
    },
    {
      id: 3,
      title: "Enterprise Solutions Executive",
      department: "Sales & Success",
      location: "New York, NY (Hybrid)",
      type: "Full-Time",
      salary: "$90K base + uncapped OTE",
      requirements: ["3+ years SaaS / ERP / Consulting B2B sales", "Comfortable mapping client operations processes", "Excellent CRM record hygiene", "Willingness to travel to stakeholders"]
    },
    {
      id: 4,
      title: "Digital Transformation Consultant",
      department: "Consulting & Strategy",
      location: "Remote (US)",
      type: "Full-Time",
      salary: "$110K - $140K",
      requirements: ["Background in enterprise SOP auditing", "Ability to design database schemas and flowcharts", "Strong presentations & technical scoping writing", "Pillar-based tech planning experience"]
    }
  ];

  const benefits = [
    { title: "Remote-First", desc: "Work from anywhere. We provide flexible schedules and trust-based management loops." },
    { title: "Equipment Budget", desc: "Get a custom laptop, modern monitor, and ergonomic chair setup covered by us." },
    { title: "Learning Allowance", desc: "Up to $3,000 annually for books, bootcamps, conferences, and certifications." },
    { title: "Premium Health", desc: "100% covered health, dental, and vision insurance for you and your dependents." }
  ];

  const filteredJobs = jobsList.filter(job => 
    selectedDept === 'All' || job.department === selectedDept
  );

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setApplyingJob(null);
    }, 2500);
  };

  return (
    <div className="w-full relative overflow-hidden font-sans">
      <SEO 
        title="Careers & Open Positions" 
        description="Join the ELVTERA engineering and consulting teams. Browse open positions for React developers, AI architects, and CRM consultants." 
      />

      {/* Hero Header */}
      <section className="relative pt-12 pb-16 bg-slate-50 dark:bg-slate-950/20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[85%] h-[200px] bg-gradient-glow rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-brand-blue text-xs font-bold uppercase tracking-wider bg-brand-blue/10 dark:bg-brand-blue/20 px-3.5 py-1.5 rounded-full w-fit mx-auto">
            Join the Crew
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Build the Future of Enterprise Systems
          </h1>
          <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
            We are looking for programmers, AI architects, and consultants passionate about streamlining business databases and engineering beautiful, automated user interfaces.
          </p>
        </div>
      </section>

      {/* Culture Benefits Section */}
      <section className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-slate-900 dark:text-white">
              Why Work at ELVTERA?
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              We focus on building high-fidelity systems. We support our team with the resources, freedom, and learning structures they need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-850 text-left hover-card">
                <h3 className="font-display font-semibold text-base text-slate-900 dark:text-white mb-2 flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal shrink-0" />
                  <span>{benefit.title}</span>
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Filters & Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-slate-900 dark:text-white">
              Current Open Positions
            </h2>
            <p className="text-sm text-slate-650 dark:text-slate-400">
              Filter by department to find a role that fits your tech background.
            </p>
          </div>

          {/* Department filter tabs */}
          <div className="flex justify-center items-center space-x-1.5 overflow-x-auto pb-6 scrollbar-none">
            {departments.map((dept, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedDept(dept)}
                className={`px-4.5 py-2.5 rounded-xl font-display font-bold text-xs shrink-0 cursor-pointer transition-colors ${
                  selectedDept === dept
                    ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/15'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-800'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Positions List */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div 
                  key={job.id} 
                  className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-2xl p-6 text-left flex flex-col md:flex-row md:items-center justify-between gap-6 hover-card"
                >
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider bg-brand-blue/10 text-brand-blue px-2.5 py-1 rounded-full">
                        {job.department}
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold">{job.type}</span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-[10px] text-slate-450 font-bold">
                      <span className="flex items-center space-x-1">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{job.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <DollarSign className="h-3.5 w-3.5" />
                        <span>{job.salary}</span>
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setApplyingJob(job)}
                    className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white px-5 py-3 rounded-xl font-bold flex items-center justify-center space-x-1 text-xs shrink-0 cursor-pointer self-start md:self-auto"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ))
            ) : (
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-12 text-center border border-slate-200 dark:border-slate-800 max-w-sm mx-auto">
                <p className="text-xs text-slate-450 font-bold">No open roles currently listed in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {applyingJob && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setApplyingJob(null)}
              className="fixed inset-0 bg-slate-950 z-50 cursor-pointer"
            ></motion.div>

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 m-auto w-[90vw] max-w-lg h-fit max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 z-50 overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-100 dark:border-slate-850 flex justify-between items-center bg-slate-50 dark:bg-slate-950">
                <div>
                  <span className="text-[9px] font-extrabold uppercase text-brand-blue tracking-wider">Applying For</span>
                  <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white pt-0.5">{applyingJob.title}</h3>
                </div>
                <button 
                  onClick={() => setApplyingJob(null)}
                  className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-850 transition-colors text-slate-550 dark:text-slate-400 cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Form Body */}
              <div className="p-6 overflow-y-auto grow">
                {!formSubmitted ? (
                  <form onSubmit={handleApplySubmit} className="space-y-4 text-left">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-450 uppercase">Full Name</label>
                        <input type="text" required className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-brand-blue text-slate-900 dark:text-white" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-450 uppercase">Email Address</label>
                        <input type="email" required className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-brand-blue text-slate-900 dark:text-white" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-450 uppercase">Phone Number</label>
                        <input type="text" required className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-brand-blue text-slate-900 dark:text-white" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-450 uppercase">Portfolio URL</label>
                        <input type="url" placeholder="https://" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-brand-blue text-slate-900 dark:text-white" />
                      </div>
                    </div>

                    {/* Resume Upload Box (Mock) */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-450 uppercase">Resume / CV</label>
                      <div className="border border-dashed border-slate-200 dark:border-slate-800 hover:border-brand-blue rounded-xl p-4 flex flex-col items-center justify-center space-y-1 text-center cursor-pointer bg-slate-50 dark:bg-slate-950/40">
                        <UploadCloud className="h-6 w-6 text-slate-400" />
                        <span className="text-[10px] font-bold text-slate-700 dark:text-slate-350">Click to upload file</span>
                        <span className="text-[8px] text-slate-400">PDF, DOCX up to 10MB</span>
                      </div>
                    </div>

                    {/* Text area Cover Letter */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-450 uppercase">Cover Letter / Inquiries</label>
                      <textarea rows={3} placeholder="Briefly describe your systems background..." className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-brand-blue text-slate-900 dark:text-white"></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-brand-blue/15 text-center text-xs transition-colors cursor-pointer"
                    >
                      Submit Application
                    </button>
                  </form>
                ) : (
                  <div className="py-12 flex flex-col items-center justify-center text-center space-y-3.5">
                    <CheckCircle className="h-14 w-14 text-brand-success animate-bounce" />
                    <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">Application Received!</h4>
                    <p className="text-[11px] text-slate-500 max-w-xs leading-relaxed">
                      Thank you for applying. Our talent acquisition team will review your specs and reach out within 3 business days.
                    </p>
                  </div>
                )}
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
};
export default Careers;
