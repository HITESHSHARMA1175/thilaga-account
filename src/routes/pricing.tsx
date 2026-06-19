import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | Fixed-Fee Accounting Packages — Just Accounting" },
      { name: "description", content: "Transparent fixed monthly fees for UK accounting. Plans for sole traders, contractors and limited companies. No hidden charges." },
      { property: "og:title", content: "Pricing — Just Accounting" },
      { property: "og:description", content: "Fixed monthly accounting packages from £35/month. Sole traders to limited companies." },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Sole Trader",
    price: "£35",
    blurb: "For self-employed individuals & landlords.",
    features: ["Self assessment tax return", "Bookkeeping software set-up", "HMRC agent representation", "Email & phone support"],
  },
  {
    name: "Limited Company",
    price: "£95",
    blurb: "Everything a small Ltd needs to stay compliant.",
    features: ["Year-end statutory accounts", "Corporation tax (CT600)", "Director's self assessment", "Confirmation statement", "Quarterly tax review"],
    featured: true,
  },
  {
    name: "Full Service",
    price: "£175",
    blurb: "Bookkeeping, payroll, VAT — fully managed.",
    features: ["Everything in Limited Company", "Monthly bookkeeping", "Quarterly VAT returns (MTD)", "Payroll for up to 5 staff", "Proactive tax planning"],
  },
];

function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-20">
          <span className="text-sm font-medium text-muted-foreground">Pricing</span>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-primary md:text-5xl">
            Honest, fixed monthly fees.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            No timesheets, no surprise invoices. Pick a plan that fits your stage —
            change it any time as you grow.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border bg-card p-8 ${p.featured ? "border-accent shadow-xl md:-translate-y-2" : "border-border"}`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  Most popular
                </span>
              )}
              <h3 className="font-serif text-xl font-semibold text-primary">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.blurb}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-serif text-4xl font-semibold text-primary">{p.price}</span>
                <span className="text-sm text-muted-foreground">/month + VAT</span>
              </div>
              <Link
                to="/contact"
                className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90 ${p.featured ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"}`}
              >
                Get started <ArrowRight className="h-4 w-4" />
              </Link>
              <ul className="mt-7 space-y-3 border-t border-border pt-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Need something custom? <Link to="/contact" className="font-medium text-primary underline">Get a tailored quote</Link>.
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
