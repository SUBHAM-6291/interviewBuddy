"use client";

import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <section className="relative h-[50vh] flex items-center justify-center bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Interview Buddy: Ace Your Interviews"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 to-indigo-900/50" />
        <div className="relative text-center px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-indigo-300 drop-shadow-xl">
            Ace Interviews with Interview Buddy
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            AI-powered tools to prepare, practice, and succeed in your job interviews
          </p>
          <button
            className="mt-6 inline-block px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-transform duration-300 hover:scale-105"
            aria-label="Discover Features"
          >
            Discover Features
          </button>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-gray-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-indigo-400 mb-6">
            Your Path to Interview Success
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Interview Buddy combines advanced AI with expert strategies to help you master interviews, boost confidence, and land your dream job.
          </p>
        </div>
      </section>

      <section id="features" className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="relative flex flex-col md:flex-row items-center gap-8 bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="md:w-1/2 relative h-[300px] md:h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1664575196044-195f135295df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Confidence Builder"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-indigo-400 mb-4">
                Confidence Builder
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Build unshakable confidence with AI-driven practice sessions and personalized strategies tailored to your interview goals.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row-reverse items-center gap-8 bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="md:w-1/2 relative h-[300px] md:h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Prep Mentor"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-indigo-400 mb-4">
                Prep Mentor
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Get expert-guided preparation plans and actionable tips to excel in any interview scenario, from technical to behavioral.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row items-center gap-8 bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="md:w-1/2 relative h-[300px] md:h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1632144130358-6cfeed023e27?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Feedback Guru"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-indigo-400 mb-4">
                Feedback Guru
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Receive instant, detailed feedback on your performance, including answers, tone, and body language, to refine your skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-gray-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-indigo-400 mb-8">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-300 text-base italic mb-4">
                "Interview Buddy’s AI feedback helped me nail my tech interview!"
              </p>
              <p className="text-indigo-400 font-medium">— Sarah T., Software Engineer</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-300 text-base italic mb-4">
                "The Prep Mentor feature gave me the confidence to ace my final round."
              </p>
              <p className="text-indigo-400 font-medium">— Michael R., Marketing Manager</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-indigo-400 mb-6">
            Start Your Interview Journey Today
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-8">
            Sign up for Interview Buddy and unlock AI-powered tools to land your dream job.
          </p>
          <a
            href="/sign-up"
            className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-transform duration-300 hover:scale-105"
          >
            Join Now
          </a>
        </div>
      </section>

      <footer className="py-10 px-4 md:px-8 bg-gray-950 text-center text-gray-400 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg font-semibold text-indigo-400 mb-4">Interview Buddy</p>
          <p className="text-sm mb-6">Empowering job seekers with AI-driven interview preparation.</p>
          <div className="flex justify-center gap-6 mb-4">
            <span className="text-gray-400 cursor-default">Privacy Policy</span>
            <span className="text-gray-400 cursor-default">Terms of Service</span>
            <span className="text-gray-400 cursor-default">Contact Us</span>
          </div>
          <p className="text-sm">© 2025 Interview Buddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;