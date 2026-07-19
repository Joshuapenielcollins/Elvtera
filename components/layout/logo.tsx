import { cn } from "@/lib/utils";

/**
 * ELVTERA wordmark.
 *
 * A typographic mark: heavy Manrope wordmark with an orange accent square - * deliberate, minimal, and legible at every size. Works on light and dark
 * surfaces via the `inverse` prop.
 */
export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="inline-flex items-baseline gap-1.5">
      <span
        className={cn(
          "font-display text-xl font-extrabold tracking-tight",
          inverse ? "text-white" : "text-primary"
        )}
      >
        ELVTERA
      </span>
      <span
        aria-hidden="true"
        className="inline-block size-2 rounded-[3px] bg-accent"
      />
      <span
        className={cn(
          "hidden text-[11px] font-semibold uppercase tracking-[0.18em] sm:inline",
          inverse ? "text-slate-400" : "text-slate-500"
        )}
      >
        E-Solutions
      </span>
    </span>
  );
}
