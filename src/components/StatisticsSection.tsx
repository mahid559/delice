"use client";

import React from "react";
import Image from "next/image";

export default function StatisticsSection() {
  return (
    <section className="relative py-28 sm:py-36 lg:py-44 bg-[#F8EFDC] border-b border-[#DE2B2B]/20 overflow-hidden">
      {/* Background Sinuous Ribbon Vector from delice.ca */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-60">
        <Image
          src="/statistics-shape.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* The 6-item cluster: 2 circular photos + 4 scalloped stamp badges from delice.ca */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10">
          {/* Item 1: Circular photo of guests at table (.c-statistics_media) */}
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-[#F8EFDC] -translate-y-4 hover:scale-105 transition-transform duration-500">
            <Image
              src="https://delice.ca/wp-content/uploads/2025/01/dscf5189-2560x1920.jpg"
              alt="Dining Experience at Délice"
              fill
              className="object-cover"
              sizes="300px"
            />
          </div>

          {/* Item 2: Stamp 1: Red #DE2B2B - 160 Team members */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-60 lg:h-60 rounded-full bg-[#DE2B2B] text-[#F8EFDC] shadow-2xl flex flex-col items-center justify-center text-center p-6 border-4 border-dashed border-[#F8EFDC]/40 -rotate-6 hover:rotate-0 transition-transform duration-500 cursor-pointer">
            <span className="font-serif-display text-5xl sm:text-6xl font-bold leading-none mb-2">
              160
            </span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F8EFDC]/95">
              Team members
            </span>
          </div>

          {/* Item 3: Stamp 2: Olive #91964F - 1970 Established */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-60 lg:h-60 rounded-full bg-[#91964F] text-[#F8EFDC] shadow-2xl flex flex-col items-center justify-center text-center p-6 border-4 border-dashed border-[#F8EFDC]/40 sm:translate-y-8 hover:translate-y-4 transition-transform duration-500 cursor-pointer">
            <span className="font-serif-display text-5xl sm:text-6xl font-bold leading-none mb-2">
              1970
            </span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F8EFDC]/95">
              Established
            </span>
          </div>

          {/* Item 4: Stamp 3: Maroon #7C2627 - 700 Indoor seats */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-60 lg:h-60 rounded-full bg-[#7C2627] text-[#F8EFDC] shadow-2xl flex flex-col items-center justify-center text-center p-6 border-4 border-dashed border-[#F8EFDC]/40 rotate-6 hover:rotate-0 transition-transform duration-500 cursor-pointer">
            <span className="font-serif-display text-5xl sm:text-6xl font-bold leading-none mb-2">
              700
            </span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F8EFDC]/95">
              Indoor seats
            </span>
          </div>

          {/* Item 5: Stamp 4: Cyan #75C2BD - 300 Outdoor seats */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-60 lg:h-60 rounded-full bg-[#75C2BD] text-[#F8EFDC] shadow-2xl flex flex-col items-center justify-center text-center p-6 border-4 border-dashed border-[#F8EFDC]/40 sm:-translate-y-8 hover:-translate-y-4 transition-transform duration-500 cursor-pointer">
            <span className="font-serif-display text-5xl sm:text-6xl font-bold leading-none mb-2">
              300
            </span>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#F8EFDC]">
              Outdoor seats
            </span>
          </div>

          {/* Item 6: Circular photo of staff with pizza boxes (.c-statistics_media) */}
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-[#F8EFDC] translate-y-6 hover:scale-105 transition-transform duration-500">
            <Image
              src="https://delice.ca/wp-content/uploads/2025/01/dscf5821-2560x3413.jpg"
              alt="Delice Pizza Hospitality"
              fill
              className="object-cover"
              sizes="300px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
