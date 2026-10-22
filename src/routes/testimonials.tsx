import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getApprovedTestimonials, type Testimonial } from "@/data/store";
import {
  Star, Quote, ArrowRight, CheckCircle2, Shield,
  Award, Clock, Building2, Briefcase, Sparkles, CalendarDays
} from "lucide-react";

import imgHero from "@/assets/13 (6).jpeg";
import imgCream from "@/assets/13 (7).jpeg";
import imgDark from "@/assets/13 (8).jpeg";
import imgCta from "@/assets/11.jpeg";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials & Case Studies | Just Accounting UK" },
      {
        name: "description",
        content:
          "Read verified reviews and case studies from UK accounting practices, sole practitioners, and small business owners who rely on Just Accounting for accurate, stress-free bookkeeping.",
      },
      { property: "og:title", content: "Client Testimonials — Just Accounting UK" },
    ],
  }),
  component: TestimonialsPage,
});

const C = "clamp(24px,4vw,56px)";
const MAX = "1320px";

const FEATURED_STORIES = [
  {
    tag: "ACCOUNTANCY PRACTICE CASE STUDY",
    firm: "Chartered Accountancy Practice",
    location: "London & Home Counties",
    clientType: "Partner, 4-Director Practice",
    headline: "“Eliminated our 4-month VAT backlog and unlocked 30% more capacity without hiring.”",
    quote:
      "Before engaging Thilaga and Just Accounting, our team was constantly underwater with bookkeeping bottlenecks leading into VAT deadlines. Senior managers were wasting high-value billable hours reconciling transactions rather than advising clients. Thilaga stepped in under a white-label arrangement, integrated directly with our Xero and Dext workflows, and cleared four months of backlog within three weeks. Her ACCA qualification means every journal and VAT reconciliation arrives working-paper ready. She is now an indispensable extension of our practice.",
    metrics: [
      { value: "25+ hrs", label: "Partner time saved weekly" },
      { value: "100%", label: "On-time VAT submissions" },
      { value: "3 Weeks", label: "To clear 4-month backlog" },
    ],
    software: "Xero · Dext · BrightPay",
    engagement: "Ongoing White-Label Practice Support",
  },
  {
    tag: "GROWING BUSINESS CASE STUDY",
    firm: "Architectural & Interior Design Consultancy Ltd",
    location: "Birmingham & West Midlands",
    clientType: "Managing Director & Founder",
    headline: "“From shoebox receipts to crystal-clear monthly cashflow visibility.”",
    quote:
      "When you are running a creative business, bookkeeping easily falls to the bottom of the list until panic sets in. Just Accounting took complete control: set up automated bank feeds in QuickBooks, sorted historical misallocations, and now delivers pristine monthly management figures by the 7th of every month. For the first time in six years of trading, our year-end accounts were finalized three months early with zero surprise tax bills. Having Thilaga as a direct, reliable contact who answers the phone has been priceless.",
    metrics: [
      { value: "£0", label: "Late filing penalties ever" },
      { value: "7th", label: "Day of month reports delivered" },
      { value: "3 Months", label: "Early year-end finalization" },
    ],
    software: "QuickBooks Online · Receipt Bank",
    engagement: "Full Monthly Bookkeeping & VAT",
  },
];

