import React from 'react';
import { useAuth } from '../components/AuthContext';

const CustomerDashboard = () => {
  const { user } = useAuth();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>
        {user ? (
          <div className="space-y-4">
            <div>
              <span className="font-semibold">Name:</span> {user.name}
            </div>
            <div>
              <span className="font-semibold">Email:</span> {user.email}
            </div>
            <div>
              <span className="font-semibold">Phone:</span> {user.phone}
            </div>
            <div>
              <span className="font-semibold">Role:</span> {user.role}
            </div>
          </div>
        ) : (
          <div className="text-gray-500">No user data found.</div>
        )}
      </div>
    </div>
  );
};

export default CustomerDashboard; 