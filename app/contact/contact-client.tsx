"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  MessageSquare,
  ArrowRight,
  X,
  MapPin,
  Mail,
  ChevronRight,
  CalendarDays,
} from "lucide-react";
import { SalesForm } from "@/components/forms/sales-form";
import { GeneralEnquiryForm } from "@/components/forms/general-enquiry-form";
import { site } from "@/lib/site";

type ModalType = "sales" | "general" | null;

/* ── Slide-up / centre modal ────────────────────────────────────────────── */
function Modal({ open, onClose, children, wide }: {
  open: boolean; onClose: () => void; children: React.ReactNode; wide?: boolean;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-primary/60 backdrop-blur-sm"
          />
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`fixed inset-x-4 bottom-0 z-50 mx-auto overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:inset-x-auto sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl ${
              wide ? "sm:w-[680px] sm:max-h-[90vh]" : "sm:w-[520px] sm:max-h-[80vh]"
            } max-h-[90vh]`}
          >
            {/* Mobile drag handle */}
            <div className="flex justify-center pt-3 sm:hidden">
              <div className="h-1 w-10 rounded-full bg-line" />
            </div>
            <div className="px-6 py-6 sm:px-8 sm:py-8">
              <button
                onClick={onClose}
                className="absolute right-5 top-5 flex size-8 items-center justify-center rounded-full bg-surface text-slate-500 hover:bg-line hover:text-primary transition-colors"
                aria-label="Close"
              >
                <X className="size-4" />
              </button>
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ── Path card ──────────────────────────────────────────────────────────── */
function PathCard({
  icon: Icon, iconBg, iconColor, badge, title, description, ctaLabel,
  highlights, onClick, primary,
}: {
  icon: React.ElementType; iconBg: string; iconColor: string; badge?: string;
  title: string; description: string; ctaLabel: string; highlights: string[];
  onClick: () => void; primary?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-8 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] ${
        primary
          ? "border-secondary/20 bg-gradient-to-br from-secondary-soft via-white to-blue-50/30"
          : "border-line bg-white"
      }`}
    >
      {/* Subtle glow blob for primary card */}
      {primary && (
        <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-secondary/6 blur-3xl" />
      )}

      <div className="flex items-start justify-between">
        <span className={`inline-flex rounded-xl p-3 ${iconBg}`}>
          <Icon className={`size-6 ${iconColor}`} />
        </span>
        {badge && (
          <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
            {badge}
          </span>
        )}
      </div>

      <div className="mt-6 flex-1">
        <h2 className="text-xl font-extrabold text-primary">{title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-500">{description}</p>
        <ul className="mt-6 space-y-2.5">
          {highlights.map(h => (
            <li key={h} className="flex items-center gap-2.5 text-sm text-slate-600">
              <ChevronRight className={`size-3.5 shrink-0 ${primary ? "text-secondary" : "text-slate-400"}`} />
              {h}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onClick}
        className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition-all duration-200 ${
          primary
            ? "bg-secondary text-white shadow-lg shadow-secondary/25 hover:bg-secondary/90 group-hover:gap-3"
            : "border-2 border-line bg-white text-primary hover:border-slate-300 hover:bg-surface"
        }`}
      >
        {ctaLabel}
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </button>
    </motion.div>
  );
}

/* ── Main page ──────────────────────────────────────────────────────────── */
export default function ContactPageClient() {
  const [modal, setModal] = useState<ModalType>(null);

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-line bg-surface">
        {/* Background grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Subtle glow orbs in brand blue */}
        <div aria-hidden className="pointer-events-none absolute -left-32 top-0 size-80 rounded-full bg-secondary/5 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 size-80 rounded-full bg-secondary/4 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Online status pill */}
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 shadow-sm">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Sales team online · Replies in &lt; 4 hours
            </p>

            <h1 className="mt-2 text-4xl font-extrabold leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Let&apos;s Build{" "}
              <span className="text-secondary">Something Great</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-500">
              Whether you&apos;re looking to automate your business or simply have a question,
              we&apos;ll make sure your enquiry reaches the right team.
            </p>

            {/* Quick action chips */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setModal("sales")}
                className="flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-secondary/25 hover:bg-secondary/90 transition-all"
              >
                <CalendarDays className="size-4" />
                Book a Strategy Call
              </button>
              <button
                onClick={() => setModal("general")}
                className="flex items-center gap-2 rounded-full border-2 border-line bg-white px-5 py-2.5 text-sm font-bold text-primary hover:border-slate-300 hover:bg-surface transition-all"
              >
                <MessageSquare className="size-4" />
                Send a Message
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Path cards ──────────────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <PathCard
                icon={Rocket}
                iconBg="bg-secondary-soft"
                iconColor="text-secondary"
                badge="Sales"
                title="Talk to Sales"
                description="Planning a new project? Transform your business with AI, automation, CRM, ERP, or custom software. Fill in your requirements and book a strategy call with our solutions team."
                ctaLabel="Book a Call"
                primary
                highlights={[
                  "AI automation & voice agents",
                  "Custom ERP / CRM systems",
                  "Website & SaaS development",
                  "WhatsApp & process automation",
                ]}
                onClick={() => setModal("sales")}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              <PathCard
                icon={MessageSquare}
                iconBg="bg-surface"
                iconColor="text-slate-600"
                title="General Enquiries"
                description="For partnerships, careers, media requests, billing questions, support, or anything else — your message will reach the right person on our team."
                ctaLabel="Contact Us"
                highlights={[
                  "Partnership & vendor enquiries",
                  "Support & billing questions",
                  "Media & press requests",
                  "Career opportunities",
                ]}
                onClick={() => setModal("general")}
              />
            </motion.div>
          </div>

          {/* ── Office info strip ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="mt-10 grid gap-4 sm:grid-cols-3"
          >
            {[
              { icon: MapPin, label: "India Office",  value: "Tiruchirappalli, Tamil Nadu" },
              { icon: MapPin, label: "USA Office",    value: "St. Petersburg, FL" },
              { icon: Mail,   label: "Email Us",      value: "hello@elvtera.com", href: "mailto:hello@elvtera.com" },
            ].map(item => {
              const Icon = item.icon;
              const inner = (
                <>
                  <Icon className="size-4 shrink-0 text-secondary" />
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{item.label}</p>
                    <p className="mt-0.5 text-sm font-medium text-primary">{item.value}</p>
                  </div>
                </>
              );
              return item.href ? (
                <a key={item.label} href={item.href}
                  className="flex items-center gap-3 rounded-xl border border-line bg-surface px-5 py-4 hover:border-secondary/30 transition-colors">
                  {inner}
                </a>
              ) : (
                <div key={item.label} className="flex items-center gap-3 rounded-xl border border-line bg-surface px-5 py-4">
                  {inner}
                </div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* ── Modals ──────────────────────────────────────────────────────── */}
      <Modal open={modal === "sales"} onClose={() => setModal(null)} wide>
        <SalesForm onClose={() => setModal(null)} />
      </Modal>

      <Modal open={modal === "general"} onClose={() => setModal(null)}>
        <GeneralEnquiryForm onClose={() => setModal(null)} />
      </Modal>
    </>
  );
}
