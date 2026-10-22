import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getPostBySlug, getPublishedPosts, formatDate, type BlogPost } from "@/data/store";
import {
  ArrowLeft, Calendar, ArrowRight, ShieldCheck,
  Clock, Share2, CalendarDays, CheckCircle2
} from "lucide-react";

import imgHero from "@/assets/13 (9).jpeg";
import imgCta from "@/assets/11.jpeg";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPostPage,
});

const C = "clamp(24px,4vw,56px)";
const MAX = "1120px";

function BlogPostPage() {
  const { slug } = Route.useParams();
  const [post, setPost] = useState<BlogPost | null | undefined>(undefined);
  const [related, setRelated] = useState<BlogPost[]>([]);

  useEffect(() => {
    const found = getPostBySlug(slug);
    if (!found || !found.published) {
      setPost(null);
      return;
    }
    setPost(found);
    // Related: same category, different slug, max 2
    const others = getPublishedPosts().filter(
      (p) => p.slug !== slug && p.category === found.category
    );
    setRelated(others.slice(0, 2));
  }, [slug]);

  if (post === undefined) {
    return <div style={{ minHeight: "100vh", backgroundColor: "#0F0C08" }} />;
  }

  if (post === null) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#0F0C08", color: "#EFE7D6" }}>
        <SiteHeader />
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "140px 24px", textAlign: "center" }}>
          <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: "36px", color: "#EFE7D6", marginBottom: "16px" }}>
            Post not found
          </h1>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", color: "rgba(239,231,214,0.50)", marginBottom: "32px" }}>
            This article may have been moved or unpublished.
          </p>
          <Link
            to="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#FCB019",
              color: "#17140F",
              padding: "12px 24px",
              fontFamily: "'Inter',sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.8px",
            }}
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>
        </div>
        <SiteFooter hideCta />
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0F0C08" }}>
      <SiteHeader />

      {/* Embedded article styling */}
      <style>{`
        .ja-article-body h2 {
          font-family: 'Fraunces', serif;
          font-size: clamp(22px, 2.5vw, 28px);
          font-weight: 700;
          color: #17140F;
          margin-top: 36px;
          margin-bottom: 16px;
          line-height: 1.25;
        }
        .ja-article-body h3 {
          font-family: 'Fraunces', serif;
          font-size: 20px;
          font-weight: 600;
          color: #17140F;
          margin-top: 28px;
          margin-bottom: 12px;
        }
        .ja-article-body p {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          line-height: 1.85;
          color: rgba(23, 20, 15, 0.76);
          margin-bottom: 20px;
        }
        .ja-article-body ul, .ja-article-body ol {
          margin: 16px 0 24px 24px;
          color: rgba(23, 20, 15, 0.76);
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          line-height: 1.8;
        }
        .ja-article-body li {
          margin-bottom: 8px;
        }
        .ja-article-body strong {
          color: #17140F;
          font-weight: 700;
        }
        .ja-article-body blockquote {
          border-left: 3px solid #FCB019;
          margin: 28px 0;
          padding: 12px 24px;
          background: rgba(252, 176, 25, 0.08);
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-size: 17px;
          color: #17140F;
        }
        .ja-article-body hr {
          border: none;
          height: 1px;
          background: rgba(23, 20, 15, 0.12);
          margin: 36px 0;
        }
      `}</style>

      {/* ══════════════════════════════════════════════
          HERO — ARTICLE HEADER (Dark Editorial)
      ══════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          backgroundColor: "#0F0C08",
          padding: `clamp(40px,5vh,64px) ${C} clamp(48px,6vh,72px)`,
          overflow: "hidden",
          borderBottom: "1px solid rgba(252,176,25,0.12)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${imgHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            opacity: 0.07,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(15,12,8,0.96) 0%, rgba(15,12,8,0.85) 60%, rgba(15,12,8,0.98) 100%)",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: MAX, margin: "0 auto" }}>
          {/* Back link */}
          <Link
            to="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Inter',sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "rgba(239,231,214,0.45)",
              textDecoration: "none",
              marginBottom: "28px",
              transition: "color .18s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FCB019")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(239,231,214,0.45)")}
          >
            <ArrowLeft size={13} />
            <span>Back to all insights</span>
          </Link>

          {/* Meta strip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "20px",
              flexWrap: "wrap",
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
              {post.category}
            </span>
            <span
              style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: "11px",
                color: "rgba(239,231,214,0.45)",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Calendar size={13} color="#FCB019" />
              {formatDate(post.date)}
            </span>
            <span
              style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: "11px",
                color: "rgba(239,231,214,0.45)",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Clock size={13} color="#FCB019" />
              4 min read
            </span>
          </div>

          {/* Article Title */}
          <h1
            style={{
              fontFamily: "'Fraunces',serif",
              fontSize: "clamp(32px,5vw,56px)",
              fontWeight: 700,
              color: "#EFE7D6",
              lineHeight: 1.12,
              letterSpacing: "-1px",
              marginBottom: "24px",
              maxWidth: "920px",
            }}
          >
            {post.title}
          </h1>

          {/* Lead Excerpt */}
          <p
            style={{
              fontFamily: "'Inter',sans-serif",
              fontSize: "clamp(15px,1.4vw,18px)",
              lineHeight: 1.7,
              color: "rgba(239,231,214,0.68)",
              maxWidth: "800px",
              marginBottom: "32px",
            }}
          >
            {post.excerpt}
          </p>

          {/* Author Block */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(252,176,25,0.12)",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#FCB019",
                color: "#17140F",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Fraunces',serif",
                fontWeight: 700,
                fontSize: "16px",
              }}
            >
              T
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#EFE7D6",
                }}
              >
                {post.author || "Thilaga Segaran"}
              </div>
              <div
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "11px",
                  color: "rgba(239,231,214,0.40)",
                }}
              >
                ACCA Qualified Bookkeeper · TS Professional Accountancy Ltd
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ARTICLE BODY — CREAM EDITORIAL CANVAS
      ══════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#F4EFE6",
          padding: `clamp(48px,7vh,80px) ${C}`,
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title}
              style={{
                width: "100%",
                maxHeight: "380px",
                objectFit: "cover",
                marginBottom: "40px",
                border: "1px solid rgba(23,20,15,0.12)",
              }}
            />
          )}

          <div
            className="ja-article-body"
            dangerouslySetInnerHTML={{ __html: post.contentHtml || post.content }}
          />

          {/* Author Bio Box */}
          <div
            style={{
              marginTop: "56px",
              padding: "32px",
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(23,20,15,0.08)",
              boxShadow: "0 4px 20px rgba(23,20,15,0.04)",
              display: "flex",
              gap: "20px",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#FCB019",
                color: "#17140F",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Fraunces',serif",
                fontWeight: 700,
                fontSize: "19px",
                flexShrink: 0,
              }}
            >
              T
            </div>
            <div style={{ flex: 1, minWidth: "260px" }}>
              <div
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "9px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#996200",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                ABOUT THE AUTHOR
              </div>
              <h3
                style={{
                  fontFamily: "'Fraunces',serif",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#17140F",
                  margin: "0 0 6px",
                }}
              >
                Thilaga Segaran, ACCA
              </h3>
              <p
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "12.5px",
                  lineHeight: 1.65,
                  color: "rgba(23,20,15,0.65)",
                  margin: 0,
                }}
              >
                Director and Principal at Just Accounting (TS Professional Accountancy Ltd). With over
                a decade of experience inside UK accounting firms, Thilaga helps business owners
                and practice partners stay compliant, organized, and stress-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          RELATED ARTICLES
      ══════════════════════════════════════════════ */}
      {related.length > 0 && (
        <section
          style={{
            backgroundColor: "#17140F",
            padding: `clamp(56px,7vh,84px) ${C}`,
            borderTop: "1px solid rgba(252,176,25,0.10)",
          }}
        >
          <div style={{ maxWidth: MAX, margin: "0 auto" }}>
            <div style={{ marginBottom: "32px" }}>
              <span
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "9px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#FCB019",
                  display: "block",
                  marginBottom: "6px",
                }}
              >
                RELATED READING
              </span>
              <h2
                style={{
                  fontFamily: "'Fraunces',serif",
                  fontSize: "26px",
                  color: "#EFE7D6",
                  margin: 0,
                }}
              >
                More in {post.category}
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
                gap: "24px",
              }}
            >
              {related.map((r) => (
                <Link
                  key={r.id}
                  to="/blog/$slug"
                  params={{ slug: r.slug }}
                  style={{
                    textDecoration: "none",
                    background: "rgba(15,12,8,0.55)",
                    border: "1px solid rgba(252,176,25,0.12)",
                    padding: "28px 26px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "border-color .18s, transform .18s",
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
                    <span
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "9px",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        color: "#FCB019",
                        marginBottom: "10px",
                        display: "block",
                      }}
                    >
                      {r.category}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Fraunces',serif",
                        fontSize: "19px",
                        fontWeight: 600,
                        color: "#EFE7D6",
                        lineHeight: 1.3,
                        marginBottom: "10px",
                      }}
                    >
                      {r.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "12.5px",
                        lineHeight: 1.65,
                        color: "rgba(239,231,214,0.50)",
                        marginBottom: "18px",
                      }}
                    >
                      {r.excerpt}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderTop: "1px solid rgba(252,176,25,0.08)",
                      paddingTop: "14px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "10.5px",
                        color: "rgba(239,231,214,0.35)",
                      }}
                    >
                      {formatDate(r.date)}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "10px",
                        fontWeight: 700,
                        color: "#FCB019",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        textTransform: "uppercase",
                      }}
                    >
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          DARK CTA SECTION
      ══════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          backgroundColor: "#1A170E",
          padding: `clamp(64px,9vh,96px) ${C}`,
          borderTop: "1px solid rgba(252,176,25,0.12)",
        }}
      >
        <div style={{ maxWidth: MAX, margin: "0 auto", textAlign: "center" }}>
          <span
            style={{
              fontFamily: "'Inter',sans-serif",
              fontSize: "9px",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "#FCB019",
              display: "block",
              marginBottom: "14px",
            }}
          >
            HAVE QUESTIONS ABOUT THIS TOPIC?
          </span>
          <h2
            style={{
              fontFamily: "'Fraunces',serif",
              fontSize: "clamp(28px,4.5vw,46px)",
              color: "#EFE7D6",
              margin: "0 auto 16px",
              maxWidth: "680px",
              lineHeight: 1.15,
            }}
          >
            Let us review your bookkeeping and provide a{" "}
            <span style={{ color: "#FCB019" }}>clear action plan.</span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter',sans-serif",
              fontSize: "14px",
              color: "rgba(239,231,214,0.55)",
              maxWidth: "520px",
              margin: "0 auto 32px",
              lineHeight: 1.7,
            }}
          >
            No obligation, no sales pressure. Just a direct 20-minute chat with an ACCA qualified
            accountant who can walk you through your options.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#FCB019",
                color: "#17140F",
                padding: "16px 32px",
                fontFamily: "'Inter',sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              <span>Get in Touch</span>
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
              }}
            >
              <CalendarDays size={14} color="#FCB019" />
              <span>Book Call via Calendly</span>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter hideCta />
    </div>
  );
}
