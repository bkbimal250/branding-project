import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../components/AuthContext';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const AdminSidebar = () => {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState([]);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all services for dynamic edit links
    const fetchServices = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/b1/service`);
        setServices(res.data);
      } catch {
        setServices([]);
      }
    };
    fetchServices();
  }, []);

  const adminLinks = [
    {
      label: 'Dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" title="Dashboard"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m-6 0v6m0 0H7m6 0h6" /></svg>
      ),
      to: '/admin/dashboard',
    },
    {
      label: 'Services',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" title="Admin Services"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 21m5.25-4l.75 4m-7.5-4h10.5M4.5 21h15M4.5 21a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25v12A2.25 2.25 0 0119.5 21z" /></svg>
      ),
      to: '/admin/dashboard/services',
    },
    {
      label: 'Our Works',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" title="Admin Works"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M16 3v4M8 3v4m-5 4h18" /></svg>
      ),
      to: '/admin/dashboard/works',
    },
    {
      label: 'Blogs',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" title="Admin Blogs"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2h4a2 2 0 012 2v12a2 2 0 01-2 2z" /></svg>
      ),
      to: '/admin/dashboard/blogs',
    },
  ];

  const mainLinks = [
    {
      label: 'Home',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" title="Home"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m-6 0v6m0 0H7m6 0h6" /></svg>
      ),
      to: '/',
    },
    {
      label: 'Blog',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" title="Blog"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2h4a2 2 0 012 2v12a2 2 0 01-2 2z" /></svg>
      ),
      to: '/blogs',
    },
    {
      label: 'Service',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" title="Service"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 21m5.25-4l.75 4m-7.5-4h10.5M4.5 21h15M4.5 21a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25v12A2.25 2.25 0 0119.5 21z" /></svg>
      ),
      to: '/services',
    },
  ];

  return (
    <>
      {/* Toggle button for mobile */}
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-white dark:bg-gray-900 shadow-lg ${open ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-4 py-6 flex flex-col">
          <div className="mb-4">
            <div className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-600 mb-2 pl-2">Admin</div>
            <ul className="space-y-2 font-medium">
              {adminLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-3 rounded-lg transition group text-base font-semibold ${
                        isActive
                          ? 'bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300'
                          : 'text-gray-700 dark:text-gray-200 hover:bg-cyan-50 dark:hover:bg-cyan-800'
                      }`
                    }
                    end={link.to === '/dashboard'}
                  >
                    <span className="text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" title={link.label}>{link.icon}</span>
                    <span>{link.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <div className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-600 mb-2 pl-2">Main Site</div>
            <ul className="space-y-2 font-medium">
              {mainLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-3 rounded-lg transition group text-base font-semibold ${
                        isActive
                          ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                          : 'text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-green-800'
                      }`
                    }
                  >
                    <span className="text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform" title={link.label}>{link.icon}</span>
                    <span>{link.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            <button
              onClick={() => { logout(); navigate('/'); }}
              className="w-full flex items-center gap-2 justify-center py-2 px-4 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
              title="Logout"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" /></svg>
              Logout
            </button>
          </div>
          <div className="mt-8 text-xs text-gray-400 dark:text-gray-600 text-center">
            &copy; {new Date().getFullYear()} Brand Dashboard
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
