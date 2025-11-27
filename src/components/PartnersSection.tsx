"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "/images/partners/1.png",
  "/images/partners/2.png",
  "/images/partners/3.png",
  "/images/partners/4.png",
  "/images/partners/5.png",
  "/images/partners/6.png",
];

export function PartnersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-10">
            <p className="text-[#A52A2A] my-4">
                Partners & Clients
            </p>
          <h2 className="text-2xl md:text-4xl text-black font-bold">
            We Work With The Best People
          </h2>
        </div>

        {/* INFINITE SLIDER */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "100%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Duplicate logos to make seamless loop */}
            {[...logos, ...logos].map((src, i) => (
              <div key={i} className="min-w-[200px] h-20 flex items-center justify-center my-10">
                <Image
                  src={src}
                  alt="logo"
                  width={150}
                  height={150}
                  className="object-contain opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
