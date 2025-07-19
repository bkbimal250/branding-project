import React, { useState } from 'react';
import { useAuth } from '../../../components/AuthContext';
import TiptapEditor from '../../../components/TiptapEditor';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const EditBlogForm = ({ blog, onClose, onSuccess }) => {
  const { adminToken, user } = useAuth();
  const [title, setTitle] = useState(blog.title || '');
  const [content, setContent] = useState(blog.contentBlocks?.[0]?.data?.text || '');
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState(blog.categories?.join(', ') || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleImageChange = (e) => setImages(Array.from(e.target.files));
  const handleCategoriesChange = (e) => setCategories(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!title || !content) {
      setError('Title and content are required.');
      return;
    }
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('contentBlocks', JSON.stringify([{ type: 'text', data: { text: content } }]));
      formData.append('author', user?._id || '');
      if (categories.trim()) formData.append('categories', JSON.stringify(categories.split(',').map(s => s.trim())));
      images.forEach(img => formData.append('images', img));
      await axios.put(
        `${BASE_URL}/api/b1/blogs/${blog.slug}`,
        formData,
        {
          headers: {
            'Authorization': `Bearer ${adminToken}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      if (onSuccess) onSuccess();
      if (onClose) onClose();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update blog.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>&times;</button>
        <h2 className="text-2xl font-bold mb-4 text-cyan-700">Edit Blog</h2>
        {error && <div className="mb-4 text-red-600 font-semibold">{error}</div>}
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
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBlogForm; 
