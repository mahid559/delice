"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { WEEKLY_SCHEDULE } from "@/data/restaurantData";

interface FooterProps {
  onOpenGoingToDelight: () => void;
  onOpenMenu: () => void;
  onOpenReservation: () => void;
}

export default function Footer({
  onOpenGoingToDelight,
  onOpenMenu,
  onOpenReservation,
}: FooterProps) {
  // Tuesday selected by default matching original
  const [selectedDayIndex, setSelectedDayIndex] = useState(1);
  const activeDay = WEEKLY_SCHEDULE[selectedDayIndex];

  const prevDay = () => {
    setSelectedDayIndex((prev) => (prev === 0 ? WEEKLY_SCHEDULE.length - 1 : prev - 1));
  };

  const nextDay = () => {
    setSelectedDayIndex((prev) => (prev === WEEKLY_SCHEDULE.length - 1 ? 0 : prev + 1));
  };

  return (
    <footer className="relative bg-[#7C2627] text-[#F8EFDC] pt-16 sm:pt-20 pb-28 sm:pb-32 overflow-hidden z-10">
      {/* Decorative Bottom-Right Wave Vector from delice.ca */}
      <div className="c-footer_shape absolute bottom-0 right-0 w-[420px] sm:w-[520px] lg:w-[600px] pointer-events-none opacity-40 select-none z-0">
        <Image
          src="/footer-shape-bottom-right.svg"
          alt=""
          width={600}
          height={400}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Decorative Rotating White Stamp with Delight Logo Monogram from delice.ca */}
      <div className="c-footer_stamp absolute -bottom-6 -right-6 sm:bottom-4 sm:right-12 pointer-events-none select-none z-0">
        <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-[#F8EFDC] text-[#DE2B2B] shadow-2xl flex items-center justify-center border-4 border-dashed border-[#DE2B2B]/40 -rotate-12">
          <span className="font-editorial-italic text-6xl sm:text-7xl font-bold italic select-none">
            D
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Interactive Schedule Component (.c-schedule with cream background) */}
          <div className="lg:col-span-5">
            <div className="bg-[#F8EFDC] text-[#DE2B2B] p-6 sm:p-8 rounded-3xl shadow-2xl border border-[#F8EFDC]/40">
              {/* Header with double rule and clock */}
              <div className="flex items-center gap-3 mb-2">
                <hr className="c-double-rule flex-1 text-[#DE2B2B]" />
                <div className="w-8 h-8 rounded-full border border-[#DE2B2B] flex items-center justify-center text-[#DE2B2B] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <hr className="c-double-rule flex-1 text-[#DE2B2B]" />
              </div>

              <span className="text-center block text-[11px] font-bold uppercase tracking-[0.2em] text-[#7C2627] mb-4">
                Schedule
              </span>

              {/* Day Nav Carousel */}
              <div className="flex items-center justify-between py-2 border-y border-[#DE2B2B]/20 mb-5">
                <button
                  onClick={prevDay}
                  className="p-1 rounded-full hover:bg-[#DE2B2B]/10 text-[#DE2B2B] transition-colors cursor-pointer"
                  aria-label="Previous day"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <span className="font-serif-display text-2xl font-bold text-[#DE2B2B] tracking-wide">
                  {activeDay.day}
                </span>

                <button
                  onClick={nextDay}
                  className="p-1 rounded-full hover:bg-[#DE2B2B]/10 text-[#DE2B2B] transition-colors cursor-pointer"
                  aria-label="Next day"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Schedule Rows */}
              <div className="space-y-2.5 text-xs sm:text-sm font-normal">
                <div className="flex items-center justify-between py-1 border-b border-[#DE2B2B]/10">
                  <span className="font-semibold text-[#DE2B2B]">Dining room</span>
                  <span className="text-[#7C2627] font-medium">{activeDay.diningRoom}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#DE2B2B]/10">
                  <span className="font-semibold text-[#DE2B2B]">Bar</span>
                  <span className="text-[#7C2627] font-medium">{activeDay.bar}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#DE2B2B]/10">
                  <span className="font-semibold text-[#DE2B2B]">Breakfast</span>
                  <span className="text-[#7C2627] font-medium">{activeDay.breakfast}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#DE2B2B]/10">
                  <span className="font-semibold text-[#DE2B2B]">Happy Hour</span>
                  <span className="text-[#7C2627] font-medium">{activeDay.happyHour}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#DE2B2B]/10">
                  <span className="font-semibold text-[#DE2B2B]">Takeaway</span>
                  <span className="text-[#7C2627] font-medium">{activeDay.takeaway}</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="font-semibold text-[#DE2B2B]">Delivery</span>
                  <span className="text-[#7C2627] font-medium">{activeDay.delivery}</span>
                </div>
              </div>

              <p className="mt-5 pt-3 border-t border-[#DE2B2B]/15 text-[11px] text-[#7C2627]/80 italic text-center leading-normal">
                Please check the schedule on Google for public holidays or holiday periods.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Details & Navigation Links (.c-footer_content) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Contact Strip with 3 segmented columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-b border-[#F8EFDC]/20 py-4 mb-8">
              <div className="sm:border-r border-[#F8EFDC]/20 sm:pr-4 py-2">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#F8EFDC]/60 mb-1">
                  Address
                </span>
                <a
                  href="https://maps.app.goo.gl/1EDA13JAa4m8kCnE6"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs sm:text-sm font-medium hover:underline text-[#F8EFDC] leading-snug"
                >
                  146 route du Président Kennedy
                  <br />
                  Lévis, QC, G6V 6C9
                </a>
              </div>

              <div className="sm:border-r border-[#F8EFDC]/20 sm:px-4 py-2 border-t sm:border-t-0 border-[#F8EFDC]/20">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#F8EFDC]/60 mb-1">
                  Phone
                </span>
                <a
                  href="tel:+14188332221"
                  className="text-xs sm:text-sm font-medium hover:underline text-[#F8EFDC]"
                >
                  418-833-2221
                </a>
              </div>

              <div className="sm:pl-4 py-2 border-t sm:border-t-0 border-[#F8EFDC]/20">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#F8EFDC]/60 mb-1">
                  Email
                </span>
                <a
                  href="mailto:resto@delice.ca"
                  className="text-xs sm:text-sm font-medium hover:underline text-[#F8EFDC]"
                >
                  resto@delice.ca
                </a>
              </div>
            </div>

            {/* Menu Nav Links and Social Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-start mb-10">
              <nav className="sm:col-span-6 flex flex-col space-y-3">
                <a
                  href="#"
                  className="font-serif-display text-2xl sm:text-3xl font-bold text-[#F8EFDC] hover:opacity-60 transition-opacity"
                >
                  Home
                </a>
                <button
                  onClick={onOpenMenu}
                  className="font-serif-display text-2xl sm:text-3xl font-bold text-[#F8EFDC] hover:opacity-60 transition-opacity text-left cursor-pointer"
                >
                  Menus
                </button>
                <a
                  href="#restaurant"
                  className="font-serif-display text-2xl sm:text-3xl font-bold text-[#F8EFDC] hover:opacity-60 transition-opacity"
                >
                  The Restaurant
                </a>
                <a
                  href="#promotions"
                  className="font-serif-display text-2xl sm:text-3xl font-bold text-[#F8EFDC] hover:opacity-60 transition-opacity"
                >
                  What’s On
                </a>
                <a
                  href="#private-rooms"
                  className="font-serif-display text-2xl sm:text-3xl font-bold text-[#F8EFDC] hover:opacity-60 transition-opacity"
                >
                  Private Rooms
                </a>
              </nav>

              <div className="sm:col-span-6 flex flex-col justify-between h-full space-y-6">
                <div>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-[#F8EFDC]/80 hover:text-[#F8EFDC] transition-colors"
                  >
                    Privacy policy
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/DeliceRestolounge/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-[#F8EFDC]/40 flex items-center justify-center text-[#F8EFDC] hover:bg-[#F8EFDC] hover:text-[#7C2627] transition-all"
                    title="Visit us on Facebook"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/delicerestolounge/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-[#F8EFDC]/40 flex items-center justify-center text-[#F8EFDC] hover:bg-[#F8EFDC] hover:text-[#7C2627] transition-all"
                    title="Visit us on Instagram"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright Strip */}
            <div className="pt-6 border-t border-[#F8EFDC]/15 flex items-center justify-between text-xs text-[#F8EFDC]/60">
              <span>© 2026 Délice</span>
              <span>All rights reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
