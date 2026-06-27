import React from 'react';
import SEO from '../components/SEO';
import { Activity } from 'lucide-react';

export const SLAAgreement: React.FC = () => {
  return (
    <div className="w-full bg-brand-bg-light text-slate-700 min-h-screen py-16 sm:py-20 font-sans">
      <SEO 
        title="SLA Agreement" 
        description="ELVTERA Service Level Agreement (SLA) - uptime guarantees, support response schedules, and maintenance routines." 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <span className="text-brand-blue text-xs font-bold uppercase tracking-wider bg-brand-blue/10 px-3.5 py-1.5 rounded-full w-fit mx-auto block mb-3.5">
            Service Commitment
          </span>
          <h1 className="font-display font-extrabold text-4xl text-slate-900">Service Level Agreement (SLA)</h1>
          <p className="text-xs text-slate-450 font-semibold">Last Updated: June 27, 2026</p>
        </div>

        {/* Content Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8 text-left">
          
          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-slate-950 flex items-center space-x-2">
              <Activity className="h-5 w-5 text-brand-blue" />
              <span>1. Uptime Commitment (99.9% - 99.99%)</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              ELVTERA commits to maintaining a minimum monthly system availability of **99.9%** for standard cloud deployments, and **99.99%** for high-availability enterprise database configurations. Monthly uptime is calculated by subtracting database downtime minutes from total minutes in the calendar month, excluding scheduled maintenance windows.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-slate-950 flex items-center space-x-2">
              <Activity className="h-5 w-5 text-brand-blue" />
              <span>2. Support Ticket Priority Response Times</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              We classify and resolve system support tickets according to the following schedule:
            </p>
            
            <div className="overflow-x-auto pt-2">
              <table className="w-full text-xs text-slate-650 border border-slate-200 rounded-2xl overflow-hidden font-semibold">
                <thead>
                  <tr className="bg-slate-50 text-slate-800 border-b border-slate-200">
                    <th className="p-3.5 text-left">Priority Level</th>
                    <th className="p-3.5 text-left">Scope & Criticality</th>
                    <th className="p-3.5 text-left">Response Target</th>
                    <th className="p-3.5 text-left">Resolution Window</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-150">
                  <tr>
                    <td className="p-3.5 text-red-500 font-bold">P1 - Critical</td>
                    <td className="p-3.5">Complete server failure, central database offline, or primary billing systems blocked.</td>
                    <td className="p-3.5">Under 30 Minutes</td>
                    <td className="p-3.5">4 Hours</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-orange-500 font-bold">P2 - High</td>
                    <td className="p-3.5">Important features (like WhatsApp alert webhooks or mobile clock-in portals) failing with no workaround.</td>
                    <td className="p-3.5">Under 2 Hours</td>
                    <td className="p-3.5">12 Hours</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-brand-blue font-bold">P3 - Medium</td>
                    <td className="p-3.5">Non-blocking bugs, report generation formatting errors, or UI alignment concerns.</td>
                    <td className="p-3.5">Under 8 Hours</td>
                    <td className="p-3.5">48 Hours</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-slate-500 font-bold">P4 - Low</td>
                    <td className="p-3.5">General features inquiries, minor documentation revisions, or setup optimization scoping queries.</td>
                    <td className="p-3.5">Under 24 Hours</td>
                    <td className="p-3.5">7 Business Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-slate-950 flex items-center space-x-2">
              <Activity className="h-5 w-5 text-brand-blue" />
              <span>3. Backup and Disaster Recovery Metrics</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              To secure database records against outages, our hosting configurations enforce:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1.5 pl-2 font-medium">
              <li><strong>Recovery Point Objective (RPO):</strong> Backups run hourly, limiting potential data loss to a maximum of 60 minutes.</li>
              <li><strong>Recovery Time Objective (RTO):</strong> Our disaster failover scripts restore database operations in a secondary region under 90 minutes.</li>
              <li><strong>Data Redundancy:</strong> Backups are encrypted and stored in geo-redundant storage accounts.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-slate-950 flex items-center space-x-2">
              <Activity className="h-5 w-5 text-brand-blue" />
              <span>4. SLA Credits and Penalties</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              If monthly availability drops below the committed 99.9% uptime target, client accounts are eligible for billing credits applied to subsequent monthly service charges:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1.5 pl-2 font-medium">
              <li>Uptime **99.5% to 99.9%**: 10% monthly service charge credit.</li>
              <li>Uptime **99.0% to 99.5%**: 25% monthly service charge credit.</li>
              <li>Uptime **Below 99.0%**: 50% monthly service charge credit.</li>
            </ul>
          </section>

        </div>

      </div>
    </div>
  );
};
export default SLAAgreement;
