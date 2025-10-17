import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/goals", label: "Goals" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-gray-900/90 shadow-lg z-50">
      <div className="flex justify-between items-center px-4 py-4 max-w-7xl mx-auto">
        {/* Brand or Logo */}
        <div className="text-cyan-400 font-bold text-2xl">MyPortfolio</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-lg px-4 py-2 rounded transition-all duration-300 ${
                location.pathname === link.to
                  ? "bg-teal-600 shadow-inner"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-400 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {/* Hamburger Icon */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800/90 px-6 py-4 space-y-4 shadow-inner">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block text-lg px-4 py-2 rounded transition-all duration-300 ${
                location.pathname === link.to
                  ? "bg-teal-600 shadow-inner"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
