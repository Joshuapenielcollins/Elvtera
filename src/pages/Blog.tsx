import React, { useState } from 'react';
import { 
  Search, 
  Clock, 
  Calendar, 
  ArrowRight, 
  X,
  Mail,
  BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

interface Article {
  id: number;
  title: string;
  category: string;
  summary: string;
  content: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  avatar: string;
}

export const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [readingArticle, setReadingArticle] = useState<Article | null>(null);

  const categories = ["All", "AI", "ERP", "CRM", "Automation", "Business Growth"];

  const articles: Article[] = [
    {
      id: 1,
      category: "AI",
      title: "How AI Voice Agents Are Redefining Enterprise Lead Qualification",
      summary: "Explore how conversational voice synthesis and NLP route trees achieve 65%+ meeting booking ratios without human sales intervention.",
      content: "Traditional outbound lead qualification is slow, expensive, and subject to high representative turnover. In this article, we dive deep into the mechanics of conversational AI. By linking low-latency speech generation models to secure CRM database ledgers, modern voice agents qualify and book warm inquiries within seconds of submission. We audit the ROI, latency parameters, and custom retrieval setups required to implement voice agents at scale.",
      readTime: "6 min read",
      date: "Jun 24, 2026",
      author: "Dr. Sarah Chen",
      authorRole: "CTO, ELVTERA",
      avatar: "SC"
    },
    {
      id: 2,
      category: "ERP",
      title: "The Architecture of Double-Entry General Ledger Systems in ERPs",
      summary: "Understand why standard ERP databases require strict double-entry ledger models to ensure transaction compliance and error-free tax audits.",
      content: "Relational database consistency is critical when handling inventory flows and shift payroll. Many off-the-shelf business applications use single-entry logs that lack double-entry validation, leading to revenue leakages and tax filing gaps. This article details the database schema, transaction logs, and ETL auditing pipelines required to keep your accounting ledgers fully verified.",
      readTime: "8 min read",
      date: "Jun 18, 2026",
      author: "Arthur Sterling",
      authorRole: "CEO, ELVTERA",
      avatar: "AS"
    },
    {
      id: 3,
      category: "Automation",
      title: "Scaling WhatsApp Business CRM Integrations for High-Volume Support",
      summary: "Meta's Official WhatsApp Cloud API yields 98% open rates. We analyze how shared team inboxes and custom chatbots coordinate inbound traffic.",
      content: "In modern B2C channels, email open rates are declining while WhatsApp open rates consistently float at 98%. However, running high-volume support on standard mobile apps leads to account bans and chaotic ticket routing. We explain the steps to port numbers to the Official WhatsApp Cloud API, build team inbox layouts, and structure custom automated chatbot funnels.",
      readTime: "5 min read",
      date: "Jun 12, 2026",
      author: "Elena Geller",
      authorRole: "VP Customer Success",
      avatar: "EG"
    },
    {
      id: 4,
      category: "Business Growth",
      title: "Programmatic SEO: Unifying Site Indexing with CRM Data Flows",
      summary: "Learn how B2B enterprises leverage search-intent databases to automate landing page builds and capture high-intent keyword ranks.",
      content: "Programmatic SEO enables companies to scale organic keyword acquisition by generating structured landing pages dynamically. By linking search-intent databases with your CRM pipelines, you can capture leads with hyper-focused solutions for specific industries. We audit the indexing criteria, schema markings, and copywriting blueprints needed to double organic search yields.",
      readTime: "7 min read",
      date: "May 28, 2026",
      author: "Marcus Rostova",
      authorRole: "CSO, ELVTERA",
      avatar: "MR"
    }
  ];

  // Filtering
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full relative overflow-hidden font-sans">
      <SEO 
        title="Technology & Business Blog" 
        description="Read research, guides, and engineering updates on AI voice agents, custom ERP databases, and enterprise WhatsApp APIs from ELVTERA." 
      />

      {/* Hero Header */}
      <section className="relative pt-12 pb-16 bg-slate-50 dark:bg-slate-950/20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[85%] h-[200px] bg-gradient-glow rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-brand-blue text-xs font-bold uppercase tracking-wider bg-brand-blue/10 dark:bg-brand-blue/20 px-3.5 py-1.5 rounded-full w-fit mx-auto">
            Knowledge Hub
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            ELVTERA Technology Insights
          </h1>
          <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
            Read detailed technical articles, design blueprints, and business strategy audits compiled by our software engineers and consulting teams.
          </p>
        </div>
      </section>

      {/* Search & Category Filter Section */}
      <section className="py-8 bg-white dark:bg-slate-900 border-y border-slate-200/50 dark:border-slate-800/50 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          {/* Category Tabs */}
          <div className="flex items-center space-x-1 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4.5 py-2.5 rounded-xl font-display font-bold text-xs shrink-0 cursor-pointer transition-colors ${
                  selectedCategory === cat
                    ? 'bg-brand-blue text-white'
                    : 'bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative max-w-sm w-full">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
            />
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          </div>

        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredArticles.map((article) => (
                <div 
                  key={article.id} 
                  className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 sm:p-8 text-left hover-card flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-blue-400 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <div className="flex items-center space-x-3 text-[10px] text-slate-400">
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{article.date}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{article.readTime}</span>
                        </span>
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 dark:border-slate-850 pt-5 mt-6 flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="h-8.5 w-8.5 rounded-lg bg-gradient-brand p-0.5 flex items-center justify-center font-display font-bold text-white text-xs">
                        {article.avatar}
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold text-slate-900 dark:text-white">{article.author}</h4>
                        <p className="text-[9px] text-slate-400">{article.authorRole}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setReadingArticle(article)}
                      className="text-xs font-bold text-brand-blue hover:text-brand-teal flex items-center space-x-1 cursor-pointer"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800 max-w-md mx-auto space-y-4">
              <BookOpen className="h-12 w-12 text-slate-300 dark:text-slate-700 mx-auto" />
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">No articles match your query</h3>
              <p className="text-xs text-slate-500">Try modifying your search tags or checking a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Immersive Article Reading Side Drawer Modal */}
      <AnimatePresence>
        {readingArticle && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setReadingArticle(null)}
              className="fixed inset-0 bg-slate-950 z-50 cursor-pointer"
            ></motion.div>

            {/* Reading Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[600px] bg-white dark:bg-slate-900 shadow-2xl border-l border-slate-200 dark:border-slate-800 z-50 overflow-y-auto flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-100 dark:border-slate-850 flex items-center justify-between sticky top-0 bg-white dark:bg-slate-900 z-10">
                <span className="text-[10px] font-extrabold bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full uppercase tracking-wider">
                  {readingArticle.category}
                </span>
                <button 
                  onClick={() => setReadingArticle(null)}
                  className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-550 dark:text-slate-400 cursor-pointer"
                >
                  <X className="h-5.5 w-5.5" />
                </button>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 grow space-y-6 text-left">
                <div className="flex items-center space-x-3 text-xs text-slate-400">
                  <span className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{readingArticle.date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{readingArticle.readTime}</span>
                  </span>
                </div>

                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white leading-tight">
                  {readingArticle.title}
                </h2>

                <div className="flex items-center space-x-3 border-y border-slate-100 dark:border-slate-850 py-4">
                  <div className="h-10 w-10 rounded-xl bg-gradient-brand p-0.5 flex items-center justify-center font-display font-bold text-white text-xs shrink-0">
                    {readingArticle.avatar}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">{readingArticle.author}</h4>
                    <p className="text-[10px] text-slate-450">{readingArticle.authorRole}</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-650 dark:text-slate-350 leading-relaxed pt-2">
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    {readingArticle.summary}
                  </p>
                  {readingArticle.content.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                  <p className="pt-4">
                    Architecting automated routines requires robust system mapping. At ELVTERA, our software engineers scope database tables, verify API schemas, and test message routing sequences to ensure that every client transformation handles scale flawlessly.
                  </p>
                </div>

                {/* Newsletter Card in drawer */}
                <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-850 mt-8 space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-6 w-6 text-brand-blue shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="font-display font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">Like this content?</h4>
                      <p className="text-[10px] text-slate-450 leading-relaxed">Subscribe to get monthly technical audits and ERP schemas delivered directly to your corporate inbox.</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <input 
                      type="email" 
                      placeholder="corporate@company.com" 
                      className="grow bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-[10px] focus:outline-none focus:border-brand-blue text-slate-900 dark:text-white"
                    />
                    <button className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-xl px-4 text-[10px] font-bold transition-colors cursor-pointer shrink-0">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
};
export default Blog;
