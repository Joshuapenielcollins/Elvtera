import React from 'react';
import SEO from '../components/SEO';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="w-full bg-brand-bg-light text-slate-700 min-h-screen py-16 sm:py-20 font-sans">
      <SEO 
        title="Privacy Policy" 
        description="ELVTERA Privacy Policy - General Data Protection Regulation (GDPR) compliance and data retention terms." 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <span className="text-brand-blue text-xs font-bold uppercase tracking-wider bg-brand-blue/10 px-3.5 py-1.5 rounded-full w-fit mx-auto block mb-3.5">
            Legal Standards
          </span>
          <h1 className="font-display font-extrabold text-4xl text-slate-900">Privacy Policy</h1>
          <p className="text-xs text-slate-450 font-semibold">Last Updated: June 27, 2026</p>
        </div>

        {/* Content Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8 text-left">
          
          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-slate-950 flex items-center space-x-2">
              <ShieldCheck className="h-5 w-5 text-brand-blue" />
              <span>1. Overview and Scope</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Collins Enterprise Solutions LLP, operating as ELVTERA (“we,” “us,” or “our”), is committed to protecting the privacy and security of the personal and operational data we process. This Privacy Policy describes how we collect, use, store, and safeguard data in connection with our custom business software, ERP systems, AI integrations, and Automations services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-slate-950 flex items-center space-x-2">
              <ShieldCheck className="h-5 w-5 text-brand-blue" />
              <span>2. Data We Collect and Process</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Depending on the software modules and integrations deployed, we may process:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1.5 pl-2 font-medium">
              <li><strong>Contact Information:</strong> Names, corporate email addresses, phone registrations, and mailing addresses.</li>
              <li><strong>System Integration Data:</strong> API tokens, database connection credentials, CRM ticket history, and webhook logs.</li>
              <li><strong>Operational Transaction Data:</strong> Barcode scan parameters, bills of materials (BOM), payroll records, and stock weights.</li>
              <li><strong>Communication Records:</strong> Text logs, Twilio voice consultation audio logs, and Meta WhatsApp chat history.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-slate-950 flex items-center space-x-2">
              <ShieldCheck className="h-5 w-5 text-brand-blue" />
              <span>3. Data Retention and Storage Systems</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              All databases are hosted in secure, isolated cloud servers utilizing AES-256 encryption both at rest and in transit. We retain client data only for as long as necessary to fulfill the service scopes outlined in our Service Level Agreements (SLAs). Once a service contract terminates, data is securely scrubbed from relational databases and cloud backup indices within thirty (30) business days.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-slate-950 flex items-center space-x-2">
              <ShieldCheck className="h-5 w-5 text-brand-blue" />
              <span>4. General Data Protection Regulation (GDPR) Rights</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              For European Union (EU) clients, we process personal data in compliance with GDPR guidelines as a Data Processor. Under these regulations, users hold the following rights:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1.5 pl-2 font-medium">
              <li>The right to request access to and correction of stored personal information tables.</li>
              <li>The right to request data erasure (“Right to be Forgotten”) from database layers.</li>
              <li>The right to export account records in a structured, machine-readable JSON format.</li>
              <li>The right to withdraw processing permissions at any time.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-slate-950 flex items-center space-x-2">
              <ShieldCheck className="h-5 w-5 text-brand-blue" />
              <span>5. Contact Information</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              For security requests, GDPR inquiries, or privacy compliance questions, please contact our Data Protection Officer at:
            </p>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-xs font-semibold text-slate-650 space-y-1 w-fit">
              <p className="font-bold text-slate-800">Collins Enterprise Solutions LLP</p>
              <p>Attn: Data Security & Compliance Group</p>
              <p>Tamilnadu, India | Florida, USA</p>
              <p>Email: hello@elvtera.com</p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};
export default PrivacyPolicy;
