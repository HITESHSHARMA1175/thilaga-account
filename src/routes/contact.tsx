import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Mail, Phone, MapPin, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Free Consultation — Just Accounting UK" },
      {
        name: "description",
        content:
          "Get in touch with Just Accounting for a free, no-obligation consultation. UK-based bookkeeping support for businesses and accountancy firms.",
      },
      { property: "og:title", content: "Contact Just Accounting" },
      {
        property: "og:description",
        content: "Book a free consultation with Just Accounting — ACCA Qualified, UK Based.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Page header — light */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 md:py-18">
          <span className="badge-gold mb-5 inline-flex">Free Consultation</span>
          <h1 className="font-serif text-4xl font-semibold text-primary md:text-5xl">
            Let's talk about your business.
          </h1>
          <p className="mt-4 max-w-lg text-lg text-muted-foreground leading-relaxed">
            Send a message and we'll get back to you within one working day —
            usually much faster.
          </p>
        </div>
      </section>

      {/* Form + contact info */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          {/* Form */}
          <div className="rounded-2xl border border-border bg-white p-10 shadow-sm">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-accent/15">
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                </div>
                <h2 className="mt-5 font-serif text-2xl font-semibold text-primary">
                  Message sent!
                </h2>
                <p className="mt-3 max-w-sm text-muted-foreground">
                  Thanks for getting in touch. We'll be back with you within one
                  working day.
                </p>
              </div>
            ) : (
              <>
                <div className="divider-gold" />
                <h2 className="font-serif text-2xl font-semibold text-primary">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tell us a little about your business and what you need.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="mt-7 grid gap-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Your name" id="name" required />
                    <Field label="Email address" id="email" type="email" required />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Phone (optional)" id="phone" type="tel" />
                    <Field label="Business name (optional)" id="biz" />
                  </div>
                  <div>
                    <label htmlFor="type" className="text-sm font-semibold text-foreground">
                      I am a…
                    </label>
                    <select
                      id="type"
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    >
                      <option value="">Select one</option>
                      <option value="business">Business owner needing bookkeeping</option>
                      <option value="firm">Accountancy firm needing support</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="msg" className="text-sm font-semibold text-foreground">
                      How can we help?
                    </label>
                    <textarea
                      id="msg"
                      required
                      rows={5}
                      className="mt-2 w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                      placeholder="Tell us a bit about your business and what you need..."
                    />
                  </div>
                  <button
                    type="submit"
                    id="contact-submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    Send message <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="text-xs text-muted-foreground">
                    We'll never share your details. By submitting you agree to be
                    contacted about your enquiry.
                  </p>
                </form>
              </>
            )}
          </div>

          {/* Sidebar — single consolidated card */}
          <div className="space-y-5">
            {/* Contact details — one clean card */}
            <div className="rounded-2xl border border-border bg-white p-7">
              <h3 className="font-serif text-lg font-semibold text-primary mb-5">
                Contact Details
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:ts.justaccount@mail.co.uk"
                  className="flex items-start gap-3 group"
                >
                  <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-primary/8 text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</div>
                    <div className="text-sm text-primary group-hover:text-accent transition-colors">ts.justaccount@mail.co.uk</div>
                  </div>
                </a>
                <div className="h-px bg-border" />
                <a href="tel:+447352463262" className="flex items-start gap-3 group">
                  <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-primary/8 text-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone</div>
                    <div className="text-sm text-primary group-hover:text-accent transition-colors">07352 463262</div>
                  </div>
                </a>
                <div className="h-px bg-border" />
                <div className="flex items-start gap-3">
                  <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-primary/8 text-primary">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Hours</div>
                    <div className="text-sm text-foreground">Mon – Fri: 9am – 5:30pm</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Replies within 1 working day</div>
                  </div>
                </div>
                <div className="h-px bg-border" />
                <div className="flex items-start gap-3">
                  <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-primary/8 text-primary">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Coverage</div>
                    <div className="text-sm text-foreground">United Kingdom — fully remote</div>
                    <div className="text-xs text-muted-foreground mt-0.5">TS Professional Accountancy Ltd</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust checklist */}
            <div className="rounded-2xl border border-border bg-secondary/40 p-7">
              <h3 className="font-semibold text-primary mb-4">Why clients trust us</h3>
              <ul className="space-y-2.5">
                {[
                  "ACCA Qualified — professional standards",
                  "10+ years UK practice experience",
                  "One dedicated contact, always",
                  "MTD compliant — Making Tax Digital ready",
                  "Transparent pricing, agreed upfront",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter hideCta />
    </div>
  );
}

function Field({
  label,
  id,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </div>
  );
}
