

## Convert RankTomorrow to a True Static HTML Website

This plan converts the existing React-based application into a pure static HTML/SCSS/Vanilla JS website with no framework dependencies, no routing, and no build system required.

---

### Overview

**Current State:**
- React SPA with 20 pages in `src/pages/`
- Uses React Router for client-side navigation
- Requires Vite/Node to build and run
- Partial static files exist in `static/` (index.html, 1 article, CSS, JS)

**Target State:**
- 25+ individual `.html` files
- All links point to real `.html` files (e.g., `href="/blog.html"`)
- Works by opening any HTML file directly in browser
- No Node.js, no build steps, no server required

---

### Complete File Structure

```text
/static
  /articles
    ai-content-optimization.html
    keyword-clustering.html
    technical-seo-audit.html
    seo-strategy-framework-2025.html
    ...
  /assets
    /images
      placeholder-1.svg
      placeholder-2.svg
      placeholder-3.svg
      og-image.png
    favicon.ico
  /css
    main.css
  /js
    main.js
    cookie-consent.js
  /scss
    (source files for reference)
  /tools
    seo-title-generator.html
    meta-description-generator.html
    content-outline-generator.html
    keyword-grouping.html
    rich-snippet-generator.html
    keyword-seed-generator.html
  /topics
    seo-strategy.html
    keyword-research.html
    ai-automation.html
    content-marketing.html
    google-search.html
  index.html
  blog.html
  about.html
  editorial-team.html
  tools.html
  recommended-tools.html
  search.html
  ai-automation-articles.html
  privacy-policy.html
  cookie-policy.html
  404.html
```

---

### Pages to Create

| File | Source | Description |
|------|--------|-------------|
| `index.html` | EXISTS | Homepage (already created) |
| `blog.html` | `Blog.tsx` | Blog listing with articles grid |
| `about.html` | `About.tsx` | About RankTomorrow page |
| `editorial-team.html` | NEW | Editorial team page |
| `tools.html` | `Tools.tsx` | SEO tools hub |
| `recommended-tools.html` | `RecommendedTools.tsx` | Third-party software recommendations |
| `search.html` | `SearchResults.tsx` | Search results page |
| `ai-automation-articles.html` | `AiAutomationArticles.tsx` | AI topic article archive |
| `privacy-policy.html` | NEW | Privacy policy |
| `cookie-policy.html` | NEW | Cookie policy |
| `404.html` | `NotFound.tsx` | Error page |

**Topic Pillar Pages (in `/topics/`):**

| File | Source |
|------|--------|
| `seo-strategy.html` | `SeoStrategy.tsx` |
| `keyword-research.html` | `KeywordResearch.tsx` |
| `ai-automation.html` | `AiAutomation.tsx` |
| `content-marketing.html` | `ContentMarketing.tsx` |
| `google-search.html` | `GoogleSearch.tsx` |

**Tool Pages (in `/tools/`):**

| File | Source |
|------|--------|
| `seo-title-generator.html` | `SeoTitleGenerator.tsx` |
| `meta-description-generator.html` | `MetaDescriptionGenerator.tsx` |
| `content-outline-generator.html` | `ContentOutlineGenerator.tsx` |
| `keyword-grouping.html` | `KeywordGroupingTool.tsx` |
| `rich-snippet-generator.html` | `RichSnippetGenerator.tsx` |
| `keyword-seed-generator.html` | `KeywordSeedGenerator.tsx` |

---

### Navigation Links Update

All navigation links will be converted from React Router paths to real file paths:

| Current (React) | Static |
|-----------------|--------|
| `/blog` | `/blog.html` |
| `/about` | `/about.html` |
| `/tools` | `/tools.html` |
| `/recommended-tools` | `/recommended-tools.html` |
| `/topics/seo-strategy` | `/topics/seo-strategy.html` |
| `/tools/seo-title-generator` | `/tools/seo-title-generator.html` |

---

### JavaScript Functionality

Vanilla JS will handle only:
- Mobile menu toggle
- Dropdown menus (hover/click)
- Search modal (open/close, demo search)
- Newsletter modal (open/close, form submission)
- Accordion expand/collapse (FAQ sections)
- Cookie consent banner
- Tool demo outputs (form handling, copy to clipboard)

**No page routing via JavaScript.**

---

### Technical Details

**Shared Components (HTML Partials):**

Each page will include:
1. **Header** - Logo, navigation, search/newsletter buttons, mobile menu
2. **Footer** - Brand info, column links, newsletter form, legal links
3. **Cookie Consent Banner** - GDPR-compliant popup
4. **Search Modal** - Keyboard-accessible search overlay
5. **Newsletter Modal** - Email capture popup

These are duplicated in each HTML file (standard for static sites).

**CSS:**
- Single compiled `main.css` file (already exists)
- No SCSS compilation required for deployment

**JavaScript:**
- `main.js` - Core interactivity (menus, modals, accordions)
- `cookie-consent.js` - GDPR consent management

---

### Tool Pages - Interactive Demo Logic

Each tool page will have Vanilla JS for:
- Form input handling
- Demo output generation (client-side only)
- Copy to clipboard functionality
- Toast notifications

Example for SEO Title Generator:
```javascript
// In /tools/seo-title-generator.html
function generateTitles() {
  const keyword = document.getElementById('primaryKeyword').value;
  const templates = [
    `7 Best ${keyword} for SEO in 2025`,
    `${keyword}: Complete Guide`,
    // ... more templates
  ];
  displayResults(templates);
}
```

---

### Implementation Order

1. **Core Pages** (7 files)
   - blog.html
   - about.html
   - editorial-team.html
   - tools.html
   - recommended-tools.html
   - search.html
   - 404.html

2. **Topic Pillar Pages** (5 files)
   - topics/seo-strategy.html
   - topics/keyword-research.html
   - topics/ai-automation.html
   - topics/content-marketing.html
   - topics/google-search.html

3. **Tool Pages** (6 files)
   - tools/seo-title-generator.html
   - tools/meta-description-generator.html
   - tools/content-outline-generator.html
   - tools/keyword-grouping.html
   - tools/rich-snippet-generator.html
   - tools/keyword-seed-generator.html

4. **Supporting Pages** (3 files)
   - ai-automation-articles.html
   - privacy-policy.html
   - cookie-policy.html

5. **Update Existing Files**
   - Update index.html links to use .html extensions
   - Update ai-content-optimization.html links

---

### Export Package

The final deliverable will be the complete `/static` folder containing:
- All HTML pages (25+ files)
- Compiled CSS
- Vanilla JavaScript
- Assets (images, favicon)
- SCSS source files (for reference)

**To Use:**
1. Download/export the `/static` folder
2. Open `index.html` in any browser
3. All navigation works via direct file links

---

### What Gets Removed

The React application files are not needed for the static site but will remain in the project:
- `src/` folder (React components and pages)
- `package.json`, `node_modules`
- Vite configuration
- React dependencies

The static site lives entirely in the `/static` folder.

