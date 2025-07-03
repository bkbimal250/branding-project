import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import Testimonials from "./Testimonials";
import Services from "./Services";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a2980] via-[#26d0ce] to-[#1e3c72] text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Creative Visual Services for Modern Brands
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-cyan-100 max-w-2xl mx-auto">
          Grow your business with stunning videos, social content, and brand identity crafted by experts.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all duration-200 text-xl focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          LET'S TALK
        </Link>
      </section>

      <Services />



      <Testimonials />
    </div>
  );
};

export default Home;
