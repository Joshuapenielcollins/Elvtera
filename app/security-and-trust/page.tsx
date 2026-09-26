import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  Layers, 
  FileText, 
  Eye, 
  Radio, 
  UserCheck, 
  RefreshCw, 
  ArrowRight, 
  CheckCircle2, 
  Server, 
  AlertCircle,
  FileCheck,
  Terminal,
  Database
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Security & Trust - Engineering Safeguards & Operational Integrity",
  description:
    "Built by engineers. Designed for reliable operations. Learn how Elvtera handles access control, credential vaulting, environment isolation, logging, and client security practices.",
  path: "/security-and-trust",
});

const securityPractices = [
  {
    icon: Lock,
    title: "Access Control & Principle of Least Privilege",
    description: "Engineers only receive access to the specific resources required to execute an assigned task. Access is time-bound, role-scoped, and reviewed regularly.",
    safeguards: [
      "Role-Based Access Control (RBAC) across all systems and repositories",
      "Immediate revocation upon task completion or role change",
      "No permanent superuser or root account usage for daily operations",
      "Segregated client environments with zero lateral connectivity",
    ],
  },
  {
    icon: Key,
    title: "MFA & Secure Credential Management",
    description: "Passwords are never shared or hardcoded. All authentication requires hardware or TOTP multi-factor verification.",
    safeguards: [
      "Hardware security keys (FIDO2/WebAuthn) or TOTP mandatory across all staff accounts",
      "Enterprise secrets vaults (e.g., HashiCorp Vault, AWS Secrets Manager, 1Password Teams)",
      "Automated secret scanning on Git commits to prevent token leakage",
      "Regular rotation schedules for SSH keys and API access tokens",
    ],
  },
  {
    icon: Layers,
    title: "Environment Separation",
    description: "Strict physical and logical barriers separate development, staging, and production environments.",
    safeguards: [
      "Production environments run in dedicated VPCs/accounts with distinct access controls",
      "Sanitized data sets for development; real customer PII is never loaded into dev environments",
      "Independent encryption keys for separate application environments",
      "Automated CI/CD promotion gates requiring manual approval for production deploys",
    ],
  },
  {
    icon: Eye,
    title: "Logging, Auditing & Real-Time Monitoring",
    description: "Every administrative command, deployment, and network request produces immutable audit logs.",
    safeguards: [
      "Centralized log aggregation with tamper-resistant retention policies",
      "Continuous alerting on unusual authentication spikes or privilege escalations",
      "Session recording and command logging for bastion/SSH access",
      "Comprehensive telemetry covering CPU, disk I/O, error rates, and ingress traffic",
    ],
  },
  {
    icon: Radio,
    title: "Secure Remote Access & Zero Trust",
    description: "Access to infrastructure requires encrypted tunnels, identity verification, and device posture checks.",
    safeguards: [
      "WireGuard and IPsec VPNs with strict IP allowlisting for administrative consoles",
      "Bastion jump-hosts with public keys and MFA verification",
      "Direct internet exposure for internal management tools is strictly prohibited",
      "Encrypted transport (TLS 1.3) enforced for all operational communication",
    ],
  },
  {
    icon: Database,
    title: "Data Protection & Encryption",
    description: "Client data is safeguarded at every phase of the lifecycle, both in transit and at rest.",
    safeguards: [
      "AES-256 encryption at rest for databases, object storage, and disk volumes",
      "TLS 1.2+ mandatory for all external and internal API communications",
      "Automated sanitization and cryptographic zeroing on decommissioned storage",
      "Client retains full legal ownership and control over all proprietary data",
    ],
  },
  {
    icon: UserCheck,
    title: "Personnel & Engineering Security Practices",
    description: "Our team operates under strict confidentiality, security training, and clean-desk policies.",
    safeguards: [
      "Comprehensive background checks and signed Non-Disclosure Agreements (NDAs)",
      "Continuous security training on phishing prevention, social engineering, and safe coding",
      "Mandatory full-disk encryption (FileVault/BitLocker) on all company workstations",
      "Strict policy against using unapproved third-party AI tools with client source code or data",
    ],
  },
  {
    icon: RefreshCw,
    title: "Backup, Snapshot & Disaster Recovery",
    description: "Tested resilience against hardware failure, ransomware, and human error.",
    safeguards: [
      "Automated 3-2-1 backup topology with offsite, air-gapped immutable storage",
      "Regular automated test restores to verify database integrity",
      "Explicit recovery time (RTO) and recovery point (RPO) targets agreed with clients",
      "Documented disaster recovery failover runbooks tested semi-annually",
    ],
  },
  {
    icon: FileCheck,
    title: "Client Access & Credential Governance",
    description: "Transparent, client-owned access structures that keep you in control at all times.",
    safeguards: [
      "We encourage clients to provision Elvtera accounts inside their own identity providers",
      "You retain master billing and root credentials on all cloud providers",
      "Auditable access logs available to client security officers upon request",
      "Complete handover runbooks enabling any qualified third party to assume operations",
    ],
  },
];

