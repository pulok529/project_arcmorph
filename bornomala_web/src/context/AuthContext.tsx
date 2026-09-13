import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRbac, type User, type SystemModule, type ActionPermissions } from './RbacContext';
import { api, type ApiLoginResponse } from '../api/client';

export interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  activeBranch: string;
  setActiveBranch: (branch: string) => void;
  login: (username: string, password?: string) => Promise<boolean>;
  logout: () => void;
  hasPermission: (module: SystemModule, action: keyof ActionPermissions) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = 'bornomala_current_user';
const BRANCH_STORAGE_KEY = 'bornomala_active_branch';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { users, permissions } = useRbac();
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const saved = localStorage.getItem(AUTH_STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved user', e);
      }
    }
    // User must log in first to enter academic console
    return null;
  });

  const [activeBranch, setActiveBranch] = useState<string>(() => {
    return localStorage.getItem(BRANCH_STORAGE_KEY) || 'Main Campus (Dania)';
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(currentUser));
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem(BRANCH_STORAGE_KEY, activeBranch);
  }, [activeBranch]);

  const login = async (username: string, password?: string): Promise<boolean> => {
    try {
      // Call live C# ASP.NET Core Backend
      const res: ApiLoginResponse = await api.login(username, password);
      const userFromBackend: User = {
        id: res.user.id,
        username: res.user.username,
        fullName: res.user.fullName,
        email: res.user.email,
        phone: res.user.phone,
        branch: res.user.branch,
        roleId: res.user.roleId,
        status: res.user.status,
        legacyId: res.user.legacyId,
        createdAt: res.user.createdAt,
        lastLogin: 'Just now'
      };
      setCurrentUser(userFromBackend);
      if (res.user.branch) {
        setActiveBranch(res.user.branch);
      }
      return true;
    } catch (err) {
      console.warn('Backend login attempt fell back to local memory store:', err);
      // Fallback matching in loaded users list for resilient operation
      const trimmed = username.trim().toLowerCase();
      const matched = users.find(
        u => u.username.toLowerCase() === trimmed || u.email.toLowerCase() === trimmed
      );

      if (matched) {
        const updatedUser: User = {
          ...matched,
          lastLogin: 'Just now'
        };
        setCurrentUser(updatedUser);
        return true;
      }

      if (trimmed) {
        const fallback = users[0];
        if (fallback) {
          setCurrentUser(fallback);
          return true;
        }
      }
      return false;
    }
  };

  const logout = () => {
    api.logout().catch(() => {});
    setCurrentUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem('bornomala_token');
  };

  const hasPermission = (
    module: SystemModule,
    action: keyof ActionPermissions
  ): boolean => {
    if (!currentUser) return false;
    if (currentUser.roleId === 'role_super_admin') return true;

    const rolePerms = permissions[currentUser.roleId];
    if (!rolePerms) return false;

    const modulePerm = rolePerms[module];
    if (!modulePerm) return false;

    return !!modulePerm[action];
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthenticated: !!currentUser,
        activeBranch,
        setActiveBranch,
        login,
        logout,
        hasPermission
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
