import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import {
  Heart, Target, MessageSquare, ArrowRight,
  CheckCircle2, Award, Globe, Clock,
  ShieldCheck, BookOpen, Users, Briefcase,
} from "lucide-react";

import imgHero from "@/assets/10.jpeg";
import imgStory from "@/assets/6.png";
import imgValues from "@/assets/13 (1).jpeg";
import imgCta   from "@/assets/13 (2).jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Just Accounting | TS Professional Accountancy Ltd" },
      { name: "description", content: "Just Accounting is the trading name of TS Professional Accountancy Ltd — a UK-based bookkeeping practice run by Thilaga, ACCA Qualified with 10+ years experience inside UK accounting firms." },
      { property: "og:title", content: "About Just Accounting — Thilaga, ACCA Qualified Bookkeeper" },
    ],
  }),
  component: AboutPage,
});

const C   = "clamp(24px,4vw,56px)";
const MAX = "1320px";

function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0F0C08" }}>
      <SiteHeader />

      {/* ══════════════════════════════════════════════
          HERO — editorial headline, black bg
      ══════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#0F0C08", minHeight: "calc(100vh - 52px)", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: `clamp(28px,3.5vh,44px) ${C}`, overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${imgHero})`, backgroundSize: "cover", backgroundPosition: "center 30%", opacity: 0.09 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,12,8,0.94) 0%, rgba(15,12,8,0.78) 55%, rgba(15,12,8,0.97) 100%)" }} />

        {/* Top strip */}
        <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: MAX, margin: "0 auto", width: "100%" }}>
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(239,231,214,0.28)" }}>Just Accounting — About Us</span>
          <div style={{ display: "flex", gap: "16px" }}>
            {["ACCA Qualified", "10+ Years", "UK Based"].map(t => (
              <span key={t} style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(239,231,214,0.20)" }}>{t}</span>
            ))}
          </div>
        </div>

        {/* MASSIVE EDITORIAL HEADLINE */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "0 auto", width: "100%", padding: "clamp(16px,3vh,40px) 0" }}>
          <h1 style={{ margin: 0, lineHeight: 0.88 }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0 0.12em", marginBottom: "0.03em" }}>
              <span style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(52px,10vw,140px)", fontWeight: 300, fontStyle: "italic", color: "rgba(239,231,214,0.82)", letterSpacing: "-3px", lineHeight: 0.88 }}>Built on</span>
              <span style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(52px,10vw,140px)", fontWeight: 800, color: "#EFE7D6", letterSpacing: "-4px", lineHeight: 0.88 }}>accuracy,</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0 0.12em", marginBottom: "0.03em" }}>
              <span style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(52px,10vw,140px)", fontWeight: 800, color: "#EFE7D6", letterSpacing: "-4px", lineHeight: 0.88 }}>honesty</span>
              <span style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(52px,10vw,140px)", fontWeight: 300, fontStyle: "italic", color: "rgba(239,231,214,0.50)", letterSpacing: "-3px", lineHeight: 0.88 }}>and a</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0 0.12em" }}>
              <span style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(52px,10vw,140px)", fontWeight: 300, fontStyle: "italic", color: "rgba(239,231,214,0.36)", letterSpacing: "-3px", lineHeight: 0.88 }}>personal</span>
              <span style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(52px,10vw,140px)", fontWeight: 800, color: "#FCB019", letterSpacing: "-4px", lineHeight: 0.88 }}>approach.</span>
            </div>
          </h1>
        </div>

        {/* Bottom — credentials + tagline */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "0 auto", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "32px" }}>
          {/* Credential pills */}
          <div style={{ display: "flex", gap: "1px", backgroundColor: "rgba(252,176,25,0.10)" }}>
            {[
              { val: "ACCA", sub: "Qualified" },
              { val: "10+", sub: "Years UK experience" },
              { val: "100%", sub: "UK based" },
              { val: "MTD", sub: "Compliant" },
            ].map((c, i) => (
              <div key={c.val} style={{ background: "rgba(15,12,8,0.80)", padding: "14px 20px", textAlign: "center", minWidth: "90px" }}>
                <div style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(16px,2vw,22px)", color: "#FCB019", lineHeight: 1 }}>{c.val}</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "8px", letterSpacing: "1.3px", textTransform: "uppercase", color: "rgba(239,231,214,0.28)", marginTop: "4px" }}>{c.sub}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "13px", lineHeight: 1.75, color: "rgba(239,231,214,0.38)", maxWidth: "320px", marginBottom: "18px" }}>
              Just Accounting is the trading name of TS Professional Accountancy Ltd — run by Thilaga, ACCA qualified, 10+ years inside UK accounting firms.
            </p>
            <a href="/contact" style={{ fontFamily: "'Inter',sans-serif", fontSize: "13px", color: "#EFE7D6", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", borderBottom: "1px solid rgba(239,231,214,0.22)", paddingBottom: "2px", transition: "border-color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#FCB019")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(239,231,214,0.22)")}
            >Get in touch <ArrowRight size={13} /></a>
          </div>
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "18px auto 0", width: "100%", height: "1px", background: "rgba(239,231,214,0.08)" }} />
      </section>

      {/* ══════════════════════════════════════════════
          WHO WE ARE — cream bg, Thilaga's story
      ══════════════════════════════════════════════ */}
      <section style={{ position: "relative", backgroundColor: "#F4EFE6", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${imgStory})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.04 }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "0 auto", padding: `clamp(64px,9vh,96px) ${C}` }}>

          {/* Two-column story */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,96px)", alignItems: "start", marginBottom: "72px" }} className="story-grid">
            <div>
              <div style={{ width: "36px", height: "2px", background: "#FCB019", marginBottom: "20px" }} />
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#8A5600", marginBottom: "16px" }}>OUR STORY</p>
              <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(26px,3vw,40px)", lineHeight: 1.08, letterSpacing: "-0.5px", color: "#17140F", marginBottom: "28px" }}>
                Who we are
              </h2>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.85, color: "rgba(23,20,15,0.65)", marginBottom: "18px" }}>
                Just Accounting is the trading name of <strong style={{ color: "#17140F", fontWeight: 600 }}>TS Professional Accountancy Ltd</strong> — a small, specialist bookkeeping practice based in the United Kingdom. The business was founded by Thilaga, an ACCA-qualified bookkeeper with over ten years of experience working inside UK accounting firms.
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.85, color: "rgba(23,20,15,0.65)", marginBottom: "18px" }}>
                After a decade gaining experience across a wide range of clients and industries — from sole traders and limited companies to multi-site businesses and professional service firms — Thilaga established Just Accounting to offer that same standard of work directly to businesses and to accountancy firms that need reliable bookkeeping support.
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.85, color: "rgba(23,20,15,0.65)" }}>
                We are deliberately small. That is not a limitation — it is a choice. Being small means every client gets the same person, every time. It means nothing falls through the cracks. It means the quality of our work does not depend on which team member picks up the file.
              </p>
            </div>
            <div>
              <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(26px,3vw,40px)", lineHeight: 1.08, letterSpacing: "-0.5px", color: "#17140F", marginBottom: "28px", marginTop: "calc(20px + 9px + 14px + 16px)" }}>
                How we work
              </h2>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.85, color: "rgba(23,20,15,0.65)", marginBottom: "18px" }}>
                Everything we do is based in the United Kingdom. There is no offshore team, no automated processing layer, and no outsourced junior doing the actual work. When you send us a file, Thilaga processes it. When you send us a message, Thilaga replies.
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.85, color: "rgba(23,20,15,0.65)", marginBottom: "18px" }}>
                We work across all major cloud accounting platforms — Xero, Sage, QuickBooks, and FreeAgent — within your existing system, maintaining your file structure and your conventions. We do not ask you to migrate, change, or adapt to our way of working. We adapt to yours.
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.85, color: "rgba(23,20,15,0.65)", marginBottom: "28px" }}>
                Pricing is agreed in writing before any work begins. We offer flexible arrangements for smaller and lower-turnover businesses, because we understand that a one-size-fits-all fee structure does not reflect the reality of running a small business.
              </p>
              {/* Credentials inline */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", backgroundColor: "rgba(23,20,15,0.10)" }}>
                {[
                  { icon: Award, label: "ACCA Qualified", detail: "Professional accounting qualification recognised globally" },
                  { icon: Clock, label: "10+ Years Experience", detail: "Inside UK accounting and bookkeeping practices" },
                  { icon: Globe, label: "100% UK Based", detail: "Fully remote, covering all of the United Kingdom" },
                  { icon: CheckCircle2, label: "MTD Compliant", detail: "Making Tax Digital ready across all return types" },
                ].map(c => (
                  <div key={c.label} style={{ background: "#F4EFE6", padding: "18px 18px" }}>
                    <c.icon size={14} color="#8A5600" strokeWidth={1.5} style={{ marginBottom: "8px" }} />
                    <div style={{ fontFamily: "'Fraunces',serif", fontSize: "14px", color: "#17140F", marginBottom: "4px" }}>{c.label}</div>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "11px", lineHeight: 1.5, color: "rgba(23,20,15,0.48)" }}>{c.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Thilaga's background — full-width editorial block */}
          <div style={{ border: "1px solid rgba(23,20,15,0.10)", borderTop: "2px solid #FCB019", padding: "40px 40px 36px", marginBottom: "72px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "clamp(32px,4vw,64px)", alignItems: "start" }} className="thilaga-grid">
              <div>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2.2px", textTransform: "uppercase", color: "#8A5600", marginBottom: "12px" }}>MEET THILAGA</p>
                <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(22px,2.5vw,30px)", lineHeight: 1.1, color: "#17140F", marginBottom: "12px" }}>
                  ACCA Qualified<br />Bookkeeper & Founder
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "20px" }}>
                  {[
                    "ACCA Qualified (Chartered Certified Accountant)",
                    "10+ years inside UK accountancy practices",
                    "Xero, Sage, QuickBooks & FreeAgent certified",
                    "MTD compliant across all return types",
                    "Specialist in white-label firm support",
                    "Direct contact — always available by phone, email, or WhatsApp",
                  ].map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                      <CheckCircle2 size={12} color="#8A5600" style={{ marginTop: "2px", flexShrink: 0 }} />
                      <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "12px", lineHeight: 1.5, color: "rgba(23,20,15,0.60)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.85, color: "rgba(23,20,15,0.65)", marginBottom: "18px" }}>
                  Thilaga began her bookkeeping career working within established UK accounting firms, processing accounts for clients across a wide range of industries — retail, construction, professional services, hospitality, healthcare, and property. Over more than a decade, she developed a precise and methodical approach to bookkeeping that prioritises accuracy first, and speed second.
                </p>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.85, color: "rgba(23,20,15,0.65)", marginBottom: "18px" }}>
                  Having seen how much value reliable, ACCA-qualified bookkeeping support can add to a firm's workflow — and how difficult it can be for firms and small businesses to find it at a reasonable cost and with a human point of contact — Thilaga founded Just Accounting to fill that gap.
                </p>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.85, color: "rgba(23,20,15,0.65)", marginBottom: "18px" }}>
                  Her approach is straightforward: do the work properly, communicate clearly, and never leave a client wondering what is happening with their books. She signs NDAs as standard before accessing any client information. She works within your system, to your standards, and under your letterhead if required — remaining entirely invisible to your clients.
                </p>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.85, color: "rgba(23,20,15,0.65)" }}>
                  Outside of bookkeeping, Thilaga is committed to continuing professional development through ACCA and stays up to date with all HMRC changes, Making Tax Digital requirements, and UK accounting standards.
                </p>
              </div>
            </div>
          </div>

          {/* Values — 3-col cards */}
          <div>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#8A5600", marginBottom: "10px" }}>WHAT WE STAND FOR</p>
            <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(22px,2.5vw,32px)", lineHeight: 1.1, color: "#17140F", marginBottom: "40px" }}>Our values</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", backgroundColor: "rgba(23,20,15,0.10)" }} className="values-grid">
              {[
                {
                  icon: Heart, num: "01",
                  title: "People first",
                  body: "Clients are not ticket numbers or account codes. They are business owners with real pressures, real deadlines, and real money at stake. We treat every engagement with the seriousness it deserves, and we never make a client feel like a low priority — regardless of the size of their account with us.",
                  tags: "One-to-one · Same contact · Responsive · Human",
                },
                {
                  icon: MessageSquare, num: "02",
                  title: "Honest communication",
                  body: "We do not use jargon to make our work seem more complicated than it is. We tell you exactly what we are doing, why, and what it costs — before we do it. If we spot a problem, we tell you immediately and explain it clearly. If we cannot help with something, we say so and point you in the right direction.",
                  tags: "Plain English · No surprises · Clear pricing · Transparent",
                },
                {
                  icon: Target, num: "03",
                  title: "Accurate work, on time",
                  body: "We do not send work until it is right. Every reconciliation is checked. Every VAT return is reviewed against the ledger. Every year-end file is verified before submission. We take pride in the quality of what we produce, and we believe that accurate, on-time bookkeeping is the foundation of a well-run business.",
                  tags: "Reconciled · MTD-ready · On schedule · No errors",
                },
              ].map(v => (
                <div key={v.title} style={{ background: "#F4EFE6", padding: "36px 32px 32px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "10px", letterSpacing: "2px", color: "rgba(138,86,0,0.45)" }}>{v.num}</span>
                    <v.icon size={18} color="#8A5600" strokeWidth={1.5} />
                  </div>
                  <h4 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(17px,1.8vw,21px)", lineHeight: 1.22, color: "#17140F", marginBottom: "14px" }}>{v.title}</h4>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "13.5px", lineHeight: 1.75, color: "rgba(23,20,15,0.62)", marginBottom: "20px" }}>{v.body}</p>
                  <div style={{ paddingTop: "16px", borderTop: "1px solid rgba(23,20,15,0.10)" }}>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9.5px", letterSpacing: "1.2px", textTransform: "uppercase", color: "rgba(138,86,0,0.55)", margin: 0 }}>{v.tags}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          WHO WE WORK WITH — dark bg
      ══════════════════════════════════════════════ */}
      <section style={{ position: "relative", backgroundColor: "#17140F", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${imgValues})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.14 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(23,20,15,0.88) 0%, rgba(23,20,15,0.70) 50%, rgba(23,20,15,0.92) 100%)" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "0 auto", padding: `clamp(64px,9vh,96px) ${C}` }}>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,96px)", alignItems: "start", marginBottom: "64px" }} className="clients-header-grid">
            <div>
              <div style={{ width: "36px", height: "2px", background: "#FCB019", marginBottom: "20px" }} />
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#FCB019", marginBottom: "16px" }}>WHO WE WORK WITH</p>
              <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(26px,3vw,40px)", lineHeight: 1.08, letterSpacing: "-0.5px", color: "#EFE7D6", margin: 0 }}>
                Two types of client, one standard of work
              </h2>
            </div>
            <div style={{ paddingTop: "46px" }}>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.80, color: "rgba(239,231,214,0.52)", margin: 0 }}>
                We work with two distinct groups — accountancy firms that need reliable bookkeeping overflow support, and direct business clients who want their own dedicated bookkeeper. Both groups receive the same quality of work, the same level of communication, and the same fixed-fee pricing model.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", backgroundColor: "rgba(252,176,25,0.08)" }}>
            {[
              {
                icon: Briefcase, num: "01",
                title: "Accountancy firms",
                body: "We partner with UK accountancy firms as a silent, white-label bookkeeping resource. Firms send us overflow work, backlog clearance projects, or ongoing client bookkeeping — and we return the work ready for their review, under their letterhead, with the client entirely unaware of our involvement. We sign an NDA before accessing any client information, communicate directly with the firm's team, and price each engagement on a fixed-fee basis agreed in advance.",
                tags: "White-label · NDA signed · Firm-standard delivery · Direct contact",
              },
              {
                icon: Users, num: "02",
                title: "Business owners",
                body: "We work directly with small and medium-sized UK businesses that want their bookkeeping handled by a qualified professional they can actually talk to. Whether you are a sole trader, a limited company, or a growing business with a more complex structure — we adapt our service to your needs. We coordinate directly with your accountant, prepare your VAT returns, and make sure your records are always up to date and compliant.",
                tags: "Fixed fee · Direct contact · Accountant-ready · MTD compliant",
              },
            ].map(c => (
              <div key={c.title}
                style={{ background: "rgba(23,20,15,0.75)", padding: "40px 36px 36px", transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(23,20,15,0.92)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(23,20,15,0.75)")}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "10px", letterSpacing: "2px", color: "rgba(252,176,25,0.40)" }}>{c.num}</span>
                  <c.icon size={18} color="#FCB019" strokeWidth={1.5} />
                </div>
                <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(20px,2vw,24px)", lineHeight: 1.2, color: "#EFE7D6", marginBottom: "14px" }}>{c.title}</h3>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "13.5px", lineHeight: 1.80, color: "rgba(239,231,214,0.55)", marginBottom: "20px" }}>{c.body}</p>
                <div style={{ paddingTop: "16px", borderTop: "1px solid rgba(252,176,25,0.10)" }}>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9.5px", letterSpacing: "1.2px", textTransform: "uppercase", color: "rgba(252,176,25,0.45)", margin: 0 }}>{c.tags}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Commitment list */}
          <div style={{ marginTop: "56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,4vw,64px)" }} className="commitment-grid">
            <div>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2.2px", textTransform: "uppercase", color: "#FCB019", marginBottom: "16px" }}>OUR COMMITMENTS</p>
              <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(20px,2.2vw,28px)", lineHeight: 1.15, color: "#EFE7D6", marginBottom: "20px" }}>
                What you can always expect from us
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "Work delivered to the agreed deadline — without chasing",
                  "A single, consistent point of contact — always Thilaga",
                  "NDA signed before any client information is shared",
                  "Fixed fees agreed in writing before work begins",
                  "MTD-compliant VAT returns and bookkeeping as standard",
                  "Plain-English communication — no jargon, no ambiguity",
                  "Proactive flagging of anything unusual in your records",
                  "Direct coordination with your accountant if required",
                ].map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <CheckCircle2 size={13} color="#FCB019" style={{ marginTop: "2px", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "13px", lineHeight: 1.6, color: "rgba(239,231,214,0.55)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2.2px", textTransform: "uppercase", color: "#FCB019", marginBottom: "16px" }}>WHAT WE WILL NOT DO</p>
              <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(20px,2.2vw,28px)", lineHeight: 1.15, color: "#EFE7D6", marginBottom: "20px" }}>
                Our professional standards
              </h3>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "13.5px", lineHeight: 1.80, color: "rgba(239,231,214,0.50)", marginBottom: "20px" }}>
                We hold ourselves to a high professional standard. There are things we simply will not do — not because we cannot, but because they compromise the quality of service we provide.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "Send unreconciled or draft-quality files",
                  "Invoice for work not agreed in advance",
                  "Work with third parties we have not been introduced to by you",
                  "Share any client information — ever",
                  "Guess when we are unsure — we always ask",
                  "Overpromise on turnaround times",
                ].map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <ShieldCheck size={13} color="#FCB019" style={{ marginTop: "2px", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "13px", lineHeight: 1.6, color: "rgba(239,231,214,0.50)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA — dark bg
      ══════════════════════════════════════════════ */}
      <section style={{ position: "relative", backgroundColor: "#1A170E", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${imgCta})`, backgroundSize: "cover", backgroundPosition: "center 40%", opacity: 0.12 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(26,23,14,0.95) 0%, rgba(26,23,14,0.80) 50%, rgba(26,23,14,0.95) 100%)" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "0 auto", padding: `clamp(64px,9vh,96px) ${C}` }}>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "56px" }}>
            <div style={{ width: "36px", height: "2px", background: "#FCB019" }} />
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#FCB019", margin: 0 }}>GET IN TOUCH</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,96px)", alignItems: "start" }} className="cta-grid">

            <div>
              <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1.05, letterSpacing: "-0.6px", color: "#EFE7D6", marginBottom: "24px" }}>
                Let's have a<br />conversation.
              </h2>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.80, color: "rgba(239,231,214,0.52)", marginBottom: "18px" }}>
                Whether you are an accountancy firm looking for a bookkeeping partner you can trust, or a business owner who wants someone to take the books off your plate — we would love to hear from you.
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.80, color: "rgba(239,231,214,0.52)", marginBottom: "36px" }}>
                The first conversation is free. We will listen to what you need, be honest about whether we are the right fit, and if we are — give you a clear, written quote within 24 hours.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Link to="/contact" id="about-cta"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "50px", padding: "0 32px", background: "#FCB019", color: "#1B140B", fontFamily: "'Inter',sans-serif", fontSize: "13px", fontWeight: 700, textDecoration: "none", letterSpacing: "0.3px", transition: "opacity 0.18s" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >Get in touch →</Link>
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
                  >+44 7352 463262</a>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "rgba(252,176,25,0.08)" }}>
              <div style={{ background: "rgba(23,20,15,0.60)", padding: "28px 28px 24px" }}>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(252,176,25,0.55)", marginBottom: "22px" }}>WHAT HAPPENS NEXT</p>
                {[
                  { n: "01", title: "You get in touch", desc: "By phone, email, or the contact form. We respond within the same business day." },
                  { n: "02", title: "We have a call", desc: "A 20-minute no-obligation conversation about your needs. No sales pitch, just listening." },
                  { n: "03", title: "You receive a quote", desc: "A clear, written fixed-fee proposal within 24 hours of our call." },
                  { n: "04", title: "We get started", desc: "NDA signed, access agreed, and work underway — typically within 48 hours." },
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
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(252,176,25,0.55)", marginBottom: "16px" }}>REGISTERED DETAILS</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {[
                    ["Trading name", "Just Accounting"],
                    ["Company", "TS Professional Accountancy Ltd"],
                    ["Qualification", "ACCA Qualified"],
                    ["Location", "United Kingdom"],
                    ["Email", "ts.justaccount@mail.co.uk"],
                    ["Phone", "+44 7352 463262"],
                  ].map(([label, val]) => (
                    <div key={label} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "8px" }}>
                      <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "10px", letterSpacing: "0.5px", textTransform: "uppercase", color: "rgba(239,231,214,0.28)" }}>{label}</span>
                      <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "12px", color: "rgba(239,231,214,0.60)" }}>{val}</span>
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
