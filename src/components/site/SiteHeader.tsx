import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

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
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "#F4EFE6",
        borderBottom: "1px solid rgba(23,20,15,0.10)",
      }}
    >
      <style>{`
        .ja-desktop-nav {
          display: flex;
          align-items: center;
          gap: clamp(16px, 2.2vw, 32px);
        }
        .ja-mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #17140F;
          padding: 8px;
        }
        @media (max-width: 860px) {
          .ja-desktop-nav {
            display: none !important;
          }
          .ja-mobile-toggle {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 clamp(16px,4vw,48px)",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
        >
          <span
            style={{
              display: "grid",
              placeItems: "center",
              width: "32px",
              height: "32px",
              background: "#17140F",
              color: "#FCB019",
              fontFamily: "'Fraunces', serif",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "-0.3px",
            }}
          >
            JA
          </span>
          <span
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "17px",
              fontWeight: 600,
              color: "#17140F",
              letterSpacing: "-0.2px",
            }}
          >
            Just Accounting
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="ja-desktop-nav">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: "13.5px",
                fontWeight: 500,
                color: "#17140F",
                textDecoration: "none",
                opacity: 0.75,
                transition: "opacity 0.15s",
              }}
              activeProps={{
                style: {
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "13.5px",
                  fontWeight: 600,
                  color: "#17140F",
                  textDecoration: "none",
                  opacity: 1,
                  borderBottom: "2px solid #FCB019",
                  paddingBottom: "2px",
                },
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "#FCB019",
              color: "#17140F",
              fontFamily: "'Inter',sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              padding: "8px 16px",
              textDecoration: "none",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <span>Free Consultation</span>
            <ArrowRight size={12} />
          </Link>
        </nav>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className="ja-mobile-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div
          style={{
            backgroundColor: "#F4EFE6",
            borderTop: "1px solid rgba(23,20,15,0.10)",
            boxShadow: "0 16px 32px rgba(23,20,15,0.12)",
          }}
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "12px clamp(20px,5vw,48px) 24px",
            }}
          >
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#17140F",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(23,20,15,0.08)",
                  textDecoration: "none",
                }}
                activeProps={{
                  style: {
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#996200",
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(23,20,15,0.08)",
                    textDecoration: "none",
                  },
                }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              style={{
                marginTop: "16px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                height: "46px",
                background: "#FCB019",
                color: "#17140F",
                fontFamily: "'Inter',sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              <span>Book Free Consultation</span>
              <ArrowRight size={14} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
