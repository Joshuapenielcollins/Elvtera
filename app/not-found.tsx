import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Branded 404 page - calm, useful, on-system. */
export default function NotFound() {
  return (
    <section className="bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center lg:py-40">
        <p className="font-display text-7xl font-extrabold tracking-tight text-primary">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold text-primary">
          This page doesn&apos;t exist - or moved.
        </h1>
        <p className="mt-4 max-w-md leading-relaxed text-slate-600">
          The link may be out of date. Everything we offer is reachable from
          the home page, or jump straight to our services.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/">
            <ArrowLeft aria-hidden="true" />
            Back to Home
          </Button>
          <Button href="/services" variant="outline">
            Browse Services
          </Button>
        </div>
      </div>
    </section>
  );
}
