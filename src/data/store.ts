/**
 * Central data store using localStorage.
 * Both blog posts and testimonials are managed here.
 */

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;       // legacy plain-text (kept for backward compat)
  contentHtml: string;   // rich HTML from the editor (source of truth)
  author: string;
  date: string;          // ISO date string
  published: boolean;
  category: string;
  coverImage?: string;   // optional base64 or URL for listing card thumbnail
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  stars: number;
  date: string;
  approved: boolean;
}

const BLOG_KEY = "ja_blog_posts";
const TESTIMONIALS_KEY = "ja_testimonials";

// ─── Default seed data ──────────────────────────────────────────────────────

const DEFAULT_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "What is Making Tax Digital (MTD) and What Does It Mean for Your Business?",
    slug: "what-is-making-tax-digital",
    excerpt:
      "HMRC's Making Tax Digital initiative is changing the way businesses keep records and submit VAT returns. Here's what you need to know.",
    content: "",
    contentHtml: `<p>Making Tax Digital (MTD) is HMRC's programme to move the UK tax system online. It's already mandatory for VAT-registered businesses above the threshold — and it's expanding.</p>
<h2>What does MTD mean in practice?</h2>
<p>Under MTD, you must keep digital records and submit returns using HMRC-compatible software. You can no longer submit VAT returns manually through the HMRC website.</p>
<h2>Who does it affect?</h2>
<ul>
  <li>All VAT-registered businesses (above and below the £85,000 threshold)</li>
  <li>MTD for Income Tax Self Assessment (ITSA) is coming for sole traders and landlords</li>
</ul>
<h2>What software is compatible?</h2>
<p>Popular MTD-compatible software includes <strong>Xero</strong>, <strong>Sage</strong>, <strong>QuickBooks</strong>, and <strong>FreeAgent</strong> — all of which we work with at Just Accounting.</p>
<h2>Don't worry — we can help</h2>
<p>If you're unsure whether your records are MTD-compliant, or you'd like us to handle your VAT returns, get in touch for a free consultation.</p>`,
    author: "Thilaga",
    date: "2024-11-15",
    published: true,
    category: "Tax & Compliance",
  },
  {
    id: "2",
    title: "5 Bookkeeping Habits That Will Save You Time at Year End",
    slug: "bookkeeping-habits-year-end",
    excerpt:
      "Good bookkeeping habits throughout the year mean no last-minute scramble when your accountant asks for records. Here are five simple things you can do.",
    content: "",
    contentHtml: `<p>Year-end stress is almost always caused by poor record-keeping during the year. Here are five habits that will make life much easier.</p>
<h2>1. Reconcile your bank account monthly</h2>
<p>Don't leave bank reconciliation until the end of the year. A monthly reconciliation catches errors early and keeps your records accurate.</p>
<h2>2. Keep receipts organised digitally</h2>
<p>Use an app like <strong>Dext</strong> or <strong>Hubdoc</strong> to photograph receipts as you receive them. No more hunting for paper at year end.</p>
<h2>3. Separate business and personal finances</h2>
<p>If you're a sole trader or director, having a dedicated business bank account makes bookkeeping dramatically simpler.</p>
<h2>4. Issue and chase invoices promptly</h2>
<p>Late invoices become confusing entries. Issue invoices as soon as work is complete and follow up on late payments.</p>
<h2>5. Review your P&amp;L monthly</h2>
<p>Even a brief monthly review of your profit and loss will help you spot anomalies early and make better business decisions.</p>
<hr/>
<p>If you'd like someone to handle all of this for you, that's exactly what we do at Just Accounting. Get in touch for a free chat.</p>`,
    author: "Thilaga",
    date: "2024-10-08",
    published: true,
    category: "Bookkeeping Tips",
  },
];

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah M.",
    role: "Business Owner",
    company: "London",
    quote:
      "Reliable bookkeeping support and excellent communication. We always know exactly what's been done and when.",
    stars: 5,
    date: "2024-10-01",
    approved: true,
  },
  {
    id: "2",
    name: "James R.",
    role: "Practice Manager",
    company: "Manchester",
    quote:
      "A real person who actually answers. No ticket systems, no delays. Our backlog was cleared in weeks.",
    stars: 5,
    date: "2024-09-15",
    approved: true,
  },
  {
    id: "3",
    name: "Priya K.",
    role: "Firm Partner",
    company: "Birmingham",
    quote:
      "Finally, transparent pricing and work we can trust. Just Accounting has become an invaluable part of our team.",
    stars: 5,
    date: "2024-08-20",
    approved: true,
  },
];

// ─── Blog helpers ────────────────────────────────────────────────────────────

const SCHEMA_VERSION = "v2"; // bump when seed data changes
const SCHEMA_VERSION_KEY = "ja_blog_schema";

