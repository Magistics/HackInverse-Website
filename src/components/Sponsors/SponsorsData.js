export const sponsorTiers = [
  {
    id: "gold",
    tierTitle: "HACKINVERSE GOLD SPONSOR",
    tierBadge: "PRIMARY SPONSOR // GOLD TIER",
    description:
      "Anchor institutional partner powering the official hackday application, review, and judging pipeline.",
    gridCols: "grid-cols-1 max-w-xl mx-auto",
    sponsors: [
      {
        name: "Devfolio",
        src: "/devfolio_logo-white.png",
        alt: "Devfolio - HackInverse Gold Sponsor",
        href: "https://devfolio.co/",
        desc: "Official Hackday Application, Review & Judging Platform",
        badge: "GOLD PARTNER",
        highlight: true,
      },
    ],
  },
  {
    id: "silver",
    tierTitle: "HACKINVERSE SILVER SPONSORS",
    tierBadge: "DEV MASTERY & ECOSYSTEM ALLIANCE // SILVER TIER",
    description:
      "Industry leaders delivering developer tooling, global mission advocacy, and collegiate developer network access.",
    gridCols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    sponsors: [
      {
        name: "CodeCrafters",
        src: "/codecrafters_white.png",
        alt: "CodeCrafters Logo (White)",
        href: "https://codecrafters.io/",
        desc: "Advanced Developer Challenge Platform & $2,500+ VIP Grants",
        badge: "SILVER SPONSOR",
      },
      {
        name: "Mercy For Animals",
        src: "/mercyforanimals.png",
        alt: "Mercy For Animals Logo",
        href: "https://mercyforanimals.org/",
        desc: "Global Welfare Advocacy & Collegiate Swag Benefactor",
        badge: "SILVER SPONSOR",
      },
      {
        name: "OSEN",
        src: "/osen.jpeg",
        alt: "OSEN - Open Source Engineers Network",
        href: "https://osen.live/",
        desc: "Open Source Engineers Network & Community Alliance",
        badge: "SILVER SPONSOR",
      },
      {
        name: "HackNest",
        src: "/hacknest-logo.png",
        alt: "HackNest Logo",
        href: "https://hacknest.co.in/",
        desc: "Powering The Hackathon Ecosystem & Collegiate Network",
        badge: "SILVER SPONSOR",
      },
    ],
  },
  {
    id: "platform-05",
    tierTitle: "HACKINVERSE 0.5 ONLINE PLATFORM SPONSOR",
    tierBadge: "HERITAGE ARCHIVE // EDITION 0.5",
    description:
      "The official online platform partner that hosted and powered HackInverse 0.5, laying the foundation for our flagship in-person edition.",
    gridCols: "grid-cols-1 max-w-xl mx-auto",
    sponsors: [
      {
        name: "Unstop",
        src: "/Unstop.png",
        alt: "Unstop - HackInverse 0.5 Online Platform Sponsor",
        href: "https://unstop.com/o/lLDB7kY?lb=ORnPbofo&utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Abhi0199",
        desc: "Official Online Platform Sponsor for HackInverse 0.5",
        badge: "EDITION 0.5 PLATFORM SPONSOR",
        editionBadge: "HACKINVERSE 0.5 PLATFORM",
        needsWhiteBg: true,
      },
    ],
  },
];

// Flat list maintained for any consumer requiring direct iterations
export const sponsorsList = [
  ...sponsorTiers[0].sponsors,
  ...sponsorTiers[1].sponsors,
  ...sponsorTiers[2].sponsors,
];
