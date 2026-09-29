import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

interface Crumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  eyebrow?: string;
  badge?: string;
  title: string;
  description: string;
  breadcrumbs?: Crumb[];
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Interior page hero: breadcrumb trail, eyebrow/badge, large h1 and lead copy on
 * the light gray surface. Keeps every non-home page opening consistent.
 */
export function PageHero({
  eyebrow,
  badge,
  title,
  description,
  breadcrumbs,
  actions,
  children,
}: PageHeroProps) {
  const displayEyebrow = eyebrow || badge;

  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-1.5">
                  <ChevronRight className="size-3.5" aria-hidden="true" />
                  {index === breadcrumbs.length - 1 ? (
                    <span aria-current="page" className="font-medium text-primary">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-primary">
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <Reveal className="max-w-3xl">
          {displayEyebrow && (
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1 text-xs font-semibold text-secondary">
                <span className="size-1.5 rounded-full bg-secondary" />
                <span>{displayEyebrow}</span>
              </span>
            </div>
          )}
          <h1 className="text-4xl font-extrabold leading-[1.08] text-primary sm:text-5xl lg:text-[3.4rem] font-display">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 lg:text-xl font-normal">
            {description}
          </p>
          {(actions || children) && (
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {actions}
              {children}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
