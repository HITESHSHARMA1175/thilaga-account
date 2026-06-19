import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Heart, Target, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Just Accounting | TS Professional Accountancy Ltd" },
      { name: "description", content: "Just Accounting is the trading name of TS Professional Accountancy Ltd — a small UK bookkeeping practice supporting accountancy firms and direct business clients." },
      { property: "og:title", content: "About Just Accounting" },
      { property: "og:description", content: "A small, UK-based bookkeeping practice built on accurate work and honest communication." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "People first", desc: "Clients are partners, not ticket numbers. You'll always talk to a real person." },
  { icon: MessageSquare, title: "Honest communication", desc: "Plain English, no jargon, no surprise invoices. If something's wrong, we say so." },
  { icon: Target, title: "Accurate work, on time", desc: "Reconciled records, MTD-ready, and delivered when promised — every time." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-16 md:py-20">
          <span className="text-sm font-medium text-muted-foreground">About us</span>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-primary md:text-5xl">
            A small UK bookkeeping practice, built around doing the work properly.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Just Accounting is the trading name of{" "}
            <span className="font-semibold text-primary">TS Professional Accountancy Ltd</span>,
            a UK-based bookkeeping business supporting accountancy firms and
            direct business clients.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <div className="prose prose-slate max-w-none">
          <h2 className="font-serif text-3xl font-semibold text-primary">Who we are</h2>
          <p className="mt-4 text-muted-foreground">
            We're a new practice — small, focused, and honest about it. The
            business has been built on years of bookkeeping and accounts
            experience gained working inside UK firms, now offered directly
            to clients and to other firms that need reliable overflow support.
          </p>
          <p className="mt-4 text-muted-foreground">
            We believe good bookkeeping shouldn't feel mysterious or
            stressful. It should be accurate, on time, MTD-compliant, and
            explained in plain English — whether you're a busy firm needing
            a dependable partner, or a small business owner who just wants
            tidy books.
          </p>

          <h2 className="mt-12 font-serif text-3xl font-semibold text-primary">How we work</h2>
          <p className="mt-4 text-muted-foreground">
            Everything is UK-based. You'll always know who is doing your
            work, and you'll always be able to talk to that person directly —
            no automated systems, no offshore call layers, no chasing.
            Pricing is agreed upfront and can be tailored for smaller,
            lower-turnover businesses.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-7">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-accent-foreground">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-primary">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-secondary/60 p-8 text-center">
          <h2 className="font-serif text-2xl font-semibold text-primary">Let's chat</h2>
          <p className="mt-2 text-muted-foreground">Free, no-obligation consultation.</p>
          <Link to="/contact" className="mt-5 inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Get in touch
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
