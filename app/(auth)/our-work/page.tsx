import React from "react";
import Image from "next/image";
import DynamicRunningLogo from "@/components/authform/logo";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="py-4 px-4 md:px-8 bg-gray-900 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center">
          <DynamicRunningLogo />
          <h1 className="ml-3 text-2xl font-bold text-indigo-400">AIInterviewPro</h1>
        </div>
      </header>

      <section className="relative h-[70vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="AI-Powered Mock Interviews"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-gray-950/80" />
        <div className="relative text-center px-4">
          <DynamicRunningLogo />
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl mt-4">
            Master Your Interviews with AI
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Prepare, Practice, Succeed with AIInterviewPro
          </p>
          <a
            href="#features"
            className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Explore Features
          </a>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-400 mb-4">Why AIInterviewPro?</h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            AIInterviewPro leverages advanced AI to deliver personalized mock interviews, real-time feedback, and actionable insights to help you excel in any job interview.
          </p>
        </div>
      </section>

      <section id="features" className="py-16 px-4 md:px-8 bg-gray-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
            <div className="overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Personalized Mock Interviews"
                width={400}
                height={250}
                className="w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-indigo-400 mb-3">Personalized Mock Interviews</h2>
              <p className="text-gray-300 text-sm">
                Experience tailored interview simulations powered by AI, designed to match your industry and role.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
            <div className="overflow-hidden">
              <Image
                src="https://media.istockphoto.com/id/1424987864/photo/coworkers-talking-at-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=03x3D6WMEkjF_ZvaJx8pceFyBL4T9k8XDG6y8OYbbXc="
                alt="Real-Time Feedback"
                width={400}
                height={250}
                className="w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-indigo-400 mb-3">Real-Time Feedback</h2>
              <p className="text-gray-300 text-sm">
                Receive instant, detailed feedback on your answers, body language, and tone to improve on the spot.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
            <div className="overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1664575196044-195f135295df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Progress Tracking"
                width={400}
                height={250}
                className="w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-indigo-400 mb-3">Progress Tracking</h2>
              <p className="text-gray-300 text-sm">
                Monitor your improvement over time with analytics and personalized tips to boost confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 bg-gray-900 text-center text-gray-400 text-sm">
        <p>© 2025 AIInterviewPro. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Page;