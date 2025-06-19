import React from "react";
import { motion } from "framer-motion";

function Contact() {
  const handleSubmitForm = (formData) => {
    const inputData = Object.fromEntries(formData.entries());
    console.log(inputData);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="bg-gradient-to-b from-black via-slate-900 to-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto mt-20 grid md:grid-cols-2 gap-14 items-start">
        {/* Form Section (Left) for contact */}
        <motion.div
          className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.h2
            className="text-3xl font-bold text-cyan-400 mb-6"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            Send a Message
          </motion.h2>

          <motion.form
            action={handleSubmitForm}
            className="flex flex-col gap-5"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.input
              type="text"
              name="username"
              placeholder="Enter your name"
              required
              autoComplete="off"
              className="bg-slate-800 border border-white/10 rounded-lg px-5 py-3 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            />

            <motion.input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              autoComplete="off"
              className="bg-slate-800 border border-white/10 rounded-lg px-5 py-3 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            />

            <motion.textarea
              name="message"
              placeholder="Enter your message"
              rows="6"
              required
              autoComplete="off"
              className="bg-slate-800 border border-white/10 rounded-lg px-5 py-3 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            ></motion.textarea>

            <motion.button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-lg text-white font-semibold shadow-md self-start"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
            >
              Send
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Paragraph Section (Right) for info */}
        <motion.div
          className="space-y-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.h2
            className="text-4xl text-center font-bold text-cyan-400 mb-10"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            Let’s Stay Connected...
          </motion.h2>

          {[
            "The world is vast, yet every journey begins with a single step — or a single message. Maybe you’ve wandered through deserts of data or climbed mountains of curiosity. Perhaps you’ve spotted something fascinating on your map or have an idea to make this atlas even better.",
            "At Shree-Atlas, we believe every explorer has a story, and every message is a path waiting to be followed. Got a question? The world is full of answers — let’s uncover them together.",
            "So don’t be a stranger. Reach out, share your thoughts, or just say hello. After all, even the greatest journeys begin with a simple connection. 🌐✨",
            "From the poles to the equator — we’re always listening.",
          ].map((text, index) => (
            <motion.p
              key={index}
              className="text-gray-300 leading-relaxed text-lg"
              variants={fadeInUp}
              transition={{ delay: 0.2 + index * 0.15 }}
            >
              {text.includes("Shree-Atlas") ? (
                <>
                  At{" "}
                  <span className="text-white font-semibold">Shree-Atlas</span>,{" "}
                  {text.split("Shree-Atlas")[1]}
                </>
              ) : text.includes("we’re always listening") ? (
                <>
                  From the poles to the equator —{" "}
                  <strong className="text-cyan-400">
                    we’re always listening
                  </strong>
                </>
              ) : (
                text
              )}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
