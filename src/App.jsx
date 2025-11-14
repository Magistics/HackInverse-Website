import "./index.css";
import GallerySection from "./components/Gallery/GallerySection";
import PrizesSection from "./components/Prizes/PrizesSection";
import Description from "./components/Description/Description";
import TracksSection from "./components/Tracks/TracksSection";
import ElevatorAnimation from "./components/Elevator/ElevatorAnimation";
import Venue from "./components/Venue/VenueSection";
import SponsorsSection from "./components/Sponsors/SponsorsSection";
import Calender from "./Calender.jsx";
import AboutSection from "./AboutSection.jsx";
import Sponsors from "./Sponsors.jsx";

function App() {
    return (
        <>
            <div className="w-full">
                <Calender />
                <AboutSection />
                <Sponsors />
                <SponsorsSection />
                <GallerySection />
                <PrizesSection />
                <Description />
                <TracksSection />
                <ElevatorAnimation />
                <Venue />
            </div>
        </>
    );
}

export default App;
