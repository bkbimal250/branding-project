import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogsCard from './BlogsCard';
import { motion } from 'framer-motion';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const SimilarBlogs = ({ category, currentId }) => {
  const [similar, setSimilar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSimilar = async () => {
      try {
        // If you have a slug, you can use /blogs/similar/:slug, otherwise fallback to category
        if (currentId) {
          const response = await axios.get(`${BASE_URL}/blogs/similar/${currentId}`);
          setSimilar(Array.isArray(response.data) ? response.data : []);
        } else if (category) {
          const response = await axios.get(`${BASE_URL}/blogs?category=${encodeURIComponent(category)}`);
          setSimilar(Array.isArray(response.data) ? response.data : []);
        } else {
          setSimilar([]);
        }
      } catch (err) {
        setError('Error fetching similar blogs');
      } finally {
        setLoading(false);
      }
    };
    fetchSimilar();
  }, [category, currentId]);

  if (loading) return null;
  if (error || !similar.length) return null;

  return (
    <div>
      <h2 className="text-lg font-bold mb-4 text-cyan-700">Similar Blogs</h2>
      <motion.div className="space-y-4" initial="hidden" animate="visible">
        {similar.map((blog, idx) => (
          <BlogsCard key={blog._id || blog.slug || idx} blog={blog} index={idx} />
        ))}
      </motion.div>
    </div>
  );
};

export default SimilarBlogs; 