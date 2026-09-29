import Link from "next/link";
import { 
  ShieldCheck, 
  Server, 
  Cloud, 
  Database, 
  Lock, 
  Activity, 
  RefreshCw, 
  CheckCircle2, 
  ArrowRight, 
  Terminal, 
  Headphones, 
  Network, 
  Cpu,
  AlertTriangle,
  Zap
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IT & Security — Keep Your Technology Running, Secure, and Ready to Scale",
  description:
    "Elvtera provides IT operations, cloud infrastructure (AWS/Azure/OCI), Linux/Windows server administration, SIEM cybersecurity, backups, and 24/7 technical support.",
  path: "/solutions/it-and-security",
});

const capabilities = [
  {
    id: "it-operations",
    icon: Server,
    title: "IT Operations & Server Administration",
    description: "Hands-on Linux and Windows server administration, kernel patching, user privilege enforcement, and continuous operating system lifecycle stewardship.",
    features: [
      "Linux (RHEL, Ubuntu, Debian, Rocky) & Windows Server management",
      "Proactive security patch deployment and OS hardening",
      "Database clustering, query tuning, and WAL archiving (PostgreSQL, MySQL)",
      "Automated package management and server performance profiling",
    ],
  },
  {
    id: "cloud-infrastructure",
    icon: Cloud,
    title: "Cloud Infrastructure & Optimization",
    description: "Architecture, provisioning, migration, and cost governance across AWS, Microsoft Azure, and Oracle Cloud Infrastructure (OCI).",
    features: [
      "Infrastructure as Code via Terraform and OpenTofu",
      "Multi-region VPC architectures, private subnets, and peering",
      "Cloud cost optimization, reserved instance sizing, and resource pruning",
      "Container orchestration via Docker, ECS, and managed Kubernetes",
    ],
  },
  {
    id: "cybersecurity-siem",
    icon: ShieldCheck,
    title: "Cybersecurity & SIEM Operations",
    description: "Centralized threat detection, SIEM log correlation, vulnerability management, endpoint protection, and security posture enforcement.",
    features: [
      "Centralized Wazuh SIEM log collection and automated alert rules",
      "Identity & Access Management (IAM) least privilege and mandatory MFA",
      "Continuous vulnerability scanning and prioritized patch remediation",
      "CIS benchmark alignment and system hardening across all nodes",
    ],
  },
  {
    id: "monitoring-observability",
    icon: Activity,
    title: "24/7 Monitoring & Observability",
    description: "Real-time telemetry, synthetic health probes, automated threshold alarms, and rapid incident response to detect issues before customers do.",
    features: [
      "Prometheus, Grafana, and cloud-native telemetry pipelines",
      "Synthetic HTTP/API endpoint health probes across global locations",
      "Automated on-call escalation policies (PagerDuty / Opsgenie)",
      "Database query latency and connection pool saturation metrics",
    ],
  },
  {
    id: "backup-recovery",
    icon: RefreshCw,
    title: "Backup & Disaster Recovery",
    description: "Air-gapped immutable backup pipelines, RTO/RPO enforcement, and scheduled restoration drills to guarantee business continuity.",
    features: [
      "3-2-1 backup topology with immutable S3 object-lock storage",
      "Automated point-in-time recovery for relational databases",
      "Documented Disaster Recovery (DR) runbooks and failover drills",
      "Quarterly cold-restore testing with executive verification logs",
    ],
  },
  {
    id: "technical-support",
    icon: Headphones,
    title: "Technical Support & Remote Sysadmin",
    description: "Trained remote L1/L2 technical support specialists who inspect server logs, triage tickets, reproduce bugs, and manage user requests.",
    features: [
      "24/7/365 infrastructure incident response support",
      "Ticket triage, log inspection, and developer escalations",
      "User provisioning, SSH key revocation, and permission updates",
      "White-label Tier-3 engineering backstop for MSPs and IT providers",
    ],
  },
];

const problems = [
  {
    problem: "“Our infrastructure is growing faster than our internal IT team can handle.”",
    solution: "We act as your dedicated infrastructure operations division, handling provisioning, updates, monitoring, and backups so your team isn't overwhelmed.",
  },
  {
    problem: "“We have no visibility into server health until a customer complains about an outage.”",
    solution: "We implement 24/7 Prometheus and Grafana telemetry with synthetic health checks that alert our engineers the moment an anomaly appears.",
  },
  {
    problem: "“We worry about ransomware, unauthorized access, and failing security audits.”",
    solution: "We enforce least-privilege IAM, mandatory MFA, immutable air-gapped backups, and Wazuh SIEM log correlation to protect your business.",
  },
  {
    problem: "“Our AWS or Azure cloud bill keeps increasing every month without clear reason.”",
    solution: "We perform deep cloud cost audits, prune idle resources, right-size compute instances, and implement reserved commitments to reduce waste.",
  },
];

