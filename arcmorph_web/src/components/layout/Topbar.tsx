import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { useTasks, PipelineTask } from '../../context/TaskContext';
import { useSessionLock } from '../../context/SessionLockContext';
import { playCyberChime } from '../../utils/audioChime';
import Swal from 'sweetalert2';

export const Topbar: React.FC = () => {
  const { toggleSidebarCollapse, toggleTheme, toggleCustomizer, toggleMonochrome, isMonochrome } = useTheme();
  const { user, logout, isSuperAdmin } = useAuth();
  const { hasActiveTasks, activeTasks, saveAndCheckpointAll, stopAndQuarantineAll } = useTasks();
  const { lockSession, clientIp } = useSessionLock();
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'EN' | 'BN' | 'IT'>('EN');
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isAppsGridOpen, setIsAppsGridOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => console.error(err));
    } else {
      document.exitFullscreen().catch(err => console.error(err));
    }
  };

  const handleQuickSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleBellClick = () => {
    playCyberChime();
    setIsNotifOpen(!isNotifOpen);
  };

  const handleLockScreen = () => {
    setIsDropdownOpen(false);
    lockSession();
    navigate('/lockscreen');
  };

  const handleLogoutClick = () => {
    setIsDropdownOpen(false);

    if (hasActiveTasks) {
      // 3-Choice SweetAlert2 Interceptor for running background tasks
      const taskList = activeTasks
        .map((t: PipelineTask) => `<li style="text-align: left; margin-bottom: 6px;"><strong>${t.title}</strong><br><span style="color: #94a3b8; font-size: 12px;">Step: ${t.currentStep} (Est: ${t.estimatedRemaining})</span></li>`)
        .join('');

      Swal.fire({
        title: 'Active Work In Progress!',
        html: `
          <div style="font-size: 13px; color: #cbd5e1; margin-bottom: 12px;">
            You have <strong>${activeTasks.length}</strong> active modernization pipeline(s) currently executing:
          </div>
          <ul style="max-height: 140px; overflow-y: auto; background: #080c14; padding: 12px 20px; border-radius: 8px; border: 1px solid #1e293b; color: #38bdf8; font-family: monospace;">
            ${taskList}
          </ul>
          <div style="font-size: 12px; color: #94a3b8; margin-top: 10px;">
            How would you like to handle active background subagents?
          </div>
        `,
        icon: 'warning',
        showCancelButton: true,
        showDenyButton: true,
        confirmButtonText: '<i class="ti ti-device-floppy"></i> Save & Logout',
        denyButtonText: '<i class="ti ti-player-stop"></i> Stop & Logout (15-Day Quarantine)',
        cancelButtonText: '<i class="ti ti-arrow-back-up"></i> Return to Console',
        confirmButtonColor: '#10b981',
        denyButtonColor: '#ef4444',
        cancelButtonColor: '#64748b',
        background: '#0b0f19',
        color: '#f8fafc',
        width: '600px'
      }).then((res) => {
        if (res.isConfirmed) {
          // Save & Logout
          saveAndCheckpointAll();
          logout();
          navigate('/login');
          Swal.fire({
            title: 'Session Checkpointed',
            text: 'All pipelines saved. You can resume exactly where you left off upon logging in.',
            icon: 'success',
            background: '#0b0f19',
            color: '#f8fafc'
          });
        } else if (res.isDenied) {
          // Stop & Logout (Quarantine for 15 days)
          stopAndQuarantineAll();
          logout();
          navigate('/login');
          Swal.fire({
            title: 'Pipelines Quarantined',
            text: 'Tasks halted and archived to temp_quarantine for 15 days (Restorable).',
            icon: 'info',
            background: '#0b0f19',
            color: '#f8fafc'
          });
        }
      });
    } else {
      logout();
      navigate('/login');
    }
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

          {/* Quick Search - Rounded Pill */}
          <div className="app-search d-none d-xl-flex" id="search-box-rounded">
            <form onSubmit={handleQuickSearchSubmit} className="position-relative">
              <input
                type="search"
                className="form-control rounded-pill topbar-search"
                placeholder="Search code, tables, AST..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <i className="ti ti-search app-search-icon text-muted cursor-pointer" onClick={handleQuickSearchSubmit}></i>
            </form>
          </div>

          {/* Active Client IP & Rig Telemetry */}
          <div className="d-none d-lg-flex align-items-center gap-2 ms-2 px-2 py-1 rounded bg-dark border border-secondary fs-11 text-muted font-monospace">
            <span className="badge bg-success-subtle text-success p-1 rounded-circle" style={{ width: 8, height: 8 }}></span>
            <span>Host: <strong className="text-cyan">{clientIp}</strong></span>
            <span>•</span>
            <span>Arch: <strong className="text-light">x86_64</strong></span>
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
              title="Toggle Theme Mode (Default: Cyber Dark)"
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
              title="ArcMorph Tool Suite"
            >
              <i className="ti ti-apps topbar-link-icon fs-20"></i>
            </button>
            {isAppsGridOpen && (
              <div 
                className="dropdown-menu dropdown-menu-end show p-3 shadow-lg border rounded"
                style={{ position: 'absolute', top: 'calc(100% + 16px)', right: 0, width: '310px', zIndex: 1050, background: '#0b0f19', borderColor: 'rgba(0, 242, 254, 0.3)' }}
              >
                <div className="d-flex justify-content-between align-items-center mb-2 px-1">
                  <h6 className="m-0 fw-bold text-white fs-12 text-uppercase">ArcMorph Core Apps</h6>
                  <span className="badge bg-cyan text-dark fs-10 fw-bold">v2.4</span>
                </div>
                <div className="row g-2 text-center">
                  <div className="col-4">
                    <Link to="/graph" className="p-2 border border-secondary rounded d-block text-decoration-none hover-cyan" onClick={() => setIsAppsGridOpen(false)}>
                      <i className="ti ti-chart-dots-3 fs-24 text-cyan d-block mb-1"></i>
                      <span className="fs-11 fw-semibold text-light">3D Graph</span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link to="/ocr-studio" className="p-2 border border-secondary rounded d-block text-decoration-none hover-cyan" onClick={() => setIsAppsGridOpen(false)}>
                      <i className="ti ti-scan fs-24 text-warning d-block mb-1"></i>
                      <span className="fs-11 fw-semibold text-light">OCR Studio</span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link to="/terminal" className="p-2 border border-secondary rounded d-block text-decoration-none hover-cyan" onClick={() => setIsAppsGridOpen(false)}>
                      <i className="ti ti-terminal fs-24 text-success d-block mb-1"></i>
                      <span className="fs-11 fw-semibold text-light">Terminal</span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link to="/morph-hub" className="p-2 border border-secondary rounded d-block text-decoration-none hover-cyan" onClick={() => setIsAppsGridOpen(false)}>
                      <i className="ti ti-refresh fs-24 text-info d-block mb-1"></i>
                      <span className="fs-11 fw-semibold text-light">Morph Hub</span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link to="/notifications" className="p-2 border border-secondary rounded d-block text-decoration-none hover-cyan" onClick={() => setIsAppsGridOpen(false)}>
                      <i className="ti ti-bell fs-24 text-danger d-block mb-1"></i>
                      <span className="fs-11 fw-semibold text-light">Alerts</span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link to="/profile" className="p-2 border border-secondary rounded d-block text-decoration-none hover-cyan" onClick={() => setIsAppsGridOpen(false)}>
                      <i className="ti ti-id-badge-2 fs-24 text-primary d-block mb-1"></i>
                      <span className="fs-11 fw-semibold text-light">Profile & CV</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. Notification Bell with 10s Soundwave Ripple & Audio Chime */}
          <div className="topbar-item position-relative" id="notification-dropdown-people">
            <button 
              type="button" 
              className="topbar-link position-relative"
              onClick={handleBellClick}
              title="Operational Alerts & Feedback"
            >
              <i className="ti ti-bell topbar-link-icon fs-20"></i>
              {/* Soundwave animated ripple badge */}
              <span className="soundwave-ripple position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '10px' }}>
                4
              </span>
            </button>
            {isNotifOpen && (
              <div 
                className="dropdown-menu dropdown-menu-end show p-3 shadow-lg border rounded"
                style={{ position: 'absolute', top: 'calc(100% + 16px)', right: 0, width: '340px', zIndex: 1050, background: '#0b0f19', borderColor: 'rgba(0, 242, 254, 0.3)' }}
              >
                <div className="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom border-dark">
                  <h6 className="m-0 fw-bold text-white fs-13">Operational Alerts</h6>
                  <span className="badge bg-cyan text-dark fw-bold fs-10">Claude 3.7 & Audit</span>
                </div>
                <div className="py-2 border-bottom border-dark">
                  <div className="d-flex align-items-center justify-content-between">
                    <strong className="fs-12 text-cyan">External AI Critique Ingested</strong>
                    <span className="badge bg-danger fs-9">New</span>
                  </div>
                  <p className="mb-0 fs-11 text-muted text-truncate">Claude 3.7 completed audit of Bornomala ERP monolith.</p>
                </div>
                <div className="py-2 border-bottom border-dark">
                  <strong className="fs-12 text-light">Tool Audit Blueprint Generated</strong>
                  <p className="mb-0 fs-11 text-muted text-truncate">Decoupling blueprint for StudentAdmission.aspx ready.</p>
                </div>
                <div className="pt-2 d-flex justify-content-between align-items-center">
                  <Link
                    to="/notifications"
                    className="btn btn-sm btn-outline-cyan w-100 fs-12 fw-bold"
                    onClick={() => setIsNotifOpen(false)}
                  >
                    View All Notifications &rarr;
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 4. Fullscreen Toggler */}
          <div className="topbar-item d-none d-md-flex" id="fullscreen-toggler">
            <button 
              type="button" 
              className="topbar-link"
              onClick={toggleFullscreen}
              title="Toggle Fullscreen"
            >
              <i className="ti ti-maximize topbar-link-icon fs-20"></i>
            </button>
          </div>

          {/* 5. Language Selector (EN, BN, IT) */}
          <div className="topbar-item position-relative" id="language-selector-rounded">
            <button 
              type="button" 
              className="topbar-link d-flex align-items-center gap-1"
              onClick={() => setIsLangOpen(!isLangOpen)}
              title="Select Interface Language"
            >
              <span className="fw-bold fs-12 text-cyan font-monospace">{currentLang}</span>
            </button>
            {isLangOpen && (
              <div 
                className="dropdown-menu dropdown-menu-end show shadow-lg border rounded p-1"
                style={{ position: 'absolute', top: 'calc(100% + 16px)', right: 0, zIndex: 1050, background: '#0b0f19', borderColor: 'rgba(0, 242, 254, 0.3)' }}
              >
                <button
                  className={`dropdown-item d-flex align-items-center gap-2 fs-12 ${currentLang === 'EN' ? 'text-cyan fw-bold' : 'text-light'}`}
                  onClick={() => { setCurrentLang('EN'); setIsLangOpen(false); }}
                >
                  <img src="/assets/images/flags/us.svg" alt="en" style={{ width: 18 }} /> English (US)
                </button>
                <button
                  className={`dropdown-item d-flex align-items-center gap-2 fs-12 ${currentLang === 'BN' ? 'text-cyan fw-bold' : 'text-light'}`}
                  onClick={() => { setCurrentLang('BN'); setIsLangOpen(false); }}
                >
                  <span className="badge bg-success text-white fs-10">BD</span> Bengali (বাংলা)
                </button>
                <button
                  className={`dropdown-item d-flex align-items-center gap-2 fs-12 ${currentLang === 'IT' ? 'text-cyan fw-bold' : 'text-light'}`}
                  onClick={() => { setCurrentLang('IT'); setIsLangOpen(false); }}
                >
                  <img src="/assets/images/flags/italy.svg" alt="it" style={{ width: 18 }} /> Italian (Italiano)
                </button>
              </div>
            )}
          </div>

          {/* 6. User Profile Dropdown */}
          <div className="topbar-item nav-user position-relative" id="user-dropdown-detailed">
            <button 
              type="button" 
              id="topbar-user-dropdown"
              className="topbar-link dropdown-toggle drop-arrow-none px-2 d-flex align-items-center gap-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                src={user?.avatar || "/assets/images/users/naimul_islam.jpg"}
                alt="user"
                className="rounded-circle border border-cyan avatar-xs"
                style={{ width: 32, height: 32, objectFit: 'cover' }}
              />
              <div className="d-none d-md-block text-start">
                <span className="sidenav-user-name fw-bold d-block fs-xs text-light">{user?.name || 'Naimul Islam'}</span>
                <span className="fs-11 fw-semibold text-cyan">{user?.role || 'SuperAdmin'}</span>
              </div>
              <i className="ti ti-chevron-down fs-xs d-none d-md-inline text-muted"></i>
            </button>

            {isDropdownOpen && (
              <div 
                id="topbar-user-menu"
                className="dropdown-menu dropdown-menu-end show shadow-lg border rounded p-2"
                style={{ position: 'absolute', top: 'calc(100% + 16px)', right: 0, zIndex: 1050, minWidth: 220, background: '#0b0f19', borderColor: 'rgba(0, 242, 254, 0.3)' }}
              >
                <div className="px-3 py-2 border-bottom border-dark">
                  <h6 className="mb-0 fw-bold text-light">{user?.name || 'Naimul Islam'}</h6>
                  <small className="text-muted font-monospace fs-11">@{user?.username || 'superadmin'}</small>
                </div>

                <div className="py-1">
                  <Link
                    to="/profile"
                    className="dropdown-item py-1.5 fs-12 text-light d-flex align-items-center gap-2"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <i className="ti ti-id-badge-2 text-cyan"></i> Profile & CV Generator
                  </Link>

                  {isSuperAdmin && (
                    <Link
                      to="/users"
                      className="dropdown-item py-1.5 fs-12 text-light d-flex align-items-center gap-2"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <i className="ti ti-shield-lock text-warning"></i> SuperUser Control Hub
                    </Link>
                  )}

                  <Link
                    to="/settings"
                    className="dropdown-item py-1.5 fs-12 text-light d-flex align-items-center gap-2"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <i className="ti ti-settings text-info"></i> System Settings
                  </Link>

                  <button
                    type="button"
                    className="dropdown-item py-1.5 fs-12 text-warning d-flex align-items-center gap-2"
                    onClick={handleLockScreen}
                  >
                    <i className="ti ti-lock"></i> Lock Screen (PIN)
                  </button>
                </div>

                <div className="dropdown-divider my-1 border-dark"></div>

                <button 
                  type="button" 
                  className="dropdown-item py-1.5 text-danger d-flex align-items-center gap-2 fs-12 fw-bold" 
                  onClick={handleLogoutClick}
                >
                  <i className="ti ti-logout fs-15"></i> Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
