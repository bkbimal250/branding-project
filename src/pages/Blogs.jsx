import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogsCard from '../components/BlogsCard';
import { motion } from 'framer-motion';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/blogs`);
        setBlogs(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        setError('Error fetching blogs');
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-lg font-medium text-cyan-700">
        Loading blogs...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-600 font-semibold">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">All Blogs</h1>
      <motion.div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" animate="visible">
        {blogs.map((blog, idx) => (
          <BlogsCard key={blog._id || blog.slug || idx} blog={blog} index={idx} />
        ))}
      </motion.div>
    </div>
  );
};

export default Blogs; 