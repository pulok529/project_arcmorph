import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { useTasks, PipelineTask } from '../../context/TaskContext';
import { useSessionLock } from '../../context/SessionLockContext';
import { playCyberChime } from '../../utils/audioChime';
import Swal from 'sweetalert2';

interface UIPageItem {
  name: string;
  path: string;
  icon: string;
  category: string;
  superAdminOnly?: boolean;
}

const UI_PAGES: UIPageItem[] = [
  { name: 'Dashboard Overview', path: '/', icon: 'ti-layout-dashboard', category: 'Core Platform' },
  { name: 'Architecture Graph (2D/3D)', path: '/graph', icon: 'ti-chart-dots-3', category: 'Visualization' },
  { name: 'Universal OCR Studio & Vault', path: '/ocr-studio', icon: 'ti-scan', category: 'Intelligence' },
  { name: 'Master Terminal & Subagents', path: '/terminal', icon: 'ti-terminal-2', category: 'Command Console' },
  { name: 'MorphHub Pipeline Projects', path: '/morph-hub', icon: 'ti-folder-check', category: 'Core Platform' },
  { name: 'Notification Hub & Audit Feed', path: '/notifications', icon: 'ti-bell', category: 'Intelligence & Audit' },
  { name: 'Engineer Profile & CV Generator', path: '/profile', icon: 'ti-id-badge-2', category: 'Identity & CV' },
  { name: 'SuperUser Control Hub', path: '/users', icon: 'ti-shield-lock', category: 'Administration', superAdminOnly: true },
  { name: 'System, Models & Security Settings', path: '/settings', icon: 'ti-settings', category: 'Administration' },
  { name: 'Cybernetic Lock Screen (PIN)', path: '/lockscreen', icon: 'ti-lock', category: 'Security' },
  { name: 'Project Documentation & Architecture Guide', path: '/docs', icon: 'ti-book', category: 'Documentation' }
];

