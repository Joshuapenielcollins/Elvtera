import Link from "next/link";
import { 
  Server, 
  Database, 
  Activity, 
  Terminal, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Settings, 
  HardDrive, 
  ShieldCheck, 
  FileText,
  Users
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IT Operations & Linux/Windows Sysadmin Services — Elvtera",
  description:
    "Proactive server management, Linux and Windows sysadmin, database clustering, patch governance, 24/7 monitoring, and remote IT operations under strict SLAs.",
  path: "/solutions/it-operations",
});

const capabilities = [
  {
    icon: Server,
    title: "Linux & Windows Administration",
    description: "End-to-end OS management across distributions (RHEL, Ubuntu, Debian, Rocky, Windows Server) with automated package governance.",
    features: [
      "OS installation, kernel tuning, and automated security patching",
      "User permission management, sudoer auditing, and SSH key rotation",
      "Filesystem optimization, LVM partitioning, and disk health monitoring",
      "Systemd service configuration, logging, and daemon supervision",
    ],
  },
  {
    icon: Database,
    title: "Database Administration & Tuning",
    description: "Maintain database uptime, eliminate slow queries, configure replication, and automate point-in-time recovery for relational databases.",
    features: [
      "PostgreSQL, MySQL, and Microsoft SQL Server administration",
      "Buffer pool sizing, work_mem tuning, and connection pooling (PgBouncer)",
      "Streaming replication, read-replica scaling, and failover automation",
      "Automated WAL archiving and daily snapshot integrity validation",
    ],
  },
  {
    icon: Activity,
    title: "24/7 Monitoring & Observability",
    description: "Continuous telemetry across CPU, memory, IOPS, disk saturation, and synthetic HTTP response times with automated escalation paths.",
    features: [
      "Prometheus metric scrapers and custom Grafana dashboarding",
      "Synthetic endpoint probes measuring latency from global regions",
      "Automated alert thresholds with multi-channel on-call routing",
      "Root cause post-mortems for any threshold degradation",
    ],
  },
  {
    icon: Settings,
    title: "Patch Management & System Hardening",
    description: "Systematic vulnerability remediation and OS hardening aligned to CIS benchmarks, executed during controlled off-peak windows.",
    features: [
      "Pre-patch snapshot backup verification before executing updates",
      "Automated staging environment patch validation drills",
      "Removal of unused packages, legacy protocols, and unneeded ports",
      "Comprehensive patch audit logging for compliance requirements",
    ],
  },
  {
    icon: HardDrive,
    title: "Storage & Volume Management",
    description: "Provision, monitor, and scale block storage, network-attached storage (NAS/SAN), object stores, and ZFS pools.",
    features: [
      "Storage allocation, volume expansion, and zero-downtime resizing",
      "I/O performance benchmarking and latency bottleneck profiling",
      "Automated volume snapshot schedules with retention policies",
      "Data deduplication, compression, and cold-storage tiering",
    ],
  },
  {
    icon: Terminal,
    title: "Remote Sysadmin & Tier-3 Support",
    description: "On-demand systems engineering capacity to troubleshoot complex kernel issues, resolve network deadlocks, and support internal teams.",
    features: [
      "Rapid incident triage and command-line system debugging",
      "Behind-the-scenes Tier-3 escalation support for MSPs",
      "Living runbook authoring for every administrative routine",
      "Direct engineer communication in Slack, Teams, or ticketing",
    ],
  },
];

const problems = [
  {
    problem: "“Our software developers spend half their week managing servers instead of writing code.”",
    solution: "We take over 100% of the operational burden—patching, monitoring, backups, and database tuning—so your developers stay focused on product.",
  },
  {
    problem: "“We don't know our servers are down until an angry customer emails support.”",
    solution: "We deploy proactive 24/7 synthetic monitoring with automated alert routing, catching performance dips long before users notice.",
  },
  {
    problem: "“Our database is slowing down and we don't have an in-house database administrator.”",
    solution: "Our database specialists profile your slow query logs, tune buffer memory, build proper indexes, and set up connection pooling.",
  },
  {
    problem: "“We have never tested restoring our backups, so we have no idea if they actually work.”",
    solution: "We implement scheduled, documented restore exercises where we spin up test instances from cold backups to prove data integrity.",
  },
];

