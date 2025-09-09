import React, { useState } from "react";

const Clients = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return false;
    if (formData.phone && !/^[0-9]{7,15}$/.test(formData.phone)) return false;
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      console.log("Form Submitted:", formData);

      setFormData({ name: "", email: "", phone: "", message: "" });
      setStatus("success");
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="font-satoshi text-4xl font-black text-gray-800 mb-4">
        Become Our Client
      </h1>
      <p className="text-gray-600 mb-6">
        Fill out the form below and we’ll get back to you soon.
      </p>

      {status === "success" && (
        <div className="mb-4 p-3 rounded-lg bg-green-100 text-green-700 text-sm">
          ✅ Thank you! We received your request.
        </div>
      )}

      {status === "error" && (
        <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-700 text-sm">
          ❌ Please check your inputs and try again.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-100 p-6 rounded-2xl shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone (optional)"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
          rows="4"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-pink-600 text-white font-bold py-3 rounded-xl hover:bg-pink-700 transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Clients;
