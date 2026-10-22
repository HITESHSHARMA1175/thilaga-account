import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import img6  from "@/assets/6.png";
import img2  from "@/assets/2.jpeg";
import img11 from "@/assets/11.jpeg";
import img5  from "@/assets/5.jpeg";
import img10 from "@/assets/10.jpeg";
import {
  ShieldCheck, FileText, Calculator, TrendingUp,
  Globe, Clock, Award, Users, Star, Phone,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Just Accounting | One Dedicated Bookkeeper for Your Business" },
      { name: "description", content: "Reliable bookkeeping support for UK businesses and accountancy firms. ACCA Qualified, 10+ years experience, UK Based. No call centres Ã¢â‚¬â€ one dedicated contact." },
    ],
  }),
  component: HomePage,
});

const C   = "clamp(24px,4vw,48px)";
const MAX = "1400px";

const services = [
  { icon: FileText,   title: "Bank Reconciliations", desc: "Clean, accurate month-end reconciliations every time." },
  { icon: Calculator, title: "VAT Returns",           desc: "MTD-compliant VAT preparation and submission support." },
  { icon: TrendingUp, title: "Management Accounts",  desc: "Monthly reports so you always know where you stand." },
  { icon: ShieldCheck,title: "Year-End Prep",         desc: "Trial balance ready, packaged for your accountant." },
];

const whyItems = [
  { n: "01", title: "Your firm needs more bookkeeping capacity without adding to the payroll.", link: "See how we support firms Ã¢â€ â€™", to: "/for-firms" },
  { n: "02", title: "You're a business owner and your books are behind Ã¢â‚¬â€ or never properly set up.", link: "See services for businesses Ã¢â€ â€™", to: "/for-business" },
  { n: "03", title: "Your accountant keeps chasing you for reconciled records. You need one person to sort it.", link: "Book a free consultation Ã¢â€ â€™", to: "/contact" },
  { n: "04", title: "You want MTD-compliant bookkeeping on your existing software, handled by someone qualified.", link: "About our qualifications Ã¢â€ â€™", to: "/about" },
];

const testimonials = [
  { stars: 5, quote: "Reliable bookkeeping support and excellent communication. We always know exactly what's been done and when.", name: "Sarah M.", role: "Business Owner, London" },
  { stars: 5, quote: "A real person who actually answers. No ticket systems, no delays. Our backlog was cleared in weeks.", name: "James R.", role: "Practice Manager, Manchester" },
  { stars: 5, quote: "Finally, transparent pricing and work we can trust. Just Accounting is an invaluable part of our team.", name: "Priya K.", role: "Accountancy Firm Partner, Birmingham" },
];

function Stars({ n }: { n: number }) {
  return <div style={{ display: "flex", gap: 2 }}>{Array.from({ length: n }).map((_, i) => <Star key={i} size={13} fill="#FCB019" color="#FCB019" />)}</div>;
}

const TICKER_ITEMS = [
  "MTD Ã¢â‚¬â€ Making Tax Digital is mandatory for all VAT-registered businesses. We keep you compliant.",
  "Bank reconciliation backlogs cleared in days, not months.",
  "ACCA-qualified bookkeeping support for accountancy firms across the UK.",
  "One dedicated contact. No ticket systems. No call centres. Always Thilaga.",
  "Year-end preparation Ã¢â‚¬â€ clean trial balance, ready for your accountant.",
  "VAT returns filed accurately and on time. MTD compliant across all clients.",
];

