import React, { useState } from 'react';
import { 
  History, 
  Eye, 
  Target, 
  Users, 
  Award,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  details: string;
  stats: string;
}

export const About: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(2); // Default to latest (index 2)

  const milestones: Milestone[] = [
    {
      year: "2022",
      title: "Founding & Core Ideation",
      subtitle: "Enterprise Integration Vision",
      details: "ELVTERA was established by Joshua Collins and Mark Kavin with a clear goal: simplify how mid-market businesses structure databases, automate workflows, and connect legacy software systems.",
      stats: "2 Founders • 1 Office"
    },
    {
      year: "2024",
      title: "ERP & WhatsApp Launches",
      subtitle: "First Enterprise Core Releases",
      details: "Released our custom resource planning ledger and automated WhatsApp Business API integrations. Enabled direct queue mappings and unified team dashboard suites.",
      stats: "15+ Core Integrations"
    },
    {
      year: "2026",
      title: "Phased Scaling Standard",
      subtitle: "Unified Enterprise Pillars",
      details: "Established company services into 5 core pillars. Scaling database replication pipelines and low-latency custom integrations to support real-time workflows.",
      stats: "25+ Industries Enabled"
    }
  ];

  const coreValues = [
    {
      title: "Enterprise Reliability",
      desc: "Our systems handle millions of records. We build with redundancy, security, and 99.99% uptime as baseline standards.",
      icon: Award
    },
    {
      title: "Innovation first",
      desc: "We invest 20% of our yields into AI models, automated pipeline testing, and modern cloud database architecture.",
      icon: TrendingUp
    },
    {
      title: "Absolute Integrity",
      desc: "We scope projects transparently, quote fairly, and never hide database constraints, vendor costs, or delivery metrics.",
      icon: CheckCircle2
    },
    {
      title: "Client-Centric Loop",
      desc: "We custom design platforms around real human operations. If a system doesn't make your employees faster, we rewrite it.",
      icon: Users
    }
  ];

  const leadership = [
    {
      name: "Joshua Collins",
      role: "CEO & Co-founder",
      bio: "Focuses on company strategy and enterprise software blueprints.",
      avatar: "JC",
      color: "bg-blue-600"
    },
    {
      name: "Mark Kavin",
      role: "CMO & Co-founder",
      bio: "Leads client communications and marketing integrations.",
      avatar: "MK",
      color: "bg-teal-600"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Manages database systems engineering and RAG automation.",
      avatar: "SC",
      color: "bg-indigo-600"
    },
    {
      name: "James Smith",
      role: "COO",
      bio: "Directs technical support operations and client SLAs.",
      avatar: "JS",
      color: "bg-orange-600"
    }
  ];

  const partners = [
    { name: "Amazon Web Services", type: "Cloud Infrastructure" },
    { name: "Meta Business Network", type: "WhatsApp Cloud API" },
    { name: "Twilio API Systems", type: "Telephony & VoIP Solutions" },
    { name: "OpenAI Enterprise", type: "Advanced LLM Integration" },
    { name: "Snowflake Cloud DB", type: "Data Warehousing" },
    { name: "Stripe Payments", type: "Transactional Infrastructure" }
  ];

  return (
    <div className="w-full relative overflow-hidden font-sans">
      <SEO 
        title="About Our Company" 
        description="Learn about ELVTERA's story, mission, core values, technology partners, and our leadership team driving enterprise digital transformation." 
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:py-24 bg-slate-50 dark:bg-slate-950/20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[85%] h-[250px] bg-gradient-glow rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="flex items-center space-x-2 bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-blue-400 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full w-fit mx-auto">
            <History className="h-4 w-4" />
            <span>Who We Are</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
            We Architect the Core Engines of Modern Business
          </h1>
          <p className="text-sm sm:text-base text-slate-650 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            ELVTERA is a technology partnership company. We merge database systems, automation scripts, and conversational AI into a unified operating standard.
          </p>
        </div>
      </section>

      {/* Mission & Vision cards */}
      <section className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Mission */}
            <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-slate-850 flex items-start space-x-5 text-left hover-card">
              <div className="p-3 rounded-2xl bg-brand-blue/15 text-brand-blue shrink-0">
                <Target className="h-7 w-7" />
              </div>
              <div className="space-y-3">
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">Our Mission</h3>
                <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-400 leading-relaxed">
                  To serve as the definitive technology partner for growing enterprises. We dismantle legacy database bottlenecks and replace manually-operated routines with resilient, self-orchestrating cloud solutions.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-slate-850 flex items-start space-x-5 text-left hover-card">
              <div className="p-3 rounded-2xl bg-brand-teal/15 text-brand-teal shrink-0">
                <Eye className="h-7 w-7" />
              </div>
              <div className="space-y-3">
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">Our Vision</h3>
                <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-400 leading-relaxed">
                  A future where business systems adapt automatically. Where sales leads route instantly, AI voice callers qualify inquiries, inventory and accounts settle in real-time, and companies focus purely on building their products.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Vertical Timeline Milestone */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-slate-900 dark:text-white">
              ELVTERA Milestones
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Click a milestone year below to see our growth and system achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            
            {/* Timeline Year Toggle */}
            <div className="md:col-span-4 flex md:flex-col items-center justify-between md:justify-start md:space-y-3 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 gap-2 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 pr-0 md:pr-8">
              {milestones.map((m, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedMilestone(idx)}
                  className={`w-full text-center md:text-left px-5 py-4.5 rounded-xl font-display font-bold text-sm transition-all shrink-0 cursor-pointer ${
                    idx === selectedMilestone
                      ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/15'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className="block text-xs uppercase text-blue-200 font-semibold mb-0.5">Year {m.year}</span>
                  <span className="text-sm truncate block">{m.title}</span>
                </button>
              ))}
            </div>

            {/* Timeline Detail Card */}
            <div className="md:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 text-left min-h-[280px] flex flex-col justify-between relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 p-8 opacity-5 font-display font-extrabold text-9xl text-slate-450 pointer-events-none select-none">
                {milestones[selectedMilestone].year}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedMilestone}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-extrabold bg-brand-teal/15 text-brand-teal px-3 py-1 rounded-full uppercase tracking-wider">
                      {milestones[selectedMilestone].subtitle}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white pt-1">
                      {milestones[selectedMilestone].title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-650 dark:text-slate-400 leading-relaxed">
                    {milestones[selectedMilestone].details}
                  </p>

                  <div className="border-t border-slate-100 dark:border-slate-850 pt-4 flex items-center space-x-2 text-sm font-bold text-brand-blue">
                    <span>{milestones[selectedMilestone].stats}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-slate-900 dark:text-white">
              Our Core Operating Values
            </h2>
            <p className="text-base text-slate-650 dark:text-slate-450">
              Five principles dictate every block of code we compile and every consulting SLA we commit to.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-850 text-left hover-card">
                  <div className="p-2.5 rounded-xl bg-brand-blue/15 text-brand-blue w-fit mb-4">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-slate-900 dark:text-white">
              The Leadership Team
            </h2>
            <p className="text-base text-slate-650 dark:text-slate-450">
              Meet the system designers, programmers, and strategists steering our automation standard.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/60 dark:border-slate-800 p-6 text-left hover-card">
                <div className="flex items-center space-x-4 mb-5">
                  <div className={`h-14 w-14 rounded-2xl ${member.color} flex items-center justify-center font-display font-bold text-white text-lg shadow-md`}>
                    {member.avatar}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-brand-blue">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Partners Grid */}
      <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
              Our Technology Partners
            </h2>
            <p className="text-base text-slate-650 dark:text-slate-450">
              We engineer adapters and host our software platforms across global enterprise network partners.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 rounded-2xl p-5 flex flex-col items-center justify-center text-center h-28 hover:border-slate-200 dark:hover:border-slate-800 transition-colors"
              >
                <span className="font-display font-bold text-sm text-slate-800 dark:text-slate-200">
                  {partner.name}
                </span>
                <span className="text-xs text-slate-400 uppercase tracking-wider mt-1.5 font-bold">
                  {partner.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
export default About;
