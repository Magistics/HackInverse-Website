import "./App.css";
import GallerySection from "./components/Gallery/GallerySection";
import PrizesSection from "./components/Prizes/PrizesSection";
import Description from "./components/Description/Description"; // ✅ import your Description component
import TracksSection from "./components/Tracks/TracksSection";
import ElevatorAnimation from "./components/Elevator/ElevatorAnimation";
import Venue from "./components/Venue/VenueSection";

function App() {
  return (
    <div className="app-container">
      <GallerySection />
      <PrizesSection />
      <Description />
      <TracksSection />
      <ElevatorAnimation />
      <Venue />
    </div>
  );
}

export default App;