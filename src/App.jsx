import "./index.css";
import React, { useRef } from "react";
import Navbar from "./components/Navbar.jsx";
import EditorialTicker from "./components/Editorial/EditorialTicker.jsx";
import UpsideDownSpores from "./components/Editorial/UpsideDownSpores.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Duration from "./components/Duration.jsx";
import JourneyMetricsSection from "./components/Journey/JourneyMetricsSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import TracksSection from "./components/Tracks/TracksSection.jsx";
import PerksSection from "./components/Perks/PerksSection.jsx";
import PrizesSection from "./components/Prizes/PrizesSection.jsx";
import ScheduleSection from "./components/Schedule/ScheduleSection.jsx";
import MentorsSection from "./components/Mentors/MentorsSection.jsx";
import SponsorsSection from "./components/Sponsors/SponsorsSection.jsx";
import CommunityPartnersSection from "./components/Community/CommunityPartnersSection.jsx";
import HighlightsSection from "./components/Highlights/HighlightsSection.jsx";
import GallerySection from "./components/Gallery/GallerySection.jsx";
import Venue from "./components/Venue/VenueSection.jsx";
import CodeOfConductSection from "./components/Guidelines/CodeOfConductSection.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

import HawkinsHUD from "./components/Editorial/HawkinsHUD.jsx";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const sponsorsRef = useRef(null);
  const venueRef = useRef(null);
  const agendaRef = useRef(null);
  const teamsRef = useRef(null);

  const scrollToView = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <CustomCursor />
      
      {/* Ambient Upside Down Floating Spores Canvas */}
      <UpsideDownSpores />

      {/* Persistent Hawkins Lab Telemetry & Scroll Progress HUD */}
      <HawkinsHUD />

      <div className="relative z-10 min-h-screen bg-[#06080e] text-[#ede8df] overflow-x-hidden cursor-default md:cursor-none selection:bg-[#ff003c] selection:text-white">
        {/* Top Wire-Dispatch Ticker Tape */}
        <EditorialTicker />

        {/* Floating Laboratory Clearance Header Bar */}
        <header className="sticky top-0 left-0 right-0 z-50">
          <Navbar
            scrollToView={scrollToView}
            refs={{
              home: homeRef,
              about: aboutRef,
              sponsors: sponsorsRef,
              venue: venueRef,
              agenda: agendaRef,
              teams: teamsRef,
            }}
          />
        </header>

        <main>
          {/* Chapter 0: The Breach Console & Devfolio Application */}
          <section ref={homeRef} className="mb-10 md:mb-16">
            <HeroSection />
          </section>

          {/* Chapter 1: 48-Hour Protocol & Specification Strip */}
          <section className="py-6 md:py-10">
            <Duration />
          </section>

          {/* Dual-Tone Dimensional Split: The Hawkins Gazette Broadsheet Archive (Chapters 02 & 03) */}
          <div className="bg-[#f6f4ee] text-[#111317] border-y border-[#e5e0d5] my-16 md:my-24">
            {/* Chapter 2: The Expedition / Incident Metrics Telemetry */}
            <JourneyMetricsSection />

            {/* Chapter 3: The Phenomenon / Investigative Broadsheet */}
            <div ref={aboutRef}>
              <AboutSection />
            </div>
          </div>

          {/* Chapter 4: Breach Problem Tracks & Research Domains */}
          <section className="my-16 md:my-24">
            <TracksSection />
          </section>

          {/* Chapter 5: Operative Provisions & Hacker Rations */}
          <section className="my-16 md:my-24">
            <PerksSection />
          </section>

          {/* Chapter 6: Department Bounty Matrix & Cash Grants */}
          <section className="my-16 md:my-24">
            <PrizesSection />
          </section>

          {/* Chapter 7: Chronological Breach Protocol Sequence */}
          <section ref={agendaRef} className="my-16 md:my-24">
            <ScheduleSection />
          </section>

          {/* Chapter 8: Personnel Clearances & Mentorship Advisory Board */}
          <section className="my-16 md:my-24">
            <MentorsSection />
          </section>

          {/* Chapter 9: Institutional Benefactors & Global Tech Alliances */}
          <section ref={sponsorsRef} className="my-16 md:my-24">
            <SponsorsSection />
          </section>

          {/* Chapter 10: Allied Underground Community Hubs */}
          <section className="my-16 md:my-24">
            <CommunityPartnersSection />
          </section>

          {/* Chapter 11: On-Ground Field Archives // Event Highlights Reel */}
          <section className="my-16 md:my-24">
            <HighlightsSection />
          </section>

          {/* Chapter 12: Core Field Operations Squad Polaroid Dossiers */}
          <section ref={teamsRef} className="my-16 md:my-24">
            <GallerySection />
          </section>

          {/* Chapter 12: Surface Coordinates & Retro TV Terminal */}
          <section ref={venueRef} className="my-16 md:my-24">
            <Venue />
          </section>

          {/* Chapter 13: Laboratory Safety Directives & MLH Covenant */}
          <section className="my-16 md:my-24">
            <CodeOfConductSection />
          </section>

          {/* Chapter 14: Declassified Inquiries & Debriefing Q&A */}
          <section className="my-16 md:my-24">
            <FAQ />
          </section>
        </main>

        {/* Hawkins Telecommunications Outpost & Broadsheet Gazette Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
