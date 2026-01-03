import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Planet image mapping (Logic strictly preserved)
const planetImages = {
  mercury: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800",
  venus: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=800",
  earth: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800",
  mars: "https://images.unsplash.com/photo-1614732484003-ef9881555dc3?w=800",
  jupiter: "https://images.unsplash.com/photo-1614732118584-e8f5a95b5e14?w=800",
  saturn: "https://images.unsplash.com/photo-1614732118584-e8f5a95b5e14?w=800",
  uranus: "https://images.unsplash.com/photo-1614732118584-e8f5a95b5e14?w=800",
  neptune: "https://images.unsplash.com/photo-1614732118584-e8f5a95b5e14?w=800",
};

/**
 * Today's Version: PlanetDetailModal.jsx
 * Optimized for React 19 + Tailwind v4 (bg-linear syntax)
 */
const PlanetDetailModal = ({ planet, onClose }) => {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!planet) return null;

  const planetId = planet.id || planet.englishName?.toLowerCase() || "default";
  const imageUrl =
    planetImages[planetId] ||
    "https://images.unsplash.com/photo-1614732118584-e8f5a95b5e14?w=800";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
          /* Updated to bg-linear-to-br */
          className="relative bg-linear-to-br from-cosmic-navy to-cosmic-purple rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30 shadow-cosmic-lg"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Hero Image */}
          <div className="relative h-64 md:h-80">
            {/* Updated to bg-linear-to-t */}
            <div className="absolute inset-0 bg-linear-to-t from-cosmic-navy to-transparent z-10" />
            <img
              src={imageUrl}
              alt={planet.englishName}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1614732118584-e8f5a95b5e14?w=800";
              }}
            />
          </div>

          {/* Content */}
          <div className="p-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 font-space">
              {planet.englishName || planet.name}
            </h2>

            {planet.discoveredBy && (
              <p className="text-purple-400 mb-6">
                Discovered by: {planet.discoveredBy}
              </p>
            )}

            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Physical Properties */}
              <div className="bg-black/30 rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-4 font-space">
                  Physical Properties
                </h3>
                <div className="space-y-3">
                  {planet.gravity && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Gravity:</span>
                      <span className="text-white font-medium">
                        {planet.gravity.toFixed(2)} m/s²
                      </span>
                    </div>
                  )}
                  {planet.mass && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Mass:</span>
                      <span className="text-white font-medium">
                        {planet.mass.massValue} × 10
                        <sup>{planet.mass.massExponent}</sup> kg
                      </span>
                    </div>
                  )}
                  {planet.density && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Density:</span>
                      <span className="text-white font-medium">
                        {planet.density.toFixed(0)} kg/m³
                      </span>
                    </div>
                  )}
                  {planet.vol && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Volume:</span>
                      <span className="text-white font-medium">
                        {planet.vol.volValue} × 10
                        <sup>{planet.vol.volExponent}</sup> km³
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Atmospheric Properties */}
              <div className="bg-black/30 rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-4 font-space">
                  Atmospheric Data
                </h3>
                <div className="space-y-3">
                  {planet.avgTemp !== undefined && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Avg Temperature:</span>
                      <span className="text-white font-medium">
                        {planet.avgTemp}°C
                      </span>
                    </div>
                  )}
                  {planet.escape && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Escape Velocity:</span>
                      <span className="text-white font-medium">
                        {planet.escape.toLocaleString()} m/s
                      </span>
                    </div>
                  )}
                  {planet.meanRadius && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Mean Radius:</span>
                      <span className="text-white font-medium">
                        {planet.meanRadius.toLocaleString()} km
                      </span>
                    </div>
                  )}
                  {planet.sideralRotation !== undefined && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Rotation Period:</span>
                      <span className="text-white font-medium">
                        {planet.sideralRotation.toFixed(2)} hours
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Additional Info - Updated to bg-linear-to-r */}
            <div className="bg-linear-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-semibold text-white mb-3 font-space">
                About {planet.englishName}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {planet.englishName} is a fascinating celestial body in our
                solar system.
                {planet.isPlanet &&
                  " As one of the eight planets orbiting the Sun, it plays a crucial role in our cosmic neighborhood."}
                {planet.gravity &&
                  ` With a surface gravity of ${planet.gravity.toFixed(
                    2
                  )} m/s², `}
                {planet.avgTemp !== undefined &&
                  `and an average temperature of ${planet.avgTemp}°C, `}
                it presents unique characteristics that continue to intrigue
                astronomers and space enthusiasts worldwide.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PlanetDetailModal;
