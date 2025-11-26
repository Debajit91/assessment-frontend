"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const heroSlides = [
  {
    id: 1,
    mainImage: "/images/hero/1.png",
    thumb: "/images/hero/1.png",
    bg: "#880808",
    circle: "#A52A2A",
  },
  {
    id: 2,
    mainImage: "/images/hero/2.png",
    thumb: "/images/hero/2.png",
    bg: "#0a4669",
    circle: "#0a3659",
  },
  {
    id: 3,
    mainImage: "/images/hero/3.png",
    thumb: "/images/hero/3.png",
    bg: "#953553",
    circle: "#a95c68",
  },
  {
    id: 4,
    mainImage: "/images/hero/4.png",
    thumb: "/images/hero/4.png",
    bg: "#006666",
    circle: "#003333",
  },
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevIndexRef = useRef(0);

  const activeSlide = heroSlides[activeIndex];

  const direction = activeIndex >= prevIndexRef.current ? 1 : -1;

  useEffect(() => {
    prevIndexRef.current = activeIndex;
  }, [activeIndex]);

  const RADIUS = 360;

  const [showMore, setShowMore] = useState(false);

  const fullText =
    "Breakfast, often referred to as the ‘most important meal of the day’, provides essential nutrients to kick start our day. It includes a variety of foods, like fruits, cereals, dairy products, and proteins, that contribute to a balanced diet.";

  const shortText =
    "Breakfast, often referred to as the ‘most important meal of the day’, provides essential nutrients to kick start our day.";

  return (
    <section
      className="relative text-[#FFFFFF] lg:rounded-b-[20px] overflow-hidden min-h-screen transition-colors
    duration-500"
      style={{ backgroundColor: activeSlide.bg }}
    >
      <div className="container flex flex-col md:flex-row md:items-center md:justify-between p-10  lg:p-8 gap-4">
        <div className="hidden md:block font-semibold tracking-wide text-3xl relative z-20">
          RESTAURANT
        </div>

        <div className="w-full md:max-w-[650px] h-8 md:h-11 relative z-10">
          <input
            className="w-full h-full rounded-xl pl-14 md:pl-18 pr-4 text-sm md:text-base text-black font-bold bg-[#FFFFFF] outline-none"
            placeholder="Search..."
          />

          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500">
            <MagnifyingGlassIcon className="w-6 h-6" />
          </span>
        </div>
      </div>
      {/* </header> */}

      <div
        className="
          absolute
          lg:-top-45  -top-35 
          lg:-left-60 -left-35
          lg:w-210 w-120
          lg:h-210 h-120
          rounded-full  
          z-0
          pointer-events-none
          transition-colors duration-500
        "
        style={{ backgroundColor: activeSlide.circle }}
      />

      {/* BOTTOM-RIGHT BIG CIRCLE */}
      <div
        className="
          absolute
          lg:-bottom-180 -bottom-40
          lg:-right-150 -right-40
          lg:w-300 w-120
          lg:h-300 h-120
          rounded-full
          z-0
          pointer-events-none
          transition-colors duration-500
        "
        style={{ backgroundColor: activeSlide.circle }}
      />
      <div className="relative z-10">
        <div
          className="
          container
          px-4 sm:px-6 lg:px-16
          pt-10 md:pt-16
          grid
          grid-cols-1
          gap-8
          md:grid-cols-2
          md:items-center
        "
        >
          {/* TEXT BLOCK */}
          <div className="lg:-mr-20 lg:-mt-30 -mt-10 mx-10 lg:mx-2">
            <h1 className="text-5xl md:text-7xl mb-4 leading-tight">
              BREAKFAST
            </h1>

            <div className="md:hidden mb-4 text-base opacity-90">
              {showMore ? fullText : shortText}

              {!showMore && (
                <button
                  onClick={() => setShowMore(true)}
                  className="ml-1 underline font-semibold cursor-pointer"
                >
                  See more
                </button>
              )}
            </div>

            <p className="hidden md:block text-base md:font-semibold opacity-90 mb-4">
              {fullText}
            </p>
          </div>

          {/* BIG IMAGE */}
          <div className="relative z-10 row-span-2 mt-5 flex  justify-center md:justify-end">
            <motion.div
              key={activeSlide.mainImage}
              initial={{
                opacity: 0,
                x: direction * RADIUS,
                y: direction > 0 ? -120 : 120,
                rotate: direction * 45,
                scale: 0.8,
              }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-600 max-h-600"
            >
              <Image
                src={activeSlide.mainImage}
                alt="Featured breakfast"
                width={600}
                height={600}
                className="
                object-contain
                max-w-[220px]
                md:max-w-[360px] lg:max-w-[550px]
              "
              />
            </motion.div>
          </div>

          {/* THUMBNAILS ROW */}
          <div
            className="
            flex justify-center md:justify-start
            lg:-mt-90 mt-10 pb-40 lg:pb-0
          "
          >
            <div className="flex gap-3">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="relative flex flex-col items-center cursor-pointer"
                >
                  {/* thumbnail */}
                  <div
                    className="
                    lg:w-35 lg:h-35 w-14 h-14
                    rounded-full overflow-hidden
                    transition-transform duration-200
                  "
                  >
                    <Image
                      src={slide.thumb}
                      alt={`Thumbnail ${slide.id}`}
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* white underline only for active */}
                  {index === activeIndex && (
                    <Image
                      src="/images/underline.png"
                      alt="active underline"
                      width={95}
                      height={8}
                      className="mt-4 w-10 h-1 lg:w-25"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
