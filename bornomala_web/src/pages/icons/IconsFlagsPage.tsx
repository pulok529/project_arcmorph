import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const IconsFlagsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const flags: { code: string; name: string }[] = [
    { code: 'us', name: 'United States' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'de', name: 'Germany' },
    { code: 'fr', name: 'France' },
    { code: 'it', name: 'Italy' },
    { code: 'es', name: 'Spain' },
    { code: 'ca', name: 'Canada' },
    { code: 'au', name: 'Australia' },
    { code: 'jp', name: 'Japan' },
    { code: 'cn', name: 'China' },
    { code: 'in', name: 'India' },
    { code: 'br', name: 'Brazil' },
    { code: 'ru', name: 'Russia' },
    { code: 'za', name: 'South Africa' },
    { code: 'mx', name: 'Mexico' },
    { code: 'nl', name: 'Netherlands' },
    { code: 'ch', name: 'Switzerland' },
    { code: 'se', name: 'Sweden' },
    { code: 'no', name: 'Norway' },
    { code: 'ae', name: 'United Arab Emirates' },
    { code: 'sg', name: 'Singapore' },
    { code: 'kr', name: 'South Korea' },
    { code: 'sa', name: 'Saudi Arabia' },
    { code: 'tr', name: 'Turkey' }
  ];

  const filteredFlags = flags.filter((f) =>
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) || f.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCopy = (code: string) => {
    const snippet = `<iconify-icon icon="circle-flags:${code}"></iconify-icon>`;
    try {
      navigator.clipboard.writeText(snippet);
    } catch (e) {}
    setCopiedIcon(code);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  return (
    <div>
      <PageHeader title="Country Flags" category="Icons" />

      <div className="row">
        <div className="col-12">
          <Card title="Country Flags Database" badge={<span className="badge badge-soft-primary fs-xs">{filteredFlags.length} Flags</span>}>
            <div className="row mb-4">
              <div className="col-md-6 col-lg-4">
                <div className="input-group">
                  <span className="input-group-text bg-light border-end-0">
                    <i className="ti ti-search text-muted"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control border-start-0"
                    placeholder="Search Country flags (e.g. US, Germany, Japan)..."
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
                  Click any flag to copy its React JSX tag to your clipboard.
                </span>
              </div>
            </div>

            {copiedIcon && (
              <div className="alert alert-success d-flex align-items-center gap-2 mb-4 py-2" role="alert">
                <i className="ti ti-check fs-18"></i>
                <div>
                  Copied <strong>&lt;iconify-icon icon="circle-flags:{copiedIcon}"&gt;&lt;/iconify-icon&gt;</strong> to clipboard!
                </div>
              </div>
            )}

            <div className="row g-3">
              {filteredFlags.map((flag) => (
                <div key={flag.code} className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div
                    className="p-3 border rounded text-center h-100 d-flex flex-column align-items-center justify-content-center cursor-pointer transition-all hover-shadow bg-light-subtle"
                    onClick={() => handleCopy(flag.code)}
                    style={{ cursor: 'pointer' }}
                    title="Click to copy JSX"
                  >
                    {React.createElement('iconify-icon', {
                      icon: `circle-flags:${flag.code}`,
                      width: '36',
                      height: '36',
                      class: 'mb-2 shadow-sm rounded-circle'
                    })}
                    <span className="fs-xs text-muted text-truncate w-100 text-center">{flag.name}</span>
                    <small className="fs-xs text-uppercase opacity-50">{flag.code}</small>
                  </div>
                </div>
              ))}
              {filteredFlags.length === 0 && (
                <div className="col-12 text-center py-5">
                  <i className="ti ti-search-off fs-40 text-muted mb-2"></i>
                  <p className="text-muted mb-0">No flags found matching &quot;{searchTerm}&quot;.</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
