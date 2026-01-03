import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Components
import HeroSection from "../components/HeroSection";
import PlanetCard from "../components/PlanetCard";
import PlanetDetailModal from "../components/PlanetDetailModal";

// Modernized Imports (animations.js -> effect.js)
import { staggerContainer, staggerItem } from "../utils/effects.js";
import { fallbackPlanetsData } from "../services/api.js";

/**
 * Today's Version: Home.jsx
 * Optimized for React 19 + Tailwind v4 (bg-linear syntax)
 */
const Home = () => {
  const navigate = useNavigate();
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  // Using fallback data for popular planets (Strictly preserved logic)
  const popularPlanets = fallbackPlanetsData.slice(0, 4);

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Popular Planets Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-space">
              Popular Explore
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Begin your journey with these fascinating celestial bodies
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {popularPlanets.map((planet) => (
              <motion.div key={planet.id} variants={staggerItem}>
                <PlanetCard
                  planet={planet}
                  onClick={() => setSelectedPlanet(planet)}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            {/* Updated to bg-linear to fix VS Code error */}
            <button
              onClick={() => navigate("/planets")}
              className="px-8 py-3 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-cosmic-lg transition-all duration-300 btn-cosmic"
            >
              View All Planets
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Feature 1 - Updated bg-linear */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-linear-to-br from-cosmic-navy/50 to-cosmic-purple/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-lg"
            >
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-space">
                Explore Planets
              </h3>
              <p className="text-gray-400">
                Discover detailed information about all planets with real-time
                NASA data.
              </p>
            </motion.div>

            {/* Feature 2 - Updated bg-linear */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-linear-to-br from-cosmic-navy/50 to-cosmic-purple/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-space">
                Space Gallery
              </h3>
              <p className="text-gray-400">
                Browse stunning images and videos from NASA's extensive media
                library.
              </p>
            </motion.div>

            {/* Feature 3 - Updated bg-linear */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-linear-to-br from-cosmic-navy/50 to-cosmic-purple/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-lg"
            >
              <div className="w-16 h-16 bg-yellow-600/20 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-space">
                Mission Updates
              </h3>
              <p className="text-gray-400">
                Stay updated with the latest space missions and astronomical
                events.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            /* Updated to bg-linear to fix VS Code error */
            className="relative bg-linear-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-space">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of space enthusiasts exploring the cosmos. Begin
                your adventure today.
              </p>
              <button
                onClick={() => navigate("/explore")}
                className="px-10 py-4 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg shadow-cosmic-lg hover:shadow-glow transition-all duration-300 btn-cosmic"
              >
                Begin Exploration
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Planet Detail Modal */}
      {selectedPlanet && (
        <PlanetDetailModal
          planet={selectedPlanet}
          onClose={() => setSelectedPlanet(null)}
        />
      )}
    </div>
  );
};

export default Home;
