import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
// Updated import from animations.js to effect.js
import { fadeInUp, staggerContainer, staggerItem } from "../utils/effects.js";

/**
 * Today's Version: About.jsx
 * Optimized for React 19 + Tailwind v4 (bg-linear syntax)
 */
const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: "🔬",
      title: "Scientific Data",
      description:
        "All information is sourced from NASA, ESA, and other reputable space agencies.",
    },
    {
      icon: "📡",
      title: "Real-Time Updates",
      description:
        "Access the latest discoveries and mission updates as they happen.",
    },
    {
      icon: "🎓",
      title: "Educational",
      description:
        "Learn about astronomy, space exploration, and the cosmos in an engaging way.",
    },
    {
      icon: "🌐",
      title: "Interactive",
      description:
        "Explore planets, view stunning imagery, and dive deep into space topics.",
    },
  ];

  const team = [
    { role: "Astronomy Data", source: "NASA Open APIs", icon: "🛰️" },
    {
      role: "Planet Information",
      source: "Le Système Solaire API",
      icon: "🪐",
    },
    { role: "Media Content", source: "NASA Image Library", icon: "📸" },
    { role: "Mission Updates", source: "Space Agencies", icon: "🚀" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="About Galactic Explorer"
          subtitle="Your gateway to understanding the universe and humanity's place within it"
        />

        {/* Mission Statement - Updated bg-linear */}
        <motion.div
          {...fadeInUp}
          className="mb-20 bg-linear-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-space text-center">
            Our Mission
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto text-center">
            Galactic Explorer is dedicated to making space exploration and
            astronomy accessible to everyone. We believe that understanding our
            universe is not just for scientists – it's for all of humanity.
            Through stunning visualizations, real-time data, and educational
            content, we inspire curiosity and wonder about the cosmos that
            surrounds us.
          </p>
        </motion.div>

        {/* Features Grid - Updated bg-linear */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -10 }}
              className="bg-linear-to-br from-cosmic-navy/50 to-cosmic-purple/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-lg text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 font-space">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Data Sources Section */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 font-space text-center">
            Our Data Sources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-linear-to-br from-cosmic-navy/50 to-cosmic-purple/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{member.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {member.role}
                </h4>
                <p className="text-purple-400 text-sm">{member.source}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Universe Section - Updated bg-linear */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-linear-to-br from-cosmic-navy/50 to-cosmic-purple/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-purple-500/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-6 font-space">
                Understanding Our Universe
              </h2>

              <div className="space-y-4 text-gray-300">
                <p>
                  The universe is approximately 13.8 billion years old and
                  contains an estimated 2 trillion galaxies. Each galaxy houses
                  millions to trillions of stars.
                </p>
                <p>
                  Our own Milky Way galaxy contains between 100-400 billion
                  stars and is part of a larger cosmic structure called the
                  Laniakea Supercluster, which spans 520 million light-years.
                </p>
              </div>
            </div>
            <div className="relative h-96 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=800"
                alt="Galaxy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-cosmic-dark/80 to-transparent lg:from-cosmic-dark/50" />
            </div>
          </div>
        </motion.div>

        {/* Call to Action - Using Router navigate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4 font-space">
            Join Us on This Journey
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Start exploring the cosmos today and discover the wonders that await
            beyond our world.
          </p>
          <button
            onClick={() => navigate("/explore")}
            className="px-10 py-4 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg shadow-cosmic-lg hover:shadow-glow transition-all duration-300 btn-cosmic"
          >
            Begin Exploration
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
