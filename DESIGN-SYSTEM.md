# Meridian Design System

## Context and Goals

Meridian is an operations consulting firm serving mid-market companies ($10M–$80M revenue). The marketing site communicates trust, clarity, and structured expertise through a calibrated warm-neutral palette and Geist typography.

**Goals:**
- Present a credible, high-conviction brand for C-suite buyers
- Minimize friction in the conversion path (book a call / download playbook)
- Scale consistently across services, case studies, testimonials, and article pages

---

## Design Tokens and Foundations

### Typography

| Token | Value |
|---|---|
| `font.family.primary` | Geist |
| `font.family.stack` | Geist, sans-serif |
| `font.size.xs` | 12px |
| `font.size.sm` | 14px |
| `font.size.md` | 16px |
| `font.size.lg` | 18px |
| `font.size.xl` | 28px |
| `font.size.2xl` | 36px |
| `font.size.3xl` | 40px |
| `font.size.4xl` | 72px |
| `font.weight.base` | 400 |
| `font.lineHeight.base` | 27px |

### Color

| Token | Value | Usage |
|---|---|---|
| `color.text.primary` | `#181312` | Body, headings on light surfaces |
| `color.text.tertiary` | `color(srgb 0.094 0.075 0.071 / 0.7)` | Muted body, captions on light |
| `color.text.inverse` | `color(srgb 0.953 0.922 0.894 / 0.7)` | Muted body on dark surfaces |
| `color.border.muted` | `#f3ebe4` | Dividers, card borders, input borders |
| `color.surface.base` | `#000000` | Dark surface / section backgrounds |
| `color.surface.strong` | `color(srgb 0.094 0.075 0.071 / 0.16)` | Hover overlays, subtle fills |

### Spacing

| Token | Value |
|---|---|
| `space.1` | 4px |
| `space.2` | 8px |
| `space.3` | 12px |
| `space.4` | 16px |
| `space.5` | 24px |
| `space.6` | 32px |
| `space.7` | 48px |
| `space.8` | 98.8px |

### Radius

| Token | Value |
|---|---|
| `radius.xs` | 3px |
| `radius.sm` | 6px |
| `radius.md` | 1528px |

### Motion

| Token | Value |
|---|---|
| `motion.duration.instant` | 300ms |

All transitions use `motion.duration.instant` as the base duration unless otherwise specified.

---

## Component-Level Rules

### Button

**Design intent:** Primary call-to-action for conversion events (book a call, download, view services). Appears on dark or light surfaces.

#### Anatomy
```
[border-wrapper]       ← border on dark, transparent on light
  [label]              ← text, left-aligned within button
  [icon →]             ← optional trailing arrow
```

#### Variants

| Variant | Surface | Text Color | Background | Border | Hover |
|---|---|---|---|---|---|
| Primary dark | light | `color.text.inverse` with `color.surface.base` bg | `color.surface.base` | — | `color.surface.strong` overlay |
| Primary light | dark | `color.text.primary` | transparent | `color.border.muted` | `color.surface.strong` overlay |

#### States

| State | Behavior |
|---|---|
| Default | Apply variant tokens above |
| Hover | Apply variant hover overlay. Pointer cursor. |
| Focus-visible | 2px solid outline at `color.text.primary`, offset 2px. No outline on pointer focus. |
| Active | Scale transform 0.98. Overlay opacity increases 1.5x over hover. |
| Disabled | Opacity 0.4. No pointer events. Text unchanged. |
| Loading | Replace label with a 16px spinner (see motion). Hide icon. Button width locked. |
| Error | This component has no error state — errors surface via form-level validation. |

#### Typography
- `font.size.sm` (14px)
- `font.weight.base` (400)
- 12px top/bottom padding, `space.5` (24px) left/right padding
- `radius.sm` (6px) border-radius

#### Responsive Behavior
- Full-width on viewports below 480px
- Centered text + icon on full-width variant
- Touch target must be at least 44px tall

#### Keyboard & Pointer
- Enter/Space triggers click
- Focus order matches visual order
- No drag interaction