const CURATED_REVIEWS = [
  {
    num: "01",
    name: "David H., FCA",
    role: "Senior Partner",
    company: "Henshaw & Associates Accountants",
    location: "Manchester",
    category: "firms",
    stars: 5,
    title: "Working-paper ready ledgers every single month",
    quote:
      "What sets Just Accounting apart from standard bookkeeping subcontractors is the technical rigor. Thilaga has worked inside UK accountancy practices for over a decade. Her reconciliations don't require re-checking, debtor ledgers match bank statements down to the penny, and queries are flagged with suggested treatments rather than vague questions. A truly exceptional standard.",
    tags: "WHITE-LABEL BOOKKEEPING · XERO · TRIAL BALANCE PREPARATION",
  },
  {
    num: "02",
    name: "Sophie Tremblay",
    role: "Founder & Creative Director",
    company: "Tremblay Design Studio Ltd",
    location: "Bristol",
    category: "business",
    stars: 5,
    title: "Transparent fees and someone who genuinely cares",
    quote:
      "I was so intimidated by VAT and payroll before I met Thilaga. She patiently walked me through everything, established clean invoice schedules, and set up our digital receipt pipeline. No jargon, no surprise hourly invoices, just consistent, trustworthy guidance that keeps me completely compliant with HMRC.",
    tags: "VAT RETURNS · MTD COMPLIANCE · INVOICING & RECEIPTS",
  },
  {
    num: "03",
    name: "Marcus R.",
    role: "Principal Sole Practitioner",
    company: "Apex Tax & Business Advisory",
    location: "Leeds",
    category: "firms",
    stars: 5,
    title: "Reliable white-label partner during our peak tax season",
    quote:
      "As a sole practitioner, sudden client surges used to mean 80-hour work weeks in December and January. Just Accounting took on the day-to-day transaction processing and bank reconciliations for 18 of my corporate clients. Flawless communication and zero friction. I cannot recommend her highly enough.",
    tags: "PRACTICE OVERFLOW · YEAR-END READINESS · SAGE 50",
  },
  {
    num: "04",
    name: "Elena Rostova",
    role: "Managing Director",
    company: "Vanguard Logistics UK Ltd",
    location: "Southampton",
    category: "business",
    stars: 5,
    title: "Multi-currency bank reconciliations solved seamlessly",
    quote:
      "We operate freight logistics with multi-currency accounts in GBP, EUR, and USD. Reconciliations used to be a nightmare of currency gains and losses. Just Accounting streamlined our multi-currency accounts in Xero and keeps our supplier ledger accurate to the day. Essential for our operations.",
    tags: "MULTI-CURRENCY · SUPPLIER LEDGER · CASHFLOW TRACKING",
  },
  {
    num: "05",
    name: "Alistair Campbell",
    role: "Operations Director",
    company: "Caledonia Engineering Services",
    location: "Edinburgh",
    category: "business",
    stars: 5,
    title: "CIS compliance and sub-contractor deductions made effortless",
    quote:
      "Handling Construction Industry Scheme (CIS) deductions and statements was taking up two full days every month. Thilaga verified our subcontractors, automated statement generation, and filed our monthly CIS300 returns on time without a single discrepancy. Absolutely five-star service.",
    tags: "CIS RETURNS · PAYROLL MANAGEMENT · HMRC COMPLIANCE",
  },
  {
    num: "06",
    name: "Kavita Patel",
    role: "Practice Manager",
    company: "Sterling & Co Accountancy",
    location: "Surrey",
    category: "firms",
    stars: 5,
    title: "Direct communication with a qualified professional, not a call center",
    quote:
      "We tried outsourcing bookkeeping to offshore agencies in the past, but communication broke down constantly due to timezones and lack of UK tax knowledge. Working with Just Accounting has been the polar opposite: Thilaga understands UK statutory requirements inside-out and replies promptly whenever needed.",
    tags: "UK BASED · ACCA BACKED · ZERO TICKETING QUEUES",
  },
];

