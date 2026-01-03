import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
// Updated import from animations.js to effect.js
import { staggerContainer, staggerItem } from "../utils/effects.js";

/**
 * Today's Version: GalaxyFacts.jsx
 * Optimized for React 19 + Tailwind v4 (bg-linear syntax)
 */
const GalaxyFacts = () => {
  const facts = [
    {
      title: "The Milky Way",
      fact: "Our galaxy contains between 100-400 billion stars",
      description:
        "The Milky Way is a barred spiral galaxy with a diameter of about 100,000 light-years. It contains our Solar System and billions of other star systems.",
      icon: "🌌",
      color: "from-purple-600 to-indigo-600",
    },
    {
      title: "Black Holes",
      fact: "Nothing can escape a black hole, not even light",
      description:
        "Black holes are regions of spacetime where gravity is so strong that nothing can escape from it. Sagittarius A*, the black hole at the center of our galaxy, has a mass of about 4 million times that of our Sun.",
      icon: "⚫",
      color: "from-gray-800 to-black",
    },
    {
      title: "Observable Universe",
      fact: "Contains approximately 2 trillion galaxies",
      description:
        "The observable universe is estimated to be about 93 billion light-years in diameter. Each galaxy contains millions to trillions of stars.",
      icon: "🔭",
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "Light Speed",
      fact: "Light travels at 299,792 km per second",
      description:
        "At this speed, light from the Sun takes about 8 minutes to reach Earth. Light from the next nearest star, Proxima Centauri, takes 4.24 years.",
      icon: "⚡",
      color: "from-yellow-500 to-orange-600",
    },
    {
      title: "Dark Matter",
      fact: "Makes up about 27% of the universe",
      description:
        "Dark matter is invisible and doesn't interact with electromagnetic radiation, but its gravitational effects are observed throughout the universe.",
      icon: "🌑",
      color: "from-indigo-800 to-purple-900",
    },
    {
      title: "Age of Universe",
      fact: "Approximately 13.8 billion years old",
      description:
        "The universe began with the Big Bang and has been expanding ever since. The cosmic microwave background radiation is the oldest light we can observe.",
      icon: "⏰",
      color: "from-rose-600 to-pink-600",
    },
    {
      title: "Neutron Stars",
      fact: "A teaspoon of neutron star material weighs 6 billion tons",
      description:
        "Neutron stars are the collapsed cores of massive stars. They are incredibly dense and can spin hundreds of times per second.",
      icon: "💫",
      color: "from-teal-600 to-cyan-700",
    },
    {
      title: "Exoplanets",
      fact: "Over 5,000 exoplanets have been discovered",
      description:
        'Planets orbiting stars outside our solar system are called exoplanets. Many are in the "habitable zone" where liquid water could exist.',
      icon: "🪐",
      color: "from-green-600 to-emerald-600",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Fascinating Galaxy Facts"
          subtitle="Discover mind-blowing facts about our universe and beyond"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {facts.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -5, scale: 1.01 }}
              /* Updated to bg-linear-to-br to satisfy VS Code */
              className="bg-linear-to-br from-cosmic-navy/50 to-cosmic-purple/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 shadow-lg card-3d"
            >
              {/* Updated to bg-linear-to-r */}
              <div className={`h-2 bg-linear-to-r ${item.color}`} />

              <div className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  {/* Updated to bg-linear-to-br */}
                  <div
                    className={`shrink-0 w-14 h-14 bg-linear-to-br ${item.color} rounded-xl flex items-center justify-center text-2xl`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-space">
                      {item.title}
                    </h3>
                    <p className="text-purple-400 font-semibold">{item.fact}</p>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          /* Updated to bg-linear-to-br */
          className="mt-20 bg-linear-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-space text-center">
            The Scale of the Universe
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">🌍</div>
              <h4 className="text-xl font-semibold text-white mb-2">Earth</h4>
              <p className="text-gray-400">12,742 km diameter</p>
            </div>
            <div>
              <div className="text-4xl mb-3">☀️</div>
              <h4 className="text-xl font-semibold text-white mb-2">Sun</h4>
              <p className="text-gray-400">
                1.39 million km diameter
                <br />
                109x Earth
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">🌌</div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Milky Way
              </h4>
              <p className="text-gray-400">
                100,000 light-years across
                <br />
                400 billion stars
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GalaxyFacts;
