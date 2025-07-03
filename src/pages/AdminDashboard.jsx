import React, { useEffect, useState } from 'react';
import { useAuth } from '../components/AuthContext';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const AdminDashboard = () => {
  const { user, token } = useAuth();
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEnquiries = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await axios.get(`${BASE_URL}/enquiries`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setEnquiries(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch enquiries');
      } finally {
        setLoading(false);
      }
    };
    fetchEnquiries();
  }, [token]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-5xl text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p className="mb-2">Welcome, <span className="font-semibold">{user?.name || 'Admin'}</span>!</p>
        <p className="text-gray-600">This is the admin dashboard. Here you can manage users, services, and more.</p>
      </div>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-5xl">
        <h2 className="text-2xl font-bold mb-4 text-left">Enquiries</h2>
        {loading ? (
          <div className="text-center py-8">Loading enquiries...</div>
        ) : error ? (
          <div className="text-red-500 text-center py-8">{error}</div>
        ) : enquiries.length === 0 ? (
          <div className="text-gray-500 text-center py-8">No enquiries found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border">Name</th>
                  <th className="py-2 px-4 border">Email</th>
                  <th className="py-2 px-4 border">Phone</th>
                  <th className="py-2 px-4 border">Message</th>
                  <th className="py-2 px-4 border">Date</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((enq) => (
                  <tr key={enq._id || enq.id} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4 border">{enq.name}</td>
                    <td className="py-2 px-4 border">{enq.email}</td>
                    <td className="py-2 px-4 border">{enq.phone}</td>
                    <td className="py-2 px-4 border max-w-xs truncate">{enq.message}</td>
                    <td className="py-2 px-4 border">{enq.createdAt ? new Date(enq.createdAt).toLocaleString() : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard; 