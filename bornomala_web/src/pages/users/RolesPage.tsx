import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRbac } from '../../context/RbacContext';

export const RolesPage: React.FC = () => {
  const navigate = useNavigate();
  const { roles, users, createRole, deleteRole } = useRbac();

  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    description: '',
    priority: 5
  });

  const handleCreateRole = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const code = formData.code.trim() 
      ? formData.code.trim().toUpperCase().replace(/\s+/g, '_')
      : formData.name.trim().toUpperCase().replace(/\s+/g, '_');

    createRole({
      name: formData.name.trim(),
      code: code,
      description: formData.description.trim() || 'Custom academic security profile.',
      priority: Number(formData.priority) || 5,
      badgeVariant: 'secondary'
    });

    setFormData({
      name: '',
      code: '',
      description: '',
      priority: 5
    });
    setShowAddModal(false);
  };

  const getUserCountForRole = (roleId: string) => {
    return users.filter(u => u.roleId === roleId).length;
  };

  const getRoleIcon = (code: string) => {
    switch (code) {
      case 'SUPER_ADMIN': return 'ti-shield-lock text-danger';
      case 'PRINCIPAL': return 'ti-crown text-primary';
      case 'ACADEMIC_HEAD': return 'ti-school text-info';
      case 'TEACHER': return 'ti-pencil text-success';
      case 'ACCOUNTANT': return 'ti-calculator text-warning';
      case 'ADMISSION_OFFICER': return 'ti-user-plus text-purple';
      default: return 'ti-key text-secondary';
    }
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
              <li className="breadcrumb-item active text-primary fw-semibold" aria-current="page">Role Governance</li>
            </ol>
          </nav>
          <h4 className="fw-bold text-body mb-0">Academic Roles & Authority Hierarchy</h4>
          <span className="fs-xs text-body-secondary">
            Synchronized with legacy MS SQL <code>tblUserRole</code> table &bull; Multi-tier Access Definitions
          </span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <button 
            type="button" 
            className="btn btn-primary d-flex align-items-center gap-2"
            onClick={() => setShowAddModal(true)}
          >
            <i className="ti ti-plus fs-18"></i>
            <span>Create Academic Role</span>
          </button>
        </div>
      </div>

      {/* KPI Overview */}
      <div className="row g-3 mb-4">
        <div className="col-sm-6 col-xl-3">
          <div className="card h-100 border-secondary-subtle">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="fs-xs text-body-secondary text-uppercase fw-semibold">Defined Roles</span>
                  <h3 className="fw-bold text-body my-1">{roles.length}</h3>
                  <span className="badge bg-primary-subtle text-primary fs-xxs">Monolith Mapped</span>
                </div>
                <div className="avatar-md bg-primary-subtle text-primary rounded d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
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
                  <span className="fs-xs text-body-secondary text-uppercase fw-semibold">Assigned Staff</span>
                  <h3 className="fw-bold text-body my-1">{users.length}</h3>
                  <span className="badge bg-success-subtle text-success fs-xxs">100% Assigned</span>
                </div>
                <div className="avatar-md bg-success-subtle text-success rounded d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
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
                  <span className="fs-xs text-body-secondary text-uppercase fw-semibold">Custom Roles</span>
                  <h3 className="fw-bold text-body my-1">{roles.filter(r => !r.isSystem).length}</h3>
                  <span className="badge bg-info-subtle text-info fs-xxs">Dynamic Extension</span>
                </div>
                <div className="avatar-md bg-info-subtle text-info rounded d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                  <i className="ti ti-adjustments fs-24"></i>
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
                  <span className="fs-xs text-body-secondary text-uppercase fw-semibold">Action Matrix</span>
                  <h3 className="fw-bold text-body my-1">36</h3>
                  <span className="badge bg-warning-subtle text-warning fs-xxs">tblAction Mapped</span>
                </div>
                <div className="avatar-md bg-warning-subtle text-warning rounded d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                  <i className="ti ti-table-alias fs-24"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Role Cards Grid */}
      <div className="row g-3">
        {roles.map((role) => {
          const count = getUserCountForRole(role.id);
          return (
            <div key={role.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border-secondary-subtle shadow-sm">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-start justify-content-between mb-3">
                      <div className="d-flex align-items-center gap-3">
                        <div 
                          className="rounded bg-body-tertiary border border-secondary-subtle d-flex align-items-center justify-content-center"
                          style={{ width: '44px', height: '44px' }}
                        >
                          <i className={`ti ${getRoleIcon(role.code)} fs-22`}></i>
                        </div>
                        <div>
                          <h5 className="mb-0 fw-bold text-body fs-base">{role.name}</h5>
                          <span className="fs-xs font-monospace text-body-secondary">#{role.code}</span>
                        </div>
                      </div>
                      <span className={`badge ${role.isSystem ? 'bg-secondary-subtle text-secondary' : 'bg-primary-subtle text-primary'} fs-xxs`}>
                        {role.isSystem ? 'System' : 'Custom'}
                      </span>
                    </div>

                    <p className="text-body-secondary fs-sm mb-3" style={{ minHeight: '42px' }}>
                      {role.description}
                    </p>

                    <div className="p-2 rounded bg-body-tertiary border border-secondary-subtle mb-3">
                      <div className="d-flex justify-content-between align-items-center fs-xs mb-1">
                        <span className="text-body-secondary">Hierarchy Tier:</span>
                        <span className="fw-bold text-body">Level {role.priority}</span>
                      </div>
                      <div className="progress" style={{ height: '6px' }}>
                        <div 
                          className="progress-bar bg-primary" 
                          role="progressbar" 
                          style={{ width: `${Math.max(10, 110 - role.priority * 15)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between pt-2 border-top border-secondary-subtle">
                    <div className="d-flex align-items-center gap-1">
                      <i className="ti ti-users fs-16 text-body-secondary"></i>
                      <span className="fs-xs fw-semibold text-body">{count} {count === 1 ? 'member' : 'members'}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <button 
                        type="button" 
                        className="btn btn-sm btn-outline-primary py-1 px-2 fs-xs d-flex align-items-center gap-1"
                        onClick={() => navigate(`/permissions?role=${role.id}`)}
                      >
                        <i className="ti ti-lock-access fs-14"></i>
                        <span>Permissions</span>
                      </button>
                      {!role.isSystem && (
                        <button 
                          type="button" 
                          className="btn btn-sm btn-outline-danger py-1 px-2 fs-xs"
                          onClick={() => {
                            if (window.confirm(`Delete custom role "${role.name}"?`)) {
                              deleteRole(role.id);
                            }
                          }}
                          title="Delete Custom Role"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Role Modal */}
      {showAddModal && (
        <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-secondary-subtle shadow-lg">
              <div className="modal-header border-secondary-subtle">
                <h5 className="modal-title fw-bold text-body">
                  <i className="ti ti-shield-plus me-2 text-primary"></i>
                  Create Academic Security Role
                </h5>
                <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
              </div>

              <form onSubmit={handleCreateRole}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label fw-semibold fs-sm text-body">Role Title <span className="text-danger">*</span></label>
                    <input 
                      type="text" 
                      className="form-control" 
                      required 
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Senior Librarian, Lab Coordinator"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold fs-sm text-body">Role Identifier Code</label>
                    <input 
                      type="text" 
                      className="form-control font-monospace" 
                      value={formData.code}
                      onChange={e => setFormData({ ...formData, code: e.target.value })}
                      placeholder="e.g. LIBRARIAN (auto-generated if blank)"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold fs-sm text-body">Hierarchy Tier (1 = Highest, 10 = Lowest)</label>
                    <input 
                      type="number" 
                      min="1" 
                      max="10" 
                      className="form-control" 
                      value={formData.priority}
                      onChange={e => setFormData({ ...formData, priority: Number(e.target.value) })}
                    />
                    <div className="form-text fs-xxs">Determines operational precedence and oversight priority.</div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold fs-sm text-body">Role Scope Description</label>
                    <textarea 
                      className="form-control" 
                      rows={3}
                      value={formData.description}
                      onChange={e => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Specify the responsibilities and academic domain of this role..."
                    ></textarea>
                  </div>
                </div>

                <div className="modal-footer border-secondary-subtle">
                  <button type="button" className="btn btn-outline-secondary" onClick={() => setShowAddModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    <i className="ti ti-check me-1"></i>
                    Register Academic Role
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
