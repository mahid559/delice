"use client";

import React from "react";
import Image from "next/image";

interface HeroProps {
  onOpenGoingToDelight?: () => void;
  onOpenReservation?: () => void;
  onOpenOrderOnline?: () => void;
  onOpenGiftCard?: () => void;
}

export default function Hero({
  onOpenGoingToDelight,
  onOpenReservation,
  onOpenOrderOnline,
  onOpenGiftCard,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#DE2B2B] text-[#F8EFDC] min-h-[85vh] lg:min-h-[92vh] flex items-center">
      {/* Background Hero Plate & Fluid Red Organic Shapes (Matching delice.ca) */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[68%] h-full z-0 overflow-hidden pointer-events-none">
        <Image
          src="https://delice.ca/wp-content/uploads/2026/01/full-scaled.jpg"
          alt="Délice Resto Lounge Table and Atmosphere"
          fill
          priority
          className="object-cover object-right lg:object-center"
          sizes="(max-width: 1024px) 100vw, 68vw"
        />
        {/* Layer the actual foreground mask from delice.ca */}
        <div className="absolute inset-0 z-1 pointer-events-none hidden lg:block">
          <Image
            src="https://delice.ca/wp-content/uploads/2026/01/mask-scaled.png"
            alt=""
            fill
            className="object-cover object-right lg:object-center"
            sizes="68vw"
          />
        </div>
        {/* Organic curved shape gradient mask blending directly into solid red #DE2B2B */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#DE2B2B] via-[#DE2B2B]/70 to-transparent lg:via-[#DE2B2B]/30 z-2"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#DE2B2B] via-transparent to-transparent opacity-90 lg:opacity-40 z-2"></div>
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 w-full relative z-10">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Authentic Tagline: "Any reason is good" in White */}
          <div className="mb-6">
            <h1 className="font-editorial-italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F8EFDC] font-normal leading-[0.95] tracking-tight">
              Any <br />
              <span className="font-serif-display not-italic font-bold">reason</span> <br />
              is good
            </h1>
          </div>

          {/* Subtitle & Story text in white */}
          <div className="mb-8">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#F8EFDC] mb-3">
              PIZZA DÉLICE SINCE 1970
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#F8EFDC]/95 max-w-lg leading-relaxed font-normal">
              In the heart of Lévis, blending warmth, sophistication, and conviviality in a vibrant and inviting atmosphere.
            </p>
          </div>

          {/* 4 White Pill Buttons from delice.ca Hero */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenGoingToDelight}
              className="delight-btn delight-btn-white shadow-xl hover:scale-105 transition-all text-xs sm:text-[13px] px-5 py-3 font-bold uppercase tracking-wider"
            >
              Going to Délice
            </button>
            <button
              onClick={onOpenReservation}
              className="delight-btn delight-btn-white shadow-xl hover:scale-105 transition-all text-xs sm:text-[13px] px-5 py-3 font-bold uppercase tracking-wider"
            >
              Reserve
            </button>
            <button
              onClick={onOpenOrderOnline}
              className="delight-btn delight-btn-white shadow-xl hover:scale-105 transition-all text-xs sm:text-[13px] px-5 py-3 font-bold uppercase tracking-wider"
            >
              Order online
            </button>
            <button
              onClick={onOpenGiftCard}
              className="delight-btn delight-btn-white shadow-xl hover:scale-105 transition-all text-xs sm:text-[13px] px-5 py-3 font-bold uppercase tracking-wider hidden sm:inline-flex"
            >
              Gift card
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
