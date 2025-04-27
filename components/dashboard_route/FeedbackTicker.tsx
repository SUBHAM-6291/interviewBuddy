import Image from "next/image";
import { StudentFeedback } from "./data/studentFeedbacks";

interface FeedbackTickerProps {
  feedbacks: StudentFeedback[];
}

export default function FeedbackTicker({ feedbacks }: FeedbackTickerProps) {
  return (
    <div className="overflow-hidden">
      <div className="flex animate-[infinite-scroll_16s_linear_infinite]">
        {feedbacks.map((feedback, index) => (
          <div
            key={`${feedback.id}-${index}`}
            className="bg-white/10 backdrop-blur-lg rounded-lg p-6 w-80 flex-shrink-0 border border-platinum-200/20 shadow-[inset_0_0_8px_rgba(229,231,235,0.15)] hover:bg-white/15 relative mr-6"
          >
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-platinum-200/40">
                <Image
                  src={feedback.image}
                  alt={`${feedback.name}'s profile photo for Interview Buddy feedback`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="48px"
                  placeholder="blur"
                  blurDataURL={feedback.blurDataURL}
                />
              </div>
              <div className="flex-1">
                <p className="text-gray-200 text-sm mb-2 font-sans">
                  {feedback.feedback}
                </p>
                <p className="text-white font-medium text-sm font-sans">
                  {feedback.name}
                </p>
              </div>
            </div>
            <div className="absolute top-2 right-2 w-2 h-2 bg-platinum-200 rounded-full" />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
