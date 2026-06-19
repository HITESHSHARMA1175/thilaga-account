import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-serif text-xl font-semibold">Just Accounting</div>
          <p className="mt-3 max-w-sm text-sm text-primary-foreground/70">
            A small UK bookkeeping practice offering reliable, MTD-compliant support
            to accountancy firms and direct business clients.
          </p>
          <p className="mt-3 text-xs text-primary-foreground/50">
            Trading name of TS Professional Accountancy Ltd.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Who we help</h4>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/for-firms" className="hover:text-accent">Accountancy firms</Link></li>
            <li><Link to="/for-business" className="hover:text-accent">Direct businesses</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> ts.justaccount@mail.co.uk</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> 07352 463262</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> United Kingdom</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} TS Professional Accountancy Ltd, trading as Just Accounting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
