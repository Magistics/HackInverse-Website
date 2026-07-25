import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { sponsorsData } from "../src/components/Sponsors/SponsorsData.js";

const DISCORD_INVITE = "https://discord.gg/HBabqw2UG";

test("CodeCrafters is the linked Silver Sponsor", () => {
  assert.deepEqual(sponsorsData.silver, [
    {
      src: "/codecrafters-horizontal-dark.svg",
      alt: "CodeCrafters",
      href: "https://codecrafters.io/",
    },
  ]);
});

test("the prize podium lists the CodeCrafters VIP memberships", async () => {
  const source = await readFile(
    new URL("../src/components/Prizes/PrizesSection.jsx", import.meta.url),
    "utf8",
  );

  assert.match(source, /2-year CodeCrafters VIP membership/);
  assert.match(source, /1-year CodeCrafters VIP membership/);
  assert.match(source, /6-month CodeCrafters VIP membership/);
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
