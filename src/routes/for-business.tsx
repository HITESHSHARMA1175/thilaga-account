import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import {
  CheckCircle2,
  ArrowRight,
  User,
  FileCheck,
  HandCoins,
  Phone,
  FileText,
  Calculator,
  TrendingUp,
  BarChart3,
  CreditCard,
  BookOpen,
} from "lucide-react";

export const Route = createFileRoute("/for-business")({
  head: () => ({
    meta: [
      { title: "Bookkeeping for Small Businesses | Just Accounting UK" },
      {
        name: "description",
        content:
          "Stress-free, MTD-compliant bookkeeping for UK small businesses. Clear pricing, a real person to talk to, and we'll work with your accountant — or introduce you to a trusted one, free of charge.",
      },
      { property: "og:title", content: "Stress-free Bookkeeping for UK Small Businesses" },
      {
        property: "og:description",
        content:
          "Accurate records, MTD-ready, ready for your accountant. Flexible pricing for lower-turnover businesses.",
      },
    ],
  }),
  component: BusinessPage,
});

const promises = [
  {
    icon: HandCoins,
    title: "Clear Pricing, Agreed Upfront",
    desc: "No hidden charges. Flexible pricing for lower-turnover businesses — we'll work to suit your budget and business size.",
  },
  {
    icon: User,
    title: "One Real Person",
    desc: "You deal with the same person every time. Not software, not bots, not a different team member each month.",
  },
  {
    icon: FileCheck,
    title: "Works with Your Accountant",
    desc: "We work alongside your existing accountant — or connect you with a trusted local one, completely free of charge.",
  },
];

const services = [
  { icon: CreditCard, title: "Payroll Data Processing", desc: "Support with payroll records and data." },
  { icon: FileText, title: "Sales & Purchase Ledger", desc: "Accurate processing of invoices and bills." },
  { icon: CheckCircle2, title: "Bank Reconciliations", desc: "Monthly bank and credit card reconciliation." },
  { icon: Calculator, title: "VAT Returns (MTD)", desc: "MTD-compliant VAT preparation and reconciliations." },
  { icon: TrendingUp, title: "Management Accounts", desc: "Monthly or quarterly management reporting." },
  { icon: BarChart3, title: "Trial Balance", desc: "Year-end trial balance ready for your accountant." },
  { icon: BookOpen, title: "Year-End File", desc: "Complete year-end file packaged for review." },
  { icon: FileCheck, title: "Corporation Tax Support", desc: "Supporting your accountant for CT preparation." },
];

function BusinessPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Page header — light */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 md:py-20">
          <span className="badge-gold mb-5 inline-flex">For Business Owners</span>
          <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl lg:text-6xl">
            Stress-free bookkeeping for small businesses.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Reliable, accurate bookkeeping so your records stay up to date,
            compliant with Making Tax Digital, and ready for your accountant —
            without the stress or the jargon.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              id="business-hero-cta"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+447352463262"
              id="business-hero-call"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-accent hover:bg-secondary"
            >
              <Phone className="h-4 w-4 text-accent" /> Call 07352 463262
            </a>
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <div className="badge-gold mx-auto mb-4">Our Promises</div>
          <h2 className="font-serif text-3xl font-semibold text-primary md:text-4xl">
            Simple, transparent, human support.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {promises.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-white p-8 card-hover"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-primary">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="badge-gold mx-auto mb-4">What We Do</div>
            <h2 className="font-serif text-3xl font-semibold text-primary md:text-4xl">
              Everything you need, covered.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              All the bookkeeping services your small business needs — to stay
              tidy, compliant, and ready for year end.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="flex items-start gap-3 rounded-xl border border-border bg-white p-5 card-hover"
              >
                <div className="mt-0.5 grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-accent/12 text-accent">
                  <s.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">{s.title}</div>
                  <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing note + CTA — side by side, light */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Pricing panel */}
          <div className="rounded-2xl border border-border bg-white p-10">
            <div className="divider-gold" />
            <h3 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
              Flexible pricing for lower-turnover businesses
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Just starting out, or running a smaller operation? Talk to us about
              a package that actually fits your business, not someone else's.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Pricing agreed before we start",
                "No hidden charges or surprise invoices",
                "Flexible for low-turnover businesses",
                "Monthly or quarterly billing available",
              ].map((pt) => (
                <li key={pt} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA panel */}
          <div className="flex flex-col justify-center rounded-2xl border border-border bg-secondary/40 px-10 py-10">
            <div className="badge-gold mb-5 w-fit">Free Consultation</div>
            <h3 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
              Ready to take the stress out of your books?
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Book a free, no-obligation consultation and we'll explain exactly
              what we can do for your business.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                id="business-bottom-cta"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                Book a free consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+447352463262"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent"
              >
                <Phone className="h-4 w-4 text-accent" /> Call us
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter hideCta />
    </div>
  );
}
