import React from "react";
import { motion } from "framer-motion";
import { 
  FaLightbulb, FaPalette, FaCamera, FaChartLine, FaMapMarkerAlt, 
  FaShieldAlt, FaPenNib, FaBullhorn, FaBoxes, FaPaintBrush, 
  FaPhotoVideo, FaWaveSquare, FaThumbsUp 
} from "react-icons/fa";
import HeroSection from '../components/layout/HeroSection';
import { services as serviceData } from '../data/services';

import ServiceCard from "../components/layout/ServiceCard";


// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection
        title="About Us"
        subtitle="Crafting captivating brand experiences and pioneering innovative branding approaches."
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'About' }]}
        backgroundImage="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />

      {/* Company Overview */}
      <section className="py-20 px-4 max-w-6xl mx-auto" aria-labelledby="company-overview">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeIn}>
            <h2 id="company-overview" className="text-3xl font-bold mb-6 text-blue-900">
              About Company <span aria-hidden="true">🎯</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Invertvisuals is a full-service branding and marketing agency based in Chembur,Mumbai. 
              We partner with businesses of all sizes, delivering integrated brand strategies rooted 
              in creativity and data-driven insights.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4" aria-hidden="true">
                  <FaMapMarkerAlt className="text-blue-900 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Our Location</h3>
                  <p className="text-gray-600">
                    408, Kamdhenu Commerz Building, Sector‑13, Kharghar, Navi Mumbai
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                    <p className="mb-6">To craft captivating brand experiences that drive growth and loyalty</p>
                    <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                    <p>To pioneer innovative branding approaches that redefine industry standards</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 w-full h-full bg-yellow-400 rounded-2xl -bottom-4 -right-4" aria-hidden="true"></div>
          </motion.div>
        </motion.div>
      </section>

 {/* Core Services */}
<section className="py-20 px-4 bg-gray-50" aria-labelledby="core-services">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-16"
    >
      <h2 id="core-services" className="text-4xl font-bold text-blue-900 mb-4">
        Our Core Services
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Comprehensive solutions tailored to elevate your brand presence and performance.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {serviceData.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <ServiceCard service={service} />
        </motion.div>
      ))}



    </div>
  </div>
</section>
    </div>
  );
};

export default About;