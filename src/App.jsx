import { Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Planets from "./pages/Planets";
import GalaxyFacts from "./pages/GalaxyFacts";
import Missions from "./pages/Missions";
import StarsNebulae from "./pages/StarsNebulae";
import MediaGallery from "./pages/MediaGallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MediaDetails from "./pages/MediaDetails";

/**
 * Today's Version (React 19 + React Router 7)
 * Logic and UI remain unchanged.
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="planets" element={<Planets />} />
        <Route path="galaxy-facts" element={<GalaxyFacts />} />
        <Route path="missions" element={<Missions />} />
        <Route path="stars-nebulae" element={<StarsNebulae />} />
        <Route path="media-gallery" element={<MediaGallery />} />
        <Route path="/media-details" element={<MediaDetails/>} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
