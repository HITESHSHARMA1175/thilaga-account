import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import heroImg from "@/assets/hero-desk.jpg";
import {
  Building2, Briefcase, ArrowRight, CheckCircle2, ShieldCheck, Clock, PoundSterling,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Just Accounting | UK Bookkeeping Support for Firms & Businesses" },
      { name: "description", content: "UK-based bookkeeping support for accountancy firms and small businesses. MTD-compliant, transparent pricing, and a real person on the other end of the phone." },
      { property: "og:title", content: "Just Accounting | UK Bookkeeping Support" },
      { property: "og:description", content: "Reliable, MTD-compliant bookkeeping for accountancy firms and direct business clients." },
    ],
  }),
  component: HomePage,
});

const audiences = [
  {
    icon: Briefcase,
    title: "For Accountancy Firms",
    blurb: "Reliable UK-based bookkeeping support so your firm can take on more clients without growing your internal workload.",
    points: ["Acts as an extension of your team", "Direct communication — no layers or bots", "Transparent pricing, no surprises"],
    to: "/for-firms" as const,
    cta: "See how we support firms",
  },
  {
    icon: Building2,
    title: "For Direct Businesses",
    blurb: "Stress-free bookkeeping for small businesses — accurate records, MTD-ready, and handed over neatly to your accountant.",
    points: ["Clear pricing agreed upfront", "Real person, not software or bots", "Free intro to a trusted accountant if needed"],
    to: "/for-business" as const,
    cta: "See services for businesses",
  },
];

const trust = [
  { icon: ShieldCheck, title: "MTD compliant", desc: "Full digital records, ready for Making Tax Digital." },
  { icon: Clock, title: "Based in the UK", desc: "Direct contact with a real person — no offshore call layers." },
  { icon: PoundSterling, title: "Transparent pricing", desc: "Agreed upfront, flexible for lower-turnover clients." },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              UK-based bookkeeping support
            </span>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.05] text-primary md:text-6xl">
              Bookkeeping done properly, by a person who answers the phone.
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
              A small UK practice offering MTD-compliant bookkeeping support
              to accountancy firms and direct business clients. Honest pricing,
              clean records, and clear communication.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                Free consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/for-firms" className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
                I run an accountancy firm
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent/20 blur-2xl" />
            <img
              src={heroImg}
              alt="Tidy accounting workspace with laptop and notebook"
              width={1600}
              height={1100}
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 md:grid-cols-3">
          {trust.map((t) => (
            <div key={t.title} className="flex items-start gap-3">
              <t.icon className="mt-0.5 h-5 w-5 text-accent" />
              <div>
                <div className="font-semibold text-primary">{t.title}</div>
                <div className="text-sm text-muted-foreground">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Two audiences */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold text-primary md:text-4xl">Who we help</h2>
          <p className="mt-3 text-muted-foreground">
            Two audiences, one standard of work. Pick the side that fits you.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {audiences.map((a) => (
            <Link
              key={a.title}
              to={a.to}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg"
            >
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <a.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-primary">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.blurb}</p>
              <ul className="mt-5 space-y-2">
                {a.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" /> {p}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                {a.cta} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground md:px-16 md:py-20">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold md:text-4xl">
            Let's have a quick, no-pressure chat.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/75">
            Whether you're a firm looking for overflow support or a business
            owner who just wants tidy books — get in touch and we'll take it
            from there.
          </p>
          <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90">
            Book a free consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
