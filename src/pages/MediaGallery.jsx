import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
// Updated import from animations.js to effect.js
import { staggerContainer, staggerItem } from "../utils/effects.js";
import { searchNASAMedia, fetchAPOD } from "../services/api.js";

/**
 * Today's Version: MediaGallery.jsx
 * Optimized for React 19 + Tailwind v4 (bg-linear syntax)
 */
const MediaGallery = () => {
  const [images, setImages] = useState([]);
  const [apodImages, setApodImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("featured");

  useEffect(() => {
    const loadMedia = async () => {
      try {
        const [spaceImages, apodData] = await Promise.all([
          searchNASAMedia("space galaxy", "image"),
          fetchAPOD(12),
        ]);
        setImages(spaceImages.slice(0, 12));
        setApodImages(apodData);
      } catch (error) {
        console.error("Failed to fetch media:", error);
      } finally {
        setLoading(false);
      }
    };

    loadMedia();
  }, []);

  const tabs = [
    { id: "featured", label: "Featured", icon: "⭐" },
    { id: "apod", label: "APOD Collection", icon: "📅" },
    { id: "gallery", label: "NASA Gallery", icon: "🖼️" },
  ];

  const renderContent = () => {
    if (loading) {
      return (
        <div className="text-center py-20">
          <div className="loading-orbit mx-auto mb-4" />
          <p className="text-gray-400">Loading media...</p>
        </div>
      );
    }

    if (activeTab === "apod" && apodImages.length > 0) {
      return (
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {apodImages.map((item, index) => (
            <Link
              to="/media-details"
              state={{ item }} // pass full item to details page
            >
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -10, scale: 1.02 }}
                /* Updated to bg-linear-to-br */
                className="bg-linear-to-br from-cosmic-navy/50 to-cosmic-purple/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 shadow-lg card-3d group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Updated to bg-linear-to-t */}
                  <div className="absolute inset-0 bg-linear-to-t from-cosmic-dark to-transparent" />
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.date}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-white mb-2 line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400 line-clamp-3">
                    {item.explanation}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      );
    }

    if (activeTab === "gallery" && images.length > 0) {
      return (
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((item, index) => {
            const imageUrl = item.links?.[0]?.href;
            const title = item.data?.[0]?.title;
            const description = item.data?.[0]?.description;

            return imageUrl ? (
              <Link
                to="/media-details"
                state={{ item }} // pass full item to details page
              >
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
              </Link>
            ) : null;
          })}
        </motion.div>
      );
    }

    // Featured content (default)
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          /* Updated to bg-linear-to-br */
          className="bg-linear-to-br from-cosmic-navy/50 to-cosmic-purple/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 shadow-lg"
        >
          <img
            src="https://images.unsplash.com/photo-1614732118584-e8f5a95b5e14?w=800"
            alt="Deep Space"
            className="w-full h-80 object-cover"
          />
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4 font-space">
              Deep Space Exploration
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Discover the most stunning images captured by space telescopes and
              missions, revealing the beauty and mysteries of our universe.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          /* Updated to bg-linear-to-br */
          className="bg-linear-to-br from-cosmic-navy/50 to-cosmic-purple/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 shadow-lg"
        >
          <img
            src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800"
            alt="Nebula"
            className="w-full h-80 object-cover"
          />
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4 font-space">
              Cosmic Phenomena
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Witness incredible cosmic events, from supernova explosions to the
              birth of new stars in colorful nebulae across the galaxy.
            </p>
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Space Media Gallery"
          subtitle="Browse stunning images and videos from NASA's extensive media library"
        />

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              /* Updated to bg-linear-to-r */
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-linear-to-r from-purple-600 to-blue-600 text-white shadow-cosmic"
                  : "bg-cosmic-navy/50 text-gray-400 hover:text-white border border-purple-500/20"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        {renderContent()}
      </div>
    </div>
  );
};

export default MediaGallery;
