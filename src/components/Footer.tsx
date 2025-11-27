"use client";

import Image from "next/image";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="mt-16 bg-[#880808] text-white">
      {/* TOP AREA */}
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* COLUMN 1 – Brand + Newsletter */}
          <div>
            <h3 className="text-xl font-semibold tracking-wide mb-4">
              RESTAURANT
            </h3>
            <p className="text-sm text-white/80 mb-4">
              Subscribe our newsletter and get discount 25% off
            </p>

            {/* Email input */}
            <div className="flex items-stretch bg-white rounded-md overflow-hidden max-w-xs mb-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 px-3 py-2 text-sm text-black outline-none"
              />
              <button className="px-4 bg-[#C0392B] flex items-center justify-center">
                {/* small arrow icon */}
                <span className="text-white text-lg">➤</span>
              </button>
            </div>

            {/* Social icons (simple colored circles) */}
            <div className="flex items-center gap-3 mt-3 text-lg">
              <FaPinterest className="w-6 h-6 cursor-pointer hover:text-white/70" />
              <FaTwitter className="w-6 h-6 cursor-pointer hover:text-white/70" />
              <FaFacebookF className="w-6 h-6 cursor-pointer hover:text-white/70" />
              <FaInstagram className="w-6 h-6 cursor-pointer hover:text-white/70" />
              <FaYoutube className="w-6 h-6 cursor-pointer hover:text-white/70" />
            </div>
          </div>

          {/* COLUMN 2 – Contact us */}
          <div className="">
            <h4 className="text-lg font-semibold mb-4">Contact us</h4>
            <ul className="space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 mt-0.5" />
                <span>3517 W. Gray St. Utica, Pennsylvania 57867</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5" />
                <span>(480) 555-0103</span>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5" />
                <span>M.Alyaqout@4house.Co</span>
              </li>
              <li className="flex items-center gap-3">
                <ClockIcon className="w-5 h-5" />
                <span>Sun - Sat / 10:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 – Links */}
          <div className="ml-20">
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-white/85">
              <li>About us</li>
              <li>Contact Us</li>
              <li>Our Menu</li>
              <li>Team</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* COLUMN 4 – Instagram Gallery */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Instagram Gallery</h4>
            <div className="grid grid-cols-3 gap-2">
              {[
                "/images/hero/1.png",
                "/images/hero/2.png",
                "/images/hero/3.png",
                "/images/hero/4.png",
                "/images/hero/2.png",
                "/images/hero/1.png",
              ].map((src, idx) => (
                <div
                  key={idx}
                  className="relative w-full aspect-square overflow-hidden rounded-sm"
                >
                  <Image
                    src={src}
                    alt={`Instagram ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#A83232]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/90">
          <p>Copyright © 2025. All rights reserved</p>

          <div className="flex items-center gap-6">
            <button>Privacy Policy</button>
            <button>Term of Use</button>
            <button>Partner</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
