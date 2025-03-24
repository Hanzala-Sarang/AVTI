"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-[#1E1F4B] p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Image src="/loader-logo.png" alt="Logo" width={50} height={50} />
          <Link href="/" className="text-2xl font-bold font-poppins">
            AVTI
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <motion.svg
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="w-8 h-8"
                fill="none"
                stroke="#1E1F4B"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </motion.svg>
            ) : (
              <motion.svg
                initial={{ rotate: -180 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
                className="w-8 h-8"
                fill="none"
                stroke="#1E1F4B"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </motion.svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 font-inter font-semibold">
          <li>
            <Link
              href="/"
              className="hover:text-[#0F172A] transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className="hover:text-[#0F172A] transition-colors duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/courses"
              className="hover:text-[#0F172A] transition-colors duration-300"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              href="/connect-with-us"
              className="hover:text-[#0F172A] transition-colors duration-300"
            >
              Let's Connect
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full bg-[#dbe4fd]  text-[#1E1F4B] flex flex-col items-center space-y-6 py-6 text-lg shadow-lg md:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[#1E1F4B] text-3xl font-bold focus:outline-none"
            >
              ×
            </button>
            <Link
              href="/"
              className="hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/courses"
              className="hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/connect-with-us"
              className="hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Let's Connect
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
