import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

export interface MenuItem {
  title: string;
  icon?: string;
  path?: string;
  badge?: { text: string; variant: string };
  children?: MenuItem[];
  superAdminOnly?: boolean;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    category: 'CORE PLATFORM',
    items: [
      {
        title: 'Dashboard',
        icon: 'ti-layout-dashboard',
        path: '/'
      },
      {
        title: 'Architecture Graph',
        icon: 'ti-chart-dots-3',
        path: '/graph',
        badge: { text: '2D/3D', variant: 'cyan' }
      },
      {
        title: 'OCR Studio',
        icon: 'ti-scan',
        path: '/ocr-studio',
        badge: { text: 'Vault', variant: 'warning' }
      },
      {
        title: 'Master Terminal',
        icon: 'ti-terminal-2',
        path: '/terminal',
        badge: { text: 'CLI', variant: 'success' }
      },
      {
        title: 'MorphHub',
        icon: 'ti-folder-check',
        path: '/morph-hub'
      }
    ]
  }
];

// Helper to check if any child item matches current route
function isItemActiveOrHasActiveChild(item: MenuItem, currentPath: string): boolean {
  if (item.path && item.path !== '#' && item.path !== '/' && currentPath === item.path) return true;
  if (item.path === '/' && currentPath === '/') return true;
  if (item.children) {
    return item.children.some(child => isItemActiveOrHasActiveChild(child, currentPath));
  }
  return false;
}

