"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { PROMOTIONS } from "@/data/restaurantData";

interface PromotionsCarouselProps {
  onOpenReservation: () => void;
}

export default function PromotionsCarousel({ onOpenReservation }: PromotionsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activePromo = PROMOTIONS[currentIndex];
  const nextPromo = PROMOTIONS[(currentIndex + 1) % PROMOTIONS.length];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROMOTIONS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === PROMOTIONS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="promotions" className="c-promotions relative py-20 sm:py-28 lg:py-36 overflow-hidden bg-[#F8EFDC] border-b border-[#DE2B2B]/20">
      {/* Giant Colored Circular Backsplashes from delice.ca */}
      {/* Backsplash 1: Active Promotion Cyan/Color Circle */}
      <div
        className="absolute -top-12 -left-20 sm:-left-10 lg:left-12 w-[420px] h-[420px] sm:w-[600px] sm:h-[600px] lg:w-[720px] lg:h-[720px] rounded-full pointer-events-none transition-colors duration-700 opacity-90 z-0"
        style={{ backgroundColor: activePromo.badgeColor }}
      />

      {/* Backsplash 2: Giant Red Circular Shape peeking from right bottom matching delice.ca */}
      <div className="absolute -bottom-36 -right-24 sm:-right-16 lg:right-0 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] lg:w-[850px] lg:h-[850px] rounded-full bg-[#DE2B2B] pointer-events-none opacity-90 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Curved Title: Daily Pleasures */}
        <div className="flex flex-col items-center justify-center text-center mb-6">
          <div className="w-full max-w-[500px] sm:max-w-[620px] aspect-[736/200] flex items-center justify-center">
            <svg viewBox="0 0 736 240" className="w-full h-full overflow-visible select-none pointer-events-none">
              <defs>
                <path
                  id="circlePath-promo-main"
                  d="M 68 220 A 300 160 0 0 1 668 220"
                  fill="none"
                />
              </defs>
              <text
                className="font-serif-display font-bold uppercase text-[42px] sm:text-[50px] fill-[#F8EFDC]"
                style={{ letterSpacing: "0.08em" }}
              >
                <textPath href="#circlePath-promo-main" startOffset="50%" textAnchor="middle">
                  Daily Pleasures
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Horizontal Carousel View (Slide 1 Active on Left + Slide 2 Peeking on Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-4">
          {/* Active Promo Stage */}
          <div className="md:col-span-7 flex flex-col items-center text-center">
            {/* Circular Plate */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-[#F8EFDC] shadow-2xl flex items-center justify-center p-6 border-4 border-[#F8EFDC]/60 group">
              <div className="relative w-full h-full drop-shadow-xl transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={activePromo.image}
                  alt={activePromo.title}
                  fill
                  className="object-contain"
                  sizes="400px"
                />
              </div>

              {/* Prev Button */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F8EFDC] text-[#DE2B2B] shadow-lg flex items-center justify-center hover:bg-[#DE2B2B] hover:text-[#F8EFDC] transition-all cursor-pointer z-20 border border-[#DE2B2B]/30"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F8EFDC] text-[#DE2B2B] shadow-lg flex items-center justify-center hover:bg-[#DE2B2B] hover:text-[#F8EFDC] transition-all cursor-pointer z-20 border border-[#DE2B2B]/30"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Active Promo Typography Matching delice.ca */}
            <div className="mt-6 flex flex-col items-center">
              <h3 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8EFDC] mb-2 leading-tight drop-shadow-sm">
                {activePromo.title}
              </h3>
              <p className="font-editorial-italic text-lg sm:text-xl text-[#F8EFDC]/95 italic mb-2">
                {activePromo.tagline}
              </p>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F8EFDC]/90 mb-5">
                {activePromo.schedule}
              </p>
              <button
                onClick={onOpenReservation}
                className="delight-btn delight-btn-primary px-8 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a table</span>
              </button>
            </div>
          </div>

          {/* Next Promo Peeking In (Right Column) */}
          <div
            onClick={nextSlide}
            className="md:col-span-5 hidden md:flex flex-col items-center text-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full bg-[#F8EFDC] shadow-xl flex items-center justify-center p-5 border-4 border-[#F8EFDC]/40">
              <div className="relative w-full h-full drop-shadow-md">
                <Image
                  src={nextPromo.image}
                  alt={nextPromo.title}
                  fill
                  className="object-contain"
                  sizes="300px"
                />
              </div>
            </div>

            <div className="mt-4 text-center">
              <h4 className="font-serif-display text-2xl font-bold text-[#F8EFDC]">
                {nextPromo.title}
              </h4>
              <p className="font-editorial-italic text-sm text-[#F8EFDC]/90 italic">
                {nextPromo.tagline}
              </p>
              <p className="text-xs font-semibold text-[#F8EFDC]/80 uppercase mt-1">
                {nextPromo.schedule}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
