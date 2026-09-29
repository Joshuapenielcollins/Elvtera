import Link from "next/link";
import { 
  Cloud, 
  Server, 
  Database, 
  Network, 
  RefreshCw, 
  DollarSign, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Terminal, 
  Layers, 
  Activity 
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cloud & Infrastructure Services — AWS, Azure, OCI, Terraform — Elvtera",
  description:
    "Multi-cloud architecture, Terraform IaC, server management, immutable backups, disaster recovery, and cloud cost optimization across AWS, Azure, and OCI.",
  path: "/solutions/cloud-infrastructure",
});

const capabilities = [
  {
    icon: Cloud,
    title: "Multi-Cloud Architecture & Migration",
    description: "Design, provision, and migrate workloads across AWS, Microsoft Azure, and Oracle Cloud Infrastructure (OCI) with zero-downtime cutover plans.",
    features: [
      "AWS (EC2, ECS, EKS, RDS, VPC, IAM, CloudFront, Route53)",
      "Microsoft Azure Virtual Machines, AKS, and Entra ID integration",
      "Oracle Cloud (OCI) high-performance compute and database architecture",
      "Safe database and asset migration from legacy hosting to public cloud",
    ],
  },
  {
    icon: Terminal,
    title: "Infrastructure as Code (IaC)",
    description: "Manage your entire cloud estate through version-controlled Terraform or OpenTofu code. Eliminate configuration drift and ensure reproducible environments.",
    features: [
      "Modular, peer-reviewed Terraform modules stored in Git",
      "Automated CI/CD validation pipelines (terraform plan / apply)",
      "Environment parity between Staging, UAT, and Production",
      "Automated state file locking in secure, encrypted backend stores",
    ],
  },
  {
    icon: DollarSign,
    title: "Cloud Cost Optimization & FinOps",
    description: "Stop wasting money on unattached volumes, idle instances, and over-provisioned databases with disciplined resource rightsizing and reserved pricing.",
    features: [
      "Comprehensive cloud spend audit identifying immediate waste",
      "Compute rightsizing based on historical 95th-percentile utilization",
      "Reserved Instance (RI) and Savings Plan capacity planning",
      "Automated shutdown schedules for non-production environments",
    ],
  },
  {
    icon: Network,
    title: "Network & VPN Interconnects",
    description: "High-throughput, encrypted network backbones connecting multi-cloud VPCs, on-premises offices, and remote engineers securely.",
    features: [
      "Site-to-site IPsec and WireGuard mesh VPN tunnels",
      "VPC peering, AWS Transit Gateway, and route table design",
      "Cloudflare and Route53 DNS management with DDoS mitigation",
      "Microsegmentation preventing lateral network movement",
    ],
  },
  {
    id: "backup",
    icon: RefreshCw,
    title: "Immutable Backups & Disaster Recovery",
    description: "3-2-1 backup topology with air-gapped S3 object-lock protection, automated point-in-time recovery, and scheduled cold restore drills.",
    features: [
      "Object-lock immutable storage preventing ransomware tampering",
      "Continuous WAL archiving and point-in-time database restoration",
      "Documented Disaster Recovery (DR) runbooks with RTO/RPO targets",
      "Simulated quarterly failover testing with executive sign-off",
    ],
  },
  {
    icon: Activity,
    title: "Container & Kubernetes Operations",
    description: "Deploy and manage containerized microservices across Docker, Amazon ECS, and managed Kubernetes with automated health healing.",
    features: [
      "Docker container optimization and multi-stage build minimization",
      "Kubernetes cluster upgrades, ingress controllers, and certificate management",
      "Horizontal Pod Autoscaling (HPA) responding to traffic surges",
      "Centralized container log ingestion and crash-loop alerting",
    ],
  },
];

const problems = [
  {
    problem: "“Our cloud bills keep ballooning every month with no correlation to user growth.”",
    solution: "We conduct exhaustive cost audits, identify unattached disks, downsize oversized compute nodes, and configure reserved instance savings.",
  },
  {
    problem: "“Everything in our cloud was configured manually through the web console and nobody knows how to rebuild it.”",
    solution: "We reverse-engineer and codify your entire infrastructure into modular Terraform code, creating reproducible, version-controlled environments.",
  },
  {
    problem: "“We are terrified of what would happen if a database was corrupted or hit by ransomware.”",
    solution: "We implement air-gapped, immutable object-lock backups that cannot be modified or deleted, backed by verified recovery drills.",
  },
  {
    problem: "“We need to migrate our systems to AWS or Azure without suffering days of downtime.”",
    solution: "We architect phased migration pipelines using continuous database replication, achieving cutovers during short scheduled off-peak windows.",
  },
];

