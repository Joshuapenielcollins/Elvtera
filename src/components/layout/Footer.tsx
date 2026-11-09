import React from 'react';
import { Link } from 'react-router-dom';
import { footerNavigation } from '../../data/navigation';
import { CONTACT_EMAIL, siteConfig } from '../../data/siteConfig';

const Col: React.FC<{ title: string; links: { label: string; href: string }[] }> = ({ title, links }) => (
  <div>
    <h3 className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/40">{title}</h3>
    <ul className="mt-4 space-y-2.5">
      {links.map((l) => (
        <li key={l.href + l.label}>
          <Link to={l.href} className="text-[14.5px] text-white/75 transition-colors hover:text-white">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer: React.FC = () => (
  <footer className="relative overflow-hidden bg-ink pb-20 pt-20 text-white lg:pb-10">
    <div className="desk-grid-dark absolute inset-0" aria-hidden="true" />
    <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img
            src="/elvtera-logo.png"
            alt="Elvtera Business Solutions"
            className="h-7 w-auto brightness-0 invert"
          />
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">
            Signal-based outbound that puts qualified buyers on your calendar, plus the systems and
            websites that turn them into clients.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-6 inline-block font-hand text-[28px] text-white underline decoration-blue decoration-2 underline-offset-4 hover:text-blue-soft"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
        <Col title="Services" links={footerNavigation.services} />
        <Col title="Company" links={footerNavigation.company} />
      </div>

      <div
        aria-hidden="true"
        className="mt-14 select-none text-center font-serif text-[clamp(72px,19vw,260px)] italic leading-[0.8] tracking-[-0.04em] text-white/[0.06]"
      >
        elvtera
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-[13px] text-white/45 sm:flex-row sm:items-center">
        <span>
          © {new Date().getFullYear()} {siteConfig.legalName}. India &amp; USA.
        </span>
        <div className="flex gap-5">
          {footerNavigation.legal.map((l) => (
            <Link key={l.href} to={l.href} className="hover:text-white">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
