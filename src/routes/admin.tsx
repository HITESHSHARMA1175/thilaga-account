import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { RichEditor } from "@/components/admin/RichEditor";
import {
  isAdminAuthenticated,
  adminLogin,
  adminLogout,
  getPosts,
  savePost,
  deletePost,
  getTestimonials,
  saveTestimonial,
  deleteTestimonial,
  generateId,
  slugify,
  formatDate,
  type BlogPost,
  type Testimonial,
} from "@/data/store";
import {
  BookOpen,
  MessageSquare,
  Plus,
  Pencil,
  Trash2,
  Eye,
  EyeOff,
  LogOut,
  Check,
  X,
  Star,
  ChevronLeft,
  Home,
  LayoutDashboard,
  BarChart3,
  Globe,
  Lock,
  Mail,
  ChevronRight,
  Tag,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin Panel | Just Accounting" }] }),
  component: AdminPage,
});

type Tab = "blog" | "testimonials";

// ─── Admin root ───────────────────────────────────────────────────────────────

function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [tab, setTab] = useState<Tab>("blog");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    setAuthed(isAdminAuthenticated());
  }, []);

  useEffect(() => {
    if (authed) {
      setPosts(getPosts());
      setTestimonials(getTestimonials());
    }
  }, [authed]);

  const refreshData = () => {
    setPosts(getPosts());
    setTestimonials(getTestimonials());
  };

  if (!authed) {
    return <LoginScreen onLogin={() => setAuthed(true)} />;
  }

  const publishedCount = posts.filter((p) => p.published).length;
  const approvedTestimonials = testimonials.filter((t) => t.approved).length;

  return (
    <div className="flex min-h-screen bg-[#0F172A]">
      {/* ── Sidebar ── */}
      <aside className="hidden w-64 flex-shrink-0 flex-col border-r border-white/10 lg:flex">
        {/* Brand */}
        <div className="border-b border-white/10 px-6 py-5">
          <Link to="/" className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#D4AF37] font-serif text-sm font-bold text-[#0F172A] shadow-lg shadow-[#D4AF37]/30">
              JA
            </div>
            <div>
              <div className="font-serif text-sm font-semibold text-white">Just Accounting</div>
              <div className="text-[11px] text-white/40">Admin Console</div>
            </div>
          </Link>
        </div>

        {/* Stats */}
        <div className="border-b border-white/10 px-5 py-4 space-y-2">
          <div className="rounded-xl bg-white/5 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <BookOpen className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-xs text-white/60">Blog Posts</span>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold text-white">{posts.length}</span>
              <span className="ml-1 text-[11px] text-white/40">({publishedCount} live)</span>
            </div>
          </div>
          <div className="rounded-xl bg-white/5 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <MessageSquare className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-xs text-white/60">Testimonials</span>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold text-white">{testimonials.length}</span>
              <span className="ml-1 text-[11px] text-white/40">({approvedTestimonials} live)</span>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {(["blog", "testimonials"] as Tab[]).map((t) => {
            const Icon = t === "blog" ? BookOpen : MessageSquare;
            const label = t === "blog" ? "Blog Posts" : "Testimonials";
            const isActive = tab === t;
            return (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/25"
                    : "text-white/60 hover:bg-white/5 hover:text-white border border-transparent"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
                {isActive && <ChevronRight className="ml-auto h-3.5 w-3.5 opacity-60" />}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-white/10 px-5 py-4 space-y-2">
          <Link
            to="/"
            className="flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-xs text-white/50 transition-colors hover:bg-white/5 hover:text-white"
          >
            <Globe className="h-4 w-4" />
            View live site
          </Link>
          <button
            onClick={() => { adminLogout(); setAuthed(false); }}
            className="w-full flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-xs text-white/50 transition-colors hover:bg-red-500/10 hover:text-red-400"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </aside>

      {/* ── Main content ── */}
      <div className="flex flex-1 flex-col min-h-screen bg-[#F8F7F4]">
        {/* Top bar — mobile only */}
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-white px-6 py-3 shadow-sm lg:hidden">
          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground font-serif text-xs font-bold">
              JA
            </div>
            <span className="font-serif text-sm font-semibold text-primary">Admin</span>
          </div>
          <button
            onClick={() => { adminLogout(); setAuthed(false); }}
            className="flex items-center gap-1.5 text-xs text-muted-foreground"
          >
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </header>

        {/* Page header */}
        <div className="border-b border-border bg-white px-8 py-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-xl font-semibold text-primary">
                {tab === "blog" ? "Blog Posts" : "Testimonials"}
              </h1>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {tab === "blog"
                  ? `${posts.length} total · ${publishedCount} published`
                  : `${testimonials.length} total · ${approvedTestimonials} approved`}
              </p>
            </div>

            {/* Mobile tabs */}
            <div className="flex items-center gap-2 lg:hidden">
              {(["blog", "testimonials"] as Tab[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                    tab === t ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"
                  }`}
                >
                  {t === "blog" ? "Blog" : "Testimonials"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto px-8 py-8">
          {tab === "blog" ? (
            <BlogManager posts={posts} onRefresh={refreshData} />
          ) : (
            <TestimonialManager testimonials={testimonials} onRefresh={refreshData} />
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Login screen ─────────────────────────────────────────────────────────────

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (adminLogin(email, password)) {
        onLogin();
      } else {
        setError(true);
        setPassword("");
      }
      setLoading(false);
    }, 400);
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center px-6"
      style={{
        background: "linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0F172A 100%)",
      }}
    >
      {/* Background accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.76 0.13 83) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative w-full max-w-sm">
        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-10 shadow-2xl shadow-black/40">
          {/* Brand */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-[#D4AF37] font-serif text-xl font-bold text-[#0F172A] shadow-lg shadow-[#D4AF37]/40">
              JA
            </div>
            <h1 className="font-serif text-2xl font-semibold text-white">Admin Console</h1>
            <p className="mt-1 text-sm text-white/50">Just Accounting · Secure Access</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="admin-email" className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">
                <Mail className="h-3.5 w-3.5" /> Email
              </label>
              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(false); }}
                required
                className={`w-full rounded-xl border bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 transition-all focus:ring-2 ${
                  error
                    ? "border-red-500/50 focus:border-red-400 focus:ring-red-500/20"
                    : "border-white/15 focus:border-[#D4AF37]/60 focus:ring-[#D4AF37]/15"
                }`}
                placeholder="ts.justaccount@mail.co.uk"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="admin-password" className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">
                <Lock className="h-3.5 w-3.5" /> Password
              </label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                required
                className={`w-full rounded-xl border bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 transition-all focus:ring-2 ${
                  error
                    ? "border-red-500/50 focus:border-red-400 focus:ring-red-500/20"
                    : "border-white/15 focus:border-[#D4AF37]/60 focus:ring-[#D4AF37]/15"
                }`}
                placeholder="••••••••"
                autoComplete="current-password"
              />
              {error && (
                <p className="mt-2 flex items-center gap-1.5 text-xs text-red-400">
                  <AlertCircle className="h-3.5 w-3.5" /> Incorrect email or password.
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded-xl bg-[#D4AF37] py-3.5 text-sm font-semibold text-[#0F172A] shadow-lg shadow-[#D4AF37]/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#D4AF37]/35 disabled:opacity-70"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <p className="mt-6 text-center text-[11px] text-white/25">
            Protected access · Just Accounting Admin
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Blog Manager ─────────────────────────────────────────────────────────────

const CATEGORIES = ["Bookkeeping Tips", "Tax & Compliance", "Business Finance", "News"];

function BlogManager({
  posts,
  onRefresh,
}: {
  posts: BlogPost[];
  onRefresh: () => void;
}) {
  const [editing, setEditing] = useState<BlogPost | null>(null);

  const handleDelete = (id: string) => {
    if (confirm("Delete this post? This cannot be undone.")) {
      deletePost(id);
      onRefresh();
    }
  };

  const handleTogglePublish = (post: BlogPost) => {
    savePost({ ...post, published: !post.published });
    onRefresh();
  };

  if (editing) {
    return (
      <PostEditor
        initial={editing}
        onSave={(p) => { savePost(p); onRefresh(); setEditing(null); }}
        onCancel={() => setEditing(null)}
      />
    );
  }

  return (
    <div>
      {/* Action bar */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-2">
          {["All", "Published", "Draft"].map((f) => (
            <button
              key={f}
              className="rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary first:bg-primary first:text-primary-foreground first:border-primary"
            >
              {f}
            </button>
          ))}
        </div>
        <button
          id="admin-new-post"
          onClick={() =>
            setEditing({
              id: generateId(),
              title: "",
              slug: "",
              excerpt: "",
              content: "",
              contentHtml: "",
              author: "Thilaga",
              date: new Date().toISOString().slice(0, 10),
              published: false,
              category: CATEGORIES[0],
            })
          }
          className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <Plus className="h-4 w-4" /> New Post
        </button>
      </div>

      {posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-white py-24 text-center">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-secondary/60">
            <BookOpen className="h-8 w-8 text-muted-foreground/40" />
          </div>
          <p className="mt-4 font-serif text-xl font-semibold text-primary">No posts yet</p>
          <p className="mt-2 text-sm text-muted-foreground">Create your first blog post to get started.</p>
          <button
            onClick={() => setEditing({
              id: generateId(), title: "", slug: "", excerpt: "", content: "", contentHtml: "",
              author: "Thilaga", date: new Date().toISOString().slice(0, 10),
              published: false, category: CATEGORIES[0],
            })}
            className="mt-6 flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5"
          >
            <Plus className="h-4 w-4" /> Create First Post
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group relative flex items-start gap-5 rounded-2xl border border-border bg-white p-5 shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
            >
              {/* Cover image or placeholder */}
              <div className="flex-shrink-0 hidden sm:block">
                {post.coverImage ? (
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="h-16 w-24 rounded-xl object-cover border border-border"
                  />
                ) : (
                  <div className="h-16 w-24 rounded-xl bg-secondary/60 flex items-center justify-center border border-border">
                    <BookOpen className="h-5 w-5 text-muted-foreground/40" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      post.published
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-amber-50 text-amber-700 border border-amber-200"
                    }`}
                  >
                    {post.published ? (
                      <CheckCircle2 className="h-3 w-3" />
                    ) : (
                      <Clock className="h-3 w-3" />
                    )}
                    {post.published ? "Published" : "Draft"}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-secondary/60 px-2.5 py-0.5 text-xs text-muted-foreground border border-border">
                    <Tag className="h-3 w-3 text-accent" />
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {formatDate(post.date)}
                  </span>
                </div>
                <h3 className="font-semibold text-primary truncate leading-snug">
                  {post.title || <span className="italic text-muted-foreground">Untitled post</span>}
                </h3>
                {post.excerpt && (
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">{post.excerpt}</p>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1.5 flex-shrink-0 opacity-0 transition-opacity group-hover:opacity-100">
                {post.published && (
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    target="_blank"
                    title="View live post"
                    className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-white text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary hover:shadow-sm"
                  >
                    <Eye className="h-3.5 w-3.5" />
                  </Link>
                )}
                <button
                  onClick={() => handleTogglePublish(post)}
                  title={post.published ? "Unpublish" : "Publish"}
                  className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-white text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary hover:shadow-sm"
                >
                  {post.published ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                </button>
                <button
                  onClick={() => setEditing(post)}
                  title="Edit post"
                  className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-white text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary hover:shadow-sm"
                >
                  <Pencil className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  title="Delete post"
                  className="grid h-8 w-8 place-items-center rounded-lg border border-red-200 bg-white text-red-400 transition-colors hover:bg-red-50 hover:text-red-600 hover:shadow-sm"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Post Editor ──────────────────────────────────────────────────────────────

function PostEditor({
  initial,
  onSave,
  onCancel,
}: {
  initial: BlogPost;
  onSave: (p: BlogPost) => void;
  onCancel: () => void;
}) {
  const [post, setPost] = useState<BlogPost>(initial);

  const set = (field: keyof BlogPost, val: string | boolean) =>
    setPost((prev) => ({ ...prev, [field]: val }));

  const handleTitleChange = (v: string) => {
    setPost((prev) => ({
      ...prev,
      title: v,
      slug: prev.slug || slugify(v),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!post.title.trim()) return;
    onSave({ ...post, slug: post.slug || slugify(post.title) });
  };

  return (
    <div>
      {/* Breadcrumb */}
      <button
        onClick={onCancel}
        className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to posts
      </button>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* Main editor */}
          <div className="space-y-5">
            {/* Title */}
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <label htmlFor="post-title" className="admin-label">Post Title *</label>
              <input
                id="post-title"
                value={post.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                required
                className="mt-2 w-full rounded-xl border border-input bg-secondary/30 px-4 py-3 text-lg font-semibold text-primary outline-none transition-all placeholder:font-normal placeholder:text-muted-foreground/50 focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20"
                placeholder="Write a compelling title…"
              />
              <div className="mt-3">
                <label htmlFor="post-slug" className="text-xs text-muted-foreground">
                  URL slug:{" "}
                  <span className="font-mono text-accent">
                    /blog/{post.slug || "your-post-title"}
                  </span>
                </label>
                <input
                  id="post-slug"
                  value={post.slug}
                  onChange={(e) => set("slug", slugify(e.target.value))}
                  className="mt-1.5 w-full rounded-lg border border-input bg-secondary/30 px-3 py-2 font-mono text-xs text-muted-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent/20"
                  placeholder="auto-generated-from-title"
                />
              </div>
            </div>

            {/* Excerpt */}
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <label htmlFor="post-excerpt" className="admin-label">Excerpt *</label>
              <p className="mb-2 text-xs text-muted-foreground">Shown on the blog listing page beneath the title.</p>
              <textarea
                id="post-excerpt"
                value={post.excerpt}
                onChange={(e) => set("excerpt", e.target.value)}
                required
                rows={3}
                className="w-full resize-none rounded-xl border border-input bg-secondary/30 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20"
                placeholder="One or two sentences summarising the article…"
              />
            </div>

            {/* Rich content editor */}
            <div className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden">
              <div className="border-b border-border px-6 pt-5 pb-4">
                <label className="admin-label">Content</label>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Use the toolbar to format text, add images, and embed videos.
                </p>
              </div>
              <div className="p-0">
                <RichEditor
                  value={post.contentHtml || ""}
                  onChange={(html) => setPost((prev) => ({ ...prev, contentHtml: html }))}
                  minHeight={480}
                />
              </div>
            </div>
          </div>

          {/* Sidebar settings */}
          <div className="space-y-4">
            {/* Publish */}
            <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <h3 className="mb-4 font-semibold text-primary text-sm flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-accent" /> Publish Settings
              </h3>
              <div className="space-y-3">
                <label className="flex cursor-pointer items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium text-foreground">Publish</div>
                    <div className="text-xs text-muted-foreground">Visible on the Blog page</div>
                  </div>
                  <div
                    onClick={() => set("published", !post.published)}
                    className={`relative h-6 w-11 rounded-full transition-colors ${
                      post.published ? "bg-emerald-500" : "bg-border"
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                        post.published ? "translate-x-5" : "translate-x-0.5"
                      }`}
                    />
                  </div>
                </label>
              </div>
              <div className="mt-4 space-y-3">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <Check className="h-4 w-4" /> Save Post
                </button>
                <button
                  type="button"
                  onClick={onCancel}
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-border py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  <X className="h-4 w-4" /> Discard
                </button>
              </div>
            </div>

            {/* Metadata */}
            <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <h3 className="mb-4 font-semibold text-primary text-sm flex items-center gap-2">
                <Tag className="h-4 w-4 text-accent" /> Metadata
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="admin-label text-[11px]">Category</label>
                  <select
                    id="post-category"
                    value={post.category}
                    onChange={(e) => set("category", e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-input bg-secondary/30 px-3 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/20"
                  >
                    {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="admin-label text-[11px]">Date</label>
                  <input
                    id="post-date"
                    type="date"
                    value={post.date}
                    onChange={(e) => set("date", e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-input bg-secondary/30 px-3 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label className="admin-label text-[11px]">Author</label>
                  <input
                    value={post.author}
                    onChange={(e) => set("author", e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-input bg-secondary/30 px-3 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/20"
                    placeholder="Author name"
                  />
                </div>
              </div>
            </div>

            {/* Cover image */}
            <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <h3 className="mb-3 font-semibold text-primary text-sm">Cover Image</h3>
              <p className="mb-3 text-xs text-muted-foreground">Thumbnail shown on blog listing (max 2MB).</p>
              {post.coverImage ? (
                <div className="relative">
                  <img src={post.coverImage} alt="cover" className="w-full rounded-xl border border-border object-cover max-h-36" />
                  <button
                    type="button"
                    onClick={() => setPost((prev) => ({ ...prev, coverImage: undefined }))}
                    className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-white/90 text-red-500 shadow-sm transition-colors hover:bg-red-50"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ) : (
                <label
                  htmlFor="post-cover"
                  className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-secondary/30 py-8 text-center transition-colors hover:border-accent/40 hover:bg-accent/5"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-muted-foreground">
                    <Plus className="h-5 w-5" />
                  </div>
                  <div className="text-xs font-medium text-muted-foreground">Click to upload</div>
                  <div className="text-[11px] text-muted-foreground/60">PNG, JPG up to 2MB</div>
                </label>
              )}
              <input
                id="post-cover"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  if (file.size > 2 * 1024 * 1024) { alert("Max 2MB"); return; }
                  const reader = new FileReader();
                  reader.onload = (ev) => setPost((prev) => ({ ...prev, coverImage: ev.target?.result as string }));
                  reader.readAsDataURL(file);
                  e.target.value = "";
                }}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

// ─── Testimonial Manager ──────────────────────────────────────────────────────

function TestimonialManager({
  testimonials,
  onRefresh,
}: {
  testimonials: Testimonial[];
  onRefresh: () => void;
}) {
  const [adding, setAdding] = useState(false);

  const handleDelete = (id: string) => {
    if (confirm("Delete this testimonial?")) {
      deleteTestimonial(id);
      onRefresh();
    }
  };

  const handleToggleApprove = (t: Testimonial) => {
    saveTestimonial({ ...t, approved: !t.approved });
    onRefresh();
  };

  return (
    <div>
      {/* Action bar */}
      <div className="mb-6 flex items-center justify-end">
        <button
          id="admin-new-testimonial"
          onClick={() => setAdding(true)}
          className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <Plus className="h-4 w-4" /> Add Testimonial
        </button>
      </div>

      {/* Add form */}
      {adding && (
        <div className="mb-5">
          <TestimonialForm
            onSave={(t) => { saveTestimonial(t); onRefresh(); setAdding(false); }}
            onCancel={() => setAdding(false)}
          />
        </div>
      )}

      {testimonials.length === 0 && !adding ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-white py-24 text-center">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-secondary/60">
            <MessageSquare className="h-8 w-8 text-muted-foreground/40" />
          </div>
          <p className="mt-4 font-serif text-xl font-semibold text-primary">No testimonials yet</p>
          <p className="mt-2 text-sm text-muted-foreground">Add your first client testimonial.</p>
          <button onClick={() => setAdding(true)} className="mt-6 flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5">
            <Plus className="h-4 w-4" /> Add First Testimonial
          </button>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`group relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md ${
                t.approved ? "border-border" : "border-amber-200 bg-amber-50/30"
              }`}
            >
              {/* Status badge */}
              <div className="mb-3 flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    t.approved
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-amber-50 text-amber-700 border border-amber-200"
                  }`}
                >
                  {t.approved ? <CheckCircle2 className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
                  {t.approved ? "Approved" : "Hidden"}
                </span>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="mt-4 border-t border-border pt-4">
                <div className="text-sm font-semibold text-primary">{t.name}</div>
                <div className="text-xs text-muted-foreground">
                  {t.role}{t.company ? ` · ${t.company}` : ""}
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-4 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                <button
                  onClick={() => handleToggleApprove(t)}
                  className={`flex-1 flex items-center justify-center gap-1.5 rounded-lg border py-2 text-xs font-medium transition-colors ${
                    t.approved
                      ? "border-amber-200 text-amber-600 hover:bg-amber-50"
                      : "border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                  }`}
                >
                  {t.approved ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                  {t.approved ? "Hide" : "Approve"}
                </button>
                <button
                  onClick={() => handleDelete(t.id)}
                  className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg border border-red-200 text-red-400 transition-colors hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function TestimonialForm({
  onSave,
  onCancel,
}: {
  onSave: (t: Testimonial) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState<Testimonial>({
    id: generateId(),
    name: "",
    role: "",
    company: "",
    quote: "",
    stars: 5,
    date: new Date().toISOString().slice(0, 10),
    approved: true,
  });

  const set = (field: keyof Testimonial, val: string | number | boolean) =>
    setForm((prev) => ({ ...prev, [field]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.quote.trim()) return;
    onSave(form);
  };

  return (
    <div className="rounded-2xl border border-accent/30 bg-white p-7 shadow-sm">
      <h3 className="font-serif text-lg font-semibold text-primary mb-5 flex items-center gap-2">
        <MessageSquare className="h-5 w-5 text-accent" />
        Add New Testimonial
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="admin-label">Client Name *</label>
            <input id="t-name" value={form.name} onChange={(e) => set("name", e.target.value)} required
              className="admin-input mt-1.5" placeholder="e.g. Sarah M." autoFocus />
          </div>
          <div>
            <label className="admin-label">Role / Job Title</label>
            <input id="t-role" value={form.role} onChange={(e) => set("role", e.target.value)}
              className="admin-input mt-1.5" placeholder="e.g. Business Owner" />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="admin-label">Company / Location</label>
            <input id="t-company" value={form.company} onChange={(e) => set("company", e.target.value)}
              className="admin-input mt-1.5" placeholder="e.g. London" />
          </div>
          <div>
            <label className="admin-label">Star Rating</label>
            <select id="t-stars" value={form.stars} onChange={(e) => set("stars", Number(e.target.value))}
              className="admin-input mt-1.5">
              {[5, 4, 3, 2, 1].map((n) => (
                <option key={n} value={n}>{n} star{n !== 1 ? "s" : ""}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="admin-label">Testimonial Quote *</label>
          <textarea id="t-quote" value={form.quote} onChange={(e) => set("quote", e.target.value)}
            required rows={3} className="admin-input mt-1.5 resize-none"
            placeholder="What the client said…" />
        </div>
        <div className="flex items-center gap-3">
          <div
            onClick={() => set("approved", !form.approved)}
            className={`relative h-5 w-9 cursor-pointer rounded-full transition-colors ${form.approved ? "bg-emerald-500" : "bg-border"}`}
          >
            <div className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${form.approved ? "translate-x-4" : "translate-x-0.5"}`} />
          </div>
          <label className="text-sm font-medium text-foreground cursor-pointer" onClick={() => set("approved", !form.approved)}>
            Show on public Testimonials page
          </label>
        </div>
        <div className="flex gap-3 border-t border-border pt-4">
          <button type="submit"
            className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5">
            <Check className="h-4 w-4" /> Save Testimonial
          </button>
          <button type="button" onClick={onCancel}
            className="flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            <X className="h-4 w-4" /> Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