export default function CloudInfrastructurePage() {
  return (
    <>
      <PageHero
        badge="Cloud & Infrastructure Solutions"
        title="High-Uptime Cloud Architecture, Terraform IaC & Operations"
        description="We architect, provision, migrate, and maintain scalable infrastructure across AWS, Azure, and OCI with automated backups and cloud cost governance."
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
            eyebrow="Cloud Realities"
            title="Common Cloud Infrastructure Inefficiencies"
            description="The cloud offers unlimited scalability, but without disciplined architecture it leads to runaway costs, security gaps, and operational brittleness."
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
            eyebrow="Cloud Capabilities"
            title="Comprehensive Multi-Cloud Engineering"
            description="From initial architectural blueprint to 24/7 continuous operations and disaster recovery."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} id={cap.id} className="p-7 rounded-3xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
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
            title="Our Cloud Engineering Framework"
            description="A systematic approach that avoids downtime, prevents configuration drift, and ensures complete client asset ownership."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { num: "01", name: "Understand", desc: "Evaluate cloud topologies, network routes, monthly expenditure, and uptime goals." },
              { num: "02", name: "Plan", desc: "Design multi-region architectures, Terraform modules, and cost reduction strategies." },
              { num: "03", name: "Build", desc: "Deploy resources via IaC, configure VPC peering, set up object-lock backups, and test." },
              { num: "04", name: "Operate", desc: "Provide 24/7 telemetry monitoring, automated security patching, and on-call response." },
              { num: "05", name: "Improve", desc: "Conduct quarterly FinOps reviews, rightsizing instances and verifying recovery drills." },
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
            title="How to Partner With Our Cloud Architects"
            description="Select the engagement model that matches your current infrastructure roadmap."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="p-8 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase">Project-Based</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Migration & IaC Rebuild</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Fixed-scope cloud migrations, Terraform codification projects, or cost optimization sprints.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Button href="/contact?intent=it-environment&model=project" variant="outline" className="w-full">
                  Start a Cloud Project
                </Button>
              </div>
            </div>

            <div className="p-8 rounded-3xl border-2 border-secondary bg-white shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-secondary bg-blue-50 px-3 py-1 rounded-full uppercase">Ongoing Support</span>
                <h4 className="mt-4 font-bold text-xl text-primary font-display">24/7 Managed Cloud</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Continuous multi-cloud operations, 24/7 uptime monitoring, backup testing, and patch management under SLAs.
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
                <h4 className="mt-4 font-bold text-xl text-primary font-display">Dedicated Cloud Engineers</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Embed certified AWS, Azure, or OCI DevOps architects directly into your engineering team sprints.
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
            Cloud Providers & Platforms
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {["Amazon Web Services (AWS)", "Microsoft Azure", "Oracle Cloud (OCI)", "Terraform", "OpenTofu", "Docker", "Kubernetes", "Cloudflare", "WireGuard"].map((tech) => (
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
            title="Questions About Cloud Infrastructure"
            description="Clear answers about accounts, credentials, and cost optimization."
          />

          <div className="mt-12 space-y-4">
            {[
              {
                q: "Do you build inside our cloud accounts or your own?",
                a: "Always in your accounts. You retain full master billing and administrative ownership of all AWS, Azure, or OCI accounts. We access the environment through dedicated, least-privilege IAM roles.",
              },
              {
                q: "How much can we expect to save on our cloud bills with cost optimization?",
                a: "Most businesses that have grown quickly without dedicated FinOps practices save between 20% and 40% on monthly cloud spend through idle resource pruning, compute rightsizing, and reserved capacity planning.",
              },
              {
                q: "What is your approach to infrastructure code handover?",
                a: "All Terraform scripts, variables, and documentation are committed directly to your private Git repository. Your team can run, modify, or extend the infrastructure code at any time without vendor lock-in.",
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
        title="Ready to optimize and scale your cloud infrastructure?"
        description="Book a technical discovery session with an Elvtera cloud architect. We will evaluate your current topology, cost savings opportunities, and disaster recovery posture."
        buttonLabel="Discuss Your IT Environment"
        buttonHref="/contact?intent=it-environment"
      />
    </>
  );
}
