import React from "react";
import Card from "../components/ui/Card";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black px-4 pt-28 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400">
            Fascinating World Facts
          </h2>
          <p className="mt-3 text-lg md:text-xl text-gray-300 font-medium">
            Here are some interesting things{" "}
            <span className="text-white font-semibold">we're proud of</span>
          </p>
          <div className="mt-4 w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="text-gray-300 text-base md:text-lg space-y-6 leading-relaxed mb-14 max-w-4xl mx-auto text-justify"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>
            The world is full of wonders — vast deserts, bustling cities,
            towering mountains, and cultures as diverse as the landscapes
            themselves.{" "}
            <span className="text-white font-semibold">Shree Atlas</span> is
            your interactive passport to explore these marvels. We’ve crafted a
            space where you can travel the globe virtually, one country at a
            time, and uncover fascinating facts that often go unnoticed.
          </p>
          <p>
            Whether you're a student, a traveler, or simply curious about the
            world, <span className="text-white font-semibold">Shree Atlas</span>{" "}
            brings together essential information about each nation — including
            its capital, population, and a unique trivia that makes it stand
            out. It's more than just geography; it's about understanding the
            heartbeat of different societies and appreciating the threads that
            connect us all.
          </p>
          <p>
            Our mission is simple: to make world knowledge accessible, exciting,
            and engaging. We believe that in a world shaped by diversity and
            connection, learning about other countries promotes empathy,
            awareness, and world citizenship. Through clean design and
            informative content, we aim to make education feel like an
            adventure.
          </p>
          <p>
            So dive in, explore, and let your curiosity lead the way. Whether
            you're learning something new or revisiting places you love,{" "}
            <span className="text-white font-semibold">Shree Atlas</span> is
            here to make your journey memorable — one fact, one country, and one
            discovery at a time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Card />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
