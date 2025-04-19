"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const quotes = {
  CEO: "‘Success starts with a vision turned into action today.’ – Inspired by modern leadership",
  Manager: "‘Strong leaders turn hard work into team wins.’ – Inspired by management wisdom",
  Employees: "‘Together, we build bigger and better every day.’ – Inspired by teamwork values",
} as const;

const workers = ["CEO", "Manager", "Employees"] as const;
type Role = typeof workers[number];

const teamImage =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

export default function TeamSection() {
  const [activeRole, setActiveRole] = useState("CEO");

  const handleClick = (role: Role) => setActiveRole(role);

  const generateTeamUrl = (role: Role) => {
    return `/team/${role.toLowerCase()}`; 
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-3">
            The Smart Management Web App
          </h1>
          <p className="text-gray-400 text-lg">
            The advanced platform optimizing corporate efficiency across all departments daily
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex flex-col gap-4">
              {workers.map((role) => (
                <Link
                  key={role}
                  href={generateTeamUrl(role)}
                  onClick={() => handleClick(role)}
                  className={`block w-full py-3 px-6 text-left rounded-lg font-semibold transition-all duration-300 ${
                    activeRole === role
                      ? "bg-indigo-700 text-white shadow-lg shadow-indigo-500/20"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  aria-label={`View ${role} details`}
                >
                  {role}
                </Link>
              ))}
            </div>

            <div className="bg-gray-900 p-6 rounded-xl space-y-4 border border-gray-800">
              {activeRole === "CEO" && (
                <>
                  <h2 className="text-3xl font-bold text-white">John Doe</h2>
                  <p className="text-indigo-400 font-medium">CEO</p>
                  <p className="text-gray-300">Guides us to success</p>
                  <p className="text-gray-500 italic text-sm">{quotes.CEO}</p>
                </>
              )}
              {activeRole === "Manager" && (
                <>
                  <h2 className="text-3xl font-bold text-white">Jane Smith</h2>
                  <p className="text-indigo-400 font-medium">Manager</p>
                  <p className="text-gray-300">Keeps things running smoothly</p>
                  <p className="text-gray-500 italic text-sm">{quotes.Manager}</p>
                </>
              )}
              {activeRole === "Employees" && (
                <>
                  <h2 className="text-3xl font-bold text-white">Our Crew</h2>
                  <p className="text-indigo-400 font-medium">Main Team</p>
                  <p className="text-gray-300">The backbone of our work</p>
                  <p className="text-gray-500 italic text-sm">{quotes.Employees}</p>
                </>
              )}
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={teamImage}
              alt="Team working together"
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