#### Accessibility
- Must have visible focus indicator on keyboard focus only
- Must have `aria-label` if icon-only
- Loading state must use `aria-busy="true"`
- Disabled button must use `aria-disabled="true"`, not `disabled` attribute if inside a form that can be submitted

---

### Card (Service / Case Study)

**Design intent:** Preview a service offering or case study in a scannable grid. Each card links to a detail page.

#### Anatomy
```
[card]                  ← border + radius
  [category tag]        ← optional, e.g. "Case Study"
  [heading]             ← service name or client name
  [description]         ← 1–2 sentence summary
  [link →]              ← "Read case study" or "View service"
  [stats]               ← optional, case-study only
```

#### Variants

| Variant | Surface | Border |
|---|---|---|
| Default | transparent | `color.border.muted` |
| Dark | `color.surface.base` | none |

#### States

| State | Behavior |
|---|---|
| Default | Show border and static content |
| Hover | Border transitions to `color.text.primary` on light cards. `color.surface.strong` overlay on dark cards. Link underline animates in. |
| Focus-visible | 2px solid outline on entire card, offset 2px. Card is a single `<a>` tag. |
| Active | Overlay darkens 1.3x. |
| Disabled | N/A — cards contain active links. |
| Loading | Skeleton placeholder at card ratio. Shimmer using `color.surface.strong` to `color.border.muted`. |
| Error | If card content fails to load, show inline error state: "Unable to load [title]." with a retry link. |

#### Layout & Typography
- `radius.sm` (6px) card radius
- `space.6` (32px) interior padding
- Heading: `font.size.lg` (18px)
- Description: `font.size.md` (16px), `color.text.tertiary`
- Category tag: `font.size.sm` (14px), uppercase letter-spacing 0.5px

#### Responsive Behavior
- Single-column below 640px
- 2-column between 640px–1024px
- 3-column above 1024px
- Card height expands naturally with content — no fixed height
- Long content: description truncates at 4 lines via `-webkit-line-clamp`

#### Empty State
- If no cards to display: centered message with heading "Coming soon" and `color.text.tertiary` subtitle
- Hides the grid container completely via CSS rather than showing empty skeleton

#### Accessibility
- Card must be a single `<a>` tag (not a `<div>` with JS click handler)
- Must have `aria-label` on the link that includes both the category and title — e.g. "Read case study: Scaling from $30M to $80M"
- Focus-visible ring must wrap entire card
- Touch target of internal link must be minimum 44px in both dimensions

---

### Navigation

**Design intent:** Primary site navigation with logo, links, and a CTA button. Sticky on scroll.

#### Anatomy
```
[navbar]
  [logo]          ← left
  [page links]    ← center/left
  [CTA button]    ← right
  [hamburger]     ← mobile only
```

#### Tokens
- Height: 80px (desktop), 64px (mobile)
- Background: transparent (top) → `rgba(255,255,255,0.97)` (scrolled)
- Interior padding: `space.5` (24px) left/right
- Link spacing: `space.6` (32px) between items

#### States

| State | Behavior |
|---|---|
| Default | Links at `font.size.md` (16px), `color.text.primary`. Logo visible. |
| Hover | Link text underlines. No color change. |
| Focus-visible | 2px outline, offset 2px, `radius.xs`. |
| Active | Opacity 0.7. |
| Scrolled | Background transitions from transparent to `rgba(255,255,255,0.97)`. Backdrop-filter: blur(12px). Bottom border: 1px `color.border.muted`. |
| Mobile menu open | Fixed overlay with full-height nav list. Background `color.surface.base` with `color.text.inverse` links. |

#### Responsive Behavior
- Desktop (≥768px): inline links + CTA
- Mobile (<768px): hamburger toggle, slide-down menu
- Menu closes on link click or outside tap

#### Accessibility
- Must use `<nav>` with `aria-label="Main navigation"`
- Mobile menu toggle must have `aria-expanded` and `aria-controls`
- Hamburger icon must have `aria-label="Open menu"` / `"Close menu"`
- Skip-to-content link must be first focusable element
- Focus must trap inside mobile menu when open

