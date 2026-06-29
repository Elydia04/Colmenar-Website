# Villa Colmenar — Natural Spring Water Pool Resort

A resort website built with Next.js 16, React 19, and Tailwind CSS v4.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS v4
- **Fonts:** Cormorant Garamond (display), DM Sans (body), DM Mono (mono)

## Sections

- Hero — Fullscreen with floating water droplets
- Spring Feature — Pool stats, image stack, count-up animations
- About — Split layout with scroll reveal
- Amenities — Card grid with staggered entrance
- Gallery Strip — Infinite marquee photo carousel
- Testimonials — Guest reviews with staggered fade-up
- FAQ — Accordion with animated expand
- Nearby Attractions — Card grid with image hover zoom
- Pricing — Cards with cursor glow and scroll stagger
- Contact — Map embed + details

## Animations

- Scroll-triggered slide reveals (`reveal-wrapper`, `reveal-left`, `reveal-right`)
- Staggered children entrance (`stagger-children`)
- Accent tick marks that draw in on scroll
- Button glow pulse on primary CTAs
- Ghost button underline on hover
- Marquee infinite scroll (Gallery Strip)
- Ripple ring pulses (Spring Feature)
- Droplet float (Hero)
- Count-up with glow completion

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Deployment

Connects to Vercel via GitHub. Push to main to auto-deploy.