const technologies = [
  "AWS", "Microsoft Azure", "Oracle Cloud (OCI)", "Linux (RHEL/Ubuntu/Rocky)", "Windows Server",
  "Terraform", "Docker", "Kubernetes", "PostgreSQL", "MySQL", "Wazuh SIEM", "Prometheus", "Grafana", "WireGuard", "pfSense"
];

const faqs = [
  {
    q: "Can Elvtera manage our on-premises servers or colocation facilities?",
    a: "Yes. In addition to multi-cloud environments (AWS, Azure, OCI), we regularly manage bare-metal Linux and Windows servers, virtualization hypervisors (VMware, Proxmox, Hyper-V), and hybrid network interconnects.",
  },
  {
    q: "How does Elvtera respond to off-hours critical outages or security incidents?",
    a: "Our clients on 24/7 managed support have automated telemetry linked to our on-call rotation. Critical severity incidents trigger immediate engineer response according to agreed SLA runbooks.",
  },
  {
    q: "Do you replace our internal IT team, or work alongside them?",
    a: "Both models are common. For companies without an IT department, we act as their complete IT and security operations team. For companies with existing staff, we augment them by taking over specialized tasks like 24/7 monitoring, cloud migrations, or SIEM management.",
  },
  {
    q: "How do you verify that our backups actually work?",
    a: "Automated backups are useless if restores fail. We conduct scheduled, documented restoration drills where we spin up test databases and environments from cold snapshots, measuring exact Recovery Time Objectives (RTO).",
  },
];

export default function ItAndSecurityPage() {
  return (
    <>
      <PageHero
        badge="Pillar 03 — IT & Security"
        title="Keep your technology running, secure, and ready to scale."
        description="We administer cloud environments, servers, networks, databases, and cybersecurity operations so your business stays resilient, available, and protected."
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
            eyebrow="Operational Resilience"
            title="Why Companies Trust Elvtera to Run Their Technology"
            description="Downtime costs revenue and security breaches destroy reputation. We implement the disciplined operational safeguards modern businesses require."
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

      {/* Capabilities Breakdown */}
      <section id="capabilities" className="py-20 lg:py-24 bg-surface border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Detailed Services"
            title="Complete Infrastructure & Security Operations"
            description="From multi-cloud provisioning to SIEM log monitoring, we maintain the operational backbone behind your company."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.id} id={cap.id} className="p-7 rounded-3xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between hover:border-emerald-300 transition-all">
                  <div>
                    <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 mb-5">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-xl font-bold text-primary font-display">{cap.title}</h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">{cap.description}</p>
                    <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-xs text-slate-700">
                      {cap.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
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

      {/* How We Work */}
      <section className="py-20 lg:py-24 bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Operations Process"
            title="How We Operate and Defend Your IT"
            description="Our disciplined runbook-driven methodology eliminates single points of failure and prevents operational surprises."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { num: "01", name: "Understand", desc: "Audit server topologies, IAM privileges, network routes, and single points of failure." },
              { num: "02", name: "Plan", desc: "Design hardened baseline configs, automated snapshot retention, and SLA escalation policies." },
              { num: "03", name: "Build", desc: "Deploy Terraform IaC, configure SIEM agents, establish VPN tunnels, and verify snapshots." },
              { num: "04", name: "Operate", desc: "Provide 24/7 telemetry monitoring, scheduled off-peak OS patching, and incident triage." },
              { num: "05", name: "Improve", desc: "Conduct quarterly disaster recovery failover tests and cloud cost optimization reviews." },
            ].map((step) => (
              <div key={step.num} className="p-6 rounded-2xl border border-slate-200 bg-surface">
                <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">{step.num}</span>
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
            title="Flexible Ways to Manage Your IT & Security"
            description="Engage our senior systems engineers for a dedicated project, ongoing stewardship, or embedded team extension."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="p-8 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase">Project-Based</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Migration & Hardening</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Fixed-scope cloud migrations, SIEM deployments, infrastructure rebuilds, or comprehensive security audits.
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
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Managed IT & SecOps</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Continuous 24/7 monitoring, Linux/Windows patch management, SIEM alert correlation, and backup verification under SLAs.
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
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Embedded Engineers</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Dedicated infrastructure, DevOps, or security engineers who integrate directly into your operations and communication channels.
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
            Infrastructure & Security Stack
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {technologies.map((tech) => (
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
            title="Questions About IT & Security"
            description="Clear answers about SLAs, credentials, monitoring, and backups."
          />

          <div className="mt-12 space-y-4">
            {faqs.map((faq, idx) => (
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
        title="Ready to stabilize and secure your technology?"
        description="Book a technical consultation with an Elvtera systems and security specialist. We will evaluate your current infrastructure, backup posture, and uptime targets."
        buttonLabel="Discuss Your IT Environment"
        buttonHref="/contact?intent=it-environment"
      />
    </>
  );
}
