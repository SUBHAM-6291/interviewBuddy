"use client";

import Image from "next/image";
import { useState } from "react";

const quotes = {
  Mentor: "‘Practice makes perfect—every mock interview builds your confidence.’ – Inspired by mentorship",
  Coach: "‘Feedback is your ladder to success in interviews.’ – Inspired by coaching wisdom",
  Candidates: "‘Together, we conquer interview challenges daily.’ – Inspired by candidate growth",
} as const;

const roles = ["Mentor", "Coach", "Candidates"] as const;
type Role = typeof roles[number];

const interviewImage ="https://media.istockphoto.com/id/2193065392/photo/young-business-professionals-collaborating-in-a-modern-meeting-room.webp?s=1024x1024&w=is&k=20&c=kEERak83iER3k1MUxHZyJKC_Vrdl7YSjh6Y80KWupbg=";

export default function InterviewBuddySection() {
  const [activeRole, setActiveRole] = useState("Mentor");

  const handleClick = (role: Role) => setActiveRole(role);

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-3">
            Interview Buddy Dashboard
          </h1>
          <p className="text-gray-400 text-lg">
            Your go-to platform for mastering mock interviews and acing your career goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex flex-col gap-4">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => handleClick(role)}
                  className={`block w-full py-3 px-6 text-left rounded-lg font-semibold transition-all duration-300 ${
                    activeRole === role
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  aria-label={`Select ${role} details`}
                >
                  {role}
                </button>
              ))}
            </div>

            <div className="bg-gray-800 p-6 rounded-xl space-y-4 border border-gray-700">
              {activeRole === "Mentor" && (
                <>
                  <h2 className="text-3xl font-bold text-white">Alex Carter</h2>
                  <p className="text-blue-400 font-medium">Interview Mentor</p>
                  <p className="text-gray-300">Guides you to interview success</p>
                  <p className="text-gray-500 italic text-sm">{quotes.Mentor}</p>
                </>
              )}
              {activeRole === "Coach" && (
                <>
                  <h2 className="text-3xl font-bold text-white">Sarah Lee</h2>
                  <p className="text-blue-400 font-medium">Interview Coach</p>
                  <p className="text-gray-300">Provides actionable feedback</p>
                  <p className="text-gray-500 italic text-sm">{quotes.Coach}</p>
                </>
              )}
              {activeRole === "Candidates" && (
                <>
                  <h2 className="text-3xl font-bold text-white">Our Learners</h2>
                  <p className="text-blue-400 font-medium">Interview Candidates</p>
                  <p className="text-gray-300">The future stars of the workforce</p>
                  <p className="text-gray-500 italic text-sm">{quotes.Candidates}</p>
                </>
              )}
            </div>

            <div className="text-center">
              <p className="text-blue-400 text-lg font-semibold italic">
                "Unlock Your Potential with Every Practice Session"
              </p>
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={interviewImage}
              alt="Mock interview preparation"
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}