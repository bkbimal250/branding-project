import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../components/AuthContext';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const STATUS_OPTIONS = ['unread', 'reply', 'close'];

const Enquiries = () => {
  const { adminToken } = useAuth();
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionLoading, setActionLoading] = useState(''); // enquiry id for which action is loading

  useEffect(() => {
    fetchEnquiries();
    // eslint-disable-next-line
  }, [adminToken]);

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

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this enquiry?')) return;
    setActionLoading(id + '-delete');
    try {
      await axios.delete(`${BASE_URL}/api/b1/enquiry/${id}`, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      setEnquiries((prev) => prev.filter((enq) => enq._id !== id));
    } catch (err) {
      alert('Failed to delete enquiry.');
    } finally {
      setActionLoading('');
    }
  };

  const handleStatusChange = async (id, status) => {
    setActionLoading(id + '-status');
    try {
      await axios.put(
        `${BASE_URL}/api/b1/enquiry/${id}/status`,
        { status },
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );
      setEnquiries((prev) =>
        prev.map((enq) => (enq._id === id ? { ...enq, status } : enq))
      );
    } catch (err) {
      alert('Failed to update status.');
    } finally {
      setActionLoading('');
    }
  };

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
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Phone</th>
                <th className="py-2 px-4 border">Location</th>
                <th className="py-2 px-4 border">Service</th>
                <th className="py-2 px-4 border">Message</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Date</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enq) => (
                <tr key={enq._id} className="hover:bg-cyan-50 transition">
                  <td className="py-2 px-4 border">{enq.name}</td>
                  <td className="py-2 px-4 border">{enq.email || '-'}</td>
                  <td className="py-2 px-4 border">{enq.phone}</td>
                  <td className="py-2 px-4 border">{enq.location}</td>
                  <td className="py-2 px-4 border">{enq.services}</td>
                  <td className="py-2 px-4 border">{enq.message}</td>
                  <td className="py-2 px-4 border capitalize">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${enq.status === 'unread' ? 'bg-yellow-100 text-yellow-700' : enq.status === 'reply' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>{enq.status}</span>
                  </td>
                  <td className="py-2 px-4 border">{new Date(enq.createdAt).toLocaleString()}</td>
                  <td className="py-2 px-4 border space-x-1">
                    <select
                      value={enq.status}
                      onChange={(e) => handleStatusChange(enq._id, e.target.value)}
                      className="border rounded px-2 py-1 text-xs"
                      disabled={actionLoading === enq._id + '-status'}
                    >
                      {STATUS_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <button
                      onClick={() => handleDelete(enq._id)}
                      className="ml-2 px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600 disabled:opacity-60"
                      disabled={actionLoading === enq._id + '-delete'}
                    >
                      {actionLoading === enq._id + '-delete' ? 'Deleting...' : 'Delete'}
                    </button>
                  </td>
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