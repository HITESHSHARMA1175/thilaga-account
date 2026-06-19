import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { BookOpen, Users, Receipt, FileSpreadsheet, Building2, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Accounting Services | Bookkeeping, Payroll, VAT — Just Accounting" },
      { name: "description", content: "Full-service UK accounting: bookkeeping, payroll, VAT & MTD, self assessment, limited company accounts and tax planning. Fixed monthly fees." },
      { property: "og:title", content: "Accounting Services — Just Accounting UK" },
      { property: "og:description", content: "Bookkeeping, payroll, VAT, MTD, self assessment and company accounts for UK small businesses." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: BookOpen,
    title: "Bookkeeping",
    desc: "Cloud-based bookkeeping that keeps your records HMRC-ready every single day. We use Xero, QuickBooks and FreeAgent to give you real-time visibility of cash flow, profitability and outstanding invoices — so you always know where you stand without waiting for year-end.",
    bullets: ["Monthly bank reconciliation", "Receipt capture via mobile app", "Custom management reports", "Software set-up included"],
  },
  {
    icon: Users,
    title: "Payroll & PAYE",
    desc: "Fully managed payroll for teams of 1 to 50+. We handle weekly or monthly runs, RTI submissions to HMRC, payslips, P60s, P45s and auto-enrolment pensions — leaving you to focus on running the business, not chasing tax codes.",
    bullets: ["RTI submissions to HMRC", "Digital payslips", "Auto-enrolment pensions", "Year-end P60s & P11Ds"],
  },
  {
    icon: Receipt,
    title: "VAT Returns & MTD",
    desc: "Every VAT return is prepared and submitted under Making Tax Digital, with full digital records. We advise on the best VAT scheme for your business — Flat Rate, Cash Accounting or Standard — and flag opportunities to reclaim more.",
    bullets: ["MTD-compliant filing", "Scheme advice (Flat Rate / Cash)", "Quarterly reviews", "HMRC enquiry support"],
  },
  {
    icon: FileSpreadsheet,
    title: "Self Assessment",
    desc: "Personal tax returns for sole traders, landlords, company directors and high earners. We calculate every allowance you're entitled to, file on time, and tell you exactly what to pay and when — no last-minute January panic.",
    bullets: ["Sole trader returns", "Landlord & property income", "Director self assessment", "Capital gains tax"],
  },
  {
    icon: Building2,
    title: "Limited Company Accounts",
    desc: "Year-end statutory accounts and Corporation Tax (CT600) prepared and filed with Companies House and HMRC. We also handle confirmation statements, dividend vouchers and director's loan accounts.",
    bullets: ["Statutory accounts", "Corporation Tax CT600", "Confirmation statements", "Companies House filing"],
  },
  {
    icon: TrendingUp,
    title: "Tax Planning & Advice",
    desc: "Proactive, year-round advice that goes beyond compliance. From the most tax-efficient salary/dividend split to R&D claims, capital allowances and exit planning, we help you legally keep more of what you earn.",
    bullets: ["Salary vs dividend planning", "R&D tax credits", "Capital allowances", "Exit & succession planning"],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <span className="text-sm font-medium text-muted-foreground">Services</span>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold text-primary md:text-5xl">
            Everything a UK small business needs — under one roof.
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            From day-to-day bookkeeping to strategic tax planning, our services
            are bundled into clear fixed monthly fees. Pick and mix what you need.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="rounded-2xl border border-border bg-card p-7">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-accent-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-serif text-2xl font-semibold text-primary">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-accent" /> {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-primary px-8 py-12 text-primary-foreground md:px-12">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="font-serif text-2xl font-semibold md:text-3xl">Not sure what you need?</h2>
              <p className="mt-2 text-primary-foreground/75">
                Book a free 30-minute call. We'll recommend the right bundle for your stage and size.
              </p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 self-start rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 md:self-auto">
              Talk to an accountant <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
