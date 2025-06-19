import React from "react";
import { motion } from "framer-motion";

function Loading() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a192f]" // Dark navy blue
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col items-center space-y-6">
        <div className="w-20 h-20 border-[6px] border-t-transparent border-r-blue-400 border-l-blue-600 border-b-transparent rounded-full animate-spin shadow-lg shadow-blue-500/30" />
        <p className="text-blue-300 text-xl font-bold tracking-wide animate-pulse">
          Loading...
        </p>
      </div>
    </motion.div>
  );
}

export default Loading;
