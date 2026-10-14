"use client";

import React from "react";
import { Phone, Calendar } from "lucide-react";

interface BookingCtaSectionProps {
  onOpenReservation: () => void;
}

export default function BookingCtaSection({ onOpenReservation }: BookingCtaSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#F8EFDC] border-t border-b border-[#DE2B2B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Heading & Action Buttons */}
          <div className="lg:col-span-7">
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#DE2B2B] leading-[1.08] mb-8">
              What Are You <br className="hidden sm:inline" />
              Waiting For?
            </h2>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenReservation}
                className="delight-btn delight-btn-primary px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-md cursor-pointer hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Table</span>
              </button>

              <a
                href="tel:+14188332221"
                className="px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full border border-[#DE2B2B] text-[#DE2B2B] hover:bg-[#DE2B2B] hover:text-[#F8EFDC] transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>418-833-2221</span>
              </a>
            </div>
          </div>

          {/* Right Column: Narrative Body */}
          <div className="lg:col-span-5 flex items-center">
            <p className="font-serif-display text-xl sm:text-2xl lg:text-3xl text-[#7C2627] leading-relaxed italic border-l-2 border-[#DE2B2B]/30 pl-6 sm:pl-8">
              Whether you call us Pizza Délice, Resto Délice, or Délice Resto Lounge, one thing remains certain: We’re here to give you a great time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
