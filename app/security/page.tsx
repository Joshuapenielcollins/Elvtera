import Link from "next/link";
import { 
  ShieldCheck, 
  Eye, 
  Lock, 
  KeyRound, 
  FileWarning, 
  AlertTriangle, 
  Cpu, 
  Fingerprint, 
  Terminal, 
  ArrowRight, 
  CheckCircle2, 
  Layers,
  Network,
  Search,
  Users,
  Calendar
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Security Operations & Infrastructure Protection - SIEM, IAM, Hardening",
  description:
    "Security operations that protect the infrastructure behind your business. SIEM log management, identity & access controls, endpoint EDR, vulnerability scanning, and incident response support.",
  path: "/security",
});

const securityPillars = [
  {
    icon: Eye,
    title: "Security Monitoring & SIEM",
    description: "Centralized telemetry ingestion and behavioral anomaly detection across servers, endpoints, and cloud accounts.",
    capabilities: [
      "SIEM log collection (Wazuh, Elastic Security, Splunk, Graylog)",
      "Continuous syslog and Windows event log aggregation",
      "Correlated rule triggers for brute force, privilege escalation, and lateral movement",
      "Actionable incident alerting with false-positive filtering",
    ],
  },
  {
    icon: KeyRound,
    title: "IAM & Identity Protection",
    description: "Enforcing principle of least privilege, multi-factor authentication, and rigid credential management.",
    capabilities: [
      "Role-Based Access Control (RBAC) and least-privilege architecture",
      "Mandatory Multi-Factor Authentication (MFA/TOTP/FIDO2 keys)",
      "Centralized identity providers (Okta, Azure AD / Entra ID, Keycloak)",
      "Periodic access reviews and orphaned account offboarding automation",
    ],
  },
  {
    icon: Cpu,
    title: "Endpoint Security & EDR",
    description: "Continuous agent telemetry, malware prevention, process inspection, and host containment.",
    capabilities: [
      "Endpoint Detection & Response (EDR) agent deployment and supervision",
      "Process tree inspection and suspicious binary execution blocks",
      "Host isolation protocols during active containment",
      "Automated threat signature updates and USB device control policies",
    ],
  },
  {
    icon: FileWarning,
    title: "Vulnerability Management",
    description: "Continuous scanning, cvss prioritization, and disciplined patch mitigation pipelines.",
    capabilities: [
      "Automated vulnerability scans across infrastructure and web perimeters",
      "CVSS-based remediation prioritisation tied to real exploitability",
      "OS package and runtime dependency patching schedules",
      "Remediation verification and post-patch rescanning",
    ],
  },
  {
    icon: Terminal,
    title: "System & OS Hardening",
    description: "Stripping unnecessary services, enforcing CIS benchmarks, and locking down ports.",
    capabilities: [
      "CIS benchmark alignment for Linux (Debian/Ubuntu/RHEL) and Windows Server",
      "SSH key-only authentication, disabled root login, and fail2ban jails",
      "Kernel parameter optimization (sysctl networking restrictions)",
      "Strict file permission audits and unprivileged service execution",
    ],
  },
  {
    icon: Network,
    title: "Perimeter & Network Security",
    description: "Segmented VPCs, stateful inspection, encrypted transit, and intrusion prevention.",
    capabilities: [
      "Next-Gen firewall policy reviews and ingress/egress filtering",
      "Zero-trust network segmentation between internal subnets",
      "TLS/SSL termination with modern cipher suite enforcement",
      "WAF rule tuning against SQL injection, XSS, and bot scrapers",
    ],
  },
];

