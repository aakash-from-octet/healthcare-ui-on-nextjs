import React, { useState, ReactNode, useLayoutEffect } from 'react';
import { redirect } from 'next/navigation';

interface ProtectedRouteProps {
  children?: ReactNode; 
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useLayoutEffect(() => {
    const storedItem = localStorage.getItem('isAuthenticated') || 'false';
    const token = JSON.parse(storedItem);
    if (!token) {
      redirect('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  return isAuthenticated ? (children as React.ReactNode) : null;
};

export default ProtectedRoute;