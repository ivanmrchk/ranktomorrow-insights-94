

## Create a Previewable Coming Soon Page

### Problem
The `static/coming-soon.blade.php` file uses Laravel Blade syntax and cannot be rendered in Lovable's React-based preview.

### Solution
Create a React version of the Coming Soon page at `/coming-soon` that mirrors the exact same design, so it can be previewed live in Lovable. The existing Blade file remains unchanged for Laravel deployment.

### New File: `src/pages/ComingSoon.tsx`

A standalone React component replicating the Blade template's design:

- **Styling**: Dark gradient background (`#0a0e1a` to `#111827`), subtle grid overlay, ambient teal glow blobs, Inter font
- **Hero section**: "RankTomorrow is Launching Soon." headline with teal gradient text, subheadline, supporting paragraph
- **Waitlist form**: Email input + "Join the Waitlist" button (form submit shows a toast confirmation), "No spam. Early access only." microcopy
- **Feature cards**: Three glass-morphism cards (AI Keyword Clustering, Content Architecture Engine, Automation Workflows) with teal icon containers and hover effects
- **Footer**: "RankTomorrow" text logo + copyright with current year
- **Full-page layout**: Uses `min-h-screen`, independent of the app's Header/Footer — completely self-contained

### Modified File: `src/App.tsx`

- Import `ComingSoon` component
- Add route: `<Route path="/coming-soon" element={<ComingSoon />} />`

### After implementation
Navigate to `/coming-soon` in the preview to see the live rendered page.

