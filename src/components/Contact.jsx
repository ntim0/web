import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.length < 1) {
      errors.message = "Message must be at least 1 characters";
    }
    return errors;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="max-w-3xl mx-auto p-4 sm:p-6 md:p-8 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl sm:text-3xl mb-6 font-semibold text-white text-center">
        Get in Touch
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4" noValidate>
        <div>
          <input
            className={`w-full p-3 rounded bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 transition ${
              errors.name ? "focus:ring-red-500 border border-red-500" : "focus:ring-cyan-400"
            }`}
            type="text"
            name="name"
            placeholder="Name"
            aria-label="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <input
            className={`w-full p-3 rounded bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 transition ${
              errors.email ? "focus:ring-red-500 border border-red-500" : "focus:ring-cyan-400"
            }`}
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <textarea
            className={`w-full p-3 rounded bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 transition resize-none ${
              errors.message ? "focus:ring-red-500 border border-red-500" : "focus:ring-cyan-400"
            }`}
            name="message"
            rows="4"
            placeholder="Message"
            aria-label="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="self-start px-6 py-2 bg-teal-600 rounded hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white font-semibold transition"
        >
          Send
        </button>
      </form>
    </section>
  );
}
