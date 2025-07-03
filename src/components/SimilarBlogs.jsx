import React from 'react';
import { blogs } from '../data/Blog';
import BlogsCard from './BlogsCard';
import { motion } from 'framer-motion';

const SimilarBlogs = ({ category, currentId }) => {
  const similar = blogs.filter((b) => b.category === category && b.id !== currentId).slice(0, 3);
  if (similar.length === 0) return null;
  return (
    <div>
      <h2 className="text-lg font-bold mb-4 text-cyan-700">Similar Blogs</h2>
      <motion.div className="space-y-4" initial="hidden" animate="visible">
        {similar.map((blog, idx) => (
          <BlogsCard key={blog.id} blog={blog} index={idx} />
        ))}
      </motion.div>
    </div>
  );
};

export default SimilarBlogs; 