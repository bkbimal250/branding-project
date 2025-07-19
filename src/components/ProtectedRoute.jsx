import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user, userRole } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (adminOnly && userRole !== 'admin') return <Navigate to="/" replace />;
  return children;
};

export default ProtectedRoute; 