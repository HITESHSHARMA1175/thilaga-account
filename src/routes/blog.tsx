import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getPublishedPosts, formatDate, type BlogPost } from "@/data/store";
import {
  Calendar, Clock, Tag, ArrowRight, BookOpen,
  CheckCircle2, Sparkles, CalendarDays, ShieldCheck
} from "lucide-react";

import imgHero from "@/assets/13 (9).jpeg";
import imgCream from "@/assets/13 (10).jpeg";
import imgDark from "@/assets/hero-desk.jpg";
import imgCta from "@/assets/11.jpeg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights, Tax Guides & Practice Blog | Just Accounting UK" },
      {
        name: "description",
        content:
          "Practical UK bookkeeping advice, HMRC compliance guides, and practice growth insights written by an ACCA qualified professional.",
      },
      { property: "og:title", content: "Just Accounting UK — Insights & Blog" },
    ],
  }),
  component: BlogPage,
});

const C = "clamp(24px,4vw,56px)";
const MAX = "1320px";

const CATEGORIES = ["All", "Bookkeeping Tips", "Tax & Compliance", "Business Finance"];

function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [active, setActive] = useState("All");

  useEffect(() => {
    setPosts(getPublishedPosts());
  }, []);

  const filtered =
    active === "All" ? posts : posts.filter((p) => p.category === active);

  const [featured, ...rest] = filtered;

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
            backgroundPosition: "center 35%",
            opacity: 0.08,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(15,12,8,0.95) 0%, rgba(15,12,8,0.78) 55%, rgba(15,12,8,0.98) 100%)",
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
            Just Accounting — Knowledge &amp; Guidance
          </span>
          <div style={{ display: "flex", gap: "16px" }}>
            {["ACCA Qualified Lead", "HMRC MTD Ready", "UK Practice Tested"].map((t) => (
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
                Clear thinking
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
                on UK tax,
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
                bookkeeping
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
                &amp; practice
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
                growth
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
                made simple.
              </span>
            </div>
          </h1>
        </div>

        {/* Bottom — Focus Highlights + Circular CTA */}
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
          {/* Topics strip */}
          <div
            style={{
              display: "flex",
              gap: "1px",
              backgroundColor: "rgba(252,176,25,0.12)",
              flexWrap: "wrap",
            }}
          >
            {[
              { val: "ACCA", sub: "Written by qualified accountant", tag: "Technical accuracy" },
              { val: "MTD", sub: "Making Tax Digital roadmap", tag: "HMRC compliance" },
              { val: "100%", sub: "Independent, practical insights", tag: "Zero commercial fluff" },
              { val: "SMEs", sub: "Small business & practice focus", tag: "Real-world workflows" },
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
                  {c.tag}
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
                Book
                <br />
                A Chat
              </span>
              <ArrowRight size={14} style={{ marginTop: "4px" }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CREAM SECTION — FEATURED ESSAY & FILTER BAR
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
          {/* Filter Pills Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
              marginBottom: "clamp(36px,5vh,56px)",
              borderBottom: "1px solid rgba(23,20,15,0.10)",
              paddingBottom: "24px",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "9px",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "rgba(23,20,15,0.50)",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                01 / CURATED TOPICS &amp; BRIEFINGS
              </span>
              <h2
                style={{
                  fontFamily: "'Fraunces',serif",
                  fontSize: "clamp(24px,3vw,32px)",
                  color: "#17140F",
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                Filter by Subject
              </h2>
            </div>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    padding: "8px 18px",
                    border:
                      active === cat
                        ? "1px solid #17140F"
                        : "1px solid rgba(23,20,15,0.15)",
                    background: active === cat ? "#17140F" : "#FFFFFF",
                    color: active === cat ? "#EFE7D6" : "rgba(23,20,15,0.70)",
                    cursor: "pointer",
                    transition: "all .18s ease",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Lead Article Card */}
          {featured && (
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              style={{
                textDecoration: "none",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 520px), 1fr))",
                gap: 0,
                background: "#0F0C08",
                border: "1px solid rgba(252,176,25,0.18)",
                boxShadow: "0 12px 48px rgba(23,20,15,0.12)",
                overflow: "hidden",
                transition: "border-color .2s, transform .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#FCB019";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(252,176,25,0.18)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Left Column — Editorial Brief */}
              <div
                style={{
                  padding: "clamp(36px,5vw,56px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "20px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "9px",
                        fontWeight: 700,
                        letterSpacing: "1.5px",
                        color: "#17140F",
                        background: "#FCB019",
                        padding: "4px 10px",
                        textTransform: "uppercase",
                      }}
                    >
                      FEATURED ARTICLE
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "11px",
                        color: "rgba(239,231,214,0.45)",
                      }}
                    >
                      {featured.category}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Fraunces',serif",
                      fontSize: "clamp(24px,3vw,36px)",
                      fontWeight: 700,
                      color: "#EFE7D6",
                      lineHeight: 1.18,
                      marginBottom: "18px",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {featured.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      fontSize: "14px",
                      lineHeight: 1.75,
                      color: "rgba(239,231,214,0.60)",
                      marginBottom: "28px",
                    }}
                  >
                    {featured.excerpt}
                  </p>
                </div>

                <div>
                  <div
                    style={{
                      height: "1px",
                      background: "rgba(252,176,25,0.12)",
                      marginBottom: "18px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "14px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          background: "#FCB019",
                          color: "#17140F",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "'Fraunces',serif",
                          fontWeight: 700,
                          fontSize: "14px",
                        }}
                      >
                        T
                      </div>
                      <div>
                        <div
                          style={{
                            fontFamily: "'Inter',sans-serif",
                            fontSize: "12px",
                            fontWeight: 700,
                            color: "#EFE7D6",
                          }}
                        >
                          {featured.author || "Thilaga Segaran"}
                        </div>
                        <div
                          style={{
                            fontFamily: "'Inter',sans-serif",
                            fontSize: "10.5px",
                            color: "rgba(239,231,214,0.40)",
                          }}
                        >
                          ACCA Qualified · {formatDate(featured.date)}
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.8px",
                        color: "#FCB019",
                        textTransform: "uppercase",
                      }}
                    >
                      <span>Read Article</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column — Article Excerpt & Details Preview */}
              <div
                style={{
                  background: "rgba(23,20,15,0.92)",
                  borderLeft: "1px solid rgba(252,176,25,0.10)",
                  padding: "clamp(36px,5vw,56px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      fontSize: "9px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "rgba(252,176,25,0.60)",
                      marginBottom: "16px",
                    }}
                  >
                    EXECUTIVE TAKEAWAYS
                  </div>

                  <div
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      fontSize: "13.5px",
                      lineHeight: 1.8,
                      color: "rgba(239,231,214,0.55)",
                      marginBottom: "28px",
                    }}
                  >
                    {featured.contentHtml
                      ? featured.contentHtml
                          .replace(/<[^>]+>/g, " ")
                          .replace(/\s+/g, " ")
                          .trim()
                          .slice(0, 420) + "..."
                      : featured.excerpt}
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(15,12,8,0.70)",
                    border: "1px solid rgba(252,176,25,0.08)",
                    padding: "18px 22px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <ShieldCheck size={16} color="#FCB019" />
                    <span
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "11px",
                        color: "rgba(239,231,214,0.60)",
                      }}
                    >
                      Verified HMRC &amp; MTD Guidance
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      fontSize: "10px",
                      color: "#FCB019",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    4 Min Read
                  </span>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          DARK SECTION — ALL ARTICLES & PAPERS GRID
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
            opacity: 0.04,
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "0 auto" }}>
          <div style={{ maxWidth: "880px", marginBottom: "clamp(40px,5vh,64px)" }}>
            <span
              style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: "9.5px",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "rgba(252,176,25,0.55)",
                display: "block",
                marginBottom: "14px",
              }}
            >
              02 / DOCUMENTED ARTICLES &amp; GUIDES
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
              Practical advice that keeps you{" "}
              <strong style={{ fontWeight: 800, color: "#FCB019" }}>
                organised and penalty-free.
              </strong>
            </h2>
          </div>

          {filtered.length === 0 ? (
            <div
              style={{
                padding: "64px 24px",
                textAlign: "center",
                background: "rgba(15,12,8,0.55)",
                border: "1px solid rgba(252,176,25,0.12)",
              }}
            >
              <BookOpen
                size={36}
                color="rgba(252,176,25,0.40)"
                style={{ margin: "0 auto 16px" }}
              />
              <h3
                style={{
                  fontFamily: "'Fraunces',serif",
                  fontSize: "22px",
                  color: "#EFE7D6",
                }}
              >
                No articles found in this category
              </h3>
              <p
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "13px",
                  color: "rgba(239,231,214,0.45)",
                  marginTop: "8px",
                }}
              >
                Try switching to "All" or browse our other categories.
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 380px), 1fr))",
                gap: "24px",
              }}
            >
              {rest.map((post, idx) => (
                <Link
                  key={post.id}
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  style={{
                    textDecoration: "none",
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
                    {/* Top Row: Number + Category */}
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
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontSize: "9.5px",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          color: "rgba(239,231,214,0.40)",
                        }}
                      >
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "'Fraunces',serif",
                        fontSize: "20px",
                        fontWeight: 600,
                        color: "#EFE7D6",
                        lineHeight: 1.3,
                        marginBottom: "14px",
                      }}
                    >
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "13px",
                        lineHeight: 1.75,
                        color: "rgba(239,231,214,0.55)",
                        marginBottom: "24px",
                      }}
                    >
                      {post.excerpt}
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

                    {/* Footer Row */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontSize: "11px",
                          color: "rgba(239,231,214,0.40)",
                        }}
                      >
                        {formatDate(post.date)} · By {post.author}
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          fontFamily: "'Inter',sans-serif",
                          fontSize: "10.5px",
                          fontWeight: 700,
                          letterSpacing: "0.5px",
                          color: "#FCB019",
                          textTransform: "uppercase",
                        }}
                      >
                        <span>Read</span>
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          DARK CTA — CONSULTATION & BOOKING
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
                03 / DIRECT PRACTITIONER ADVICE
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
                Have a question about your{" "}
                <strong style={{ fontWeight: 800, color: "#FCB019" }}>
                  bookkeeping or VAT?
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
                Every business setup has its own nuances. Book a free 20-minute discovery call
                directly with Thilaga to discuss your software, catch-up needs, or regular monthly
                bookkeeping support.
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

            {/* Quick Benefits / Commitments Panel */}
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
                OUR COMMITMENTS TO YOU
              </div>

              {[
                {
                  title: "Direct Access to an ACCA Accountant",
                  desc: "You speak and work directly with Thilaga, never passed off to trainees or ticket queues.",
                },
                {
                  title: "Fixed-Fee Clarity",
                  desc: "Agreed in writing before work begins. No unexpected hourly bills or surprise charges.",
                },
                {
                  title: "100% On-Time Record",
                  desc: "Every VAT and CIS deadline tracked systematically with proactive client reminders.",
                },
                {
                  title: "Seamless Cloud Software Integration",
                  desc: "Working inside your Xero, Sage, QuickBooks, or FreeAgent without disrupting your workflow.",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  style={{
                    display: "flex",
                    gap: "14px",
                    marginBottom: i < 3 ? "18px" : 0,
                    paddingBottom: i < 3 ? "18px" : 0,
                    borderBottom: i < 3 ? "1px solid rgba(252,176,25,0.08)" : "none",
                  }}
                >
                  <CheckCircle2
                    size={16}
                    color="#FCB019"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: "'Fraunces',serif",
                        fontSize: "15px",
                        color: "#EFE7D6",
                        marginBottom: "4px",
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "12px",
                        lineHeight: 1.55,
                        color: "rgba(239,231,214,0.45)",
                      }}
                    >
                      {item.desc}
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
