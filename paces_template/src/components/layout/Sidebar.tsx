import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

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

export const menuData: MenuCategory[] = [
  {
    category: 'MAIN',
    items: [
      {
        title: 'Dashboards',
        icon: 'ti-dashboard',
        children: [
          { title: 'Ecommerce', path: '/' },
          { title: 'Analytics', path: '/' },
          { title: 'CRM', path: '/pages/empty' },
          { title: 'Finance', path: '/pages/empty' },
          { title: 'Projects', path: '/pages/empty' }
        ]
      },
      {
        title: 'Starter Base',
        icon: 'ti-file-text',
        path: '/pages/empty'
      }
    ]
  },
  {
    category: 'APPS',
    items: [
      {
        title: 'Ecommerce',
        icon: 'ti-basket',
        children: [
          {
            title: 'Products',
            children: [
              { title: 'Products', path: '/pages/empty' },
              { title: 'Products Grid', path: '/pages/empty' },
              { title: 'Product Details', path: '/pages/empty' },
              { title: 'Add Product', path: '/pages/empty' }
            ]
          },
          { title: 'Categories', path: '/pages/empty' },
          {
            title: 'Orders',
            children: [
              { title: 'Orders', path: '/pages/empty' },
              { title: 'Order Details', path: '/pages/empty' },
              { title: 'Add/Edit Order', path: '/pages/empty' }
            ]
          },
          { title: 'Customers', path: '/pages/empty' },
          { title: 'Cart', path: '/pages/empty' },
          { title: 'Checkout', path: '/pages/empty' },
          {
            title: 'Sellers',
            children: [
              { title: 'Sellers', path: '/pages/empty' },
              { title: 'Sellers Details', path: '/pages/empty' }
            ]
          },
          { title: 'Refunds', path: '/pages/empty' },
          { title: 'Reviews', path: '/pages/empty' },
          {
            title: 'Inventory',
            children: [
              { title: 'Warehouse', path: '/pages/empty' },
              { title: 'Product Stocks', path: '/pages/empty' },
              { title: 'Purchased Orders', path: '/pages/empty' }
            ]
          },
          {
            title: 'Reports',
            children: [
              { title: 'Product Views', path: '/pages/empty' },
              { title: 'Sales', path: '/pages/empty' }
            ]
          },
          { title: 'Attributes', path: '/pages/empty' },
          { title: 'Settings', path: '/pages/empty' }
        ]
      },
      { title: 'Chat', icon: 'ti-message', path: '/pages/empty' },
      {
        title: 'Projects',
        icon: 'ti-briefcase',
        children: [
          { title: 'My Projects', path: '/pages/empty' },
          { title: 'Projects List', path: '/pages/empty' },
          { title: 'View Project', path: '/pages/empty' },
          { title: 'Kanban Board', path: '/pages/empty' },
          { title: 'Team Board', path: '/pages/empty' },
          { title: 'Activity Stream', path: '/pages/empty' }
        ]
      },
      {
        title: 'Tasks',
        icon: 'ti-checkbox',
        children: [
          { title: 'Task List', path: '/pages/empty' },
          { title: 'Task Details', path: '/pages/empty' },
          { title: 'Create Task', path: '/pages/empty' }
        ]
      },
      {
        title: 'Invoice',
        icon: 'ti-receipt',
        children: [
          { title: 'Invoices', path: '/pages/empty' },
          { title: 'Single Invoice', path: '/pages/empty' },
          { title: 'New Invoice', path: '/pages/empty' }
        ]
      },
      {
        title: 'CRM',
        icon: 'ti-heart-handshake',
        children: [
          { title: 'Contacts', path: '/pages/empty' },
          { title: 'Opportunities', path: '/pages/empty' },
          { title: 'Deals', path: '/pages/empty' },
          { title: 'Leads', path: '/pages/empty' },
          { title: 'Pipeline', path: '/pages/empty' },
          { title: 'Campaign', path: '/pages/empty' },
          { title: 'Proposals', path: '/pages/empty' },
          { title: 'Estimations', path: '/pages/empty' },
          { title: 'Customers', path: '/pages/empty' },
          { title: 'Activities', path: '/pages/empty' }
        ]
      },
      {
        title: 'Users',
        icon: 'ti-users',
        children: [
          { title: 'Contacts', path: '/apps/users/contacts' },
          { title: 'Profile', path: '/apps/users/profile' },
          { title: 'Account Settings', path: '/apps/users/account-settings' },
          { title: 'Roles', path: '/apps/users/roles' },
          { title: 'Role Details', path: '/apps/users/role-details' },
          { title: 'Permissions', path: '/apps/users/permissions' }
        ]
      },
      {
        title: 'Finance',
        icon: 'ti-wallet',
        children: [
          {
            title: 'Expenses',
            children: [
              { title: 'Expenses', path: '/pages/empty' },
              { title: 'Expense Category', path: '/pages/empty' }
            ]
          },
          { title: 'Income', path: '/pages/empty' },
          { title: 'Transactions', path: '/pages/empty' },
          { title: 'Banks & Cards', path: '/pages/empty' }
        ]
      },
      {
        title: 'HRM',
        icon: 'ti-building-community',
        children: [
          {
            title: 'Staffs',
            children: [
              { title: 'Staffs List', path: '/pages/empty' },
              { title: 'Staff Profile', path: '/pages/empty' },
              { title: 'Add Staffs', path: '/pages/empty' }
            ]
          },
          { title: 'Departments', path: '/pages/empty' },
          { title: 'Attendance', path: '/pages/empty' },
          {
            title: 'Leaves',
            children: [
              { title: 'Leaves', path: '/pages/empty' },
              { title: 'Add Leave', path: '/pages/empty' },
              { title: 'Holidays', path: '/pages/empty' }
            ]
          },
          { title: 'Payroll', path: '/pages/empty' },
          { title: 'Create Salary Slip', path: '/pages/empty' }
        ]
      },
      {
        title: 'Email',
        icon: 'ti-mail',
        badge: { text: 'New', variant: 'danger' },
        children: [
          { title: 'Inbox', path: '/pages/empty' },
          { title: 'Details', path: '/pages/empty' },
          { title: 'Compose', path: '/pages/empty' }
        ]
      },
      {
        title: 'Support Center',
        icon: 'ti-headset',
        children: [
          { title: 'Ticket List', path: '/pages/empty' },
          { title: 'Ticket Details', path: '/pages/empty' },
          { title: 'New Ticket', path: '/pages/empty' }
        ]
      },
      {
        title: 'Promo',
        icon: 'ti-percentage',
        children: [
          { title: 'Coupons', path: '/pages/empty' },
          { title: 'Gift Cards', path: '/pages/empty' },
          { title: 'Discounts', path: '/pages/empty' }
        ]
      }
    ]
  },
  {
    category: 'CUSTOM PAGES',
    items: [
      {
        title: 'Pages',
        icon: 'ti-file',
        children: [
          { title: 'About Us', path: '/pages/empty' },
          { title: 'Contact Us', path: '/pages/empty' },
          { title: 'Pricing', path: '/pages/empty' },
          { title: 'Empty Page', path: '/pages/empty' },
          { title: 'Timeline', path: '/pages/empty' },
          { title: 'Gallery', path: '/pages/empty' },
          { title: 'FAQ', path: '/pages/empty' },
          { title: 'Sitemap', path: '/pages/empty' },
          { title: 'Search Results', path: '/pages/empty' },
          { title: 'Coming Soon', path: '/pages/empty' },
          { title: 'Privacy Policy', path: '/pages/empty' },
          { title: 'Terms & Conditions', path: '/pages/empty' }
        ]
      },
      {
        title: 'Plugins',
        icon: 'ti-plug',
        children: [
          { title: 'Sortable List', path: '/plugins/sortable' },
          { title: 'PDF Viewer', path: '/plugins/pdf-viewer' },
          { title: 'i18 Support', path: '/plugins/i18n' },
          { title: 'Sweet Alerts', path: '/plugins/sweet-alerts' },
          { title: 'Idle Timer', path: '/plugins/idle-timer' },
          { title: 'Password Meter', path: '/plugins/pass-meter' },
          { title: 'Clipboard', path: '/plugins/clipboard' },
          { title: 'Tree View', path: '/plugins/tree-view' },
          { title: 'Masonry', path: '/plugins/masonry' },
          { title: 'Tour', path: '/plugins/tour' },
          { title: 'Animation', path: '/plugins/animation' },
          { title: 'Video Player', path: '/plugins/video-player' }
        ]
      },
      {
        title: 'Authentication',
        icon: 'ti-lock',
        children: [
          {
            title: 'Basic',
            children: [
              { title: 'Sign In', path: '/auth/login' },
              { title: 'Sign Up', path: '/auth/register' },
              { title: 'Reset Password', path: '/auth/reset-password' },
              { title: 'New Password', path: '/auth/new-pass' },
              { title: 'Two Factor', path: '/auth/two-factor' },
              { title: 'Lock Screen', path: '/auth/lock-screen' },
              { title: 'Success Mail', path: '/auth/success-mail' },
              { title: 'Login with PIN', path: '/auth/login-pin' },
              { title: 'Delete Account', path: '/auth/delete-account' }
            ]
          },
          {
            title: 'Card',
            children: [
              { title: 'Sign In', path: '/auth/card/sign-in' },
              { title: 'Sign Up', path: '/auth/card/sign-up' },
              { title: 'Reset Password', path: '/auth/card/reset-pass' },
              { title: 'New Password', path: '/auth/card/new-pass' },
              { title: 'Two Factor', path: '/auth/card/two-factor' },
              { title: 'Lock Screen', path: '/auth/card/lock-screen' },
              { title: 'Success Mail', path: '/auth/card/success-mail' },
              { title: 'Login with PIN', path: '/auth/card/login-pin' },
              { title: 'Delete Account', path: '/auth/card/delete-account' }
            ]
          },
          {
            title: 'Split',
            children: [
              { title: 'Sign In', path: '/auth/split/sign-in' },
              { title: 'Sign Up', path: '/auth/split/sign-up' },
              { title: 'Reset Password', path: '/auth/split/reset-pass' },
              { title: 'New Password', path: '/auth/split/new-pass' },
              { title: 'Two Factor', path: '/auth/split/two-factor' },
              { title: 'Lock Screen', path: '/auth/split/lock-screen' },
              { title: 'Success Mail', path: '/auth/split/success-mail' },
              { title: 'Login with PIN', path: '/auth/split/login-pin' },
              { title: 'Delete Account', path: '/auth/split/delete-account' }
            ]
          }
        ]
      },
      {
        title: 'Error Pages',
        icon: 'ti-alert-triangle',
        children: [
          { title: '400 Bad Request', path: '/errors/400' },
          { title: '401 Unauthorized', path: '/errors/401' },
          { title: '403 Forbidden', path: '/errors/403' },
          { title: '404 Not Found', path: '/errors/404' },
          { title: '408 Request Timeout', path: '/errors/408' },
          { title: '500 Internal Server', path: '/errors/500' },
          { title: 'Maintenance', path: '/errors/maintenance' }
        ]
      }
    ]
  },
  {
    category: 'LAYOUTS',
    items: [
      {
        title: 'Layout Options',
        icon: 'ti-layout',
        children: [
          { title: 'Horizontal', path: '/layouts/horizontal' },
          { title: 'Boxed', path: '/layouts/boxed' },
          { title: 'Scrollable', path: '/layouts/scrollable' },
          { title: 'Compact', path: '/layouts/compact' },
          { title: 'Preloader', path: '/layouts/preloader' }
        ]
      },
      {
        title: 'Sidebars',
        icon: 'ti-layout-sidebar',
        children: [
          { title: 'Light Menu', path: '/layouts/sidebar-light' },
          { title: 'Gradient Menu', path: '/layouts/sidebar-gradient' },
          { title: 'Gray Menu', path: '/layouts/sidebar-gray' },
          { title: 'Image Menu', path: '/layouts/sidebar-image' },
          { title: 'Compact Menu', path: '/layouts/sidebar-compact' },
          { title: 'On Hover Menu', path: '/layouts/sidebar-on-hover' },
          { title: 'Offcanvas Menu', path: '/layouts/sidebar-offcanvas' },
          { title: 'No Icons with Lines', path: '/layouts/sidebar-no-icons' },
          { title: 'Sidebar with Lines', path: '/layouts/sidebar-with-lines' }
        ]
      },
      {
        title: 'Topbar',
        icon: 'ti-layout-navbar',
        children: [
          { title: 'Dark Topbar', path: '/layouts/topbar-dark' },
          { title: 'Gray Topbar', path: '/layouts/topbar-gray' },
          { title: 'Gradient Topbar', path: '/layouts/topbar-gradient' }
        ]
      }
    ]
  },
  {
    category: 'COMPONENTS',
    items: [
      {
        title: 'Base UI',
        icon: 'ti-components',
        children: [
          { title: 'Accordions', path: '/ui/accordions' },
          { title: 'Alerts', path: '/ui/alerts' },
          { title: 'Badges', path: '/ui/badges' },
          { title: 'Breadcrumb', path: '/ui/breadcrumb' },
          { title: 'Buttons', path: '/ui/buttons' },
          { title: 'Cards', path: '/ui/cards' },
          { title: 'Carousel', path: '/ui/carousel' },
          { title: 'Collapse', path: '/ui/collapse' },
          { title: 'Colors', path: '/ui/colors' },
          { title: 'Dropdowns', path: '/ui/dropdowns' },
          { title: 'Grid Options', path: '/ui/grid' },
          { title: 'Images', path: '/ui/images' },
          { title: 'Links', path: '/ui/links' },
          { title: 'List Group', path: '/ui/list-group' },
          { title: 'Modals', path: '/ui/modals' },
          { title: 'Notifications', path: '/ui/notifications' },
          { title: 'Offcanvas', path: '/ui/offcanvas' },
          { title: 'Pagination', path: '/ui/pagination' },
          { title: 'Placeholders', path: '/ui/placeholders' },
          { title: 'Popovers', path: '/ui/popovers' },
          { title: 'Progress', path: '/ui/progress' },
          { title: 'Scrollspy', path: '/ui/scrollspy' },
          { title: 'Spinners', path: '/ui/spinners' },
          { title: 'Tabs', path: '/ui/tabs' },
          { title: 'Tooltips', path: '/ui/tooltips' },
          { title: 'Typography', path: '/ui/typography' },
          { title: 'Utilities', path: '/ui/utilities' },
          { title: 'Videos', path: '/ui/videos' }
        ]
      },
      {
        title: 'Widgets',
        icon: 'ti-category',
        children: [
          { title: 'Charts', path: '/widgets/charts' },
          { title: 'Mixed', path: '/widgets/mixed' },
          { title: 'Social', path: '/widgets/social' },
          { title: 'Statistics', path: '/widgets/statistics' },
          { title: 'Weather', path: '/widgets/weather' }
        ]
      },
      {
        title: 'Charts',
        icon: 'ti-chart-donut',
        children: [
          {
            title: 'Apex',
            badge: { text: '21', variant: 'danger text-white' },
            children: [
              { title: 'Area', path: '/charts/apex/area' },
              { title: 'Bar', path: '/charts/apex/bar' },
              { title: 'Bubble', path: '/charts/apex/bubble' },
              { title: 'Candlestick', path: '/charts/apex/candlestick' },
              { title: 'Column', path: '/charts/apex/column' },
              { title: 'Heatmap', path: '/charts/apex/heatmap' },
              { title: 'Line', path: '/charts/apex/line' },
              { title: 'Mixed', path: '/charts/apex/mixed' },
              { title: 'Timeline', path: '/charts/apex/timeline' },
              { title: 'Boxplot', path: '/charts/apex/boxplot' },
              { title: 'Treemap', path: '/charts/apex/treemap' },
              { title: 'Pie', path: '/charts/apex/pie' },
              { title: 'Radar', path: '/charts/apex/radar' },
              { title: 'RadialBar', path: '/charts/apex/radialbar' },
              { title: 'Scatter', path: '/charts/apex/scatter' },
              { title: 'Polar Area', path: '/charts/apex/polar-area' },
              { title: 'Sparklines', path: '/charts/apex/sparklines' },
              { title: 'Range', path: '/charts/apex/range' },
              { title: 'Funnel', path: '/charts/apex/funnel' },
              { title: 'Slope', path: '/charts/apex/slope' }
            ]
          },
          {
            title: 'Echarts',
            children: [
              { title: 'Line', path: '/charts/echart/line' },
              { title: 'Bar', path: '/charts/echart/bar' },
              { title: 'Pie', path: '/charts/echart/pie' },
              { title: 'Scatter', path: '/charts/echart/scatter' },
              { title: 'GEO Map', path: '/charts/echart/sunburst' },
              { title: 'Gauge', path: '/charts/echart/gauge' },
              { title: 'Candlestick', path: '/charts/echart/candlestick' },
              { title: 'Area', path: '/charts/echart/treemap' },
              { title: 'Radar', path: '/charts/echart/radar' },
              { title: 'Heatmap', path: '/charts/echart/heatmap' },
              { title: 'Other', path: '/charts/echart/funnel' }
            ]
          },
          {
            title: 'Chart Js',
            children: [
              { title: 'Area', path: '/charts/chartjs/area' },
              { title: 'Bar', path: '/charts/chartjs/bar' },
              { title: 'Line', path: '/charts/chartjs/line' },
              { title: 'Other', path: '/charts/chartjs/other' }
            ]
          }
        ]
      },
      {
        title: 'Forms',
        icon: 'ti-clipboard-list',
        children: [
          { title: 'Basic Elements', path: '/forms/basic' },
          { title: 'Validation', path: '/forms/validation' },
          { title: 'Wizard', path: '/forms/wizard' },
          { title: 'Select', path: '/forms/select' },
          { title: 'Pickers', path: '/forms/pickers' },
          { title: 'File Uploads', path: '/forms/fileuploads' },
          { title: 'Text Editors', path: '/forms/text-editors' },
          { title: 'Range Slider', path: '/forms/range-slider' },
          { title: 'Image Cropper', path: '/forms/cropper' },
          { title: 'Layouts', path: '/forms/layout' },
          { title: 'Other Plugins', path: '/forms/other-plugin' }
        ]
      },
      {
        title: 'Tables',
        icon: 'ti-table-column',
        children: [
          { title: 'Static Tables', path: '/tables/static' },
          { title: 'Custom Tables', path: '/tables/custom' },
          {
            title: 'DataTables',
            badge: { text: '15', variant: 'success text-white' },
            children: [
              { title: 'Basic', path: '/tables/datatables' },
              { title: 'Export Data', path: '/tables/datatables/export' },
              { title: 'Select', path: '/tables/datatables/select' },
              { title: 'Ajax', path: '/tables/datatables/ajax' },
              { title: 'Javascript Source', path: '/tables/datatables/javascript' },
              { title: 'Data Rendering', path: '/tables/datatables/rendering' },
              { title: 'Scroll', path: '/tables/datatables/scroll' },
              { title: 'Fixed Columns', path: '/tables/datatables/fixed-columns' },
              { title: 'Fixed Header', path: '/tables/datatables/fixed-header' },
              { title: 'Show & Hide Column', path: '/tables/datatables/columns' },
              { title: 'Child Rows', path: '/tables/datatables/child-rows' },
              { title: 'Column Searching', path: '/tables/datatables/column-searching' },
              { title: 'Range Search', path: '/tables/datatables/range-search' },
              { title: 'Add Rows', path: '/tables/datatables/rows-add' },
              { title: 'Checkbox Select', path: '/tables/datatables/checkbox-select' }
            ]
          }
        ]
      },
      {
        title: 'Icons',
        icon: 'ti-icons',
        children: [
          { title: 'Tabler', path: '/icons/tabler' },
          { title: 'Lucide', path: '/icons/lucide' },
          { title: 'Remix', path: '/icons/remix' },
          { title: 'Solar Duotone', path: '/icons/solar-duotone' },
          { title: 'Flags', path: '/icons/flags' }
        ]
      },
      {
        title: 'Maps',
        icon: 'ti-map',
        children: [
          { title: 'Google Maps', path: '/maps/google' },
          { title: 'Vector Maps', path: '/maps/vector' },
          { title: 'Leaflet Maps', path: '/maps/leaflet' }
        ]
      }
    ]
  },
  {
    category: 'MENU ITEMS',
    items: [
      {
        title: 'Menu Levels',
        icon: 'ti-sitemap',
        children: [
          {
            title: 'Second Level',
            children: [
              { title: 'Item 2.1', path: '#' },
              { title: 'Item 2.2', path: '#' }
            ]
          },
          {
            title: 'Second Level 2',
            children: [
              { title: 'Item 2.1', path: '#' },
              {
                title: 'Item 2.2',
                children: [
                  { title: 'Item 3.1', path: '#' },
                  { title: 'Item 3.2', path: '#' }
                ]
              }
            ]
          }
        ]
      },
      {
        title: 'Disabled Menu',
        icon: 'ti-circle-off',
        path: '#'
      },
      {
        title: 'Special Menu',
        icon: 'ti-crown',
        path: '#'
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

  return (
    <div className="sidenav-menu">
      {/* Brand Logo */}
      <Link to="/" className="logo">
        <span className="logo logo-light">
          <span className="logo-lg"><img src="/assets/images/logo.png" alt="logo" /></span>
          <span className="logo-sm"><img src="/assets/images/logo-sm.png" alt="small logo" /></span>
        </span>
        <span className="logo logo-dark">
          <span className="logo-lg"><img src="/assets/images/logo-black.png" alt="dark logo" /></span>
          <span className="logo-sm"><img src="/assets/images/logo-sm.png" alt="small logo" /></span>
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
                <a className="link-reset" href="#!">
                  <img src="/assets/images/users/user-1.jpg" alt="user" className="rounded-circle mb-2 avatar-md" />
                  <span className="sidenav-user-name fw-bold d-block">David Dev</span>
                  <span className="fs-12 fw-semibold text-muted">Art Director</span>
                </a>
              </div>
              <div>
                <a className="link-reset sidenav-user-set-icon" href="#!">
                  <i className="ti ti-settings fs-24 align-middle ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Menu */}
        <ul className="side-nav">
          {menuData.map((sec, idx) => (
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

        {/* Special Offer Card */}
        <div className="p-3 mt-auto">
          <div className="card text-center bg-primary text-white mb-0">
            <div className="card-body p-3">
              <i className="ti ti-crown fs-28 mb-2 d-block"></i>
              <h6 className="text-white fw-bold mb-1">Special Menu</h6>
              <p className="fs-xs opacity-75 mb-2">Upgrade to Pro template for exclusive apps</p>
              <button className="btn btn-sm btn-light text-primary fw-semibold w-100">Upgrade Now</button>
            </div>
          </div>
        </div>
      </SimpleBar>
    </div>
  );
};

export default Sidebar;
