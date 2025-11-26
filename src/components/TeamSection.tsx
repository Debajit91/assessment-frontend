"use client";

import Image from "next/image";

const TEAM = [
  {
    id: 1,
    name: "Mark Henry",
    role: "Owner",
    img: "/images/Mark.png",
  },
  {
    id: 2,
    name: "Lucky Helen",
    role: "Chef",
    img: "/images/Mark.png",
  },
  {
    id: 3,
    name: "Moon Henry",
    role: "Founder",
    img: "/images/Mark.png",
  },
  {
    id: 4,
    name: "Tom Monrow",
    role: "Specialist",
    img: "/images/Mark.png",
  },
];

export function TeamSection() {
  return (
    <section className="relative bg-white">
      <div className="relative bg-[#b8373a] text-white py-16 lg:py-20 overflow-hidden mt-4 lg:-mt-6">
        <div className="absolute inset-0">
          <Image
            src="/images/bg.png"
            alt="team background"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[#b8373a]/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 bottom-15 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Team Member</h2>
          <p className="text-sm md:text-base mt-2 opacity-90 max-w-xl mx-auto">
            Meet the talented individuals who bring passion, creativity, and
            excellence to our kitchen every day.
          </p>
        </div>
      </div>

      <div className="relative z-20 -mt-38 pb-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((person) => (
            <div key={person.id} className="bg-white overflow-hidden shadow-lg">
              <div className="relative w-full h-[260px]">
                <Image
                  src={person.img}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="px-4 py-4 text-center text-black">
                <p className="text-lg font-semibold">{person.name}</p>
                <p className="text-sm text-gray-600">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
