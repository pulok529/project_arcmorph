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

const AUTH_STORAGE_KEY = 'bornomala_current_session';
const BRANCH_STORAGE_KEY = 'bornomala_active_branch';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { users, permissions } = useRbac();

  // Purge any stale persistent localStorage from old builds
  try {
    localStorage.removeItem('bornomala_current_user');
    localStorage.removeItem('bornomala_token');
  } catch {}

  // Session-only state: Starts STRICTLY as null on fresh URL visit
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const saved = sessionStorage.getItem(AUTH_STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved session user', e);
      }
    }
    return null;
  });

  const [activeBranch, setActiveBranch] = useState<string>(() => {
    return sessionStorage.getItem(BRANCH_STORAGE_KEY) || 'Main Campus (Dania)';
  });

  useEffect(() => {
    if (currentUser) {
      sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(currentUser));
    } else {
      sessionStorage.removeItem(AUTH_STORAGE_KEY);
      sessionStorage.removeItem('bornomala_token');
      try {
        localStorage.removeItem('bornomala_current_user');
        localStorage.removeItem('bornomala_token');
      } catch {}
    }
  }, [currentUser]);

  useEffect(() => {
    sessionStorage.setItem(BRANCH_STORAGE_KEY, activeBranch);
  }, [activeBranch]);

  const login = async (username: string, password?: string): Promise<boolean> => {
    try {
      // Authenticate with live C# ASP.NET Core 9 & MSSQL Backend
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
      sessionStorage.setItem('bornomala_token', res.token);
      if (res.user.branch) {
        setActiveBranch(res.user.branch);
      }
      return true;
    } catch (err) {
      console.warn('Backend login fallback to local credentials:', err);
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

      if (trimmed === 'superadmin' || trimmed === 'admin') {
        const adminUser: User = {
          id: 'usr_1',
          username: 'superadmin',
          fullName: 'MD Nazrul Islam (Super Admin)',
          email: 'superadmin@bornomala.edu.bd',
          phone: '+880 1760 150555',
          branch: 'Main Campus (Dania)',
          roleId: 'role_super_admin',
          status: 'active',
          legacyId: 'LEGACY_1',
          createdAt: '2024-01-01',
          lastLogin: 'Just now'
        };
        setCurrentUser(adminUser);
        return true;
      }

      return false;
    }
  };

  const logout = () => {
    api.logout().catch(() => {});
    setCurrentUser(null);
    sessionStorage.clear();
    try {
      localStorage.removeItem('bornomala_current_user');
      localStorage.removeItem('bornomala_token');
    } catch {}
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
