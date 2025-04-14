import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-[#204099] py-12 font-inter shadow-lg relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-around px-6 md:px-12 py-8 gap-12 md:gap-20">
        {/* Logo & Social Media Section */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0 flex flex-col">
          {/* Updated layout for logo and text */}
          <div className="flex flex-row items-center gap-4">
            <Image
              src="/footer-logo.png"
              alt="AVTI Logo"
              width={140}
              height={140}
              className="object-contain"
            />
            <p className="text-gray-700 text-sm md:text-base max-w-sm text-justify">
              Empowering teachers with advanced training to shape the future of
              education.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 ml-2 md:ml-0">
            <Link
              href="https://www.facebook.com/profile.php?id=61555134747838"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <Facebook className="w-7 h-7 text-[#1877F2]" />
            </Link>
            <Link
              href="https://www.instagram.com/avtiteachertraining?igsh=azVyNWQ2aGw3c2Vr"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <Instagram className="w-7 h-7 text-[#E4405F]" />
            </Link>
          </div>
        </div>

        {/* Connect with AVTI Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-bold text-[#000000] mb-4">
            Connect with AVTI
          </h3>

          {/* Google Map */}
          <div className="relative w-full max-w-md">
            <a
              href="https://maps.app.goo.gl/cdnM6g8ffRGbhs1H6"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0403445114553!2d72.91129847466587!3d19.105885951034725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c719b01fd485%3A0x70d427fd2ef1e02f!2sAdvanced%20Vocational%20Training%20Institute%20vikhroli!5e0!3m2!1sen!2sin!4v1744449082477!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Address */}
          <p className="mt-4 flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-[#204099]" />
            <span className="text-gray-700">
              Anandgadh Naka, Vikhroli West, Mumbai - 400079.
            </span>
          </p>

          {/* Phone */}
          <p className="mt-2 flex items-center space-x-2">
            <Phone className="w-5 h-5 text-[#204099]" />
            <Link
              href="tel:+919372946260"
              className="hover:underline text-[#000000]"
            >
              +91 9372946260
            </Link>
          </p>

          {/* Email */}
          <p className="mt-2 flex items-center space-x-2">
            <Mail className="w-5 h-5 text-[#204099]" />
            <Link
              href="mailto:advanced.vti@gmail.com"
              className="hover:underline text-[#000000]"
            >
              advanced.vti@gmail.com
            </Link>
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-600">
        <p>© 2025 All rights reserved | AVTI</p>
        <p className="flex justify-center items-center space-x-2 mt-2">
          <span>Made with ❤️ by</span>
          <span className="text-[#000000] font-semibold">
            NextGrid.Solutions
          </span>
        </p>
      </div>

      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/9372946260"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp className="w-8 h-8" />
      </Link>
    </footer>
  );
};

export default Footer;
