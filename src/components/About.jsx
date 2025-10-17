import React from "react";

export default function About() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-gray-900 text-gray-200 py-12 px-4 sm:py-16 sm:px-10 md:flex-row md:space-x-12">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
        alt="Tech workspace"
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto bg-gray-800/60 backdrop-blur-md rounded-xl shadow-xl p-8 sm:p-12 md:p-16 md:flex-1">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-cyan-400 text-center md:text-left tracking-wide">
          About Me
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
          I am a transfer student currently in my final year of study, working full-time while completing my degree.
          Balancing academics and employment has taught me time management, dedication, and focus. When I find downtime,
          I enjoy playing basketball and studying the game by watching film of professional players — not just to enjoy it but also to expand my skillset and strategic understanding.
        </p>
        <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
          Outside the court, I enjoy story-driven games like{" "}
          <span className="italic text-cyan-300">
            The Last of Us, Detroit: Become Human,
          </span>{" "}
          and the{" "}
          <span className="italic text-cyan-300">Black Ops</span> campaign series.
        </p>
      </div>
    </section>
  );
}
