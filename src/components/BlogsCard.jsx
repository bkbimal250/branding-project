import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const BlogsCard = ({ blog, index }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex flex-col"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      onClick={() => navigate(`/blogs/${blog.id}`)}
    >
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex-1 flex flex-col">
        <div className="text-xs font-semibold text-cyan-600 mb-2">{blog.category}</div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">{blog.title}</h2>
        <div className="text-gray-600 mb-4 flex-1">{blog.summary}</div>
        <div className="text-sm text-gray-400 mt-auto">By {blog.author} • {new Date(blog.date).toLocaleDateString()}</div>
      </div>
    </motion.div>
  );
};

export default BlogsCard; 