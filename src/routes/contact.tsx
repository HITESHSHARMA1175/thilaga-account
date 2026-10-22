import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import {
  Mail, Phone, MapPin, Clock,
  CheckCircle2, ArrowRight, Shield, Linkedin, ExternalLink, CalendarDays,
} from "lucide-react";

import imgHero from "@/assets/13 (3).jpeg";
import imgForm from "@/assets/13 (4).jpeg";
import imgThilaga from "@/assets/13 (5).jpeg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Free Consultation — Just Accounting UK" },
      { name: "description", content: "Get in touch with Just Accounting for a free, no-obligation consultation. UK-based, ACCA-qualified bookkeeping support for businesses and accountancy firms." },
      { property: "og:title", content: "Contact Just Accounting — Free Consultation" },
    ],
  }),
  component: ContactPage,
});

const C   = "clamp(28px,4.5vw,64px)";
const MAX = "1280px";

/* ── Minimal dark input style injected once ── */
const FIELD_CSS = `
  .ja-field { display:flex; flex-direction:column; gap:7px; }
  .ja-label { font-family:'Inter',sans-serif; font-size:9.5px; font-weight:700; letter-spacing:1.8px; text-transform:uppercase; color:#3A332A; }
  .ja-input {
    width:100%; height:48px; padding:0 16px;
    background:#FFFFFF;
    border:1px solid rgba(23,20,15,0.14);
    color:#17140F; font-family:'Inter',sans-serif; font-size:13.5px; font-weight:500;
    outline:none; box-sizing:border-box; transition:border-color .2s, box-shadow .2s;
    border-radius:2px; appearance:none; -webkit-appearance:none;
  }
  .ja-input::placeholder { color:rgba(23,20,15,0.38); font-weight:400; }
  .ja-input:focus { border-color:#FCB019; background:#FFFFFF; box-shadow:0 0 0 3px rgba(252,176,25,0.22); }
  .ja-input option { background:#FFFFFF; color:#17140F; }
  .ja-textarea {
    width:100%; min-height:120px; padding:14px 16px; resize:vertical;
    background:#FFFFFF;
    border:1px solid rgba(23,20,15,0.14);
    color:#17140F; font-family:'Inter',sans-serif; font-size:13.5px; line-height:1.65; font-weight:500;
    outline:none; box-sizing:border-box; transition:border-color .2s, box-shadow .2s;
    border-radius:2px;
  }
  .ja-textarea::placeholder { color:rgba(23,20,15,0.38); font-weight:400; }
  .ja-textarea:focus { border-color:#FCB019; background:#FFFFFF; box-shadow:0 0 0 3px rgba(252,176,25,0.22); }
  @media (max-width: 1100px) {
    .contact-hero-lottie { display:none; }
  }
`;

