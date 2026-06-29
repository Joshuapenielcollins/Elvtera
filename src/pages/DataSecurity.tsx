import React from 'react';
import SEO from '../components/SEO';
import { ShieldAlert } from 'lucide-react';

export const DataSecurity: React.FC = () => {
  return (
    <div className="w-full bg-brand-bg-light text-slate-700 min-h-screen py-16 sm:py-20 font-sans">
      <SEO 
        title="Data Security" 
        description="ELVTERA Data Security Protocols - details on encryption standards, database isolation, and SOC2 compliance." 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <span className="text-brand-blue text-xs font-bold uppercase tracking-wider bg-brand-blue/10 px-3.5 py-1.5 rounded-full w-fit mx-auto block mb-3.5">
            Security Core
          </span>
          <h1 className="font-display font-extrabold text-4xl text-slate-900">Data Security Standards</h1>
          <p className="text-xs text-slate-450 font-semibold">Last Updated: June 27, 2026</p>
        </div>

        {/* Content Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8 text-left">
          
          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-slate-950 flex items-center space-x-2">
              <ShieldAlert className="h-5 w-5 text-brand-blue" />
              <span>1. Corporate SOC 2 Compliance Controls</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              We align our infrastructure and corporate operations with the **SOC 2 Type II** security framework. We maintain strict security controls over logical access limits, deployment testing blueprints, API key logs, and database access logs. Annual audits are conducted by external entities to ensure our systems comply with international standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-slate-950 flex items-center space-x-2">
              <ShieldAlert className="h-5 w-5 text-brand-blue" />
              <span>2. Encryption Standards (Transit & Rest)</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              We safeguard data by enforcing cryptographic separation protocols at every layer:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1.5 pl-2 font-medium">
              <li><strong>Data in Transit:</strong> All network requests, API queries, and webhook dispatches use TLS 1.3 encryption. Unencrypted HTTP endpoints are blocked globally.</li>
              <li><strong>Data at Rest:</strong> PostgreSQL tables, customer records, and backup logs are encrypted using AES-256 blocks with regular key rotation routines.</li>
              <li><strong>Secure Tokens:</strong> JWT access keys and authentication codes are stored in secure virtual vaults, isolated from application log files.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-slate-950 flex items-center space-x-2">
              <ShieldAlert className="h-5 w-5 text-brand-blue" />
              <span>3. Tenant Separation & Private Environments</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              We reject shared multi-tenant database designs that risk data leaks. Every corporate system we engineer is deployed on its own dedicated virtual private cloud (VPC) environment. Database tables, RAG vector context indexes, and search endpoints are locked inside private subnets, preventing access from external networks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-slate-950 flex items-center space-x-2">
              <ShieldAlert className="h-5 w-5 text-brand-blue" />
              <span>4. Infrastructure and Telephony Security Safeguards</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Our cloud servers are hosted in Tier-III data centers audited under ISO 27001 guidelines, requiring strict multi-factor authentication controls and round-the-clock facility monitoring. For telephony automations, all Twilio SIP connections are secured using Secure Real-Time Transport Protocols (SRTP) to encrypt voice consultation audio packets against interceptions.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
export default DataSecurity;
