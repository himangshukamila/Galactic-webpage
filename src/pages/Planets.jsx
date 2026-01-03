import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import PlanetDetailModal from "../components/PlanetDetailModal";
import { staggerContainer, staggerItem } from "../utils/effects.js";
import { fetchAllPlanets, fallbackPlanetsData } from "../services/api.js";

// Mapping IDs to real transparent planet textures
const planetTextures = {
  mercury: "/planets/mercury.png",
  venus: "/planets/venus.png",
  earth: "/planets/earth.png",
  mars: "/planets/mars.png",
  jupiter: "/planets/jupiter.png",
  saturn: "/planets/saturn.png",
  uranus: "/planets/uranus.png",
  neptune: "/planets/neptune.png",
};

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [hoveredPlanet, setHoveredPlanet] = useState(null);

  useEffect(() => {
    const loadPlanets = async () => {
      try {
        const data = await fetchAllPlanets();
        setPlanets(data);
      } catch (error) {
        console.error("Failed to fetch planets, using fallback data:", error);
        setPlanets(fallbackPlanetsData);
      } finally {
        setLoading(false);
      }
    };
    loadPlanets();
  }, []);

  const planetColors = {
    mercury: "from-gray-400 to-gray-600",
    venus: "from-yellow-300 to-orange-400",
    earth: "from-blue-400 to-green-500",
    mars: "from-red-400 to-orange-600",
    jupiter: "from-orange-300 to-yellow-600",
    saturn: "from-yellow-200 to-amber-400",
    uranus: "from-cyan-300 to-blue-400",
    neptune: "from-blue-500 to-indigo-600",
  };

  const planetSizes = {
    mercury: "w-23 h-23",
    venus: "w-20 h-20",
    earth: "w-20 h-20",
    mars: "w-18 h-18",
    jupiter: "w-32 h-32",
    saturn: "w-32 h-32",
    uranus: "w-24 h-24",
    neptune: "w-30 h-30",
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="loading-orbit mx-auto mb-4" />
          <p className="text-gray-400">Loading celestial bodies...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Planets of Our Solar System"
          subtitle="Explore the eight magnificent planets orbiting our Sun, each with unique characteristics and mysteries"
        />

        {/* Interactive Solar System View */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-200 mb-20 bg-linear-to-br from-cosmic-navy/30 to-cosmic-purple/20 rounded-3xl border border-purple-500/20 overflow-hidden"
        >
          {/* Sun in center */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 60px rgba(251, 191, 36, 0.6)",
                "0 0 80px rgba(251, 191, 36, 0.8)",
                "0 0 60px rgba(251, 191, 36, 0.6)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-linear-to-br from-yellow-300 to-orange-500 rounded-full z-10"
          >
            <div className="w-full h-full rounded-full bg-linear-to-br from-yellow-200 to-orange-400 animate-pulse" />
          </motion.div>

          {/* Planets positioned in orbits */}
          {planets.map((planet, index) => {
            const planetId = planet.id || planet.englishName?.toLowerCase();
            const angle = (index / planets.length) * 360;
            const radius = 180 + index * 25;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            const colorClass =
              planetColors[planetId] || "from-purple-400 to-blue-500";
            const sizeClass = planetSizes[planetId] || "w-20 h-20";

            return (
              <motion.div
                key={planet.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                onClick={() => setSelectedPlanet(planet)}
                onMouseEnter={() => setHoveredPlanet(planetId)}
                onMouseLeave={() => setHoveredPlanet(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    y: {
                      duration: 3 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className={`${sizeClass} relative group flex items-center justify-center`}
                >
                  {/* Real Planet Image Container */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={planetTextures[planetId]}
                      alt={planet.englishName}
                      /* 1. object-contain: Shows the FULL image without cutting off rings/edges.
         2. drop-shadow: Applies a glow to the shape of the PNG, not a box.
      */
                      className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                      onError={(e) => {
                        e.target.src = "/planets/earth.png";
                      }}
                    />
                  </div>

                  {/* Ambient Glow behind the transparent image */}
                  <motion.div
                    animate={{
                      opacity: hoveredPlanet === planetId ? 0.5 : 0.2,
                    }}
                    className={`absolute inset-0 blur-2xl -z-10 bg-linear-to-br ${colorClass} rounded-full`}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredPlanet === planetId ? 1 : 0.7,
                    y: hoveredPlanet === planetId ? 0 : 10,
                  }}
                  className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap"
                >
                  <span className="text-white font-semibold text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    {planet.englishName}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Planet Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {planets.map((planet) => {
            const planetId = planet.id || planet.englishName?.toLowerCase();
            const colorClass =
              planetColors[planetId] || "from-purple-400 to-blue-500";

            return (
              <motion.div
                key={planet.id}
                variants={staggerItem}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedPlanet(planet)}
                className="bg-linear-to-br from-cosmic-navy/50 to-cosmic-purple/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-lg cursor-pointer card-3d group"
              >
                <div className="relative mb-6 flex justify-center h-32 items-center">
                  {/* Rotating Real Planet in Card */}
                  <motion.img
                    src={planetTextures[planetId] || planetTextures.earth}
                    alt={planet.englishName}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 40,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-28 h-28 object-contain drop-shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Underglow for depth */}
                  <div
                    className={`absolute w-20 h-20 rounded-full blur-2xl opacity-10 -z-10 bg-linear-to-br ${colorClass}`}
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 font-space text-center group-hover:text-purple-400 transition-colors">
                  {planet.englishName}
                </h3>

                <div className="space-y-2 text-sm">
                  {planet.gravity && (
                    <div className="flex justify-between text-gray-400">
                      <span>Gravity:</span>
                      <span className="text-white">
                        {planet.gravity.toFixed(2)} m/s²
                      </span>
                    </div>
                  )}
                  {planet.avgTemp !== undefined && (
                    <div className="flex justify-between text-gray-400">
                      <span>Temperature:</span>
                      <span className="text-white">{planet.avgTemp}°C</span>
                    </div>
                  )}
                  {planet.density && (
                    <div className="flex justify-between text-gray-400">
                      <span>Density:</span>
                      <span className="text-white">
                        {planet.density.toFixed(0)} kg/m³
                      </span>
                    </div>
                  )}
                </div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="mt-4 text-purple-400 font-medium flex items-center justify-center gap-2"
                >
                  <span>View Details</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {selectedPlanet && (
        <PlanetDetailModal
          planet={selectedPlanet}
          onClose={() => setSelectedPlanet(null)}
        />
      )}
    </div>
  );
};

export default Planets;
