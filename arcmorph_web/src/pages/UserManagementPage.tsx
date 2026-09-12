import React, { useState } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { useAuth, ALL_POSSIBLE_PAGES, UserAccount } from '../context/AuthContext';
import Swal from 'sweetalert2';

export const UserManagementPage: React.FC = () => {
  const { user, isSuperAdmin, allUsers, createUser, updateUserPermissions, deleteUser, auditLogs } = useAuth();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showPermsModal, setShowPermsModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserAccount | null>(null);

  // New User Form State
  const [newUsername, setNewUsername] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newRole, setNewRole] = useState<UserAccount['role']>('Developer');
  const [newPassword, setNewPassword] = useState('');
  const [newPin, setNewPin] = useState('1234');
  const [selectedPages, setSelectedPages] = useState<string[]>(['/', '/graph']);

  // Edit Permissions State
  const [editPages, setEditPages] = useState<string[]>([]);

  if (!isSuperAdmin) {
    return (
      <div className="page-wrapper-module">
        <PageHeader title="User Access and Permission Control" category="Security Management" />
        <div className="module-content-body p-4">
          <div className="alert alert-danger border-danger p-4 text-center">
            <i className="ti ti-shield-lock fs-36 text-danger d-block mb-2"></i>
            <h4 className="fw-bold text-white">Access Restricted to SuperUser</h4>
            <p className="text-light mb-0 fs-13">
              Only the authorized SuperAdmin (<code className="text-warning">superadmin / naimul_islam</code>) can provision accounts and manage feature-wise page permissions.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const handleToggleNewPage = (path: string) => {
    setSelectedPages(prev =>
      prev.includes(path) ? prev.filter(p => p !== path) : [...prev, path]
    );
  };

  const handleToggleEditPage = (path: string) => {
    setEditPages(prev =>
      prev.includes(path) ? prev.filter(p => p !== path) : [...prev, path]
    );
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUsername.trim() || !newName.trim() || !newPassword.trim()) {
      Swal.fire('Required Fields Missing', 'Please provide username, full name, and password.', 'warning');
      return;
    }

    const res = createUser({
      username: newUsername.trim(),
      name: newName.trim(),
      email: newEmail.trim() || `${newUsername.trim()}@arcmorph.internal`,
      role: newRole,
      avatar: '/assets/images/users/user-1.jpg',
      password: newPassword.trim(),
      pin: newPin.trim() || '1234',
      allowedPages: selectedPages
    });

    if (res.success) {
      Swal.fire({
        title: 'User Provisioned',
        text: `User ${newUsername} has been registered in NoSQL database with ${selectedPages.length} permitted views.`,
        icon: 'success',
        confirmButtonColor: '#00f2fe',
        background: '#0b0f19',
        color: '#f8fafc'
      });
      setShowCreateModal(false);
      setNewUsername('');
      setNewName('');
      setNewEmail('');
      setNewPassword('');
    } else {
      Swal.fire('Error', res.message || 'Failed to create user', 'error');
    }
  };

  const openPermsEditor = (target: UserAccount) => {
    setSelectedUser(target);
    setEditPages([...target.allowedPages]);
    setShowPermsModal(true);
  };

  const handleSavePermissions = () => {
    if (!selectedUser) return;
    updateUserPermissions(selectedUser.username, editPages);
    Swal.fire({
      title: 'Permissions Updated',
      text: `Access rights for ${selectedUser.username} saved to MongoDB collection.`,
      icon: 'success',
      confirmButtonColor: '#00f2fe',
      background: '#0b0f19',
      color: '#f8fafc'
    });
    setShowPermsModal(false);
  };

  const handleDelete = (target: UserAccount) => {
    if (target.username === 'superadmin') {
      Swal.fire('Prohibited', 'Cannot delete primary root superadmin.', 'warning');
      return;
    }
    Swal.fire({
      title: `Delete User ${target.username}?`,
      text: 'This will purge their permissions document from the NoSQL directory.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
      confirmButtonColor: '#ef4444',
      cancelButtonText: 'Cancel',
      background: '#0b0f19',
      color: '#f8fafc'
    }).then(r => {
      if (r.isConfirmed) {
        deleteUser(target.username);
        Swal.fire('Deleted', `User ${target.username} removed.`, 'success');
      }
    });
  };

  return (
    <div className="page-wrapper-module">
      <PageHeader title="SuperUser Access and Feature-Wise Permission Control" category="Security Management" />

      <div className="module-content-body">
        {/* SuperAdmin Active Banner */}
        <div className="card mb-4 border-cyan bg-cyan-subtle shadow-sm">
          <div className="card-body p-3 d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div className="d-flex align-items-center gap-3">
              <div className="position-relative">
                <img
                  src={user?.avatar || '/assets/images/users/naimul_islam.jpg'}
                  alt="SuperAdmin"
                  className="rounded-circle border border-cyan"
                  style={{ width: 48, height: 48, objectFit: 'cover' }}
                />
                <span className="position-absolute bottom-0 end-0 bg-success border border-dark rounded-circle p-1"></span>
              </div>
              <div>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fw-bold text-white">SuperUser Root ID: <span className="text-cyan font-monospace">{user?.username}</span></h6>
                  <span className="badge bg-cyan text-dark fw-bold fs-10">ROOT AUTHORITY</span>
                </div>
                <small className="text-muted">
                  Active Session: <strong>{user?.name}</strong> • Sole Administrator Authorized to Create Users and Modulate UI Permissions
                </small>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-gradient-cyan btn-sm fw-bold d-flex align-items-center gap-2 shadow"
              onClick={() => setShowCreateModal(true)}
            >
              <i className="ti ti-user-plus"></i> Create New User and Grant Views
            </button>
          </div>
        </div>

        <div className="row g-4">
          {/* User Directory Table */}
          <div className="col-xl-8">
            <div className="card h-100 border-dark">
              <div className="card-header d-flex justify-content-between align-items-center border-bottom border-dark">
                <div className="d-flex align-items-center gap-2">
                  <i className="ti ti-users text-cyan fs-18"></i>
                  <h6 className="card-title mb-0 text-white fw-bold">Authorized Users Directory ({allUsers.length})</h6>
                </div>
                <span className="badge bg-dark text-cyan border border-cyan-subtle fs-11">NoSQL Collection: users</span>
              </div>
              <div className="card-body p-0 table-responsive">
                <table className="table table-hover table-dark mb-0 align-middle fs-13">
                  <thead>
                    <tr className="text-muted text-uppercase fs-11 border-bottom border-secondary">
                      <th className="ps-3">User / Identity</th>
                      <th>Assigned Role</th>
                      <th>Permitted Features / Pages</th>
                      <th className="text-end pe-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allUsers.map((u) => {
                      const isSuper = u.username === 'superadmin' || u.role === 'SuperAdmin';
                      return (
                        <tr key={u.username} className="border-bottom border-dark">
                          <td className="ps-3">
                            <div className="d-flex align-items-center gap-2">
                              <img
                                src={u.avatar}
                                alt={u.username}
                                className="rounded-circle border border-secondary"
                                style={{ width: 34, height: 34, objectFit: 'cover' }}
                              />
                              <div>
                                <div className="fw-bold text-light">{u.name}</div>
                                <small className="text-muted font-monospace">@{u.username} • {u.email}</small>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className={`badge ${isSuper ? 'bg-cyan-subtle text-cyan border border-cyan-subtle' : 'bg-secondary-subtle text-light border border-secondary'} fs-11`}>
                              {u.role}
                            </span>
                          </td>
                          <td>
                            {isSuper ? (
                              <span className="badge bg-success-subtle text-success border border-success-subtle">
                                <i className="ti ti-check me-1"></i> All Views Permitted (Full Access)
                              </span>
                            ) : (
                              <div className="d-flex flex-wrap gap-1" style={{ maxWidth: '280px' }}>
                                {u.allowedPages.map(page => (
                                  <span key={page} className="badge bg-dark border border-secondary text-info fs-10">
                                    {page}
                                  </span>
                                ))}
                                {u.allowedPages.length === 0 && (
                                  <span className="badge bg-danger-subtle text-danger fs-10">No Permissions Granted</span>
                                )}
                              </div>
                            )}
                          </td>
                          <td className="text-end pe-3">
                            <div className="d-inline-flex gap-1">
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-info"
                                title="Edit Page Permissions"
                                disabled={isSuper}
                                onClick={() => openPermsEditor(u)}
                              >
                                <i className="ti ti-lock-access"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                title="Delete User"
                                disabled={u.username === 'superadmin'}
                                onClick={() => handleDelete(u)}
                              >
                                <i className="ti ti-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* MongoDB Audit Log Feed */}
          <div className="col-xl-4">
            <div className="card h-100 border-dark">
              <div className="card-header d-flex justify-content-between align-items-center border-bottom border-dark">
                <div className="d-flex align-items-center gap-2">
                  <i className="ti ti-database text-warning fs-18"></i>
                  <h6 className="card-title mb-0 text-white fw-bold">MongoDB Audit Logs</h6>
                </div>
                <span className="badge bg-warning-subtle text-warning fs-10 font-monospace">Live Stream</span>
              </div>
              <div className="card-body p-3 overflow-y-auto" style={{ maxHeight: '550px' }}>
                <p className="fs-11 text-muted mb-3">
                  All authentication attempts, permission mutations, and account activities are logged into MongoDB audit collection.
                </p>

                <div className="d-flex flex-column gap-2">
                  {auditLogs.map((log) => (
                    <div key={log.id} className="p-2.5 rounded bg-dark border border-secondary fs-12">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="badge bg-cyan-subtle text-cyan fs-10 font-monospace">{log.action}</span>
                        <small className="text-muted fs-10">{new Date(log.timestamp).toLocaleTimeString()}</small>
                      </div>
                      <div className="text-light fs-12 mb-1">{log.details}</div>
                      <small className="text-muted font-monospace fs-10">Actor: @{log.actor}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create User Modal */}
      {showCreateModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(5, 8, 17, 0.85)', backdropFilter: 'blur(8px)', zIndex: 1060 }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border border-cyan bg-dark text-light shadow-lg">
              <div className="modal-header border-bottom border-secondary px-4 py-3">
                <h5 className="modal-title fw-bold text-white d-flex align-items-center gap-2">
                  <i className="ti ti-user-plus text-cyan"></i> Provision New User and Assign Page Permissions
                </h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowCreateModal(false)}></button>
              </div>
              <form onSubmit={handleCreateSubmit}>
                <div className="modal-body p-4">
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label fs-12 text-uppercase text-light fw-bold">Username</label>
                      <input
                        type="text"
                        className="form-control bg-dark border-secondary text-light fs-13"
                        placeholder="e.g. jdoe"
                        value={newUsername}
                        onChange={e => setNewUsername(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fs-12 text-uppercase text-light fw-bold">Full Name</label>
                      <input
                        type="text"
                        className="form-control bg-dark border-secondary text-light fs-13"
                        placeholder="e.g. John Doe"
                        value={newName}
                        onChange={e => setNewName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fs-12 text-uppercase text-light fw-bold">Email</label>
                      <input
                        type="email"
                        className="form-control bg-dark border-secondary text-light fs-13"
                        placeholder="user@company.com"
                        value={newEmail}
                        onChange={e => setNewEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fs-12 text-uppercase text-light fw-bold">Role</label>
                      <select
                        className="form-select bg-dark border-secondary text-light fs-13"
                        value={newRole}
                        onChange={e => setNewRole(e.target.value as any)}
                      >
                        <option value="Developer">Developer</option>
                        <option value="Lead Architect">Lead Architect</option>
                        <option value="Security Auditor">Security Auditor</option>
                        <option value="Viewer">Viewer</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fs-12 text-uppercase text-light fw-bold">Password</label>
                      <input
                        type="password"
                        className="form-control bg-dark border-secondary text-light fs-13"
                        placeholder="Password"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fs-12 text-uppercase text-light fw-bold">Lock Screen PIN</label>
                      <input
                        type="text"
                        maxLength={6}
                        className="form-control bg-dark border-secondary text-light fs-13 font-monospace"
                        placeholder="1234"
                        value={newPin}
                        onChange={e => setNewPin(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Feature Permissions Selection */}
                  <div className="border-top border-secondary pt-3">
                    <label className="form-label fs-12 text-uppercase text-cyan fw-bold mb-2">
                      Select Permitted Pages / Features (UI Access Rights)
                    </label>
                    <p className="fs-12 text-muted mb-3">
                      The user will only see and be permitted to navigate to the selected views:
                    </p>

                    <div className="row g-2">
                      {ALL_POSSIBLE_PAGES.filter(p => p.path !== '/users').map(page => {
                        const checked = selectedPages.includes(page.path);
                        return (
                          <div key={page.path} className="col-md-6">
                            <div
                              className={`p-2.5 rounded border cursor-pointer d-flex align-items-center justify-content-between ${checked ? 'border-cyan bg-cyan-subtle' : 'border-secondary bg-dark'}`}
                              onClick={() => handleToggleNewPage(page.path)}
                            >
                              <div>
                                <div className="fs-13 fw-semibold text-light">{page.label}</div>
                                <small className="text-muted font-monospace fs-11">{page.path}</small>
                              </div>
                              <input
                                type="checkbox"
                                className="form-check-input ms-2"
                                checked={checked}
                                onChange={() => {}}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="modal-footer border-top border-secondary px-4 py-3 d-flex justify-content-between">
                  <button type="button" className="btn btn-secondary btn-sm" onClick={() => setShowCreateModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-gradient-cyan btn-sm fw-bold">
                    Provision User in NoSQL Database
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Edit Permissions Modal */}
      {showPermsModal && selectedUser && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(5, 8, 17, 0.85)', backdropFilter: 'blur(8px)', zIndex: 1060 }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border border-cyan bg-dark text-light shadow-lg">
              <div className="modal-header border-bottom border-secondary px-4 py-3">
                <h5 className="modal-title fw-bold text-white d-flex align-items-center gap-2">
                  <i className="ti ti-lock-access text-cyan"></i> Modulate Feature Permissions: @{selectedUser.username}
                </h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowPermsModal(false)}></button>
              </div>
              <div className="modal-body p-4">
                <p className="fs-13 text-muted mb-3">
                  Toggle the specific pages and features accessible by <strong>{selectedUser.name}</strong>. Pages that are unchecked will be hidden from their sidebar and access will be blocked.
                </p>

                <div className="row g-2">
                  {ALL_POSSIBLE_PAGES.filter(p => p.path !== '/users').map(page => {
                    const checked = editPages.includes(page.path);
                    return (
                      <div key={page.path} className="col-md-6">
                        <div
                          className={`p-2.5 rounded border cursor-pointer d-flex align-items-center justify-content-between ${checked ? 'border-cyan bg-cyan-subtle' : 'border-secondary bg-dark'}`}
                          onClick={() => handleToggleEditPage(page.path)}
                        >
                          <div>
                            <div className="fs-13 fw-semibold text-light">{page.label}</div>
                            <small className="text-muted font-monospace fs-11">{page.path}</small>
                          </div>
                          <input
                            type="checkbox"
                            className="form-check-input ms-2"
                            checked={checked}
                            onChange={() => {}}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="modal-footer border-top border-secondary px-4 py-3 d-flex justify-content-between">
                <button type="button" className="btn btn-secondary btn-sm" onClick={() => setShowPermsModal(false)}>
                  Cancel
                </button>
                <button type="button" className="btn btn-gradient-cyan btn-sm fw-bold" onClick={handleSavePermissions}>
                  Commit Updated Permissions
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagementPage;
