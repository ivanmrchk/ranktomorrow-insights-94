
# Plan: Add Editorial Team Page Styles to Static CSS

## Problem
The Editorial Team page (`static/editorial-team.html`) displays as raw unstyled HTML because the CSS classes it uses (`.content-block`, `.process-step`, `.content-list`, etc.) don't exist in the compiled `static/css/main.css` file.

The SCSS file `static/scss/components/_content-block.scss` was created but never compiled into the main CSS file since this is a static site without a build step.

---

## Solution
Manually add the compiled CSS for the content-block component to `static/css/main.css`.

---

## Implementation Steps

### Step 1: Add Content Block Styles to main.css
Append the following CSS classes to `static/css/main.css`:

| Class | Purpose |
|-------|---------|
| `.content-block` | Base container for content sections |
| `.content-block__header` | Icon + title header layout |
| `.content-block__icon` | Styled icon container with accent background |
| `.content-block__title` | Section heading typography |
| `.content-block__body` | Body text with proper spacing |
| `.content-block--highlight` | Gradient background variant for AI Disclosure |
| `.content-list` | Styled bullet list |
| `.content-subheading` | Sub-section headings |
| `.process-steps` | Container for editorial process |
| `.process-step` | Individual step with number badge |
| `.container--narrow` | Narrower max-width container (720px) |
| `.section--muted` | Muted background section |
| `.text-center` | Text alignment utility |
| `.mt-6` | Margin-top utility |

---

## Technical Details

The CSS will include:
- Flexbox layouts for header and process steps
- Gradient backgrounds using the site's accent colors (blue/purple)
- Responsive typography adjustments for mobile/desktop
- Proper spacing using the site's established spacing scale
- Transition effects for hover states

All styles will follow the existing BEM naming convention and use the same CSS variable values (HSL colors, font sizes, spacing) already present in `main.css`.

---

## Files to Modify

| File | Change |
|------|--------|
| `static/css/main.css` | Append ~200 lines of content-block component CSS |

---

## Result
After this change, the Editorial Team page will display with proper styling matching the rest of the site - professional, editorial, trust-focused design with the numbered process steps, highlighted AI disclosure section, and consistent typography.
