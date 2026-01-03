import { motion } from "framer-motion";
// Updated import from animations.js to effect.js
import { hoverLift } from "../utils/effects.js";

// Planet image mapping (Logic remains unchanged)
const planetImages = {
  mercury: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400",
  venus: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=400",
  earth: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=400",
  mars: "https://images.unsplash.com/photo-1614732484003-ef9881555dc3?w=400",
  jupiter: "https://images.unsplash.com/photo-1614732118584-e8f5a95b5e14?w=400",
  saturn: "https://images.unsplash.com/photo-1614732118584-e8f5a95b5e14?w=400",
  uranus: "https://images.unsplash.com/photo-1614732118584-e8f5a95b5e14?w=400",
  neptune: "https://images.unsplash.com/photo-1614732118584-e8f5a95b5e14?w=400",
};

/**
 * Today's Version: PlanetCard.jsx
 * Optimized for React 19 + Tailwind v4 (bg-linear)
 */
const PlanetCard = ({ planet, onClick }) => {
  const planetId = planet.id || planet.englishName?.toLowerCase() || "default";
  const imageUrl =
    planetImages[planetId] ||
    "https://images.unsplash.com/photo-1614732118584-e8f5a95b5e14?w=400";

  return (
    <motion.div
      {...hoverLift}
      onClick={onClick}
      /* Updated to bg-linear to satisfy VS Code linter */
      className="relative bg-linear-to-br from-cosmic-navy/50 to-cosmic-purple/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 shadow-lg cursor-pointer card-3d group"
    >
      {/* Planet Image */}
      <div className="relative h-48 overflow-hidden">
        {/* Updated to bg-linear shorthand */}
        <div className="absolute inset-0 bg-linear-to-t from-cosmic-dark to-transparent z-10" />
        <img
          src={imageUrl}
          alt={planet.englishName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1614732118584-e8f5a95b5e14?w=400";
          }}
        />
        <motion.div
          className="absolute top-4 right-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2 font-space group-hover:text-purple-400 transition-colors">
          {planet.englishName || planet.name}
        </h3>

        <div className="space-y-2 text-sm text-gray-400">
          {planet.gravity && (
            <div className="flex justify-between">
              <span>Gravity:</span>
              <span className="text-white">
                {planet.gravity.toFixed(2)} m/s²
              </span>
            </div>
          )}
          {planet.avgTemp !== undefined && (
            <div className="flex justify-between">
              <span>Avg Temp:</span>
              <span className="text-white">{planet.avgTemp}°C</span>
            </div>
          )}
          {planet.density && (
            <div className="flex justify-between">
              <span>Density:</span>
              <span className="text-white">
                {planet.density.toFixed(0)} kg/m³
              </span>
            </div>
          )}
        </div>

        <motion.div
          whileHover={{ x: 5 }}
          className="mt-4 text-purple-400 font-medium flex items-center gap-2 group-hover:text-purple-300 transition-colors"
        >
          <span>Learn More</span>
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
      </div>

      {/* Glow effect on hover - Using Tailwind v4 opacity shorthand */}
      <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/5 transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default PlanetCard;
