import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const Error408Page: React.FC = () => {
  return (
    <div>
      <PageHeader title="408 Request Timeout" category="Error Pages" />

      <div className="row">
        <div className="col-lg-8">
          <Card title="408 Request Timeout Overview" badge={<span className="badge badge-soft-primary fs-xs">Active</span>}>
            <div className="d-flex align-items-center gap-3 p-3 bg-light rounded mb-4">
              <span className="avatar-md bg-primary text-white rounded d-flex align-items-center justify-content-center" style={{ width: 48, height: 48 }}>
                <i className="ti-clock-stop fs-24"></i>
              </span>
              <div>
                <h5 className="mb-1 fw-bold">408 Request Timeout Component</h5>
                <p className="text-muted mb-0 fs-sm">The server timed out waiting for the browser request.</p>
              </div>
            </div>

            <div className="p-4 border rounded">
              <h6 className="fw-semibold mb-3">Live Interactive Demonstration:</h6>
              <div className="d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-primary"><i className="ti ti-check me-1"></i> Primary Action</button>
                <button type="button" className="btn btn-outline-secondary">Secondary Action</button>
                <button type="button" className="btn btn-soft-success">Status Trigger</button>
              </div>
            </div>
          </Card>
        </div>

        <div className="col-lg-4">
          <Card title="Quick Info">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                <span>Category</span>
                <span className="badge badge-soft-info">Error Pages</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                <span>Theme Sync</span>
                <span className="badge badge-soft-success">Automatic</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                <span>Responsive</span>
                <span className="badge badge-soft-primary">Mobile & Desktop</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};
