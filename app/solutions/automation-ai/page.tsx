import Link from "next/link";
import { 
  Workflow, 
  Cpu, 
  Sparkles, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  Bot, 
  Mic, 
  GitBranch, 
  Zap, 
  Database,
  FileText
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Business Process Automation & AI Applications — Elvtera",
  description:
    "We engineer practical workflow automations, custom AI applications, autonomous agents, and conversational voice systems that eliminate manual operational friction.",
  path: "/solutions/automation-ai",
});

const capabilities = [
  {
    icon: Workflow,
    title: "Business Process & Workflow Automation",
    description: "Connect disparate software tools and eliminate manual data entry through high-throughput webhook pipelines and event-driven automation.",
    features: [
      "Custom workflow pipelines using Python, n8n, and message queues",
      "Automated client onboarding, contract execution, and invoice generation",
      "Real-time bidirectional synchronization between CRM, billing, and fulfillment",
      "Error handling, automatic retries, and dead-letter queue notifications",
    ],
  },
  {
    icon: Bot,
    title: "Autonomous AI Agents",
    description: "Deploy task-oriented software agents that execute multi-step operational procedures, query private databases, and interface with backend APIs.",
    features: [
      "Goal-directed multi-step reasoning and automated decision execution",
      "Secure tool-calling interfaces connecting agents to your databases",
      "Human-in-the-loop approval checkpoints for high-impact actions",
      "Complete execution audit logs for traceability and compliance",
    ],
  },
  {
    icon: Cpu,
    title: "Context-Aware AI Applications & RAG",
    description: "Custom software infused with retrieval-augmented generation (RAG) that answers complex questions using your private organizational documents.",
    features: [
      "Vector database indexing (pgvector, Pinecone) of company documents",
      "Semantic search and contextual document summarization pipelines",
      "Role-based access control preventing users from querying restricted data",
      "Zero training on public models: private enterprise LLM endpoints",
    ],
  },
  {
    icon: MessageSquare,
    title: "Intelligent Chatbots & Customer Assistants",
    description: "Resolve frontline customer inquiries 24/7 with conversational assistants that actually understand your product, resolve issues, and create tickets.",
    features: [
      "Natural language understanding trained on your public knowledge base",
      "Direct integration with Zendesk, Intercom, and CRM platforms",
      "Seamless escalation to human operators with complete conversation context",
      "Analytics on common customer queries and unanswered edge cases",
    ],
  },
  {
    icon: Mic,
    title: "AI Voice Agents & Phone Automation",
    description: "Automate inbound phone inquiries, after-hours triage, and appointment booking with low-latency conversational voice agents.",
    features: [
      "Sub-second conversational response latency using modern speech APIs",
      "Inbound caller verification, intent classification, and call routing",
      "Direct calendar booking and automated confirmation SMS triggers",
      "Real-time call transcription and automated CRM record updates",
    ],
  },
  {
    icon: GitBranch,
    title: "API Orchestration & Webhook Pipelines",
    description: "Build robust, reliable middleware services that transform, validate, and deliver messages between mission-critical third-party platforms.",
    features: [
      "Idempotent webhook receivers that prevent duplicate transaction processing",
      "Payload schema validation and automated data sanitization",
      "Rate-limited outbound dispatchers complying with third-party API caps",
      "Centralized pipeline telemetry monitoring and latency alerting",
    ],
  },
];

const problems = [
  {
    problem: "“Too much of our daily business still runs manually on spreadsheets and copy-pasting.”",
    solution: "We map your repetitive workflows and deploy automated event-driven pipelines that handle data transfer instantly with zero errors.",
  },
  {
    problem: "“Our team wastes hours every week searching through hundreds of internal documents to answer basic questions.”",
    solution: "We build a secure, private AI semantic search engine (RAG) that indexes your documentation and delivers verified answers with citations.",
  },
  {
    problem: "“Customer support volume is overwhelming our staff outside standard business hours.”",
    solution: "We deploy intelligent AI assistants and voice agents that resolve common inquiries 24/7 and route complex issues to on-call staff.",
  },
  {
    problem: "“We tried building automations with simple Zapier triggers, but they keep breaking without error alerts.”",
    solution: "We engineer production-grade pipelines with structured logging, automatic retry mechanisms, and instant Slack alert routing.",
  },
];