function HomePage() {
  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden", width: "100%" }}>
      <SiteHeader />

      {/* Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
          ABOVE-FOLD WRAPPER  nav=52px + this = 100vh
      Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â */}
      <div className="home-hero-wrapper" style={{ height: "calc(100vh - 52px)", display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* Ã‚Â§1 Ã¢â€â‚¬Ã¢â€â‚¬ HERO Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */}
        <section className="home-hero-section" style={{ position: "relative", backgroundColor: "#17140F", overflow: "hidden", flex: 1, display: "flex", flexDirection: "column" }}>

          {/* City bg */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${img6})`, backgroundSize: "cover", backgroundPosition: "center 55%", opacity: 0.28 }} />




          {/* Left text */}
          <div style={{ position: "relative", zIndex: 2, maxWidth: MAX, margin: "0 auto", padding: `0 ${C}`, width: "100%", flex: 1, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "540px", width: "100%", padding: "clamp(12px,2vh,24px) 0" }} className="hero-text">

              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(239,231,214,0.45)", marginBottom: "14px" }}>
                BOOKKEEPING Ã‚Â· VAT Ã‚Â· MTD Ã‚Â· FOR UK BUSINESSES AND ACCOUNTANCY FIRMS
              </p>

              <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(28px,3.8vw,50px)", fontWeight: 400, lineHeight: 1.06, letterSpacing: "-1px", color: "#EFE7D6", marginBottom: "12px" }}>
                One dedicated bookkeeper{" "}
                <em style={{ color: "#FCB019", fontStyle: "italic" }}>for your business.</em>
              </h1>

              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.55, color: "rgba(239,231,214,0.60)", marginBottom: "18px" }}>
                Reliable bookkeeping for UK businesses and accountancy firms. No call centres Ã¢â‚¬â€ one dedicated contact.
              </p>

              {/* Gold callout box */}
              <a href="/for-firms" style={{ display: "inline-flex", flexDirection: "column", gap: "3px", padding: "9px 14px", border: "2px solid #FCB019", background: "rgba(252,176,25,0.06)", textDecoration: "none", marginBottom: "16px", transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(252,176,25,0.11)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(252,176,25,0.06)")}
              >
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "#FCB019" }}>WHITE-LABEL Ã‚Â· NDA-BACKED</span>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "11px", color: "rgba(239,231,214,0.65)" }}>YOUR LETTERHEAD. YOUR CLIENT NEVER MEETS US. &rarr;</span>
              </a>

              {/* CTAs */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <Link to="/contact" id="hero-cta-main" style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "42px", padding: "0 20px", background: "#FCB019", color: "#1B140B", fontFamily: "'Inter',sans-serif", fontSize: "13px", fontWeight: 500, textDecoration: "none", whiteSpace: "nowrap", transition: "opacity 0.18s" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  Book free consultation &rarr;
                </Link>
                <a href="tel:+447352463262" id="hero-cta-call" style={{ display: "inline-flex", alignItems: "center", gap: "7px", height: "42px", padding: "0 20px", background: "transparent", color: "#EFE7D6", fontFamily: "'Inter',sans-serif", fontSize: "13px", border: "1px solid rgba(239,231,214,0.28)", textDecoration: "none", whiteSpace: "nowrap", transition: "border-color 0.18s, color 0.18s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#FCB019"; e.currentTarget.style.color = "#FCB019"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(239,231,214,0.28)"; e.currentTarget.style.color = "#EFE7D6"; }}
                >
                  <Phone size={13} /> 07352 463262
                </a>
              </div>
            </div>
          </div>

          {/* Doc card Ã¢â‚¬â€ absolutely positioned, clipped by overflow:hidden on section */}
          <div className="hero-doc-hide" style={{ position: "absolute", right: "clamp(24px,5vw,72px)", top: "50%", transform: "translateY(-50%)", width: "clamp(220px,28vw,370px)", zIndex: 3, boxShadow: "0 20px 52px rgba(0,0,0,0.48)", background: "#FAFAF6", border: "1px solid rgba(23,20,15,0.12)", padding: "16px 22px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "9px", borderBottom: "1px solid rgba(23,20,15,0.08)", marginBottom: "2px" }}>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "8px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(23,20,15,0.35)" }}>ENGAGEMENT FILE</span>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "8px", letterSpacing: "1px", textTransform: "uppercase", color: "#8A5600" }}>CONFIDENTIAL</span>
            </div>
            {[
              { label: "SERVICE",     value: "Monthly Bookkeeping" },
              { label: "CLIENT TYPE", value: "Business / CA Firm" },
              { label: "SOFTWARE",    value: "Xero Ã‚Â· QuickBooks Ã‚Â· Sage" },
              { label: "NDA",         value: "Signed before first page" },
              { label: "MTD",         value: "100% compliant" },
              { label: "TURNAROUND",  value: "Month-end ready" },
              { label: "CONTACT",     value: "Always Thilaga" },
            ].map(row => (
              <div key={row.label} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "8px 0", borderBottom: "1px solid rgba(23,20,15,0.07)" }}>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "8px", letterSpacing: "1.4px", textTransform: "uppercase", color: "rgba(23,20,15,0.33)", lineHeight: 1.5 }}>{row.label}</span>
                <span style={{ fontFamily: "'Fraunces',serif", fontSize: "13px", color: "#17140F", textAlign: "right", lineHeight: 1.35 }}>{row.value}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px" }}>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "7px", letterSpacing: "0.8px", textTransform: "uppercase", color: "rgba(23,20,15,0.25)" }}>JUST ACCOUNTING Ã‚Â· TS PROFESSIONAL ACCOUNTANCY LTD</span>
              <div style={{ width: "34px", height: "34px", borderRadius: "50%", border: "1px solid #FCB019", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", flexShrink: 0, fontFamily: "'Inter',sans-serif", fontSize: "7px", lineHeight: 1.3, textTransform: "uppercase", color: "#8A5600" }}>ACCA<br />QUAL.</div>
            </div>
          </div>
        </section>

        {/* Ã‚Â§STATS ROW Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */}
        <div style={{ flexShrink: 0, backgroundColor: "#17140F", borderTop: "1px solid rgba(252,176,25,0.15)" }}>
          <div style={{ maxWidth: MAX, margin: "0 auto", padding: `0 ${C}`, display: "grid", gridTemplateColumns: "repeat(4,1fr)" }} className="stats-grid">
            {[
              { val: "10+",  sub: "Years UK Experience" },
              { val: "ACCA", sub: "Qualified Bookkeeper" },
              { val: "MTD",  sub: "Making Tax Digital" },
              { val: "1",    sub: "Contact. Always Thilaga." },
            ].map((s, i) => (
              <div key={i} style={{ padding: "16px 24px", borderRight: i < 3 ? "1px solid rgba(252,176,25,0.12)" : "none" }}>
                <div style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(22px,2.8vw,38px)", fontWeight: 400, letterSpacing: "-1px", lineHeight: 1, color: "#EFE7D6", marginBottom: "3px" }}>{s.val}</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "8px", letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(239,231,214,0.38)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Ã‚Â§TICKER Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */}
        <div style={{ flexShrink: 0, backgroundColor: "#1E1A14", borderTop: "1px solid rgba(252,176,25,0.10)", overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ flexShrink: 0, padding: "9px 16px", borderRight: "1px solid rgba(252,176,25,0.20)", fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "#FCB019", whiteSpace: "nowrap", backgroundColor: "#1E1A14" }}>
              JUST ACCOUNTING Ã‚Â·
            </div>
            <div style={{ overflow: "hidden", flex: 1 }}>
              <div style={{ display: "flex", animation: "ticker-scroll 30s linear infinite", whiteSpace: "nowrap" }}>
                {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                  <span key={i} style={{ fontFamily: "'Inter',sans-serif", fontSize: "11px", color: "rgba(239,231,214,0.52)", padding: "9px 36px 9px 0" }}>
                    {item}<span style={{ color: "#FCB019", margin: "0 16px 0 36px" }}>&middot;</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
          <style>{`@keyframes ticker-scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
        </div>

      </div>{/* Ã¢â€â‚¬Ã¢â€â‚¬ end above-fold wrapper Ã¢â€â‚¬Ã¢â€â‚¬ */}


      {/* Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
          Ã‚Â§3  MEET THILAGA Ã¢â‚¬â€ full-bleed two-column
      Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â */}
      <section style={{ backgroundColor: "#F4EFE6" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", maxWidth: "100%" }} className="thilaga-grid">

          {/* LEFT Ã¢â‚¬â€ dark panel */}
          <div style={{ backgroundColor: "#17140F", position: "relative", overflow: "hidden", padding: `clamp(56px,8vh,96px) clamp(40px,5vw,80px)`, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {/* Faint bg image */}
            <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${img11})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.18 }} />
            <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ width: "40px", height: "2px", background: "#FCB019", marginBottom: "24px" }} />
            <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(26px,3vw,36px)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.36px", color: "#EFE7D6", marginBottom: "16px" }}>Meet Thilaga</h2>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.63, color: "rgba(239,231,214,0.62)", maxWidth: "380px", marginBottom: "32px" }}>
              ACCA qualified with over a decade of bookkeeping and accounts experience inside UK practices Ã¢â‚¬â€ now working directly with firms and business owners who want a single, trusted point of contact.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", backgroundColor: "rgba(252,176,25,0.12)", marginBottom: "32px" }}>
              {[{ val: "10+", label: "Years Experience" }, { val: "ACCA", label: "Qualified" }, { val: "100%", label: "UK Based" }, { val: "MTD", label: "Compliant" }].map(s => (
                <div key={s.label} style={{ background: "rgba(23,20,15,0.7)", padding: "18px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Fraunces',serif", fontSize: "20px", color: "#FCB019", marginBottom: "4px" }}>{s.val}</div>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "1.8px", textTransform: "uppercase", color: "rgba(239,231,214,0.38)" }}>{s.label}</div>
                </div>
              ))}
            </div>

            <Link to="/about" id="founder-learn-more" style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "42px", padding: "0 20px", background: "transparent", color: "#EFE7D6", fontFamily: "'Inter',sans-serif", fontSize: "13px", border: "1px solid rgba(239,231,214,0.22)", textDecoration: "none", transition: "border-color 0.18s", alignSelf: "flex-start" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#FCB019")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(239,231,214,0.22)")}
            >Learn more &rarr;</Link>
            </div>
          </div>

          {/* RIGHT Ã¢â‚¬â€ beige story panel */}
          <div style={{ backgroundColor: "#F4EFE6", position: "relative", overflow: "hidden", padding: `clamp(56px,8vh,96px) clamp(40px,5vw,80px)`, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${img10})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.20 }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "10px", letterSpacing: "2.2px", textTransform: "uppercase", color: "#8A5600", marginBottom: "18px" }}>OUR STORY</p>
              <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(20px,2.4vw,28px)", lineHeight: 1.2, letterSpacing: "-0.3px", color: "#17140F", marginBottom: "24px" }}>
                Built on the belief that good bookkeeping shouldn't feel mysterious.
              </h3>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.63, color: "rgba(23,20,15,0.60)", marginBottom: "12px" }}>
                Just Accounting is the trading name of <strong style={{ color: "#17140F", fontWeight: 500 }}>TS Professional Accountancy Ltd</strong> Ã¢â‚¬â€ a small UK-based bookkeeping practice that works with accountancy firms and direct business clients.
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.63, color: "rgba(23,20,15,0.60)", marginBottom: "32px" }}>
                Built on years of hands-on experience inside UK accounting firms, we understand exactly what accountants need Ã¢â‚¬â€ clean, reconciled records, on time, every time.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <Link to="/contact" id="founder-book-cta" style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "44px", padding: "0 22px", background: "#FCB019", color: "#1B140B", fontFamily: "'Inter',sans-serif", fontSize: "13px", fontWeight: 500, textDecoration: "none", transition: "opacity 0.18s" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >Book a free consultation &rarr;</Link>
                <a href="mailto:ts.justaccount@mail.co.uk" style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "44px", padding: "0 22px", background: "transparent", color: "#17140F", fontFamily: "'Inter',sans-serif", fontSize: "13px", border: "1px solid rgba(23,20,15,0.22)", textDecoration: "none", transition: "border-color 0.18s" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "#FCB019")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(23,20,15,0.22)")}
                >Send an email</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
          Ã‚Â§4  NUMBERED LIST Ã¢â‚¬â€ "Which situation..."
      Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â */}
      <section style={{ backgroundColor: "#EDE8DF", borderTop: "1px solid rgba(23,20,15,0.08)" }}>
        <div style={{ maxWidth: MAX, margin: "0 auto", padding: `clamp(56px,8vh,88px) ${C}` }}>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(24px,2.8vw,34px)", lineHeight: 1.08, letterSpacing: "-0.36px", color: "#17140F", marginBottom: "6px" }}>
            Which situation describes you right now?
          </h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.63, color: "rgba(23,20,15,0.50)", marginBottom: "40px", maxWidth: "480px" }}>
            We handle the full range of bookkeeping requirements for UK businesses and accountancy firms.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 40px" }} className="why-grid">
            {whyItems.map(item => (
              <div key={item.n} style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "0 14px", padding: "24px 0", borderTop: "1px solid rgba(23,20,15,0.10)" }}>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "12px", color: "rgba(23,20,15,0.28)", paddingTop: "3px" }}>{item.n}</span>
                <div>
                  <p style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(16px,1.7vw,20px)", lineHeight: 1.33, color: "#17140F", marginBottom: "8px" }}>{item.title}</p>
                  <Link to={item.to} style={{ fontFamily: "'Inter',sans-serif", fontSize: "12px", color: "#8A5600", textDecoration: "none" }}
                    onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
                    onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}
                  >{item.link}</Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ paddingTop: "20px", borderTop: "1px solid rgba(23,20,15,0.10)" }}>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", color: "rgba(23,20,15,0.48)" }}>
              Based in the UK?{" "}
              <Link to="/contact" style={{ color: "#8A5600", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}
              >Book a free intro call. &rarr;</Link>
            </span>
          </div>
        </div>
      </section>


      {/* Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
          Ã‚Â§5  SERVICES Ã¢â‚¬â€ dark with city bg
      Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â */}
      {/* SERVICES + CTA â€” single dark section, shared city bg */}
      <section style={{ position: "relative", backgroundColor: "#17140F", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${img5})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.22 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(23,20,15,0.75) 0%, rgba(23,20,15,0.30) 40%, rgba(23,20,15,0.75) 100%)" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "0 auto", padding: `clamp(56px,8vh,88px) ${C}` }}>

          {/* â”€â”€ SERVICES â”€â”€ */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2.2px", textTransform: "uppercase", color: "#FCB019", marginBottom: "12px" }}>WHAT WE DO</p>
              <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(26px,3vw,40px)", lineHeight: 1.06, letterSpacing: "-0.5px", color: "#EFE7D6", margin: 0 }}>
                Bookkeeping done properly.
              </h2>
            </div>
            <Link to="/for-business" id="services-see-all" style={{ fontFamily: "'Inter',sans-serif", fontSize: "12px", color: "rgba(239,231,214,0.50)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap", transition: "color 0.18s", flexShrink: 0 }}
              onMouseEnter={e => (e.currentTarget.style.color = "#FCB019")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(239,231,214,0.50)")}
            >See all services &rarr;</Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px", marginBottom: "0" }} className="services-grid">
            {services.map((s, i) => (
              <div key={s.title} style={{
                background: "rgba(23,20,15,0.70)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(252,176,25,0.12)",
                borderTop: "2px solid #FCB019",
                padding: "28px 22px 30px",
                transition: "background 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(23,20,15,0.90)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(23,20,15,0.70)")}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                  <span style={{ fontFamily: "'Fraunces',serif", fontSize: "11px", color: "rgba(252,176,25,0.40)", letterSpacing: "1px" }}>0{i + 1}</span>
                  <s.icon size={18} color="#FCB019" strokeWidth={1.5} />
                </div>
                <h4 style={{ fontFamily: "'Fraunces',serif", fontSize: "17px", lineHeight: 1.3, color: "#EFE7D6", marginBottom: "10px" }}>{s.title}</h4>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "12px", lineHeight: 1.6, color: "rgba(239,231,214,0.45)", margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* â”€â”€ DIVIDER â”€â”€ */}
          <div style={{ margin: "56px 0", height: "1px", background: "linear-gradient(to right, transparent, rgba(252,176,25,0.25), transparent)" }} />

          {/* â”€â”€ CTA â”€â”€ */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,96px)", alignItems: "center" }} className="cta-grid">
            <div>
              <div style={{ width: "36px", height: "2px", background: "#FCB019", marginBottom: "24px" }} />
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#FCB019", marginBottom: "18px" }}>FREE INTRO CALL</p>
              <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(26px,3.2vw,44px)", lineHeight: 1.06, letterSpacing: "-0.5px", color: "#EFE7D6", marginBottom: "18px" }}>
                Ready to get your books in order?
              </h2>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.7, color: "rgba(239,231,214,0.50)", margin: 0 }}>
                No obligation. Fixed scope agreed before we start. One dedicated bookkeeper â€” from the first call through to month-end, every time.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ border: "1px solid rgba(252,176,25,0.20)", padding: "20px 24px", marginBottom: "8px" }}>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "10px", letterSpacing: "1.6px", textTransform: "uppercase", color: "rgba(239,231,214,0.35)", marginBottom: "12px" }}>HOW IT WORKS</p>
                {["Book a free 20-min intro call", "Scope agreed in writing, no surprises", "Start within 48 hours"].map((step, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 0", borderBottom: i < 2 ? "1px solid rgba(252,176,25,0.08)" : "none" }}>
                    <span style={{ width: "20px", height: "20px", borderRadius: "50%", border: "1px solid #FCB019", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Inter',sans-serif", fontSize: "8px", color: "#FCB019", flexShrink: 0 }}>{i + 1}</span>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "13px", color: "rgba(239,231,214,0.65)" }}>{step}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link to="/contact" id="cta-book-final" style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "46px", padding: "0 28px", background: "#FCB019", color: "#1B140B", fontFamily: "'Inter',sans-serif", fontSize: "13px", fontWeight: 500, textDecoration: "none", whiteSpace: "nowrap", transition: "opacity 0.18s", flex: 1, justifyContent: "center" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >Book free consultation &rarr;</Link>
                <a href="tel:+447352463262" id="cta-call-final" style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "46px", padding: "0 20px", background: "transparent", color: "#EFE7D6", fontFamily: "'Inter',sans-serif", fontSize: "13px", border: "1px solid rgba(239,231,214,0.22)", textDecoration: "none", whiteSpace: "nowrap", transition: "border-color 0.18s" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "#FCB019")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(239,231,214,0.22)")}
                ><Phone size={13} /> Call us</a>
              </div>
            </div>
          </div>

        </div>
      </section>





      {/* Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
          Ã‚Â§7  TESTIMONIALS
      {/* Â§7 + Â§8  TESTIMONIALS + TRUST STRIP â€” compact white */}
      <section style={{ backgroundColor: "#F4EFE6", borderTop: "1px solid rgba(23,20,15,0.08)" }}>
        <div style={{ maxWidth: MAX, margin: "0 auto", padding: `clamp(40px,5vh,60px) ${C}` }}>

          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px", flexWrap: "wrap", gap: "12px" }}>
            <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(22px,2.4vw,30px)", lineHeight: 1.1, letterSpacing: "-0.3px", color: "#17140F", margin: 0 }}>
              Trusted by businesses across the UK.
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              {[1,2,3,4,5].map(i => <Star key={i} size={13} fill="#FCB019" color="#FCB019" />)}
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "11px", color: "rgba(23,20,15,0.38)", marginLeft: "8px" }}>5.0 Â· All reviews</span>
            </div>
          </div>

          {/* 3 equal cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px", marginBottom: "36px" }} className="testimonials-grid">
            {testimonials.map(t => (
              <div key={t.name} style={{ border: "1px solid rgba(23,20,15,0.08)", borderTop: "2px solid #FCB019", padding: "22px 22px 20px", background: "#EDE8DF" }}>
                <Stars n={t.stars} />
                <blockquote style={{ fontFamily: "'Fraunces',serif", fontSize: "14px", lineHeight: 1.55, color: "#17140F", fontStyle: "italic", margin: "12px 0 16px" }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div style={{ paddingTop: "12px", borderTop: "1px solid rgba(23,20,15,0.07)", display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "28px", height: "28px", background: "#FCB019", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Fraunces',serif", fontSize: "11px", color: "#1B140B", fontWeight: 600, flexShrink: 0 }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "12px", fontWeight: 500, color: "#17140F" }}>{t.name}</div>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "10px", color: "rgba(23,20,15,0.38)", marginTop: "1px" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust strip â€” inline, compact */}
          <div style={{ borderTop: "1px solid rgba(23,20,15,0.08)", paddingTop: "24px", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }} className="trust-grid">
            {[
              { icon: Award, val: "ACCA",  label: "Qualified" },
              { icon: Clock, val: "10+",   label: "Years Experience" },
              { icon: Globe, val: "100%",  label: "UK Based" },
              { icon: Users, val: "1",     label: "Dedicated Contact" },
            ].map((b, i) => (
              <div key={b.label} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "0 16px", borderRight: i < 3 ? "1px solid rgba(23,20,15,0.08)" : "none" }}>
                <b.icon size={16} color="#FCB019" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: "'Fraunces',serif", fontSize: "16px", color: "#17140F", lineHeight: 1.1 }}>{b.val}</div>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "10px", color: "rgba(23,20,15,0.42)", marginTop: "1px" }}>{b.label}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
