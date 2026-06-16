# Arusuvai — Contemporary Dining Restaurant Website

A beautiful, production-ready marketing website for Arusuvai, a contemporary dining restaurant that honors tradition while embracing modern culinary techniques.

## 🎨 Design System

**Aesthetic:** Editorial luxury with warm accents — refined serif headlines paired with clean sans body, asymmetric layouts, subtle scroll reveals, warm earth tones that evoke natural ingredients and intimate dining.

### Color Palette
- **Primary:** #1A1A1A (near-black) — headings, primary text
- **Secondary:** #8B6F47 (warm cognac) — accent borders, highlights
- **Accent:** #C17A3C (burnt sienna) — CTA buttons, active states
- **Background:** #FAF8F5 (warm cream) — page background
- **Surface:** #F0EDE8 (warm stone) — cards, alternate sections
- **Text:** #2D2D2D (charcoal) — body text
- **Text Muted:** #6B6B6B (warm gray) — captions, labels

### Typography
- **Headings:** Cormorant Garamond (refined serif)
- **Body:** DM Sans (clean sans-serif)
- Responsive type scaling with fluid clamp values

## 🚀 Features

- ⚡️ **Vite** — Lightning fast build tool
- ⚛️ **React 18** — Latest React with hooks
- 🔷 **TypeScript** — Full type safety
- 🎨 **Tailwind CSS** — Utility-first styling with custom design system
- 🎯 **Lucide React** — Beautiful, consistent icons
- 📱 **Fully Responsive** — Mobile-first design
- ♿ **Accessible** — Semantic HTML, ARIA labels, keyboard navigation
- 🎬 **Smooth Animations** — Scroll-triggered reveals with IntersectionObserver
- 🎭 **Parallax Effects** — Subtle hero image parallax

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 🏗️ Build

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx              # Sticky navigation with mobile menu
│   ├── HeroSection.tsx         # Full-height hero with parallax
│   ├── AboutSection.tsx        # Restaurant story and philosophy
│   ├── MenuSection.tsx         # Signature dishes showcase
│   ├── AtmosphereSection.tsx   # Interior gallery
│   ├── VisitSection.tsx        # Location, hours, reservations
│   └── Footer.tsx              # Contact and social links
├── lib/
│   └── siteContent.ts          # All site copy and data (typed)
├── App.tsx                     # Main app component
├── main.tsx                    # Entry point
└── index.css                   # Global styles and design tokens
```

## 🎯 Key Sections

1. **Header** — Sticky navigation with smooth transitions
2. **Hero** — Asymmetric split layout with hero dish photography
3. **About** — Two-column story section with chef philosophy
4. **Menu** — Bento-style grid showcasing signature dishes
5. **Atmosphere** — Asymmetric gallery of dining spaces
6. **Visit** — Location, hours, and WhatsApp reservation CTA
7. **Footer** — Contact details and social links

## 🎨 Design Features

- **Editorial Layouts:** Asymmetric grids and varied column widths
- **Scroll Animations:** IntersectionObserver-based reveals with stagger
- **Generous Spacing:** Consistent vertical rhythm (py-24 to py-32)
- **Micro-interactions:** Hover states on all interactive elements
- **Typography Hierarchy:** Clear size jumps and comfortable reading measure
- **Color Restraint:** Strategic use of accent colors for emphasis

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Hamburger menu on mobile with fullscreen overlay
- Grid layouts that collapse gracefully
- Fluid typography that scales with viewport

## ♿ Accessibility

- Semantic HTML5 elements
- Descriptive alt text on all images
- ARIA labels on icon-only buttons
- Sufficient color contrast (AA compliant)
- Visible focus states
- Keyboard navigation support

## 🔧 Customization

All site content is centralized in `src/lib/siteContent.ts`. Update this file to:
- Change copy and messaging
- Update menu items and descriptions
- Modify location and hours
- Change contact information
- Update WhatsApp number for reservations

## 📝 Content Management

The site uses a typed content object for easy maintenance:

```typescript
// src/lib/siteContent.ts
export const siteContent = {
  meta: { ... },
  nav: { ... },
  hero: { ... },
  about: { ... },
  menu: { ... },
  atmosphere: { ... },
  visit: { ... },
  footer: { ... },
}
```

## 🎭 Animation System

- **Scroll Reveals:** Elements fade in and slide up when scrolled into view
- **Stagger:** Child elements animate with 0.12s delays
- **Duration:** 800ms cubic-bezier(0.16, 1, 0.3, 1) for smooth feel
- **Hover States:** 200-300ms transitions on interactive elements
- **Parallax:** Hero image moves at 0.3x scroll speed

## 📄 License

MIT License - feel free to use this template for your projects.

---

**Built with attention to craft and detail** ✨
