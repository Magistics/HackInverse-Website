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

function App() {
    return (
        <>
            <div className="w-full">
                <Calender />
                <AboutSection />
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
