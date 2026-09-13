import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';

interface Props {
  title: string;
  type: string;
}

export const BaseUIPage: React.FC<Props> = ({ title, type }) => {
  const [progressVal, setProgressVal] = useState(65);

  return (
    <div>
      <PageHeader title={title} category="Base UI" />

      <div className="row">
        {/* Main Component Showcase Card */}
        <div className="col-12">
          <div className="card">
            <div className="card-header border-bottom justify-content-between d-flex align-items-center">
              <h5 className="card-title mb-0">{title} Interactive Examples</h5>
              <span className="badge bg-primary-subtle text-primary fw-semibold">Standard Bootstrap 5.3</span>
            </div>
            <div className="card-body">
              {type === 'buttons' && (
                <div>
                  <h6 className="fs-xs fw-bold text-muted mb-2">Default Buttons</h6>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <button type="button" className="btn btn-primary">Primary</button>
                    <button type="button" className="btn btn-secondary">Secondary</button>
                    <button type="button" className="btn btn-success">Success</button>
                    <button type="button" className="btn btn-danger">Danger</button>
                    <button type="button" className="btn btn-warning">Warning</button>
                    <button type="button" className="btn btn-info">Info</button>
                    <button type="button" className="btn btn-dark">Dark</button>
                    <button type="button" className="btn btn-light">Light</button>
                  </div>

                  <h6 className="fs-xs fw-bold text-muted mb-2">Outline & Rounded Buttons</h6>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <button type="button" className="btn btn-outline-primary rounded-pill">Outline Primary</button>
                    <button type="button" className="btn btn-outline-success rounded-pill">Outline Success</button>
                    <button type="button" className="btn btn-outline-danger rounded-pill">Outline Danger</button>
                    <button type="button" className="btn btn-outline-info rounded-pill">Outline Info</button>
                  </div>
                </div>
              )}

              {type === 'badges' && (
                <div>
                  <h6 className="fs-xs fw-bold text-muted mb-2">Default Badges</h6>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-primary">Primary</span>
                    <span className="badge bg-secondary">Secondary</span>
                    <span className="badge bg-success">Success</span>
                    <span className="badge bg-danger">Danger</span>
                    <span className="badge bg-warning">Warning</span>
                    <span className="badge bg-info">Info</span>
                  </div>

                  <h6 className="fs-xs fw-bold text-muted mb-2">Soft & Pill Badges</h6>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-primary-subtle text-primary rounded-pill">Primary Pill</span>
                    <span className="badge bg-success-subtle text-success rounded-pill">Success Pill</span>
                    <span className="badge bg-danger-subtle text-danger rounded-pill">Danger Pill</span>
                    <span className="badge bg-warning-subtle text-warning rounded-pill">Warning Pill</span>
                  </div>
                </div>
              )}

              {type === 'alerts' && (
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="alert alert-primary mb-0" role="alert">
                      <strong>Primary!</strong> A simple primary alert with interactive link.
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="alert alert-success mb-0" role="alert">
                      <strong>Success!</strong> All records have been successfully synchronized.
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="alert alert-danger mb-0" role="alert">
                      <strong>Danger!</strong> An unexpected authentication issue was detected.
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="alert alert-warning mb-0" role="alert">
                      <strong>Warning!</strong> Your storage usage is approaching 90% capacity.
                    </div>
                  </div>
                </div>
              )}

              {type === 'progress' && (
                <div>
                  <h6 className="fs-xs fw-bold text-muted mb-2">Dynamic Progress Bars</h6>
                  <div className="progress mb-3" style={{ height: 10 }}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${progressVal}%` }}></div>
                  </div>
                  <div className="progress mb-3" style={{ height: 14 }}>
                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '45%' }}>45%</div>
                  </div>
                  <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-primary" onClick={() => setProgressVal(Math.min(100, progressVal + 10))}>+10%</button>
                    <button className="btn btn-sm btn-light" onClick={() => setProgressVal(Math.max(0, progressVal - 10))}>-10%</button>
                  </div>
                </div>
              )}

              {type === 'spinners' && (
                <div className="d-flex flex-wrap align-items-center gap-3">
                  <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
                  <div className="spinner-border text-secondary" role="status"><span className="visually-hidden">Loading...</span></div>
                  <div className="spinner-border text-success" role="status"><span className="visually-hidden">Loading...</span></div>
                  <div className="spinner-border text-danger" role="status"><span className="visually-hidden">Loading...</span></div>
                  <div className="spinner-grow text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
                  <div className="spinner-grow text-success" role="status"><span className="visually-hidden">Loading...</span></div>
                </div>
              )}

              {type === 'breadcrumb' && (
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#home">Home</a></li>
                    <li className="breadcrumb-item"><a href="#library">Library</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                  </ol>
                </nav>
              )}

              {type === 'pagination' && (
                <nav aria-label="Page navigation">
                  <ul className="pagination mb-0">
                    <li className="page-item disabled"><a className="page-link" href="#prev">Previous</a></li>
                    <li className="page-item active"><a className="page-link" href="#1">1</a></li>
                    <li className="page-item"><a className="page-link" href="#2">2</a></li>
                    <li className="page-item"><a className="page-link" href="#3">3</a></li>
                    <li className="page-item"><a className="page-link" href="#next">Next</a></li>
                  </ul>
                </nav>
              )}

              {/* Universal Component Sandbox */}
              {['buttons', 'badges', 'alerts', 'progress', 'spinners', 'breadcrumb', 'pagination'].indexOf(type) === -1 && (
                <div>
                  <div className="p-4 border rounded bg-light-subtle text-center">
                    <span className="avatar-lg bg-primary-subtle text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: 64, height: 64 }}>
                      <i className="ti ti-components fs-36"></i>
                    </span>
                    <h5 className="fw-bold mb-1">{title} Active</h5>
                    <p className="text-muted fs-xs max-w-md mx-auto mb-3" style={{ maxWidth: 500 }}>
                      Complete responsive Bootstrap 5.3 {title.toLowerCase()} suite with full dark mode tokens and instant skin color adaptability.
                    </p>
                    <div className="d-flex justify-content-center gap-2">
                      <button className="btn btn-primary btn-sm fw-semibold">Interactive Demo</button>
                      <button className="btn btn-light btn-sm fw-semibold">View Source</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
