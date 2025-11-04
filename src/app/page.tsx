"use client";

import { useEffect, useState } from "react";
import CouponCard from "../components/CouponCard";
import UnsubscribeForm from "../components/UnsubscribeForm";
import InstallBanner from "../components/InstallBanner";

import coupons from '../public/coupons.json'

export default function UnsubscribePage() {
  // const [coupons, setCoupons] = useState<any[]>([]);

  // useEffect(() => {
  //  console.log(coupons, 'coupons');
  // }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-12 flex flex-col items-center">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-3">Manage Your Subscription 💌</h1>
        <p className="text-gray-300 mb-8">
          We’ll stop sending emails, but you can still grab today’s hot deals 👇
        </p>

        <UnsubscribeForm />

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-amber-400">
            🔥 Featured Coupons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {coupons.map((c, i) => (
              <CouponCard key={i} coupon={c} />
            ))}
          </div>
        </section>

        <InstallBanner />

        <footer className="mt-12 text-gray-500 text-sm border-t border-white/10 pt-6">
          © 2025 Elktop — Smart Coupons for Smarter Shoppers |
          <a
            href="https://elktop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline ml-1"
          >
            Visit our site
          </a>
        </footer>
      </div>
    </main>
  );
}
