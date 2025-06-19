import React from "react";
import { TfiWorld } from "react-icons/tfi";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Details({ data }) {
  return (
    <ul className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {data.map((elem, index) => (
        <motion.li
          key={elem.name.common}
          className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-2xl shadow-xl p-5 w-full h-[420px] flex flex-col hover:shadow-2xl transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="w-full h-[200px] overflow-hidden rounded-xl shadow-inner">
            <img
              src={elem.flags.svg}
              alt={`${elem.name.common} flag`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <p className="text-xl font-bold text-cyan-300">
              {elem.name.common}
            </p>

            <p className="text-sm text-gray-400">
              Capital:{" "}
              <span className="text-white font-medium">
                {elem.capital ? elem.capital[0] : "N/A"}
              </span>
            </p>

            <p className="text-sm text-gray-400">
              Population:{" "}
              <span className="text-white font-medium">
                {elem.population.toLocaleString("en-IN")}
              </span>
            </p>

            <p className="text-sm text-gray-400">
              Region: <span className="text-white italic">{elem.region}</span>
            </p>
          </div>

          <NavLink
            to={`/country/${elem.name.common}`}
            className="mt-auto self-end"
          >
            <button className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold rounded-lg shadow-lg transition-all duration-300">
              <TfiWorld className="text-lg" />
              <span>Explore</span>
            </button>
          </NavLink>
        </motion.li>
      ))}
    </ul>
  );
}

export default Details;
