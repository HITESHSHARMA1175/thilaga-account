import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { to: "/for-firms",    label: "For Accountancy Firms" },
  { to: "/for-business", label: "For Businesses" },
  { to: "/blog",         label: "Blog" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/about",        label: "About" },
  { to: "/contact",      label: "Contact" },
];

const services = [
  "Bank Reconciliations",
  "VAT Returns (MTD)",
  "Management Accounts",
  "Year-End Preparation",
  "Payroll Data Processing",
];

interface SiteFooterProps { hideCta?: boolean; }

const C   = "clamp(24px,4vw,48px)";
const MAX = "1400px";

export function SiteFooter({ hideCta = false }: SiteFooterProps) {
  return (
    <footer style={{ backgroundColor: "#0F0C08", borderTop: "1px solid rgba(252,176,25,0.12)", color: "#EFE7D6" }}>

      {/* Optional CTA strip */}
      {!hideCta && (
        <div style={{ borderBottom: "1px solid rgba(252,176,25,0.10)", backgroundColor: "#141109" }}>
          <div style={{
            maxWidth: MAX, margin: "0 auto", padding: `28px ${C}`,
            display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px",
          }}>
            <div>
              <p style={{ fontFamily: "'Fraunces',serif", fontSize: "20px", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.3px", color: "#EFE7D6", marginBottom: "4px" }}>
                Ready to get started?
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "13px", fontWeight: 400, color: "rgba(239,231,214,0.45)" }}>
                Free consultation, no obligation.
              </p>
            </div>
            <Link to="/contact" id="footer-cta" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              height: "46px", padding: "0 24px",
              background: "#FCB019", color: "#1B140B",
              fontFamily: "'Inter',sans-serif", fontSize: "14px", fontWeight: 500,
              textDecoration: "none", transition: "opacity 0.18s",
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Book Consultation →
            </Link>
          </div>
        </div>
      )}

      {/* Main grid */}
      <div style={{
        maxWidth: MAX, margin: "0 auto",
        padding: `56px ${C} 48px`,
        display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "40px",
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
            <span style={{
              display: "grid", placeItems: "center",
              width: "30px", height: "30px",
              background: "#FCB019", color: "#1B140B",
              fontFamily: "'Fraunces',serif", fontSize: "12px", fontWeight: 400,
            }}>JA</span>
            <span style={{ fontFamily: "'Fraunces',serif", fontSize: "16px", fontWeight: 400, letterSpacing: "-0.2px", color: "#EFE7D6" }}>
              Just Accounting
            </span>
          </div>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", fontWeight: 400, lineHeight: 1.6, color: "rgba(239,231,214,0.45)", marginBottom: "10px" }}>
            UK bookkeeping support for accountancy firms and business owners.
          </p>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "11px", fontWeight: 400, color: "rgba(239,231,214,0.22)", letterSpacing: "0.3px" }}>
            Trading name of TS Professional Accountancy Ltd.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 style={{ fontFamily: "'Inter',sans-serif", fontSize: "10px", fontWeight: 400, letterSpacing: "2.2px", textTransform: "uppercase", color: "rgba(252,176,25,0.55)", marginBottom: "18px" }}>Quick Links</h4>
          <ul style={{ display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0, margin: 0 }}>
            {quickLinks.map(l => (
              <li key={l.to}>
                <Link to={l.to} style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", fontWeight: 400, color: "rgba(239,231,214,0.50)", textDecoration: "none", transition: "color 0.16s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#FCB019")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(239,231,214,0.50)")}
                >{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ fontFamily: "'Inter',sans-serif", fontSize: "10px", fontWeight: 400, letterSpacing: "2.2px", textTransform: "uppercase", color: "rgba(252,176,25,0.55)", marginBottom: "18px" }}>Services</h4>
          <ul style={{ display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0, margin: 0 }}>
            {services.map(s => (
              <li key={s} style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", fontWeight: 400, color: "rgba(239,231,214,0.48)" }}>{s}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: "'Inter',sans-serif", fontSize: "10px", fontWeight: 400, letterSpacing: "2.2px", textTransform: "uppercase", color: "rgba(252,176,25,0.55)", marginBottom: "18px" }}>Contact</h4>
          <ul style={{ display: "flex", flexDirection: "column", gap: "14px", listStyle: "none", padding: 0, margin: 0 }}>
            <li>
              <a href="mailto:ts.justaccount@mail.co.uk" style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontFamily: "'Inter',sans-serif", fontSize: "14px", fontWeight: 400, color: "rgba(239,231,214,0.52)", textDecoration: "none", transition: "color 0.16s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#FCB019")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(239,231,214,0.52)")}
              >
                <Mail size={14} color="#FCB019" style={{ marginTop: "2px", flexShrink: 0 }} />
                ts.justaccount@mail.co.uk
              </a>
            </li>
            <li>
              <a href="tel:+447352463262" style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "'Inter',sans-serif", fontSize: "14px", fontWeight: 400, color: "rgba(239,231,214,0.52)", textDecoration: "none", transition: "color 0.16s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#FCB019")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(239,231,214,0.52)")}
              >
                <Phone size={14} color="#FCB019" style={{ flexShrink: 0 }} />
                07352 463262
              </a>
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "'Inter',sans-serif", fontSize: "14px", fontWeight: 400, color: "rgba(239,231,214,0.42)" }}>
              <MapPin size={14} color="#FCB019" style={{ flexShrink: 0 }} />
              United Kingdom — fully remote
            </li>
            <li style={{ fontFamily: "'Inter',sans-serif", fontSize: "12px", fontWeight: 400, color: "rgba(239,231,214,0.28)" }}>
              Mon – Fri: 9am – 5:30pm
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(252,176,25,0.08)", backgroundColor: "#0A0807" }}>
        <div style={{
          maxWidth: MAX, margin: "0 auto", padding: `18px ${C}`,
          display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "10px",
        }}>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "12px", fontWeight: 400, color: "rgba(239,231,214,0.25)" }}>
            © {new Date().getFullYear()} TS Professional Accountancy Ltd, trading as Just Accounting.
          </p>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "10px", fontWeight: 400, letterSpacing: "1.2px", textTransform: "uppercase", color: "rgba(252,176,25,0.30)" }}>
            ACCA Qualified · UK Based · MTD Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}
