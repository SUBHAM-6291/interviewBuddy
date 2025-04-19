import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Our Services"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-white drop-shadow-lg">
            Our Services
          </h1>
          <p className="mt-3 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Tailored Solutions for Business Success
          </p>
        </div>
      </section>

      {}
      <section className="py-12 px-4 md:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            BossHub offers a suite of services designed to optimize your operations, empower your team, and drive growth. Discover how we can support your business.
          </p>
        </div>
      </section>

      {}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVzaW5lc3MlMjBhbnlsaXR5c3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Business Analytics"
                width={500}
                height={300}
                className="w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-semibold text-indigo-400 mb-4">
                Business Analytics
              </h2>
              <p className="text-gray-300 text-sm md:text-base">
                Unlock actionable insights with advanced analytics. Track performance, monitor KPIs, and make data-driven decisions with ease.
              </p>
            </div>
          </div>

          {}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2 overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Workflow Automation"
                width={500}
                height={300}
                className="w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-semibold text-indigo-400 mb-4">
                Workflow Automation
              </h2>
              <p className="text-gray-300 text-sm md:text-base">
                Streamline repetitive tasks and boost efficiency with custom automation solutions tailored to your business needs.
              </p>
            </div>
          </div>

          {}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Team Training"
                width={500}
                height={300}
                className="w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-semibold text-indigo-400 mb-4">
                Team Training
              </h2>
              <p className="text-gray-300 text-sm md:text-base">
                Empower your workforce with expert-led training sessions to maximize productivity and tool adoption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {}
      <footer className="py-6 bg-black text-center text-gray-400 text-sm">
        <p>© 2025 BossHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default page;