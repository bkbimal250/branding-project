import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ICON_MAP } from "../../utils/iconMap";

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
  const Icon = ICON_MAP[service.icon] || null;

  const handleNavigate = (e) => {
    e.stopPropagation();
    navigate(`/services/${service.slug}`);
  };

  const handleCallback = (e) => {
    e.stopPropagation();
    if (onCallback) onCallback(service);
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      onClick={handleNavigate}
    >
      {Icon && (
        <div className="text-cyan-600 text-3xl mb-3" aria-hidden="true">
          <Icon />
        </div>
      )}

      {service.coverImage?.url && (
        <img
          src={service.coverImage.url}
          alt={service.coverImage.alt || `${service.title} cover`}
          className="w-full h-40 object-cover rounded-xl mb-4 shadow-md"
        />
      )}

      <h2 className="text-xl font-bold text-cyan-700 mb-1">{service.title}</h2>
      {service.category && (
        <div className="text-xs text-gray-500 mb-2">{service.category}</div>
      )}
      <p className="text-gray-600 mb-4 line-clamp-3">
        {service.shortDescription}
      </p>

      <div className="flex gap-2 mt-auto">
        <button
          onClick={handleNavigate}
          className="px-4 py-2 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition"
          aria-label={`View details about ${service.title}`}
        >
          View Details
        </button>
        <button
          onClick={handleCallback}
          className="px-4 py-2 bg-gray-200 text-cyan-700 rounded-lg font-semibold hover:bg-cyan-100 transition"
          aria-label={`Request callback for ${service.title}`}
        >
          Callback
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
