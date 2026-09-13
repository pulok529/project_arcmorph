import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const Error400Page: React.FC = () => {
  return (
    <div>
      <PageHeader title="Error 400" category="Error Pages" />

      <div className="row">
        <div className="col-12">
          <Card title="Error 400 Showcase" badge={<span className="badge badge-soft-primary fs-xs">Active</span>}>
            <div className="p-3 bg-light rounded mb-4 d-flex align-items-center gap-3">
              <span className="avatar-md bg-primary text-white rounded d-flex align-items-center justify-content-center" style={{ width: 48, height: 48 }}>
                <i className="ti ti-layers-intersect fs-24"></i>
              </span>
              <div>
                <h5 className="mb-1 fw-bold">Error 400</h5>
                <p className="text-muted mb-0 fs-sm">Enterprise UI module for Error Pages &mdash; clean responsive React component.</p>
              </div>
            </div>

            <div className="p-4 border rounded bg-white">
              <div className="d-flex flex-wrap gap-2 mb-3">
                <button type="button" className="btn btn-primary"><i className="ti ti-check me-1"></i> Interactive Action</button>
                <button type="button" className="btn btn-outline-secondary">Configure Options</button>
                <button type="button" className="btn btn-soft-info">Export Data</button>
              </div>
              <p className="text-muted fs-sm mb-0">This module is fully connected to the active Theme Customizer state, responsive layout engine, and zero-defect quality standards.</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
