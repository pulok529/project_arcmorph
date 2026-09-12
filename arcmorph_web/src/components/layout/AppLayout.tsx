import React from 'react';
import { Outlet } from 'react-router-dom';
import { Topbar } from './Topbar';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { ThemeCustomizer } from './ThemeCustomizer';
import { useTheme } from '../../context/ThemeContext';
import { useBootstrapEffects } from '../../hooks/useBootstrapEffects';

export const AppLayout: React.FC = () => {
  useBootstrapEffects();
  const { isSidebarOpenMobile, toggleSidebarMobile } = useTheme();

  return (
    <div className="wrapper">
      <Topbar />
      <Sidebar />
      <div className="content-page">
        <div className="container-fluid">
          <Outlet />
        </div>
        <Footer />
      </div>
      <ThemeCustomizer />
      {isSidebarOpenMobile && (
        <div className="offcanvas-backdrop fade show" onClick={toggleSidebarMobile} style={{ zIndex: 1040 }}></div>
      )}
    </div>
  );
};
