import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../../components/AuthContext';
import ServiceForm from './ServiceForm';
import EditServiceForm from './EditServiceForm';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const AdminServices = () => {
  const { adminToken } = useAuth();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editService, setEditService] = useState(null);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/api/b1/service`, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      setServices(res.data);
    } catch (err) {
      setError('Failed to fetch services.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
    // eslint-disable-next-line
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this service?')) return;
    try {
      await axios.delete(`${BASE_URL}/api/b1/service/${id}`, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      fetchServices();
    } catch {
      alert('Failed to delete service.');
    }
  };

  const handleEdit = async (service) => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/api/b1/service/${service._id}`, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      setEditService(res.data);
    } catch (err) {
      setError('Failed to fetch service for editing.');
    } finally {
      setLoading(false);
    }
  };

  const handleEditSuccess = () => {
    setEditService(null);
    fetchServices();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-cyan-700">Manage Services</h1>
      <ServiceForm onSuccess={fetchServices} />
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">All Services</h2>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-red-600">{error}</div>
        ) : services.length === 0 ? (
          <div className="text-gray-500 text-center py-8">No services available.</div>
        ) : (
          <table className="min-w-full bg-white rounded-xl shadow overflow-hidden">
            <thead>
              <tr className="bg-cyan-50">
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Description</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service._id} className="border-b">
                  <td className="py-2 px-4">{service.name}</td>
                  <td className="py-2 px-4">{service.description?.slice(0, 60)}...</td>
                  <td className="py-2 px-4 flex gap-2">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      onClick={() => handleEdit(service)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(service._id)}
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
      {editService && (
        <EditServiceForm
          service={editService}
          onClose={() => setEditService(null)}
          onSuccess={handleEditSuccess}
        />
      )}
    </div>
  );
};

export default AdminServices; 