import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { api } from '../api/client';

export type SystemModule = 'Admissions' | 'Academics' | 'Examination' | 'Accounts' | 'HRM' | 'Administration';

export interface ActionPermissions {
  canView: boolean;
  canCreate: boolean;
  canEdit: boolean;
  canDelete: boolean;
  canExport: boolean;
  canApprove: boolean;
}

export interface Role {
  id: string;
  name: string;
  code: string;
  description: string;
  isSystem: boolean;
  priority: number;
  badgeVariant: 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'secondary';
}

export interface User {
  id: string;
  username: string;
  password?: string;
  fullName: string;
  email: string;
  phone: string;
  branch: string;
  roleId: string;
  status: 'active' | 'suspended';
  legacyId?: string;
  createdAt: string;
  lastLogin?: string;
  avatar?: string;
}

export interface RbacContextType {
  roles: Role[];
  users: User[];
  permissions: Record<string, Record<SystemModule, ActionPermissions>>;
  branches: string[];
  modules: SystemModule[];
  // User operations
  createUser: (user: Omit<User, 'id' | 'createdAt'>) => void;
  updateUser: (id: string, updates: Partial<User>) => void;
  deleteUser: (id: string) => void;
  toggleUserStatus: (id: string) => void;
  // Role operations
  createRole: (role: Omit<Role, 'id' | 'isSystem'>) => void;
  updateRole: (id: string, updates: Partial<Role>) => void;
  deleteRole: (id: string) => void;
  // Permission operations
  updateRolePermission: (roleId: string, module: SystemModule, action: keyof ActionPermissions, value: boolean) => void;
  checkPermission: (roleId: string, module: SystemModule, action: keyof ActionPermissions) => boolean;
  resetToLegacyMigration: () => void;
}

export const MODULES: SystemModule[] = [
  'Admissions',
  'Academics',
  'Examination',
  'Accounts',
  'HRM',
  'Administration'
];

export const BRANCHES = [
  'Main Campus (Dania)',
  'Dhanmondi Campus',
  'Uttara Campus',
  'Noakhali Regional Branch'
];

const INITIAL_ROLES: Role[] = [
  {
    id: 'role_super_admin',
    name: 'Super Administrator',
    code: 'SUPER_ADMIN',
    description: 'Full system authorization across all branches and database engines.',
    isSystem: true,
    priority: 1,
    badgeVariant: 'danger'
  },
  {
    id: 'role_principal',
    name: 'Principal / Headmaster',
    code: 'PRINCIPAL',
    description: 'Executive academic head with approval power over results and admissions.',
    isSystem: true,
    priority: 2,
    badgeVariant: 'primary'
  },
  {
    id: 'role_academic_head',
    name: 'Academic Director',
    code: 'ACADEMIC_HEAD',
    description: 'Oversees curriculum, class scheduling, and teacher assignments.',
    isSystem: false,
    priority: 3,
    badgeVariant: 'info'
  },
  {
    id: 'role_teacher',
    name: 'Senior Teacher / Faculty',
    code: 'TEACHER',
    description: 'Class attendance logging, course assignment, and exam marks entry.',
    isSystem: false,
    priority: 4,
    badgeVariant: 'success'
  },
  {
    id: 'role_accountant',
    name: 'Chief Accountant',
    code: 'ACCOUNTANT',
    description: 'Fee collection, cash vouchers, bank reconciliations, and student dues.',
    isSystem: false,
    priority: 5,
    badgeVariant: 'warning'
  },
  {
    id: 'role_admission_officer',
    name: 'Admission Desk Officer',
    code: 'ADMISSION_OFFICER',
    description: 'Student registration, document verification, and seat allocation.',
    isSystem: false,
    priority: 6,
    badgeVariant: 'secondary'
  }
];

