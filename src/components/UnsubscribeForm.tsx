"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function UnsubscribeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/unsubscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto text-center bg-white/5 rounded-2xl p-6 backdrop-blur-lg shadow-lg"
    >
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Your email address"
            className="p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:scale-105 transition-all rounded-md py-3 text-white font-semibold shadow-md"
          >
            Confirm Unsubscribe
          </button>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white"
        >
          <h2 className="text-2xl font-semibold mb-2">You're unsubscribed 🎉</h2>
          <p className="text-gray-300 mb-4">
            We’re sad to see you go, but you can still enjoy our best deals below.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
