import React from 'react';
import { blogs } from '../data/Blog';
import BlogsCard from './BlogsCard';
import { motion } from 'framer-motion';

const LatestBlogs = ({ currentId }) => {
  const latest = blogs.filter((b) => b.id !== currentId).sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
  if (latest.length === 0) return null;
  return (
    <div>
      <h2 className="text-lg font-bold mb-4 text-cyan-700">Latest Blogs</h2>
      <motion.div className="space-y-4" initial="hidden" animate="visible">
        {latest.map((blog, idx) => (
          <BlogsCard key={blog.id} blog={blog} index={idx} />
        ))}
      </motion.div>
    </div>
  );
};

export default LatestBlogs; 