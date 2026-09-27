import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getApprovedTestimonials, type Testimonial } from "@/data/store";
import { Star, Quote, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials | Just Accounting UK" },
      {
        name: "description",
        content:
          "See what UK businesses and accountancy firms say about working with Just Accounting — reliable, professional bookkeeping with a personal touch.",
      },
    ],
  }),
  component: TestimonialsPage,
});

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
      ))}
    </div>
  );
}

function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    setTestimonials(getApprovedTestimonials());
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Header */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 md:py-20">
          <span className="badge-gold mb-5 inline-flex">Client Testimonials</span>
          <h1 className="font-serif text-4xl font-semibold text-primary md:text-5xl lg:text-6xl max-w-3xl">
            What our clients say about us.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground leading-relaxed">
            We're proud of the relationships we've built with UK businesses and
            accountancy firms. Here's what they have to say.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-0 divide-x divide-border px-6 lg:px-8">
          {[
            { value: "5.0", label: "Average rating" },
            { value: testimonials.length.toString(), label: "Happy clients" },
            { value: "100%", label: "Would recommend" },
          ].map((s) => (
            <div key={s.label} className="px-6 py-6 text-center first:pl-0 last:pr-0">
              <div className="font-serif text-3xl font-bold text-accent">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {testimonials.length === 0 ? (
          <div className="py-24 text-center">
            <Quote className="mx-auto h-12 w-12 text-muted-foreground/30" />
            <p className="mt-4 font-serif text-xl text-primary">No testimonials yet</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Add some in the{" "}
              <Link to="/admin" className="text-accent underline">
                admin panel
              </Link>
              .
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex flex-col rounded-2xl border border-border bg-white p-8 card-hover"
              >
                <Stars count={t.stars} />
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  <Quote className="mb-2 h-5 w-5 text-accent/40" />
                  {t.quote}
                </blockquote>
                <div className="mt-6 border-t border-border pt-5">
                  <div className="text-sm font-semibold text-primary">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.role}
                    {t.company ? ` · ${t.company}` : ""}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-2xl border border-border bg-secondary/40 px-10 py-12 text-center">
          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
            Ready to join them?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Book a free, no-obligation consultation and see how Just Accounting
            can help your business.
          </p>
          <Link
            to="/contact"
            id="testimonials-cta"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            Book a free consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter hideCta />
    </div>
  );
}
