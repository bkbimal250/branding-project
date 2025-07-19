import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import SimilarBlogs from '../components/SimilarBlogs';
import LatestBlogs from '../components/LatestBlogs';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const BlogsDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/blogs/${id}`);
        setBlog(response.data);
      } catch (err) {
        setError('Blog not found.');
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error || !blog) return <div className="text-center py-20">{error || 'Blog not found.'}</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <motion.div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
          {blog.images && blog.images[0] && (
            <img src={blog.images[0].url} alt={blog.title} className="w-full h-64 object-cover rounded-xl mb-6" />
          )}
          <div className="text-xs font-semibold text-cyan-600 mb-2">{blog.categories && blog.categories.join(', ')}</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{blog.title}</h1>
          <div className="text-sm text-gray-400 mb-6">By {blog.author?.name}  {new Date(blog.postedOn).toLocaleDateString()}</div>
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {Array.isArray(blog.contentBlocks)
              ? blog.contentBlocks.map((block, idx) =>
                  block.type === 'text' ? <p key={idx}>{block.data}</p> : block.type === 'image' ? <img key={idx} src={block.data} alt="Blog visual" /> : null
                )
              : blog.content}
          </div>
        </motion.div>
        <div className="lg:col-span-1">
          <SimilarBlogs category={blog.categories?.[0]} currentId={blog._id} />
        </div>
        <div className="lg:col-span-1">
          <LatestBlogs currentId={blog._id} />
        </div>
      </div>
    </div>
  );
};

export default BlogsDetails; 