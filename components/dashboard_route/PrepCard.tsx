import Image from "next/image";
import Link from "next/link";
import { PrepSection } from "./data/prepSections";
import { Card, CardContent } from "@/components/ui/card";

interface PrepCardProps {
  section: PrepSection;
  index: number;
}

export default function PrepCard({ section, index }: PrepCardProps) {
  return (
    <Card
      className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden border border-platinum-200/20 shadow-[inset_0_0_8px_rgba(229,231,235,0.15)] hover:bg-white/15 animate-slide-in relative"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-40">
        <Image
          src={section.image}
          alt={`${section.title} preparation`}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="opacity-80"
          placeholder="blur"
          blurDataURL={section.blurDataURL}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
      </div>
      <CardContent className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-white font-serif">{section.title}</h3>
        <p className="text-gray-200 text-sm font-sans">{section.description}</p>
        <Link
          href={section.link}
          className="inline-block bg-gradient-to-r from-platinum-900 to-platinum-300 text-white py-2.5 px-6 rounded-lg text-sm font-medium font-sans hover:from-platinum-800 hover:to-platinum-200 transition-all duration-300 shadow-[0_0_10px_rgba(229,231,235,0.3)] hover:shadow-[0_0_15px_rgba(229,231,235,0.5)] animate-pulse-subtle"
          aria-label={`Start ${section.title}`}
        >
          {section.cta}
        </Link>
      </CardContent>
      <div className="absolute top-2 right-2 w-2 h-2 bg-platinum-200 rounded-full" />
      <style jsx>{`
        .animate-slide-in {
          animation: slideIn 0.7s ease-out forwards;
        }
        .animate-pulse-subtle {
          animation: pulseSubtle 2s ease-in-out infinite;
        }
        @keyframes slideIn {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes pulseSubtle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-slide-in,
          .animate-pulse-subtle {
            animation: none;
          }
        }
      `}</style>
    </Card>
  );
}