"use client";
import { motion } from "framer-motion";

interface ICouponCardProps {
  coupon: {
    condition: string;
    couponCode: string;
    discounts: string;
    time: string;
  };
  couponName: {
    store: string;
    logo: string;
  }[];
}

export default function CouponCard({ coupon, couponName }: ICouponCardProps) {
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 border border-white/10 rounded-2xl p-4 text-center shadow-md hover:shadow-lg transition-all"
    >
      <img
        src={couponName?.[0]?.logo}
        alt={couponName?.[0]?.store}
        className="mx-auto mb-3 w-12 h-12 object-contain"
      />
      <h3 className="text-lg font-semibold text-white mb-1">{couponName?.[0]?.store}</h3>
      <p className="text-sm text-gray-100 mb-2">{coupon.discounts}</p>
      <p className="text-sm text-gray-400 mb-2">{coupon.condition}</p>
      <p className="text-sm text-amber-400 font-mono bg-white/5 px-2 py-1 rounded-md inline-block">
        Code: {coupon.couponCode}
      </p>
      <p className="text-xs text-gray-400 mt-2">{coupon.time}</p>
    </motion.div>
  );
}
