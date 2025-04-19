import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="bg-gray-900 text-white">
      {}
      <header className="relative min-h-[50vh] flex flex-col justify-end pb-12 px-6">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Business Team"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-400">BossHub</h1>
          <p className="mt-2 text-lg md:text-xl text-gray-300">Grow Simple, Win Easy</p>
        </div>
      </header>

      {}
      <main className="py-16">
        {}
        <section className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6 mb-16">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="CEO Dashboard"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h2 className="text-3xl font-bold text-indigo-400 mb-4">CEO Tools</h2>
            <p className="text-gray-300">
              Take control with real-time insights into budgets, team performance, and company-wide operations—all from a single, intuitive dashboard.
            </p>
          </div>
        </section>

        {}
        <section className="flex flex-col md:flex-row-reverse items-center max-w-6xl mx-auto px-6 mb-16">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="Managers Team"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pr-10">
            <h2 className="text-3xl font-bold text-indigo-400 mb-4">Manager Solutions</h2>
            <p className="text-gray-300">
              Simplify team oversight with smart scheduling, task management, and performance tracking tools designed for efficiency.
            </p>
          </div>
        </section>

        {}
        <section className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6 mb-16">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="Employers Collaboration"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h2 className="text-3xl font-bold text-indigo-400 mb-4">Employer Features</h2>
            <p className="text-gray-300">
              Boost teamwork with seamless communication, budget monitoring, and attendance tracking in one unified platform.
            </p>
          </div>
        </section>
      </main>

      {}
      <section className="py-12 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-indigo-400 mb-6">Meet the Team</h3>
          <div className="flex justify-center gap-8">
            <Image
              src="/images/subham.jpeg"
              alt="Team Member 1"
              width={100}
              height={100}
              className="rounded-full border-2 border-gray-600  transition-transform duration-300 hover:scale-110"
            />
            
          </div>
        </div>
      </section>

      {}
      <footer className="py-8 bg-gray-950 flex justify-center items-center">
        <div className="text-gray-400 text-sm">© 2025 BossHub. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Page;