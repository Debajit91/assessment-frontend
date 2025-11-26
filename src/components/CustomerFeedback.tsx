"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const FEEDBACKS = [
  {
    id: 1,
    quote:
      "Fresh, flavorful, and just the right amount of heat. The tuna was buttery, the rice well-seasoned, and the chili mayo added a great kick. A must-try for sushi lovers.",
    name: "Tayyab Sohail",
    role: "UX/UI Designer",
    avatar: "/images/avatar-1.jpg",
  },
  {
    id: 2,
    quote:
      "Simple but delicious. The crust was perfectly crisp with a smaky edge, the tomatoes tasted fresh, and the mozzarella was melty and rich. Classic done right",
    name: "Nafiz Salim",
    role: "Graphic Designer",
    avatar: "/images/avatar-2.jpg",
  },
  {
    id: 3,
    quote:
      "Juicy and satisfying. The patties were cooked to perfection, cheese melted like a dream, and the toasted brioche bun held it all together. Great value for a casual bite",
    name: "Tayyab Iqbal",
    role: "Developer",
    avatar: "/images/avatar-3.jpg",
  },
];

export function CustomerFeedback() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = FEEDBACKS[activeIndex];

  const len = FEEDBACKS.length;

  const goNext = () => setActiveIndex((prev) => (prev + 1) % len);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + len) % len);

  return (
    <section className="py-3 lg:py-6 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="w-full lg:w-auto relative flex justify-center order-1 lg:order-2 mb-6 lg:mb-0">
          {/* red shape background */}
          <Image
            src="/images/Vector 2.png"
            alt="Background shape"
            width={440}
            height={440}
            className="absolute lg:right-10 bottom-4 translate-y-4 lg:translate-x-10 z-0"
          />

          {/* chef image */}
          <Image
            src="/images/chef.png"
            alt="Chef"
            width={500}
            height={600}
            className="relative z-10 object-contain lg:left-10 max-h-[500px]"
          />
        </div>
        {/* LEFT: TEXT */}
        <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-black">
            Customer <span className="text-[#B71C1C]">Feedback</span>
          </h2>

          {/* animated quote */}
          <motion.p
            key={active.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="text-base lg:text-xl sm:text-lg text-gray-700 leading-relaxed mb-20 max-w-xl h-25"
          >
            {active.quote}
          </motion.p>

          {/* user info + dots */}
          <div className="flex items-center justify-between gap-4">
            {/* user */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={active.avatar}
                  alt={active.name}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-left">
                <p className="font-semibold text-base text-black">
                  {active.name}
                </p>
                <p className="text-xs text-gray-500">{active.role}</p>
              </div>
            </div>

            {/* MOBILE: arrows beside name */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={goPrev}
                className="w-8 h-8 rounded-full border border-[#B71C1C] flex items-center justify-center text-[#B71C1C]"
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="w-8 h-8 rounded-full border border-[#B71C1C] flex items-center justify-center bg-[#B71C1C] text-white"
              >
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            </div>

            {/* DESKTOP: dots */}
            <div className="hidden lg:flex items-center gap-3">
              {FEEDBACKS.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`
                    w-3 h-3 rounded-full border border-[#B71C1C] transition
                    ${
                      index === activeIndex
                        ? "bg-[#B71C1C] scale-125"
                        : "bg-transparent"
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
