"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone, Clock, Navigation, ArrowRight } from "lucide-react";

interface FloatingNavDockProps {
  onOpenReservation: () => void;
  onOpenOrderOnline: () => void;
  onOpenGiftCard: () => void;
}

export default function FloatingNavDock({
  onOpenReservation,
  onOpenOrderOnline,
  onOpenGiftCard,
}: FloatingNavDockProps) {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 pb-5 pointer-events-none flex flex-col items-center">
      {/* Floating Going to Delight Sheet */}
      <AnimatePresence>
        {sheetOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="pointer-events-auto mb-3 w-[92vw] max-w-lg bg-[#7C2627] text-[#F8EFDC] rounded-3xl p-6 sm:p-7 shadow-2xl border-2 border-[#DE2B2B]/40"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#F8EFDC]/20 mb-4">
              <h3 className="font-serif-display text-2xl font-bold text-[#F8EFDC]">
                Going to Délice
              </h3>
              <button
                onClick={() => setSheetOpen(false)}
                className="w-8 h-8 rounded-full border border-[#F8EFDC]/30 flex items-center justify-center text-[#F8EFDC] hover:bg-[#F8EFDC] hover:text-[#7C2627] transition-colors cursor-pointer"
                aria-label="Close sheet"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#F8EFDC]/90 leading-relaxed mb-5 font-normal">
              Located in the heart of downtown Lévis, close to the Convention Center, Le Délice is
              just a stone’s throw from the highway, making it ideal for travelers. We are also close
              to all major hotels and easily accessible on foot, by bike, or by car thanks to our
              large free parking lot.
            </p>

            <div className="grid grid-cols-2 gap-4 py-3 border-t border-[#F8EFDC]/15 mb-4 text-xs">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5DBCA] block mb-1">
                  Address
                </span>
                <a
                  href="https://maps.app.goo.gl/1EDA13JAa4m8kCnE6"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline font-medium text-[#F8EFDC]"
                >
                  146 route du Président Kennedy
                  <br />
                  Lévis, QC, G6V 6C9
                </a>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5DBCA] block mb-1">
                  Phone
                </span>
                <a href="tel:+14188332221" className="hover:underline font-medium text-[#F8EFDC]">
                  418-833-2221
                </a>
              </div>
            </div>

            <div className="py-2.5 border-t border-[#F8EFDC]/15 mb-5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-bold text-[#F8EFDC]">Currently open - Until 22h00</span>
              </div>
              <span className="text-[11px] text-[#F8EFDC]/70 italic">Check hours before visiting</span>
            </div>

            <a
              href="https://maps.app.goo.gl/1EDA13JAa4m8kCnE6"
              target="_blank"
              rel="noreferrer"
              className="delight-btn delight-btn-light w-full py-3 text-xs font-bold uppercase tracking-wider shadow-lg flex justify-center items-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              <span>Get directions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Floating Pill Dock */}
      <div className="pointer-events-auto flex items-center gap-2 p-1.5 rounded-full bg-[#F8EFDC]/95 backdrop-blur-md border border-[#DE2B2B]/40 shadow-xl">
        <button
          onClick={() => setSheetOpen(!sheetOpen)}
          className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-bold tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${
            sheetOpen
              ? "bg-[#DE2B2B] text-[#F8EFDC] shadow-sm"
              : "border border-[#DE2B2B] text-[#DE2B2B] hover:bg-[#DE2B2B] hover:text-[#F8EFDC]"
          }`}
        >
          Going to Délice
        </button>

        <button
          onClick={onOpenReservation}
          className="px-4 sm:px-5 py-2.5 rounded-full border border-[#DE2B2B] text-[#DE2B2B] hover:bg-[#DE2B2B] hover:text-[#F8EFDC] text-xs sm:text-[13px] font-bold tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap"
        >
          Reserve
        </button>

        <button
          onClick={onOpenOrderOnline}
          className="px-4 sm:px-5 py-2.5 rounded-full border border-[#DE2B2B] text-[#DE2B2B] hover:bg-[#DE2B2B] hover:text-[#F8EFDC] text-xs sm:text-[13px] font-bold tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap"
        >
          Order online
        </button>

        <button
          onClick={onOpenGiftCard}
          className="px-4 sm:px-5 py-2.5 rounded-full border border-[#DE2B2B] text-[#DE2B2B] hover:bg-[#DE2B2B] hover:text-[#F8EFDC] text-xs sm:text-[13px] font-bold tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap hidden sm:block"
        >
          Gift card
        </button>
      </div>
    </div>
  );
}
