import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useRbac, type SystemModule, type ActionPermissions } from '../../context/RbacContext';

const ACTIONS: (keyof ActionPermissions)[] = [
  'canView',
  'canCreate',
  'canEdit',
  'canDelete',
  'canExport',
  'canApprove'
];

export const PermissionsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { roles, modules, permissions, updateRolePermission, resetToLegacyMigration } = useRbac();

  // Active role selection
  const roleParam = searchParams.get('role');
  const [selectedRoleId, setSelectedRoleId] = useState<string>(() => {
    if (roleParam && roles.some(r => r.id === roleParam)) {
      return roleParam;
    }
    return roles[0]?.id || 'role_super_admin';
  });

  useEffect(() => {
    if (roleParam && roles.some(r => r.id === roleParam)) {
      setSelectedRoleId(roleParam);
    }
  }, [roleParam, roles]);

  const handleSelectRole = (roleId: string) => {
    setSelectedRoleId(roleId);
    setSearchParams({ role: roleId });
  };

  const selectedRole = roles.find(r => r.id === selectedRoleId) || roles[0];
  const rolePermissions = permissions[selectedRoleId] || {};

  const handleToggle = (
    moduleKey: SystemModule, 
    action: keyof ActionPermissions
  ) => {
    const modulePerm = rolePermissions[moduleKey];
    const currentValue = modulePerm ? !!modulePerm[action] : false;
    updateRolePermission(selectedRoleId, moduleKey, action, !currentValue);
  };

  const handleSetAllForRole = (value: boolean) => {
    modules.forEach(mod => {
      ACTIONS.forEach(act => {
        updateRolePermission(selectedRoleId, mod, act, value);
      });
    });
  };

  // Calculate stats for current role
  const totalPossible = modules.length * ACTIONS.length;
  const grantedCount = modules.reduce((acc, mod) => {
    const p = rolePermissions[mod];
    if (!p) return acc;
    return acc + (p.canView ? 1 : 0) + (p.canCreate ? 1 : 0) + (p.canEdit ? 1 : 0) + 
      (p.canDelete ? 1 : 0) + (p.canExport ? 1 : 0) + (p.canApprove ? 1 : 0);
  }, 0);
  const grantedPercentage = totalPossible > 0 ? Math.round((grantedCount / totalPossible) * 100) : 0;

  const getModuleIcon = (module: SystemModule) => {
    switch (module) {
      case 'Admissions': return 'ti-user-plus text-primary';
      case 'Academics': return 'ti-school text-info';
      case 'Examination': return 'ti-certificate text-success';
      case 'Accounts': return 'ti-cash text-warning';
      case 'HRM': return 'ti-id text-purple';
      case 'Administration': return 'ti-settings text-danger';
      default: return 'ti-folder text-secondary';
    }
  };

  const getModuleDescription = (module: SystemModule) => {
    switch (module) {
      case 'Admissions': return 'Student intake, online registration, document verification, enrollment numbers.';
      case 'Academics': return 'Class schedules, syllabus distribution, subject assignment, teacher routines.';
      case 'Examination': return 'Term examination schedules, marksheet entry, grading algorithms, report cards.';
      case 'Accounts': return 'Tuition fee collection, institutional ledger, payroll vouchers, financial reports.';
      case 'HRM': return 'Teacher & staff profiles, attendance tracking, leave applications, designations.';
      case 'Administration': return 'Campus branches, system settings, user credentials, database backup & RBAC.';
      default: return 'Module permissions and operational action authorization.';
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
              <li className="breadcrumb-item active text-primary fw-semibold" aria-current="page">Permission Matrix</li>
            </ol>
          </nav>
          <h4 className="fw-bold text-body mb-0">Granular Permission & Action Matrix</h4>
          <span className="fs-xs text-body-secondary">
            Synchronized with legacy MS SQL <code>tblAction</code> table &bull; Real-time Policy Enforcement
          </span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <button 
            type="button" 
            className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1"
            onClick={() => {
              if (window.confirm('Reset all roles and permissions back to the initial monolith migration defaults?')) {
                resetToLegacyMigration();
              }
            }}
          >
            <i className="ti ti-refresh fs-14"></i>
            <span>Reset Monolith Defaults</span>
          </button>
        </div>
      </div>

      {/* Role Selection Tabs */}
      <div className="card border-secondary-subtle mb-4">
        <div className="card-body p-3">
          <span className="fs-xs text-uppercase fw-bold text-body-secondary d-block mb-2">
            <i className="ti ti-user-check me-1"></i> Select Role to Configure:
          </span>
          <div className="d-flex flex-wrap gap-2">
            {roles.map(r => {
              const isSelected = r.id === selectedRoleId;
              return (
                <button
                  key={r.id}
                  type="button"
                  className={`btn btn-sm ${isSelected ? 'btn-primary' : 'btn-outline-secondary'} d-flex align-items-center gap-2`}
                  onClick={() => handleSelectRole(r.id)}
                >
                  <i className={`ti ${r.isSystem ? 'ti-shield' : 'ti-adjustments'} fs-14`}></i>
                  <span>{r.name}</span>
                  {r.id === 'role_super_admin' && (
                    <span className="badge bg-warning text-dark fs-xxs">Bypass</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Role Overview Banner */}
      {selectedRole && (
        <div className="card border-secondary-subtle mb-4">
          <div className="card-body">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
              <div>
                <div className="d-flex align-items-center gap-2 mb-1">
                  <h5 className="mb-0 fw-bold text-body">{selectedRole.name}</h5>
                  <span className="badge bg-primary-subtle text-primary fs-xs font-monospace">#{selectedRole.code}</span>
                  <span className="badge bg-secondary-subtle text-secondary fs-xs">Hierarchy: Tier {selectedRole.priority}</span>
                </div>
                <p className="text-body-secondary fs-sm mb-0">{selectedRole.description}</p>
                {selectedRole.id === 'role_super_admin' && (
                  <div className="alert alert-warning py-1 px-2 fs-xs d-inline-flex align-items-center mt-2 mb-0">
                    <i className="ti ti-alert-triangle me-1"></i>
                    <strong>Super Administrator:</strong> Has unrestricted universal override access across all modules.
                  </div>
                )}
              </div>

              {/* Coverage Progress */}
              <div className="d-flex flex-column align-items-md-end" style={{ minWidth: '220px' }}>
                <div className="d-flex justify-content-between w-100 fs-xs mb-1">
                  <span className="text-body-secondary">Security Authorization Coverage:</span>
                  <span className="fw-bold text-body">{grantedPercentage}% ({grantedCount}/{totalPossible})</span>
                </div>
                <div className="progress w-100" style={{ height: '8px' }}>
                  <div 
                    className={`progress-bar ${grantedPercentage > 75 ? 'bg-danger' : grantedPercentage > 40 ? 'bg-primary' : 'bg-info'}`}
                    role="progressbar" 
                    style={{ width: `${grantedPercentage}%` }}
                  ></div>
                </div>
                <div className="d-flex gap-2 mt-2">
                  <button 
                    type="button" 
                    className="btn btn-outline-success btn-sm py-0 px-2 fs-xxs"
                    onClick={() => handleSetAllForRole(true)}
                  >
                    Grant All
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-outline-danger btn-sm py-0 px-2 fs-xxs"
                    onClick={() => handleSetAllForRole(false)}
                  >
                    Revoke All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Permissions Table Matrix */}
      <div className="card border-secondary-subtle">
        <div className="card-header border-secondary-subtle bg-body-tertiary d-flex justify-content-between align-items-center py-3">
          <div>
            <h6 className="mb-0 fw-bold text-body">
              <i className="ti ti-table me-2 text-primary"></i>
              Module Action Permission Matrix
            </h6>
            <span className="fs-xs text-body-secondary">Changes persist automatically to reactive state and local storage.</span>
          </div>
          <span className="badge bg-success-subtle text-success fs-xs">
            <i className="ti ti-check me-1"></i> Auto-Save Enabled
          </span>
        </div>

        <div className="table-responsive">
          <table className="table table-hover table-centered mb-0 align-middle">
            <thead className="bg-body-tertiary">
              <tr className="text-body-secondary fs-xs text-uppercase">
                <th style={{ width: '28%' }}>Academic Module</th>
                <th className="text-center" style={{ width: '12%' }}>
                  <div>View</div>
                  <span className="fs-xxs text-muted text-lowercase">(read)</span>
                </th>
                <th className="text-center" style={{ width: '12%' }}>
                  <div>Create</div>
                  <span className="fs-xxs text-muted text-lowercase">(write)</span>
                </th>
                <th className="text-center" style={{ width: '12%' }}>
                  <div>Edit</div>
                  <span className="fs-xxs text-muted text-lowercase">(modify)</span>
                </th>
                <th className="text-center" style={{ width: '12%' }}>
                  <div>Delete</div>
                  <span className="fs-xxs text-muted text-lowercase">(remove)</span>
                </th>
                <th className="text-center" style={{ width: '12%' }}>
                  <div>Export</div>
                  <span className="fs-xxs text-muted text-lowercase">(reports/csv)</span>
                </th>
                <th className="text-center" style={{ width: '12%' }}>
                  <div>Approve</div>
                  <span className="fs-xxs text-muted text-lowercase">(authorize)</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {modules.map((mod) => {
                const perm = rolePermissions[mod] || {
                  canView: false,
                  canCreate: false,
                  canEdit: false,
                  canDelete: false,
                  canExport: false,
                  canApprove: false
                };

                return (
                  <tr key={mod}>
                    <td>
                      <div className="d-flex align-items-start gap-2">
                        <div 
                          className="rounded bg-body-tertiary border border-secondary-subtle d-flex align-items-center justify-content-center mt-1"
                          style={{ width: '32px', height: '32px', flexShrink: 0 }}
                        >
                          <i className={`ti ${getModuleIcon(mod)} fs-18`}></i>
                        </div>
                        <div>
                          <h6 className="mb-0 fw-bold text-body fs-sm">{mod}</h6>
                          <span className="fs-xs text-body-secondary">{getModuleDescription(mod)}</span>
                        </div>
                      </div>
                    </td>

                    {/* View Toggle */}
                    <td className="text-center">
                      <div className="form-check form-switch d-flex justify-content-center mb-0">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          checked={!!perm.canView}
                          onChange={() => handleToggle(mod, 'canView')}
                        />
                      </div>
                    </td>

                    {/* Create Toggle */}
                    <td className="text-center">
                      <div className="form-check form-switch d-flex justify-content-center mb-0">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          checked={!!perm.canCreate}
                          onChange={() => handleToggle(mod, 'canCreate')}
                        />
                      </div>
                    </td>

                    {/* Edit Toggle */}
                    <td className="text-center">
                      <div className="form-check form-switch d-flex justify-content-center mb-0">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          checked={!!perm.canEdit}
                          onChange={() => handleToggle(mod, 'canEdit')}
                        />
                      </div>
                    </td>

                    {/* Delete Toggle */}
                    <td className="text-center">
                      <div className="form-check form-switch d-flex justify-content-center mb-0">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          checked={!!perm.canDelete}
                          onChange={() => handleToggle(mod, 'canDelete')}
                        />
                      </div>
                    </td>

                    {/* Export Toggle */}
                    <td className="text-center">
                      <div className="form-check form-switch d-flex justify-content-center mb-0">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          checked={!!perm.canExport}
                          onChange={() => handleToggle(mod, 'canExport')}
                        />
                      </div>
                    </td>

                    {/* Approve Toggle */}
                    <td className="text-center">
                      <div className="form-check form-switch d-flex justify-content-center mb-0">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          checked={!!perm.canApprove}
                          onChange={() => handleToggle(mod, 'canApprove')}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="card-footer bg-body-tertiary border-secondary-subtle d-flex justify-content-between align-items-center py-2">
          <span className="fs-xs text-body-secondary">
            <i className="ti ti-info-circle me-1 text-primary"></i>
            Permissions are enforced at route and operational button levels across the Bornomala Academic Monolith.
          </span>
          <span className="fs-xs text-body-secondary">
            Role: <strong>{selectedRole?.name}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
