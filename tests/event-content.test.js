import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { sponsorTiers } from "../src/components/Sponsors/SponsorsData.js";

const DISCORD_INVITE = "https://discord.gg/svTwnYX5XT";

test("CodeCrafters is the linked Silver Sponsor", () => {
  const silverTier = sponsorTiers.find((t) => t.id === "silver");
  const codeCrafters = silverTier?.sponsors.find((s) => s.name === "CodeCrafters");
  assert.ok(codeCrafters, "CodeCrafters should exist in silver sponsors");
  assert.equal(codeCrafters.href, "https://codecrafters.io/");
});

test("the prize podium lists the CodeCrafters VIP memberships", async () => {
  const source = await readFile(
    new URL("../src/components/Prizes/PrizesSection.jsx", import.meta.url),
    "utf8",
  );

  assert.match(source, /2-Year CodeCrafters VIP/i);
  assert.match(source, /1-Year CodeCrafters VIP/i);
  assert.match(source, /6-Month CodeCrafters VIP/i);
});

test("every rendered Discord destination uses the current invite", async () => {
  const discordSurfaces = [
    "../src/components/Duration.jsx",
    "../src/components/AboutSection.jsx",
    "../src/components/Footer.jsx",
  ];

  for (const path of discordSurfaces) {
    const source = await readFile(new URL(path, import.meta.url), "utf8");
    const links = source.match(/https:\/\/discord\.gg\/[A-Za-z0-9]+/g) ?? [];

    assert.ok(links.length > 0, `${path} should contain a Discord link`);
    assert.deepEqual(
      [...new Set(links)],
      [DISCORD_INVITE],
      `${path} should use the current Discord invite`,
    );
  }
});

test("highlights section is mounted and uses Framer Motion horizontal marquee with event photos", async () => {
  const appSource = await readFile(
    new URL("../src/App.jsx", import.meta.url),
    "utf8"
  );
  assert.match(appSource, /HighlightsSection/);

  const highlightsSource = await readFile(
    new URL("../src/components/Highlights/HighlightsSection.jsx", import.meta.url),
    "utf8"
  );
  assert.match(highlightsSource, /framer-motion/);
  assert.match(highlightsSource, /repeat:\s*Infinity/);
  assert.match(highlightsSource, /\/highlights\/check-in-line\.jpg/);
  assert.match(highlightsSource, /\/highlights\/prize-distribution\.jpg/);
  assert.match(highlightsSource, /\/highlights\/group-image\.jpg/);
  assert.match(highlightsSource, /\/highlights\/orgs-and-leads\.jpg/);
  assert.match(highlightsSource, /\/highlights\/starting-keynote\.jpg/);
});

test("command directors keeps abhirup elevated higher with matching card dimensions beside rupsha", async () => {
  const gallerySource = await readFile(
    new URL("../src/components/Gallery/GallerySection.jsx", import.meta.url),
    "utf8"
  );
  assert.match(gallerySource, /sm:-translate-y-6/);
  assert.match(gallerySource, /max-w-\[285px\] sm:w-\[280px\]/);
});

test("hero section has no duplicate audio button and keeps video muted", async () => {
  const heroSource = await readFile(
    new URL("../src/components/HeroSection.jsx", import.meta.url),
    "utf8"
  );
  assert.doesNotMatch(heroSource, /AUDIO MUTED/i);
  assert.doesNotMatch(heroSource, /toggleAudio/);
  assert.match(heroSource, /<video[^>]*muted/);

  const tickerSource = await readFile(
    new URL("../src/components/Editorial/EditorialTicker.jsx", import.meta.url),
    "utf8"
  );
  assert.match(tickerSource, /SYNTH: MUTED|SYNTH: ACTIVE/);
});

test("team squad section renders inspiring taglines instead of roles under member names", async () => {
  const gallerySource = await readFile(
    new URL("../src/components/Gallery/GallerySection.jsx", import.meta.url),
    "utf8"
  );
  assert.doesNotMatch(gallerySource, /\{member\.role\}/);
  assert.match(gallerySource, /\{member\.tagline\}/);
  assert.match(gallerySource, /Igniting the vision and leading the expedition/);
  assert.match(gallerySource, /Bringing clarity and calm to the chaos/);
});

test("genesis anomaly quote mentions year 2025", async () => {
  const journeySource = await readFile(
    new URL("../src/components/Journey/JourneyMetricsSection.jsx", import.meta.url),
    "utf8"
  );
  assert.match(journeySource, /isolated telemetry pulse in 2025/);
  assert.doesNotMatch(journeySource, /isolated telemetry pulse in 2023/);
});

