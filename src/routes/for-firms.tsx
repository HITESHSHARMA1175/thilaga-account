import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import {
  Handshake, ShieldCheck, MessageSquare, PoundSterling,
  FileText, Calculator, RefreshCw, Database,
  CheckCircle2, Phone, ArrowRight,
} from "lucide-react";

import imgWhy  from "@/assets/7.jpeg";
import imgSvc  from "@/assets/8.jpeg";
import imgCta  from "@/assets/9.jpeg";
import imgHero from "@/assets/3.jpeg";

export const Route = createFileRoute("/for-firms")({
  head: () => ({
    meta: [
      { title: "Bookkeeping Support for Accountancy Firms | Just Accounting UK" },
      { name: "description", content: "Reliable, UK-based bookkeeping support for accountancy firms. Scale without growing your headcount." },
    ],
  }),
  component: FirmsPage,
});

const C   = "clamp(24px,4vw,56px)";
const MAX = "1320px";
const software = ["Xero", "Sage", "QuickBooks", "FreeAgent"];

function FirmsPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0F0C08" }}>
      <SiteHeader />

      {/* ══════════════════════════════════════════════
          HERO — Silvia Sguotti editorial style
          Black bg · Massive mixed-weight headline
          Overlapping circle CTAs
      ══════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#0F0C08", minHeight: "calc(100vh - 52px)", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: `clamp(28px,3.5vh,44px) ${C}`, overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${imgHero})`, backgroundSize: "cover", backgroundPosition: "center 40%", opacity: 0.08 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,12,8,0.94) 0%, rgba(15,12,8,0.80) 55%, rgba(15,12,8,0.97) 100%)" }} />

        {/* Top strip */}
        <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: MAX, margin: "0 auto", width: "100%" }}>
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(239,231,214,0.28)" }}>Just Accounting — For Firms</span>
          <div style={{ display: "flex", gap: "16px" }}>
            {["NDA First", "White-label", "UK Based"].map(t => (
              <span key={t} style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(239,231,214,0.20)" }}>{t}</span>
            ))}
          </div>
        </div>

        {/* MASSIVE EDITORIAL HEADLINE */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "0 auto", width: "100%", padding: "clamp(16px,3vh,40px) 0" }}>
          <h1 style={{ margin: 0, lineHeight: 0.88 }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0 0.12em", marginBottom: "0.03em" }}>
              <span style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(52px,10vw,140px)", fontWeight: 300, fontStyle: "italic", color: "rgba(239,231,214,0.82)", letterSpacing: "-3px", lineHeight: 0.88 }}>Reliable</span>
              <span style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(52px,10vw,140px)", fontWeight: 800, color: "#EFE7D6", letterSpacing: "-4px", lineHeight: 0.88 }}>bookkeeping</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0 0.12em", marginBottom: "0.03em" }}>
              <span style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(52px,10vw,140px)", fontWeight: 800, color: "#EFE7D6", letterSpacing: "-4px", lineHeight: 0.88 }}>support,</span>
              <span style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(52px,10vw,140px)", fontWeight: 300, fontStyle: "italic", color: "rgba(239,231,214,0.52)", letterSpacing: "-3px", lineHeight: 0.88 }}>so your firm</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0 0.12em" }}>
              <span style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(52px,10vw,140px)", fontWeight: 300, fontStyle: "italic", color: "rgba(239,231,214,0.38)", letterSpacing: "-3px", lineHeight: 0.88 }}>can</span>
              <span style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(52px,10vw,140px)", fontWeight: 800, color: "#FCB019", letterSpacing: "-4px", lineHeight: 0.88 }}>scale.</span>
            </div>
          </h1>
        </div>

        {/* Bottom row */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "0 auto", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "32px" }}>
          {/* Overlapping circles */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/contact" id="firms-hero-cta"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "clamp(106px,11.5vw,148px)", height: "clamp(106px,11.5vw,148px)", borderRadius: "50%", background: "#FCB019", color: "#17140F", fontFamily: "'Inter',sans-serif", fontSize: "clamp(8px,0.85vw,10px)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", textAlign: "center", lineHeight: 1.4, zIndex: 2, position: "relative", transition: "transform 0.22s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.07)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
            >START<br />A CONV-<br />ERSATION</Link>
            <a href="mailto:ts.justaccount@mail.co.uk" id="firms-hero-email"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "clamp(106px,11.5vw,148px)", height: "clamp(106px,11.5vw,148px)", borderRadius: "50%", background: "rgba(239,231,214,0.06)", border: "1px solid rgba(239,231,214,0.18)", color: "rgba(239,231,214,0.62)", fontFamily: "'Inter',sans-serif", fontSize: "clamp(8px,0.85vw,10px)", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", textAlign: "center", lineHeight: 1.4, marginLeft: "-20px", transition: "border-color 0.2s, color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#FCB019"; e.currentTarget.style.color = "#FCB019"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(239,231,214,0.18)"; e.currentTarget.style.color = "rgba(239,231,214,0.62)"; }}
            >EMAIL<br />US</a>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "clamp(60px,6vw,78px)", height: "clamp(60px,6vw,78px)", borderRadius: "50%", background: "rgba(239,231,214,0.05)", border: "1px solid rgba(239,231,214,0.12)", marginLeft: "-14px", fontFamily: "'Inter',sans-serif", fontSize: "6.5px", letterSpacing: "1px", textTransform: "uppercase", color: "rgba(239,231,214,0.32)", textAlign: "center", lineHeight: 1.5 }}>
              ACCA<br />QUAL<br />UK
            </div>
          </div>
          {/* Right */}
          <div style={{ textAlign: "right" }}>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "13px", lineHeight: 1.75, color: "rgba(239,231,214,0.38)", maxWidth: "310px", marginBottom: "18px" }}>
              Dedicated UK bookkeeping support so your firm can take on more clients — without growing your headcount.
            </p>
            <a href="/contact" style={{ fontFamily: "'Inter',sans-serif", fontSize: "13px", color: "#EFE7D6", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", borderBottom: "1px solid rgba(239,231,214,0.22)", paddingBottom: "2px", transition: "border-color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#FCB019")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(239,231,214,0.22)")}
            >Book a free discovery call <ArrowRight size={13} /></a>
          </div>
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "18px auto 0", width: "100%", height: "1px", background: "rgba(239,231,214,0.08)" }} />
      </section>

      {/* ══════════════════════════════════════════════
          WHY CHOOSE US — cream bg, full documentation
      ══════════════════════════════════════════════ */}
      <section style={{ position: "relative", backgroundColor: "#F4EFE6", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${imgWhy})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.05 }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "0 auto", padding: `clamp(64px,9vh,96px) ${C}` }}>

          {/* Two-column header */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,5vw,80px)", alignItems: "start", marginBottom: "64px" }} className="why-header-grid">
            <div>
              <div style={{ width: "36px", height: "2px", background: "#FCB019", marginBottom: "20px" }} />
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#8A5600", marginBottom: "16px" }}>YOUR TRUSTED UK PARTNER</p>
              <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(26px,3vw,40px)", lineHeight: 1.08, letterSpacing: "-0.5px", color: "#17140F", margin: 0 }}>
                Why accountancy firms choose Just Accounting
              </h2>
            </div>
            <div>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.80, color: "rgba(23,20,15,0.60)", margin: "0 0 16px" }}>
                We are not an outsourcing company. We are a UK-based, ACCA-qualified bookkeeping practice that works as a silent, trusted extension of your team — giving your firm the capacity to grow without the risk of adding permanent headcount.
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.80, color: "rgba(23,20,15,0.60)", margin: 0 }}>
                Every firm we partner with gets a single dedicated contact — Thilaga — who understands your clients, your systems, and your standards. There is no handover, no team rotation, and no communication through a portal or ticketing system.
              </p>
            </div>
          </div>

          {/* Feature cards 2×2 */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1px", backgroundColor: "rgba(23,20,15,0.10)", marginBottom: "64px" }}>
            {[
              {
                icon: Handshake, num: "01",
                title: "A genuine extension of your team",
                body: "We integrate into your existing workflow. Whether you use Xero, Sage, QuickBooks, or FreeAgent — we work within your chosen software, to your firm's standards, and under your letterhead if required. Your client never knows we exist unless you choose to tell them. We sign an NDA before accessing a single document.",
                tags: "NDA signed · White-label ready · Your software · Your workflow",
              },
              {
                icon: ShieldCheck, num: "02",
                title: "Consistent, accurate, MTD-compliant work",
                body: "Every set of books we return to you is reconciled, reviewed, and MTD-ready. We do not send rough drafts or work-in-progress files. If something is unclear, we ask — we do not guess. Our accuracy rate is the reason firms continue to refer clients to us year after year.",
                tags: "Reconciled ledgers · VAT ready · MTD-compliant · No errors",
              },
              {
                icon: MessageSquare, num: "03",
                title: "Direct communication — always",
                body: "You will always speak or message directly with Thilaga. No helpdesk, no ticketing portal, no automated responses, no account manager passing messages. A WhatsApp message gets answered. An email gets a reply the same day. We believe the best professional relationships are built on direct, honest communication.",
                tags: "WhatsApp · Email · Phone · Same-day response · No middlemen",
              },
              {
                icon: PoundSterling, num: "04",
                title: "Transparent, agreed pricing — no surprises",
                body: "Before any work begins, we agree a fixed price for the engagement. You receive a written quote that outlines exactly what is included, the expected turnaround, and the payment terms. There are no hourly rates that spiral, no out-of-scope invoices, and no awkward conversations at month-end. What we quote is what you pay.",
                tags: "Fixed fee · Written quote · Agreed scope · No scope creep",
              },
            ].map(r => (
              <div key={r.title} style={{ background: "#F4EFE6", padding: "36px 36px 32px" }}>
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

          {/* HOW IT WORKS — 4 step process */}
          <div style={{ marginBottom: "64px" }}>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#8A5600", marginBottom: "10px" }}>THE PROCESS</p>
            <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(22px,2.5vw,32px)", lineHeight: 1.1, color: "#17140F", marginBottom: "40px" }}>How we work with your firm</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }} className="process-grid">
              {[
                { step: "01", title: "Discovery call", desc: "A 20-minute call to understand your firm's requirements, client base, software stack, and the type of support you need. No obligation, no sales pitch." },
                { step: "02", title: "NDA & agreement", desc: "We sign a mutual NDA before anything is shared. Once agreed, we issue a written scope and fixed fee proposal for your review." },
                { step: "03", title: "Onboarding", desc: "We are given access to your chosen software. We review any existing records, ask any clarifying questions, and begin work — typically within 48 hours of agreement." },
                { step: "04", title: "Ongoing delivery", desc: "Work is delivered to an agreed schedule. You review and approve. We communicate directly, flag anything unusual, and operate as part of your team." },
              ].map((p, i) => (
                <div key={p.step} style={{ paddingRight: "28px", paddingLeft: i > 0 ? "28px" : "0", borderLeft: i > 0 ? "1px solid rgba(23,20,15,0.10)" : "none" }}>
                  <div style={{ width: "28px", height: "28px", border: "1px solid #FCB019", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Inter',sans-serif", fontSize: "9px", color: "#8A5600", marginBottom: "18px" }}>{p.step}</div>
                  <h4 style={{ fontFamily: "'Fraunces',serif", fontSize: "16px", color: "#17140F", marginBottom: "10px", lineHeight: 1.2 }}>{p.title}</h4>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "12.5px", lineHeight: 1.70, color: "rgba(23,20,15,0.55)", margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison table */}
          <div style={{ border: "1px solid rgba(23,20,15,0.10)", borderTop: "2px solid #FCB019" }}>
            <div style={{ padding: "18px 28px", borderBottom: "1px solid rgba(23,20,15,0.08)", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "16px" }}>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "1.8px", textTransform: "uppercase", color: "rgba(23,20,15,0.35)" }}>HOW WE COMPARE</span>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "1.8px", textTransform: "uppercase", color: "#8A5600", textAlign: "center" }}>JUST ACCOUNTING</span>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "1.8px", textTransform: "uppercase", color: "rgba(23,20,15,0.30)", textAlign: "center" }}>TYPICAL OUTSOURCER</span>
            </div>
            {[
              ["Dedicated single contact", "✓ Always Thilaga", "✗ Rotating teams"],
              ["UK-based bookkeeper", "✓ 100% UK", "✗ Often offshore"],
              ["NDA before first document", "✓ Standard practice", "✗ Often not offered"],
              ["Fixed fee, agreed upfront", "✓ Always written", "✗ Often hourly / variable"],
              ["White-label ready", "✓ Included", "✗ Usually charged extra"],
              ["Direct communication", "✓ WhatsApp / email / phone", "✗ Ticketing systems"],
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
          SERVICES — dark bg, full documentation
      ══════════════════════════════════════════════ */}
      <section style={{ position: "relative", backgroundColor: "#17140F", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${imgSvc})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.16 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(23,20,15,0.88) 0%, rgba(23,20,15,0.70) 50%, rgba(23,20,15,0.92) 100%)" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "0 auto", padding: `clamp(64px,9vh,96px) ${C}` }}>

          {/* Two-column header */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,5vw,80px)", alignItems: "start", marginBottom: "56px" }} className="svc-header-grid">
            <div>
              <div style={{ width: "36px", height: "2px", background: "#FCB019", marginBottom: "20px" }} />
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#FCB019", marginBottom: "16px" }}>WHAT WE HANDLE</p>
              <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(26px,3vw,40px)", lineHeight: 1.08, letterSpacing: "-0.5px", color: "#EFE7D6", margin: 0 }}>
                Flexible bookkeeping support across your whole client base
              </h2>
            </div>
            <div style={{ paddingTop: "42px" }}>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.80, color: "rgba(239,231,214,0.52)", margin: "0 0 16px" }}>
                We can handle all bookkeeping tasks your firm needs to offload — from routine monthly processing to complex catch-up work. Every engagement is scoped, priced, and agreed in writing before we begin.
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.80, color: "rgba(239,231,214,0.52)", margin: 0 }}>
                You choose what to send us. We integrate quietly, deliver on time, and flag anything that needs your attention — without creating more work for your team.
              </p>
            </div>
          </div>

          {/* Service cards 2×2 */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1px", backgroundColor: "rgba(252,176,25,0.08)", marginBottom: "56px" }}>
            {[
              {
                icon: FileText, num: "01",
                title: "Routine Bookkeeping",
                body: "We manage the full cycle of day-to-day bookkeeping for your clients — bank feeds, supplier invoices, sales invoices, petty cash, and payroll journals. Work is processed to your firm's standards and returned reconciled, structured, and ready for your review or your client's approval.",
                tags: "Bank feeds · Invoices · Payroll journals · Monthly processing",
              },
              {
                icon: RefreshCw, num: "02",
                title: "Bank & Balance Sheet Reconciliations",
                body: "Every month-end reconciliation is completed thoroughly — bank accounts, credit cards, director's loans, intercompany balances, and control accounts. We do not deliver unreconciled ledgers. If there are discrepancies, we investigate and explain them before submitting the file back to you.",
                tags: "Bank · Credit cards · Director loans · Control accounts · Month-end",
              },
              {
                icon: Calculator, num: "03",
                title: "VAT Preparation (MTD)",
                body: "We prepare VAT returns ready for your review and submission. All work is MTD-compliant. We check the return against the underlying ledger, flag anything unusual, and provide a summary note with each return so you can review it quickly and with confidence. We work to your preferred submission deadlines.",
                tags: "MTD-compliant · Review-ready · HMRC deadlines · VAT reconciled",
              },
              {
                icon: Database, num: "04",
                title: "Clean-up & Catch-up Work",
                body: "We regularly take on backlog clearance projects — sometimes months or years of unprocessed records — and bring them up to date quickly and accurately. These projects are always scoped and priced upfront. We communicate progress throughout and alert you to anything that may affect prior filings or current-year accounts.",
                tags: "Backlog clearance · Historical reconciliation · Fixed fee · Progress updates",
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

          {/* Software — two column */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,5vw,64px)", alignItems: "start" }} className="software-grid">
            <div>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2.2px", textTransform: "uppercase", color: "#FCB019", marginBottom: "14px" }}>SOFTWARE COMPATIBILITY</p>
              <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(20px,2.2vw,28px)", lineHeight: 1.15, color: "#EFE7D6", marginBottom: "14px" }}>
                We work in your system — not ours
              </h3>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "13.5px", lineHeight: 1.75, color: "rgba(239,231,214,0.50)", margin: 0 }}>
                We do not ask you to migrate clients to a new platform. We are trained and experienced across all major UK cloud accounting platforms and will work within whichever system the client already uses — maintaining your own firm's file structure and coding conventions.
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
          CTA — dark bg, full documentation
      ══════════════════════════════════════════════ */}
      <section style={{ position: "relative", backgroundColor: "#1A170E", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${imgCta})`, backgroundSize: "cover", backgroundPosition: "center 30%", opacity: 0.12 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(26,23,14,0.95) 0%, rgba(26,23,14,0.80) 50%, rgba(26,23,14,0.95) 100%)" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "0 auto", padding: `clamp(64px,9vh,96px) ${C}` }}>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "56px" }}>
            <div style={{ width: "36px", height: "2px", background: "#FCB019" }} />
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#FCB019", margin: 0 }}>GET STARTED TODAY</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,96px)", alignItems: "start" }} className="cta-grid">

            {/* Left */}
            <div>
              <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1.05, letterSpacing: "-0.6px", color: "#EFE7D6", marginBottom: "24px" }}>
                Let's talk about<br />your firm's needs.
              </h2>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.80, color: "rgba(239,231,214,0.52)", marginBottom: "18px" }}>
                Whether you need a reliable partner for ongoing overflow work, support during a busy period, or someone to clear a backlog of unprocessed records — we would like to understand your situation and see how we can help.
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.80, color: "rgba(239,231,214,0.52)", marginBottom: "36px" }}>
                Our process is straightforward: a short discovery call, a written proposal, a signed NDA, and we begin. No long procurement cycles. No committees. Just professional bookkeeping support when you need it.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Link to="/contact" id="firms-bottom-cta"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "50px", padding: "0 32px", background: "#FCB019", color: "#1B140B", fontFamily: "'Inter',sans-serif", fontSize: "13px", fontWeight: 700, textDecoration: "none", letterSpacing: "0.3px", transition: "opacity 0.18s" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >Book a free 20-min discovery call →</Link>
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

            {/* Right */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "rgba(252,176,25,0.08)" }}>
              <div style={{ background: "rgba(23,20,15,0.60)", padding: "28px 28px 24px" }}>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(252,176,25,0.55)", marginBottom: "22px" }}>HOW ONBOARDING WORKS</p>
                {[
                  { n: "01", title: "Discovery call", desc: "20 minutes. We learn about your firm, your clients, and what you need. No obligation." },
                  { n: "02", title: "Written proposal", desc: "Fixed fee, agreed scope, clear deliverables. Sent within 24 hours of the call." },
                  { n: "03", title: "NDA signed", desc: "A mutual non-disclosure agreement signed before you share any client information." },
                  { n: "04", title: "Work begins", desc: "Access granted, questions asked, first files delivered — typically within 48 hours." },
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
                  {["NDA protection", "Fixed fee pricing", "White-label delivery", "Single point of contact", "Direct communication", "ACCA-qualified work"].map(item => (
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
