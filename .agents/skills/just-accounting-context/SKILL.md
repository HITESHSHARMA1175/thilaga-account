---
name: just-accounting-context
description: >
  Project context cheatsheet for the Just Accounting / Account Buddy Spark
  website. Use whenever working on this Lovable-connected React/TanStack project.
  Contains file structure, client brief, design direction, and redesign plan.
---

# Just Accounting — Project Context

## Stack
- **Framework**: React + TanStack Router (file-based routing via `src/routes/`)
- **Styling**: Tailwind CSS + shadcn/ui (`src/styles.css`)
- **Connected to**: [Lovable](https://lovable.dev) — do NOT rewrite published git history (no force push / rebase of pushed commits)
- **Dev server**: `bun run dev` or `npm run dev`

## Key File Locations

| Purpose | Path |
|---|---|
| Homepage | `src/routes/index.tsx` |
| About page | `src/routes/about.tsx` |
| Contact page | `src/routes/contact.tsx` |
| For Business page | `src/routes/for-business.tsx` |
| For Firms page | `src/routes/for-firms.tsx` |
| Site Header | `src/components/site/SiteHeader.tsx` |
| Site Footer | `src/components/site/SiteFooter.tsx` |
| Root layout | `src/routes/__root.tsx` |
| Global styles | `src/styles.css` |
| shadcn/ui components | `src/components/ui/` |

## Client Brief (Just Accounting / Thilaga)
- **Owner**: Thilaga — ACCA Qualified, 10+ Years Experience, UK Based
- **Positioning**: "One dedicated bookkeeper for your business" — personal service, direct contact, no call centres
- **Two audiences**:
  1. **Accounting Firms** — Capacity support, backlog clearance, VAT preparation
  2. **Business Owners** — Monthly bookkeeping, VAT returns, MTD compliance
- **Key differentiator**: You always speak to the same person (Thilaga), not a ticket system

## Agreed Design Direction

### Color Palette
```
Primary (Navy):   #0F172A
Gold Accent:      #D4AF37
Background:       #FAFAF8
Body Text:        #1E293B
```

### Typography
- Google Fonts: **Inter** or **Outfit** (premium, modern)

### Homepage Section Order
```
Hero → Trust Badges → Meet Thilaga → Services → Why Choose Just Accounting → Testimonials → Latest News → Book Consultation → Footer
```

### Hero Section Copy
- **Headline**: "One Dedicated Bookkeeper for Your Business."
- **Subheadline**: "Reliable bookkeeping support for UK businesses and accountancy firms. No call centres, no ticket systems, and no repeating yourself every time you need help."
- **CTAs**: "Book Free Consultation" + "Chat on WhatsApp"
- **Right side**: Founder photo (Thilaga) + trust card (ACCA Qualified, 10+ Years, UK Based)

### Trust Badges (below hero)
- 10+ Years Experience | ACCA Qualified | UK Based | One Dedicated Contact

### Design Principles
- Large spacing: `py-24` not `py-12`
- `max-w-7xl mx-auto px-6 lg:px-8`
- Hover effects on service cards + Framer Motion fade-up on scroll
- Mobile-first: check nav, hero text size, CTA visibility

## Reference Websites (Design Inspiration)
| Site | Why |
|---|---|
| [bench.co](https://www.bench.co) | Trust-focused layout, CTA placement |
| [pilot.com](https://pilot.com) | Premium typography, modern service presentation |
| [mazumausa.com](https://mazumausa.com) | Bookkeeping-focused, clear pricing |
| [crunch.co.uk](https://www.crunch.co.uk) | Modern UK accounting brand, SEO structure |
| [Xero Partner Directory](https://www.xero.com/uk/advisors/) | Target audience examples |

## Redesign Prompt for Lovable
> Redesign the website to feel like a premium UK accounting and bookkeeping firm. Use a modern, professional layout with strong visual hierarchy, larger spacing, premium typography, trust indicators, founder-focused branding, and high conversion CTAs. Use navy blue, gold accents, and white backgrounds. Move the founder section higher, add trust badges, improve service cards, create a premium consultation section, improve mobile responsiveness, and make the overall design comparable to a high-end professional services website.

## Lovable Project Settings Location
- Top-left dropdown next to project name → **Settings / Integrations / GitHub**
- Or: ☰ hamburger menu (top-left) → Settings
- Or: **Publish** button (top-right) → Custom Domain / GitHub Sync
- Or: `</>` Code icon (top-centre) → Repository / Connect GitHub
