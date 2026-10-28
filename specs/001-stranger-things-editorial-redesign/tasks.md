# Tasks: Minimalist Editorial & Dual-Tone Stranger Things Redesign

**Feature**: `001-stranger-things-editorial-redesign`  
**Spec**: [spec.md](file:///d:/Magistics/Hackinverse/hackinverse%20website/specs/001-stranger-things-editorial-redesign/spec.md)  
**Plan**: [plan.md](file:///d:/Magistics/Hackinverse/hackinverse%20website/specs/001-stranger-things-editorial-redesign/plan.md)  
**Constitution**: [constitution.md](file:///d:/Magistics/Hackinverse/hackinverse%20website/.specify/memory/constitution.md)

---

## Task Matrix & Implementation Checklist

### Phase 1: Spec Kit & CSS Architecture
- [x] **TASK-001**: Update `.specify/memory/constitution.md`, `spec.md`, `plan.md`, and `tasks.md`.
- [x] **TASK-002**: Refactor `src/index.css` to remove `.screw-head`, `.bezel-double`, and noisy scanlines; implement clean hairlines and dual-tone canvas tokens.
- [x] **TASK-003**: Create `UpsideDownSpores.jsx` for lightweight, GPU-accelerated ambient dust particles in the void sections.

### Phase 2: Navigation & Hero Breach Broadside
- [x] **TASK-004**: Refactor `src/components/Navbar.jsx` into an ultra-clean minimalist glass header.
- [x] **TASK-005**: Redesign `src/components/HeroSection.jsx` with dramatic Stranger Things typography, glowing hairline bars, silhouette grounding, and preserved Devfolio button.
- [x] **TASK-006**: Polish `src/components/Duration.jsx` into a minimalist typographic countdown with hairline separators.

### Phase 3: The Broadsheet Dimensional Split
- [x] **TASK-007**: Overhaul `src/components/Journey/JourneyMetricsSection.jsx` into a warm archival broadsheet newspaper spread (`#F6F4EE`) with drop caps and hairline metric rules.
- [x] **TASK-008**: Overhaul `src/components/AboutSection.jsx` into the Hawkins Gazette investigative report with archival photography and editorial typography.

### Phase 4: The Void Sections (Minimalist Hairline Grid)
- [x] **TASK-009**: Refactor `src/components/Tracks/TracksSection.jsx` into an asymmetric hairline grid with category bounties.
- [x] **TASK-010**: Refactor `src/components/Perks/PerksSection.jsx` into a clean minimalist provision list.
- [x] **TASK-011**: Redesign `src/components/Prizes/PrizesSection.jsx` with 1st/2nd/3rd podiums using authentic trophy renders and cash grants.
- [x] **TASK-012**: Polish `src/components/Schedule/ScheduleSection.jsx` with minimalist phase tabs and teletype leaders.
- [x] **TASK-013**: Refine `src/components/Mentors/MentorsSection.jsx` and `src/components/Sponsors/SponsorsSection.jsx` with clean hairline borders.
- [x] **TASK-014**: Refine `src/components/Community/CommunityPartnersSection.jsx` with seamless marquee.

### Phase 5: Personnel, Venue & Safety
- [x] **TASK-015**: Polish `src/components/Gallery/GallerySection.jsx` for all 37 team members with minimalist polaroid cards and department filters.
- [x] **TASK-016**: Refine `src/components/Venue/VenueSection.jsx` with JIS University coordinates and retro TV monitor.
- [x] **TASK-017**: Refine `src/components/Guidelines/CodeOfConductSection.jsx` with minimalist covenant typography.
- [x] **TASK-018**: Redesign `src/components/FAQ.jsx` with Stripe Press style hairlines and smooth `+` / `−` micro-interactions.
- [x] **TASK-019**: Polish `src/components/Footer.jsx` into a minimalist telecommunications outpost.

### Phase 6: Initial Verification & Quality Assurance
- [x] **TASK-020**: Run `npm run lint` and verify 0 errors, 0 warnings.
- [x] **TASK-021**: Run `npm run build` and verify clean production bundle output.
- [x] **TASK-022**: Perform interactive browser QA and record visual proof.

### Phase 7: Post-Launch Event Truth Audits & Editorial Precision
- [x] **TASK-023**: Correct Genesis anomaly telemetry quote year from 2023 to 2025 in `src/components/Journey/JourneyMetricsSection.jsx`.
- [x] **TASK-024**: Update Open Innovation Challenge Track bounty allocation from ₹12,000 to ₹13,000 Total Cash in `src/components/Tracks/TracksSection.jsx`.
- [x] **TASK-025**: Implement responsive podium ordering in `src/components/Prizes/PrizesSection.jsx` with 1st place appearing first on mobile screens (`order-1 md:order-2`).
- [x] **TASK-026**: Designate media squad leadership in `src/components/Gallery/GallerySection.jsx`: Pritam Sardar (`MEDIA LEAD`) and Karishma Gupta (`VIDEO LEAD`).
- [x] **TASK-027**: Harmonize schedule and highlights copy to single-day daylight hackday format (October 11, 2025) and remove late-night references.
- [x] **TASK-028**: Ingest high-resolution photographic evidence from `HackInverse 1.0 Highlights` into `public/highlights/` and integrate into the Framer Motion marquee (`HighlightsSection.jsx`).
- [x] **TASK-029**: Command directors geometry parity: Abhirup Datta Khan's card width & height matched to Rupsha Das (`280px`), maintaining elevated hierarchy and neon crimson border.
- [x] **TASK-030**: Event branding harmonization: prioritize HackInverse over Magistics across section headings (`THE HACKINVERSE ORIGIN STORY`) and archive labels.
- [x] **TASK-031**: Author and verify automated regression tests in `tests/event-content.test.js` (14/14 passing tests).
- [x] **TASK-032**: Comprehensive audit and update of all documentation files (`README.md`, `spec.md`, `plan.md`, `tasks.md`, `constitution.md`).
- [x] **TASK-033**: Hero background video vividness boost: elevated video to `opacity-100`, calibrated central text scrims, and scaled to `scale-[1.18]` with `origin-center` to eliminate right-side seam and achieve edge-to-edge bleed.
- [x] **TASK-034**: Automated test #14 added and passing in `tests/event-content.test.js` asserting hero video full opacity and edge-to-edge scaling.
- [x] **TASK-035**: Navbar responsive overhaul across all breakpoints: stabilized height (`h-14 sm:h-16`), compact mobile dual logo and walkie dial on `<380px`, mid-desktop spacing calibration (`gap-3.5 text-[11px]` on `lg`, `gap-6 text-xs` on `xl`), and dynamic surveillance drawer alignment (`top-14 sm:top-16`).
- [x] **TASK-036**: Author automated test #15 in `tests/event-content.test.js` asserting navbar height stability, drawer offset alignment, and breakpoint scaling.

