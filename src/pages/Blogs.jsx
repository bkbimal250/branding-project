import React from 'react';
import { blogs } from '../data/Blog';
import BlogsCard from '../components/BlogsCard';
import { motion } from 'framer-motion';

const Blogs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">All Blogs</h1>
      <motion.div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" animate="visible">
        {blogs.map((blog, idx) => (
          <BlogsCard key={blog.id} blog={blog} index={idx} />
        ))}
      </motion.div>
    </div>
  );
};

export default Blogs; 