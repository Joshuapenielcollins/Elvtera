import type { ProcessStep } from "@/content/types";
import { Reveal } from "@/components/motion/reveal";

/**
 * Numbered implementation-process list.
 * A vertical connected timeline on all breakpoints - easy to scan,
 * and the numbering reinforces that delivery is methodical.
 */
export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="space-y-0">
      {steps.map((step, index) => (
        <Reveal key={step.title} delay={index * 0.06}>
          <li className="relative flex gap-6 pb-10 last:pb-0">
            {/* Connector line between step markers */}
            {index < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-6 top-14 h-[calc(100%-3.5rem)] w-px bg-line"
              />
            )}
            <span
              aria-hidden="true"
              className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-line bg-white font-display text-lg font-bold text-secondary shadow-[var(--shadow-card)]"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="pt-2">
              <h3 className="text-lg font-bold text-primary">{step.title}</h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
