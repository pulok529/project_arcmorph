export interface ApiUser {
  id: string;
  username: string;
  fullName: string;
  email: string;
  phone: string;
  branch: string;
  roleId: string;
  status: 'active' | 'suspended';
  legacyId?: string;
  createdAt: string;
  lastLogin?: string;
}

export interface ApiRole {
  id: string;
  name: string;
  code: string;
  description: string;
  isSystem: boolean;
  priority: number;
  badgeVariant: 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'secondary';
  memberCount: number;
}

export interface ApiActionPermissions {
  canView: boolean;
  canCreate: boolean;
  canEdit: boolean;
  canDelete: boolean;
  canExport: boolean;
  canApprove: boolean;
}

export interface ApiLoginResponse {
  token: string;
  user: ApiUser;
  permissions: Record<string, ApiActionPermissions>;
}

const BASE_URL = '/api';

function getHeaders(): HeadersInit {
  const token = localStorage.getItem('bornomala_token');
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
}

export const api = {
  // Auth
  async login(username: string, password?: string): Promise<ApiLoginResponse> {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password: password || '' })
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ message: 'Login failed' }));
      throw new Error(err.message || 'Authentication error');
    }
    const data: ApiLoginResponse = await res.json();
    if (data.token) {
      localStorage.setItem('bornomala_token', data.token);
    }
    return data;
  },

  async logout(): Promise<void> {
    localStorage.removeItem('bornomala_token');
    await fetch(`${BASE_URL}/auth/logout`, {
      method: 'POST',
      headers: getHeaders()
    }).catch(() => {});
  },

  async me(): Promise<{ user: ApiUser; permissions: Record<string, ApiActionPermissions> }> {
    const res = await fetch(`${BASE_URL}/auth/me`, {
      headers: getHeaders()
    });
    if (!res.ok) throw new Error('Not authenticated');
    return res.json();
  },

  // Users
  async getUsers(search?: string, roleId?: string, branch?: string): Promise<ApiUser[]> {
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (roleId && roleId !== 'ALL') params.append('roleId', roleId);
    if (branch && branch !== 'ALL') params.append('branch', branch);

    const url = `${BASE_URL}/rbac/users?${params.toString()}`;
    const res = await fetch(url, { headers: getHeaders() });
    if (!res.ok) throw new Error('Failed to fetch users');
    return res.json();
  },

  async createUser(user: Omit<ApiUser, 'id' | 'createdAt'>): Promise<ApiUser> {
    const res = await fetch(`${BASE_URL}/rbac/users`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(user)
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ message: 'Failed to create user' }));
      throw new Error(err.message || 'Failed to create user');
    }
    return res.json();
  },

  async updateUser(id: string, updates: Partial<ApiUser>): Promise<void> {
    const res = await fetch(`${BASE_URL}/rbac/users/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(updates)
    });
    if (!res.ok) throw new Error('Failed to update user');
  },

  async deleteUser(id: string): Promise<void> {
    const res = await fetch(`${BASE_URL}/rbac/users/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    if (!res.ok) throw new Error('Failed to delete user');
  },

  async toggleUserStatus(id: string): Promise<{ status: string }> {
    const res = await fetch(`${BASE_URL}/rbac/users/${id}/toggle-status`, {
      method: 'PATCH',
      headers: getHeaders()
    });
    if (!res.ok) throw new Error('Failed to toggle status');
    return res.json();
  },

  // Roles
  async getRoles(): Promise<ApiRole[]> {
    const res = await fetch(`${BASE_URL}/rbac/roles`, { headers: getHeaders() });
    if (!res.ok) throw new Error('Failed to fetch roles');
    return res.json();
  },

  async createRole(role: { name: string; code: string; description: string; priority: number; badgeVariant: string }): Promise<ApiRole> {
    const res = await fetch(`${BASE_URL}/rbac/roles`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(role)
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ message: 'Failed to create role' }));
      throw new Error(err.message || 'Failed to create role');
    }
    return res.json();
  },

  async deleteRole(id: string): Promise<void> {
    const res = await fetch(`${BASE_URL}/rbac/roles/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    if (!res.ok) throw new Error('Failed to delete role');
  },

  // Permissions
  async getPermissions(): Promise<Record<string, Record<string, ApiActionPermissions>>> {
    const res = await fetch(`${BASE_URL}/rbac/permissions`, { headers: getHeaders() });
    if (!res.ok) throw new Error('Failed to fetch permissions');
    return res.json();
  },

  async updatePermission(roleId: string, module: string, permissions: ApiActionPermissions): Promise<void> {
    const res = await fetch(`${BASE_URL}/rbac/permissions/${roleId}/${module}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(permissions)
    });
    if (!res.ok) throw new Error('Failed to update permission');
  },

  async resetPermissions(): Promise<void> {
    const res = await fetch(`${BASE_URL}/rbac/reset`, {
      method: 'POST',
      headers: getHeaders()
    });
    if (!res.ok) throw new Error('Failed to reset permissions');
  }
};
