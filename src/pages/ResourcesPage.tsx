import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock } from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { resourceArticles } from '../data/proofData';
import { Btn } from '../components/kit/Btn';
import { PageHero } from '../components/kit/Bits';
import { Reveal } from '../components/kit/Paper';

/** Lists real articles. Hidden from the menu until at least 3 exist. */
export const ResourcesPage: React.FC = () => {
  const [cat, setCat] = useState('All');
  const cats = ['All', ...Array.from(new Set(resourceArticles.map((a) => a.category)))];
  const list = resourceArticles.filter((a) => cat === 'All' || a.category === cat);

  return (
    <>
      <SEOHead title="Resources" description="Notes on buying signals, deliverability and B2B pipeline conversion." canonicalPath="/resources" />
      <PageHero
        label="Resources"
        title={
          <>
            Notes from <span className="accent text-blue">the outbound desk.</span>
          </>
        }
        sub="Short, practical write-ups on signals, deliverability and turning replies into revenue."
      />
      <section className="bg-canvas pb-20">
        <div className="mx-auto max-w-6xl px-5">
          {resourceArticles.length >= 3 ? (
            <>
              <div className="flex flex-wrap gap-2">
                {cats.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCat(c)}
                    className={`rounded-full px-4 py-2 text-[13.5px] font-medium ${cat === c ? 'btn-gloss-dark text-white' : 'btn-gloss-light text-ink'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {list.map((a, i) => (
                  <Reveal key={a.id} delay={(i % 3) * 0.05}>
                    <Link to={`/resources/${a.id}`} className="group flex h-full flex-col rounded-[22px] bg-paper p-7 shadow-card transition-shadow hover:shadow-float">
                      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.1em] text-slate">
                        <span className="text-blue">{a.category}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {a.readingTime}
                        </span>
                      </div>
                      <h2 className="display mt-5 text-[26px] leading-tight">{a.title}</h2>
                      <p className="mt-3 text-[15px] leading-relaxed text-slate">{a.summary}</p>
                      <span className="mt-auto flex items-center gap-1 pt-6 text-[14px] font-medium">
                        Read <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </>
          ) : (
            <div className="mx-auto max-w-xl rounded-[22px] bg-paper p-12 text-center shadow-float">
              <h2 className="display text-[32px]">First notes coming soon.</h2>
              <p className="mt-3 text-[15px] text-slate">We'll publish once they're worth your time.</p>
              <Btn variant="dark" className="mt-6" to="/">
                Back to home
              </Btn>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
