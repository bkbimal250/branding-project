import React from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../data/Blog';
import { motion } from 'framer-motion';
import SimilarBlogs from '../components/SimilarBlogs';
import LatestBlogs from '../components/LatestBlogs';

const BlogsDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));
  if (!blog) return <div className="text-center py-20">Blog not found.</div>;
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <motion.div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
          <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-xl mb-6" />
          <div className="text-xs font-semibold text-cyan-600 mb-2">{blog.category}</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{blog.title}</h1>
          <div className="text-sm text-gray-400 mb-6">By {blog.author} • {new Date(blog.date).toLocaleDateString()}</div>
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">{blog.content}</div>
        </motion.div>
        <div className="lg:col-span-1">
          <SimilarBlogs category={blog.category} currentId={blog.id} />
        </div>
        <div className="lg:col-span-1">
          <LatestBlogs currentId={blog.id} />
        </div>
      </div>
    </div>
  );
};

export default BlogsDetails; 