# Constitution: Minimalist Editorial & Stranger Things Thematic Architecture

## 1. Core Architecture & Anti-AI Doctrine
This project adheres to **High-End Minimalist Editorial Design** inspired by *Stripe Press*, *A24 Films*, and award-winning *Awwwards* publications. We actively reject generic "AI-generated" sci-fi tropes:
- **NO Faux-Hardware Clutter**: No cartoonish screw heads (`.screw-head`), heavy double-bezel borders, or full-screen noisy CRT scanline overlays that obscure content.
- **Hairline Structural Discipline**: Content is framed and organized with razor-sharp 1px hairline dividers (`rgba(255,255,255,0.08)` or `rgba(0,0,0,0.08)`), generous macro-whitespace, and typographic contrast.
- **Dual-Tone Dimensional Split**:
  - **Upper World**: Warm archival broadsheet cream (`#F6F4EE`) with deep ink text (`#111317`) and delicate museum editorial rules for historical lore and investigative reports.
  - **The Upside Down Void**: Inky obsidian canvas (`#0A0B0E`) with luminous crimson accents (`#E50914`), floating atmospheric dust spores, and refined monospace telemetry.
- **Eyebrow Restraint**: Maximum 1 small tracking label per 3 sections. Do not repeat the same mechanical label pattern on every section.

## 2. Stranger Things Thematic Integration
The theme is conveyed through **cinematic art direction** rather than novelty plastic widgets:
1. **The Iconic Title Rules**: The classic Stranger Things serif title bar framing with crisp glowing crimson rules.
2. **Floating Spore Particles**: Subtle, GPU-accelerated atmospheric particulates drifting in the background of the void sections (`UpsideDownSpores.jsx`).
3. **Thematic Lore**: Hawkins National Laboratory clearance levels, Hawkins Gazette archival dispatches, and declassified project tracks.
4. **Authentic Assets**: Use real silhouettes (`cyclists.png`, `shadows.png`), genuine trophies (`1st-inner.png`, `2nd-inner.png`, `3rd-inner.png`), and real team photography (all 37 files in `public/team/`).

## 3. Typographic Architecture
- **Display Serif**: `Cinzel`, `Playfair Display`, or custom Stranger Things letter-spaced serif.
- **Body & Sans**: `Space Grotesk` / clean geometric sans with 1.6 line-height.
- **Telemetry & Metadata**: `Space Mono` / `Courier Prime` for coordinates, dates, and classification tags.

## 4. Motion & Interactivity (Framer Motion)
- **Scroll Entry**: Staggered text mask reveals (`opacity: 0, y: 20` to `opacity: 1, y: 0` with `cubic-bezier(0.16, 1, 0.3, 1)`).
- **Tab Switching**: Smooth layout transitions using `AnimatePresence`.
- **Horizontal Highlights Reel**: Infinite fluid marquee looping 14 chronological photographic evidence records with modal lightbox magnification.
- **Button Micro-Interactions**: Tactile `scale(0.98)` on click, subtle crimson glow on hover.

## 5. Devfolio Integration Invariant
- The official Devfolio SDK (`https://apply.devfolio.co/v2/sdk.js`) and application container (`apply-button` with `data-hackathon-slug="hackinverse-s1"`) must remain functional and unmodified.

## 6. Content & Event Truth Invariants
1. **Brand Identity**: The event is **HackInverse** (presented by Magistics, but HackInverse is the primary brand across all headers, archives, contraband, and stickers).
2. **Daylight Sprint Protocol**: Single-day offline daylight hackday (08:30 AM to 06:30 PM on October 11, 2025; next edition 2026). No late-night or overnight references.
3. **Open Innovation Cash Bounty**: ₹13,000 Total Cash Bounty (₹5,000 1st, ₹4,000 2nd, ₹3,000 3rd, ₹1,000 Judges' Special Mention) + CodeCrafters 1-Year VIP Memberships.
4. **Responsive Mobile Podium**: Mobile viewports must display 1st Place champion card at the top (`order-1 md:order-2`), followed by 2nd and 3rd.
5. **Team Roster & Personnel Hierarchy**:
   - Command Directors: Abhirup Datta Khan (Founder & Lead) elevated via vertical offset (`sm:-translate-y-6`) and crimson border, sharing identical width (`280px`) and aspect ratio with Rupsha Das (Co-Organizer).
   - Media Leads: Pritam Sardar (`MEDIA LEAD`) and Karishma Gupta (`VIDEO LEAD`).
   - Member Details: All core members feature inspiring personal taglines rather than corporate job titles.
6. **Audio Unity**: A single dedicated audio synthesizer in the top ticker tape (`EditorialTicker.jsx`) controls ambient sound; no duplicate buttons.
7. **Hero Video Presentation**: Hero background video runs at `opacity-100` with calibrated WCAG contrast scrims and `scale-[1.18]` edge-to-edge bleed, eliminating all black pillarbox seams.
8. **Responsive Navigation Discipline**: Navbar maintains consistent vertical geometry (`h-14 sm:h-16`) across all breakpoints without brand/walkie collisions on narrow mobile viewports (<380px), balanced 2-button action layout on tablets, and dynamically aligned surveillance drawers (`top-14 sm:top-16`).

## 7. Quality Gates & Regression Verification
- **Automated Regression Suite**: `node --test tests/event-content.test.js` must pass 100% of tests.
- **Zero Lint Errors**: `npm run lint` must pass cleanly.
- **Zero Build Warnings**: `npm run build` must produce an optimized production bundle.
- **Responsive Layout**: Tested across mobile (375px), tablet (768px), and desktop (1440px+).
