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
                    <Navbar scrollToView={scrollToView} refs={{}} />
                </header>

                <main className="">
                    <section>
                        <HeroSection />
                    </section>

                    <section>
                        <DetailsSection />
                    </section>

                    <section>
                        <Calender />
                    </section>

                    <section>
                        <AboutSection />
                    </section>

                    <section>
                        <SponsorsSection />
                    </section>
                    
                    <section>
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

                    <section>
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
