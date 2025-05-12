"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Nunito, Quicksand } from "next/font/google";

// Define the font objects.  You can adjust the weights as needed.
const nunito = Nunito({
  subsets: ["latin"],
  weights: [400, 600, 700], // Example weights
  variable: "--font-nunito", //Make it a css variable
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weights: [500, 700], // Example weights
  variable: "--font-quicksand", //Make it a css variable
});

const AboutUs = () => {
  return (
    <div
      className={`${nunito.variable} ${quicksand.variable} min-h-screen bg-gradient-to-b from-[#E9EFFF] to-white py-16 px-6`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-blue-900 mb-4"
          style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 700 }}
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed text-justify"
          style={{ fontFamily: '"Nunito", sans-serif' }}
        >
          <span
            className="font-semibold"
            style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 600 }}
          >
            Advanced
          </span>{" "}
          offers a comprehensive course in{" "}
          <span
            className="font-semibold"
            style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 600 }}
          >
            Early Childhood Care & Education (ECCE)
          </span>
          . This professional diploma course prepares candidates to enter the
          highly respected and rewarding field of education. Modern educational
          thought emphasizes that early childhood education lays the foundation
          for lifelong learning and whole-person development. The core value of
          early childhood education today lies in{" "}
          <span
            className="font-semibold"
            style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 600 }}
          >
            child-centeredness
          </span>
          , which focuses on the care and education of children from birth
          through six years of age.
          <br />
          <br />
          ECCE has a global scope, as caring for and educating young children
          has always been a vital part of human societies. In recent years,
          early childhood education has gained increasing importance and has
          emerged as a global priority. It is designed to promote the cognitive,
          social, emotional, and physical development of children from infancy
          to age six.
          <br />
          <br />
          At Advanced, we follow a{" "}
          <span
            className="font-semibold"
            style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 600 }}
          >
            child-centered approach
          </span>
          , recognizing that each child is unique and learns in their own way.
          We are committed to continuous improvement and staying up to date with
          the latest research and best practices in early childhood care and
          education.
        </motion.p>
      </div>

      {/* Cards Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-6 text-center overflow-hidden"
        >
          <Image
            src="/assets/7.jpg"
            alt="Holistic Development"
            width={300}
            height={200}
            className="w-full h-40 object-cover rounded-lg"
          />
          <h3
            className="text-xl font-semibold text-[#204099] mt-4"
            style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 700 }}
          >
            Holistic Development
          </h3>
          <p
            className="text-gray-600 mt-3 text-justify"
            style={{ fontFamily: '"Nunito", sans-serif' }}
          >
            We emphasize{" "}
            <span
              className="font-semibold"
              style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 600 }}
            >
              cognitive, social, emotional, and physical growth
            </span>
            , ensuring a well-rounded foundation for every child.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6 text-center overflow-hidden"
        >
          <Image
            src="/assets/8.jpg"
            alt="Global Perspective"
            width={300}
            height={200}
            className="w-full h-40 object-cover rounded-lg"
          />
          <h3
            className="text-xl font-semibold text-[#204099] mt-4"
            style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 700 }}
          >
            Global Perspective
          </h3>
          <p
            className="text-gray-600 mt-3 text-justify"
            style={{ fontFamily: '"Nunito", sans-serif' }}
          >
            Our ECCE curriculum is{" "}
            <span
              className="font-semibold"
              style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 600 }}
            >
              recognized worldwide
            </span>
            , preparing caregivers and educators to understand young children
            across cultures.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white rounded-xl shadow-lg p-6 text-center overflow-hidden"
        >
          <Image
            src="/assets/9.jpg"
            alt="For Educators & Parents"
            width={300}
            height={200}
            className="w-full h-40 object-cover rounded-lg"
          />
          <h3
            className="text-xl font-semibold text-[#204099] mt-4"
            style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 700 }}
          >
            For Educators & Parents
          </h3>
          <p
            className="text-gray-600 mt-3 text-justify"
            style={{ fontFamily: '"Nunito", sans-serif' }}
          >
            This course benefits{" "}
            <span
              className="font-semibold"
              style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 600 }}
            >
              new mothers, teachers, and infant caregivers
            </span>
            , providing deep insights into early childhood learning.
          </p>
        </motion.div>
      </div>

      {/* Future of Education Section */}
      <div className="max-w-4xl mx-auto mt-16 p-8 bg-white rounded-lg shadow-lg text-center">
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-[#204099]"
          style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 700 }}
        >
          The Future of Early Childhood Education
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-600 mt-4 text-justify"
          style={{ fontFamily: '"Nunito", sans-serif' }}
        >
          With the{" "}
          <span
            className="font-semibold"
            style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 600 }}
          >
            National Education Policy (NEP)
          </span>{" "}
          focusing on play-based learning and inclusivity, our ECCE curriculum
          sets the{" "}
          <span
            className="font-semibold"
            style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 600 }}
          >
            gold standard for early education
          </span>
          . Join us in shaping the future of young learners.
        </motion.p>
      </div>
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

        strong {
          font-family: ${quicksand.style.fontFamily}, sans-serif;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
