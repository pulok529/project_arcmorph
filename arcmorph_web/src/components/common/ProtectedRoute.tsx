import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useSessionLock } from '../../context/SessionLockContext';

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, hasPermission } = useAuth();
  const { isLocked } = useSessionLock();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (isLocked && location.pathname !== '/lockscreen') {
    return <Navigate to="/lockscreen" state={{ from: location }} replace />;
  }

  // Check page permission
  if (location.pathname !== '/' && location.pathname !== '/profile' && !hasPermission(location.pathname)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

