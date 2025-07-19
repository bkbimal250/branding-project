import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const AdminSidebar = () => {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState([]);

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

  const navLinks = [
    {
      label: 'Dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m-6 0v6m0 0H7m6 0h6" /></svg>
      ),
      to: '/admin/dashboard',
    },
    {
      label: 'Services',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 21m5.25-4l.75 4m-7.5-4h10.5M4.5 21h15M4.5 21a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25v12A2.25 2.25 0 0119.5 21z" /></svg>
      ),
      to: '/admin/dashboard/services',
    },
    {
      label: 'Our Works',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M16 3v4M8 3v4m-5 4h18" /></svg>
      ),
      to: '/admin/dashboard/works',
    },
    {
      label: 'Blogs',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2h4a2 2 0 012 2v12a2 2 0 01-2 2z" /></svg>
      ),
      to: '/admin/dashboard/blogs',
    },
    // Profile and Logout can be updated or removed if not implemented
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
          <a href="#" className="flex items-center mb-8">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 w-8 mr-3" alt="Logo" />
            <span className="text-2xl font-bold text-gray-800 dark:text-white tracking-tight">Brand Dashboard</span>
          </a>
          <ul className="flex-1 space-y-2 font-medium">
            {navLinks.map((link) => (
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
                  <span className="text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">{link.icon}</span>
                  <span>{link.label}</span>
                </NavLink>
                {/* Render children if present (for edit links) */}
                {link.children && link.children.length > 0 && (
                  <ul className="ml-8 mt-1 space-y-1">
                    {link.children.map((child) => (
                      <li key={child.to}>
                        <NavLink
                          to={child.to}
                          className={({ isActive }) =>
                            `block px-3 py-1 rounded transition text-sm font-normal ${
                              isActive
                                ? 'bg-cyan-200 text-cyan-900'
                                : 'text-gray-600 hover:bg-cyan-50'
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-8 text-xs text-gray-400 dark:text-gray-600 text-center">
            &copy; {new Date().getFullYear()} Brand Dashboard
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
