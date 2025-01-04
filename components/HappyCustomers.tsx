"use client";

import { ArrowLeft, ArrowRight, Star, BadgeCheck } from "lucide-react";
import { useRef } from "react";

export default function HappyCustomers() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Width of one card
      const newScrollPosition = scrollContainerRef.current.scrollLeft + 
        (direction === "left" ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full relative">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h4 className="text-4xl lg:text-5xl font-extrabold">OUR HAPPY CUSTOMERS</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll("left")}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Scroll left"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Scroll right"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      <div className="relative max-w-full overflow-hidden">
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-8"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {[
            {
              name: "Sarah M.",
              review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
            },
            {
              name: "Alex K.",
              review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
            },
            {
              name: "James L.",
              review: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
            },
            {
              name: "Emily R.",
              review: "The attention to detail and customer service at Shop.co is unmatched. Every purchase feels special and the quality of their clothes is consistently outstanding."
            },
            {
              name: "Emily R.",
              review: "The attention to detail and customer service at Shop.co is unmatched. Every purchase feels special and the quality of their clothes is consistently outstanding."
            }
          ].map((review, index) => (
            <div 
              key={index}
              className="min-w-[400px] h-[240px] rounded-2xl border border-gray-200 flex-shrink-0 flex justify-center items-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-[336px] h-[161.58px] flex flex-col gap-4 justify-between">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-[#FFC633] stroke-none" />
                  ))}
                </div>
                <h1 className="flex items-center gap-1 font-semibold">
                  {review.name}
                  <BadgeCheck className="fill-[#01AB31] stroke-white w-5 h-5" />
                </h1>
                <p className="text-sm text-gray-500">{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}