"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import {
  BadgeCheck,
  GraduationCap,
  Building2 as LandmarkIcon,
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
        toast.success(
          "🎉 Your enquiry has been sent successfully! Redirecting you to our Instagram page...",
          {
            position: "top-right",
            autoClose: 2500,
          }
        );

        setFormData({ name: "", email: "", phone: "" });
        setLoading(false); // Stop loading before redirect

        setTimeout(() => {
          window.location.href =
            "https://www.instagram.com/avtiteachertraining/";
        }, 3000);
      } else {
        throw new Error("Failed to send enquiry.");
      }
    } catch (error) {
      console.error("Enquiry error:", error);
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
      });
      setLoading(false);
    }
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
    <div
      className="min-h-screen bg-gradient-to-br from-white via-blue-100 to-pink-100 p-6 md:p-12"
      style={{ fontFamily: '"Nunito", sans-serif' }}
    >
      {/* Headline */}
      <h1
        className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center mb-8 leading-tight  uppercase"
        style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 700 }}
      >
        To the world you’re a teacher,
        <br />
        but to your students, you’re an inspiration
      </h1>

      {/* Image and Form/Description Section */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/assets/course-image.jpg"
            alt="ECCE Course"
            width={600}
            height={400}
            className="rounded-xl w-full h-auto object-cover shadow-xl"
            priority
          />
        </div>

        {/* Right Section - Form and Description */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          {/* Form */}
          <div className="w-full max-w-md self-start">
            <h2
              className="text-xl font-semibold text-green-700 text-center mb-4"
              style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 500 }}
            >
              Enroll Now
            </h2>
            <form
              onSubmit={handleSubmit}
              className="backdrop-blur-md bg-white/30 border border-white/40 rounded-xl shadow-xl p-6 space-y-4"
            >
              <div className="flex items-center border rounded-lg px-4 py-2 gap-4 h-12">
                <FaUser className="text-gray-500" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent text-gray-800 font-light"
                  required
                />
              </div>

              <div className="flex items-center border rounded-lg px-4 py-2 gap-4 h-12">
                <FaEnvelope className="text-gray-500" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent text-gray-800 font-light"
                  required
                />
              </div>

              <div className="flex items-center border rounded-lg px-4 py-2 gap-4 h-12">
                <FaPhone className="text-gray-500" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent text-gray-800 font-light"
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
              <p className="text-center text-sm text-gray-600 mt-2 font-light">
                Mode:{" "}
                <strong className="font-semibold">ONLINE / OFFLINE</strong>
              </p>
            </form>
          </div>

          {/* Course Description and Summary */}
          <div className="space-y-6">
            <h1 className="text-3xl text-center font-medium">
              Course Overview
            </h1>
            <div className="prose lg:prose-lg text-gray-700">
              <h2
                className="text-xl font-semibold text-blue-800"
                style={{
                  fontFamily: '"Quicksand", sans-serif',
                  fontWeight: 500,
                }}
              >
                Course Description
              </h2>
              <p className="leading-relaxed text-justify font-light">
                <strong
                  className="font-semibold"
                  style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 500,
                  }}
                >
                  Early Childhood Care and Education (ECCE)
                </strong>{" "}
                goes far beyond simply getting children ready for primary
                school. It focuses on the{" "}
                <strong
                  className="font-semibold"
                  style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 500,
                  }}
                >
                  all-round development
                </strong>{" "}
                of young children — nurturing their{" "}
                <strong
                  className="font-semibold"
                  style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 500,
                  }}
                >
                  social, emotional, cognitive, and physical growth
                </strong>
                . By providing a strong and balanced foundation in these early
                years, ECCE supports{" "}
                <strong
                  className="font-semibold"
                  style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 500,
                  }}
                >
                  lifelong learning, wellbeing
                </strong>
                , and the formation of confident, caring, and responsible
                individuals who can positively contribute to society.
              </p>
            </div>

            <div className="prose lg:prose-lg text-gray-800">
              <h2
                className="text-xl font-semibold text-blue-800"
                style={{
                  fontFamily: '"Quicksand", sans-serif',
                  fontWeight: 500,
                }}
              >
                Course Summary
              </h2>
              <p className="leading-relaxed text-justify font-light">
                It is well established that{" "}
                <strong
                  className="font-semibold"
                  style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 500,
                  }}
                >
                  high-quality Early Childhood Care and Education (ECCEd)
                </strong>{" "}
                is essential for the holistic development of a child. Achieving
                this standard of education begins with{" "}
                <strong
                  className="font-semibold"
                  style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 500,
                  }}
                >
                  well-trained educators
                </strong>
                . Recognizing this,{" "}
                <strong
                  className="text-blue-800 font-semibold"
                  style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 500,
                  }}
                >
                  AVTI
                </strong>{" "}
                has developed a comprehensive and high-quality curriculum for
                its prestigious ECCEd programme. This curriculum has been
                thoughtfully crafted by experts in the field, drawing on
                extensive research and years of practical experience to ensure
                educators are fully equipped to support young learners at every
                stage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Explore Topics Section */}
      <div className="mt-16">
        <h2
          className="text-2xl md:text-3xl font-semibold text-center text-[#1a1a4b] mb-8"
          style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 500 }}
        >
          Explore Course Topics
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-xl shadow-md flex items-center gap-4 px-4 py-3 hover:shadow-lg transition"
            >
              <div className="text-pink-600">{topic.icon}</div>
              <div
                className="text-sm md:text-base font-medium text-gray-800"
                style={{ fontFamily: '"Quicksand", sans-serif' }}
              >
                {topic.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Details Section */}
      <div className="mt-16 prose lg:prose-lg text-gray-800">
        <h2
          className="text-2xl md:text-3xl font-semibold text-center text-[#1a1a4b] mb-8"
          style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 500 }}
        >
          Course Details
        </h2>
        <p className="leading-relaxed text-justify font-light">
          <strong
            className="font-semibold"
            style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 500 }}
          >
            UNESCO
          </strong>{" "}
          is firmly committed to ensuring that every child has access to quality{" "}
          <strong
            className="font-semibold"
            style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 500 }}
          >
            Early Childhood Education (ECE)
          </strong>
          , recognizing it as a cornerstone for lifelong learning, social
          development, and equitable opportunity. Understanding that the early
          years are a critical period in shaping a child’s future, UNESCO
          advocates for{" "}
          <strong
            className="font-semibold"
            style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 500 }}
          >
            inclusive, holistic, and play-based approaches
          </strong>{" "}
          that address the cognitive, emotional, social, and physical needs of
          young children. This commitment is reflected in the{" "}
          <strong
            className="font-semibold"
            style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 500 }}
          >
            Education 2030 Agenda
          </strong>
          , particularly through Sustainable Development Goal 4.2, which aims to
          guarantee that all girls and boys have access to quality early
          childhood development, care, and pre-primary education by 2030.
          Through global partnerships, policy support, capacity building, and
          research initiatives, UNESCO works with countries to strengthen ECE
          systems and ensure that no child is left behind. At its core, UNESCO
          believes that investing in early learning is essential to building
          more inclusive, peaceful, and sustainable societies.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-16 px-4">
        <h2
          className="text-2xl font-bold text-center text-[#1a1a4b] mb-10"
          style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 500 }}
        >
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center max-w-6xl mx-auto">
          {/* JOB-Oriented Course */}
          <div className="flex flex-col items-center space-y-4">
            <GraduationCap className="w-16 h-16 text-[#204099]" />
            <h3
              className="font-semibold text-lg"
              style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 500 }}
            >
              Job-Oriented Course
            </h3>
            <p
              className="text-gray-600 text-justify font-light"
              style={{ fontFamily: '"Nunito", sans-serif' }}
            >
              Designed with clear learning outcomes and a skill-based approach,
              ensuring every learner achieves measurable success.
            </p>
          </div>

          {/* Govt Recognized */}
          <div className="flex flex-col items-center space-y-4">
            <LandmarkIcon className="w-16 h-16 text-[#204099]" />
            <h3
              className="font-semibold text-lg"
              style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 500 }}
            >
              Govt Recognized
            </h3>
            <p
              className="text-gray-600 text-justify font-light"
              style={{ fontFamily: '"Nunito", sans-serif' }}
            >
              Backed by government guidelines and quality assurance, our
              programs meet official educational standards.
            </p>
          </div>

          {/* Certified Trainers */}
          <div className="flex flex-col items-center space-y-4">
            <BadgeCheck className="w-16 h-16 text-[#204099]" />
            <h3
              className="font-semibold text-lg"
              style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 500 }}
            >
              Certified Trainers
            </h3>
            <p
              className="text-gray-600 text-justify font-light"
              style={{ fontFamily: '"Nunito", sans-serif' }}
            >
              Learn from professionals with verified credentials and real-world
              teaching experience in early childhood education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
