import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-serif text-xl font-semibold">Just Accounting</div>
          <p className="mt-3 max-w-sm text-sm text-primary-foreground/70">
            UK-based bookkeeping, payroll, VAT and MTD support for sole traders,
            limited companies and growing small businesses.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Services</h4>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/services" className="hover:text-accent">Bookkeeping</Link></li>
            <li><Link to="/services" className="hover:text-accent">Payroll</Link></li>
            <li><Link to="/services" className="hover:text-accent">VAT & MTD</Link></li>
            <li><Link to="/services" className="hover:text-accent">Self Assessment</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> hello@just-accounting.co.uk</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +44 (0) 20 0000 0000</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> United Kingdom</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Just Accounting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
