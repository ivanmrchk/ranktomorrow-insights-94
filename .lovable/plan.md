

## AI Tools Coming Soon Landing Page

### Overview
Create a new page at `/coming-soon` (replacing the existing standalone dark-themed version) that uses the site's existing `Header` and `Footer` components. The page announces upcoming AI tools with a modern SaaS launch aesthetic (light theme matching the rest of the site) and focuses on email signup collection.

### File Changes

**Replace: `src/pages/ComingSoon.tsx`**

Complete rewrite as a standard site page wrapping content in `Header` + `Footer`, with 5 sections:

1. **Launch Announcement Hero** — Large bold headline, subheadline, email signup form with toast confirmation, subtle gradient background accent
2. **Product Vision** — "A New Workflow for Modern SEO" with two paragraphs, clean centered layout
3. **Upcoming AI Tools Grid** — 6 non-clickable `Card` components in a responsive grid (2-3 cols), each with tool name, description, and a "Coming Soon" `Badge`. Tools: URL Path Generator, Meta Description Writer, Keyword Cluster Generator, Topical Authority Builder, SEO Content Brief Generator, Internal Linking Assistant
4. **Early Access Program** — Benefits list (beta access, priority releases, early updates) + second email signup form
5. **Development Status** — Short status message section

**Tech approach:**
- Uses existing components: `Header`, `Footer`, `Card`, `CardContent`, `Button`, `Input`, `Badge`, `motion` (framer-motion)
- Icons from `lucide-react` (Link2, FileText, Layers, Map, FileCheck, Network, Sparkles, Zap, Mail)
- `useState` + `toast` for email form handling
- Consistent with existing page patterns (see `Tools.tsx`, `Index.tsx`)
- Hover animations on cards via `motion.div` whileHover
- No links on tool cards — purely presentational

**No changes needed to `src/App.tsx`** — the `/coming-soon` route already exists.

