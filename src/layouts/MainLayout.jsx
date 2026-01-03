import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedBackground from "../components/AnimatedBackground";

/**
 * Today's Version: MainLayout.jsx
 * Optimized for React 19 / Vite 6
 */
const MainLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background layer */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Area - relative z-10 preserved for UI logic */}
      <main className="relative z-10 grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
