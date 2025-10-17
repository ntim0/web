import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative bg-gray-900 py-16 px-4 flex flex-col items-center justify-center min-h-[70vh] rounded-xl overflow-hidden shadow-2xl sm:py-24 sm:px-8 md:py-32 md:px-16">
      {/* Background image for a hero effect */}
      <img
        src="https://images.unsplash.com/photo-1461749280684-df20b6b3c945?auto=format&fit=crop&w=1200&q=80"
        alt="i see you"
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
      />

      {/* Overlay to ensure legibility */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-80" />

      {/* Main content layer */}
      <div className="relative z-10 text-center max-w-xl sm:max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6 sm:mb-8 drop-shadow-lg">
          Welcome to My Portfolio
        </h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 leading-relaxed max-w-lg mx-auto">
          Learn about me, my goals and future plans. Use my AI assistant for quick navigation.
        </p>
        <Link
          to="/goals"
          className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-cyan-400 text-gray-900 font-bold rounded-full shadow-lg hover:bg-cyan-300 transition"
        >
          Explore My Goals
        </Link>
      </div>
    </section>
  );
}
