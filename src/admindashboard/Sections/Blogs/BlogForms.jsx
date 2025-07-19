import React, { useState } from 'react';
import { useAuth } from '../../../components/AuthContext';
import TiptapEditor from '../../../components/TiptapEditor';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const BlogForm = ({ onSuccess }) => {
  const { adminToken, user } = useAuth();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleImageChange = (e) => setImages(Array.from(e.target.files));
  const handleCategoriesChange = (e) => setCategories(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    if (!title || !content) {
      setError('Title and content are required.');
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('title', title);
      // Convert HTML to a single text block for backend
      formData.append('contentBlocks', JSON.stringify([{ type: 'text', data: { text: content } }]));
      formData.append('author', user?._id || '');
      if (categories.trim()) formData.append('categories', JSON.stringify(categories.split(',').map(s => s.trim())));
      images.forEach(img => formData.append('images', img));

      const res = await axios.post(
        `${BASE_URL}/api/b1/blogs`,
        formData,
        {
          headers: {
            'Authorization': `Bearer ${adminToken}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setSuccess(true);
      setTitle('');
      setContent('');
      setImages([]);
      setCategories('');
      if (onSuccess) onSuccess(res.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add blog.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-cyan-700">Add New Blog</h2>
      {error && <div className="mb-4 text-red-600 font-semibold">{error}</div>}
      {success && <div className="mb-4 text-green-600 font-semibold">Blog added successfully!</div>}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Title</label>
          <input
            type="text"
            className="w-full px-4 py-2 border-2 border-cyan-200 rounded-lg focus:outline-none focus:border-cyan-500"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            placeholder="Enter blog title"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Content</label>
          <div className="border-2 border-cyan-200 rounded-lg bg-white min-h-[120px] p-2">
            <TiptapEditor value={content} onChange={setContent} />
          </div>
        </div>
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Categories (comma separated, optional)</label>
          <input
            type="text"
            className="w-full px-4 py-2 border-2 border-cyan-200 rounded-lg focus:outline-none focus:border-cyan-500"
            value={categories}
            onChange={handleCategoriesChange}
            placeholder="e.g. design, branding, marketing"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Images (optional, multiple allowed)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full"
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {images.map((img, idx) => (
              <img key={idx} src={URL.createObjectURL(img)} alt="preview" className="w-16 h-16 object-cover rounded" />
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 rounded-lg font-bold hover:from-cyan-600 hover:to-blue-600 transition disabled:opacity-60"
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Blog'}
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
