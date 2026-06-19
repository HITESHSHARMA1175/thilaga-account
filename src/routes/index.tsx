import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import heroImg from "@/assets/hero-desk.jpg";
import {
  BookOpen, Users, Receipt, FileSpreadsheet, ShieldCheck, Clock,
  PoundSterling, ArrowRight, CheckCircle2, Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Just Accounting | UK Bookkeeping, Payroll & VAT Specialists" },
      { name: "description", content: "Trusted UK accountants for sole traders & small businesses. Fixed-fee bookkeeping, payroll, VAT returns and Making Tax Digital. Free consultation." },
      { property: "og:title", content: "Just Accounting | UK Bookkeeping, Payroll & VAT" },
      { property: "og:description", content: "Fixed-fee accounting services for UK small businesses. Bookkeeping, payroll, VAT, MTD." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: BookOpen, title: "Bookkeeping", desc: "Accurate, cloud-based bookkeeping using Xero, QuickBooks or FreeAgent. Always know where your business stands." },
  { icon: Users, title: "Payroll", desc: "Fully managed PAYE, RTI submissions, payslips and auto-enrolment pensions for teams of 1 to 50+." },
  { icon: Receipt, title: "VAT & MTD", desc: "Digital VAT returns under Making Tax Digital, registration advice and quarterly submissions handled end-to-end." },
  { icon: FileSpreadsheet, title: "Self Assessment", desc: "Personal tax returns for sole traders, landlords and company directors — filed accurately and on time." },
];

const trust = [
  { icon: ShieldCheck, title: "HMRC compliant", desc: "MTD-ready software and full audit trail." },
  { icon: Clock, title: "Fast turnaround", desc: "Responses within one working day, guaranteed." },
  { icon: PoundSterling, title: "Fixed monthly fees", desc: "No surprises — know exactly what you'll pay." },
];

const testimonials = [
  { quote: "Switched from a high-street accountant and saved hours every month. The portal is brilliant.", name: "Sarah M.", role: "Founder, Maple Studio" },
  { quote: "VAT used to give me sleepless nights. Now it's submitted before I even think about it.", name: "James K.", role: "Director, KP Trades Ltd" },
  { quote: "Clear pricing, no jargon, and they actually pick up the phone. Couldn't recommend more.", name: "Priya S.", role: "Sole trader, consultant" },
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
              Trusted UK accountants
            </span>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.05] text-primary md:text-6xl">
              Accounting that gives you back your time.
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
              Fixed-fee bookkeeping, payroll, VAT and Making Tax Digital
              support for UK sole traders and small businesses. No jargon,
              no surprise bills.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                Get a free consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
                Explore services
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-5 text-sm text-muted-foreground">
              <div className="flex items-center gap-1 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent" />)}
              </div>
              <span>Rated 5/5 by UK small business owners</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent/20 blur-2xl" />
            <img
              src={heroImg}
              alt="Modern accounting workspace with laptop showing financial dashboards"
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

      {/* Services */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold text-primary md:text-4xl">Services built for small businesses</h2>
          <p className="mt-3 text-muted-foreground">
            Everything you need to stay compliant, paid on time and in control —
            handled by qualified UK accountants.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.title}
              to="/services"
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-primary md:text-4xl">Why business owners choose us</h2>
            <p className="mt-4 text-muted-foreground">
              We're a small UK practice that genuinely cares about the numbers
              behind your business. No call centres, no junior staff bouncing
              you around — just clear advice from people who know your books.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Direct access to your dedicated accountant",
                "Unlimited email and phone support",
                "Cloud accounting set-up & training included",
                "Proactive tax-saving advice — not just compliance",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "10+", l: "Years experience" },
              { n: "200+", l: "UK clients served" },
              { n: "£1.2m", l: "Tax saved for clients" },
              { n: "24h", l: "Response guarantee" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-card p-6">
                <div className="font-serif text-3xl font-semibold text-primary">{s.n}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-serif text-3xl font-semibold text-primary md:text-4xl">What our clients say</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-7">
              <div className="flex gap-1 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent" />)}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground">"{t.quote}"</blockquote>
              <figcaption className="mt-5 text-sm">
                <div className="font-semibold text-primary">{t.name}</div>
                <div className="text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground md:px-16 md:py-20">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold md:text-4xl">
            Ready to take the stress out of your books?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/75">
            Book a free 30-minute consultation. We'll review your current
            set-up and show you exactly where we can help.
          </p>
          <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90">
            Book your free consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
