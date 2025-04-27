import React from "react";

type DynamicRunningLogoProps = {
  className?: string;
};

const DynamicRunningLogo: React.FC<DynamicRunningLogoProps> = ({ className }) => (
  <svg
    className={`w-16 h-16 ${className || ""}`}
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <style>
      {`
        .pulse-core {
          animation: pulseCore 2s infinite ease-in-out;
        }
        .orbit-ring-fast {
          animation: orbitRingFast 15s linear infinite;
          transform-origin: 80px 80px; /* Center of SVG (160/2) */
        }
        .orbit-ring-slow {
          animation: orbitRingSlow 20s linear infinite reverse;
          transform-origin: 80px 80px; /* Center of SVG */
        }
        .core-spin {
          animation: coreSpin 10s linear infinite;
          transform-origin: 80px 80px; /* Center of SVG */
        }
        .particle-flow {
          animation: particleFlow 3s infinite ease-in-out;
        }
        .holo-glow {
          animation: holoGlow 2.5s infinite alternate ease-in-out;
        }
        @keyframes pulseCore {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes orbitRingFast {
          100% { transform: rotate(360deg); }
        }
        @keyframes orbitRingSlow {
          100% { transform: rotate(360deg); }
        }
        @keyframes coreSpin {
          100% { transform: rotate(360deg); }
        }
        @keyframes particleFlow {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes holoGlow {
          0% { stop-opacity: 0.4; }
          100% { stop-opacity: 0.8; }
        }
      `}
    </style>
    <circle cx="80" cy="80" r="78" fill="url(#holoGrad)" className="pulse-core" />
    <g className="orbit-ring-fast">
      <circle
        cx="80"
        cy="80"
        r="74"
        stroke="url(#orbitGrad)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="10,5"
      />
    </g>
    <g className="orbit-ring-slow">
      <circle
        cx="80"
        cy="80"
        r="70"
        stroke="url(#orbitGrad)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="5,8"
      />
    </g>
    <circle cx="80" cy="80" r="64" fill="#0F172A" />
    <g className="core-spin">
      <circle cx="80" cy="80" r="20" fill="url(#coreGrad)" className="holo-glow" />
      <circle cx="80" cy="60" r="8" fill="url(#nodeGrad)" className="particle-flow" />
      <circle cx="80" cy="100" r="8" fill="url(#nodeGrad)" className="particle-flow" />
      <circle cx="60" cy="80" r="8" fill="url(#nodeGrad)" className="particle-flow" />
      <circle cx="100" cy="80" r="8" fill="url(#nodeGrad)" className="particle-flow" />
      <path
        d="M80 60L80 80M80 100L80 80M60 80L80 80M100 80L80 80"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />
      <path
        d="M70 70C75 65 85 65 90 70"
        stroke="url(#arcGrad)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M70 90C75 95 85 95 90 90"
        stroke="url(#arcGrad)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </g>
    <circle cx="50" cy="40" r="3" fill="#38BDF8" className="particle-flow" style={{ animationDelay: "0s" }} />
    <circle cx="110" cy="40" r="3" fill="#38BDF8" className="particle-flow" style={{ animationDelay: "0.5s" }} />
    <circle cx="80" cy="120" r="3" fill="#38BDF8" className="particle-flow" style={{ animationDelay: "1s" }} />
    <circle cx="40" cy="80" r="2.5" fill="#A5B4FC" className="particle-flow" style={{ animationDelay: "1.5s" }} />
    <circle cx="120" cy="80" r="2.5" fill="#A5B4FC" className="particle-flow" style={{ animationDelay: "2s" }} />
    <circle cx="80" cy="80" r="62" fill="url(#innerGlowGrad)" fillOpacity="0.3" />
    <defs>
      <radialGradient id="holoGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style={{ stopColor: "#38BDF8", stopOpacity: 0.8 }} className="holo-glow" />
        <stop offset="100%" style={{ stopColor: "#1E3A8A", stopOpacity: 0 }} />
      </radialGradient>
      <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#38BDF8", stopOpacity: 0.9 }} />
        <stop offset="100%" style={{ stopColor: "#A78BFA", stopOpacity: 0.9 }} />
      </linearGradient>
      <linearGradient id="coreGrad" x1="70" y1="70" x2="90" y2="90">
        <stop offset="0%" style={{ stopColor: "#FFFFFF", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#38BDF8", stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="nodeGrad" x1="60" y1="60" x2="100" y2="100">
        <stop offset="0%" style={{ stopColor: "#A5B4FC", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#38BDF8", stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="arcGrad" x1="70" y1="70" x2="90" y2="90">
        <stop offset="0%" style={{ stopColor: "#FFFFFF", stopOpacity: 0.7 }} />
        <stop offset="100%" style={{ stopColor: "#A5B4FC", stopOpacity: 0.7 }} />
      </linearGradient>
      <radialGradient id="innerGlowGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style={{ stopColor: "#FFFFFF", stopOpacity: 0.6 }} />
        <stop offset="100%" style={{ stopColor: "#1E3A8A", stopOpacity: 0 }} />
      </radialGradient>
    </defs>
  </svg>
);

export default DynamicRunningLogo;