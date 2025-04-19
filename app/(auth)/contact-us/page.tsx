import React from 'react';

const page = () => {
  return (
    <div>
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-12 px-4 sm:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-center mb-12 uppercase bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent">
          Reach Out to the Mastermind
        </h1>

        <div className="w-full max-w-4xl flex flex-col items-center space-y-10">
          <p className="text-lg sm:text-xl lg:text-2xl font-light text-gray-400 text-center leading-relaxed">
            Got a question, issue, or brilliant idea? Connect with the developer who crafted this experience.
          </p>

          <div className="flex flex-col items-center space-y-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-wide">
              Get in Touch
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              <a
                href="https://x.com/subham78910"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-current text-gray-400 group-hover:text-blue-500"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
                <span className="text-lg font-medium text-gray-400 group-hover:text-blue-500">
                  Twitter
                </span>
              </a>

              <a
                href="mailto:subhamsingh39621@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-current text-gray-400 group-hover:text-red-500"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="text-lg font-medium text-gray-400 group-hover:text-red-500">
                  Gmail
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/subham-singh-ab1734270/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-current text-gray-400 group-hover:text-blue-700"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9.02h3.56v11.43zM5.34 7.57c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zm15.11 12.88h-3.56v-5.57c0-1.33-.48-2.24-1.68-2.24-.92 0-1.46.62-1.7 1.21-.09.21-.11.5-.11.79v5.81H9.84V9.02h3.41v1.54c.45-.7 1.26-1.68 3.06-1.68 2.24 0 3.92 1.46 3.92 4.6v6.97z" />
                </svg>
                <span className="text-lg font-medium text-gray-400 group-hover:text-blue-700">
                  LinkedIn
                </span>
              </a>

              <a
                href="https://github.com/SUBHAM-6291"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-current text-gray-400 group-hover:text-gray-200"
                >
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2.03 1.03-2.75-.1-.25-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.8c.85 0 1.71.11 2.52.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.42.2 2.48.1 2.73.65.72 1.03 1.63 1.03 2.75 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
                <span className="text-lg font-medium text-gray-400 group-hover:text-gray-200">
                  GitHub
                </span>
              </a>
            </div>
          </div>

          <p className="text-sm text-gray-600 tracking-wider">
            Built strong. Made to matter.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;