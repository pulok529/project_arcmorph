import React, { useState } from 'react';
import { useRbac, type User } from '../../context/RbacContext';

export const UsersPage: React.FC = () => {
  const { users, roles, branches, createUser, updateUser, deleteUser, toggleUserStatus } = useRbac();

  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('ALL');
  const [branchFilter, setBranchFilter] = useState('ALL');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  // Form state for Add/Edit
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    roleId: 'role_teacher',
    branch: 'Main Campus (Dania)'
  });

  const handleOpenAddModal = () => {
    setEditingUser(null);
    setFormData({
      fullName: '',
      username: '',
      email: '',
      phone: '',
      roleId: roles[3]?.id || 'role_teacher',
      branch: branches[0] || 'Main Campus (Dania)'
    });
    setShowAddModal(true);
  };

  const handleOpenEditModal = (user: User) => {
    setEditingUser(user);
    setFormData({
      fullName: user.fullName,
      username: user.username,
      email: user.email,
      phone: user.phone,
      roleId: user.roleId,
      branch: user.branch
    });
    setShowAddModal(true);
  };

  const handleSaveUser = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingUser) {
      updateUser(editingUser.id, {
        fullName: formData.fullName,
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        roleId: formData.roleId,
        branch: formData.branch
      });
    } else {
      createUser({
        username: formData.username,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        roleId: formData.roleId,
        branch: formData.branch,
        status: 'active'
      });
    }
    setShowAddModal(false);
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRole = roleFilter === 'ALL' || user.roleId === roleFilter;
    const matchesBranch = branchFilter === 'ALL' || user.branch.includes(branchFilter);

    return matchesSearch && matchesRole && matchesBranch;
  });

  const getRole = (roleId: string) => {
    return roles.find(r => r.id === roleId);
  };

  const getRoleBadgeClass = (variant?: string) => {
    switch (variant) {
      case 'danger': return 'bg-danger-subtle text-danger border border-danger-subtle';
      case 'primary': return 'bg-primary-subtle text-primary border border-primary-subtle';
      case 'info': return 'bg-info-subtle text-info border border-info-subtle';
      case 'success': return 'bg-success-subtle text-success border border-success-subtle';
      case 'warning': return 'bg-warning-subtle text-warning border border-warning-subtle';
      default: return 'bg-secondary-subtle text-secondary border border-secondary-subtle';
    }
  };

  const getAvatarInitials = (name: string) => {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <div className="py-3">
      {/* Page Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-1 fs-xs">
              <li className="breadcrumb-item"><span className="text-body-secondary">Bornomala EMS</span></li>
              <li className="breadcrumb-item"><span className="text-body-secondary">Access Control</span></li>
              <li className="breadcrumb-item active text-primary fw-semibold" aria-current="page">Users Management</li>
            </ol>
          </nav>
          <h4 className="fw-bold text-body mb-0">Academic Staff & User Governance</h4>
          <span className="fs-xs text-body-secondary">
            Synchronized with legacy MS SQL <code>tblUser</code> table &bull; Role-Based Access Control
          </span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <button 
            type="button" 
            className="btn btn-primary d-flex align-items-center gap-2"
            onClick={handleOpenAddModal}
          >
            <i className="ti ti-user-plus fs-18"></i>
            <span>Add Academic Staff</span>
          </button>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="row g-3 mb-4">
        <div className="col-sm-6 col-xl-3">
          <div className="card h-100 border-secondary-subtle">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="fs-xs text-body-secondary text-uppercase fw-semibold">Total Migrated Staff</span>
                  <h3 className="fw-bold text-body my-1">{users.length}</h3>
                  <span className="badge bg-success-subtle text-success fs-xxs">
                    <i className="ti ti-database me-1"></i> tblUser synced
                  </span>
                </div>
                <div className="avatar-md bg-primary-subtle text-primary rounded d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                  <i className="ti ti-users fs-24"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3">
          <div className="card h-100 border-secondary-subtle">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="fs-xs text-body-secondary text-uppercase fw-semibold">Active Administrators</span>
                  <h3 className="fw-bold text-body my-1">
                    {users.filter(u => u.roleId === 'role_super_admin' || u.roleId === 'role_principal').length}
                  </h3>
                  <span className="badge bg-primary-subtle text-primary fs-xxs">Full Oversight</span>
                </div>
                <div className="avatar-md bg-danger-subtle text-danger rounded d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                  <i className="ti ti-shield-lock fs-24"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3">
          <div className="card h-100 border-secondary-subtle">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="fs-xs text-body-secondary text-uppercase fw-semibold">Teaching Faculty</span>
                  <h3 className="fw-bold text-body my-1">
                    {users.filter(u => u.roleId === 'role_teacher' || u.roleId === 'role_academic_head').length}
                  </h3>
                  <span className="badge bg-info-subtle text-info fs-xxs">Grades & Curriculum</span>
                </div>
                <div className="avatar-md bg-info-subtle text-info rounded d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                  <i className="ti ti-school fs-24"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3">
          <div className="card h-100 border-secondary-subtle">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="fs-xs text-body-secondary text-uppercase fw-semibold">Accounts & Admissions</span>
                  <h3 className="fw-bold text-body my-1">
                    {users.filter(u => u.roleId === 'role_accountant' || u.roleId === 'role_admission_officer').length}
                  </h3>
                  <span className="badge bg-warning-subtle text-warning fs-xxs">Finance & Intake</span>
                </div>
                <div className="avatar-md bg-warning-subtle text-warning rounded d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                  <i className="ti ti-calculator fs-24"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="card border-secondary-subtle">
        <div className="card-header border-secondary-subtle bg-body-tertiary d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 py-3">
          {/* Search Box */}
          <div className="position-relative" style={{ minWidth: '280px' }}>
            <input 
              type="search" 
              className="form-control" 
              placeholder="Search staff by name, username, email..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="d-flex flex-wrap align-items-center gap-2">
            <select 
              className="form-select form-select-sm" 
              style={{ width: 'auto' }}
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              <option value="ALL">All Roles ({users.length})</option>
              {roles.map(r => (
                <option key={r.id} value={r.id}>{r.name}</option>
              ))}
            </select>

            <select 
              className="form-select form-select-sm" 
              style={{ width: 'auto' }}
              value={branchFilter}
              onChange={(e) => setBranchFilter(e.target.value)}
            >
              <option value="ALL">All Campuses</option>
              {branches.map(b => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-hover table-centered mb-0 align-middle">
            <thead className="bg-body-tertiary">
              <tr className="text-body-secondary fs-xs text-uppercase">
                <th>Staff Member</th>
                <th>Username / Legacy ID</th>
                <th>Assigned Role</th>
                <th>Campus Branch</th>
                <th>Contact Phone</th>
                <th>Status</th>
                <th>Last Active</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center py-5 text-body-secondary">
                    <i className="ti ti-mood-empty fs-32 d-block mb-2 text-muted"></i>
                    No academic users found matching the selected filter criteria.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((u) => {
                  const userRole = getRole(u.roleId);
                  return (
                    <tr key={u.id}>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div 
                            className="rounded-circle bg-primary-subtle text-primary fw-bold d-flex align-items-center justify-content-center"
                            style={{ width: '38px', height: '38px', fontSize: '13px', flexShrink: 0 }}
                          >
                            {getAvatarInitials(u.fullName)}
                          </div>
                          <div>
                            <h6 className="mb-0 fw-semibold text-body fs-sm">{u.fullName}</h6>
                            <span className="fs-xs text-body-secondary">{u.email}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="badge bg-light text-dark border fs-xxs mb-1">
                            {u.legacyId || u.id}
                          </span>
                          <div className="fs-xs text-body-secondary font-monospace">@{u.username}</div>
                        </div>
                      </td>
                      <td>
                        <span className={`badge ${getRoleBadgeClass(userRole?.badgeVariant)} fs-xs px-2 py-1`}>
                          {userRole ? userRole.name : 'Unknown Role'}
                        </span>
                      </td>
                      <td>
                        <span className="fs-xs text-body fw-medium">
                          <i className="ti ti-building me-1 text-primary"></i>
                          {u.branch}
                        </span>
                      </td>
                      <td>
                        <span className="fs-xs text-body-secondary">
                          <i className="ti ti-phone me-1"></i>
                          {u.phone}
                        </span>
                      </td>
                      <td>
                        <div className="form-check form-switch mb-0">
                          <input 
                            className="form-check-input" 
                            type="checkbox" 
                            checked={u.status === 'active'}
                            onChange={() => toggleUserStatus(u.id)}
                            title={`Click to ${u.status === 'active' ? 'suspend' : 'activate'} user`}
                          />
                          <span className={`badge ${u.status === 'active' ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'} fs-xxs ms-1`}>
                            {u.status === 'active' ? 'Active' : 'Suspended'}
                          </span>
                        </div>
                      </td>
                      <td>
                        <span className="fs-xs text-body-secondary">
                          {u.lastLogin || 'Never'}
                        </span>
                      </td>
                      <td className="text-end">
                        <div className="btn-group btn-group-sm">
                          <button 
                            type="button" 
                            className="btn btn-outline-secondary btn-icon"
                            onClick={() => handleOpenEditModal(u)}
                            title="Edit User"
                          >
                            <i className="ti ti-edit fs-14"></i>
                          </button>
                          <button 
                            type="button" 
                            className="btn btn-outline-danger btn-icon"
                            onClick={() => {
                              if (window.confirm(`Are you sure you want to remove user "${u.fullName}" from legacy sync?`)) {
                                deleteUser(u.id);
                              }
                            }}
                            title="Delete User"
                            disabled={u.id === 'usr_101'}
                          >
                            <i className="ti ti-trash fs-14"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <div className="card-footer bg-body-tertiary border-secondary-subtle d-flex justify-content-between align-items-center py-2">
          <span className="fs-xs text-body-secondary">
            Showing <strong>{filteredUsers.length}</strong> of <strong>{users.length}</strong> migrated staff accounts
          </span>
          <span className="fs-xs text-body-secondary">
            <i className="ti ti-shield-check text-success me-1"></i> RBAC Enforced
          </span>
        </div>
      </div>

      {/* Add / Edit User Modal */}
      {showAddModal && (
        <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-secondary-subtle shadow-lg">
              <div className="modal-header border-secondary-subtle">
                <h5 className="modal-title fw-bold text-body">
                  <i className={`ti ${editingUser ? 'ti-user-check' : 'ti-user-plus'} me-2 text-primary`}></i>
                  {editingUser ? 'Modify Academic Staff Account' : 'Register New Academic Staff Member'}
                </h5>
                <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
              </div>

              <form onSubmit={handleSaveUser}>
                <div className="modal-body">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold fs-sm text-body">Full Name <span className="text-danger">*</span></label>
                      <input 
                        type="text" 
                        className="form-control" 
                        required 
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Dr. Shamsul Alam"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold fs-sm text-body">Username <span className="text-danger">*</span></label>
                      <input 
                        type="text" 
                        className="form-control" 
                        required 
                        value={formData.username}
                        onChange={e => setFormData({ ...formData, username: e.target.value })}
                        placeholder="e.g. shamsul_alam"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold fs-sm text-body">Institutional Email <span className="text-danger">*</span></label>
                      <input 
                        type="email" 
                        className="form-control" 
                        required 
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="shamsul@bornomala.edu.bd"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold fs-sm text-body">Contact Phone</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+880 1711-XXXXXX"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold fs-sm text-body">Assigned RBAC Role <span className="text-danger">*</span></label>
                      <select 
                        className="form-select"
                        value={formData.roleId}
                        onChange={e => setFormData({ ...formData, roleId: e.target.value })}
                      >
                        {roles.map(r => (
                          <option key={r.id} value={r.id}>{r.name} (Priority {r.priority})</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold fs-sm text-body">Assigned Campus <span className="text-danger">*</span></label>
                      <select 
                        className="form-select"
                        value={formData.branch}
                        onChange={e => setFormData({ ...formData, branch: e.target.value })}
                      >
                        {branches.map(b => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="modal-footer border-secondary-subtle">
                  <button type="button" className="btn btn-outline-secondary" onClick={() => setShowAddModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    <i className="ti ti-check me-1"></i>
                    {editingUser ? 'Save Changes' : 'Register User in RBAC'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
