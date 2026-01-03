import { useMemo } from "react";
import { motion } from "framer-motion";

/**
 * Today's Version: AnimatedBackground.jsx
 * Optimized for React 19 + Framer Motion 12
 * Stable particle positioning & Zero-React-Import
 */
const AnimatedBackground = () => {
  // Today's standard: Memoize random values to prevent "flickering"
  // during React 19 concurrent updates.
  const particles = useMemo(
    () =>
      [...Array(20)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 2,
      })),
    []
  );

  return (
    <>
      {/* Base cosmic layers - using the classes from our modernized index.css */}
      <div className="fixed inset-0 bg-cosmic-gradient z-0" />
      <div className="fixed inset-0 stars-bg z-0" />

      {/* Nebula glow effects */}
      <motion.div
        className="fixed top-0 left-1/4 w-96 h-96 bg-nebula-glow opacity-30 blur-3xl rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="fixed bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating particles - Stable positions */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="fixed w-1 h-1 bg-white rounded-full opacity-60"
          style={{ left: p.left, top: p.top }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </>
  );
};

export default AnimatedBackground;
