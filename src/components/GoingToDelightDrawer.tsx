"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone, Clock, Navigation, Calendar, ShoppingBag, Gift, ArrowRight } from "lucide-react";

interface GoingToDelightDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
  onOpenOrderOnline: () => void;
}

export default function GoingToDelightDrawer({
  isOpen,
  onClose,
  onOpenReservation,
  onOpenOrderOnline,
}: GoingToDelightDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs cursor-pointer"
          />

          {/* Slide-in Sheet */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-[#F8EFDC] text-[#DE2B2B] shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto border-l-2 border-[#DE2B2B]"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#DE2B2B]/20 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#7C2627]">
                    PLAN YOUR VISIT
                  </span>
                  <h3 className="font-serif-display text-3xl font-bold text-[#DE2B2B]">
                    Going to Délice
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full border border-[#DE2B2B]/30 flex items-center justify-center text-[#DE2B2B] hover:bg-[#DE2B2B] hover:text-[#F8EFDC] transition-colors cursor-pointer"
                  aria-label="Close drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Description */}
              <p className="text-sm text-[#7C2627] leading-relaxed mb-6 font-normal">
                Located in the heart of downtown Lévis, close to the Convention Center, Le Délice is
                just a stone’s throw from the highway, making it ideal for travelers. We are also
                close to all major hotels and easily accessible on foot, by bike, or by car thanks
                to our large free parking lot.
              </p>

              {/* Info Cards */}
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-2xl bg-white/70 border border-[#DE2B2B]/20 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#DE2B2B]/10 flex items-center justify-center text-[#DE2B2B] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#7C2627] block mb-0.5">
                      Address & Free Parking
                    </span>
                    <a
                      href="https://maps.app.goo.gl/1EDA13JAa4m8kCnE6"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold hover:underline"
                    >
                      146 route du Président Kennedy, Lévis, QC, G6V 6C9
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/70 border border-[#DE2B2B]/20 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#DE2B2B]/10 flex items-center justify-center text-[#DE2B2B] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#7C2627] block mb-0.5">
                      Phone Inquiries & Takeout
                    </span>
                    <a
                      href="tel:+14188332221"
                      className="text-sm font-semibold hover:underline"
                    >
                      418-833-2221
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/70 border border-[#DE2B2B]/20 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#DE2B2B]/10 flex items-center justify-center text-[#DE2B2B] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                        Currently Open • Until 22:00
                      </span>
                    </div>
                    <p className="text-xs text-[#7C2627] mt-1">
                      Dining room, Bar lounge, and Rooftop terrace service open daily.
                    </p>
                  </div>
                </div>
              </div>

              {/* Get Directions Link */}
              <a
                href="https://maps.app.goo.gl/1EDA13JAa4m8kCnE6"
                target="_blank"
                rel="noreferrer"
                className="delight-btn delight-btn-primary w-full py-3.5 text-sm font-semibold tracking-wide shadow-md group flex justify-center mb-6"
              >
                <Navigation className="w-4 h-4" />
                <span>Get GPS Directions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#DE2B2B]/20 space-y-2.5">
              <button
                onClick={() => {
                  onClose();
                  onOpenReservation();
                }}
                className="w-full py-2.5 px-4 rounded-full border border-[#DE2B2B] text-xs font-bold uppercase tracking-wider text-[#DE2B2B] hover:bg-[#DE2B2B] hover:text-[#F8EFDC] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve a Table</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenOrderOnline();
                }}
                className="w-full py-2.5 px-4 rounded-full border border-[#DE2B2B] text-xs font-bold uppercase tracking-wider text-[#DE2B2B] hover:bg-[#DE2B2B] hover:text-[#F8EFDC] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Order Delivery / Takeout</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
