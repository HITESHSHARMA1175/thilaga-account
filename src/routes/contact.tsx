import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Free Consultation — Just Accounting UK" },
      { name: "description", content: "Get in touch with Just Accounting for a free 30-minute consultation. UK-wide bookkeeping, payroll and tax support." },
      { property: "og:title", content: "Contact Just Accounting" },
      { property: "og:description", content: "Book a free 30-minute consultation with a UK accountant." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-16 md:py-20">
          <span className="text-sm font-medium text-muted-foreground">Contact</span>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-primary md:text-5xl">
            Let's talk about your business.
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Send a quick message and we'll get back to you within one working day —
            usually much faster.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.3fr_1fr]">
        <div className="rounded-2xl border border-border bg-card p-8">
          {sent ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle2 className="h-12 w-12 text-accent" />
              <h2 className="mt-4 font-serif text-2xl font-semibold text-primary">Message sent</h2>
              <p className="mt-2 text-muted-foreground">Thanks — we'll be in touch shortly.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="grid gap-5"
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
                <label htmlFor="msg" className="text-sm font-medium text-foreground">How can we help?</label>
                <textarea
                  id="msg"
                  required
                  rows={5}
                  className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
                  placeholder="Tell us a bit about your business and what you need..."
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send message
              </button>
              <p className="text-xs text-muted-foreground">
                We'll never share your details. By submitting you agree to be contacted about your enquiry.
              </p>
            </form>
          )}
        </div>

        <aside className="space-y-5">
          <InfoCard icon={Mail} title="Email" lines={["hello@just-accounting.co.uk"]} />
          <InfoCard icon={Phone} title="Phone" lines={["+44 (0) 20 0000 0000"]} />
          <InfoCard icon={Clock} title="Hours" lines={["Mon – Fri: 9am – 5:30pm", "Replies within 1 working day"]} />
          <InfoCard icon={MapPin} title="Coverage" lines={["United Kingdom — fully remote", "Serving clients nationwide"]} />
        </aside>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, id, type = "text", required }: { label: string; id: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-foreground">{label}</label>
      <input
        id={id}
        type={type}
        required={required}
        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, lines }: { icon: React.ComponentType<{ className?: string }>; title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center gap-2 text-primary">
        <Icon className="h-4 w-4 text-accent" />
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
      <div className="mt-2 space-y-0.5 text-sm text-muted-foreground">
        {lines.map((l) => <div key={l}>{l}</div>)}
      </div>
    </div>
  );
}
