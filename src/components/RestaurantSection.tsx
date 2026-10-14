"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface RestaurantSectionProps {
  onOpenGoingToDelight: () => void;
  onOpenReservation: () => void;
}

export default function RestaurantSection({
  onOpenGoingToDelight,
  onOpenReservation,
}: RestaurantSectionProps) {
  return (
    <section id="restaurant" className="relative bg-[#7C2627] text-[#F8EFDC] pt-20 lg:pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Horizontal Header (Matching delice.ca) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 pb-8 border-b border-[#F8EFDC]/20">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F8EFDC]/80 block mb-3">
              The Restaurant
            </span>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8EFDC] leading-[1.05]">
              A Lévis Classic <br className="hidden sm:inline" />
              <span className="font-editorial-italic not-italic font-normal opacity-90">Since 1970!</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-sm sm:text-base lg:text-lg text-[#F8EFDC]/90 leading-relaxed font-normal mb-6">
              Founded on the Côte du Passage, Délice Resto Lounge is a staple in Lévis. With delicious dishes, distinct atmospheres, and a one-of-a-kind rooftop terrace, we offer a dining and nightlife experience that constantly evolves to surprise and delight our guests.
            </p>
            <div>
              <button
                onClick={onOpenGoingToDelight}
                className="delight-btn delight-btn-white px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Media Stage: Wide photo of the restaurant hall + bottom fluid wave */}
        <div className="relative mt-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#F8EFDC]/20 w-full aspect-[16/10] sm:aspect-[16/9]">
            <Image
              src="https://delice.ca/wp-content/uploads/2025/04/dscf5672-2560x1920.jpg"
              alt="Délice Resto Lounge Hall and Dining Room"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
          </div>

          {/* Bottom Fluid Wave Graphic from delice.ca */}
          <div className="w-full relative -mt-8 sm:-mt-14 pointer-events-none opacity-90">
            <Image
              src="/medias-shape-bottom.svg"
              alt=""
              width={1400}
              height={180}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
