import React from 'react';
import AdminSidebar from './sidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <AdminSidebar />
      <div className="flex-1 ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout; 