import React, { createContext, useContext, useState, useEffect } from 'react';
import type { 
  ThemeConfig, 
  ThemeMode, 
  MenuColor, 
  TopbarColor, 
  SidenavSize, 
  LayoutWidth, 
  LayoutPosition, 
  Direction,
  SkinType
} from '../types/theme';

export const SKIN_PRESETS: Record<string, Partial<ThemeConfig>> = {
  default: { theme: 'dark', menuColor: 'dark', topbarColor: 'dark', sidenavUser: false },
  minimal: { theme: 'light', menuColor: 'gray', topbarColor: 'gray', sidenavUser: false },
  modern: { theme: 'light', topbarColor: 'light', menuColor: 'dark', sidenavUser: false },
  material: { theme: 'light', topbarColor: 'light', menuColor: 'gray', sidenavUser: false },
  saas: { theme: 'light', topbarColor: 'light', menuColor: 'dark', sidenavUser: false },
  flat: { theme: 'light', menuColor: 'light', topbarColor: 'light', sidenavUser: false },
  galaxy: { theme: 'dark', menuColor: 'dark', topbarColor: 'dark', sidenavUser: false },
  luxe: { theme: 'light', topbarColor: 'dark', menuColor: 'light', sidenavUser: true },
  retro: { theme: 'light', topbarColor: 'light', menuColor: 'dark', sidenavUser: false },
  neon: { theme: 'dark', topbarColor: 'dark', menuColor: 'dark', sidenavUser: false },
  pixel: { theme: 'light', topbarColor: 'light', menuColor: 'light', sidenavUser: false },
  soft: { theme: 'light', topbarColor: 'light', menuColor: 'light', sidenavUser: false },
  mono: { theme: 'light', topbarColor: 'gray', menuColor: 'gray', sidenavUser: false },
  prism: { theme: 'light', topbarColor: 'gradient', menuColor: 'gradient', sidenavUser: false },
  nova: { theme: 'dark', topbarColor: 'dark', menuColor: 'dark', sidenavUser: false },
  zen: { theme: 'light', topbarColor: 'light', menuColor: 'light', sidenavUser: false },
  elegant: { theme: 'light', topbarColor: 'light', menuColor: 'dark', sidenavUser: true },
  vivid: { theme: 'light', topbarColor: 'gradient', menuColor: 'dark', sidenavUser: false },
  aurora: { theme: 'dark', topbarColor: 'dark', menuColor: 'dark', sidenavUser: false },
  crystal: { theme: 'light', topbarColor: 'light', menuColor: 'light', sidenavUser: false },
  matrix: { theme: 'dark', topbarColor: 'dark', menuColor: 'dark', sidenavUser: false },
  orbit: { theme: 'dark', topbarColor: 'dark', menuColor: 'dark', sidenavUser: false },
  neo: { theme: 'light', topbarColor: 'light', menuColor: 'dark', sidenavUser: false },
  silver: { theme: 'light', topbarColor: 'gray', menuColor: 'gray', sidenavUser: false },
  xenon: { theme: 'light', topbarColor: 'light', menuColor: 'gradient', sidenavUser: false }
};

interface ExtendedThemeConfig extends ThemeConfig {
  isMonochrome?: boolean;
}

interface ThemeContextType extends ExtendedThemeConfig {
  setSkin: (skin: SkinType) => void;
  setTheme: (theme: ThemeMode) => void;
  setMenuColor: (color: MenuColor) => void;
  setTopbarColor: (color: TopbarColor) => void;
  setSidenavSize: (size: SidenavSize) => void;
  setLayoutWidth: (width: LayoutWidth) => void;
  setPosition: (position: LayoutPosition) => void;
  setDirection: (dir: Direction) => void;
  setSidenavUser: (show: boolean) => void;
  toggleTheme: () => void;
  toggleMonochrome: () => void;
  toggleSidebarCollapse: () => void;
  toggleHoverPin: () => void;
  toggleSidebarMobile: () => void;
  toggleCustomizer: () => void;
  resetConfig: () => void;
}

