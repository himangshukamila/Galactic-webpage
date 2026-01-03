import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// Updated import from animations.js to effect.js
import { fadeInUp, fadeInDown, floatAnimation } from "../utils/effects.js";
import StyledWrapper from "../utils/StyledWrapper.js";

/**
 * Today's Version: HeroSection.jsx
 * Optimized for React 19 + Tailwind v4 (bg-linear)
 */
const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Floating astronaut illustration */}
      <motion.div
        {...floatAnimation}
        className="absolute right-10 top-32 w-64 h-64 opacity-20 lg:opacity-40 pointer-events-none"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient
              id="astronautGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <circle
            cx="100"
            cy="60"
            r="30"
            fill="url(#astronautGradient)"
            opacity="0.8"
          />
          <rect
            x="80"
            y="85"
            width="40"
            height="60"
            rx="10"
            fill="url(#astronautGradient)"
            opacity="0.8"
          />
          <circle
            cx="75"
            cy="110"
            r="8"
            fill="url(#astronautGradient)"
            opacity="0.6"
          />
          <circle
            cx="125"
            cy="110"
            r="8"
            fill="url(#astronautGradient)"
            opacity="0.6"
          />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div {...fadeInDown} className="mb-6">
          <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
            🚀 Discover the Universe
          </span>
        </motion.div>

        <motion.h1
          {...fadeInUp}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-space leading-tight"
        >
          Explore the
          <br />
          <span className="text-gradient">Vast Wonders</span>
          <br />
          of the Galaxy
        </motion.h1>

        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Embark on an extraordinary journey of discovery and imagination as you
          explore the vast wonders of the galaxy.
        </motion.p>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
        
            <button
              onClick={() => navigate("/explore")}
              className="px-8 py-4 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg shadow-cosmic-lg hover:shadow-glow  cursor-pointer transition-all duration-300 btn-cosmic"
            >
              Start Exploring
            </button>
          
          <button
            onClick={() => navigate("/planets")}
            className="px-8 py-4 bg-transparent border-2 border-purple-500 text-white rounded-full font-semibold text-lg hover:bg-purple-600/30 transition-all duration-300"
          >
            View Planets
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <svg
            className="w-6 h-6 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
