import React from 'react';
import { SEOHead } from '../components/layout/SEOHead';
import { Btn } from '../components/kit/Btn';
import { Hand, Sticky } from '../components/kit/Paper';

export const NotFoundPage: React.FC = () => (
  <>
    <SEOHead title="Page Not Found" description="The page you requested could not be found on Elvtera." />
    <section className="glow desk-grid flex min-h-[80vh] items-center pb-24 pt-36">
      <div className="mx-auto max-w-2xl px-5 text-center">
        <Sticky tone="pink" pin className="mx-auto inline-block -rotate-3 px-10 py-6">
          <span className="display text-[96px] leading-none">404</span>
        </Sticky>
        <h1 className="display mt-10 text-[clamp(38px,5vw,60px)]">
          This page <span className="accent text-blue">isn't looking for you.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[17px] text-slate">The link may be old, or the page may have moved.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Btn variant="dark" to="/">
            Go home
          </Btn>
          <Btn variant="ghost" to="/contact">
            Contact us
          </Btn>
        </div>
        <Hand className="mt-6 text-[22px]">unlike our outreach</Hand>
      </div>
    </section>
  </>
);
