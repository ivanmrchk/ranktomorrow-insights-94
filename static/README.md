# RankTomorrow Static Site

A production-ready static website for RankTomorrow, built with pure HTML, SCSS, and vanilla JavaScript.

## 📁 Folder Structure

```
static/
├── index.html              # Homepage
├── blog.html               # Blog listing page
├── about.html              # About page
├── tools.html              # Tools listing page
├── recommended-tools.html  # Recommended software page
├── search.html             # Search results page
│
├── articles/               # Article pages
│   └── ai-content-optimization.html
│
├── topics/                 # Topic pillar pages
│   ├── seo-strategy.html
│   ├── keyword-research.html
│   ├── ai-automation.html
│   ├── content-marketing.html
│   └── google-search.html
│
├── tools/                  # Individual tool pages
│   ├── seo-title-generator.html
│   ├── meta-description-generator.html
│   ├── content-outline-generator.html
│   ├── keyword-grouping.html
│   ├── rich-snippet-generator.html
│   └── keyword-seed-generator.html
│
├── scss/                   # SCSS source files
│   ├── main.scss           # Main entry point
│   ├── utilities/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   └── _reset.scss
│   ├── layout/
│   │   └── _container.scss
│   ├── components/
│   │   ├── _header.scss
│   │   ├── _footer.scss
│   │   ├── _buttons.scss
│   │   ├── _cards.scss
│   │   ├── _hero.scss
│   │   ├── _section-header.scss
│   │   ├── _badge.scss
│   │   ├── _newsletter.scss
│   │   ├── _modal.scss
│   │   ├── _accordion.scss
│   │   ├── _forms.scss
│   │   └── _ads.scss
│   └── pages/
│       └── _article.scss
│
├── css/                    # Compiled CSS
│   └── main.css            # Compiled from SCSS
│
├── js/                     # JavaScript files
│   └── main.js             # Main JS functionality
│
└── assets/                 # Static assets
    ├── images/
    │   ├── placeholder-1.svg
    │   ├── placeholder-2.svg
    │   └── placeholder-3.svg
    └── favicon.ico
```

## 🛠 Building CSS from SCSS

### Prerequisites
- Node.js 16+ or
- Dart Sass

### Compile SCSS

Using npm/npx:
```bash
npx sass scss/main.scss css/main.css --style compressed
```

Using Dart Sass directly:
```bash
sass scss/main.scss css/main.css --style compressed
```

For development with watch mode:
```bash
npx sass scss/main.scss css/main.css --watch
```

## 🎨 Design System

### Colors (HSL)
- **Accent**: `hsl(217, 91%, 50%)` - Primary blue
- **Highlight**: `hsl(280, 80%, 55%)` - Purple accent
- **Background**: `hsl(0, 0%, 100%)` - White
- **Secondary**: `hsl(240, 4.8%, 95.9%)` - Light gray
- **Foreground**: `hsl(240, 10%, 3.9%)` - Near black

### Typography
- **Sans-serif**: Inter
- **Monospace**: JetBrains Mono

### BEM Naming Convention
```scss
.block {}
.block__element {}
.block--modifier {}

// Example:
.card {}
.card__title {}
.card__meta {}
.card--featured {}
```

## 📱 Responsive Breakpoints

```scss
$breakpoint-sm: 640px;   // Small devices
$breakpoint-md: 768px;   // Tablets
$breakpoint-lg: 1024px;  // Desktop
$breakpoint-xl: 1280px;  // Large desktop
$breakpoint-2xl: 1536px; // Extra large
```

## 🚀 Deployment

### Static Hosting
Simply upload the entire `static/` folder to any static host:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Traditional web hosting

### WordPress Integration
1. Create a WordPress theme
2. Convert HTML to PHP templates
3. Move `css/`, `js/`, and `assets/` to theme directory
4. Update asset paths with `<?php echo get_template_directory_uri(); ?>`

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Proper heading hierarchy
- Alt text on images

## 🔍 SEO Features

- Semantic HTML structure
- JSON-LD structured data (Article, FAQ, Breadcrumb)
- Open Graph meta tags
- Twitter Card meta tags
- Proper heading hierarchy (H1 → H6)
- Meta descriptions
- Canonical URLs ready

## 📊 Performance

- Lazy loading images (`loading="lazy"`)
- Preconnect to external fonts
- Minimal JavaScript (vanilla JS only)
- CSS optimized with SCSS compilation
- No framework overhead

## 🔧 JavaScript Features

- Mobile menu toggle
- Dropdown navigation
- Search modal with live search
- Newsletter modal
- Accordion expand/collapse
- Smooth scroll for anchor links
- Copy to clipboard utility
- Toast notifications

## 📄 License

MIT License - Feel free to use for personal and commercial projects.
