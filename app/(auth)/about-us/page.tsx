"use client";

import Image from "next/image";
import { useState } from "react";

const quotes = {
  AIInterviewCoach: "‘Practice makes perfect, and our AI makes practice smarter.’ – Inspired by intelligent coaching",
  ConfidenceBuilder: "‘Your career journey starts with confidence.’ – Inspired by empowering guidance",
  FeedbackGuru: "‘Real-time insights to elevate your interview game.’ – Inspired by actionable feedback",
} as const;

const roles = ["AIInterviewCoach", "ConfidenceBuilder", "FeedbackGuru"] as const;
type Role = typeof roles[number];

const teamImage =
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function TeamSection() {
  const [activeRole, setActiveRole] = useState<Role>("AIInterviewCoach");

  const handleClick = (role: Role) => setActiveRole(role);

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-indigo-400 mb-4">
            The Interview Buddy Team
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-4xl mx-auto">
            Meet the pillars of Interview Buddy, powering your journey to interview success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex flex-col gap-3">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => handleClick(role)}
                  className={`block w-full py-3 px-6 text-left rounded-lg font-semibold transition-all duration-300 ${
                    activeRole === role
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                      : "bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                  aria-label={`View ${role} details`}
                >
                  {role === "AIInterviewCoach"
                    ? "AI Interview Coach"
                    : role === "ConfidenceBuilder"
                    ? "Confidence Builder"
                    : "Feedback Guru"}
                </button>
              ))}
            </div>

            <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800 transition-shadow hover:shadow-2xl">
              {activeRole === "AIInterviewCoach" && (
                <>
                  <h2 className="text-2xl font-semibold text-indigo-400 mb-2">AI Interview Coach</h2>
                  <p className="text-gray-300 font-medium">Intelligent Interview Trainer</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Delivers personalized mock interviews and real-time feedback
                  </p>
                  <p className="text-gray-500 italic text-sm mt-3">{quotes.AIInterviewCoach}</p>
                </>
              )}
              {activeRole === "ConfidenceBuilder" && (
                <>
                  <h2 className="text-2xl font-semibold text-indigo-400 mb-2">Confidence Builder</h2>
                  <p className="text-gray-300 font-medium">Empowerment Expert</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Provides tailored strategies to boost your interview confidence
                  </p>
                  <p className="text-gray-500 italic text-sm mt-3">{quotes.ConfidenceBuilder}</p>
                </>
              )}
              {activeRole === "FeedbackGuru" && (
                <>
                  <h2 className="text-2xl font-semibold text-indigo-400 mb-2">Feedback Guru</h2>
                  <p className="text-gray-300 font-medium">Insight Specialist</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Offers actionable feedback to refine your interview skills
                  </p>
                  <p className="text-gray-500 italic text-sm mt-3">{quotes.FeedbackGuru}</p>
                </>
              )}
            </div>
          </div>

          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={teamImage}
              alt="Interview Buddy team in action"
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}