"use client";

import React, { useState } from "react";
import DelightLogo from "@/components/DelightLogo";
import { TICKER_MESSAGES } from "@/data/restaurantData";
import { X, Menu } from "lucide-react";

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenGoingToDelight: () => void;
  onOpenReservation: () => void;
  onOpenOrderOnline: () => void;
  onOpenGiftCard: () => void;
}

export default function Header({
  onOpenMenu,
  onOpenGoingToDelight,
  onOpenReservation,
  onOpenOrderOnline,
  onOpenGiftCard,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#DE2B2B] text-[#F8EFDC] transition-all">
      {/* Top Banner (Ticker & Language) */}
      <div className="border-b border-[#F8EFDC]/20 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-[#F8EFDC]">
          {/* Messages Marquee */}
          <div className="overflow-hidden flex-1 pr-6 flex items-center">
            <div className="animate-marquee flex items-center gap-10 font-medium text-xs sm:text-[13px] tracking-wide">
              {TICKER_MESSAGES.concat(TICKER_MESSAGES).map((msg, idx) => (
                <span key={idx} className="inline-flex items-center gap-2.5 shrink-0">
                  <span className="font-bold uppercase tracking-wider">{msg.title}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F8EFDC]"></span>
                  <span className="opacity-90">{msg.detail}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Language Switcher */}
          <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-[#F8EFDC]/20 shrink-0 font-bold text-xs uppercase tracking-wider">
            <span className="text-[#F8EFDC] opacity-90 hover:opacity-100 cursor-pointer">
              English
            </span>
          </div>
        </div>
      </div>

      {/* Retro Double Rule Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <hr className="c-double-rule text-[#F8EFDC]/40 my-0.5" />
      </div>

      {/* Main Inner Header (Exact layout from delice.ca: Menus, The Restaurant, Logo, What's On, Private Rooms) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Left Nav links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12 flex-1">
          <button
            onClick={onOpenMenu}
            className="text-xs lg:text-[13px] font-bold uppercase tracking-[0.15em] text-[#F8EFDC] hover:opacity-70 transition-opacity cursor-pointer"
          >
            Menus
          </button>
          <a
            href="#restaurant"
            className="text-xs lg:text-[13px] font-bold uppercase tracking-[0.15em] text-[#F8EFDC] hover:opacity-70 transition-opacity"
          >
            The Restaurant
          </a>
        </div>

        {/* Center: Authentic Cursive Delight Logo */}
        <div className="flex justify-center items-center">
          <a href="#" className="inline-block hover:scale-105 transition-transform" aria-label="Délice Homepage">
            <DelightLogo className="h-9 sm:h-11 w-auto text-[#F8EFDC]" />
          </a>
        </div>

        {/* Right Nav links */}
        <div className="hidden md:flex items-center justify-end gap-8 lg:gap-12 flex-1">
          <a
            href="#promotions"
            className="text-xs lg:text-[13px] font-bold uppercase tracking-[0.15em] text-[#F8EFDC] hover:opacity-70 transition-opacity"
          >
            What’s On
          </a>
          <a
            href="#private-rooms"
            className="text-xs lg:text-[13px] font-bold uppercase tracking-[0.15em] text-[#F8EFDC] hover:opacity-70 transition-opacity"
          >
            Private Rooms
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F8EFDC] hover:opacity-70 transition-opacity cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#7C2627] text-[#F8EFDC] px-6 py-8 border-t border-[#F8EFDC]/20 space-y-5 animate-in slide-in-from-top-4">
          <div className="flex flex-col space-y-4 text-center">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMenu();
              }}
              className="font-serif-display text-2xl font-bold hover:opacity-80 py-1"
            >
              Menus
            </button>
            <a
              href="#restaurant"
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif-display text-2xl font-bold hover:opacity-80 py-1"
            >
              The Restaurant
            </a>
            <a
              href="#promotions"
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif-display text-2xl font-bold hover:opacity-80 py-1"
            >
              What’s On
            </a>
            <a
              href="#private-rooms"
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif-display text-2xl font-bold hover:opacity-80 py-1"
            >
              Private Rooms
            </a>
            <a
              href="#careers"
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif-display text-2xl font-bold hover:opacity-80 py-1"
            >
              Careers
            </a>
          </div>

          <div className="pt-6 border-t border-[#F8EFDC]/20 grid grid-cols-2 gap-3 text-center">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGoingToDelight();
              }}
              className="delight-btn delight-btn-white py-2.5 text-xs font-bold"
            >
              Going to Délice
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="delight-btn delight-btn-white py-2.5 text-xs font-bold"
            >
              Reserve
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
