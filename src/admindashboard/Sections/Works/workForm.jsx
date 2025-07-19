import React, { useState } from 'react';
import { useAuth } from '../../../components/AuthContext';
import TiptapEditor from '../../../components/TiptapEditor';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const WorkForm = ({ onSuccess }) => {
  const { adminToken, user } = useAuth();
  const [title, setTitle] = useState('');
  const [clientName, setClientName] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleCoverImageChange = (e) => setCoverImage(e.target.files[0]);
  const handleGalleryChange = (e) => setGallery(Array.from(e.target.files));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    if (!title || !clientName || !description || !content || !coverImage) {
      setError('All fields except gallery are required.');
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('clientName', clientName);
      formData.append('description', description);
      formData.append('content', content);
      formData.append('createdBy', user?._id || '');
      formData.append('updatedBy', user?._id || '');
      formData.append('coverImage', coverImage);
      gallery.forEach(img => formData.append('gallery', img));

      const res = await axios.post(
        `${BASE_URL}/api/b1/works`,
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
      setClientName('');
      setDescription('');
      setContent('');
      setCoverImage(null);
      setGallery([]);
      if (onSuccess) onSuccess(res.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add work.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-cyan-700">Add New Work</h2>
      {error && <div className="mb-4 text-red-600 font-semibold">{error}</div>}
      {success && <div className="mb-4 text-green-600 font-semibold">Work added successfully!</div>}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Title</label>
          <input
            type="text"
            className="w-full px-4 py-2 border-2 border-cyan-200 rounded-lg focus:outline-none focus:border-cyan-500"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            placeholder="Enter work title"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Client Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border-2 border-cyan-200 rounded-lg focus:outline-none focus:border-cyan-500"
            value={clientName}
            onChange={e => setClientName(e.target.value)}
            required
            placeholder="Enter client name"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Short Description</label>
          <textarea
            className="w-full px-4 py-2 border-2 border-cyan-200 rounded-lg focus:outline-none focus:border-cyan-500"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
            placeholder="Enter a short summary of the work"
            rows={3}
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Content</label>
          <div className="border-2 border-cyan-200 rounded-lg bg-white min-h-[120px] p-2">
            <TiptapEditor value={content} onChange={setContent} />
          </div>
        </div>
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Cover Image (required)</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleCoverImageChange}
            className="w-full"
            required
          />
          {coverImage && (
            <img src={URL.createObjectURL(coverImage)} alt="preview" className="w-full mt-2 rounded-lg object-cover" />
          )}
        </div>
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Gallery Images (optional, multiple allowed)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleGalleryChange}
            className="w-full"
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {gallery.map((img, idx) => (
              <img key={idx} src={URL.createObjectURL(img)} alt="preview" className="w-16 h-16 object-cover rounded" />
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 rounded-lg font-bold hover:from-cyan-600 hover:to-blue-600 transition disabled:opacity-60"
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Work'}
        </button>
      </form>
    </div>
  );
};

export default WorkForm;
