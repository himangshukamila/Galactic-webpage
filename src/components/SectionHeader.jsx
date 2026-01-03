import { motion } from "framer-motion";
// Updated import name and path according to your new file structure
import { fadeInUp } from "../utils/effects.js";

/**
 * Today's Version: SectionHeader.jsx
 * Optimized for React 19 + Tailwind v4 (bg-linear)
 */
const SectionHeader = ({ title, subtitle, centered = true }) => {
  return (
    <motion.div
      {...fadeInUp}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-space">
        {title}
      </h2>

      {subtitle && (
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
      )}

      {/* Modernized gradient using the new bg-linear syntax */}
      <div
        className={`mt-6 flex ${centered ? "justify-center" : "justify-start"}`}
      >
        <div className="w-24 h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent" />
      </div>
    </motion.div>
  );
};

export default SectionHeader;
