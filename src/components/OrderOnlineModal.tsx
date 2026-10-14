"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Plus, Minus, CheckCircle, Truck, Store, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

interface OrderOnlineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderOnlineModal({ isOpen, onClose }: OrderOnlineModalProps) {
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery");
  const [cart, setCart] = useState<{ [id: string]: number }>({
    p1: 1, // The Classic Delight 1970
    p4: 1, // Smoked Salmon & Capers
  });
  const [address, setAddress] = useState("120 Rue Commerciale, Lévis");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [isOrdered, setIsOrdered] = useState(false);

  const featuredOrderItems = [
    {
      id: "p1",
      name: "The Classic Délice 1970",
      price: 24.50,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop&q=80",
    },
    {
      id: "p4",
      name: "Smoked Salmon & Capers Pizza",
      price: 27.50,
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&auto=format&fit=crop&q=80",
    },
    {
      id: "m1",
      name: "Beer-Battered Atlantic Cod & Chips",
      price: 26.00,
      image: "https://delice.ca/wp-content/uploads/2025/04/dscf5672-2560x1920.jpg",
    },
    {
      id: "m3",
      name: "Délice Prime Smash Burger",
      price: 22.50,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80",
    },
  ];

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      const current = prev[id] || 0;
      const updated = current + delta;
      if (updated <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: updated };
    });
  };

  const subtotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = featuredOrderItems.find((i) => i.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const deliveryFee = orderType === "delivery" ? 4.99 : 0;
  const tax = subtotal * 0.14975; // Quebec GST/QST
  const total = subtotal + deliveryFee + tax;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (subtotal === 0) {
      alert("Please add at least one dish to your order.");
      return;
    }
    setIsOrdered(true);
    try {
      confetti({
        particleCount: 90,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#de2b2b", "#7c2627", "#f8efdc"],
      });
    } catch {
      // safe fallback
    }
  };

  const handleReset = () => {
    setIsOrdered(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-2xl bg-[#F8EFDC] text-[#DE2B2B] rounded-3xl p-6 sm:p-8 border-2 border-[#DE2B2B] shadow-2xl my-6 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={handleReset}
              className="absolute top-6 right-6 w-9 h-9 rounded-full border border-[#DE2B2B]/30 flex items-center justify-center text-[#DE2B2B] hover:bg-[#DE2B2B] hover:text-[#F8EFDC] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {isOrdered ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-[#DE2B2B] text-[#F8EFDC] flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-serif-display text-3xl font-bold mb-2">Order Confirmed!</h3>
                <p className="text-sm text-[#7C2627] mb-6">
                  Thank you, <span className="font-bold">{customerName || "Valued Guest"}</span>.
                  Your order has been transmitted straight to the kitchen. Estimated {orderType} time:{" "}
                  <span className="font-bold">35–45 minutes</span>.
                </p>

                <div className="p-4 rounded-2xl bg-white/80 border border-[#DE2B2B]/20 text-xs text-left text-[#7C2627] space-y-1.5 mb-6 max-w-sm mx-auto">
                  <div className="flex justify-between">
                    <span className="font-semibold">Order Number:</span>
                    <span className="font-mono font-bold text-[#DE2B2B]">
                      #DEL-{Math.floor(1000 + Math.random() * 9000)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Fulfillment Type:</span>
                    <span className="capitalize">{orderType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Total Paid:</span>
                    <span className="font-bold text-[#DE2B2B]">${total.toFixed(2)} CAD</span>
                  </div>
                  {orderType === "delivery" && (
                    <div className="flex justify-between">
                      <span className="font-semibold">Delivery Address:</span>
                      <span>{address}</span>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleReset}
                  className="delight-btn delight-btn-primary px-8 py-3 text-sm font-semibold"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#7C2627]">
                    DELIGHT KITCHEN ONLINE
                  </span>
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#DE2B2B] mt-0.5">
                    Order Online for Delivery or Takeout
                  </h3>
                </div>

                {/* Delivery vs. Pickup Switcher */}
                <div className="grid grid-cols-2 gap-3 p-1.5 bg-[#DE2B2B]/10 rounded-2xl mb-6">
                  <button
                    type="button"
                    onClick={() => setOrderType("delivery")}
                    className={`py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      orderType === "delivery"
                        ? "bg-[#DE2B2B] text-[#F8EFDC] shadow-md"
                        : "text-[#7C2627] hover:text-[#DE2B2B]"
                    }`}
                  >
                    <Truck className="w-4 h-4" />
                    <span>Home Delivery</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOrderType("pickup")}
                    className={`py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      orderType === "pickup"
                        ? "bg-[#DE2B2B] text-[#F8EFDC] shadow-md"
                        : "text-[#7C2627] hover:text-[#DE2B2B]"
                    }`}
                  >
                    <Store className="w-4 h-4" />
                    <span>Restaurant Pickup</span>
                  </button>
                </div>

                {/* Popular Dishes to add */}
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7C2627] block mb-3">
                    Featured Takeout Dishes
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {featuredOrderItems.map((item) => {
                      const qty = cart[item.id] || 0;
                      return (
                        <div
                          key={item.id}
                          className="p-3 rounded-xl bg-white/70 border border-[#DE2B2B]/20 flex items-center justify-between gap-3"
                        >
                          <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-[#DE2B2B]/15">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                              sizes="60px"
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <h5 className="font-serif-display text-xs font-bold text-[#DE2B2B] truncate">
                              {item.name}
                            </h5>
                            <span className="text-xs text-[#7C2627] font-semibold">
                              ${item.price.toFixed(2)}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            {qty > 0 ? (
                              <div className="flex items-center gap-1.5 bg-[#DE2B2B]/10 px-1.5 py-0.5 rounded-lg border border-[#DE2B2B]/20">
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="w-5 h-5 flex items-center justify-center text-[#DE2B2B] hover:bg-[#DE2B2B] hover:text-[#F8EFDC] rounded cursor-pointer"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="text-xs font-bold text-[#DE2B2B] w-3 text-center">
                                  {qty}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(item.id, 1)}
                                  className="w-5 h-5 flex items-center justify-center text-[#DE2B2B] hover:bg-[#DE2B2B] hover:text-[#F8EFDC] rounded cursor-pointer"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                            ) : (
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, 1)}
                                className="px-2.5 py-1 rounded-lg bg-[#DE2B2B] text-[#F8EFDC] text-xs font-bold cursor-pointer hover:bg-[#7C2627]"
                              >
                                Add
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Checkout Form */}
                <form onSubmit={handleCheckout} className="space-y-3 pt-3 border-t border-[#DE2B2B]/20">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#7C2627] uppercase mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-3 py-2 rounded-xl border border-[#DE2B2B]/30 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#DE2B2B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#7C2627] uppercase mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="418-833-2221"
                        className="w-full px-3 py-2 rounded-xl border border-[#DE2B2B]/30 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#DE2B2B]"
                      />
                    </div>
                  </div>

                  {orderType === "delivery" && (
                    <div>
                      <label className="block text-xs font-semibold text-[#7C2627] uppercase mb-1">
                        Delivery Address in Lévis *
                      </label>
                      <input
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Street, apartment, Lévis, postal code"
                        className="w-full px-3 py-2 rounded-xl border border-[#DE2B2B]/30 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#DE2B2B]"
                      />
                    </div>
                  )}

                  {/* Summary Totals */}
                  <div className="p-3.5 rounded-xl bg-white/80 border border-[#DE2B2B]/15 text-xs text-[#7C2627] space-y-1 my-3">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-semibold">${subtotal.toFixed(2)}</span>
                    </div>
                    {orderType === "delivery" && (
                      <div className="flex justify-between">
                        <span>Lévis Local Delivery</span>
                        <span className="font-semibold">${deliveryFee.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Estimated Taxes (TPS/TVQ)</span>
                      <span className="font-semibold">${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-[#DE2B2B]/15 font-bold text-sm text-[#DE2B2B]">
                      <span>Total Amount</span>
                      <span>${total.toFixed(2)} CAD</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={subtotal === 0}
                    className="delight-btn delight-btn-primary w-full py-3.5 text-base font-semibold tracking-wide cursor-pointer shadow-md disabled:opacity-50"
                  >
                    Place {orderType === "delivery" ? "Delivery" : "Pickup"} Order (${total.toFixed(2)})
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