export default function ItOperationsPage() {
  return (
    <>
      <PageHero
        badge="IT & Security Capability"
        title="Proactive IT Operations & Systems Administration"
        description="We administer, monitor, patch, and optimize your Linux and Windows server environments under strict availability guarantees. Eliminate operational firefighting."
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/contact?intent=it-environment">
              <span>Discuss Your IT Environment</span>
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
            eyebrow="Operational Bottlenecks"
            title="Why Companies Outsource IT Operations to Elvtera"
            description="Running servers and databases is specialized work. We bring enterprise sysadmin discipline without the overhead of hiring an entire full-time operations team."
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
            title="Complete Systems Administration Spectrum"
            description="Disciplined, runbook-backed management of every component in your server and database fleet."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="p-7 rounded-3xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
                  <div>
                    <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 border border-blue-200 mb-5">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-xl font-bold text-primary font-display">{cap.title}</h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">{cap.description}</p>
                    <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-xs text-slate-700">
                      {cap.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-blue-600 shrink-0 mt-0.5" />
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
            title="Our 5-Step Operational Methodology"
            description="How we transition your server and database fleet into predictable, runbook-documented operations."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { num: "01", name: "Understand", desc: "Audit existing server fleet, OS versions, disk usage, and backup routines." },
              { num: "02", name: "Plan", desc: "Design hardened baseline templates, scheduled maintenance windows, and alerting policies." },
              { num: "03", name: "Build", desc: "Install monitoring agents, configure automated WAL archiving, and establish access controls." },
              { num: "04", name: "Operate", desc: "Provide 24/7 telemetry monitoring, off-peak patch deployment, and ticket response." },
              { num: "05", name: "Improve", desc: "Perform quarterly database query profiling, storage optimization, and failover drills." },
            ].map((step) => (
              <div key={step.num} className="p-6 rounded-2xl border border-slate-200 bg-surface">
                <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">{step.num}</span>
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
            title="Flexible Ways to Engage Our Operations Team"
            description="From discrete server migrations to 24/7 ongoing operational stewardship."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="p-8 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase">Project-Based</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Server Rebuild & Migration</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Fixed-scope OS upgrades, database migrations, storage reconfiguration, or monitoring setup.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Button href="/contact?intent=it-environment&model=project" variant="outline" className="w-full">
                  Start an IT Project
                </Button>
              </div>
            </div>

            <div className="p-8 rounded-3xl border-2 border-secondary bg-white shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-secondary bg-blue-50 px-3 py-1 rounded-full uppercase">Ongoing Support</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">24/7 Managed Operations</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Continuous day-to-day sysadmin, monitoring, patch management, and incident triage under SLAs.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Button href="/contact?intent=it-environment&model=ongoing" variant="primary" className="w-full">
                  Discuss Ongoing Support
                </Button>
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase">Extended Team</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Dedicated Sysadmins</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Add senior Linux/Windows engineers directly into your Slack or ticketing system without hiring overhead.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Button href="/contact?intent=it-environment&model=extended-team" variant="outline" className="w-full">
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
            Operating Systems & Tooling
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {["RHEL", "Ubuntu", "Debian", "Rocky Linux", "Windows Server", "PostgreSQL", "MySQL", "Prometheus", "Grafana", "Ansible", "PgBouncer", "ZFS"].map((tech) => (
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
            title="Questions About IT Operations"
            description="Clear answers about maintenance windows, root credentials, and response times."
          />

          <div className="mt-12 space-y-4">
            {[
              {
                q: "When do you perform server maintenance and patch updates?",
                a: "All non-emergency kernel upgrades and package patching occur during pre-scheduled off-peak maintenance windows (typically weekend nights) after snapshot backups have been verified.",
              },
              {
                q: "What monitoring metrics do you capture?",
                a: "We capture CPU load, memory utilization, disk queue depths, network I/O, database slow query logs, connection pool limits, and synthetic HTTP/API response times with sub-minute alert thresholds.",
              },
              {
                q: "Can you manage our existing infrastructure without migrating to a new provider?",
                a: "Yes. We work in whatever environment you currently run—AWS, Azure, OCI, Google Cloud, DigitalOcean, Linode, or on-premises colocation servers.",
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
        title="Ready to stabilize your IT operations?"
        description="Book a technical review with an Elvtera systems engineer. We will evaluate your server topology, disk bottlenecks, and monitoring coverage."
        buttonLabel="Discuss Your IT Environment"
        buttonHref="/contact?intent=it-environment"
      />
    </>
  );
}