export function getPosts(): BlogPost[] {
  if (typeof window === "undefined") return DEFAULT_POSTS;

  // ── Schema migration ──────────────────────────────────────────────────────
  // If the stored schema version is older than current, wipe and re-seed so
  // posts always have the latest fields (contentHtml, coverImage, etc.).
  const storedVersion = localStorage.getItem(SCHEMA_VERSION_KEY);
  if (storedVersion !== SCHEMA_VERSION) {
    // Merge: keep any user-created posts (id not in DEFAULT_POSTS),
    // but replace seed posts with the updated versions.
    const raw = localStorage.getItem(BLOG_KEY);
    const existing: BlogPost[] = raw ? (JSON.parse(raw) as BlogPost[]) : [];
    const defaultIds = new Set(DEFAULT_POSTS.map((p) => p.id));
    const userPosts = existing.filter((p) => !defaultIds.has(p.id));
    const merged = [...DEFAULT_POSTS, ...userPosts];
    localStorage.setItem(BLOG_KEY, JSON.stringify(merged));
    localStorage.setItem(SCHEMA_VERSION_KEY, SCHEMA_VERSION);
    return merged;
  }

  const raw = localStorage.getItem(BLOG_KEY);
  if (!raw) {
    localStorage.setItem(BLOG_KEY, JSON.stringify(DEFAULT_POSTS));
    localStorage.setItem(SCHEMA_VERSION_KEY, SCHEMA_VERSION);
    return DEFAULT_POSTS;
  }

  // ── Field migration: ensure every post has contentHtml ───────────────────
  const posts = JSON.parse(raw) as BlogPost[];
  let dirty = false;
  for (const p of posts) {
    if (!p.contentHtml) {
      // Upgrade from the default seed if available, else convert plain text
      const seed = DEFAULT_POSTS.find((d) => d.id === p.id);
      if (seed) {
        p.contentHtml = seed.contentHtml;
      } else if (p.content) {
        // Wrap plain text paragraphs in <p> tags
        p.contentHtml = p.content
          .split(/\n\n+/)
          .filter(Boolean)
          .map((block) => `<p>${block.replace(/\n/g, "<br>")}</p>`)
          .join("\n");
      }
      dirty = true;
    }
  }
  if (dirty) {
    localStorage.setItem(BLOG_KEY, JSON.stringify(posts));
  }

  return posts;
}

export function getPublishedPosts(): BlogPost[] {
  return getPosts().filter((p) => p.published);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getPosts().find((p) => p.slug === slug);
}

export function savePost(post: BlogPost): void {
  const posts = getPosts();
  const idx = posts.findIndex((p) => p.id === post.id);
  if (idx >= 0) {
    posts[idx] = post;
  } else {
    posts.unshift(post);
  }
  try {
    localStorage.setItem(BLOG_KEY, JSON.stringify(posts));
  } catch (e) {
    // localStorage quota exceeded (usually caused by very large base64 images)
    alert(
      "Could not save: the post content (including images) is too large for browser storage.\n\n" +
      "Tip: compress your images to under 500KB before uploading."
    );
    throw e;
  }
}

export function deletePost(id: string): void {
  const posts = getPosts().filter((p) => p.id !== id);
  localStorage.setItem(BLOG_KEY, JSON.stringify(posts));
}

// ─── Testimonial helpers ─────────────────────────────────────────────────────

export function getTestimonials(): Testimonial[] {
  if (typeof window === "undefined") return DEFAULT_TESTIMONIALS;
  const raw = localStorage.getItem(TESTIMONIALS_KEY);
  if (!raw) {
    localStorage.setItem(TESTIMONIALS_KEY, JSON.stringify(DEFAULT_TESTIMONIALS));
    return DEFAULT_TESTIMONIALS;
  }
  return JSON.parse(raw) as Testimonial[];
}

export function getApprovedTestimonials(): Testimonial[] {
  return getTestimonials().filter((t) => t.approved);
}

export function saveTestimonial(t: Testimonial): void {
  const list = getTestimonials();
  const idx = list.findIndex((x) => x.id === t.id);
  if (idx >= 0) {
    list[idx] = t;
  } else {
    list.unshift(t);
  }
  localStorage.setItem(TESTIMONIALS_KEY, JSON.stringify(list));
}

export function deleteTestimonial(id: string): void {
  const list = getTestimonials().filter((t) => t.id !== id);
  localStorage.setItem(TESTIMONIALS_KEY, JSON.stringify(list));
}

// ─── Admin auth ──────────────────────────────────────────────────────────────

const ADMIN_EMAIL = "ts.justaccount@mail.co.uk";
const ADMIN_PASSWORD = "Hitesh@098!";
const AUTH_KEY = "ja_admin_auth";

export function isAdminAuthenticated(): boolean {
  return localStorage.getItem(AUTH_KEY) === "true";
}

export function adminLogin(email: string, password: string): boolean {
  if (email.trim().toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    localStorage.setItem(AUTH_KEY, "true");
    return true;
  }
  return false;
}

export function adminLogout(): void {
  localStorage.removeItem(AUTH_KEY);
}

// ─── Utils ───────────────────────────────────────────────────────────────────

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
