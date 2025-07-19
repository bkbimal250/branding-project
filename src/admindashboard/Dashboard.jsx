import React from 'react';
import Enquiries from './Enquiries';

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to the Admin Dashboard</h1>
        <p className="text-gray-600">Manage your company services, works, blogs, and more from here.</p>
      </div>

      {/* Dashboard Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-2xl font-bold text-cyan-600">12</span>
          <span className="text-gray-700 mt-2">Services</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-2xl font-bold text-cyan-600">8</span>
          <span className="text-gray-700 mt-2">Works</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-2xl font-bold text-cyan-600">5</span>
          <span className="text-gray-700 mt-2">Blogs</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-2xl font-bold text-cyan-600">3</span>
          <span className="text-gray-700 mt-2">Enquiries</span>
        </div>
      </div>


      <Enquiries />

     
    </div>
  );
};

export default Dashboard;
