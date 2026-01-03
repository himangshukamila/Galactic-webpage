import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
// Updated import from animations.js to effect.js
import { staggerContainer, staggerItem } from "../utils/effects.js";
import { searchNASAMedia } from "../services/api.js";

/**
 * Today's Version: StarsNebulae.jsx
 * Optimized for React 19 + Tailwind v4 (bg-linear syntax)
 */
const StarsNebulae = () => {
  const [nebulaeImages, setNebulaeImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNebulae = async () => {
      try {
        const results = await searchNASAMedia("nebula", "image");
        setNebulaeImages(results.slice(0, 12));
      } catch (error) {
        console.error("Failed to fetch nebulae images:", error);
      } finally {
        setLoading(false);
      }
    };

    loadNebulae();
  }, []);

  const starTypes = [
    {
      name: "Red Giant",
      description: "Massive stars in their late stages, expanded and cooled",
      temp: "3,000 - 4,000 K",
      color: "from-red-500 to-orange-600",
      icon: "🔴",
    },
    {
      name: "White Dwarf",
      description: "Dense remnants of stars like our Sun",
      temp: "8,000 - 40,000 K",
      color: "from-white to-blue-200",
      icon: "⚪",
    },
    {
      name: "Neutron Star",
      description: "Extremely dense collapsed stellar cores",
      temp: "600,000 K",
      color: "from-cyan-400 to-blue-600",
      icon: "💫",
    },
    {
      name: "Blue Supergiant",
      description: "Massive, extremely hot and luminous stars",
      temp: "10,000 - 50,000 K",
      color: "from-blue-400 to-indigo-600",
      icon: "🔵",
    },
  ];

  const famousNebulae = [
    {
      name: "Orion Nebula",
      type: "Emission Nebula",
      distance: "1,344 light-years",
      description: "One of the brightest nebulae visible to the naked eye",
    },
    {
      name: "Crab Nebula",
      type: "Supernova Remnant",
      distance: "6,500 light-years",
      description: "Remains of a supernova observed in 1054 AD",
    },
    {
      name: "Eagle Nebula",
      type: "Star-forming Region",
      distance: "7,000 light-years",
      description: 'Home to the famous "Pillars of Creation"',
    },
    {
      name: "Helix Nebula",
      type: "Planetary Nebula",
      distance: "650 light-years",
      description: 'Often called the "Eye of God"',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Stars & Nebulae"
          subtitle="Explore the beautiful stellar formations and cosmic clouds of our universe"
        />

        {/* Star Types Lifecycle Section */}

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {starTypes.map((star, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.02 }}
              /* Updated to bg-linear-to-br */
              className="bg-linear-to-br from-cosmic-navy/50 to-cosmic-purple/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-lg card-3d"
            >
              {/* Updated to bg-linear-to-br */}
              <div
                className={`w-16 h-16 bg-linear-to-br ${star.color} rounded-full flex items-center justify-center text-3xl mb-4 mx-auto`}
              >
                {star.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-space text-center">
                {star.name}
              </h3>
              <p className="text-sm text-purple-400 mb-3 text-center">
                {star.temp}
              </p>
              <p className="text-gray-400 text-sm text-center">
                {star.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Famous Nebulae List */}
        <h3 className="text-3xl font-bold text-white mb-8 font-space">
          Famous Nebulae
        </h3>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
        >
          {famousNebulae.map((nebula, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              /* Updated to bg-linear-to-br */
              className="bg-linear-to-br from-cosmic-navy/50 to-cosmic-purple/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-lg"
            >
              <h4 className="text-2xl font-bold text-white mb-2 font-space">
                {nebula.name}
              </h4>
              <div className="flex gap-4 text-sm text-purple-400 mb-4">
                <span>{nebula.type}</span>
                <span>•</span>
                <span>{nebula.distance}</span>
              </div>
              <p className="text-gray-400">{nebula.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* NASA Nebulae Gallery */}
        {nebulaeImages.length > 0 && (
          <>
            <h3 className="text-3xl font-bold text-white mb-8 font-space">
              Nebulae Gallery
            </h3>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {nebulaeImages.map((item, index) => {
                const imageUrl = item.links?.[0]?.href;
                const title = item.data?.[0]?.title;
                const description = item.data?.[0]?.description;

                return imageUrl ? (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    whileHover={{ y: -10, scale: 1.02 }}
                    /* Updated to bg-linear-to-br */
                    className="bg-linear-to-br from-cosmic-navy/50 to-cosmic-purple/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 shadow-lg card-3d group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Updated to bg-linear-to-t */}
                      <div className="absolute inset-0 bg-linear-to-t from-cosmic-dark to-transparent" />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-white mb-2 line-clamp-2">
                        {title}
                      </h4>
                      {description && (
                        <p className="text-sm text-gray-400 line-clamp-3">
                          {description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ) : null;
              })}
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default StarsNebulae;
