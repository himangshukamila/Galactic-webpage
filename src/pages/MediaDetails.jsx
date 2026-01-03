import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MediaDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Guard: if page opened directly without data
  if (!state?.item)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-300">
        Content unavailable
      </div>
    );

  const item = state.item;

  const title = item.title || item.data?.[0]?.title;
  const description = item.explanation || item.data?.[0]?.description;
  const imageUrl = item.url || item.hdurl || item.links?.[0]?.href;

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 rounded-full border border-purple-500/30 text-gray-300 hover:text-white hover:bg-purple-600/30 transition"
        >
          ← Back to Gallery
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-linear-to-br from-cosmic-navy/60 to-cosmic-purple/30 backdrop-blur-xl rounded-2xl border border-purple-500/20 shadow-lg overflow-hidden"
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-105 object-cover"
          />

          <div className="p-8">
            <h1 className="text-3xl font-bold text-white mb-4 font-space">
              {title}
            </h1>

            {item.date && (
              <p className="text-sm text-purple-300 mb-3">{item.date}</p>
            )}

            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {description || "No description available."}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MediaDetails;
