import React from 'react';
import SEO from '../components/SEO';
import { FileText } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="w-full bg-brand-bg-light text-slate-700 min-h-screen py-16 sm:py-20 font-sans">
      <SEO 
        title="Terms of Service" 
        description="ELVTERA Terms of Service - terms governing enterprise software licensing, billing, and API use." 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <span className="text-brand-blue text-xs font-bold uppercase tracking-wider bg-brand-blue/10 px-3.5 py-1.5 rounded-full w-fit mx-auto block mb-3.5">
            Agreements
          </span>
          <h1 className="font-display font-extrabold text-4xl text-slate-900">Terms of Service</h1>
          <p className="text-xs text-slate-450 font-semibold">Last Updated: June 27, 2026</p>
        </div>

        {/* Content Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8 text-left">
          
          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-slate-950 flex items-center space-x-2">
              <FileText className="h-5 w-5 text-brand-blue" />
              <span>1. Agreement to Terms</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              By accessing, deploying, or utilizing the custom business applications, software interfaces, or automated scripts provided by ELVTERA (operated by Collins Enterprise Solutions LLP), you agree to comply with and be bound by these Terms of Service. If you are entering into this agreement on behalf of a corporation, you represent that you hold the legal authority to bind that entity.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-slate-950 flex items-center space-x-2">
              <FileText className="h-5 w-5 text-brand-blue" />
              <span>2. Software License and Restrictions</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Unless otherwise specified in a signed custom software development contract, all intellectual property, source code, database structures, and interface designs engineered by ELVTERA remain our proprietary property. You are granted a limited, non-exclusive, non-transferable license to execute the software solely for your internal business operations. You agree not to resell, lease, reverse-engineer, or distribute the code to third parties without express written authorization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-slate-950 flex items-center space-x-2">
              <FileText className="h-5 w-5 text-brand-blue" />
              <span>3. API Usage and Limits</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              We deploy automated scripts that connect to third-party endpoints (e.g., official Meta WhatsApp Business API gateways, Twilio SIP telephony networks, and Stripe processing hubs). You are solely responsible for compliance with the terms and usage guidelines of these third-party carriers. We hold no liability for service suspensions, rate limitations, or account suspensions issued by third-party platforms due to billing failures or message template guideline violations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-slate-950 flex items-center space-x-2">
              <FileText className="h-5 w-5 text-brand-blue" />
              <span>4. Warranty Disclaimer and Limitations of Liability</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Our software solutions are provided “as is” and “as available,” without warranties of any kind, whether express or implied. While we strive to ensure 100% data integrity, we do not guarantee that database synchronization will be error-free or uninterrupted. In no event shall Collins Enterprise Solutions LLP be held liable for any lost profits, production downtime, data loss, or indirect damages arising out of software usage failures.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-slate-950 flex items-center space-x-2">
              <FileText className="h-5 w-5 text-brand-blue" />
              <span>5. Governing Law and Jurisdiction</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              These Terms of Service are governed by and construed in accordance with the laws of India and the State of Florida, USA, without regard to conflicts of law principles. Any legal actions or disputes arising out of these terms shall be settled exclusively in the competent courts located in Tamilnadu, India, or Florida, USA.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
export default TermsOfService;
