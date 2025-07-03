import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const cardVariants = {
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

const ServiceCard = ({ service, index = 0, onCallback }) => {
  const navigate = useNavigate();
  const goToDetails = (e) => {
    e.stopPropagation();
    navigate(`/services/${service.slug}`);
  };
  return (
    <motion.div
      className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      onClick={goToDetails}
    >
      <img
        src={service.coverImage?.url}
        alt={service.coverImage?.alt}
        className="w-full h-40 object-cover rounded-xl mb-4 shadow-md"
      />
      <h2 className="text-xl font-bold text-cyan-700 mb-1">{service.title}</h2>
      <div className="text-xs text-gray-500 mb-2">{service.category}</div>
      <div className="text-gray-600 mb-4 line-clamp-3">{service.shortDescription}</div>
      <div className="flex gap-2 mt-auto">
        <button
          onClick={goToDetails}
          className="px-4 py-2 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition"
        >
          View Details
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); if (onCallback) onCallback(service); }}
          className="px-4 py-2 bg-gray-200 text-cyan-700 rounded-lg font-semibold hover:bg-cyan-100 transition"
        >
          Callback
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard; 