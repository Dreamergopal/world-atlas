import React from "react";
import API from "../api/apiData.json";
import { motion } from "framer-motion";

function Card() {
  return (
    <section className="bg-black text-white rounded-4xl pt-16 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-cyan-400 text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Explore Countries & Discover Facts
        </motion.h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {API.map((data, index) => {
            const { id, country, capital, population, fact } = data;
            return (
              <motion.li
                key={id}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-6 transition-transform hover:scale-[1.02] hover:shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-bold text-cyan-300">{country}</p>
                  <p className="text-sm text-gray-300">
                    Capital:{" "}
                    <span className="text-white font-medium">{capital}</span>
                  </p>
                  <p className="text-sm text-gray-300">
                    Population:{" "}
                    <span className="text-white font-medium">{population}</span>
                  </p>
                  <p className="text-sm text-gray-300">
                    Interesting Fact:{" "}
                    <span className="text-white italic">{fact}</span>
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Card;
