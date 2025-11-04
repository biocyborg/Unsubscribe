"use client";
import { motion } from "framer-motion";

export default function CouponCard({ coupon }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 border border-white/10 rounded-2xl p-4 text-center shadow-md hover:shadow-lg transition-all"
    >
      <img
        src={coupon.logo}
        alt={coupon.store}
        className="mx-auto mb-3 w-12 h-12 object-contain"
      />
      <h3 className="text-lg font-semibold text-white mb-1">{coupon.store}</h3>
      <p className="text-sm text-gray-300 mb-2">{coupon.title}</p>
      <p className="text-sm text-amber-400 font-mono bg-white/5 px-2 py-1 rounded-md inline-block">
        Code: {coupon.code}
      </p>
      <p className="text-xs text-gray-400 mt-2">{coupon.expire}</p>
    </motion.div>
  );
}
