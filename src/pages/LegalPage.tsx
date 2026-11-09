import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/layout/SEOHead';
import { LegalDocument } from '../data/legalData';
import { PageHero } from '../components/kit/Bits';

interface LegalPageProps {
  document: LegalDocument;
}

const others = [
  { label: 'Privacy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Cookies', href: '/cookie-policy' },
];

export const LegalPage: React.FC<LegalPageProps> = ({ document }) => (
  <>
    <SEOHead
      title={document.title}
      description={`${document.title} for Elvtera Business Solutions.`}
      canonicalPath={`/${document.slug}`}
    />

    <PageHero label={`Legal · Updated ${document.lastUpdated}`} title={document.title} />

    <section className="bg-canvas pb-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[220px_1fr]">
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-slate">Documents</div>
          <nav className="mt-3 flex gap-2 lg:flex-col">
            {others.map((o) => (
              <Link
                key={o.href}
                to={o.href}
                className={`rounded-full px-4 py-2 text-[14px] font-medium ${
                  o.href === `/${document.slug}` ? 'btn-gloss-dark text-white' : 'btn-gloss-light text-ink'
                }`}
              >
                {o.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 hidden space-y-1.5 lg:block">
            {document.sections.map((s, i) => (
              <a key={s.heading} href={`#s${i}`} className="block text-[13px] leading-snug text-slate hover:text-ink">
                {s.heading}
              </a>
            ))}
          </div>
        </aside>

        <article className="rounded-[22px] bg-paper p-7 shadow-float sm:p-12">
          <p className="rounded-2xl bg-[#fdf3d6] p-4 text-[13.5px] leading-relaxed text-[#7a5a00]">{document.disclaimer}</p>
          <div className="prose-e">
            {document.sections.map((s, i) => (
              <div key={s.heading} id={`s${i}`} className="scroll-mt-28">
                <h2>{s.heading}</h2>
                {s.content.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  </>
);
