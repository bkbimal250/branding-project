import React, { useState } from 'react';
import { useAuth } from '../../../components/AuthContext';
import TiptapEditor from '../../../components/TiptapEditor';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const EditServiceForm = ({ service, onClose, onSuccess }) => {
  const { adminToken, user } = useAuth();
  const [name, setName] = useState(service.name || '');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [description, setDescription] = useState(service.description || '');
  const [author] = useState(user?.username || '');
  const [gallery, setGallery] = useState([]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleGalleryChange = (e) => {
    setGallery(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('updatedBy', user?._id || '');
      if (image) formData.append('coverImage', image);
      gallery.forEach(img => formData.append('gallery', img));
      await axios.put(
        `${BASE_URL}/api/b1/service/${service._id}`,
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
      setError(err.response?.data?.message || 'Failed to update service.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>&times;</button>
        <h2 className="text-2xl font-bold mb-4 text-cyan-700">Edit Service</h2>
        {error && <div className="mb-4 text-red-600 font-semibold">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border-2 border-cyan-200 rounded-lg focus:outline-none focus:border-cyan-500"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              placeholder="Enter service name"
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
              <img src={URL.createObjectURL(image)} alt="Cover Image Preview" className="mt-2 w-full h-auto object-cover rounded" />
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
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditServiceForm;
