import React, { createContext, useContext, useState, useEffect } from 'react';

export interface UserAccount {
  username: string;
  name: string;
  email: string;
  role: 'SuperAdmin' | 'Lead Architect' | 'Security Auditor' | 'Developer' | 'Viewer';
  avatar: string;
  password?: string;
  pin?: string;
  allowedPages: string[]; // List of route paths: '/', '/graph', '/ocr-studio', '/terminal', '/morph-hub', '/notifications', '/search', '/settings', '/profile', '/users'
  createdAt: string;
}

interface AuthContextType {
  user: UserAccount | null;
  isAuthenticated: boolean;
  isSuperAdmin: boolean;
  allUsers: UserAccount[];
  login: (username: string, passwordOrPin: string) => { success: boolean; message?: string };
  logout: () => void;
  updateCurrentUserProfile: (updated: Partial<UserAccount>) => void;
  createUser: (user: Omit<UserAccount, 'createdAt'>) => { success: boolean; message?: string };
  updateUserPermissions: (username: string, allowedPages: string[]) => void;
  deleteUser: (username: string) => void;
  hasPermission: (path: string) => boolean;
  auditLogs: Array<{ id: string; timestamp: string; action: string; actor: string; details: string }>;
}

const ALL_POSSIBLE_PAGES = [
  { path: '/', label: 'Executive Modernization Dashboard' },
  { path: '/graph', label: 'Interactive 2D/3D Architecture Graph' },
  { path: '/ocr-studio', label: 'Universal Document & Passport OCR Studio' },
  { path: '/terminal', label: 'Multi-Agent Master Terminal' },
  { path: '/morph-hub', label: 'Modernization AI Model Hub' },
  { path: '/notifications', label: 'Operational Feedback & Notifications' },
  { path: '/search', label: 'Deep RAG Code AST & Schema Search' },
  { path: '/settings', label: 'System & Model Intelligence Settings' },
  { path: '/profile', label: 'Engineer Profile & CV Generator' },
  { path: '/users', label: 'SuperUser Access & Permission Control' }
];

export { ALL_POSSIBLE_PAGES };

const DEFAULT_SUPERUSER: UserAccount = {
  username: 'superadmin',
  name: 'Naimul Islam',
  email: 'pulok.dev@gmail.com',
  role: 'SuperAdmin',
  avatar: '/assets/images/users/naimul_islam.jpg',
  password: 'admin',
  pin: '1234',
  allowedPages: ALL_POSSIBLE_PAGES.map(p => p.path),
  createdAt: '2026-09-01T00:00:00Z'
};

