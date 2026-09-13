import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const IconsRemixPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const icons: string[] = [
    'home', 'user', 'settings', 'notification', 'search', 'mail', 'lock', 'eye', 'delete-bin',
    'edit', 'add', 'subtract', 'check', 'close', 'arrow-right', 'arrow-left', 'arrow-up', 'arrow-down',
    'arrow-drop-right', 'arrow-drop-left', 'arrow-drop-up', 'arrow-drop-down', 'calendar', 'time',
    'camera', 'folder', 'file', 'file-text', 'download', 'upload', 'cloud', 'heart', 'star',
    'message', 'phone', 'map-pin', 'bar-chart', 'pie-chart', 'line-chart', 'bank-card',
    'shopping-cart', 'database', 'server', 'cpu', 'shield', 'key', 'refresh', 'share', 'logout-box'
  ];

  const filteredIcons = icons.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCopy = (iconName: string) => {
    const snippet = `<i className="ri-${iconName}-line"></i>`;
    try {
      navigator.clipboard.writeText(snippet);
    } catch (e) {}
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  return (
    <div>
      <PageHeader title="Remix Icons" category="Icons" />

      <div className="row">
        <div className="col-12">
          <Card title="Remix Icons Database" badge={<span className="badge badge-soft-primary fs-xs">{filteredIcons.length} Icons</span>}>
            <div className="row mb-4">
              <div className="col-md-6 col-lg-4">
                <div className="input-group">
                  <span className="input-group-text bg-light border-end-0">
                    <i className="ti ti-search text-muted"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control border-start-0"
                    placeholder="Search Remix icons (e.g. user, home, arrow)..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {searchTerm && (
                    <button className="btn btn-outline-secondary" type="button" onClick={() => setSearchTerm('')}>
                      <i className="ti ti-x"></i>
                    </button>
                  )}
                </div>
              </div>
              <div className="col-md-6 col-lg-8 d-flex align-items-center justify-content-md-end mt-2 mt-md-0">
                <span className="text-muted fs-sm">
                  Click any icon to copy its React JSX tag to your clipboard.
                </span>
              </div>
            </div>

            {copiedIcon && (
              <div className="alert alert-success d-flex align-items-center gap-2 mb-4 py-2" role="alert">
                <i className="ti ti-check fs-18"></i>
                <div>
                  Copied <strong>&lt;i className="ri-{copiedIcon}-line"&gt;&lt;/i&gt;</strong> to clipboard!
                </div>
              </div>
            )}

            <div className="row g-3">
              {filteredIcons.map((iconName) => (
                <div key={iconName} className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div
                    className="p-3 border rounded text-center h-100 d-flex flex-column align-items-center justify-content-center cursor-pointer transition-all hover-shadow bg-light-subtle"
                    onClick={() => handleCopy(iconName)}
                    style={{ cursor: 'pointer' }}
                    title="Click to copy JSX"
                  >
                    <i className={`ri-${iconName}-line fs-28 mb-2 text-primary`}></i>
                    <span className="fs-xs text-muted text-truncate w-100 text-center">{iconName}</span>
                  </div>
                </div>
              ))}
              {filteredIcons.length === 0 && (
                <div className="col-12 text-center py-5">
                  <i className="ti ti-search-off fs-40 text-muted mb-2"></i>
                  <p className="text-muted mb-0">No icons found matching &quot;{searchTerm}&quot;.</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
