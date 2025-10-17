import React from "react";
import { ShieldCheck, BookOpen, Briefcase } from "lucide-react"; // lightweight icons

export default function Goals() {
  return (
    <section className="max-w-5xl mx-auto p-6 sm:p-8 md:p-12 bg-gray-800 rounded-xl shadow-2xl mt-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-6 text-center tracking-wide">
        My Future Goals
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
        {/* Left side - text content */}
        <div>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
            Focus on advancing my career through certification and getting hands-on experience
            in cybersecurity. My short-term goal is to graduate while adapting to new tech.
          </p>

          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3 text-base sm:text-lg">
              <Briefcase className="text-cyan-400 w-5 h-5 sm:w-6 sm:h-6" />
              <span>Find a full-time or internship role in cybersecurity</span>
            </li>
            <li className="flex items-center gap-3 text-base sm:text-lg">
              <BookOpen className="text-cyan-400 w-5 h-5 sm:w-6 sm:h-6" />
              <span>Expand my resume by getting certifications</span>
            </li>
            <li className="flex items-center gap-3 text-base sm:text-lg">
              <ShieldCheck className="text-cyan-400 w-5 h-5 sm:w-6 sm:h-6" />
              <span>Get Security+ and Cisco CCNA certifications</span>
            </li>
          </ul>
        </div>

        {/* Right side - image */}
        <div className="relative flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
            alt="Cybersecurity illustration"
            className="rounded-lg shadow-lg max-h-60 sm:max-h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
