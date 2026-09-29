import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Terminal, 
  Activity, 
  KeyRound, 
  ShieldAlert,
  Server
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cybersecurity & SIEM Operations — Threat Detection & Hardening — Elvtera",
  description:
    "Protect your servers, cloud environments, and sensitive data with centralized SIEM log monitoring, IAM least-privilege, mandatory MFA, and CIS system hardening.",
  path: "/solutions/cybersecurity",
});

const capabilities = [
  {
    icon: Eye,
    title: "Centralized SIEM Log Monitoring",
    description: "Collect, correlate, and analyze security telemetry across Linux/Windows servers, cloud audit trails (AWS CloudTrail), and network devices via Wazuh SIEM.",
    features: [
      "Real-time intrusion detection and anomalous login analysis",
      "Automated alerting for brute-force attempts and privilege escalations",
      "Centralized, immutable log archiving for compliance audit retention",
      "Custom detection rules tuned to your application architecture",
    ],
  },
  {
    icon: KeyRound,
    title: "IAM Least-Privilege & MFA Hardening",
    description: "Eliminate unauthorized access by enforcing least-privilege permissions, mandatory multi-factor authentication (MFA), and SSH key-only policies.",
    features: [
      "Audit of existing AWS, Azure, and server permission boundaries",
      "Mandatory hardware token / WebAuthn or TOTP MFA enforcement",
      "SSH key-only authentication with root login disabled globally",
      "Automated offboarding checklists to instantly revoke access credentials",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Vulnerability Management & Patching",
    description: "Identify and remediate software CVEs, outdated packages, and open ports before attackers can exploit them across your infrastructure.",
    features: [
      "Automated vulnerability scans across container images and host OS",
      "Prioritized patch remediation based on CVSS severity and exposure",
      "Pre-patch snapshot backups to ensure zero disruption during updates",
      "Quarterly executive vulnerability posture and trend reports",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Endpoint & Server Hardening (CIS Alignment)",
    description: "Systematically harden operating systems against attack vectors by aligning configurations with Center for Internet Security (CIS) benchmarks.",
    features: [
      "Kernel parameter hardening, disabling unused network protocols",
      "Enforcing strict file permissions and unsetting dangerous SUID binaries",
      "Host-based firewall (UFW, firewalld, iptables) strict ingress rules",
      "AppArmor and SELinux mandatory access control profile enforcement",
    ],
  },
  {
    icon: Activity,
    title: "Incident Response Support & Forensics",
    description: "Structured technical runbooks and emergency response to contain, investigate, and remediate suspected security incidents or compromised credentials.",
    features: [
      "Rapid isolation of compromised instances and network segments",
      "Digital forensics log inspection and unauthorized change timeline reconstruction",
      "Remediation, credential cycling, and root cause mitigation runbooks",
      "Post-incident reporting for insurance, legal, and compliance authorities",
    ],
  },
  {
    icon: FileText,
    title: "Compliance Readiness Support",
    description: "Align your technical infrastructure, access controls, and logging practices with SOC 2, HIPAA, and ISO 27001 technical control requirements.",
    features: [
      "Technical control gap assessment against standard compliance frameworks",
      "Implementation of audit-ready logging, backup encryption, and access policies",
      "Living security documentation, runbooks, and disaster recovery drill logs",
      "Support during technical auditor review sessions and evidence collection",
    ],
  },
];

const problems = [
  {
    problem: "“We have no centralized visibility into who is logging into our servers or modifying cloud settings.”",
    solution: "We implement Wazuh SIEM log correlation, collecting auth logs across all servers and cloud platforms into one real-time dashboard.",
  },
  {
    problem: "“Our staff still use shared passwords and some accounts don't have multi-factor authentication.”",
    solution: "We enforce strict least-privilege IAM, disable root passwords, implement SSH key rotation, and mandate MFA across all access points.",
  },
  {
    problem: "“We need to pass a SOC 2 or enterprise vendor security audit and don't know where to start.”",
    solution: "We configure the required technical safeguards—encryption at rest, immutable audit logs, vulnerability scans—and document the living runbooks.",
  },
  {
    problem: "“We are worried that an unpatched package on a public-facing server could lead to a breach.”",
    solution: "We automate continuous vulnerability scanning and deploy verified security patches during controlled maintenance windows.",
  },
];

export default function CybersecurityPage() {
  return (
    <>
      <PageHero
        badge="Cybersecurity & SecOps Solutions"
        title="Practical Cybersecurity & Threat Protection for Growing Businesses"
        description="We protect your cloud environments, servers, and data through disciplined SIEM log monitoring, IAM least-privilege access, CIS hardening, and rapid incident support."
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/contact?intent=security-specialist">
              <span>Talk to a Security Specialist</span>
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
            eyebrow="Security Threats"
            title="Real Security Risks Facing Growing Companies"
            description="Attackers target growing companies because they have valuable data but often lack disciplined, continuous security operations."
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
            eyebrow="Security Capabilities"
            title="Defense in Depth Across Your Entire Stack"
            description="Our security practices are built on operational discipline, proactive monitoring, and verified system hardening."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="p-7 rounded-3xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
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

      {/* Process */}
      <section className="py-20 lg:py-24 bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Security Process"
            title="Our 5-Step Security Lifecycle"
            description="From initial credential audit to continuous threat correlation and patch enforcement."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { num: "01", name: "Understand", desc: "Audit existing IAM users, exposed ports, unpatched CVEs, and compliance mandates." },
              { num: "02", name: "Plan", desc: "Design least-privilege policies, SIEM collection rules, and CIS hardening benchmarks." },
              { num: "03", name: "Build", desc: "Deploy SIEM agents, enforce MFA, configure host firewalls, and air-gap backups." },
              { num: "04", name: "Operate", desc: "Continuous 24/7 telemetry monitoring, log correlation, and prioritized patch remediation." },
              { num: "05", name: "Improve", desc: "Quarterly vulnerability scans, access privilege reviews, and incident drills." },
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
            title="How to Engage Our Security Engineers"
            description="Choose the model that fits your security maturity and compliance timeline."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="p-8 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase">Project-Based</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Security Audit & Hardening</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Fixed-scope infrastructure security audit, SIEM installation, MFA rollout, and OS hardening.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Button href="/contact?intent=security-specialist&model=project" variant="outline" className="w-full">
                  Start Security Project
                </Button>
              </div>
            </div>

            <div className="p-8 rounded-3xl border-2 border-secondary bg-white shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-secondary bg-blue-50 px-3 py-1 rounded-full uppercase">Ongoing Support</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Managed SecOps & SIEM</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Continuous 24/7 SIEM monitoring, threat detection, vulnerability patch management, and incident response under SLAs.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Button href="/contact?intent=security-specialist&model=ongoing" variant="primary" className="w-full">
                  Discuss Ongoing SecOps
                </Button>
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase">Extended Team</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Embedded Security Engineer</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Add a dedicated senior security engineer to review pull requests, cloud architecture, and compliance tasks.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Button href="/contact?intent=security-specialist&model=extended-team" variant="outline" className="w-full">
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
            Security Technologies & Frameworks
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {["Wazuh SIEM", "CIS Benchmarks", "AWS CloudTrail", "Azure Entra ID", "WireGuard", "OpenVAS", "OSQuery", "AppArmor / SELinux", "ClamAV", "Suricata"].map((tech) => (
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
            title="Questions About Cybersecurity Services"
            description="Clear answers about SIEM data privacy, threat response, and compliance."
          />

          <div className="mt-12 space-y-4">
            {[
              {
                q: "Where is our SIEM telemetry and log data stored?",
                a: "In your dedicated environment. We do not aggregate multiple clients' private log data into a shared multi-tenant database. Your Wazuh SIEM instance is provisioned inside your private VPC with strict encryption.",
              },
              {
                q: "What happens if a critical breach or ransomware indicator is detected?",
                a: "Our automated telemetry alerts our on-call security team immediately. We isolate affected instances, inspect forensic logs, execute credential cycling runbooks, and provide complete investigation reports.",
              },
              {
                q: "Can you help our software team implement secure coding practices?",
                a: "Yes. In addition to infrastructure and server security, our engineers help implement automated dependency vulnerability scanning (Snyk/Dependabot) and secret detection in your CI/CD pipelines.",
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
        title="Ready to strengthen your security posture?"
        description="Book a confidential discussion with an Elvtera security specialist. We will evaluate your access controls, audit logging, and vulnerability remediation plan."
        buttonLabel="Talk to a Security Specialist"
        buttonHref="/contact?intent=security-specialist"
      />
    </>
  );
}
