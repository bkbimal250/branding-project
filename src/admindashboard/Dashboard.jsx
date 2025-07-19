import React, { useEffect, useState } from 'react';
import Enquiries from './Enquiries';
import axios from 'axios';
import { useAuth } from '../components/AuthContext';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Dashboard = () => {
  const { adminToken } = useAuth();
  const [counts, setCounts] = useState({ services: 0, works: 0, blogs: 0, enquiries: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCounts = async () => {
      setLoading(true);
      setError('');
      try {
        const [servicesRes, worksRes, blogsRes, enquiriesRes] = await Promise.all([
          axios.get(`${BASE_URL}/api/b1/service`, { headers: { Authorization: `Bearer ${adminToken}` } }),
          axios.get(`${BASE_URL}/api/b1/works`, { headers: { Authorization: `Bearer ${adminToken}` } }),
          axios.get(`${BASE_URL}/api/b1/blogs`, { headers: { Authorization: `Bearer ${adminToken}` } }),
          axios.get(`${BASE_URL}/api/b1/enquiry`, { headers: { Authorization: `Bearer ${adminToken}` } }),
        ]);
        setCounts({
          services: servicesRes.data.length,
          works: worksRes.data.length,
          blogs: blogsRes.data.length,
          enquiries: enquiriesRes.data.length,
        });
      } catch (err) {
        setError('Failed to fetch dashboard data.');
      } finally {
        setLoading(false);
      }
    };
    fetchCounts();
  }, [adminToken]);

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to the Admin Dashboard</h1>
        <p className="text-gray-600">Manage your company services, works, blogs, and more from here.</p>
      </div>

      {/* Dashboard Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {loading ? (
          <div className="col-span-4 text-center py-8 text-cyan-700 font-semibold text-lg">Loading summary...</div>
        ) : error ? (
          <div className="col-span-4 text-center py-8 text-red-600 font-semibold">{error}</div>
        ) : (
          <>
            <div className="bg-gradient-to-br from-cyan-100 to-cyan-300 rounded-xl shadow p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <span className="text-3xl font-bold text-cyan-700">{counts.services}</span>
              <span className="text-gray-700 mt-2 font-medium">Services</span>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-300 rounded-xl shadow p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <span className="text-3xl font-bold text-blue-700">{counts.works}</span>
              <span className="text-gray-700 mt-2 font-medium">Works</span>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-pink-300 rounded-xl shadow p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <span className="text-3xl font-bold text-pink-700">{counts.blogs}</span>
              <span className="text-gray-700 mt-2 font-medium">Blogs</span>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-300 rounded-xl shadow p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <span className="text-3xl font-bold text-green-700">{counts.enquiries}</span>
              <span className="text-gray-700 mt-2 font-medium">Enquiries</span>
            </div>
          </>
        )}
      </div>

      <Enquiries />
    </div>
  );
};

export default Dashboard;