---

### Stat Display

**Design intent:** Present quantitative proof points (revenue influenced, retention rate, engagement length) in a scannable row.

#### Anatomy
```
[stat-group]            ← horizontal row
  [stat]                ← repeated
    [value]             ← large number
    [label]             ← description below
```

#### Tokens
- Value: `font.size.4xl` (72px), `font.weight.base` (400)
- Label: `font.size.sm` (14px), `color.text.tertiary`
- Spacing between stats: `space.8` (98.8px) desktop, `space.6` (32px) mobile

#### Responsive Behavior
- Desktop: horizontal row, 3–4 stats
- Tablet (<768px): 2x2 grid
- Mobile (<480px): stacked single column, centered text

#### States
- Stat display is static — no interactive states
- If value is loading, show `—` as placeholder

#### Accessibility
- Numbers must include full punctuation — e.g. "$2.4B" not "$24B"
- Must not use `<br>` to separate value from label — use proper block elements or flex direction
- Stat group should be a `<dl>` / `<dt>` / `<dd>` structure for semantic association

---

### Testimonial Block

**Design intent:** Display a client quote with attribution and optional company context to build trust.

#### Anatomy
```
[block]
  [quote]              ← pull-quote text
  [attribution]
    [name]             ← full name
    [title + company]  ← "CEO, Hartwell Distribution"
```

#### Tokens
- Quote: `font.size.lg` (18px), `font.lineHeight.base` (27px), serif italic for quotation mark styling
- Name: `font.size.md` (16px), `color.text.primary`, weight 600
- Title: `font.size.sm` (14px), `color.text.tertiary`

#### States
- Static block — no interactive states
- Block quote background: transparent

#### Responsive Behavior
- Padding: `space.6` (32px) all sides on mobile, `space.7` (48px) on desktop
- Max-width: 720px for quote text
- Carousel variant: supports prev/next buttons with `aria-label="Previous testimonial"`

#### Accessibility
- Quote text must use `<blockquote>` element
- Attribution wrapped in `<figcaption>` if inside `<figure>`
- Carousel controls must be keyboard accessible
- Ensure minimum 4.5:1 contrast ratio for quote text on background

---

### Form Elements

**Design intent:** Capture lead information for "Book a call" and "Get the download" conversion points.

#### Anatomy
```
[form]
  [input-group]
    [label]
    [input / textarea]
    [error-message]
  [submit button]
```

#### Tokens
- Input height: 48px minimum
- Input padding: `space.4` (16px) horizontal, `space.3` (12px) vertical
- Input border: 1px `color.border.muted`, `radius.sm` (6px)
- Input text: `font.size.md` (16px), `color.text.primary`
- Label: `font.size.sm` (14px), `color.text.primary`

#### States

| State | Behavior |
|---|---|
| Default | Border `color.border.muted`. Placeholder `color.text.tertiary`. |
| Focus | Border `color.text.primary`. No shadow. |
| Hover | Border darkens to `color.text.tertiary`. |
| Filled | Border remains `color.border.muted` until focus. |
| Error | Border `#d32f2f`. Error message below input at `font.size.sm`. |
| Disabled | Opacity 0.4. No pointer events. |
| Loading | Submit button shows spinner. Inputs remain interactive. |

#### Validation
- Inline validation on blur
- Form-level summary on submit
- Error message must be associated via `aria-describedby`

#### Accessibility
- Every input must have a visible `<label>` element
- Error messages must use `aria-live="polite"`
- Required fields must use `aria-required="true"` and visual `*` indicator
- Autocomplete attributes must be set for name, email, company fields

---

### Link

**Design intent:** Inline text links and standalone action links with consistent underline behavior.

#### Tokens
- Inline: inherit font size, `color.text.primary`, underline on hover
- Standalone with arrow: `font.size.sm` (14px), trailing `→` or `↗` character

