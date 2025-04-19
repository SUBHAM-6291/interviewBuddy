"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Page = () => {
  const [eye1Position, setEye1Position] = useState({ x: 0, y: 0 });
  const [eye2Position, setEye2Position] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const eye1DeltaX = mouseX - window.innerWidth / 2 - 100;
      const eye1DeltaY = mouseY - window.innerHeight / 2;
      const eye1Angle = Math.atan2(eye1DeltaY, eye1DeltaX);
      const eye1X = Math.cos(eye1Angle) * 20;
      const eye1Y = Math.sin(eye1Angle) * 20;

      const eye2DeltaX = mouseX - window.innerWidth / 2 + 100;
      const eye2DeltaY = mouseY - window.innerHeight / 2;
      const eye2Angle = Math.atan2(eye2DeltaY, eye2DeltaX);
      const eye2X = Math.cos(eye2Angle) * 20;
      const eye2Y = Math.sin(eye2Angle) * 20;

      setEye1Position({ x: eye1X, y: eye1Y });
      setEye2Position({ x: eye2X, y: eye2Y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-[50vh] lg:h-screen">
        <div className="w-full lg:w-1/2 bg-black border-t-4 border-white flex items-center justify-center py-8 lg:py-0">
          <div className="text-white p-4 sm:p-6 lg:p-8 max-w-md space-y-6">
            <div className="relative inline-block group">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight transition-transform duration-300 group-hover:scale-105">
                Welcome to Interview Buddy
              </h1>
              <span className="absolute left-0 bottom-[-8px] w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </div>
            <p className="text-lg sm:text-xl font-light leading-relaxed">
              Master your interviews with AI-powered mock sessions and personalized feedback.
            </p>
            <Link href="/dashboard">
              <button className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-transparent border-2 border-white text-white rounded-full font-medium text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-300">
                Start Practicing
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Professional Interview Setting"
            className="w-full h-64 lg:h-full object-cover"
          />
        </div>
      </div>

      <div className="min-h-[50vh] lg:h-screen bg-[#C2C3FB] flex items-center py-8 lg:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between w-full space-y-6 lg:space-y-0">
          <div className="w-full lg:w-1/2 space-y-4 text-left">
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-black">
              Ace Your Next Interview
            </h1>
            <p className="text-lg sm:text-xl text-black font-semibold leading-relaxed">
              Practice with realistic AI-driven mock interviews tailored to your industry.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1683120963435-6f9355d4a776?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFpfGVufDB8fDB8fHww"
              alt="Business Professionals Collaborating"
              className="w-full max-w-[300px] sm:max-w-[400px] h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="min-h-[50vh] lg:h-[80vh] bg-[#C2C3FB] flex items-center py-8 lg:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between w-full space-y-6 lg:space-y-0">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Interview Feedback Session"
              className="w-full max-w-[300px] sm:max-w-[400px] h-auto object-contain"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-4 text-left">
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-black">
              Excel with Interview Buddy
            </h1>
            <p className="text-lg sm:text-xl text-black font-semibold leading-relaxed">
              Get detailed feedback and improve your performance with every session.
            </p>
            <p className="text-xl sm:text-2xl text-black italic">"Confidence Starts Here"</p>
            <button className="px-4 py-2 sm:px-6 sm:py-3 bg-white text-black border-2 border-black rounded-lg font-medium hover:bg-black hover:text-white transition-all duration-300">
              Try Now
            </button>
          </div>
        </div>
      </div>

      <div className="min-h-[50vh] lg:h-screen bg-[#ffccaf] flex items-center justify-center py-8 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-center text-left space-y-6 lg:space-y-0 lg:space-x-12 px-4 sm:px-6 lg:px-8">
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Master Your Interview"
              className="w-full max-w-[250px] sm:max-w-[300px] h-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black">
              Master Your Interview
            </h1>
            <p className="text-lg sm:text-xl text-black italic font-semibold opacity-80 hover:opacity-100 transition-opacity duration-300">
              "Practice Perfected, Success Amplified"
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-[#1a1a1a] text-white font-medium text-base sm:text-lg rounded-md hover:bg-[#333333] transition-colors duration-300 shadow-md hover:shadow-lg">
                Start Practicing
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-[#1a1a1a] text-[#1a1a1a] font-medium text-base sm:text-lg rounded-md hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                Explore Features
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[50vh] lg:h-[140vh] bg-[#C2C3FB] flex items-center justify-center py-8 lg:py-0">
        <div className="flex flex-col items-center text-center space-y-6 px-4 sm:px-6 lg:px-8">
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Interview Growth"
              className="w-full max-w-[300px] sm:max-w-[400px] h-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black">
              Build Interview Confidence
            </h1>
            <p className="text-lg sm:text-xl text-black font-semibold max-w-2xl">
              Leverage AI-driven insights to excel in any interview scenario.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-[#1a1a1a] text-white font-medium text-base sm:text-lg rounded-md hover:bg-[#333333] transition-colors duration-300 shadow-md hover:shadow-lg">
                Start Practicing
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-[#1a1a1a] text-[#1a1a1a] font-medium text-base sm:text-lg rounded-md hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                Explore Features
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[50vh] lg:h-screen bg-white flex items-center justify-center py-8 lg:py-0">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center space-y-6 lg:space-y-0">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="AI Interview Feature"
              className="w-full max-w-[400px] sm:max-w-[500px] h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-zinc-300">ARE YOU READY</h1>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="px-6 py-3 bg-[#6b48ff] text-white font-medium text-base sm:text-lg rounded-md hover:bg-[#8b6bff] transition-colors duration-300 shadow-md hover:shadow-lg">
                Download for iOS
              </button>
              <button className="px-6 py-3 bg-[#6b48ff] text-white font-medium text-base sm:text-lg rounded-md hover:bg-[#8b6bff] transition-colors duration-300 shadow-md hover:shadow-lg">
                Download for Android
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[50vh] lg:h-screen bg-[#f5f5f5] flex items-center justify-center py-8 lg:py-0">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center space-y-6 lg:space-y-0">
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black">
              Welcome to Interview Buddy
            </h1>
            <p className="text-lg sm:text-xl text-black font-semibold max-w-lg">
              Your ultimate companion for interview success with cutting-edge AI tools.
            </p>
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Interview Prep Illustration"
              className="w-full max-w-[150px] sm:max-w-[200px] h-auto object-contain"
            />
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://media.istockphoto.com/id/2148421222/photo/young-man-with-phone-in-hands-and-a-cup-of-hot-drink-close-up-businessman-smiling-contentedly.webp?a=1&b=1&s=612x612&w=0&k=20&c=DZuNMEA-i6KMDRc2b8a1516tkVmoL-gOJ0WlVoUiBAA="
              alt="Interview Practice"
              className="w-full max-w-[400px] sm:max-w-[500px] h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="min-h-[50vh] lg:h-screen bg-[#cdea68] flex flex-col lg:flex-row py-8 lg:py-0">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start px-4 sm:px-8 lg:pl-16 space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">Our Approach</h1>
          <button className="px-4 py-2 sm:px-6 sm:py-3 bg-black text-white rounded-full font-medium text-base sm:text-lg hover:bg-gray-800 transition-all duration-300">
            Learn More
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="AI Interview Approach"
            className="w-full max-w-[400px] sm:max-w-[500px] h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="eyes w-full min-h-[50vh] lg:min-h-screen overflow-hidden">
        <div className="relative w-full h-full bg-cover bg-center">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Interview Eyes Background"
            className="w-full h-[50vh] lg:h-screen object-cover"
          />
          <div className="absolute flex gap-4 sm:gap-6 lg:gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center justify-center w-20 sm:w-28 lg:w-[15vw] h-20 sm:h-28 lg:h-[15vw] rounded-full bg-zinc-100">
              <div className="relative flex items-center justify-center w-2/3 h-2/3 rounded-full bg-zinc-900">
                <p className="text-xs sm:text-sm lg:text-base text-center font-semibold capitalize text-white">practice</p>
                <div
                  style={{ transform: `translate(${eye1Position.x}px, ${eye1Position.y}px)` }}
                  className="absolute w-4 sm:w-6 lg:w-[2vw] h-4 sm:h-6 lg:h-[2vw] rounded-full bg-zinc-100"
                ></div>
              </div>
            </div>
            <div className="flex items-center justify-center w-20 sm:w-28 lg:w-[15vw] h-20 sm:h-28 lg:h-[15vw] rounded-full bg-zinc-100">
              <div className="relative flex items-center justify-center w-2/3 h-2/3 rounded-full bg-zinc-900">
                <p className="text-xs sm:text-sm lg:text-base text-center font-semibold capitalize text-white">practice</p>
                <div
                  style={{ transform: `translate(${eye2Position.x}px, ${eye2Position.y}px)` }}
                  className="absolute w-4 sm:w-6 lg:w-[2vw] h-4 sm:h-6 lg:h-[2vw] rounded-full bg-zinc-100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-12 sm:py-20 capitalize bg-zinc-900">
        <h1 className="text-2xl sm:text-3xl font-neue-montreal tracking-tight text-center uppercase text-white py-6 sm:py-10">
          Featured Scenarios
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20 px-4 sm:px-6 lg:px-8">
          <div className="card-container w-full lg:w-1/2 flex flex-col items-center">
            <h3 className="font-neue-montreal text-xl sm:text-2xl text-white mb-5">Tech Interview</h3>
            <div className="w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Tech Interview"
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className="card-container w-full lg:w-1/2 flex flex-col items-center">
            <h3 className="font-neue-montreal text-xl sm:text-2xl mb-5 text-white">Behavioral Interview</h3>
            <div className="w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Behavioral Interview"
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20 mt-8 lg:mt-20 px-4 sm:px-6 lg:px-8">
          <div className="card-container w-full lg:w-1/2 flex flex-col items-center">
            <h3 className="font-neue-montreal text-xl sm:text-2xl mb-5 uppercase text-white">Case Study Interview</h3>
            <div className="w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Case Study Interview"
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className="card-container w-full lg:w-1/2 flex flex-col items-center">
            <h3 className="font-neue-montreal text-xl sm:text-2xl mb-5 uppercase text-white">Leadership Interview</h3>
            <div className="w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/1398994132/photo/happy-businesswoman-using-a-digital-tablet-young-leading-businesswoman-using-a-wireless.webp?a=1&b=1&s=612x612&w=0&k=20&c=1vy4ur9HIUkOiE6aY1BH4TA-UhkYCKnzZ4jvuhdkdQY="
                alt="Leadership Interview"
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;