import React, { useEffect } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { useTheme } from '../../context/ThemeContext';
import type { SidenavSize, MenuColor, TopbarColor, LayoutWidth, LayoutPosition } from '../../types/theme';

interface Props {
  title: string;
  category?: string;
  attrType?: 'layout' | 'layoutWidth' | 'layoutPosition' | 'sidenavSize' | 'menuColor' | 'topbarColor' | 'menuImage';
  attrValue?: string;
}

export const LayoutVariantPage: React.FC<Props> = ({ 
  title, 
  category = 'Layouts',
  attrType,
  attrValue 
}) => {
  const { 
    setLayoutWidth, 
    setPosition, 
    setSidenavSize, 
    setMenuColor, 
    setTopbarColor 
  } = useTheme();

  useEffect(() => {
    if (attrType === 'layoutWidth' && (attrValue === 'fluid' || attrValue === 'boxed')) {
      setLayoutWidth(attrValue as LayoutWidth);
    } else if (attrType === 'layoutPosition' && (attrValue === 'fixed' || attrValue === 'scrollable')) {
      setPosition(attrValue as LayoutPosition);
    } else if (attrType === 'sidenavSize' && (attrValue === 'default' || attrValue === 'compact' || attrValue === 'condensed' || attrValue === 'on-hover' || attrValue === 'offcanvas')) {
      setSidenavSize(attrValue as SidenavSize);
    } else if (attrType === 'menuColor' && (attrValue === 'light' || attrValue === 'dark' || attrValue === 'gray' || attrValue === 'gradient')) {
      setMenuColor(attrValue as MenuColor);
    } else if (attrType === 'topbarColor' && (attrValue === 'light' || attrValue === 'dark' || attrValue === 'gray' || attrValue === 'gradient')) {
      setTopbarColor(attrValue as TopbarColor);
    }

    return () => {
      setSidenavSize('default');
      setLayoutWidth('fluid');
      setPosition('fixed');
    };
  }, [attrType, attrValue, setLayoutWidth, setPosition, setSidenavSize, setMenuColor, setTopbarColor]);

  return (
    <div>
      <PageHeader title={title} category={category} />

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header border-bottom justify-content-between d-flex align-items-center">
              <h5 className="card-title mb-0">{title} Layout Overview</h5>
              <span className="badge bg-primary-subtle text-primary">Active Variant</span>
            </div>
            <div className="card-body">
              <div className="p-4 border rounded bg-light-subtle text-center mb-4">
                <span className="avatar-lg bg-primary-subtle text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: 64, height: 64 }}>
                  <i className="ti ti-layout-grid fs-36"></i>
                </span>
                <h4 className="fw-bold mb-1">{title} Configuration Active</h4>
                <p className="text-muted fs-xs max-w-md mx-auto mb-0" style={{ maxWidth: 540 }}>
                  This page demonstrates the <strong>{title}</strong> mode. All theme tokens, offsets, header heights, and responsive media queries adapt dynamically.
                </p>
              </div>

              <div className="row g-3 text-center">
                <div className="col-md-4">
                  <div className="p-3 border rounded">
                    <i className="ti ti-palette fs-24 text-primary mb-2 d-block"></i>
                    <h6 className="fw-bold fs-xs mb-1">Color Palette Cascade</h6>
                    <span className="text-muted fs-11">Works seamlessly with all 25 theme skins.</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-3 border rounded">
                    <i className="ti ti-moon-stars fs-24 text-info mb-2 d-block"></i>
                    <h6 className="fw-bold fs-xs mb-1">Dark Mode Ready</h6>
                    <span className="text-muted fs-11">Instant zero-flicker background and border inversion.</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-3 border rounded">
                    <i className="ti ti-device-mobile fs-24 text-success mb-2 d-block"></i>
                    <h6 className="fw-bold fs-xs mb-1">Full Responsiveness</h6>
                    <span className="text-muted fs-11">Automatic offcanvas drawer fallback on mobile viewports.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
