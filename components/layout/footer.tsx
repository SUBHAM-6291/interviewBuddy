import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Interview Buddy</h2>
            <p className="text-sm text-gray-300">
              The world’s best AI-powered mock interview platform for career success.
            </p>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:subhamsingh39621@gmail.com"
                className="underline hover:text-gray-300 transition-colors duration-300"
              >
                subhamsingh39621@gmail.com
              </a>
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-gray-300 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-gray-300 transition-colors duration-300">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-gray-300 transition-colors duration-300">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Interview Buddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;