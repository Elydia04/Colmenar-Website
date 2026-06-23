# Villa Colmenar — Website Proposal
> A capstone project pitch by Adrian Ortega

---

## The Problem

**Villa Colmenar has 111,000+ Facebook followers — but no website.**

Right now, every inquiry, every rate check, every "is the pool open?" question happens through Facebook messages and old posts. That means:

- **Missed bookings** — people who don't use Facebook can't find you
- **No rates page** — guests message the same questions over and over
- **No visual story** — the spring pool sells itself, but Facebook posts disappear in hours
- **No ownership** — you're renting space on someone else's platform

**Proof:** The only page about Villa Colmenar online is a 2008 blog post on a third-party WordPress site. Its comment section has 28+ inquiries — spanning 2010 to 2017 — all asking the same thing: *"Magkano entrance?" "Ano contact number?" "How to reserve?"* That's years of lost bookings left hanging in a blog thread because there was no official site to send people to.

---

## The Opportunity

A simple, beautiful website that does three things:

1. **Makes people feel the water** — full-screen pool visuals, scroll-triggered animations, the spring water story front and center
2. **Answers every question** — rates, amenities, location, hours — so you get fewer DMs and more bookings
3. **Captures every inquiry** — a booking form that works on any device

Your 111k followers already want to visit. This site gives them a place to act on it.

---

## What You Get

| Deliverable | Description |
|---|---|
| **Home page** | Single-page scroll with 10 sections — hero, spring feature, about, amenities, gallery, testimonials, pricing, map, contact, footer |
| **Booking page** | Inquiry form for day passes, group packages, and event bookings |
| **Gallery page** | Full-screen photo grid of the resort and pool |
| **Mobile-first design** | Looks great on phones, tablets, and desktops |
| **Fast loading** | Optimized images, instant fonts, smooth animations |
| **Google Maps embed** | Interactive map with your location |
| **Social links** | Facebook & Instagram connected |
| **SEO** | Shows up in Google searches for "Villa Colmenar" and "spring pool resort" |

**Not included (your responsibility):**
- Photos (you provide 5–10 high-resolution images)
- Domain name (e.g., `villacolmenar.com`)
- Web hosting
- Facebook/Instagram account setup

---

## Visual Direction — At a Glance

**Vibe:** Refreshing escape from city heat. Family joy. Nature-meets-elegance. Filipino hospitality.

**Colors — inspired by the resort itself:**

| Color | Where It Goes |
|---|---|
| Deep teal | Hero background, featured cards |
| Bright pool blue | Headlines, interactive elements |
| Warm off-white | Section backgrounds (alternates with white) |
| Jungle green | Badges, nature accents |
| Golden yellow | "Book Now" buttons, star ratings |
| Dark green-black | Navigation bar, footer, body text |

**Fonts:**
- Headlines — elegant serif (Cormorant Garamond)
- Body text — clean sans-serif (DM Sans)
- Labels/badges — monospace for a crisp, trustworthy feel

**The "wow" moments:**
- Floating water droplets animate across the hero screen
- Stats count up as you scroll (100% spring water, 0 chemicals)
- Ripple rings pulse behind key numbers
- Every section fades in smoothly as you scroll down

---

## Site Pages

| Page | Purpose |
|---|---|
| **Home (one scroll)** | The full story — hero → spring → about → amenities → gallery → reviews → pricing → map → footer |
| **/book** | Booking form — name, date, package, message |
| **/gallery** | Full photo grid of the resort |

---

## Section-by-Section Walkthrough

### 1. Navigation Bar
Sticks to the top of the screen. Starts transparent, gains a dark background as you scroll. Contains: resort name (left), page links (center), "Book a Dip" button (right, golden yellow). On phones, collapses to a hamburger menu.

### 2. Hero (Fullscreen)
A massive pool photo fills the entire screen. Overlaid text: tagline "Natural Spring Water", headline "Dive Into Pure Spring", and two buttons — "Book Your Visit" (golden) and "See the Pool ↓". Small water droplets float gently around the screen.

### 3. Spring Water Feature
The main selling point. Dark teal background with animated stats: 100% spring water purity, 0 added chemicals, 24°C year-round temperature. Text explains the underground spring source. Ripple rings pulse beneath the numbers.

