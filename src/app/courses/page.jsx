import AboutUs from "@/components/AboutUs/AboutUs";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Course from "@/components/Courses/Course";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <Course />
      <Footer />
    </>
  );
};

export default page;
