import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../components/AuthContext';
import TiptapEditor from '../../../components/TiptapEditor';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const EditworkForm = ({ work, onSuccess, onClose }) => {
  const { adminToken, user } = useAuth();
  const [title, setTitle] = useState(work?.title || '');
  const [description, setDescription] = useState(work?.description || '');
  const [image, setImage] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [author] = useState(user?.username || '');

  useEffect(() => {
    setTitle(work?.title || '');
    setDescription(work?.description || '');
    setImage(null);
    setGallery([]);
  }, [work]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleGalleryChange = (e) => {
    setGallery(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    if (!title || !description) {
      setError('Title and description are required.');
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('updatedBy', user?._id || '');
      if (image) formData.append('coverImage', image);
      gallery.forEach(img => formData.append('gallery', img));
      const res = await axios.put(
        `${BASE_URL}/api/b1/works/${work._id}`,
        formData,
        {
          headers: {
            'Authorization': `Bearer ${adminToken}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setSuccess(true);
      if (onSuccess) onSuccess(res.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update work.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-cyan-700">Edit Work</h2>
      {error && <div className="mb-4 text-red-600 font-semibold">{error}</div>}
      {success && <div className="mb-4 text-green-600 font-semibold">Work updated successfully!</div>}
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
          <label className="block mb-1 font-semibold text-gray-700">Description</label>
          <div className="border-2 border-cyan-200 rounded-lg bg-white min-h-[120px] p-2">
            <TiptapEditor value={description} onChange={setDescription} />
          </div>
        </div>
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Author (auto-filled)</label>
          <input
            type="text"
            className="w-full px-4 py-2 border-2 border-cyan-200 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
            value={author}
            readOnly
            placeholder="Author name"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Cover Image (optional, will replace current)</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />
          {image && (
            <img src={URL.createObjectURL(image)} alt="Preview" className="w-full mt-2 rounded-lg object-cover" />
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
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-6 rounded-lg font-bold hover:from-cyan-600 hover:to-blue-600 transition disabled:opacity-60"
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
          {onClose && (
            <button
              type="button"
              className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg font-bold hover:bg-gray-400 transition"
              onClick={onClose}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EditworkForm;
