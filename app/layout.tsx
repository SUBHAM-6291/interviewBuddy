
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InterviewBuddy - AI-Powered Mock Interview Platform",
  description:
    "Prepare confidently for your next job interview with InterviewBuddy, an AI-powered platform offering realistic mock interviews, personalized feedback, and industry-specific practice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}