export const Topbar: React.FC = () => {
  const { toggleSidebarCollapse, toggleTheme } = useTheme();
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
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const userDropdownRef = useRef<HTMLDivElement>(null);
  const notifDropdownRef = useRef<HTMLDivElement>(null);
  const appsGridRef = useRef<HTMLDivElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (searchContainerRef.current && !searchContainerRef.current.contains(target)) {
        setIsSearchFocused(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(target)) {
        setIsDropdownOpen(false);
      }
      if (notifDropdownRef.current && !notifDropdownRef.current.contains(target)) {
        setIsNotifOpen(false);
      }
      if (appsGridRef.current && !appsGridRef.current.contains(target)) {
        setIsAppsGridOpen(false);
      }
      if (langDropdownRef.current && !langDropdownRef.current.contains(target)) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
      setIsSearchFocused(false);
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSelectUIPage = (path: string) => {
    setSearchQuery('');
    setIsSearchFocused(false);
    navigate(path);
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

  const matchingUIPages = UI_PAGES.filter(p => {
    if (p.superAdminOnly && !isSuperAdmin) return false;
    if (!searchQuery.trim()) return false;
    const query = searchQuery.toLowerCase();
    return p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query);
  });

  return (
    <header className="app-topbar">
      <div className="container-fluid topbar-menu">
        <div className="d-flex align-items-center gap-2">
          <button 
            type="button" 
            className="sidenav-toggle-button btn btn-icon"
            onClick={toggleSidebarCollapse}
            title="Toggle Sidebar"
          >
            <i className="ti ti-menu-4 fs-20"></i>
          </button>

          <div className="app-search d-none d-xl-flex position-relative" id="search-box-rounded" ref={searchContainerRef}>
            <form onSubmit={handleQuickSearchSubmit} className="position-relative">
              <input
                type="search"
                className="form-control rounded-pill topbar-search"
                placeholder="Search UI features, code, AST, symbols..."
                value={searchQuery}
                onFocus={() => setIsSearchFocused(true)}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  setIsSearchFocused(true);
                }}
                style={{ width: '300px', paddingRight: '36px' }}
              />
              <i 
                className="ti ti-search app-search-icon text-muted cursor-pointer" 
                onClick={handleQuickSearchSubmit}
                title="Search or press Enter"
                style={{ cursor: 'pointer' }}
              ></i>
            </form>

            {isSearchFocused && searchQuery.trim().length > 0 && (
              <div 
                className="dropdown-menu show shadow-lg border rounded p-2"
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  left: 0,
                  width: '380px',
                  zIndex: 1060,
                  maxHeight: '380px',
                  overflowY: 'auto',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="px-2 py-1 mb-1 border-bottom border-secondary-subtle d-flex justify-content-between align-items-center">
                  <small className="text-muted text-uppercase fw-bold fs-10">Quick UI Navigation</small>
                  <span className="badge bg-cyan text-dark fs-10">{matchingUIPages.length} match(es)</span>
                </div>

                {matchingUIPages.length > 0 ? (
                  matchingUIPages.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className="dropdown-item py-2 px-2 d-flex align-items-center justify-content-between rounded mb-1"
                      onClick={() => handleSelectUIPage(item.path)}
                    >
                      <div className="d-flex align-items-center gap-2">
                        <div className="rounded p-1.5 bg-primary-subtle text-primary">
                          <i className={`ti ${item.icon} fs-16`}></i>
                        </div>
                        <div>
                          <div className="fw-semibold fs-12 text-body">{item.name}</div>
                          <small className="text-muted fs-11">{item.category}</small>
                        </div>
                      </div>
                      <span className="badge bg-secondary-subtle text-secondary fs-10">Jump &rarr;</span>
                    </button>
                  ))
                ) : (
                  <div className="px-3 py-2 text-muted fs-12">
                    No direct UI page matched "{searchQuery}".
                  </div>
                )}

                <div className="dropdown-divider my-1 border-secondary-subtle"></div>

                <button
                  type="button"
                  className="btn btn-sm btn-outline-cyan w-100 fs-12 fw-bold d-flex align-items-center justify-content-center gap-1.5 mt-1"
                  onClick={handleQuickSearchSubmit}
                >
                  <i className="ti ti-search"></i> Execute Full RAG Search for "{searchQuery}" &rarr;
                </button>
              </div>
            )}
          </div>

          <div className="d-none d-lg-flex align-items-center gap-2 ms-2 px-2 py-1 rounded bg-body-tertiary border border-secondary-subtle fs-11 text-muted font-monospace">
            <span className="badge bg-success-subtle text-success p-1 rounded-circle" style={{ width: 8, height: 8 }}></span>
            <span>Host: <strong className="text-cyan">{clientIp}</strong></span>
            <span>•</span>
            <span>Arch: <strong className="text-body">x86_64</strong></span>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2">
          <div className="topbar-item" id="theme-dropdown">
            <button 
              type="button" 
              className="topbar-link"
              id="light-dark-mode"
              onClick={toggleTheme}
              title="Toggle Theme Mode (Dark / Light)"
            >
              <i className="ti ti-sun topbar-link-icon fs-20 light-mode"></i>
              <i className="ti ti-moon topbar-link-icon fs-20 dark-mode"></i>
            </button>
          </div>

          <div className="topbar-item position-relative" id="apps-dropdown-grid" ref={appsGridRef}>
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
                style={{ position: 'absolute', top: 'calc(100% + 16px)', right: 0, width: '310px', zIndex: 1050 }}
              >
                <div className="d-flex justify-content-between align-items-center mb-2 px-1">
                  <h6 className="m-0 fw-bold text-body fs-12 text-uppercase">ArcMorph Core Apps</h6>
                  <span className="badge bg-cyan text-dark fs-10 fw-bold">v2.4</span>
                </div>
                <div className="row g-2 text-center">
                  <div className="col-4">
                    <Link to="/graph" className="p-2 border border-secondary-subtle rounded d-block text-decoration-none hover-cyan" onClick={() => setIsAppsGridOpen(false)}>
                      <i className="ti ti-chart-dots-3 fs-24 text-cyan d-block mb-1"></i>
                      <span className="fs-11 fw-semibold text-body">3D Graph</span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link to="/ocr-studio" className="p-2 border border-secondary-subtle rounded d-block text-decoration-none hover-cyan" onClick={() => setIsAppsGridOpen(false)}>
                      <i className="ti ti-scan fs-24 text-warning d-block mb-1"></i>
                      <span className="fs-11 fw-semibold text-body">OCR Studio</span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link to="/terminal" className="p-2 border border-secondary-subtle rounded d-block text-decoration-none hover-cyan" onClick={() => setIsAppsGridOpen(false)}>
                      <i className="ti ti-terminal fs-24 text-success d-block mb-1"></i>
                      <span className="fs-11 fw-semibold text-body">Terminal</span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link to="/morph-hub" className="p-2 border border-secondary-subtle rounded d-block text-decoration-none hover-cyan" onClick={() => setIsAppsGridOpen(false)}>
                      <i className="ti ti-refresh fs-24 text-info d-block mb-1"></i>
                      <span className="fs-11 fw-semibold text-body">Morph Hub</span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link to="/notifications" className="p-2 border border-secondary-subtle rounded d-block text-decoration-none hover-cyan" onClick={() => setIsAppsGridOpen(false)}>
                      <i className="ti ti-bell fs-24 text-danger d-block mb-1"></i>
                      <span className="fs-11 fw-semibold text-body">Alerts</span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link to="/profile" className="p-2 border border-secondary-subtle rounded d-block text-decoration-none hover-cyan" onClick={() => setIsAppsGridOpen(false)}>
                      <i className="ti ti-id-badge-2 fs-24 text-primary d-block mb-1"></i>
                      <span className="fs-11 fw-semibold text-body">Profile & CV</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="topbar-item position-relative" id="notification-dropdown-people" ref={notifDropdownRef}>
            <button 
              type="button" 
              className="topbar-link position-relative"
              onClick={handleBellClick}
              title="Operational Alerts & Feedback"
            >
              <i className="ti ti-bell topbar-link-icon fs-20"></i>
              <span className="soundwave-ripple position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '10px' }}>
                5
              </span>
            </button>
            {isNotifOpen && (
              <div 
                className="dropdown-menu dropdown-menu-end show p-0 shadow-lg border rounded overflow-hidden"
                style={{ position: 'absolute', top: 'calc(100% + 16px)', right: 0, width: '340px', zIndex: 1050 }}
              >
                <div className="d-flex justify-content-between align-items-center px-3 py-2.5 border-bottom border-secondary-subtle bg-body-tertiary">
                  <h6 className="m-0 fw-bold text-body fs-14">Notifications</h6>
                  <span className="badge bg-success-subtle text-success border border-success-subtle fw-semibold px-2 py-1 fs-11">07 Notifications</span>
                </div>

                <div className="list-group list-group-flush" style={{ maxHeight: '320px', overflowY: 'auto' }}>
                  <div className="list-group-item list-group-item-action d-flex align-items-start gap-3 py-2.5 px-3 border-bottom border-secondary-subtle">
                    <div className="position-relative flex-shrink-0">
                      <img src="/assets/images/users/avatar-1.jpg" alt="Emily" className="rounded-circle" style={{ width: 38, height: 38, objectFit: 'cover' }} onError={e => { (e.target as HTMLElement).style.display = 'none'; }} />
                      <span className="position-absolute bottom-0 end-0 badge rounded-circle bg-success p-1 d-flex align-items-center justify-content-center" style={{ width: 16, height: 16 }}>
                        <i className="ti ti-bell fs-10 text-white"></i>
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <div className="fs-12 text-body">
                        <strong>Emily Johnson</strong> <span className="text-muted">commented on a task in</span> <strong>Design Sprint</strong>
                      </div>
                      <small className="text-muted fs-11">12 minutes ago</small>
                    </div>
                  </div>

                  <div className="list-group-item list-group-item-action d-flex align-items-start gap-3 py-2.5 px-3 border-bottom border-secondary-subtle">
                    <div className="position-relative flex-shrink-0">
                      <img src="/assets/images/users/avatar-2.jpg" alt="Michael" className="rounded-circle" style={{ width: 38, height: 38, objectFit: 'cover' }} onError={e => { (e.target as HTMLElement).style.display = 'none'; }} />
                      <span className="position-absolute bottom-0 end-0 badge rounded-circle bg-info p-1 d-flex align-items-center justify-content-center" style={{ width: 16, height: 16 }}>
                        <i className="ti ti-cloud-upload fs-10 text-white"></i>
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <div className="fs-12 text-body">
                        <strong>Michael Lee</strong> <span className="text-muted">uploaded files to</span> <strong>Marketing Assets</strong>
                      </div>
                      <small className="text-muted fs-11">25 minutes ago</small>
                    </div>
                  </div>

                  <div className="list-group-item list-group-item-action d-flex align-items-start gap-3 py-2.5 px-3 border-bottom border-secondary-subtle">
                    <div className="position-relative flex-shrink-0">
                      <div className="rounded-circle bg-body-tertiary border border-secondary-subtle d-flex align-items-center justify-content-center" style={{ width: 38, height: 38 }}>
                        <i className="ti ti-database fs-18 text-muted"></i>
                      </div>
                      <span className="position-absolute bottom-0 end-0 badge rounded-circle bg-danger p-1 d-flex align-items-center justify-content-center" style={{ width: 16, height: 16 }}>
                        <i className="ti ti-alert-circle fs-10 text-white"></i>
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <div className="fs-12 text-body">
                        <strong>Server #3</strong> <span className="text-muted">CPU usage exceeded</span> <strong className="text-danger">90%</strong>
                      </div>
                      <small className="text-muted fs-11">Just now</small>
                    </div>
                  </div>

                  <div className="list-group-item list-group-item-action d-flex align-items-start gap-3 py-2.5 px-3 border-bottom border-secondary-subtle">
                    <div className="position-relative flex-shrink-0">
                      <img src="/assets/images/users/avatar-3.jpg" alt="Sophia" className="rounded-circle" style={{ width: 38, height: 38, objectFit: 'cover' }} onError={e => { (e.target as HTMLElement).style.display = 'none'; }} />
                      <span className="position-absolute bottom-0 end-0 badge rounded-circle bg-warning p-1 d-flex align-items-center justify-content-center" style={{ width: 16, height: 16 }}>
                        <i className="ti ti-alert-triangle fs-10 text-dark"></i>
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <div className="fs-12 text-body">
                        <strong>Sophia Ray</strong> <span className="text-muted">flagged an issue in</span> <strong>Bug Tracker</strong>
                      </div>
                      <small className="text-muted fs-11">45 minutes ago</small>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 text-center border-top border-secondary-subtle bg-body-tertiary">
                  <Link
                    to="/notifications"
                    className="fw-bold text-decoration-underline text-body fs-13 d-inline-block hover-cyan"
                    onClick={() => setIsNotifOpen(false)}
                  >
                    Read All Messages
                  </Link>
                </div>
              </div>
            )}
          </div>

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

          <div className="topbar-item position-relative" id="language-selector-rounded" ref={langDropdownRef}>
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
                style={{ position: 'absolute', top: 'calc(100% + 16px)', right: 0, zIndex: 1050 }}
              >
                <button
                  className={`dropdown-item d-flex align-items-center gap-2 fs-12 ${currentLang === 'EN' ? 'text-cyan fw-bold' : 'text-body'}`}
                  onClick={() => { setCurrentLang('EN'); setIsLangOpen(false); }}
                >
                  <img src="/assets/images/flags/us.svg" alt="en" style={{ width: 18 }} /> English (US)
                </button>
                <button
                  className={`dropdown-item d-flex align-items-center gap-2 fs-12 ${currentLang === 'BN' ? 'text-cyan fw-bold' : 'text-body'}`}
                  onClick={() => { setCurrentLang('BN'); setIsLangOpen(false); }}
                >
                  <span className="badge bg-success text-white fs-10">BD</span> Bengali (বাংলা)
                </button>
                <button
                  className={`dropdown-item d-flex align-items-center gap-2 fs-12 ${currentLang === 'IT' ? 'text-cyan fw-bold' : 'text-body'}`}
                  onClick={() => { setCurrentLang('IT'); setIsLangOpen(false); }}
                >
                  <img src="/assets/images/flags/italy.svg" alt="it" style={{ width: 18 }} /> Italian (Italiano)
                </button>
              </div>
            )}
          </div>

          <div className="topbar-item nav-user position-relative" id="user-dropdown-detailed" ref={userDropdownRef}>
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
                <span className="sidenav-user-name fw-bold d-block fs-xs text-body">{user?.name || 'Naimul Islam'}</span>
                <span className="fs-11 fw-semibold text-cyan">{user?.role || 'SuperAdmin'}</span>
              </div>
              <i className="ti ti-chevron-down fs-xs d-none d-md-inline text-muted"></i>
            </button>

            {isDropdownOpen && (
              <div 
                id="topbar-user-menu"
                className="dropdown-menu dropdown-menu-end show shadow-lg border rounded p-0 overflow-hidden"
                style={{ position: 'absolute', top: 'calc(100% + 16px)', right: 0, zIndex: 1050, minWidth: 210 }}
              >
                <div className="px-3 pt-3 pb-2 text-muted fs-12 fw-semibold border-bottom border-secondary-subtle">
                  Welcome back 👋!
                </div>

                <div className="py-1">
                  <Link
                    to="/profile"
                    className="dropdown-item py-2 px-3 fs-13 text-body d-flex align-items-center gap-2.5"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <i className="ti ti-user-circle fs-16 text-muted"></i> Profile
                  </Link>

                  <Link
                    to="/notifications"
                    className="dropdown-item py-2 px-3 fs-13 text-body d-flex align-items-center gap-2.5"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <i className="ti ti-bell fs-16 text-muted"></i> Notifications
                  </Link>

                  <Link
                    to="/settings"
                    className="dropdown-item py-2 px-3 fs-13 text-body d-flex align-items-center gap-2.5"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <i className="ti ti-settings fs-16 text-muted"></i> Account Settings
                  </Link>

                  {isSuperAdmin && (
                    <Link
                      to="/users"
                      className="dropdown-item py-2 px-3 fs-13 text-body d-flex align-items-center gap-2.5"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <i className="ti ti-shield-lock fs-16 text-warning"></i> SuperUser Control
                    </Link>
                  )}

                  <Link
                    to="/docs"
                    className="dropdown-item py-2 px-3 fs-13 text-body d-flex align-items-center gap-2.5"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <i className="ti ti-headset fs-16 text-muted"></i> Support Center
                  </Link>
                </div>

                <div className="dropdown-divider my-0 border-secondary-subtle"></div>

                <div className="py-1">
                  <button
                    type="button"
                    className="dropdown-item py-2 px-3 fs-13 text-body d-flex align-items-center gap-2.5"
                    onClick={handleLockScreen}
                  >
                    <i className="ti ti-lock fs-16 text-muted"></i> Lock Screen
                  </button>

                  <button 
                    type="button" 
                    className="dropdown-item py-2 px-3 text-danger d-flex align-items-center gap-2.5 fs-13 fw-bold" 
                    onClick={handleLogoutClick}
                  >
                    <i className="ti ti-logout fs-16 text-danger"></i> Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
