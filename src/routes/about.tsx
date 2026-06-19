import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Award, Heart, Target } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Just Accounting | UK Small Business Accountants" },
      { name: "description", content: "Meet the team behind Just Accounting — qualified UK accountants helping sole traders, contractors and limited companies grow with clarity." },
      { property: "og:title", content: "About Just Accounting" },
      { property: "og:description", content: "Qualified UK accountants on a mission to make small business finance simple." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "People first", desc: "We treat clients like partners, not ticket numbers. Direct phone access, no call centres." },
  { icon: Award, title: "Qualified & insured", desc: "AAT and ACCA qualified, fully insured, and registered with HMRC as agents." },
  { icon: Target, title: "Proactive, not reactive", desc: "We flag tax-saving opportunities before deadlines, not after." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-16 md:py-20">
          <span className="text-sm font-medium text-muted-foreground">About us</span>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-primary md:text-5xl">
            A modern UK practice built around small businesses.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Just Accounting was founded to bring honest, jargon-free accounting
            to the UK's sole traders, contractors and growing companies. We
            combine the personal service of a high-street accountant with the
            speed and clarity of modern cloud software.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <div className="prose prose-slate max-w-none">
          <h2 className="font-serif text-3xl font-semibold text-primary">Our story</h2>
          <p className="mt-4 text-muted-foreground">
            After a decade in mid-tier UK firms, our founder saw the same
            pattern: small business owners paying for accounts they didn't
            understand, chased for information at year-end, and rarely given
            advice that actually saved them money. Just Accounting was built
            to do the opposite — predictable monthly fees, real-time books,
            and a qualified accountant on the other end of the phone.
          </p>
          <h2 className="mt-12 font-serif text-3xl font-semibold text-primary">Who we work with</h2>
          <p className="mt-4 text-muted-foreground">
            We work with sole traders, contractors, e-commerce sellers,
            tradespeople, creative agencies and limited companies across the
            UK — typically with turnover from £20k to £2m. If you want your
            books done properly and your tax kept legally low, you'll fit right in.
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
          <p className="mt-2 text-muted-foreground">Free 30-minute consultation, no obligation.</p>
          <Link to="/contact" className="mt-5 inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Get in touch
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
