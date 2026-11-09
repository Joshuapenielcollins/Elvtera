import React from 'react';
import { SEOHead } from '../../components/layout/SEOHead';
import { Btn } from '../../components/kit/Btn';
import { NumberDot } from '../../components/kit/Bits';
import { Hand } from '../../components/kit/Paper';

const next = [
  'We review your website and ideal customer.',
  'We check how many live buying signals exist in your sector.',
  'You get an email from our team within 2 working days.',
];

export const PilotThanksPage: React.FC = () => (
  <>
    <SEOHead title="Application Received" description="Thanks. We'll review your application and email you within 2 working days." />
    <section className="glow desk-grid flex min-h-[80vh] items-center pb-24 pt-36">
      <div className="mx-auto max-w-2xl px-5 text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate">Pilot application</span>
        <h1 className="display mt-5 text-[clamp(44px,6vw,76px)]">
          Application <span className="accent text-blue">received.</span>
        </h1>
        <div className="mx-auto mt-10 max-w-md space-y-3 text-left">
          {next.map((n, i) => (
            <div key={n} className="flex items-center gap-4 rounded-2xl bg-paper p-4 shadow-card">
              <NumberDot n={i + 1} />
              <span className="text-[15px]">{n}</span>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Btn variant="dark" to="/">
            Back to home
          </Btn>
        </div>
        <Hand className="mt-6 text-[22px]">we'll be in touch soon</Hand>
      </div>
    </section>
  </>
);
