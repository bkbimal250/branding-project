import React, { useState, useRef } from 'react';
import { useAuth } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Profile = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    profileImage: user?.profileImage || '',
    password: '',
    confirmPassword: '',
  });
  const [imagePreview, setImagePreview] = useState(user?.profileImage || '');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-2xl font-bold mb-4">You are not logged in</h2>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => navigate('/login')}
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profileImage' && files && files[0]) {
      setForm((prev) => ({ ...prev, profileImage: files[0] }));
      setImagePreview(URL.createObjectURL(files[0]));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleEdit = () => {
    setEditMode(true);
    setSuccessMsg('');
    setErrorMsg('');
  };

  const handleCancel = () => {
    setEditMode(false);
    setForm({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      profileImage: user?.profileImage || '',
      password: '',
      confirmPassword: '',
    });
    setImagePreview(user?.profileImage || '');
    setSuccessMsg('');
    setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');
    setLoading(true);
    if (form.password && form.password !== form.confirmPassword) {
      setErrorMsg('Passwords do not match.');
      setLoading(false);
      return;
    }
    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      if (form.profileImage && form.profileImage !== user.profileImage) {
        formData.append('profileImage', form.profileImage);
      }
      if (form.password) {
        formData.append('password', form.password);
      }
      // Use token from localStorage or context
      const token = localStorage.getItem('token');
      const response = await axios.put(`${BASE_URL}/auth/me`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccessMsg('Profile updated successfully!');
      setEditMode(false);
      // Update user in context
      if (setUser) setUser(response.data);
    } catch (err) {
      setErrorMsg(err.response?.data?.message || 'Failed to update profile.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">My Profile</h2>
        {successMsg && <div className="mb-4 p-3 rounded bg-green-100 text-green-700 font-semibold text-center">{successMsg}</div>}
        {errorMsg && <div className="mb-4 p-3 rounded bg-red-100 text-red-700 font-semibold text-center">{errorMsg}</div>}
        {!editMode ? (
          <>
            <div className="flex flex-col items-center mb-6">
              <img
                src={user.profileImage || '/default-avatar.png'}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border mb-2"
              />
              <span className="block text-lg font-semibold">{user.name || '-'}</span>
              <span className="block text-gray-500 text-sm">{user.email || '-'}</span>
              <span className="block text-gray-500 text-sm">{user.phone || '-'}</span>
              <span className="block text-gray-500 text-sm capitalize">{user.role || '-'}</span>
            </div>
            <button
              className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mb-2"
              onClick={handleEdit}
            >
              Edit Profile
            </button>
            <button
              className="w-full py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              onClick={() => navigate('/')}
            >
              Back to Home
            </button>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col items-center">
              <input
                type="file"
                name="profileImage"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleChange}
                className="hidden"
              />
              <img
                src={imagePreview || '/default-avatar.png'}
                alt="Profile Preview"
                className="w-24 h-24 rounded-full object-cover border mb-2 cursor-pointer"
                onClick={() => fileInputRef.current.click()}
                title="Click to change profile image"
              />
              <span className="text-xs text-gray-400">Click image to change</span>
            </div>
            <div>
              <label className="block text-gray-500 text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-500 text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-500 text-sm mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-500 text-sm mb-1">New Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                placeholder="Leave blank to keep current password"
              />
            </div>
            <div>
              <label className="block text-gray-500 text-sm mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                placeholder="Confirm new password"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                disabled={loading}
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
              <button
                type="button"
                className="w-full py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                onClick={handleCancel}
                disabled={loading}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile; 