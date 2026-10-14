"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, CheckCircle, Gift } from "lucide-react";

interface DualCtaCardsProps {
  onOpenOrderOnline: () => void;
}

export default function DualCtaCards({ onOpenOrderOnline }: DualCtaCardsProps) {
  const [giftCardModalOpen, setGiftCardModalOpen] = useState(false);
  const [giftAmount, setGiftAmount] = useState("50");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [senderName, setSenderName] = useState("");
  const [giftCardPurchased, setGiftCardPurchased] = useState(false);

  const handleBuyGiftCard = (e: React.FormEvent) => {
    e.preventDefault();
    setGiftCardPurchased(true);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* Card 1: Takeaway or Delivery (Solid Red #DE2B2B) */}
      <div
        onClick={onOpenOrderOnline}
        className="c-cta relative bg-[#DE2B2B] text-[#F8EFDC] py-16 sm:py-20 lg:py-24 px-6 flex flex-col items-center justify-between text-center cursor-pointer group overflow-hidden border-b md:border-b-0 md:border-r border-[#F8EFDC]/20"
      >
        <div className="relative flex flex-col items-center">
          {/* Curved Text Title: Takeaway or delivery */}
          <div className="relative w-72 h-36 sm:w-80 sm:h-40 flex items-center justify-center -mb-8 sm:-mb-10">
            <svg viewBox="0 0 440 220" className="w-full h-full overflow-visible select-none pointer-events-none">
              <defs>
                <path
                  id="circlePath-cta-takeaway"
                  d="M 40 200 A 180 140 0 0 1 400 200"
                  fill="none"
                />
              </defs>
              <text
                className="font-serif-display font-bold tracking-[0.14em] uppercase text-2xl sm:text-3xl fill-[#F8EFDC]"
              >
                <textPath href="#circlePath-cta-takeaway" startOffset="50%" textAnchor="middle">
                  Takeaway or delivery
                </textPath>
              </text>
            </svg>
          </div>

          {/* Circular Media with Expanding Maroon Background Circle */}
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 my-6 flex items-center justify-center">
            {/* Pulsing Maroon Circle (.c-cta_media:before) */}
            <div className="absolute inset-0 rounded-full bg-[#7C2627] transition-transform duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-120 shadow-xl" />

            <div className="relative w-44 h-44 sm:w-56 sm:h-56 z-10 drop-shadow-2xl">
              <Image
                src="https://delice.ca/wp-content/uploads/2025/01/03.png"
                alt="Takeaway or delivery Pizza Box"
                fill
                className="object-contain"
                sizes="300px"
              />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <span className="delight-btn delight-btn-white px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-lg group-hover:scale-105 transition-all inline-flex items-center gap-2 mt-4">
          <span>Order online</span>
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>

      {/* Card 2: Share the Experience (Olive Green #91964F) */}
      <div
        onClick={() => setGiftCardModalOpen(true)}
        className="c-cta relative bg-[#91964F] text-[#F8EFDC] py-16 sm:py-20 lg:py-24 px-6 flex flex-col items-center justify-between text-center cursor-pointer group overflow-hidden"
      >
        <div className="relative flex flex-col items-center">
          {/* Curved Text Title: Share the Experience */}
          <div className="relative w-72 h-36 sm:w-80 sm:h-40 flex items-center justify-center -mb-8 sm:-mb-10">
            <svg viewBox="0 0 440 220" className="w-full h-full overflow-visible select-none pointer-events-none">
              <defs>
                <path
                  id="circlePath-cta-gift"
                  d="M 40 200 A 180 140 0 0 1 400 200"
                  fill="none"
                />
              </defs>
              <text
                className="font-serif-display font-bold tracking-[0.14em] uppercase text-2xl sm:text-3xl fill-[#F8EFDC]"
              >
                <textPath href="#circlePath-cta-gift" startOffset="50%" textAnchor="middle">
                  Share the Experience
                </textPath>
              </text>
            </svg>
          </div>

          {/* Circular Media with Expanding Forest Green Background Circle */}
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 my-6 flex items-center justify-center">
            {/* Pulsing Forest Green Circle (.c-cta_media:before) */}
            <div className="absolute inset-0 rounded-full bg-[#273E2A] transition-transform duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-120 shadow-xl" />

            <div className="relative w-44 h-44 sm:w-56 sm:h-56 z-10 drop-shadow-2xl">
              <Image
                src="https://delice.ca/wp-content/uploads/2025/01/delice_cartecadeau_mockup2.png"
                alt="Délice Gift Card"
                fill
                className="object-contain"
                sizes="300px"
              />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <span className="delight-btn delight-btn-white px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-lg group-hover:scale-105 transition-all inline-flex items-center gap-2 mt-4">
          <span>Buy a Gift Card</span>
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>

      {/* Interactive Gift Card Purchase Modal */}
      <AnimatePresence>
        {giftCardModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) setGiftCardModalOpen(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#91964F] text-[#F8EFDC] rounded-3xl p-6 sm:p-8 max-w-md w-full border-2 border-[#F8EFDC]/30 shadow-2xl relative"
            >
              <button
                onClick={() => {
                  setGiftCardModalOpen(false);
                  setGiftCardPurchased(false);
                }}
                className="absolute top-5 right-5 w-8 h-8 rounded-full border border-[#F8EFDC]/30 flex items-center justify-center hover:bg-[#F8EFDC] hover:text-[#91964F] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {giftCardPurchased ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <CheckCircle className="w-14 h-14 text-[#F8EFDC] mb-4" />
                  <h3 className="font-serif-display text-2xl font-bold mb-2">Gift Card Ready!</h3>
                  <p className="text-sm text-[#F8EFDC]/90 mb-6">
                    A ${giftAmount} Délice digital card has been dispatched to {recipientEmail}.
                  </p>
                  <button
                    onClick={() => {
                      setGiftCardModalOpen(false);
                      setGiftCardPurchased(false);
                    }}
                    className="delight-btn delight-btn-light px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-5 h-5" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#F8EFDC]/80">
                      Délice Gift Card
                    </span>
                  </div>
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-bold mb-4">
                    Share the Experience
                  </h3>

                  <form onSubmit={handleBuyGiftCard} className="space-y-4 text-xs">
                    <div>
                      <label className="block uppercase font-bold text-[10px] tracking-wider mb-2">
                        Select Amount ($ CAD)
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {["25", "50", "100", "150"].map((amt) => (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => setGiftAmount(amt)}
                            className={`py-2 rounded-xl font-bold border transition-all cursor-pointer ${
                              giftAmount === amt
                                ? "bg-[#F8EFDC] text-[#91964F] border-[#F8EFDC]"
                                : "border-[#F8EFDC]/40 text-[#F8EFDC] hover:bg-[#F8EFDC]/20"
                            }`}
                          >
                            ${amt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block uppercase font-bold text-[10px] tracking-wider mb-1">
                        Recipient Email
                      </label>
                      <input
                        type="email"
                        required
                        value={recipientEmail}
                        onChange={(e) => setRecipientEmail(e.target.value)}
                        placeholder="friend@example.com"
                        className="w-full bg-[#787d3f] border border-[#F8EFDC]/30 rounded-xl px-3.5 py-2.5 text-[#F8EFDC] placeholder-[#F8EFDC]/50 outline-none focus:border-[#F8EFDC]"
                      />
                    </div>

                    <div>
                      <label className="block uppercase font-bold text-[10px] tracking-wider mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="Your name"
                        className="w-full bg-[#787d3f] border border-[#F8EFDC]/30 rounded-xl px-3.5 py-2.5 text-[#F8EFDC] placeholder-[#F8EFDC]/50 outline-none focus:border-[#F8EFDC]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="delight-btn delight-btn-light w-full py-3 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg mt-2"
                    >
                      Purchase ${giftAmount} Gift Card
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
