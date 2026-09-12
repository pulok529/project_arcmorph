import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

export const Topbar: React.FC = () => {
  const { toggleSidebarCollapse, toggleTheme, toggleCustomizer, toggleMonochrome, isMonochrome } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isAppsOpen, setIsAppsOpen] = useState(false);
  const [isAppsGridOpen, setIsAppsGridOpen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => console.error(err));
    } else {
      document.exitFullscreen().catch(err => console.error(err));
    }
  };

  return (
    <header className="app-topbar">
      <div className="container-fluid topbar-menu">
        <div className="d-flex align-items-center gap-2">
          {/* Topbar Brand Logo (for horizontal/compact mode) */}
          <div className="logo-topbar d-none">
            <Link to="/" className="logo-light">
              <span className="logo-lg"><img src="/assets/images/logo.png" alt="logo" /></span>
              <span className="logo-sm"><img src="/assets/images/logo-sm.png" alt="small logo" /></span>
            </Link>
            <Link to="/" className="logo-dark">
              <span className="logo-lg"><img src="/assets/images/logo-black.png" alt="dark logo" /></span>
              <span className="logo-sm"><img src="/assets/images/logo-sm.png" alt="small logo" /></span>
            </Link>
          </div>

          {/* Sidenav Toggle Button */}
          <button 
            type="button" 
            className="sidenav-toggle-button btn btn-icon"
            onClick={toggleSidebarCollapse}
            title="Toggle Sidebar"
          >
            <i className="ti ti-menu-4 fs-20"></i>
          </button>

          {/* Quick Search - Rounded Pill */}
          <div className="app-search d-none d-xl-flex" id="search-box-rounded">
            <div className="position-relative">
              <input type="search" className="form-control rounded-pill topbar-search" placeholder="Quick Search..." />
              <i className="ti ti-search app-search-icon text-muted"></i>
            </div>
          </div>

          {/* Mega Menu Dropdown */}
          <div className="topbar-item d-none d-md-flex position-relative" id="megamenu-columns">
            <button 
              type="button" 
              className="topbar-link btn fw-medium btn-link dropdown-toggle drop-arrow-none px-2 d-flex align-items-center"
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            >
              Mega Menu <i className="ti ti-chevron-down ms-1 fs-12"></i>
            </button>
            {isMegaMenuOpen && (
              <div 
                className="dropdown-menu dropdown-menu-xxl show p-3 shadow-lg border rounded"
                style={{ position: 'absolute', top: 'calc(100% + 12px)', left: 0, width: '600px', zIndex: 1050 }}
              >
                <div className="row g-3">
                  <div className="col-4 border-end">
                    <h6 className="dropdown-header px-0 text-uppercase fw-bold fs-xs text-primary">Dashboards</h6>
                    <Link to="/" className="dropdown-item py-1 px-0 fs-sm" onClick={() => setIsMegaMenuOpen(false)}>Analytics Dashboard</Link>
                    <Link to="/" className="dropdown-item py-1 px-0 fs-sm" onClick={() => setIsMegaMenuOpen(false)}>Ecommerce Dashboard</Link>
                    <Link to="/pages/empty" className="dropdown-item py-1 px-0 fs-sm" onClick={() => setIsMegaMenuOpen(false)}>CRM Dashboard</Link>
                  </div>
                  <div className="col-4 border-end">
                    <h6 className="dropdown-header px-0 text-uppercase fw-bold fs-xs text-primary">Applications</h6>
                    <Link to="/pages/empty" className="dropdown-item py-1 px-0 fs-sm" onClick={() => setIsMegaMenuOpen(false)}>Chat Messenger</Link>
                    <Link to="/pages/empty" className="dropdown-item py-1 px-0 fs-sm" onClick={() => setIsMegaMenuOpen(false)}>Projects Hub</Link>
                    <Link to="/plugins/sweet-alerts" className="dropdown-item py-1 px-0 fs-sm" onClick={() => setIsMegaMenuOpen(false)}>SweetAlerts Plugin</Link>
                  </div>
                  <div className="col-4">
                    <h6 className="dropdown-header px-0 text-uppercase fw-bold fs-xs text-primary">Layouts & Auth</h6>
                    <Link to="/auth/login" className="dropdown-item py-1 px-0 fs-sm" onClick={() => setIsMegaMenuOpen(false)}>Sign In (Basic)</Link>
                    <Link to="/layouts/boxed" className="dropdown-item py-1 px-0 fs-sm" onClick={() => setIsMegaMenuOpen(false)}>Boxed Layout</Link>
                    <Link to="/pages/empty" className="dropdown-item py-1 px-0 fs-sm" onClick={() => setIsMegaMenuOpen(false)}>Starter Base</Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Apps Dropdown */}
          <div className="topbar-item d-none d-md-flex position-relative" id="apps-dropdown">
            <button 
              type="button" 
              className="topbar-link btn fw-medium btn-link dropdown-toggle drop-arrow-none px-2 d-flex align-items-center"
              onClick={() => setIsAppsOpen(!isAppsOpen)}
            >
              Apps <i className="ti ti-chevron-down ms-1 fs-12"></i>
            </button>
            {isAppsOpen && (
              <div 
                className="dropdown-menu show shadow-lg border rounded p-2"
                style={{ position: 'absolute', top: 'calc(100% + 12px)', left: 0, minWidth: '180px', zIndex: 1050 }}
              >
                <Link to="/pages/empty" className="dropdown-item py-2" onClick={() => setIsAppsOpen(false)}><i className="ti ti-message me-2"></i> Chat App</Link>
                <Link to="/pages/empty" className="dropdown-item py-2" onClick={() => setIsAppsOpen(false)}><i className="ti ti-briefcase me-2"></i> Projects</Link>
                <Link to="/pages/empty" className="dropdown-item py-2" onClick={() => setIsAppsOpen(false)}><i className="ti ti-checkbox me-2"></i> Tasks</Link>
                <Link to="/pages/empty" className="dropdown-item py-2" onClick={() => setIsAppsOpen(false)}><i className="ti ti-mail me-2"></i> Email</Link>
              </div>
            )}
          </div>
        </div>

        {/* Right Actions Cluster */}
        <div className="d-flex align-items-center gap-2">
          {/* 1. Theme Dropdown (Sun/Moon) */}
          <div className="topbar-item" id="theme-dropdown">
            <button 
              type="button" 
              className="topbar-link"
              id="light-dark-mode"
              onClick={toggleTheme}
              title="Toggle Theme Mode"
            >
              <i className="ti ti-sun topbar-link-icon fs-20 light-mode"></i>
              <i className="ti ti-moon topbar-link-icon fs-20 dark-mode"></i>
            </button>
          </div>

          {/* 2. Apps 3x3 Grid Launcher */}
          <div className="topbar-item position-relative" id="apps-dropdown-grid">
            <button 
              type="button" 
              className="topbar-link"
              onClick={() => setIsAppsGridOpen(!isAppsGridOpen)}
              title="Application Launcher"
            >
              <i className="ti ti-apps topbar-link-icon fs-20"></i>
            </button>
            {isAppsGridOpen && (
              <div 
                className="dropdown-menu dropdown-menu-end show p-3 shadow-lg border rounded"
                style={{ position: 'absolute', top: 'calc(100% + 16px)', right: 0, width: '280px', zIndex: 1050 }}
              >
                <div className="row g-2 text-center">
                  <div className="col-4">
                    <div className="p-2 border rounded hover-bg-light cursor-pointer">
                      <i className="ti ti-brand-slack fs-24 text-danger d-block mb-1"></i>
                      <span className="fs-xs fw-semibold">Slack</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="p-2 border rounded hover-bg-light cursor-pointer">
                      <i className="ti ti-brand-github fs-24 text-dark d-block mb-1"></i>
                      <span className="fs-xs fw-semibold">GitHub</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="p-2 border rounded hover-bg-light cursor-pointer">
                      <i className="ti ti-brand-dribbble fs-24 text-pink d-block mb-1"></i>
                      <span className="fs-xs fw-semibold">Dribbble</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="p-2 border rounded hover-bg-light cursor-pointer">
                      <i className="ti ti-brand-dropbox fs-24 text-primary d-block mb-1"></i>
                      <span className="fs-xs fw-semibold">Dropbox</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="p-2 border rounded hover-bg-light cursor-pointer">
                      <i className="ti ti-brand-google fs-24 text-warning d-block mb-1"></i>
                      <span className="fs-xs fw-semibold">G Suite</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="p-2 border rounded hover-bg-light cursor-pointer">
                      <i className="ti ti-brand-bitbucket fs-24 text-info d-block mb-1"></i>
                      <span className="fs-xs fw-semibold">Bitbucket</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. Notification Bell with Animated Ring */}
          <div className="topbar-item position-relative" id="notification-dropdown-people">
            <button 
              type="button" 
              className="topbar-link position-relative"
              onClick={() => setIsNotifOpen(!isNotifOpen)}
              title="Notifications"
            >
              <i className="ti ti-bell topbar-link-icon animate-ring fs-20"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '10px' }}>5</span>
            </button>
            {isNotifOpen && (
              <div 
                className="dropdown-menu dropdown-menu-end show p-3 shadow-lg border rounded"
                style={{ position: 'absolute', top: 'calc(100% + 16px)', right: 0, width: '320px', zIndex: 1050 }}
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="m-0 fw-bold">Notifications</h6>
                  <span className="badge bg-success-subtle text-success">5 New</span>
                </div>
                <div className="py-2 border-bottom">
                  <p className="mb-0 fs-xs fw-semibold">New subscriber registered</p>
                  <span className="text-muted fs-xs">2 minutes ago</span>
                </div>
                <div className="py-2 border-bottom">
                  <p className="mb-0 fs-xs fw-semibold">System update completed</p>
                  <span className="text-muted fs-xs">1 hour ago</span>
                </div>
                <button className="btn btn-sm btn-link w-100 text-center mt-2 p-0" onClick={() => setIsNotifOpen(false)}>Close</button>
              </div>
            )}
          </div>

          {/* 4. Fullscreen Toggler */}
          <div className="topbar-item d-none d-md-flex" id="fullscreen-toggler">
            <button 
              type="button" 
              className="topbar-link"
              onClick={toggleFullscreen}
              title="Fullscreen Mode"
            >
              <i className="ti ti-maximize topbar-link-icon fs-20"></i>
            </button>
          </div>

          {/* 5. Monochrome Paint Mode Toggler */}
          <div className="topbar-item" id="monochrome-toggler">
            <button 
              type="button" 
              id="monochrome-mode"
              className={`topbar-link ${isMonochrome ? 'text-primary' : ''}`}
              onClick={toggleMonochrome}
              title="Monochrome Grayscale Mode"
            >
              <i className="ti ti-palette topbar-link-icon fs-20"></i>
            </button>
          </div>

          {/* 6. Admin Customizer Button */}
          <div className="topbar-item">
            <button 
              type="button" 
              className="topbar-link btn-theme-setting"
              onClick={toggleCustomizer}
              title="Admin Customizer"
            >
              <i className="ti ti-settings topbar-link-icon fs-20"></i>
            </button>
          </div>

          {/* 7. Language Selector */}
          <div className="topbar-item position-relative" id="language-selector-rounded">
            <button 
              type="button" 
              className="topbar-link d-flex align-items-center gap-1"
              onClick={() => setIsLangOpen(!isLangOpen)}
            >
              <img src="/assets/images/flags/us.svg" alt="flag" className="rounded" style={{ width: 18, height: 14 }} />
              <span className="fw-bold fs-xs d-none d-sm-inline">EN</span>
            </button>
            {isLangOpen && (
              <div 
                className="dropdown-menu dropdown-menu-end show shadow-lg border rounded"
                style={{ position: 'absolute', top: 'calc(100% + 16px)', right: 0, zIndex: 1050 }}
              >
                <button className="dropdown-item d-flex align-items-center gap-2" onClick={() => setIsLangOpen(false)}>
                  <img src="/assets/images/flags/us.svg" alt="en" style={{ width: 18 }} /> English
                </button>
                <button className="dropdown-item d-flex align-items-center gap-2" onClick={() => setIsLangOpen(false)}>
                  <img src="/assets/images/flags/germany.svg" alt="de" style={{ width: 18 }} /> Deutsch
                </button>
              </div>
            )}
          </div>

          {/* 8. User Profile Dropdown */}
          <div className="topbar-item nav-user position-relative" id="user-dropdown-detailed">
            <button 
              type="button" 
              id="topbar-user-dropdown"
              className="topbar-link dropdown-toggle drop-arrow-none px-2 d-flex align-items-center gap-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img src="/assets/images/users/user-1.jpg" alt="user" className="rounded-circle avatar-xs" style={{ width: 32, height: 32 }} />
              <div className="d-none d-md-block text-start">
                <span className="sidenav-user-name fw-bold d-block fs-xs">David Dev</span>
                <span className="fs-11 fw-semibold text-muted">Admin Head</span>
              </div>
              <i className="ti ti-chevron-down fs-xs d-none d-md-inline"></i>
            </button>

            {isDropdownOpen && (
              <div 
                id="topbar-user-menu"
                className="dropdown-menu dropdown-menu-end show shadow-lg border rounded"
                style={{ position: 'absolute', top: 'calc(100% + 16px)', right: 0, zIndex: 1050, minWidth: 180 }}
              >
                <div className="px-3 py-2 border-bottom">
                  <h6 className="mb-0 fw-bold">David Dev</h6>
                  <span className="text-muted fs-xs">david@example.com</span>
                </div>
                <a href="#profile" className="dropdown-item py-2" onClick={(e) => { e.preventDefault(); setIsDropdownOpen(false); }}>
                  <i className="ti ti-user me-2 text-muted"></i> My Profile
                </a>
                <a href="#settings" className="dropdown-item py-2" onClick={(e) => { e.preventDefault(); setIsDropdownOpen(false); }}>
                  <i className="ti ti-settings me-2 text-muted"></i> Settings
                </a>
                <div className="dropdown-divider my-1"></div>
                <a href="#logout" className="dropdown-item py-2 text-danger" onClick={(e) => { e.preventDefault(); setIsDropdownOpen(false); }}>
                  <i className="ti ti-logout me-2"></i> Log Out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