function ContactPage() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0F0C08" }}>
      <style dangerouslySetInnerHTML={{ __html: FIELD_CSS }} />
      <SiteHeader />

      {/* ══════════════════════════════════════
          HERO — balanced screen ratio with aligned Lottie arrow
      ══════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden", backgroundColor: "#0F0C08", borderBottom: "1px solid rgba(252,176,25,0.10)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${imgHero})`, backgroundSize: "cover", backgroundPosition: "center 45%", opacity: 0.08 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(165deg, rgba(15,12,8,0.97) 0%, rgba(15,12,8,0.85) 60%, rgba(15,12,8,0.98) 100%)" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "0 auto", padding: `clamp(36px,5vh,52px) ${C} clamp(32px,4vh,44px)` }}>

          {/* Top Label */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "24px", height: "2px", background: "#FCB019" }} />
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#FCB019" }}>
              FREE CONSULTATION — NO OBLIGATION
            </span>
          </div>

          {/* 2-Column Hero: Headline + Aligned Lottie Arrow + Quick Contact Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "clamp(32px,4vw,64px)", alignItems: "center", position: "relative" }}>
            <div>
              <h1 style={{ margin: "0 0 16px", lineHeight: 1.04 }}>
                <div style={{ fontFamily: "'Fraunces',serif", display: "flex", flexWrap: "wrap", gap: "0 0.12em", alignItems: "baseline" }}>
                  <span style={{ fontSize: "clamp(38px,5.2vw,72px)", fontWeight: 300, fontStyle: "italic", color: "rgba(239,231,214,0.82)", letterSpacing: "-1.5px" }}>Let's talk</span>
                  <span style={{ fontSize: "clamp(38px,5.2vw,72px)", fontWeight: 800, color: "#EFE7D6", letterSpacing: "-2px" }}>about your</span>
                </div>
                <div style={{ fontFamily: "'Fraunces',serif" }}>
                  <span style={{ fontSize: "clamp(38px,5.2vw,72px)", fontWeight: 800, color: "#FCB019", letterSpacing: "-2px" }}>business.</span>
                </div>
              </h1>

              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.75, color: "rgba(239,231,214,0.50)", margin: 0, maxWidth: "520px" }}>
                Send us a message below or reach out directly. We respond to every enquiry within one working day — usually within a few hours. The first conversation is always free with no pressure.
              </p>
            </div>

            {/* Right Column: Lottie Arrow pointing down + Direct Contact Cards */}
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "10px" }}>
              {/* Lottie Arrow aligned at the top of the contact panel */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "72px" }}>
                <div>
                  <span style={{ fontFamily: "'Fraunces',serif", fontStyle: "italic", fontSize: "15px", color: "#FCB019", display: "block", marginBottom: "2px" }}>
                    Get in touch directly
                  </span>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "10px", color: "rgba(239,231,214,0.40)", letterSpacing: "0.5px" }}>
                    We respond within one working day
                  </span>
                </div>

                {/* Animated Lottie Arrow properly sized and aligned */}
                <div
                  className="contact-hero-lottie"
                  aria-hidden="true"
                  style={{
                    width: "clamp(100px, 12vw, 140px)",
                    height: "clamp(100px, 12vw, 140px)",
                    pointerEvents: "none",
                    opacity: 0.95,
                    transform: "rotate(-8deg)",
                    margin: "-18px -10px -18px 0",
                  }}
                >
                  <DotLottieReact
                    src="https://lottie.host/12154a33-14d6-4a7b-a17a-24125c7503b0/0scJpnXfxC.lottie"
                    loop
                    autoplay
                  />
                </div>
              </div>

              {/* Direct contact cards grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {[
                  { icon: Phone, label: "DIRECT CALL", val: "+44 7352 463262", href: "tel:+447352463262" },
                  { icon: Mail, label: "DIRECT EMAIL", val: "ts.justaccount@mail.co.uk", href: "mailto:ts.justaccount@mail.co.uk" },
                  { icon: Clock, label: "OFFICE HOURS", val: "Mon – Fri · 9am – 5:30pm", href: null },
                  { icon: MapPin, label: "LOCATION", val: "UK Based · Fully Remote", href: null },
                ].map((c) => (
                  <div key={c.label} style={{ background: "rgba(15,12,8,0.72)", border: "1px solid rgba(252,176,25,0.10)", padding: "14px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "4px" }}>
                      <c.icon size={11} color="#FCB019" strokeWidth={1.5} />
                      <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "8px", letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(252,176,25,0.50)" }}>{c.label}</span>
                    </div>
                    {c.href ? (
                      <a href={c.href} style={{ fontFamily: "'Inter',sans-serif", fontSize: "12px", color: "rgba(239,231,214,0.70)", textDecoration: "none", transition: "color .18s", wordBreak: "break-all" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#FCB019")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(239,231,214,0.70)")}
                      >
                        {c.val}
                      </a>
                    ) : (
                      <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "12px", color: "rgba(239,231,214,0.55)" }}>{c.val}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          PROFILE STRIP — Thilaga Segaran
      ══════════════════════════════════════ */}
      <section style={{ backgroundColor: "#0F0C08", borderBottom: "1px solid rgba(252,176,25,0.10)" }}>
        <div style={{ maxWidth: MAX, margin: "0 auto", padding: `18px ${C}`, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
          {/* Left — identity */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Avatar */}
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1.5px solid rgba(252,176,25,0.35)", overflow: "hidden", flexShrink: 0, background: "rgba(252,176,25,0.08)" }}>
              <img src={imgThilaga} alt="Thilaga Segaran" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            </div>
            <div>
              <div style={{ fontFamily: "'Fraunces',serif", fontSize: "16px", color: "#EFE7D6", lineHeight: 1.2, marginBottom: "2px" }}>Thilaga Segaran</div>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "8.5px", letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(252,176,25,0.55)" }}>ACCA Qualified · Founder, Just Accounting</div>
            </div>
          </div>
          {/* Centre — bio */}
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "12.5px", lineHeight: 1.6, color: "rgba(239,231,214,0.40)", maxWidth: "420px", margin: 0, flex: "1 1 280px" }}>
            "I help business owners stay organised, compliant, and stress-free by handling their day-to-day bookkeeping. No hidden fees. Just reliable, personal support."
          </p>
          {/* Right — socials + Calendly */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <a href="https://www.linkedin.com/in/thilagasegaran" target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", border: "1px solid rgba(239,231,214,0.14)", color: "rgba(239,231,214,0.50)", textDecoration: "none", transition: "border-color .18s, color .18s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#FCB019"; e.currentTarget.style.color = "#FCB019"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(239,231,214,0.14)"; e.currentTarget.style.color = "rgba(239,231,214,0.50)"; }}
              title="LinkedIn"
            ><Linkedin size={13} /></a>
            <a href="mailto:ts.justaccount@mail.co.uk"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", border: "1px solid rgba(239,231,214,0.14)", color: "rgba(239,231,214,0.50)", textDecoration: "none", transition: "border-color .18s, color .18s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#FCB019"; e.currentTarget.style.color = "#FCB019"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(239,231,214,0.14)"; e.currentTarget.style.color = "rgba(239,231,214,0.50)"; }}
              title="Email"
            ><Mail size={13} /></a>
            <a href="tel:+447352463262"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", border: "1px solid rgba(239,231,214,0.14)", color: "rgba(239,231,214,0.50)", textDecoration: "none", transition: "border-color .18s, color .18s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#FCB019"; e.currentTarget.style.color = "#FCB019"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(239,231,214,0.14)"; e.currentTarget.style.color = "rgba(239,231,214,0.50)"; }}
              title="Phone"
            ><Phone size={13} /></a>
            <div style={{ width: "1px", height: "26px", background: "rgba(239,231,214,0.10)", margin: "0 2px" }} />
            <a href="https://calendly.com/ts-justaccount" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "34px", padding: "0 16px", background: "#FCB019", color: "#17140F", fontFamily: "'Inter',sans-serif", fontSize: "10px", fontWeight: 700, textDecoration: "none", letterSpacing: "0.5px", textTransform: "uppercase", transition: "opacity .18s" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            ><CalendarDays size={11} /> Book Free Consultation</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FORM + SIDEBAR
      ══════════════════════════════════════ */}
      <section style={{ position: "relative", backgroundColor: "#17140F", overflow: "clip" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${imgForm})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.07 }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(23,20,15,0.88)" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "0 auto", padding: `clamp(36px,5vh,60px) ${C}` }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.55fr 1fr", gap: "clamp(32px,4.5vw,64px)", alignItems: "start" }}>

            {/* ── FORM PANEL (Warm Faded Cream Floating Card) ── */}
            <div style={{ position: "sticky", top: "24px", zIndex: 10, borderTop: "3px solid #FCB019", borderLeft: "1px solid rgba(23,20,15,0.12)", borderRight: "1px solid rgba(23,20,15,0.12)", borderBottom: "1px solid rgba(23,20,15,0.12)", background: "#F3EDE2", boxShadow: "0 24px 64px rgba(0,0,0,0.45), 0 2px 10px rgba(0,0,0,0.08)" }}>
              {sent ? (
                <div style={{ padding: "64px 40px", textAlign: "center" }}>
                  <div style={{ width: "54px", height: "54px", border: "1px solid #FCB019", background: "rgba(252,176,25,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                    <CheckCircle2 size={24} color="#996200" />
                  </div>
                  <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "28px", color: "#17140F", fontWeight: 700, marginBottom: "14px" }}>Message received.</h2>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.75, color: "rgba(23,20,15,0.65)", maxWidth: "360px", margin: "0 auto 28px" }}>
                    Thank you for getting in touch. We will respond within one working day — usually much sooner. If your matter is urgent, please call us directly.
                  </p>
                  <a href="tel:+447352463262" style={{ fontFamily: "'Inter',sans-serif", fontSize: "13px", fontWeight: 700, color: "#996200", textDecoration: "none", letterSpacing: "0.5px" }}>+44 7352 463262</a>
                </div>
              ) : (
                <div style={{ padding: "40px 40px 36px" }}>
                  {/* Form header */}
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2.2px", textTransform: "uppercase", color: "#996200", fontWeight: 700, marginBottom: "8px" }}>ENQUIRY FORM</p>
                  <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(22px,2.4vw,28px)", color: "#17140F", fontWeight: 700, marginBottom: "6px", lineHeight: 1.15 }}>Tell us about your business</h2>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "13.5px", lineHeight: 1.65, color: "rgba(23,20,15,0.60)", marginBottom: "28px", borderBottom: "1px solid rgba(23,20,15,0.08)", paddingBottom: "22px" }}>
                    Give us some context and we'll come back with exactly how we can help — and a written quote if relevant.
                  </p>

                  <form ref={formRef} onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>

                    {/* Row 1 */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div className="ja-field">
                        <label htmlFor="name" className="ja-label">Your name <span style={{ color: "#B87B00" }}>*</span></label>
                        <input className="ja-input" id="name" type="text" required placeholder="Full name" />
                      </div>
                      <div className="ja-field">
                        <label htmlFor="email" className="ja-label">Email address <span style={{ color: "#B87B00" }}>*</span></label>
                        <input className="ja-input" id="email" type="email" required placeholder="you@yourbusiness.co.uk" />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div className="ja-field">
                        <label htmlFor="phone" className="ja-label">Phone number</label>
                        <input className="ja-input" id="phone" type="tel" placeholder="+44 7xxx xxxxxx" />
                      </div>
                      <div className="ja-field">
                        <label htmlFor="biz" className="ja-label">Business name</label>
                        <input className="ja-input" id="biz" type="text" placeholder="Your Ltd or trading name" />
                      </div>
                    </div>

                    {/* Enquiry type */}
                    <div className="ja-field">
                      <label htmlFor="type" className="ja-label">I am a… <span style={{ color: "#B87B00" }}>*</span></label>
                      <select className="ja-input" id="type" style={{ cursor: "pointer" }}>
                        <option value="">Select one</option>
                        <option value="business">Business owner needing bookkeeping support</option>
                        <option value="firm">Accountancy firm needing overflow support</option>
                        <option value="startup">New business setting up from scratch</option>
                        <option value="other">Something else</option>
                      </select>
                    </div>

                    {/* Software */}
                    <div className="ja-field">
                      <label htmlFor="software" className="ja-label">Accounting software currently used</label>
                      <select className="ja-input" id="software" style={{ cursor: "pointer" }}>
                        <option value="">Not sure / not yet set up</option>
                        <option value="xero">Xero</option>
                        <option value="sage">Sage</option>
                        <option value="quickbooks">QuickBooks</option>
                        <option value="freeagent">FreeAgent</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="ja-field">
                      <label htmlFor="msg" className="ja-label">How can we help? <span style={{ color: "#B87B00" }}>*</span></label>
                      <textarea className="ja-textarea" id="msg" required
                        placeholder="Tell us about your business, the services you need, any deadlines we should be aware of, and any other context that would help us respond usefully..."
                      />
                    </div>

                    {/* Submit row */}
                    <div style={{ display: "flex", alignItems: "center", gap: "20px", paddingTop: "4px", borderTop: "1px solid rgba(23,20,15,0.08)", marginTop: "4px", flexWrap: "wrap" }}>
                      <button type="submit" id="contact-submit"
                        style={{ display: "inline-flex", alignItems: "center", gap: "9px", height: "48px", padding: "0 28px", background: "#FCB019", color: "#17140F", fontFamily: "'Inter',sans-serif", fontSize: "12.5px", fontWeight: 700, border: "none", cursor: "pointer", letterSpacing: "0.5px", textTransform: "uppercase", transition: "opacity .18s, transform .18s", flexShrink: 0 }}
                        onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                        onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                      >Send enquiry <ArrowRight size={13} /></button>
                      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "11px", color: "rgba(23,20,15,0.50)", margin: 0, lineHeight: 1.5 }}>
                        Your details are never shared with third parties.<br />
                        We will respond within one working day.
                      </p>
                    </div>

                    {/* Security & Reassurance strip */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "14px", borderTop: "1px solid rgba(23,20,15,0.08)", paddingTop: "18px", marginTop: "8px" }}>
                      {[
                        { title: "Strict NDA Protection", desc: "Signed before file review" },
                        { title: "ACCA Standards", desc: "Qualified UK oversight" },
                        { title: "Guaranteed Fixed Fees", desc: "Agreed prior to work" },
                      ].map(g => (
                        <div key={g.title} style={{ display: "flex", gap: "7px", alignItems: "flex-start" }}>
                          <Shield size={12} color="#996200" style={{ flexShrink: 0, marginTop: "2px" }} />
                          <div>
                            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "10.5px", fontWeight: 700, color: "#17140F", lineHeight: 1.25 }}>{g.title}</div>
                            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "9.5px", color: "rgba(23,20,15,0.55)", marginTop: "2px" }}>{g.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                  </form>
                </div>
              )}
            </div>

            {/* ── SIDEBAR PANELS ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "rgba(252,176,25,0.07)" }}>

              {/* Contact info - compact format */}
              <div style={{ background: "rgba(15,12,8,0.60)", padding: "20px 22px" }}>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "8.5px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(252,176,25,0.50)", marginBottom: "14px" }}>DIRECT CHANNELS</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  {[
                    { icon: Phone,        label: "Phone",    val: "+44 7352 463262", href: "tel:+447352463262" },
                    { icon: Mail,         label: "Email",    val: "ts.justaccount@mail.co.uk", href: "mailto:ts.justaccount@mail.co.uk" },
                    { icon: Linkedin,     label: "LinkedIn", val: "Thilaga Segaran", href: "https://www.linkedin.com/in/thilagasegaran" },
                    { icon: ExternalLink, label: "Linktree", val: "ts.justaccount", href: "https://linktr.ee/ts.justaccount" },
                  ].map((c) => (
                    <div key={c.label} style={{ background: "rgba(239,231,214,0.03)", border: "1px solid rgba(252,176,25,0.08)", padding: "10px 12px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "3px" }}>
                        <c.icon size={10} color="#FCB019" strokeWidth={1.5} />
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "8px", letterSpacing: "1px", textTransform: "uppercase", color: "rgba(239,231,214,0.30)" }}>{c.label}</span>
                      </div>
                      <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        style={{ fontFamily: "'Inter',sans-serif", fontSize: "11px", color: "rgba(239,231,214,0.65)", textDecoration: "none", transition: "color .18s", display: "block", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#FCB019")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(239,231,214,0.65)")}
                      >
                        {c.val}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendly booking CTA */}
              <div style={{ background: "rgba(252,176,25,0.08)", padding: "20px 26px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontFamily: "'Fraunces',serif", fontSize: "14px", color: "#EFE7D6", marginBottom: "4px" }}>Prefer to book directly?</div>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "11.5px", color: "rgba(239,231,214,0.40)" }}>Book your free 20-min slot via Calendly</div>
                </div>
                <a href="https://calendly.com/ts-justaccount" target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "7px", height: "38px", padding: "0 18px", background: "#FCB019", color: "#17140F", fontFamily: "'Inter',sans-serif", fontSize: "10.5px", fontWeight: 700, textDecoration: "none", letterSpacing: "0.5px", textTransform: "uppercase", flexShrink: 0, transition: "opacity .18s" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                ><CalendarDays size={11} /> Book Now</a>
              </div>

              {/* What happens next */}
              <div style={{ background: "rgba(15,12,8,0.60)", padding: "24px 26px" }}>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "8.5px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(252,176,25,0.50)", marginBottom: "18px" }}>WHAT HAPPENS NEXT</p>
                {[
                  { n: "01", t: "We reply within 1 working day", d: "To every enquiry, without exception." },
                  { n: "02", t: "Free 20-min discovery call", d: "To understand your needs — no pitch." },
                  { n: "03", t: "Written quote within 24 hours", d: "Fixed fee, clear scope, no surprises." },
                  { n: "04", t: "NDA signed, work begins", d: "Typically within 48 hours of agreement." },
                ].map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: i < 3 ? "14px" : 0, paddingBottom: i < 3 ? "14px" : 0, borderBottom: i < 3 ? "1px solid rgba(252,176,25,0.06)" : "none" }}>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "8px", color: "rgba(252,176,25,0.45)", flexShrink: 0, letterSpacing: "1px", width: "18px", marginTop: "2px" }}>{s.n}</span>
                    <div>
                      <div style={{ fontFamily: "'Fraunces',serif", fontSize: "13.5px", color: "#EFE7D6", lineHeight: 1.25, marginBottom: "3px" }}>{s.t}</div>
                      <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "11.5px", color: "rgba(239,231,214,0.40)", lineHeight: 1.4 }}>{s.d}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Why choose */}
              <div style={{ background: "rgba(15,12,8,0.60)", padding: "24px 26px" }}>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "8.5px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(252,176,25,0.50)", marginBottom: "14px" }}>WHY CLIENTS CHOOSE US</p>
                {[
                  "ACCA Qualified — professional standards",
                  "10+ years inside UK accounting practices",
                  "One dedicated contact — always Thilaga",
                  "MTD-compliant across all return types",
                  "Fixed-fee pricing, agreed in writing",
                  "NDA signed before any work begins",
                  "White-label support for accountancy firms",
                ].map(item => (
                  <div key={item} style={{ display: "flex", gap: "9px", alignItems: "flex-start", marginBottom: "9px" }}>
                    <Shield size={10} color="rgba(252,176,25,0.55)" strokeWidth={1.5} style={{ marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "12px", color: "rgba(239,231,214,0.46)", lineHeight: 1.45 }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Company */}
              <div style={{ background: "rgba(15,12,8,0.60)", padding: "18px 26px" }}>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "8.5px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(252,176,25,0.50)", marginBottom: "12px" }}>REGISTERED DETAILS</p>
                {[
                  ["Trading name", "Just Accounting"],
                  ["Company",      "TS Professional Accountancy Ltd"],
                  ["Qualification","ACCA Qualified"],
                  ["Territory",    "England & Wales"],
                ].map(([l, v]) => (
                  <div key={l} style={{ display: "grid", gridTemplateColumns: "90px 1fr", gap: "8px", marginBottom: "5px" }}>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "8.5px", textTransform: "uppercase", letterSpacing: "0.8px", color: "rgba(239,231,214,0.22)" }}>{l}</span>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "12px", color: "rgba(239,231,214,0.50)" }}>{v}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ — cream bg
      ══════════════════════════════════════ */}
      <section style={{ backgroundColor: "#F4EFE6", padding: `clamp(56px,7vh,80px) ${C}` }}>
        <div style={{ maxWidth: MAX, margin: "0 auto" }}>

          <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "clamp(32px,5vw,72px)", alignItems: "start" }}>
            <div style={{ position: "sticky", top: "88px" }}>
              <div style={{ width: "32px", height: "2px", background: "#FCB019", marginBottom: "18px" }} />
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#8A5600", marginBottom: "12px" }}>BEFORE YOU WRITE</p>
              <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(22px,2.5vw,30px)", lineHeight: 1.1, color: "#17140F", marginBottom: "20px" }}>Common questions</h2>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "13px", lineHeight: 1.70, color: "rgba(23,20,15,0.52)", margin: 0 }}>
                If your question isn't answered here, include it in your message and we'll address it in our reply.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "rgba(23,20,15,0.10)" }}>
              {[
                { q: "Is the first consultation really free?", a: "Yes — completely. A 20-minute call to understand your requirements costs nothing and comes with no obligation. If we are not the right fit, we will say so and point you in the right direction." },
                { q: "How quickly do you reply to messages?", a: "We respond to all enquiries within one working day without exception — usually within a few hours during office hours. For urgent matters, please call us directly." },
                { q: "Do you work with businesses outside the UK?", a: "We specialise in UK bookkeeping, UK tax compliance, and Making Tax Digital. We work with UK-registered businesses and UK-based accountancy firms only." },
                { q: "Do I need to switch my accounting software?", a: "No. We work in your existing software — Xero, Sage, QuickBooks, or FreeAgent. If you don't yet have one, we can advise and help you get set up correctly from day one." },
                { q: "How is pricing structured?", a: "All fees are fixed and agreed in writing before any work starts. There are no hourly charges, no out-of-scope invoices, and no surprises. We offer flexible pricing for smaller, lower-turnover businesses." },
                { q: "Do you sign NDAs?", a: "Yes — as standard. We sign a mutual non-disclosure agreement before you share any client or business information. Confidentiality is a non-negotiable part of how we work." },
              ].map((faq, i) => (
                <div key={i} style={{ background: "#F4EFE6", padding: "26px 28px" }}>
                  <h4 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(15px,1.6vw,17px)", lineHeight: 1.3, color: "#17140F", marginBottom: "10px" }}>{faq.q}</h4>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "13px", lineHeight: 1.72, color: "rgba(23,20,15,0.56)", margin: 0 }}>{faq.a}</p>
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
