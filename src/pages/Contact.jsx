import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // success or error

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Get in Touch</h1>

      {status === "success" && (
        <div className="mb-6 p-3 bg-green-100 text-green-700 rounded-lg text-center">
          ✅ Your message has been sent!
        </div>
      )}

      <form
        className="w-full max-w-2xl space-y-4 sm:space-y-6 bg-white p-6 sm:p-8 rounded-2xl shadow-lg"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 sm:p-4 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 sm:p-4 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 sm:p-4 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
          rows="5"
          required
        />
        <button
          type="submit"
          className="w-full bg-[#EF2168] text-white p-3 sm:p-4 rounded-lg hover:bg-pink-700 transition text-lg sm:text-xl font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