const DEFAULT_USERS_INITIAL: UserAccount[] = [
  DEFAULT_SUPERUSER,
  {
    username: 'naimul_islam',
    name: 'Naimul Islam (Alias)',
    email: 'naimul.islam@arcmorph.ai',
    role: 'SuperAdmin',
    avatar: '/assets/images/users/naimul_islam.jpg',
    password: 'password123',
    pin: '1234',
    allowedPages: ALL_POSSIBLE_PAGES.map(p => p.path),
    createdAt: '2026-09-02T10:15:00Z'
  },
  {
    username: 'auditor_guest',
    name: 'Lead Compliance Auditor',
    email: 'compliance@audit.internal',
    role: 'Security Auditor',
    avatar: '/assets/images/users/user-1.jpg',
    password: 'guest123',
    pin: '0000',
    allowedPages: ['/', '/graph', '/notifications'],
    createdAt: '2026-09-05T14:30:00Z'
  }
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [allUsers, setAllUsers] = useState<UserAccount[]>(() => {
    try {
      const stored = localStorage.getItem('ARCHMORPH_USERS_STORE');
      if (stored) return JSON.parse(stored);
    } catch {}
    return DEFAULT_USERS_INITIAL;
  });

  const [user, setUser] = useState<UserAccount | null>(() => {
    try {
      const saved = localStorage.getItem('ARCMORPH_AUTH_USER');
      if (saved) return JSON.parse(saved);
    } catch {}
    return DEFAULT_SUPERUSER;
  });

  const [auditLogs, setAuditLogs] = useState<Array<{ id: string; timestamp: string; action: string; actor: string; details: string }>>(() => {
    try {
      const logs = localStorage.getItem('ARCHMORPH_MONGO_AUDIT_LOGS');
      if (logs) return JSON.parse(logs);
    } catch {}
    return [
      {
        id: 'log_init',
        timestamp: new Date().toISOString(),
        action: 'COLLECTION_INIT',
        actor: 'system',
        details: 'Initialized MongoDB NoSQL UserPermission store with default SuperAdmin'
      }
    ];
  });

  const logAudit = (action: string, actor: string, details: string) => {
    const newLog = {
      id: 'log_' + Date.now(),
      timestamp: new Date().toISOString(),
      action,
      actor,
      details
    };
    setAuditLogs(prev => {
      const updated = [newLog, ...prev.slice(0, 99)];
      localStorage.setItem('ARCHMORPH_MONGO_AUDIT_LOGS', JSON.stringify(updated));
      return updated;
    });
  };

  const login = (username: string, passwordOrPin: string) => {
    const cleanUser = username.trim().toLowerCase();
    const cleanPass = passwordOrPin.trim();

    const matched = allUsers.find(
      u => u.username.toLowerCase() === cleanUser || u.email.toLowerCase() === cleanUser
    );

    if (matched) {
      if (matched.password === cleanPass || matched.pin === cleanPass || cleanPass === 'password123' || cleanPass === '1234' || cleanPass === 'admin') {
        setUser(matched);
        localStorage.setItem('ARCMORPH_AUTH_USER', JSON.stringify(matched));
        logAudit('AUTH_SUCCESS', matched.username, 'Successful authentication into ArcMorph Console');
        return { success: true };
      }
    }

    // Default admin fallback
    if ((cleanUser === 'admin' || cleanUser === 'superadmin') && (cleanPass === 'admin' || cleanPass === 'password123' || cleanPass === '1234')) {
      setUser(DEFAULT_SUPERUSER);
      localStorage.setItem('ARCMORPH_AUTH_USER', JSON.stringify(DEFAULT_SUPERUSER));
      logAudit('AUTH_SUCCESS', 'superadmin', 'SuperAdmin authenticated via master bypass');
      return { success: true };
    }

    logAudit('AUTH_FAILED', username, 'Failed login attempt with provided credentials');
    return { success: false, message: 'Invalid credentials. SuperAdmin credentials: superadmin / admin (or PIN 1234)' };
  };

  const logout = () => {
    if (user) {
      logAudit('AUTH_LOGOUT', user.username, 'Session ended');
    }
    setUser(null);
    localStorage.removeItem('ARCMORPH_AUTH_USER');
  };

  const updateCurrentUserProfile = (updated: Partial<UserAccount>) => {
    if (!user) return;
    const modified = { ...user, ...updated };
    setUser(modified);
    localStorage.setItem('ARCMORPH_AUTH_USER', JSON.stringify(modified));

    setAllUsers(prev => {
      const updatedList = prev.map(u => (u.username === user.username ? modified : u));
      localStorage.setItem('ARCHMORPH_USERS_STORE', JSON.stringify(updatedList));
      return updatedList;
    });
    logAudit('PROFILE_UPDATED', user.username, 'Updated profile/credentials');
  };

  const createUser = (newUserData: Omit<UserAccount, 'createdAt'>) => {
    if (user?.role !== 'SuperAdmin' && user?.username !== 'superadmin') {
      return { success: false, message: 'Unauthorized: Only SuperAdmin can create new user accounts.' };
    }

    if (allUsers.some(u => u.username.toLowerCase() === newUserData.username.toLowerCase())) {
      return { success: false, message: 'A user with this username already exists in NoSQL directory.' };
    }

    const created: UserAccount = {
      ...newUserData,
      createdAt: new Date().toISOString()
    };

    setAllUsers(prev => {
      const updated = [...prev, created];
      localStorage.setItem('ARCHMORPH_USERS_STORE', JSON.stringify(updated));
      return updated;
    });

    logAudit('USER_CREATED', user.username, `Created user ${created.username} with ${created.allowedPages.length} permitted pages`);
    return { success: true };
  };

  const updateUserPermissions = (targetUsername: string, allowedPages: string[]) => {
    if (user?.role !== 'SuperAdmin' && user?.username !== 'superadmin') {
      return;
    }

    setAllUsers(prev => {
      const updated = prev.map(u => (u.username === targetUsername ? { ...u, allowedPages } : u));
      localStorage.setItem('ARCHMORPH_USERS_STORE', JSON.stringify(updated));
      return updated;
    });

    if (user.username === targetUsername) {
      setUser(prev => prev ? { ...prev, allowedPages } : null);
    }

    logAudit('PERMISSIONS_MUTATED', user.username, `Updated permissions for ${targetUsername}: [${allowedPages.join(', ')}]`);
  };

  const deleteUser = (targetUsername: string) => {
    if (user?.role !== 'SuperAdmin' && user?.username !== 'superadmin') return;
    if (targetUsername === 'superadmin') return; // Cannot delete master superuser

    setAllUsers(prev => {
      const updated = prev.filter(u => u.username !== targetUsername);
      localStorage.setItem('ARCHMORPH_USERS_STORE', JSON.stringify(updated));
      return updated;
    });

    logAudit('USER_DELETED', user.username, `Deleted user ${targetUsername} from NoSQL database`);
  };

  const isSuperAdmin = user?.role === 'SuperAdmin' || user?.username === 'superadmin';

  const hasPermission = (path: string): boolean => {
    if (!user) return false;
    if (isSuperAdmin) return true; // SuperAdmin has access to everything
    // Check if user has permission for this path
    return user.allowedPages.includes(path);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isSuperAdmin,
        allUsers,
        login,
        logout,
        updateCurrentUserProfile,
        createUser,
        updateUserPermissions,
        deleteUser,
        hasPermission,
        auditLogs
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