const INITIAL_USERS: User[] = [
  {
    id: 'usr_101',
    username: 'admin',
    password: 'password123',
    fullName: 'MD Nazrul Islam',
    email: 'nazrul.islam@bornomala.edu.bd',
    phone: '+880 1760 150555',
    branch: 'Main Campus (Dania)',
    roleId: 'role_super_admin',
    status: 'active',
    legacyId: 'LEGACY_MEMBER_001',
    createdAt: '2024-01-10',
    lastLogin: '2 mins ago',
    avatar: '/assets/images/users/cyber_avatar.png'
  },
  {
    id: 'usr_102',
    username: 'principal',
    password: 'password123',
    fullName: 'Prof. M. A. Rahman',
    email: 'principal@bornomala.edu.bd',
    phone: '+880 1711 409921',
    branch: 'Main Campus (Dania)',
    roleId: 'role_principal',
    status: 'active',
    legacyId: 'LEGACY_MEMBER_002',
    createdAt: '2024-01-15',
    lastLogin: '1 hour ago'
  },
  {
    id: 'usr_103',
    username: 'academic.head',
    password: 'password123',
    fullName: 'Mrs. Nasima Begum',
    email: 'nasima.begum@bornomala.edu.bd',
    phone: '+880 1819 224411',
    branch: 'Main Campus (Dania)',
    roleId: 'role_academic_head',
    status: 'active',
    legacyId: 'LEGACY_MEMBER_003',
    createdAt: '2024-02-01',
    lastLogin: 'Yesterday'
  },
  {
    id: 'usr_104',
    username: 'teacher.farhana',
    password: 'password123',
    fullName: 'Farhana Yasmin',
    email: 'farhana.y@bornomala.edu.bd',
    phone: '+880 1521 445566',
    branch: 'Dhanmondi Campus',
    roleId: 'role_teacher',
    status: 'active',
    legacyId: 'LEGACY_FACULTY_108',
    createdAt: '2024-03-12',
    lastLogin: '3 hours ago'
  },
  {
    id: 'usr_105',
    username: 'accounts.head',
    password: 'password123',
    fullName: 'K. M. Hossain',
    email: 'km.hossain@bornomala.edu.bd',
    phone: '+880 1912 334455',
    branch: 'Main Campus (Dania)',
    roleId: 'role_accountant',
    status: 'active',
    legacyId: 'LEGACY_STAFF_022',
    createdAt: '2024-02-18',
    lastLogin: 'Today'
  },
  {
    id: 'usr_106',
    username: 'teacher.tanvir',
    password: 'password123',
    fullName: 'Tanvir Ahmed',
    email: 'tanvir.ahmed@bornomala.edu.bd',
    phone: '+880 1678 998877',
    branch: 'Uttara Campus',
    roleId: 'role_teacher',
    status: 'active',
    legacyId: 'LEGACY_FACULTY_114',
    createdAt: '2024-04-05',
    lastLogin: '4 days ago'
  },
  {
    id: 'usr_107',
    username: 'officer.admission',
    password: 'password123',
    fullName: 'Rafiqul Islam',
    email: 'rafiqul.admission@bornomala.edu.bd',
    phone: '+880 1317 494440',
    branch: 'Main Campus (Dania)',
    roleId: 'role_admission_officer',
    status: 'active',
    legacyId: 'LEGACY_STAFF_045',
    createdAt: '2024-05-20',
    lastLogin: '5 hours ago'
  },
  {
    id: 'usr_108',
    username: 'teacher.suspended',
    password: 'password123',
    fullName: 'Kamal Uddin (Inactive Staff)',
    email: 'kamal.u@bornomala.edu.bd',
    phone: '+880 1722 001122',
    branch: 'Noakhali Regional Branch',
    roleId: 'role_teacher',
    status: 'suspended',
    legacyId: 'LEGACY_FACULTY_089',
    createdAt: '2023-11-01',
    lastLogin: '1 month ago'
  }
];

const makeAllPermissions = (allowed: boolean): ActionPermissions => ({
  canView: allowed,
  canCreate: allowed,
  canEdit: allowed,
  canDelete: allowed,
  canExport: allowed,
  canApprove: allowed
});

const makeCustomPermissions = (
  canView = true,
  canCreate = false,
  canEdit = false,
  canDelete = false,
  canExport = false,
  canApprove = false
): ActionPermissions => ({
  canView,
  canCreate,
  canEdit,
  canDelete,
  canExport,
  canApprove
});

