"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";

interface CareersSectionProps {
  onOpenApply: (position?: string) => void;
}

export default function CareersSection({ onOpenApply }: CareersSectionProps) {
  const [expandedJobId, setExpandedJobId] = useState<string | null>("dishwasher");

  const toggleJob = (id: string) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  const allJobs = [
    {
      id: "dishwasher",
      title: "Dishwasher",
      salary: "Starting at $20/hour",
      schedule: "Full-time or part-time",
      experience: "No experience required",
      description: "You clean and organize dishes and kitchen equipment to keep the dishwashing area clean, organized, and running efficiently throughout service.",
    },
    {
      id: "floor-manager",
      title: "Floor Manager",
      salary: "Competitive industry rate",
      schedule: "Full-time",
      experience: "Minimum 5 years in the restaurant industry, including at least 1 year in management",
      description: "You oversee dining room operations, lead the team, and ensure smooth, professional service.",
    },
    {
      id: "pizzaiolo",
      title: "Pizzaman / Pizzaiolo",
      salary: "Starting at $20/hour + tip sharing",
      schedule: "Full-time or part-time",
      experience: "Pizza experience is an asset",
      description: "You prepare, top and bake pizzas according to the restaurant’s recipes and standards.",
    },
    {
      id: "delivery-driver",
      title: "Delivery Driver",
      salary: "Starting at $13.30/hour + individual tips",
      schedule: "Full-time or part-time",
      experience: "No experience required · Valid driver’s licence · Good knowledge of the Lévis area",
      description: "You deliver orders quickly and courteously throughout Lévis.",
    },
    {
      id: "receptionist",
      title: "Receptionist",
      salary: "$17/hour + tips",
      schedule: "Full-time or part-time",
      experience: "Comfortable with customer service and computer systems",
      description: "You welcome guests in person and over the phone, manage reservations, and handle takeout and delivery orders while ensuring smooth communication with the team.",
    },
    {
      id: "busser",
      title: "Busser",
      salary: "Starting at $13.30/hour + tip sharing",
      schedule: "Full-time or part-time",
      experience: "No experience required",
      description: "You support the service team by clearing and resetting tables, keeping the dining room clean, and ensuring service stations stay stocked so service remains fast and smooth.",
    },
    {
      id: "bartender",
      title: "Bartender",
      salary: "Starting at $13.30/hour + individual tips",
      schedule: "Full-time or part-time",
      experience: "Minimum 2 years of experience behind a bar or in table service",
      description: "You prepare and serve cocktails, wine and spirits quickly and accurately, while providing attentive service and contributing to the atmosphere of the bar.",
    },
    {
      id: "server",
      title: "Server",
      salary: "Starting at $13.30/hour + individual tips",
      schedule: "Full-time or part-time",
      experience: "Minimum 2 years of table service experience",
      description: "You welcome and advise guests, take orders, and provide fast, attentive and professional service from the beginning to the end of the meal.",
    },
    {
      id: "line-cook",
      title: "Line Cook",
      salary: "Starting at $24/hour + tip sharing",
      schedule: "Full-time or part-time",
      experience: "Minimum 3 years of kitchen experience or a completed DEP in Professional Cooking",
      description: "You prepare and assemble menu items consistently and efficiently.",
    },
    {
      id: "hostess",
      title: "Hostess",
      salary: "Starting at $17/hour + tip sharing",
      schedule: "Full-time or part-time",
      experience: "No experience required",
      description: "You welcome guests upon arrival, escort them to their table, distribute menus, and help the team keep the entrance and dining room clean, organized and welcoming.",
    },
    {
      id: "food-runner",
      title: "Food Runner",
      salary: "Starting at $13.30/hour + tip sharing",
      schedule: "Full-time or part-time",
      experience: "No experience required",
      description: "You act as the link between the kitchen and dining room by quickly delivering dishes to the correct tables.",
    },
  ];

  return (
    <section id="careers" className="py-20 lg:py-28 bg-[#F8EFDC] border-b border-[#DE2B2B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-[#DE2B2B]/20">
          <div className="lg:col-span-6">
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#DE2B2B] leading-[1.05]">
              Build Your Career <br />
              <span className="font-editorial-italic not-italic font-normal text-[#7C2627]">with Us</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="font-editorial-italic text-lg sm:text-xl text-[#7C2627] mb-3">
              Have fun. Cultivate your passion. Shape your future.
            </p>
            <p className="text-sm sm:text-base text-[#7C2627]/90 leading-relaxed">
              Working with us means thriving in a welcoming environment where your well-being matters as much as the joy of doing great work. Join a team that moves forward together—for you and with you.
            </p>
          </div>
        </div>

        {/* Content Grid: Photo with Stamp on Left + Clean Position List on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Authentic Delice Photo with Scalloped Red Stamp */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#DE2B2B]/20 group">
              <Image
                src="https://delice.ca/wp-content/uploads/2025/01/l1070301-2560x1708.jpg"
                alt="Working at Délice Resto Lounge"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              {/* Scalloped Red Stamp in top left of photo matching delice.ca */}
              <div className="absolute top-4 left-4 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#DE2B2B] text-[#F8EFDC] shadow-xl flex items-center justify-center border-2 border-dashed border-[#F8EFDC]/80 hover:rotate-12 transition-transform">
                <span className="font-editorial-italic text-4xl sm:text-5xl font-bold italic select-none">
                  D
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Positions Accordion matching delice.ca */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#DE2B2B]/20">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7C2627]">
                Open Positions ({allJobs.length})
              </span>
              <span className="text-xs text-[#DE2B2B] font-semibold">Immediate Openings</span>
            </div>

            <div className="space-y-3">
              {allJobs.map((job) => {
                const isExpanded = expandedJobId === job.id;
                return (
                  <div
                    key={job.id}
                    className="border border-[#DE2B2B]/25 rounded-2xl bg-[#F8EFDC] overflow-hidden transition-all duration-200 hover:border-[#DE2B2B]"
                  >
                    <button
                      onClick={() => toggleJob(job.id)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#DE2B2B]"></span>
                        <h4 className="font-serif-display text-lg sm:text-xl font-bold text-[#DE2B2B] group-hover:text-[#7C2627] transition-colors">
                          {job.title}
                        </h4>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="text-xs text-[#7C2627] font-medium hidden sm:inline-block">
                          {job.schedule}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#DE2B2B] transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-5 pb-5 pt-1 text-xs text-[#7C2627] border-t border-[#DE2B2B]/10 space-y-2.5">
                        <p className="leading-relaxed text-sm text-[#7C2627]/90 font-normal">
                          {job.description}
                        </p>
                        <div className="flex flex-wrap gap-y-1 gap-x-4 pt-1 text-xs font-medium text-[#7C2627]">
                          <span><strong className="text-[#DE2B2B]">Salary:</strong> {job.salary}</span>
                          <span><strong className="text-[#DE2B2B]">Schedule:</strong> {job.schedule}</span>
                          <span><strong className="text-[#DE2B2B]">Experience:</strong> {job.experience}</span>
                        </div>
                        <div className="pt-2">
                          <button
                            onClick={() => onOpenApply(job.title)}
                            className="delight-btn delight-btn-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full shadow-md"
                          >
                            <span>Apply for {job.title}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Apply Now Button */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <button
                onClick={() => onOpenApply("Spontaneous Application")}
                className="delight-btn delight-btn-primary px-9 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-xl hover:scale-105 transition-all"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
