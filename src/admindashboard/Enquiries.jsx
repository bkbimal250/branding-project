
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../components/AuthContext';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Enquiries = () => {
  const { adminToken } = useAuth();
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEnquiries = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await axios.get(`${BASE_URL}/api/b1/enquiry`, {
          headers: { Authorization: `Bearer ${adminToken}` },
        });
        setEnquiries(res.data);
      } catch (err) {
        setError('Failed to fetch enquiries.');
      } finally {
        setLoading(false);
      }
    };
    fetchEnquiries();
  }, [adminToken]);

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4 text-cyan-700">Recent Enquiries</h2>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : enquiries.length === 0 ? (
        <div className="text-gray-500 text-center py-8">No enquiries found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border">
            <thead>
              <tr className="bg-cyan-50">
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Phone</th>
                <th className="py-2 px-4 border">Location</th>
                <th className="py-2 px-4 border">Service</th>
                <th className="py-2 px-4 border">Message</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enq) => (
                <tr key={enq._id}>
                  <td className="py-2 px-4 border">{enq.name}</td>
                  <td className="py-2 px-4 border">{enq.phone}</td>
                  <td className="py-2 px-4 border">{enq.location}</td>
                  <td className="py-2 px-4 border">{enq.services}</td>
                  <td className="py-2 px-4 border">{enq.message}</td>
                  <td className="py-2 px-4 border capitalize">{enq.status}</td>
                  <td className="py-2 px-4 border">{new Date(enq.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Enquiries;