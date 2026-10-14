"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, UploadCloud, CheckCircle, FileText, Send } from "lucide-react";
import { JOB_POSITIONS } from "@/data/restaurantData";

interface JobApplicationSidesheetProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPosition?: string;
}

export default function JobApplicationSidesheet({
  isOpen,
  onClose,
  defaultPosition = "Dishwasher",
}: JobApplicationSidesheetProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState(defaultPosition);
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync position if passed
  React.useEffect(() => {
    if (defaultPosition) {
      setPosition(defaultPosition);
    }
  }, [defaultPosition]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please accept the terms and privacy policy to submit.");
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setFileName("");
    setAgreed(false);
    onClose();
  };

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

          {/* Slide-over Sidesheet */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-lg bg-[#F8EFDC] text-[#DE2B2B] shadow-2xl flex flex-col justify-between overflow-y-auto border-l-2 border-[#DE2B2B]"
          >
            <div>
              {/* Header Image banner */}
              <div className="relative h-44 w-full overflow-hidden border-b border-[#DE2B2B]/20">
                <Image
                  src="https://delice.ca/wp-content/uploads/2025/04/dscf5672-2560x1920.jpg"
                  alt="Délice Team Career"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F8EFDC] text-[#DE2B2B] flex items-center justify-center hover:bg-[#DE2B2B] hover:text-[#F8EFDC] transition-colors cursor-pointer shadow-md"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#F5DBCA]">
                    WE’RE HIRING
                  </span>
                  <h3 className="font-serif-display text-2xl font-bold text-[#F8EFDC]">
                    Délice — Resto Lounge
                  </h3>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-6 sm:p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#DE2B2B] text-[#F8EFDC] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif-display text-3xl font-bold text-[#DE2B2B] mb-2">
                      Application Sent!
                    </h4>
                    <p className="text-sm text-[#7C2627] mb-6">
                      Thank you, <span className="font-bold">{firstName} {lastName}</span>. Your application for the{" "}
                      <span className="font-bold">{position}</span> position has been submitted directly to our management team. We will review your CV and be in touch shortly.
                    </p>
                    <button
                      onClick={handleReset}
                      className="delight-btn delight-btn-primary px-8 py-3 text-sm cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="border-b border-[#DE2B2B]/15 pb-2 mb-4">
                      <h4 className="font-serif-display text-xl font-bold text-[#DE2B2B]">
                        Apply for a Position
                      </h4>
                      <hr className="c-double-rule text-[#DE2B2B]/30 my-2" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#7C2627] uppercase mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="Your first name"
                          className="w-full px-3 py-2 rounded-xl border border-[#DE2B2B]/30 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#DE2B2B]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#7C2627] uppercase mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Your last name"
                          className="w-full px-3 py-2 rounded-xl border border-[#DE2B2B]/30 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#DE2B2B]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#7C2627] uppercase mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="email@example.com"
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
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="418-833-2221"
                          className="w-full px-3 py-2 rounded-xl border border-[#DE2B2B]/30 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#DE2B2B]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#7C2627] uppercase mb-1">
                        Desired Position *
                      </label>
                      <select
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DE2B2B]/30 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#DE2B2B]"
                      >
                        {JOB_POSITIONS.map((pos) => (
                          <option key={pos.id} value={pos.title}>
                            {pos.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#7C2627] uppercase mb-1">
                        Motivation Message
                      </label>
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us a little bit about yourself and why you'd love to join Délice..."
                        className="w-full px-3 py-2 rounded-xl border border-[#DE2B2B]/30 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#DE2B2B]"
                      />
                    </div>

                    {/* CV Upload */}
                    <div>
                      <label className="block text-xs font-bold text-[#7C2627] uppercase mb-1">
                        Curriculum Vitae (Resume) *
                      </label>
                      <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-[#DE2B2B]/40 rounded-2xl bg-white/70 hover:bg-white cursor-pointer transition-colors">
                        <UploadCloud className="w-6 h-6 text-[#DE2B2B] mb-1" />
                        <span className="text-xs font-semibold text-[#DE2B2B]">
                          {fileName ? fileName : "Upload your resume (PDF, Word, or Image)"}
                        </span>
                        <span className="text-[10px] text-[#7C2627] mt-0.5">
                          {fileName ? "Click to change file" : "Max 10MB"}
                        </span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,image/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>

                    {/* Agreement Checkbox */}
                    <div className="flex items-start gap-2.5 pt-2">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-1 w-4 h-4 text-[#DE2B2B] rounded border-[#DE2B2B] focus:ring-[#DE2B2B]"
                      />
                      <label htmlFor="agreeTerms" className="text-xs text-[#7C2627] leading-relaxed">
                        By checking this box, I agree to the Privacy Policy and consent to Délice Resto Lounge processing my career application.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="delight-btn delight-btn-primary w-full py-3.5 text-base font-semibold tracking-wide cursor-pointer shadow-md mt-4"
                    >
                      <Send className="w-4 h-4 mr-1" />
                      <span>Send Application</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
