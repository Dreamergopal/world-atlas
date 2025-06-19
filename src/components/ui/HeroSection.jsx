import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <main className="pt-24 bg-black min-h-3/6 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-cyan-400">
            Explore the World with Shree-Atlas
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Discover countries, cultures, and continents — all in one place.
            Shree-Atlas is your interactive gateway to global insights, offering
            detailed information about every nation on Earth. Whether you're a
            curious learner or a geography geek, start your journey with a
            single click.
          </p>
          <NavLink to="/country">
            <button className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-lg text-white font-semibold shadow-md">
              Begin Your Journey <FiArrowUpRight className="text-xl" />
            </button>
          </NavLink>
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src="/worldmap.png"
            alt="world-map"
            className="w-full max-w-md mx-auto rounded-lg"
          />
        </motion.div>
      </div>
    </main>
  );
}

export default HeroSection;
