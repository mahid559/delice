"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, X, CheckCircle } from "lucide-react";

interface PrivateRoomsSectionProps {
  onOpenReservation: () => void;
}

export default function PrivateRoomsSection({ onOpenReservation }: PrivateRoomsSectionProps) {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    guests: "25",
    notes: "",
  });

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <section id="private-rooms" className="relative bg-[#273E2A] text-[#F8EFDC] py-20 lg:py-28 overflow-hidden">
      {/* Exact Vector Ribbon from delice.ca */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 lg:w-[480px] pointer-events-none opacity-80 z-0">
        <Image
          src="/media-text-s2-shape-top-right.svg"
          alt=""
          width={480}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-32 sm:w-44 lg:w-48 pointer-events-none opacity-80 z-0 hidden sm:block">
        <Image
          src="/media-text-s2-shape-bottom-left.svg"
          alt=""
          width={192}
          height={200}
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F8EFDC]/80 block mb-4">
              Private Rooms
            </span>

            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8EFDC] leading-[1.08] mb-6">
              Celebrate big in our <br />
              <span className="font-editorial-italic not-italic font-normal opacity-90">intimate spaces</span>
            </h2>

            <p className="text-base sm:text-lg text-[#F8EFDC]/90 leading-relaxed font-normal mb-8 max-w-xl">
              Perfect for any occasion, no matter the size. Here, it feels like home—the ideal place to connect in comfort. Whether for business meetings, anniversaries, family gatherings, or cocktail receptions, our dedicated salons offer bespoke hospitality.
            </p>

            <div>
              <button
                onClick={() => setInquiryModalOpen(true)}
                className="delight-btn delight-btn-white px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Media Column with Arched Top Shape */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-t-[160px] sm:rounded-t-[200px] overflow-hidden shadow-2xl border-2 border-[#F8EFDC]/20 group">
              <Image
                src="https://delice.ca/wp-content/uploads/2025/04/dscf5928-2560x3413.jpg"
                alt="Délice Resto Lounge Private Rooms Experience"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Modal */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#273E2A] text-[#F8EFDC] rounded-3xl p-6 sm:p-8 max-w-lg w-full border-2 border-[#F8EFDC]/30 shadow-2xl relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => {
                setInquiryModalOpen(false);
                setInquirySubmitted(false);
              }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full border border-[#F8EFDC]/30 flex items-center justify-center hover:bg-[#F8EFDC] hover:text-[#273E2A] transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {inquirySubmitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <CheckCircle className="w-14 h-14 text-emerald-400 mb-4" />
                <h3 className="font-serif-display text-2xl font-bold mb-2">Request Received!</h3>
                <p className="text-sm text-[#F8EFDC]/80 mb-6">
                  Our private room coordinator will contact you at {inquiryData.email} within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setInquiryModalOpen(false);
                    setInquirySubmitted(false);
                  }}
                  className="delight-btn delight-btn-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#F8EFDC]/70 block mb-1">
                  Private Rooms Inquiry
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold mb-4">
                  Host Your Event at Délice
                </h3>

                <form onSubmit={handleSubmitInquiry} className="space-y-3.5 text-xs">
                  <div>
                    <label className="block uppercase font-bold text-[10px] tracking-wider mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={inquiryData.name}
                      onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-[#1e3121] border border-[#F8EFDC]/30 rounded-xl px-3.5 py-2.5 text-[#F8EFDC] placeholder-[#F8EFDC]/40 outline-none focus:border-[#F8EFDC]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block uppercase font-bold text-[10px] tracking-wider mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={inquiryData.email}
                        onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                        placeholder="resto@delice.ca"
                        className="w-full bg-[#1e3121] border border-[#F8EFDC]/30 rounded-xl px-3.5 py-2.5 text-[#F8EFDC] placeholder-[#F8EFDC]/40 outline-none focus:border-[#F8EFDC]"
                      />
                    </div>
                    <div>
                      <label className="block uppercase font-bold text-[10px] tracking-wider mb-1">Phone</label>
                      <input
                        type="tel"
                        required
                        value={inquiryData.phone}
                        onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                        placeholder="418-833-2221"
                        className="w-full bg-[#1e3121] border border-[#F8EFDC]/30 rounded-xl px-3.5 py-2.5 text-[#F8EFDC] placeholder-[#F8EFDC]/40 outline-none focus:border-[#F8EFDC]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block uppercase font-bold text-[10px] tracking-wider mb-1">Event Date</label>
                      <input
                        type="date"
                        required
                        value={inquiryData.eventDate}
                        onChange={(e) => setInquiryData({ ...inquiryData, eventDate: e.target.value })}
                        className="w-full bg-[#1e3121] border border-[#F8EFDC]/30 rounded-xl px-3.5 py-2.5 text-[#F8EFDC] outline-none focus:border-[#F8EFDC]"
                      />
                    </div>
                    <div>
                      <label className="block uppercase font-bold text-[10px] tracking-wider mb-1">Guests</label>
                      <select
                        value={inquiryData.guests}
                        onChange={(e) => setInquiryData({ ...inquiryData, guests: e.target.value })}
                        className="w-full bg-[#1e3121] border border-[#F8EFDC]/30 rounded-xl px-3.5 py-2.5 text-[#F8EFDC] outline-none focus:border-[#F8EFDC]"
                      >
                        <option value="10-20">10 – 20 guests</option>
                        <option value="20-50">20 – 50 guests</option>
                        <option value="50-100">50 – 100 guests</option>
                        <option value="100+">100+ guests</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block uppercase font-bold text-[10px] tracking-wider mb-1">Event Details</label>
                    <textarea
                      rows={2}
                      value={inquiryData.notes}
                      onChange={(e) => setInquiryData({ ...inquiryData, notes: e.target.value })}
                      placeholder="Tell us about the occasion..."
                      className="w-full bg-[#1e3121] border border-[#F8EFDC]/30 rounded-xl px-3.5 py-2 text-[#F8EFDC] placeholder-[#F8EFDC]/40 outline-none focus:border-[#F8EFDC]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="delight-btn delight-btn-white w-full py-3 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg mt-2"
                  >
                    Send Inquiry
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
