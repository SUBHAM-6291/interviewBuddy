"use client";

import { prepSections } from "@/components/dashboard_route/data/prepSections";
import { studentFeedbacks } from "@/components/dashboard_route/data/studentFeedbacks";
import PrepCard from "@/components/dashboard_route/PrepCard";
import FeedbackTicker from "@/components/dashboard_route/FeedbackTicker";
import DynamicRunningLogo from "@/components/authform/logo";
import { memo } from "react";

const MemoizedPrepCard = memo(PrepCard);

export default function InterviewBuddySection() {
  return (
    <section
      className="relative bg-black text-white py-24 overflow-hidden"
      aria-label="Interview Buddy Preparation Section"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-10" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20 relative animate-fade-in">
          <div className="flex justify-center mb-8 relative">
            <div className="p-3 bg-black border border-platinum-200/30 rounded-lg shadow-[inset_0_0_8px_rgba(229,231,235,0.2)]">
              <DynamicRunningLogo
                className="h-16 w-auto drop-shadow-[0_0_6px_rgba(255,255,255,0.15)]"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-white font-serif">
            Interview Buddy
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-sans">
            Elevate your career with expertly crafted interview preparation.
          </p>
          <div className="mt-6 h-0.5 w-24 bg-platinum-200 mx-auto" />
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white font-serif animate-fade-in">
            Client Success Stories
          </h2>
          <FeedbackTicker feedbacks={studentFeedbacks} />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-center mb-12 text-white font-serif animate-fade-in">
            Tailored Preparation Programs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {prepSections.map((section, index) => (
              <MemoizedPrepCard
                key={section.id}
                section={section}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        section {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        h1, h2, h3 {
          font-family: 'Merriweather', serif;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}