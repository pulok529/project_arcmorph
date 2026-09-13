export type SkinType = 'default' | 'minimal' | 'modern' | 'material' | 'saas' | 'flat' | 'galaxy' | 'luxe' | string;
export type ThemeMode = 'light' | 'dark' | 'system';
export type MenuColor = 'light' | 'dark' | 'gray' | 'gradient' | 'image';
export type TopbarColor = 'light' | 'dark' | 'gray' | 'gradient';
export type SidenavSize = 'default' | 'condensed' | 'compact' | 'on-hover' | 'on-hover-active' | 'offcanvas';
export type LayoutWidth = 'fluid' | 'boxed';
export type LayoutPosition = 'fixed' | 'scrollable';
export type Direction = 'ltr' | 'rtl';

export interface ThemeConfig {
  skin: string;
  theme: ThemeMode;
  menuColor: MenuColor;
  topbarColor: TopbarColor;
  sidenavSize: SidenavSize;
  layoutWidth: LayoutWidth;
  position: LayoutPosition;
  dir: Direction;
  sidenavUser: boolean;
  isSidebarOpenMobile: boolean;
  isCustomizerOpen: boolean;
}
