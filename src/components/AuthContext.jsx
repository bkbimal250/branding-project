import React, { createContext, useContext, useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });
  const [userToken, setUserToken] = useState(() => localStorage.getItem('userToken') || null);
  const [adminToken, setAdminToken] = useState(() => localStorage.getItem('adminToken') || null);
  const [userRole, setUserRole] = useState(() => localStorage.getItem('userRole') || null);

  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user));
    else localStorage.removeItem('user');
    if (userToken) localStorage.setItem('userToken', userToken);
    else localStorage.removeItem('userToken');
    if (adminToken) localStorage.setItem('adminToken', adminToken);
    else localStorage.removeItem('adminToken');
    if (userRole) localStorage.setItem('userRole', userRole);
    else localStorage.removeItem('userRole');
  }, [user, userToken, adminToken, userRole]);

  // login function accepts userData, token, and role ("admin" or "user")
  const login = (userData, token, role) => {
    setUser(userData);
    setUserRole(role);
    if (role === 'admin') {
      setAdminToken(token);
      setUserToken(null);
    } else {
      setUserToken(token);
      setAdminToken(null);
    }
  };

  const logout = () => {
    setUser(null);
    setUserToken(null);
    setAdminToken(null);
    setUserRole(null);
    localStorage.removeItem('user');
    localStorage.removeItem('userToken');
    localStorage.removeItem('adminToken');
    localStorage.removeItem('userRole');
  };

  return (
    <AuthContext.Provider value={{ user, userToken, adminToken, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 