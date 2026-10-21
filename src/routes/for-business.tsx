import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import {
  HandCoins, User, FileCheck,
  CreditCard, FileText, Calculator,
  TrendingUp, BarChart3, BookOpen,
  CheckCircle2, Phone, ArrowRight,
} from "lucide-react";

import imgHero from "@/assets/1.jpeg";
import imgWhy  from "@/assets/2.jpeg";
import imgSvc  from "@/assets/4.jpeg";
import imgCta  from "@/assets/5.jpeg";

export const Route = createFileRoute("/for-business")({
  head: () => ({
    meta: [
      { title: "Bookkeeping for Small Businesses | Just Accounting UK" },
      { name: "description", content: "Stress-free, MTD-compliant bookkeeping for UK small businesses. Clear pricing, a real person to talk to, and we'll work with your accountant — or introduce you to a trusted one, free of charge." },
      { property: "og:title", content: "Stress-free Bookkeeping for UK Small Businesses" },
    ],
  }),
  component: BusinessPage,
});

const C   = "clamp(24px,4vw,56px)";
const MAX = "1320px";
const software = ["Xero", "Sage", "QuickBooks", "FreeAgent"];

function BusinessPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0F0C08" }}>
      <SiteHeader />

      {/* ══════════════════════════════════════════════
          HERO — editorial mixed-weight, black bg
      ══════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#0F0C08", minHeight: "calc(100vh - 52px)", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: `clamp(28px,3.5vh,44px) ${C}`, overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${imgHero})`, backgroundSize: "cover", backgroundPosition: "center 35%", opacity: 0.09 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,12,8,0.94) 0%, rgba(15,12,8,0.78) 55%, rgba(15,12,8,0.97) 100%)" }} />

        {/* Top strip */}
        <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: MAX, margin: "0 auto", width: "100%" }}>
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(239,231,214,0.28)" }}>Just Accounting — For Business Owners</span>
          <div style={{ display: "flex", gap: "16px" }}>
            {["MTD Compliant", "Fixed Fee", "UK Based"].map(t => (
              <span key={t} style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(239,231,214,0.20)" }}>{t}</span>
            ))}
          </div>
        </div>

        {/* MASSIVE EDITORIAL HEADLINE */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "0 auto", width: "100%", padding: "clamp(16px,3vh,40px) 0" }}>
          <h1 style={{ margin: 0, lineHeight: 0.88 }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0 0.12em", marginBottom: "0.03em" }}>
              <span style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(52px,10vw,140px)", fontWeight: 300, fontStyle: "italic", color: "rgba(239,231,214,0.82)", letterSpacing: "-3px", lineHeight: 0.88 }}>Stress-free</span>
              <span style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(52px,10vw,140px)", fontWeight: 800, color: "#EFE7D6", letterSpacing: "-4px", lineHeight: 0.88 }}>bookkeeping</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0 0.12em", marginBottom: "0.03em" }}>
              <span style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(52px,10vw,140px)", fontWeight: 800, color: "#EFE7D6", letterSpacing: "-4px", lineHeight: 0.88 }}>for your</span>
              <span style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(52px,10vw,140px)", fontWeight: 300, fontStyle: "italic", color: "rgba(239,231,214,0.52)", letterSpacing: "-3px", lineHeight: 0.88 }}>small</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0 0.12em" }}>
              <span style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(52px,10vw,140px)", fontWeight: 300, fontStyle: "italic", color: "rgba(239,231,214,0.38)", letterSpacing: "-3px", lineHeight: 0.88 }}>business to</span>
              <span style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(52px,10vw,140px)", fontWeight: 800, color: "#FCB019", letterSpacing: "-4px", lineHeight: 0.88 }}>thrive.</span>
            </div>
          </h1>
        </div>

        {/* Bottom row — circles + tagline */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "0 auto", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "32px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/contact" id="business-hero-cta"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "clamp(106px,11.5vw,148px)", height: "clamp(106px,11.5vw,148px)", borderRadius: "50%", background: "#FCB019", color: "#17140F", fontFamily: "'Inter',sans-serif", fontSize: "clamp(8px,0.85vw,10px)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", textAlign: "center", lineHeight: 1.4, zIndex: 2, position: "relative", transition: "transform 0.22s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.07)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
            >FREE<br />CONSULT-<br />ATION</Link>
            <a href="mailto:ts.justaccount@mail.co.uk" id="business-hero-email"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "clamp(106px,11.5vw,148px)", height: "clamp(106px,11.5vw,148px)", borderRadius: "50%", background: "rgba(239,231,214,0.06)", border: "1px solid rgba(239,231,214,0.18)", color: "rgba(239,231,214,0.62)", fontFamily: "'Inter',sans-serif", fontSize: "clamp(8px,0.85vw,10px)", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", textAlign: "center", lineHeight: 1.4, marginLeft: "-20px", transition: "border-color 0.2s, color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#FCB019"; e.currentTarget.style.color = "#FCB019"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(239,231,214,0.18)"; e.currentTarget.style.color = "rgba(239,231,214,0.62)"; }}
            >EMAIL<br />US</a>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "clamp(60px,6vw,78px)", height: "clamp(60px,6vw,78px)", borderRadius: "50%", background: "rgba(239,231,214,0.05)", border: "1px solid rgba(239,231,214,0.12)", marginLeft: "-14px", fontFamily: "'Inter',sans-serif", fontSize: "6.5px", letterSpacing: "1px", textTransform: "uppercase", color: "rgba(239,231,214,0.32)", textAlign: "center", lineHeight: 1.5 }}>
              ACCA<br />QUAL<br />UK
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "13px", lineHeight: 1.75, color: "rgba(239,231,214,0.38)", maxWidth: "310px", marginBottom: "18px" }}>
              Reliable, MTD-compliant bookkeeping for UK small businesses — accurate records, clear pricing, and a real person to talk to.
            </p>
            <a href="/contact" style={{ fontFamily: "'Inter',sans-serif", fontSize: "13px", color: "#EFE7D6", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", borderBottom: "1px solid rgba(239,231,214,0.22)", paddingBottom: "2px", transition: "border-color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#FCB019")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(239,231,214,0.22)")}
            >Book a free consultation <ArrowRight size={13} /></a>
          </div>
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "18px auto 0", width: "100%", height: "1px", background: "rgba(239,231,214,0.08)" }} />
      </section>

      {/* ══════════════════════════════════════════════
          WHY CHOOSE US — cream bg
      ══════════════════════════════════════════════ */}
      <section style={{ position: "relative", backgroundColor: "#F4EFE6", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${imgWhy})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.05 }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "0 auto", padding: `clamp(64px,9vh,96px) ${C}` }}>

          {/* Two-column header */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,5vw,80px)", alignItems: "start", marginBottom: "64px" }} className="why-header-grid">
            <div>
              <div style={{ width: "36px", height: "2px", background: "#FCB019", marginBottom: "20px" }} />
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#8A5600", marginBottom: "16px" }}>OUR PROMISES TO YOU</p>
              <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(26px,3vw,40px)", lineHeight: 1.08, letterSpacing: "-0.5px", color: "#17140F", margin: 0 }}>
                Simple, transparent bookkeeping — built around your business
              </h2>
            </div>
            <div>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.80, color: "rgba(23,20,15,0.60)", margin: "0 0 16px" }}>
                Running a small business is busy enough. Your bookkeeping should not add to the workload. We keep your records accurate, your VAT returns filed on time, and your books ready for your accountant — so you can focus on running your business.
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.80, color: "rgba(23,20,15,0.60)", margin: 0 }}>
                You deal with the same person every time — Thilaga. Not a different team member each month, not a bot or a portal. A real, ACCA-qualified bookkeeper who knows your business and is easy to reach.
              </p>
            </div>
          </div>

          {/* Feature cards 3 across */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", backgroundColor: "rgba(23,20,15,0.10)", marginBottom: "64px" }} className="promises-grid">
            {[
              {
                icon: HandCoins, num: "01",
                title: "Clear pricing, agreed upfront",
                body: "We discuss your requirements and agree a fixed monthly fee before any work begins. You receive a written quote that covers exactly what is included. There are no hidden charges, no hourly surprises, and no invoices you were not expecting. We offer flexible pricing for lower-turnover businesses — because we understand that cost matters when you are starting out or running lean.",
                tags: "Fixed fee · Written quote · No hidden charges · Flexible for small businesses",
              },
              {
                icon: User, num: "02",
                title: "One real person — always Thilaga",
                body: "From your first call through to year-end, you will always deal with Thilaga directly. There is no account manager, no outsourced team, and no one else who will pick up your call and not know who you are. We think that consistency matters in a bookkeeping relationship — because it means fewer mistakes, faster responses, and someone who actually understands your business.",
                tags: "Same contact always · Direct line · ACCA qualified · No middlemen",
              },
              {
                icon: FileCheck, num: "03",
                title: "Works alongside your accountant",
                body: "We work in close coordination with your existing accountant — preparing your records to exactly the standard they need, making year-end as smooth and low-cost as possible. If you do not have an accountant, we can introduce you to a trusted local practice — completely free of charge and with no obligation. We want your whole financial picture to be in good hands.",
                tags: "Accountant-ready files · Year-end support · Introductions available",
              },
            ].map(r => (
              <div key={r.title} style={{ background: "#F4EFE6", padding: "36px 32px 32px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "10px", letterSpacing: "2px", color: "rgba(138,86,0,0.45)" }}>{r.num}</span>
                  <r.icon size={18} color="#8A5600" strokeWidth={1.5} />
                </div>
                <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(17px,1.8vw,21px)", lineHeight: 1.22, color: "#17140F", marginBottom: "14px" }}>{r.title}</h3>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "13.5px", lineHeight: 1.75, color: "rgba(23,20,15,0.62)", marginBottom: "20px" }}>{r.body}</p>
                <div style={{ paddingTop: "16px", borderTop: "1px solid rgba(23,20,15,0.10)" }}>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9.5px", letterSpacing: "1.2px", textTransform: "uppercase", color: "rgba(138,86,0,0.55)", margin: 0 }}>{r.tags}</p>
                </div>
              </div>
            ))}
          </div>

          {/* HOW IT WORKS */}
          <div style={{ marginBottom: "64px" }}>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#8A5600", marginBottom: "10px" }}>THE PROCESS</p>
            <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(22px,2.5vw,32px)", lineHeight: 1.1, color: "#17140F", marginBottom: "40px" }}>Getting started is straightforward</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }} className="process-grid">
              {[
                { step: "01", title: "Free consultation", desc: "A 20-minute call to understand your business, your existing records, and what you need. No obligation, no pressure, no sales pitch." },
                { step: "02", title: "Quote & agreement", desc: "You receive a written, fixed-fee quote within 24 hours. Once agreed, we set out the scope clearly so there are no surprises." },
                { step: "03", title: "We get access", desc: "We connect to your accounting software (or help you set it up if you don't have one). We review your existing records and get everything organised." },
                { step: "04", title: "Ongoing bookkeeping", desc: "Your records are kept up to date on an agreed schedule. VAT returns are prepared, filed on time, and your accountant gets everything they need at year-end." },
              ].map((p, i) => (
                <div key={p.step} style={{ paddingRight: "28px", paddingLeft: i > 0 ? "28px" : "0", borderLeft: i > 0 ? "1px solid rgba(23,20,15,0.10)" : "none" }}>
                  <div style={{ width: "28px", height: "28px", border: "1px solid #FCB019", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Inter',sans-serif", fontSize: "9px", color: "#8A5600", marginBottom: "18px" }}>{p.step}</div>
                  <h4 style={{ fontFamily: "'Fraunces',serif", fontSize: "16px", color: "#17140F", marginBottom: "10px", lineHeight: 1.2 }}>{p.title}</h4>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "12.5px", lineHeight: 1.70, color: "rgba(23,20,15,0.55)", margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing comparison */}
          <div style={{ border: "1px solid rgba(23,20,15,0.10)", borderTop: "2px solid #FCB019" }}>
            <div style={{ padding: "18px 28px", borderBottom: "1px solid rgba(23,20,15,0.08)", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "16px" }}>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "1.8px", textTransform: "uppercase", color: "rgba(23,20,15,0.35)" }}>WHAT YOU GET WITH JUST ACCOUNTING</span>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "1.8px", textTransform: "uppercase", color: "#8A5600", textAlign: "center" }}>JUST ACCOUNTING</span>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "1.8px", textTransform: "uppercase", color: "rgba(23,20,15,0.30)", textAlign: "center" }}>TYPICAL PROVIDER</span>
            </div>
            {[
              ["Dedicated bookkeeper — always the same person", "✓ Always Thilaga", "✗ Rotating staff"],
              ["100% UK-based", "✓ Yes", "✗ Often offshore"],
              ["Fixed fee agreed before work starts", "✓ Always", "✗ Often hourly"],
              ["MTD-compliant VAT returns included", "✓ Standard", "✗ Sometimes extra"],
              ["Accountant coordination included", "✓ Yes", "✗ Usually your problem"],
              ["Works in your existing software", "✓ All major platforms", "✗ May require migration"],
              ["ACCA qualified", "✓ Yes", "✗ Not always"],
            ].map(([label, us, them], i) => (
              <div key={label} style={{ padding: "14px 28px", borderBottom: i < 6 ? "1px solid rgba(23,20,15,0.06)" : "none", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "16px", alignItems: "center" }}>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "13px", color: "rgba(23,20,15,0.65)" }}>{label}</span>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "12px", fontWeight: 500, color: "#17140F", textAlign: "center" }}>{us}</span>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "12px", color: "rgba(23,20,15,0.35)", textAlign: "center" }}>{them}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SERVICES — dark bg
      ══════════════════════════════════════════════ */}
      <section style={{ position: "relative", backgroundColor: "#17140F", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${imgSvc})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.16 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(23,20,15,0.88) 0%, rgba(23,20,15,0.70) 50%, rgba(23,20,15,0.92) 100%)" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "0 auto", padding: `clamp(64px,9vh,96px) ${C}` }}>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,5vw,80px)", alignItems: "start", marginBottom: "56px" }} className="svc-header-grid">
            <div>
              <div style={{ width: "36px", height: "2px", background: "#FCB019", marginBottom: "20px" }} />
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#FCB019", marginBottom: "16px" }}>WHAT WE DO</p>
              <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(26px,3vw,40px)", lineHeight: 1.08, letterSpacing: "-0.5px", color: "#EFE7D6", margin: 0 }}>
                Everything your business needs — covered
              </h2>
            </div>
            <div style={{ paddingTop: "42px" }}>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.80, color: "rgba(239,231,214,0.52)", margin: "0 0 16px" }}>
                We handle all the bookkeeping tasks that keep your business running — from the routine monthly entries to the records your accountant needs for year-end and tax filing. All work is MTD-compliant and returned ready for review.
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.80, color: "rgba(239,231,214,0.52)", margin: 0 }}>
                You tell us what you need. We work in your software, to your schedule, and communicate directly with you whenever something needs your attention.
              </p>
            </div>
          </div>

          {/* Service cards 2×4 */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1px", backgroundColor: "rgba(252,176,25,0.08)", marginBottom: "56px" }}>
            {[
              {
                icon: CreditCard, num: "01",
                title: "Payroll Data Processing",
                body: "We process payroll data and journals for your business, ensuring your books reflect the correct wages, employer contributions, and deductions each period. We coordinate with your payroll provider or process directly within your accounting software, leaving a clean and auditable payroll trail.",
                tags: "Wages · Journals · Employer NI · Monthly processing",
              },
              {
                icon: FileText, num: "02",
                title: "Sales & Purchase Ledger",
                body: "We keep your sales and purchase ledgers accurate and up to date — processing customer invoices, supplier bills, credit notes, and payments on time. Nothing sits unallocated, and your aged debtor and creditor reports reflect the true position of your business at all times.",
                tags: "Sales invoices · Supplier bills · Credit notes · Aged debtors",
              },
              {
                icon: CheckCircle2, num: "03",
                title: "Bank Reconciliations",
                body: "Every bank account, credit card, and payment account is reconciled monthly as standard. We match transactions, clear outstanding items, and investigate discrepancies before they become a problem. You receive clean, reconciled accounts every month-end — not a dump of unmatched transactions.",
                tags: "Bank · Credit cards · Payment accounts · Month-end clean",
              },
              {
                icon: Calculator, num: "04",
                title: "VAT Returns (MTD)",
                body: "We prepare your VAT returns in full compliance with Making Tax Digital requirements. Each return is reconciled against the underlying ledger, reviewed for accuracy, and submitted on time. We flag any unusual items and provide a brief summary so you know exactly what has been filed and why.",
                tags: "MTD-compliant · HMRC deadlines · Reviewed · Summary note",
              },
              {
                icon: TrendingUp, num: "05",
                title: "Management Accounts",
                body: "We prepare monthly or quarterly management accounts so you can see how your business is performing — profit and loss, balance sheet, and key metrics — in a format you can actually understand and use to make decisions. These can also be prepared to a standard your bank or investors may require.",
                tags: "P&L · Balance sheet · Monthly or quarterly · Decision-ready",
              },
              {
                icon: BarChart3, num: "06",
                title: "Trial Balance",
                body: "At year-end, we prepare a full and accurate trial balance ready for your accountant. All accounts are coded correctly, all adjustments are posted, and the file is presented in a format that minimises the time your accountant needs to spend — which directly reduces your accounting bill.",
                tags: "Year-end · Coded correctly · Accountant-ready · Reduces fees",
              },
              {
                icon: BookOpen, num: "07",
                title: "Year-End File",
                body: "We compile a complete year-end file — trial balance, bank reconciliations, VAT summaries, fixed asset registers, and supporting schedules — packaged clearly for your accountant. We liaise directly with your accountant to answer questions, saving you the back-and-forth.",
                tags: "Complete pack · Supporting schedules · Direct accountant liaison",
              },
              {
                icon: FileCheck, num: "08",
                title: "Corporation Tax Support",
                body: "We work alongside your accountant during corporation tax preparation — providing working papers, answering bookkeeping queries, and ensuring the figures they receive are accurate and fully supported. We do not file CT600s ourselves, but we make sure your accountant has everything they need to do so efficiently.",
                tags: "Working papers · Accountant support · CT600 prep assistance",
              },
            ].map(s => (
              <div key={s.title}
                style={{ background: "rgba(23,20,15,0.75)", padding: "36px 36px 32px", transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(23,20,15,0.92)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(23,20,15,0.75)")}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "10px", letterSpacing: "2px", color: "rgba(252,176,25,0.40)" }}>{s.num}</span>
                  <s.icon size={18} color="#FCB019" strokeWidth={1.5} />
                </div>
                <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(17px,1.8vw,21px)", lineHeight: 1.22, color: "#EFE7D6", marginBottom: "14px" }}>{s.title}</h3>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "13.5px", lineHeight: 1.75, color: "rgba(239,231,214,0.55)", marginBottom: "20px" }}>{s.body}</p>
                <div style={{ paddingTop: "16px", borderTop: "1px solid rgba(252,176,25,0.10)" }}>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9.5px", letterSpacing: "1.2px", textTransform: "uppercase", color: "rgba(252,176,25,0.45)", margin: 0 }}>{s.tags}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Software grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,5vw,64px)", alignItems: "start" }} className="software-grid">
            <div>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2.2px", textTransform: "uppercase", color: "#FCB019", marginBottom: "14px" }}>SOFTWARE COMPATIBILITY</p>
              <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(20px,2.2vw,28px)", lineHeight: 1.15, color: "#EFE7D6", marginBottom: "14px" }}>
                We work in your system
              </h3>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "13.5px", lineHeight: 1.75, color: "rgba(239,231,214,0.50)", margin: 0 }}>
                Already using Xero, Sage, QuickBooks, or FreeAgent? We connect to your existing account and work within your system — no migration, no disruption. If you do not yet have an accounting platform, we can help you choose the right one and get it set up correctly from day one.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", backgroundColor: "rgba(252,176,25,0.08)" }}>
              {software.map(sw => (
                <div key={sw} style={{ background: "rgba(23,20,15,0.70)", padding: "20px 22px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <CheckCircle2 size={13} color="#FCB019" />
                  <div>
                    <div style={{ fontFamily: "'Fraunces',serif", fontSize: "15px", color: "#EFE7D6", lineHeight: 1 }}>{sw}</div>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "9.5px", color: "rgba(239,231,214,0.35)", marginTop: "4px" }}>MTD-ready · Certified</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA — dark bg
      ══════════════════════════════════════════════ */}
      <section style={{ position: "relative", backgroundColor: "#1A170E", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${imgCta})`, backgroundSize: "cover", backgroundPosition: "center 30%", opacity: 0.12 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(26,23,14,0.95) 0%, rgba(26,23,14,0.80) 50%, rgba(26,23,14,0.95) 100%)" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "0 auto", padding: `clamp(64px,9vh,96px) ${C}` }}>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "56px" }}>
            <div style={{ width: "36px", height: "2px", background: "#FCB019" }} />
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#FCB019", margin: 0 }}>GET STARTED — FREE CONSULTATION</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,96px)", alignItems: "start" }} className="cta-grid">

            {/* Left */}
            <div>
              <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1.05, letterSpacing: "-0.6px", color: "#EFE7D6", marginBottom: "24px" }}>
                Ready to take the stress<br />out of your books?
              </h2>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.80, color: "rgba(239,231,214,0.52)", marginBottom: "18px" }}>
                Whether you are just starting out, have got behind with your records, or simply want someone reliable to take the bookkeeping off your plate — we would love to talk. The first consultation is free and comes with no obligation or pressure.
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.80, color: "rgba(239,231,214,0.52)", marginBottom: "36px" }}>
                We will listen to what you need, tell you honestly how we can help, and give you a written quote. If we are not the right fit, we will say so — and point you in the right direction.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Link to="/contact" id="business-bottom-cta"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "50px", padding: "0 32px", background: "#FCB019", color: "#1B140B", fontFamily: "'Inter',sans-serif", fontSize: "13px", fontWeight: 700, textDecoration: "none", letterSpacing: "0.3px", transition: "opacity 0.18s" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >Book a free consultation →</Link>
                <div style={{ display: "flex", gap: "10px" }}>
                  <a href="mailto:ts.justaccount@mail.co.uk"
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "46px", padding: "0 22px", background: "transparent", color: "rgba(239,231,214,0.70)", fontFamily: "'Inter',sans-serif", fontSize: "12px", border: "1px solid rgba(239,231,214,0.18)", textDecoration: "none", flex: 1, justifyContent: "center", transition: "border-color 0.18s" }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "#FCB019")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(239,231,214,0.18)")}
                  >ts.justaccount@mail.co.uk</a>
                  <a href="tel:+447352463262"
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "46px", padding: "0 22px", background: "transparent", color: "rgba(239,231,214,0.70)", fontFamily: "'Inter',sans-serif", fontSize: "12px", border: "1px solid rgba(239,231,214,0.18)", textDecoration: "none", transition: "border-color 0.18s" }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "#FCB019")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(239,231,214,0.18)")}
                  ><Phone size={12} /> +44 7352 463262</a>
                </div>
              </div>
            </div>

            {/* Right panel */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "rgba(252,176,25,0.08)" }}>
              <div style={{ background: "rgba(23,20,15,0.60)", padding: "28px 28px 24px" }}>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(252,176,25,0.55)", marginBottom: "22px" }}>HOW IT WORKS</p>
                {[
                  { n: "01", title: "Free consultation", desc: "20 minutes to understand your business and what you need. No obligation whatsoever." },
                  { n: "02", title: "Written quote", desc: "A fixed-fee proposal sent within 24 hours. Agreed before any work starts." },
                  { n: "03", title: "We connect", desc: "Access to your accounting software — or help setting it up if you don't have one." },
                  { n: "04", title: "Books handled", desc: "Ongoing bookkeeping to an agreed schedule. VAT filed. Records ready for your accountant." },
                ].map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: "14px", padding: "12px 0", borderBottom: i < 3 ? "1px solid rgba(252,176,25,0.07)" : "none", alignItems: "flex-start" }}>
                    <span style={{ width: "22px", height: "22px", border: "1px solid rgba(252,176,25,0.40)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Inter',sans-serif", fontSize: "8px", color: "#FCB019", flexShrink: 0, marginTop: "1px" }}>{step.n}</span>
                    <div>
                      <div style={{ fontFamily: "'Fraunces',serif", fontSize: "14px", color: "#EFE7D6", marginBottom: "3px" }}>{step.title}</div>
                      <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "12px", lineHeight: 1.60, color: "rgba(239,231,214,0.45)" }}>{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ background: "rgba(23,20,15,0.60)", padding: "24px 28px" }}>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(252,176,25,0.55)", marginBottom: "16px" }}>ALWAYS INCLUDED</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  {["Fixed fee pricing", "MTD-compliant VAT", "Same bookkeeper always", "Works with your accountant", "Direct communication", "ACCA-qualified work"].map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <CheckCircle2 size={11} color="#FCB019" />
                      <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "11.5px", color: "rgba(239,231,214,0.55)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <SiteFooter hideCta />
    </div>
  );
}
