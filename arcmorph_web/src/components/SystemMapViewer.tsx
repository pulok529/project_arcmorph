import React from 'react';
import { Network, FileCode, Layers, CheckSquare } from 'lucide-react';

interface SystemMapViewerProps {
  pages: any[];
  chosenTheme: string;
}

export const SystemMapViewer: React.FC<SystemMapViewerProps> = ({ pages, chosenTheme }) => {
  return (
    <div className="card shadow-sm border-0 rounded-4 mb-4">
      
      {/* Header */}
      <div className="card-header bg-transparent border-bottom p-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div className="d-flex align-items-center gap-3">
          <div className="avatar-md bg-info-subtle text-info rounded-circle d-flex align-items-center justify-content-center">
            <Network size={24} />
          </div>
          <div>
            <h5 className="fw-bold mb-0 text-dark">System Topology & Page-by-Page UI Anatomy</h5>
            <p className="text-muted fs-13 mb-0">
              Catalog of all reverse-engineered pages mapped directly to <strong className="text-primary">paces/3_react_template</strong> (Theme: <span className="badge bg-primary-subtle text-primary font-monospace">{chosenTheme}</span>)
            </p>
          </div>
        </div>

        <span className="badge bg-primary text-white rounded-pill font-monospace fs-12 px-3 py-1.5">
          {pages.length} Pages Deconstructed
        </span>
      </div>

      {/* Pages Grid */}
      <div className="card-body p-4">
        {pages.length === 0 ? (
          <p className="text-muted text-center py-4 mb-0">No pages cataloged yet.</p>
        ) : (
          <div className="row g-3">
            {pages.map((p, idx) => (
              <div key={idx} className="col-md-6 col-xl-4">
                <div className="card border rounded-3 h-100 shadow-none hover-border-primary transition">
                  <div className="card-body p-3">
                    
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div className="d-flex align-items-center gap-2 text-truncate">
                        <FileCode size={16} className="text-primary" />
                        <span className="font-monospace fw-bold fs-13 text-dark text-truncate" title={p.fileName}>
                          {p.fileName}
                        </span>
                      </div>
                      <span className="badge bg-success-subtle text-success rounded-pill font-monospace fs-10">
                        ✓ Mapped
                      </span>
                    </div>

                    {/* Stats Grid */}
                    <div className="row g-1.5 my-2">
                      <div className="col-6">
                        <div className="p-2 bg-light rounded border text-center">
                          <small className="text-muted d-block fs-10">Inputs</small>
                          <strong className="fs-12 text-dark">{p.summary?.totalInputs || 0} fields</strong>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-2 bg-light rounded border text-center">
                          <small className="text-muted d-block fs-10">Buttons</small>
                          <strong className="fs-12 text-dark">{p.summary?.totalButtons || 0} actions</strong>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-2 bg-light rounded border text-center">
                          <small className="text-muted d-block fs-10">Grids / Tables</small>
                          <strong className="fs-12 text-dark">{p.summary?.totalGrids || 0} grids</strong>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-2 bg-light rounded border text-center">
                          <small className="text-muted d-block fs-10">Dropdowns</small>
                          <strong className="fs-12 text-dark">{p.summary?.totalDropdowns || 0} selects</strong>
                        </div>
                      </div>
                    </div>

                    {/* Target Component */}
                    <div className="pt-2 border-top d-flex align-items-center justify-content-between">
                      <span className="text-muted fs-11">React Component:</span>
                      <code className="text-primary font-monospace fs-11">{p.targetComponent || 'PageTemplate.tsx'}</code>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