export default function AutomationAiPage() {
  return (
    <>
      <PageHero
        badge="Software & Automation Solutions"
        title="Practical Automation & AI Applications That Deliver Real ROI"
        description="We build event-driven workflow automations, autonomous AI agents, and conversational voice systems that eliminate repetitive friction and scale operations."
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/contact?intent=automation-ai">
              <span>Discuss Your Automation Needs</span>
              <ArrowRight className="size-4 ml-1" />
            </Button>
            <Button href="#capabilities" variant="outline">
              Explore Capabilities
            </Button>
          </div>
        }
      />

      {/* Problems We Solve */}
      <section className="py-20 lg:py-24 bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="The Cost of Manual Work"
            title="Why Companies Automate With Elvtera"
            description="Manual processes don't just waste employee hours—they cause delays, introduce human error, and cap how fast your business can grow."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {problems.map((item, idx) => (
              <div key={idx} className="p-7 rounded-2xl border border-slate-200 bg-surface">
                <h3 className="font-bold text-base text-primary font-display mb-3">
                  {item.problem}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-20 lg:py-24 bg-surface border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Capabilities"
            title="Practical AI & Workflow Engineering"
            description="We focus on reliable, high-impact automations rather than unproven science experiments."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="p-7 rounded-3xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
                  <div>
                    <div className="flex size-11 items-center justify-center rounded-xl bg-purple-50 text-purple-700 border border-purple-200 mb-5">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-xl font-bold text-primary font-display">{cap.title}</h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">{cap.description}</p>
                    <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-xs text-slate-700">
                      {cap.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-purple-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-24 bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Process"
            title="Our Automation Engineering Lifecycle"
            description="From mapping manual process bottlenecks to deploying reliable pipelines with comprehensive error handling."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { num: "01", name: "Understand", desc: "Identify high-volume manual routines, error-prone spreadsheets, and integration points." },
              { num: "02", name: "Plan", desc: "Map exact trigger-action flows, data payload schemas, and fallback exception handling." },
              { num: "03", name: "Build", desc: "Develop Python/n8n pipelines, build vector databases, configure webhooks, and test edge cases." },
              { num: "04", name: "Operate", desc: "Deploy to production, configure automated failure alerting, and monitor queue latency." },
              { num: "05", name: "Improve", desc: "Evaluate pipeline throughput, eliminate newly identified friction, and extend AI capabilities." },
            ].map((step) => (
              <div key={step.num} className="p-6 rounded-2xl border border-slate-200 bg-surface">
                <span className="font-mono text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">{step.num}</span>
                <h4 className="mt-3 font-bold text-base text-slate-900">{step.name}</h4>
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 lg:py-24 bg-surface border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Engagement Models"
            title="How to Automate With Elvtera"
            description="Choose the delivery model that fits your operational roadmap."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="p-8 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase">Project-Based</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Pipeline / Agent Build</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Fixed-scope engineering of custom workflow pipelines, AI agents, or automated voice integrations.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Button href="/contact?intent=automation-ai&model=project" variant="outline" className="w-full">
                  Start an Automation Project
                </Button>
              </div>
            </div>

            <div className="p-8 rounded-3xl border-2 border-secondary bg-white shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-secondary bg-blue-50 px-3 py-1 rounded-full uppercase">Ongoing Support</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Continuous Automation Ops</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Ongoing pipeline maintenance, webhook monitoring, model prompt optimization, and failure triage under SLAs.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Button href="/contact?intent=automation-ai&model=ongoing" variant="primary" className="w-full">
                  Discuss Ongoing Support
                </Button>
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase">Extended Team</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Dedicated AI Engineers</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Add Python automation engineers and LLM pipeline developers directly into your team sprints.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Button href="/contact?intent=automation-ai&model=extended-team" variant="outline" className="w-full">
                  Extend Your Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-4">
            Automation & AI Tooling
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {["Python", "n8n", "FastAPI", "OpenAI APIs", "Anthropic Claude", "LangChain", "PostgreSQL (pgvector)", "Redis", "Celery", "Webhooks", "Twilio Voice"].map((tech) => (
              <span key={tech} className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-24 bg-surface border-b border-line">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Questions About Automation & AI"
            description="Clear answers about data privacy, reliability, and security."
          />

          <div className="mt-12 space-y-4">
            {[
              {
                q: "Is our proprietary business data used to train public AI models?",
                a: "Never. We use enterprise API endpoints with zero-data-retention agreements where your data is strictly used for real-time inference and never used for model training or retained by third parties.",
              },
              {
                q: "What happens if a third-party API goes down or changes its payload format?",
                a: "Our pipelines include automated error handling, dead-letter queues, and instant Slack notifications. Failed transactions are queued and replayed automatically once the third party recovers.",
              },
              {
                q: "Can you automate workflows across legacy systems that don't have APIs?",
                a: "Yes. For legacy systems without modern APIs, we build secure automated database connectors, SFTP file watchers, or headless browser automation to ingest and synchronize records reliably.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-white">
                <h4 className="font-bold text-base text-slate-900 font-display">{faq.q}</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Ready to automate your business operations?"
        description="Book a technical discovery session with an Elvtera automation architect. We will evaluate your manual workflows, integration points, and potential time savings."
        buttonLabel="Discuss Your Automation Needs"
        buttonHref="/contact?intent=automation-ai"
      />
    </>
  );
}
