import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getPublishedPosts, formatDate, type BlogPost } from "@/data/store";
import { ArrowRight, Calendar, Tag, BookOpen } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Newsletter | Just Accounting UK" },
      {
        name: "description",
        content:
          "Bookkeeping tips, tax updates, and practical guides for UK small businesses and accountancy firms — from Just Accounting.",
      },
    ],
  }),
  component: BlogPage,
});

const CATEGORIES = ["All", "Bookkeeping Tips", "Tax & Compliance", "Business Finance", "News"];

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
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Header */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 md:py-20">
          <span className="badge-gold mb-5 inline-flex">Blog & Newsletter</span>
          <h1 className="font-serif text-4xl font-semibold text-primary md:text-5xl lg:text-6xl">
            Insights from Just Accounting
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Practical bookkeeping tips, tax updates, and financial guidance for
            UK businesses — written by an ACCA qualified bookkeeper.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                id={`blog-filter-${cat.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-background text-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <BookOpen className="mx-auto h-12 w-12 text-muted-foreground/40" />
            <p className="mt-4 font-serif text-xl text-primary">No posts yet</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Check back soon — or{" "}
              <Link to="/admin" className="text-accent underline">
                add one in the admin panel
              </Link>
              .
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {/* Featured post */}
            {featured && (
              <Link
                to="/blog/$slug"
                params={{ slug: featured.slug }}
                id={`blog-post-featured`}
                className="group grid gap-0 overflow-hidden rounded-2xl border border-border bg-white shadow-sm card-hover md:grid-cols-[1fr_1.2fr]"
              >
                <div className="flex flex-col justify-center bg-primary px-10 py-12">
                  <span className="badge-gold mb-4 w-fit border-accent/30 bg-accent/10 text-accent">
                    {featured.category}
                  </span>
                  <h2 className="font-serif text-2xl font-semibold leading-snug text-primary-foreground md:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                    {featured.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-4 text-xs text-primary-foreground/60">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(featured.date)}
                    </span>
                    <span>By {featured.author}</span>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
                <div className="flex flex-col justify-center px-10 py-12">
                  {featured.coverImage && (
                    <img
                      src={featured.coverImage}
                      alt={featured.title}
                      className="mb-4 w-full max-h-36 rounded-xl object-cover border border-border/30"
                    />
                  )}
                  <p className="text-sm leading-relaxed text-muted-foreground line-clamp-6">
                    {/* Strip HTML tags for safe plain-text preview */}
                    {featured.contentHtml
                      ? featured.contentHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 500)
                      : featured.excerpt}
                  </p>
                </div>
              </Link>
            )}

            {/* Rest of posts */}
            {rest.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((post) => (
                  <Link
                    key={post.id}
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    id={`blog-post-${post.id}`}
                    className="group flex flex-col rounded-2xl border border-border bg-white p-7 card-hover"
                  >
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Tag className="h-3.5 w-3.5 text-accent" />
                      {post.category}
                    </div>
                    <h2 className="mt-3 font-serif text-lg font-semibold leading-snug text-primary group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-primary">
                        Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <SiteFooter hideCta />
    </div>
  );
}
