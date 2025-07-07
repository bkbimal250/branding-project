import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, User } from 'lucide-react';

const OurWorkCard = ({
  coverType,
  coverImage,
  title,
  shortDesc,
  date,
  clientName,
  link,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
    >
      <div className="w-full h-60 overflow-hidden">
        {coverType === 'video' ? (
          <video
            src={coverImage}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{shortDesc}</p>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <User size={14} />
            <span>{clientName}</span>
          </div>
          <div className="flex items-center gap-1">
            <CalendarDays size={14} />
            <span>{date}</span>
          </div>
        </div>

        {link && (
          <a
            href={link}
            className="inline-block mt-4 text-sm text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Case Study →
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default OurWorkCard;