const INITIAL_PERMISSIONS: Record<string, Record<SystemModule, ActionPermissions>> = {
  role_super_admin: {
    Admissions: makeAllPermissions(true),
    Academics: makeAllPermissions(true),
    Examination: makeAllPermissions(true),
    Accounts: makeAllPermissions(true),
    HRM: makeAllPermissions(true),
    Administration: makeAllPermissions(true)
  },
  role_principal: {
    Admissions: makeCustomPermissions(true, true, true, false, true, true),
    Academics: makeCustomPermissions(true, true, true, false, true, true),
    Examination: makeCustomPermissions(true, true, true, false, true, true),
    Accounts: makeCustomPermissions(true, false, false, false, true, true),
    HRM: makeCustomPermissions(true, true, true, false, true, true),
    Administration: makeCustomPermissions(true, false, false, false, true, false)
  },
  role_academic_head: {
    Admissions: makeCustomPermissions(true, true, true, false, true, true),
    Academics: makeAllPermissions(true),
    Examination: makeCustomPermissions(true, true, true, false, true, true),
    Accounts: makeCustomPermissions(true, false, false, false, false, false),
    HRM: makeCustomPermissions(true, false, false, false, false, false),
    Administration: makeCustomPermissions(false, false, false, false, false, false)
  },
  role_teacher: {
    Admissions: makeCustomPermissions(true, false, false, false, false, false),
    Academics: makeCustomPermissions(true, true, true, false, true, false),
    Examination: makeCustomPermissions(true, true, true, false, true, false),
    Accounts: makeCustomPermissions(false, false, false, false, false, false),
    HRM: makeCustomPermissions(true, false, false, false, false, false),
    Administration: makeCustomPermissions(false, false, false, false, false, false)
  },
  role_accountant: {
    Admissions: makeCustomPermissions(true, false, false, false, true, false),
    Academics: makeCustomPermissions(true, false, false, false, false, false),
    Examination: makeCustomPermissions(false, false, false, false, false, false),
    Accounts: makeAllPermissions(true),
    HRM: makeCustomPermissions(true, false, false, false, true, false),
    Administration: makeCustomPermissions(false, false, false, false, false, false)
  },
  role_admission_officer: {
    Admissions: makeCustomPermissions(true, true, true, false, true, false),
    Academics: makeCustomPermissions(true, false, false, false, false, false),
    Examination: makeCustomPermissions(false, false, false, false, false, false),
    Accounts: makeCustomPermissions(true, false, false, false, false, false),
    HRM: makeCustomPermissions(false, false, false, false, false, false),
    Administration: makeCustomPermissions(false, false, false, false, false, false)
  }
};

const RbacContext = createContext<RbacContextType | undefined>(undefined);

