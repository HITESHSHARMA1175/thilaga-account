import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import heroImg from "@/assets/hero-desk.jpg";
import {
  Building2,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Star,
  Phone,
  Award,
  Users,
  TrendingUp,
  FileText,
  Calculator,
  Globe,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Just Accounting | One Dedicated Bookkeeper for Your Business" },
      {
        name: "description",
        content:
          "Reliable bookkeeping support for UK businesses and accountancy firms. ACCA Qualified, 10+ years experience, UK Based. No call centres — one dedicated contact.",
      },
      { property: "og:title", content: "Just Accounting | UK Bookkeeping Support" },
      {
        property: "og:description",
        content:
          "One dedicated bookkeeper for your business. ACCA Qualified, UK Based, MTD compliant.",
      },
    ],
  }),
  component: HomePage,
});

const trustBadges = [
  { icon: Award, label: "ACCA Qualified" },
  { icon: Clock, label: "10+ Years Experience" },
  { icon: Globe, label: "UK Based" },
  { icon: Users, label: "One Dedicated Contact" },
];

const audiences = [
  {
    icon: Briefcase,
    tag: "For Accountancy Firms",
    title: "Scale your firm — without growing your headcount.",
    blurb:
      "Dedicated bookkeeping support so your firm can take on more clients and clear backlogs, without adding to your internal workload.",
    points: [
      "Acts as a seamless extension of your team",
      "Direct communication — no automation layers",
      "MTD compliant, on your software",
      "Transparent pricing, no surprises",
    ],
    to: "/for-firms" as const,
    cta: "See how we support firms",
  },
  {
    icon: Building2,
    tag: "For Business Owners",
    title: "Tidy books, without the stress.",
    blurb:
      "Accurate, MTD-ready bookkeeping for small businesses — handed neatly to your accountant each year. One real person, always on the other end.",
    points: [
      "Clear pricing agreed upfront",
      "Real person, not software or bots",
      "Works alongside your accountant",
      "Free intro to trusted accountant if needed",
    ],
    to: "/for-business" as const,
    cta: "See services for businesses",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "ACCA", label: "Qualified" },
  { value: "100%", label: "UK Based" },
  { value: "MTD", label: "Compliant" },
];

const testimonials = [
  {
    stars: 5,
    quote: "Reliable bookkeeping support and excellent communication. We always know exactly what's been done and when.",
    name: "Sarah M.",
    role: "Business Owner, London",
  },
  {
    stars: 5,
    quote: "A real person who actually answers. No ticket systems, no delays. Our backlog was cleared in weeks.",
    name: "James R.",
    role: "Practice Manager, Manchester",
  },
  {
    stars: 5,
    quote: "Finally, transparent pricing and work we can trust. Just Accounting has become an invaluable part of our team.",
    name: "Priya K.",
    role: "Accountancy Firm Partner, Birmingham",
  },
];

