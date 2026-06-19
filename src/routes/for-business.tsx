import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CheckCircle2, ArrowRight, User, FileCheck, HandCoins } from "lucide-react";

export const Route = createFileRoute("/for-business")({
  head: () => ({
    meta: [
      { title: "Bookkeeping for Small Businesses | Just Accounting UK" },
      { name: "description", content: "Stress-free, MTD-compliant bookkeeping for UK small businesses. Clear pricing, a real person to talk to, and we'll work with your accountant — or introduce you to a trusted one, free of charge." },
      { property: "og:title", content: "Stress-free Bookkeeping for UK Small Businesses" },
      { property: "og:description", content: "Accurate records, MTD-ready, ready for your accountant. Flexible pricing for lower-turnover businesses." },
    ],
  }),
  component: BusinessPage,
});

const promises = [
  { icon: HandCoins, title: "Clear pricing, agreed upfront", desc: "No hidden charges. Flexible pricing for lower-turnover businesses — we'll work to suit your budget." },
  { icon: User, title: "Personal service", desc: "You deal with a real person, not software or bots. One point of contact, based in the UK." },
  { icon: FileCheck, title: "Works with your accountant", desc: "We work alongside your existing accountant — or connect you with a trusted local one, completely free of charge." },
];

const services = [
  "Payroll data processing support",
  "Sales & purchase ledger processing",
  "Bank & credit card statement reconciliations",
  "VAT preparation & reconciliations (MTD compliant)",
  "Preparation of management accounts",
  "Preparation of trial balance ready for year end",
  "Preparation of year end file (for review)",
  "Supporting your accountant for Corporation Tax preparation",
];

function BusinessPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-16 md:py-20">
          <span className="text-sm font-medium text-muted-foreground">For small businesses</span>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-primary md:text-5xl">
            Stress-free bookkeeping for small businesses.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            We provide reliable, accurate bookkeeping so your records stay up
            to date, compliant with Making Tax Digital (MTD), and ready for
            your accountant — without the stress.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
              Free consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+447352463262" className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary">
              Call 07352 463262
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-serif text-3xl font-semibold text-primary">Simple, transparent, human support</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {promises.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-7">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-accent-foreground">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-primary">What we do</h2>
            <p className="mt-3 text-muted-foreground">
              Everything you need to keep your books tidy, up to date and
              ready for year end.
            </p>
            <ul className="mt-6 space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" /> {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-accent bg-card p-8">
            <h3 className="font-serif text-xl font-semibold text-primary">Flexible pricing for lower turnover</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Just starting out, or running a smaller operation? Pricing can
              be adjusted to suit your budget — talk to us about a package
              that actually fits your business, not someone else's.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90">
              Book a free consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
