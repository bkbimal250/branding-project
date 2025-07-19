import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../../components/AuthContext';
import WorkForm from './workForm';
import EditworkForm from './editworkForm';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const AdminWorks = () => {
  const { adminToken } = useAuth();
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editWork, setEditWork] = useState(null);

  const fetchWorks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/api/b1/works`, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      setWorks(res.data);
    } catch (err) {
      setError('Failed to fetch works.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorks();
    // eslint-disable-next-line
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this work?')) return;
    try {
      await axios.delete(`${BASE_URL}/api/b1/works/${id}`, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      fetchWorks();
    } catch {
      alert('Failed to delete work.');
    }
  };

  const handleEdit = async (work) => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/api/b1/works/${work._id}`, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      setEditWork(res.data);
    } catch (err) {
      setError('Failed to fetch work for editing.');
    } finally {
      setLoading(false);
    }
  };

  const handleEditSuccess = () => {
    setEditWork(null);
    fetchWorks();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-cyan-700">Manage Works</h1>
      <WorkForm onSuccess={fetchWorks} />
      {editWork && (
        <EditworkForm
          work={editWork}
          onClose={() => setEditWork(null)}
          onSuccess={handleEditSuccess}
        />
      )}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">All Works</h2>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-red-600">{error}</div>
        ) : (
          <table className="min-w-full bg-white rounded-xl shadow overflow-hidden">
            <thead>
              <tr className="bg-cyan-50">
                <th className="py-2 px-4">Title</th>
                <th className="py-2 px-4">Description</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {works.map((work) => (
                <tr key={work._id} className="border-b">
                  <td className="py-2 px-4">{work.title}</td>
                  <td className="py-2 px-4">{work.description?.slice(0, 60)}...</td>
                  <td className="py-2 px-4">
                    {/* Edit functionality can be added here */}
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(work._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminWorks; 