const operationalAreas = [
  "Security Monitoring",
  "SIEM Log Management",
  "Identity & Access Management (IAM)",
  "Multi-Factor Authentication (MFA)",
  "Endpoint Security & EDR",
  "Vulnerability Scanning & Management",
  "Security Hardening (Linux & Windows)",
  "Network Security & Segmentation",
  "Firewall Policy Reviews",
  "Quarterly Access Reviews",
  "Threat Detection & Response Support",
  "Security Configuration Audits",
  "Incident Triage & Investigation",
  "Secrets Vaulting & Key Rotation",
  "Secure Remote Access (Zero-Trust/VPN)",
  "Technical Compliance Readiness",
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Vertical 01 · Security Operations"
        title="Security Operations That Protect the Infrastructure Behind Your Business."
        description="Cybersecurity is not a one-time audit; it is a continuous operational discipline. Elvtera works alongside your engineering team to monitor logs, enforce least privilege, harden systems, and contain threats before they disrupt business."
        breadcrumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Security Operations", href: "/security" },
        ]}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/book?service=security" size="lg">
            <Calendar className="size-4" />
            Book a Security Review
          </Button>
          <Button href="/security-and-trust" variant="outline" size="lg">
            View Security & Trust Practices
          </Button>
        </div>
      </PageHero>

      {/* Philosophy Callout */}
      <section className="border-b border-line bg-surface py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-line bg-white p-6 shadow-xs">
              <h4 className="font-bold text-slate-900 text-sm font-display">Complement Existing Teams</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Whether you have an in-house CISO needing Tier-1/2 triage or an overburdened IT team that lacks bandwidth for log monitoring, we fit seamlessly into your workflow.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-white p-6 shadow-xs">
              <h4 className="font-bold text-slate-900 text-sm font-display">No Empty Claims or Badges</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                We believe in verified engineering controls over vanity badges. We focus on defense in depth, automated audit trails, and concrete containment runbooks.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-white p-6 shadow-xs">
              <h4 className="font-bold text-slate-900 text-sm font-display">Rapid Containment Escalation</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                When anomalous activity or root escalation occurs, our engineers follow clear containment trees to quarantine endpoints, rotate keys, and preserve forensics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Six Pillars */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Operational Security"
            title="Continuous Safeguards Across Your Technology Stack"
            description="We secure the servers, identity platforms, databases, and networks that power your company. Our operational model focuses on the controls that stop actual intrusions."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {securityPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={index * 0.06}>
                  <div className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100">
                      <IconComponent className="size-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-primary font-display">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      {pillar.description}
                    </p>
                    <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5 text-xs text-slate-600 flex-1">
                      {pillar.capabilities.map((cap, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{cap}</span>
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

      {/* Checklist / Capabilities Grid */}
      <section className="border-y border-line bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Service Inventory"
            title="Operational Security Services"
            description="Deployable as a standalone monthly SecOps retainer or integrated directly with our managed infrastructure service."
          />

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {operationalAreas.map((area, index) => (
              <Reveal key={area} delay={index * 0.03}>
                <div className="flex items-center gap-3 rounded-xl border border-line bg-white p-4 shadow-xs hover:border-emerald-400/40 transition-colors">
                  <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">
                    {area}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  Incident Preparedness
                </span>
                <h3 className="mt-3 text-2xl font-bold text-primary font-display">
                  Triage, Quarantine, and Root-Cause Remediation
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  When a security alert fires, time-to-containment is the difference between a minor incident and a catastrophic breach. We isolate compromised nodes, revoke tokens, trace log provenance, and patch the root vulnerability before restoring systems safely.
                </p>
              </div>
              <div className="space-y-3 rounded-xl bg-surface p-6 border border-line text-xs font-mono text-slate-700">
                <div className="flex items-center justify-between border-b border-line pb-2">
                  <span className="font-semibold text-slate-900">INCIDENT WORKFLOW</span>
                  <span className="text-emerald-600 font-bold">ACTIVE PROTOCOL</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">01</span>
                  <span>Ingest & Telemetry Correlation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">02</span>
                  <span>Automated Threshold Alert & Triage</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">03</span>
                  <span>Node Isolation & Credential Revocation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">04</span>
                  <span>Forensic Log Preservation & Patch</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">05</span>
                  <span>Remediation Verification & Debrief</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Protect your infrastructure with disciplined security operations."
        description="Schedule a 30-minute technical session with an Elvtera security specialist to evaluate your logging posture, IAM policies, and vulnerability exposure."
        buttonLabel="Book a Security Review"
        buttonHref="/book?service=security"
      />
    </>
  );
}
