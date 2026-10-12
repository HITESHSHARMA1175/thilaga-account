import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/for-firms", label: "For Firms" },
  { to: "/for-business", label: "For Businesses" },
  { to: "/blog", label: "Blog" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      backgroundColor: "#F4EFE6",
      borderBottom: "1px solid rgba(23,20,15,0.10)",
    }}>
      <div style={{
        maxWidth: "1400px", margin: "0 auto",
        padding: "0 clamp(24px,4vw,48px)",
        height: "52px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <span style={{
            display: "grid", placeItems: "center",
            width: "32px", height: "32px",
            background: "#17140F", color: "#FCB019",
            fontFamily: "'Fraunces', serif", fontSize: "13px", fontWeight: 400,
            letterSpacing: "-0.3px",
          }}>JA</span>
          <span style={{
            fontFamily: "'Fraunces', serif", fontSize: "17px",
            fontWeight: 400, color: "#17140F", letterSpacing: "-0.2px",
          }}>Just Accounting</span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "32px" }} className="hidden md:flex">
          {nav.map(n => (
            <Link key={n.to} to={n.to}
              style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", fontWeight: 400, color: "#17140F", textDecoration: "none", opacity: 0.75, transition: "opacity 0.15s" }}
              activeProps={{ style: { fontFamily: "'Inter',sans-serif", fontSize: "14px", fontWeight: 400, color: "#17140F", textDecoration: "none", opacity: 1, borderBottom: "1px solid #FCB019", paddingBottom: "2px" } }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "0.75")}
            >{n.label}</Link>
          ))}
          <Link to="/contact"
            style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", fontWeight: 500, color: "#8A5600", textDecoration: "none", transition: "opacity 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
            onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}
          >Free Consultation →</Link>
        </nav>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden"
          style={{ background: "none", border: "none", cursor: "pointer", color: "#17140F", padding: "8px" }}
          aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: "#F4EFE6", borderTop: "1px solid rgba(23,20,15,0.10)" }} className="md:hidden">
          <nav style={{ display: "flex", flexDirection: "column", padding: "8px clamp(24px,4vw,48px) 20px" }}>
            {nav.map(n => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)}
                style={{ fontFamily: "'Inter',sans-serif", fontSize: "15px", fontWeight: 400, color: "#17140F", padding: "12px 0", borderBottom: "1px solid rgba(23,20,15,0.08)", textDecoration: "none" }}
                activeProps={{ style: { fontFamily: "'Inter',sans-serif", fontSize: "15px", fontWeight: 400, color: "#FCB019", padding: "12px 0", borderBottom: "1px solid rgba(23,20,15,0.08)", textDecoration: "none" } }}
              >{n.label}</Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)}
              style={{ fontFamily: "'Inter',sans-serif", fontSize: "15px", fontWeight: 500, color: "#8A5600", padding: "14px 0", textDecoration: "none" }}>
              Free Consultation →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
