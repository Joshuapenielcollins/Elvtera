import type { Stat } from "@/content/types";
import { Counter } from "@/components/motion/counter";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

interface StatBandProps {
  stats: Stat[];
  /** "light" renders on white; "dark" on the deep slate band. */
  tone?: "light" | "dark";
}

/**
 * Row of animated statistics. Numbers count up on first view;
 * labels stay full sentences so the figures carry real meaning.
 */
export function StatBand({ stats, tone = "light" }: StatBandProps) {
  return (
    <dl className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Reveal key={stat.label} delay={index * 0.08}>
          <div>
            <dd
              className={cn(
                "font-display text-4xl font-extrabold tracking-tight lg:text-5xl",
                tone === "dark" ? "text-white" : "text-primary"
              )}
            >
              <Counter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </dd>
            <dt
              className={cn(
                "mt-3 text-sm leading-relaxed",
                tone === "dark" ? "text-slate-400" : "text-slate-600"
              )}
            >
              {stat.label}
            </dt>
          </div>
        </Reveal>
      ))}
    </dl>
  );
}
