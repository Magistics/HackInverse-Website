# Feature Specification: Minimalist Editorial & Dual-Tone Stranger Things Redesign

**Feature ID**: `001-stranger-things-editorial-redesign`  
**Status**: Completed & Verified  
**Design Reference Standards**: *Stripe Press*, *A24 Films*, *Awwwards Minimalist Editorial*, *Imaginary Forces Stranger Things Title Sequence*  
**Constitution**: [constitution.md](file:///d:/Magistics/Hackinverse/hackinverse%20website/.specify/memory/constitution.md)

---

## 1. Executive Summary & Problem Statement
The previous website implementation fell into the "AI sci-fi trope" trap by over-decorating cards with faux-hardware screws, double borders, and full-screen CRT scanlines. This specification mandates a complete pivot to **Ultra-Clean Minimalist Editorial Art Direction**:
1. **Dual-Tone Dimensional Split**: Archival broadsheet paper canvas (`#F6F4EE`) for investigative report chapters, dynamically shifting into deep inky obsidian (`#0A0B0E`) with luminous crimson accents and floating Upside Down dust motes.
2. **Hairline Structural Rules**: Replacement of all bulky card boxes with 1px hairline rules and macro-whitespace.
3. **Cinematic Framer Motion**: Buttery smooth text reveals, horizontal marquee highlights, and micro-interactions.
4. **All Hackathon & Hackday Sections**: Retained and elevated to tier-1 engineering depth with verified real-world facts.

---

## 2. User Stories & Acceptance Criteria

### P1: Core Visual & Thematic Experience
- **US-01 (Dual-Tone Art Direction)**: As a visitor, I experience a sophisticated dual-tone palette where the investigative lore sections feel like an archival broadsheet newspaper, and the breach tracks/prizes feel like the inky Upside Down void.
- **US-02 (Typographic Dominance)**: Headings command attention with dramatic serif letterforms and the iconic Stranger Things glowing red hairline bars, paired with crisp monospace metadata.
- **US-03 (Anti-Clutter Guarantee)**: No artificial screws, no heavy plastic borders, no noisy scanlines. The interface feels light, fast, and refined.
- **US-04 (Atmospheric Audio & Soundscapes)**: As an attendee, I can toggle the single dedicated 80s Stranger Things audio synthesizer from the top ticker without duplicate buttons.

### P2: Essential Hackday Functional Sections
- **US-05 (Devfolio Application)**: As a hacker, I can seamlessly apply via the official Devfolio button in the hero without any layout obstruction.
- **US-06 (Typographic Countdown)**: As a participant, I can see a minimalist real-time countdown to the event kickoff with teletype column dividers.
- **US-07 (Breach Problem Tracks)**: As an engineer, I can explore the 5 breach domains with technical requirements, tech stacks, and bounties, including the Open Innovation track with **₹13,000 Total Cash Bounty** (₹5k 1st, ₹4k 2nd, ₹3k 3rd, ₹1k Judges' Special Mention).
- **US-08 (Bounty Matrix & Responsive Podium)**: As a competitive team, I can inspect cash disbursements, CodeCrafters VIP memberships, and category awards with authentic trophy renders. On mobile screens, the podium displays **1st Place at the top, followed by 2nd and 3rd**.
- **US-09 (Single-Day Daylight Protocol)**: As an attendee, I can inspect the single-day daylight sprint schedule (08:30 AM to 06:30 PM on October 11, 2025; next edition 2026) with teletype leaders, reflecting the focused hackday format.
- **US-10 (Event Day Highlights Marquee)**: As a visitor, I can inspect an infinite Framer Motion horizontal carousel showcasing 14 chronological photographic evidence records from HackInverse 1.0 with lightbox magnification.
- **US-11 (Field Operations Roster & Hierarchy)**: As a visitor, I can view all 37 organizers and team members with authentic photos and department filters:
  - Abhirup Datta Khan (Founder & Lead) elevated on a subtle podium (`sm:-translate-y-6`) with a crimson neon border, sharing matching card width (`280px`) and aspect ratio with Rupsha Das (Co-Organizer).
  - Pritam Sardar as Media Lead (`MEDIA LEAD`) and Karishma Gupta as Video Editing Lead (`VIDEO LEAD`).
  - Inspiring personal taglines under member names rather than generic corporate roles.
- **US-12 (Venue & Logistics)**: As a traveler, I can inspect the JIS University campus coordinates and access Google Maps navigation.
- **US-13 (FAQ & Safety Covenant)**: As a participant, I can review essential questions in clean hairline accordions and read the conduct covenant.
- **US-14 (Responsive Navigation & Surveillance Drawer)**: As a user on any device (mobile 375px, tablet 768px, mid-desktop 1011px, or wide 1440px+), I experience a clean, uncrowded header with no element collisions, balanced action buttons, and an aligned full-height mobile surveillance drawer (`top-14 sm:top-16`).

---

## 3. Success Criteria
- **SC-001**: 100% of faux-hardware elements (screws, scanlines, double neon bezels) removed.
- **SC-002**: Clean hairline dividers and macro-whitespace implemented across all sections.
- **SC-003**: Devfolio SDK button loads and functions correctly.
- **SC-004**: All 37 team members rendered with real photos from `public/team/` and custom taglines.
- **SC-005**: 14 high-resolution event photographs rendered in Framer Motion horizontal marquee.
- **SC-006**: Mobile podium orders 1st place champion card first (`order-1 md:order-2`).
- **SC-007**: 100% automated test suite pass rate (17 unit tests via `node --test tests/event-content.test.js`).
- **SC-008**: Zero lint errors (`npm run lint`), zero build errors (`npm run build`), 60 FPS performance on desktop and mobile.
- **SC-009**: Hero background video calibrated to 100% opacity with `scale-[1.18]` edge-to-edge bleed, eliminating all black pillarbox seams.
- **SC-010**: Navbar maintains exact vertical geometry (`h-14 sm:h-16`) across all breakpoints without brand/walkie collision on small screens (<380px) and clean link spacing on `lg`/`xl` viewports.
- **SC-011**: All below-the-fold images enforce native `loading="lazy"` and `decoding="async"`, maintaining under 250KB per asset with marquee GPU layer compositing (`will-change-transform`).
- **SC-012**: Hero title uses fluid clamp typography `clamp(1.75rem, 6.8vw, 6.85rem)` inside `max-w-6xl xl:max-w-7xl` preventing text clipping (`CKINVER` or `ACKINVERS`) across all viewports (320px to 4K), and the navbar hides the dial on < 360px per user rule.



