"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function UnsubscribeForm() {
  const [submitted, setSubmitted] = useState(false);

 const handleFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

setSubmitted(true)
      form.reset();
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("Something went wrong, please try again later.");
    }
  };
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto text-center bg-white/5 rounded-2xl p-6 backdrop-blur-lg shadow-lg"
    >
      {!submitted ? (
        <form
          name="unsubscribe"
          method="POST"
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-4"
        >
          <input type="hidden" name="form-name" value="unsubscribe" />
          <input
            type="email"
            name="email"
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
