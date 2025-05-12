"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Your enquiry has been sent successfully!", {
          position: "top-right",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => {
          window.location.href =
            "https://www.instagram.com/avtiteachertraining/";
        }, 3000);
      } else {
        toast.error("Failed to send enquiry. Please try again.", {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
      });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#E9EFFF] to-[#d1e0ff] p-6">
      {/* Toast Notifications */}
      <div className="w-full max-w-2xl bg-white p-10 rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-bold text-[#204099] text-center mb-2">
          Let's Connect
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Have a question or inquiry? Fill out the form, and we'll get back to
          you soon.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#204099] transition-all"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#204099] transition-all"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#204099] transition-all"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#204099] transition-all"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#204099] text-white p-3 rounded-lg hover:bg-[#102C66] transition-all transform hover:scale-105 duration-300 shadow-lg"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
