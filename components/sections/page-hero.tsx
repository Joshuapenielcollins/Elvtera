import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

interface Crumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs?: Crumb[];
  children?: React.ReactNode;
}

/**
 * Interior page hero: breadcrumb trail, eyebrow, large h1 and lead copy on
 * the light gray surface. Keeps every non-home page opening consistent.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: PageHeroProps) {
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-secondary">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.08] text-primary sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 lg:text-xl">
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
