"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Utensils, Sparkles, ShoppingBag, Calendar } from "lucide-react";
import { MENU_ITEMS, MenuItem } from "@/data/restaurantData";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOrderOnline: () => void;
  onOpenReservation: () => void;
}

export default function MenuModal({
  isOpen,
  onClose,
  onOpenOrderOnline,
  onOpenReservation,
}: MenuModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: "Full Menu" },
    { key: "pizza", label: "Artisan Pizzas" },
    { key: "mains", label: "Mains & Grills" },
    { key: "pasta", label: "Fresh Pasta" },
    { key: "breakfast", label: "Breakfast & Brunch" },
    { key: "cocktails", label: "Cocktails & Bar" },
    { key: "dessert", label: "Desserts" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-4xl bg-[#F8EFDC] text-[#DE2B2B] rounded-3xl p-6 sm:p-10 border-2 border-[#DE2B2B] shadow-2xl my-8 max-h-[92vh] flex flex-col justify-between overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#DE2B2B]/20">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#7C2627]">
                  CULINARY OFFERINGS
                </span>
                <h3 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#DE2B2B]">
                  The Délice Menus
                </h3>
                <p className="text-xs sm:text-sm text-[#7C2627] mt-1">
                  Artisanal stone-baked pizzas, Quebec fresh meats, house pastas, and brunch specials.
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-[#DE2B2B]/30 flex items-center justify-center text-[#DE2B2B] hover:bg-[#DE2B2B] hover:text-[#F8EFDC] transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto py-3 border-b border-[#DE2B2B]/15 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat.key
                      ? "bg-[#DE2B2B] text-[#F8EFDC] shadow-sm"
                      : "bg-[#DE2B2B]/10 text-[#7C2627] hover:bg-[#DE2B2B]/20"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Menu Items Grid */}
            <div className="overflow-y-auto pr-1 my-4 flex-1 space-y-4 max-h-[50vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-white/80 border border-[#DE2B2B]/20 hover:border-[#DE2B2B]/60 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {item.image && (
                        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-3 border border-[#DE2B2B]/15">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="400px"
                          />
                        </div>
                      )}

                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif-display text-lg font-bold text-[#DE2B2B]">
                          {item.name}
                        </h4>
                        <span className="font-serif-display text-lg font-bold text-[#7C2627] shrink-0">
                          {item.price}
                        </span>
                      </div>

                      {item.tag && (
                        <span className="inline-block mt-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#DE2B2B]/10 text-[#DE2B2B]">
                          {item.tag}
                        </span>
                      )}

                      <p className="text-xs text-[#7C2627] mt-2 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#DE2B2B]/10 flex items-center justify-between text-xs">
                      <span className="text-[#7C2627] font-medium italic">
                        Freshly made to order
                      </span>
                      <button
                        onClick={() => {
                          onClose();
                          onOpenOrderOnline();
                        }}
                        className="text-[#DE2B2B] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Order</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#DE2B2B]/20 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-[#7C2627]">
                Taxes and gratuities are not included. Please inform your server of any food allergies.
              </span>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onOpenOrderOnline();
                  }}
                  className="delight-btn delight-btn-outline px-5 py-2.5 text-xs font-semibold cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Order Online</span>
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenReservation();
                  }}
                  className="delight-btn delight-btn-primary px-5 py-2.5 text-xs font-semibold cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Table</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
