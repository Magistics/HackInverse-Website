import "./index.css";
import PrizesSection from "./components/Prizes/PrizesSection";
import Description from "./components/Description/Description";
import TracksSection from "./components/Tracks/TracksSection";
import ElevatorAnimation from "./components/Elevator/ElevatorAnimation";
import Venue from "./components/Venue/VenueSection";

function App() {
  return (
    <div className="app-container">
      <PrizesSection />
      <Description />
      <TracksSection />
      <ElevatorAnimation />
      <Venue />
    </div>
  );
}

export default App;