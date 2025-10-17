import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const commands = [
  { keywords: ["about ", "me"], path: "/about" },
  { keywords: ["goals", "future"], path: "/goals" },
  { keywords: ["contact", "reach"], path: "/contact" },
  { keywords: ["home", "start"], path: "/" }

];

const infoResponses = {
  about: "I am a transfer student currently in my final year of study, working full-time while completing my degree. Balancing academics and employment has taught me time management, dedication, and focus.",
  goals: "My future goals include focusing on advancing my career through certification and getting hands-on experience in cybersecurity. ",
};

export default function NavigationAI() {
  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I can help navigate or answer questions" }
  ]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSend = (e) => {
    e.preventDefault();
    setMessages(prev => [...prev, { from: "user", text: input }]);
    const lower = input.toLowerCase();

    for (const key in infoResponses) {
      if (lower.includes(key)) {
        setTimeout(() => {
          setMessages(prev => [...prev, { from: "bot", text: infoResponses[key] }]);
        }, 600);
        setInput("");
        return;
      }
    }

    let navigated = false;
    for (const cmd of commands) {
      if (cmd.keywords.some(k => lower.includes(k))) {
        setTimeout(() => navigate(cmd.path), 600);
        setMessages(prev => [...prev, { from: "bot", text: `Navigating to ${cmd.path}...` }]);
        navigated = true;
        break;
      }
    }

    if (!navigated) {
      setTimeout(() => setMessages(prev => [...prev, { from: "bot", text: "Sorry, I didn't understand." }]), 600);
    }
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {visible ? (
        <div className="w-72 sm:w-80 md:w-96 p-4 bg-gray-700 rounded-lg shadow-lg flex flex-col">
          <div className="flex justify-between mb-2">
            <span className="font-semibold text-lg text-white">AI Bot</span>
            <button
              className="text-red-400 text-xl leading-none"
              onClick={() => setVisible(false)}
              aria-label="Close AI Navigator"
            >
              &times;
            </button>
          </div>
          <div className="flex-grow h-60 overflow-y-auto mb-2 bg-gray-900 rounded p-2 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-1 ${msg.from === "user"? "text-teal-400 text-right" : "text-gray-300 text-left"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="flex gap-2">
            <input
              className="flex-grow p-2 rounded bg-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type request..."
              aria-label="Enter command"
              required
            />
            <button
              className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
              type="submit"
              aria-label="Send command"
            >
              Send
            </button>
          </form>
        </div>
      ) : (
        <button
          className="p-3 rounded-full bg-teal-500 hover:bg-teal-600 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          onClick={() => setVisible(true)}
          aria-label="Open AI Navigator"
        >
          💡
        </button>
      )}
    </div>
  );
}
