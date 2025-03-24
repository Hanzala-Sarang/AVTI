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
          <Image
            src="/footer-logo.png"
            alt="AVTI Logo"
            width={100}
            height={100}
          />
          <p className="mt-4 text-gray-700 max-w-sm">
            Empowering teachers with advanced training to shape the future of
            education.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
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
            <Link
              href="https://maps.app.goo.gl/cdnM6g8ffRGbhs1H6"
              target="_blank"
            >
              <button className="absolute top-3 left-3 bg-[#204099] text-white px-3 py-1 text-sm rounded-md shadow-md">
                View Larger Map
              </button>
              <Image
                src="/google-map.png"
                alt="Google Map"
                width={400}
                height={250}
                className="rounded-lg shadow-lg transition"
              />
            </Link>
          </div>
          {/* Address */}
          <p className="mt-4 flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-[#204099]" />
            <span className="text-gray-700">
              AVTI, Vikhroli, BRANCH: Kurla, Mumbai India.
            </span>
          </p>
          {/* Phone */}
          <p className="mt-2 flex items-center space-x-2">
            <Phone className="w-5 h-5 text-[#204099]" />
            <Link
              href="tel:+919876543210"
              className="hover:underline text-[#000000]"
            >
              +91 9876543210
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
          <span className="text-[#000000] font-semibold">NextGenStudio</span>
        </p>
      </div>

      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/919372946260" // Replace with actual WhatsApp number
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp className="w-8 h-8" />
      </Link>
    </footer>
  );
};

export default Footer;