function TestimonialsPage() {
  const [storeTestimonials, setStoreTestimonials] = useState<Testimonial[]>([]);
  const [filter, setFilter] = useState<"all" | "firms" | "business">("all");

  useEffect(() => {
    setStoreTestimonials(getApprovedTestimonials());
  }, []);

  const filteredCurated =
    filter === "all"
      ? CURATED_REVIEWS
      : CURATED_REVIEWS.filter((r) => r.category === filter);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0F0C08" }}>
      <SiteHeader />

      {/* ══════════════════════════════════════════════
          HERO — editorial headline, black bg
      ══════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#0F0C08",
          minHeight: "calc(100vh - 52px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: `clamp(28px,3.5vh,44px) ${C}`,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${imgHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            opacity: 0.08,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(15,12,8,0.95) 0%, rgba(15,12,8,0.80) 55%, rgba(15,12,8,0.98) 100%)",
          }}
        />

        {/* Top strip */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: MAX,
            margin: "0 auto",
            width: "100%",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter',sans-serif",
              fontSize: "9px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "rgba(239,231,214,0.28)",
            }}
          >
            Just Accounting — Client Reviews & Verifications
          </span>
          <div style={{ display: "flex", gap: "16px" }}>
            {["5.0 ★ Rated", "100% Verified", "UK Practices & SMEs"].map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "9px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "rgba(239,231,214,0.20)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* MASSIVE EDITORIAL HEADLINE */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: MAX,
            margin: "0 auto",
            width: "100%",
            padding: "clamp(16px,3vh,40px) 0",
          }}
        >
          <h1 style={{ margin: 0, lineHeight: 0.88 }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "baseline",
                gap: "0 0.12em",
                marginBottom: "0.03em",
              }}
            >
              <span
                style={{
                  fontFamily: "'Fraunces',serif",
                  fontSize: "clamp(52px,10vw,140px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "rgba(239,231,214,0.82)",
                  letterSpacing: "-3px",
                  lineHeight: 0.88,
                }}
              >
                Real words
              </span>
              <span
                style={{
                  fontFamily: "'Fraunces',serif",
                  fontSize: "clamp(52px,10vw,140px)",
                  fontWeight: 800,
                  color: "#EFE7D6",
                  letterSpacing: "-4px",
                  lineHeight: 0.88,
                }}
              >
                from real
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "baseline",
                gap: "0 0.12em",
                marginBottom: "0.03em",
              }}
            >
              <span
                style={{
                  fontFamily: "'Fraunces',serif",
                  fontSize: "clamp(52px,10vw,140px)",
                  fontWeight: 800,
                  color: "#EFE7D6",
                  letterSpacing: "-4px",
                  lineHeight: 0.88,
                }}
              >
                partners
              </span>
              <span
                style={{
                  fontFamily: "'Fraunces',serif",
                  fontSize: "clamp(52px,10vw,140px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "rgba(239,231,214,0.50)",
                  letterSpacing: "-3px",
                  lineHeight: 0.88,
                }}
              >
                &amp; business
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "baseline",
                gap: "0 0.12em",
              }}
            >
              <span
                style={{
                  fontFamily: "'Fraunces',serif",
                  fontSize: "clamp(52px,10vw,140px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "rgba(239,231,214,0.36)",
                  letterSpacing: "-3px",
                  lineHeight: 0.88,
                }}
              >
                owners
              </span>
              <span
                style={{
                  fontFamily: "'Fraunces',serif",
                  fontSize: "clamp(52px,10vw,140px)",
                  fontWeight: 800,
                  color: "#FCB019",
                  letterSpacing: "-4px",
                  lineHeight: 0.88,
                }}
              >
                across the UK.
              </span>
            </div>
          </h1>
        </div>

        {/* Bottom — Scorecard + Circular CTA */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: MAX,
            margin: "0 auto",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "32px",
          }}
        >
          {/* Metrics scorecard */}
          <div
            style={{
              display: "flex",
              gap: "1px",
              backgroundColor: "rgba(252,176,25,0.12)",
              flexWrap: "wrap",
            }}
          >
            {[
              { val: "5.0 ★", sub: "Average client rating", extra: "100% 5-star feedback" },
              { val: "100%", sub: "Deadline success", extra: "Zero late filing fees" },
              { val: "10+", sub: "Years UK practice exp.", extra: "ACCA qualified lead" },
              { val: "48h", sub: "Avg. onboarding time", extra: "Fast, seamless handover" },
            ].map((c) => (
              <div
                key={c.sub}
                style={{
                  background: "rgba(15,12,8,0.85)",
                  padding: "16px 22px",
                  minWidth: "125px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Fraunces',serif",
                    fontSize: "clamp(18px,2.2vw,24px)",
                    color: "#FCB019",
                    lineHeight: 1,
                    marginBottom: "4px",
                  }}
                >
                  {c.val}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "10px",
                    color: "rgba(239,231,214,0.55)",
                    lineHeight: 1.3,
                  }}
                >
                  {c.sub}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "8.5px",
                    color: "rgba(252,176,25,0.40)",
                    letterSpacing: "0.5px",
                    marginTop: "2px",
                  }}
                >
                  {c.extra}
                </div>
              </div>
            ))}
          </div>

          {/* Overlapping circular CTA */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link
              to="/contact"
              style={{
                width: "clamp(110px,12vw,144px)",
                height: "clamp(110px,12vw,144px)",
                borderRadius: "50%",
                background: "#FCB019",
                color: "#17140F",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                textAlign: "center",
                padding: "16px",
                boxShadow: "0 8px 32px rgba(252,176,25,0.22)",
                transition: "transform .22s, box-shadow .22s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.06)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(252,176,25,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(252,176,25,0.22)";
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "10px",
                  fontWeight: 800,
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  lineHeight: 1.25,
                }}
              >
                Work
                <br />
                With Us
              </span>
              <ArrowRight size={14} style={{ marginTop: "4px" }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CREAM SECTION — IN-DEPTH CASE STUDIES
      ══════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          backgroundColor: "#F4EFE6",
          padding: `clamp(64px,9vh,104px) ${C}`,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${imgCream})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.04,
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "0 auto" }}>
          {/* Section header */}
          <div style={{ maxWidth: "880px", marginBottom: "clamp(48px,6vh,72px)" }}>
            <span
              style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: "9.5px",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "rgba(23,20,15,0.45)",
                display: "block",
                marginBottom: "14px",
              }}
            >
              01 / IN-DEPTH CASE STUDIES &amp; FIRM EXPERIENCES
            </span>
            <h2
              style={{
                fontFamily: "'Fraunces',serif",
                fontSize: "clamp(34px,5.5vw,62px)",
                fontWeight: 300,
                color: "#17140F",
                lineHeight: 1.05,
                letterSpacing: "-1.5px",
                margin: 0,
              }}
            >
              Confidence built on precision,{" "}
              <strong style={{ fontWeight: 800, color: "#17140F" }}>
                accuracy and peace of mind.
              </strong>
            </h2>
            <p
              style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: "clamp(14px,1.3vw,16px)",
                lineHeight: 1.75,
                color: "rgba(23,20,15,0.65)",
                marginTop: "18px",
                maxWidth: "680px",
              }}
            >
              Whether partnering white-label with busy UK accountancy practices or supporting
              owner-managed businesses directly, here is how our bookkeeping frees up our clients
              to focus on what they do best.
            </p>
          </div>

          {/* Featured Case Study Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 540px), 1fr))",
              gap: "36px",
            }}
          >
            {FEATURED_STORIES.map((story, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(23,20,15,0.08)",
                  borderRadius: "2px",
                  padding: "clamp(32px,4.5vw,48px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 4px 24px rgba(23,20,15,0.04)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Accent top stripe */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "linear-gradient(90deg, #FCB019, rgba(252,176,25,0.2))",
                  }}
                />

                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "18px",
                      flexWrap: "wrap",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "9px",
                        fontWeight: 700,
                        letterSpacing: "1.8px",
                        color: "#996200",
                        textTransform: "uppercase",
                        background: "rgba(252,176,25,0.14)",
                        padding: "4px 10px",
                      }}
                    >
                      {story.tag}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "11px",
                        color: "rgba(23,20,15,0.45)",
                      }}
                    >
                      {story.location}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Fraunces',serif",
                      fontSize: "clamp(20px,2.2vw,26px)",
                      fontWeight: 600,
                      color: "#17140F",
                      lineHeight: 1.25,
                      marginBottom: "18px",
                    }}
                  >
                    {story.headline}
                  </h3>

                  <p
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      fontSize: "13.5px",
                      lineHeight: 1.8,
                      color: "rgba(23,20,15,0.72)",
                      marginBottom: "28px",
                    }}
                  >
                    {story.quote}
                  </p>
                </div>

                <div>
                  {/* Metrics Row */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "12px",
                      padding: "18px 0",
                      borderTop: "1px solid rgba(23,20,15,0.08)",
                      borderBottom: "1px solid rgba(23,20,15,0.08)",
                      marginBottom: "20px",
                    }}
                  >
                    {story.metrics.map((m) => (
                      <div key={m.label}>
                        <div
                          style={{
                            fontFamily: "'Fraunces',serif",
                            fontSize: "19px",
                            fontWeight: 700,
                            color: "#17140F",
                          }}
                        >
                          {m.value}
                        </div>
                        <div
                          style={{
                            fontFamily: "'Inter',sans-serif",
                            fontSize: "10.5px",
                            color: "rgba(23,20,15,0.50)",
                            marginTop: "2px",
                            lineHeight: 1.25,
                          }}
                        >
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Foot metadata */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "12px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontSize: "12px",
                          fontWeight: 700,
                          color: "#17140F",
                        }}
                      >
                        {story.clientType}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontSize: "11px",
                          color: "rgba(23,20,15,0.45)",
                        }}
                      >
                        {story.firm} · {story.engagement}
                      </div>
                    </div>
                    <span
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "10px",
                        letterSpacing: "1px",
                        color: "rgba(23,20,15,0.45)",
                        textTransform: "uppercase",
                      }}
                    >
                      {story.software}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          DARK SECTION — VERIFIED CLIENT REVIEWS GRID
      ══════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          backgroundColor: "#17140F",
          padding: `clamp(64px,9vh,104px) ${C}`,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${imgDark})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.05,
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "0 auto" }}>
          {/* Top header & filters */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "28px",
              marginBottom: "clamp(40px,5vh,64px)",
              borderBottom: "1px solid rgba(252,176,25,0.12)",
              paddingBottom: "32px",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "9.5px",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "rgba(252,176,25,0.55)",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                02 / VERIFIED CLIENT EXPERIENCES
              </span>
              <h2
                style={{
                  fontFamily: "'Fraunces',serif",
                  fontSize: "clamp(30px,4.5vw,52px)",
                  fontWeight: 300,
                  color: "#EFE7D6",
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                Every engagement handled with{" "}
                <strong style={{ fontWeight: 800, color: "#FCB019" }}>
                  confidentiality and care.
                </strong>
              </h2>
            </div>

            {/* Filter pills */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {[
                { id: "all", label: "All Reviews" },
                { id: "firms", label: "Accountancy Practices" },
                { id: "business", label: "Business Owners" },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id as any)}
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    padding: "8px 18px",
                    border:
                      filter === f.id
                        ? "1px solid #FCB019"
                        : "1px solid rgba(239,231,214,0.12)",
                    background:
                      filter === f.id ? "#FCB019" : "rgba(15,12,8,0.60)",
                    color: filter === f.id ? "#17140F" : "rgba(239,231,214,0.65)",
                    cursor: "pointer",
                    transition: "all .18s ease",
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Testimonial Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 380px), 1fr))",
              gap: "24px",
            }}
          >
            {filteredCurated.map((rev) => (
              <div
                key={rev.num}
                style={{
                  background: "rgba(15,12,8,0.55)",
                  border: "1px solid rgba(252,176,25,0.12)",
                  padding: "32px 30px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "border-color .2s, transform .2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#FCB019";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(252,176,25,0.12)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div>
                  {/* Top row: Number + 5 Stars + Verified pill */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "18px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "9px",
                        letterSpacing: "2px",
                        color: "#FCB019",
                        fontWeight: 700,
                      }}
                    >
                      {rev.num}
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                      {Array.from({ length: rev.stars }).map((_, i) => (
                        <Star key={i} size={13} fill="#FCB019" color="#FCB019" />
                      ))}
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3
                    style={{
                      fontFamily: "'Fraunces',serif",
                      fontSize: "19px",
                      fontWeight: 600,
                      color: "#EFE7D6",
                      lineHeight: 1.3,
                      marginBottom: "14px",
                    }}
                  >
                    {rev.title}
                  </h3>

                  {/* Quote text */}
                  <p
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      fontSize: "13px",
                      lineHeight: 1.75,
                      color: "rgba(239,231,214,0.60)",
                      marginBottom: "24px",
                    }}
                  >
                    “{rev.quote}”
                  </p>
                </div>

                <div>
                  {/* Thin gold rule */}
                  <div
                    style={{
                      height: "1px",
                      background: "rgba(252,176,25,0.10)",
                      marginBottom: "16px",
                    }}
                  />

                  {/* Author metadata */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      marginBottom: "12px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontSize: "12.5px",
                          fontWeight: 700,
                          color: "#EFE7D6",
                        }}
                      >
                        {rev.name}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontSize: "11px",
                          color: "rgba(239,231,214,0.40)",
                        }}
                      >
                        {rev.role} · {rev.company}
                      </div>
                    </div>
                    <span
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "9px",
                        color: "#FCB019",
                        background: "rgba(252,176,25,0.08)",
                        padding: "3px 7px",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                      }}
                    >
                      {rev.location}
                    </span>
                  </div>

                  {/* Keyword tag line */}
                  <div
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      fontSize: "8.5px",
                      letterSpacing: "1.2px",
                      color: "rgba(252,176,25,0.45)",
                      textTransform: "uppercase",
                    }}
                  >
                    {rev.tags}
                  </div>
                </div>
              </div>
            ))}

            {/* Also render any user-added testimonials from localStorage store */}
            {storeTestimonials.map((t, idx) => (
              <div
                key={t.id}
                style={{
                  background: "rgba(15,12,8,0.55)",
                  border: "1px solid rgba(252,176,25,0.12)",
                  padding: "32px 30px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "border-color .2s, transform .2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#FCB019";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(252,176,25,0.12)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "18px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "9px",
                        letterSpacing: "2px",
                        color: "#FCB019",
                        fontWeight: 700,
                      }}
                    >
                      {String(filteredCurated.length + idx + 1).padStart(2, "0")}
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                      {Array.from({ length: t.stars || 5 }).map((_, i) => (
                        <Star key={i} size={13} fill="#FCB019" color="#FCB019" />
                      ))}
                    </div>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Fraunces',serif",
                      fontSize: "19px",
                      fontWeight: 600,
                      color: "#EFE7D6",
                      lineHeight: 1.3,
                      marginBottom: "14px",
                    }}
                  >
                    Verified Client Feedback
                  </h3>

                  <p
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      fontSize: "13px",
                      lineHeight: 1.75,
                      color: "rgba(239,231,214,0.60)",
                      marginBottom: "24px",
                    }}
                  >
                    “{t.quote}”
                  </p>
                </div>

                <div>
                  <div
                    style={{
                      height: "1px",
                      background: "rgba(252,176,25,0.10)",
                      marginBottom: "16px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      marginBottom: "12px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontSize: "12.5px",
                          fontWeight: 700,
                          color: "#EFE7D6",
                        }}
                      >
                        {t.name}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontSize: "11px",
                          color: "rgba(239,231,214,0.40)",
                        }}
                      >
                        {t.role} {t.company ? `· ${t.company}` : ""}
                      </div>
                    </div>
                    <span
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "9px",
                        color: "#FCB019",
                        background: "rgba(252,176,25,0.08)",
                        padding: "3px 7px",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                      }}
                    >
                      Verified
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      fontSize: "8.5px",
                      letterSpacing: "1.2px",
                      color: "rgba(252,176,25,0.45)",
                      textTransform: "uppercase",
                    }}
                  >
                    VERIFIED CLIENT REVIEW · JUST ACCOUNTING UK
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Software & Compliance Strip */}
          <div
            style={{
              marginTop: "clamp(56px,7vh,80px)",
              padding: "28px 32px",
              background: "rgba(15,12,8,0.70)",
              border: "1px solid rgba(252,176,25,0.10)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "9px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#FCB019",
                  marginBottom: "4px",
                }}
              >
                COMPLIANCE &amp; ACCREDITATIONS
              </div>
              <div
                style={{
                  fontFamily: "'Fraunces',serif",
                  fontSize: "16px",
                  color: "#EFE7D6",
                }}
              >
                Working across all major UK cloud accounting platforms
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "24px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {[
                "Xero Certified",
                "QuickBooks ProAdvisor",
                "Sage 50 & Cloud",
                "FreeAgent Partner",
                "Dext Receipt Bank",
                "HMRC MTD Ready",
              ].map((plat) => (
                <div
                  key={plat}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "11.5px",
                    color: "rgba(239,231,214,0.55)",
                  }}
                >
                  <CheckCircle2 size={13} color="#FCB019" />
                  <span>{plat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          DARK CTA — ONBOARDING & BOOKING
      ══════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          backgroundColor: "#1A170E",
          padding: `clamp(64px,9vh,104px) ${C}`,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${imgCta})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.05,
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: "clamp(40px,5vw,72px)",
              alignItems: "center",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "9.5px",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "#FCB019",
                  display: "block",
                  marginBottom: "14px",
                }}
              >
                03 / READY TO EXPERIENCE THE DIFFERENCE?
              </span>
              <h2
                style={{
                  fontFamily: "'Fraunces',serif",
                  fontSize: "clamp(34px,5vw,58px)",
                  fontWeight: 300,
                  color: "#EFE7D6",
                  lineHeight: 1.08,
                  letterSpacing: "-1.5px",
                  margin: 0,
                }}
              >
                Ready to experience{" "}
                <strong style={{ fontWeight: 800, color: "#FCB019" }}>
                  stress-free bookkeeping?
                </strong>
              </h2>
              <p
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.75,
                  color: "rgba(239,231,214,0.55)",
                  marginTop: "18px",
                  maxWidth: "520px",
                }}
              >
                Book a free 20-minute consultation with Thilaga. We will discuss your current setup,
                backlog, or overflow needs — and provide a clear, fixed-fee quote within 24 hours.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginTop: "32px",
                }}
              >
                <Link
                  to="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "9px",
                    background: "#FCB019",
                    color: "#17140F",
                    padding: "16px 32px",
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.8px",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    transition: "opacity .18s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight size={14} />
                </Link>

                <a
                  href="https://calendly.com/ts-justaccount"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    border: "1px solid rgba(252,176,25,0.30)",
                    color: "#EFE7D6",
                    padding: "16px 28px",
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "border-color .18s, color .18s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#FCB019";
                    e.currentTarget.style.color = "#FCB019";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(252,176,25,0.30)";
                    e.currentTarget.style.color = "#EFE7D6";
                  }}
                >
                  <CalendarDays size={14} color="#FCB019" />
                  <span>Choose Time on Calendly</span>
                </a>
              </div>
            </div>

            {/* Steps & Checklist Panel */}
            <div
              style={{
                background: "rgba(15,12,8,0.70)",
                border: "1px solid rgba(252,176,25,0.12)",
                padding: "36px 32px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "9px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#FCB019",
                  marginBottom: "20px",
                }}
              >
                HOW IT WORKS · 4-STEP ONBOARDING
              </div>

              {[
                {
                  n: "01",
                  title: "Introductory Discovery Call",
                  desc: "20 minutes to review your software, volume, and pain points.",
                },
                {
                  n: "02",
                  title: "Written Fixed-Fee Proposal",
                  desc: "Clear scope and guaranteed pricing — no hidden costs or surprise rates.",
                },
                {
                  n: "03",
                  title: "Secure Access & NDA",
                  desc: "Mutual confidentiality agreement signed, read-only permissions granted.",
                },
                {
                  n: "04",
                  title: "Clean Ledgers & Peace of Mind",
                  desc: "Backlogs cleared, monthly reports delivered, deadlines 100% met.",
                },
              ].map((step, i) => (
                <div
                  key={step.n}
                  style={{
                    display: "flex",
                    gap: "16px",
                    marginBottom: i < 3 ? "18px" : 0,
                    paddingBottom: i < 3 ? "18px" : 0,
                    borderBottom: i < 3 ? "1px solid rgba(252,176,25,0.08)" : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      fontSize: "9.5px",
                      color: "#FCB019",
                      fontWeight: 700,
                      letterSpacing: "1px",
                      width: "22px",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    {step.n}
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Fraunces',serif",
                        fontSize: "15px",
                        color: "#EFE7D6",
                        marginBottom: "4px",
                      }}
                    >
                      {step.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "12px",
                        lineHeight: 1.55,
                        color: "rgba(239,231,214,0.45)",
                      }}
                    >
                      {step.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter hideCta />
    </div>
  );
}
