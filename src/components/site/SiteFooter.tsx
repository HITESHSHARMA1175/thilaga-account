import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const quickLinks = [
  { to: "/for-firms", label: "For Accountancy Firms" },
  { to: "/for-business", label: "For Businesses" },
  { to: "/blog", label: "Blog & Newsletter" },
  { to: "/testimonials", label: "Client Testimonials" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

const services = [
  "Bank Reconciliations",
  "VAT Returns (MTD)",
  "Management Accounts",
  "Year-End Preparation",
  "Payroll Data Processing",
];

interface SiteFooterProps {
  /** Pass true on inner pages that already have their own CTA block */
  hideCta?: boolean;
}

export function SiteFooter({ hideCta = false }: SiteFooterProps) {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      {/* CTA strip — only on pages that don't have their own CTA above the footer */}
      {!hideCta && (
        <div className="border-b border-primary-foreground/10 bg-primary-foreground/5">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-8 lg:px-8">
            <div>
              <p className="font-serif text-xl font-semibold text-primary-foreground">
                Ready to get started?
              </p>
              <p className="mt-1 text-sm text-primary-foreground/70">
                Free consultation, no obligation.
              </p>
            </div>
            <Link
              to="/contact"
              id="footer-cta"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-md shadow-accent/20 transition-all hover:-translate-y-0.5"
            >
              Book Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}

      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:px-8 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary-foreground/10 font-serif text-sm font-bold text-primary-foreground">
              JA
            </span>
            <span className="font-serif text-lg font-semibold">Just Accounting</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
            A small UK bookkeeping practice offering reliable, MTD-compliant
            support to accountancy firms and direct business clients.
          </p>
          <p className="mt-3 text-xs text-primary-foreground/40">
            Trading name of TS Professional Accountancy Ltd.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-primary-foreground/75 transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
            Services
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href="mailto:ts.justaccount@mail.co.uk"
                className="flex items-start gap-2.5 text-primary-foreground/75 transition-colors hover:text-accent"
              >
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                ts.justaccount@mail.co.uk
              </a>
            </li>
            <li>
              <a
                href="tel:+447352463262"
                className="flex items-center gap-2.5 text-primary-foreground/75 transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                07352 463262
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-primary-foreground/75">
              <MapPin className="h-4 w-4 flex-shrink-0 text-accent" />
              United Kingdom — fully remote
            </li>
            <li className="mt-1 text-xs text-primary-foreground/50">
              Mon – Fri: 9am – 5:30pm
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 lg:px-8">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} TS Professional Accountancy Ltd, trading as Just Accounting.
            All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40">
            ACCA Qualified · UK Based · MTD Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}
