import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Heart, Target, MessageSquare, ArrowRight, CheckCircle2, Award, Globe, Clock } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Just Accounting | TS Professional Accountancy Ltd" },
      {
        name: "description",
        content:
          "Just Accounting is the trading name of TS Professional Accountancy Ltd — a UK-based bookkeeping practice run by Thilaga, ACCA Qualified with 10+ years experience.",
      },
      { property: "og:title", content: "About Just Accounting" },
      {
        property: "og:description",
        content:
          "A small, UK-based bookkeeping practice built on accurate work, honest communication, and a personal approach.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Heart,
    title: "People First",
    desc: "Clients are partners, not ticket numbers. You'll always talk to a real person — the same one, every time.",
  },
  {
    icon: MessageSquare,
    title: "Honest Communication",
    desc: "Plain English, no jargon, no surprise invoices. If something's wrong, we say so — clearly and promptly.",
  },
  {
    icon: Target,
    title: "Accurate Work, On Time",
    desc: "Reconciled records, MTD-ready, and delivered when promised — every time, without chasing.",
  },
];

const credentials = [
  { icon: Award, label: "ACCA Qualified", detail: "Professional accounting qualification" },
  { icon: Clock, label: "10+ Years Experience", detail: "Inside UK accounting practices" },
  { icon: Globe, label: "UK Based", detail: "Fully remote, nationwide coverage" },
  { icon: CheckCircle2, label: "MTD Compliant", detail: "Making Tax Digital ready" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Page header — light, clean */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 md:py-20">
          <span className="badge-gold mb-5 inline-flex">About Us</span>
          <h1 className="font-serif text-4xl font-semibold text-primary md:text-5xl lg:text-6xl max-w-4xl leading-tight">
            A small UK bookkeeping practice, built around doing the work properly.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Just Accounting is the trading name of{" "}
            <span className="font-semibold text-primary">TS Professional Accountancy Ltd</span>
            {" "}— a UK-based bookkeeping business supporting accountancy firms
            and direct business clients.
          </p>
        </div>
      </section>

      {/* Credentials bar */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 lg:px-8 md:grid-cols-4">
          {credentials.map((c) => (
            <div key={c.label} className="flex items-center gap-3">
              <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-primary/8 text-primary">
                <c.icon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-primary">{c.label}</div>
                <div className="text-xs text-muted-foreground">{c.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <div className="divider-gold" />
            <h2 className="font-serif text-3xl font-semibold text-primary md:text-4xl">Who we are</h2>
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We're a small, focused practice — honest about our size, and proud
                of it. The business has been built on years of bookkeeping and
                accounts experience gained working inside UK firms, now offered
                directly to clients and to other firms that need reliable overflow support.
              </p>
              <p>
                We believe good bookkeeping shouldn't feel mysterious or stressful.
                It should be accurate, on time, MTD-compliant, and explained in
                plain English.
              </p>
            </div>
          </div>
          <div>
            <div className="divider-gold" />
            <h2 className="font-serif text-3xl font-semibold text-primary md:text-4xl">How we work</h2>
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Everything is UK-based. You'll always know who is doing your work,
                and you'll always be able to talk to that person directly — no
                automated systems, no offshore call layers, no chasing.
              </p>
              <p>
                Pricing is agreed upfront and can be tailored for smaller,
                lower-turnover businesses. We work across Xero, Sage,
                QuickBooks, and FreeAgent — your software, your workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="badge-gold mx-auto mb-4">Our Values</div>
            <h2 className="font-serif text-3xl font-semibold text-primary md:text-4xl">
              What we stand for
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-white p-8 card-hover"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-primary">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — single clean block, no footer strip duplication */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-2xl border border-border bg-secondary/40 px-10 py-14 text-center">
          <h2 className="font-serif text-3xl font-semibold text-primary md:text-4xl">Let's have a conversation.</h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Free, no-obligation. Tell us about your business and we'll explain
            exactly how we can help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              id="about-cta"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+447352463262"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-7 py-4 text-sm font-semibold text-foreground transition-all hover:border-accent hover:bg-secondary"
            >
              Call 07352 463262
            </a>
          </div>
        </div>
      </section>

      <SiteFooter hideCta />
    </div>
  );
}
