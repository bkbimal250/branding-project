import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "../data/services";

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

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Our Services</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              {/* Service Cover Image */}
              <div
  className="h-52 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
  style={{
    backgroundImage: `url(${service.coverImage?.url || "/images/default-service.jpg"})`,
  }}
></div>


              {/* Text Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.shortDescription}</p>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-block mt-2 text-blue-600 font-medium hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