#### States
| State | Behavior |
|---|---|
| Default | No underline (inline) or arrow present (standalone) |
| Hover | Underline for inline. Arrow slides right 4px for standalone. |
| Focus-visible | 2px outline, offset 2px |
| Active | Opacity 0.6 |
| Visited | No color change — same as default |

#### Accessibility
- Links must have discernible text — never "click here" or "read more"
- External links must include `aria-label` with "(opens in new tab)" and `target="_blank" rel="noopener noreferrer"`
- Underline must be present on hover at minimum; prefer persistent underline in body copy

---

## Accessibility Requirements

All acceptance criteria must pass manual and automated checks before release.

| Rule | Test Method | Pass Condition |
|---|---|---|
| Color contrast | Axe DevTools / manual check | Body text ≥4.5:1, large text ≥3:1 |
| Focus indicators | Tab through all interactive elements | Visible 2px offset ring on every focusable element |
| Keyboard navigation | Tab + Enter/Space through all flows | All actions reachable without mouse |
| Screen reader labels | VoiceOver / NVDA read of nav, forms, cards | Labels describe purpose, not layout |
| Touch targets | Mobile viewport inspection | All interactive targets ≥44x44px |
| Heading hierarchy | Document outline review | One `<h1>`, sequential `<h2>`–`<h6>`, no skips |
| Form validation | Submit empty / invalid data | Error messages visible and associated via `aria-describedby` |
| Skip link | First Tab press | Skip-to-content link appears and works |

---

## Content and Tone Standards

- **Voice:** Direct, confident, concise. Write for C-suite readers (CEO, COO, VP Ops).
- **Use active voice:** "We diagnose bottlenecks" not "Bottlenecks are diagnosed by our team."
- **Numbers first:** Lead with quantified outcomes — "$2.4B client revenue influenced."
- **Avoid jargon:** Prefer "systems that scale" over "synergistic operational frameworks."
- **CTA copy must be action-oriented:** "Book a discovery call" not "Learn more."

| Do | Don't |
|---|---|
| "Book a discovery call" | "Submit" |
| "Read case study" | "Click here" |
| "Get the download" | "Download now" |
| "Revenue influenced: $2.4B" | "We've helped clients earn more" |

---

## Anti-Patterns and Prohibited Implementations

| Anti-Pattern | Why | Fix |
|---|---|---|
| Raw hex values instead of tokens | Breaks systematic theming | Use semantic tokens from the token table |
| One-off type size or spacing | Drifts from system consistency | Use existing scale; escalate if truly required |
| Hidden focus styles | WCAG 2.2 failure | Always include `:focus-visible` ring |
| Card as `<div>` with click handler | Breaks screen reader navigation | Use single `<a>` for linked cards |
| Inline link without underline | Hard to distinguish from body text | Always underline on hover; prefer persistent underline |
| Icon-only button without `aria-label` | Screen readers skip it | Add descriptive `aria-label` |
| Placeholder as label | Disappears on input, fails accessibility | Always use persistent `<label>` |
| Full-width button on desktop when space allows | Reduces visual hierarchy | Constrain to content width unless viewport <480px |

---

## QA Checklist

Before shipping any component implementation:

- [ ] Token values verified against design token table
- [ ] All interactive states (default, hover, focus-visible, active, disabled, loading, error) implemented and tested
- [ ] Focus-visible ring visible on keyboard navigation, hidden on pointer
- [ ] Color contrast verified (body ≥4.5:1, large text ≥3:1)
- [ ] Touch targets ≥44x44px
- [ ] Screen reader test: labels, headings, ARIA attributes correct
- [ ] Responsive behavior correct at 480px, 768px, 1024px, 1440px
- [ ] Long content handled (truncation or scroll as specified)
- [ ] No raw hex values — only semantic tokens
- [ ] No skipped heading levels in document outline
- [ ] Form validation inline on blur, summary on submit
- [ ] Link text is descriptive without "click here" / "read more"
- [ ] Layout renders without horizontal scroll at any viewport width
