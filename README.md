# HACKINVERSE // THE UPSIDE DOWN HACKDAY
### Official Digital Command & Archival Broadside

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-black?style=flat&logo=framer&logoColor=white)](https://motion.dev/)
[![Tests](https://img.shields.io/badge/Tests-17%2F17_Passing-brightgreen?style=flat)](file:///d:/Magistics/Hackinverse/hackinverse%20website/tests/event-content.test.js)


**HackInverse** is Eastern India's premier collegiate engineering convergence and hackday, organized at JIS University, Agarpara, Kolkata. The website is crafted with an ultra-clean **Minimalist Editorial & Stranger Things Dual-Tone** aesthetic—pairing 1980s Hawkins Gazette archival investigative broadsheet aesthetics with the atmospheric, inky obsidian void of the Upside Down.

---

## ⚡ Core Event Architecture & Verified Facts

- **Format**: Single-day offline daylight sprint (08:30 AM to 06:30 PM on October 11, 2025; next edition 2026).
- **Venue Coordinates**: JIS University Auditorium & Laboratory Complex, 81 Nilgunj Road, Agarpara, Kolkata 700109.
- **Challenge Tracks**:
  - `TRK-01`: Autonomous Systems & Machine Intelligence
  - `TRK-02`: Decentralized Systems & Web3
  - `TRK-03`: Healthcare & Bio-Telemetry
  - `TRK-04`: Environmental Intelligence & Green Tech
  - `TRK-05`: Open Innovation Sprint (**₹13,000 Total Cash Bounty** across 1st, 2nd, 3rd, and Judges' Special Mention)
- **Podium Champions**:
  - **1st Place (Grand Champion)**: *Team Tropical Crush* — ₹5,000 Direct Cash + CodeCrafters 1-Year VIP Memberships
  - **2nd Place (First Runner-Up)**: *Team ChatMasala* — ₹4,000 Direct Cash + CodeCrafters 1-Year VIP Memberships
  - **3rd Place (Second Runner-Up)**: *Team Draft* — ₹3,000 Direct Cash + CodeCrafters 1-Year VIP Memberships
  - **Judges' Special Mention**: ₹1,000 Direct Cash Bounty
- **Responsive Podium UX**: Automatically reorders to `1st Place → 2nd Place → 3rd Place` on mobile devices, while providing an elevated center-podium layout on desktop screens.
- **Full-Spectrum Breakpoint Architecture**: Fluid clamp typography `clamp(1.75rem, 6.8vw, 6.85rem)` in an expanded `max-w-6xl xl:max-w-7xl` container eliminates letter truncation across all mobile viewports (320px–414px) and desktop screens (1024px–4K), paired with `overflow-x: clip` to strictly prevent horizontal overflow.
- **Mobile Touch Profile States**: Mobile and tablet users can tap to activate profile cards in the Team Squad and Mentors/Jury sections, replicating full desktop hover effects (photo color restore, scale zoom, crimson glow, and highlighted name) with single-card focus and outside-click dismissal.
- **Asset Performance & Lazy Loading**: 94.7% total image payload reduction (86MB down to 4.6MB) across all 51 team portraits and event photos, enforcing native `loading="lazy"`, off-thread `decoding="async"`, and `will-change-transform` GPU layer compositing for the infinite marquee.

---

## 🎨 Design System & Dual-Tone Canvases

### 1. Canvas A: The Hawkins Broadsheet Archive (`#F6F4EE`)
- **Sections**: Genesis & Telemetry (`JourneyMetricsSection.jsx`), Origin Story (`AboutSection.jsx`).
- **Typography**: Editorial drop-caps, Playfair Display serif headlines, aged typewriter charcoal body copy, and 1px delicate paper hairline dividers.

### 2. Canvas B: The Upside Down Void (`#0A0B0E`)
- **Sections**: Hero, Tracks, Prizes, Event Highlights, Team Squad, Venue, Guidelines, FAQ, Footer.
- **Atmosphere**: Inky obsidian canvas, luminous crimson accents (`#E50914`), GPU-accelerated atmospheric dust particles (`UpsideDownSpores.jsx`), and glowing hairline framing.

---

## 👥 Field Operatives & Leadership Structure

- **Command Directors**:
  - **Abhirup Datta Khan**: Founder & Lead (Elevated podium offset `sm:-translate-y-6`, glowing crimson neon border, sharing matching card width `280px` and aspect ratio).
  - **Rupsha Das**: Co-Organizer (Directly aligned beside Founder & Lead, sharing matching card width `280px` and aspect ratio).
- **Squad Leads**:
  - **Pritam Sardar**: Media Lead (`MEDIA LEAD` badge)
  - **Karishma Gupta**: Video Editing Lead (`VIDEO LEAD` badge)
  - **Samyamay Bhattacharjee**: Event Operations Lead
  - **Saptorsi Ghose Dastidar**: Corporate Alliances Lead
  - **Nandini Pandey**: Marketing Lead
- **Member Taglines**: All core team members feature inspiring, personal taglines reflecting their contributions rather than corporate titles.

---

## 📸 Photographic Archival Reel

The **Highlights Section** (`HighlightsSection.jsx`) showcases authentic event photography from HackInverse 1.0 via an infinite Framer Motion horizontal marquee:
- Keynote kickoffs, hardware assembly sprints, mentor debugging rounds, on-stage pitching, and jury evaluations.
- Full interactive lightbox inspection with Stranger Things classification metadata and date-stamps (`11 OCT 2025`).

---

## 🛠 Tech Stack & Dependencies

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | React 19 + Vite 6 | Lightning-fast HMR and reactive component tree |
| **Styling** | Tailwind CSS v4 + Vanilla CSS | Hairline borders, typography scales, dual-tone tokens |
| **Animation** | Framer Motion | Smooth layout morphing, staggered reveals, infinite marquee |
| **Icons** | Lucide React | Minimalist teletype and telemetry icons |
| **Audio** | HTML5 Web Audio (`EditorialTicker.jsx`) | Atmospheric 80s Stranger Things audio synthesizer |
| **Registration** | Devfolio SDK v2 | Verified hacker application portal |

---

## 🚀 Getting Started

### 1. Installation
```bash
git clone https://github.com/Magistics/HackInverse-Website.git
cd "hackinverse website"
npm install
```

### 2. Local Development
```bash
npm run dev
```
The application will launch at `http://localhost:5173/`.

### 3. Verification & Quality Gates
```bash
# Run automated event content & regression test suite (17 passing tests)
node --test tests/event-content.test.js

# Run ESLint code quality checks
npm run lint

# Compile production-ready client bundle
npm run build
```

---

## 📂 Repository Structure

```
├── public/                     # Static assets, fonts, sounds, team & highlight photos
│   ├── highlights/             # 14 archival event photography JPEGs
│   ├── team/                   # 37 verified operative polaroid portraits
│   └── trophies/               # Authentic 3D prize trophy renders
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx    # Broadsheet origin story
│   │   ├── Duration.jsx        # Minimalist countdown teletype
│   │   ├── FAQ.jsx             # Hairline accordion Q&A
│   │   ├── Footer.jsx          # Telecommunications outpost & coordinates
│   │   ├── HeroSection.jsx     # Glowing Stranger Things serif title, 100% opacity video & edge bleed
│   │   ├── Navbar.jsx          # Responsive glass header, collision-free walkie dial & aligned drawer
│   │   ├── Editorial/          # Ticker tape with audio player & spore canvas
│   │   ├── Gallery/            # 37-member polaroid squad grid & filter tabs
│   │   ├── Highlights/         # Framer Motion horizontal marquee & lightbox
│   │   ├── Journey/            # 2025 Genesis anomaly & archival broadsheet
│   │   ├── Perks/              # Official HackInverse contraband & provisions
│   │   ├── Prizes/             # Responsive 1st/2nd/3rd place bounty matrix
│   │   ├── Schedule/           # Daylight protocol timeline
│   │   ├── Sponsors/           # Silver sponsor CodeCrafters & partners
│   │   ├── Tracks/             # 5 challenge domains & ₹13,000 cash breakdown
│   │   └── Venue/              # JIS University coordinates & retro TV
│   ├── App.jsx                 # Master page assembly & scroll context
│   ├── index.css               # Hairline rules, Stranger Things glows & resets
│   └── main.jsx                # Application entry point
├── specs/                      # Feature specifications, implementation plans & tasks
└── tests/                      # Automated regression tests (event-content.test.js)
```

---

## 📜 Covenant & Protocols

HackInverse is governed by the official Code of Conduct ensuring radical inclusivity, safety, and technical integrity. All rights reserved by HackInverse.
