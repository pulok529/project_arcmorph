import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { useRbac } from '../../context/RbacContext';

export const Topbar: React.FC = () => {
  const navigate = useNavigate();
  const { toggleSidebarCollapse, toggleTheme, theme } = useTheme();
  const { currentUser, logout, activeBranch, setActiveBranch } = useAuth();
  const { roles } = useRbac();
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBranchOpen, setIsBranchOpen] = useState(false);

  const currentRole = roles.find(r => r.id === currentUser?.roleId);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => console.error(err));
    } else {
      document.exitFullscreen().catch(err => console.error(err));
    }
  };

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDropdownOpen(false);
    logout();
    navigate('/login');
  };

  return (
    <header className="app-topbar">
      <div className="container-fluid topbar-menu">
        <div className="d-flex align-items-center gap-2">
          {/* Sidenav Toggle Button */}
          <button 
            type="button" 
            className="sidenav-toggle-button btn btn-icon"
            onClick={toggleSidebarCollapse}
            title="Toggle Sidebar"
          >
            <i className="ti ti-menu-4 fs-20"></i>
          </button>

          {/* Institutional Badge */}
          <div className="d-none d-md-flex align-items-center gap-2 ms-2">
            <span className="badge bg-primary-subtle text-primary fw-semibold px-2 py-1 fs-xs border border-primary-subtle">
              <i className="ti ti-school me-1"></i> BORNOMALA EMS
            </span>
            <span className="badge bg-body-tertiary text-body-secondary fs-xxs border border-secondary-subtle">
              Phase 1: RBAC System
            </span>
          </div>
        </div>

        {/* Right Controls */}
        <div className="d-flex align-items-center gap-2">
          {/* Campus / Branch Switcher */}
          <div className="topbar-item position-relative">
            <button 
              type="button" 
              className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-2"
              onClick={() => setIsBranchOpen(!isBranchOpen)}
            >
              <i className="ti ti-building text-primary fs-16"></i>
              <span className="fs-xs fw-medium d-none d-sm-inline">{activeBranch}</span>
              <i className="ti ti-chevron-down fs-xxs"></i>
            </button>

            {isBranchOpen && (
              <div 
                className="dropdown-menu dropdown-menu-end show shadow-lg border border-secondary-subtle rounded p-2"
                style={{ position: 'absolute', top: 'calc(100% + 8px)', right: 0, minWidth: '240px', zIndex: 1050 }}
              >
                <div className="px-2 py-1 text-uppercase fs-xxs fw-bold text-body-secondary">Switch Institutional Campus</div>
                <button 
                  type="button" 
                  className={`dropdown-item rounded py-2 d-flex align-items-center gap-2 fs-xs ${activeBranch === 'Main Campus (Dania)' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveBranch('Main Campus (Dania)');
                    setIsBranchOpen(false);
                  }}
                >
                  <i className="ti ti-building-community"></i> Main Campus (Dania)
                </button>
                <button 
                  type="button" 
                  className={`dropdown-item rounded py-2 d-flex align-items-center gap-2 fs-xs ${activeBranch === 'Dhanmondi Campus' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveBranch('Dhanmondi Campus');
                    setIsBranchOpen(false);
                  }}
                >
                  <i className="ti ti-building"></i> Dhanmondi Campus
                </button>
                <button 
                  type="button" 
                  className={`dropdown-item rounded py-2 d-flex align-items-center gap-2 fs-xs ${activeBranch === 'Uttara Campus' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveBranch('Uttara Campus');
                    setIsBranchOpen(false);
                  }}
                >
                  <i className="ti ti-building"></i> Uttara Model Campus
                </button>
                <button 
                  type="button" 
                  className={`dropdown-item rounded py-2 d-flex align-items-center gap-2 fs-xs ${activeBranch === 'Noakhali Regional Branch' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveBranch('Noakhali Regional Branch');
                    setIsBranchOpen(false);
                  }}
                >
                  <i className="ti ti-building-bank"></i> Noakhali Regional Branch
                </button>
              </div>
            )}
          </div>

          {/* Theme Mode Toggle (Light / Dark) */}
          <div className="topbar-item">
            <button 
              type="button" 
              className="topbar-link"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              <i className={`ti ${theme === 'dark' ? 'ti-sun text-warning' : 'ti-moon'} fs-20`}></i>
            </button>
          </div>

          {/* Fullscreen Toggler */}
          <div className="topbar-item d-none d-md-flex">
            <button 
              type="button" 
              className="topbar-link"
              onClick={toggleFullscreen}
              title="Fullscreen Mode"
            >
              <i className="ti ti-maximize fs-20"></i>
            </button>
          </div>

          {/* User Profile Dropdown */}
          <div className="topbar-item nav-user position-relative">
            <button 
              type="button" 
              className="topbar-link dropdown-toggle drop-arrow-none px-2 d-flex align-items-center gap-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div 
                className="rounded-circle bg-primary text-white fw-bold d-flex align-items-center justify-content-center"
                style={{ width: '32px', height: '32px', fontSize: '12px' }}
              >
                {currentUser ? currentUser.fullName.slice(0, 2).toUpperCase() : 'AD'}
              </div>
              <div className="d-none d-md-block text-start">
                <span className="fw-bold d-block fs-xs text-body">
                  {currentUser ? currentUser.fullName : 'Guest'}
                </span>
                <span className="fs-xxs fw-semibold text-body-secondary">
                  {currentRole ? currentRole.name : 'Visitor'}
                </span>
              </div>
              <i className="ti ti-chevron-down fs-xs d-none d-md-inline text-body-secondary"></i>
            </button>

            {isDropdownOpen && (
              <div 
                className="dropdown-menu dropdown-menu-end show shadow-lg border border-secondary-subtle rounded p-2"
                style={{ position: 'absolute', top: 'calc(100% + 12px)', right: 0, zIndex: 1050, minWidth: '220px' }}
              >
                <div className="px-3 py-2 border-bottom border-secondary-subtle">
                  <h6 className="mb-0 fw-bold text-body fs-sm">{currentUser?.fullName}</h6>
                  <span className="text-body-secondary fs-xs d-block">{currentUser?.email}</span>
                  <span className="badge bg-primary-subtle text-primary fs-xxs mt-1">
                    {currentRole ? currentRole.name : 'Academic Staff'}
                  </span>
                </div>
                <div className="px-3 py-2 border-bottom border-secondary-subtle">
                  <span className="fs-xxs text-body-secondary d-block">Campus:</span>
                  <span className="fs-xs fw-medium text-body">{currentUser?.branch}</span>
                </div>
                <Link to="/users" className="dropdown-item py-2 fs-xs rounded" onClick={() => setIsDropdownOpen(false)}>
                  <i className="ti ti-users me-2 text-primary"></i> Staff Management
                </Link>
                <Link to="/roles" className="dropdown-item py-2 fs-xs rounded" onClick={() => setIsDropdownOpen(false)}>
                  <i className="ti ti-shield-lock me-2 text-primary"></i> Role Governance
                </Link>
                <Link to="/permissions" className="dropdown-item py-2 fs-xs rounded" onClick={() => setIsDropdownOpen(false)}>
                  <i className="ti ti-lock-access me-2 text-primary"></i> Permission Matrix
                </Link>
                <div className="dropdown-divider my-1"></div>
                <button 
                  type="button" 
                  className="dropdown-item py-2 text-danger fs-xs rounded d-flex align-items-center"
                  onClick={handleLogout}
                >
                  <i className="ti ti-logout me-2"></i> Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
