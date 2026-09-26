import Link from "next/link";
import { 
  Server, 
  Database, 
  Cloud, 
  Network, 
  ShieldAlert, 
  RefreshCw, 
  Activity, 
  Settings, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Layers, 
  HardDrive,
  Cpu,
  Lock,
  Clock,
  Terminal,
  Zap,
  Calendar
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Infrastructure & Managed IT Services - Cloud, Linux, Windows, DevOps",
  description:
    "Reliable infrastructure and secure operations. Elvtera manages servers, databases, cloud environments (AWS/Azure/OCI), networks, backups, and 24/7 telemetry for high-uptime businesses and MSPs.",
  path: "/infrastructure",
});

const coreDomains = [
  {
    icon: Server,
    title: "Servers & Virtualization",
    summary: "Linux & Windows administration, hypervisors, storage clusters, and OS lifecycle management.",
    points: [
      "Linux (RHEL, Ubuntu, Debian, Rocky) & Windows Server",
      "Virtualization (VMware vSphere, Proxmox, Hyper-V, KVM)",
      "OS hardening, kernel tuning, and automated package management",
      "Block and object storage configuration (SAN, NAS, S3, ZFS)",
    ],
  },
  {
    icon: Database,
    title: "Database Administration",
    summary: "Database reliability, index optimization, replication, clustering, and recovery testing.",
    points: [
      "PostgreSQL, MySQL, Microsoft SQL Server, and MongoDB",
      "Automated automated dump schedules, WAL archiving, point-in-time recovery",
      "Query profiling, buffer cache tuning, and connection pooling (PgBouncer)",
      "High availability clustering, replication lag monitoring, and failover drills",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    summary: "Architecture, provisioning, migration, and cost governance across AWS, Azure, and OCI.",
    points: [
      "AWS (EC2, ECS, EKS, RDS, VPC, IAM, CloudFront, Route53)",
      "Microsoft Azure & Oracle Cloud Infrastructure (OCI) architectures",
      "Terraform & OpenTofu infrastructure-as-code automation",
      "Cloud cost optimization, reserved instance sizing, and resource pruning",
    ],
  },
  {
    icon: Network,
    title: "Network & Connectivity",
    summary: "Reliable, high-bandwidth interconnects, site-to-site VPNs, and deterministic routing.",
    points: [
      "Site-to-site IPsec & WireGuard mesh VPN tunnels",
      "VPC peering, transit gateways, and hybrid cloud connectivity",
      "Internal and external DNS (Route53, Cloudflare, BIND) & DHCP management",
      "Subnetting, routing tables, CIDR planning, and latency optimization",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Firewall & Perimeter Defense",
    summary: "Strict ingress/egress filtering, stateful inspection, and perimeter threat prevention.",
    points: [
      "Next-Gen Firewalls (pfSense, OPNsense, Fortinet, AWS WAF)",
      "Strict zero-trust network segmentation and microsegmentation",
      "Rate limiting, geo-blocking, DDoS mitigation, and SSL offloading",
      "Quarterly rule audits and obsolete port pruning",
    ],
  },
  {
    icon: RefreshCw,
    title: "Backup & Disaster Recovery",
    summary: "Immutable backups, offsite air-gapping, RTO/RPO enforcement, and scheduled restore tests.",
    points: [
      "Automated snapshot pipelines with 3-2-1 backup topology",
      "Air-gapped and immutable S3/object-lock retention",
      "Disaster Recovery (DR) runbook authoring and simulated failovers",
      "Business continuity planning with explicit RPO and RTO guarantees",
    ],
  },
  {
    icon: Activity,
    title: "Monitoring & Observability",
    summary: "Real-time metrics, synthetic checks, distributed tracing, and actionable alerting.",
    points: [
      "Prometheus, Grafana, Datadog, Zabbix, and CloudWatch integration",
      "Infrastructure telemetry (CPU, RAM, Disk I/O, Network Saturation)",
      "Application health checks, APM, and synthetic transaction probes",
      "Noise-reduced threshold tuning and pager escalation trees",
    ],
  },
  {
    icon: Settings,
    title: "IT Operations & Governance",
    summary: "Structured change control, disciplined patching cycles, and complete documentation.",
    points: [
      "Scheduled patch management and vulnerability mitigation",
      "ITIL-aligned incident, problem, and change management workflows",
      "Comprehensive infrastructure topology maps and living runbooks",
      "Capacity forecasting and compute right-sizing",
    ],
  },
];

const serviceCatalog = [
  "Server Administration",
  "Linux / Windows Administration",
  "Database Administration",
  "Cloud Infrastructure",
  "AWS / Azure / OCI Support",
  "Virtualization Management",
  "Storage Management",
  "Backup & Recovery",
  "Disaster Recovery",
  "Business Continuity",
  "Network Management",
  "Firewall Management",
  "VPN & Remote Access",
  "DNS / DHCP Administration",
  "Infrastructure Monitoring",
  "Application Monitoring",
  "Performance Monitoring",
  "Patch Management",
  "Capacity Management",
  "Infrastructure Documentation",
  "Incident Management",
  "Problem Management",
  "Change Management",
  "Infrastructure Optimization",
  "Cloud Cost Optimization",
];

const operationalMetrics = [
  { metric: "99.95%+", label: "Target production uptime for managed systems" },
  { metric: "<15 min", label: "Priority 1 incident response engagement SLA" },
  { metric: "100%", label: "Tested restore verification on client backups" },
  { metric: "0 Guesswork", label: "Living runbooks and IaC repository for every client" },
];

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        eyebrow="Vertical 01 · Infrastructure & Cloud"
        title="Reliable Infrastructure. Secure Operations."
        description="We operate, maintain, and protect the infrastructure your business depends on. From multi-cloud environments to bare-metal hypervisors, our remote engineering team keeps your servers performant, backed up, and continuously monitored."
        breadcrumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Infrastructure & Managed IT", href: "/infrastructure" },
        ]}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/book?service=infrastructure" size="lg">
            <Calendar className="size-4" />
            Book an Infrastructure Review
          </Button>
          <Button href="#domains" variant="outline" size="lg">
            Explore Capabilities
          </Button>
        </div>
      </PageHero>

      {/* Operational Highlights */}
      <section className="border-b border-line bg-surface py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {operationalMetrics.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.08} className="rounded-xl border border-line bg-white p-6 shadow-sm">
                <p className="font-display text-3xl font-extrabold tracking-tight text-primary">
                  {item.metric}
                </p>
                <p className="mt-2 text-xs font-medium text-slate-600 leading-snug">
                  {item.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core 8 Domains */}
      <section id="domains" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Technical Domains"
            title="Complete Infrastructure Lifecycle Coverage"
            description="We eliminate operational blind spots. Whether you operate entirely in AWS, run hybrid colocation environments, or require specialized Linux clustering, our team acts as your dedicated infrastructure division."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {coreDomains.map((domain, index) => {
              const IconComponent = domain.icon;
              return (
                <Reveal key={domain.title} delay={(index % 4) * 0.05}>
                  <div className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-secondary border border-blue-100">
                      <IconComponent className="size-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-primary font-display">
                      {domain.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      {domain.summary}
                    </p>
                    <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-xs text-slate-600 flex-1">
                      {domain.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-secondary shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full 24-Service Catalog */}
      <section className="border-y border-line bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Capability Breakdown"
            title="24 Operational Services Ready for Deployment"
            description="Engage us for a focused engineering initiative or hand over ongoing operations under a transparent SLA."
          />

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
            {serviceCatalog.map((service, index) => (
              <Reveal key={service} delay={(index % 5) * 0.03}>
                <div className="flex items-center gap-2.5 rounded-xl border border-line bg-white px-4 py-3.5 shadow-xs transition-colors hover:border-secondary/40">
                  <span className="size-2 rounded-full bg-secondary shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">
                    {service}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* MSP Positioning callout */}
          <div className="mt-14 rounded-2xl border border-blue-200 bg-blue-50/50 p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-white px-2.5 py-1 rounded-md border border-blue-200">
                For MSPs & IT Service Providers
              </span>
              <h3 className="mt-3 text-xl font-bold text-primary font-display">
                Your Remote Infrastructure & Engineering Extension
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                We work behind the scenes as your Tier-3 infrastructure and cloud engineering backstop. We handle complex migrations, 24/7 server monitoring, and database troubleshooting under your brand guidelines without interfering with your customer relationships.
              </p>
            </div>
            <Button href="/book?intent=msp" variant="primary" size="lg" className="shrink-0">
              <Calendar className="size-4" />
              Book MSP Partnership Review
            </Button>
          </div>

        </div>
      </section>

      {/* How We Operate Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Disciplined Delivery"
            title="Infrastructure Engineering Without Ambiguity"
            description="Systems cannot run on tribal knowledge. We implement strict runbook documentation and immutable configuration."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-line p-8 bg-surface">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-white">
                <FileText className="size-5" />
              </div>
              <h4 className="mt-5 font-bold text-lg text-primary">Living Runbooks</h4>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Every server, replication setup, and backup routine is documented down to the command line. Any engineer can reproduce the environment reliably.
              </p>
            </div>

            <div className="rounded-2xl border border-line p-8 bg-surface">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-white">
                <Terminal className="size-5" />
              </div>
              <h4 className="mt-5 font-bold text-lg text-primary">Infrastructure as Code</h4>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Cloud resources are managed in Git via Terraform or Ansible. Configuration drift is detected early, and changes are peer-reviewed before applying.
              </p>
            </div>

            <div className="rounded-2xl border border-line p-8 bg-surface">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-white">
                <Clock className="size-5" />
              </div>
              <h4 className="mt-5 font-bold text-lg text-primary">Controlled Maintenance</h4>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Kernel upgrades and database vacuums occur during agreed off-peak maintenance windows, preceded by verified snapshot backups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Ready to stabilize and scale your infrastructure?"
        description="Schedule a 30-minute technical session with an Elvtera infrastructure architect. We will review your current topology, pain points, and availability targets."
        buttonLabel="Book an Infrastructure Review"
        buttonHref="/book?service=infrastructure"
      />
    </>
  );
}