### 4. About the Resort
Warm cream background. A photo of the spring source sits beside 2–3 paragraphs about how the resort was built around the natural spring. A "Since [year]" badge floats on the photo.

### 5. Amenities
White background. 6 cards in a grid: Natural Spring Pool, Lush Gardens, Function Rooms, Poolside Dining, Parking, Scenic Views. Each card has an icon, title, and short description. Cards lift slightly on hover.

### 6. Gallery Strip
Dark background that makes photos pop. 5 resort images in a scrollable row. On desktop, arranges in a masonry layout. Hovering over a photo zooms it slightly and shows a caption. "View Full Gallery →" link at the bottom.

### 7. Testimonials
3 review cards from real guests. Each shows name, location, star rating (golden), and quote in italic. Cards have a teal left border accent.

### 8. Pricing
3 package options side by side: Day Pass, Group Package (featured/highlighted), Event Booking. The featured package has a "Most Popular" badge and stands out with a teal background. Each lists price and included features.

### 9. Map & Contact
Dark section split in two: an interactive Google Map on the left, contact details (address, phone, email, hours) on the right. Golden "Get Directions" button.

### 10. Footer
Deep dark background. Resort name and tagline, navigation links, social media icons (Facebook, Instagram), copyright notice.

---

## Timeline

| Phase | Duration |
|---|---|
| Design approval & photo collection | 1 week |
| Home page build | 2 weeks |
| Booking & Gallery pages | 1 week |
| Testing, revisions, launch | 1 week |
| **Total** | **~5 weeks** |

---

## Quality Commitments

- Works on every device — phone, tablet, laptop
- Loads fast — no waiting around for big photos
- Accessible — readable text, keyboard-navigable, screen-reader friendly
- Animations respect "reduce motion" settings
- All buttons are real buttons (no fake clickable divs)

---

---

# Technical Appendix
*For the development team — implementation details*

## Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts via `next/font`
- **Deployment:** Static export or Vercel

## Color Tokens (`tailwind.config.js`)

```js
colors: {
  spring: {
    deep: '#1A7A8A',
    mid:  '#3AB8C8',
    pale: '#A8E6EF',
    foam: '#E0F7FA',
  },
  stone: '#2B3A35',
  cream: '#F7F3EC',
  leaf:  '#4A7C59',
  sun:   '#F5C842',
  white: '#FFFFFF',
}
```

**Usage rules:**
- Backgrounds alternate: `cream` → `white` → `cream` across sections
- Hero and pool sections: `spring.deep` to `spring.mid` gradients
- Body text: `stone`
- Primary CTA buttons: `sun` with `stone` text
- Accent / nature badges: `leaf`

## Font Configuration

```js
fontFamily: {
  display: ['Cormorant Garamond', 'Georgia', 'serif'],
  body:    ['DM Sans', 'sans-serif'],
  mono:    ['DM Mono', 'monospace'],
}
```

**Type scale:**
- Hero H1: `font-display text-6xl md:text-8xl font-light tracking-tight leading-none`
- Section H2: `font-display text-4xl md:text-5xl font-semibold`
- Body: `font-body text-base md:text-lg leading-relaxed`
- Labels/eyebrows: `font-mono text-xs uppercase tracking-widest text-leaf`

## Animation System

### Tailwind config

```js
animation: {
  'fade-up':  'fadeUp 0.7s ease forwards',
  'fade-in':  'fadeIn 0.6s ease forwards',
  'float':    'float 4s ease-in-out infinite',
  'count-up': 'fadeIn 0.3s ease forwards',
  'ripple':   'ripple 2s ease-in-out infinite',
}
keyframes: {
  fadeUp:  { '0%': { opacity: 0, transform: 'translateY(28px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
  fadeIn:  { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
  float:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
  ripple:  { '0%': { transform: 'scale(1)', opacity: 0.6 }, '100%': { transform: 'scale(1.6)', opacity: 0 } },
}
```

### Scroll-trigger reveal (`lib/useScrollReveal.ts`)

```tsx
import { useEffect, useRef } from 'react'

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('revealed') },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return ref
}
```

### CSS (`globals.css`)

