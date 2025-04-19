"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../authform/logo";

const Navbar = () => {
  const navItems = [
    "Services",
    "Our Work",
    "About Us",
    "Contact Us",
    "Login",
    "Sign Up",
  ];

  const navLinks = [
    "/services",
    "/our-work",
    "/about-us",
    "/contact-us",
    "/sign-in",
    "/sign-up",
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      <nav className="bg-black w-full h-16 px-4 sm:px-6 md:px-16 py-3 flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
         <Logo/>
          <span className="text-lg sm:text-xl font-semibold">Interview Buddy</span>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-4 lg:gap-7">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={navLinks[index]}
              className={
                item === "Login" || item === "Sign Up"
                  ? "text-sm font-medium px-3 sm:px-4 py-1.5 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-200 ease-in-out"
                  : "text-sm font-medium hover:text-gray-200 transition-colors"
              }
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-black text-white px-4 py-4 flex flex-col gap-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={navLinks[index]}
              onClick={() => setIsMenuOpen(false)}
              className={
                item === "Login" || item === "Sign Up"
                  ? "text-sm font-medium px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-200 ease-in-out text-center"
                  : "text-sm font-medium hover:text-gray-200 transition-colors"
              }
            >
              {item}
            </Link>
          ))}
        </div>
      )}

      <div className="w-full h-[2px] bg-white"></div>
    </div>
  );
};

export default Navbar;