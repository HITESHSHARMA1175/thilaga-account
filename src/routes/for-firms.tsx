import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CheckCircle2, ArrowRight, Handshake, ShieldCheck, MessageSquare, PoundSterling } from "lucide-react";

export const Route = createFileRoute("/for-firms")({
  head: () => ({
    meta: [
      { title: "Bookkeeping Support for Accountancy Firms | Just Accounting UK" },
      { name: "description", content: "Reliable, UK-based bookkeeping support for accountancy firms. Scale up without increasing internal workload — transparent pricing, direct communication, MTD-compliant." },
      { property: "og:title", content: "Bookkeeping Support for UK Accountancy Firms" },
      { property: "og:description", content: "An extension of your team — accurate work, on time, with no automation barriers." },
    ],
  }),
  component: FirmsPage,
});

const reasons = [
  { icon: Handshake, title: "Extension of your team", desc: "We work to your workflow, your software and your standards — your client never knows we exist." },
  { icon: ShieldCheck, title: "Consistent & accurate", desc: "Clean, reconciled records delivered on time, every time. MTD-compliant by default." },
  { icon: MessageSquare, title: "Direct communication", desc: "Talk to a real person in the UK. No ticket systems, no automation layers, no time-zone delays." },
  { icon: PoundSterling, title: "Transparent pricing", desc: "Agreed upfront. No surprise invoices, no creeping scope." },
];

const services = [
  "Routine bookkeeping",
  "Bank & balance sheet reconciliations",
  "VAT preparation (MTD compliant)",
  "Clean-up and catch-up work",
  "Software support (Xero, Sage, QuickBooks, FreeAgent)",
];

function FirmsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-16 md:py-20">
          <span className="text-sm font-medium text-muted-foreground">For accountancy firms</span>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-primary md:text-5xl">
            Reliable bookkeeping support for accountancy firms.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            We provide dedicated bookkeeping support so your firm can scale up
            without adding to the internal workload — consistent, accurate
            work delivered on time, from a real person based in the UK.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="mailto:ts.justaccount@mail.co.uk" className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary">
              Email ts.justaccount@mail.co.uk
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-serif text-3xl font-semibold text-primary">Your trusted UK partner</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-border bg-card p-7">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-accent-foreground">
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-primary">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-primary">What we handle</h2>
            <p className="mt-3 text-muted-foreground">
              Flexible support tailored to how your firm already works.
            </p>
            <ul className="mt-6 space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" /> {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-serif text-xl font-semibold text-primary">Why work with us</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We act as an extension of your team — maintaining quality,
              improving turnaround times, and supporting your clients
              seamlessly. You stay in control of the relationship; we
              quietly keep the books in order behind the scenes.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
              Talk to us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