```css
.reveal-on-scroll { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
.reveal-on-scroll.revealed { opacity: 1; transform: translateY(0); }

.stagger-children > * { opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease; }
.stagger-children.revealed > *:nth-child(1) { transition-delay: 0ms; }
.stagger-children.revealed > *:nth-child(2) { transition-delay: 100ms; }
.stagger-children.revealed > *:nth-child(3) { transition-delay: 200ms; }
.stagger-children.revealed > *:nth-child(4) { transition-delay: 300ms; }
.stagger-children.revealed > * { opacity: 1; transform: translateY(0); }
```

### Hero entrance sequence

| Element | Animation | Delay |
|---|---|---|
| Eyebrow | Fade in (opacity 0→1) | 200ms |
| H1 | Slide up (30px→0, opacity) | 400ms |
| Subhead | Fade in | 700ms |
| Buttons | Scale in (0.95→1) | 900ms |

### Floating water particles

6–8 SVG droplets, absolutely positioned across lower 60% of hero.

```css
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
  50%      { transform: translateY(-20px) rotate(8deg); opacity: 1; }
}
```

Each particle: different `animation-delay` (0s–3s), size (8px–20px), color `spring.pale`.

### Ripple rings

On the Spring Water section, CSS ripple rings pulse beneath stat numbers:

```css
.ripple-ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid theme('colors.spring.mid');
  animation: ripple 2.5s ease-out infinite;
}
.ripple-ring:nth-child(2) { animation-delay: 0.8s; }
.ripple-ring:nth-child(3) { animation-delay: 1.6s; }
```

## Responsive Breakpoints

| Width | Layout |
|---|---|
| < 640px | Single column, full-width |
| 640px+ | 2-column cards, larger type |
| 768px+ | Nav shows full links |
| 1024px+ | 2-column layouts (About, Contact) |
| 1280px+ | 3-column grids, max container 1200px |

Container: `max-w-[1200px] mx-auto px-4 md:px-8`

## File Structure

```
/app
  layout.tsx
  page.tsx
  /book/page.tsx
  /gallery/page.tsx

/components
  /layout
    Navbar.tsx
    Footer.tsx
  /sections
    Hero.tsx
    SpringFeature.tsx
    About.tsx
    Amenities.tsx
    GalleryStrip.tsx
    Testimonials.tsx
    Pricing.tsx
    Contact.tsx
  /ui
    Button.tsx
    Card.tsx
    Badge.tsx
    Wavedivider.tsx
    RippleRing.tsx

/lib
  useScrollReveal.ts
  useCountUp.ts

/public/images
  hero-pool.jpg
  spring-source.jpg
  pool-aerial.jpg
```

## Reference Images

| Image | Description | Used In |
|---|---|---|
| 1 | Aerial pool view + colonnaded building | Hero, Gallery |
| 2 | Natural jungle stream / spring source | About, Spring Feature |
| 3 | Overhead clean pool + architecture | Gallery, Pricing |

Store as WebP + JPEG fallback in `/public/images/`. Use `next/image` with `fill` and `object-cover` for full-bleed images.

## SEO & Metadata

```tsx
export const metadata = {
  title: 'Villa Colmenar — Natural Spring Water Pool Resort',
  description: 'Escape to Villa Colmenar, a tropical resort with a natural spring-fed pool. Crystal-clear water, lush surroundings, and family-friendly fun.',
  openGraph: {
    title: 'Villa Colmenar — Spring Water Pool Resort',
    description: 'Natural spring-fed pool, tropical gardens, and the perfect family escape.',
    images: ['/images/hero-pool.jpg'],
  },
}
```

## Non-Negotiables

- [ ] `prefers-reduced-motion` media query wraps ALL animations — disable floats, count-ups, ripples if set
- [ ] All images have descriptive `alt` text
- [ ] Tab-navigable: all interactive elements have visible `:focus-visible` ring in `spring.mid`
- [ ] Lighthouse Performance score > 85 (use `next/image`, lazy-load below fold)
- [ ] No layout shift on font load (use `font-display: swap`, pre-connect Google Fonts)
- [ ] CTA buttons are `<button>` or `<a>` — never `<div onClick>`
