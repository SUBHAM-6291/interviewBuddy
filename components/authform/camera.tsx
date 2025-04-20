"use client";

import { useState, useEffect, useRef } from "react";

interface CameraModalProps {
  onCapture: (imageData: string) => void;
  onClose: () => void;
}

const CameraModal: React.FC<CameraModalProps> = ({ onCapture, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [flash, setFlash] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          videoRef.current.play();
        }
        setStream(mediaStream);
        setError(null);
      } catch (error) {
        setError("Camera access failed. Please allow webcam permissions or check device availability.");
        console.error("Camera access error:", error);
      }
    };
    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
        setStream(null);
      }
    };
  }, []);

  const captureImage = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const context = canvasRef.current.getContext("2d");
    if (!context) return;

    canvasRef.current.width = videoRef.current.videoWidth;
    canvasRef.current.height = videoRef.current.videoHeight;
    context.drawImage(videoRef.current, 0, 0);
    const imageData = canvasRef.current.toDataURL("image/png");

    localStorage.setItem("capturedImage", imageData);
    setFlash(true);
    setTimeout(() => setFlash(false), 200);
    onCapture(imageData);
  };

  const downloadImage = () => {
    const imageData = localStorage.getItem("capturedImage");
    if (!imageData) return;

    const link = document.createElement("a");
    link.href = imageData;
    link.download = "interview_buddy_capture.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent("Captured Image from Interview Buddy");
    const body = encodeURIComponent(
      "Please download the image using the 'Download' button and attach it to this email."
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const handleCancel = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-xl p-4 w-full max-w-sm">
        <div
          className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-200 ${
            flash ? "border-4 border-white/80 shadow-[0_0_15px_rgba(255,255,255,0.8)]" : "border-4 border-transparent"
          }`}
        >
          <video ref={videoRef} autoPlay className="w-full h-full object-cover" />
          <canvas ref={canvasRef} className="hidden" />
          {flash && <div className="absolute inset-0 bg-white/40 animate-pulse duration-100" />}
        </div>
        {error && (
          <p className="text-red-400 text-sm text-center mt-2">{error}</p>
        )}
        <div className="space-y-3 mt-3">
          <div className="flex justify-between gap-2">
            <button
              onClick={captureImage}
              disabled={!!error}
              className={`flex-1 py-2 rounded-lg text-white text-sm font-medium transition-all duration-200 ${
                error ? "bg-gray-600 cursor-not-allowed" : "bg-cyan-500 hover:bg-cyan-400"
              }`}
            >
              Capture
            </button>
            <button
              onClick={handleCancel}
              className="flex-1 py-2 bg-gray-700 rounded-lg text-white text-sm font-medium hover:bg-gray-600 transition-all duration-200"
            >
              Cancel
            </button>
          </div>
          {localStorage.getItem("capturedImage") && (
            <div className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full px-3 py-2 bg-gray-800 rounded-lg text-white text-sm border border-gray-700 focus:outline-none focus:border-indigo-500 transition-all duration-200"
              />
              <div className="flex justify-between gap-2">
                <button
                  onClick={downloadImage}
                  className="flex-1 py-2 bg-green-600 rounded-lg text-white text-sm font-medium hover:bg-green-700 transition-all duration-200"
                >
                  Download
                </button>
                <a
                  href={email ? getMailtoLink() : "#"}
                  className={`flex-1 py-2 rounded-lg text-white text-sm font-medium text-center transition-all duration-200 ${
                    email ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-600 cursor-not-allowed"
                  }`}
                  onClick={(e) => !email && e.preventDefault()}
                >
                  Send Email
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CameraModal;