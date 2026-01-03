import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
// Updated import from animations.js to effect.js
import { staggerContainer, staggerItem } from "../utils/effects.js";
import { fetchMarsRoverPhotos } from "../services/api.js";

/**
 * Today's Version: Missions.jsx
 * Optimized for React 19 + Tailwind v4 (bg-linear syntax)
 */
const Missions = () => {
  const [marsPhotos, setMarsPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMarsPhotos = async () => {
      try {
        const photos = await fetchMarsRoverPhotos("curiosity", 1000);
        setMarsPhotos(photos.slice(0, 6));
      } catch (error) {
        console.error("Failed to fetch Mars photos:", error);
      } finally {
        setLoading(false);
      }
    };

    loadMarsPhotos();
  }, []);

  const missions = [
    {
      name: "James Webb Space Telescope",
      agency: "NASA/ESA/CSA",
      status: "Active",
      launched: "2021",
      description:
        "The most powerful space telescope ever built, observing the universe in infrared light.",
      image:
        "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800",
      color: "from-purple-600 to-indigo-600",
    },
    {
      name: "Mars Perseverance Rover",
      agency: "NASA",
      status: "Active",
      launched: "2020",
      description:
        "Searching for signs of ancient microbial life and collecting rock samples on Mars.",
      image:
        "https://images.unsplash.com/photo-1614732118584-e8f5a95b5e14?w=800",
      color: "from-red-600 to-orange-600",
    },
    {
      name: "Artemis Program",
      agency: "NASA",
      status: "Ongoing",
      launched: "2022",
      description:
        "Planning to return humans to the Moon and establish a sustainable presence.",
      image:
        "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?w=800",
      color: "from-blue-600 to-cyan-600",
    },
    {
      name: "Europa Clipper",
      agency: "NASA",
      status: "Planned",
      launched: "2024",
      description:
        "Mission to explore Jupiter's moon Europa and its subsurface ocean.",
      image:
        "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=800",
      color: "from-cyan-600 to-teal-600",
    },
    {
      name: "Voyager Missions",
      agency: "NASA",
      status: "Active",
      launched: "1977",
      description:
        "The farthest and longest-lived spacecraft, now in interstellar space.",
      image:
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800",
      color: "from-indigo-600 to-purple-600",
    },
    {
      name: "ISS",
      agency: "International",
      status: "Active",
      launched: "1998",
      description:
        "International Space Station - humanity's laboratory in low Earth orbit.",
      image:
        "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800",
      color: "from-green-600 to-emerald-600",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Space Missions & Discoveries"
          subtitle="Follow humanity's greatest achievements in space exploration"
        />

        {/* Mars Rover Photos Section */}
        {marsPhotos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-white mb-6 font-space">
              Latest from Mars Curiosity Rover
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {marsPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-square rounded-lg overflow-hidden border border-purple-500/20 shadow-lg cursor-pointer"
                >
                  <img
                    src={photo.img_src}
                    alt={`Mars ${photo.camera.full_name}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Updated to bg-linear-to-t */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-2">
                    <p className="text-white text-xs">{photo.camera.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Missions Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.02 }}
              /* Updated to bg-linear-to-br */
              className="bg-linear-to-br from-cosmic-navy/50 to-cosmic-purple/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 shadow-lg card-3d group"
            >
              {/* Mission Image */}
              <div className="relative h-48 overflow-hidden">
                {/* Updated to bg-linear-to-t */}
                <div className="absolute inset-0 bg-linear-to-t from-cosmic-dark to-transparent z-10" />
                <img
                  src={mission.image}
                  alt={mission.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Status Badge - Updated to bg-linear-to-r */}
                <div
                  className={`absolute top-4 right-4 z-20 px-3 py-1 bg-linear-to-r ${mission.color} rounded-full text-white text-xs font-semibold`}
                >
                  {mission.status}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 font-space group-hover:text-purple-400 transition-colors">
                  {mission.name}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span>{mission.agency}</span>
                  <span>•</span>
                  <span>{mission.launched}</span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {mission.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          /* Updated to bg-linear-to-br */
          className="mt-20 bg-linear-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30"
        >
          <h2 className="text-3xl font-bold text-white mb-8 font-space text-center">
            Milestones in Space Exploration
          </h2>
          <div className="space-y-6">
            {[
              { year: "1957", event: "Sputnik 1 - First artificial satellite" },
              { year: "1969", event: "Apollo 11 - First humans on the Moon" },
              { year: "1990", event: "Hubble Space Telescope launched" },
              { year: "2012", event: "Curiosity Rover lands on Mars" },
              { year: "2021", event: "James Webb Space Telescope launched" },
              { year: "2024", event: "Artemis missions targeting Moon return" },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-6"
              >
                {/* Updated to bg-linear-to-br */}
                <div className="shrink-0 w-20 h-20 bg-linear-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{milestone.year}</span>
                </div>
                <div className="flex-1 bg-black/30 rounded-lg p-4">
                  <p className="text-white">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Missions;