test("challenge track allocation lists ₹13,000 total cash for open track", async () => {
  const tracksSource = await readFile(
    new URL("../src/components/Tracks/TracksSection.jsx", import.meta.url),
    "utf8"
  );
  assert.match(tracksSource, /₹13,000 Total Cash/);
  assert.doesNotMatch(tracksSource, /₹12,000 Total Cash/);
});

test("prize podium cards use responsive ordering with 1st place first on mobile", async () => {
  const prizesSource = await readFile(
    new URL("../src/components/Prizes/PrizesSection.jsx", import.meta.url),
    "utf8"
  );
  assert.match(prizesSource, /order-1 md:order-2/);
  assert.match(prizesSource, /order-2 md:order-1/);
  assert.match(prizesSource, /order-3 md:order-3/);
});

test("pritam is media lead and karishma is video editing lead", async () => {
  const gallerySource = await readFile(
    new URL("../src/components/Gallery/GallerySection.jsx", import.meta.url),
    "utf8"
  );
  assert.match(gallerySource, /MEDIA LEAD/);
  assert.match(gallerySource, /VIDEO LEAD/);
  assert.match(gallerySource, /Video Editing Lead/);
  assert.match(gallerySource, /Media Lead/);
});

test("highlights section contains no late-night references and uses 2025 timestamps", async () => {
  const highlightsSource = await readFile(
    new URL("../src/components/Highlights/HighlightsSection.jsx", import.meta.url),
    "utf8"
  );
  assert.doesNotMatch(highlightsSource, /LATE-NIGHT/i);
  assert.match(highlightsSource, /11 OCT 2025/);
});

test("site branding emphasizes HackInverse over Magistics for headings and archives", async () => {
  const aboutSource = await readFile(
    new URL("../src/components/AboutSection.jsx", import.meta.url),
    "utf8"
  );
  assert.match(aboutSource, /THE HACKINVERSE ORIGIN STORY/);
  assert.match(aboutSource, /ORIGIN: HACKINVERSE ARCHIVE/);

  const footerSource = await readFile(
    new URL("../src/components/Footer.jsx", import.meta.url),
    "utf8"
  );
  assert.match(footerSource, /HAWKINS OUTPOST \/\/ HACKINVERSE ARCHIVE/);
  assert.match(footerSource, /01 \/\/ About HackInverse/);
});

test("hero background video is set to full opacity with edge-to-edge bleed scaling", async () => {
  const heroSource = await readFile(
    new URL("../src/components/HeroSection.jsx", import.meta.url),
    "utf8"
  );
  assert.match(heroSource, /opacity-100/);
  assert.match(heroSource, /scale-\[1\.18\]/);
});

test("navbar enforces consistent responsive heights and aligned mobile drawer offsets", async () => {
  const navSource = await readFile(
    new URL("../src/components/Navbar.jsx", import.meta.url),
    "utf8"
  );
  assert.match(navSource, /h-14 sm:h-16 flex items-center/);
  assert.match(navSource, /top-14 sm:top-16/);
  assert.match(navSource, /h-\[calc\(100dvh-3\.5rem\)\] sm:h-\[calc\(100dvh-4rem\)\]/);
  assert.match(navSource, /gap-3\.5 xl:gap-6/);
});



test("below-the-fold images enforce native lazy loading and async decoding", async () => {
  const sectionsToCheck = [
    { file: "../src/components/AboutSection.jsx", regex: /loading="lazy"[\s\S]*decoding="async"/ },
    { file: "../src/components/Gallery/GallerySection.jsx", regex: /loading="lazy"[\s\S]*decoding="async"/ },
    { file: "../src/components/Highlights/HighlightsSection.jsx", regex: /loading="lazy"[\s\S]*decoding="async"/ },
    { file: "../src/components/Mentors/MentorsSection.jsx", regex: /loading="lazy"[\s\S]*decoding="async"/ },
    { file: "../src/components/Prizes/PrizesSection.jsx", regex: /loading="lazy"[\s\S]*decoding="async"/ },
    { file: "../src/components/Sponsors/SponsorsSection.jsx", regex: /loading="lazy"[\s\S]*decoding="async"/ },
    { file: "../src/components/Venue/VenueSection.jsx", regex: /loading="lazy"[\s\S]*decoding="async"/ },
    { file: "../src/components/Footer.jsx", regex: /loading="lazy"[\s\S]*decoding="async"/ },
  ];

  for (const { file, regex } of sectionsToCheck) {
    const source = await readFile(new URL(file, import.meta.url), "utf8");
    assert.match(source, regex, `${file} must enforce lazy loading and async decoding`);
  }

  const highlightsSource = await readFile(
    new URL("../src/components/Highlights/HighlightsSection.jsx", import.meta.url),
    "utf8"
  );
  assert.match(highlightsSource, /will-change-transform/);
});
