import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { useRbac } from '../../context/RbacContext';

export interface MenuItem {
  title: string;
  icon?: string;
  path?: string;
  badge?: { text: string; variant: string };
  children?: MenuItem[];
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toggleSidebarMobile, toggleHoverPin, sidenavSize } = useTheme();
  const { currentUser, logout, activeBranch } = useAuth();
  const { users, roles } = useRbac();
  const [showAuditModal, setShowAuditModal] = useState(false);

  const menuData: MenuCategory[] = [
    {
      category: 'ACCESS CONTROL (RBAC)',
      items: [
        {
          title: 'Users Management',
          icon: 'ti-users',
          path: '/users',
          badge: { text: `${users.length} Staff`, variant: 'success' }
        },
        {
          title: 'Role Governance',
          icon: 'ti-shield-lock',
          path: '/roles',
          badge: { text: `${roles.length} Roles`, variant: 'primary' }
        },
        {
          title: 'Permission Matrix',
          icon: 'ti-lock-access',
          path: '/permissions',
          badge: { text: 'Policy', variant: 'warning' }
        }
      ]
    }
  ];

  const currentRole = roles.find(r => r.id === currentUser?.roleId);

  return (
    <div className="sidenav-menu">
      {/* Brand Logo */}
      <Link to="/users" className="logo d-flex align-items-center px-3 py-3 text-decoration-none">
        <div className="d-flex align-items-center gap-2">
          <div className="bg-primary text-white rounded p-1 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
            <i className="ti ti-school fs-20"></i>
          </div>
          <div className="logo-text">
            <h5 className="mb-0 fw-bold text-body" style={{ letterSpacing: '0.5px' }}>BORNOMALA</h5>
            <span className="fs-xxs text-body-secondary text-uppercase fw-semibold">Academic Monolith</span>
          </div>
        </div>
      </Link>

      {/* Sidebar Hover Menu Toggle Button */}
      <button 
        className="button-on-hover" 
        style={{ display: "block" }} 
        type="button" 
        onClick={toggleHoverPin} 
        title={sidenavSize === "on-hover-active" ? "Unpin Sidebar" : "Pin Sidebar"}
      >
        <span className="btn-on-hover-icon"></span>
      </button>

      {/* Full Sidebar Menu Close Button */}
      <button className="button-close-offcanvas" type="button" onClick={toggleSidebarMobile}>
        <i className="ti ti-menu-4 align-middle"></i>
      </button>

      <SimpleBar className="scrollbar" style={{ maxHeight: 'calc(100% - 70px)' }}>
        {/* User Profile Box */}
        {currentUser && (
          <div className="sidenav-user mx-3 my-2 p-3 rounded bg-body-tertiary border border-secondary-subtle">
            <div className="d-flex align-items-center gap-2">
              <div 
                className="rounded-circle bg-primary text-white fw-bold d-flex align-items-center justify-content-center"
                style={{ width: '38px', height: '38px', fontSize: '13px', flexShrink: 0 }}
              >
                {currentUser.fullName.slice(0, 2).toUpperCase()}
              </div>
              <div className="overflow-hidden">
                <span className="sidenav-user-name fw-bold d-block text-body fs-sm text-truncate">
                  {currentUser.fullName}
                </span>
                <span className="badge bg-primary-subtle text-primary fs-xxs">
                  {currentRole?.name || 'Staff Member'}
                </span>
              </div>
            </div>
            <div className="mt-2 pt-2 border-top border-secondary-subtle d-flex justify-content-between align-items-center">
              <span className="fs-xxs text-body-secondary text-truncate" style={{ maxWidth: '140px' }}>
                <i className="ti ti-building me-1 text-primary"></i>
                {activeBranch.split(' ')[0]}
              </span>
              <button 
                type="button" 
                className="btn btn-link btn-sm p-0 text-danger text-decoration-none fs-xs"
                onClick={() => {
                  logout();
                  navigate('/login');
                }}
                title="Log out"
              >
                <i className="ti ti-logout me-1"></i> Exit
              </button>
            </div>
          </div>
        )}

        {/* Navigation Menu */}
        <ul className="side-nav">
          {menuData.map((sec, idx) => (
            <React.Fragment key={idx}>
              <li className="side-nav-title fs-xxs text-uppercase text-body-secondary fw-bold px-3 pt-3 pb-1">
                {sec.category}
              </li>
              {sec.items.map((item, itemIdx) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={itemIdx} className={`side-nav-item ${isActive ? 'active' : ''}`}>
                    <Link 
                      to={item.path || '/'} 
                      className={`side-nav-link d-flex align-items-center justify-content-between px-3 py-2 ${isActive ? 'active text-primary fw-semibold' : 'text-body'}`}
                    >
                      <div className="d-flex align-items-center gap-2">
                        {item.icon && <i className={`ti ${item.icon} fs-18`}></i>}
                        <span className="fs-sm">{item.title}</span>
                      </div>
                      {item.badge && (
                        <span className={`badge bg-${item.badge.variant}-subtle text-${item.badge.variant} fs-xxs`}>
                          {item.badge.text}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </React.Fragment>
          ))}
        </ul>

        {/* Monolith Migration Audit Banner */}
        <div className="p-3 mt-4">
          <div className="card border-secondary-subtle bg-body-tertiary">
            <div className="card-body p-3">
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="ti ti-database-check fs-20 text-success"></i>
                <h6 className="mb-0 fw-bold text-body fs-xs">Legacy DB Migration</h6>
              </div>
              <p className="fs-xxs text-body-secondary mb-2">
                <code>tblUser</code>, <code>tblUserRole</code>, and <code>tblAction</code> migrated & active in RBAC.
              </p>
              <button 
                type="button" 
                className="btn btn-xs btn-outline-primary w-100 py-1 fs-xxs"
                onClick={() => setShowAuditModal(true)}
              >
                <i className="ti ti-eye me-1"></i> View Audit Log
              </button>
            </div>
          </div>
        </div>
      </SimpleBar>

      {/* Migration Audit Modal */}
      {showAuditModal && (
        <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1060 }}>
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content border-secondary-subtle shadow-lg">
              <div className="modal-header border-secondary-subtle">
                <h5 className="modal-title fw-bold text-body">
                  <i className="ti ti-database me-2 text-success"></i>
                  Bornomala Migration Audit Report
                </h5>
                <button type="button" className="btn-close" onClick={() => setShowAuditModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="alert alert-success d-flex align-items-center py-2 px-3 fs-xs mb-3">
                  <i className="ti ti-check fs-18 me-2"></i>
                  <div>All legacy monolith authorization records are synchronized into reactive memory.</div>
                </div>

                <h6 className="fs-xs fw-bold text-uppercase text-body-secondary mb-2">Source Table Verification</h6>
                <div className="list-group list-group-flush border rounded mb-3">
                  <div className="list-group-item d-flex justify-content-between align-items-center py-2 fs-xs">
                    <div>
                      <strong>MS SQL tblUser:</strong>
                      <span className="text-muted ms-1">Staff & Faculty accounts</span>
                    </div>
                    <span className="badge bg-success-subtle text-success">{users.length} Records</span>
                  </div>
                  <div className="list-group-item d-flex justify-content-between align-items-center py-2 fs-xs">
                    <div>
                      <strong>MS SQL tblUserRole:</strong>
                      <span className="text-muted ms-1">Security profiles</span>
                    </div>
                    <span className="badge bg-primary-subtle text-primary">{roles.length} Roles</span>
                  </div>
                  <div className="list-group-item d-flex justify-content-between align-items-center py-2 fs-xs">
                    <div>
                      <strong>MS SQL tblAction:</strong>
                      <span className="text-muted ms-1">Module permission matrix</span>
                    </div>
                    <span className="badge bg-info-subtle text-info">36 Actions</span>
                  </div>
                </div>

                <h6 className="fs-xs fw-bold text-uppercase text-body-secondary mb-2">Architectural State</h6>
                <ul className="fs-xs text-body-secondary mb-0 ps-3">
                  <li>Phase 1: Pure RBAC Gateway & User Security</li>
                  <li>Branch isolation: Main Campus, Dhanmondi, Uttara, Noakhali</li>
                  <li>No customizer clutter &bull; Native Paces template styling</li>
                </ul>
              </div>
              <div className="modal-footer border-secondary-subtle">
                <button type="button" className="btn btn-sm btn-secondary" onClick={() => setShowAuditModal(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
