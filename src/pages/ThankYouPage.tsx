import React from 'react';
import { useLocation } from 'react-router-dom';
import { SEOHead } from '../components/layout/SEOHead';
import { openBookCall } from '../utils/analytics';
import { Btn } from '../components/kit/Btn';
import { Hand, Sticky } from '../components/kit/Paper';

export const ThankYouPage: React.FC = () => {
  const location = useLocation();
  const state = (location.state as { name?: string; email?: string }) || {};

  return (
    <>
      <SEOHead title="Thank You" description="Your message has reached Elvtera Business Solutions." />
      <section className="glow desk-grid flex min-h-[80vh] items-center pb-24 pt-36">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate">Brief received</span>
          <h1 className="display mt-5 text-[clamp(44px,6vw,76px)]">
            Thank you{state.name ? `, ${state.name.split(' ')[0]}` : ''}. <span className="accent text-blue">We're on it.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-[17px] leading-relaxed text-slate">
            Our team will look at your market and reply within one business day
            {state.email ? <> at <b className="font-medium text-ink">{state.email}</b></> : null}.
          </p>
          <Sticky tone="butter" pin className="mx-auto mt-12 max-w-sm -rotate-2 p-6 text-left">
            <p className="font-hand text-[22px] leading-tight">Don't want to wait? Grab a 30-minute slot on our calendar instead.</p>
            <Btn variant="dark" arrow className="mt-4" onClick={openBookCall}>
              Book a call
            </Btn>
          </Sticky>
          <div className="mt-12">
            <Btn variant="ghost" to="/">
              Back to home
            </Btn>
          </div>
          <Hand className="mt-6 text-[22px]">talk soon</Hand>
        </div>
      </section>
    </>
  );
};
