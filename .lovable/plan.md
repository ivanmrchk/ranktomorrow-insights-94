

## SEO URL Slug Generator - Mockup Tool Page

### Overview
Create a new front-end-only mockup tool page at `/tools/seo-slug-generator` that visually demonstrates an SEO URL slug generator, following the exact same patterns used by the existing tool pages (SeoTitleGenerator, KeywordSeedGenerator, etc.).

### What Gets Built

**New file:** `src/pages/SeoSlugGenerator.tsx`

A single React page component containing:

1. **Hero Section** - "Free SEO Tool" badge, title "SEO URL Slug Generator" with gradient text, subtitle about generating clean, keyword-rich URL slugs.

2. **Input Form** (Card component, same layout as other tools):
   - **Primary Keyword** (required) - text input, placeholder: "e.g. ai seo automation"
   - **Article Title** (optional) - text input, placeholder: "e.g. 10 Proven AI SEO Automation Tactics That Skyrocket Rankings"
   - **Strategy Mode** - Select dropdown with options: Short & Clean (default), Keyword-Rich, Local SEO Optimized, Evergreen, Include Year, Comparison
   - **"Generate SEO Slug"** button with Sparkles icon, styled identically to other tool CTAs

3. **Static Demo Results Section** (always visible with "Demo Output" badge):
   - **Primary slug highlight** - `/ai-seo-automation-guide/` displayed in a prominent accent-bordered card with a copy button (functional via clipboard API)
   - **3-4 alternative slugs** listed below: `/ai-seo-automation-tactics/`, `/best-ai-seo-automation/`, `/ai-seo-automation-strategies-2025/`, `/ai-seo-automation-tips/`
   - **SEO Analysis Panel** - a small grid/card showing mock metrics:
     - Character Length: 27
     - Word Count: 4
     - Stopwords Removed: 2
     - Year Detected: No
     - Keyword Inclusion: High
     - SEO Score: 92/100 (with a progress bar or badge)

4. **Explanation Section** - "Why URL Slugs Matter for SEO" with 3 feature cards (same pattern as KeywordSeedGenerator's explanation section)

5. **Related Tools Section** - Links to SEO Title Generator, Meta Description Generator, Content Outline Generator, Keyword Research Guide

### Routing & Navigation Updates

**Modified file:** `src/App.tsx`
- Import `SeoSlugGenerator`
- Add route: `<Route path="/tools/seo-slug-generator" element={<SeoSlugGenerator />} />`

**Modified file:** `src/pages/Tools.tsx`
- Add the new tool to the `tools` array with `Link2` icon, name "SEO URL Slug Generator", description, and href `/tools/seo-slug-generator`

### Technical Details

- Uses the same imports and component library as sibling tools: `motion` (framer-motion), `Header`, `Footer`, `Card`, `CardContent`, `Button`, `Input`, `Label`, `Select`, `Badge`, lucide-react icons (`Link2`, `Copy`, `Check`, `Sparkles`, `ArrowRight`)
- Form submit handler shows a toast and swaps "Demo Output" badge away (same pattern as SeoTitleGenerator)
- Copy button uses `navigator.clipboard.writeText` with toast feedback
- All styling uses existing Tailwind classes: `bg-accent/5`, `border-accent/30`, `gradient-text`, `container-custom`, etc.
- Fully responsive with the same `max-w-4xl mx-auto` container and `grid md:grid-cols-2` patterns
- No new dependencies required