const services = [
  { icon: FileText, title: "Bank Reconciliations", desc: "Clean, accurate month-end reconciliations every time." },
  { icon: Calculator, title: "VAT Returns", desc: "MTD-compliant VAT preparation and submission support." },
  { icon: TrendingUp, title: "Management Accounts", desc: "Monthly reports so you always know where you stand." },
  { icon: ShieldCheck, title: "Year-End Prep", desc: "Trial balance ready, everything packaged for your accountant." },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
      ))}
    </div>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-background border-b border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2 lg:px-8 lg:py-32">
          {/* Left */}
          <div className="animate-fade-up">
            <div className="badge-gold mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              UK-Based Bookkeeping Support
            </div>
            <h1 className="font-serif text-5xl font-semibold leading-[1.05] text-primary md:text-6xl lg:text-7xl">
              One Dedicated<br />
              <span className="text-gradient-gold">Bookkeeper</span><br />
              for Your Business.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Reliable bookkeeping support for UK businesses and accountancy
              firms. No call centres, no ticket systems, and no repeating
              yourself every time you need help.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                id="hero-cta-consultation"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25"
              >
                Book Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+447352463262"
                id="hero-cta-call"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-7 py-4 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
              >
                <Phone className="h-4 w-4 text-accent" /> Call 07352 463262
              </a>
            </div>
          </div>

          {/* Right — hero image + trust card */}
          <div className="relative animate-fade-up animate-fade-up-delay-2">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-accent/15 to-primary/10 blur-3xl" />
            <img
              src={heroImg}
              alt="Professional bookkeeping workspace"
              width={1600}
              height={1100}
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl ring-1 ring-border"
            />
            {/* floating trust card */}
            <div className="absolute -bottom-5 -left-5 glass-card rounded-2xl px-5 py-4 shadow-xl">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <Award className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    ACCA Qualified
                  </div>
                  <div className="text-sm font-bold text-primary">10+ Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust badges ────────────────────────────────────── */}
      <section className="border-y border-border bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {trustBadges.map((b) => (
              <div key={b.label} className="flex items-center justify-center gap-3 text-primary-foreground">
                <b.icon className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meet Thilaga ─────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
          <div className="grid md:grid-cols-[2fr_3fr] gap-0">
            {/* left — clean navy panel, no dot pattern */}
            <div className="flex flex-col justify-center bg-primary px-10 py-14">
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl font-semibold text-primary-foreground md:text-4xl">
                Meet Thilaga
              </h2>
              <p className="mt-4 text-primary-foreground/80 leading-relaxed text-sm">
                ACCA qualified with over a decade of bookkeeping and accounts
                experience inside UK practices — now working directly with firms
                and business owners who want a single, trusted point of contact.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-primary-foreground/15 px-4 py-3 text-center">
                    <div className="font-serif text-xl font-bold text-accent">{s.value}</div>
                    <div className="mt-0.5 text-xs text-primary-foreground/65">{s.label}</div>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                id="founder-learn-more"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg border border-primary-foreground/20 px-4 py-2.5 text-sm font-medium text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent"
              >
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            {/* right — story */}
            <div className="px-10 py-14">
              <div className="badge-gold mb-5">Our Story</div>
              <h3 className="font-serif text-2xl font-semibold text-primary">
                Built on the belief that good bookkeeping shouldn't feel mysterious.
              </h3>
              <div className="mt-5 space-y-3.5 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Just Accounting is the trading name of{" "}
                  <span className="font-semibold text-primary">TS Professional Accountancy Ltd</span>{" "}
                  — a small UK-based bookkeeping practice that works with
                  accountancy firms and direct business clients.
                </p>
                <p>
                  Built on years of hands-on experience inside UK accounting firms,
                  we understand exactly what accountants need — clean, reconciled
                  records, on time, every time.
                </p>
                <p>
                  For business owners, it means tidy books, no jargon, and a
                  single person to call — always the same one.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/contact" id="founder-book-cta" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-md">
                  Book a free consultation <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="mailto:ts.justaccount@mail.co.uk" className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent">
                  Send an email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who we help ──────────────────────────────────────── */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <div className="badge-gold mx-auto mb-4">Who We Help</div>
            <h2 className="font-serif text-4xl font-semibold text-primary md:text-5xl">
              Two audiences, one standard of work.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Whether you're a firm needing reliable overflow support, or a
              business owner who just wants tidy books — we can help.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {audiences.map((a) => (
              <Link
                key={a.title}
                to={a.to}
                id={`audience-card-${a.to.replace("/", "")}`}
                className="group flex flex-col rounded-2xl border border-border bg-white p-8 card-hover"
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-md transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <a.icon className="h-6 w-6" />
                  </div>
                  <span className="badge-gold text-[0.65rem]">{a.tag}</span>
                </div>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-primary leading-snug md:text-3xl">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.blurb}</p>
                <ul className="mt-6 space-y-2.5">
                  {a.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary">
                  {a.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services overview ─────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-14 text-center">
          <div className="badge-gold mx-auto mb-4">What We Do</div>
          <h2 className="font-serif text-4xl font-semibold text-primary md:text-5xl">
            Bookkeeping done <span className="text-gradient-gold">properly</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Accurate, MTD-compliant bookkeeping across the full range of small
            business and firm requirements.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-8 card-hover"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary shadow-sm transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/for-business"
            id="services-see-all"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary link-underline"
          >
            See the full service list <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="badge-gold mx-auto mb-4">Client Feedback</div>
            <h2 className="font-serif text-4xl font-semibold text-primary md:text-5xl">
              Trusted by businesses across the UK.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-white p-8 card-hover">
                <StarRating count={t.stars} />
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  "{t.quote}"
                </blockquote>
                <div className="mt-6 border-t border-border pt-5">
                  <div className="text-sm font-semibold text-primary">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-2xl border border-border bg-white px-10 py-14 text-center">
          <div className="badge-gold mx-auto mb-5">Free Consultation</div>
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold text-primary md:text-4xl">
            Ready to simplify your bookkeeping?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
            Book a free, no-obligation consultation. Whether you're a firm
            needing overflow support or a business owner who just wants tidy
            books — we'll take it from there.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              id="cta-book-final"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              Book Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+447352463262"
              id="cta-call-final"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-8 py-4 text-sm font-semibold text-foreground transition-all hover:border-accent"
            >
              <Phone className="h-4 w-4 text-accent" /> 07352 463262
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
