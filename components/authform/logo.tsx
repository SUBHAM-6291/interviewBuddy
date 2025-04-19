import React from "react";

const Logo: React.FC = () => (
  <svg className="w-12 h-12 mb-6" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" stroke="url(#grad)" strokeWidth="6" fill="none" />
    <path
      d="M50 20C35 20 25 35 25 50C25 65 35 80 50 80C65 80 75 65 75 50C75 35 65 20 50 20ZM50 60C45 60 40 55 40 50C40 45 45 40 50 40C55 40 60 45 60 50C60 55 55 60 50 60Z"
      fill="url(#grad)"
    />
    <path d="M45 30L55 50L45 70" stroke="url(#grad)" strokeWidth="6" strokeLinecap="round" />
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#00E7FF', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#0066CC', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  </svg>
);

export default Logo;