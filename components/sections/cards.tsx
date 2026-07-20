import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import type { CaseStudy, Feature, Insight, Service, Industry, Testimonial } from "@/content/types";
import { getIndustry } from "@/content/industries";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

/**
 * Card primitives shared across pages.
 *
 * One visual language - rounded-2xl, hairline border, soft shadow that
 * deepens slightly on hover - applied to services, industries, features,
 * case studies, insights and testimonials.
 */

const cardBase =
  "group relative flex h-full flex-col rounded-2xl border border-slate-100 bg-white/80 backdrop-blur-md p-8 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-secondary/35 hover:shadow-[var(--shadow-card-hover)]";

/** Icon badge used at the top of feature and link cards. */
function IconBadge({ name, className }: { name: string; className?: string }) {
  return (
    <span className={cn("inline-flex items-center justify-center size-12 rounded-xl bg-slate-50 text-slate-700 border border-slate-100/50 shadow-[inset_0_1px_2px_rgba(9,9,11,0.02)] transition-all duration-500 group-hover:bg-secondary/5 group-hover:text-secondary group-hover:border-secondary/10", className)}>
      <Icon name={name} className="size-6" />
    </span>
  );
}

/** Full-card link overlay + arrow affordance. */
function CardLink({ href, label }: { href: string; label: string }) {
  return (
    <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-secondary transition-colors duration-300">
      {/* Stretched link makes the whole card clickable while staying accessible. */}
      <Link href={href} className="after:absolute after:inset-0 after:rounded-2xl">
        {label}
      </Link>
      <ArrowRight
        aria-hidden="true"
        className="size-4 transition-transform duration-300 group-hover:translate-x-1.5"
      />
    </span>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className={cardBase}>
      <IconBadge name={service.icon} />
      <h3 className="mt-5 text-lg font-bold text-primary">
        {service.shortName}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
        {service.excerpt}
      </p>
      <CardLink href={`/services/${service.slug}`} label="Explore service" />
    </article>
  );
}

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <article className={cardBase}>
      <IconBadge name={industry.icon} />
      <h3 className="mt-5 text-lg font-bold text-primary">{industry.name}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
        {industry.excerpt}
      </p>
      <CardLink
        href={`/industries/${industry.slug}`}
        label="View industry solutions"
      />
    </article>
  );
}

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)]">
      <IconBadge name={feature.icon} />
      <h3 className="mt-5 text-lg font-bold text-primary">{feature.title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
        {feature.description}
      </p>
    </article>
  );
}

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const industry = getIndustry(study.industrySlug);
  const headline = study.results[0];

  return (
    <article className={cn(cardBase, "p-0")}>
      {/* Result banner - the number is the hook. */}
      <div className="rounded-t-2xl border-b border-line bg-surface px-7 py-6">
        <p className="font-display text-4xl font-extrabold tracking-tight text-primary">
          {headline.prefix}
          {headline.value}
          {headline.suffix}
        </p>
        <p className="mt-1 text-sm text-slate-600">{headline.label}</p>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
          {industry?.name}
        </p>
        <h3 className="mt-2 text-lg font-bold leading-snug text-primary">
          {study.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
          {study.excerpt}
        </p>
        <CardLink
          href={`/case-studies/${study.slug}`}
          label="Read the case study"
        />
      </div>
    </article>
  );
}

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <article className={cardBase}>
      <div className="flex items-center gap-3 text-xs font-semibold">
        <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
          {insight.category}
        </span>
        <span className="text-slate-500">{insight.readTime}</span>
      </div>
      <h3 className="mt-4 text-lg font-bold leading-snug text-primary">
        {insight.title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
        {insight.excerpt}
      </p>
      <CardLink href={`/resources/${insight.slug}`} label="Read article" />
    </article>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)]">
      <Quote aria-hidden="true" className="size-7 text-accent" />
      <blockquote className="mt-4 flex-1 leading-relaxed text-slate-700">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 border-t border-line pt-5">
        <p className="font-semibold text-primary">{testimonial.attribution}</p>
        <p className="mt-0.5 text-sm text-slate-500">{testimonial.context}</p>
      </figcaption>
    </figure>
  );
}
