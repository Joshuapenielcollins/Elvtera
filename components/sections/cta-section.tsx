import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

interface CtaSectionProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

/**
 * Final call-to-action band, used across key pages.
 * Deep slate, generous padding, one clear action: Book a Call.
 */
export function CtaSection({
  title = "Let's talk about the systems your business runs on.",
  description = "A 30-minute technical session with a systems engineer — not a salesperson. We'll examine your infrastructure, support requirements, or software roadmap. No obligation, no generic pitch.",
  buttonLabel = "Book a Technical Call",
  buttonHref = "/book",
}: CtaSectionProps) {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl font-display">
            {title}
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300">
            {description}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={buttonHref} variant="inverse" size="lg">
              <Calendar className="size-4" />
              {buttonLabel}
            </Button>
            <Button
              href="/solutions"
              size="lg"
              className="border border-white/20 bg-transparent text-white hover:bg-white/10"
            >
              Explore Solutions
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
