import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import Testimonials from "./Testimonials";
import Services from "./Services";
import HomeHeroSection from "./HomeHerosection";

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

        <HomeHeroSection />

      <Services />



      <Testimonials />
    </div>
  );
};

export default Home;
