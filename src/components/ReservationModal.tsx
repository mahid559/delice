"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Users, MapPin, CheckCircle, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState("2026-10-15");
  const [time, setTime] = useState("19:00");
  const [seatingArea, setSeatingArea] = useState("Dining Room");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const timeSlots = [
    "11:30", "12:00", "12:30", "13:00",
    "17:00", "17:30", "18:00", "18:30",
    "19:00", "19:30", "20:00", "20:30", "21:00"
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#de2b2b", "#f8efdc", "#7c2627", "#91964f", "#e58833"],
      });
    } catch {
      // safe fallback
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-xl bg-[#F8EFDC] text-[#DE2B2B] rounded-3xl p-6 sm:p-8 border-2 border-[#DE2B2B] shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={handleReset}
              className="absolute top-6 right-6 w-9 h-9 rounded-full border border-[#DE2B2B]/30 flex items-center justify-center text-[#DE2B2B] hover:bg-[#DE2B2B] hover:text-[#F8EFDC] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-[#DE2B2B] text-[#F8EFDC] flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-serif-display text-3xl font-bold text-[#DE2B2B] mb-2">
                  Table Reserved!
                </h3>
                <p className="text-sm text-[#7C2627] mb-6">
                  Thank you, <span className="font-bold">{name}</span>. Your reservation has been confirmed for{" "}
                  <span className="font-bold">{guests} guests</span> on <span className="font-bold">{date}</span> at{" "}
                  <span className="font-bold">{time}</span> in the <span className="font-bold">{seatingArea}</span>.
                </p>

                <div className="p-4 rounded-2xl bg-white/70 border border-[#DE2B2B]/20 text-xs text-left text-[#7C2627] space-y-1.5 mb-8 max-w-sm mx-auto">
                  <div className="flex justify-between">
                    <span className="font-semibold">Confirmation Code:</span>
                    <span className="font-mono font-bold text-[#DE2B2B]">DLC-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Confirmation Email:</span>
                    <span>{email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Location:</span>
                    <span>146 Route du Président-Kennedy, Lévis</span>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="delight-btn delight-btn-primary px-8 py-3 text-sm font-semibold cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7C2627] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#DE2B2B]" />
                    LIBRO INSTANT BOOKING
                  </span>
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#DE2B2B] mt-0.5">
                    Reserve Your Table
                  </h3>
                  <p className="text-xs text-[#7C2627] mt-1">
                    Book seamlessly at Délice Resto Lounge. Immediate automated confirmation.
                  </p>
                </div>

                <form onSubmit={handleBooking} className="space-y-4">
                  {/* Party Size Selector */}
                  <div>
                    <label className="block text-xs font-bold text-[#7C2627] uppercase mb-1.5">
                      Number of Guests: <span className="text-[#DE2B2B] font-bold">{guests} Persons</span>
                    </label>
                    <div className="flex gap-2 overflow-x-auto pb-1">
                      {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setGuests(num)}
                          className={`w-10 h-10 rounded-xl text-sm font-bold shrink-0 border transition-all cursor-pointer ${
                            guests === num
                              ? "bg-[#DE2B2B] text-[#F8EFDC] border-[#DE2B2B] shadow-sm"
                              : "bg-white text-[#DE2B2B] border-[#DE2B2B]/20 hover:bg-[#DE2B2B]/10"
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date & Area Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#7C2627] uppercase mb-1">
                        Reservation Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DE2B2B]/30 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#DE2B2B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#7C2627] uppercase mb-1">
                        Seating Ambience
                      </label>
                      <select
                        value={seatingArea}
                        onChange={(e) => setSeatingArea(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DE2B2B]/30 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#DE2B2B]"
                      >
                        <option value="Dining Room">Main Dining Room</option>
                        <option value="Rooftop Terrace">Rooftop Terrace (Weather Permitting)</option>
                        <option value="Cocktail Lounge">Bar & Cocktail Lounge</option>
                        <option value="Booth">Intimate Booth</option>
                      </select>
                    </div>
                  </div>

                  {/* Time Slot Selector */}
                  <div>
                    <label className="block text-xs font-bold text-[#7C2627] uppercase mb-1.5">
                      Select Available Time Slot
                    </label>
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setTime(slot)}
                          className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                            time === slot
                              ? "bg-[#DE2B2B] text-[#F8EFDC] border-[#DE2B2B] shadow-sm"
                              : "bg-white text-[#DE2B2B] border-[#DE2B2B]/20 hover:bg-[#DE2B2B]/10"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Guest Contact Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-[#7C2627] uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-[#DE2B2B]/30 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#DE2B2B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#7C2627] uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-[#DE2B2B]/30 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#DE2B2B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#7C2627] uppercase mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="418-833-2221"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-[#DE2B2B]/30 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#DE2B2B]"
                      />
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-xs font-bold text-[#7C2627] uppercase mb-1">
                      Special Requests / Occasion
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Birthday celebration, anniversary, high chair needed, dietary allergies..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#DE2B2B]/30 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#DE2B2B]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="delight-btn delight-btn-primary w-full py-3.5 text-base font-semibold tracking-wide cursor-pointer shadow-md mt-4"
                  >
                    Confirm Table Reservation
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