export const RbacProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Sync with Live ASP.NET Core & MSSQL Backend
  useEffect(() => {
    let mounted = true;
    async function loadBackendData() {
      try {
        const [backendUsers, backendRoles, backendPerms] = await Promise.all([
          api.getUsers(),
          api.getRoles(),
          api.getPermissions()
        ]);
        if (!mounted) return;

        if (backendUsers && backendUsers.length > 0) {
          setUsers(backendUsers);
        }
        if (backendRoles && backendRoles.length > 0) {
          setRoles(backendRoles);
        }
        if (backendPerms && Object.keys(backendPerms).length > 0) {
          setPermissions(backendPerms as any);
        }
      } catch (err) {
        console.warn('MSSQL Backend not yet reachable, continuing with local dataset:', err);
      }
    }
    loadBackendData();
    return () => { mounted = false; };
  }, []);

  const [roles, setRoles] = useState<Role[]>(() => {
    try {
      const saved = localStorage.getItem('BORNOMALA_ROLES');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_ROLES;
  });

  const [users, setUsers] = useState<User[]>(() => {
    try {
      const saved = localStorage.getItem('BORNOMALA_USERS');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_USERS;
  });

  const [permissions, setPermissions] = useState<Record<string, Record<SystemModule, ActionPermissions>>>(() => {
    try {
      const saved = localStorage.getItem('BORNOMALA_PERMISSIONS');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_PERMISSIONS;
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('BORNOMALA_ROLES', JSON.stringify(roles));
  }, [roles]);

  useEffect(() => {
    localStorage.setItem('BORNOMALA_USERS', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('BORNOMALA_PERMISSIONS', JSON.stringify(permissions));
  }, [permissions]);

  // User methods
  const createUser = useCallback((userData: Omit<User, 'id' | 'createdAt'>) => {
    api.createUser(userData).catch(e => console.warn('API sync warning:', e));
    const newUser: User = {
      ...userData,
      id: `usr_${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setUsers(prev => [newUser, ...prev]);
  }, []);

  const updateUser = useCallback((id: string, updates: Partial<User>) => {
    api.updateUser(id, updates).catch(e => console.warn('API sync warning:', e));
    setUsers(prev => prev.map(u => u.id === id ? { ...u, ...updates } : u));
  }, []);

  const deleteUser = useCallback((id: string) => {
    api.deleteUser(id).catch(e => console.warn('API sync warning:', e));
    setUsers(prev => prev.filter(u => u.id !== id));
  }, []);

  const toggleUserStatus = useCallback((id: string) => {
    api.toggleUserStatus(id).catch(e => console.warn('API sync warning:', e));
    setUsers(prev => prev.map(u => {
      if (u.id === id) {
        return { ...u, status: u.status === 'active' ? 'suspended' : 'active' };
      }
      return u;
    }));
  }, []);

  // Role methods
  const createRole = useCallback((roleData: Omit<Role, 'id' | 'isSystem'>) => {
    api.createRole(roleData as any).catch(e => console.warn('API sync warning:', e));
    const newId = `role_${Date.now()}`;
    const newRole: Role = {
      ...roleData,
      id: newId,
      isSystem: false
    };
    setRoles(prev => [...prev, newRole]);

    // Initialize default permissions (read only)
    setPermissions(prev => ({
      ...prev,
      [newId]: {
        Admissions: makeCustomPermissions(true, false, false, false, false, false),
        Academics: makeCustomPermissions(true, false, false, false, false, false),
        Examination: makeCustomPermissions(false, false, false, false, false, false),
        Accounts: makeCustomPermissions(false, false, false, false, false, false),
        HRM: makeCustomPermissions(false, false, false, false, false, false),
        Administration: makeCustomPermissions(false, false, false, false, false, false)
      }
    }));
  }, []);

  const updateRole = useCallback((id: string, updates: Partial<Role>) => {
    setRoles(prev => prev.map(r => r.id === id ? { ...r, ...updates } : r));
  }, []);

  const deleteRole = useCallback((id: string) => {
    api.deleteRole(id).catch(e => console.warn('API sync warning:', e));
    setRoles(prev => prev.filter(r => r.id !== id));
    setPermissions(prev => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  }, []);

  // Permission methods
  const updateRolePermission = useCallback((roleId: string, module: SystemModule, action: keyof ActionPermissions, value: boolean) => {
    const existing = permissions[roleId]?.[module] || makeCustomPermissions(false);
    api.updatePermission(roleId, module, { ...existing, [action]: value }).catch(e => console.warn('API sync warning:', e));
    setPermissions(prev => {
      const rolePerms = prev[roleId] || {
        Admissions: makeCustomPermissions(false),
        Academics: makeCustomPermissions(false),
        Examination: makeCustomPermissions(false),
        Accounts: makeCustomPermissions(false),
        HRM: makeCustomPermissions(false),
        Administration: makeCustomPermissions(false)
      };

      const modulePerms = rolePerms[module] || makeCustomPermissions(false);

      return {
        ...prev,
        [roleId]: {
          ...rolePerms,
          [module]: {
            ...modulePerms,
            [action]: value
          }
        }
      };
    });
  }, []);

  const checkPermission = useCallback((roleId: string, module: SystemModule, action: keyof ActionPermissions): boolean => {
    const rolePerms = permissions[roleId];
    if (!rolePerms) return false;
    const modulePerms = rolePerms[module];
    if (!modulePerms) return false;
    return !!modulePerms[action];
  }, [permissions]);

  const resetToLegacyMigration = useCallback(() => {
    setRoles(INITIAL_ROLES);
    setUsers(INITIAL_USERS);
    setPermissions(INITIAL_PERMISSIONS);
    localStorage.removeItem('BORNOMALA_ROLES');
    localStorage.removeItem('BORNOMALA_USERS');
    localStorage.removeItem('BORNOMALA_PERMISSIONS');
  }, []);

  return (
    <RbacContext.Provider
      value={{
        roles,
        users,
        permissions,
        branches: BRANCHES,
        modules: MODULES,
        createUser,
        updateUser,
        deleteUser,
        toggleUserStatus,
        createRole,
        updateRole,
        deleteRole,
        updateRolePermission,
        checkPermission,
        resetToLegacyMigration
      }}
    >
      {children}
    </RbacContext.Provider>
  );
};

export const useRbac = (): RbacContextType => {
  const context = useContext(RbacContext);
  if (!context) {
    throw new Error('useRbac must be used within an RbacProvider');
  }
  return context;
};