const DEFAULT_CONFIG: ExtendedThemeConfig = {
  skin: 'default',
  theme: 'dark',
  menuColor: 'dark',
  topbarColor: 'dark',
  sidenavSize: 'on-hover-active',
  layoutWidth: 'fluid',
  position: 'fixed',
  dir: 'ltr',
  sidenavUser: false,
  isSidebarOpenMobile: false,
  isCustomizerOpen: false,
  isMonochrome: false
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<ExtendedThemeConfig>(() => {
    const saved = localStorage.getItem('ARCHMORPH_THEME_CONFIG');
    if (saved) {
      try {
        return { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
      } catch (e) {
        console.error('Failed to parse theme config', e);
      }
    }
    return DEFAULT_CONFIG;
  });

  useEffect(() => {
    const root = document.documentElement;
    const effectiveTheme = config.theme === 'system' 
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') 
      : config.theme;

    root.setAttribute('data-skin', config.skin);
    root.setAttribute('data-bs-theme', effectiveTheme);
    root.setAttribute('data-menu-color', config.menuColor);
    root.setAttribute('data-topbar-color', config.topbarColor);
    root.setAttribute('data-sidenav-size', config.sidenavSize);
    root.setAttribute('data-layout-width', config.layoutWidth);
    root.setAttribute('data-layout-position', config.position);
    root.setAttribute('dir', config.dir);
    if (config.sidenavUser) {
      root.setAttribute('data-sidenav-user', 'true');
    } else {
      root.removeAttribute('data-sidenav-user');
    }

    if (config.isMonochrome) {
      root.classList.add('monochrome');
    } else {
      root.classList.remove('monochrome');
    }

    if (config.isSidebarOpenMobile) {
      root.classList.add('sidebar-enable');
    } else {
      root.classList.remove('sidebar-enable');
    }

    localStorage.setItem('ARCHMORPH_THEME_CONFIG', JSON.stringify(config));
  }, [config]);

  const setSkin = (skin: SkinType) => {
    const preset = SKIN_PRESETS[skin.toLowerCase()] || {};
    setConfig(prev => ({
      ...prev,
      skin,
      ...preset
    }));
  };

  const setTheme = (theme: ThemeMode) => setConfig(prev => ({ ...prev, theme }));
  const setMenuColor = (menuColor: MenuColor) => setConfig(prev => ({ ...prev, menuColor }));
  const setTopbarColor = (topbarColor: TopbarColor) => setConfig(prev => ({ ...prev, topbarColor }));
  const setSidenavSize = (sidenavSize: SidenavSize) => setConfig(prev => ({ ...prev, sidenavSize }));
  const setLayoutWidth = (layoutWidth: LayoutWidth) => setConfig(prev => ({ ...prev, layoutWidth }));
  const setPosition = (position: LayoutPosition) => setConfig(prev => ({ ...prev, position }));
  const setDirection = (dir: Direction) => setConfig(prev => ({ ...prev, dir }));
  const setSidenavUser = (sidenavUser: boolean) => setConfig(prev => ({ ...prev, sidenavUser }));

  const toggleTheme = () => setConfig(prev => ({
    ...prev,
    theme: prev.theme === 'dark' ? 'light' : 'dark'
  }));

  const toggleMonochrome = () => setConfig(prev => ({
    ...prev,
    isMonochrome: !prev.isMonochrome
  }));

  const toggleSidebarCollapse = () => {
    if (window.innerWidth <= 767.98) {
      setConfig(prev => ({ ...prev, isSidebarOpenMobile: !prev.isSidebarOpenMobile }));
    } else {
      setConfig(prev => ({
        ...prev,
        sidenavSize: prev.sidenavSize === 'condensed' ? 'default' : 'condensed'
      }));
    }
  };

  const toggleHoverPin = () => {
    setConfig(prev => {
      // Toggle between on-hover (narrow 70px icon mode, expands on hover) and on-hover-active (pinned expanded full 240px)
      const nextSize: SidenavSize = prev.sidenavSize === 'on-hover' ? 'on-hover-active' : 'on-hover';
      return { ...prev, sidenavSize: nextSize };
    });
  };

  const toggleSidebarMobile = () => setConfig(prev => ({ ...prev, isSidebarOpenMobile: !prev.isSidebarOpenMobile }));
  const toggleCustomizer = () => setConfig(prev => ({ ...prev, isCustomizerOpen: !prev.isCustomizerOpen }));
  const resetConfig = () => setConfig(DEFAULT_CONFIG);

  return (
    <ThemeContext.Provider value={{
      ...config,
      setSkin,
      setTheme,
      setMenuColor,
      setTopbarColor,
      setSidenavSize,
      setLayoutWidth,
      setPosition,
      setDirection,
      setSidenavUser,
      toggleTheme,
      toggleMonochrome,
      toggleSidebarCollapse,
      toggleHoverPin,
      toggleSidebarMobile,
      toggleCustomizer,
      resetConfig
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
