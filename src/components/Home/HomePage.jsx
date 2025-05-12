"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import { Nunito, Quicksand } from "next/font/google";

// Define the font objects.  You can adjust the weights as needed.
const nunito = Nunito({
  subsets: ["latin"],
  weights: [400, 500, 600, 700], // Example weights
  variable: "--font-nunito", //Make it a css variable
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weights: [500, 700], // Example weights
  variable: "--font-quicksand", //Make it a css variable
});

const slides = [
  {
    id: 1,
    title: "Empowering Future Leaders",
    description: "Join our community of educators shaping the next generation.",
    img: "/assets/1.jpg",
  },
  {
    id: 2,
    title: "Transforming Learning",
    description: "Innovative approaches to education for a brighter tomorrow.",
    img: "/assets/2.jpg",
  },
  {
    id: 3,
    title: "Building Strong Foundations",
    description:
      "Equipping students with skills for success in the digital era.",
    img: "/assets/3.jpg",
  },
];

export default function Home() {
  return (
    <main
      className={`${nunito.variable} ${quicksand.variable} min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-white text-white`}
    >
      {/* Hero Section */}
      <section className="py-16 px-8 md:px-20 text-center">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            className="text-4xl md:text-5xl font-extrabold text-blue-900"
            style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 700 }}
          >
            Creating Strong Foundations <br /> for Lifelong Learning.
          </h1>
          <p
            className="mt-6 text-xl text-justify"
            style={{ color: "#555555", fontFamily: '"Nunito", sans-serif' }}
          >
            The Early Childhood Care and Education (ECCE) Diploma program is a
            comprehensive sequence of courses designed to prepare students for
            rewarding careers in childcare and related fields. ECCE diploma,
            equipping them with the essential qualifications to serve as early
            childhood care and education providers. Focused on the needs of
            contemporary India, the program emphasizes meaningful interaction
            with young children and aims to develop skilled, compassionate, and
            competent ECCE professionals. ECCE ensures holistic development of a
            child by attending to the childs social, emotional, cognitive and
            physical needs which in turns provides a solid foundation for life
            long learning and well being.
          </p>
        </motion.div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 px-8 md:px-20 ">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="max-w-6xl mx-auto"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <motion.div
                className="bg-[#1E293B] text-white shadow-xl rounded-xl overflow-hidden flex flex-col md:flex-row"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full md:w-1/2 object-cover h-[400px]"
                />
                <div
                  className="p-8 md:w-1/2 flex flex-col justify-center"
                  style={{ fontFamily: '"Nunito", sans-serif' }}
                >
                  <h3
                    className="text-3xl font-bold"
                    style={{
                      fontFamily: '"Quicksand", sans-serif',
                      fontWeight: 700,
                    }}
                  >
                    {slide.title}
                  </h3>
                  <p className="mt-3 text-gray-300">{slide.description}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <style global jsx>{`
        :root {
          ${nunito.variable}: ${nunito.style.fontFamily};
          ${quicksand.variable}: ${quicksand.style.fontFamily};
        }
        body {
          font-family: ${nunito.style.fontFamily}, sans-serif;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${quicksand.style.fontFamily}, sans-serif;
          font-weight: 500;
        }
      `}</style>
    </main>
  );
}
