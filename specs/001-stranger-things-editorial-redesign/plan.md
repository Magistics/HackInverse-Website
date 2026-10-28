# Implementation Plan: Minimalist Editorial & Dual-Tone Stranger Things Redesign

**Feature**: `001-stranger-things-editorial-redesign`  
**Spec**: [spec.md](file:///d:/Magistics/Hackinverse/hackinverse%20website/specs/001-stranger-things-editorial-redesign/spec.md)  
**Constitution**: [constitution.md](file:///d:/Magistics/Hackinverse/hackinverse%20website/.specify/memory/constitution.md)

---

## 1. Design Token Architecture & Color Palettes

### The Dual-Tone Canvases
- **Canvas A (The Upside Down Void)**:
  - Background: `#0A0B0E` (Obsidian Ink)
  - Surface Hairline: `rgba(255, 255, 255, 0.08)`
  - Text Primary: `#EDEDED`
  - Text Secondary: `#9E9E9E`
  - Crimson Accent: `#E50914` / `#D90429` (Stranger Things Glowing Red)
  - Ambient: Floating dust motes (`UpsideDownSpores.jsx`)

- **Canvas B (Hawkins Gazette Broadsheet Archive)**:
  - Background: `#F6F4EE` (Warm Newsprint Cream)
  - Surface Hairline: `#E5E0D5` (Delicate Paper Divider)
  - Text Primary: `#111317` (Deep Newsprint Ink)
  - Text Secondary: `#5A5852` (Aged Typewriter Charcoal)
  - Crimson Accent: `#C9182B` (Archival Red Ink Stamp)

---

## 2. Component Refactoring & Architecture Matrix

1. **[`src/index.css`](file:///d:/Magistics/Hackinverse/hackinverse%20website/src/index.css)**:
   - Strip `.screw-head`, `.bezel-double`, and global scanline overlay.
   - Establish `.hairline-divider`, `.stranger-title`, `.drop-cap`, and dual-tone utilities.
2. **`src/components/Editorial/UpsideDownSpores.jsx`**:
   - Lightweight ambient canvas particle system for floating dust motes in void sections.
3. **[`src/components/Navbar.jsx`](file:///d:/Magistics/Hackinverse/hackinverse%20website/src/components/Navbar.jsx)**:
   - Ultra-minimalist frosted header, clean monospace typography, Devfolio CTA.
4. **[`src/components/HeroSection.jsx`](file:///d:/Magistics/Hackinverse/hackinverse%20website/src/components/HeroSection.jsx)**:
   - Iconic Stranger Things serif title, glowing hairline bars, cyclists silhouette, Devfolio button.
   - High-luminance `opacity-100` background video with calibrated WCAG text scrims.
   - `scale-[1.18]` and `origin-center` scaling to eliminate the video artwork book edge and bleed seamlessly edge-to-edge.
   - Single muted video loop without duplicate sound controls.
5. **[`src/components/Editorial/EditorialTicker.jsx`](file:///d:/Magistics/Hackinverse/hackinverse%20website/src/components/Editorial/EditorialTicker.jsx)**:
   - Single unified audio synthesizer and ambient sound toggle for the entire application.
6. **[`src/components/Duration.jsx`](file:///d:/Magistics/Hackinverse/hackinverse%20website/src/components/Duration.jsx)**:
   - Minimalist typographic countdown with hairline column separators.
7. **Broadsheet Spread ([`JourneyMetricsSection.jsx`](file:///d:/Magistics/Hackinverse/hackinverse%20website/src/components/Journey/JourneyMetricsSection.jsx) & [`AboutSection.jsx`](file:///d:/Magistics/Hackinverse/hackinverse%20website/src/components/AboutSection.jsx))**:
   - Archival cream `#F6F4EE` canvas, newspaper drop caps, 3-column broadsheet layout.
   - Genesis anomaly telemetry quote referencing verified year `2025`.
   - Origin story chapter heading: `THE HACKINVERSE ORIGIN STORY` with `ORIGIN: HACKINVERSE ARCHIVE`.
8. **The Void Sections ([`TracksSection.jsx`](file:///d:/Magistics/Hackinverse/hackinverse%20website/src/components/Tracks/TracksSection.jsx), [`PerksSection.jsx`](file:///d:/Magistics/Hackinverse/hackinverse%20website/src/components/Perks/PerksSection.jsx), [`PrizesSection.jsx`](file:///d:/Magistics/Hackinverse/hackinverse%20website/src/components/Prizes/PrizesSection.jsx), [`ScheduleSection.jsx`](file:///d:/Magistics/Hackinverse/hackinverse%20website/src/components/Schedule/ScheduleSection.jsx), etc.)**:
   - Clean obsidian `#0A0B0E`, hairline dividers, authentic trophies and assets.
   - Open Innovation track with **₹13,000 Total Cash Bounty** (₹5k 1st, ₹4k 2nd, ₹3k 3rd, ₹1k Judges' Special Mention).
   - Responsive mobile podium ordering (`1st Place → 2nd Place → 3rd Place`) via `order-1 md:order-2`.
   - Daylight protocol schedule sprint (08:30 AM to 06:30 PM on October 11, 2025).
9. **[`HighlightsSection.jsx`](file:///d:/Magistics/Hackinverse/hackinverse%20website/src/components/Highlights/HighlightsSection.jsx)**:
   - Framer Motion infinite horizontal marquee featuring 14 chronological photographic evidence records from HackInverse 1.0 with lightbox inspection.
10. **[`GallerySection.jsx`](file:///d:/Magistics/Hackinverse/hackinverse%20website/src/components/Gallery/GallerySection.jsx)**:
    - Minimalist polaroid grid for all 37 team members with department filter tabs.
    - Leadership hierarchy: Abhirup Datta Khan (Founder & Lead, elevated offset `sm:-translate-y-6`) and Rupsha Das (Co-Organizer) sharing identical card geometry (`280px`).
    - Media leads: Pritam Sardar (`MEDIA LEAD`), Karishma Gupta (`VIDEO LEAD`).
    - Inspiring personal taglines under member names instead of corporate titles.
11. **[`FAQ.jsx`](file:///d:/Magistics/Hackinverse/hackinverse%20website/src/components/FAQ.jsx) & [`CodeOfConductSection.jsx`](file:///d:/Magistics/Hackinverse/hackinverse%20website/src/components/Guidelines/CodeOfConductSection.jsx)**:
    - Stripe Press style hairline accordions with smooth `+` / `−` micro-interactions.
12. **[`Footer.jsx`](file:///d:/Magistics/Hackinverse/hackinverse%20website/src/components/Footer.jsx)**:
    - Minimalist broadsheet masthead and directory with `HAWKINS OUTPOST // HACKINVERSE ARCHIVE` and `01 // About HackInverse`.

---

## 3. Automated Quality Verification Plan

- Run `node --test tests/event-content.test.js` validating all 13 core domain rules.
- Run `npm run lint` for ESLint verification.
- Run `npm run build` for production bundle compilation.
