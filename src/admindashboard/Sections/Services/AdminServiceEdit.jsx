import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import EditServiceForm from './EditServiceForm';
import { useAuth } from '../../../components/AuthContext';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const AdminServiceEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { adminToken } = useAuth();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchService = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${BASE_URL}/api/b1/service/${id}`, {
          headers: { Authorization: `Bearer ${adminToken}` },
        });
        setService(res.data);
      } catch (err) {
        setError('Failed to fetch service.');
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchService();
  }, [id, adminToken]);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-600">{error}</div>;
  if (!service) return <div className="text-center py-20">Service not found.</div>;

  return (
    <EditServiceForm
      service={service}
      onClose={() => navigate('/admin/dashboard/services')}
      onSuccess={() => navigate('/admin/dashboard/services')}
    />
  );
};

export default AdminServiceEdit; 