// Recursive Nav Item Component for Arbitrary Depth
const NavItem: React.FC<{
  item: MenuItem;
  depth: number;
  openMenus: Record<string, boolean>;
  toggleMenu: (key: string, e: React.MouseEvent) => void;
  currentPath: string;
  parentKey: string;
}> = ({ item, depth, openMenus, toggleMenu, currentPath, parentKey }) => {
  const itemKey = `${parentKey}/${item.title}`;
  const hasChildren = item.children && item.children.length > 0;
  const isOpen = !!openMenus[itemKey];
  const isActive = isItemActiveOrHasActiveChild(item, currentPath);

  if (hasChildren) {
    return (
      <li className={`side-nav-item ${isActive ? 'active' : ''}`}>
        <a
          href={`#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
          className={`side-nav-link ${isOpen ? '' : 'collapsed'}`}
          onClick={(e) => toggleMenu(itemKey, e)}
        >
          {depth === 0 && item.icon && (
            <span className="menu-icon"><i className={`ti ${item.icon}`}></i></span>
          )}
          <span className="menu-text">{item.title}</span>
          {item.badge && (
            <span className={`badge bg-${item.badge.variant} float-end me-1`}>{item.badge.text}</span>
          )}
          <span
            className="menu-arrow"
            style={{
              transform: isOpen ? 'rotate(90deg)' : 'none',
              transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          ></span>
        </a>
        <div
          className={`collapse ${isOpen ? 'show' : ''}`}
          style={{
            display: 'grid',
            gridTemplateRows: isOpen ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            overflow: 'hidden'
          }}
        >
          <div style={{ minHeight: 0, overflow: 'hidden' }}>
            <ul className="sub-menu">
              {item.children!.map((child, childIdx) => (
                <NavItem
                  key={childIdx}
                  item={child}
                  depth={depth + 1}
                  openMenus={openMenus}
                  toggleMenu={toggleMenu}
                  currentPath={currentPath}
                  parentKey={itemKey}
                />
              ))}
            </ul>
          </div>
        </div>
      </li>
    );
  }

  const isExactActive = currentPath === item.path;
  return (
    <li className={`side-nav-item ${isExactActive ? 'active' : ''}`}>
      <Link to={item.path || '#'} className="side-nav-link">
        {depth === 0 && item.icon && (
          <span className="menu-icon"><i className={`ti ${item.icon}`}></i></span>
        )}
        <span className="menu-text">{item.title}</span>
        {item.badge && (
          <span className={`badge bg-${item.badge.variant} float-end`}>{item.badge.text}</span>
        )}
      </Link>
    </li>
  );
};

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const { toggleSidebarMobile, toggleHoverPin, sidenavUser, sidenavSize } = useTheme();
  const { user, isSuperAdmin, hasPermission } = useAuth();

  const getInitialOpenMenus = (): Record<string, boolean> => {
    const map: Record<string, boolean> = {};

    const markActiveBranches = (item: MenuItem, parentKey: string) => {
      const itemKey = `${parentKey}/${item.title}`;
      if (item.children) {
        if (item.children.some(c => isItemActiveOrHasActiveChild(c, location.pathname))) {
          map[itemKey] = true;
        }
        item.children.forEach(c => markActiveBranches(c, itemKey));
      }
    };

    menuData.forEach((sec) => {
      sec.items.forEach(item => markActiveBranches(item, 'root'));
    });

    return map;
  };

  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>(getInitialOpenMenus);

  const toggleMenu = (key: string, e: React.MouseEvent) => {
    e.preventDefault();
    setOpenMenus(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  useEffect(() => {
    const markActiveBranches = (item: MenuItem, parentKey: string) => {
      const itemKey = `${parentKey}/${item.title}`;
      if (item.children) {
        if (item.children.some(c => isItemActiveOrHasActiveChild(c, location.pathname))) {
          setOpenMenus(prev => ({
            ...prev,
            [itemKey]: true
          }));
        }
        item.children.forEach(c => markActiveBranches(c, itemKey));
      }
    };

    menuData.forEach((sec) => {
      sec.items.forEach(item => markActiveBranches(item, 'root'));
    });
  }, [location.pathname]);

  // Filter menu items by user permissions
  const filteredMenuData = menuData.map(sec => ({
    ...sec,
    items: sec.items.filter(item => {
      if (item.superAdminOnly && !isSuperAdmin) return false;
      if (item.path && !hasPermission(item.path)) return false;
      return true;
    })
  })).filter(sec => sec.items.length > 0);

  return (
    <div className="sidenav-menu">
      {/* Brand Logo */}
      <Link to="/" className="logo">
        <span className="logo logo-light">
          <span className="logo-lg"><img src="/assets/images/logo.svg" alt="ArchMorph logo" style={{ height: "36px", width: "auto" }} /></span>
          <span className="logo-sm"><img src="/assets/images/logo-sm.svg" alt="ArchMorph logo" style={{ height: "34px", width: "auto" }} /></span>
        </span>
        <span className="logo logo-dark">
          <span className="logo-lg"><img src="/assets/images/logo-black.svg" alt="ArchMorph dark logo" style={{ height: "36px", width: "auto" }} /></span>
          <span className="logo-sm"><img src="/assets/images/logo-sm.svg" alt="ArchMorph logo" style={{ height: "34px", width: "auto" }} /></span>
        </span>
      </Link>

      {/* Sidebar Hover Menu Toggle Button */}
      <button className="button-on-hover" style={{ display: "block" }} type="button" onClick={toggleHoverPin} title={sidenavSize === "on-hover-active" ? "Unpin Sidebar (Collapse to Hover)" : "Pin Sidebar (Keep Expanded)"}>
        <span className="btn-on-hover-icon"></span>
      </button>

      {/* Full Sidebar Menu Close Button */}
      <button className="button-close-offcanvas" type="button" onClick={toggleSidebarMobile}>
        <i className="ti ti-menu-4 align-middle"></i>
      </button>

      <SimpleBar className="scrollbar" style={{ maxHeight: 'calc(100% - 70px)' }}>
        {/* User Profile Box */}
        {sidenavUser && (
          <div className="sidenav-user" id="user-profile-settings" style={{ background: 'url(/assets/images/user-bg-pattern.svg)' }}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Link className="link-reset" to="/profile">
                  <img
                    src={user?.avatar || "/assets/images/users/naimul_islam.jpg"}
                    alt="user"
                    className="rounded-circle mb-2 avatar-md"
                    style={{ objectFit: 'cover' }}
                  />
                  <span className="sidenav-user-name fw-bold d-block">{user?.name || 'Naimul Islam'}</span>
                  <span className="fs-12 fw-semibold text-muted">{user?.role || 'SuperAdmin'}</span>
                </Link>
              </div>
              <div>
                <Link className="link-reset sidenav-user-set-icon" to="/settings">
                  <i className="ti ti-settings fs-24 align-middle ms-1"></i>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Menu */}
        <ul className="side-nav">
          {filteredMenuData.map((sec, idx) => (
            <React.Fragment key={idx}>
              <li className="side-nav-title">{sec.category}</li>
              {sec.items.map((item, itemIdx) => (
                <NavItem
                  key={itemIdx}
                  item={item}
                  depth={0}
                  openMenus={openMenus}
                  toggleMenu={toggleMenu}
                  currentPath={location.pathname}
                  parentKey="root"
                />
              ))}
            </React.Fragment>
          ))}
        </ul>

        {/* Special Menu Card (Authentic Paces Theme) */}
        <div className="p-3 mt-auto">
          <div className="card text-center bg-primary text-white mb-0">
            <div className="card-body p-3">
              <i className="ti ti-crown fs-28 mb-2 d-block"></i>
              <h6 className="text-white fw-bold mb-1">ArcMorph Suite</h6>
              <p className="fs-xs opacity-75 mb-2">Multi-Agent Modernization Studio</p>
              <Link to="/terminal" className="btn btn-sm btn-light text-primary fw-semibold w-100">Live Terminal</Link>
            </div>
          </div>
        </div>
      </SimpleBar>
    </div>
  );
};

export default Sidebar;
