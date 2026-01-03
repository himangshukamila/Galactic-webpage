import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
// Updated import from animations.js to effect.js
import { fadeInUp, staggerContainer, staggerItem } from "../utils/effects.js";
import { fetchAPOD } from "../services/api.js";

/**
 * Today's Version: Explore.jsx
 * Optimized for React 19 + Tailwind v4 (bg-linear syntax)
 */
const Explore = () => {
  const navigate = useNavigate();
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAPOD = async () => {
      try {
        const data = await fetchAPOD(1);
        setApodData(Array.isArray(data) ? data[0] : data);
      } catch (error) {
        console.error("Failed to fetch APOD:", error);
      } finally {
        setLoading(false);
      }
    };

    loadAPOD();
  }, []);

  const exploreCategories = [
    {
      title: "Planets & Moons",
      description: "Discover the diverse worlds of our solar system",
      icon: "🪐",
      path: "/planets",
      color: "from-purple-600 to-blue-600",
    },
    {
      title: "Stars & Nebulae",
      description: "Explore stellar formations and cosmic clouds",
      icon: "⭐",
      path: "/stars-nebulae",
      color: "from-yellow-500 to-orange-600",
    },
    {
      title: "Space Missions",
      description: "Follow humanity's journey beyond Earth",
      icon: "🚀",
      path: "/missions",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Galaxy Facts",
      description: "Learn fascinating facts about our universe",
      icon: "🌌",
      path: "/galaxy-facts",
      color: "from-indigo-600 to-purple-600",
    },
    {
      title: "Media Gallery",
      description: "Browse stunning space imagery and videos",
      icon: "📸",
      path: "/media-gallery",
      color: "from-pink-500 to-rose-600",
    },
    {
      title: "About the Universe",
      description: "Understand the cosmos and our place in it",
      icon: "🌍",
      path: "/about",
      color: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Explore the Cosmos"
          subtitle="Choose your path through the wonders of space and astronomy"
        />

        {/* Astronomy Picture of the Day */}
        {apodData && !loading && (
          <motion.div
            {...fadeInUp}
            /* Updated bg-linear to fix VS Code error */
            className="mb-20 bg-linear-to-br from-cosmic-navy/50 to-cosmic-purple/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-purple-500/20 shadow-cosmic-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto">
                <img
                  src={apodData.url}
                  alt={apodData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  NASA APOD
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-4 font-space">
                  {apodData.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {apodData.explanation?.substring(0, 250)}...
                </p>
                <p className="text-sm text-purple-400 mb-4">
                  Date: {apodData.date}
                </p>
                {apodData.copyright && (
                  <p className="text-sm text-gray-500">
                    © {apodData.copyright}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Explore Categories Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {exploreCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => navigate(category.path)}
              /* Updated bg-linear to fix VS Code error */
              className="bg-linear-to-br from-cosmic-navy/50 to-cosmic-purple/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-lg cursor-pointer card-3d group"
            >
              {/* Updated icon container to use bg-linear */}
              <div
                className={`w-16 h-16 bg-linear-to-br ${category.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {category.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 font-space group-hover:text-purple-400 transition-colors">
                {category.title}
              </h3>

              <p className="text-gray-400 mb-6">{category.description}</p>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-purple-400 font-medium"
              >
                <span>Explore Now</span>
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
          ))}
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Planets", value: "8", icon: "🪐" },
            { label: "Known Moons", value: "200+", icon: "🌙" },
            { label: "Galaxies", value: "100B+", icon: "🌌" },
            { label: "Stars", value: "∞", icon: "⭐" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              /* Updated bg-linear to fix VS Code error */
              className="bg-linear-to-br from-cosmic-navy/50 to-cosmic-purple/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-1 font-space">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Explore;
