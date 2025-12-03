import "./index.css";
import GallerySection from "./components/Gallery/GallerySection";
import PrizesSection from "./components/Prizes/PrizesSection";
import Description from "./components/Description/Description";
import TracksSection from "./components/Tracks/TracksSection";
import ElevatorAnimation from "./components/Elevator/ElevatorAnimation";
import Venue from "./components/Venue/VenueSection";
import SponsorsSection from "./components/Sponsors/SponsorsSection";
import Calender from "./components/Calender.jsx";
import AboutSection from "./components/AboutSection.jsx";
import Footer from "./components/Footer.jsx";
import FAQ from "./components/FAQ.jsx";
import { useRef } from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import DetailsSection from "./components/DetailsSection.jsx";

function App() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const sponsorsRef = useRef(null);
    const venueRef = useRef(null);
    const agendaRef = useRef(null);
    const teamsRef = useRef(null); 

    const scrollToView = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <>
            <div className="min-h-screen background-dark overflow-x-hidden">
                {/* Navbar */}
                <header className="fixed top-0 left-0 right-0 z-50">
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

                <main className="">
                    <section ref={homeRef} className=" md:mb-40">
                        <HeroSection />
                    </section>

                    <section className="">
                        <DetailsSection />
                    </section>

                    <section ref={agendaRef} className="my-32 md:my-44 mx-6 md:mx-0">
                        <Calender />
                    </section>

                    <section ref={aboutRef} className="mb-10 md:mb-20 mx-6 md:mx-0">
                        <AboutSection />
                    </section>

                    <section ref={sponsorsRef}>
                        <SponsorsSection />
                    </section>
                    
                    <section ref={teamsRef}>
                        <GallerySection />
                    </section>

                    <section>
                        <PrizesSection />
                    </section>

                    <section>
                        <Description />
                    </section>

                    <section>
                        <TracksSection />
                    </section>

                    <section>
                        <ElevatorAnimation />
                    </section>

                    <section ref={venueRef}>
                        <Venue />
                    </section>

                    <section>
                        <FAQ />
                    </section>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}

export default App;
