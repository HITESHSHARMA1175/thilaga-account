import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getPostBySlug, getPublishedPosts, formatDate, type BlogPost } from "@/data/store";
import { ArrowLeft, Calendar, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPostPage,
});

/**
 * Renders a simple text block: supports **bold**, headings (lines starting with #),
 * and --- dividers. Keeps it dependency-free.
 */
function RenderContent({ text }: { text: string }) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const raw of lines) {
    const line = raw.trimEnd();

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="mt-8 font-serif text-2xl font-semibold text-primary">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("# ")) {
      elements.push(
        <h1 key={key++} className="mt-8 font-serif text-3xl font-semibold text-primary">
          {line.slice(2)}
        </h1>
      );
    } else if (line === "---") {
      elements.push(<hr key={key++} className="my-6 border-border" />);
    } else if (line === "") {
      elements.push(<div key={key++} className="h-2" />);
    } else {
      // inline bold: **text**
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      elements.push(
        <p key={key++} className="leading-relaxed text-muted-foreground">
          {parts.map((part, i) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={i} className="font-semibold text-foreground">
                {part.slice(2, -2)}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    }
  }

  return <div className="space-y-2">{elements}</div>;
}

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
    return <div className="min-h-screen bg-background" />;
  }

  if (post === null) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <div className="mx-auto max-w-2xl px-6 py-32 text-center">
          <h1 className="font-serif text-3xl font-semibold text-primary">Post not found</h1>
          <p className="mt-4 text-muted-foreground">
            This article may have been moved or unpublished.
          </p>
          <Link to="/blog" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-all">
            Back to Blog
          </Link>
        </div>
        <SiteFooter hideCta />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Article header */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 py-14 lg:px-8">
          <Link
            to="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <span className="badge-gold mb-4 inline-flex">{post.category}</span>
          <h1 className="font-serif text-3xl font-semibold text-primary md:text-4xl lg:text-5xl leading-snug">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-accent" />
              {formatDate(post.date)}
            </span>
            <span className="text-border">·</span>
            <span>By <strong className="font-semibold text-primary">{post.author}</strong></span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="mx-auto max-w-3xl px-6 py-14 lg:px-8">
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="mb-10 w-full rounded-2xl object-cover shadow-sm ring-1 ring-border max-h-80"
          />
        )}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml || post.content }}
        />
      </article>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 pb-14 lg:px-8">
        <div className="rounded-2xl border border-border bg-white p-8 text-center">
          <h3 className="font-serif text-xl font-semibold text-primary">
            Need help with your bookkeeping?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Book a free, no-obligation consultation with Just Accounting.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-border bg-secondary/40 py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-serif text-xl font-semibold text-primary mb-7">
              More from {post.category}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to="/blog/$slug"
                  params={{ slug: r.slug }}
                  className="group flex flex-col rounded-2xl border border-border bg-white p-7 card-hover"
                >
                  <h3 className="font-serif text-lg font-semibold text-primary leading-snug group-hover:text-accent transition-colors">
                    {r.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-2">
                    {r.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-primary">
                    {formatDate(r.date)} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter hideCta />
    </div>
  );
}
