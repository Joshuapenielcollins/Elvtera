import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

interface SectionHeadingProps {
  /** Small uppercase label above the title. */
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Heading level - defaults to h2. */
  as?: "h1" | "h2" | "h3";
  className?: string;
}

/**
 * Standard section heading: eyebrow, large display title, supporting copy.
 * Used on every page so hierarchy and rhythm stay identical site-wide.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-secondary">
          {eyebrow}
        </p>
      )}
      <Heading className="text-3xl font-extrabold leading-[1.12] text-primary sm:text-4xl lg:text-[2.75rem]">
        {title}
      </Heading>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-slate-600">
          {description}
        </p>
      )}
    </Reveal>
  );
}
