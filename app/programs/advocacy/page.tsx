// HeroAndGallery.jsx
import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const heroImages = [
  "/images/brotherhood1.jpg",
  "/images/brotherhood2",
  "/images/brotherhood3",
  "/images/brotherhood4",
  "/images/brotherhood5",
];

const galleryItems = [
  { src: "/images/brotherhood6", title: "Empowering Communities" },
  { src: "/images/brotherhood7", title: "Innovative Solutions" },
  { src: "/images/brotherhood8", title: "Youth Engagement" },
  { src: "/images/brotherhood9", title: "Digital Inclusion" },
  { src: "/images/brotherhood10", title: "Collaboration in Action" },
  { src: "/images/brotherhood11", title: "Sustainable Growth" },
];

export default function HeroAndGallery() {
  return (
    <div className="w-full flex flex-col gap-12">
      {/* Hero Carousel */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={4000}
          emulateTouch
          swipeable
        >
          {heroImages.map((img, index) => (
            <div key={index} className="h-[60vh] md:h-[80vh]">
              <img
                src={img}
                alt={`Hero Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Carousel>
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg"
          >
            Building a Better Future Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white text-lg md:text-xl mt-4 max-w-2xl"
          >
            Empowering youth, fostering innovation, and bridging the digital divide.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white shadow-lg rounded-xl overflow-hidden group"
            >
              <div className="relative h-64">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:opacity-90 transition"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
