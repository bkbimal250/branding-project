import React from "react";
import { services } from "../data/services";
import { FaPalette, FaChartLine, FaLaptopCode, FaFilm, FaTshirt, FaPenFancy, FaShapes, FaBook, FaProjectDiagram, FaClipboardCheck, FaChess, FaBoxOpen } from 'react-icons/fa';
import ServiceCard from "../components/layout/ServiceCard";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => (
  <section className="py-16 px-4 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {services.map((service, idx) => (
          <ServiceCard key={service.slug} service={service} index={idx} />
        ))}
      </AnimatePresence>
    </motion.div>
  </section>
);

export default Services; 