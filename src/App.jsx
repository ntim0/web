import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Goals from "./components/Goals";
import Contact from "./components/Contact";
import NavigationAI from "./components/NavigationAI";

function App() {
  return (
    // Use 'dark' class on root for manual control of dark mode
    <div className="dark bg-gray-900 text-gray-200 min-h-screen font-sans relative transition-colors duration-500">
      <Navbar />
      {/* Center container; apply vertical and horizontal spacing */}
      <main className="max-w-7xl mx-auto px-8 py-16 space-y-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <NavigationAI />
    </div>
  );
}

export default App;
