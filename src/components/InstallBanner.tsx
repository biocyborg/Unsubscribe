"use client";
import { motion } from "framer-motion";

export default function InstallBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-2xl p-6 text-center mt-12 shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-2">
        💡 Keep saving automatically!
      </h2>
      <p className="text-white/90 mb-4">
        Install the Elktop browser extension — find real coupons every time you
        shop online.
      </p>
      <a
        href="https://chromewebstore.google.com/detail/eutopia-aliexpress-discou/pgeibfelcomlphhgnkihiibnhpadaddc"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-amber-600 font-bold px-6 py-3 rounded-lg hover:scale-105 hover:shadow-lg transition-all"
      >
        Install Elktop – It’s Free!
      </a>
    </motion.div>
  );
}