export default function SecurityAndTrustPage() {
  return (
    <>
      <PageHero
        eyebrow="Security & Governance"
        title="Security & Trust"
        description="Built by engineers. Designed for reliable, transparent, and secure operations. We implement rigorous technical controls, strict environment isolation, and disciplined access policies to safeguard the infrastructure and data you entrust to us."
        breadcrumbs={[
          { label: "Security & Trust", href: "/security-and-trust" },
        ]}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/contact?service=security" size="lg">
            Discuss Your Security Requirements
            <ArrowRight className="size-4" />
          </Button>
          <Button href="/security" variant="outline" size="lg">
            View Security Operations Services
          </Button>
        </div>
      </PageHero>

      {/* Engineering Pledge */}
      <section className="border-b border-line bg-surface py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-line bg-white p-8 shadow-xs">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-1 rounded">
                  Our Engineering Pledge
                </span>
                <h3 className="mt-3 text-2xl font-bold text-primary font-display">
                  Actual Technical Safeguards Over Vanity Badges
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  We believe true security is found in configuration discipline, minimal attack surfaces, verified backups, and continuous monitoring. We do not make unsubstantiated certification claims; instead, we invite your technical leadership to review our runbooks, architectural designs, and access governance firsthand.
                </p>
              </div>
              <div className="rounded-xl bg-surface p-6 border border-line space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-2 font-semibold text-primary">
                  <CheckCircle2 className="size-4 text-emerald-600" />
                  <span>You retain 100% ownership of your cloud accounts and code</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-primary">
                  <CheckCircle2 className="size-4 text-emerald-600" />
                  <span>All engineers authenticate via hardware keys or TOTP MFA</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-primary">
                  <CheckCircle2 className="size-4 text-emerald-600" />
                  <span>Immutable backups tested on predictable schedules</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-primary">
                  <CheckCircle2 className="size-4 text-emerald-600" />
                  <span>Air-gapped development, staging, and production tiers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nine Core Practices */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Operational Rigor"
            title="Our Security Controls & Practices"
            description="How we protect client systems, manage access, safeguard credentials, and ensure operational continuity."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {securityPractices.map((practice, index) => {
              const IconC = practice.icon;
              return (
                <Reveal key={practice.title} delay={index * 0.05}>
                  <div className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-slate-50 text-slate-800 border border-slate-200">
                      <IconC className="size-6 text-secondary" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-primary font-display">
                      {practice.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      {practice.description}
                    </p>
                    <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-xs text-slate-600 flex-1">
                      {practice.safeguards.map((item, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-secondary shrink-0 mt-0.5" />
                          <span>{item}</span>
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

      {/* Incident Response Lifecycle */}
      <section className="border-t border-line bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Operational Playbook"
            title="Incident Response & Escalation Protocol"
            description="In the event of an operational anomaly, security event, or service degradation, our team initiates a structured containment process."
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl border border-line bg-white p-6">
              <span className="font-mono text-xs font-bold text-secondary">PHASE 1</span>
              <h4 className="mt-2 font-bold text-base text-primary">Detect & Triage</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Automated monitoring detects threshold anomalies or unauthorized access attempts. Alert is routed to on-call engineers.
              </p>
            </div>

            <div className="rounded-xl border border-line bg-white p-6">
              <span className="font-mono text-xs font-bold text-secondary">PHASE 2</span>
              <h4 className="mt-2 font-bold text-base text-primary">Isolate & Contain</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Impacted nodes or access tokens are isolated to prevent lateral movement while maintaining evidence integrity.
              </p>
            </div>

            <div className="rounded-xl border border-line bg-white p-6">
              <span className="font-mono text-xs font-bold text-secondary">PHASE 3</span>
              <h4 className="mt-2 font-bold text-base text-primary">Remediate & Restore</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Root vulnerability is patched, system binaries verified against checksums, and service restored in staging before production cutover.
              </p>
            </div>

            <div className="rounded-xl border border-line bg-white p-6">
              <span className="font-mono text-xs font-bold text-secondary">PHASE 4</span>
              <h4 className="mt-2 font-bold text-base text-primary">Post-Mortem & Hardening</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                A transparent, blameless post-mortem report is delivered to the client detailing timeline, root cause, and permanent hardening steps taken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Work with a team that respects your operational security."
        description="Schedule a technical conversation to review our security controls, NDA frameworks, and infrastructure management standards."
        buttonLabel="Talk to Elvtera"
        buttonHref="/contact"
      />
    </>
  );
}
