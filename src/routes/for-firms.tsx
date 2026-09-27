import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import {
  CheckCircle2,
  ArrowRight,
  Handshake,
  ShieldCheck,
  MessageSquare,
  PoundSterling,
  FileText,
  Calculator,
  RefreshCw,
  Database,
} from "lucide-react";

export const Route = createFileRoute("/for-firms")({
  head: () => ({
    meta: [
      { title: "Bookkeeping Support for Accountancy Firms | Just Accounting UK" },
      {
        name: "description",
        content:
          "Reliable, UK-based bookkeeping support for accountancy firms. Scale up without increasing internal workload — transparent pricing, direct communication, MTD-compliant.",
      },
      { property: "og:title", content: "Bookkeeping Support for UK Accountancy Firms" },
      {
        property: "og:description",
        content: "An extension of your team — accurate work, on time, with no automation barriers.",
      },
    ],
  }),
  component: FirmsPage,
});

const reasons = [
  {
    icon: Handshake,
    title: "Extension of Your Team",
    desc: "We work to your workflow, your software, and your standards. Your client never knows we exist — white-label ready.",
  },
  {
    icon: ShieldCheck,
    title: "Consistent & Accurate",
    desc: "Clean, reconciled records delivered on time, every time. MTD-compliant by default, ready to hand straight to your client.",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    desc: "Talk to a real person in the UK. No ticket systems, no automation layers, no time-zone delays — ever.",
  },
  {
    icon: PoundSterling,
    title: "Transparent Pricing",
    desc: "Agreed upfront before we start. No surprise invoices, no scope creep, no awkward conversations.",
  },
];

const services = [
  { icon: FileText, title: "Routine Bookkeeping", desc: "Day-to-day transaction processing and record maintenance." },
  { icon: RefreshCw, title: "Bank & Balance Sheet Reconciliations", desc: "Month-end reconciliations, clean and on time." },
  { icon: Calculator, title: "VAT Preparation (MTD)", desc: "MTD-compliant VAT returns prepared and ready for review." },
  { icon: Database, title: "Clean-up & Catch-up Work", desc: "Backlog clearance and historical data tidying." },
];

const software = ["Xero", "Sage", "QuickBooks", "FreeAgent"];

function FirmsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Page header — light */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 md:py-20">
          <span className="badge-gold mb-5 inline-flex">For Accountancy Firms</span>
          <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl lg:text-6xl">
            Reliable bookkeeping support, so your firm can scale.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Dedicated UK-based bookkeeping support so your firm can take on
            more clients and clear backlogs — without growing your internal
            headcount.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              id="firms-hero-cta"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="mailto:ts.justaccount@mail.co.uk"
              id="firms-hero-email"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-accent hover:bg-secondary"
            >
              Email us directly
            </a>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <div className="badge-gold mx-auto mb-4">Your Trusted UK Partner</div>
          <h2 className="font-serif text-3xl font-semibold text-primary md:text-4xl">
            Why firms choose Just Accounting
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            We work as an extension of your team — maintaining quality,
            improving turnaround times, and supporting your clients seamlessly.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex gap-4 rounded-2xl border border-border bg-white p-7 card-hover"
            >
              <div className="mt-0.5 grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-primary/8 text-primary">
                <r.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-primary">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="badge-gold mx-auto mb-4">What We Handle</div>
            <h2 className="font-serif text-3xl font-semibold text-primary md:text-4xl">
              Flexible support for your firm
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border bg-white p-7 card-hover"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-accent">
                  <s.icon className="h-4 w-4" />
                </div>
                <h3 className="mt-4 font-semibold text-primary text-sm leading-snug">{s.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Software row */}
          <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-white px-8 py-5">
            <span className="text-sm font-semibold text-primary mr-2">We work on your software:</span>
            {software.map((sw) => (
              <span
                key={sw}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-sm font-medium text-foreground"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                {sw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — clean, no dark stacking */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-2xl border border-border bg-secondary/40 px-10 py-14 text-center">
          <h2 className="font-serif text-3xl font-semibold text-primary md:text-4xl">
            Let's talk about your firm's needs.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
            Whether you need ongoing overflow support or a one-off backlog
            clearance — we'd love to understand how we can help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              id="firms-bottom-cta"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="mailto:ts.justaccount@mail.co.uk"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-7 py-4 text-sm font-semibold text-foreground transition-all hover:border-accent hover:bg-secondary"
            >
              ts.justaccount@mail.co.uk
            </a>
          </div>
        </div>
      </section>

      <SiteFooter hideCta />
    </div>
  );
}
