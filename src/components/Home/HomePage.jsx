"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

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
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-white text-white">
      {/* Hero Section */}
      <section className="py-16 px-8 md:px-20 text-center">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900">
          Creating Strong Foundations for Lifelong Learning.
          </h1>
          <p className="mt-4 text-xl text-blue-600">
            Elevating learning experiences with innovative solutions.
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
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold">{slide.title}</h3>
                  <p className="mt-3 text-gray-300">{slide.description}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
}
