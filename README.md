# Meridian — Operations Consulting Marketing Site

A high-performance marketing website for **Meridian**, an operations consulting firm serving mid-market companies ($10M–$80M revenue). Built with Next.js 14, React 18, TypeScript, and Tailwind CSS.

---

## Overview

Meridian crafts the operating systems that fast-growing companies and institutions rely on to perform at scale. This marketing site communicates trust, clarity, and structured expertise through a calibrated warm-neutral palette and Geist typography.

**Live Site:** [https://github.com/girishlade111/meridian](https://github.com/girishlade111/meridian)

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5.4 |
| Styling | Tailwind CSS 3.4 |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Package Manager | npm |
| Linting | ESLint (Next.js defaults) |

---

## Project Structure

```
meridian/
├── app/
│   ├── globals.css         # Global styles & Tailwind imports
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Homepage composition
├── components/
│   ├── about.tsx           # Company overview section
│   ├── case-studies.tsx    # Case study grid with cards
│   ├── floating-cta.tsx    # Persistent floating CTA button
│   ├── footer.tsx          # Site footer with links
│   ├── growth-playbook.tsx # Lead magnet / playbook section
│   ├── hero.tsx            # Hero section with animations
│   ├── navbar.tsx          # Sticky navigation with mobile menu
│   ├── process-section.tsx # 4-step process methodology
│   ├── services.tsx        # Service offerings grid
│   ├── stats.tsx           # Key metrics / proof points
│   └── testimonial.tsx     # Client testimonial carousel
├── public/                 # Static assets
├── DESIGN-SYSTEM.md        # Comprehensive design system documentation
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.ts      # Tailwind theme extension
└── tsconfig.json           # TypeScript configuration
```

---

## Features

### Core Sections
- **Hero** — Animated headline with dual CTA (consultation + playbook download)
- **Stats** — Quantified proof points ($2.4B revenue influenced, 94% retention, etc.)
- **Process** — 4-step methodology: Diagnose → Design → Deploy → Optimize
- **Services** — Service offerings: Operations Design, Revenue Operations, Finance Operations, People Operations
- **Growth Playbook** — Lead capture for downloadable playbook
- **Case Studies** — Client success stories with metrics
- **Testimonial** — Client quote carousel
- **About** — Company narrative and team highlights
- **Footer** — Navigation, contact, social links

### Technical Highlights
- **Framer Motion animations** — Staggered entrance, scroll-triggered, hover states
- **Responsive design** — Mobile-first, breakpoints at 480px, 640px, 768px, 1024px, 1440px
- **Accessibility (WCAG 2.2 AA)** — Focus management, ARIA labels, semantic HTML, skip links, color contrast
- **Sticky navbar** — Transparent → solid on scroll, mobile hamburger menu
- **Floating CTA** — Persistent bottom-right consultation button
- **Design system** — Comprehensive token system (colors, spacing, typography, radius, motion)

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/girishlade111/meridian.git
cd meridian

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Design System

The project follows a comprehensive design system documented in [`DESIGN-SYSTEM.md`](DESIGN-SYSTEM.md).

### Design Tokens

**Typography**
- Font Family: Geist (primary), system fallback
- Scale: 12px → 72px (xs through 4xl)
- Base line height: 27px

**Color Palette**
| Token | Value | Usage |
|-------|-------|-------|
| `text.primary` | `#181312` | Body, headings on light |
| `text.tertiary` | `rgba(24,19,18,0.7)` | Muted text on light |
| `text.inverse` | `rgba(243,235,228,0.7)` | Muted text on dark |
| `border.muted` | `#f3ebe4` | Dividers, card borders |
| `surface.base` | `#000000` | Dark section backgrounds |
| `surface.strong` | `rgba(24,19,18,0.16)` | Hover overlays |

**Spacing Scale**
- 4px base unit (space.1 through space.8: 4px → 98.8px)

**Border Radius**
- `radius.xs`: 3px
- `radius.sm`: 6px (default for buttons, inputs, cards)
- `radius.md`: 1528px (pill/full-rounded)

**Motion**
- Base duration: 300ms (`easeOut` default)

---

## Component Library

Each component follows the design system specifications with:

- **All interactive states**: default, hover, focus-visible, active, disabled, loading, error
- **Responsive behavior** at defined breakpoints
- **Accessibility compliance** (WCAG 2.2 AA)
- **TypeScript interfaces** for props
- **Framer Motion animations** where appropriate

### Key Components

| Component | Variants | States | Responsive |
|-----------|----------|--------|------------|
| Button | Primary (dark/light) | 7 states | Full-width <480px |
| Card | Default, Dark | 7 states | 1/2/3 col grid |
| Navbar | Desktop, Mobile | 5 states | Hamburger <768px |
| Stat Display | — | Static | Row → 2×2 → stack |
| Testimonial | Single, Carousel | Static | Max-width 720px |
| Form Input | — | 7 states | Full-width mobile |

---

## Accessibility

All components meet WCAG 2.2 AA standards:

- **Color Contrast**: Body text ≥4.5:1, large text ≥3:1
- **Focus Indicators**: Visible 2px offset ring on all focusable elements
- **Keyboard Navigation**: All actions reachable via Tab + Enter/Space
- **Screen Readers**: Semantic HTML, ARIA labels, live regions for forms
- **Touch Targets**: Minimum 44×44px on mobile
- **Heading Hierarchy**: Single `<h1>`, sequential `<h2>`–`<h6>`
- **Form Validation**: Inline on blur, summary on submit, `aria-describedby`
- **Skip Links**: First focusable element jumps to main content

---

## Performance

- **Next.js 14 App Router** — Server Components by default
- **Code splitting** — Automatic per-route
- **Image optimization** — Next.js Image component (when images added)
- **Font optimization** — `next/font` for Geist (self-hosted)
- **Bundle analysis** — Run `npm run build` and analyze `.next/analyze/`

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect the GitHub repository directly in the Vercel dashboard.

### Other Platforms

```bash
# Build for production
npm run build

# Output is in .next/ — deploy to any Node.js hosting
npm run start
```

---

## Development Guidelines

### Code Style
- TypeScript strict mode enabled
- ESLint with Next.js recommended config
- Prettier formatting (run `npx prettier --write .`)
- Functional components with hooks
- Named exports for components

### Adding New Components
1. Create component in `components/` with TypeScript
2. Follow design system tokens from `DESIGN-SYSTEM.md`
3. Implement all 7 interactive states
4. Add responsive breakpoints
5. Test accessibility (axe DevTools, keyboard nav, screen reader)
6. Export from component and import in `app/page.tsx`

### Design System Updates
- Modify tokens in `tailwind.config.ts` for theme values
- Update `DESIGN-SYSTEM.md` for documentation
- Ensure all components use semantic tokens (no raw hex)

---

## Quality Assurance Checklist

Before merging to main:

- [ ] `npm run build` passes without errors
- [ ] `npm run lint` passes
- [ ] All interactive states tested (hover, focus, active, disabled, loading)
- [ ] Keyboard navigation works end-to-end
- [ ] Screen reader test (VoiceOver/NVDA)
- [ ] Mobile viewport testing (375px, 768px, 1024px, 1440px)
- [ ] Color contrast verified
- [ ] Touch targets ≥44×44px
- [ ] No raw hex values in components
- [ ] Heading hierarchy correct
- [ ] Form validation works (inline + summary)

---

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "feat: your feature description"`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## License

Private — All rights reserved. Meridian Operations Consulting.

---

## Contact

**Meridian** — Operations Consulting for the Mid-Market
- Website: [meridian-ops.com](https://meridian-ops.com) (placeholder)
- Email: hello@meridian-ops.com (placeholder)
- LinkedIn: [linkedin.com/company/meridian](https://linkedin.com/company/meridian) (placeholder)