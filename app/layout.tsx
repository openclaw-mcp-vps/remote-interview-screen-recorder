import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InterviewRec — Record & Analyze Coding Interviews",
  description: "Browser-based screen recording for coding interviews with AI-powered candidate performance analysis. Built for tech recruiters, startup founders, and engineering managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1bf6649e-1ca6-4fda-87b8-964e3d25b21c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
