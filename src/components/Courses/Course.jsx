"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import {
  BadgeCheck,
  GraduationCap,
  Building2 as LandmarkIcon, // Renamed to avoid conflict
} from "lucide-react";
import { toast } from "react-toastify";
import {
  PiChalkboardTeacher,
  PiUsersThree,
  PiHeart,
  PiBookOpenTextLight,
  PiNotebookLight,
  PiMusicNotes,
  PiPaintBrushBroad,
  PiPuzzlePiece,
} from "react-icons/pi";
import { LuClipboardList, LuFileText } from "react-icons/lu";
import "react-toastify/dist/ReactToastify.css";

export default function Course() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...formData,
      message: "Enquiry for ECCE Teacher Training Course",
      image: "/assets/course-image.jpg",
    };

    try {
      const response = await fetch("/api/course", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success("Your enquiry has been sent successfully!", {
          position: "top-right",
        });
        setFormData({ name: "", email: "", phone: "" });
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

  const topics = [
    {
      title: "Basic Concept and Orientation of ECCEd",
      icon: <PiChalkboardTeacher size={28} />,
    },
    { title: "Stages of Child Development", icon: <PiUsersThree size={28} /> },
    {
      title: "Health and Nutrition of Pre-schoolers",
      icon: <PiHeart size={28} />,
    },
    {
      title: "Curriculum Planning & Assessment",
      icon: <PiNotebookLight size={28} />,
    },
    { title: "Pre-school Organisation", icon: <LuClipboardList size={28} /> },
    { title: "Children with Special Needs", icon: <LuFileText size={28} /> },
    { title: "Communication with Parents", icon: <FaEnvelope size={24} /> },
    { title: "Creative Journal Making", icon: <PiPaintBrushBroad size={28} /> },
    { title: "Readiness Journal", icon: <PiNotebookLight size={28} /> },
    { title: "Rhymes", icon: <PiMusicNotes size={28} /> },
    { title: "Puppets and Activities", icon: <PiPuzzlePiece size={28} /> },
    { title: "Worksheets", icon: <PiBookOpenTextLight size={28} /> },
    {
      title: "Educational Journal Making",
      icon: <PiNotebookLight size={28} />,
    },
    {
      title: "Appropriate Teaching Aids/Tools",
      icon: <LuClipboardList size={28} />,
    },
    { title: "Lesson Plans", icon: <PiChalkboardTeacher size={28} /> },
    { title: "Co-curricular Activities", icon: <PiPuzzlePiece size={28} /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-100 to-pink-100 p-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">
        ECCE Teacher Training: Comprehensive Early Childhood Care & Education
        Course
      </h1>
      <div className="grid md:grid-cols-2 gap-8 items-center p-6 md:p-10">
        {/* Left Section - Image */}
        <div>
          <Image
            src="/assets/course-image.jpg"
            alt="Course Details"
            width={600}
            height={600}
            className="rounded-xl w-full h-auto object-cover shadow-xl"
            priority
          />
        </div>

        {/* Right Section - Form */}
        <div className="w-full max-w-md mx-auto space-y-6">
          <p className="text-gray-700 text-2xl font-light font-serif leading-relaxed text-justify">
            {" "}
            Early childhood education goes beyond preparing children for primary
            school; it focuses on the holistic development of their social,
            emotional, cognitive, and physical needs, laying a strong and
            comprehensive foundation for lifelong learning and overall
            well-being.
          </p>
          <p className="text-2xl font-extrabold"> MODE: ONLINE / OFFLINE</p>

          <form
            onSubmit={handleSubmit}
            className="backdrop-blur-md bg-white/30 border border-white/40 rounded-3xl shadow-2xl p-8 space-y-6"
          >
            <div className="flex items-center border rounded-lg px-4 py-2 gap-6 h-14">
              <FaUser className="text-gray-500" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full outline-none bg-transparent"
                required
              />
            </div>

            <div className="flex items-center border rounded-lg px-4 py-2 gap-6 h-14">
              <FaEnvelope className="text-gray-500" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full outline-none bg-transparent"
                required
              />
            </div>

            <div className="flex items-center border rounded-lg px-4 py-2 gap-6 h-14">
              <FaPhone className="text-gray-500" />
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full outline-none bg-transparent"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-6 py-3 rounded w-full"
              disabled={loading}
            >
              {loading ? "Processing..." : "Enroll Now"}
            </button>
          </form>
        </div>
      </div>
      {/* Course Topics Section */}
      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#1a1a4b] mb-8">
          Course Curriculum
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-xl shadow-md flex items-center gap-4 px-6 py-4 hover:shadow-lg transition"
            >
              <div className="text-pink-600">{topic.icon}</div>
              <div className="text-sm font-medium text-gray-800">
                {topic.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="mt-16 px-4">
        <h2 className="text-2xl font-bold text-center text-[#1a1a4b] mb-10">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center max-w-6xl mx-auto">
          {/* JOB-Oriented Course */}
          <div className="flex flex-col items-center space-y-4">
            <GraduationCap className="w-16 h-16 text-[#204099]" />
            <h3 className="font-semibold text-lg">Job-Oriented Course</h3>
            <p className="text-gray-600 text-justify">
              Designed with clear learning outcomes and a skill-based approach,
              ensuring every learner achieves measurable success.
            </p>
          </div>

          {/* Govt Recognized */}
          <div className="flex flex-col items-center space-y-4">
            <LandmarkIcon className="w-16 h-16 text-[#204099]" />
            <h3 className="font-semibold text-lg">Govt Recognized</h3>
            <p className="text-gray-600 text-justify">
              Backed by government guidelines and quality assurance, our
              programs meet official educational standards.
            </p>
          </div>

          {/* Certified Trainers */}
          <div className="flex flex-col items-center space-y-4">
            <BadgeCheck className="w-16 h-16 text-[#204099]" />
            <h3 className="font-semibold text-lg">Certified Trainers</h3>
            <p className="text-gray-600 text-justify">
              Learn from professionals with verified credentials and real-world
              teaching experience in early childhood education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
