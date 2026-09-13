import React from 'react';
import SimpleBar from 'simplebar-react';
import { useTheme } from '../../context/ThemeContext';
import type { SkinType, ThemeMode, TopbarColor, MenuColor, SidenavSize, LayoutWidth, LayoutPosition, Direction } from '../../types/theme';

export const ThemeCustomizer: React.FC = () => {
  const { 
    isCustomizerOpen, 
    toggleCustomizer, 
    skin, 
    setSkin, 
    theme, 
    setTheme, 
    topbarColor, 
    setTopbarColor, 
    menuColor, 
    setMenuColor, 
    sidenavSize, 
    setSidenavSize, 
    layoutWidth, 
    setLayoutWidth, 
    position, 
    setPosition, 
    dir, 
    setDirection, 
    sidenavUser, 
    setSidenavUser, 
    resetConfig 
  } = useTheme();

  const skinsList: { key: SkinType; label: string }[] = [
    { key: 'default', label: 'Default' },
    { key: 'minimal', label: 'Minimal' },
    { key: 'modern', label: 'Modern' },
    { key: 'material', label: 'Material' },
    { key: 'saas', label: 'SaaS' },
    { key: 'flat', label: 'Flat' },
    { key: 'galaxy', label: 'Galaxy' },
    { key: 'luxe', label: 'Luxe' },
    { key: 'retro', label: 'Retro' },
    { key: 'neon', label: 'Neon' },
    { key: 'pixel', label: 'Pixel' },
    { key: 'soft', label: 'Soft' },
    { key: 'mono', label: 'Mono' },
    { key: 'prism', label: 'Prism' },
    { key: 'nova', label: 'Nova' },
    { key: 'zen', label: 'Zen' },
    { key: 'elegant', label: 'Elegant' },
    { key: 'vivid', label: 'Vivid' },
    { key: 'aurora', label: 'Aurora' },
    { key: 'crystal', label: 'Crystal' },
    { key: 'matrix', label: 'Matrix' },
    { key: 'orbit', label: 'Orbit' },
    { key: 'neo', label: 'Neo' },
    { key: 'silver', label: 'Silver' },
    { key: 'xenon', label: 'Xenon' }
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`offcanvas-backdrop fade ${isCustomizerOpen ? 'show' : ''}`} 
        style={{ 
          zIndex: 1045, 
          pointerEvents: isCustomizerOpen ? 'auto' : 'none',
          visibility: isCustomizerOpen ? 'visible' : 'hidden',
          transition: 'all 0.3s ease-in-out'
        }} 
        onClick={toggleCustomizer}
      />

      {/* Offcanvas Customizer Panel */}
      <div 
        className={`offcanvas offcanvas-end ${isCustomizerOpen ? 'show' : ''}`} 
        tabIndex={-1} 
        id="theme-customizer"
        style={{ 
          visibility: isCustomizerOpen ? 'visible' : 'hidden', 
          transform: isCustomizerOpen ? 'none' : 'translateX(100%)',
          zIndex: 1050, 
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.35s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.35s ease'
        }}
      >
        <div className="offcanvas-header gap-2 border-bottom py-3">
          <h5 className="offcanvas-title text-uppercase fw-semibold" id="ThemeCustomizerLabel">Admin Customizer</h5>
          <button type="button" className="btn-close" onClick={toggleCustomizer} aria-label="Close"></button>
        </div>

        <SimpleBar className="offcanvas-body theme-customizer-bar p-0 h-100">
          {/* 1. Select Theme (25 Skins) */}
          <div id="skin" className="p-3 border-bottom border-dashed">
            <h5 className="mb-3 fw-bold">Select Theme</h5>
            <div className="row g-3">
              {skinsList.map((item) => {
                const isChecked = (skin || 'default').toLowerCase() === item.key.toLowerCase();
                return (
                  <div className="col-6" key={item.key} id={`skin-${item.key}`}>
                    <div className="form-check card-radio">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="data-skin" 
                        id={`demo-skin-${item.key}`} 
                        value={item.key} 
                        checked={isChecked}
                        onChange={() => setSkin(item.key)}
                      />
                      <label className="form-check-label p-0 w-100" htmlFor={`demo-skin-${item.key}`}>
                        <img 
                          src={`/assets/images/layouts/skin-${item.key}.png`} 
                          alt="layout-img" 
                          className="img-fluid" 
                          onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                        />
                      </label>
                    </div>
                    <h5 className="text-center text-muted mt-2 mb-0">{item.label}</h5>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. Color Scheme */}
          <div id="theme" className="p-3 border-bottom border-dashed">
            <h5 className="mb-3 fw-bold">Color Scheme</h5>
            <div className="row g-3">
              {[
                { key: 'light', label: 'Light', img: 'theme-light.png' },
                { key: 'dark', label: 'Dark', img: 'theme-dark.png' },
                { key: 'system', label: 'System', img: 'theme-system.png' }
              ].map((c) => (
                <div className="col-4" key={c.key} id={`theme-${c.key}`}>
                  <div className="form-check card-radio">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="data-bs-theme" 
                      id={`layout-color-${c.key}`} 
                      value={c.key} 
                      checked={theme === c.key}
                      onChange={() => setTheme(c.key as ThemeMode)}
                    />
                    <label className="form-check-label p-0 w-100" htmlFor={`layout-color-${c.key}`}>
                      <img src={`/assets/images/layouts/${c.img}`} alt="layout-img" className="img-fluid" />
                    </label>
                  </div>
                  <h5 className="mb-0 text-center text-muted mt-2">{c.label}</h5>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Topbar Color */}
          <div id="topbar-color" className="p-3 border-bottom border-dashed">
            <h5 className="mb-3 fw-bold">Topbar Color</h5>
            <div className="row g-3">
              {[
                { key: 'light', label: 'Light', img: 'topbar-color-light.png' },
                { key: 'dark', label: 'Dark', img: 'topbar-color-dark.png' },
                { key: 'gray', label: 'Gray', img: 'topbar-color-gray.png' },
                { key: 'gradient', label: 'Gradient', img: 'topbar-color-gradient.png' }
              ].map((t) => (
                <div className="col-4" key={t.key} id={`topbar-color-${t.key}`}>
                  <div className="form-check card-radio">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="data-topbar-color" 
                      id={`topbar-color-${t.key}-input`} 
                      value={t.key} 
                      checked={topbarColor === t.key}
                      onChange={() => setTopbarColor(t.key as TopbarColor)}
                    />
                    <label className="form-check-label p-0 w-100" htmlFor={`topbar-color-${t.key}-input`}>
                      <img src={`/assets/images/layouts/${t.img}`} alt="layout-img" className="img-fluid" />
                    </label>
                  </div>
                  <h5 className="mb-0 text-center text-muted mt-2">{t.label}</h5>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Sidenav Color */}
          <div id="sidenav-color" className="p-3 border-bottom border-dashed">
            <h5 className="mb-3 fw-bold">Sidenav Color</h5>
            <div className="row g-3">
              {[
                { key: 'light', label: 'Light', img: 'sidenav-color-light.png' },
                { key: 'dark', label: 'Dark', img: 'sidenav-color-dark.png' },
                { key: 'gray', label: 'Gray', img: 'sidenav-color-gray.png' },
                { key: 'gradient', label: 'Gradient', img: 'sidenav-color-gradient.png' },
                { key: 'image', label: 'Image', img: 'sidenav-color-image.png' }
              ].map((m) => (
                <div className="col-4" key={m.key} id={`sidenav-color-${m.key}`}>
                  <div className="form-check sidebar-setting card-radio">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="data-menu-color" 
                      id={`sidenav-color-${m.key}-input`} 
                      value={m.key} 
                      checked={menuColor === m.key}
                      onChange={() => setMenuColor(m.key as MenuColor)}
                    />
                    <label className="form-check-label p-0 w-100" htmlFor={`sidenav-color-${m.key}-input`}>
                      <img src={`/assets/images/layouts/${m.img}`} alt="layout-img" className="img-fluid" />
                    </label>
                  </div>
                  <h5 className="mb-0 text-center text-muted mt-2">{m.label}</h5>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Sidebar Size */}
          <div id="sidenav-size" className="p-3 border-bottom border-dashed">
            <h5 className="mb-3 fw-bold">Sidebar Size</h5>
            <div className="row g-3">
              {[
                { key: 'default', label: 'Default', img: 'sidenav-size-default.png' },
                { key: 'compact', label: 'Compact', img: 'sidenav-size-compact.png' },
                { key: 'condensed', label: 'Condensed', img: 'sidenav-size-condensed.png' },
                { key: 'on-hover', label: 'On Hover', img: 'sidenav-size-on-hover.png' },
                { key: 'on-hover-active', label: 'On Hover - Show', img: 'sidenav-size-on-hover-active.png' },
                { key: 'offcanvas', label: 'Offcanvas', img: 'sidenav-size-offcanvas.png' }
              ].map((s) => (
                <div className="col-4" key={s.key} id={`sidenav-size-${s.key}`}>
                  <div className="form-check sidebar-setting card-radio">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="data-sidenav-size" 
                      id={`layout-sidenav-size-${s.key}`} 
                      value={s.key} 
                      checked={sidenavSize === s.key}
                      onChange={() => setSidenavSize(s.key as SidenavSize)}
                    />
                    <label className="form-check-label p-0 w-100" htmlFor={`layout-sidenav-size-${s.key}`}>
                      <img src={`/assets/images/layouts/${s.img}`} alt="layout-img" className="img-fluid" />
                    </label>
                  </div>
                  <h5 className="mb-0 text-center text-muted mt-2">{s.label}</h5>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Layout Width */}
          <div id="width" className="p-3 border-bottom border-dashed">
            <h5 className="mb-3 fw-bold">Layout Width</h5>
            <div className="row g-3">
              {[
                { key: 'fluid', label: 'Fluid', img: 'width-fluid.png' },
                { key: 'boxed', label: 'Boxed', img: 'width-boxed.png' }
              ].map((w) => (
                <div className="col-4" key={w.key} id={`width-${w.key}`}>
                  <div className="form-check sidebar-setting card-radio">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="data-layout-width" 
                      id={`layout-width-${w.key}`} 
                      value={w.key} 
                      checked={layoutWidth === w.key}
                      onChange={() => setLayoutWidth(w.key as LayoutWidth)}
                    />
                    <label className="form-check-label p-0 w-100" htmlFor={`layout-width-${w.key}`}>
                      <img src={`/assets/images/layouts/${w.img}`} alt="layout-img" className="img-fluid" />
                    </label>
                  </div>
                  <h5 className="mb-0 text-center text-muted mt-2">{w.label}</h5>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Layout Direction */}
          <div id="dir" className="p-3 border-bottom border-dashed">
            <h5 className="mb-3 fw-bold">Layout Direction</h5>
            <div className="row g-3">
              {[
                { key: 'ltr', label: 'LTR', img: 'dir-ltr.png' },
                { key: 'rtl', label: 'RTL', img: 'dir-rtl.png' }
              ].map((d) => (
                <div className="col-4" key={d.key} id={`dir-${d.key}`}>
                  <div className="form-check sidebar-setting card-radio">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="dir" 
                      id={`layout-dir-${d.key}`} 
                      value={d.key} 
                      checked={dir === d.key}
                      onChange={() => setDirection(d.key as Direction)}
                    />
                    <label className="form-check-label p-0 w-100" htmlFor={`layout-dir-${d.key}`}>
                      <img src={`/assets/images/layouts/${d.img}`} alt="layout-img" className="img-fluid" />
                    </label>
                  </div>
                  <h5 className="mb-0 text-center text-muted mt-2">{d.label}</h5>
                </div>
              ))}
            </div>
          </div>

          {/* 8. Layout Position */}
          <div id="position" className="p-3 border-bottom border-dashed">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="fw-bold mb-0">Layout Position</h5>
              <div className="d-flex gap-1">
                <div id="position-fixed">
                  <input 
                    type="radio" 
                    className="btn-check" 
                    name="data-layout-position" 
                    id="layout-position-fixed" 
                    value="fixed" 
                    checked={position === 'fixed'}
                    onChange={() => setPosition('fixed' as LayoutPosition)}
                  />
                  <label className="btn btn-sm btn-soft-warning w-sm" htmlFor="layout-position-fixed">Fixed</label>
                </div>
                <div id="position-scrollable">
                  <input 
                    type="radio" 
                    className="btn-check" 
                    name="data-layout-position" 
                    id="layout-position-scrollable" 
                    value="scrollable" 
                    checked={position === 'scrollable'}
                    onChange={() => setPosition('scrollable' as LayoutPosition)}
                  />
                  <label className="btn btn-sm btn-soft-warning w-sm ms-0" htmlFor="layout-position-scrollable">Scrollable</label>
                </div>
              </div>
            </div>
          </div>

          {/* 9. Sidebar User Info Toggle */}
          <div id="sidenav-user" className="p-3">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">
                <label className="fw-bold m-0" htmlFor="sidebaruser-check">Sidebar User Info</label>
              </h5>
              <div className="form-check form-switch fs-lg">
                <input 
                  type="checkbox" 
                  className="form-check-input" 
                  name="sidebar-user" 
                  id="sidebaruser-check" 
                  checked={sidenavUser}
                  onChange={(e) => setSidenavUser(e.target.checked)}
                />
              </div>
            </div>
          </div>
        </SimpleBar>

        {/* Action Footer */}
        <div className="offcanvas-footer border-top p-3 text-center">
          <div className="row justify-content-end">
            <div className="col-6">
              <a href="#" className="btn btn-success fw-semibold py-2 w-100" target="_blank">
                <i className="ti ti-basket me-2 fs-md"></i> Buy Now
              </a>
            </div>
            <div className="col-6">
              <button type="button" className="btn btn-danger fw-semibold py-2 w-100" id="reset-layout" onClick={resetConfig}>
                <i className="ti ti-refresh me-2 fs-md"></i> Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
